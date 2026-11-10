#!/bin/bash
# 楽器買取びより 週次 Yahoo中央値更新 + 自動デプロイ + Discord通知
#
# 仕組み（peatbid 週次と同一設計）:
#   - Yahoo Auctions 過去180日落札中央値を取得（20モデル）
#   - data/yahoo-medians-gakki.json + data/price-history-gakki/*.json 更新
#   - ピアノ5モデル / 異常値モデルは insufficient フラグで自動非表示
#   - Next.js ビルド → out/ を deploy リポジトリに rsync → push
#   - 成功/失敗 を Discord に通知
#
# 環境変数:
#   DISCORD_GAKKI_WEBHOOK — Discord Webhook URL（LaunchAgent plist で設定）
#
# 失敗時は trap で Discord 通知して exit 1

SRC="/Users/takashi.hasegawa/projects/gakki-kaitori-biyori"
DEPLOY="/Users/takashi.hasegawa/projects/gakki-kaitori-biyori-deploy"
RUN_LOG="/tmp/gakki-weekly.log"
# 全文ログ（2026-11-10 追加）: 11/9 のビルド失敗は tail -5 しか残らず原因のエラーコードが取れなかった。
# 各工程の出力を全文、実行ごとのファイルに残す（/tmp は再起動で消えるので ~/Library/Logs。
# SRC 内に置くと [4/4] の git add -A でコミットされるので置かない）。古いものは 90 日で消す。
LOG_DIR="$HOME/Library/Logs/gakki-weekly"
RUN_STAMP="$(date '+%Y%m%d-%H%M%S')"
mkdir -p "$LOG_DIR"
FULL_LOG="$LOG_DIR/$RUN_STAMP.log"
find "$LOG_DIR" -name "*.log" -type f -mtime +90 -delete 2>/dev/null || true
# ビルド失敗時の再試行（Fonts 等の一時障害対策）: 1回だけ、この秒数待ってからやり直す
BUILD_RETRY_WAIT="${BUILD_RETRY_WAIT:-180}"

export PATH=/opt/homebrew/bin:/usr/bin:/usr/local/bin:$PATH

# ===== Discord notification helper =====
notify_discord() {
  local content="$1"
  if [ -z "$DISCORD_GAKKI_WEBHOOK" ]; then
    local discord_keys
    discord_keys=$(env | cut -d= -f1 | grep -i 'discord\|webhook' | tr '\n' ',' || true)
    echo "[$(date '+%H:%M:%S')] ⚠️  DISCORD_GAKKI_WEBHOOK 未設定、通知スキップ (env discord-related: ${discord_keys:-none})" >&2
    return 0
  fi
  local payload
  payload=$(/opt/homebrew/bin/python3 -c "
import json, sys
text = sys.stdin.read()
if len(text) > 1900: text = text[:1900] + '...(truncated)'
print(json.dumps({'content': text}, ensure_ascii=False))
" <<< "$content")
  /usr/bin/curl -s -X POST -H "Content-Type: application/json" \
    -d "$payload" "$DISCORD_GAKKI_WEBHOOK" > /dev/null || true
}

# ===== rm -rf retry (APFS race condition workaround) =====
safe_rm_rf() {
  local target="$1"
  for attempt in 1 2 3; do
    if rm -rf "$target" 2>/dev/null; then
      return 0
    fi
    sleep 2
  done
  rm -rf "$target" 2>&1 || true
  if [ -d "$target" ]; then
    echo "[$(date '+%H:%M:%S')] ⚠️  $target removal partial; continuing" >&2
  fi
  return 0
}

# ===== Error trap =====
RUN_ID="$(date '+%Y-%m-%d %H:%M:%S')"
START_EPOCH=$(date +%s)
trap 'on_error $LINENO' ERR
on_error() {
  local lineno=$1
  local elapsed=$(( $(date +%s) - START_EPOCH ))
  local last_lines
  last_lines=$(tail -25 "$RUN_LOG" 2>/dev/null | tail -c 1500)
  notify_discord "❌ **楽器買取びより 週次更新 失敗** ($(date '+%Y-%m-%d %H:%M'))
- 実行ID: $RUN_ID
- 失敗箇所: scripts/weekly-yahoo-update.sh 行$lineno
- 経過時間: ${elapsed}s
- ログ末尾:
\`\`\`
${last_lines}
\`\`\`
ログ: $RUN_LOG / 全文: $FULL_LOG"
  exit 1
}

# ===== Next.js ビルド（1回分） =====
# 出力は全文を $LOG_DIR/<RUN_STAMP>-build-<回>.log と $FULL_LOG に残し、画面には末尾だけ出す
run_build() {
  local try_no="$1"  # safe_rm_rf がループで attempt を書き換えるので別名
  local blog="$LOG_DIR/${RUN_STAMP}-build-${try_no}.log"
  local rc=0
  safe_rm_rf .next
  npx next build > "$blog" 2>&1 && rc=0 || rc=$?
  cat "$blog" >> "$FULL_LOG"
  if [ "$rc" -eq 0 ]; then
    tail -5 "$blog"
    return 0
  fi
  echo "[$(date '+%H:%M:%S')] ⚠️  ビルド失敗（${try_no}回目・exit $rc）全文: $blog"
  grep -n -i -E "error|failed|ETIMEDOUT|ENOTFOUND|ECONNRESET|EAI_AGAIN" "$blog" | head -20 || true
  tail -15 "$blog"
  return 1
}

set -e
cd "$SRC"

echo "[$RUN_ID] === 楽器買取びより 週次更新 開始 ===（全文ログ: $FULL_LOG）"
echo "[$RUN_ID] === 楽器買取びより 週次更新 開始 ===" >> "$FULL_LOG"

echo "[$(date '+%H:%M:%S')] 🔍 [1/4] Yahoo中央値取得（20モデル / 過去180日 / IQR外れ値除去 / 異常値自動 insufficient化）" | tee -a "$FULL_LOG"
set -o pipefail
/opt/homebrew/bin/python3 scripts/fetch-yahoo-medians-gakki.py 2>&1 | tee /tmp/gakki-fetch.log | tee -a "$FULL_LOG" | tail -5
set +o pipefail

echo "[$(date '+%H:%M:%S')] 📊 相場ランキング再生成（souba-ranking-gakki.json）" | tee -a "$FULL_LOG"
/opt/homebrew/bin/python3 scripts/generate-souba-ranking-gakki.py 2>&1 | tee -a "$FULL_LOG" | tail -2
echo "[$(date '+%H:%M:%S')] 📈 相場指数再生成（souba-index-gakki.json）" | tee -a "$FULL_LOG"
/opt/homebrew/bin/python3 scripts/generate-souba-index-gakki.py 2>&1 | tee -a "$FULL_LOG" | tail -2
/opt/homebrew/bin/python3 scripts/gen-gakki-widget.py 2>&1 | tee -a "$FULL_LOG" | tail -1
echo "[$(date '+%H:%M:%S')] 🗺️  sitemap再生成" | tee -a "$FULL_LOG"
node scripts/generate-sitemap.mjs 2>&1 | tee -a "$FULL_LOG" | tail -1

echo "[$(date '+%H:%M:%S')] 🏗️  [2/4] Next.js ビルド" | tee -a "$FULL_LOG"
# 失敗したら1回だけ待って再試行（11/9 04:04 の next/font Noto Sans JP 取得失敗のような一時障害対策）。
# 2回目も失敗したら ERR trap で Discord に失敗を通知して終了（deploy には何も出さない）
if ! run_build 1; then
  echo "[$(date '+%H:%M:%S')] 🔁 ${BUILD_RETRY_WAIT}秒待って再ビルド（2回目）" | tee -a "$FULL_LOG"
  sleep "$BUILD_RETRY_WAIT"
  run_build 2
  echo "[$(date '+%H:%M:%S')] ✅ 再ビルド成功（1回目は失敗・全文: $LOG_DIR/${RUN_STAMP}-build-1.log）" | tee -a "$FULL_LOG"
  BUILD_RETRIED=1
fi
# robots.txt 以外の .txt（__next*.txt・index.txt 等の RSC ペイロード）は deploy に入れない（CF 20k 対策・2026-11-02 index.txt 570本混入の再発防止）
find out -name "*.txt" -type f ! -path "out/robots.txt" -delete

# Scaled Content リント（warnモード）
LINT="$HOME/.openclaw/workspace/scaled-content-lint.py"
[ -f "$LINT" ] && /opt/homebrew/bin/python3 "$LINT" gakki "$SRC/out" --glob "articles/*/index.html" --min-unique 80 --dup 0.6 --top 8 2>&1 | tee -a "$FULL_LOG" | sed -n '1,3p' || true

echo "[$(date '+%H:%M:%S')] 📤 [3/4] deploy リポジトリへ rsync & push" | tee -a "$FULL_LOG"
rsync -a --delete --exclude=".git" --exclude="CNAME" --exclude="_not-found" "$SRC/out/" "$DEPLOY/"
cd "$DEPLOY"
git add -A
TIMESTAMP=$(date "+%Y-%m-%d")
git commit -m "Weekly Yahoo median update: $TIMESTAMP" --allow-empty 2>&1 | tee -a "$FULL_LOG" | tail -3
COMMIT_HASH=$(git rev-parse --short HEAD)
set -o pipefail
git push origin "$(git rev-parse HEAD):refs/heads/main" 2>&1 | tee -a "$FULL_LOG" | tail -3
set +o pipefail

echo "[$(date '+%H:%M:%S')] 📤 [4/4] SRCリポジトリもコミット & push" | tee -a "$FULL_LOG"
cd "$SRC"
git add -A
git commit -m "Weekly Yahoo median update (SRC sync): $TIMESTAMP" --allow-empty 2>&1 | tee -a "$FULL_LOG" | tail -3
SRC_COMMIT_HASH=$(git rev-parse --short HEAD)
set -o pipefail
git push origin "$(git rev-parse HEAD):refs/heads/main" 2>&1 | tee -a "$FULL_LOG" | tail -3
set +o pipefail

# ===== Summary =====
SUMMARY=$(/opt/homebrew/bin/python3 -c "
import json
from pathlib import Path
data = json.load(open('$SRC/data/yahoo-medians-gakki.json'))
ok = [s for s,r in data.items() if r.get('median') and not r.get('insufficient')]
insuf = [s for s,r in data.items() if r.get('insufficient')]
print(f'取得成功: {len(ok)}/{len(data)}')
print(f'データ非表示: {len(insuf)}（ピアノ系・異常値自動マーク含む）')
if insuf:
    print('  - ' + ', '.join(insuf))
")
ELAPSED=$(( $(date +%s) - START_EPOCH ))

echo "[$(date '+%H:%M:%S')] ✅ 完了 — 経過時間: ${ELAPSED}s" | tee -a "$FULL_LOG"
RETRY_NOTE=""
[ "${BUILD_RETRIED:-0}" = "1" ] && RETRY_NOTE="- ⚠️ ビルド1回目は失敗→${BUILD_RETRY_WAIT}秒後の再試行で成功（1回目の全文: $LOG_DIR/${RUN_STAMP}-build-1.log）"

notify_discord "✅ **楽器買取びより 週次更新 完了** ($(date '+%Y-%m-%d %H:%M'))
- 実行ID: $RUN_ID
- 経過時間: ${ELAPSED}s
- commit: \`$COMMIT_HASH\` (deploy) / \`$SRC_COMMIT_HASH\` (src)

${SUMMARY}

- 20モデル分の中央値再取得 ✓
- CF Pages 自動デプロイ進行中
- 確認: https://gakkikaitori-biyori.com/articles/yamaha-yas62-kaitori/
${RETRY_NOTE}
- 詳細ログ: $RUN_LOG / 全文: $FULL_LOG"

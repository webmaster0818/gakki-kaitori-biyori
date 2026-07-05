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
ログ全文: $RUN_LOG"
  exit 1
}

set -e
cd "$SRC"

echo "[$RUN_ID] === 楽器買取びより 週次更新 開始 ==="

echo "[$(date '+%H:%M:%S')] 🔍 [1/4] Yahoo中央値取得（20モデル / 過去180日 / IQR外れ値除去 / 異常値自動 insufficient化）"
set -o pipefail
/opt/homebrew/bin/python3 scripts/fetch-yahoo-medians-gakki.py 2>&1 | tee /tmp/gakki-fetch.log | tail -5
set +o pipefail

echo "[$(date '+%H:%M:%S')] 📊 相場ランキング再生成（souba-ranking-gakki.json）"
/opt/homebrew/bin/python3 scripts/generate-souba-ranking-gakki.py 2>&1 | tail -2
/opt/homebrew/bin/python3 scripts/gen-gakki-widget.py 2>&1 | tail -1
echo "[$(date '+%H:%M:%S')] 🗺️  sitemap再生成"
node scripts/generate-sitemap.mjs 2>&1 | tail -1

echo "[$(date '+%H:%M:%S')] 🏗️  [2/4] Next.js ビルド"
safe_rm_rf .next
set -o pipefail
npx next build 2>&1 | tail -5
set +o pipefail
find out -name "__next*.txt" -type f -delete

# Scaled Content リント（warnモード）
LINT="$HOME/.openclaw/workspace/scaled-content-lint.py"
[ -f "$LINT" ] && /opt/homebrew/bin/python3 "$LINT" gakki "$SRC/out" --glob "articles/*/index.html" --min-unique 80 --dup 0.6 --top 8 2>&1 | sed -n '1,3p' || true

echo "[$(date '+%H:%M:%S')] 📤 [3/4] deploy リポジトリへ rsync & push"
rsync -a --delete --exclude=".git" --exclude="CNAME" --exclude="_not-found" "$SRC/out/" "$DEPLOY/"
cd "$DEPLOY"
git add -A
TIMESTAMP=$(date "+%Y-%m-%d")
git commit -m "Weekly Yahoo median update: $TIMESTAMP" --allow-empty 2>&1 | tail -3
COMMIT_HASH=$(git rev-parse --short HEAD)
set -o pipefail
git push origin "$(git rev-parse HEAD):refs/heads/main" 2>&1 | tail -3
set +o pipefail

echo "[$(date '+%H:%M:%S')] 📤 [4/4] SRCリポジトリもコミット & push"
cd "$SRC"
git add -A
git commit -m "Weekly Yahoo median update (SRC sync): $TIMESTAMP" --allow-empty 2>&1 | tail -3
SRC_COMMIT_HASH=$(git rev-parse --short HEAD)
set -o pipefail
git push origin "$(git rev-parse HEAD):refs/heads/main" 2>&1 | tail -3
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

echo "[$(date '+%H:%M:%S')] ✅ 完了 — 経過時間: ${ELAPSED}s"

notify_discord "✅ **楽器買取びより 週次更新 完了** ($(date '+%Y-%m-%d %H:%M'))
- 実行ID: $RUN_ID
- 経過時間: ${ELAPSED}s
- commit: \`$COMMIT_HASH\` (deploy) / \`$SRC_COMMIT_HASH\` (src)

${SUMMARY}

- 20モデル分の中央値再取得 ✓
- CF Pages 自動デプロイ進行中
- 確認: https://gakkikaitori-biyori.com/articles/yamaha-yas62-kaitori/
- 詳細ログ: $RUN_LOG"

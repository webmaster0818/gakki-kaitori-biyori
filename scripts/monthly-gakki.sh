#!/bin/bash
# gakki 月次鮮度自動化: yahoo相場再取得(best-effort)→表示月タグ/日付を当月化→build→push(git連携でCF自動)→Indexing→通知。
set -o pipefail
export PATH=/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin
SRC="/Users/takashi.hasegawa/projects/gakki-kaitori-biyori"
GSC_PY="/Users/takashi.hasegawa/.openclaw/workspace/gsc-api/venv/bin/python"
WEBHOOK=$(cat /Users/takashi.hasegawa/.openclaw/workspace/secrets/gsc-weekly-webhook.txt 2>/dev/null | tr -d '\n')
STAMP=$(date +"%Y-%m-%d %H:%M")
cd "$SRC" || exit 1
notify(){ [ -n "$WEBHOOK" ] && curl -s -H "Content-Type: application/json" -H "User-Agent: curl/8" -d "{\"content\": $(python3 -c "import json,sys;print(json.dumps(sys.argv[1]))" "$1")}" "$WEBHOOK" >/dev/null 2>&1; }
echo "===== [$STAMP] monthly-gakki start ====="
# 1) yahoo相場 再取得(best-effort・失敗しても継続)
python3 scripts/fetch-yahoo-medians-gakki.py >/tmp/gakki-yahoo.log 2>&1 || echo "yahoo fetch skipped/failed(継続)"
# 2) 表示月タグ・日付を当月化
python3 scripts/refresh-freshness-gakki.py
# 3) build
NODE_OPTIONS="--max-old-space-size=8192" npm run build >/tmp/gakki-build.log 2>&1
if ! grep -q "Compiled successfully" /tmp/gakki-build.log || grep -q "Failed to type check" /tmp/gakki-build.log; then
  echo "build FAILED"; tail -15 /tmp/gakki-build.log; notify "🚨[gakki鮮度] 月次ビルド失敗（$STAMP）。push中止。"; exit 1
fi
# 4) 方式Bデプロイ（CFはdeployリポを見ている。source pushだけでは本番反映しない）
#    sitemap再生成→out/へcp→rsync out→deployリポ→.txt削除(CF 20k対策)→source+deploy両push
node scripts/generate-sitemap.mjs >/dev/null 2>&1; cp public/sitemap.xml out/sitemap.xml 2>/dev/null
DEPLOY="/Users/takashi.hasegawa/projects/gakki-kaitori-biyori-deploy"
git add -A && git commit -q -m "月次鮮度: 表示月タグ/相場を当月化（$STAMP）" 2>/dev/null && git push -q origin HEAD:main 2>/dev/null
if [ -d "$DEPLOY/.git" ]; then
  rsync -a --delete --exclude='.git' out/ "$DEPLOY/"
  ( cd "$DEPLOY" && find . -path ./.git -prune -o -type f -name "*.txt" ! -name "robots.txt" -delete
    git add -A && git commit -q -m "月次鮮度 deploy（$STAMP）" 2>/dev/null && git push -q origin HEAD:main 2>/dev/null && echo "deploy pushed" )
  PUSHED=1
else
  echo "⚠️deployリポ無し"; notify "🚨[gakki鮮度] deployリポ($DEPLOY)が見つかりません（$STAMP）"; PUSHED=0
fi
# 5) Indexing(striking上位)
if [ "$PUSHED" = "1" ]; then
"$GSC_PY" - <<'PYEOF' 2>/dev/null
from pathlib import Path
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import AuthorizedSession
creds=Credentials.from_authorized_user_file(str(Path.home()/".openclaw"/"workspace"/"secrets"/"gsc-token.json"))
s=AuthorizedSession(creds)
for slug in ["fukuoka-gakki-kaitori","shinjuku-gakki-kaitori","sendai-gakki-kaitori","nagoya-gakki-kaitori","ibanez-kaitori","martin-kaitori"]:
    s.post("https://indexing.googleapis.com/v3/urlNotifications:publish",json={"url":f"https://gakkikaitori-biyori.com/articles/{slug}/","type":"URL_UPDATED"})
PYEOF
fi
notify "✅[gakki鮮度] 月次鮮度更新・push（$STAMP）｜表示月タグを当月化・yahoo相場再取得・CF自動ビルド"
echo "===== [$STAMP] done pushed=$PUSHED ====="

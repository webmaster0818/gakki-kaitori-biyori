#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""楽器買取相場ウィジェット生成: data/souba-ranking-gakki.json → public/widget.js / public/widget.html
週次更新スクリプト(weekly-yahoo-update.sh)のビルド前に実行され、毎週自動で最新化される。
widget.js = 設置先DOMに直接描画（gakkikaitori-biyori.com へのリンクを含む＝followed被リンク装置）。
widget.html = iframe派向けのスタンドアロン版。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(open(os.path.join(ROOT, "data", "souba-ranking-gakki.json"), encoding="utf-8"))
updated = d.get("updated", "")
models = [m for m in d.get("models", []) if m.get("median")]
models.sort(key=lambda m: m.get("median", 0), reverse=True)
top = models[:5]

rows = "".join(
    "'<div style=\"display:flex;justify-content:space-between;gap:8px;font-size:13px;margin-top:3px;\">"
    "<span style=\"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">%s</span>"
    "<span style=\"font-weight:600;white-space:nowrap;\">\\u00a5%s</span></div>'"
    % (m["name"].replace("'", ""), f'{round(m["median"]):,}') + "\n    + "
    for m in top
)

JS = """(function() {
  var s = document.currentScript;
  if (!s) return;
  var box = document.createElement('div');
  box.setAttribute('style', 'box-sizing:border-box;max-width:340px;font-family:-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;border:1px solid #d9c58a;border-radius:12px;padding:14px 16px;background:linear-gradient(135deg,#fffdf5,#f6f0e2);color:#3a3326;line-height:1.5;');
  box.innerHTML = '<div style="font-size:11px;color:#8a7a55;margin-bottom:6px;">今週の楽器 実勢買取相場（中古中央値・%s更新）</div>'
    + %s'<div style="font-size:11px;margin-top:9px;"><a href="https://gakkikaitori-biyori.com/souba-ranking/" target="_blank" rel="noopener" style="color:#9a7b2d;text-decoration:underline;">楽器買取びより｜相場ランキング</a>（ヤフオク!落札データより毎週更新）</div>'
    + '<div style="font-size:10px;color:#9b8e6e;margin-top:4px;">※中古実勢の中央値。買取額は業者・状態により異なります。</div>';
  s.parentNode.insertBefore(box, s);
})();
""" % (updated, rows)

HTML = """<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<title>今週の楽器買取相場ウィジェット | 楽器買取びより</title></head>
<body style="margin:0;padding:8px;background:transparent;">
<script src="https://gakkikaitori-biyori.com/widget.js"></script>
</body></html>
"""

open(os.path.join(ROOT, "public", "widget.js"), "w", encoding="utf-8").write(JS)
open(os.path.join(ROOT, "public", "widget.html"), "w", encoding="utf-8").write(HTML)
print(f"widget generated: {len(top)} models, updated {updated}")

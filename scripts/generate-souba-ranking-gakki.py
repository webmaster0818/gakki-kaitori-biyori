#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""楽器買取相場ランキング用データ生成（一次データの更新型コンテンツ＝被リンク資産）。
data/price-history-gakki/{slug}.json（週次スナップショット history[]）から
各モデルの実勢中央値・週次変化率・流通量を算出し data/souba-ranking-gakki.json を出力。
週次cron（weekly-yahoo-update.sh）から呼び出して自動更新する。事実ベース＝ヤフオク落札中央値。
"""
import json, os, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HIST_DIR = os.path.join(ROOT, "data", "price-history-gakki")

# slug接頭辞→楽器カテゴリの粗い判定（表示用）
def category(slug, label):
    s = slug.lower()
    if any(k in s for k in ["stratocaster","telecaster","lespaul","-sg-","jazzmaster","jaguar","es-335","prs","rickenbacker","ibanez-rg","flying-v"]): return "エレキギター"
    if any(k in s for k in ["jazzbass","precisionbass","stingray","-bass"]): return "ベース"
    if any(k in s for k in ["d-28","d28","814","j-45","j45","martin","taylor"]): return "アコギ"
    if any(k in s for k in ["twinreverb","ac30","jc-120","deluxe","-amp","marshall"]): return "アンプ"
    if any(k in s for k in ["ts9","ds1","ts808","klon","-od-","boss-"]): return "エフェクター"
    if any(k in s for k in ["yamaha-u","yamaha-c","kawai","-piano","yus","steinway"]): return "ピアノ"
    if any(k in s for k in ["yas","yss","awo","sax","bach","stradivarius","trumpet","yamaha-yfl","flute"]): return "管楽器"
    if any(k in s for k in ["minilogue","nord","-synth","prophet","juno","korg"]): return "シンセ/キーボード"
    if any(k in s for k in ["starclassic","tama","-drum","sonor","ludwig"]): return "ドラム"
    return "楽器"

rows = []
latest_date = ""
for p in sorted(glob.glob(os.path.join(HIST_DIR, "*.json"))):
    try:
        d = json.load(open(p, encoding="utf-8"))
    except Exception:
        continue
    slug = d.get("slug")
    h = [x for x in d.get("history", []) if isinstance(x.get("median_jpy"), int) and x["median_jpy"] > 0]
    if not slug or not h:
        continue
    # 実勢を反映しないデータは除外（例: アコースティックピアノ＝ヤフオク流通が小物/部品中心で
    # 中央値がジャンク化。fetch側の insufficient 判定を尊重）
    if d.get("latest", {}).get("insufficient"):
        continue
    median = h[-1]["median_jpy"]
    sample_n = h[-1].get("sample_n", 0)
    change_1w = change_2w = None
    if len(h) >= 2 and h[-2]["median_jpy"]:
        change_1w = round((median - h[-2]["median_jpy"]) / h[-2]["median_jpy"] * 100, 1)
    if len(h) >= 3 and h[-3]["median_jpy"]:
        change_2w = round((median - h[-3]["median_jpy"]) / h[-3]["median_jpy"] * 100, 1)
    latest_date = max(latest_date, h[-1].get("date", ""))
    rows.append({
        "slug": slug,
        "name": d.get("label", slug),
        "category": category(slug, d.get("label", "")),
        "median": median,
        "sample_n": sample_n,
        "change_1w": change_1w,
        "change_2w": change_2w,
    })

out = {"updated": latest_date, "count": len(rows), "models": rows}
dst = os.path.join(ROOT, "data", "souba-ranking-gakki.json")
json.dump(out, open(dst, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"wrote {dst}: {len(rows)} models, updated {latest_date}")

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""中古楽器買取相場指数の生成: data/price-history-gakki/*.json → data/souba-index-gakki.json
週次cron(weekly-yahoo-update.sh)に組込み、毎週自動更新される。
指数 = 基準週(最初の共通週)の各モデル中央値を100とした相対値の単純平均(等ウェイト)。
サンプル不足モデル(sample_n<20の週がある)や系列不連続(3倍超)は除外し、母数を明示する(捏造回避)。
カテゴリ別サブ指数は構成銘柄>=3のカテゴリのみ出力。
"""
import glob, json, os
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HIST = os.path.join(ROOT, "data", "price-history-gakki")
SERIES_JUMP_RATIO = 3.0

# カテゴリ表: souba-ranking-gakki.json の models[] から slug->category
cat = {}
try:
    rk = json.load(open(os.path.join(ROOT, "data", "souba-ranking-gakki.json")))
    for m in rk.get("models", []):
        cat[m["slug"]] = m.get("category", "その他")
except Exception:
    pass

series = {}  # slug -> {date: median}
labels = {}
for f in glob.glob(os.path.join(HIST, "*.json")):
    d = json.load(open(f))
    if "slug" not in d:
        continue
    slug = d["slug"]
    hist = {h["date"]: h for h in d.get("history", [])}
    if not hist or any(h.get("sample_n", 0) < 20 or not h.get("median_jpy") for h in hist.values()):
        continue
    vals = [hist[k]["median_jpy"] for k in sorted(hist)]
    if any(max(a, b) / max(1, min(a, b)) > SERIES_JUMP_RATIO for a, b in zip(vals, vals[1:])):
        continue
    if len(hist) < 4:
        continue  # 履歴の浅いモデル(新規追加等)は指数の週決定を歪めるため除外
    series[slug] = {dt: h["median_jpy"] for dt, h in hist.items()}
    labels[slug] = d.get("label", slug)

# 過半数(80%)のモデルが持つ週を「正規の週」とし、全週を持つモデルのみ採用
freq = Counter()
for s in series.values():
    for dt in s:
        freq[dt] += 1
n = len(series)
dates = sorted([dt for dt, c in freq.items() if c >= n * 0.8])
if len(dates) < 2:
    raise SystemExit("週次データ不足")
series = {s: v for s, v in series.items() if all(dt in v for dt in dates)}


def build_index(slugs):
    base = dates[0]
    return [{"date": dt, "index": round(sum(series[s][dt] / series[s][base] * 100 for s in slugs) / len(slugs), 2)} for dt in dates]


all_slugs = sorted(series.keys())
# カテゴリ別（構成>=3のみ）
by_cat = Counter(cat.get(s, "その他") for s in all_slugs)
categories = {c: build_index([s for s in all_slugs if cat.get(s) == c]) for c, n2 in by_cat.items() if n2 >= 3}

result = {
    "generated_note": "基準週(最初の共通週)の各モデル中央値を100とした等ウェイト指数。全週sample_n>=20のモデルのみ採用。カテゴリ別は構成3銘柄以上のみ。",
    "base_date": dates[0],
    "latest_date": dates[-1],
    "constituents": {"total": len(all_slugs), "by_category": dict(by_cat)},
    "slugs": all_slugs,
    "labels": {s: labels[s] for s in all_slugs},
    "composite": build_index(all_slugs),
    "categories": categories,
}
json.dump(result, open(os.path.join(ROOT, "data", "souba-index-gakki.json"), "w"), ensure_ascii=False, indent=1)
c = result["composite"]
print(f"index: {len(all_slugs)}モデル {dates[0]}→{dates[-1]} 最新={c[-1]['index']} 前週比={round(c[-1]['index']-c[-2]['index'],2):+} cats={list(categories)}")

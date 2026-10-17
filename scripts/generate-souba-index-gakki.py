#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""中古楽器買取相場指数の生成: data/price-history-gakki/*.json → data/souba-index-gakki.json
週次cron(weekly-yahoo-update.sh)に組込み、毎週自動更新される。
指数 = 基準週(最初の共通週)の各モデル中央値を100とした相対値の単純平均(等ウェイト)。
サンプル不足モデル(sample_n<INDEX_MIN_N の週がある)や系列不連続(3倍超)は除外し、母数を明示する(捏造回避)。
採用基準の件数はこのファイルの INDEX_MIN_N だけで決める（取得側・--reapply には指数用の件数基準は無い）。
カテゴリ別サブ指数は構成銘柄>=3のカテゴリのみ出力。
"""
import glob, json, os
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HIST = os.path.join(ROOT, "data", "price-history-gakki")
SERIES_JUMP_RATIO = 3.0

# 指数の採用基準: 全ての履歴点で n >= INDEX_MIN_N（n は auctionId 重複除去後の実出品数）。
# 2026-10-19 週次から DEDUP_LISTINGS=True で n が実数（従来の約半分）になる。
# 印 "dedup" の無い旧点（〜10/12）は1出品を2回数えた n なので、基準を LEGACY_N_FACTOR 倍（=20）で見る。
#   → 旧点の判定は従来の sample_n>=20 と完全に同じ＝過去の構成・系列は変わらない。
INDEX_MIN_N = 10
LEGACY_N_FACTOR = 2


def point_ok(h):
    need = INDEX_MIN_N if h.get("dedup") else INDEX_MIN_N * LEGACY_N_FACTOR
    return (h.get("sample_n") or 0) >= need and bool(h.get("median_jpy"))


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
    if not hist or not all(point_ok(h) for h in hist.values()):
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
    "generated_note": "基準週(最初の共通週)の各モデル中央値を100とした等ウェイト指数。全週でサンプル数(重複出品を除いた実出品数)10件以上のモデルのみ採用(2026-10-12以前の週は重複込みの数え方のため20件以上)。カテゴリ別は構成3銘柄以上のみ。",
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

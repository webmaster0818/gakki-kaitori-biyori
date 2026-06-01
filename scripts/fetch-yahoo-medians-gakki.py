#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Yahoo Auctions の落札相場（過去180日）から、楽器人気モデル20本の中央値を算出。
peatbid の fetch-yahoo-medians.py を楽器用に流用。

出力:
  - data/yahoo-medians-gakki.json (全モデルの結果)
  - data/price-history-gakki/<slug>.json (履歴蓄積)
"""
from __future__ import annotations
import json
import re
import statistics
import time
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JSON = ROOT / "data" / "yahoo-medians-gakki.json"
HISTORY_DIR = ROOT / "data" / "price-history-gakki"

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"

MODEL_QUERIES = {
    "yamaha-u1-kaitori": ("YAMAHA U1", "ヤマハ U1 アップライトピアノ"),
    "yamaha-u3-kaitori": ("YAMAHA U3", "ヤマハ U3 アップライトピアノ"),
    "yamaha-yus5-kaitori": ("YAMAHA YUS5", "ヤマハ YUS5 アップライトピアノ"),
    "yamaha-yas62-kaitori": ("YAMAHA YAS-62", "ヤマハ YAS-62 アルトサックス"),
    "gibson-lespaul-standard-kaitori": ("Gibson Les Paul Standard", "Gibson Les Paul Standard USA"),
    "gibson-lespaul-custom-kaitori": ("Gibson Les Paul Custom", "Gibson Les Paul Custom USA"),
    "gibson-sg-kaitori": ("Gibson SG", "Gibson SG Standard USA"),
    "fender-stratocaster-kaitori": ("Fender Stratocaster", "Fender USA Stratocaster"),
    "fender-telecaster-kaitori": ("Fender Telecaster", "Fender USA Telecaster"),
    "fender-jazzbass-kaitori": ("Fender Jazz Bass", "Fender USA Jazz Bass"),
    "fender-twinreverb-kaitori": ("Fender Twin Reverb", "Fender Twin Reverb アンプ"),
    "ibanez-ts9-kaitori": ("Ibanez TS9 Tube Screamer", "Ibanez TS9 Tube Screamer エフェクター"),
    "boss-ds1-kaitori": ("BOSS DS-1", "BOSS DS-1 エフェクター"),
    "marshall-jcm800-kaitori": ("Marshall JCM800", "Marshall JCM800 ギターアンプ"),
    "pearl-masters-kaitori": ("Pearl Masters", "Pearl Masters ドラムセット"),
    "selmer-markvi-kaitori": ("Selmer Mark VI", "Selmer Mark VI サックス"),
    "selmer-series2-kaitori": ("Selmer Series II", "Selmer Series II サックス"),
    "bach-stradivarius-kaitori": ("Bach Stradivarius", "Bach Stradivarius トランペット"),
    "kawai-k300-kaitori": ("KAWAI K-300", "カワイ K-300 アップライトピアノ"),
    "steinway-b211-kaitori": ("Steinway B-211", "Steinway B-211 グランドピアノ"),
}

MIN_SAMPLE = 8  # 楽器はピアノ等で出品数少なめ、peatbidの20より緩く
MAX_PAGES = 3
TODAY = datetime.now().strftime("%Y-%m-%d")


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as res:
        return res.read().decode("utf-8", errors="replace")


def extract_prices(html: str) -> list[int]:
    out = []
    for m in re.finditer(r'"price"\s*:\s*(\d+)', html):
        try:
            v = int(m.group(1))
            if 500 <= v <= 50_000_000:
                out.append(v)
        except ValueError:
            pass
    return out


def iqr_filter(prices: list[int]) -> list[int]:
    if len(prices) < 4:
        return prices
    s = sorted(prices)
    n = len(s)
    q1 = s[n // 4]
    q3 = s[(3 * n) // 4]
    iqr = q3 - q1
    lo = q1 - 1.5 * iqr
    hi = q3 + 1.5 * iqr
    return [p for p in s if lo <= p <= hi]


def median_for_query(query: str) -> dict:
    raw_all = []
    pages_fetched = 0
    for page in range(1, MAX_PAGES + 1):
        b = 1 + (page - 1) * 50
        q = urllib.parse.quote(query)
        url = f"https://auctions.yahoo.co.jp/closedsearch/closedsearch?p={q}&b={b}&n=50"
        try:
            html = fetch(url)
        except Exception as e:
            return {"error": f"fetch_failed: {e}", "query_used": query, "fetched_at": TODAY}
        page_prices = extract_prices(html)
        pages_fetched += 1
        if not page_prices:
            break
        raw_all.extend(page_prices)
        if page < MAX_PAGES:
            time.sleep(1.5)
    if not raw_all:
        return {"query_used": query, "raw_n": 0, "filtered_n": 0, "median": None, "insufficient": True, "fetched_at": TODAY}
    filtered = iqr_filter(raw_all)
    return {
        "query_used": query,
        "pages_fetched": pages_fetched,
        "raw_n": len(raw_all),
        "filtered_n": len(filtered),
        "median": int(statistics.median(filtered)) if filtered else None,
        "mean": int(statistics.mean(filtered)) if filtered else None,
        "min": min(filtered) if filtered else None,
        "max": max(filtered) if filtered else None,
        "insufficient": len(filtered) < MIN_SAMPLE,
        "fetched_at": TODAY,
    }


def write_history(slug: str, label: str, result: dict) -> None:
    HISTORY_DIR.mkdir(exist_ok=True)
    path = HISTORY_DIR / f"{slug}.json"
    existing_history = []
    if path.exists():
        try:
            existing = json.loads(path.read_text(encoding="utf-8"))
            existing_history = existing.get("history", []) or []
        except (json.JSONDecodeError, OSError):
            existing_history = []

    median_val = result.get("median")
    fetched_at = result.get("fetched_at")
    new_point = (
        {
            "date": fetched_at,
            "median_jpy": median_val,
            "sample_n": result.get("filtered_n"),
            "raw_n": result.get("raw_n"),
        }
        if median_val is not None and not result.get("insufficient")
        else None
    )

    merged = [h for h in existing_history if h.get("date") != fetched_at]
    if new_point is not None:
        merged.append(new_point)
    merged.sort(key=lambda h: h.get("date") or "")

    data = {
        "slug": slug,
        "label": label,
        "source": "yahoo_auctions_closed_search_180d",
        "methodology": "median of individual lot final-prices, IQR outlier removal",
        "query_used": result.get("query_used"),
        "history": merged,
        "latest": {
            "date": fetched_at,
            "median_jpy": median_val,
            "sample_n": result.get("filtered_n"),
            "raw_n": result.get("raw_n"),
            "insufficient": result.get("insufficient", False),
        },
        "note": "週次自動更新で履歴を蓄積中。",
    }
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    print(f"🔍 Yahoo median fetch (楽器 {TODAY}) — {len(MODEL_QUERIES)} models")
    results = {}
    for i, (slug, (label, query)) in enumerate(MODEL_QUERIES.items(), 1):
        print(f"  [{i}/{len(MODEL_QUERIES)}] {slug} '{query}'...", end=" ", flush=True)
        r = median_for_query(query)
        r["label"] = label
        results[slug] = r
        if r.get("median") and not r.get("insufficient"):
            print(f"median=¥{r['median']:,} n={r['filtered_n']}")
        else:
            print(f"INSUFFICIENT n={r.get('filtered_n', 0)}")
        write_history(slug, label, r)
        time.sleep(0.8)

    OUT_JSON.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    success = sum(1 for r in results.values() if r.get("median") and not r.get("insufficient"))
    print(f"\n✅ {success}/{len(results)} models have reliable median data")
    print(f"   Saved: {OUT_JSON}")


if __name__ == "__main__":
    main()

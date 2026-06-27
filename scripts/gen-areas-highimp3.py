#!/usr/bin/env python3
"""楽器買取びより 高表示エリア 第3バッチ：政令市の区（札幌/神戸/京都/福岡）。事実ベース厳守。"""
import importlib.util, json, os
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"; META = ROOT / "data" / "articles-metadata.json"
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ph5)

AREAS = [
    # ---- 札幌市 ----
    ("sapporo-chuo-gakki-kaitori", "札幌市中央区", "北海道", "北海道札幌市中央区", "北・東・白石・豊平・西"),
    ("sapporo-kita-gakki-kaitori", "札幌市北区", "北海道", "北海道札幌市北区", "中央・東・石狩・当別"),
    ("sapporo-higashi-gakki-kaitori", "札幌市東区", "北海道", "北海道札幌市東区", "中央・北・白石・江別"),
    ("sapporo-shiroishi-gakki-kaitori", "札幌市白石区", "北海道", "北海道札幌市白石区", "中央・東・豊平・厚別"),
    ("sapporo-toyohira-gakki-kaitori", "札幌市豊平区", "北海道", "北海道札幌市豊平区", "中央・白石・南・清田"),
    ("sapporo-minami-gakki-kaitori", "札幌市南区", "北海道", "北海道札幌市南区", "中央・豊平・西・石山"),
    ("sapporo-nishi-gakki-kaitori", "札幌市西区", "北海道", "北海道札幌市西区", "中央・北・手稲・小樽"),
    ("sapporo-atsubetsu-gakki-kaitori", "札幌市厚別区", "北海道", "北海道札幌市厚別区", "白石・豊平・清田・江別"),
    # ---- 神戸市 ----
    ("kobe-higashinada-gakki-kaitori", "神戸市東灘区", "兵庫", "兵庫県神戸市東灘区", "灘・芦屋・中央"),
    ("kobe-nada-gakki-kaitori", "神戸市灘区", "兵庫", "兵庫県神戸市灘区", "東灘・中央・兵庫"),
    ("kobe-hyogo-gakki-kaitori", "神戸市兵庫区", "兵庫", "兵庫県神戸市兵庫区", "中央・長田・北"),
    ("kobe-nagata-gakki-kaitori", "神戸市長田区", "兵庫", "兵庫県神戸市長田区", "兵庫・須磨・北"),
    ("kobe-suma-gakki-kaitori", "神戸市須磨区", "兵庫", "兵庫県神戸市須磨区", "長田・垂水・北"),
    ("kobe-tarumi-gakki-kaitori", "神戸市垂水区", "兵庫", "兵庫県神戸市垂水区", "須磨・西・明石"),
    ("kobe-nishi-gakki-kaitori", "神戸市西区", "兵庫", "兵庫県神戸市西区", "垂水・北・明石・三木"),
    ("kobe-kita-gakki-kaitori", "神戸市北区", "兵庫", "兵庫県神戸市北区", "兵庫・長田・三田・三木"),
    # ---- 京都市 ----
    ("kyoto-shimogyo-gakki-kaitori", "京都市下京区", "京都", "京都府京都市下京区", "中京・東山・南・右京"),
    ("kyoto-kamigyo-gakki-kaitori", "京都市上京区", "京都", "京都府京都市上京区", "中京・北・左京"),
    ("kyoto-sakyo-gakki-kaitori", "京都市左京区", "京都", "京都府京都市左京区", "上京・北・東山・大津"),
    ("kyoto-ukyo-gakki-kaitori", "京都市右京区", "京都", "京都府京都市右京区", "中京・西京・北・亀岡"),
    ("kyoto-fushimi-gakki-kaitori", "京都市伏見区", "京都", "京都府京都市伏見区", "南・東山・山科・宇治"),
    ("kyoto-higashiyama-gakki-kaitori", "京都市東山区", "京都", "京都府京都市東山区", "中京・下京・左京・山科"),
    ("kyoto-yamashina-gakki-kaitori", "京都市山科区", "京都", "京都府京都市山科区", "東山・伏見・大津"),
    ("kyoto-kita-gakki-kaitori", "京都市北区", "京都", "京都府京都市北区", "上京・左京・右京"),
    # ---- 福岡市 ----
    ("fukuoka-hakata-gakki-kaitori", "福岡市博多区", "福岡", "福岡県福岡市博多区", "中央・東・南・福岡空港"),
    ("fukuoka-chuo-gakki-kaitori", "福岡市中央区", "福岡", "福岡県福岡市中央区", "博多・南・城南・早良"),
    ("fukuoka-higashi-gakki-kaitori", "福岡市東区", "福岡", "福岡県福岡市東区", "博多・粕屋・新宮"),
    ("fukuoka-minami-gakki-kaitori", "福岡市南区", "福岡", "福岡県福岡市南区", "中央・博多・城南・春日"),
    ("fukuoka-nishi-gakki-kaitori", "福岡市西区", "福岡", "福岡県福岡市西区", "早良・糸島"),
    ("fukuoka-jonan-gakki-kaitori", "福岡市城南区", "福岡", "福岡県福岡市城南区", "中央・早良・南"),
    ("fukuoka-sawara-gakki-kaitori", "福岡市早良区", "福岡", "福岡県福岡市早良区", "中央・城南・西"),
]


def main():
    meta = json.load(open(META, encoding="utf-8")); existing = {a["slug"] for a in meta}; added = []
    for slug, name, region, pref, neighbors in AREAS:
        if slug in existing:
            print(f"  skip (exists): {slug}"); continue
        area = {"slug": slug, "name": name, "region": region, "prefectures": pref, "neighbors": neighbors}
        d = ARTICLES_DIR / slug; d.mkdir(parents=True, exist_ok=True)
        (d / "page.tsx").write_text(ph5.build_page(area), encoding="utf-8")
        meta.append({"slug": slug, "title": f"楽器買取 {name}おすすめ3選", "shortTitle": f"楽器買取 {name}おすすめ3選",
                     "badge": name, "description": f"{name}（{pref}）の楽器買取を出張・店頭・宅配で比較。送客3社とエリア状況を解説。", "category": "region"})
        added.append(slug); print(f"  ✅ {slug} ({name})")
    json.dump(meta, open(META, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"\ngenerated: {len(added)}  metadata total: {len(meta)}")


if __name__ == "__main__":
    main()

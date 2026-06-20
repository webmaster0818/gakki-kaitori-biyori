#!/usr/bin/env python3
"""Phase 1 第3陣 +27都市（2026-06-18）region 83→110達成。batch2と同方式・冪等。"""
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("p5", ROOT / "scripts" / "generate-phase5-areas.py")
p5 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(p5)

AREAS = [
    {"slug": "sagamihara-gakki-kaitori", "name": "相模原", "region": "神奈川", "prefectures": "神奈川県相模原市", "neighbors": "町田・八王子・厚木"},
    {"slug": "yokosuka-gakki-kaitori", "name": "横須賀", "region": "神奈川", "prefectures": "神奈川県横須賀市", "neighbors": "逗子・三浦・葉山"},
    {"slug": "fujisawa-gakki-kaitori", "name": "藤沢", "region": "神奈川", "prefectures": "神奈川県藤沢市", "neighbors": "茅ヶ崎・鎌倉・大和"},
    {"slug": "yao-gakki-kaitori", "name": "八尾", "region": "大阪", "prefectures": "大阪府八尾市", "neighbors": "東大阪・柏原・大東"},
    {"slug": "neyagawa-gakki-kaitori", "name": "寝屋川", "region": "大阪", "prefectures": "大阪府寝屋川市", "neighbors": "枚方・守口・門真"},
    {"slug": "takatsuki-gakki-kaitori", "name": "高槻", "region": "大阪", "prefectures": "大阪府高槻市", "neighbors": "茨木・枚方・島本"},
    {"slug": "tokushima-gakki-kaitori", "name": "徳島", "region": "徳島", "prefectures": "徳島県徳島市", "neighbors": "鳴門・小松島・阿南"},
    {"slug": "shimonoseki-gakki-kaitori", "name": "下関", "region": "山口", "prefectures": "山口県下関市", "neighbors": "宇部・山陽小野田・北九州"},
    {"slug": "yamaguchi-gakki-kaitori", "name": "山口", "region": "山口", "prefectures": "山口県山口市", "neighbors": "防府・宇部・萩"},
    {"slug": "tottori-gakki-kaitori", "name": "鳥取", "region": "鳥取", "prefectures": "鳥取県鳥取市", "neighbors": "倉吉・岩美・八頭"},
    {"slug": "yonago-gakki-kaitori", "name": "米子", "region": "鳥取", "prefectures": "鳥取県米子市", "neighbors": "境港・松江・倉吉"},
    {"slug": "matsue-gakki-kaitori", "name": "松江", "region": "島根", "prefectures": "島根県松江市", "neighbors": "出雲・安来・米子"},
    {"slug": "kushiro-gakki-kaitori", "name": "釧路", "region": "北海道", "prefectures": "北海道釧路市", "neighbors": "帯広・根室・白糠"},
    {"slug": "obihiro-gakki-kaitori", "name": "帯広", "region": "北海道", "prefectures": "北海道帯広市", "neighbors": "音更・芽室・釧路"},
    {"slug": "nagaoka-gakki-kaitori", "name": "長岡", "region": "新潟", "prefectures": "新潟県長岡市", "neighbors": "三条・見附・小千谷"},
    {"slug": "fuji-gakki-kaitori", "name": "富士", "region": "静岡", "prefectures": "静岡県富士市", "neighbors": "富士宮・沼津・静岡"},
    {"slug": "numazu-gakki-kaitori", "name": "沼津", "region": "静岡", "prefectures": "静岡県沼津市", "neighbors": "三島・富士・裾野"},
    {"slug": "kawanishi-gakki-kaitori", "name": "川西", "region": "兵庫", "prefectures": "兵庫県川西市", "neighbors": "宝塚・伊丹・池田"},
    {"slug": "akashi-gakki-kaitori", "name": "明石", "region": "兵庫", "prefectures": "兵庫県明石市", "neighbors": "神戸・加古川・三木"},
    {"slug": "kakogawa-gakki-kaitori", "name": "加古川", "region": "兵庫", "prefectures": "兵庫県加古川市", "neighbors": "明石・高砂・姫路"},
    {"slug": "kurashiki-gakki-kaitori", "name": "倉敷", "region": "岡山", "prefectures": "岡山県倉敷市", "neighbors": "岡山・総社・玉野"},
    {"slug": "fukuyama-gakki-kaitori", "name": "福山", "region": "広島", "prefectures": "広島県福山市", "neighbors": "尾道・笠岡・府中"},
    {"slug": "kofu-gakki-kaitori", "name": "甲府", "region": "山梨", "prefectures": "山梨県甲府市", "neighbors": "甲斐・南アルプス・笛吹"},
    {"slug": "tsu-gakki-kaitori", "name": "津", "region": "三重", "prefectures": "三重県津市", "neighbors": "鈴鹿・松阪・四日市"},
    {"slug": "suzuka-gakki-kaitori", "name": "鈴鹿", "region": "三重", "prefectures": "三重県鈴鹿市", "neighbors": "四日市・亀山・津"},
    {"slug": "hirosaki-gakki-kaitori", "name": "弘前", "region": "青森", "prefectures": "青森県弘前市", "neighbors": "青森・黒石・平川"},
    {"slug": "sasebo-gakki-kaitori", "name": "佐世保", "region": "長崎", "prefectures": "長崎県佐世保市", "neighbors": "佐々・松浦・諫早"},
]

ARTICLES_DIR = ROOT / "app" / "articles"
META = ROOT / "data" / "articles-metadata.json"
meta = json.loads(META.read_text(encoding="utf-8"))
existing = {a["slug"] for a in meta}
made = 0
for area in AREAS:
    slug = area["slug"]
    d = ARTICLES_DIR / slug
    if not (d / "page.tsx").exists():
        d.mkdir(parents=True, exist_ok=True)
        (d / "page.tsx").write_text(p5.build_page(area), encoding="utf-8")
        made += 1
    if slug not in existing:
        meta.append({"slug": slug, "title": f"{area['name']}の楽器買取おすすめ3社", "shortTitle": f"{area['name']}の楽器買取",
                     "badge": area["name"], "category": "region",
                     "description": f"{area['prefectures']}の楽器買取。出張・店頭・宅配の比較と高く売るコツ。"})
META.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
regions = sum(1 for a in meta if a.get("category") == "region")
print(f"pages made: {made} / metadata total: {len(meta)} / regions: {regions}")

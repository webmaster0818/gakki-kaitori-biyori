#!/usr/bin/env python3
"""Phase 1（2026-06-12 MediaXAI承認）: 地域カテゴリ優先増設の第1陣＋20都市。

generate-phase5-areas.py の build_page() を importlib で再利用（テンプレ同一・事実ベース定性）。
articles-metadata.json への category=region 登録も行う。冪等。
"""
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("p5", ROOT / "scripts" / "generate-phase5-areas.py")
p5 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(p5)  # __main__ガードがあるのでmainは走らない…はず（要確認: phase5はif __name__ガードあり）

AREAS = [
    {"slug": "okayama-gakki-kaitori", "name": "岡山", "region": "岡山", "prefectures": "岡山県岡山市", "neighbors": "倉敷・総社・玉野"},
    {"slug": "niigata-gakki-kaitori", "name": "新潟", "region": "新潟", "prefectures": "新潟県新潟市", "neighbors": "新発田・三条・燕"},
    {"slug": "utsunomiya-gakki-kaitori", "name": "宇都宮", "region": "栃木", "prefectures": "栃木県宇都宮市", "neighbors": "鹿沼・小山・真岡"},
    {"slug": "takasaki-gakki-kaitori", "name": "高崎", "region": "群馬", "prefectures": "群馬県高崎市", "neighbors": "前橋・伊勢崎・藤岡"},
    {"slug": "mito-gakki-kaitori", "name": "水戸", "region": "茨城", "prefectures": "茨城県水戸市", "neighbors": "ひたちなか・笠間・那珂"},
    {"slug": "nagano-gakki-kaitori", "name": "長野", "region": "長野", "prefectures": "長野県長野市", "neighbors": "須坂・千曲・中野"},
    {"slug": "matsumoto-gakki-kaitori", "name": "松本", "region": "長野", "prefectures": "長野県松本市", "neighbors": "塩尻・安曇野・岡谷"},
    {"slug": "fukui-gakki-kaitori", "name": "福井", "region": "福井", "prefectures": "福井県福井市", "neighbors": "鯖江・坂井・越前"},
    {"slug": "otsu-gakki-kaitori", "name": "大津", "region": "滋賀", "prefectures": "滋賀県大津市", "neighbors": "草津・守山・栗東"},
    {"slug": "nara-gakki-kaitori", "name": "奈良", "region": "奈良", "prefectures": "奈良県奈良市", "neighbors": "生駒・大和郡山・天理"},
    {"slug": "wakayama-gakki-kaitori", "name": "和歌山", "region": "和歌山", "prefectures": "和歌山県和歌山市", "neighbors": "海南・岩出・紀の川"},
    {"slug": "himeji-gakki-kaitori", "name": "姫路", "region": "兵庫", "prefectures": "兵庫県姫路市", "neighbors": "加古川・高砂・たつの"},
    {"slug": "nishinomiya-gakki-kaitori", "name": "西宮", "region": "兵庫", "prefectures": "兵庫県西宮市", "neighbors": "尼崎・芦屋・宝塚"},
    {"slug": "sakai-gakki-kaitori", "name": "堺", "region": "大阪", "prefectures": "大阪府堺市", "neighbors": "高石・和泉・松原"},
    {"slug": "higashiosaka-gakki-kaitori", "name": "東大阪", "region": "大阪", "prefectures": "大阪府東大阪市", "neighbors": "八尾・大東・布施"},
    {"slug": "toyohashi-gakki-kaitori", "name": "豊橋", "region": "愛知", "prefectures": "愛知県豊橋市", "neighbors": "豊川・蒲郡・田原"},
    {"slug": "yokkaichi-gakki-kaitori", "name": "四日市", "region": "三重", "prefectures": "三重県四日市市", "neighbors": "桑名・鈴鹿・菰野"},
    {"slug": "kurume-gakki-kaitori", "name": "久留米", "region": "福岡", "prefectures": "福岡県久留米市", "neighbors": "鳥栖・小郡・筑後"},
    {"slug": "nagasaki-gakki-kaitori", "name": "長崎", "region": "長崎", "prefectures": "長崎県長崎市", "neighbors": "諫早・時津・長与"},
    {"slug": "oita-gakki-kaitori", "name": "大分", "region": "大分", "prefectures": "大分県大分市", "neighbors": "別府・由布・臼杵"},
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
        meta.append({
            "slug": slug,
            "title": f"{area['name']}の楽器買取おすすめ3社",
            "shortTitle": f"{area['name']}の楽器買取",
            "badge": area["name"],
            "category": "region",
            "description": f"{area['prefectures']}の楽器買取。出張・店頭・宅配の比較と高く売るコツ。",
        })

META.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"pages generated: {made} / metadata total: {len(meta)}")

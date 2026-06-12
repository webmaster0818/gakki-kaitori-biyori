#!/usr/bin/env python3
"""Phase 1 第2陣 +20都市（2026-06-12）。batch1と同方式・冪等。"""
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("p5", ROOT / "scripts" / "generate-phase5-areas.py")
p5 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(p5)

AREAS = [
    {"slug": "funabashi-gakki-kaitori", "name": "船橋", "region": "千葉", "prefectures": "千葉県船橋市", "neighbors": "市川・習志野・鎌ケ谷"},
    {"slug": "ichikawa-gakki-kaitori", "name": "市川", "region": "千葉", "prefectures": "千葉県市川市", "neighbors": "船橋・松戸・浦安"},
    {"slug": "kawagoe-gakki-kaitori", "name": "川越", "region": "埼玉", "prefectures": "埼玉県川越市", "neighbors": "ふじみ野・坂戸・狭山"},
    {"slug": "tokorozawa-gakki-kaitori", "name": "所沢", "region": "埼玉", "prefectures": "埼玉県所沢市", "neighbors": "入間・狭山・東村山"},
    {"slug": "koshigaya-gakki-kaitori", "name": "越谷", "region": "埼玉", "prefectures": "埼玉県越谷市", "neighbors": "草加・春日部・吉川"},
    {"slug": "amagasaki-gakki-kaitori", "name": "尼崎", "region": "兵庫", "prefectures": "兵庫県尼崎市", "neighbors": "西宮・伊丹・豊中"},
    {"slug": "toyonaka-gakki-kaitori", "name": "豊中", "region": "大阪", "prefectures": "大阪府豊中市", "neighbors": "吹田・池田・箕面"},
    {"slug": "hirakata-gakki-kaitori", "name": "枚方", "region": "大阪", "prefectures": "大阪府枚方市", "neighbors": "寝屋川・交野・高槻"},
    {"slug": "suita-gakki-kaitori", "name": "吹田", "region": "大阪", "prefectures": "大阪府吹田市", "neighbors": "豊中・摂津・茨木"},
    {"slug": "okazaki-gakki-kaitori", "name": "岡崎", "region": "愛知", "prefectures": "愛知県岡崎市", "neighbors": "安城・豊田・幸田"},
    {"slug": "ichinomiya-gakki-kaitori", "name": "一宮", "region": "愛知", "prefectures": "愛知県一宮市", "neighbors": "稲沢・江南・岩倉"},
    {"slug": "kasugai-gakki-kaitori", "name": "春日井", "region": "愛知", "prefectures": "愛知県春日井市", "neighbors": "小牧・名古屋守山・瀬戸"},
    {"slug": "koriyama-gakki-kaitori", "name": "郡山", "region": "福島", "prefectures": "福島県郡山市", "neighbors": "須賀川・本宮・三春"},
    {"slug": "iwaki-gakki-kaitori", "name": "いわき", "region": "福島", "prefectures": "福島県いわき市", "neighbors": "北茨城・広野・楢葉"},
    {"slug": "aomori-gakki-kaitori", "name": "青森", "region": "青森", "prefectures": "青森県青森市", "neighbors": "弘前・八戸・五所川原"},
    {"slug": "akita-gakki-kaitori", "name": "秋田", "region": "秋田", "prefectures": "秋田県秋田市", "neighbors": "男鹿・潟上・由利本荘"},
    {"slug": "asahikawa-gakki-kaitori", "name": "旭川", "region": "北海道", "prefectures": "北海道旭川市", "neighbors": "深川・富良野・士別"},
    {"slug": "hakodate-gakki-kaitori", "name": "函館", "region": "北海道", "prefectures": "北海道函館市", "neighbors": "北斗・七飯・森"},
    {"slug": "miyazaki-gakki-kaitori", "name": "宮崎", "region": "宮崎", "prefectures": "宮崎県宮崎市", "neighbors": "都城・日南・西都"},
    {"slug": "saga-gakki-kaitori", "name": "佐賀", "region": "佐賀", "prefectures": "佐賀県佐賀市", "neighbors": "鳥栖・小城・神埼"},
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
print(f"pages: {made} / metadata total: {len(meta)}")

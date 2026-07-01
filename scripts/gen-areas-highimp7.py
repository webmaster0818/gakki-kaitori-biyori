#!/usr/bin/env python3
"""楽器買取びより 残エリアバッチ7（中国/四国/九州/近畿/中部/沖縄の未カバー中堅市・面拡充の最終盤）。事実ベース厳守。"""
import importlib.util, json, os
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"; META = ROOT / "data" / "articles-metadata.json"
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ph5)

AREAS = [
    # ---- 中国 ----
    ("onomichi-gakki-kaitori", "尾道市", "広島", "広島県尾道市", "福山・三原・世羅"),
    ("shunan-gakki-kaitori", "周南市", "山口", "山口県周南市", "下松・防府・光"),
    ("ube-gakki-kaitori", "宇部市", "山口", "山口県宇部市", "山口・山陽小野田・美祢"),
    ("hofu-gakki-kaitori", "防府市", "山口", "山口県防府市", "山口・周南"),
    ("iwakuni-yamaguchi-gakki-kaitori", "岩国市", "山口", "山口県岩国市", "周南・大竹・廿日市"),
    ("tsuyama-gakki-kaitori", "津山市", "岡山", "岡山県津山市", "美作・真庭・岡山"),
    ("izumo-gakki-kaitori", "出雲市", "島根", "島根県出雲市", "松江・雲南・大田"),
    # ---- 四国 ----
    ("sakaide-gakki-kaitori", "坂出市", "香川", "香川県坂出市", "高松・丸亀・宇多津"),
    ("kannonji-gakki-kaitori", "観音寺市", "香川", "香川県観音寺市", "三豊・四国中央"),
    ("anan-gakki-kaitori", "阿南市", "徳島", "徳島県阿南市", "徳島・小松島"),
    ("saijo-ehime-gakki-kaitori", "西条市", "愛媛", "愛媛県西条市", "新居浜・今治・四国中央"),
    ("uwajima-gakki-kaitori", "宇和島市", "愛媛", "愛媛県宇和島市", "八幡浜・大洲"),
    # ---- 九州・沖縄 ----
    ("kasuga-fukuoka-gakki-kaitori", "春日市", "福岡", "福岡県春日市", "福岡・大野城・那珂川"),
    ("onojo-gakki-kaitori", "大野城市", "福岡", "福岡県大野城市", "春日・太宰府・福岡"),
    ("munakata-gakki-kaitori", "宗像市", "福岡", "福岡県宗像市", "福津・古賀・宮若"),
    ("nakatsu-oita-gakki-kaitori", "中津市", "大分", "大分県中津市", "宇佐・豊前・行橋"),
    ("hita-gakki-kaitori", "日田市", "大分", "大分県日田市", "玖珠・うきは・朝倉"),
    ("hyuga-gakki-kaitori", "日向市", "宮崎", "宮崎県日向市", "延岡・門川・都農"),
    ("miyakonojo-gakki-kaitori", "都城市", "宮崎", "宮崎県都城市", "三股・小林・霧島"),
    ("kanoya-gakki-kaitori", "鹿屋市", "鹿児島", "鹿児島県鹿屋市", "垂水・霧島・志布志"),
    ("kirishima-gakki-kaitori", "霧島市", "鹿児島", "鹿児島県霧島市", "鹿児島・姶良・都城"),
    ("karatsu-gakki-kaitori", "唐津市", "佐賀", "佐賀県唐津市", "佐賀・伊万里・糸島"),
    ("imari-gakki-kaitori", "伊万里市", "佐賀", "佐賀県伊万里市", "唐津・武雄・有田"),
    ("omura-gakki-kaitori", "大村市", "長崎", "長崎県大村市", "諫早・長崎・東彼杵"),
    ("okinawa-city-gakki-kaitori", "沖縄市", "沖縄", "沖縄県沖縄市", "うるま・宜野湾・北谷"),
    ("urasoe-gakki-kaitori", "浦添市", "沖縄", "沖縄県浦添市", "那覇・宜野湾・西原"),
    ("ginowan-gakki-kaitori", "宜野湾市", "沖縄", "沖縄県宜野湾市", "浦添・北谷・沖縄"),
    # ---- 近畿 ----
    ("tondabayashi-gakki-kaitori", "富田林市", "大阪", "大阪府富田林市", "河内長野・大阪狭山・羽曳野"),
    ("kawachinagano-gakki-kaitori", "河内長野市", "大阪", "大阪府河内長野市", "富田林・堺・和泉"),
    ("habikino-gakki-kaitori", "羽曳野市", "大阪", "大阪府羽曳野市", "藤井寺・松原・富田林"),
    ("matsubara-osaka-gakki-kaitori", "松原市", "大阪", "大阪府松原市", "堺・八尾・藤井寺"),
    ("izumisano-gakki-kaitori", "泉佐野市", "大阪", "大阪府泉佐野市", "泉南・貝塚・田尻"),
    # ---- 中部 ----
    ("konan-aichi-gakki-kaitori", "江南市", "愛知", "愛知県江南市", "一宮・犬山・岩倉"),
    ("toyokawa-aichi-gakki-kaitori", "豊川市", "愛知", "愛知県豊川市", "豊橋・蒲郡・新城"),
    ("tokoname-gakki-kaitori", "常滑市", "愛知", "愛知県常滑市", "半田・知多・東海"),
    ("nishio-gakki-kaitori", "西尾市", "愛知", "愛知県西尾市", "岡崎・碧南・安城"),
    ("gamagori-gakki-kaitori", "蒲郡市", "愛知", "愛知県蒲郡市", "豊川・幸田・岡崎"),
]


def main():
    meta = json.load(open(META, encoding="utf-8")); existing = {a["slug"] for a in meta}; added = []
    for slug, name, region, pref, neighbors in AREAS:
        if slug in existing or (ARTICLES_DIR / slug).exists():
            print(f"  skip: {slug}"); continue
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

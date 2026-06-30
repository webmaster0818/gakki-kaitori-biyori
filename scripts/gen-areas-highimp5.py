#!/usr/bin/env python3
"""楽器買取びより 残エリアバッチ5（多摩残/埼玉/千葉/神奈川/北関東/愛知/静岡/近畿の未カバー市）。事実ベース厳守。"""
import importlib.util, json, os
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"; META = ROOT / "data" / "articles-metadata.json"
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ph5)

AREAS = [
    # ---- 多摩（東京） ----
    ("kunitachi-gakki-kaitori", "国立市", "東京", "東京都国立市", "立川・国分寺・府中"),
    ("kodaira-gakki-kaitori", "小平市", "東京", "東京都小平市", "国分寺・小金井・東村山"),
    ("higashimurayama-gakki-kaitori", "東村山市", "東京", "東京都東村山市", "小平・東久留米・所沢"),
    ("higashikurume-gakki-kaitori", "東久留米市", "東京", "東京都東久留米市", "東村山・清瀬・西東京"),
    ("kiyose-gakki-kaitori", "清瀬市", "東京", "東京都清瀬市", "東久留米・東村山・所沢"),
    ("tama-tokyo-gakki-kaitori", "多摩市", "東京", "東京都多摩市", "八王子・町田・稲城・日野"),
    ("inagi-gakki-kaitori", "稲城市", "東京", "東京都稲城市", "多摩・調布・川崎"),
    ("komae-gakki-kaitori", "狛江市", "東京", "東京都狛江市", "調布・世田谷・川崎"),
    ("akishima-gakki-kaitori", "昭島市", "東京", "東京都昭島市", "立川・福生・八王子"),
    ("ome-gakki-kaitori", "青梅市", "東京", "東京都青梅市", "羽村・福生・あきる野"),
    # ---- 埼玉 ----
    ("toda-saitama-gakki-kaitori", "戸田市", "埼玉", "埼玉県戸田市", "蕨・さいたま・板橋"),
    ("warabi-gakki-kaitori", "蕨市", "埼玉", "埼玉県蕨市", "戸田・川口・さいたま"),
    ("asaka-gakki-kaitori", "朝霞市", "埼玉", "埼玉県朝霞市", "和光・志木・新座"),
    ("niiza-gakki-kaitori", "新座市", "埼玉", "埼玉県新座市", "朝霞・志木・東久留米"),
    ("iruma-gakki-kaitori", "入間市", "埼玉", "埼玉県入間市", "狭山・所沢・飯能"),
    ("kuki-saitama-gakki-kaitori", "久喜市", "埼玉", "埼玉県久喜市", "加須・白岡・幸手"),
    # ---- 千葉 ----
    ("kamagaya-gakki-kaitori", "鎌ケ谷市", "千葉", "千葉県鎌ケ谷市", "船橋・松戸・柏"),
    ("yachiyo-gakki-kaitori", "八千代市", "千葉", "千葉県八千代市", "習志野・船橋・佐倉"),
    ("urayasu-gakki-kaitori", "浦安市", "千葉", "千葉県浦安市", "市川・江戸川・船橋"),
    ("narita-gakki-kaitori", "成田市", "千葉", "千葉県成田市", "佐倉・富里・印西"),
    # ---- 神奈川 ----
    ("ebina-gakki-kaitori", "海老名市", "神奈川", "神奈川県海老名市", "厚木・座間・大和"),
    ("zama-gakki-kaitori", "座間市", "神奈川", "神奈川県座間市", "海老名・相模原・厚木"),
    ("hadano-gakki-kaitori", "秦野市", "神奈川", "神奈川県秦野市", "厚木・平塚・伊勢原"),
    # ---- 北関東 ----
    ("ota-gunma-gakki-kaitori", "太田市", "群馬", "群馬県太田市", "伊勢崎・桐生・館林"),
    ("ashikaga-gakki-kaitori", "足利市", "栃木", "栃木県足利市", "佐野・桐生・太田"),
    ("kiryu-gakki-kaitori", "桐生市", "群馬", "群馬県桐生市", "太田・伊勢崎・足利"),
    # ---- 愛知 ----
    ("kariya-gakki-kaitori", "刈谷市", "愛知", "愛知県刈谷市", "安城・知立・大府"),
    ("anjo-gakki-kaitori", "安城市", "愛知", "愛知県安城市", "刈谷・岡崎・西尾"),
    ("seto-gakki-kaitori", "瀬戸市", "愛知", "愛知県瀬戸市", "尾張旭・春日井・名古屋"),
    # ---- 静岡 ----
    ("mishima-gakki-kaitori", "三島市", "静岡", "静岡県三島市", "沼津・裾野・富士"),
    ("fujieda-gakki-kaitori", "藤枝市", "静岡", "静岡県藤枝市", "焼津・島田・静岡"),
    # ---- 近畿 ----
    ("uji-gakki-kaitori", "宇治市", "京都", "京都府宇治市", "京都・城陽・久御山"),
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

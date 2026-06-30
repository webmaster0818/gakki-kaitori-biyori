#!/usr/bin/env python3
"""楽器買取びより 中堅市バッチ（中核市/特例市クラスの未カバー市・関東/多摩/近畿/中部）。事実ベース厳守。"""
import importlib.util, json, os
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"; META = ROOT / "data" / "articles-metadata.json"
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ph5)

AREAS = [
    # ---- 北関東 ----
    ("maebashi-gakki-kaitori", "前橋市", "群馬", "群馬県前橋市", "高崎・伊勢崎・渋川"),
    ("isesaki-gakki-kaitori", "伊勢崎市", "群馬", "群馬県伊勢崎市", "前橋・高崎・太田"),
    ("oyama-gakki-kaitori", "小山市", "栃木", "栃木県小山市", "宇都宮・栃木・結城"),
    ("tsuchiura-gakki-kaitori", "土浦市", "茨城", "茨城県土浦市", "つくば・水戸・牛久"),
    ("tsukuba-gakki-kaitori", "つくば市", "茨城", "茨城県つくば市", "土浦・水戸・牛久"),
    ("hitachi-gakki-kaitori", "日立市", "茨城", "茨城県日立市", "水戸・高萩・常陸太田"),
    # ---- 埼玉 ----
    ("kasukabe-gakki-kaitori", "春日部市", "埼玉", "埼玉県春日部市", "越谷・さいたま・草加"),
    ("soka-gakki-kaitori", "草加市", "埼玉", "埼玉県草加市", "越谷・川口・八潮"),
    ("ageo-gakki-kaitori", "上尾市", "埼玉", "埼玉県上尾市", "さいたま・桶川・伊奈"),
    ("kumagaya-gakki-kaitori", "熊谷市", "埼玉", "埼玉県熊谷市", "行田・深谷・本庄"),
    # ---- 千葉 ----
    ("narashino-gakki-kaitori", "習志野市", "千葉", "千葉県習志野市", "船橋・千葉・八千代"),
    ("ichihara-gakki-kaitori", "市原市", "千葉", "千葉県市原市", "千葉・木更津・茂原"),
    ("kisarazu-gakki-kaitori", "木更津市", "千葉", "千葉県木更津市", "市原・君津・袖ケ浦"),
    ("nagareyama-gakki-kaitori", "流山市", "千葉", "千葉県流山市", "柏・松戸・野田"),
    ("noda-gakki-kaitori", "野田市", "千葉", "千葉県野田市", "流山・柏・春日部"),
    # ---- 神奈川 ----
    ("odawara-gakki-kaitori", "小田原市", "神奈川", "神奈川県小田原市", "平塚・秦野・南足柄"),
    ("atsugi-gakki-kaitori", "厚木市", "神奈川", "神奈川県厚木市", "海老名・伊勢原・大和"),
    ("yamato-kanagawa-gakki-kaitori", "大和市", "神奈川", "神奈川県大和市", "相模原・海老名・藤沢"),
    ("hiratsuka-gakki-kaitori", "平塚市", "神奈川", "神奈川県平塚市", "茅ヶ崎・藤沢・小田原"),
    ("chigasaki-gakki-kaitori", "茅ヶ崎市", "神奈川", "神奈川県茅ヶ崎市", "平塚・藤沢・寒川"),
    # ---- 多摩（東京） ----
    ("fuchu-tokyo-gakki-kaitori", "府中市", "東京", "東京都府中市", "調布・国分寺・三鷹・多摩"),
    ("chofu-tokyo-gakki-kaitori", "調布市", "東京", "東京都調布市", "府中・三鷹・狛江"),
    ("mitaka-gakki-kaitori", "三鷹市", "東京", "東京都三鷹市", "武蔵野・調布・杉並"),
    ("musashino-gakki-kaitori", "武蔵野市", "東京", "東京都武蔵野市", "三鷹・杉並・西東京"),
    ("hino-tokyo-gakki-kaitori", "日野市", "東京", "東京都日野市", "八王子・立川・多摩"),
    ("nishitokyo-gakki-kaitori", "西東京市", "東京", "東京都西東京市", "武蔵野・練馬・小平"),
    ("kokubunji-gakki-kaitori", "国分寺市", "東京", "東京都国分寺市", "国立・小金井・府中"),
    # ---- 近畿 ----
    ("takarazuka-gakki-kaitori", "宝塚市", "兵庫", "兵庫県宝塚市", "西宮・伊丹・川西"),
    ("itami-gakki-kaitori", "伊丹市", "兵庫", "兵庫県伊丹市", "尼崎・宝塚・西宮"),
    ("kishiwada-gakki-kaitori", "岸和田市", "大阪", "大阪府岸和田市", "堺・和泉・貝塚"),
    ("ibaraki-osaka-gakki-kaitori", "茨木市", "大阪", "大阪府茨木市", "高槻・吹田・摂津"),
    # ---- 中部 ----
    ("toyota-gakki-kaitori", "豊田市", "愛知", "愛知県豊田市", "岡崎・名古屋・みよし"),
]


def main():
    meta = json.load(open(META, encoding="utf-8")); existing = {a["slug"] for a in meta}; added = []
    for slug, name, region, pref, neighbors in AREAS:
        if slug in existing or (ARTICLES_DIR / slug).exists():
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

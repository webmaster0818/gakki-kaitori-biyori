#!/usr/bin/env python3
"""楽器買取びより 残エリアバッチ6（愛知/静岡/岐阜/三重/近畿/中国/四国/九州の未カバー中堅市）。事実ベース厳守・generate-phase5のbuild_page再利用。"""
import importlib.util, json, os
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"; META = ROOT / "data" / "articles-metadata.json"
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ph5)

AREAS = [
    # ---- 愛知 ----
    ("komaki-gakki-kaitori", "小牧市", "愛知", "愛知県小牧市", "春日井・犬山・岩倉"),
    ("inazawa-gakki-kaitori", "稲沢市", "愛知", "愛知県稲沢市", "一宮・清須・名古屋"),
    ("handa-gakki-kaitori", "半田市", "愛知", "愛知県半田市", "東海・常滑・阿久比"),
    ("tokai-aichi-gakki-kaitori", "東海市", "愛知", "愛知県東海市", "大府・知多・名古屋"),
    # ---- 静岡 ----
    ("iwata-gakki-kaitori", "磐田市", "静岡", "静岡県磐田市", "浜松・袋井・掛川"),
    ("fujinomiya-gakki-kaitori", "富士宮市", "静岡", "静岡県富士宮市", "富士・静岡"),
    ("kakegawa-gakki-kaitori", "掛川市", "静岡", "静岡県掛川市", "袋井・菊川・磐田"),
    # ---- 岐阜 ----
    ("ogaki-gakki-kaitori", "大垣市", "岐阜", "岐阜県大垣市", "岐阜・羽島・瑞穂"),
    ("tajimi-gakki-kaitori", "多治見市", "岐阜", "岐阜県多治見市", "土岐・可児・春日井"),
    ("kakamigahara-gakki-kaitori", "各務原市", "岐阜", "岐阜県各務原市", "岐阜・犬山・関"),
    # ---- 三重 ----
    ("matsusaka-gakki-kaitori", "松阪市", "三重", "三重県松阪市", "津・伊勢・多気"),
    ("kuwana-gakki-kaitori", "桑名市", "三重", "三重県桑名市", "四日市・いなべ・弥富"),
    # ---- 大阪 ----
    ("izumi-osaka-gakki-kaitori", "和泉市", "大阪", "大阪府和泉市", "岸和田・堺・泉大津"),
    ("moriguchi-gakki-kaitori", "守口市", "大阪", "大阪府守口市", "門真・大東・大阪"),
    ("kadoma-gakki-kaitori", "門真市", "大阪", "大阪府門真市", "守口・寝屋川・大東"),
    ("minoo-gakki-kaitori", "箕面市", "大阪", "大阪府箕面市", "池田・豊中・吹田"),
    ("ikeda-osaka-gakki-kaitori", "池田市", "大阪", "大阪府池田市", "箕面・豊中・川西"),
    # ---- 兵庫 ----
    ("sanda-gakki-kaitori", "三田市", "兵庫", "兵庫県三田市", "神戸・三木・宝塚"),
    ("takasago-gakki-kaitori", "高砂市", "兵庫", "兵庫県高砂市", "加古川・姫路・明石"),
    ("ashiya-gakki-kaitori", "芦屋市", "兵庫", "兵庫県芦屋市", "西宮・神戸"),
    # ---- 滋賀 ----
    ("kusatsu-shiga-gakki-kaitori", "草津市", "滋賀", "滋賀県草津市", "大津・守山・栗東"),
    ("hikone-gakki-kaitori", "彦根市", "滋賀", "滋賀県彦根市", "長浜・近江八幡・米原"),
    ("nagahama-gakki-kaitori", "長浜市", "滋賀", "滋賀県長浜市", "彦根・米原・高島"),
    # ---- 京都 ----
    ("nagaokakyo-gakki-kaitori", "長岡京市", "京都", "京都府長岡京市", "向日・京都・大山崎"),
    ("kameoka-gakki-kaitori", "亀岡市", "京都", "京都府亀岡市", "京都・南丹・京丹波"),
    ("maizuru-gakki-kaitori", "舞鶴市", "京都", "京都府舞鶴市", "福知山・綾部・宮津"),
    # ---- 中国 ----
    ("kure-gakki-kaitori", "呉市", "広島", "広島県呉市", "広島・東広島・江田島"),
    ("higashihiroshima-gakki-kaitori", "東広島市", "広島", "広島県東広島市", "広島・呉・竹原"),
    # ---- 四国 ----
    ("imabari-gakki-kaitori", "今治市", "愛媛", "愛媛県今治市", "松山・西条・しまなみ"),
    ("marugame-gakki-kaitori", "丸亀市", "香川", "香川県丸亀市", "高松・坂出・善通寺"),
    ("niihama-gakki-kaitori", "新居浜市", "愛媛", "愛媛県新居浜市", "西条・四国中央"),
    # ---- 九州 ----
    ("omuta-gakki-kaitori", "大牟田市", "福岡", "福岡県大牟田市", "久留米・柳川・荒尾"),
    ("iizuka-gakki-kaitori", "飯塚市", "福岡", "福岡県飯塚市", "北九州・田川・直方"),
    ("nobeoka-gakki-kaitori", "延岡市", "宮崎", "宮崎県延岡市", "日向・宮崎"),
    ("isahaya-gakki-kaitori", "諫早市", "長崎", "長崎県諫早市", "長崎・大村・島原"),
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

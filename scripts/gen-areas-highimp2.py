#!/usr/bin/env python3
"""楽器買取びより 高表示エリア 第2バッチ：政令市の区（名古屋完成/大阪/横浜）。
generate-phase5-areas.py の build_page() を再利用。事実ベース厳守。"""
import importlib.util, json, os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
META = ROOT / "data" / "articles-metadata.json"
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ph5)

AREAS = [
    # ---- 名古屋市の残り区（16区を完成） ----
    ("nagoya-meito-gakki-kaitori", "名古屋市名東区", "愛知", "愛知県名古屋市名東区", "千種・守山・天白・長久手"),
    ("nagoya-higashi-gakki-kaitori", "名古屋市東区", "愛知", "愛知県名古屋市東区", "北・千種・中・守山"),
    ("nagoya-nishi-gakki-kaitori", "名古屋市西区", "愛知", "愛知県名古屋市西区", "北・中村・中・清須"),
    ("nagoya-minami-gakki-kaitori", "名古屋市南区", "愛知", "愛知県名古屋市南区", "瑞穂・熱田・緑・笠寺"),
    ("nagoya-kita-gakki-kaitori", "名古屋市北区", "愛知", "愛知県名古屋市北区", "西・東・守山・北名古屋"),
    ("nagoya-minato-gakki-kaitori", "名古屋市港区", "愛知", "愛知県名古屋市港区", "中川・南・熱田・飛島"),
    ("nagoya-atsuta-gakki-kaitori", "名古屋市熱田区", "愛知", "愛知県名古屋市熱田区", "中・瑞穂・南・港"),
    ("nagoya-nakamura-gakki-kaitori", "名古屋市中村区", "愛知", "愛知県名古屋市中村区", "中・西・中川・あま"),
    # ---- 大阪市の主要区 ----
    ("osaka-tennoji-gakki-kaitori", "大阪市天王寺区", "大阪", "大阪府大阪市天王寺区", "中央・阿倍野・生野・東成"),
    ("osaka-abeno-gakki-kaitori", "大阪市阿倍野区", "大阪", "大阪府大阪市阿倍野区", "天王寺・西成・住吉・東住吉"),
    ("osaka-naniwa-gakki-kaitori", "大阪市浪速区", "大阪", "大阪府大阪市浪速区", "中央・西・西成・天王寺"),
    ("osaka-yodogawa-gakki-kaitori", "大阪市淀川区", "大阪", "大阪府大阪市淀川区", "西淀川・東淀川・北・吹田"),
    ("osaka-higashiyodogawa-gakki-kaitori", "大阪市東淀川区", "大阪", "大阪府大阪市東淀川区", "淀川・都島・旭・吹田"),
    ("osaka-hirano-gakki-kaitori", "大阪市平野区", "大阪", "大阪府大阪市平野区", "東住吉・生野・八尾・松原"),
    ("osaka-sumiyoshi-gakki-kaitori", "大阪市住吉区", "大阪", "大阪府大阪市住吉区", "阿倍野・東住吉・西成・住之江"),
    ("osaka-nishi-gakki-kaitori", "大阪市西区", "大阪", "大阪府大阪市西区", "中央・浪速・港・大正"),
    ("osaka-fukushima-gakki-kaitori", "大阪市福島区", "大阪", "大阪府大阪市福島区", "北・此花・西・梅田"),
    ("osaka-miyakojima-gakki-kaitori", "大阪市都島区", "大阪", "大阪府大阪市都島区", "北・旭・城東・東淀川"),
    ("osaka-joto-gakki-kaitori", "大阪市城東区", "大阪", "大阪府大阪市城東区", "都島・旭・鶴見・東成"),
    ("osaka-ikuno-gakki-kaitori", "大阪市生野区", "大阪", "大阪府大阪市生野区", "天王寺・東成・東住吉・平野"),
    # ---- 横浜市の主要区 ----
    ("yokohama-kohoku-gakki-kaitori", "横浜市港北区", "神奈川", "神奈川県横浜市港北区", "鶴見・神奈川・都筑・川崎"),
    ("yokohama-aoba-gakki-kaitori", "横浜市青葉区", "神奈川", "神奈川県横浜市青葉区", "都筑・緑・川崎・町田"),
    ("yokohama-totsuka-gakki-kaitori", "横浜市戸塚区", "神奈川", "神奈川県横浜市戸塚区", "泉・栄・港南・鎌倉"),
    ("yokohama-tsurumi-gakki-kaitori", "横浜市鶴見区", "神奈川", "神奈川県横浜市鶴見区", "神奈川・港北・川崎"),
    ("yokohama-kanagawa-gakki-kaitori", "横浜市神奈川区", "神奈川", "神奈川県横浜市神奈川区", "西・鶴見・港北・横浜駅"),
    ("yokohama-nishi-gakki-kaitori", "横浜市西区", "神奈川", "神奈川県横浜市西区", "中・神奈川・保土ケ谷・横浜駅"),
    ("yokohama-naka-gakki-kaitori", "横浜市中区", "神奈川", "神奈川県横浜市中区", "西・南・磯子・関内"),
    ("yokohama-konan-gakki-kaitori", "横浜市港南区", "神奈川", "神奈川県横浜市港南区", "南・戸塚・栄・磯子"),
    ("yokohama-asahi-gakki-kaitori", "横浜市旭区", "神奈川", "神奈川県横浜市旭区", "保土ケ谷・緑・瀬谷・二俣川"),
    ("yokohama-midori-gakki-kaitori", "横浜市緑区", "神奈川", "神奈川県横浜市緑区", "青葉・都筑・旭・町田"),
    ("yokohama-tsuzuki-gakki-kaitori", "横浜市都筑区", "神奈川", "神奈川県横浜市都筑区", "港北・青葉・緑・川崎"),
    ("yokohama-isogo-gakki-kaitori", "横浜市磯子区", "神奈川", "神奈川県横浜市磯子区", "中・南・港南・金沢"),
]


def main():
    meta = json.load(open(META, encoding="utf-8"))
    existing = {a["slug"] for a in meta}
    added = []
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

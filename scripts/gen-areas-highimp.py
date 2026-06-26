#!/usr/bin/env python3
"""楽器買取びより 高表示エリア拡張（GSC表示回数に基づく未カバー区/市）。
generate-phase5-areas.py の build_page() を再利用（importlibで読み込み、main非実行）。
事実ベース厳守：相場は目安・無料査定で確認・金額を保証しない注記（テンプレ準拠）。"""
import importlib.util, json, os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
META = ROOT / "data" / "articles-metadata.json"

# build_page を再利用（AREAS/main は使わない）
spec = importlib.util.spec_from_file_location("ph5", os.path.join(ROOT, "scripts/generate-phase5-areas.py"))
ph5 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ph5)

# (slug, name, region, prefectures, neighbors)  ※GSC高表示×未カバーを優先
AREAS = [
    # ---- 東京23区（区単位で未カバー。豊島区はGSC実需要最多） ----
    ("toshima-gakki-kaitori", "豊島区", "東京", "東京都豊島区", "新宿・文京・板橋・北・練馬"),
    ("setagaya-gakki-kaitori", "世田谷区", "東京", "東京都世田谷区", "渋谷・目黒・杉並・大田・狛江"),
    ("nerima-gakki-kaitori", "練馬区", "東京", "東京都練馬区", "豊島・板橋・中野・杉並・和光"),
    ("ota-tokyo-gakki-kaitori", "大田区", "東京", "東京都大田区", "品川・世田谷・川崎"),
    ("adachi-gakki-kaitori", "足立区", "東京", "東京都足立区", "荒川・葛飾・北・草加・川口"),
    ("edogawa-gakki-kaitori", "江戸川区", "東京", "東京都江戸川区", "江東・葛飾・市川・浦安"),
    ("suginami-gakki-kaitori", "杉並区", "東京", "東京都杉並区", "中野・練馬・世田谷・武蔵野"),
    ("itabashi-tokyo-gakki-kaitori", "板橋区", "東京", "東京都板橋区", "練馬・豊島・北・和光・戸田"),
    ("katsushika-gakki-kaitori", "葛飾区", "東京", "東京都葛飾区", "足立・江戸川・墨田・松戸"),
    ("shinagawa-gakki-kaitori", "品川区", "東京", "東京都品川区", "大田・目黒・港・大井"),
    ("kita-tokyo-gakki-kaitori", "北区", "東京", "東京都北区", "板橋・豊島・荒川・足立・川口"),
    ("nakano-gakki-kaitori", "中野区", "東京", "東京都中野区", "新宿・杉並・練馬・渋谷"),
    ("meguro-gakki-kaitori", "目黒区", "東京", "東京都目黒区", "世田谷・品川・渋谷・大田"),
    ("minato-tokyo-gakki-kaitori", "港区", "東京", "東京都港区", "千代田・中央・品川・渋谷"),
    ("koto-gakki-kaitori", "江東区", "東京", "東京都江東区", "中央・墨田・江戸川・港"),
    ("sumida-gakki-kaitori", "墨田区", "東京", "東京都墨田区", "台東・江東・葛飾・荒川"),
    ("arakawa-gakki-kaitori", "荒川区", "東京", "東京都荒川区", "台東・足立・北・文京・墨田"),
    ("taito-gakki-kaitori", "台東区", "東京", "東京都台東区", "文京・千代田・墨田・荒川"),
    ("bunkyo-gakki-kaitori", "文京区", "東京", "東京都文京区", "千代田・新宿・豊島・台東・北"),
    ("chiyoda-gakki-kaitori", "千代田区", "東京", "東京都千代田区", "中央・港・新宿・文京・台東"),
    ("chuo-tokyo-gakki-kaitori", "中央区", "東京", "東京都中央区", "千代田・港・台東・江東"),
    # ---- 名古屋市の区（GSCに実需要） ----
    ("nagoya-showa-gakki-kaitori", "名古屋市昭和区", "愛知", "愛知県名古屋市昭和区", "千種・瑞穂・天白・名東"),
    ("nagoya-midori-gakki-kaitori", "名古屋市緑区", "愛知", "愛知県名古屋市緑区", "天白・南・豊明・大府"),
    ("nagoya-mizuho-gakki-kaitori", "名古屋市瑞穂区", "愛知", "愛知県名古屋市瑞穂区", "昭和・熱田・南・天白"),
    ("nagoya-tempaku-gakki-kaitori", "名古屋市天白区", "愛知", "愛知県名古屋市天白区", "昭和・緑・名東・日進"),
    ("nagoya-chikusa-gakki-kaitori", "名古屋市千種区", "愛知", "愛知県名古屋市千種区", "東・昭和・名東・守山"),
    ("nagoya-moriyama-gakki-kaitori", "名古屋市守山区", "愛知", "愛知県名古屋市守山区", "千種・名東・春日井・尾張旭"),
    ("nagoya-nakagawa-gakki-kaitori", "名古屋市中川区", "愛知", "愛知県名古屋市中川区", "中村・中・港・あま"),
    ("nagoya-naka-gakki-kaitori", "名古屋市中区", "愛知", "愛知県名古屋市中区", "東・中村・昭和・熱田"),
    # ---- 静岡/愛知の中堅市（GSC表示あり） ----
    ("kosai-gakki-kaitori", "湖西市", "静岡", "静岡県湖西市", "浜松・豊橋・新居町"),
    ("yaizu-gakki-kaitori", "焼津市", "静岡", "静岡県焼津市", "静岡・藤枝・島田"),
    ("kitanagoya-gakki-kaitori", "北名古屋市", "愛知", "愛知県北名古屋市", "名古屋・春日井・清須・小牧"),
]


def main():
    meta = json.load(open(META, encoding="utf-8"))
    existing = {a["slug"] for a in meta}
    added = []
    for slug, name, region, pref, neighbors in AREAS:
        if slug in existing:
            print(f"  skip (exists): {slug}")
            continue
        area = {"slug": slug, "name": name, "region": region, "prefectures": pref, "neighbors": neighbors}
        d = ARTICLES_DIR / slug
        d.mkdir(parents=True, exist_ok=True)
        (d / "page.tsx").write_text(ph5.build_page(area), encoding="utf-8")
        meta.append({
            "slug": slug,
            "title": f"楽器買取 {name}おすすめ3選",
            "shortTitle": f"楽器買取 {name}おすすめ3選",
            "badge": name,
            "description": f"{name}（{pref}）の楽器買取を出張・店頭・宅配で比較。送客3社とエリア状況を解説。",
            "category": "region",
        })
        added.append(slug)
        print(f"  ✅ {slug} ({name})")
    json.dump(meta, open(META, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"\ngenerated: {len(added)}  metadata total: {len(meta)}")


if __name__ == "__main__":
    main()

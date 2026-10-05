#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""同じ都道府県／同じ楽器カテゴリの記事グループ（data/related-groups.json）を作る。

components/SameGroupArticles.tsx が読む。記事を足した・noindex を変えたら再実行する。

  python3 scripts/gen-related-groups.py

なぜ必要か（2026-10-05 公開前チェック [14]）:
  地域記事179本・ブランド/楽器/モデル記事42本が「記事一覧からしかリンクされていない」
  実質孤立だった。地域記事は関連記事ブロック自体を持たず、型番記事12本は
  articles-metadata.json にも載っていなかった（一覧にすら出ない）。

グループの決め方（すべて記事ソースに書かれている事実から機械的に決める）:
  - 地域記事: description 内の都道府県名。拾えない旧記事は PREF_FIX（都市→都道府県の事実）。
    インデックス対象が MIN_PREF 本未満の県は、同じ地方（8地方区分）の小さい県どうしでまとめる。
  - それ以外: その記事の RelatedArticles の relatedSlugs で最初に出てくる「楽器カテゴリ」記事。
    （例: warwick-thumb → bass-kaitori）。他の記事から親にされている楽器記事は自分が親。
    relatedSlugs の先頭が実際の楽器と違う3本は HUB_FIX で正す（トロンボーンがサックス扱い等）。
    3本未満にしかならない親は、同じ楽器の系統（FAMILY＝管楽器・DTM/DJ 等）でまとめる。
    楽器カテゴリへの関連を持たない記事（売り方ガイド等）は同じ category どうし。
    それでも1本だけのグループは出力しない（ブロックを出さない）。
  - noindex の記事はどのグループにも入れない（導線を増やさない）。
"""
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT / "app" / "articles"
MIN_PREF = 4

PREFS = ("北海道 青森県 岩手県 宮城県 秋田県 山形県 福島県 茨城県 栃木県 群馬県 埼玉県 千葉県 東京都 神奈川県 "
         "新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県 三重県 滋賀県 京都府 大阪府 兵庫県 "
         "奈良県 和歌山県 鳥取県 島根県 岡山県 広島県 山口県 徳島県 香川県 愛媛県 高知県 福岡県 佐賀県 長崎県 "
         "熊本県 大分県 宮崎県 鹿児島県 沖縄県").split()
PREF_RX = re.compile("|".join(PREFS))
AREA = {}
for area, names in {
    "北海道": "北海道",
    "東北": "青森県 岩手県 宮城県 秋田県 山形県 福島県",
    "関東": "茨城県 栃木県 群馬県 埼玉県 千葉県 東京都 神奈川県",
    "中部": "新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県",
    "近畿": "三重県 滋賀県 京都府 大阪府 兵庫県 奈良県 和歌山県",
    "中国": "鳥取県 島根県 岡山県 広島県 山口県",
    "四国": "徳島県 香川県 愛媛県 高知県",
    "九州・沖縄": "福岡県 佐賀県 長崎県 熊本県 大分県 宮崎県 鹿児島県 沖縄県",
}.items():
    for n in names.split():
        AREA[n] = area

# description に都道府県名が無い旧記事。都市・地区 → 都道府県（地理上の事実）
PREF_FIX = {
    "fukuoka-gakki-kaitori": "福岡県", "hiroshima-gakki-kaitori": "広島県",
    "ikebukuro-gakki-kaitori": "東京都", "kawasaki-gakki-kaitori": "神奈川県",
    "kobe-gakki-kaitori": "兵庫県", "kyoto-gakki-kaitori": "京都府",
    "nagoya-gakki-kaitori": "愛知県", "ochanomizu-gakki-kaitori": "東京都",
    "omiya-gakki-kaitori": "埼玉県", "shibuya-gakki-kaitori": "東京都",
    "shinjuku-gakki-kaitori": "東京都", "tokyo-gakki-kaitori": "東京都",
    "yokohama-gakki-kaitori": "神奈川県",
    "guitar-kaitori-nagoya": "愛知県", "guitar-kaitori-fukuoka": "福岡県",
    "guitar-kaitori-kobe": "兵庫県", "guitar-kaitori-kyoto": "京都府",
    "guitar-kaitori-sendai": "宮城県", "guitar-kaitori-chiba": "千葉県",
    "guitar-kaitori-osaka": "大阪府", "guitar-kaitori-hiroshima": "広島県",
    "guitar-kaitori-tokyo": "東京都", "guitar-kaitori-yokohama": "神奈川県",
    "guitar-kaitori-sapporo": "北海道", "guitar-kaitori-aichi": "愛知県",
}
# relatedSlugs の先頭が別の楽器になっている型番記事 → 実際の楽器カテゴリ記事
#   （2026-08-26 に存在しない kangakki-kaitori を saxophone-kaitori へ一括振替した名残）
HUB_FIX = {
    "bach-42-trombone-kaitori": "trombone-kaitori",   # トロンボーン
    "buffet-r13-kaitori": "clarinet-kaitori",         # クラリネット
    "muramatsu-flute-kaitori": "flute-kaitori",       # フルート
    "kalimba-kaitori": "drum-kaitori",                # カリンバは打楽器（relatedSlugs 先頭はハーモニカ）
}
# グループに入れない記事。
#   tama-kaitori: metadata は「楽器買取 多摩エリア」（region）だが、ページの中身はドラムの TAMA。
#   表示名と中身が食い違っているので、直るまで関連ブロックに出さない（誤った名前の導線を増やさない）
SKIP = {"tama-kaitori"}
# 親記事（楽器カテゴリ）の系統。3本未満の小さいグループをまとめるときだけ使う
FAMILY = {}
for fam, slugs in {
    "管楽器": "saxophone clarinet oboe flute trumpet trombone euphonium tuba horn cornet recorder harmonica",
    "弦楽器": "violin viola cello contrabass harp",
    "和楽器": "koto shamisen shakuhachi wadaiko",
    "鍵盤楽器": "piano grand-piano denshi-piano keyboard electone accordion",
    "DTM・DJ機材": "dj-kizai turntable mixer audio-interface midi-keyboard synthesizer microphone",
    "状態・事情別": "kowareta-gakki kabi-gakki ihin-gakki",
}.items():
    for x in slugs.split():
        FAMILY[x + "-kaitori"] = fam

CAT_LABEL = {"brand": "ブランド別の買取ガイド", "model": "モデル別の買取ガイド",
             "howto": "売り方・高く売るためのガイド", "instrument": "楽器別の買取ガイド",
             "region": "地域別の買取ガイド"}


def main() -> None:
    meta = {m["slug"]: m for m in json.loads((ROOT / "data" / "articles-metadata.json").read_text())}
    pages = {}
    for d in sorted(ARTICLES.iterdir()):
        f = d / "page.tsx"
        if not f.is_file():
            continue
        src = f.read_text()
        m = re.search(r'relatedSlugs=\{\[(.*?)\]\}', src, re.S)
        rel = re.findall(r'"([^"]+)"', m.group(1)) if m else []
        desc = re.search(r'description:\s*"(.*?)",?\n', src)
        crumb = re.findall(r'<span className="text-foreground font-medium">([^<{]+)</span>', src)
        pages[d.name] = {
            "noindex": bool(re.search(r"robots:\s*\{\s*index:\s*false", src)),
            "rel": rel,
            "desc": desc.group(1) if desc else "",
            "crumb": crumb[-1].strip() if crumb else "",
        }

    def label(slug):
        if slug in meta:
            return meta[slug]["shortTitle"]
        return pages[slug]["crumb"]

    live = [s for s, p in pages.items() if not p["noindex"] and s not in SKIP]
    key, sortkey, unresolved = {}, {}, []

    # --- 地域 ---
    pref = {}
    for s in live:
        if meta.get(s, {}).get("category") != "region":
            continue
        hit = PREF_RX.search(meta[s]["description"] + pages[s]["desc"])
        p = hit.group(0) if hit else PREF_FIX.get(s)
        if not p:
            unresolved.append(s)   # 「地域以外」として扱い、下で警告する
            continue
        pref[s] = p
        addr = re.search(r"（((?:%s)[^）]*)）" % "|".join(PREFS), meta[s]["description"] + pages[s]["desc"])
        sortkey[s] = (PREFS.index(p), addr.group(1) if addr else p, s)
    n_pref = Counter(pref.values())
    glabel = {}
    for s, p in pref.items():
        if n_pref[p] >= MIN_PREF:
            key[s] = "pref:" + p
            glabel[key[s]] = f"{p}のほかの地域の楽器買取"
        else:
            key[s] = "area:" + AREA[p]
            glabel[key[s]] = f"{AREA[p]}地方のほかの地域の楽器買取"

    # --- 地域以外: 最初に出てくる楽器カテゴリ記事を親にする ---
    rest = [s for s in live if s not in pref]
    raw = {}
    for s in rest:
        raw[s] = HUB_FIX.get(s) or next((r for r in pages[s]["rel"]
                       if r != s and meta.get(r, {}).get("category") == "instrument"
                       and r in pages and not pages[r]["noindex"]), None)
    hubs = {v for v in raw.values() if v}
    for s in rest:
        cat = meta.get(s, {}).get("category", "model")
        if s in hubs:
            key[s] = "inst:" + s
        elif raw[s]:
            key[s] = "inst:" + raw[s]
        else:
            key[s] = "cat:" + cat
            glabel[key[s]] = CAT_LABEL[cat]
        order = ["instrument", "brand", "model", "howto", "region"].index(cat)
        sortkey[s] = (0 if key[s] == "inst:" + s else 1, order, s)
    for h in hubs:
        glabel["inst:" + h] = f"「{label(h)}」と関連する買取ガイド"
    # 3本未満の親グループは系統でまとめる
    n_key = Counter(key.values())
    for s in rest:
        k = key[s]
        fam = FAMILY.get(k[5:]) if k.startswith("inst:") else None
        if fam and n_key[k] < 3:
            key[s] = "family:" + fam
            glabel[key[s]] = f"{fam}の買取ガイド"
            sortkey[s] = (0, k, sortkey[s])

    groups = defaultdict(list)
    for s, k in key.items():
        groups[k].append(s)
    groups = {k: v for k, v in groups.items() if len(v) >= 2}
    out = {"_generated_by": "scripts/gen-related-groups.py", "groups": {}, "labels": {}}
    for k in sorted(groups):
        members = sorted(groups[k], key=lambda s: sortkey[s])
        out["groups"][k] = {"label": glabel[k], "members": members}
        for s in members:
            out["labels"][s] = label(s)
    (ROOT / "data" / "related-groups.json").write_text(
        json.dumps(out, ensure_ascii=False, indent=1) + "\n")

    sizes = {k: len(v["members"]) for k, v in out["groups"].items()}
    n_noindex = sum(p["noindex"] for p in pages.values())
    print(f"記事 {len(pages)}（noindex {n_noindex}・除外 {len(SKIP)}）→ グループ {len(sizes)}・所属 {sum(sizes.values())}")
    small = {k: v for k, v in sizes.items() if v < 3}
    if small:
        print("⚠️ 3本未満のグループ（相互リンクが1本以下になる）:", small)
    if unresolved:
        print("⚠️ category=region だが都道府県が無い記事（地域以外として扱った。地域記事なら PREF_FIX に足す）:", unresolved)
    nolabel = [s for s, v in out["labels"].items() if not v]
    if nolabel:
        print("⚠️ 表示名が取れない記事:", nolabel)


if __name__ == "__main__":
    main()

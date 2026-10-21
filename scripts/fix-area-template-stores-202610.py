#!/usr/bin/env python3
"""地域テンプレの「方法1 出張」「方法2 店頭」とウリエルの対応エリアを公式の範囲に直す（冪等）。

公式（2026-10-21 確認）:
- ウリエル 出張エリア uriel-cuore.co.jp/visit/：関東=茨城・栃木・埼玉・千葉・東京・神奈川／中部=岐阜・静岡・愛知／
  近畿=兵庫・京都・滋賀・大阪・奈良・和歌山・三重／中国／四国／九州（沖縄は対象外）。「一部対応できない市町村がございます」
- ウリエル 店舗 /shops/：川崎 ラ チッタデッラ店（神奈川県川崎市川崎区小川町4-1）の1店舗。その場で現金買取
- ティファナ 出張 tifana.net/visit/：東京都・埼玉県・神奈川県・千葉県の一部地域（千葉県は全域が相談地域）
- ティファナ 店舗 /access/：東京都と埼玉県（川口店・イオンモール川口前川店・イオンモール上尾店）のみ。店頭は査定額を現金で支払い（/tento/）
- ヒカカク！は一括査定（店舗・出張は査定を出す業者による）

旧: 「{name}を含む{region}全域が対応エリアです。」「{name}駅周辺・郊外型店舗どちらも利用できます。即日の現金化も可能です。」
    ウリエルの対応エリア「{name}を含む{region}全域」
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT / "app" / "articles"

URIEL_OUT = ("北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "群馬県", "新潟県",
             "富山県", "石川県", "福井県", "山梨県", "長野県", "沖縄県")
PREF_RE = re.compile(r"^(北海道|東京都|大阪府|京都府|.{2,3}?県)")


def prefecture(pref: str) -> str:
    m = PREF_RE.match(pref)
    return m.group(1) if m else ""


def shucchou_text(name: str, pref: str) -> str:
    P = prefecture(pref)
    capital = P in ("東京都", "埼玉県", "神奈川県", "千葉県")
    if P in URIEL_OUT:
        u = f"ウリエルの出張エリアに{P}は含まれていません。"
    else:
        u = f"ウリエルは{P}を出張エリアとしていますが、一部対応できない市町村があります（{name}が対象かは申込時にご確認ください）。"
    if capital:
        t = "ティファナの出張は東京都・埼玉県・神奈川県・千葉県の一部地域です。"
    else:
        t = "ティファナの出張は東京都・埼玉県・神奈川県・千葉県の一部地域のみです。"
    return f"出張の対応エリアは業者ごとに異なります。{u}{t}ヒカカク！は一括査定のため、出張の可否は査定を出す業者によります。"


def tento_text(name: str, pref: str) -> str:
    P = prefecture(pref)
    if P in ("東京都", "埼玉県"):
        s = (f"本記事の3社のうち店頭買取があるのは、ティファナ（東京都・埼玉県に店舗。査定額はその場で現金払い）と"
             f"ウリエル（神奈川県川崎市の1店舗）です。{name}から近い店舗があるかは各社の店舗一覧でご確認ください。")
    elif pref.startswith("神奈川県川崎市"):
        s = ("本記事の3社のうち、川崎市にはウリエルの川崎 ラ チッタデッラ店（川崎区小川町・その場で現金買取）があります。"
             "ティファナの店舗は東京都・埼玉県のみです。")
    elif P == "神奈川県":
        s = ("本記事の3社のうち神奈川県内の店舗は、ウリエルの川崎 ラ チッタデッラ店（川崎市川崎区）のみです。"
             "ティファナの店舗は東京都・埼玉県のみです。")
    else:
        s = (f"本記事の3社の店舗は東京都・埼玉県（ティファナ）と神奈川県川崎市（ウリエル）のみで、{P}内にはありません。")
    return s + "地元の楽器店・リサイクルショップに持ち込む場合、支払い方法（現金か振込か）や買取条件は店舗ごとに異なるため、各店の公式ページでご確認ください。"


def uriel_area_text(name: str, pref: str) -> str:
    return f"{prefecture(pref)}（一部対応できない市町村あり。{name}が対象かは申込時に確認）"


def patch(src: str):
    m = re.search(r"([^>。\s]+?)駅周辺・郊外型店舗どちらも利用できます。即日の現金化も可能です。", src)
    if not m:
        return None, "no-phrase"
    name = m.group(1)
    prefs = [x.group(1) for x in re.finditer(re.escape(name) + r"（([^）]+)）", src) if prefecture(x.group(1))]
    if not prefs:
        return None, f"no-pref:{name}"
    pref = prefs[0]
    n0 = src
    src = src.replace(m.group(0), tento_text(name, pref))
    src, k1 = re.subn(re.escape(name) + r"を含む[^<。\"]{1,6}?全域が対応エリアです。", shucchou_text(name, pref), src)
    src, k2 = re.subn(r"(<strong>対応エリア</strong>: )" + re.escape(name) + r"を含む[^<。\"]{1,6}?全域(</li>)",
                      lambda mm: mm.group(1) + uriel_area_text(name, pref) + mm.group(2), src)
    return (src if src != n0 else None), f"{name}|{pref}|k1={k1}|k2={k2}"


def main():
    dry = "--dry" in sys.argv
    changed = 0
    for f in sorted(ARTICLES.glob("*/page.tsx")):
        src = f.read_text(encoding="utf-8")
        new, info = patch(src)
        if info == "no-phrase":
            continue
        print(f.parent.name, info)
        if new:
            changed += 1
            if not dry:
                f.write_text(new, encoding="utf-8")
    print("changed", changed)


if __name__ == "__main__":
    main()

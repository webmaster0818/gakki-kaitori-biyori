#!/usr/bin/env python3
"""東京都・埼玉県の地域テンプレ（55本）のティファナ記述と FAQ「主要3社がすべて対応エリア」を公式の事実に直す（冪等）。

公式（2026-10-22 確認）:
- ティファナ 店舗 tifana.net/access/ と各店舗ページの住所（買取を行う店舗）:
  東京都＝江戸川区（瑞江）・品川区（中延・武蔵小山）・板橋区（大山）・杉並区（阿佐ヶ谷・高円寺・西荻窪）・
  武蔵野市（吉祥寺）・世田谷区（豪徳寺・Reuse&Vintage 豪徳寺）・北区（十条）・葛飾区（新小岩）・中野区（都立家政・東中野）・練馬区（富士見台）
  埼玉県＝川口市（川口・イオンモール川口前川）・上尾市（イオンモール上尾）
- ティファナ 出張 tifana.net/visit/ の「出張可能エリア」（出張エリア／ご相談地域。載っていない区市は対象外）
- ティファナ 店頭 /tento/：査定金額を現金で支払い
- ティファナ 宅配 /shipping/：「オンラインショップと宅配買取のサービスを一時的に停止しております」
- ウリエル /visit/：東京都・埼玉県は出張エリア（※一部対応できない市町村あり）
- ヒカカク！は一括査定（出張の可否は査定を出す業者による）

旧: 「{name}近隣に店舗あり」「全国の店舗ネットワーク、宅配買取も全国対応」
    FAQ「はい、{name}（{pref}）は全国対応の主要買取業者（ヒカカク！・ウリエル・ティファナ等）がすべて対応エリアにしています。」（表示＋\\u エスケープの JSON-LD）
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT / "app" / "articles"
CHECKED = "2026年10月22日"

TIF_STORES = {
    "江戸川区": ["瑞江店"], "品川区": ["中延店", "武蔵小山店"], "板橋区": ["大山店"],
    "杉並区": ["阿佐ヶ谷店", "高円寺店", "西荻窪店"], "武蔵野市": ["吉祥寺店"],
    "世田谷区": ["豪徳寺店"], "北区": ["十条店"], "葛飾区": ["新小岩店"],
    "中野区": ["都立家政店", "東中野店"], "練馬区": ["富士見台店"],
    "川口市": ["川口店"], "上尾市": ["イオンモール上尾店"],
}
# 店舗はあるが店頭買取をしていない（公式 2026-10-23: 川口前川＝店舗ページ「買取受付 対応不可」、Reuse&Vintage＝「店頭買取を実施しておりません」）
TIF_NOBUY = {"川口市": "イオンモール川口前川店", "世田谷区": "Reuse&amp;Vintage 豪徳寺店"}
STORE_PLACES = "東京都の中野・杉並・練馬・板橋・北・世田谷・品川・江戸川・葛飾区と武蔵野市、埼玉県の川口市・上尾市"

TIF_VISIT = {
    "東京都": ("中野区 杉並区 練馬区 板橋区 豊島区 荒川区 台東区 墨田区 江東区 中央区 北区 港区 文京区 新宿区 渋谷区 "
              "目黒区 世田谷区 千代田区 品川区 大田区 足立区 葛飾区 江戸川区 西東京市 武蔵野市 三鷹市 調布市 狛江市 "
              "小金井市 国分寺市 国立市").split(),
    "埼玉県": "さいたま市 川口市 上尾市 蕨市 戸田市 朝霞市 志木市 和光市 新座市".split(),
}
TIF_SOUDAN = {
    "東京都": "立川市 府中市 町田市 小平市 日野市 東村山市 東大和市 清瀬市 東久留米市 多摩市 稲城市".split(),
    "埼玉県": "川越市 所沢市 草加市 越谷市 八潮市 富士見市 三郷市 ふじみ野市 三芳町".split(),
}


def split_pref(pref: str):
    P = "東京都" if pref.startswith("東京都") else "埼玉県"
    return P, pref[len(P):]


def visit_status(pref: str) -> str:
    P, muni = split_pref(pref)
    if muni in TIF_VISIT[P]:
        return "visit"
    if muni in TIF_SOUDAN[P]:
        return "soudan"
    return "out"


def area_li(pref: str) -> str:
    P, muni = split_pref(pref)
    st = visit_status(pref)
    nb = f"。{TIF_NOBUY[muni]}は店頭買取なし" if muni in TIF_NOBUY else ""
    shop = (f"{muni}内に店舗あり（{'・'.join(TIF_STORES[muni])}{nb}）" if muni in TIF_STORES
            else f"{muni}内に店舗なし（店舗は{STORE_PLACES}）")
    visit = {"visit": f"出張は{muni}が出張エリア",
             "soudan": f"出張は{muni}が相談地域（品物の内容や点数により訪問が難しい場合あり）",
             "out": f"出張は{muni}が出張エリアに含まれない"}[st]
    return f"{shop}。{visit}"


STRENGTH = f"店頭は査定金額をその場で現金払い。宅配買取は一時停止中（公式のお知らせ・{CHECKED}確認）"


def faq_answer(name: str, pref: str) -> str:
    P, muni = split_pref(pref)
    st = visit_status(pref)
    tif = {"visit": f"ティファナは{muni}を出張エリアとしています。",
           "soudan": f"ティファナは{muni}を出張の相談地域としています（品物の内容や点数により訪問が難しい場合があります）。",
           "out": f"ティファナの出張エリアに{muni}は含まれていません。"}[st]
    return (f"{name}（{pref}）の出張対応は業者によって異なります。ウリエルは{P}を出張エリアとしていますが、"
            f"一部対応できない市町村があります（{name}が対象かは申込時にご確認ください）。{tif}"
            "ヒカカク！は一括査定サービスのため、出張の可否は査定を出す業者によります。")


def old_faq(name: str, pref: str) -> str:
    return f"はい、{name}（{pref}）は全国対応の主要買取業者（ヒカカク！・ウリエル・ティファナ等）がすべて対応エリアにしています。"


def esc(s: str) -> str:
    return json.dumps(s)[1:-1]


def patch(src: str):
    m = re.search(r"<strong>対応エリア</strong>: ([^<]+?)近隣に店舗あり</li>", src)
    if not m:
        return None, "no-phrase"
    name = m.group(1)
    pm = re.search(re.escape(name) + r"（((?:東京都|埼玉県)[^）]*)）", src)
    if not pm:
        return None, f"no-pref:{name}"
    pref = pm.group(1)
    n0 = src
    src = src.replace(m.group(0), f"<strong>対応エリア</strong>: {area_li(pref)}</li>")
    src = src.replace("<strong>強み</strong>: 全国の店舗ネットワーク、宅配買取も全国対応</li>",
                      f"<strong>強み</strong>: {STRENGTH}</li>")
    o, n = old_faq(name, pref), faq_answer(name, pref)
    k_disp, k_ld = src.count(o), src.count(esc(o))
    src = src.replace(o, n).replace(esc(o), esc(n))
    return (src if src != n0 else None), f"{name}|{pref}|{visit_status(pref)}|store={split_pref(pref)[1] in TIF_STORES}|faq={k_disp}/{k_ld}"


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

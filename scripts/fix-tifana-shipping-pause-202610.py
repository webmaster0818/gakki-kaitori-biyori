#!/usr/bin/env python3
"""ティファナの宅配買取が一時停止中であることを、ティファナの宅配を勧めている記事に注記する（冪等）。

公式（2026-10-26 確認）:
- tifana.net トップ「宅配買取のサービス・ECサイトをリニューアルのため一時停止しております」
- tifana.net/shipping/「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております」
- 再開時期の記載なし
（10/22 から継続。10/25 に MediaXAI へ既定案 A＝注記 を宣言 → 回答なしのため 10/26 実行）

やること（宅配の記述・ボタンは消さず、注記を足すだけ）:
1. ティファナ紹介の見出し（h3）の直下（ServiceCapture があればその下）に注記の段落を1つ
   ※ ページ内に既に「一時停止」の記述があるページ（東京・埼玉テンプレ55本など）は入れない
2. 「ティファナ…宅配買取…（なります／利用可能／送れます 等）。」の文（FAQ の表示と JSON-LD 両方）の後に1文
3. 「→ …ティファナ…宅配…」のおすすめ行の末尾に「（宅配は一時停止中）」
4. 地域テンプレの「強み: 宅配買取は全国から送料・宅配キット無料で利用できる」
5. tifana.net 直リンク（計測なし）のボタン「ティファナの宅配買取」→「ティファナの宅配買取（一時停止中）」

生成スクリプト（generate-phase5-areas.py・gen-guitar-city.py・generate-phase6-models.py）は出力にこの patch() を通す。
宅配が再開したら CHECKED を更新するのではなく、このスクリプトの注記を外す逆変換を書くこと。
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT / "app" / "articles"
CHECKED = "2026年10月26日"

NOTE_TEXT = (f"<strong>注意：</strong>ティファナの宅配買取は、公式サイトのお知らせによると「リニューアルのため一時停止」しています"
             f"（{CHECKED}確認・再開時期の記載なし）。宅配で売る場合は、申し込む前に公式サイトで受付状況を確認してください。")
NOTE = f'<p className="text-sm bg-cream border border-warm-border rounded-lg px-4 py-3">{NOTE_TEXT}</p>'
SENT = f"なお、ティファナの宅配買取は{CHECKED}時点で一時停止中です（公式のお知らせ）。"
ARROW = "（宅配は一時停止中）"

STRENGTH_OLD = "宅配買取は全国から送料・宅配キット無料で利用できる"
STRENGTH_NEW = f"宅配買取は送料・宅配キット無料。ただし{CHECKED}時点は一時停止中（公式のお知らせ）"
BTN_OLD = ">ティファナの宅配買取</a>"
BTN_NEW = ">ティファナの宅配買取（一時停止中）</a>"

# ティファナ紹介の見出し（add-service-captures-202610.py と同じ除外）
H3 = re.compile(r'([ \t]*)<h3>(?![^<]*(?:の流れ|口コミサイト|買い取ってもらった))[^<]*?ティファナ[^<]*</h3>\n'
                r'(?:[ \t]*<ServiceCapture id="tifana" />\n)?')
# 宅配を使える／使う前提の文（デコード済みテキスト上で探す）
SENT_RE = re.compile(r'[^。>"\n{}「」]*ティファナ[^。<"\n{}]*宅配買取[^。<"\n{}]*'
                     r'(?:なります|利用可能です|利用できます|送れます|受けられます)[^。<"\n{}]*。')
ARROW_RE = re.compile(r'(→ [^<\n]*ティファナ[^<\n]*宅配[^<\n]*?)(?=</li>)')


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def recommends_shipping(src: str) -> bool:
    return any("宅配" in m.group(0) for m in re.finditer(r'[^。>"\n]{0,80}ティファナ[^。<"\n]{0,120}', src))


def decoded_texts(src: str):
    """表示テキスト＋\\u エスケープされた JSON-LD をデコードしたテキスト"""
    out = [src]
    for m in re.finditer(r'__html: "((?:[^"\\]|\\.)*)"', src):
        try:
            out.append(json.loads('"' + m.group(1) + '"'))
        except Exception:
            pass
    return out


def patch(src: str):
    """戻り値: (新しいソース, 件数 dict)"""
    n = {"note": 0, "sent": 0, "arrow": 0, "strength": 0, "btn": 0}
    if "ティファナ" not in src or not recommends_shipping(src):
        return src, n
    # 2. 文の後に1文（表示・raw の JSON-LD・\u エスケープの JSON-LD）
    sents = set()
    for t in decoded_texts(src):
        sents.update(m.group(0) for m in SENT_RE.finditer(t))
    for s in sorted(sents, key=len, reverse=True):
        for form_s, form_add in ((s, SENT), (esc(s), esc(SENT))):
            pat = re.compile(re.escape(form_s) + r'(?!' + re.escape(form_add) + r')')
            src, k = pat.subn(lambda m: m.group(0) + form_add, src)
            n["sent"] += k
    # 3. おすすめ行
    def _arrow(m):
        if "一時停止" in m.group(1):
            return m.group(1)
        n["arrow"] += 1
        return m.group(1) + ARROW
    src = ARROW_RE.sub(_arrow, src)
    # 4. 強み
    n["strength"] = src.count(STRENGTH_OLD)
    src = src.replace(STRENGTH_OLD, STRENGTH_NEW)
    # 5. ボタン
    n["btn"] = src.count(BTN_OLD)
    src = src.replace(BTN_OLD, BTN_NEW)
    # 1. 見出し直下の注記（既に一時停止の記述があるページ・注記済みのページは入れない）
    if NOTE_TEXT not in src:
        body_wo = src.replace(SENT, "").replace(esc(SENT), "").replace(ARROW, "") \
                     .replace(STRENGTH_NEW, "").replace(BTN_NEW, "")
        if "一時停止" not in body_wo:
            m = H3.search(src)
            if m:
                src = src[:m.end()] + f"{m.group(1)}{NOTE}\n" + src[m.end():]
                n["note"] = 1
    return src, n


def main():
    dry = "--dry" in sys.argv
    tot = {}
    changed = 0
    for f in sorted(ARTICLES.glob("*/page.tsx")):
        src = f.read_text(encoding="utf-8")
        new, n = patch(src)
        if new != src:
            changed += 1
            for k, v in n.items():
                tot[k] = tot.get(k, 0) + v
            print(f.parent.name, n)
            if not dry:
                f.write_text(new, encoding="utf-8")
    print("changed", changed, tot)


if __name__ == "__main__":
    main()

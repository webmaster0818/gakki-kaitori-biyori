#!/usr/bin/env python3
"""軽量テンプレのエリア記事に「楽器の買取屋さん」検証ページへの導線を入れる（冪等）。

■ 背景
  指名クエリ「楽器の買取屋さん」(251表示/28日) に対して、専用の検証ページではなく
  エリア記事10本が7〜10位に分散して出ており、クリックは0だった。
  専用ページは自分の主題語ですら74位で、内部リンクが23ファイルしか無かった。

■ なぜスクリプトが要るか
  記事には2種類のテンプレがある。
    ・RelatedArticles を使う記事 … components 側に1箇所足せば全部に入る（対応済み）
    ・軽量テンプレの記事      … 関連記事が page.tsx に直書き（この299本が漏れる）
  後者は共通コンポーネントを経由しないので、ファイルを直接触るしかない。
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TARGET = "gakki-no-kaitoriyasan-hyoban"
ANCHOR = "楽器の買取屋さんの店舗一覧・運営会社・評判の検証"
NEW_LI = (f'          <li><Link href="/articles/{TARGET}/" '
          f'className="text-accent hover:underline">{ANCHOR}</Link></li>\n')

# 軽量テンプレの関連記事リストの末尾（相場一覧の行）を目印にする
MARK = re.compile(
    r'(\n\s*<li><Link href="/articles/souba-ichiran/"[^\n]*</li>\n)')


def main() -> None:
    added = skipped = nomark = 0
    for p in sorted((ROOT / "app" / "articles").glob("*/page.tsx")):
        if p.parent.name == TARGET:
            continue  # 自分自身には張らない
        s = p.read_text(encoding="utf-8")
        if "RelatedArticles" in s:
            continue  # 共通コンポーネント側で入るので触らない
        if ANCHOR in s:
            skipped += 1
            continue
        m = MARK.search(s)
        if not m:
            nomark += 1
            continue
        s = s[:m.end()] + NEW_LI + s[m.end():]
        p.write_text(s, encoding="utf-8")
        added += 1
    print(f"追加 {added} / 既存 {skipped} / 目印なしでスキップ {nomark}")
    if nomark:
        print("  ※目印が無いページは構造が違うので、手で確認すること")


if __name__ == "__main__":
    sys.exit(main())

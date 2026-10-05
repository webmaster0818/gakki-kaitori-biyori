#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OG画像（public/og-image.png・1200x630）と favicon（app/icon.png・app/favicon.ico）を作る。

  python3 scripts/make-og.py

⚠️ 画像に件数・金額・年月を入れない。記事数や相場は毎週変わるのに、画像だけ古い数字で残る
   （画像の中の数字は公開前チェックでも検出できない）。数字はページ本文で出す。
⚠️ og:image は各ページの metadata.openGraph に images: ["/og-image.png"] を書いて出している。
   ほぼ全記事が自前の openGraph を持っていて、layout の openGraph.images も
   app/opengraph-image.png（ファイル規約）も、ページ側の openGraph に上書きされて消える
   （2026-10-05 実測: ファイル規約だけでは568ページ中482ページで og:image が出なかった）。
   新しい記事を足すときは openGraph に images を入れる（scripts/add-og-image.py で一括付与できる）。
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
# globals.css の配色
CREAM, BORDER = (250, 247, 242), (232, 223, 210)
INK, ACCENT, DARK = (45, 37, 32), (93, 64, 55), (62, 39, 35)
GOLD, GRAY = (212, 168, 67), (138, 126, 114)

JP_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W7.ttc"
JP = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"


def og() -> None:
    S = 2   # 2倍で描いて縮める
    im = Image.new("RGB", (W * S, H * S), CREAM)
    d = ImageDraw.Draw(im)

    def put(xy, s, font, size, fill):
        d.text((xy[0] * S, xy[1] * S), s, font=ImageFont.truetype(font, size * S), fill=fill)

    # 左の帯と五線（楽譜の5本線）
    d.rectangle([0, 0, 28 * S, H * S], fill=DARK)
    for i in range(5):
        y = (448 + i * 18) * S
        d.line([(86 * S, y), (1114 * S, y)], fill=BORDER, width=2 * S)
    # 五線の上の音符（塗りの楕円＋符幹）
    for x, y in ((880, 502), (960, 484), (1040, 466)):
        d.ellipse([(x - 15) * S, (y - 10) * S, (x + 15) * S, (y + 10) * S], fill=GOLD)
        d.line([((x + 13) * S, y * S), ((x + 13) * S, (y - 74) * S)], fill=GOLD, width=5 * S)

    put((86, 92), "GAKKI KAITORI BIYORI", JP_BOLD, 26, GOLD)
    put((84, 150), "楽器買取びより", JP_BOLD, 104, DARK)
    put((86, 296), "楽器買取サービスの比較ガイド", JP_BOLD, 44, ACCENT)
    put((86, 368), "ギター / ピアノ / 管楽器 / ドラム / 電子楽器", JP, 30, GRAY)
    put((86, 556), "gakkikaitori-biyori.com", JP, 28, GRAY)

    out = ROOT / "public" / "og-image.png"
    im.resize((W, H), Image.LANCZOS).save(out, optimize=True)
    print(f"書き出し → {out}")


def icon() -> None:
    N = 512
    S = 2
    im = Image.new("RGBA", (N * S, N * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, N * S - 1, N * S - 1], radius=96 * S, fill=DARK)
    # 8分音符（符頭＋符幹＋はた）
    d.ellipse([132 * S, 318 * S, 272 * S, 418 * S], fill=GOLD)
    d.rectangle([244 * S, 106 * S, 272 * S, 370 * S], fill=GOLD)
    d.polygon([(272 * S, 106 * S), (392 * S, 190 * S), (392 * S, 262 * S), (272 * S, 178 * S)], fill=GOLD)
    big = im.resize((N, N), Image.LANCZOS)
    big.save(ROOT / "app" / "icon.png", optimize=True)
    big.save(ROOT / "app" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("書き出し → app/icon.png, app/favicon.ico")


if __name__ == "__main__":
    og()
    icon()

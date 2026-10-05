#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""自前の openGraph を持つページに images: ["/og-image.png"] を足す（冪等）。

  python3 scripts/add-og-image.py

ページ側で openGraph を定義すると layout の openGraph.images は引き継がれない（上書き）。
そのため og:image は各ページに書く必要がある。画像は scripts/make-og.py が作る全ページ共通の1枚。
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
IMG = 'images: ["/og-image.png"], '


def main() -> None:
    done = skipped = 0
    for f in sorted((ROOT / "app").rglob("page.tsx")):
        src = f.read_text()
        m = re.search(r"\bopenGraph:\s*\{", src)
        if not m:
            continue            # layout の openGraph（images 入り）がそのまま出る
        if "/og-image.png" in src:
            skipped += 1
            continue
        if len(re.findall(r"\bopenGraph:\s*\{", src)) != 1:
            print(f"⚠️ openGraph が複数ある（手で確認）: {f.relative_to(ROOT)}")
            continue
        f.write_text(src[: m.end()] + " " + IMG + src[m.end():].lstrip(" "))
        done += 1
    print(f"付与 {done}・付与済み {skipped}")


if __name__ == "__main__":
    main()

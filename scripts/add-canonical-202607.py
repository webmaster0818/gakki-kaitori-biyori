#!/usr/bin/env python3
"""全page.tsxのexport const metadataに自己参照canonical(トレイリングスラッシュ)を冪等挿入する。
- 既にalternatesがあるファイルはスキップ
- 動的ルート([slug])はスキップ(generateMetadataで別途対応)
- ルートはapp/配下のディレクトリパス＝URLパス
"""
import re
from pathlib import Path

APP = Path("/Users/takashi.hasegawa/projects/gakki-kaitori-biyori/app")
SITE = "https://gakkikaitori-biyori.com"

patched, skipped_alt, skipped_dyn, no_meta = [], [], [], []

for f in sorted(APP.rglob("page.tsx")):
    rel = f.relative_to(APP)
    parts = rel.parts[:-1]  # ディレクトリ部分
    if any(p.startswith("[") for p in parts):
        skipped_dyn.append(str(rel))
        continue
    route = "/" + "/".join(parts) + "/" if parts else "/"
    src = f.read_text(encoding="utf-8")
    if "alternates" in src:
        skipped_alt.append(str(rel))
        continue
    m = re.search(r"export const metadata(?::\s*[A-Za-z<>\.]+)?\s*=\s*\{", src)
    if not m:
        no_meta.append(str(rel))
        continue
    ins = m.end()
    add = f"\n  alternates: {{ canonical: '{SITE}{route}' }},"
    f.write_text(src[:ins] + add + src[ins:], encoding="utf-8")
    patched.append(route)

print(f"patched={len(patched)} skipped(alternates既存)={len(skipped_alt)} dynamic={len(skipped_dyn)} no-metadata={len(no_meta)}")
for x in no_meta: print("  NO-META:", x)
for x in skipped_dyn: print("  DYN:", x)
print("sample:", patched[:5])

#!/usr/bin/env python3
"""記事内の各社紹介見出し（h3）の直下に公式サイトキャプチャ <ServiceCapture/> を入れる（2026-10-21 MediaXAI）。
各社につき記事内の最初の紹介見出し1か所だけ。再実行しても二重には入らない。
「〜の流れ」「口コミサイト」「買い取ってもらった場合」の見出しは紹介ではないので対象外。"""
import glob, re
IDS = {"ヒカカク": "hikakaku", "ティファナ": "tifana", "ウリエル": "uriel"}
H = re.compile(r'<h3>(?![^<]*(?:の流れ|口コミサイト|買い取ってもらった))[^<]*?(ヒカカク|ティファナ|ウリエル)[^<]*</h3>\n?')
IMP = 'import ServiceCapture from "@/components/ServiceCapture";\n'
n_pages = n_ins = 0
for f in sorted(glob.glob("app/articles/*/page.tsx")):
    s = open(f, encoding="utf-8").read()
    done, out, pos, ins = set(re.findall(r'<ServiceCapture id="(\w+)"', s)), [], 0, 0
    for m in H.finditer(s):
        cid = IDS[m.group(1)]
        if cid in done:
            continue
        done.add(cid)
        end = m.end()
        indent = re.search(r'([ \t]*)<h3>', s[s.rfind("\n", 0, m.start()) + 1:m.end()]).group(1)
        out.append(s[pos:end] + ("" if s[end - 1] == "\n" else "\n") + f'{indent}<ServiceCapture id="{cid}" />\n')
        pos = end
        ins += 1
    if not ins:
        continue
    s = "".join(out) + s[pos:]
    if IMP not in s:
        s = re.sub(r'(import Link from "next/link";\n)', r'\1' + IMP, s, count=1)
        assert IMP in s, f
    open(f, "w", encoding="utf-8").write(s)
    n_pages += 1; n_ins += ins
print("pages", n_pages, "inserted", n_ins)

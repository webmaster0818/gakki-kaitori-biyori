#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""②実データ格上げ: 5市の thin ページに実在店舗ガイド(#local-shops)を注入。冪等。
データ = scratchpad/gakki_stores/{slug}.json（各社公式店舗検索で確認済み）。事実ベース・架空ゼロ。"""
import json, re, sys
from pathlib import Path

D = Path("/private/tmp/claude-501/-Users-takashi-hasegawa/c60db604-e5da-4051-85e1-6084ffada264/scratchpad/gakki_stores")
CITY = {"shibuya":"渋谷","kobe":"神戸","shinjuku":"新宿","kawasaki":"川崎","ikebukuro":"池袋"}
# kobe/kawasakiはタイトルを意図型へ
TITLE_FIX = {
  "kobe": '"神戸の楽器買取はどこがいい？三宮の専門店・近くの店・出張の選び方とおすすめ業者【2026年7月】"',
  "kawasaki": '"川崎の楽器買取はどこがいい？川崎駅・武蔵小杉の店頭と出張・宅配の選び方【2026年7月】"',
}

def esc(s): return s.replace("{","｛").replace("}","｝")

def build_section(slug):
    d = json.load(open(D/f"{slug}.json", encoding="utf-8"))
    city = d["city"]
    rows = []
    for s in d["stores"]:
        head = f"{s['name']} ── {s['area']}"
        body = f"買取方式：{s['methods']}。{s['note']}"
        rows.append(
            f'          <h3>{esc(head)}</h3>\n'
            f'          <p>{esc(body)}（<a href="{s["sourceUrl"]}" target="_blank" rel="nofollow noopener" className="underline">公式店舗情報</a>）</p>'
        )
    stores_html = "\n".join(rows)
    honest = d.get("honest_notes","").strip()
    honest_html = f'\n          <p className="text-sm text-warm-gray">※{esc(honest)}</p>' if honest else ""
    decision = d.get("decision_hint","").strip()
    sec = (
        f'\n          <h2 id="local-shops">{city}の主要楽器買取店ガイド（店頭・出張・宅配）</h2>\n'
        f'          <p>{city}で楽器を売れる主な買取店を、2026年7月時点で各社公式の店舗情報から整理しました。価格・在庫・担当状況は変わるため、来店・依頼前に各公式で最新をご確認ください。</p>\n'
        f'{stores_html}{honest_html}\n\n'
        f'          <CtaBox />\n\n'
        f'          <h3>{city}での「店頭・出張・宅配」の選び方</h3>\n'
        f'          <p>{esc(decision)}</p>\n\n'
    )
    toc = f'            <li><a href="#local-shops" className="hover:underline">{city}の主要買取店ガイド</a></li>\n'
    return sec, toc

def main():
    root = Path("app/articles")
    for slug, city in CITY.items():
        f = root/f"{slug}-gakki-kaitori"/"page.tsx"
        t = f.read_text(encoding="utf-8")
        if 'id="local-shops"' in t:
            print(f"skip {slug} (already has local-shops)"); continue
        sec, toc = build_section(slug)
        # insert section before FAQ h2
        m = re.search(r'\n(\s*)<h2 id="faq"', t)
        if not m:
            print(f"⚠️ {slug}: no faq anchor"); continue
        t = t[:m.start()] + "\n" + sec + t[m.start()+1:]
        # insert TOC li before #faq toc li
        mt = re.search(r'(\s*)<li><a href="#faq"', t)
        if mt:
            t = t[:mt.start()] + "\n" + toc.rstrip("\n") + t[mt.start():]
        # title fix
        if slug in TITLE_FIX:
            t = re.sub(r'title:\s*"[^"]*"', f'title: {TITLE_FIX[slug]}', t, count=1)
        f.write_text(t, encoding="utf-8")
        print(f"✅ {slug}: injected {len(json.load(open(D/f'{slug}.json'))['stores'])} stores"+(" + title" if slug in TITLE_FIX else ""))

if __name__=="__main__":
    main()

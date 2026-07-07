#!/usr/bin/env python3
"""gakki 月次鮮度更新（動的・冪等）。表示の月タグ(2026年X月)を実行月に、更新日/dateModifiedを今日に。
datePublished(歴史的日付・ISO)は保護。yahoo相場データは別途fetchで更新済み前提＝日付更新は正当。"""
import re, pathlib, datetime
today = datetime.date.today()
ym = f"{today.year}年{today.month}月"
jp = f"{today.year}年{today.month}月{today.day}日"
iso = today.isoformat()
base = pathlib.Path(__file__).resolve().parent.parent / "app" / "articles"
changed = 0
# 対象=過去の年月タグ（当年の当月未満 + 前年）
def is_old(y, m):
    return (y < today.year) or (y == today.year and m < today.month)
for f in base.glob("*/page.tsx"):
    s = f.read_text(); o = s
    s = re.sub(r'(更新日[:：]\s*)20\d\d年\d+月\d+日', r'\g<1>' + jp, s)
    s = re.sub(r'(最終更新[:：]?\s*)20\d\d年\d+月\d+日', r'\g<1>' + jp, s)
    # 表示の年月タグ（日を含まない 20XX年X月）で過去のもの→当月
    def repl(m):
        y, mo = int(m.group(1)), int(m.group(2))
        return ym if is_old(y, mo) else m.group(0)
    s = re.sub(r'20(\d\d)年(\d+)月(?!\d)', lambda m: (ym if is_old(2000+int(m.group(1)), int(m.group(2))) else m.group(0)), s)
    s = re.sub(r'(dateModified:\s*")20\d\d-\d{2}-\d{2}(")', r'\g<1>' + iso + r'\g<2>', s)
    if s != o:
        f.write_text(s); changed += 1
print(f"[refresh-freshness-gakki] {ym} 更新ページ数: {changed}")

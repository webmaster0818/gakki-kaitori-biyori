#!/usr/bin/env python3
# リッチ型(渋谷/池袋)+新宿: 川口方式横展開 第2部(2026-07-12)
# 渋谷/池袋は空の「エリア別ガイド」セクション(既存プレースホルダ)をchikakuコンテンツで充填
import re

HYOBAN = "/articles/gakki-no-kaitoriyasan-hyoban/"
MONTH = "【2026年7月】"

def read(p):
    with open(p) as f: return f.read()
def write(p, s):
    with open(p, "w") as f: f.write(s)

def hika():
    return '<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent-dark underline">ヒカカク！の一括査定</a>'

def usage(city):
    return f'''          <ul>
            <li><strong>近くの店に持ち込み（店頭買取）</strong>：ギター・エフェクター・管楽器など自分で運べる楽器向き。その場で査定し即日現金化できるのが利点です。</li>
            <li><strong>出張買取</strong>：ピアノ・ドラム・アンプなど大型楽器や、複数まとめ売り向き。自宅まで来てくれて搬出も任せられます。</li>
            <li><strong>宅配買取</strong>：急がない・店を回る時間がない場合向き。梱包して送るだけで完結します。</li>
          </ul>
          <p><strong>持ち込む前に「一括査定」で底値を知っておくのがコツ</strong>です。近くの1店だけで決めてしまうと、相場より安く手放してしまうこともあります。{hika()}で{city}対応の複数業者の見積もりを比較し、その金額を基準に店頭で交渉すれば、納得して売りやすくなります。</p>'''

# ===== 渋谷 =====
p = "app/articles/shibuya-gakki-kaitori/page.tsx"
s = read(p)
if 'id="chikaku"' not in s:
    T = "渋谷の楽器買取はどこがいい？道玄坂・近くの店への持ち込みと出張・宅配の選び方"
    D = "渋谷で楽器を売るならどこがいい？道玄坂・宇田川町など近くの楽器買取店への持ち込み・店頭買取、出張買取、宅配買取の選び方とおすすめ3社を比較。原宿・恵比寿エリアも解説。無料査定だけの利用もOK。"
    s = s.replace('title: "【2026年最新】楽器買取 渋谷おすすめ3選｜出張・店頭・宅配を比較",', f'title: "{T}{MONTH}",')
    s = re.sub(r'(  description:\n    ")[^"]*(",)', r'\g<1>' + D + r'\g<2>', s, count=1)
    s = re.sub(r'(openGraph: \{\n    title: ")[^"]*(",\n    description: ")[^"]*(",)', r'\g<1>' + T + MONTH + r'\g<2>' + D + r'\g<3>', s, count=1)
    s = s.replace("            【2026年最新】楽器買取 渋谷おすすめ3選｜出張・店頭・宅配を徹底比較", f"            {T}")
    # 空のエリア別ガイドをchikakuコンテンツで充填
    CH = f'''          <h2 id="area-guide">渋谷で「近くの楽器買取店」に持ち込み・店頭で売るには？<span id="chikaku"></span></h2>
          <p>「渋谷で近くの楽器買取店に持ち込んで、その場で現金化したい」という方も多いはず。渋谷は<strong>道玄坂・宇田川町周辺に楽器店やレコード店が集まる</strong>音楽の街で、店頭への持ち込み買取も選択肢になります。ただし店舗によって買取ジャンルや得意分野が異なるため、来店前に取り扱い楽器と買取受付の有無を確認しておくと安心です（店舗情報は各公式でご確認ください）。</p>
          <p>なお、楽器専門買取大手「楽器の買取屋さん」の都内の実店舗は上野店（台東区）・池袋店（豊島区）で、渋谷区内にはありません（<a href="{HYOBAN}" className="text-accent-dark underline">全国店舗一覧はこちら</a>）。渋谷からは山手線で池袋・上野へ持ち込むか、<strong>自宅で完結する出張買取・宅配買取</strong>が現実的です。</p>
{usage("渋谷")}

'''
    s = s.replace('''          <h2 id="area-guide">渋谷エリア別 楽器買取ガイド</h2>



''', CH)
    s = s.replace('<li><a href="#area-guide" className="hover:underline">渋谷エリア別ガイド</a></li>', '<li><a href="#area-guide" className="hover:underline">近くの店に持ち込み・店頭で売るには</a></li>')
    s = re.sub(r'\\"dateModified\\": \\"[0-9-]+\\"', '\\\\"dateModified\\\\": \\\\"2026-07-12\\\\"', s)
    write(p, s)
    v = read(p)
    print("shibuya:", "OK" if ('id="chikaku"' in v and T in v and "道玄坂・宇田川町" in v) else "🚨FAIL")
else:
    print("shibuya: skip(既適用)")

# ===== 池袋 =====
p = "app/articles/ikebukuro-gakki-kaitori/page.tsx"
s = read(p)
if 'id="chikaku"' not in s:
    T = "池袋の楽器買取はどこがいい？店舗持ち込み・出張・宅配の選び方とおすすめ3社"
    D = "池袋で楽器を売るならどこがいい？池袋の楽器買取店舗への持ち込み・店頭買取、出張買取、宅配買取の選び方とおすすめ3社を比較。楽器の買取屋さん池袋店（豊島区）の情報も。無料査定だけの利用もOK。"
    s = s.replace('title: "【2026年最新】楽器買取 池袋おすすめ3選｜出張・店頭・宅配を比較",', f'title: "{T}{MONTH}",')
    s = re.sub(r'(  description:\n    ")[^"]*(",)', r'\g<1>' + D + r'\g<2>', s, count=1)
    s = re.sub(r'(openGraph: \{\n    title: ")[^"]*(",\n    description: ")[^"]*(",)', r'\g<1>' + T + MONTH + r'\g<2>' + D + r'\g<3>', s, count=1)
    s = s.replace("            【2026年最新】楽器買取 池袋おすすめ3選｜出張・店頭・宅配を徹底比較", f"            {T}")
    CH = f'''          <h2 id="area-guide">池袋で「近くの楽器買取店」に店舗持ち込みで売るには？<span id="chikaku"></span></h2>
          <p>「池袋の楽器買取店舗に持ち込んで、その場で現金化したい」という方も多いはず。池袋は楽器店が集まる副都心で、店頭への持ち込み買取がしやすいエリアです。楽器専門買取大手「楽器の買取屋さん」も<strong>池袋店（東京都豊島区）</strong>を構えており、店頭買取に対応しています（来店は電話予約推奨。<a href="{HYOBAN}" className="text-accent-dark underline">店舗詳細・評判はこちら</a>）。都内では上野店（台東区）も利用できます。</p>
{usage("池袋")}

'''
    s = s.replace('''          <h2 id="area-guide">池袋エリア別 楽器買取ガイド</h2>



''', CH)
    s = s.replace('<li><a href="#area-guide" className="hover:underline">池袋エリア別ガイド</a></li>', '<li><a href="#area-guide" className="hover:underline">店舗持ち込みで売るには</a></li>')
    s = re.sub(r'\\"dateModified\\": \\"[0-9-]+\\"', '\\\\"dateModified\\\\": \\\\"2026-07-12\\\\"', s)
    write(p, s)
    v = read(p)
    print("ikebukuro:", "OK" if ('id="chikaku"' in v and T in v and "池袋店（東京都豊島区）" in v) else "🚨FAIL")
else:
    print("ikebukuro: skip(既適用)")

# ===== 新宿(微調整: title即答化+店舗事実1文) =====
p = "app/articles/shinjuku-gakki-kaitori/page.tsx"
s = read(p)
if "上野店（台東区）" not in s:
    OLD_T = "新宿の楽器買取｜持ち込み・専門店・宅配の選び方と相場・おすすめ業者【2026年7月】"
    NEW_T = "新宿の楽器買取はどこがいい？近くの店・持ち込み・専門店の選び方とおすすめ業者【2026年7月】"
    s = s.replace(OLD_T, NEW_T)  # title+og title両方
    ANCHOR = "一方で、複数店を回って比較するのは手間がかかり、店ごとに得意ジャンルや在庫状況で査定額は変わります。</p>"
    ADD = ANCHOR + f'''
          <p>なお、楽器専門買取大手「楽器の買取屋さん」の都内の実店舗（店舗買取）は上野店（台東区）・池袋店（豊島区）で、新宿区内にはありません（<a href="{HYOBAN}" className="text-accent-dark underline">全国店舗一覧はこちら</a>）。新宿からはJRで池袋・上野の店舗へ持ち込むか、<strong>自宅で完結する出張買取・宅配買取</strong>も有力な選択肢です。</p>'''
    if ANCHOR in s:
        s = s.replace(ANCHOR, ADD, 1)
    s = re.sub(r'\\"dateModified\\": \\"[0-9-]+\\"', '\\\\"dateModified\\\\": \\\\"2026-07-12\\\\"', s)
    write(p, s)
    v = read(p)
    print("shinjuku:", "OK" if (NEW_T in v and "上野店（台東区）" in v) else "🚨FAIL")
else:
    print("shinjuku: skip(既適用)")

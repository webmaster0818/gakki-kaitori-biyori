#!/usr/bin/env python3
# 川口方式「近くの店・持ち込み」意思決定セクションの横展開(2026-07-12)
# 対象: 博多/名古屋4区(ジェネレータ型) + 渋谷/池袋(リッチ型) + 新宿(微調整)
# 事実ソース: 楽器の買取屋さん公式店舗一覧(gakki-no-kaitoriyasan-hyoban記事に転記済・2026-07-10確認)
#   名古屋栄店=名古屋市中区 / 名古屋守山店=守山区 / 池袋店=豊島区 / 上野店=台東区 / 福岡店=柳川市
import re, sys

BASE = "app/articles"
HYOBAN = "/articles/gakki-no-kaitoriyasan-hyoban/"
MONTH = "【2026年7月】"

def read(p):
    with open(p) as f: return f.read()

def write(p, s):
    with open(p, "w") as f: f.write(s)

def hikakaku_link():
    return '<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent-dark underline">ヒカカク！の一括査定</a>'

def usage_list(city):
    return f'''        <ul>
          <li><strong>近くの店に持ち込み（店頭買取）</strong>：ギター・エフェクター・管楽器など自分で運べる楽器向き。その場で査定し即日現金化できるのが利点です。</li>
          <li><strong>出張買取</strong>：ピアノ・ドラム・アンプなど大型楽器や、複数まとめ売り向き。自宅まで来てくれて搬出も任せられます。</li>
          <li><strong>宅配買取</strong>：急がない・近くに店がない場合向き。梱包して送るだけで完結します。</li>
        </ul>
        <p><strong>持ち込む前に「一括査定」で底値を知っておくのがコツ</strong>です。近くの1店だけで決めてしまうと、相場より安く手放してしまうこともあります。{hikakaku_link()}で{city}対応の複数業者の見積もりを比較し、その金額を基準に近くの店と交渉すれば、納得して売りやすくなります。</p>'''

# ============ ジェネレータ型(博多+名古屋4区): title/h1刷新 + chikakuセクション挿入 + 節番号振り直し ============
GEN_PAGES = {
    "fukuoka-hakata-gakki-kaitori": {
        "city": "博多", "full": "福岡市博多区",
        "title": "博多の楽器買取はどこがいい？近くの店・持ち込み・出張の選び方とおすすめ3社",
        "desc": "博多（福岡市博多区）で楽器を売るならどこ？近くの楽器買取店への持ち込み・店頭買取、出張買取、宅配買取の選び方と相場の目安、おすすめ3社を比較。天神・中央区エリアも解説。無料査定だけの利用もOK。",
        "chikaku": '''        <h2 id="chikaku">4. 博多で「近くの楽器買取店」に持ち込み・店頭で売るには？</h2>
        <p>「近くの楽器買取店に持ち込んで、その場で現金化したい」という方も多いはず。博多（福岡市博多区）は九州最大のターミナルで、駅周辺や天神方面には楽器店やリサイクルショップがあり、店頭への持ち込み買取も選択肢になります。ただし店舗によって買取ジャンルや得意分野が異なるため、来店前に取り扱い楽器を確認しておくと安心です（店舗情報は各公式でご確認ください）。</p>
        <p>なお、楽器専門買取大手「楽器の買取屋さん」の福岡県内の実店舗は福岡店（柳川市）で、博多区内にはありません（<a href="''' + HYOBAN + '''" className="text-accent-dark underline">全国店舗一覧はこちら</a>）。博多からは<strong>出張買取・宅配買取の利用が現実的</strong>です。</p>
''' + usage_list("博多"),
    },
    "nagoya-naka-gakki-kaitori": {
        "city": "名古屋市中区", "full": "名古屋市中区",
        "title": "名古屋市中区の楽器買取はどこがいい？近くの店・持ち込み・出張の選び方とおすすめ3社",
        "desc": "名古屋市中区（栄・大須・伏見）で楽器を売るならどこ？近くの楽器買取店への持ち込み・店頭買取、出張買取、宅配買取の選び方とおすすめ3社を比較。楽器の買取屋さん名古屋栄店も区内にあり。無料査定だけの利用もOK。",
        "chikaku": '''        <h2 id="chikaku">4. 名古屋市中区で「近くの楽器買取店」に持ち込み・店頭で売るには？</h2>
        <p>「近くの楽器買取店に持ち込んで、その場で現金化したい」という方も多いはず。中区は栄・大須を抱える名古屋の中心部で、楽器店やリサイクルショップが集まるエリアです。楽器専門買取大手「楽器の買取屋さん」も<strong>名古屋栄店（名古屋市中区）</strong>を構えており、店頭買取に対応しています（来店は電話予約推奨。<a href="''' + HYOBAN + '''" className="text-accent-dark underline">店舗詳細・評判はこちら</a>）。名古屋市内では守山区にも名古屋守山店があります。</p>
''' + usage_list("名古屋市中区"),
    },
    "nagoya-nakagawa-gakki-kaitori": {
        "city": "名古屋市中川区", "full": "名古屋市中川区",
        "title": "名古屋市中川区の楽器買取はどこがいい？近くの店・持ち込み・出張の選び方とおすすめ3社",
        "desc": "名古屋市中川区で楽器を売るならどこ？近くの楽器買取店への持ち込み・店頭買取、出張買取、宅配買取の選び方とおすすめ3社を比較。中区（栄）の店舗への持ち込みルートも解説。無料査定だけの利用もOK。",
        "chikaku": '''        <h2 id="chikaku">4. 名古屋市中川区で「近くの楽器買取店」に持ち込み・店頭で売るには？</h2>
        <p>「近くの楽器買取店に持ち込んで、その場で現金化したい」という方も多いはず。中川区内には楽器専門の大手買取店の店頭はありませんが、名古屋市内では楽器専門買取大手「楽器の買取屋さん」が<strong>名古屋栄店（中区）と名古屋守山店（守山区）</strong>の2店舗で店頭買取に対応しています（<a href="''' + HYOBAN + '''" className="text-accent-dark underline">店舗詳細・評判はこちら</a>）。中川区からは栄方面への持ち込みか、<strong>自宅で完結する出張買取</strong>が現実的です。</p>
''' + usage_list("名古屋市中川区"),
    },
    "nagoya-nishi-gakki-kaitori": {
        "city": "名古屋市西区", "full": "名古屋市西区",
        "title": "名古屋市西区の楽器買取はどこがいい？近くの店・持ち込み・出張の選び方とおすすめ3社",
        "desc": "名古屋市西区で楽器を売るならどこ？近くの楽器買取店への持ち込み・店頭買取、出張買取、宅配買取の選び方とおすすめ3社を比較。中区（栄）の店舗への持ち込みルートも解説。無料査定だけの利用もOK。",
        "chikaku": '''        <h2 id="chikaku">4. 名古屋市西区で「近くの楽器買取店」に持ち込み・店頭で売るには？</h2>
        <p>「近くの楽器買取店に持ち込んで、その場で現金化したい」という方も多いはず。西区内には楽器専門の大手買取店の店頭はありませんが、名古屋市内では楽器専門買取大手「楽器の買取屋さん」が<strong>名古屋栄店（中区）と名古屋守山店（守山区）</strong>の2店舗で店頭買取に対応しています（<a href="''' + HYOBAN + '''" className="text-accent-dark underline">店舗詳細・評判はこちら</a>）。西区からは地下鉄で栄方面への持ち込みか、<strong>自宅で完結する出張買取</strong>が現実的です。</p>
''' + usage_list("名古屋市西区"),
    },
    "nagoya-midori-gakki-kaitori": {
        "city": "名古屋市緑区", "full": "名古屋市緑区",
        "title": "名古屋市緑区の楽器買取はどこがいい？近くの店・持ち込み・出張の選び方とおすすめ3社",
        "desc": "名古屋市緑区で楽器を売るならどこ？近くの楽器買取店への持ち込み・店頭買取、出張買取、宅配買取の選び方とおすすめ3社を比較。市内店舗への持ち込みルートも解説。無料査定だけの利用もOK。",
        "chikaku": '''        <h2 id="chikaku">4. 名古屋市緑区で「近くの楽器買取店」に持ち込み・店頭で売るには？</h2>
        <p>「近くの楽器買取店に持ち込んで、その場で現金化したい」という方も多いはず。緑区内には楽器専門の大手買取店の店頭はありませんが、名古屋市内では楽器専門買取大手「楽器の買取屋さん」が<strong>名古屋栄店（中区）と名古屋守山店（守山区）</strong>の2店舗で店頭買取に対応しています（<a href="''' + HYOBAN + '''" className="text-accent-dark underline">店舗詳細・評判はこちら</a>）。緑区からは栄方面への持ち込みか、大型楽器なら<strong>自宅で完結する出張買取</strong>が現実的です。</p>
''' + usage_list("名古屋市緑区"),
    },
}

for slug, cfg in GEN_PAGES.items():
    p = f"{BASE}/{slug}/page.tsx"
    s = read(p)
    if 'id="chikaku"' in s:
        print(f"skip(既適用): {slug}")
        continue
    full = cfg["full"]
    # title / og
    s = re.sub(r'title: "【2026年最新】楽器買取 [^"]*",', f'title: "{cfg["title"]}{MONTH}",', s, count=2)
    s = re.sub(r'(openGraph: \{ title: "[^"]*", description: ")[^"]*(" \},)', r'\g<1>' + cfg["desc"] + r'\g<2>', s, count=1)
    # metadata description(og直前の単独description行)
    s = re.sub(r'(\n  description:\n?\s*")[^"]*(",\n)', r'\g<1>' + cfg["desc"] + r'\g<2>', s, count=1)
    s = re.sub(r'(\n  description: ")[^"]*(",\n)', r'\g<1>' + cfg["desc"] + r'\g<2>', s, count=1)
    # h1
    s = re.sub(r'(leading-tight mb-4">)[^<]*(</h1>)', r'\g<1>' + cfg["title"] + r'\g<2>', s, count=1)
    # 節番号繰り下げ(6→7, 5→6, 4→5 の順で衝突回避)
    s = s.replace("<h2>6. よくある質問</h2>", "<h2>7. よくある質問</h2>")
    s = s.replace(f"<h2>5. {full}で楽器を高く売るコツ</h2>", f"<h2>6. {full}で楽器を高く売るコツ</h2>")
    s = s.replace(f"<h2>4. {full}近隣エリアの状況</h2>", cfg["chikaku"] + f"\n\n        <h2>5. {full}近隣エリアの状況</h2>")
    # dateModified更新
    s = re.sub(r'\\"dateModified\\": \\"[0-9-]+\\"', '\\\\"dateModified\\\\": \\\\"2026-07-12\\\\"', s)
    write(p, s)
    # 検証
    v = read(p)
    ok = ('id="chikaku"' in v) and (cfg["title"] in v) and ("<h2>5. " + full in v)
    print(f"{'OK' if ok else '🚨FAIL'}: {slug}")

print("=== ジェネレータ型 完了 ===")

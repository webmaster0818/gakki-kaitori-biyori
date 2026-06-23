#!/usr/bin/env python3
"""
楽器買取びより Phase 5: 地域拡張 25記事ジェネレータ
"""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"

AREAS = [
    # 東京周辺
    {"slug": "hachioji-gakki-kaitori", "name": "八王子", "region": "東京", "prefectures": "東京都八王子市", "neighbors": "立川・町田・多摩"},
    {"slug": "tachikawa-gakki-kaitori", "name": "立川", "region": "東京", "prefectures": "東京都立川市", "neighbors": "八王子・国立・国分寺"},
    {"slug": "machida-gakki-kaitori", "name": "町田", "region": "東京", "prefectures": "東京都町田市", "neighbors": "相模原・八王子"},
    {"slug": "kashiwa-gakki-kaitori", "name": "柏", "region": "千葉", "prefectures": "千葉県柏市", "neighbors": "松戸・我孫子・流山"},
    {"slug": "matsudo-gakki-kaitori", "name": "松戸", "region": "千葉", "prefectures": "千葉県松戸市", "neighbors": "柏・流山・市川"},
    {"slug": "kawaguchi-gakki-kaitori", "name": "川口", "region": "埼玉", "prefectures": "埼玉県川口市", "neighbors": "蕨・戸田・赤羽"},
    # 関西
    {"slug": "kobe-sannomiya-gakki-kaitori", "name": "神戸三宮", "region": "兵庫", "prefectures": "兵庫県神戸市中央区", "neighbors": "元町・新神戸・北野"},
    {"slug": "umeda-gakki-kaitori", "name": "梅田", "region": "大阪", "prefectures": "大阪府大阪市北区", "neighbors": "中津・天満・福島"},
    {"slug": "namba-gakki-kaitori", "name": "難波", "region": "大阪", "prefectures": "大阪府大阪市中央区", "neighbors": "心斎橋・日本橋・天王寺"},
    {"slug": "kyoto-shijo-gakki-kaitori", "name": "京都四条", "region": "京都", "prefectures": "京都府京都市下京区", "neighbors": "河原町・烏丸・祇園"},
    # 中部
    {"slug": "kanazawa-gakki-kaitori", "name": "金沢", "region": "石川", "prefectures": "石川県金沢市", "neighbors": "野々市・白山・小松"},
    {"slug": "toyama-gakki-kaitori", "name": "富山", "region": "富山", "prefectures": "富山県富山市", "neighbors": "高岡・砺波・射水"},
    {"slug": "gifu-gakki-kaitori", "name": "岐阜", "region": "岐阜", "prefectures": "岐阜県岐阜市", "neighbors": "大垣・各務原・羽島"},
    {"slug": "hamamatsu-gakki-kaitori", "name": "浜松", "region": "静岡", "prefectures": "静岡県浜松市", "neighbors": "磐田・湖西・袋井"},
    {"slug": "shizuoka-gakki-kaitori", "name": "静岡", "region": "静岡", "prefectures": "静岡県静岡市", "neighbors": "藤枝・焼津・清水"},
    # 九州
    {"slug": "kitakyushu-gakki-kaitori", "name": "北九州", "region": "福岡", "prefectures": "福岡県北九州市", "neighbors": "小倉・八幡・門司"},
    {"slug": "kumamoto-gakki-kaitori", "name": "熊本", "region": "熊本", "prefectures": "熊本県熊本市", "neighbors": "宇土・八代・玉名"},
    {"slug": "kagoshima-gakki-kaitori", "name": "鹿児島", "region": "鹿児島", "prefectures": "鹿児島県鹿児島市", "neighbors": "霧島・指宿・薩摩川内"},
    {"slug": "naha-gakki-kaitori", "name": "那覇", "region": "沖縄", "prefectures": "沖縄県那覇市", "neighbors": "浦添・宜野湾・南風原"},
    # 東北
    {"slug": "morioka-gakki-kaitori", "name": "盛岡", "region": "岩手", "prefectures": "岩手県盛岡市", "neighbors": "花巻・滝沢・八幡平"},
    {"slug": "yamagata-gakki-kaitori", "name": "山形", "region": "山形", "prefectures": "山形県山形市", "neighbors": "天童・上山・寒河江"},
    {"slug": "fukushima-gakki-kaitori", "name": "福島", "region": "福島", "prefectures": "福島県福島市", "neighbors": "二本松・伊達・川俣"},
    # 四国
    {"slug": "takamatsu-gakki-kaitori", "name": "高松", "region": "香川", "prefectures": "香川県高松市", "neighbors": "丸亀・坂出・三豊"},
    {"slug": "matsuyama-gakki-kaitori", "name": "松山", "region": "愛媛", "prefectures": "愛媛県松山市", "neighbors": "今治・東温・伊予"},
    {"slug": "kochi-gakki-kaitori", "name": "高知", "region": "高知", "prefectures": "高知県高知市", "neighbors": "南国・香南・四万十"},
]


def build_page(area: dict) -> str:
    name = area["name"]
    slug = area["slug"]
    region = area["region"]
    pref = area["prefectures"]
    neighbors = area["neighbors"]
    title = f"【2026年最新】楽器買取 {name}おすすめ3選｜出張・店頭・宅配を比較"
    description = f"{name}（{pref}）で楽器を売るならどこ？出張買取・店頭買取・宅配買取の3つの方法を比較。地域密着の業者と全国対応サービスの違い、{neighbors}エリアの状況も解説。"
    h1 = f"{name}の楽器買取おすすめ3社｜地域密着 vs 全国対応"
    lead = f"{name}（{pref}）で楽器の買取を検討している方へ。本記事では、{name}エリアで利用できる買取方法・おすすめ業者3社・買取相場の地域差・近隣エリア（{neighbors}）の状況まで解説します。"

    faqs_list = [
        (f"{name}で出張買取は対応していますか？", f"はい、{name}（{pref}）は全国対応の主要買取業者（ヒカカク！・ウリエル・ティファナ等）がすべて対応エリアにしています。出張料・査定料は無料の業者がほとんどです。"),
        (f"{name}で地域密着の楽器買取店はありますか？", f"{name}には地元の楽器店も数店ありますが、買取相場・対応スピード・取り扱いジャンルの幅では、全国チェーンや一括査定サービスの方が有利なケースが多いです。複数業者を比較するのがおすすめ。"),
        (f"{name}から大型楽器（ピアノ・ドラム）の出張買取は可能ですか？", f"対応可能です。ピアノ・ドラムセットなど大型楽器は出張買取一択。{name}エリアは主要業者の対応圏内なので、複数業者で相見積もりを取って最高値を選びましょう。"),
        (f"{name}で当日中に現金化できますか？", f"店頭買取なら当日可、出張買取なら最短即日対応の業者あり。急ぎの場合は事前に「即日対応可能か」を確認してから申し込むのがおすすめです。"),
    ]
    faqs_html = "\n        ".join(
        f'<details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">{q}<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">{a}</p></details>'
        for q, a in faqs_list
    )
    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs_list]}
    article_schema = {"@context": "https://schema.org", "@type": "Article", "headline": h1, "datePublished": "2026-05-17", "dateModified": "2026-05-17", "author": {"@type": "Organization", "name": "楽器買取びより"}, "publisher": {"@type": "Organization", "name": "楽器買取びより"}}
    localbiz_schema = {"@context": "https://schema.org", "@type": "Service", "areaServed": {"@type": "City", "name": name}, "serviceType": "楽器買取", "provider": {"@type": "Organization", "name": "楽器買取びより"}}

    return f'''import type {{ Metadata }} from "next";
import Link from "next/link";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
  openGraph: {{ title: "{title}", description: "{description}" }},
}};

function Schema() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(faq_schema, ensure_ascii=False))} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(article_schema, ensure_ascii=False))} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(localbiz_schema, ensure_ascii=False))} }}}} />
    </>
  );
}}

export default function Page() {{
  return (
    <>
      <Schema />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">楽器買取 {name}</span></li>
        </ol>
      </nav>
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">{region}・地域</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">{h1}</h1>
          <p className="text-warm-gray text-sm leading-relaxed">{lead}</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <h2>1. {name}エリアの楽器買取事情</h2>
        <p>{name}（{pref}）は{region}地方の主要都市の一つで、音楽教育・演奏文化が根付いているエリアです。楽器を売却・処分する需要も継続的にあり、複数の買取業者が対応エリアとしています。</p>
        <p>地域密着型の小規模楽器店もありますが、買取相場・対応スピード・買取ジャンルの幅では、全国対応の大手業者や一括査定サービスの方が優位なケースが多いです。</p>

        <h2>2. {name}で利用できる買取方法3つ</h2>

        <h3>方法1: 出張買取（自宅まで査定）</h3>
        <p>業者が自宅まで査定士を派遣し、その場で査定・買取・引き取りを行う方法。大型楽器（ピアノ・ドラム）・複数楽器のまとめ売りに最適。{name}を含む{region}全域が対応エリアです。</p>

        <h3>方法2: 店頭買取（持ち込み即現金化）</h3>
        <p>自分で楽器を業者の店舗に持ち込んで査定してもらう方法。{name}駅周辺・郊外型店舗どちらも利用可能。即日現金化が可能。</p>

        <h3>方法3: 宅配買取（自宅から発送）</h3>
        <p>段ボールに梱包して業者に発送、後日入金される方法。{name}から東京・大阪の業者へ送付しても送料無料の業者が多数。</p>

        <h2>3. {name}の楽器買取おすすめ3社</h2>
        <p>{name}（{pref}）エリアで実績のある楽器買取サービス3社を紹介します。</p>

        <h3>① ヒカカク！（一括査定）</h3>
        <ul>
          <li><strong>方式</strong>: Web入力で複数業者から査定が届く一括査定</li>
          <li><strong>強み</strong>: 業者間の競争が生まれ、最高値が出やすい</li>
          <li><strong>対応エリア</strong>: {name}を含む全国</li>
          <li><strong>料金</strong>: 査定無料・キャンセル無料</li>
        </ul>

        <h3>② ウリエル（出張買取）</h3>
        <ul>
          <li><strong>方式</strong>: 出張買取専門。自宅まで査定士が訪問</li>
          <li><strong>強み</strong>: ピアノ・ドラム等大型楽器も対応、即日現金化</li>
          <li><strong>対応エリア</strong>: {name}を含む{region}全域</li>
          <li><strong>料金</strong>: 出張料・査定料無料</li>
        </ul>

        <h3>③ ティファナ（店頭・宅配）</h3>
        <ul>
          <li><strong>方式</strong>: 店頭・宅配のハイブリッド</li>
          <li><strong>強み</strong>: 全国の店舗ネットワーク、宅配買取も全国対応</li>
          <li><strong>対応エリア</strong>: {name}近隣に店舗あり</li>
          <li><strong>料金</strong>: 査定無料</li>
        </ul>

        <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
          <p className="font-bold text-base mb-4 text-center text-accent-dark">{name}の楽器買取価格を無料で確認</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
          </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
        </div>

        <h2>4. {name}近隣エリアの状況</h2>
        <p>{name}の周辺（{neighbors}）でも、ほぼ同じ買取サービスが利用できます。複数の都市にまたがって楽器がある場合（例: ご実家と現在の住居が別エリア）も、各業者で対応可能。出張買取なら、エリアをまたいで査定してもらえます。</p>

        <h2>5. {name}で楽器を高く売るコツ</h2>
        <ol>
          <li><strong>複数業者で相見積もり</strong>: ヒカカク！の一括査定で複数業者の見積もりを比較</li>
          <li><strong>付属品を揃える</strong>: ケース・保証書・取扱説明書で査定額アップ</li>
          <li><strong>需要期に売る</strong>: 1〜3月（新生活前）、9〜10月（文化祭前）</li>
          <li><strong>清掃してから査定</strong>: 軽い拭き取りで印象アップ</li>
          <li><strong>専門業者を選ぶ</strong>: 楽器に強い業者で正しい査定を受ける</li>
        </ol>

        <h2>6. よくある質問</h2>
        {faqs_html}

        <h2>関連記事</h2>
        <ul>
          <li><Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">楽器の買取方法4つを徹底比較</Link></li>
          <li><Link href="/articles/takaku-uru-kotsu/" className="text-accent hover:underline">楽器を高く売るコツ完全ガイド</Link></li>
          <li><Link href="/articles/souba-ichiran/" className="text-accent hover:underline">楽器買取相場一覧</Link></li>
        </ul>
        </div>
      </article>
    </>
  );
}}
'''


def main():
    print(f"Generating {len(AREAS)} Phase 5 articles...")
    for area in AREAS:
        dir_path = ARTICLES_DIR / area["slug"]
        dir_path.mkdir(parents=True, exist_ok=True)
        (dir_path / "page.tsx").write_text(build_page(area), encoding="utf-8")
        print(f"  ✅ {area['slug']} ({area['name']})")
    print(f"✅ Done. {len(AREAS)} articles")


if __name__ == "__main__":
    main()

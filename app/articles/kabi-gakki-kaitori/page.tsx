import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】カビが生えた楽器の買取は可能？査定額・対処法・買取業者を解説",
  description: "カビが生えてしまった楽器でも買取は可能？査定額への影響、自分でできるカビ除去方法、カビ対応の買取業者の選び方を解説。湿気対策で価値を守るコツも。",
  openGraph: {
    title: "【2026年最新】カビが生えた楽器の買取は可能？査定額・対処法・買取業者を解説",
    description: "カビが生えてしまった楽器でも買取は可能？査定額への影響、自分でできるカビ除去方法、カビ対応の買取業者の選び方を解説。湿気対策で価値を守るコツも。",
  },
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">シチュエーション</span></li>
      </ol>
    </nav>
  );
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
    </div>
  );
}

function Schema() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u30ab\u30d3\u3060\u3089\u3051\u306e\u697d\u5668\u3067\u3082\u672c\u5f53\u306b\u58f2\u308c\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u72b6\u614b\u3068\u697d\u5668\u306e\u4fa1\u5024\u6b21\u7b2c\u3067\u3059\u304c\u3001\u30b8\u30e3\u30f3\u30af\u54c1\u8cb7\u53d6\u306b\u5bfe\u5fdc\u3059\u308b\u696d\u8005\u306a\u3089\u8cb7\u53d6\u5bfe\u8c61\u306b\u306a\u308a\u307e\u3059\u3002\u307e\u305a\u306f\u7121\u6599\u67fb\u5b9a\u3067\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30ab\u30d3\u3092\u9664\u53bb\u3059\u308c\u3070\u67fb\u5b9a\u984d\u306f\u4e0a\u304c\u308a\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u8efd\u5ea6\u306e\u30ab\u30d3\u306a\u3089\u81ea\u5206\u3067\u5bfe\u51e6\u3059\u308b\u3053\u3068\u3067\u67fb\u5b9a\u984d\u30a2\u30c3\u30d7\u304c\u671f\u5f85\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u96d1\u306a\u9664\u53bb\u3067\u697d\u5668\u3092\u50b7\u3064\u3051\u308b\u3068\u9006\u52b9\u679c\u3002\u30d7\u30ed\u306b\u4efb\u305b\u305f\u65b9\u304c\u826f\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30ab\u30d3\u304c\u539f\u56e0\u3067\u8cb7\u53d6\u62d2\u5426\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u91cd\u5ea6\u306e\u30ab\u30d3\u3067\u697d\u5668\u81ea\u4f53\u304c\u640d\u50b7\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u8cb7\u53d6\u4e0d\u53ef\u3068\u306a\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u3001\u4e0d\u7528\u54c1\u56de\u53ce\u696d\u8005\u304b\u7c97\u5927\u30b4\u30df\u3067\u306e\u51e6\u5206\u304c\u73fe\u5b9f\u7684\u3067\u3059\u3002\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u30ab\u30d3\u304c\u751f\u3048\u305f\u697d\u5668\u306e\u8cb7\u53d6\u306f\u53ef\u80fd\uff1f\u67fb\u5b9a\u984d\u30fb\u5bfe\u51e6\u6cd5\u30fb\u8cb7\u53d6\u696d\u8005\u3092\u89e3\u8aac\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"カビが生えた楽器の買取は可能？査定額・対処法・買取業者を解説\", \"item\": \"https://gakkikaitori-biyori.com/articles/kabi-gakki-kaitori/\"}]}" }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Schema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">シチュエーション</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">カビが生えた楽器の買取は可能？査定額・対処法・買取業者を解説</h1>
          <p className="text-warm-gray text-sm leading-relaxed">押し入れや倉庫から出てきた楽器に「カビが生えていた」——よくある悩みです。カビが生えた楽器は買取できるのか、査定額にどう影響するのか、自分で除去すべきか、そのまま売るべきか。プロ目線で解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#kanou" className="hover:underline">結論: カビが生えた楽器でも買取は可能</a></li>
            <li><a href="#influence" className="hover:underline">楽器別・カビの影響範囲</a></li>
            <li><a href="#self-care" className="hover:underline">自分でできるカビ対処法5ステップ</a></li>
            <li><a href="#partner" className="hover:underline">カビ対応の買取業者を選ぶポイント</a></li>
            <li><a href="#yobou" className="hover:underline">カビを生えさせない保管術</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
        <h2 id="kanou">結論: カビが生えた楽器でも買取は可能</h2>
        <p><strong>カビの程度・楽器の価値・メーカー</strong>によりますが、買取は十分可能です。ただし、状態のない楽器より査定額は下がる傾向があります。</p>
        <ul><li><strong>軽度のカビ（表面のみ）</strong>: 査定額への影響 10〜20%減</li><li><strong>中度のカビ（一部に深く付着）</strong>: 30〜50%減</li><li><strong>重度のカビ（広範囲・木材への侵食）</strong>: 70%減〜買取不可</li></ul>

        <h2 id="influence">楽器別・カビの影響範囲</h2>
        <div className="table-wrapper"><table><thead><tr><th>楽器</th><th>カビの影響</th><th>備考</th></tr></thead><tbody><tr><td>バイオリン・チェロ等弦楽器</td><td>★★★★★（極大）</td><td>木材への侵食が音色に深刻な影響</td></tr><tr><td>ピアノ</td><td>★★★★（大）</td><td>鍵盤・内部木材まで侵食すると修復困難</td></tr><tr><td>ギター・ベース</td><td>★★★（中）</td><td>ボディ表面なら磨いて対処可能</td></tr><tr><td>管楽器（金属製）</td><td>★★（小）</td><td>金属部分は磨けば回復するが、内部のフェルト・コルクは要注意</td></tr><tr><td>電子楽器</td><td>★（少）</td><td>外装の拭き取りでほぼ対応可能</td></tr></tbody></table></div>

        <h2 id="self-care">自分でできるカビ対処法5ステップ</h2>
        <ol><li><strong>マスク・手袋を着用</strong>: 胞子の吸引・接触を防ぐ</li><li><strong>乾いた布で軽く拭く</strong>: ゴシゴシ擦らない（ニス・塗装を傷める）</li><li><strong>アルコール除菌スプレー（薄め）を布に含ませる</strong>: 直接スプレーしない</li><li><strong>陰干しで完全乾燥</strong>: 直射日光は避ける</li><li><strong>シリカゲル等の除湿剤と一緒に保管</strong>: 再発防止</li></ol>
        <p><strong>注意</strong>: 高額・希少な楽器（ストラディヴァリ等）は、自分で対処せず楽器修理専門店に相談を。</p>

        <h2 id="partner">カビ対応の買取業者を選ぶポイント</h2>
        <ul><li><strong>カビ・ジャンク楽器の買取実績</strong>: 公式サイトで明示している業者は経験豊富</li><li><strong>修理工房を持つ業者</strong>: メンテナンス前提で買取できる業者は査定額が高い傾向</li><li><strong>出張無料</strong>: カビありの楽器を持ち運ぶのは抵抗があるため、出張買取対応業者がおすすめ</li></ul>
        <p>おすすめサービス:</p>
        <ul><li><strong>ヒカカク！</strong>: 状態フィルターで「ジャンク・難あり」も含めた査定が可能</li><li><strong>ウリエル</strong>: ジャンク楽器の買取に積極的</li></ul>

        <h2 id="yobou">カビを生えさせない保管術</h2>
        <ol><li><strong>湿度50〜60%を維持</strong>: 押入れ収納はNG、リビング保管が理想</li><li><strong>ケースに入れる</strong>: 直接埃や湿気から守る</li><li><strong>除湿剤を併用</strong>: ハードケース内にシリカゲルを入れる</li><li><strong>月1回の通気</strong>: ケースから出して空気を循環させる</li><li><strong>直射日光を避ける</strong>: ニス・塗装の劣化も同時に防ぐ</li></ol>

        <h2 id="faq">よくある質問</h2>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">カビだらけの楽器でも本当に売れますか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">状態と楽器の価値次第ですが、ジャンク品買取に対応する業者なら買取対象になります。まずは無料査定で確認しましょう。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">カビを除去すれば査定額は上がりますか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">軽度のカビなら自分で対処することで査定額アップが期待できます。ただし、雑な除去で楽器を傷つけると逆効果。プロに任せた方が良いケースもあります。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">カビが原因で買取拒否されることはありますか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">重度のカビで楽器自体が損傷している場合は買取不可となります。その場合は、不用品回収業者か粗大ゴミでの処分が現実的です。</p></details>

          <CtaBox />

          <RelatedArticles
            currentSlug="kabi-gakki-kaitori"
            relatedSlugs={["kowareta-gakki-kaitori", "ihin-gakki-kaitori", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku", "piano-kaitori", "guitar-kaitori", "saxophone-kaitori", "drum-kaitori"]}
          />
        </div>
      </article>
    </>
  );
}

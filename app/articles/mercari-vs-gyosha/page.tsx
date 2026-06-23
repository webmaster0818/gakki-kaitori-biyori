import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年徹底比較】楽器を売るならメルカリvs買取業者どっちが得？",
  description: "楽器を売るならメルカリ（フリマアプリ）と買取業者どちらがお得？手数料・送料・トラブルリスク・売却スピードなど7項目で徹底比較。楽器の種類別おすすめ売却方法も解説。",
  openGraph: {
    title: "【2026年徹底比較】楽器を売るならメルカリvs買取業者どっちが得？",
    description: "メルカリvs買取業者、楽器売却はどっちが得？7項目で徹底比較。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "メルカリvs業者", href: "/articles/mercari-vs-gyosha/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">楽器の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "メルカリと買取業者、どちらが高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "手数料（10%）と送料を差し引くと、多くのケースで手取り額はほぼ同じです。大型楽器は送料が高額になるため、買取業者の方がお得になることが多いです。" } },
      { "@type": "Question", name: "メルカリで楽器を売る際の注意点は？", acceptedAnswer: { "@type": "Answer", text: "梱包を丁寧に行う（配送中の破損防止）、写真を詳細に撮る、傷や不具合を正直に記載する、送料を正確に計算する、の4つが重要です。" } },
      { "@type": "Question", name: "大型楽器（ピアノ、ドラム）はメルカリで売れますか？", acceptedAnswer: { "@type": "Answer", text: "技術的には出品可能ですが、梱包と送料が大きな障壁です。ピアノの配送は専門業者が必要で数万円かかるため、出張買取業者の利用が現実的です。" } },
      { "@type": "Question", name: "エフェクターはメルカリと業者どちらがお得？", acceptedAnswer: { "@type": "Answer", text: "小型のエフェクターは送料が安いため、メルカリの方が高く売れるケースがあります。ただし、手数料10%を考慮すると大きな差にはなりません。" } },
      { "@type": "Question", name: "すぐに現金が必要な場合はどうすべきですか？", acceptedAnswer: { "@type": "Answer", text: "買取業者の利用がおすすめです。出張買取なら最短即日で現金化でき、宅配買取でも1〜3営業日で振込されます。メルカリは売れるまでの日数が読めません。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年徹底比較】楽器を売るならメルカリvs買取業者どっちが得？", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年徹底比較】楽器を売るならメルカリvs買取業者どっちが得？\", \"item\": \"https://gakkikaitori-biyori.com/articles/mercari-vs-gyosha/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">メルカリvs業者</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年徹底比較】楽器を売るならメルカリvs買取業者どっちが得？</h1>
          <p className="text-warm-gray text-sm leading-relaxed">楽器を売るならメルカリ（フリマアプリ）と買取業者どちらがお得？手数料・送料・トラブルリスク・売却スピードなど7項目で徹底比較。楽器の種類別おすすめ売却方法も解説。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <div className="article-body">

          <h2 id="overview">メルカリと買取業者、どっちが得？</h2>
          <p>楽器を売る方法として、メルカリ（メルカリ・ラクマ等のフリマアプリ）と買取業者の2つの選択肢があります。「メルカリの方が高く売れる」というイメージを持つ方も多いですが、<strong>実際には楽器の種類や状況によって最適な方法が異なります</strong>。</p>
          <p>本記事では、手数料・送料・手間・リスク・スピードなど7項目でメルカリと買取業者を徹底比較し、楽器の種類別におすすめの売却方法を解説します。</p>

          <h2 id="comparison">7項目で徹底比較</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">比較項目</th><th className="px-4 py-3 text-left font-medium">メルカリ</th><th className="px-4 py-3 text-left font-medium">買取業者</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3 font-medium">販売価格</td><td className="px-4 py-3">自分で設定（高く設定可能）</td><td className="px-4 py-3">業者の査定額</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3 text-red-600">販売価格の10%</td><td className="px-4 py-3 text-gold-dark font-bold">無料</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-medium">送料</td><td className="px-4 py-3 text-red-600">出品者負担（1,700〜4,000円）</td><td className="px-4 py-3 text-gold-dark font-bold">無料（業者負担）</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">梱包の手間</td><td className="px-4 py-3 text-red-600">自分で梱包（楽器は大変）</td><td className="px-4 py-3 text-gold-dark font-bold">不要（出張買取の場合）</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-medium">売却スピード</td><td className="px-4 py-3">数日〜数ヶ月（売れない場合も）</td><td className="px-4 py-3 text-gold-dark font-bold">最短即日</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">トラブルリスク</td><td className="px-4 py-3 text-red-600">高い（返品要求・クレーム）</td><td className="px-4 py-3 text-gold-dark font-bold">低い（プロ査定）</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-medium">大型楽器の対応</td><td className="px-4 py-3 text-red-600">困難（梱包・送料が高額）</td><td className="px-4 py-3 text-gold-dark font-bold">出張買取で対応可能</td></tr>
          </tbody></table></div>

          <h2 id="calculation">実際の手取り額を計算してみよう</h2>
          <p>例として、Fender Stratocaster (USA)を売る場合の手取り額を比較します。</p>
          <h3>メルカリで10万円で売れた場合</h3>
          <ul>
            <li>販売価格: 100,000円</li>
            <li>メルカリ手数料（10%）: -10,000円</li>
            <li>送料（らくらくメルカリ便・大型）: 約-4,000円</li>
            <li>梱包材費: 約-1,000円</li>
            <li><strong>実際の手取り: 約85,000円</strong></li>
          </ul>
          <h3>買取業者（ヒカカク！経由）で買い取ってもらった場合</h3>
          <ul>
            <li>買取査定額: 80,000〜90,000円（相場の7〜9割）</li>
            <li>手数料: 0円</li>
            <li>送料: 0円</li>
            <li><strong>実際の手取り: 80,000〜90,000円</strong></li>
          </ul>
          <p>上記の例では、<strong>メルカリと買取業者でほとんど差がない</strong>ことがわかります。しかも、メルカリには「売れないリスク」「返品トラブル」「梱包の手間」があるため、総合的に見ると買取業者の方がお得なケースが多いのです。</p>

          <CtaBox />

          <h2 id="type">楽器の種類別おすすめ売却方法</h2>
          <h3>買取業者がおすすめの楽器</h3>
          <ul>
            <li><strong>ピアノ・電子ピアノ</strong>: 大型で梱包・発送が困難。出張買取一択</li>
            <li><strong>ドラムセット</strong>: 同上。出張買取が最適</li>
            <li><strong>アンプ</strong>: 重量があり送料が高額。出張買取がおすすめ</li>
            <li><strong>高額ヴィンテージ楽器</strong>: 配送中の破損リスクが高い。出張買取が安心</li>
            <li><strong>壊れた楽器・ジャンク品</strong>: メルカリでは売りにくい。業者なら査定可能</li>
          </ul>
          <h3>メルカリが有利な場合（限定的）</h3>
          <ul>
            <li><strong>小型のエフェクター・アクセサリー</strong>: 送料が安く、フリマの方が高値がつくことも</li>
            <li><strong>限定品・レアモデル</strong>: コレクター同士の競争で高値になることがある</li>
            <li><strong>低価格帯の楽器</strong>: 業者の査定が低くなるため、フリマの方が高いことも</li>
          </ul>

          <h2 id="risk">メルカリで楽器を売る際のリスク</h2>
          <h3>配送中の破損リスク</h3>
          <p>楽器は繊細な製品です。適切な梱包をしないと、配送中にネックが折れたり、ボディに傷がついたりする可能性があります。<strong>楽器の梱包には専門知識が必要</strong>で、段ボールやプチプチだけでは不十分なケースもあります。</p>
          <h3>返品・クレームのリスク</h3>
          <p>「傷がある」「音が違う」「写真と違う」など、購入者からのクレーム・返品要求のリスクがあります。楽器の状態は主観的な判断が入るため、トラブルになりやすいジャンルです。</p>
          <h3>売れるまでの時間</h3>
          <p>メルカリでは、適正価格を設定しても売れるまでに数日〜数ヶ月かかることがあります。<strong>すぐに現金化したい場合は買取業者の方が確実</strong>です。</p>

          <CtaBox />

          <h2 id="best">結論: 迷ったら買取業者がおすすめ</h2>
          <p>メルカリと買取業者を比較した結果、<strong>多くのケースで買取業者の利用がおすすめ</strong>です。特に以下の理由から、楽器の売却には買取業者が向いています。</p>
          <ul>
            <li>手数料・送料・梱包の手間を考えると、実質的な手取り額はほぼ同じ</li>
            <li>大型楽器は出張買取で自宅完結（メルカリでは現実的でない）</li>
            <li>最短即日で現金化（メルカリは売れるまで不明）</li>
            <li>トラブルリスクが低い（プロの査定で安心）</li>
          </ul>
          <p>まずはヒカカク！で一括査定を行い、買取業者の査定額を確認してみましょう。その上で「メルカリの方が明らかに高い」と判断できる場合のみ、フリマアプリを利用するのが賢い選択です。</p>

          <h2 id="faq">よくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">メルカリと買取業者、どちらが高く売れますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">手数料（10%）と送料を差し引くと、多くのケースで手取り額はほぼ同じです。大型楽器は送料が高額になるため、買取業者の方がお得になることが多いです。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">メルカリで楽器を売る際の注意点は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">梱包を丁寧に行う（配送中の破損防止）、写真を詳細に撮る、傷や不具合を正直に記載する、送料を正確に計算する、の4つが重要です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">大型楽器（ピアノ、ドラム）はメルカリで売れますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">技術的には出品可能ですが、梱包と送料が大きな障壁です。ピアノの配送は専門業者が必要で数万円かかるため、出張買取業者の利用が現実的です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">エフェクターはメルカリと業者どちらがお得？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">小型のエフェクターは送料が安いため、メルカリの方が高く売れるケースがあります。ただし、手数料10%を考慮すると大きな差にはなりません。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">すぐに現金が必要な場合はどうすべきですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">買取業者の利用がおすすめです。出張買取なら最短即日で現金化でき、宅配買取でも1〜3営業日で振込されます。メルカリは売れるまでの日数が読めません。</div></details>
          </div>

          <h2>まとめ</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>

        <RelatedArticles
          currentSlug="mercari-vs-gyosha"
          relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "gakki-kaitori-vs-kojin-baibai", "senmonten-vs-recycle", "kaitori-houhou-hikaku", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

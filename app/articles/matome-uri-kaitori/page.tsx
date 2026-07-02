import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/matome-uri-kaitori/' },
  title: "【2026年最新】楽器まとめ売り買取ガイド｜複数楽器を一括で高く売るコツ",
  description: "楽器を複数まとめて売りたい方へ。まとめ売り対応の買取業者3社を徹底比較。バンド機材一式・楽器コレクションの一括買取で高く売るコツ、セット売りのメリット・デメリットまで解説。",
  openGraph: {
    title: "【2026年最新】楽器まとめ売り買取ガイド｜複数楽器を一括で高く売るコツ",
    description: "楽器のまとめ売り・一括買取のおすすめ3社と高く売るコツを徹底解説。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "楽器まとめ売り買取", href: "/articles/matome-uri-kaitori/" }];
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
      { "@type": "Question", name: "楽器のまとめ売りで査定額は上がりますか？", acceptedAnswer: { "@type": "Answer", text: "はい、複数の楽器をまとめて売ることで「まとめ割増」として査定額が上乗せされることがあります。特に出張買取の場合、一度の訪問で大量買取ができるため、業者側にもメリットがあり査定額が優遇されやすいです。" } },
      { "@type": "Question", name: "バラ売りとまとめ売り、どちらが高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "高額楽器は個別に査定を受けた方が高くなる傾向があります。中〜低価格帯の楽器はまとめ売りの方が効率的です。高額品は個別、その他はまとめ売りという組み合わせがおすすめです。" } },
      { "@type": "Question", name: "まとめ売りで出張買取を頼めますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ウリエルの出張買取なら複数の楽器をまとめて自宅で査定・買取できます。大型楽器も運搬不要で最も便利です。" } },
      { "@type": "Question", name: "エフェクターやアクセサリーもまとめて売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ギター・ベースだけでなく、エフェクター・アンプ・ケーブル・スタンドなどのアクセサリー類も一緒に売却可能です。" } },
      { "@type": "Question", name: "まとめ売りの際に必要なものはありますか？", acceptedAnswer: { "@type": "Answer", text: "身分証明書（免許証やマイナンバーカード等）が必要です。各楽器の付属品（ケース、保証書等）があれば査定額がアップします。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】楽器まとめ売り買取ガイド｜複数楽器を一括で高く売るコツ", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年最新】楽器まとめ売り買取ガイド｜複数楽器を一括で高く売るコツ\", \"item\": \"https://gakkikaitori-biyori.com/articles/matome-uri-kaitori/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">まとめ売り</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】楽器まとめ売り買取ガイド｜複数楽器を一括で高く売るコツ</h1>
          <p className="text-warm-gray text-sm leading-relaxed">楽器を複数まとめて売りたい方へ。まとめ売り対応の買取業者3社を徹底比較。バンド機材一式・楽器コレクションの一括買取で高く売るコツ、セット売りのメリット・デメリットまで解説。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <div className="article-body">

          <h2 id="overview">楽器のまとめ売りとは？</h2>
          <p>楽器のまとめ売りとは、複数の楽器や機材を一括で買取業者に売却することです。バンドの解散や引っ越し、趣味の整理などで複数の楽器を同時に手放したい場合に便利な方法です。</p>
          <p>まとめ売りの最大のメリットは、<strong>1点ずつ売るよりも手間が大幅に省ける</strong>ことです。また、一度に大量の楽器を買い取ることで業者側にもメリットがあるため、査定額が上乗せされることもあります。</p>

          <h3>まとめ売りが向いているケース</h3>
          <ul>
            <li><strong>バンド機材一式</strong>: ギター・ベース・アンプ・エフェクター・ドラムなど</li>
            <li><strong>引っ越し・断捨離</strong>: 複数の楽器を一気に処分したい</li>
            <li><strong>楽器コレクションの整理</strong>: ギターコレクション、ヴィンテージ楽器など</li>
            <li><strong>遺品整理</strong>: 故人の楽器を一括で売却</li>
            <li><strong>スタジオ・教室の閉鎖</strong>: 業務用機材の一括売却</li>
          </ul>

          <CtaBox />

          <h2 id="comparison">まとめ売り対応のおすすめ3社を比較</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">ヒカカク！</th><th className="px-4 py-3 text-left font-medium">ティファナ</th><th className="px-4 py-3 text-left font-medium">ウリエル</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定（複数業者）</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取専門</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">まとめ売り</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td><td className="px-4 py-3 text-gold-dark font-bold">出張で一括対応</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-medium">大型楽器</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">出張で対応</td><td className="px-4 py-3 text-gold-dark font-bold">出張で対応</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
          </tbody></table></div>

          <p>まとめ売りには<strong>ウリエルの出張買取が最も便利</strong>です。自宅に査定士が来てくれるため、大量の楽器を梱包・発送する手間がかかりません。まずはヒカカク！で相場を確認し、実際の売却はウリエルの出張買取がおすすめです。</p>

          <h2 id="merit">まとめ売りのメリット・デメリット</h2>
          <h3>メリット</h3>
          <ul>
            <li><strong>手間が少ない</strong>: 1回の取引で複数楽器を売却完了</li>
            <li><strong>まとめ割増</strong>: 一度に大量買取で査定額アップの可能性あり</li>
            <li><strong>出張買取で運搬不要</strong>: 大型楽器も自宅で完結</li>
            <li><strong>セット価値</strong>: バンド機材一式のセット価値が評価されることも</li>
          </ul>
          <h3>デメリット</h3>
          <ul>
            <li><strong>個別交渉しにくい</strong>: 1点ずつ交渉するより、総額での交渉になりがち</li>
            <li><strong>高額品が埋もれるリスク</strong>: 安い楽器と高い楽器を一緒に出すと、高額品が過小評価される可能性</li>
          </ul>
          <p>対策として、<strong>高額楽器（10万円以上が期待できるもの）は個別に査定を受け、中〜低価格帯の楽器をまとめ売りする</strong>のが最も効率的です。</p>

          <CtaBox />

          <h2 id="tips">まとめ売りで高く売る5つのコツ</h2>
          <h3>コツ1: 高額品は個別査定、その他はまとめ売り</h3>
          <p>Gibson Les Paul StandardやMartin D-28など高額楽器は、ヒカカク！で個別に複数業者の査定を受けましょう。エントリーモデルやアクセサリー類はまとめ売りで効率よく売却します。</p>
          <h3>コツ2: リストを作成して事前に伝える</h3>
          <p>売りたい楽器のリスト（ブランド・モデル名・状態）を作成し、査定依頼時に伝えましょう。業者側も事前に相場を確認でき、スムーズな査定につながります。</p>
          <h3>コツ3: 付属品はまとめて整理</h3>
          <p>各楽器のケース・付属品・保証書を楽器ごとにまとめておきましょう。付属品が紛失しているものは、その旨を伝えれば問題ありません。</p>
          <h3>コツ4: 簡単でもクリーニングする</h3>
          <p>全部を完璧にクリーニングする必要はありませんが、ホコリを拭き取る程度のケアは行いましょう。見た目の印象は査定額に影響します。</p>
          <h3>コツ5: 出張買取を活用する</h3>
          <p>複数の楽器を売る場合、宅配買取だと梱包の手間が膨大です。ウリエルの出張買取なら、自宅で査定士に見てもらえるので最も効率的です。</p>

          <h2 id="faq">よくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">楽器のまとめ売りで査定額は上がりますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、複数の楽器をまとめて売ることで「まとめ割増」として査定額が上乗せされることがあります。特に出張買取の場合、一度の訪問で大量買取ができるため、業者側にもメリットがあり査定額が優遇されやすいです。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">バラ売りとまとめ売り、どちらが高く売れますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">高額楽器は個別に査定を受けた方が高くなる傾向があります。中〜低価格帯の楽器はまとめ売りの方が効率的です。高額品は個別、その他はまとめ売りという組み合わせがおすすめです。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">まとめ売りで出張買取を頼めますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ウリエルの出張買取なら複数の楽器をまとめて自宅で査定・買取できます。大型楽器も運搬不要で最も便利です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">エフェクターやアクセサリーもまとめて売れますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ギター・ベースだけでなく、エフェクター・アンプ・ケーブル・スタンドなどのアクセサリー類も一緒に売却可能です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">まとめ売りの際に必要なものはありますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">身分証明書（免許証やマイナンバーカード等）が必要です。各楽器の付属品（ケース、保証書等）があれば査定額がアップします。</div></details>
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
          currentSlug="matome-uri-kaitori"
          relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "souba-ichiran", "band-kaisan-kizai", "takaku-uru-kotsu", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】PRS カスタム24買取相場｜製造国・グレード別の価値と査定ポイント",
  description: "PRS Custom 24の買取相場をグレード別（Core/S2/SE）に解説。ポール・リード・スミスの代表機の価値要因、フレイムメイプルトップの評価、状態の査定差とおすすめ買取3社を比較。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">PRS カスタム24買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "PRS Custom 24の買取相場は？", acceptedAnswer: { "@type": "Answer", text: "SE（廉価版）で2万〜6万円、S2で5万〜12万円、USA Coreは12万〜30万円、Wood Libraryや限定モデル・10Topは20万〜50万円以上が目安です。" } },
      { "@type": "Question", name: "SEとCoreはどれくらい評価が違いますか？", acceptedAnswer: { "@type": "Answer", text: "SEは海外生産の廉価ライン、CoreはUSA本国生産の上位ラインで、相場は数倍の差があります。型番（SE/S2表記の有無）を確認しましょう。" } },
      { "@type": "Question", name: "トップ材の杢は査定に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい。フレイム／キルトの杢が美しい個体、特に10Topグレードは加点対象です。" } },
      { "@type": "Question", name: "限定モデルは高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "Wood Libraryやアーティストモデル、年式限定カラーなどは希少性が高く、標準個体より高評価になりやすいです。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社は査定・出張・送料・キャンセルすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】PRS カスタム24買取相場｜製造国・グレード別の価値と査定ポイント", datePublished: "2026-06-05", dateModified: "2026-06-05", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "【2026年最新】PRS カスタム24買取相場｜製造国・グレード別の価値と査定ポイント", item: "https://gakkikaitori-biyori.com/articles/prs-custom24-kaitori/" },
  ] };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }} />
  </>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたの楽器の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
    </div>
  );
}

export default function PrsCustom24KaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">PRS カスタム24買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】PRS カスタム24買取相場｜製造国・グレード別の価値と査定ポイント</h1>
          <p className="text-warm-gray text-sm leading-relaxed">PRS Custom 24（カスタム24）を売りたい方へ。Paul Reed Smithの代表機で、24フレット・トレモロ・回転式ピックアップセレクターを備えた完成度の高いモデルです。本記事ではCore（USA本国）/S2/SEといったグレード別の価値、フレイムメイプルトップのグレード、状態が査定に与える影響を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年6月5日</p>
        </header>

        <div className="article-body">

          <h2 id="souba">買取相場の目安</h2>
          <p>PRS カスタム24の買取相場は、ブランド・モデル・状態によって大きく変わります。あくまで目安として、SEで2万〜6万円、S2で5万〜12万円、USA Coreで12万〜30万円、10Top・限定は20万〜50万円以上とされています。正確な査定額は楽器の状態や付属品、時期によって変動するため、無料査定で確認するのが確実です。</p>
          <p className="text-xs text-warm-gray">※相場は一般的な中古市場の目安であり、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>PRS カスタム24を売る際、以下のポイントが査定額に影響します。売却前にチェックしておきましょう。</p>
          <ul>
            <li>グレード（USA Coreは高評価、S2は中位、SE/韓国・インドネシア製は入門〜中位）</li>
            <li>メイプルトップの杢（フレイム/キルトのグレード10Topは高評価）</li>
            <li>製造年・限定モデル・Wood Library等の特別仕様</li>
            <li>フレットの減り・トレモロの状態・打痕</li>
            <li>純正ケース・保証書・カラー（希少色は加点）</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>PRS カスタム24の売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
          <ul>
            <li><strong>ヒカカク！</strong> … 最大20社へ一括査定。専門業者を含めて最高値を効率よく探せます。</li>
            <li><strong>ウリエル</strong> … 出張買取に対応。大型楽器やまとめ売りに便利で、出張費・査定料無料。</li>
            <li><strong>ティファナ</strong> … 店頭・宅配に対応。手軽に売却できます。</li>
          </ul>
          <p>まずはヒカカク！で相場を把握し、最高値の業者に売却するのが効率的です。</p>

          <h2 id="kotsu">高く売るためのコツ</h2>
          <ol>
            <li><strong>複数社で相見積もりを取る</strong> … 業者により査定額は数千〜数万円変わります。</li>
            <li><strong>付属品・ケースを揃える</strong> … 純正ケース・保証書があると評価が上がります。</li>
            <li><strong>状態を正直に伝える</strong> … 不具合の申告は信頼につながり、結果的に有利です。</li>
            <li><strong>早めに売る</strong> … 楽器は時間とともに状態が劣化しやすいため、売ると決めたら早めに。</li>
            <li><strong>専門知識のある業者を選ぶ</strong> … 楽器に詳しい業者ほど適正評価が期待できます。</li>
          </ol>

          <CtaBox />

          <h2 id="faq">PRS カスタム24買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">PRS Custom 24の買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">SE（廉価版）で2万〜6万円、S2で5万〜12万円、USA Coreは12万〜30万円、Wood Libraryや限定モデル・10Topは20万〜50万円以上が目安です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">SEとCoreはどれくらい評価が違いますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">SEは海外生産の廉価ライン、CoreはUSA本国生産の上位ラインで、相場は数倍の差があります。型番（SE/S2表記の有無）を確認しましょう。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">トップ材の杢は査定に影響しますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。フレイム／キルトの杢が美しい個体、特に10Topグレードは加点対象です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">限定モデルは高く売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">Wood Libraryやアーティストモデル、年式限定カラーなどは希少性が高く、標準個体より高評価になりやすいです。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">費用はかかりますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">掲載3社は査定・出張・送料・キャンセルすべて無料です。</div>
            </details>
          </div>
        </div>

        <RelatedArticles currentSlug="prs-custom24-kaitori" relatedSlugs={["guitar-kaitori", "fender-stratocaster-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku"]} />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gibson-es335-kaitori/' },
  title: "【2026年最新】ギブソン ES-335買取相場｜年代別の価値とセミアコの査定ポイント",
  description: "Gibson ES-335の買取相場を年代別に解説。センターブロック入りセミアコの名機の価値要因、ヴィンテージ（ドットネック/ブロックインレイ）の評価、状態の査定差とおすすめ買取3社を比較。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">ギブソン ES-335買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "ES-335の買取相場は？", acceptedAnswer: { "@type": "Answer", text: "現行のStandard/Memphis・Nashville製で8万〜20万円、Custom Shopやヒストリックは15万〜40万円、1950〜60年代のヴィンテージは50万〜数百万円が目安です。ドットネック期はさらに高額になります。" } },
      { "@type": "Question", name: "ドットネックとは何ですか？査定に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "指板のポジションマークがドット（点）の初期仕様で、1958〜62年頃の個体を指します。希少性が高く、ヴィンテージES-335の中でも特に高評価です。" } },
      { "@type": "Question", name: "PAFピックアップは価値がありますか？", acceptedAnswer: { "@type": "Answer", text: "はい。オリジナルのPAFハムバッカーは非常に価値が高く、ヴィンテージ個体の評価を大きく押し上げます。" } },
      { "@type": "Question", name: "セミアコは状態管理が難しいですが売れますか？", acceptedAnswer: { "@type": "Answer", text: "売却可能です。ボディの割れ・バインディングの剥がれ・ネックの状態は評価に影響しますが、人気機種のため需要は安定しています。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社は査定・出張・送料・キャンセルすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】ギブソン ES-335買取相場｜年代別の価値とセミアコの査定ポイント", datePublished: "2026-06-05", dateModified: "2026-08-01", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "【2026年最新】ギブソン ES-335買取相場｜年代別の価値とセミアコの査定ポイント", item: "https://gakkikaitori-biyori.com/articles/gibson-es335-kaitori/" },
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
        <a href="https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        {/* felmatインプレッション計測 */}
        <img src="https://t.felmat.net/fmimp/A11184N.11542509.O138027B" width={1} height={1} alt="" style={{ border: "none" }} />
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

export default function GibsonEs335KaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ギブソン ES-335買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】ギブソン ES-335買取相場｜年代別の価値とセミアコの査定ポイント</h1>
          <p className="text-warm-gray text-sm leading-relaxed">Gibson ES-335（ES-335）を売りたい方へ。1958年登場、センターブロックを持つセミアコースティックの代表機で、ブルースからロック、ジャズまで幅広く使われる定番です。本記事では年代別の価値、ドットネック期やブロックインレイ期の評価、ヴィンテージ個体の希少性、状態が査定に与える影響を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年8月1日</p>
        </header>

        <div className="article-body">

          <h2 id="souba">買取相場の目安</h2>
          <p>ギブソン ES-335の買取相場は、ブランド・モデル・状態によって大きく変わります。あくまで目安として、現行Memphis/Nashville製で8万〜20万円、Custom Shopで15万〜40万円、1950〜60年代ヴィンテージは50万〜数百万円とされています。正確な査定額は楽器の状態や付属品、時期によって変動するため、無料査定で確認するのが確実です。</p>
          <p className="text-xs text-warm-gray">※相場は一般的な中古市場の目安であり、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>ギブソン ES-335を売る際、以下のポイントが査定額に影響します。売却前にチェックしておきましょう。</p>
          <ul>
            <li>製造年（1958〜64年のドットネック期は特に高額、以降のブロックインレイ期も評価高）</li>
            <li>ヴィンテージかリイシュー（Custom Shop/Memphis/Nashville）か</li>
            <li>オリジナルパーツ（PAFハムバッカー・配線・ペグ）の保持</li>
            <li>ボディ・バインディングのひび、ネックの状態、リフィニッシュの有無</li>
            <li>純正ケース・保証書・カラー（チェリー/サンバースト等）</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>ギブソン ES-335の売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
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

          <h2 id="faq">ギブソン ES-335買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ES-335の買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">現行のStandard/Memphis・Nashville製で8万〜20万円、Custom Shopやヒストリックは15万〜40万円、1950〜60年代のヴィンテージは50万〜数百万円が目安です。ドットネック期はさらに高額になります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ドットネックとは何ですか？査定に影響しますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">指板のポジションマークがドット（点）の初期仕様で、1958〜62年頃の個体を指します。希少性が高く、ヴィンテージES-335の中でも特に高評価です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">PAFピックアップは価値がありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。オリジナルのPAFハムバッカーは非常に価値が高く、ヴィンテージ個体の評価を大きく押し上げます。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">セミアコは状態管理が難しいですが売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">売却可能です。ボディの割れ・バインディングの剥がれ・ネックの状態は評価に影響しますが、人気機種のため需要は安定しています。</div>
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

        <RelatedArticles currentSlug="gibson-es335-kaitori" relatedSlugs={["gibson-lespaul-standard-kaitori", "gibson-kaitori", "guitar-kaitori", "takaku-uru-kotsu", "souba-ichiran"]} />
      </article>
    </>
  );
}

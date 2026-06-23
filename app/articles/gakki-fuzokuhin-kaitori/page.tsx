import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】楽器の付属品で査定額はどう変わる？｜ケース・保証書・純正パーツ",
  description: "楽器買取で付属品が査定額に与える影響を解説。純正ケース・保証書・取扱説明書・純正パーツの有無による価格差、付属品がない場合の対処法を解説。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/#howto" className="hover:text-accent transition-colors">売り方</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">付属品の重要性</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "付属品がないと売れませんか？", acceptedAnswer: { "@type": "Answer", text: "売却は可能ですが、純正ケースや保証書があると査定額が上がる傾向があります。" } },
      { "@type": "Question", name: "純正ケースは査定にどれくらい影響しますか？", acceptedAnswer: { "@type": "Answer", text: "高級機ほど影響が大きく、専用ケースの有無で数千〜数万円差が出ることがあります。" } },
      { "@type": "Question", name: "保証書は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "真贋や年代の裏付けになり、特に高額楽器で評価が安定します。" } },
      { "@type": "Question", name: "改造した楽器でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "可能ですが、外した純正パーツがあれば一緒に出すと有利です。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社はすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】楽器の付属品で査定額はどう変わる？｜ケース・保証書・純正パーツ", datePublished: "2026-06-05", dateModified: "2026-06-05", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "【2026年最新】楽器の付属品で査定額はどう変わる？｜ケース・保証書・純正パーツ", item: "https://gakkikaitori-biyori.com/articles/gakki-fuzokuhin-kaitori/" },
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
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

export default function GakkiFuzokuhinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">付属品の重要性</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】楽器の付属品で査定額はどう変わる？｜ケース・保証書・純正パーツ</h1>
          <p className="text-warm-gray text-sm leading-relaxed">楽器を売る前に知っておきたい付属品の重要性を解説。純正ケース・保証書・取扱説明書・純正パーツの有無で査定額がどう変わるか、付属品がなくても高く売る方法を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年6月5日</p>
        </header>

        <div className="article-body">

          <h2 id="points">査定額を左右するポイント</h2>
          <p>付属品の重要性を売る際、以下のポイントが査定額に影響します。売却前にチェックしておきましょう。</p>
          <ul>
            <li>純正ハードケースの有無（特に高級機）</li>
            <li>保証書・購入証明（真贋・年代の裏付け）</li>
            <li>純正パーツ（改造品は純正があると有利）</li>
            <li>取扱説明書・元箱</li>
            <li>マウスピース・弓・譜面台など楽器固有の付属品</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>付属品の重要性の売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
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

          <h2 id="faq">付属品の重要性買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">付属品がないと売れませんか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">売却は可能ですが、純正ケースや保証書があると査定額が上がる傾向があります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">純正ケースは査定にどれくらい影響しますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">高級機ほど影響が大きく、専用ケースの有無で数千〜数万円差が出ることがあります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">保証書は必要ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">真贋や年代の裏付けになり、特に高額楽器で評価が安定します。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">改造した楽器でも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">可能ですが、外した純正パーツがあれば一緒に出すと有利です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">費用はかかりますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">掲載3社はすべて無料です。</div>
            </details>
          </div>
        </div>

        <RelatedArticles currentSlug="gakki-fuzokuhin-kaitori" relatedSlugs={["takaku-uru-kotsu", "hitsuyou-shorui", "kaitori-nagare", "souba-ichiran", "kaitori-houhou-hikaku"]} />
      </article>
    </>
  );
}

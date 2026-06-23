import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】クラシックギター買取おすすめ3社比較｜製作家別の相場と価値",
  description: "クラシックギター（ガットギター）買取の相場とおすすめ業者3社を比較。河野・桜井・Ramirez・YAMAHA GCなど製作家・ブランド別の価値、状態による査定差を解説。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/#instrument" className="hover:text-accent transition-colors">楽器の種類</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">クラシックギター買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "クラシックギターの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "量産入門モデルで3,000〜2万円、YAMAHA GCシリーズ等の中級で1万〜5万円、河野・桜井・Ramirez等の手工品は10万〜100万円以上が目安です。製作家の評価で大きく変わります。" } },
      { "@type": "Question", name: "製作家のラベルがあると有利ですか？", acceptedAnswer: { "@type": "Answer", text: "はい。手工クラシックギターは製作家のラベル・製作証明が価値の根拠になります。あると査定がスムーズで評価も安定します。" } },
      { "@type": "Question", name: "フラメンコギターも買取対象ですか？", acceptedAnswer: { "@type": "Answer", text: "はい。フラメンコギター（シープレス材等）も買取可能です。専門知識のある業者で査定を受けるのがおすすめです。" } },
      { "@type": "Question", name: "量産品でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "売却可能です。YAMAHA・Aria・小平などの量産品は教室需要があり、状態が良ければ一定の価格がつきます。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社は査定・出張・送料・キャンセルすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】クラシックギター買取おすすめ3社比較｜製作家別の相場と価値", datePublished: "2026-06-05", dateModified: "2026-06-05", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "【2026年最新】クラシックギター買取おすすめ3社比較｜製作家別の相場と価値", item: "https://gakkikaitori-biyori.com/articles/classic-guitar-kaitori/" },
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

export default function ClassicGuitarKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">クラシックギター買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】クラシックギター買取おすすめ3社比較｜製作家別の相場と価値</h1>
          <p className="text-warm-gray text-sm leading-relaxed">クラシックギター（ガットギター）を売りたい方へ。本記事では製作家・ブランド別の価値、量産品と手工品の査定差、状態による評価、高く売るコツを解説します。手工クラシックギターは製作家の評価が価格を大きく左右します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年6月5日</p>
        </header>

        <div className="article-body">

          <h2 id="souba">買取相場の目安</h2>
          <p>クラシックギターの買取相場は、ブランド・モデル・状態によって大きく変わります。あくまで目安として、量産入門で3,000〜2万円、中級で1万〜5万円、河野・桜井・Ramirez等の手工品は10万〜100万円以上が目安とされています。正確な査定額は楽器の状態や付属品、時期によって変動するため、無料査定で確認するのが確実です。</p>
          <p className="text-xs text-warm-gray">※相場は一般的な中古市場の目安であり、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>クラシックギターを売る際、以下のポイントが査定額に影響します。売却前にチェックしておきましょう。</p>
          <ul>
            <li>手工品か量産品か（手工クラシックギターは高評価）</li>
            <li>製作家・ブランド（河野・桜井・Ramirez・Hauser等は高額）</li>
            <li>表板の素材（スプルース／シダー）と状態</li>
            <li>ネックの状態・フレット・割れの有無</li>
            <li>ラベル・製作証明・ケースなど付属品</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>クラシックギターの売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
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

          <h2 id="faq">クラシックギター買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">クラシックギターの買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">量産入門モデルで3,000〜2万円、YAMAHA GCシリーズ等の中級で1万〜5万円、河野・桜井・Ramirez等の手工品は10万〜100万円以上が目安です。製作家の評価で大きく変わります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">製作家のラベルがあると有利ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。手工クラシックギターは製作家のラベル・製作証明が価値の根拠になります。あると査定がスムーズで評価も安定します。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">フラメンコギターも買取対象ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。フラメンコギター（シープレス材等）も買取可能です。専門知識のある業者で査定を受けるのがおすすめです。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">量産品でも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">売却可能です。YAMAHA・Aria・小平などの量産品は教室需要があり、状態が良ければ一定の価格がつきます。</div>
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

        <RelatedArticles currentSlug="classic-guitar-kaitori" relatedSlugs={["guitar-kaitori", "yamaha-kaitori", "violin-kaitori", "takaku-uru-kotsu", "souba-ichiran"]} />
      </article>
    </>
  );
}

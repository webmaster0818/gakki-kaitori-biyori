import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gretsch-kaitori/' },
  title: "【2026年最新】グレッチ買取おすすめ3社比較｜Gretschギターの相場と価値",
  description: "グレッチ（Gretsch）買取の相場とおすすめ業者3社を比較します。Professional(USA)・Players・Electromatic・Streamlinerのラインによる価値、ホロウボディの評価を解説します。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/#brand" className="hover:text-accent transition-colors">ブランド</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">グレッチ買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "グレッチの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "Streamliner/Electromaticで2万〜8万円、Playersで5万〜15万円、USA Professionalは15万〜50万円以上が目安です。" } },
      { "@type": "Question", name: "Electromaticでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい。入門〜中級として安定需要があります。" } },
      { "@type": "Question", name: "ヴィンテージGretschは高いですか？", acceptedAnswer: { "@type": "Answer", text: "年代物の6120やFalconは非常に高額になることがあります。" } },
      { "@type": "Question", name: "ビグスビー付きは評価されますか？", acceptedAnswer: { "@type": "Answer", text: "純正ビグスビーは人気仕様で評価にプラスです。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社はすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】グレッチ買取おすすめ3社比較｜Gretschギターの相場と価値", datePublished: "2026-06-05", dateModified: "2026-10-01", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "【2026年最新】グレッチ買取おすすめ3社比較｜Gretschギターの相場と価値", item: "https://gakkikaitori-biyori.com/articles/gretsch-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">お持ちの楽器の買取価格を確認する</p>
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

export default function GretschKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">グレッチ買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】グレッチ買取おすすめ3社比較｜Gretschギターの相場と価値</h1>
          <p className="text-warm-gray text-sm leading-relaxed">グレッチ（Gretsch）を売りたい方へ。Professional Collection（USA）からElectromatic・Streamlinerまで、ラインによる価値の違い、ホロウ/セミホロウの評価、状態による査定差を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年10月1日</p>
        </header>

        <div className="article-body">

          {/* 2026-08-26 型番クエリの受け皿。ハブに着地していた型番検索を、型番ページへ振り分ける */}
          <div className="bg-warm-bg border border-warm-border rounded-xl p-5 my-6">
            <p className="font-bold mb-2">型番・モデルが決まっている方へ</p>
            <p className="text-sm text-warm-gray mb-3">お手持ちのモデルが分かっている場合は、下記の型番別ページのほうが相場を細かく確認できます。</p>
            <ul className="space-y-1 text-sm list-disc pl-5">
              <li><a href="/articles/gretsch-6120-kaitori/" className="text-accent-dark underline">グレッチ 6120買取相場</a></li>
            </ul>
          </div>


          <h2 id="souba">買取相場の目安</h2>
          <p>グレッチの買取相場は、ブランド・モデル・状態によって大きく変わります。あくまで目安として、Streamliner/Electromaticで2万〜8万円、Playersで5万〜15万円、USA Professionalは15万〜50万円以上が目安とされています。正確な査定額は楽器の状態や付属品、時期によって変動するため、無料査定で確認するのが確実です。</p>
          <p className="text-xs text-warm-gray">※相場は一般的な中古市場の目安であり、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>グレッチを売る際、以下のポイントが査定額に影響します。売却前にチェックしておいてください。</p>
          <ul>
            <li>ライン（USA Professional＞Players＞Electromatic＞Streamliner）</li>
            <li>モデル（6120・Falcon・Duo Jet等）</li>
            <li>ホロウ/セミホロウ・年式</li>
            <li>金属パーツ・バインディングの状態</li>
            <li>純正ケース・付属品の有無</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>グレッチの売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
          <ul>
            <li><strong>ヒカカク！</strong> … 最大20社へ一括で査定を依頼できます。専門業者を含めて査定額を比較できます。</li>
            <li><strong>ウリエル</strong> … 出張買取に対応しています。大型楽器やまとめ売りに適しており、出張費・査定料は無料です。</li>
            <li><strong>ティファナ</strong> … 店頭・宅配に対応しています。</li>
          </ul>
          <p>まずはヒカカク！で相場を把握し、最も条件のよい業者に売却することをおすすめします。</p>

          <h2 id="kotsu">高く売るためのコツ</h2>
          <ol>
            <li><strong>複数社で相見積もりを取る</strong> … 業者により査定額は数千〜数万円変わります。</li>
            <li><strong>付属品・ケースを揃える</strong> … 純正ケース・保証書があると評価が上がります。</li>
            <li><strong>状態を正確に伝える</strong> … 不具合の申告は信頼につながり、結果的に有利です。</li>
            <li><strong>早めに売る</strong> … 楽器は時間とともに状態が劣化しやすいため、売ると決めたら早めの売却をおすすめします。</li>
            <li><strong>専門知識のある業者を選ぶ</strong> … 楽器に詳しい業者ほど適正評価が期待できます。</li>
          </ol>

          <CtaBox />

          <h2 id="faq">グレッチ買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">グレッチの買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">Streamliner/Electromaticで2万〜8万円、Playersで5万〜15万円、USA Professionalは15万〜50万円以上が目安です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Electromaticでも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。入門〜中級として安定需要があります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ヴィンテージGretschは高いですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">年代物の6120やFalconは非常に高額になることがあります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ビグスビー付きは評価されますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">純正ビグスビーは人気仕様で評価にプラスです。</div>
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

        <RelatedArticles currentSlug="gretsch-kaitori" relatedSlugs={["guitar-kaitori", "gibson-kaitori", "fender-kaitori", "souba-ichiran", "takaku-uru-kotsu"]} />
      </article>
    </>
  );
}

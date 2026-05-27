import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】Selmer買取おすすめ3社比較｜サックスの最高峰の相場",
  description: "Selmer（セルマー）のサックスを売るならどこがいい？Series III・Reference・Super Action 80 IIなどモデル別の買取相場とおすすめ3社を徹底比較。高く売るコツまで解説。",
  openGraph: {
    title: "【2026年最新】Selmer買取おすすめ3社比較｜サックスの最高峰の相場",
    description: "Selmerサックスの買取相場とおすすめ3社を徹底比較。高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "Selmer買取", href: "/articles/selmer-kaitori/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのSelmer製品の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Selmerサックスの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "モデルによって大きく異なります。現行のSeries IIIアルトで15万〜30万円、ヴィンテージのMark VIアルトで30万〜80万円が目安です。テナーはアルトより高めです。" } },
      { "@type": "Question", name: "Mark VIの買取相場が高い理由は？", acceptedAnswer: { "@type": "Answer", text: "Mark VI（1954-1974年製造）は「サックスの最高傑作」と評されるモデルで、特にジャズ奏者の間で絶大な人気があります。製造終了から50年以上経つ希少性と、独特の音色から高額で取引されています。" } },
      { "@type": "Question", name: "Selmerサックスを高く売るコツは？", acceptedAnswer: { "@type": "Answer", text: "複数業者に査定を依頼する、純正マウスピース・ケースを揃える、シリアルナンバーで年式を伝える、管楽器専門の業者に依頼する、の4つが重要です。" } },
      { "@type": "Question", name: "タンポが劣化していても買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、タンポの劣化は査定で減額対象になりますが、Selmerクラスのサックスはタンポ交換前提で査定されるため、十分な買取価格がつきます。" } },
      { "@type": "Question", name: "Selmerのクラリネットも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、Selmerのクラリネット（Recital、Privilege、Signatureなど）も買取可能です。買取相場は3万〜15万円程度です。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】Selmer買取おすすめ3社比較｜サックスの最高峰の相場", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年最新】Selmer買取おすすめ3社比較｜サックスの最高峰の相場\", \"item\": \"https://gakkikaitori-biyori.com/articles/selmer-kaitori/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Selmer買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】Selmer買取おすすめ3社比較｜サックスの最高峰の相場</h1>
          <p className="text-warm-gray text-sm leading-relaxed">Selmer（セルマー/セルマーパリ）のサックスを売りたい方へ。本記事では、Selmer製サックスの買取に強い3社を徹底比較し、Series III・Reference・Super Action 80 IIなどモデル別の買取相場、ヴィンテージSelmerの価値、高く売るコツまで詳しく解説します。Selmerは1885年創業のフランスの管楽器メーカーで、サックスの世界で「最高峰」の地位を確立しています。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <div className="article-body">

          <h2 id="about">Selmerブランドの特徴 ── サックスの最高峰</h2>
          <p>Henri Selmer Paris（アンリ・セルマー・パリ）は1885年にフランス・パリで創業した管楽器メーカーです。サックス、クラリネット、マウスピースなどを製造しており、特にサックスは<strong>プロ奏者の使用率が世界で最も高いブランド</strong>として知られています。</p>
          <p>Charlie Parker、John Coltrane、Michael Breckerなど、ジャズ史に名を残す巨匠たちがSelmerのサックスを愛用してきました。その伝統と品質は中古市場でも非常に高い評価を受けており、Selmerサックスは<strong>管楽器の中で最も安定した買取価格</strong>がつくブランドです。</p>

          <CtaBox />

          <h2 id="market-price">Selmerサックスの買取相場</h2>
          <h3>アルトサックスの買取相場</h3>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">モデル</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3">Series III</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜30万円</td><td className="px-4 py-3 text-warm-gray">現行フラッグシップ</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Reference 54</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜35万円</td><td className="px-4 py-3 text-warm-gray">ヴィンテージ復刻モデル</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">Super Action 80 Series II</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">名機。中古でも人気</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Mark VI（ヴィンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜80万円</td><td className="px-4 py-3 text-warm-gray">1954-1974年。伝説的名機</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">Mark VII（ヴィンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜35万円</td><td className="px-4 py-3 text-warm-gray">1975-1981年。再評価中</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Balanced Action（ヴィンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">40万〜100万円超</td><td className="px-4 py-3 text-warm-gray">1936-1953年。超希少</td></tr>
          </tbody></table></div>

          <h3>テナーサックスの買取相場</h3>
          <p>テナーサックスはアルトサックスより買取相場がやや高い傾向にあります。Series IIIで18万〜35万円、Reference 54で25万〜40万円、Mark VIで40万〜100万円超が目安です。特にMark VIのテナーはジャズ奏者の間で絶大な人気があり、<strong>状態の良いものは100万円を超える</strong>こともあります。</p>

          <h3>ソプラノ・バリトンサックスの買取相場</h3>
          <ul>
            <li><strong>ソプラノサックス Series III</strong>: 12万〜25万円</li>
            <li><strong>ソプラノサックス Mark VI</strong>: 25万〜60万円</li>
            <li><strong>バリトンサックス Series III</strong>: 25万〜50万円</li>
            <li><strong>バリトンサックス Mark VI</strong>: 50万〜120万円</li>
          </ul>

          <CtaBox />

          <h2 id="tips">Selmerサックスを高く売る5つのコツ</h2>
          <h3>コツ1: 複数業者に査定を依頼する</h3>
          <p>Selmerサックスは高額品のため、業者間で査定額に大きな差が出ます。ヒカカク！で一括査定を行い、管楽器に強い業者の見積もりを比較しましょう。</p>
          <h3>コツ2: マウスピース・ケースを揃える</h3>
          <p>純正マウスピース、リガチャー、純正ケース、保証書、ネックストラップなどの付属品を揃えましょう。特にSelmerの純正ケースは高額です。</p>
          <h3>コツ3: クリーニングとメンテナンス</h3>
          <p>本体を磨き、タンポの状態を確認しましょう。タンポが劣化している場合でも、そのまま査定に出して問題ありません（リペア前提で査定されます）。キーオイルを注し、動作確認をしておきましょう。</p>
          <h3>コツ4: シリアルナンバーで年式を伝える</h3>
          <p>Selmerサックスはシリアルナンバーで年式が特定できます。特にMark VIは製造年代によって音色の特徴が異なるため、正確な年式情報は査定額に直結します。</p>
          <h3>コツ5: 楽器専門の業者に依頼する</h3>
          <p>Selmerの価値を正しく評価できるのは管楽器に詳しい専門業者です。一般的なリサイクルショップでは適正価格がつかないことがあります。</p>

          <h2 id="faq">Selmer買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Selmerサックスの買取相場はいくらですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">モデルによって大きく異なります。現行のSeries IIIアルトで15万〜30万円、ヴィンテージのMark VIアルトで30万〜80万円が目安です。テナーはアルトより高めです。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Mark VIの買取相場が高い理由は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">Mark VI（1954-1974年製造）は「サックスの最高傑作」と評されるモデルで、特にジャズ奏者の間で絶大な人気があります。製造終了から50年以上経つ希少性と、独特の音色から高額で取引されています。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Selmerサックスを高く売るコツは？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">複数業者に査定を依頼する、純正マウスピース・ケースを揃える、シリアルナンバーで年式を伝える、管楽器専門の業者に依頼する、の4つが重要です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">タンポが劣化していても買い取ってもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、タンポの劣化は査定で減額対象になりますが、Selmerクラスのサックスはタンポ交換前提で査定されるため、十分な買取価格がつきます。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Selmerのクラリネットも買取できますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、Selmerのクラリネット（Recital、Privilege、Signatureなど）も買取可能です。買取相場は3万〜15万円程度です。</div></details>
          </div>

          <h2>まとめ：Selmer製品は複数業者の比較で高額買取を実現</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>

        <RelatedArticles
          currentSlug="selmer-kaitori"
          relatedSlugs={["saxophone-kaitori", "yanagisawa-kaitori", "bach-kaitori", "yamaha-kaitori", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku", "piano-kaitori", "guitar-kaitori"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import BrandSpotPrices from "@/components/BrandSpotPrices";

export const metadata: Metadata = {
  title: "【2026年6月最新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場",
  description: "Ibanez（アイバニーズ）のギターを売るならどこがいい？RG・JEM・S・Prestigeなどシリーズ別の買取相場とおすすめ3社を徹底比較。高く売るコツまで解説。",
  openGraph: {
    title: "【2026年6月最新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場",
    description: "Ibanezギターの買取相場とおすすめ3社を徹底比較。高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "Ibanez買取", href: "/articles/ibanez-kaitori/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのIbanez製品の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "Ibanez Prestigeの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "日本製Prestigeの買取相場は4万〜12万円程度です。RG・S・AZなどのシリーズ、年式、状態によって変動します。J.Customはさらに高額で8万〜20万円です。" } },
      { "@type": "Question", name: "Ibanez JEMの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "JEMシリーズは5万〜20万円が目安です。日本製のJEM7Vは特に人気が高く、状態が良ければ15万円以上の査定も期待できます。" } },
      { "@type": "Question", name: "インドネシア製のIbanezでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、インドネシア製でも買取可能です。ただし、日本製と比べると買取価格は低めです。RG Standardで1万〜5万円、GIOシリーズで3,000〜1万円が目安です。" } },
      { "@type": "Question", name: "Ibanezを高く売るコツは？", acceptedAnswer: { "@type": "Answer", text: "日本製かどうかを確認する、トレモロの状態を確認する、複数業者に査定を依頼する、付属品を揃える、の4つが重要です。" } },
      { "@type": "Question", name: "Ibanezのベースも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、IbanezのSR・BTBなどのベースシリーズも買取対象です。Prestige（日本製）は3万〜10万円程度の査定が期待できます。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年6月最新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年6月最新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場\", \"item\": \"https://gakkikaitori-biyori.com/articles/ibanez-kaitori/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Ibanez買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年6月最新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場</h1>
          <p className="text-warm-gray text-sm leading-relaxed">Ibanez（アイバニーズ）のギターを売りたい方へ。本記事では、Ibanez製ギターの買取に強い3社を徹底比較し、RG・JEM・S・AZ・Prestigeなどシリーズ別の買取相場と高く売るコツを詳しく解説します。Ibanezは星野楽器が展開する日本発のグローバルギターブランドで、テクニカル系ギタリストから絶大な支持を受けています。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年6月11日</p>
        </header>

        <div className="article-body">

          <h2 id="about">Ibanezブランドの特徴 ── テクニカルギタリストの味方</h2>
          <p>Ibanez（アイバニーズ）は名古屋の星野楽器製作所が展開するギターブランドです。1957年にスタートし、Steve Vai、Joe Satriani、John Petrucci（過去）など、世界的なテクニカルギタリストのシグネチャーモデルを多数リリースしてきました。</p>
          <p>Ibanezの特徴は<strong>薄いネックプロファイル（Wizard/Super Wizard）、フラットな指板、Edge/Lo-Proなどの高精度トレモロ</strong>です。速弾きやテクニカルプレイに最適化された設計で、メタルやフュージョン系のギタリストに特に人気があります。</p>
          <p>中古市場では、日本製（Prestige/J.Custom）のモデルは<strong>安定した人気と高い買取価格</strong>を維持しています。一方、インドネシア製のスタンダードラインは買取価格が控えめです。</p>

          <CtaBox />

          <h2 id="market-price">Ibanezギターのシリーズ別買取相場</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">シリーズ</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3">J.Custom</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">日本製最高峰。カスタムショップ相当</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Prestige（日本製）</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜12万円</td><td className="px-4 py-3 text-warm-gray">RG/S/AZ等。MIJ</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">JEM（Steve Vai）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜20万円</td><td className="px-4 py-3 text-warm-gray">JEM7V/JEM77等。MIJは高額</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">AZシリーズ（Prestige）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">モダンなオールラウンダー</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">RG Standard</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">インドネシア製。手頃</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Sシリーズ（Prestige）</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜10万円</td><td className="px-4 py-3 text-warm-gray">薄型ボディ。軽量</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">RGAシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜7万円</td><td className="px-4 py-3 text-warm-gray">アーチドトップRG</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">GIOシリーズ（エントリー）</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜1万円</td><td className="px-4 py-3 text-warm-gray">初心者向け。買取は低め</td></tr>
          </tbody></table></div>

          <p><strong>日本製（Made in Japan）のPrestigeやJ.Customは、インドネシア製と比べて2〜5倍の買取価格</strong>になることがあります。ヘッドやネックジョイント付近の「Made in Japan」「Prestige」の表記を確認しましょう。</p>

          <h2 id="bass">Ibanezベースの買取相場</h2>
          <ul>
            <li><strong>SR Prestige（日本製）</strong>: 3万〜10万円</li>
            <li><strong>BTBシリーズ</strong>: 2万〜8万円</li>
            <li><strong>SR Standard</strong>: 1万��4万円</li>
            <li><strong>GSR（エントリー）</strong>: 3,000〜1万円</li>
          </ul>

          <CtaBox />

          <h2 id="tips">Ibanezギターを高く売る5つのコツ</h2>
          <h3>コツ1: 日本製（Prestige/J.Custom）かどうかを確認</h3>
          <p>Ibanezの買取価格は製造国で大きく変わります。日本製のPrestigeやJ.Customは高額査定が期待できます。ヘッド裏やネックポケットで製造国を確認しましょう。</p>
          <h3>コツ2: トレモロの状態を確認</h3>
          <p>Edge、Lo-Pro Edge、Edge Zero IIなどのトレモロブリッジの動作確認を行いましょう。アームの動きがスムーズか、チューニングの安定性はどうかをチェックしておくと好印象です。</p>
          <h3>コツ3: 複数業者に査定を依頼する</h3>
          <p>ヒカカク！で一括査定を行い、複数業者の査定額を比較しましょう。Ibanezはブランド専門で強い業者もいるため、差が出やすいです。</p>
          <h3>コツ4: 付属品を揃える</h3>
          <p>純正ケース（特にPrestige付属のハードケース）、トレモロアーム、レンチ類、保証書を揃えましょう。</p>
          <h3>コツ5: クリーニングとフレットの状態確認</h3>
          <p>ボディを拭き、フレットボードを保湿しましょう。フレットの減り具合は査定に影響するため、状態を把握しておきましょう。</p>

          <h2 id="faq">Ibanez買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanez Prestigeの買取相場はいくらですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">日本製Prestigeの買取相場は4万〜12万円程度です。RG・S・AZなどのシリーズ、年式、状態によって変動します。J.Customはさらに高額で8万〜20万円です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanez JEMの買取相場は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">JEMシリーズは5万〜20万円が目安です。日本製のJEM7Vは特に人気が高く、状態が良ければ15万円以上の査定も期待できます。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">インドネシア製のIbanezでも買い取ってもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、インドネシア製でも買取可能です。ただし、日本製と比べると買取価格は低めです。RG Standardで1万〜5万円、GIOシリーズで3,000〜1万円が目安です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanezを高く売るコツは？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">日本製かどうかを確認する、トレモロの状態を確認する、複数業者に査定を依頼する、付属品を揃える、の4つが重要です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanezのベースも買い取ってもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、IbanezのSR・BTBなどのベースシリーズも買取対象です。Prestige（日本製）は3万〜10万円程度の査定が期待できます。</div></details>
          </div>

          <h2>まとめ：Ibanez製品は複数業者の比較で高額買取を実現</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>

        <BrandSpotPrices brand="ibanez" />

        <RelatedArticles
          currentSlug="ibanez-kaitori"
          relatedSlugs={["guitar-kaitori", "bass-kaitori", "fender-kaitori", "gibson-kaitori", "marshall-kaitori", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku", "piano-kaitori"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import BrandSpotPrices from "@/components/BrandSpotPrices";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/ibanez-kaitori/' },
  title: "【2026年11月 週次相場更新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場",
  description: "アイバニーズ（Ibanez）の買取価格を型番別に掲載。島村楽器の掲示ではRG421が1万〜1.7万円、AZ2204が5.9万〜10.5万円、JEM7Vが5.9万〜10.4万円、J.Customは52万円の型番も。シリーズ別の相場とおすすめ3社も比較します。",
  openGraph: { images: ["/og-image.png"], 
    title: "【2026年11月 週次相場更新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場",
    description: "アイバニーズの型番別の掲示買取価格（島村楽器）とシリーズ別の相場、おすすめ3社を比較します。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "Ibanez買取", href: "/articles/ibanez-kaitori/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">ご自身のIbanez製品の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        {/* felmatインプレッション計測 */}
        <img src="https://t.felmat.net/fmimp/A11184N.11542509.O138027B" width={1} height={1} alt="" style={{ border: "none" }} />
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Ibanez Prestigeの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "日本製Prestigeの買取相場は4万〜18万円程度です（島村楽器の掲示：RG5320C A ¥146,000、AZ2204 A ¥105,000・C ¥59,000、2026年11月9日確認）。RG・S・AZなどのシリーズ、年式、状態によって変動します。J.Customは型番により4万〜52万円です。" } },
      { "@type": "Question", name: "Ibanez JEMの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "JEMシリーズは5万〜20万円が目安です。島村楽器の掲示では、JEM7V が A ¥104,000・C ¥59,000、JEM777 が A ¥170,000 です（2026年11月9日確認）。" } },
      { "@type": "Question", name: "インドネシア製のIbanezでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、インドネシア製でも買取可能です。ただし、日本製と比べると買取価格は低めです。RG Standardで1万〜5万円、GIOシリーズで3,000〜1万円が目安です。" } },
      { "@type": "Question", name: "Ibanezを高く売るコツは？", acceptedAnswer: { "@type": "Answer", text: "日本製かどうかを確認する、トレモロの状態を確認する、複数業者に査定を依頼する、付属品を揃える、の4つが重要です。" } },
      { "@type": "Question", name: "Ibanezのベースも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、IbanezのSR・BTBなどのベースシリーズも買取対象です。Prestige（日本製）は3万〜12万円程度が目安です（島村楽器の掲示 SR4500 A ¥122,000）。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年11月 週次相場更新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場", datePublished: "2026-04-26", dateModified: "2026-11-09", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年11月 週次相場更新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場\", \"item\": \"https://gakkikaitori-biyori.com/articles/ibanez-kaitori/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8" style={{ ["--subhero" as string]: "url(/images/subhero/inst-eguitar-superstrat.webp)", ["--subhero-m" as string]: "url(/images/subhero/inst-eguitar-superstrat-m.webp)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Ibanez買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年11月 週次相場更新】Ibanez買取おすすめ3社比較｜RG・JEM・Prestigeの相場</h1>
          <p className="text-warm-gray text-sm leading-relaxed">Ibanez（アイバニーズ）のギターを売りたい方へ。本記事では、Ibanez製ギターの買取に強い3社を比較し、RG・JEM・S・AZ・Prestigeなどシリーズ別の買取相場と高く売るコツを詳しく解説します。Ibanezは星野楽器が展開する日本発のグローバルギターブランドで、テクニカル系ギタリストから絶大な支持を受けています。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年11月9日</p>
        </header>

        <section id="kakaku" className="bg-white border border-warm-border rounded-xl p-5 mb-8">
          <h2 className="font-bold text-lg mb-2">アイバニーズ（Ibanez）の掲示買取価格（型番別）</h2>
          <p className="text-sm text-warm-gray leading-relaxed mb-3">島村楽器の「買取価格検索」に掲示されているアイバニーズの買取価格です（2026年11月9日確認）。インドネシア製のスタンダードなRGは1万〜3万円台、日本製の Prestige は4万〜18万円台、J.Custom は型番により50万円を超えます。</p>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-3 py-2 text-left font-medium whitespace-nowrap">型番</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">Aランク</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">Bランク</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">Cランク</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-3 py-2 font-medium">JCRG2301（J.Custom）</td><td className="px-3 py-2"><strong>¥519,000</strong></td><td className="px-3 py-2">¥421,000</td><td className="px-3 py-2">¥292,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">RG8570（J.Custom）</td><td className="px-3 py-2"><strong>¥182,000</strong></td><td className="px-3 py-2">¥148,000</td><td className="px-3 py-2">¥102,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">JCRG2（J.Custom）</td><td className="px-3 py-2"><strong>¥107,000</strong></td><td className="px-3 py-2">¥87,000</td><td className="px-3 py-2">¥60,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">JEM777</td><td className="px-3 py-2"><strong>¥170,000</strong></td><td className="px-3 py-2">¥138,000</td><td className="px-3 py-2">¥95,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">JEM7V</td><td className="px-3 py-2"><strong>¥104,000</strong></td><td className="px-3 py-2">¥85,000</td><td className="px-3 py-2">¥59,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">RG5320C</td><td className="px-3 py-2"><strong>¥146,000</strong></td><td className="px-3 py-2">¥119,000</td><td className="px-3 py-2">¥82,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">AZ2402</td><td className="px-3 py-2"><strong>¥127,000</strong></td><td className="px-3 py-2">¥103,000</td><td className="px-3 py-2">¥71,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">AZ2204</td><td className="px-3 py-2"><strong>¥105,000</strong></td><td className="px-3 py-2">¥85,000</td><td className="px-3 py-2">¥59,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">S5470K</td><td className="px-3 py-2"><strong>¥82,000</strong></td><td className="px-3 py-2">¥67,000</td><td className="px-3 py-2">¥46,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">RG652AHM</td><td className="px-3 py-2"><strong>¥79,000</strong></td><td className="px-3 py-2">¥64,000</td><td className="px-3 py-2">¥44,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">RG550</td><td className="px-3 py-2"><strong>¥52,000</strong></td><td className="px-3 py-2">¥43,000</td><td className="px-3 py-2">¥29,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">RG370</td><td className="px-3 py-2"><strong>¥25,000</strong></td><td className="px-3 py-2">¥20,000</td><td className="px-3 py-2">¥14,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">RGA42</td><td className="px-3 py-2"><strong>¥23,000</strong></td><td className="px-3 py-2">¥19,000</td><td className="px-3 py-2">¥13,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">RG421</td><td className="px-3 py-2"><strong>¥17,000</strong></td><td className="px-3 py-2">¥14,000</td><td className="px-3 py-2">¥10,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">SR4500（ベース）</td><td className="px-3 py-2"><strong>¥122,000</strong></td><td className="px-3 py-2">¥92,000</td><td className="px-3 py-2">¥51,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">SR300E（ベース）</td><td className="px-3 py-2"><strong>¥26,000</strong></td><td className="px-3 py-2">¥21,000</td><td className="px-3 py-2">¥14,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">GSR205B（ベース）</td><td className="px-3 py-2"><strong>¥17,000</strong></td><td className="px-3 py-2">¥14,000</td><td className="px-3 py-2">¥9,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray leading-relaxed">出典：<a href="https://www.shimamura.co.jp/used/search.html?cat=4&amp;inst=&amp;brand=&amp;model=JCRG&amp;num=100&amp;pg=1" target="_blank" rel="nofollow noopener" className="underline">島村楽器「買取価格検索」</a>（型番で検索・2026年11月9日確認）。島村楽器の定義は、Aランク＝新品同様で傷や汚れがない、Bランク＝多少の傷や汚れがあるが機能に問題がない、Cランク＝使用感があり傷や汚れが目立つが機能に問題がない。付属品の欠品は別途減額、修理・調整が必要な場合はその費用が差し引かれます。掲示額は目安で、買取を保証するものではありません。同じ型番でもカラーや仕様の違う行は金額が異なります（例：RG8570M は A ¥88,000）。GIOシリーズ（GRG など）の掲示は見つかりませんでした。</p>
          <h3 className="font-bold text-base mt-4 mb-2">持ち込みか出張か</h3>
          <p className="text-sm text-warm-gray leading-relaxed">ギター・ベースは店頭に持ち込めます。島村楽器の店頭買取は代金が銀行振込のみ（現金払いなし・10万円以上は1週間ほど）で、<a href="https://www.ishibashi.co.jp/kaitori/tentou/" target="_blank" rel="nofollow noopener" className="underline">イシバシ楽器の店頭買取</a>はその場で現金または振込（鑑定合計50万円以上は振込）です（2026年11月9日確認）。複数本をまとめて売る場合や近くに店がない場合は、出張買取や一括査定で比べてください。</p>
        </section>

        <div className="article-body">

          {/* 2026-08-26 型番クエリの受け皿。ハブに着地していた型番検索を、型番ページへ振り分ける */}
          <div className="bg-warm-bg border border-warm-border rounded-xl p-5 my-6">
            <p className="font-bold mb-2">型番・モデルが決まっている方へ</p>
            <p className="text-sm text-warm-gray mb-3">お手持ちのモデルが分かっている場合は、下記の型番別ページのほうが相場を細かく確認できます。</p>
            <ul className="space-y-1 text-sm list-disc pl-5">
              <li><a href="/articles/ibanez-jem-kaitori/" className="text-accent-dark underline">アイバニーズ JEMの買取相場</a></li>
              <li><a href="/articles/ibanez-rg-kaitori/" className="text-accent-dark underline">アイバニーズ RG買取相場</a></li>
              <li><a href="/articles/ibanez-ts808-kaitori/" className="text-accent-dark underline">アイバニーズ TS808買取相場</a></li>
              <li><a href="/articles/ibanez-ts9-kaitori/" className="text-accent-dark underline">Ibanez TS9の買取相場</a></li>
            </ul>
          </div>


          <h2 id="about">Ibanezブランドの特徴 ── テクニカルギタリストの味方</h2>
          <p>Ibanez（アイバニーズ）は星野楽器（HOSHINO GAKKI）が展開するギターブランドです。1957年にスタートし、Steve Vai、Joe Satriani、John Petrucci（過去）など、世界的なテクニカルギタリストのシグネチャーモデルを多数リリースしてきました。</p>
          <p>Ibanezの特徴は<strong>薄いネックプロファイル（Wizard/Super Wizard）、フラットな指板、Edge/Lo-Proなどの高精度トレモロ</strong>です。速弾きやテクニカルプレイに最適化された設計で、メタルやフュージョン系のギタリストに特に人気があります。</p>
          <p>中古市場では、日本製（Prestige/J.Custom）のモデルは<strong>安定した人気と高い買取価格</strong>を維持しています。一方、インドネシア製のスタンダードラインは買取価格が控えめです。</p>

          <CtaBox />

          <h2 id="market-price">Ibanezギターのシリーズ別買取相場</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">シリーズ</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3">J.Custom</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜52万円</td><td className="px-4 py-3 text-warm-gray">日本製最高峰。カスタムショップ相当</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Prestige（日本製）</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜18万円</td><td className="px-4 py-3 text-warm-gray">RG/S/AZ等。MIJ</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">JEM（Steve Vai）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜20万円</td><td className="px-4 py-3 text-warm-gray">JEM7V/JEM77等。MIJは高額</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">AZシリーズ（Prestige）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td><td className="px-4 py-3 text-warm-gray">モダンなオールラウンダー</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">RG Standard</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">インドネシア製。手頃</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">Sシリーズ（Prestige）</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜10万円</td><td className="px-4 py-3 text-warm-gray">薄型ボディ。軽量</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">RGAシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜7万円</td><td className="px-4 py-3 text-warm-gray">アーチドトップRG</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">GIOシリーズ（エントリー）</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜1万円</td><td className="px-4 py-3 text-warm-gray">初心者向け。買取は低め</td></tr>
          </tbody></table></div>

          <p className="text-xs text-warm-gray -mt-4 mb-6">J.Custom・Prestige・AZ の金額は、冒頭の島村楽器の掲示（JCRG の型番は C ¥43,000〜A ¥519,000、AZ2204・AZ2402 系は C ¥59,000〜A ¥184,000）に合わせて2026年11月9日に直しました。ほかの行は掲示額と食い違っていないことを確認しました（GIO は掲示なし）。</p>

          <p><strong>日本製（Made in Japan）のPrestigeやJ.Customは、インドネシア製と比べて2〜5倍の買取価格</strong>になることがあります。ヘッドやネックジョイント付近の「Made in Japan」「Prestige」の表記をご確認ください。</p>

          <h2 id="bass">Ibanezベースの買取相場</h2>
          <ul>
            <li><strong>SR Prestige（日本製）</strong>: 3万〜12万円（島村楽器の掲示 SR4500 A ¥122,000・SR5005 A ¥111,000）</li>
            <li><strong>BTBシリーズ</strong>: 1万〜11万円（島村楽器の掲示 C ¥12,000〜A ¥109,000）</li>
            <li><strong>SR Standard</strong>: 1万��4万円</li>
            <li><strong>GSR（エントリー）</strong>: 9,000〜2万円（島村楽器の掲示 GSR205B C ¥9,000〜GSR186 A ¥21,000）</li>
          </ul>

          <CtaBox />

          <h2 id="tips">Ibanezギターを高く売る5つのコツ</h2>
          <h3>コツ1: 日本製（Prestige/J.Custom）かどうかを確認</h3>
          <p>Ibanezの買取価格は製造国で大きく変わります。日本製のPrestigeやJ.Customは高額査定が期待できます。ヘッド裏やネックポケットで製造国をご確認ください。</p>
          <h3>コツ2: トレモロの状態を確認</h3>
          <p>Edge、Lo-Pro Edge、Edge Zero IIなどのトレモロブリッジの動作確認を行ってください。アームの動きがスムーズか、チューニングの安定性はどうかをチェックしておくと好印象です。</p>
          <h3>コツ3: 複数業者に査定を依頼する</h3>
          <p>ヒカカク！で一括査定を行い、複数業者の査定額を比較してください。Ibanezはこのブランドを得意とする業者もいるため、業者間で査定額に差が出やすくなります。</p>
          <h3>コツ4: 付属品を揃える</h3>
          <p>純正ケース（特にPrestige付属のハードケース）、トレモロアーム、レンチ類、保証書を揃えてください。</p>
          <h3>コツ5: クリーニングとフレットの状態確認</h3>
          <p>ボディを拭き、フレットボードを保湿してください。フレットの減り具合は査定に影響するため、状態を把握しておいてください。</p>

          <h2 id="faq">Ibanez買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanez Prestigeの買取相場はいくらですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">日本製Prestigeの買取相場は4万〜18万円程度です（島村楽器の掲示：RG5320C A ¥146,000、AZ2204 A ¥105,000・C ¥59,000、2026年11月9日確認）。RG・S・AZなどのシリーズ、年式、状態によって変動します。J.Customは型番により4万〜52万円です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanez JEMの買取相場は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">JEMシリーズは5万〜20万円が目安です。島村楽器の掲示では、JEM7V が A ¥104,000・C ¥59,000、JEM777 が A ¥170,000 です（2026年11月9日確認）。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">インドネシア製のIbanezでも買い取ってもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、インドネシア製でも買取可能です。ただし、日本製と比べると買取価格は低めです。RG Standardで1万〜5万円、GIOシリーズで3,000〜1万円が目安です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanezを高く売るコツは？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">日本製かどうかを確認する、トレモロの状態を確認する、複数業者に査定を依頼する、付属品を揃える、の4つが重要です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Ibanezのベースも買い取ってもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、IbanezのSR・BTBなどのベースシリーズも買取対象です。Prestige（日本製）は3万〜12万円程度が目安です（島村楽器の掲示 SR4500 A ¥122,000）。</div></details>
          </div>

          <h2>まとめ：Ibanez製品は複数業者の比較で高額買取を実現</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取（宅配は一時停止中）</li>
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

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/martin-kaitori/' },
  title: "Martin買取はどこがいい？D-28等の相場とおすすめ3社【2026年8月】",
  description:
    "Martin（マーティン）のアコギを売るならどこがいい？D-28・D-45・000-28などモデル別の買取相場の目安と、Martin買取に強いおすすめ3社を比較。ヴィンテージ・限定モデルの高額買取のコツも解説。無料査定だけの利用もOK。",
  openGraph: {
    title: "Martin買取はどこがいい？D-28等の相場とおすすめ3社【2026年8月】",
    description: "Martinアコギの買取相場の目安とおすすめ3社を比較。モデル別相場から高く売るコツまで。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "Martin買取", href: "/articles/martin-kaitori/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのMartinギターの買取価格を今すぐチェック</p>
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
    { "@type": "Question", name: "Martin D-28の買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "Martin D-28の買取相場は、現行モデルで10万〜25万円程度です。1960年代以前のヴィンテージD-28は50万〜200万円以上の高額取引もあります。年式・状態・ハカランダ（ブラジリアンローズウッド）の有無が価格を大きく左右します。" } },
    { "@type": "Question", name: "Martin D-45の買取相場は？", acceptedAnswer: { "@type": "Answer", text: "Martin D-45はMartinの最高峰モデルで、現行品で25万〜60万円、ヴィンテージ品は100万円〜数百万円の買取価格がつくこともあります。特に1942年以前のプリウォーD-45は超高額です。" } },
    { "@type": "Question", name: "Martinのギターを高く売るコツは？", acceptedAnswer: { "@type": "Answer", text: "複数業者に査定を依頼する、純正ハードケースを揃える、湿度管理の良さをアピールする、ネック反りがないか確認する、シリアルナンバーで年式を伝える、の5つがポイントです。Martinはケースの有無で大きく査定が変わります。" } },
    { "@type": "Question", name: "ヴィンテージMartinの価値はどうやって判断しますか？", acceptedAnswer: { "@type": "Answer", text: "ヴィンテージMartinの価値は、年式（シリアルナンバーで特定）、使用木材（特にハカランダの有無）、オリジナルパーツの残存率、ネック状態、リペア歴で判断されます。1969年以前のハカランダモデルは特に高額です。" } },
    { "@type": "Question", name: "Martin以外のアコギブランドとの買取価格の違いは？", acceptedAnswer: { "@type": "Answer", text: "Martinはアコースティックギターのトップブランドであり、同クラスのTaylorやGibsonアコギと比較しても、中古市場での人気が高く安定した買取価格がつきます。特にD-28とD-45はアコギの定番として不動の地位を確立しています。" } },
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年8月最新】Martin買取おすすめ3社比較｜アコギの王様の相場・高く売るコツ", datePublished: "2026-04-26", dateModified: "2026-08-01", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年8月最新】Martin買取おすすめ3社比較｜アコギの王様の相場と高く売るコツ\", \"item\": \"https://gakkikaitori-biyori.com/articles/martin-kaitori/\"}]}" }} /></>);
}

export default function MartinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Martin買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年8月最新】Martin買取おすすめ3社比較｜アコギの王様の相場と高く売るコツ</h1>
          <p className="text-warm-gray text-sm leading-relaxed">Martin（マーティン/マーチン）のアコースティックギターを売りたい方へ。本記事では、Martin製アコギの買取に強い3社を徹底比較し、D-28・D-45・000-28などモデル別の買取相場、ヴィンテージMartinの価値、高く売るコツまで詳しく解説します。1833年創業の老舗ブランドMartinは、アコースティックギターの世界で「王様」と称される存在です。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年8月1日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#about" className="hover:underline">Martinブランドの特徴</a></li>
            <li><a href="#dreadnought" className="hover:underline">ドレッドノートの買取相場</a></li>
            <li><a href="#other" className="hover:underline">その他モデルの買取相場</a></li>
            <li><a href="#vintage" className="hover:underline">ヴィンテージMartinの価値</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較</a></li>
            <li><a href="#tips" className="hover:underline">高く売るコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">

          {/* 2026-08-26 型番クエリの受け皿。ハブに着地していた型番検索を、型番ページへ振り分ける */}
          <div className="bg-warm-bg border border-warm-border rounded-xl p-5 my-6">
            <p className="font-bold mb-2">型番・モデルが決まっている方へ</p>
            <p className="text-sm text-warm-gray mb-3">お手持ちのモデルが分かっている場合は、下記の型番別ページのほうが相場を細かく確認できます。</p>
            <ul className="space-y-1 text-sm list-disc pl-5">
              <li><a href="/articles/martin-000-kaitori/" className="text-accent-dark underline">マーティン 000-28の買取相場</a></li>
              <li><a href="/articles/martin-d28-kaitori/" className="text-accent-dark underline">マーチン D-28買取相場</a></li>
              <li><a href="/articles/martin-d45-kaitori/" className="text-accent-dark underline">マーティン D-45の買取相場</a></li>
            </ul>
          </div>

          <h2 id="about">Martinブランドの特徴 ── アコースティックギターの原点</h2>
          <p>C.F. Martin & Company（マーティン）は1833年にドイツ移民のクリスチャン・フレデリック・マーティンがアメリカ・ペンシルベニア州で創業したアコースティックギターメーカーです。<strong>ドレッドノートボディの発明者</strong>として知られ、アコースティックギターの歴史そのものを作ってきたブランドです。</p>
          <p>Martinの特徴は、スプルーストップ＋ローズウッド（またはマホガニー）サイド＆バックの伝統的な構造と、長年の経験に裏打ちされた<strong>「鳴り」の良さ</strong>です。新品の時点から豊かな音量と深みのある音色を持ち、弾き込むほどに音が育っていくのがMartinギターの魅力です。</p>
          <p>中古市場では、Martinは<strong>アコースティックギターブランドの中で最も安定した買取価格</strong>を誇ります。特にD-28、D-45、000-28は中古でも非常に人気が高く、状態が良ければ高額買取が確実です。</p>

          <CtaBox />

          <h2 id="dreadnought">Martinドレッドノートシリーズの買取相場</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">モデル</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">D-28</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">アコギの定番中の定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">D-35</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">3ピースバック</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">D-45</td><td className="px-4 py-3 text-gold-dark font-bold">25万〜60万円</td><td className="px-4 py-3 text-warm-gray">Martinの最高峰。豪華装飾</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">D-18</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td><td className="px-4 py-3 text-warm-gray">マホガニーバック。温かい音色</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">HD-28</td><td className="px-4 py-3 text-gold-dark font-bold">12万〜28万円</td><td className="px-4 py-3 text-warm-gray">ヘリンボーン装飾。スキャロップ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">D-16E</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">エレアコ。16シリーズ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">D-X2E</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">HPL素材のエントリーモデル</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="other">その他モデルの買取相場</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">モデル</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">000-28</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜22万円</td><td className="px-4 py-3 text-warm-gray">オーディトリアムサイズの名機</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">OM-28</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜22万円</td><td className="px-4 py-3 text-warm-gray">ロングスケールの000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">00-18</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td><td className="px-4 py-3 text-warm-gray">小ぶりで繊細な音色</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">GPC-16E</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">カッタウェイ付きエレアコ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">LX1 Little Martin</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">ミニギター。旅行用に人気</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="vintage">ヴィンテージMartinの価値</h2>
          <p>Martinギターの中古市場で最も注目されるのがヴィンテージモデルです。特に<strong>1969年以前のハカランダ（ブラジリアンローズウッド）を使用したモデル</strong>は、木材の希少性から非常に高額で取引されています。</p>
          <ul>
            <li><strong>1930〜40年代のプリウォーD-28</strong>: 200万〜500万円（アディロンダックスプルース＋ハカランダ）</li>
            <li><strong>1950〜60年代のD-28</strong>: 80万〜200万円（ハカランダ期）</li>
            <li><strong>1970年代のD-28</strong>: 20万〜50万円（インディアンローズウッドに変更後）</li>
            <li><strong>プリウォーD-45</strong>: 500万〜1,000万円超（極めて希少）</li>
          </ul>
          <p>ヴィンテージMartinを売る場合は、<strong>その価値を正しく評価できる専門業者に査定を依頼することが極めて重要</strong>です。一般的なリサイクルショップでは、ヴィンテージの価値が正しく査定されないリスクがあります。ヒカカク！で楽器専門の業者に査定を出しましょう。</p>

          <CtaBox />

          <h2 id="comparison">Martin買取おすすめ3社を比較</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">ヒカカク！</th><th className="px-4 py-3 text-left font-medium">ティファナ</th><th className="px-4 py-3 text-left font-medium">ウリエル</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定（複数業者）</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取専門</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">Martin対応</td><td className="px-4 py-3 text-gold-dark font-bold">専門業者多数</td><td className="px-4 py-3">全モデル対応</td><td className="px-4 py-3">全モデル対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい</td><td className="px-4 py-3">手軽に売りたい</td><td className="px-4 py-3">自宅で完結したい</td></tr>
              </tbody>
            </table>
          </div>
          <p>Martinギターは高額品が多いため、<strong>ヒカカク！の一括査定で複数の楽器専門業者から見積もりを取る</strong>のが最もおすすめです。業者間の競争で、1社に出すより高い買取価格になりやすいです。</p>

          <h2 id="tips">Martinギターを高く売る5つのコツ</h2>
          <h3>コツ1: 純正ハードケースは必須</h3>
          <p>Martinの純正ハードケースは、それだけで<strong>5,000〜1万円以上の価値</strong>があります。ケースなしで売ると大幅な減額になるため、必ずケース付きで査定に出しましょう。</p>
          <h3>コツ2: シリアルナンバーで年式を特定</h3>
          <p>Martinはヘッド裏やネックブロックにシリアルナンバーが刻印されています。年式によって使用木材や製造方法が異なるため、正確な年式情報は査定額に直結します。</p>
          <h3>コツ3: 湿度管理の良さをアピール</h3>
          <p>Martinギターは木材が非常にデリケートです。適切な湿度（45〜55%）で保管されていた場合、ネックの反りやボディの変形が少なく、高評価につながります。加湿器を使用していた場合はその旨を伝えましょう。</p>
          <h3>コツ4: 複数業者に査定を依頼する</h3>
          <p>Martinの買取価格は業者によって大きく異なります。特にヴィンテージモデルは、業者の専門性によって査定額に数十万円の差が出ることも。必ずヒカカク！で複数社の見積もりを比較しましょう。</p>
          <h3>コツ5: リペア歴を正直に伝える</h3>
          <p>ネックリセットやブレイシング修理などのリペア歴は、隠さずに伝えましょう。適切なリペアが施されている場合は、むしろプラス評価になることもあります。</p>

          <CtaBox />

          <h2 id="faq">Martin買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Martin D-28の買取相場はいくらですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">現行モデルで10万〜25万円程度です。ヴィンテージ品は年式により50万〜200万円以上になることもあります。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Martin D-45の買取相場は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">現行品で25万〜60万円、ヴィンテージ品は100万円〜数百万円になることもあります。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Martinのギターを高く売るコツは？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">純正ハードケースを揃える、シリアルナンバーで年式を特定する、複数業者に査定を依頼する、の3つが特に重要です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">ヴィンテージMartinの価値はどうやって判断しますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">年式、使用木材（特にハカランダの有無）、オリジナルパーツの残存率、ネック状態、リペア歴で判断されます。1969年以前のハカランダモデルは特に高額です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">Martin以外のアコギとの買取価格の違いは？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">Martinはアコギのトップブランドで、同クラスのTaylorやGibsonアコギと比較しても安定した買取価格がつきます。特にD-28とD-45は定番として不動の人気です。</div></details>
          </div>

          <h2>まとめ：Martinギターは専門業者への査定が必須</h2>
          <p>Martinはアコースティックギターの王様であり、中古市場でも非常に高い価値を持ちます。特にヴィンテージモデルは、その価値を正しく評価できる専門業者に査定を依頼することが重要です。</p>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>

        <RelatedArticles
          currentSlug="martin-kaitori"
          relatedSlugs={["guitar-kaitori", "gibson-kaitori", "fender-kaitori", "ibanez-kaitori", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku", "piano-kaitori", "saxophone-kaitori"]}
        />
      </article>
    </>
  );
}

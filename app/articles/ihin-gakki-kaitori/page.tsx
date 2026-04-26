import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】楽器の遺品整理｜故人の楽器を適正価格で買い取ってもらう方法",
  description: "故人が大切にしていた楽器を遺品整理で処分する方法。ピアノ・ギター・管楽器など遺品楽器の買取相場、遺品整理業者vs楽器買取業者の比較、注意点まで解説。",
  openGraph: {
    title: "【2026年最新】楽器の遺品整理｜故人の楽器を適正価格で買い取ってもらう方法",
    description: "遺品整理での楽器買取。適正価格で売る方法とおすすめ業者を徹底解説。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "楽器 遺品整理 買取", href: "/articles/ihin-gakki-kaitori/" }];
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
    </div>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "故人の楽器は捨てた方がいいですか？", acceptedAnswer: { "@type": "Answer", text: "いいえ、捨てる前に必ず買取査定を受けてください。古い楽器でもブランド品やヴィンテージ品には高い価値がある場合があります。数十万円の価値がある楽器を粗大ゴミに出してしまうケースもあるため、まずはヒカカク！で査定を。" } },
      { "@type": "Question", name: "楽器の価値がわからなくても査定してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ブランド名やモデル名がわからなくても、写真を送るだけで査定してもらえます。プロの査定士が楽器の価値を判断してくれます。" } },
      { "@type": "Question", name: "遺品整理業者と楽器買取業者、どちらに頼むべきですか？", acceptedAnswer: { "@type": "Answer", text: "楽器だけは楽器買取の専門業者に査定を出すことをおすすめします。遺品整理業者は楽器の専門知識を持っていないことが多く、ヴィンテージ品の価値を見逃す可能性があります。" } },
      { "@type": "Question", name: "故人の楽器を出張買取してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ウリエルの出張買取なら故人の自宅に査定士が訪問し、ピアノなど大型楽器も含めて一括で査定・買取が可能です。" } },
      { "@type": "Question", name: "遺品の楽器を売る際に必要な書類はありますか？", acceptedAnswer: { "@type": "Answer", text: "売却者の本人確認書類（免許証等）が必要です。故人名義の楽器でも問題なく売却できますが、心配な場合は事前に業者に相談しましょう。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】楽器の遺品整理｜故人の楽器を適正価格で買い取ってもらう方法", datePublished: "2026-04-26", dateModified: "2026-04-26", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">遺品整理</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】楽器の遺品整理｜故人の楽器を適正価格で買い取ってもらう方法</h1>
          <p className="text-warm-gray text-sm leading-relaxed">故人が大切にしていた楽器を遺品整理で処分する方法。ピアノ・ギター・管楽器など遺品楽器の買取相場、遺品整理業者vs楽器買取業者の比較、注意点まで解説。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <div className="article-body">

          <h2 id="overview">遺品の楽器をどうすべきか</h2>
          <p>大切な方が亡くなった後、遺品の中に楽器が含まれているケースは少なくありません。ピアノ、ギター、バイオリン、サックスなど、故人が大切にしていた楽器をどのように処分すべきか、悩む方は多いでしょう。</p>
          <p>結論から言うと、<strong>遺品の楽器は「捨てる」のではなく「買い取ってもらう」のが最善</strong>です。古い楽器でも、ブランド品やヴィンテージ品には高い価値がある場合があります。適正な査定を受けることで、故人の楽器を大切に次の持ち主に引き継ぐことができます。</p>

          <h3>遺品楽器の処分方法の比較</h3>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">方法</th><th className="px-4 py-3 text-left font-medium">メリット</th><th className="px-4 py-3 text-left font-medium">デメリット</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3 font-medium">楽器買取業者</td><td className="px-4 py-3">適正価格で売却できる</td><td className="px-4 py-3 text-warm-gray">業者選びが必要</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">遺品整理業者</td><td className="px-4 py-3">まとめて処分できる</td><td className="px-4 py-3 text-warm-gray">楽器の価値が正しく査定されない</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-medium">粗大ゴミ</td><td className="px-4 py-3">処分費用が安い</td><td className="px-4 py-3 text-warm-gray">価値のある楽器を捨ててしまう</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">寄付・譲渡</td><td className="px-4 py-3">社会貢献になる</td><td className="px-4 py-3 text-warm-gray">受け入れ先が限られる</td></tr>
          </tbody></table></div>

          <p><strong>最もおすすめは、まずヒカカク！で楽器の価値を確認すること</strong>です。「価値がない」と思っていた楽器が、実は数万円〜数十万円の価値があるケースは珍しくありません。</p>

          <CtaBox />

          <h2 id="value">遺品楽器の価値を見極めるポイント</h2>
          <h3>高額買取が期待できる遺品楽器</h3>
          <ul>
            <li><strong>ヴィンテージギター</strong>: 1970年代以前のGibson・Fender・Martinは非常に高額（数十万〜数百万円）</li>
            <li><strong>グランドピアノ</strong>: YAMAHA・KAWAI・Steinwayなどの有名メーカー品</li>
            <li><strong>管楽器（サックス・トランペット）</strong>: Selmer・YAMAHA・Bachなどのプロ仕様</li>
            <li><strong>バイオリン</strong>: ドイツ製・イタリア製の古い楽器は高額の可能性</li>
            <li><strong>アコースティックピアノ</strong>: YAMAHA U1/U3、KAWAIなど国産ブランド</li>
          </ul>

          <h3>楽器の価値がわからない場合</h3>
          <p>遺品の楽器の価値がわからない場合は、<strong>絶対に捨てないでください</strong>。まずはヒカカク！で一括査定を依頼し、プロの目で価値を判断してもらいましょう。写真を撮って送るだけで概算の査定額がわかります。</p>

          <h2 id="comparison">遺品整理業者 vs 楽器買取業者</h2>
          <p>遺品整理を行う際、遺品整理業者に一括で依頼するケースが多いですが、<strong>楽器だけは楽器買取の専門業者に査定を出す</strong>ことを強くおすすめします。</p>
          <p>遺品整理業者は楽器の専門知識を持っていないことが多く、ヴィンテージギターや高額管楽器の価値を見逃してしまうリスクがあります。数十万円の価値がある楽器が、数千円で引き取られてしまうケースも実際に起きています。</p>

          <CtaBox />

          <h2 id="flow">遺品楽器の買取の流れ</h2>
          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h4 className="font-bold text-sm mb-1">楽器の写真を撮る</h4><p className="text-sm text-warm-gray">ブランド名・モデル名がわかるラベルやロゴ、全体像、傷の有無などを撮影します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h4 className="font-bold text-sm mb-1">ヒカカク！で一括査定</h4><p className="text-sm text-warm-gray">写真と楽器情報を入力し、複数業者に査定を依頼します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h4 className="font-bold text-sm mb-1">出張買取で自宅完結</h4><p className="text-sm text-warm-gray">ウリエルの出張買取なら、故人の自宅に査定士が訪問。ピアノなど大型楽器も運搬不要です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h4 className="font-bold text-sm mb-1">買取成立・現金受け取り</h4><p className="text-sm text-warm-gray">金額に納得できれば買取成立。その場で現金を受け取れます。</p></div>
            </div>
          </div>

          <h2 id="tips">遺品楽器を適正価格で売る5つのポイント</h2>
          <h3>ポイント1: 楽器を捨てない・急がない</h3>
          <p>遺品整理は急ぎがちですが、楽器だけは査定を受けてから処分を決めましょう。価値のわからない楽器を粗大ゴミに出して後悔するケースは少なくありません。</p>
          <h3>ポイント2: 複数業者に査定を依頼する</h3>
          <p>ヒカカク！で一括査定を行い、楽器専門の業者を含む複数社の見積もりを比較しましょう。</p>
          <h3>ポイント3: 付属品を探す</h3>
          <p>ケース、保証書、取扱説明書、メンテナンス道具など、楽器に関連する付属品が故人の自宅にないか探しましょう。付属品が揃うことで査定額が上がります。</p>
          <h3>ポイント4: 遺品整理業者と楽器買取業者を使い分ける</h3>
          <p>家具や家電は遺品整理業者に任せ、楽器だけは専門の買取業者に依頼しましょう。この使い分けが最も合理的です。</p>
          <h3>ポイント5: 出張買取を活用する</h3>
          <p>故人の自宅にある楽器を運び出す手間を考えると、ウリエルの出張買取が最も便利です。ピアノや大型楽器も自宅で完結します。</p>

          <h2 id="faq">よくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">故人の楽器は捨てた方がいいですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">いいえ、捨てる前に必ず買取査定を受けてください。古い楽器でもブランド品やヴィンテージ品には高い価値がある場合があります。数十万円の価値がある楽器を粗大ゴミに出してしまうケースもあるため、まずはヒカカク！で査定を。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">楽器の価値がわからなくても査定してもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ブランド名やモデル名がわからなくても、写真を送るだけで査定してもらえます。プロの査定士が楽器の価値を判断してくれます。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">遺品整理業者と楽器買取業者、どちらに頼むべきですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">楽器だけは楽器買取の専門業者に査定を出すことをおすすめします。遺品整理業者は楽器の専門知識を持っていないことが多く、ヴィンテージ品の価値を見逃す可能性があります。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">故人の楽器を出張買取してもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ウリエルの出張買取なら故人の自宅に査定士が訪問し、ピアノなど大型楽器も含めて一括で査定・買取が可能です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">遺品の楽器を売る際に必要な書類はありますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">売却者の本人確認書類（免許証等）が必要です。故人名義の楽器でも問題なく売却できますが、心配な場合は事前に業者に相談しましょう。</div></details>
          </div>

          <h2>まとめ</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group"><span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">高く売るコツ</span><h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3></Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group"><span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">買取方法比較</span><h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">買取方法の比較ガイド</h3></Link>
            <Link href="/articles/souba-ichiran/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group"><span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">相場一覧</span><h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">全楽器の買取相場まとめ</h3></Link>
            <Link href="/articles/kowareta-gakki-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group"><span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">壊れた楽器</span><h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">壊れた楽器の買取</h3></Link>
          </div>
        </aside>
      </article>
    </>
  );
}

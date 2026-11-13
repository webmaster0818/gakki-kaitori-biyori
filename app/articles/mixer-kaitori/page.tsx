import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/mixer-kaitori/' },
  title: "【2026年最新】ミキサー買取おすすめ3社比較｜PA・DJミキサーの相場",
  description: "DJミキサーの買取価格は島村楽器の掲示でDJM-V10が最大24.2万円、DJM-A9が20.2万円、DJM-900NXS2が11.9万円（11/13確認）。型番別の掲示表とPA卓の相場、査定のポイント、おすすめ3社を解説。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/#instrument" className="hover:text-accent transition-colors">楽器の種類</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">ミキサー買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "ミキサーの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "小型アナログで数千〜2万円、中型〜デジタル卓やPioneer DJミキサーは2万〜十数万円以上が目安です。" } },
      { "@type": "Question", name: "ガリ（接触不良）があっても売れますか？", acceptedAnswer: { "@type": "Answer", text: "軽度なら買取可能ですが減額されます。状態を正確に伝えてください。" } },
      { "@type": "Question", name: "DJミキサー（DJM等）は高いですか？", acceptedAnswer: { "@type": "Answer", text: "はい。Pioneer DJ DJMシリーズは中古需要が高く高評価です。" } },
      { "@type": "Question", name: "電源アダプタがないと売れませんか？", acceptedAnswer: { "@type": "Answer", text: "売却可能ですが、付属していると査定が有利です。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社はすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】ミキサー買取おすすめ3社比較｜PA・DJミキサーの相場", datePublished: "2026-06-05", dateModified: "2026-11-13", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "【2026年最新】ミキサー買取おすすめ3社比較｜PA・DJミキサーの相場", item: "https://gakkikaitori-biyori.com/articles/mixer-kaitori/" },
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

export default function MixerKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8" style={{ ["--subhero" as string]: "url(/images/subhero/inst-mixer.webp)", ["--subhero-m" as string]: "url(/images/subhero/inst-mixer-m.webp)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ミキサー買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】ミキサー買取おすすめ3社比較｜PA・DJミキサーの相場</h1>
          <p className="text-warm-gray text-sm leading-relaxed">ミキサー（PA卓・DJミキサー）を売りたい方へ。YAMAHA・Mackie・Allen & Heath・Pioneer DJ などメーカー別の価値、アナログ/デジタルの違い、チャンネル数、状態による査定差を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年11月13日</p>
        </header>

        <div className="article-body">

          <section id="kakaku" className="bg-white border border-warm-border rounded-xl p-5 mb-8">
            <h2 className="font-bold text-lg mb-2">DJミキサーの掲示買取価格（島村楽器・2026年11月13日確認）</h2>
            <p className="text-sm text-warm-gray leading-relaxed mb-3">DJミキサーは型番と状態で買取価格がほぼ決まります。島村楽器の「買取価格検索」に掲示されている上限の目安は、Pioneer DJ の DJM-V10 で ¥242,000、DJM-A9 で ¥202,000、DJM-900NXS2 で ¥119,000（いずれもAランク）です。同じ型番でもAランクとCランクで、表の型番では ¥7,000（DJM-250MK2）〜¥66,000（DJM-V10-LF）の差があります。</p>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-3 py-2 text-left font-medium whitespace-nowrap">型番</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">Aランク</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">Bランク</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">Cランク</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-V10-LF</td><td className="px-3 py-2">¥248,000</td><td className="px-3 py-2">¥215,000</td><td className="px-3 py-2">¥182,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-V10</td><td className="px-3 py-2">¥242,000</td><td className="px-3 py-2">¥210,000</td><td className="px-3 py-2">¥178,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-A9</td><td className="px-3 py-2">¥202,000</td><td className="px-3 py-2">¥175,000</td><td className="px-3 py-2">¥148,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">AlphaTheta DJM-V5</td><td className="px-3 py-2">¥172,000</td><td className="px-3 py-2">¥151,000</td><td className="px-3 py-2">¥129,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-S11</td><td className="px-3 py-2">¥150,000</td><td className="px-3 py-2">¥130,000</td><td className="px-3 py-2">¥110,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-900NXS2</td><td className="px-3 py-2">¥119,000</td><td className="px-3 py-2">¥99,000</td><td className="px-3 py-2">¥79,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-S7</td><td className="px-3 py-2">¥109,000</td><td className="px-3 py-2">¥95,000</td><td className="px-3 py-2">¥80,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-750MK2</td><td className="px-3 py-2">¥80,000</td><td className="px-3 py-2">¥68,000</td><td className="px-3 py-2">¥57,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-900NXS</td><td className="px-3 py-2">¥73,000</td><td className="px-3 py-2">¥61,000</td><td className="px-3 py-2">¥49,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-S9</td><td className="px-3 py-2">¥71,000</td><td className="px-3 py-2">¥59,000</td><td className="px-3 py-2">¥47,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-450</td><td className="px-3 py-2">¥48,000</td><td className="px-3 py-2">¥40,000</td><td className="px-3 py-2">¥34,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">Pioneer DJ DJM-250MK2</td><td className="px-3 py-2">¥25,000</td><td className="px-3 py-2">¥22,000</td><td className="px-3 py-2">¥18,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">ALLEN&amp;HEATH XONE:92A</td><td className="px-3 py-2">¥159,000</td><td className="px-3 py-2">¥136,000</td><td className="px-3 py-2">¥113,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">ALLEN&amp;HEATH XONE:96</td><td className="px-3 py-2">¥148,000</td><td className="px-3 py-2">¥126,000</td><td className="px-3 py-2">¥103,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">ALLEN&amp;HEATH XONE:92 mk2</td><td className="px-3 py-2">¥122,000</td><td className="px-3 py-2">¥105,000</td><td className="px-3 py-2">¥87,000</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">ALLEN&amp;HEATH XONE:43</td><td className="px-3 py-2">¥55,000</td><td className="px-3 py-2">¥47,000</td><td className="px-3 py-2">¥38,000</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">ALLEN&amp;HEATH XONE:23C</td><td className="px-3 py-2">¥33,000</td><td className="px-3 py-2">¥27,000</td><td className="px-3 py-2">¥22,000</td></tr>
              </tbody>
            </table>
          </div>
            <p className="text-xs text-warm-gray leading-relaxed">出典：島村楽器「買取価格検索」（<a href="https://www.shimamura.co.jp/used/search.html?cat=&amp;inst=&amp;brand=&amp;model=DJM&amp;num=100&amp;pg=1" target="_blank" rel="nofollow noopener" className="underline">DJM で検索</a>・<a href="https://www.shimamura.co.jp/used/search.html?cat=&amp;inst=&amp;brand=&amp;model=Xone&amp;num=100&amp;pg=1" target="_blank" rel="nofollow noopener" className="underline">Xone で検索</a>・2026年11月13日確認）。Aランク＝新品同様で傷や汚れがなく機能に問題がない、Bランク＝多少の傷や汚れがあるが機能に問題がない、Cランク＝使用感があり傷や汚れが目立つが機能に問題がない（島村楽器の定義）。掲示は島村楽器の査定の目安で、実際の買取額は付属品・動作確認で変わります。島村楽器の店頭買取は銀行振込のみで現金での支払いはなく、10万円以上は支払いまで1週間ほどかかります（店舗の買取案内ページ）。イシバシ楽器の掲示は今回確認していません。</p>
          </section>

          <h2 id="souba">買取相場の目安</h2>
          <p>ミキサーの買取相場は、ブランド・モデル・状態によって大きく変わります。あくまで目安として、小型アナログで数千〜2万円、中型〜デジタル卓は2万円以上が目安とされています。Pioneer DJ の DJM は、島村楽器の掲示で ¥4,000（DJM-250・Cランク）〜¥248,000（DJM-V10-LF・Aランク）です（上の表・2026年11月13日確認）。正確な査定額は楽器の状態や付属品、時期によって変動するため、無料査定で確認するのが確実です。</p>
          <p className="text-xs text-warm-gray">※相場は一般的な中古市場の目安であり、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>ミキサーを売る際、以下のポイントが査定額に影響します。売却前にチェックしておいてください。</p>
          <ul>
            <li>メーカー（YAMAHA・Allen&Heath・Pioneer DJ等）</li>
            <li>アナログ/デジタル・チャンネル数</li>
            <li>フェーダー・つまみ・端子の動作</li>
            <li>外装の状態・ラック耳の有無</li>
            <li>電源・付属品の有無</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>ミキサーの売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
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

          <h2 id="faq">ミキサー買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ミキサーの買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">小型アナログで数千〜2万円、中型〜デジタル卓やPioneer DJミキサーは2万〜十数万円以上が目安です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ガリ（接触不良）があっても売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">軽度なら買取可能ですが減額されます。状態を正確に伝えてください。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">DJミキサー（DJM等）は高いですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。Pioneer DJ DJMシリーズは中古需要が高く高評価です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">電源アダプタがないと売れませんか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">売却可能ですが、付属していると査定が有利です。</div>
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

        <RelatedArticles currentSlug="mixer-kaitori" relatedSlugs={["dj-kizai-kaitori", "audio-interface-kaitori", "microphone-kaitori", "souba-ichiran", "takaku-uru-kotsu"]} />
      </article>
    </>
  );
}

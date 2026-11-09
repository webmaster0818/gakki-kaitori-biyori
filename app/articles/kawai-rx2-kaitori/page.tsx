import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/kawai-rx2-kaitori/' },
  title: "カワイ RX-2（グランドピアノ）の買取価格｜掲示50万〜65万円と査定の条件【2026年11月】",
  description: "カワイのグランドピアノ RX-2（奥行き178cm）の買取価格は、ピアノワンの掲示で50万〜65万円、未来ピアノガーデンの実績で2006年製67万円（2026年11月6日確認）。古い個体の注意点と搬出、査定先の選び方も解説します。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">カワイ RX-2買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "カワイRX-2の買取相場は？", acceptedAnswer: { "@type": "Answer", text: "ピアノ買取店の掲示では50万〜65万円（ピアノワンの参考表）、買取実績では2006年製で67万円（未来ピアノガーデン）です（2026年11月6日確認）。いずれも店の掲示で、年式・状態・搬出条件で変わります。カワイ公式は、製造年数が古いピアノや壊れているピアノは査定額がつかず有料の廃棄になる可能性があると案内しています。" } },
      { "@type": "Question", name: "ヤマハC3とどちらが高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "ブランドによる需要の差はありますが、最終的な査定額は年式・状態に大きく左右されます。両方とも安定した需要があります。" } },
      { "@type": "Question", name: "搬出が不安ですが買取できますか？", acceptedAnswer: { "@type": "Answer", text: "可能です。掲載業者は専門運送で搬出します。設置階・経路・クレーン要否を伝えるとスムーズです。" } },
      { "@type": "Question", name: "古いRXでも値段がつきますか？", acceptedAnswer: { "@type": "Answer", text: "はい。状態次第で買取され、海外需要もあります。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社の査定料・キャンセル料は無料です。グランドピアノの搬出費用の扱いは申込時に確認してください。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "カワイ RX-2（グランドピアノ）の買取価格｜掲示50万〜65万円と査定の条件【2026年11月】", datePublished: "2026-06-05", dateModified: "2026-11-06", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "カワイ RX-2（グランドピアノ）の買取価格｜掲示50万〜65万円と査定の条件【2026年11月】", item: "https://gakkikaitori-biyori.com/articles/kawai-rx2-kaitori/" },
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

export default function KawaiRx2KaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8" style={{ ["--subhero" as string]: "url(/images/subhero/inst-grand-piano.webp)", ["--subhero-m" as string]: "url(/images/subhero/inst-grand-piano-m.webp)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">カワイ RX-2買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">カワイ RX-2（グランドピアノ）の買取価格｜掲示50万〜65万円と査定の条件【2026年11月】</h1>
          <p className="text-warm-gray text-sm leading-relaxed">KAWAI RX-2（カワイRX-2）を売りたい方へ。奥行き178cm前後のグランドピアノで、ヤマハC3と並ぶ家庭・教室向けの定番です。本記事では製造番号による年式判定、年代別の価値、外装・内部の状態や搬出環境が査定に与える影響を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年11月6日</p>
        </header>

        <section id="kakaku" className="bg-white border border-warm-border rounded-xl p-5 mb-8">
          <h2 className="font-bold text-lg mb-2">カワイ RX-2（グランドピアノ）の掲示買取価格</h2>
          <p className="text-sm text-warm-gray leading-relaxed mb-3">RX-2はカワイのグランドピアノの型番で、奥行きは178cmです（<a href="http://www2.kawai.co.jp/press/20071122.asp" target="_blank" rel="nofollow noopener" className="underline">カワイの発表資料</a>）。ピアノ買取店が公開している価格は次のとおりです（2026年11月6日確認）。</p>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-3 py-2 text-left font-medium whitespace-nowrap">店</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">モデル</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">掲示額</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">条件</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-3 py-2 font-medium"><a href="https://piano1.jp/brand/kawai/" target="_blank" rel="nofollow noopener" className="underline">ピアノワン</a>（買取価格参考表）</td><td className="px-3 py-2">RX-2</td><td className="px-3 py-2"><strong>¥500,000〜¥650,000</strong></td><td className="px-3 py-2">参考表は2026年7月7日更新。状態・搬出状況で上下</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium"><a href="https://miraipiano.co.jp/pianokaitori_brand/kawai/" target="_blank" rel="nofollow noopener" className="underline">未来ピアノガーデン</a>（買取実績）</td><td className="px-3 py-2">RX2・2006年製</td><td className="px-3 py-2"><strong>¥670,000</strong></td><td className="px-3 py-2">香川県東かがわ市の実績1件。同じ額で買い取るという意味ではありません</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray leading-relaxed">※各店の公開ページで2026年11月6日に確認。掲示額は買取を保証するものではありません。古い個体や不具合のある個体はこの額を下回ることがあり、<a href="https://www.kawai.jp/support_faq/%E3%83%94%E3%82%A2%E3%83%8E%E3%82%92%E8%B2%B7%E3%81%84%E5%8F%96%E3%81%A3%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84/" target="_blank" rel="nofollow noopener" className="underline">カワイ公式</a>は、製造年数が古いピアノや壊れているピアノは査定額がつかず有料の廃棄になる可能性があると案内しています。カワイの直営店では製造後の年数に応じた査定基準価格で買取を提案しています。</p>
          <p className="text-xs text-warm-gray leading-relaxed mt-2"><a href="https://www.shimamura.co.jp/used/gakki/acoustic-piano/" target="_blank" rel="nofollow noopener" className="underline">島村楽器</a>はグランドピアノの出張買取を全国で実施していますが（一部地域と離島は別料金）、買取価格検索にピアノの項目はなく、掲示額は確認できませんでした。</p>
          <p className="text-xs text-warm-gray leading-relaxed mt-2">同じ「RX-2」でも、エレキギターの SCHECTER RX-2-24-CTM は別の楽器です（<a href="https://www.shimamura.co.jp/used/search.html?cat=4&inst=&brand=&model=RX-2&num=20&pg=1" target="_blank" rel="nofollow noopener" className="underline">島村楽器の掲示</a>はA ¥229,000／B ¥177,000／C ¥106,000、2026年11月6日確認）。</p>
        </section>

        <div className="article-body">

          <h2 id="souba">買取相場の目安</h2>
          <p>カワイ RX-2の掲示額は冒頭の表のとおりです。実際の査定額は年式・状態・設置場所からの搬出条件で変わるため、製造番号を控えて複数の店に見積もりを取るのが確実です。</p>
          <p className="text-xs text-warm-gray">※掲示額は各店の参考値で、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>カワイ RX-2を売る際、以下のポイントが査定額に影響します。売却前にチェックしておいてください。</p>
          <ul>
            <li>製造番号・製造年式（新しいほど高評価）</li>
            <li>外装の傷・艶と内部（弦・ハンマー・アクション）のコンディション</li>
            <li>サビ・カビ・調律の状態</li>
            <li>設置環境・搬出経路（クレーン要否）</li>
            <li>椅子・付属品・保証書の有無</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>カワイ RX-2の売却には、以下の3サービスの活用がおすすめです。査定料・キャンセル料は無料です。グランドピアノの搬出費用の扱いは申込時に確認してください。</p>
          <ul>
            <li><strong>ヒカカク！</strong> … 最大20社へ一括で査定を依頼できます。専門業者を含めて査定額を比較できます。</li>
            <li><strong>ウリエル</strong> … 出張買取に対応しています。大型楽器やまとめ売りに適しており、出張費・査定料は無料です。</li>
            <li><strong>ティファナ</strong> … 店頭買取は東京都・埼玉県の店舗への持ち込みです。グランドピアノは持ち込めないので、出張の対象か申込前に確認してください。宅配買取は2026年11月9日時点で一時停止中です（公式のお知らせ）。</li>
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

          <h2 id="faq">カワイ RX-2買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">カワイRX-2の買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">ピアノ買取店の掲示では50万〜65万円（ピアノワンの参考表）、買取実績では2006年製で67万円（未来ピアノガーデン）です（2026年11月6日確認）。いずれも店の掲示で、年式・状態・搬出条件で変わります。カワイ公式は、製造年数が古いピアノや壊れているピアノは査定額がつかず有料の廃棄になる可能性があると案内しています。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ヤマハC3とどちらが高く売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">ブランドによる需要の差はありますが、最終的な査定額は年式・状態に大きく左右されます。両方とも安定した需要があります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">搬出が不安ですが買取できますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">可能です。掲載業者は専門運送で搬出します。設置階・経路・クレーン要否を伝えるとスムーズです。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">古いRXでも値段がつきますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。状態次第で買取され、海外需要もあります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">費用はかかりますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">掲載3社の査定料・キャンセル料は無料です。グランドピアノの搬出費用の扱いは申込時に確認してください。</div>
            </details>
          </div>
        </div>

        <RelatedArticles currentSlug="kawai-rx2-kaitori" relatedSlugs={["kawai-piano-kaitori", "grand-piano-kaitori", "kawai-k300-kaitori", "piano-kaitori", "yamaha-c3-kaitori", "takaku-uru-kotsu", "souba-ichiran"]} />
      </article>
    </>
  );
}

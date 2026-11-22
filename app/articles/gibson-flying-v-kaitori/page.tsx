import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gibson-flying-v-kaitori/' },
  title: "Gibson Flying V（ギブソン フライングV）の買取価格｜買取実績3万〜11万円・Custom Shop 15万〜20.5万円【2026年】",
  description: "Gibson Flying V（フライングV）の買取価格を、公開されている買取実績で整理。Custom Shop以外は一般中古で3万〜11万円、Custom Shopは15万〜20.5万円（高く売れるドットコム 2024〜2026年の実績・2026年11月22日確認）。年式・仕様と査定のポイントも解説。",
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">ギブソン フライングV買取</span></li>
      </ol>
    </nav>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "フライングVの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "高く売れるドットコムが公開している2024〜2026年の買取実績では、Gibson製のFlying V（Custom Shop以外・1975〜2019年製・一般中古〜美品）が30,000〜110,000円、Custom Shop（59 Flying V・Jimi Hendrix Love Drops）が150,000〜205,000円でした（2026年11月22日確認）。1958〜59年のオリジナルなど初期のヴィンテージは公開の買取実績が見当たらず、個別査定です。" } },
      { "@type": "Question", name: "メタル系の改造（ピックアップ交換等）でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "売却可能です。ただしオリジナルパーツが残っているほど評価は上がります。外したパーツも一緒に査定へ。" } },
      { "@type": "Question", name: "専用ケースは査定に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい。V字シェイプは汎用ケースに収まりにくいため、純正の専用ケースが付属すると評価が上がります。" } },
      { "@type": "Question", name: "エッジの打痕が多くても買取できますか？", acceptedAnswer: { "@type": "Answer", text: "可能です。V字のエッジは打痕が出やすい箇所で、軽度なら大きな減額にはなりにくいですが、割れは減額要因です。" } },
      { "@type": "Question", name: "費用はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "掲載3社は査定・出張・送料・キャンセルすべて無料です。" } }
  ] };
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "Gibson Flying V（ギブソン フライングV）の買取価格｜買取実績3万〜11万円・Custom Shop 15万〜20.5万円【2026年】", datePublished: "2026-06-05", dateModified: "2026-11-22", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "Gibson Flying V（ギブソン フライングV）の買取価格｜買取実績3万〜11万円・Custom Shop 15万〜20.5万円【2026年】", item: "https://gakkikaitori-biyori.com/articles/gibson-flying-v-kaitori/" },
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

export default function GibsonFlyingVKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8" style={{ ["--subhero" as string]: "url(/images/subhero/inst-eguitar-solid.webp)", ["--subhero-m" as string]: "url(/images/subhero/inst-eguitar-solid-m.webp)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ギブソン フライングV買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">Gibson Flying V（ギブソン フライングV）の買取価格｜買取実績3万〜11万円・Custom Shop 15万〜20.5万円【2026年】</h1>
          <p className="text-warm-gray text-sm leading-relaxed">Gibson Flying V（フライングV）を売りたい方へ。1958年に登場した先鋭的なV字シェイプで、ハードロック／メタルで定番の人気機種です。本記事では年代・仕様別の価値、希少な初期個体の評価、現行・Custom Shopの相場、状態が査定に与える影響を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年11月22日</p>
        </header>

        <section id="kakaku" className="bg-white border border-warm-border rounded-xl p-5 mb-8">
          <h2 className="font-bold text-lg mb-2">Gibson Flying V（フライングV）の買取価格（公開の買取実績・2026年11月22日確認）</h2>
          <p className="text-sm leading-relaxed mb-3"><strong>Gibson製（Custom Shop以外）のFlying Vは、一般中古〜美品で 30,000〜110,000円、Custom Shop は 150,000〜205,000円</strong> で買い取られています（高く売れるドットコムが公開している2024〜2026年の買取実績から、Gibson 製の Flying V を抜き出したもの）。Custom Shop 以外でも、限定品（Limited Edition・Hall of Fame）は10万円前後、パーツ交換・カスタム品は3〜4万円台と差があります。</p>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-3 py-2 text-left font-medium whitespace-nowrap">買取日</th><th className="px-3 py-2 text-left font-medium">モデル（公開の品名から）</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">状態</th><th className="px-3 py-2 text-right font-medium whitespace-nowrap">買取価格</th></tr></thead>
              <tbody className="divide-y divide-warm-border"><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2026/04/27</td><td className="px-3 py-2">Flying V Limited Edition（1997年製）</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥110,000</td></tr><tr className="bg-cream/50"><td className="px-3 py-2 whitespace-nowrap">2026/02/26</td><td className="px-3 py-2">Hall of Fame Flying V（1991年製・139/400）</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥98,000</td></tr><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2026/01/06</td><td className="px-3 py-2">Flying V Gothic（2001年製）・ハードケース付き</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥46,000</td></tr><tr className="bg-cream/50"><td className="px-3 py-2 whitespace-nowrap">2025/12/30</td><td className="px-3 py-2">Flying V（1984年頃・パーツ等カスタム品）</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥38,000</td></tr><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2025/12/28</td><td className="px-3 py-2">Flying V（2005年製・テールピース交換有）</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥30,000</td></tr><tr className="bg-cream/50"><td className="px-3 py-2 whitespace-nowrap">2025/12/21</td><td className="px-3 py-2">Flying V（2000年製）・ハードケース付き</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥70,000</td></tr><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2025/01/29</td><td className="px-3 py-2">Flying V FV67（1993年製）</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥45,000</td></tr><tr className="bg-cream/50"><td className="px-3 py-2 whitespace-nowrap">2024/03/22</td><td className="px-3 py-2">Flying V B-2 Satin Ebony（2019年製）</td><td className="px-3 py-2 whitespace-nowrap">程度良好(B)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥60,000</td></tr><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2024/03/07</td><td className="px-3 py-2">Flying V（1975年製）</td><td className="px-3 py-2 whitespace-nowrap">一般中古(C)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥70,000</td></tr><tr className="bg-cream/50"><td className="px-3 py-2 whitespace-nowrap">2024/02/13</td><td className="px-3 py-2">Flying V B-2</td><td className="px-3 py-2 whitespace-nowrap">美品(A)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥57,000</td></tr></tbody>
            </table>
          </div>
          <h3 className="font-bold text-base mb-2">Custom Shop の買取実績</h3>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-3 py-2 text-left font-medium whitespace-nowrap">買取日</th><th className="px-3 py-2 text-left font-medium">モデル（公開の品名から）</th><th className="px-3 py-2 text-left font-medium whitespace-nowrap">状態</th><th className="px-3 py-2 text-right font-medium whitespace-nowrap">買取価格</th></tr></thead>
              <tbody className="divide-y divide-warm-border"><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2025/06/05</td><td className="px-3 py-2">Custom Shop 59 Flying V Mahogany</td><td className="px-3 py-2 whitespace-nowrap">程度良好(B)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥205,000</td></tr><tr className="bg-cream/50"><td className="px-3 py-2 whitespace-nowrap">2024/11/06</td><td className="px-3 py-2">Custom Jimi Hendrix Love Drops Flying V・純正ハードケース付き</td><td className="px-3 py-2 whitespace-nowrap">美品(A)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥150,000</td></tr><tr className="bg-white"><td className="px-3 py-2 whitespace-nowrap">2024/10/25</td><td className="px-3 py-2">Custom Jimi Hendrix Love Drops Flying V・ハードケース付き</td><td className="px-3 py-2 whitespace-nowrap">美品(A)</td><td className="px-3 py-2 text-right font-bold whitespace-nowrap">¥160,000</td></tr></tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray leading-relaxed">出典: <a href="https://www.takakuureru.com/keyword/%E3%82%AE%E3%83%96%E3%82%BD%E3%83%B3/" target="_blank" rel="nofollow noopener" className="underline">高く売れるドットコム「ギブソン」の買取実績一覧</a>（2026年11月22日に一覧の全ページを確認し、Gibson 製の Flying V の行を転記。ジャンク扱いの2件〔2006年製 67 EB ¥78,000・2000年製 ¥70,000〕と Epiphone 製は除外）。買取実績はその店がその日に買い取った金額で、同じモデルの買取額を保証するものではありません。1958〜59年のオリジナルなど初期のヴィンテージは、公開の買取実績が見当たりませんでした。</p>
        </section>

        <div className="article-body">

          <h2 id="souba">買取相場の目安</h2>
          <p>ギブソン フライングVの買取価格は、年式・仕様・状態によって大きく変わります。上の公開実績では、Custom Shop以外の一般中古が 30,000〜110,000円、Custom Shop が 150,000〜205,000円でした。1975年製でも一般中古で 70,000円の例があり、年代が古いだけで高くなるとは限りません。正確な査定額は楽器の状態や付属品、時期によって変動するため、複数の店の無料査定で確認するのが確実です。</p>
          <p className="text-xs text-warm-gray">※相場は一般的な中古市場の目安であり、実際の買取額を保証するものではありません。</p>

          <h2 id="points">査定額を左右するポイント</h2>
          <p>ギブソン フライングVを売る際、以下のポイントが査定額に影響します。売却前にチェックしておいてください。</p>
          <ul>
            <li>製造年（1958〜59年のオリジナルは極めて希少で高額、67年以降の再生産も評価高）</li>
            <li>仕様（コリーナ材の初期、マホガニーの後期など）</li>
            <li>オリジナルパーツ・ハードウェアの保持、リフィニッシュの有無</li>
            <li>V字特有のエッジの打痕・割れ、ネックの状態</li>
            <li>純正ケース（V字専用ケース）・保証書の有無</li>
          </ul>

          <CtaBox />

          <h2 id="osusume">おすすめ買取サービス3社</h2>
          <p>ギブソン フライングVの売却には、以下の3サービスの活用がおすすめです。いずれも査定料・送料・キャンセル料が無料です。</p>
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

          <h2 id="faq">ギブソン フライングV買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">フライングVの買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">高く売れるドットコムが公開している2024〜2026年の買取実績では、Gibson製のFlying V（Custom Shop以外・1975〜2019年製・一般中古〜美品）が30,000〜110,000円、Custom Shop（59 Flying V・Jimi Hendrix Love Drops）が150,000〜205,000円でした（2026年11月22日確認）。1958〜59年のオリジナルなど初期のヴィンテージは公開の買取実績が見当たらず、個別査定です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">メタル系の改造（ピックアップ交換等）でも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">売却可能です。ただしオリジナルパーツが残っているほど評価は上がります。外したパーツも一緒に査定へ。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">専用ケースは査定に影響しますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい。V字シェイプは汎用ケースに収まりにくいため、純正の専用ケースが付属すると評価が上がります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">エッジの打痕が多くても買取できますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">可能です。V字のエッジは打痕が出やすい箇所で、軽度なら大きな減額にはなりにくいですが、割れは減額要因です。</div>
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

        <RelatedArticles currentSlug="gibson-flying-v-kaitori" relatedSlugs={["gibson-lespaul-standard-kaitori", "gibson-kaitori", "guitar-kaitori", "takaku-uru-kotsu", "souba-ichiran"]} />
      </article>
    </>
  );
}

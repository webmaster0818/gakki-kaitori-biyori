import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】ギター買取おすすめ3社比較｜相場・高く売るコツ",
  description:
    "ギター買取のおすすめ業者3社を徹底比較。エレキギター・アコースティックギターの買取相場、Gibson・Fender・YAMAHAなどブランド別の相場目安、高く売るコツまで解説。無料査定で最高値がわかります。",
  openGraph: {
    title: "【2026年最新】ギター買取おすすめ3社比較｜相場・高く売るコツ",
    description: "ギター買取のおすすめ業者3社を徹底比較。エレキ・アコギの買取相場からブランド別相場、高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ギター買取おすすめ", href: "/articles/guitar-kaitori/" },
  ];
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center">
            {i > 0 && <span className="breadcrumb-sep" />}
            {i === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのギターの買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">
          一括査定で最高値を調べる
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">
          出張買取を申し込む
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">
          近くの店舗を探す
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "ギターの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "ギターの買取相場はブランド・モデル・状態により大きく異なります。エレキギターではGibson Les Paul Standardが10万〜30万円、Fender Stratocasterが5万〜20万円が目安です。アコースティックギターではMartin D-28が10万〜25万円、Gibson J-45が8万〜20万円程度です。" } },
      { "@type": "Question", name: "壊れたギターでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、多くの買取業者は壊れたギターでも査定可能です。特にGibsonやFenderなどの有名ブランドは、修理可能な状態であれば値段がつくことがあります。ネック折れやボディ割れがあっても、まずは査定に出してみることをおすすめします。" } },
      { "@type": "Question", name: "ギターを高く売るコツはありますか？", acceptedAnswer: { "@type": "Answer", text: "ギターを高く売るには、(1)複数業者に査定依頼する、(2)純正ケース・保証書など付属品を揃える、(3)弦を張り替えボディをクリーニングする、(4)需要が高い時期（新学期前の2〜3月）に売る、(5)改造パーツを元に戻す、の5つがポイントです。" } },
      { "@type": "Question", name: "ギターの出張買取と宅配買取、どちらがおすすめ？", acceptedAnswer: { "@type": "Answer", text: "高額ギター（10万円以上が期待できるもの）は対面で交渉できる出張買取がおすすめです。一般的なギターは手軽な宅配買取でも問題ありません。複数本まとめて売る場合は出張買取が便利です。" } },
      { "@type": "Question", name: "ギター買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ギター買取おすすめ3社比較｜相場・高く売るコツ",
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
    author: { "@type": "Organization", name: "楽器買取びより" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
    </>
  );
}

export default function GuitarKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Title */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ギター買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】ギター買取おすすめ3社比較｜相場・高く売るコツを徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            ギターを売りたいけど、どの買取業者を選べばいいかわからない方へ。本記事では、ギター買取の人気3サービスを徹底比較し、エレキギター・アコースティックギターの買取相場、ブランド別の相場目安、そして少しでも高く売るためのコツを詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月13日</p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#market-price" className="hover:underline">ギター買取相場（エレキ・アコギ別）</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#tips" className="hover:underline">ギターを高く売る5つのコツ</a></li>
            <li><a href="#brand-price" className="hover:underline">ブランド別買取相場</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          {/* Section 1: 買取相場 */}
          <h2 id="market-price">ギター買取相場（エレキギター・アコースティックギター別）</h2>

          <p>ギターの買取価格は、メーカー・モデル・年式・状態によって大きく変わります。ここでは、2026年現在の一般的な買取相場をエレキギターとアコースティックギターに分けてご紹介します。</p>

          <h3>エレキギターの買取相場</h3>

          <p>エレキギターは、ブランドとモデルによって買取価格に大きな差があります。特にGibsonとFenderの2大ブランドは中古市場でも人気が高く、状態が良ければ高額買取が期待できます。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Gibson Les Paul Standard</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜30万円</td><td className="px-4 py-3 text-warm-gray">年式により大幅変動。ヴィンテージは100万円超も</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Gibson SG Standard</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">軽量で人気。状態良好なら高額</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Fender Stratocaster (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜20万円</td><td className="px-4 py-3 text-warm-gray">Custom Shopモデルは30万円以上</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Fender Telecaster (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td><td className="px-4 py-3 text-warm-gray">シンプルで根強い人気</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">PRS Custom 24</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜25万円</td><td className="px-4 py-3 text-warm-gray">美しいトップ材は高評価</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Ibanez RGシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜8万円</td><td className="px-4 py-3 text-warm-gray">Prestigeラインは高額</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA Pacifica</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td><td className="px-4 py-3 text-warm-gray">初心者モデルは低め</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Epiphone各種</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜3万円</td><td className="px-4 py-3 text-warm-gray">Gibson傘下ブランド</td></tr>
              </tbody>
            </table>
          </div>

          <p>上記はあくまで目安であり、実際の買取価格は楽器の状態やその時の市場需要によって変動します。<strong>正確な買取価格を知るには、複数の業者に査定を依頼することが重要です。</strong></p>

          <h3>アコースティックギターの買取相場</h3>

          <p>アコースティックギターは、トップ材の種類（単板か合板か）、ブランド、そして何よりも「鳴り」の良さが買取価格を左右します。MartinやGibsonのアコースティックギターは特に人気が高く、ヴィンテージ品は驚くほどの高額になることもあります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Martin D-28</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">アコギの定番中の定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Martin D-45</td><td className="px-4 py-3 text-gold-dark font-bold">25万〜60万円</td><td className="px-4 py-3 text-warm-gray">Martinの最高峰モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Gibson J-45</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">ストローク向き名機</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Gibson Hummingbird</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">ピックガードのデザインが特徴</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Taylor 314ce</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">エレアコとしても人気</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA FG/FSシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜3万円</td><td className="px-4 py-3 text-warm-gray">LL系は5万円前後も</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Morris各種</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜5万円</td><td className="px-4 py-3 text-warm-gray">国産ブランド。Sシリーズは高め</td></tr>
              </tbody>
            </table>
          </div>

          <p>アコースティックギターは保管環境も査定に影響します。直射日光や高温多湿を避け、適切な湿度（45〜55%）で保管されていたギターは、ネックの反りやボディの変形が少なく、高額査定につながります。</p>

          <CtaBox />

          {/* Section 2: 3社比較 */}
          <h2 id="comparison">ギター買取おすすめ3社を徹底比較</h2>

          <p>ギターの買取業者は数多くありますが、ここでは特におすすめの3社を、買取方法・対応楽器・スピード・特徴の面から比較します。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">ヒカカク！</th>
                  <th className="px-4 py-3 text-left font-medium">ティファナ</th>
                  <th className="px-4 py-3 text-left font-medium">ウリエル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定（複数業者）</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取専門</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">対応地域</td><td className="px-4 py-3">全国</td><td className="px-4 py-3">全国</td><td className="px-4 py-3">全国主要都市</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定スピード</td><td className="px-4 py-3">最短即日（複数社）</td><td className="px-4 py-3">最短即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ギター対応</td><td className="px-4 py-3">エレキ/アコギ/ベース</td><td className="px-4 py-3">エレキ/アコギ/ベース</td><td className="px-4 py-3">エレキ/アコギ/ベース</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">運搬が面倒な人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定で最高値が見つかる</h3>

          <p>ヒカカク！は、複数の買取業者に一括で査定依頼できるサービスです。ギター1本の情報を入力するだけで、複数の専門業者から査定額が届きます。業者間の競争が生まれるため、<strong>1社だけに査定を出すよりも高い買取価格になりやすい</strong>のが最大のメリットです。</p>

          <p>特に、Gibson・Fender・PRSなどの高額ギターを売る際は、業者によって査定額に数万円の差がつくことも珍しくありません。まずはヒカカク！で相場を把握してから、他の方法を検討するのが賢い売り方です。</p>

          <h3>ティファナ ── 3つの方法から選べる総合買取</h3>

          <p>ティファナは、出張買取・店頭買取・宅配買取の3つの方法に対応した総合買取サービスです。年間4万件の買取実績があり、楽器に限らず幅広いジャンルに対応しています。</p>

          <p>ギター買取では、状態が悪いものや古いモデルでも査定してくれるのがポイントです。「売れるかどうかわからない」というギターがある場合は、まずティファナに相談してみることをおすすめします。店舗が近くにあれば、その場で現金化できる店頭買取も便利です。</p>

          <h3>ウリエル ── 出張買取で自宅から一歩も出ずに売却</h3>

          <p>ウリエルは出張買取を専門とするサービスで、自宅にいながらギターの査定から買取まで完結します。エレキギター1本はもちろん、アンプやエフェクターなど複数の機材をまとめて売りたい場合にも便利です。</p>

          <p>査定士が自宅に来てくれるため、<strong>大型のアコースティックギターや複数本のギターを梱包・発送する手間が省けます</strong>。買取が成立すればその場で現金支払いも可能です。「引っ越し前に機材を一気に処分したい」というケースにも最適です。</p>

          <CtaBox />

          {/* Section 3: 高く売るコツ */}
          <h2 id="tips">ギターを高く売るための5つのコツ</h2>

          <p>同じギターでも、売り方次第で買取価格が大きく変わります。ここでは、ギターを少しでも高く売るための5つの実践的なコツをご紹介します。</p>

          <h3>コツ1: 複数の業者に査定を依頼する（相見積もり）</h3>

          <p>これが最も重要なポイントです。買取業者によって得意なブランドや在庫状況が異なるため、同じギターでも査定額に数万円の差が出ることがあります。</p>

          <p>ヒカカク！を使えば、一度の入力で複数業者に査定依頼できるので、手間をかけずに最高値を見つけられます。最低でも3社以上の査定を比較することをおすすめします。</p>

          <h3>コツ2: 付属品をすべて揃える</h3>

          <p>ギターの買取価格は、付属品の有無で大きく変わります。以下の付属品は、あれば必ず一緒に査定に出しましょう。</p>

          <ul>
            <li><strong>純正ハードケース/ギグバッグ</strong>: これだけで数千円〜1万円のプラスになることも</li>
            <li><strong>保証書・購入証明書</strong>: 正規品の証明になり、信頼性が上がる</li>
            <li><strong>取扱説明書</strong>: なくても大きな減額にはなりませんが、あればベター</li>
            <li><strong>純正のトレモロアーム・レンチ類</strong>: 細かい付属品も忘れずに</li>
            <li><strong>元の弦（交換済みの場合）</strong>: ヴィンテージギターの場合は元の弦も価値あり</li>
          </ul>

          <h3>コツ3: クリーニングして見た目を整える</h3>

          <p>査定士も人間です。第一印象がきれいなギターは、それだけで好印象を持たれます。査定前に以下のクリーニングを行いましょう。</p>

          <ul>
            <li><strong>ボディ</strong>: 専用のポリッシュで拭き上げる（ラッカー塗装のギターは対応製品を使用）</li>
            <li><strong>フレットボード</strong>: レモンオイルで保湿・クリーニング</li>
            <li><strong>弦</strong>: 錆びた弦は張り替える（新品の弦だと「大切にされている」印象に）</li>
            <li><strong>金属パーツ</strong>: ペグ、ブリッジ、ピックアップカバーなどを磨く</li>
            <li><strong>ケースの中</strong>: ケース内部のホコリやゴミも除去</li>
          </ul>

          <h3>コツ4: 売却のタイミングを見極める</h3>

          <p>ギターの需要は時期によって変動します。以下のタイミングは買取価格が上がりやすい傾向があります。</p>

          <ul>
            <li><strong>2〜3月（新学期前）</strong>: 新入生が楽器を始める時期で需要増</li>
            <li><strong>ボーナス時期（6〜7月、12月）</strong>: 中古ギターの購入者が増える</li>
            <li><strong>新モデル発売直前</strong>: 旧モデルの中古需要が一時的に上がることも</li>
          </ul>

          <p>逆に、年末年始やお盆は買取業者の繁忙期で対応が遅れることがあるため、避けた方が無難です。</p>

          <h3>コツ5: 改造パーツは純正に戻す</h3>

          <p>ピックアップやペグ、ブリッジなどを交換している場合、<strong>可能であれば純正パーツに戻してから査定に出す</strong>のがベストです。改造ギターは「個人の好み」が反映されているため、中古市場では敬遠されがちです。</p>

          <p>ただし、純正パーツを処分してしまった場合は、改造パーツのままでも問題ありません。その場合は、使用している改造パーツのブランド名や型番を伝えると、査定額に反映してもらえることがあります（高品質なパーツの場合）。</p>

          <CtaBox />

          {/* Section 4: ブランド別相場 */}
          <h2 id="brand-price">主要ブランド別 ギター買取相場ガイド</h2>

          <p>ここでは、特に人気の高い4つのギターブランドについて、モデルごとの買取相場をより詳しく解説します。</p>

          <h3>Gibson（ギブソン）の買取相場</h3>

          <p>Gibsonは世界で最も有名なギターブランドの一つです。特にLes Paul、SG、ES-335などの定番モデルは中古市場でも非常に人気が高く、安定した買取価格がつきます。</p>

          <ul>
            <li><strong>Les Paul Standard（2015年以降）</strong>: 10万〜25万円</li>
            <li><strong>Les Paul Custom</strong>: 12万〜30万円</li>
            <li><strong>SG Standard</strong>: 5万〜15万円</li>
            <li><strong>ES-335</strong>: 10万〜25万円</li>
            <li><strong>Flying V / Explorer</strong>: 5万〜15万円</li>
            <li><strong>1950〜1960年代ヴィンテージ</strong>: 50万〜数百万円（状態による）</li>
          </ul>

          <p>Gibsonギターを売る際のポイントは、<strong>シリアルナンバーの確認</strong>です。製造年や工場の特定ができるため、査定額に直結します。</p>

          <h3>Fender（フェンダー）の買取相場</h3>

          <p>Fenderはストラトキャスターとテレキャスターで知られるアメリカの老舗ブランドです。特にUSA製（American Professionalシリーズなど）は安定した人気を誇ります。</p>

          <ul>
            <li><strong>American Professional II Stratocaster</strong>: 7万〜14万円</li>
            <li><strong>American Professional II Telecaster</strong>: 7万〜14万円</li>
            <li><strong>American Ultra Stratocaster</strong>: 8万〜16万円</li>
            <li><strong>Player Stratocaster（メキシコ製）</strong>: 3万〜6万円</li>
            <li><strong>Custom Shop製品</strong>: 15万〜50万円以上</li>
            <li><strong>Japan製（旧Fender Japan）</strong>: 2万〜8万円</li>
          </ul>

          <p>Fenderギターは、USA製・メキシコ製・日本製でランクが明確に分かれるため、製造国を確認してから査定に出しましょう。ヘッドのロゴやシリアルナンバーで判別できます。</p>

          <h3>YAMAHA（ヤマハ）の買取相場</h3>

          <p>YAMAHAは日本を代表する楽器メーカーで、アコースティックギターからエレキギターまで幅広いラインナップがあります。エントリーモデルは買取価格が低めですが、上位モデルは安定した需要があります。</p>

          <ul>
            <li><strong>Lシリーズ（L6/L16/L26等）</strong>: 2万〜10万円</li>
            <li><strong>LLシリーズ</strong>: 3万〜12万円</li>
            <li><strong>FGシリーズ</strong>: 3,000〜2万円</li>
            <li><strong>APXシリーズ（エレアコ）</strong>: 1万〜5万円</li>
            <li><strong>Pacificaシリーズ（エレキ）</strong>: 5,000〜3万円</li>
            <li><strong>SG/SAシリーズ（エレキ）</strong>: 1万〜5万円</li>
            <li><strong>REVSTARシリーズ</strong>: 2万〜6万円</li>
          </ul>

          <p>YAMAHAギターは信頼性が高く、特にアコースティックギターのLシリーズは海外でも評価が高いため、状態が良ければ思った以上の金額がつくことがあります。</p>

          <h3>PRS（ポール・リード・スミス）の買取相場</h3>

          <p>PRSは美しいルックスと高い演奏性で人気のアメリカンブランドです。特にCore（USAメイド）ラインは高額買取が期待できます。</p>

          <ul>
            <li><strong>Custom 24 (Core)</strong>: 10万〜25万円</li>
            <li><strong>Custom 22 (Core)</strong>: 8万〜20万円</li>
            <li><strong>McCarty 594</strong>: 10万〜22万円</li>
            <li><strong>Silver Sky</strong>: 8万〜15万円</li>
            <li><strong>SE Custom 24</strong>: 2万〜5万円</li>
            <li><strong>S2シリーズ</strong>: 5万〜12万円</li>
            <li><strong>Private Stock</strong>: 30万〜100万円以上</li>
          </ul>

          <p>PRSギターはトップ材の杢目（フレイムメイプルやキルテッドメイプル）の美しさも査定に影響します。10トップなどの美しい杢目は、通常モデルより高く評価されます。</p>

          <CtaBox />

          {/* Section 5: FAQ */}
          <h2 id="faq">ギター買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ギターの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ギターの買取相場はブランド・モデル・状態により大きく異なります。エレキギターではGibson Les Paul Standardが10万〜30万円、Fender Stratocasterが5万〜20万円が目安です。アコースティックギターではMartin D-28が10万〜25万円、Gibson J-45が8万〜20万円程度です。正確な買取価格は複数業者に査定依頼して比較しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れたギターでも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、多くの買取業者は壊れたギターでも査定可能です。特にGibsonやFenderなどの有名ブランドは、修理可能な状態であれば値段がつくことがあります。ネック折れやボディ割れがあっても、パーツ取りとしての価値がある場合もあるため、まずは査定に出してみることをおすすめします。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ギターを高く売るコツはありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ギターを高く売るには、(1)複数業者に査定依頼する（ヒカカク！で一括査定がおすすめ）、(2)純正ケース・保証書など付属品を揃える、(3)弦を張り替えボディをクリーニングする、(4)需要が高い時期（新学期前の2〜3月）に売る、(5)改造パーツを元に戻す、の5つがポイントです。特に相見積もりは数万円の差が出ることもあるため必須です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ギターの出張買取と宅配買取、どちらがおすすめ？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                高額ギター（10万円以上が期待できるもの）は、対面で交渉できる出張買取がおすすめです。査定士と直接話しながら、付属品やギターの状態をアピールできます。一般的なギターは手軽な宅配買取でも問題ありません。複数本まとめて売る場合や、大型のアコースティックギターの場合は出張買取（ウリエル）が便利です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ギター買取にかかる費用はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。完全無料で利用できるので、気軽に査定を申し込んでみてください。
              </div>
            </details>
          </div>

          {/* まとめ */}
          <h2>まとめ：ギター買取は相見積もりが鉄則</h2>

          <p>ギターの買取価格は、同じモデルでも業者によって数万円の差が出ることがあります。大切なギターを適正価格で売却するためには、<strong>必ず複数の業者に査定を依頼し、比較検討すること</strong>が最も重要です。</p>

          <p>今回紹介した3社の使い分けをまとめると以下のようになります。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで店頭/宅配買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>まずはヒカカク！で相場を把握し、その後で最適な売却方法を選ぶのが、後悔しないギター売却のコツです。査定は完全無料なので、ぜひ気軽に試してみてください。</p>

          <CtaBox />
        </div>

        {/* Related Articles */}
        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ピアノ買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">売却ガイド</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

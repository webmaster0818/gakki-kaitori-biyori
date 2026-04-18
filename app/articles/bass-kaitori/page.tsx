import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】ベース買取おすすめ3社比較｜相場・高く売るコツ",
  description:
    "ベース買取のおすすめ業者3社を徹底比較。エレキベース・アコースティックベース・アップライトベースの買取相場、Fender・Gibson・Musicman・Rickenbacker・YAMAHAなどブランド別の相場目安、高く売るコツまで解説。",
  openGraph: {
    title: "【2026年最新】ベース買取おすすめ3社比較｜相場・高く売るコツ",
    description: "ベース買取のおすすめ業者3社を徹底比較。エレキベース・アコースティックベースの買取相場からブランド別相場、高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ベース買取おすすめ", href: "/articles/bass-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのベースの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "ベースの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "ベースの買取相場はブランド・モデル・状態により異なります。Fender Jazz Bass（USA）で5万〜18万円、Gibson Thunderbirdで5万〜15万円、Musicman StingRayで5万〜15万円が目安です。エントリーモデルは5,000〜3万円程度です。" } },
      { "@type": "Question", name: "壊れたベースでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、多くの買取業者は壊れたベースでも査定可能です。特にFenderやGibsonなどの有名ブランドは、修理可能な状態であれば値段がつくことがあります。ネック折れやジャック不良があっても、まずは査定に出してみましょう。" } },
      { "@type": "Question", name: "ベースとギターではどちらが買取相場が高いですか？", acceptedAnswer: { "@type": "Answer", text: "一般的に、同ブランド・同グレードで比較するとギターの方が中古市場の需要が大きく、買取相場もやや高い傾向があります。ただし、Musicman StingRayやRickenbacker 4003など人気モデルはベースでも高額買取が期待できます。" } },
      { "@type": "Question", name: "ベースのアンプやエフェクターも一緒に売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ほとんどの買取業者はベース本体だけでなくアンプやエフェクターも買取対象です。まとめて売ると買取額がアップするキャンペーンを行っている業者もあります。特に出張買取なら重い機材もまとめて売却できて便利です。" } },
      { "@type": "Question", name: "ベース買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ベース買取おすすめ3社比較｜相場・高く売るコツ",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
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

export default function BassKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Title */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ベース買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】ベース買取おすすめ3社比較｜相場・高く売るコツを徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            エレキベースやアコースティックベースを売りたいけど、どの買取業者を選べばいいかわからない方へ。本記事では、ベース買取の人気3サービスを徹底比較し、エレキベース・アコースティックベース・アップライトベースの買取相場、ブランド別の相場目安、そして少しでも高く売るためのコツを詳しく解説します。ベースはギターと比べて中古市場の流通量が少ないため、業者選びが買取価格を大きく左右します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#market-price" className="hover:underline">ベース買取相場（種類別）</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#brand-price" className="hover:underline">ブランド別買取相場</a></li>
            <li><a href="#flow" className="hover:underline">ベース買取の流れ</a></li>
            <li><a href="#tips" className="hover:underline">ベースを高く売る3つのコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          {/* Section 1: 買取相場 */}
          <h2 id="market-price">ベース買取相場（エレキベース・アコースティックベース・アップライトベース別）</h2>

          <p>ベースの買取価格は、種類・メーカー・モデル・年式・状態によって大きく異なります。ベースはギターと比較すると中古市場での流通量がやや少ないため、人気モデルは安定した需要があり、状態が良ければ高額買取が期待できます。ここでは、2026年現在の一般的な買取相場を種類別にご紹介します。</p>

          <h3>エレキベースの買取相場</h3>

          <p>エレキベースは、ベース買取市場で最も取引量が多いカテゴリです。Fender Jazz BassやPrecision Bassは定番中の定番で、USA製であれば安定した買取価格がつきます。近年はアクティブベースの人気も高まっており、Musicman StingRayやWarwickなどのモデルも高額買取の対象です。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Fender Jazz Bass (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td><td className="px-4 py-3 text-warm-gray">最も人気の高いベース。年式で変動</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Fender Precision Bass (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜16万円</td><td className="px-4 py-3 text-warm-gray">ロック系で根強い需要</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Musicman StingRay</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">アクティブベースの代名詞</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Gibson Thunderbird</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">独特のルックスで人気</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Gibson SG Bass</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜12万円</td><td className="px-4 py-3 text-warm-gray">ショートスケールモデルもあり</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Rickenbacker 4003</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">独特のトーンで根強いファン</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Warwick Thumb/Streamer</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td><td className="px-4 py-3 text-warm-gray">ドイツ製は高額。Rockbassは低め</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA BBシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">コスパ良好。BB734Aなど上位は高め</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Fender Player系（メキシコ製）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">エントリー〜中級向け</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Squier各種</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜1.5万円</td><td className="px-4 py-3 text-warm-gray">Fender廉価ブランド</td></tr>
              </tbody>
            </table>
          </div>

          <p>エレキベースの買取では、<strong>ネックの状態（反り・ねじれ）が特に重視されます</strong>。ベースはギターよりネックが長いため、保管状態が悪いと反りが出やすく、大きな減額要因となります。トラスロッドの調整余地があるかどうかも査定ポイントです。</p>

          <h3>アコースティックベースの買取相場</h3>

          <p>アコースティックベース（アコベ）は市場の流通量が少なく、需要と供給のバランスによって買取価格が大きく変動するカテゴリです。ブランドやモデルによっては思わぬ高額がつくこともあります。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Taylor GS Mini-e Bass</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">コンパクトで人気</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Fender Kingman Bass</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">Fenderブランドの安心感</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Ibanez AEB/AEBFLシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">フレットレスモデルもあり</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Tacoma Thunderchief</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">生産終了で希少価値あり</td></tr>
              </tbody>
            </table>
          </div>

          <h3>アップライトベース（ウッドベース）の買取相場</h3>

          <p>アップライトベース（コントラバス/ウッドベース）は、ジャズやクラシックで使用される大型の弦楽器です。サイズが大きいため、出張買取の利用がおすすめです。楽器の材質や製作者によって価格帯は非常に幅広くなります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">種類</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">入門用アップライトベース</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">合板製が中心</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">中級アップライトベース</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜20万円</td><td className="px-4 py-3 text-warm-gray">単板使用モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">プロ用・オールドモデル</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜100万円以上</td><td className="px-4 py-3 text-warm-gray">ヨーロッパ製の手工品など</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">エレクトリックアップライト</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜10万円</td><td className="px-4 py-3 text-warm-gray">NS Design等は高額</td></tr>
              </tbody>
            </table>
          </div>

          <p>アップライトベースは特に<strong>運搬が大変な楽器</strong>のため、ウリエルなどの出張買取サービスの利用が最適です。自宅で査定から買取まで完結するため、運搬中の破損リスクもありません。</p>

          <CtaBox />

          {/* Section 2: 3社比較 */}
          <h2 id="comparison">ベース買取おすすめ3社を徹底比較</h2>

          <p>ベースの買取業者は数多くありますが、ここでは特におすすめの3社を、買取方法・対応楽器・スピード・特徴の面から比較します。ベースはギターほど取り扱い業者が多くないため、楽器専門の査定力を持つ業者を選ぶことが重要です。</p>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ベース対応</td><td className="px-4 py-3">エレキ/アコベ/アップライト</td><td className="px-4 py-3">エレキ/アコベ/アップライト</td><td className="px-4 py-3">エレキ/アコベ/アップライト</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">大型ベースを売りたい人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定で最高値が見つかる</h3>

          <p>ヒカカク！は、複数の買取業者に一括で査定依頼できるサービスです。ベース1本の情報を入力するだけで、複数の専門業者から査定額が届きます。ベースはギターに比べて業者ごとの査定額のばらつきが大きい傾向にあるため、<strong>一括査定で比較することが特に重要</strong>です。</p>

          <p>Fender Jazz BassやMusicman StingRayなどの人気モデルは、業者によって3万円以上の差がつくことも珍しくありません。まずはヒカカク！で相場を把握してから判断するのが賢明です。</p>

          <h3>ティファナ ── 3つの方法から選べる総合買取</h3>

          <p>ティファナは、出張買取・店頭買取・宅配買取の3つの方法に対応した総合買取サービスです。年間4万件の買取実績があり、ベースに限らず楽器全般の買取に強みがあります。特にエレキベースは宅配買取でも安全に送れるサイズ感なので、梱包キットを利用した宅配買取がお手軽です。</p>

          <p>状態が悪いベースや古いモデルでも査定可能なので、「売れるかどうかわからない」というベースがある場合にも安心です。</p>

          <h3>ウリエル ── 出張買取で自宅から一歩も出ずに売却</h3>

          <p>ウリエルは出張買取を専門とするサービスで、自宅にいながらベースの査定から買取まで完結します。特に<strong>アップライトベース（ウッドベース）のように大型で運搬が困難な楽器</strong>を売る際には、出張買取が最適な選択肢です。</p>

          <p>ベース本体に加えて、アンプやエフェクターなど周辺機材もまとめて査定してもらえます。引っ越しやバンド解散で機材一式を処分したい場合にもおすすめです。</p>

          <CtaBox />

          {/* Section 3: ブランド別相場 */}
          <h2 id="brand-price">主要ブランド別 ベース買取相場ガイド</h2>

          <p>ここでは、特に人気の高い5つのベースブランドについて、モデルごとの買取相場をより詳しく解説します。</p>

          <h3>Fender（フェンダー）の買取相場</h3>

          <p>Fenderはベース市場で最も影響力のあるブランドです。Jazz BassとPrecision Bassは、あらゆるジャンルの音楽で使用されており、中古市場でも圧倒的な人気を誇ります。特にUSA製は安定して高額買取が期待できます。</p>

          <ul>
            <li><strong>American Professional II Jazz Bass</strong>: 7万〜14万円</li>
            <li><strong>American Professional II Precision Bass</strong>: 7万〜13万円</li>
            <li><strong>American Ultra Jazz Bass</strong>: 8万〜16万円</li>
            <li><strong>Player Jazz Bass（メキシコ製）</strong>: 2万〜5万円</li>
            <li><strong>Custom Shop製品</strong>: 15万〜40万円以上</li>
            <li><strong>Japan製（Made in Japan）</strong>: 2万〜7万円</li>
            <li><strong>ヴィンテージ（1960〜70年代）</strong>: 30万〜200万円以上</li>
          </ul>

          <p>Fenderベースは<strong>製造国（USA/メキシコ/日本/インドネシア）で価格帯が明確に分かれる</strong>ため、ヘッドのロゴやシリアルナンバーで確認しておきましょう。</p>

          <h3>Gibson（ギブソン）の買取相場</h3>

          <p>Gibsonのベースはギターほど種類が多くありませんが、ThunderbirdやSG Bassなど個性的なモデルがあり、特にロック系のプレイヤーに人気です。</p>

          <ul>
            <li><strong>Thunderbird</strong>: 5万〜15万円</li>
            <li><strong>SG Bass</strong>: 4万〜12万円</li>
            <li><strong>EB-3（ヴィンテージ）</strong>: 10万〜30万円</li>
            <li><strong>Les Paul Bass</strong>: 4万〜10万円</li>
            <li><strong>Epiphone Thunderbird</strong>: 1万〜3万円</li>
          </ul>

          <h3>Musicman（ミュージックマン）の買取相場</h3>

          <p>Musicmanは、アクティブベースの先駆者として知られるブランドです。StingRayは世界中のベーシストに愛用されており、中古市場でも非常に人気があります。スラップ奏法に最適なサウンドが特徴です。</p>

          <ul>
            <li><strong>StingRay</strong>: 5万〜15万円</li>
            <li><strong>StingRay Special</strong>: 8万〜18万円</li>
            <li><strong>Bongo</strong>: 5万〜12万円</li>
            <li><strong>Sterling（USAライン）</strong>: 5万〜12万円</li>
            <li><strong>Sterling by Musicman（廉価ライン）</strong>: 1万〜3万円</li>
          </ul>

          <h3>Rickenbacker（リッケンバッカー）の買取相場</h3>

          <p>Rickenbackerは独特のジャリジャリとしたトーンで知られるアメリカのブランドです。生産数が限られているため、中古市場での希少価値が高く、安定した高額買取が期待できます。ビートルズのポール・マッカートニーが使用したことでも有名です。</p>

          <ul>
            <li><strong>4003</strong>: 8万〜20万円</li>
            <li><strong>4003S</strong>: 8万〜18万円</li>
            <li><strong>4001（ヴィンテージ）</strong>: 15万〜40万円以上</li>
          </ul>

          <h3>YAMAHA（ヤマハ）の買取相場</h3>

          <p>YAMAHAはコストパフォーマンスに優れたベースを多数ラインナップしています。BBシリーズはプロにも愛用者が多く、特にBB734Aなどの上位モデルは安定した買取価格がつきます。TRBシリーズの6弦ベースなども根強い需要があります。</p>

          <ul>
            <li><strong>BB734A / BB734MS</strong>: 3万〜6万円</li>
            <li><strong>BB434</strong>: 1万〜3万円</li>
            <li><strong>TRBシリーズ</strong>: 2万〜8万円</li>
            <li><strong>TRBX304/504</strong>: 1万〜3万円</li>
            <li><strong>旧BBシリーズ（BB2024等）</strong>: 2万〜5万円</li>
          </ul>

          <CtaBox />

          {/* 買取の流れ */}
          <h2 id="flow">ベース買取の流れ ── 申し込みから入金まで</h2>

          <p>ベースを売るのが初めての方でも安心。買取の一般的な流れを4ステップで解説します。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">Web・電話で査定申し込み</h3><p className="text-sm text-warm-gray">ブランド名・モデル名・年式・状態を伝えます。ヒカカク！なら一括査定フォームから複数社に同時に依頼可能です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">仮査定（概算見積もり）</h3><p className="text-sm text-warm-gray">写真や情報をもとに概算額が提示されます。複数社の見積もりを比較して、最も高い業者を選びましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">本査定（実物確認）</h3><p className="text-sm text-warm-gray">出張・宅配・店頭のいずれかで実物を査定。ネックの反り、フレットの状態、電装系の動作を確認し、正式な買取額が決まります。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h3 className="font-bold text-sm mb-1">買取成立・現金受け取り</h3><p className="text-sm text-warm-gray">金額に納得したら買取成立。出張・店頭ならその場で現金、宅配なら1〜3営業日で銀行振込されます。</p></div>
            </div>
          </div>

          <CtaBox />

          {/* Section 4: 高く売るコツ */}
          <h2 id="tips">ベースを高く売るための3つのコツ</h2>

          <p>同じベースでも、売り方次第で買取価格が大きく変わります。以下の3つのコツを実践して、少しでも高く売却しましょう。</p>

          <h3>コツ1: 複数の業者に査定を依頼する（相見積もり）</h3>

          <p>これが最も効果的な方法です。ベースはギターと比べて買取業者ごとの査定額にばらつきが出やすい傾向にあります。ある業者ではFender Jazz Bassに8万円の査定がつく一方で、別の業者では12万円ということもあります。</p>

          <p>ヒカカク！を使えば、一度の入力で複数業者に一括査定ができます。<strong>最低でも3社以上の査定額を比較すること</strong>をおすすめします。特にRickenbackerやWarwickなど、やや特殊なブランドは業者によって評価が大きく分かれるため、相見積もりの効果が大きくなります。</p>

          <h3>コツ2: 付属品・ケースをすべて揃えて査定に出す</h3>

          <p>ベースの買取価格は付属品の有無で大きく変わります。以下のものが揃っていると買取額アップが期待できます。</p>

          <ul>
            <li><strong>純正ハードケース/ギグバッグ</strong>: 特にハードケースは1万円以上のプラスになることも</li>
            <li><strong>保証書・購入証明書</strong>: 正規品の証明になり信頼性が上がる</li>
            <li><strong>トラスロッドレンチ・六角レンチ</strong>: 細かい付属品もポイント</li>
            <li><strong>純正ストラップ</strong>: ブランド純正のものは特に加点対象</li>
            <li><strong>元のピックアップ（交換済みの場合）</strong>: 純正パーツは取っておく</li>
          </ul>

          <p>特にベースは<strong>ハードケースの有無で査定額に大きな差</strong>が出ます。純正ケースがある場合は必ず一緒に査定に出しましょう。</p>

          <h3>コツ3: ネック調整・クリーニングで状態を整える</h3>

          <p>査定前のメンテナンスは買取額アップに直結します。特にベースはネックが長いため、反りの有無が査定の大きなポイントになります。</p>

          <ul>
            <li><strong>ネックの反り</strong>: トラスロッドで調整可能であれば調整してから査定へ</li>
            <li><strong>弦の張り替え</strong>: 錆びた弦は印象が悪い。新品の弦に交換</li>
            <li><strong>ボディ・指板のクリーニング</strong>: ポリッシュとレモンオイルで手入れ</li>
            <li><strong>ジャック・ポット</strong>: ガリが出る場合は接点洗浄剤で清掃</li>
            <li><strong>フレット</strong>: フレット磨き用のクロスで磨く</li>
          </ul>

          <p>ジャックのガリ（ノイズ）やポットの接触不良は<strong>「故障品」として大幅減額される原因</strong>になるため、市販の接点洗浄剤でメンテナンスしておきましょう。数百円のケアで査定額が数千〜数万円変わることがあります。</p>

          <CtaBox />

          {/* Section 5: FAQ */}
          <h2 id="faq">ベース買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ベースの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ベースの買取相場はブランド・モデル・状態により異なります。Fender Jazz Bass（USA）で5万〜18万円、Musicman StingRayで5万〜15万円、Rickenbacker 4003で8万〜20万円が目安です。エントリーモデルは5,000〜3万円程度になります。正確な買取価格は複数業者に査定依頼して比較しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れたベースでも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、多くの買取業者は壊れたベースでも査定可能です。特にFenderやRickenbackerなどの有名ブランドは、修理可能な状態であれば値段がつくことがあります。ネック折れやジャック不良があっても、パーツ取りとしての価値がある場合もあるため、まずは査定に出してみましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ベースとギターではどちらが買取相場が高いですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                一般的に、同ブランド・同グレードで比較するとギターの方が中古市場の需要が大きいため、買取相場もやや高い傾向があります。ただし、Musicman StingRayやRickenbacker 4003など人気モデルはベースでも高額買取が期待できます。また、ヴィンテージベースはギターに匹敵する価値がつくことも珍しくありません。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ベースのアンプやエフェクターも一緒に売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、ほとんどの買取業者はベース本体だけでなくアンプやエフェクターも買取対象です。まとめて売ると買取額がアップするキャンペーンを行っている業者もあります。特にウリエルの出張買取なら、重いアンプヘッドやキャビネットもまとめて自宅から売却できて便利です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ベース買取にかかる費用はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。完全無料で利用できるので、気軽に査定を申し込んでみてください。
              </div>
            </details>
          </div>

          {/* まとめ */}
          <h2>まとめ：ベース買取は相見積もりで最高値を狙おう</h2>

          <p>ベースの買取価格は、同じモデルでも業者によって大きな差が出ます。特にベースはギターに比べて取り扱い業者ごとの評価基準にばらつきがあるため、<strong>複数の業者に査定を依頼して比較すること</strong>が高額売却の鉄則です。</p>

          <p>今回紹介した3社の使い分けをまとめると以下のようになります。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで店頭/宅配買取</li>
            <li><strong>大型ベース・機材一式を売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>まずはヒカカク！で相場を把握し、その後で最適な売却方法を選ぶのが、後悔しないベース売却のコツです。査定は完全無料なので、ぜひ気軽に試してみてください。</p>

          <CtaBox />
        </div>

        {/* Related Articles */}
        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/fender-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">Fender買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">Fender買取相場・おすすめ業者</h3>
            </Link>
            <Link href="/articles/gibson-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">Gibson買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">Gibson買取相場・おすすめ業者</h3>
            </Link>
            <Link href="/articles/souba-ichiran/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">相場一覧</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取相場一覧まとめ</h3>
            </Link>
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">高く売るコツ</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
            <Link href="/articles/kowareta-gakki-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">壊れた楽器</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">壊れた楽器・ジャンク品の買取</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

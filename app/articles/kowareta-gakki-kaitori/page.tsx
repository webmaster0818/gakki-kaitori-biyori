import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】壊れた楽器・古い楽器の買取｜ジャンク品でも売れる？相場と業者3選",
  description:
    "壊れた楽器・古い楽器・ジャンク品は買取できる？ネック折れ・音が出ない・キズありの楽器でも売れる理由と買取相場を解説。ジャンク楽器の買取に対応したおすすめ業者3社を比較。",
  openGraph: {
    title: "【2026年最新】壊れた楽器・古い楽器の買取｜ジャンク品でも売れる？",
    description: "壊れた楽器・ジャンク品の買取相場と対応業者3社を徹底比較。売れる理由と高額査定のコツ。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "壊れた楽器の買取", href: "/articles/kowareta-gakki-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">壊れた楽器でもまずは無料査定</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">
          一括査定で価格を調べる
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
      { "@type": "Question", name: "壊れた楽器でも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、多くの買取業者は壊れた楽器でも査定可能です。ネック折れ・音が出ない・キズ・サビなどがあっても、修理可能な場合やパーツに価値がある場合は買取してもらえます。特にGibson・Fenderなどの有名ブランドは壊れていても数万円の値段がつくことがあります。" } },
      { "@type": "Question", name: "壊れた楽器の買取相場はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "壊れた楽器の買取相場は、ブランド・モデル・破損の程度によって異なります。Gibsonのネック折れで3万〜10万円、Fenderの電装系不具合で2万〜8万円、一般的なブランドのジャンク品で100〜5,000円が目安です。ヴィンテージモデルは壊れていても高額になることがあります。" } },
      { "@type": "Question", name: "古い楽器は買取してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、古い楽器は「ヴィンテージ」として高い価値を持つ場合があります。特に1950〜70年代のギター、管楽器、アコースティックピアノは、古いからこそ高額になるケースが多いです。年代物の楽器は、むしろ新品より高く売れることもあります。" } },
      { "@type": "Question", name: "どんな状態の楽器なら買取不可になりますか？", acceptedAnswer: { "@type": "Answer", text: "一般的に買取不可になるケースは、(1)ノーブランドの楽器で修理不能、(2)部品が大幅に欠損している、(3)カビや腐食が激しく衛生面で問題がある、などです。ただし、業者によって基準が異なるため、まずは査定に出してみることをおすすめします。" } },
      { "@type": "Question", name: "壊れた楽器を少しでも高く売るには？", acceptedAnswer: { "@type": "Answer", text: "壊れた楽器を高く売るには、(1)複数業者に査定依頼する（ヒカカク！で一括査定）、(2)壊れている箇所以外はクリーニングする、(3)付属品（ケース・保証書等）があれば揃える、(4)修理せずそのまま査定に出す（自己修理は逆効果の場合も）、の4つがポイントです。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】壊れた楽器・古い楽器の買取｜ジャンク品でも売れる？",
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

export default function KowaretaGakkiKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">壊れた楽器</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】壊れた楽器・古い楽器の買取｜ジャンク品でも売れる？相場とおすすめ業者3選
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            「壊れているから売れないだろう」と諦めていませんか？実は、ネック折れ・音が出ない・キズだらけの楽器でも買い取ってもらえるケースは多いのです。本記事では、壊れた楽器・古い楽器・ジャンク品が売れる理由、楽器別の買取相場、おすすめ業者3社を徹底解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#why" className="hover:underline">壊れた楽器が売れる3つの理由</a></li>
            <li><a href="#price" className="hover:underline">壊れた楽器の買取相場（楽器別）</a></li>
            <li><a href="#old" className="hover:underline">古い楽器・ヴィンテージ品の価値</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ買取業者3社比較</a></li>
            <li><a href="#tips" className="hover:underline">壊れた楽器を少しでも高く売るコツ</a></li>
            <li><a href="#ng" className="hover:underline">買取不可になるケース</a></li>
            <li><a href="#flow" className="hover:underline">壊れた楽器の買取の流れ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="why">壊れた楽器が売れる3つの理由</h2>

          <p>「壊れているのに売れるなんて信じられない」と思うかもしれませんが、楽器買取業界ではジャンク品の買取は珍しいことではありません。その理由は主に3つあります。</p>

          <h3>理由1: 修理して再販できる</h3>
          <p>買取業者には提携のリペアショップがあり、<strong>ネック折れやフレットの打ち替え、電装系の修理などを低コストで対応</strong>できます。修理後に中古品として再販することで利益が出るため、壊れた楽器でも買取可能なのです。特にGibsonのヘッド折れは修理技術が確立されており、修理後も十分な価値があります。</p>

          <h3>理由2: パーツ単体に価値がある</h3>
          <p>楽器本体が演奏不可能でも、<strong>ピックアップ、ペグ、ブリッジ、ネック、ボディなどのパーツ単体で需要</strong>があります。特にGibsonの純正PAFピックアップやFenderのヴィンテージパーツは、パーツ単体でも数万円の価値があります。</p>

          <h3>理由3: 海外市場での需要</h3>
          <p>日本国内で売れない状態の楽器でも、<strong>海外（特に東南アジア・南米）では需要が高い</strong>ケースがあります。現地では修理して安く販売する市場が成り立っているため、日本の買取業者が海外に輸出する場合もあります。</p>

          <CtaBox />

          <h2 id="price">壊れた楽器の買取相場（楽器別）</h2>

          <h3>ギター（壊れた状態の買取相場）</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">状態</th>
                  <th className="px-4 py-3 text-left font-medium">有名ブランド</th>
                  <th className="px-4 py-3 text-left font-medium">一般ブランド</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">ネック折れ（修理可能）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td><td className="px-4 py-3 text-warm-gray">1,000〜5,000円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">フレットの大幅な減り</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜8万円</td><td className="px-4 py-3 text-warm-gray">1,000〜3,000円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">電装系不具合（音出ない）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜8万円</td><td className="px-4 py-3 text-warm-gray">500〜3,000円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">ボディの割れ・ヒビ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">100〜2,000円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">塗装の大幅な剥がれ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td><td className="px-4 py-3 text-warm-gray">500〜3,000円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">ペグ・ブリッジ等の欠損</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">100〜1,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>※有名ブランド = Gibson, Fender, PRS, Martin, Taylor等<br/>※一般ブランド = エントリーモデル、ノーブランド等</p>

          <h3>ピアノ（壊れた状態の買取相場）</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">状態</th>
                  <th className="px-4 py-3 text-left font-medium">YAMAHA / KAWAI</th>
                  <th className="px-4 py-3 text-left font-medium">その他</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">鍵盤の一部動かない</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜10万円</td><td className="px-4 py-3 text-warm-gray">0〜3万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">調律が大幅に狂っている</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜15万円</td><td className="px-4 py-3 text-warm-gray">0〜5万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">外装のキズ・汚れ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜20万円</td><td className="px-4 py-3 text-warm-gray">0〜5万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">ペダル不具合</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜15万円</td><td className="px-4 py-3 text-warm-gray">0〜3万円</td></tr>
              </tbody>
            </table>
          </div>

          <h3>管楽器（壊れた状態の買取相場）</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">状態</th>
                  <th className="px-4 py-3 text-left font-medium">YAMAHA / Selmer等</th>
                  <th className="px-4 py-3 text-left font-medium">その他</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">キーの動作不良</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜5万円</td><td className="px-4 py-3 text-warm-gray">100〜3,000円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">凹み・キズ</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜3万円</td><td className="px-4 py-3 text-warm-gray">100〜2,000円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">タンポ（パッド）劣化</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜4万円</td><td className="px-4 py-3 text-warm-gray">100〜2,000円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">ラッカー剥がれ・変色</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜3万円</td><td className="px-4 py-3 text-warm-gray">100〜1,000円</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="old">古い楽器・ヴィンテージ品の価値</h2>

          <p>「古い＝価値がない」というのは大きな誤解です。楽器の世界では、<strong>古いからこそ価値が高くなる</strong>ケースが数多くあります。</p>

          <h3>ヴィンテージとして価値が高い楽器</h3>

          <ul>
            <li><strong>1950〜60年代のGibson・Fender</strong>: 数十万〜数百万円の価値。ゴールデンエラと呼ばれる最高品質の時代</li>
            <li><strong>戦前のMartin・Gibsonアコギ</strong>: コレクターズアイテムとして100万円超えも</li>
            <li><strong>ヴィンテージのSelmerサックス</strong>: Mark VIなどは50万円以上の買取実績あり</li>
            <li><strong>古いYAMAHAピアノ（Cシリーズ初期等）</strong>: 状態が良ければ数十万円</li>
            <li><strong>ヴィンテージシンセサイザー</strong>: Roland、KORG、Moogなどのアナログシンセは高額</li>
          </ul>

          <h3>古くても価値がつきにくい楽器</h3>

          <ul>
            <li>ノーブランドの入門用楽器</li>
            <li>大量生産の安価なモデル</li>
            <li>重大な破損があり修理困難なもの</li>
            <li>カビや腐食が激しいもの</li>
          </ul>

          <p>判断に迷ったら、<strong>まずはヒカカク！で無料査定を依頼</strong>してみましょう。意外な高額査定がつくことがあります。</p>

          <CtaBox />

          <h2 id="comparison">壊れた楽器・ジャンク品の買取おすすめ3社</h2>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ジャンク品対応</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">対応（状態問わず）</td><td className="px-4 py-3">対応（状態問わず）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">複数社比較で最高値</td><td className="px-4 py-3 text-gold-dark font-bold">状態問わず査定OK</td><td className="px-4 py-3 text-gold-dark font-bold">壊れた大型楽器も出張</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 壊れた楽器こそ複数社比較が重要</h3>
          <p>壊れた楽器は業者によって査定基準が大きく異なります。修理して再販できると判断する業者と、パーツ取りとしてしか評価しない業者では、<strong>査定額に数万円の差</strong>が出ることも。ヒカカク！で一括査定し、最も高く評価してくれる業者を見つけましょう。</p>

          <h3>ティファナ ── 状態を問わず気軽に査定</h3>
          <p>ティファナは「状態を問わず査定OK」を掲げており、<strong>壊れた楽器やジャンク品でも気軽に査定依頼</strong>できます。「値段がつくかわからない」という楽器こそ、まずティファナに相談してみましょう。</p>

          <h3>ウリエル ── 壊れた大型楽器も出張対応</h3>
          <p>壊れたピアノやドラムセットなど、<strong>運搬が難しい壊れた大型楽器はウリエルの出張買取が最適</strong>です。搬出も査定士が行ってくれるため、自分で運ぶ必要がありません。</p>

          <CtaBox />

          <h2 id="tips">壊れた楽器を少しでも高く売るための4つのコツ</h2>

          <h3>コツ1: 自分で修理しない</h3>
          <p>これは意外かもしれませんが、<strong>素人修理は逆効果になることが多い</strong>です。特にギターのネック折れを自分で接着したり、管楽器の凹みを自分で直そうとすると、修理跡が残って余計に価値が下がります。壊れた状態のまま査定に出しましょう。</p>

          <h3>コツ2: 壊れていない部分はクリーニング</h3>
          <p>壊れた楽器でも、<strong>壊れていない部分をきれいにする</strong>ことで印象が良くなります。ホコリを拭き取り、ケースの中もきれいにしておきましょう。</p>

          <h3>コツ3: 付属品を揃える</h3>
          <p>壊れた楽器でも、<strong>純正ケース・保証書・付属品があれば査定額がアップ</strong>します。特にGibsonやFenderの純正ハードケースは、ケースだけでも価値があります。</p>

          <h3>コツ4: 必ず複数社に査定を依頼</h3>
          <p>壊れた楽器は特に業者間で評価が分かれるため、<strong>ヒカカク！で一括査定して最低3社は比較</strong>しましょう。「買取不可」の業者と「数万円つく」業者が混在することは珍しくありません。</p>

          <CtaBox />

          <h2 id="ng">買取不可になるケース</h2>

          <p>壊れた楽器でも多くの場合は買取可能ですが、以下のケースは買取不可になる可能性があります。</p>

          <ul>
            <li><strong>ノーブランドで修理不能</strong>: 修理費用が楽器の価値を上回る場合</li>
            <li><strong>部品が大幅に欠損</strong>: ネック・ボディなど主要パーツがない場合</li>
            <li><strong>カビ・腐食が激しい</strong>: 衛生面で問題がある場合</li>
            <li><strong>盗品の疑い</strong>: シリアルナンバーが削られている等</li>
          </ul>

          <p>ただし、これらの基準は業者によって異なるため、<strong>諦める前にまずは査定に出してみること</strong>をおすすめします。ヒカカク！なら無料で複数業者に一括査定依頼ができます。</p>

          {/* 買取の流れ */}
          <h2 id="flow">壊れた楽器の買取の流れ</h2>

          <p>壊れた楽器やジャンク品でも、通常の楽器と同じ流れで買取に出せます。特別な手続きは不要です。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">破損状態を正直に伝えて査定申し込み</h3><p className="text-sm text-warm-gray">「ネックが折れている」「音が出ない」「鍵盤が動かない」など、破損状態を具体的に伝えましょう。写真を添えるとより正確な仮査定額が出ます。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">複数社の見積もりを比較</h3><p className="text-sm text-warm-gray">ジャンク品は業者によって評価が大きく異なります。ヒカカク！で一括査定し、壊れた楽器の買取に強い業者を見つけましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">本査定・買取成立</h3><p className="text-sm text-warm-gray">実物確認で修理可能かどうかを判断。パーツ取りとしての価値もあるため、壊れていても0円にはならないことが多いです。</p></div>
            </div>
          </div>

          <p>壊れた楽器を<strong>捨てる前に必ず査定に出しましょう</strong>。処分費用がかかる大型楽器（ピアノ、ドラムセットなど）の場合、買い取ってもらえるだけでも大きなメリットです。</p>

          <CtaBox />

          <h2 id="faq">壊れた楽器の買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れた楽器でも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、多くの買取業者は壊れた楽器でも査定可能です。修理可能な場合やパーツに価値がある場合は買取してもらえます。特にGibson・Fenderなどの有名ブランドは壊れていても数万円の値段がつくことがあります。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れた楽器の買取相場はどのくらいですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ブランド・破損の程度によって異なります。Gibsonのネック折れで3万〜10万円、Fenderの電装系不具合で2万〜8万円、一般ブランドのジャンク品で100〜5,000円が目安です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">古い楽器は買取してもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、古い楽器は「ヴィンテージ」として高い価値を持つ場合があります。特に1950〜70年代のギター、管楽器、アコースティックピアノは、古いからこそ高額になるケースが多いです。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">どんな状態の楽器なら買取不可ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ノーブランドの楽器で修理不能、部品が大幅に欠損、カビや腐食が激しいなどの場合は買取不可になることがあります。ただし基準は業者により異なるため、まずは査定に出してみることをおすすめします。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れた楽器を少しでも高く売るには？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                (1)複数業者に査定依頼する、(2)壊れている箇所以外はクリーニングする、(3)付属品があれば揃える、(4)自分で修理せずそのまま査定に出す、の4つがポイントです。特に自己修理は逆効果になることが多いので注意。
              </div>
            </details>
          </div>

          <h2>まとめ：壊れた楽器も捨てずにまず査定を</h2>

          <p>壊れた楽器・古い楽器・ジャンク品でも、<strong>ブランドやモデルによっては驚くほどの価値がある</strong>ことがあります。「どうせ売れないだろう」と捨ててしまう前に、まずは無料査定を試してみてください。</p>

          <ul>
            <li><strong>複数社で比較したい</strong> → ヒカカク！で一括査定</li>
            <li><strong>状態が悪くても相談したい</strong> → ティファナで査定</li>
            <li><strong>壊れた大型楽器を売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料。壊れた楽器があれば、諦める前にまず一度査定に出してみましょう。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
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
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">売却ガイド</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

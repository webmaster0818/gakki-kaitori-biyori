import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】Gibson(ギブソン)買取相場・おすすめ業者3選｜高く売るコツ",
  description:
    "Gibson(ギブソン)の買取相場を徹底解説。Les Paul・SG・ES-335などモデル別の買取価格目安、ヴィンテージGibsonの査定ポイント、高く売るコツまで。おすすめ買取業者3社の比較で最高値がわかります。",
  openGraph: {
    title: "【2026年最新】Gibson(ギブソン)買取相場・おすすめ業者3選｜高く売るコツ",
    description: "Gibsonギターの買取相場をモデル別に徹底解説。Les Paul・SG・ES-335の相場目安と高く売るコツ。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ギター買取", href: "/articles/guitar-kaitori/" },
    { name: "Gibson買取", href: "/articles/gibson-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのGibsonの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "Gibsonギターの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "Gibsonギターの買取相場はモデル・年式・状態により大きく異なります。Les Paul Standardが10万〜30万円、SG Standardが5万〜15万円、ES-335が10万〜25万円が目安です。1950〜60年代のヴィンテージは50万〜数百万円になることもあります。" } },
      { "@type": "Question", name: "Gibsonのシリアルナンバーはどこにありますか？", acceptedAnswer: { "@type": "Answer", text: "Gibsonのシリアルナンバーは、ヘッド裏面に刻印されているのが一般的です。年式によって表記方法が異なり、1977年以降は8桁の数字で製造年・日・工場が特定できます。シリアルナンバーは査定時に必ず確認されるポイントです。" } },
      { "@type": "Question", name: "Gibson Epiphone（エピフォン）も高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "EpiphoneはGibson傘下のブランドで、本家Gibsonと比べると買取価格は低めです。一般的なEpiphoneモデルは3,000〜3万円程度ですが、日本製のElitistシリーズやヴィンテージのEpiphoneは5万〜15万円で取引されることもあります。" } },
      { "@type": "Question", name: "壊れたGibsonでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、Gibsonは壊れていても買取可能な場合が多いです。特にヘッド折れ（ネック折れ）はGibsonの構造上よく起きる症状で、修理可能なため値段がつくことが多いです。パーツ単体でも価値があるため、まずは査定に出してみることをおすすめします。" } },
      { "@type": "Question", name: "Gibsonを最も高く売る方法は？", acceptedAnswer: { "@type": "Answer", text: "Gibsonを最も高く売るには、(1)ヒカカク！で複数業者に一括査定を依頼する、(2)純正ハードケース・保証書・COA（認定証）を揃える、(3)弦を張り替えボディをクリーニングする、(4)改造している場合は純正パーツに戻す、の4つがポイントです。業者間で5万円以上差がつくことも珍しくありません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】Gibson(ギブソン)買取相場・おすすめ業者3選｜高く売るコツ",
    datePublished: "2026-04-16",
    dateModified: "2026-04-16",
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

export default function GibsonKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Title */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Gibson買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】Gibson(ギブソン)買取相場・おすすめ業者3選｜高く売るコツを徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            Gibson(ギブソン)のギターを売りたいとお考えの方へ。本記事では、Les Paul・SG・ES-335などGibsonの人気モデル別の買取相場を詳しく解説し、おすすめの買取業者3社を比較。ヴィンテージGibsonの査定ポイントや、少しでも高く売るためのコツまで網羅しています。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月16日</p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#market-price" className="hover:underline">Gibsonモデル別 買取相場一覧</a></li>
            <li><a href="#vintage" className="hover:underline">ヴィンテージGibsonの査定ポイント</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ買取業者3社比較</a></li>
            <li><a href="#tips" className="hover:underline">Gibsonを高く売る5つのコツ</a></li>
            <li><a href="#serial" className="hover:underline">シリアルナンバーの読み方</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          {/* Section 1: モデル別買取相場 */}
          <h2 id="market-price">Gibsonモデル別 買取相場一覧【2026年最新】</h2>

          <p>Gibson(ギブソン)はアメリカを代表するギターブランドで、中古市場でも高い人気を誇ります。ここでは、2026年現在のGibsonの主要モデル別買取相場をエレキギターとアコースティックギターに分けてご紹介します。</p>

          <h3>Gibson エレキギターの買取相場</h3>

          <p>Gibsonのエレキギターは、Les Paul・SG・ES-335の3モデルが特に高額買取されます。年式やコンディション、カラーによっても価格が大きく変動します。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Les Paul Standard（2015年以降）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">最も人気の高いモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Les Paul Custom</td><td className="px-4 py-3 text-gold-dark font-bold">12万〜30万円</td><td className="px-4 py-3 text-warm-gray">ブラックビューティーは高評価</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Les Paul Classic</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">スリムテーパーネックが特徴</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Les Paul Studio</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜10万円</td><td className="px-4 py-3 text-warm-gray">装飾を省いたコスパモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Les Paul Junior / Special</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td><td className="px-4 py-3 text-warm-gray">P-90搭載のシンプルモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">SG Standard</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">軽量で演奏性が高い</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">ES-335</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">セミホロウの名機</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">ES-339</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜18万円</td><td className="px-4 py-3 text-warm-gray">ES-335の小型版</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Flying V</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">個性的なデザインで根強い人気</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Explorer</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">ロック系で人気</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Firebird</td><td className="px-4 py-3 text-gold-dark font-bold">6万〜18万円</td><td className="px-4 py-3 text-warm-gray">スルーネック構造</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">1950〜60年代ヴィンテージ</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜数百万円</td><td className="px-4 py-3 text-warm-gray">状態により大幅変動</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Gibson アコースティックギターの買取相場</h3>

          <p>Gibsonのアコースティックギターは、J-45やHummingbird、Doveなど伝統的なモデルが中古市場で高い人気を維持しています。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">J-45 Standard</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">Gibson アコギの代名詞</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Hummingbird</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">華やかなピックガードが特徴</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Dove</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜22万円</td><td className="px-4 py-3 text-warm-gray">メイプルバック＆サイド</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">J-200 / SJ-200</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜35万円</td><td className="px-4 py-3 text-warm-gray">キング・オブ・フラットトップ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">L-00 / L-1</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td><td className="px-4 py-3 text-warm-gray">小ぶりなブルース向きモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">J-15</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">ウォルナットの渋い外観</td></tr>
              </tbody>
            </table>
          </div>

          <p>上記はあくまで目安であり、実際の買取価格は楽器の状態やその時の市場需要によって変動します。<strong>Gibsonは業者によって査定額の差が大きいブランドなので、必ず複数社に査定を依頼しましょう。</strong></p>

          <CtaBox />

          {/* Section 2: ヴィンテージ */}
          <h2 id="vintage">ヴィンテージGibsonの査定ポイント</h2>

          <p>Gibsonのヴィンテージギターは、年代によって数十万〜数百万円の価値があります。特に1950年代〜1960年代の「ゴールデンエラ」と呼ばれる時期のモデルは、コレクターズアイテムとして非常に高い需要があります。</p>

          <h3>年代別の価値目安</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">年代</th>
                  <th className="px-4 py-3 text-left font-medium">価値レベル</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">1950年代</td><td className="px-4 py-3 text-gold-dark font-bold">最高額（100万〜1000万円超）</td><td className="px-4 py-3 text-warm-gray">PAFピックアップ、ロングテノン</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">1960年代前半</td><td className="px-4 py-3 text-gold-dark font-bold">超高額（50万〜500万円）</td><td className="px-4 py-3 text-warm-gray">ナンバードPAF、スリムネック</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">1960年代後半</td><td className="px-4 py-3 text-gold-dark font-bold">高額（30万〜200万円）</td><td className="px-4 py-3 text-warm-gray">T-Top期、パンケーキボディ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">1970年代</td><td className="px-4 py-3 text-gold-dark font-bold">中額（10万〜50万円）</td><td className="px-4 py-3 text-warm-gray">品質にばらつきあり</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">1980〜90年代</td><td className="px-4 py-3 text-gold-dark font-bold">安定（8万〜30万円）</td><td className="px-4 py-3 text-warm-gray">Nashville工場製</td></tr>
              </tbody>
            </table>
          </div>

          <h3>査定で重視されるポイント</h3>

          <ul>
            <li><strong>オリジナルパーツの有無</strong>: ピックアップ、ペグ、ブリッジ等が純正かどうか</li>
            <li><strong>リフィニッシュの有無</strong>: オリジナル塗装かどうかで価値が大幅に変わる</li>
            <li><strong>ネックの状態</strong>: 反り、ねじれ、フレットの減り具合</li>
            <li><strong>ケース・付属品</strong>: 純正ハードケース（特にブラウンケース、ピンクライニング）</li>
            <li><strong>COA（Certificate of Authenticity）</strong>: Custom Shop製品の認定証</li>
          </ul>

          <CtaBox />

          {/* Section 3: 3社比較 */}
          <h2 id="comparison">Gibson買取おすすめ3社を徹底比較</h2>

          <p>Gibsonのギターは高額になるケースが多いため、買取業者選びが特に重要です。ここでは、Gibson買取に強いおすすめ3社を比較します。</p>

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
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">Gibson対応</td><td className="px-4 py-3">全モデル対応</td><td className="px-4 py-3">全モデル対応</td><td className="px-4 py-3">全モデル対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定スピード</td><td className="px-4 py-3">最短即日（複数社）</td><td className="px-4 py-3">最短即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">業者間競争で最高値</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">運搬が面倒な人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定でGibsonの最高値が見つかる</h3>

          <p>Gibsonのように高額なギターこそ、複数業者の査定を比較することが重要です。ヒカカク！なら一度の入力で複数の専門業者から査定額が届くため、<strong>業者間の競争原理で最高値を引き出せます</strong>。Les Paul Standardのように業者間で5万円以上の差がつくモデルでは、一括査定の効果は絶大です。</p>

          <h3>ティファナ ── 状態を問わず査定対応</h3>

          <p>ティファナは出張・店頭・宅配の3方式に対応し、年間4万件の買取実績があります。Gibsonのヘッド折れや塗装の剥がれなど、<strong>状態が良くないギターでも査定してくれる</strong>のが強みです。「値段がつくかわからない」というGibsonをお持ちなら、まずティファナに相談してみましょう。</p>

          <h3>ウリエル ── 出張買取でGibsonを安全に売却</h3>

          <p>Gibsonのギターは高額になるため、宅配時の破損リスクが気になる方も多いでしょう。ウリエルなら査定士が自宅に来てくれるため、<strong>梱包・発送の手間も破損リスクもありません</strong>。複数本のGibsonやアンプなどまとめて売りたい場合にも最適です。</p>

          <CtaBox />

          {/* Section 4: 高く売るコツ */}
          <h2 id="tips">Gibsonを高く売るための5つのコツ</h2>

          <h3>コツ1: 必ず複数社に査定を依頼する</h3>

          <p>Gibsonは業者によって得意なモデルが異なるため、査定額に大きな差が出ます。ヒカカク！を使えば一度の入力で複数社に依頼できるので、<strong>最低でも3社以上の査定額を比較</strong>しましょう。</p>

          <h3>コツ2: 純正ケース・COA・保証書を揃える</h3>

          <p>Gibsonの純正ハードケースは、それだけで1万〜3万円の価値があります。特にヴィンテージのブラウンケースやピンクライニングのケースは高額です。Custom Shop製品のCOA（認定証）も必ず一緒に出しましょう。</p>

          <h3>コツ3: シリアルナンバーを事前に調べておく</h3>

          <p>Gibsonのシリアルナンバーから製造年・工場が特定できます。査定前に自分のギターの正確な情報を把握しておくと、<strong>不当に安い査定を見抜くことができます</strong>。</p>

          <h3>コツ4: クリーニングして第一印象を良くする</h3>

          <ul>
            <li><strong>ボディ</strong>: ラッカー塗装対応のポリッシュで拭き上げる（ニトロセルロースラッカーには専用品を使用）</li>
            <li><strong>フレットボード</strong>: ローズウッド/エボニー指板はレモンオイルで保湿</li>
            <li><strong>金属パーツ</strong>: ペグ、ブリッジ、テールピースを磨く</li>
            <li><strong>弦</strong>: 錆びた弦は新品に交換</li>
          </ul>

          <h3>コツ5: 改造パーツは純正に戻す</h3>

          <p>Gibsonはオリジナルの状態が最も高く評価されます。ピックアップやペグを交換している場合は、<strong>純正パーツに戻してから査定に出す</strong>のがベストです。純正パーツがない場合は、交換したパーツのブランド・型番を伝えましょう。</p>

          <CtaBox />

          {/* Section 5: シリアルナンバー */}
          <h2 id="serial">Gibsonシリアルナンバーの読み方</h2>

          <p>Gibsonのシリアルナンバーは、製造年や工場を特定するための重要な手がかりです。査定時にも必ず確認されるポイントなので、事前に自分のギターの情報を把握しておきましょう。</p>

          <h3>1977年以降のシリアルナンバー（8桁）</h3>

          <p>1977年以降のGibsonは、8桁のシリアルナンバーが採用されています。読み方は以下の通りです。</p>

          <ul>
            <li><strong>1桁目・5桁目</strong>: 製造年（例: 「9」と「2」→ 1992年製）</li>
            <li><strong>2〜4桁目</strong>: その年の製造日（001〜365）</li>
            <li><strong>6〜8桁目</strong>: 製造順番号（奇数=Nashville工場、偶数=Memphis工場）</li>
          </ul>

          <h3>2014年以降のシリアルナンバー</h3>

          <p>2014年以降は新しい体系に変更されています。先頭の数字が製造年を直接示すようになり、より分かりやすくなっています。正確な情報はGibson公式サイトで確認できます。</p>

          <p>シリアルナンバーの読み方がわからない場合は、買取査定時に業者に確認してもらえるので心配はいりません。ただし、<strong>事前に製造年を把握しておくことで、適正な査定額かどうかを判断しやすくなります</strong>。</p>

          {/* Section 6: FAQ */}
          <h2 id="faq">Gibson買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Gibsonギターの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Gibsonギターの買取相場はモデル・年式・状態により大きく異なります。Les Paul Standardが10万〜30万円、SG Standardが5万〜15万円、ES-335が10万〜25万円が目安です。1950〜60年代のヴィンテージは50万〜数百万円になることもあります。正確な買取価格は複数業者に査定依頼して比較しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Gibsonのシリアルナンバーはどこにありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Gibsonのシリアルナンバーは、ヘッド裏面に刻印されているのが一般的です。年式によって表記方法が異なり、1977年以降は8桁の数字で製造年・日・工場が特定できます。シリアルナンバーは査定時に必ず確認されるポイントです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Gibson Epiphone（エピフォン）も高く売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                EpiphoneはGibson傘下のブランドで、本家Gibsonと比べると買取価格は低めです。一般的なEpiphoneモデルは3,000〜3万円程度ですが、日本製のElitistシリーズやヴィンテージのEpiphoneは5万〜15万円で取引されることもあります。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れたGibsonでも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、Gibsonは壊れていても買取可能な場合が多いです。特にヘッド折れ（ネック折れ）はGibsonの構造上よく起きる症状で、修理可能なため値段がつくことが多いです。パーツ単体でも価値があるため、まずは査定に出してみることをおすすめします。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Gibsonを最も高く売る方法は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Gibsonを最も高く売るには、(1)ヒカカク！で複数業者に一括査定を依頼する、(2)純正ハードケース・保証書・COA（認定証）を揃える、(3)弦を張り替えボディをクリーニングする、(4)改造している場合は純正パーツに戻す、の4つがポイントです。業者間で5万円以上差がつくことも珍しくありません。
              </div>
            </details>
          </div>

          {/* まとめ */}
          <h2>まとめ：Gibson買取は複数社比較が必須</h2>

          <p>Gibsonは中古市場で安定した需要があり、モデルや年式によっては非常に高額な買取が期待できるブランドです。しかし、<strong>業者によって査定額に大きな差が出る</strong>のもGibsonの特徴です。</p>

          <p>大切なGibsonを適正価格で売却するためのポイントをまとめると以下の通りです。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>状態が悪いGibsonを売りたい</strong> → ティファナで相談</li>
            <li><strong>自宅で安全に売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>まずはヒカカク！で複数社の査定額を比較し、あなたのGibsonの本当の価値を確認してみてください。査定は完全無料です。</p>

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
            <Link href="/articles/kowareta-gakki-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">壊れた楽器</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">壊れた楽器・ジャンク品の買取</h3>
            </Link>
            <Link href="/articles/souba-ichiran/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">相場一覧</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取相場一覧まとめ</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

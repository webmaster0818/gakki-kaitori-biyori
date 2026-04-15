import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】電子ピアノ買取相場ガイド｜YAMAHA・Roland・KAWAI別",
  description:
    "電子ピアノの買取相場をYAMAHA・Roland・KAWAI別に徹底解説。Clavinova・HP・CNシリーズの年式別相場目安、高く売るコツ、おすすめ買取業者3社の比較まで。使わなくなった電子ピアノを最高値で売る方法がわかります。",
  openGraph: {
    title: "【2026年最新】電子ピアノ買取相場ガイド｜YAMAHA・Roland・KAWAI別",
    description: "電子ピアノの買取相場をメーカー別に徹底解説。年式による価格差、高く売るコツ、おすすめ業者3社比較まで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "電子ピアノ買取ガイド", href: "/articles/denshi-piano-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">電子ピアノの買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "電子ピアノの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "電子ピアノの買取相場はメーカー・モデル・年式によって異なります。YAMAHA Clavinova CLP-700シリーズで5万〜15万円、Roland HP700シリーズで5万〜12万円、KAWAI CNシリーズで3万〜10万円が目安です。製造5年以内のモデルが高く売れる傾向にあります。" } },
      { "@type": "Question", name: "古い電子ピアノでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "製造10年以内であれば多くの業者で買取可能です。ただし、10年以上経過したモデルは技術的に古くなるため、買取価格がつかないこともあります。上位モデル（YAMAHA CVP、Roland LX等）であれば古くても値段がつくことがあります。" } },
      { "@type": "Question", name: "電子ピアノの搬出は大変ですか？", acceptedAnswer: { "@type": "Answer", text: "多くの電子ピアノは組み立て式のため、分解して搬出できます。出張買取を利用すれば、業者が分解・搬出まで行ってくれるので安心です。据え置き型の大型モデルでも、プロのスタッフが対応してくれます。" } },
      { "@type": "Question", name: "電子ピアノは宅配買取できますか？", acceptedAnswer: { "@type": "Answer", text: "ポータブルタイプ（YAMAHA P-125等）は宅配買取が可能です。ただし、据え置き型は重量があるため、出張買取の方が適しています。宅配の場合、梱包材の準備が必要になるため、出張買取の方が手軽です。" } },
      { "@type": "Question", name: "木製鍵盤と樹脂鍵盤で買取価格は変わりますか？", acceptedAnswer: { "@type": "Answer", text: "はい、木製鍵盤モデルの方が高く売れる傾向にあります。木製鍵盤はアコースティックピアノに近いタッチ感があり、中古市場でも人気が高いためです。例えばYAMAHA CLPの木製鍵盤モデルは、樹脂鍵盤モデルと比べて2〜5万円高い査定になることがあります。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】電子ピアノ買取相場ガイド｜YAMAHA・Roland・KAWAI別",
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

export default function DenshiPianoKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">電子ピアノ買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】電子ピアノ買取相場ガイド｜YAMAHA・Roland・KAWAI メーカー別に徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            使わなくなった電子ピアノ、そのまま眠らせていませんか？電子ピアノは技術の進化が早く、年数が経つほど価値が下がります。本記事では、YAMAHA・Roland・KAWAIの3大メーカー別に買取相場を解説し、年式による価格差や高く売るためのポイントをお伝えします。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月13日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#yamaha" className="hover:underline">YAMAHA電子ピアノの買取相場</a></li>
            <li><a href="#roland" className="hover:underline">Roland電子ピアノの買取相場</a></li>
            <li><a href="#kawai" className="hover:underline">KAWAI電子ピアノの買取相場</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較</a></li>
            <li><a href="#age" className="hover:underline">年式による価格差</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="yamaha">YAMAHA電子ピアノの買取相場</h2>

          <p>YAMAHAは電子ピアノ市場で最大のシェアを持つメーカーです。Clavinova（クラビノーバ）ブランドは中古市場でも圧倒的な人気があり、特にCLPシリーズは安定した買取価格が期待できます。</p>

          <h3>Clavinova CLPシリーズ</h3>

          <p>CLPシリーズはYAMAHA電子ピアノの主力ラインです。木製鍵盤搭載モデルとそうでないモデルで価格差があります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">発売年</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">CLP-785</td><td className="px-4 py-3">2021</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜18万円</td><td className="px-4 py-3 text-warm-gray">木製鍵盤・最上位</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CLP-775</td><td className="px-4 py-3">2021</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜14万円</td><td className="px-4 py-3 text-warm-gray">木製鍵盤・人気モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">CLP-745</td><td className="px-4 py-3">2021</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">木製鍵盤・スタンダード</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CLP-735</td><td className="px-4 py-3">2021</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">樹脂鍵盤・エントリー</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">CLP-685</td><td className="px-4 py-3">2017</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">旧世代最上位</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CLP-675</td><td className="px-4 py-3">2017</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">旧世代人気モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">CLP-635</td><td className="px-4 py-3">2017</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td><td className="px-4 py-3 text-warm-gray">旧世代エントリー</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Clavinova CVPシリーズ</h3>

          <p>CVPシリーズは多機能モデルで、伴奏機能やレッスン機能が充実しています。中古市場でも根強い人気があります。</p>

          <ul>
            <li><strong>CVP-809</strong>: 15万〜25万円（最新フラッグシップ）</li>
            <li><strong>CVP-805</strong>: 10万〜18万円</li>
            <li><strong>CVP-709</strong>: 5万〜12万円（旧世代でも高額）</li>
            <li><strong>CVP-705</strong>: 3万〜8万円</li>
          </ul>

          <h3>YAMAHA Pシリーズ（ポータブル）</h3>

          <p>Pシリーズはポータブルタイプの電子ピアノで、スタンドなしのコンパクトな設計が特徴です。買取価格はやや低めですが、宅配買取に対応しやすいメリットがあります。</p>

          <ul>
            <li><strong>P-515</strong>: 2万〜5万円（木製鍵盤ポータブル）</li>
            <li><strong>P-225</strong>: 1万〜3万円</li>
            <li><strong>P-145</strong>: 5,000〜1.5万円</li>
            <li><strong>P-125（旧モデル）</strong>: 8,000〜2万円</li>
          </ul>

          <CtaBox />

          <h2 id="roland">Roland電子ピアノの買取相場</h2>

          <p>Rolandは独自のモデリング音源技術で知られ、電子ピアノ市場でYAMAHAと並ぶ人気メーカーです。特にHPシリーズとLXシリーズは中古市場での評価が高く、安定した買取価格がつきます。</p>

          <h3>HPシリーズ</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">発売年</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">HP704</td><td className="px-4 py-3">2019</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">PHA-50鍵盤搭載</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">HP702</td><td className="px-4 py-3">2019</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">スタンダードモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">HP605</td><td className="px-4 py-3">2016</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">旧世代上位</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">HP603</td><td className="px-4 py-3">2016</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜4万円</td><td className="px-4 py-3 text-warm-gray">旧世代スタンダード</td></tr>
              </tbody>
            </table>
          </div>

          <h3>LXシリーズ（最上位ライン）</h3>

          <p>LXシリーズはRolandの電子ピアノ最上位ラインで、ハイブリッド・グランド鍵盤を搭載。アコースティックピアノに最も近い弾き心地を実現しています。中古でも高額です。</p>

          <ul>
            <li><strong>LX708</strong>: 12万〜22万円（フラッグシップ・プロジェクター付き）</li>
            <li><strong>LX706</strong>: 8万〜15万円</li>
            <li><strong>LX705</strong>: 5万〜10万円</li>
            <li><strong>LX-17（旧モデル）</strong>: 8万〜15万円</li>
          </ul>

          <h3>RPシリーズ / FPシリーズ</h3>

          <ul>
            <li><strong>RP701</strong>: 2万〜5万円（エントリーモデル）</li>
            <li><strong>RP501R</strong>: 1万〜3万円（旧世代エントリー）</li>
            <li><strong>FP-90X</strong>: 3万〜7万円（ポータブル最上位）</li>
            <li><strong>FP-60X</strong>: 2万〜5万円</li>
            <li><strong>FP-30X</strong>: 1万〜2.5万円</li>
          </ul>

          <CtaBox />

          <h2 id="kawai">KAWAI電子ピアノの買取相場</h2>

          <p>KAWAIはアコースティックピアノメーカーとしての技術を活かし、特に鍵盤のタッチ感にこだわった電子ピアノを製造しています。木製鍵盤搭載モデルの評価が特に高いメーカーです。</p>

          <h3>CAシリーズ（Concert Artistシリーズ）</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">発売年</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">CA901</td><td className="px-4 py-3">2023</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜18万円</td><td className="px-4 py-3 text-warm-gray">最上位・SK-EX音源</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CA701</td><td className="px-4 py-3">2023</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜13万円</td><td className="px-4 py-3 text-warm-gray">木製鍵盤グランドフィール</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">CA501</td><td className="px-4 py-3">2023</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜9万円</td><td className="px-4 py-3 text-warm-gray">木製鍵盤エントリー</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CA99/CA79</td><td className="px-4 py-3">2020</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">旧世代上位</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">CA49</td><td className="px-4 py-3">2020</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">旧世代スタンダード</td></tr>
              </tbody>
            </table>
          </div>

          <h3>CNシリーズ</h3>

          <ul>
            <li><strong>CN301</strong>: 3万〜6万円（新世代エントリー）</li>
            <li><strong>CN201</strong>: 2万〜4万円</li>
            <li><strong>CN39</strong>: 2万〜4万円（旧世代）</li>
            <li><strong>CN29</strong>: 1万〜2.5万円（旧世代エントリー）</li>
          </ul>

          <h3>ESシリーズ（ポータブル）</h3>

          <ul>
            <li><strong>ES920</strong>: 2万〜5万円</li>
            <li><strong>ES520</strong>: 1万〜3万円</li>
            <li><strong>ES110</strong>: 5,000〜1.5万円</li>
          </ul>

          <CtaBox />

          <h2 id="comparison">電子ピアノ買取おすすめ3社比較</h2>

          <p>電子ピアノの買取は、タイプ（据え置き型かポータブル型か）によって最適な売り方が変わります。以下の3社を上手に使い分けましょう。</p>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">据え置き型</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">出張対応</td><td className="px-4 py-3">出張対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">ポータブル型</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">宅配/店頭も可</td><td className="px-4 py-3">出張対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">分解・搬出</td><td className="px-4 py-3">業者次第</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3 text-gold-dark font-bold">価格比較に</td><td className="px-4 py-3 text-gold-dark font-bold">手軽さ重視</td><td className="px-4 py-3 text-gold-dark font-bold">大型モデルに</td></tr>
              </tbody>
            </table>
          </div>

          <p>電子ピアノの買取で最も重要なのは<strong>スピード</strong>です。電子ピアノは年々新モデルが出るため、売ると決めたら早めに行動しましょう。まずはヒカカク！で複数社の査定を取り、最も条件の良い業者を選ぶのがおすすめです。</p>

          <h2 id="age">年式による価格差 ── 電子ピアノは「鮮度」が命</h2>

          <p>電子ピアノの買取価格は、年式によって大きく変動します。これはアコースティックピアノとの最大の違いです。アコースティックピアノは50年前のモデルでも価値がありますが、電子ピアノは技術の進化により旧モデルの価値が急速に下がります。</p>

          <h3>年式別の価値減少率の目安</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">経過年数</th>
                  <th className="px-4 py-3 text-left font-medium">残存価値の目安</th>
                  <th className="px-4 py-3 text-left font-medium">コメント</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">1〜2年</td><td className="px-4 py-3 text-gold-dark font-bold">定価の40〜60%</td><td className="px-4 py-3 text-warm-gray">最も高く売れるタイミング</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">3〜4年</td><td className="px-4 py-3 text-gold-dark font-bold">定価の25〜40%</td><td className="px-4 py-3 text-warm-gray">まだ十分な価値あり</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">5〜7年</td><td className="px-4 py-3 text-gold-dark font-bold">定価の10〜25%</td><td className="px-4 py-3 text-warm-gray">早めの売却が吉</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">8〜10年</td><td className="px-4 py-3 text-gold-dark font-bold">定価の5〜15%</td><td className="px-4 py-3 text-warm-gray">上位モデルのみ値段がつく</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">10年以上</td><td className="px-4 py-3 text-gold-dark font-bold">0〜5%</td><td className="px-4 py-3 text-warm-gray">買取不可の場合も</td></tr>
              </tbody>
            </table>
          </div>

          <p>例えば、定価25万円のYAMAHA CLP-745（2021年発売）の場合:</p>
          <ul>
            <li>2023年に売却: 10万〜15万円（発売2年後）</li>
            <li>2025年に売却: 6万〜10万円（発売4年後）</li>
            <li>2028年に売却: 2.5万〜6万円（発売7年後）</li>
          </ul>

          <p><strong>使わなくなった電子ピアノは、1日でも早く売却することが最も高く売るコツです。</strong>迷っている間にも価値は下がり続けます。</p>

          <CtaBox />

          <h2 id="faq">電子ピアノ買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            {[
              { q: "電子ピアノの買取相場はいくらですか？", a: "メーカー・モデル・年式によって異なります。YAMAHA CLP-700シリーズで5万〜15万円、Roland HP700シリーズで5万〜12万円、KAWAI CAシリーズで5万〜18万円が目安です。製造5年以内のモデルが高く売れます。" },
              { q: "古い電子ピアノでも売れますか？", a: "製造10年以内であれば多くの業者で買取可能です。10年以上のモデルは技術的に古くなるため値段がつかないこともあります。上位モデル（YAMAHA CVP、Roland LX等）は古くても値段がつくことがあります。" },
              { q: "電子ピアノの搬出は大変ですか？", a: "多くの電子ピアノは組み立て式のため分解して搬出できます。出張買取ならスタッフが分解・搬出まで対応してくれるので安心です。" },
              { q: "電子ピアノは宅配買取できますか？", a: "ポータブルタイプ（YAMAHA Pシリーズ等）は宅配買取可能です。据え置き型は重量があるため出張買取の方が適しています。" },
              { q: "木製鍵盤と樹脂鍵盤で買取価格は変わりますか？", a: "はい、木製鍵盤モデルの方が高く売れます。アコースティックピアノに近いタッチ感があり中古市場でも人気が高いため、樹脂鍵盤モデルと比べて2〜5万円高い査定になることがあります。" },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-warm-border overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                  <span className="pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2>まとめ：電子ピアノは早く売るほど高く売れる</h2>

          <p>電子ピアノの買取で最も重要なのは<strong>スピード</strong>です。アコースティックピアノと違い、電子ピアノは年々価値が下がるため、使わなくなったら早めに売却しましょう。</p>

          <ul>
            <li><strong>価格を比較したい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナ（ポータブルなら宅配も可）</li>
            <li><strong>据え置き型を売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ピアノ買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">買取方法</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">買取方法比較ガイド</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

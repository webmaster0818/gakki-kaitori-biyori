import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】サックス買取おすすめ3社比較｜管楽器の相場・高く売るコツ",
  description:
    "サックス・管楽器買取のおすすめ業者3社を徹底比較。アルト・テナー・ソプラノサックスの買取相場、トランペット・トロンボーン・フルート・クラリネットの相場、Selmer・YAMAHA・Yanagisawaなどブランド別の相場目安まで解説。",
  openGraph: {
    title: "【2026年最新】サックス買取おすすめ3社比較｜管楽器の相場・高く売るコツ",
    description: "サックス・管楽器買取のおすすめ業者3社を徹底比較。種類別・ブランド別の買取相場から高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "サックス買取おすすめ", href: "/articles/saxophone-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたの管楽器の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "サックスの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "サックスの買取相場はブランド・種類・状態により異なります。アルトサックスではSelmer Series IIIが20万〜50万円、YAMAHA YAS-62が5万〜10万円が目安です。テナーサックスはアルトより1〜2割高い傾向にあります。" } },
      { "@type": "Question", name: "古いサックスでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、古いサックスでも買取可能です。特にSelmerのMark VIなどのヴィンテージモデルは、現行品より高額で取引されることもあります。タンポの状態やラッカーの残存率が査定に影響しますが、まずは査定に出してみることをおすすめします。" } },
      { "@type": "Question", name: "管楽器のメンテナンス状態は査定に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい、管楽器はメンテナンス状態が査定額に大きく影響します。特にタンポ（パッド）の劣化、キーの動作不良、ラッカーの剥がれは減額要因です。定期的にオーバーホールされた楽器は高評価を受けやすくなります。" } },
      { "@type": "Question", name: "マウスピースやリードだけでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "マウスピースは単体でも買取可能です。特にSelmerやVandoren、メイヤーなどの高級マウスピースは数千〜数万円の買取価格がつくことがあります。リードは消耗品のため買取対象外となることが多いです。" } },
      { "@type": "Question", name: "サックス買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】サックス買取おすすめ3社比較｜管楽器の相場・高く売るコツ",
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

export default function SaxophoneKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">サックス買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">管楽器</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】サックス買取おすすめ3社比較｜管楽器の相場・高く売るコツを徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            サックスや管楽器を売りたいけど、どの買取業者を選べばいいかわからない方へ。本記事では、サックス・管楽器買取の人気3サービスを徹底比較し、アルトサックス・テナーサックス・ソプラノサックス・バリトンサックスの買取相場に加え、トランペット・トロンボーン・フルート・クラリネットなど管楽器全般の相場、ブランド別の相場目安、メンテナンス状態が査定に与える影響、そして高く売るためのコツを詳しく解説します。管楽器は状態が査定額を大きく左右するため、適切な準備が重要です。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#sax-price" className="hover:underline">サックス買取相場（種類別）</a></li>
            <li><a href="#wind-price" className="hover:underline">管楽器全般の買取相場</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#brand-price" className="hover:underline">ブランド別買取相場</a></li>
            <li><a href="#flow" className="hover:underline">サックス買取の流れ</a></li>
            <li><a href="#tips" className="hover:underline">高く売るコツ（メンテナンス状態が重要）</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="sax-price">サックス買取相場（アルト・テナー・ソプラノ・バリトン別）</h2>

          <p>サックスの買取価格は、種類（アルト・テナー・ソプラノ・バリトン）、ブランド、モデル、そして何より<strong>メンテナンス状態</strong>によって大きく変わります。管楽器は弦楽器と異なり、タンポ（パッド）やキーの調整状態が直接演奏に影響するため、整備された楽器ほど高額査定が期待できます。</p>

          <h3>アルトサックスの買取相場</h3>

          <p>アルトサックスはサックスの中で最も流通量が多く、初心者からプロまで幅広い層に人気があります。中古市場でも需要が安定しており、特にYAMAHA・Selmer・Yanagisawaの3ブランドは高額買取が期待できます。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Selmer Series III</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜50万円</td><td className="px-4 py-3 text-warm-gray">プロ御用達の最高峰</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Selmer Series II (Mark II)</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td><td className="px-4 py-3 text-warm-gray">安定した人気</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Selmer Mark VI（ヴィンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">40万〜120万円</td><td className="px-4 py-3 text-warm-gray">伝説のヴィンテージ。状態により高騰</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YAS-875EX</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜20万円</td><td className="px-4 py-3 text-warm-gray">カスタムモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YAS-62</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">中上級者の定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YAS-480</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">中級者向け</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YAS-280</td><td className="px-4 py-3 text-gold-dark font-bold">1.5万〜4万円</td><td className="px-4 py-3 text-warm-gray">入門モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Yanagisawa A-WO1/A-WO2</td><td className="px-4 py-3 text-gold-dark font-bold">12万〜25万円</td><td className="px-4 py-3 text-warm-gray">日本製プロモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Jupiter JAS-700</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">台湾製入門モデル</td></tr>
              </tbody>
            </table>
          </div>

          <h3>テナーサックスの買取相場</h3>

          <p>テナーサックスはアルトサックスより一回り大きく、ジャズやポップスで重要な役割を担う楽器です。アルトと比較すると流通量がやや少ないため、<strong>同グレードの場合、アルトより1〜2割高い買取価格</strong>になる傾向があります。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Selmer Series III テナー</td><td className="px-4 py-3 text-gold-dark font-bold">25万〜55万円</td><td className="px-4 py-3 text-warm-gray">テナーの最高峰</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Selmer Mark VI テナー（ヴィンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜150万円</td><td className="px-4 py-3 text-warm-gray">コルトレーンが使用したモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YTS-875EX</td><td className="px-4 py-3 text-gold-dark font-bold">12万〜22万円</td><td className="px-4 py-3 text-warm-gray">カスタムモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YTS-62</td><td className="px-4 py-3 text-gold-dark font-bold">6万〜12万円</td><td className="px-4 py-3 text-warm-gray">信頼の定番</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Yanagisawa T-WO1/T-WO2</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜30万円</td><td className="px-4 py-3 text-warm-gray">日本の名門ブランド</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ソプラノサックス・バリトンサックスの買取相場</h3>

          <p>ソプラノサックスとバリトンサックスは流通量が少なく、特にバリトンサックスは高額な楽器であるため、買取価格も高くなる傾向があります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">種類・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YSS-875EX（ソプラノ）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜20万円</td><td className="px-4 py-3 text-warm-gray">カスタムソプラノ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Selmer Series III ソプラノ</td><td className="px-4 py-3 text-gold-dark font-bold">18万〜40万円</td><td className="px-4 py-3 text-warm-gray">最高級ソプラノ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YBS-62（バリトン）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜30万円</td><td className="px-4 py-3 text-warm-gray">バリトンの定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Selmer Series III バリトン</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜60万円</td><td className="px-4 py-3 text-warm-gray">最高級バリトン</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Yanagisawa B-WO1（バリトン）</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜40万円</td><td className="px-4 py-3 text-warm-gray">国産最高峰バリトン</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="wind-price">管楽器全般の買取相場（トランペット・トロンボーン・フルート・クラリネット）</h2>

          <p>サックス以外の管楽器も、ブランドやモデルによっては高額買取が期待できます。ここでは代表的な管楽器の買取相場をまとめます。</p>

          <h3>トランペットの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Bach Stradivarius 180ML37</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td><td className="px-4 py-3 text-warm-gray">プロ定番中の定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YTR-8335</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">Xenoシリーズ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YTR-4335GII</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">中級者定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Schilke B1/B5</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">アメリカの名門</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Jupiter JTR-700</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">入門モデル</td></tr>
              </tbody>
            </table>
          </div>

          <h3>トロンボーンの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Bach 42BO</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td><td className="px-4 py-3 text-warm-gray">テナーバスの定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YSL-882O</td><td className="px-4 py-3 text-gold-dark font-bold">6万〜14万円</td><td className="px-4 py-3 text-warm-gray">Xenoシリーズ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YSL-456G</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">中級モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">King 3B</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td><td className="px-4 py-3 text-warm-gray">ジャズ向け</td></tr>
              </tbody>
            </table>
          </div>

          <h3>フルートの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Muramatsu DS/SR</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td><td className="px-4 py-3 text-warm-gray">日本が誇る最高峰</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Altus A1107/A1307</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">手工モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YFL-517</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td><td className="px-4 py-3 text-warm-gray">フィネスシリーズ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YFL-212</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">入門モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Pearl PF-665（総銀製）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">コスパ良好な総銀</td></tr>
              </tbody>
            </table>
          </div>

          <h3>クラリネットの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Buffet Crampon R13</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td><td className="px-4 py-3 text-warm-gray">世界標準のプロモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Buffet Crampon Festival</td><td className="px-4 py-3 text-gold-dark font-bold">12万〜25万円</td><td className="px-4 py-3 text-warm-gray">最上位モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YCL-853II</td><td className="px-4 py-3 text-gold-dark font-bold">6万〜14万円</td><td className="px-4 py-3 text-warm-gray">カスタムSE</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YCL-450</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">中級モデル</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="comparison">サックス・管楽器買取おすすめ3社を徹底比較</h2>

          <p>管楽器の買取は、楽器の専門知識を持った査定士がいる業者を選ぶことが重要です。ここでは、管楽器の買取実績が豊富な3社を比較します。</p>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">管楽器対応</td><td className="px-4 py-3">全般対応</td><td className="px-4 py-3">全般対応</td><td className="px-4 py-3">全般対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">高額管楽器を売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">複数楽器をまとめて売りたい人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定で管楽器の最高値が見つかる</h3>

          <p>ヒカカク！は複数の買取業者に一括で査定依頼できるサービスです。管楽器は業者によって得意なブランドが異なるため、<strong>一括査定で複数業者を比較することが特に効果的</strong>です。SelmerのMark VIなど高額なヴィンテージサックスは、業者によって10万円以上の査定差がつくこともあります。</p>

          <h3>ティファナ ── 3つの方法から選べる総合買取</h3>

          <p>ティファナは出張・店頭・宅配の3方式に対応。管楽器はケースに入れてコンパクトに梱包できるため、宅配買取との相性が良い楽器です。フルートやクラリネットなど小型の管楽器は、宅配買取が最も手軽な選択肢です。</p>

          <h3>ウリエル ── 出張買取で自宅から売却</h3>

          <p>ウリエルは出張買取専門のサービスです。バリトンサックスやチューバなどの大型管楽器は運搬が大変なため、自宅まで来てくれる出張買取がおすすめです。複数の管楽器をまとめて売りたい場合（吹奏楽を引退して楽器一式を処分するケースなど）にも便利です。</p>

          <CtaBox />

          <h2 id="brand-price">主要ブランド別 サックス買取相場ガイド</h2>

          <h3>Selmer（セルマー）の買取相場</h3>

          <p>Selmer（Henri Selmer Paris）はサックスの王様と呼ばれるフランスのブランドです。特にMark VIは「サックスのストラディヴァリウス」と称される伝説のヴィンテージモデルで、状態が良ければ100万円を超える買取価格がつくこともあります。</p>

          <ul>
            <li><strong>Mark VI（アルト）</strong>: 40万〜120万円（年代・状態により大幅変動）</li>
            <li><strong>Mark VI（テナー）</strong>: 50万〜150万円</li>
            <li><strong>Series III（アルト）</strong>: 20万〜50万円</li>
            <li><strong>Series III（テナー）</strong>: 25万〜55万円</li>
            <li><strong>Series II（アルト）</strong>: 15万〜40万円</li>
            <li><strong>Reference 54</strong>: 20万〜45万円</li>
          </ul>

          <p>Selmerのサックスは<strong>シリアルナンバーで製造年が特定できる</strong>ため、査定前に確認しておきましょう。特にMark VIは1954〜1981年の製造年によって価格が大きく変わります。</p>

          <h3>YAMAHA（ヤマハ）の買取相場</h3>

          <p>YAMAHAはサックスから金管楽器まで幅広くラインナップする日本の総合楽器メーカーです。品質が安定しており、入門モデルからプロモデルまで中古市場で安定した需要があります。</p>

          <ul>
            <li><strong>YAS-875EX（カスタムEX アルト）</strong>: 10万〜20万円</li>
            <li><strong>YAS-62（アルト）</strong>: 5万〜10万円</li>
            <li><strong>YAS-480（アルト）</strong>: 3万〜7万円</li>
            <li><strong>YAS-280（アルト）</strong>: 1.5万〜4万円</li>
            <li><strong>YTS-875EX（テナー）</strong>: 12万〜22万円</li>
            <li><strong>YTS-62（テナー）</strong>: 6万〜12万円</li>
          </ul>

          <h3>Yanagisawa（ヤナギサワ）の買取相場</h3>

          <p>Yanagisawaはサックス専業の日本メーカーで、職人の手作業による高品質なサックスで知られています。プロ奏者からの評価が非常に高く、中古市場でも安定した高値が期待できます。</p>

          <ul>
            <li><strong>A-WO1（アルト・ブロンズ管体）</strong>: 12万〜25万円</li>
            <li><strong>A-WO2（アルト・シルバー管体）</strong>: 15万〜30万円</li>
            <li><strong>T-WO1（テナー）</strong>: 15万〜30万円</li>
            <li><strong>A-992（旧モデル）</strong>: 8万〜18万円</li>
            <li><strong>SC-WO10（ソプラノ・カーブド）</strong>: 12万〜25万円</li>
          </ul>

          <h3>Jupiter（ジュピター）の買取相場</h3>

          <p>Jupiterは台湾の楽器メーカーで、手頃な価格帯の管楽器を多数ラインナップしています。学校の吹奏楽部などで使用されることが多く、入門モデルとしての需要があります。</p>

          <ul>
            <li><strong>JAS-700（アルトサックス）</strong>: 1万〜3万円</li>
            <li><strong>JTS-700（テナーサックス）</strong>: 1.5万〜4万円</li>
            <li><strong>JTR-700（トランペット）</strong>: 1万〜3万円</li>
            <li><strong>JFL-700（フルート）</strong>: 5,000〜2万円</li>
          </ul>

          <CtaBox />

          {/* 買取の流れ */}
          <h2 id="flow">サックス・管楽器 買取の流れ</h2>

          <p>サックスや管楽器は精密機器のため、適切な方法で査定に出すことが重要です。一般的な買取の流れを確認しましょう。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">メーカー・型番・シリアルを確認</h3><p className="text-sm text-warm-gray">ベルやネック裏に刻印されているメーカー名・モデル名・シリアルナンバーを確認。セルマーの場合、シリアルで製造年がわかり査定に大きく影響します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">一括査定で複数社比較</h3><p className="text-sm text-warm-gray">ヒカカク！で一括査定すれば、管楽器に強い業者から複数の見積もりが届きます。業者によって数万円の差が出ることもあります。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">本査定（実物確認）</h3><p className="text-sm text-warm-gray">宅配の場合はケースごと梱包して発送。出張買取ならウリエルが自宅まで来てくれます。キーの動作、パッドの状態、管体の凹みなどを確認します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h3 className="font-bold text-sm mb-1">買取成立・支払い</h3><p className="text-sm text-warm-gray">査定額に同意すれば買取成立。出張・店頭ならその場で現金、宅配なら振込で支払われます。キャンセルも完全無料です。</p></div>
            </div>
          </div>

          <CtaBox />

          <h2 id="tips">サックス・管楽器を高く売るためのコツ</h2>

          <p>管楽器の買取価格は、弦楽器以上に<strong>メンテナンス状態が査定額を左右</strong>します。以下のポイントを押さえて、少しでも高く売却しましょう。</p>

          <h3>コツ1: タンポ（パッド）の状態を確認する</h3>

          <p>管楽器の査定で最も重視されるのがタンポの状態です。タンポが劣化していると音漏れの原因となり、全交換が必要な場合は数万円の修理費がかかるため、その分が買取額から差し引かれます。</p>

          <ul>
            <li>タンポにカビや変色がないか確認</li>
            <li>キーを押したときに密閉されるか（光漏れテスト）</li>
            <li>最近オーバーホールした記録があれば有利</li>
          </ul>

          <p>もしオーバーホール済みの楽器であれば、<strong>オーバーホール証明書や修理明細</strong>を一緒に提出すると大幅に査定額がアップします。</p>

          <h3>コツ2: 付属品・マウスピースを揃える</h3>

          <ul>
            <li><strong>純正ケース</strong>: 特にSelmerの純正ケースは高評価</li>
            <li><strong>マウスピース</strong>: 純正マウスピース＋別売り高級マウスピースがあれば両方提出</li>
            <li><strong>リガチャー</strong>: BG、Rovner等の高品質品は加点対象</li>
            <li><strong>ネックストラップ</strong>: ブランドものであればプラス</li>
            <li><strong>クリーニング用品</strong>: スワブ・クロス等</li>
          </ul>

          <h3>コツ3: 外装のクリーニングで印象アップ</h3>

          <ul>
            <li><strong>ラッカー仕上げ</strong>: 専用ポリッシュで磨く（研磨剤入りは使用注意）</li>
            <li><strong>銀メッキ仕上げ</strong>: シルバーポリッシュで変色を除去</li>
            <li><strong>キー・ロッド</strong>: 汚れや指紋を拭き取る</li>
            <li><strong>管内</strong>: スワブで清掃し、水分を除去</li>
          </ul>

          <p>管楽器のラッカーの状態は査定に大きく影響します。ラッカーが大幅に剥がれている場合は減額要因となりますが、<strong>無理に研磨して傷をつけるより、そのままの状態で査定に出す方が安全</strong>です。</p>

          <h3>コツ4: 複数業者に査定依頼する</h3>

          <p>管楽器は業者によって得意ブランドが異なるため、査定額に大きな差が出やすいカテゴリです。ヒカカク！の一括査定を利用して、最低3社以上の見積もりを比較しましょう。</p>

          <CtaBox />

          <h2 id="faq">サックス・管楽器買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">サックスの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                サックスの買取相場はブランド・種類・状態により異なります。アルトサックスではSelmer Series IIIが20万〜50万円、YAMAHA YAS-62が5万〜10万円が目安です。ヴィンテージのSelmer Mark VIは40万〜120万円以上の高額買取も。テナーサックスはアルトより1〜2割高い傾向にあります。正確な金額は複数業者に査定依頼して比較しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">古いサックスでも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、古いサックスでも買取可能です。むしろSelmerのMark VIなどヴィンテージモデルは、現行品より高額で取引されることがあります。タンポの状態やラッカーの残存率が査定に影響しますが、歴史的価値のあるモデルは状態が多少悪くても高値がつくことがあります。まずは査定に出してみましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">管楽器のメンテナンス状態は査定に影響しますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、管楽器はメンテナンス状態が査定額に非常に大きく影響します。特にタンポ（パッド）の劣化、キーの動作不良、ラッカーの剥がれは主要な減額要因です。定期的にオーバーホールされた楽器や、オーバーホール証明書がある楽器は高評価を受けやすくなります。オーバーホール費用（3〜10万円程度）を差し引いた分が買取額から引かれるためです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">マウスピースやリードだけでも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                マウスピースは単体でも買取可能です。特にSelmer、Vandoren、メイヤー、オットーリンクなどの高級マウスピースは数千〜数万円の買取価格がつくことがあります。ヴィンテージのマウスピースはさらに高額になることも。リードは消耗品のため買取対象外となることが多いです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">サックス・管楽器の買取にかかる費用はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。完全無料で利用できるので、気軽に査定を申し込んでみてください。
              </div>
            </details>
          </div>

          <h2>まとめ：サックス・管楽器は状態と業者選びで買取額が大きく変わる</h2>

          <p>サックスや管楽器の買取は、<strong>メンテナンス状態と業者選び</strong>が買取額を大きく左右します。特にSelmerやYanagisawaなどの高級ブランドは、業者によって10万円以上の査定差がつくこともあるため、必ず複数業者で比較しましょう。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>大型管楽器・複数楽器を売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定前にタンポの状態確認と外装のクリーニングを行い、付属品を揃えてから査定に出すことで、買取額のアップが期待できます。査定は完全無料なので、まずは気軽に試してみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/violin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">バイオリン買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">バイオリン買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/souba-ichiran/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">相場一覧</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取相場一覧まとめ</h3>
            </Link>
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">売却ガイド</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

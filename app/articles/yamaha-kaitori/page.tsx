import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】YAMAHA(ヤマハ)楽器買取相場・おすすめ業者3選｜ピアノ・ギター・管楽器",
  description:
    "YAMAHA(ヤマハ)楽器の買取相場を徹底解説。ピアノ・ギター・管楽器・電子ピアノなど楽器別の買取価格目安、人気シリーズ別の相場、高く売るコツまで。おすすめ買取業者3社比較で最高値がわかります。",
  openGraph: {
    title: "【2026年最新】YAMAHA(ヤマハ)楽器買取相場・おすすめ業者3選",
    description: "ヤマハ楽器の買取相場をピアノ・ギター・管楽器別に解説。人気シリーズの相場と高く売るコツ。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "YAMAHA楽器買取", href: "/articles/yamaha-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのYAMAHA楽器の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "YAMAHAピアノの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "YAMAHAピアノの買取相場は、アップライトピアノのUシリーズが3万〜35万円、YUシリーズが10万〜50万円、グランドピアノのCシリーズが30万〜150万円が目安です。年式・状態・型番により大きく変動します。" } },
      { "@type": "Question", name: "YAMAHAギターの買取相場はどのくらい？", acceptedAnswer: { "@type": "Answer", text: "YAMAHAギターの買取相場は、アコースティックギターのLシリーズが2万〜12万円、FGシリーズが3,000〜2万円、エレキギターのPacificaが5,000〜3万円、REVSTARが2万〜6万円が目安です。上位モデルほど高額になります。" } },
      { "@type": "Question", name: "YAMAHA管楽器の買取相場は？", acceptedAnswer: { "@type": "Answer", text: "YAMAHA管楽器の買取相場は、アルトサックスYAS-62が3万〜8万円、テナーサックスYTS-62が4万〜10万円、トランペットYTR-8335が3万〜7万円、フルートYFL-311が1万〜3万円が目安です。Customシリーズはさらに高額です。" } },
      { "@type": "Question", name: "古いYAMAHA楽器でも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、YAMAHAは信頼性が高いブランドのため、古い楽器でも買取可能な場合が多いです。特にアコースティックギターのL系やピアノのUシリーズは、年代物でも需要があります。状態によっては値段がつかない場合もありますが、まずは査定に出してみることをおすすめします。" } },
      { "@type": "Question", name: "YAMAHA楽器を最も高く売るには？", acceptedAnswer: { "@type": "Answer", text: "YAMAHA楽器を高く売るには、(1)ヒカカク！で複数業者に一括査定する、(2)純正ケース・マウスピース・付属品を揃える、(3)楽器をクリーニングする、(4)ピアノの場合は調律してから査定に出す、の4つがポイントです。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】YAMAHA(ヤマハ)楽器買取相場・おすすめ業者3選",
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

export default function YamahaKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">YAMAHA買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】YAMAHA(ヤマハ)楽器買取相場・おすすめ業者3選｜ピアノ・ギター・管楽器
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            YAMAHA(ヤマハ)の楽器を売りたい方へ。本記事では、ピアノ・ギター・管楽器・電子ピアノ・ドラムなどYAMAHA製品の買取相場をジャンル別・シリーズ別に徹底解説。おすすめ買取業者3社の比較や、高く売るためのコツまで網羅しています。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#piano" className="hover:underline">YAMAHAピアノの買取相場</a></li>
            <li><a href="#guitar" className="hover:underline">YAMAHAギターの買取相場</a></li>
            <li><a href="#wind" className="hover:underline">YAMAHA管楽器の買取相場</a></li>
            <li><a href="#other" className="hover:underline">電子ピアノ・ドラム・キーボードの相場</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ買取業者3社比較</a></li>
            <li><a href="#tips" className="hover:underline">YAMAHA楽器を高く売るコツ</a></li>
            <li><a href="#flow" className="hover:underline">YAMAHA楽器買取の流れ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="piano">YAMAHAピアノの買取相場</h2>

          <p>YAMAHA(ヤマハ)は日本最大の楽器メーカーであり、特にピアノは国内シェアNo.1を誇ります。中古市場でも「YAMAHAのピアノ」は安定した需要があり、<strong>型番によっては購入価格の30〜50%で買取されるケースもあります</strong>。</p>

          <h3>アップライトピアノの買取相場</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">シリーズ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YUS / YUS5</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜50万円</td><td className="px-4 py-3 text-warm-gray">現行上位モデル。高額買取</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YU11 / YU33</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜40万円</td><td className="px-4 py-3 text-warm-gray">現行スタンダードモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">U1 / U3シリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜20万円</td><td className="px-4 py-3 text-warm-gray">定番中の定番。年式で変動</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">UX / UX3</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜25万円</td><td className="px-4 py-3 text-warm-gray">X支柱搭載の高音質モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YMシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜25万円</td><td className="px-4 py-3 text-warm-gray">初心者向けモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">b113 / b121</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">bシリーズ（インドネシア製）</td></tr>
              </tbody>
            </table>
          </div>

          <h3>グランドピアノの買取相場</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">シリーズ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">CFX</td><td className="px-4 py-3 text-gold-dark font-bold">300万〜800万円</td><td className="px-4 py-3 text-warm-gray">コンサートグランド最高峰</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Sシリーズ (S4/S6)</td><td className="px-4 py-3 text-gold-dark font-bold">80万〜250万円</td><td className="px-4 py-3 text-warm-gray">プレミアムモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Cシリーズ (C3/C5/C7)</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜150万円</td><td className="px-4 py-3 text-warm-gray">最も売れ筋のグランド</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜200万円</td><td className="px-4 py-3 text-warm-gray">Cシリーズの後継</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Gシリーズ (G3/G5)</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜60万円</td><td className="px-4 py-3 text-warm-gray">旧モデル。状態次第で高額</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">GBシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜40万円</td><td className="px-4 py-3 text-warm-gray">コンパクトグランド</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="guitar">YAMAHAギターの買取相場</h2>

          <h3>アコースティックギター</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">シリーズ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Lシリーズ (L6/L16/L26/L36)</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜12万円</td><td className="px-4 py-3 text-warm-gray">ヤマハアコギの最高峰ライン</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">LLシリーズ (LL6/LL16/LL26/LL36)</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td><td className="px-4 py-3 text-warm-gray">ジャンボボディ。迫力サウンド</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">FG / FSシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜2万円</td><td className="px-4 py-3 text-warm-gray">エントリーモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">APXシリーズ（エレアコ）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">薄型ボディのエレアコ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">CPXシリーズ（エレアコ）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">ミディアムジャンボのエレアコ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Aシリーズ (A3/A5)</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜6万円</td><td className="px-4 py-3 text-warm-gray">SRT2ピックアップ搭載</td></tr>
              </tbody>
            </table>
          </div>

          <h3>エレキギター</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">シリーズ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">REVSTARシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜6万円</td><td className="px-4 py-3 text-warm-gray">ヤマハ最新のエレキライン</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Pacificaシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td><td className="px-4 py-3 text-warm-gray">初心者定番。612V IIは高額</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">SG / SAシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">セミホロウ/ソリッド</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">RGXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜2万円</td><td className="px-4 py-3 text-warm-gray">ロック向けモデル</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="wind">YAMAHA管楽器の買取相場</h2>

          <p>YAMAHA管楽器は学校の吹奏楽部からプロまで幅広く使われており、中古市場でも安定した需要があります。特に<strong>Customシリーズや62シリーズは高額買取</strong>が期待できます。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">楽器</th>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">アルトサックス</td><td className="px-4 py-3">YAS-62</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">アルトサックス</td><td className="px-4 py-3">YAS-875EX (Custom)</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">テナーサックス</td><td className="px-4 py-3">YTS-62</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜10万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">テナーサックス</td><td className="px-4 py-3">YTS-82Z (Custom Z)</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">トランペット</td><td className="px-4 py-3">YTR-8335 (Xeno)</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">トランペット</td><td className="px-4 py-3">YTR-4335G II</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">フルート</td><td className="px-4 py-3">YFL-311 / 411</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">フルート</td><td className="px-4 py-3">YFL-517 / 617</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">クラリネット</td><td className="px-4 py-3">YCL-450 / 650</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">クラリネット</td><td className="px-4 py-3">YCL-853II (Custom)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="other">電子ピアノ・ドラム・キーボードの買取相場</h2>

          <h3>電子ピアノ</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">シリーズ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Clavinova CLP</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜15万円</td><td className="px-4 py-3 text-warm-gray">ヤマハ電子ピアノの主力</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Clavinova CVP</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜20万円</td><td className="px-4 py-3 text-warm-gray">多機能上位モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">ARIUS (YDP)</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜5万円</td><td className="px-4 py-3 text-warm-gray">エントリーモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">P-125 / P-225</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">ポータブルタイプ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">AvantGrand</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜80万円</td><td className="px-4 py-3 text-warm-gray">ハイブリッドピアノ最高峰</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ドラム・キーボード・シンセサイザー</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">カテゴリ</th>
                  <th className="px-4 py-3 text-left font-medium">モデル例</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">電子ドラム</td><td className="px-4 py-3">DTX6 / DTX10</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">電子ドラム</td><td className="px-4 py-3">DTX402 / DTX432</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">シンセサイザー</td><td className="px-4 py-3">MONTAGE / MODX</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜25万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">シンセサイザー</td><td className="px-4 py-3">MOTIF XF / XS</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜12万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">ステージピアノ</td><td className="px-4 py-3">CP88 / CP73</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="comparison">YAMAHA楽器買取おすすめ3社を徹底比較</h2>

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
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">ピアノ対応</td><td className="px-4 py-3">対応（運搬手配も）</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応（出張で搬出）</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">大型楽器も出張対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">ピアノ・大型楽器を売る人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定でYAMAHA楽器の最高値を発見</h3>
          <p>YAMAHAはラインナップが広いため、楽器ジャンルごとに得意な業者が異なります。ヒカカク！で一括査定すれば、<strong>ピアノ専門、ギター専門など各ジャンルの専門業者の査定を一度に比較</strong>できます。</p>

          <h3>ティファナ ── エントリーモデルも気軽に査定</h3>
          <p>ティファナは幅広いジャンルに対応しており、YAMAHAのエントリーモデル（FGシリーズ、Pacificaなど）も<strong>気軽に査定依頼できます</strong>。店頭に持ち込めば、その場で査定・現金化も可能です。</p>

          <h3>ウリエル ── ピアノやドラムの出張買取に最適</h3>
          <p>ピアノやドラムセットなど大型のYAMAHA楽器は、ウリエルの出張買取が最適です。<strong>搬出作業も査定士が対応してくれる</strong>ため、自分で運ぶ必要がありません。</p>

          <CtaBox />

          <h2 id="tips">YAMAHA楽器を高く売るためのコツ</h2>

          <h3>コツ1: 型番を正確に把握する</h3>
          <p>YAMAHAは型番が多く、一桁違うだけで買取価格が大きく変わります。<strong>楽器本体やケースに記載されている型番を正確に確認</strong>してから査定に出しましょう。</p>

          <h3>コツ2: 付属品を揃える</h3>
          <ul>
            <li><strong>ピアノ</strong>: 椅子・取扱説明書・保証書</li>
            <li><strong>ギター</strong>: 純正ケース・六角レンチ・カポタスト</li>
            <li><strong>管楽器</strong>: 純正ケース・マウスピース・リード・スワブ</li>
            <li><strong>電子ピアノ</strong>: 電源アダプター・ペダル・譜面台</li>
          </ul>

          <h3>コツ3: クリーニングとメンテナンス</h3>
          <ul>
            <li><strong>ピアノ</strong>: 査定前に調律してもらうと印象アップ（費用対効果は要検討）</li>
            <li><strong>ギター</strong>: 弦交換・ボディ磨き・フレットボード保湿</li>
            <li><strong>管楽器</strong>: 水洗い・バルブオイル注油・タンポの状態確認</li>
          </ul>

          <h3>コツ4: 複数社に査定を依頼する</h3>
          <p>ヒカカク！で一括査定し、<strong>最低3社の見積もりを比較</strong>することで最高値を見つけられます。特にピアノは業者間で10万円以上の差がつくことがあります。</p>

          <CtaBox />

          {/* 買取の流れ */}
          <h2 id="flow">YAMAHA楽器買取の流れ</h2>

          <p>YAMAHA楽器はジャンルが幅広いため、楽器の種類に合った買取方法を選ぶことがポイントです。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">型番の確認</h3><p className="text-sm text-warm-gray">YAMAHA製品は型番で正確な相場がわかります。ピアノなら内部のフレーム、ギターなら内部のラベル、管楽器ならベル部分で型番を確認しましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">一括査定で複数社比較</h3><p className="text-sm text-warm-gray">ヒカカク！で一括査定。YAMAHA楽器は総合買取店でも扱っているため、楽器専門店と総合店の両方から見積もりを取るのが効果的です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">楽器に合った買取方法を選択</h3><p className="text-sm text-warm-gray">ピアノ・ドラム → 出張買取（ウリエル）。ギター・管楽器 → 宅配買取も可。複数のYAMAHA楽器をまとめて売る場合は出張買取がお得です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h3 className="font-bold text-sm mb-1">買取成立・支払い</h3><p className="text-sm text-warm-gray">実物確認後、正式な買取額を提示。YAMAHA楽器は中古需要が安定しているため、適正な査定額が出やすい傾向があります。</p></div>
            </div>
          </div>

          <CtaBox />

          <h2 id="faq">YAMAHA楽器買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">YAMAHAピアノの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                YAMAHAピアノの買取相場は、アップライトピアノのUシリーズが3万〜35万円、YUシリーズが10万〜50万円、グランドピアノのCシリーズが30万〜150万円が目安です。年式・状態・型番により大きく変動します。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">YAMAHAギターの買取相場はどのくらい？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                YAMAHAギターの買取相場は、アコースティックギターのLシリーズが2万〜12万円、FGシリーズが3,000〜2万円、エレキギターのPacificaが5,000〜3万円、REVSTARが2万〜6万円が目安です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">YAMAHA管楽器の買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                YAMAHA管楽器の買取相場は、アルトサックスYAS-62が3万〜8万円、テナーサックスYTS-62が4万〜10万円、トランペットYTR-8335が3万〜7万円、フルートYFL-311が1万〜3万円が目安です。Customシリーズはさらに高額です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">古いYAMAHA楽器でも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、YAMAHAは信頼性が高いブランドのため、古い楽器でも買取可能な場合が多いです。特にアコースティックギターのL系やピアノのUシリーズは、年代物でも需要があります。まずは査定に出してみることをおすすめします。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">YAMAHA楽器を最も高く売るには？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                YAMAHA楽器を高く売るには、(1)ヒカカク！で複数業者に一括査定する、(2)純正ケース・マウスピース・付属品を揃える、(3)楽器をクリーニングする、(4)ピアノの場合は調律してから査定に出す、の4つがポイントです。
              </div>
            </details>
          </div>

          <h2>まとめ：YAMAHA楽器は型番確認と複数社比較が重要</h2>

          <p>YAMAHAは日本が誇る世界的楽器メーカーであり、中古市場でも安定した需要があります。ただし、型番によって買取価格が大きく異なるため、<strong>正確な型番を把握し、複数社に査定を依頼すること</strong>が高額売却の鍵です。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで店頭/宅配買取</li>
            <li><strong>ピアノ・大型楽器を売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料なので、まずは気軽に試してみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ピアノ買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/saxophone-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">サックス買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">サックス買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/denshi-piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">電子ピアノ</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">電子ピアノ買取おすすめ3社比較</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

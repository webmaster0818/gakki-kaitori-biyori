import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】ドラム買取おすすめ3社比較｜相場・高く売るコツ",
  description:
    "ドラム買取のおすすめ業者3社を徹底比較。アコースティックドラム・電子ドラム・シンバル単品の買取相場、Pearl・TAMA・DW・Roland・YAMAHAなどブランド別の相場目安、出張買取がおすすめな理由まで解説。",
  openGraph: {
    title: "【2026年最新】ドラム買取おすすめ3社比較｜相場・高く売るコツ",
    description: "ドラム買取のおすすめ業者3社を徹底比較。ドラムセット・電子ドラムの買取相場からブランド別相場、高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ドラム買取おすすめ", href: "/articles/drum-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのドラムの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "ドラムセットの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "ドラムセットの買取相場はブランド・グレードにより異なります。Pearl Export Seriesで2万〜5万円、TAMA Superstで5万〜15万円、DW Collectorで10万〜30万円が目安です。電子ドラムはRoland TD-50で10万〜20万円、TD-17で3万〜6万円程度です。" } },
      { "@type": "Question", name: "ドラムセットは持ち運びが大変ですが、どうやって売ればいいですか？", acceptedAnswer: { "@type": "Answer", text: "ドラムセットは大型で重いため、出張買取の利用がおすすめです。ウリエルなどの出張買取サービスなら、自宅まで来てくれるので運搬の心配がありません。バラバラに分解して宅配で送る方法もありますが、梱包が大変なため出張買取が最も手軽です。" } },
      { "@type": "Question", name: "シンバルやスネア単品でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、シンバルやスネアドラムは単品でも買取可能です。特にZildjian KシリーズやSABIAN HHXなどの高級シンバルは、単品で1万〜5万円の買取価格がつくことがあります。スネアドラムもLudwig、DWなどのブランド品は単品で高額買取が期待できます。" } },
      { "@type": "Question", name: "電子ドラムの買取相場はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "電子ドラムの買取相場はモデルにより異なります。Roland TD-50シリーズで10万〜20万円、TD-27で5万〜10万円、TD-17で3万〜6万円が目安です。YAMAHA DTXシリーズはDTX6で3万〜7万円程度です。モジュール（音源）の状態が特に重要です。" } },
      { "@type": "Question", name: "ドラム買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ドラム買取おすすめ3社比較｜相場・高く売るコツ",
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

export default function DrumKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ドラム買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】ドラム買取おすすめ3社比較｜相場・高く売るコツを徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            ドラムセットや電子ドラムを売りたいけど、大きくて持ち運びが大変、どこに売ればいいかわからないという方へ。本記事では、ドラム買取の人気3サービスを徹底比較し、アコースティックドラム・電子ドラム・シンバル単品の買取相場、Pearl・TAMA・DW・Roland・YAMAHAなどブランド別の相場目安、パーツ単品での売却可否、そして出張買取がおすすめな理由を詳しく解説します。ドラムは楽器の中でも特に大型で重いため、売却方法の選び方が重要です。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月16日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#acoustic-price" className="hover:underline">アコースティックドラムの買取相場</a></li>
            <li><a href="#electronic-price" className="hover:underline">電子ドラムの買取相場</a></li>
            <li><a href="#parts-price" className="hover:underline">シンバル・スネア単品の買取相場</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#brand-price" className="hover:underline">ブランド別買取相場</a></li>
            <li><a href="#delivery" className="hover:underline">出張買取がおすすめな理由</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="acoustic-price">アコースティックドラムの買取相場</h2>

          <p>アコースティックドラム（生ドラム）の買取価格は、ブランド・シリーズ・シェル材・状態によって大きく異なります。ドラムはセットで売る場合と単品で売る場合で価格が変わるため、お手持ちのドラムの構成を確認しておきましょう。</p>

          <h3>ドラムセット（シェルキット）の買取相場</h3>

          <p>ドラムセットはバスドラム・タム・フロアタムのシェル（太鼓本体）のセットです。スネアドラムやシンバル、ハードウェアは別途査定されることが多いです。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">DW Collector&apos;s Series</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜30万円</td><td className="px-4 py-3 text-warm-gray">最高級ブランド。カスタムオーダー品</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">DW Performance Series</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">DWの中級ライン</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">TAMA Starclassic</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td><td className="px-4 py-3 text-warm-gray">メイプル/バーチ/ウォルナット</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">TAMA Superstar Classic</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td><td className="px-4 py-3 text-warm-gray">中級定番</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Pearl Masters Maple</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">プロ仕様メイプル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Pearl Export Series</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">世界で最も売れたドラム</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA Recording Custom</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">スタジオ定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA Stage Custom Birch</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">コスパ最強の定番</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Ludwig Classic Maple</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">ロックの定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Gretsch Renown</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜12万円</td><td className="px-4 py-3 text-warm-gray">ジャズ〜ポップスに人気</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="electronic-price">電子ドラムの買取相場</h2>

          <p>電子ドラムは自宅練習用として人気が高く、中古市場でも安定した需要があります。特にRolandのVドラムシリーズは高い人気を誇り、上位モデルは高額買取が期待できます。電子ドラムは<strong>モジュール（音源）の世代が査定額に大きく影響</strong>します。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Roland TD-50K2 / TD-50X</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜20万円</td><td className="px-4 py-3 text-warm-gray">フラッグシップモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland TD-27KV2</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">中上級モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland TD-17KVX2</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">人気の中級モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland TD-07KV</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜4万円</td><td className="px-4 py-3 text-warm-gray">入門〜中級</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland TD-1K/TD-1DMK</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜2.5万円</td><td className="px-4 py-3 text-warm-gray">エントリーモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA DTX6K3-X</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">リアルな打感が特徴</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA DTX402K</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜2.5万円</td><td className="px-4 py-3 text-warm-gray">入門モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">ALESIS Nitro Mesh Kit</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜2万円</td><td className="px-4 py-3 text-warm-gray">コスパ重視の入門機</td></tr>
              </tbody>
            </table>
          </div>

          <p>電子ドラムを売る際は、<strong>全パッド・ケーブル・電源アダプター・専用スタンドが揃っているか</strong>を確認しましょう。パッドが1つ欠けているだけでも大幅な減額になることがあります。</p>

          <h2 id="parts-price">シンバル・スネア単品の買取相場</h2>

          <p>ドラムはセットで売るだけでなく、<strong>パーツ単品でも買取可能</strong>です。特にシンバルとスネアドラムは単品でも需要が高く、ブランド品は高額買取が期待できます。</p>

          <h3>シンバルの買取相場</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ブランド・シリーズ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場（1枚）</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Zildjian K Custom</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td><td className="px-4 py-3 text-warm-gray">ダーク系の定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Zildjian A Custom</td><td className="px-4 py-3 text-gold-dark font-bold">8,000〜2.5万円</td><td className="px-4 py-3 text-warm-gray">ブライト系の定番</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">SABIAN HHX</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3.5万円</td><td className="px-4 py-3 text-warm-gray">プロ向けハンドハンマー</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">SABIAN AAX</td><td className="px-4 py-3 text-gold-dark font-bold">8,000〜2.5万円</td><td className="px-4 py-3 text-warm-gray">明るくカットのあるサウンド</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Meinl Byzance</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td><td className="px-4 py-3 text-warm-gray">トルコ製ハンドメイド</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Paiste 2002</td><td className="px-4 py-3 text-gold-dark font-bold">8,000〜3万円</td><td className="px-4 py-3 text-warm-gray">スイス製の名作</td></tr>
              </tbody>
            </table>
          </div>

          <h3>スネアドラムの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Ludwig LM400 Supraphonic</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜6万円</td><td className="px-4 py-3 text-warm-gray">世界で最も有名なスネア</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">DW Collector&apos;s スネア</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td><td className="px-4 py-3 text-warm-gray">カスタムメイド</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Pearl Sensitone</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜3万円</td><td className="px-4 py-3 text-warm-gray">さまざまな素材</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">TAMA S.L.P.</td><td className="px-4 py-3 text-gold-dark font-bold">1.5万〜4万円</td><td className="px-4 py-3 text-warm-gray">多彩なラインナップ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA Recording Custom スネア</td><td className="px-4 py-3 text-gold-dark font-bold">1.5万〜4万円</td><td className="px-4 py-3 text-warm-gray">スタジオ定番</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="comparison">ドラム買取おすすめ3社を徹底比較</h2>

          <p>ドラムは大型で重い楽器のため、<strong>買取方法の選び方が特に重要</strong>です。ここでは、ドラム買取に強い3社を比較します。</p>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ドラム対応</td><td className="px-4 py-3">生ドラム/電子ドラム</td><td className="px-4 py-3">生ドラム/電子ドラム</td><td className="px-4 py-3">生ドラム/電子ドラム</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">運搬不要で楽</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">高額ドラムの最高値を知りたい人</td><td className="px-4 py-3">電子ドラムを宅配で売りたい人</td><td className="px-4 py-3">ドラムセットを自宅から売りたい人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定でドラムの最高値が見つかる</h3>

          <p>ヒカカク！では複数の買取業者に一括で査定依頼ができます。DW CollectorやTAMA Starclassicなどの高額ドラムは、業者によって数万円の差が出ることがあるため、<strong>一括査定で比較するメリットが大きい</strong>です。</p>

          <h3>ティファナ ── 電子ドラムの宅配買取にも対応</h3>

          <p>ティファナは出張・店頭・宅配の3方式に対応。電子ドラムはアコースティックドラムに比べて軽量でコンパクトに梱包できるため、宅配買取でも問題なく対応できます。Roland TD-17やYAMAHA DTX402Kなど、中型の電子ドラムは宅配買取が手軽です。</p>

          <h3>ウリエル ── 大型ドラムセットの出張買取に最適</h3>

          <p>ウリエルの出張買取は、<strong>アコースティックドラムセットの売却に最も適した方法</strong>です。バスドラム、タム、フロアタム、シンバルスタンド、ハードウェアなど大量のパーツを自分で運搬する必要がなく、自宅で査定から買取まで完結します。シンバルやスネアなど単品でも、セットでまとめても対応可能です。</p>

          <CtaBox />

          <h2 id="brand-price">主要ブランド別 ドラム買取相場ガイド</h2>

          <h3>Pearl（パール）の買取相場</h3>

          <p>Pearlは日本が誇る世界最大級のドラムメーカーです。Export Seriesは世界で最も売れたドラムセットとして知られ、中古市場でも常に安定した需要があります。上位のMasters MapleやReference Pureは高額買取が期待できます。</p>

          <ul>
            <li><strong>Reference Pure</strong>: 8万〜20万円</li>
            <li><strong>Masters Maple Complete</strong>: 5万〜15万円</li>
            <li><strong>Session Studio Select</strong>: 3万〜8万円</li>
            <li><strong>Export Series</strong>: 2万〜5万円</li>
            <li><strong>Roadshow</strong>: 1万〜2.5万円</li>
          </ul>

          <h3>TAMA（タマ）の買取相場</h3>

          <p>TAMAは星野楽器が展開するドラムブランドで、メタル系を中心に世界中のドラマーに愛用されています。StarclassicシリーズはPearlのMastersと並ぶプロ仕様の定番です。</p>

          <ul>
            <li><strong>Star Walnut/Bubinga</strong>: 8万〜20万円</li>
            <li><strong>Starclassic Maple/Birch</strong>: 5万〜18万円</li>
            <li><strong>Superstar Classic</strong>: 3万〜8万円</li>
            <li><strong>Imperialstar</strong>: 1.5万〜4万円</li>
          </ul>

          <h3>DW（ディーダブリュー）の買取相場</h3>

          <p>DW（Drum Workshop）はアメリカの高級ドラムブランドで、カスタムオーダーのCollector&apos;s Seriesは最高峰のドラムとして世界中のプロドラマーに支持されています。中古でも高い人気を維持しています。</p>

          <ul>
            <li><strong>Collector&apos;s Series（カスタム）</strong>: 10万〜30万円</li>
            <li><strong>Performance Series</strong>: 5万〜15万円</li>
            <li><strong>Design Series</strong>: 3万〜8万円</li>
          </ul>

          <h3>Roland（ローランド）の電子ドラム買取相場</h3>

          <p>Rolandは電子ドラム市場のリーダーで、Vドラムシリーズは業界標準と言っても過言ではありません。モジュール（音源）の世代によって価格が大きく変わるため、型番の確認が重要です。</p>

          <ul>
            <li><strong>TD-50K2 / TD-50X</strong>: 10万〜20万円</li>
            <li><strong>TD-27KV2</strong>: 5万〜10万円</li>
            <li><strong>TD-17KVX2</strong>: 3万〜6万円</li>
            <li><strong>TD-07KV</strong>: 2万〜4万円</li>
            <li><strong>TD-1K / TD-1DMK</strong>: 1万〜2.5万円</li>
            <li><strong>VAD706</strong>: 15万〜30万円（アコースティックデザイン最上位）</li>
          </ul>

          <h3>YAMAHA（ヤマハ）の買取相場</h3>

          <p>YAMAHAはアコースティックドラムと電子ドラムの両方で高い評価を得ています。Recording Customはスティーヴ・ガッドが使用したことで有名で、スタジオ録音の定番として根強い人気があります。</p>

          <ul>
            <li><strong>Recording Custom（アコースティック）</strong>: 5万〜15万円</li>
            <li><strong>Tour Custom</strong>: 3万〜8万円</li>
            <li><strong>Stage Custom Birch</strong>: 2万〜5万円</li>
            <li><strong>DTX6K3-X（電子ドラム）</strong>: 3万〜7万円</li>
            <li><strong>DTX402K（電子ドラム）</strong>: 1万〜2.5万円</li>
          </ul>

          <CtaBox />

          <h2 id="delivery">ドラムに出張買取がおすすめな理由</h2>

          <p>ドラムは楽器の中でも特に大型で重いため、売却方法の選び方が重要です。特にアコースティックドラムセットの場合、<strong>出張買取が最もおすすめ</strong>です。その理由を詳しく解説します。</p>

          <h3>理由1: 運搬が極めて困難</h3>

          <p>ドラムセットは、バスドラム・タム・フロアタム・シンバルスタンド・ハイハットスタンド・ペダルなど、多数のパーツで構成されています。これらをすべて車に積み込むのは一般的な乗用車では難しく、<strong>ワンボックスカーやトラックが必要</strong>になることも。出張買取なら、業者が運搬手段を持ってきてくれるため安心です。</p>

          <h3>理由2: 梱包の手間がかからない</h3>

          <p>宅配買取でドラムを送る場合、各パーツを個別に梱包する必要があります。シンバルの破損防止、タムのヘッド保護など、専門的な梱包技術が求められます。出張買取なら<strong>梱包不要</strong>で、そのまま査定してもらえます。</p>

          <h3>理由3: その場で現金化できる</h3>

          <p>出張買取では、査定結果に満足すればその場で現金を受け取れます。宅配買取の場合は発送から入金まで数日〜1週間かかることがありますが、出張買取なら<strong>即日現金化</strong>が可能です。</p>

          <h3>理由4: 複数のパーツ・機材をまとめて売却できる</h3>

          <p>ドラムセット本体に加えて、予備のスネア、シンバル、スタンド、ドラムスローン（椅子）、スティックケースなど、関連機材をまとめて売ることができます。バンドの解散や機材の入れ替えで大量に処分したい場合に最適です。</p>

          <CtaBox />

          <h2 id="faq">ドラム買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ドラムセットの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ドラムセットの買取相場はブランド・グレードにより異なります。Pearl Export Seriesで2万〜5万円、TAMA Starclassicで5万〜18万円、DW Collectorで10万〜30万円が目安です。電子ドラムはRoland TD-50で10万〜20万円、TD-17で3万〜6万円程度です。正確な金額は複数業者に査定依頼して比較しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ドラムセットは持ち運びが大変ですが、どうやって売ればいいですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ドラムセットは大型で重いため、出張買取の利用がおすすめです。ウリエルなどの出張買取サービスなら自宅まで来てくれるので、運搬や梱包の心配がありません。電子ドラムは比較的コンパクトなので宅配買取でも対応可能です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">シンバルやスネア単品でも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、シンバルやスネアドラムは単品でも買取可能です。Zildjian KシリーズやSABIAN HHXなどの高級シンバルは1万〜5万円の買取価格がつくことがあります。Ludwig Supraphonicなどの定番スネアも単品で2万〜6万円の買取が期待できます。ハードウェア類（スタンド、ペダルなど）も買取対象です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">電子ドラムの買取相場はどのくらいですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                電子ドラムの買取相場はモデルにより異なります。Roland TD-50シリーズで10万〜20万円、TD-27で5万〜10万円、TD-17で3万〜6万円が目安です。YAMAHA DTXシリーズはDTX6で3万〜7万円程度。モジュール（音源）の世代と全パッドが揃っているかが査定の重要ポイントです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ドラム買取にかかる費用はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。ドラムセット一式の出張買取でも追加料金はかかりません。買取が成立しなかった場合もキャンセル料は不要です。
              </div>
            </details>
          </div>

          <h2>まとめ：ドラム買取は出張買取＋相見積もりがベスト</h2>

          <p>ドラムの買取は、大型で運搬が困難という特性上、<strong>出張買取と相見積もりを組み合わせる</strong>のが最も賢い方法です。</p>

          <ul>
            <li><strong>まずは相場を知る</strong> → ヒカカク！で一括査定</li>
            <li><strong>電子ドラムを手軽に売る</strong> → ティファナで宅配買取</li>
            <li><strong>ドラムセット一式を売る</strong> → ウリエルで出張買取</li>
          </ul>

          <p>シンバルやスネアなど単品でも売却可能なので、使わなくなったパーツがあればまとめて査定に出しましょう。査定は完全無料です。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/keyboard-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">キーボード買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">キーボード・シンセサイザー買取おすすめ</h3>
            </Link>
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
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

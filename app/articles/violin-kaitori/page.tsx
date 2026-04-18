import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】バイオリン買取おすすめ3社比較｜相場・鑑定書の重要性",
  description:
    "バイオリン・弦楽器買取のおすすめ業者3社を徹底比較。バイオリン・ビオラ・チェロ・コントラバスの買取相場、Stradivarius・YAMAHA・Suzuki・Karl Hofnerなどブランド別の相場目安、鑑定書の有無による価格差まで解説。",
  openGraph: {
    title: "【2026年最新】バイオリン買取おすすめ3社比較｜相場・鑑定書の重要性",
    description: "バイオリン・弦楽器買取のおすすめ業者3社を徹底比較。種類別・ブランド別の買取相場から鑑定書の重要性まで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "バイオリン買取おすすめ", href: "/articles/violin-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのバイオリンの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "バイオリンの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "バイオリンの買取相場はレベルにより大きく異なります。入門用で5,000〜3万円、中級用で3万〜15万円、上級・プロ用で15万〜100万円以上です。オールド楽器や名工の作品は数百万〜数千万円になることもあります。鑑定書の有無も価格に大きく影響します。" } },
      { "@type": "Question", name: "鑑定書がないバイオリンでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、鑑定書がなくても売却は可能です。ただし、鑑定書がないと製作者や年代の証明が難しくなるため、査定額が大幅に下がる可能性があります。特に高額なオールド楽器の場合、鑑定書の有無で数十万〜数百万円の差がつくことがあります。" } },
      { "@type": "Question", name: "弓だけでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、弓は単体でも買取可能です。特にフランス製の名弓（Tourte、Peccatte、Sartoryなど）は、楽器本体以上の価値がつくことがあります。ペルナンブーコ材の高級弓は、状態が良ければ10万〜100万円以上の買取価格になることもあります。" } },
      { "@type": "Question", name: "子供用のバイオリンも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、子供用（分数サイズ）のバイオリンも買取対象です。ただし、1/2や3/4サイズは需要が限られるため、フルサイズ（4/4）と比較すると買取価格は低めになります。Suzukiの分数バイオリンは一定の需要があります。" } },
      { "@type": "Question", name: "バイオリン買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】バイオリン買取おすすめ3社比較｜相場・鑑定書の重要性",
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

export default function ViolinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">バイオリン買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">弦楽器</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】バイオリン買取おすすめ3社比較｜相場・鑑定書の重要性を徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            バイオリンやチェロなどの弦楽器を売りたいけど、適正価格がわからない方へ。本記事では、バイオリン・弦楽器買取の人気3サービスを徹底比較し、初心者用からプロ用・オールド楽器までの買取相場、ビオラ・チェロ・コントラバスの相場、ブランド別の価格目安、そして鑑定書の有無による価格差について詳しく解説します。バイオリンは楽器の中でも特に価格帯が幅広く、適正な査定を受けるためには専門知識を持つ業者選びが極めて重要です。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#violin-price" className="hover:underline">バイオリン買取相場（レベル別）</a></li>
            <li><a href="#strings-price" className="hover:underline">弦楽器全般の買取相場（ビオラ・チェロ・コントラバス）</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#brand-price" className="hover:underline">ブランド別買取相場</a></li>
            <li><a href="#certificate" className="hover:underline">鑑定書の有無による価格差</a></li>
            <li><a href="#flow" className="hover:underline">バイオリン買取の流れ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="violin-price">バイオリン買取相場（初心者用〜プロ用・オールド）</h2>

          <p>バイオリンの買取価格は、楽器のランク（入門用・中級・上級・プロ用）、製作者、産地、年代、状態によって大きく異なります。他の楽器と比べて<strong>価格帯が極めて幅広い</strong>のがバイオリンの特徴で、数千円のものから数千万円のものまで存在します。</p>

          <h3>入門用バイオリンの買取相場</h3>

          <p>入門用バイオリンは量産品が中心で、買取価格は低めです。ただし、Suzuki（鈴木バイオリン）の入門モデルは教室での需要が安定しており、状態が良ければそれなりの価格がつきます。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ランク・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">中国製量産品（ノーブランド）</td><td className="px-4 py-3 text-gold-dark font-bold">1,000〜5,000円</td><td className="px-4 py-3 text-warm-gray">買取不可の場合も</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Suzuki No.200〜300</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜2万円</td><td className="px-4 py-3 text-warm-gray">教室向けで安定需要</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Suzuki No.500〜540</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td><td className="px-4 py-3 text-warm-gray">中上級入門モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA Braviol V5/V7</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td><td className="px-4 py-3 text-warm-gray">YAMAHA品質で安心</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Carlo Giordano VS-1/VS-2</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜1万円</td><td className="px-4 py-3 text-warm-gray">入門セット定番</td></tr>
              </tbody>
            </table>
          </div>

          <h3>中級〜上級バイオリンの買取相場</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ランク・産地</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">ドイツ製工房作品（現代）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td><td className="px-4 py-3 text-warm-gray">Karl Hofner等</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">イタリア製工房作品（現代）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜80万円</td><td className="px-4 py-3 text-warm-gray">クレモナ製は高評価</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">フランス製工房作品（現代）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜50万円</td><td className="px-4 py-3 text-warm-gray">Mirecourt製など</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">日本人製作家作品</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜60万円</td><td className="px-4 py-3 text-warm-gray">陳昌鉉等は高額</td></tr>
              </tbody>
            </table>
          </div>

          <h3>プロ用・オールドバイオリンの買取相場</h3>

          <p>プロ用やオールド（概ね100年以上前に製作されたもの）のバイオリンは、<strong>鑑定書の有無が買取価格を決定的に左右</strong>します。名工の作品は数百万〜数千万円になることもあります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">カテゴリ</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">オールドイタリアン（一般）</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜500万円</td><td className="px-4 py-3 text-warm-gray">鑑定書必須</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">オールドフレンチ</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜300万円</td><td className="px-4 py-3 text-warm-gray">J.B.Vuillaume等</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">オールドジャーマン</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜150万円</td><td className="px-4 py-3 text-warm-gray">Klotz一族等</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Stradivarius（本物）</td><td className="px-4 py-3 text-gold-dark font-bold">数億〜数十億円</td><td className="px-4 py-3 text-warm-gray">超希少。厳密な鑑定必須</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Guarneri del Gesu（本物）</td><td className="px-4 py-3 text-gold-dark font-bold">数億〜数十億円</td><td className="px-4 py-3 text-warm-gray">現存数約150挺</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>注意：</strong>「Stradivarius」のラベルが貼られたバイオリンの99%以上はコピー品（レプリカ）です。「Antonius Stradivarius Cremonenfis」のラベルがあっても、本物である可能性は極めて低いため、過度な期待は禁物です。ただし、コピー品であっても古い工房作品であれば数十万円の価値がつくこともあります。</p>

          <CtaBox />

          <h2 id="strings-price">弦楽器全般の買取相場（ビオラ・チェロ・コントラバス）</h2>

          <h3>ビオラの買取相場</h3>

          <p>ビオラはバイオリンより一回り大きい弦楽器で、オーケストラや室内楽で重要な役割を担います。バイオリンと比較すると流通量が少ないため、<strong>良い楽器は希少価値が高く、意外な高額がつくことがあります</strong>。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ランク</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">入門用（量産品）</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td><td className="px-4 py-3 text-warm-gray">中国製が中心</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">中級（ドイツ・日本製工房品）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td><td className="px-4 py-3 text-warm-gray">サイズ（体の大きさ）で需要変動</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">上級・プロ用</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜200万円以上</td><td className="px-4 py-3 text-warm-gray">イタリア製現代作家作品など</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">オールド</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜数千万円</td><td className="px-4 py-3 text-warm-gray">鑑定書の有無で大幅変動</td></tr>
              </tbody>
            </table>
          </div>

          <h3>チェロの買取相場</h3>

          <p>チェロは大型の弦楽器で、運搬が大変なため出張買取の利用がおすすめです。バイオリンやビオラと比べて新品価格が高い分、買取価格も高くなる傾向があります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ランク</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">入門用</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">量産品</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">中級（工房品）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜50万円</td><td className="px-4 py-3 text-warm-gray">ドイツ・日本製</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">上級・プロ用</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜300万円以上</td><td className="px-4 py-3 text-warm-gray">イタリア・フランス製</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">オールド</td><td className="px-4 py-3 text-gold-dark font-bold">100万〜数千万円</td><td className="px-4 py-3 text-warm-gray">鑑定書必須</td></tr>
              </tbody>
            </table>
          </div>

          <h3>コントラバスの買取相場</h3>

          <p>コントラバスはオーケストラやジャズで使用される最も大型の弦楽器です。運搬が非常に困難なため、<strong>ウリエルなどの出張買取が最も適しています</strong>。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ランク</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">入門用（合板）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">中国製量産品</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">中級（単板）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td><td className="px-4 py-3 text-warm-gray">ドイツ・チェコ製</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">上級・プロ用</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜200万円以上</td><td className="px-4 py-3 text-warm-gray">手工品</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="comparison">バイオリン・弦楽器買取おすすめ3社を徹底比較</h2>

          <p>バイオリンの買取は、楽器の真贋鑑定力が求められるため、<strong>弦楽器の専門知識を持つ業者を選ぶことが極めて重要</strong>です。</p>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">弦楽器対応</td><td className="px-4 py-3">バイオリン/ビオラ/チェロ</td><td className="px-4 py-3">バイオリン/ビオラ/チェロ</td><td className="px-4 py-3">全弦楽器対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">専門業者を比較できる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">大型楽器に対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">高額楽器の最高値を知りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">チェロ・コントラバスを売りたい人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定で弦楽器専門業者を比較</h3>

          <p>ヒカカク！では複数の買取業者に一括で査定依頼ができます。バイオリンは業者の専門知識によって査定額が大きく変わるため、<strong>弦楽器専門の業者を含む複数社を比較できる</strong>メリットは非常に大きいです。特にオールド楽器やイタリア製作家の作品は、一般的な買取業者と弦楽器専門業者で数十万円の差がつくこともあります。</p>

          <h3>ティファナ ── 3つの方法から選べる総合買取</h3>

          <p>ティファナは出張・店頭・宅配の3方式に対応。バイオリンはケースに入れてコンパクトに持ち運べるため、店頭買取や宅配買取との相性が良い楽器です。入門用〜中級のバイオリンを手軽に売りたい場合に最適です。</p>

          <h3>ウリエル ── 出張買取でチェロ・コントラバスも安心</h3>

          <p>ウリエルの出張買取は、チェロやコントラバスなど<strong>大型の弦楽器を自宅から安全に売却できる</strong>のが最大のメリットです。運搬時の破損リスクがないため、高額楽器の売却にも安心して利用できます。</p>

          <CtaBox />

          <h2 id="brand-price">主要ブランド別 バイオリン買取相場ガイド</h2>

          <h3>Stradivarius（ストラディヴァリウス）について</h3>

          <p>Antonio Stradivari（1644-1737）が製作したバイオリンは、世界で最も価値のある楽器として知られています。現存する約600挺のうち、ほとんどが美術館や財団、著名な演奏家によって所有されており、市場に出ること自体が極めて稀です。</p>

          <p><strong>重要な注意点：</strong>「Stradivarius」のラベルが入ったバイオリンは世界中に数百万本存在しますが、そのほぼ全てがコピー品です。19〜20世紀にかけて、ストラディヴァリウスのラベルをコピーして貼ることが業界の慣例として広く行われていました。お手持ちのバイオリンにストラディヴァリウスのラベルがあっても、本物である可能性は極めて低いことをご理解ください。</p>

          <h3>YAMAHA（ヤマハ）のバイオリン買取相場</h3>

          <ul>
            <li><strong>Braviol V25GA（アルティーダ）</strong>: 5万〜12万円</li>
            <li><strong>Braviol V20G</strong>: 3万〜8万円</li>
            <li><strong>Braviol V10G</strong>: 1万〜4万円</li>
            <li><strong>Braviol V7SG</strong>: 1万〜3万円</li>
            <li><strong>Braviol V5SA</strong>: 5,000〜2万円</li>
          </ul>

          <h3>Suzuki（鈴木バイオリン）の買取相場</h3>

          <p>Suzukiは日本最大のバイオリンメーカーで、特に教育用楽器として世界的に知られています。スズキ・メソードの楽器としても有名で、安定した需要があります。</p>

          <ul>
            <li><strong>No.1100〜1200（上級）</strong>: 5万〜15万円</li>
            <li><strong>No.500〜540</strong>: 1万〜4万円</li>
            <li><strong>No.300〜330</strong>: 5,000〜2万円</li>
            <li><strong>No.200〜230（入門）</strong>: 3,000〜1万円</li>
          </ul>

          <h3>Karl Hofner（カール・ヘフナー）の買取相場</h3>

          <p>Karl Hofnerはドイツの老舗弦楽器メーカーで、中級者向けの楽器として世界的に評価されています。ドイツ製の工房品は安定した買取価格がつきます。</p>

          <ul>
            <li><strong>#115（マスターメイド）</strong>: 10万〜30万円</li>
            <li><strong>#75〜#86</strong>: 5万〜15万円</li>
            <li><strong>#65〜#66</strong>: 3万〜8万円</li>
            <li><strong>#4/4（入門）</strong>: 1万〜3万円</li>
          </ul>

          <CtaBox />

          <h2 id="certificate">鑑定書の有無による価格差</h2>

          <p>バイオリンの買取において、<strong>鑑定書（Certificate of Authenticity）の有無は買取価格に決定的な影響</strong>を与えます。特に高額な楽器ほど、鑑定書の重要性は増します。</p>

          <h3>鑑定書がある場合のメリット</h3>

          <ul>
            <li><strong>製作者の証明</strong>: 誰が製作した楽器かが明確になり、適正な評価が可能</li>
            <li><strong>年代の証明</strong>: 製作年代が特定されることで、ヴィンテージ価値が正確に反映される</li>
            <li><strong>真贋の保証</strong>: 偽物でないことの証明になり、買い手側の安心感につながる</li>
            <li><strong>国際的な通用性</strong>: 海外オークションや国際取引でも有効</li>
          </ul>

          <h3>鑑定書の有無による価格差の目安</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">楽器のランク</th>
                  <th className="px-4 py-3 text-left font-medium">鑑定書あり</th>
                  <th className="px-4 py-3 text-left font-medium">鑑定書なし</th>
                  <th className="px-4 py-3 text-left font-medium">価格差</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">入門用（量産品）</td><td className="px-4 py-3">影響小</td><td className="px-4 py-3">影響小</td><td className="px-4 py-3 text-warm-gray">ほぼなし</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">中級（工房品）</td><td className="px-4 py-3 text-gold-dark font-bold">30万円</td><td className="px-4 py-3">15万〜20万円</td><td className="px-4 py-3 text-gold-dark font-bold">30〜50%減</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">上級（名工作品）</td><td className="px-4 py-3 text-gold-dark font-bold">100万円</td><td className="px-4 py-3">30万〜50万円</td><td className="px-4 py-3 text-gold-dark font-bold">50〜70%減</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">オールド</td><td className="px-4 py-3 text-gold-dark font-bold">500万円</td><td className="px-4 py-3">50万〜100万円</td><td className="px-4 py-3 text-gold-dark font-bold">80〜90%減</td></tr>
              </tbody>
            </table>
          </div>

          <p>鑑定書は、信頼できる鑑定機関や著名な弦楽器ディーラーが発行したものが有効です。購入時に付属していた鑑定書は、必ず保管しておきましょう。<strong>鑑定書を紛失した場合でも、購入時の領収書やお店の記録が残っていれば、査定の参考になります。</strong></p>

          <CtaBox />

          {/* 買取の流れ */}
          <h2 id="flow">バイオリン・弦楽器 買取の流れ</h2>

          <p>バイオリンなどの弦楽器は繊細な楽器のため、適切な方法で査定に出すことが重要です。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">楽器の情報を整理</h3><p className="text-sm text-warm-gray">メーカー名（ラベルで確認）、購入先、購入年、鑑定書の有無を整理します。鑑定書があれば査定額が大幅にアップします。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">複数社に査定依頼</h3><p className="text-sm text-warm-gray">弦楽器は業者の専門知識によって査定額が大きく変わります。ヒカカク！で一括査定して、弦楽器に詳しい業者を見つけましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">本査定（実物確認）</h3><p className="text-sm text-warm-gray">出張買取で自宅に来てもらうか、宅配でケースごと送付。表板・裏板の状態、ネックの歪み、弓の毛の状態などを確認します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h3 className="font-bold text-sm mb-1">買取成立・支払い</h3><p className="text-sm text-warm-gray">金額に納得したら買取成立。出張ならその場で現金化。弓やケースも合わせて査定してもらうと総額アップが期待できます。</p></div>
            </div>
          </div>

          <CtaBox />

          <h2 id="faq">バイオリン買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">バイオリンの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                バイオリンの買取相場はレベルにより大きく異なります。入門用で5,000〜3万円、中級用で3万〜15万円、上級・プロ用で15万〜100万円以上です。オールド楽器や名工の作品は数百万〜数千万円になることもあります。鑑定書の有無も価格に大きく影響するため、お持ちの方は必ず一緒に査定に出しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">鑑定書がないバイオリンでも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、鑑定書がなくても売却は可能です。ただし、鑑定書がないと製作者や年代の証明が難しくなるため、査定額が下がる可能性があります。特に高額なオールド楽器の場合は、鑑定書の有無で数十万〜数百万円の差がつくことも。購入時の領収書や店舗の記録があれば参考になるため、一緒に提出しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">弓だけでも買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、弓は単体でも買取可能です。特にフランス製の名弓（Tourte、Peccatte、Sartoryなど）は楽器本体以上の価値がつくことがあります。ペルナンブーコ材の高級弓は状態が良ければ10万〜100万円以上の買取価格に。カーボン弓やブラジルウッド弓も数千〜数万円で買取可能です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">子供用のバイオリンも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、子供用（分数サイズ）のバイオリンも買取対象です。1/16から3/4サイズまで対応している業者がほとんどです。ただし、フルサイズ（4/4）と比較すると需要が限られるため買取価格は低めです。Suzukiの分数バイオリンはバイオリン教室での需要が安定しているため、比較的良い価格がつきやすいです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">バイオリン買取にかかる費用はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。完全無料で利用できるので、気軽に査定を申し込んでみてください。
              </div>
            </details>
          </div>

          <h2>まとめ：バイオリン売却は専門知識のある業者選びが鍵</h2>

          <p>バイオリンの買取は、楽器の専門知識と真贋鑑定力が求められるため、<strong>業者選びが他の楽器以上に重要</strong>です。特にオールド楽器や名工の作品は、一般的な買取業者では適正な評価ができない場合があります。</p>

          <ul>
            <li><strong>高額楽器の最高値を知りたい</strong> → ヒカカク！で専門業者を含む一括査定</li>
            <li><strong>入門用〜中級を手軽に売りたい</strong> → ティファナで店頭/宅配買取</li>
            <li><strong>チェロ・コントラバスなど大型楽器</strong> → ウリエルで出張買取</li>
          </ul>

          <p>鑑定書がある場合は必ず一緒に提出し、購入時の記録もあれば添えましょう。査定は完全無料なので、まずは気軽に相場を確認してみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/saxophone-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">サックス買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">サックス・管楽器買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ピアノ買取おすすめ3社比較</h3>
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】Fender(フェンダー)買取相場・おすすめ業者3選｜高く売るコツ",
  description:
    "Fender(フェンダー)の買取相場を徹底解説。Stratocaster・Telecaster・Jazz Bassなどモデル別の買取価格、USA製・メキシコ製・日本製の違い、Custom Shop製品の査定ポイントまで。おすすめ買取業者3社比較。",
  openGraph: {
    title: "【2026年最新】Fender(フェンダー)買取相場・おすすめ業者3選｜高く売るコツ",
    description: "Fenderギターの買取相場をモデル・製造国別に徹底解説。ストラト・テレキャスの相場目安と高く売るコツ。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ギター買取", href: "/articles/guitar-kaitori/" },
    { name: "Fender買取", href: "/articles/fender-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのFenderの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "Fenderギターの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "Fenderギターの買取相場は製造国・モデルにより異なります。USA製American Professional IIが7万〜14万円、Custom Shopが15万〜50万円以上、メキシコ製Playerが3万〜6万円、日本製（旧Fender Japan）が2万〜8万円が目安です。" } },
      { "@type": "Question", name: "Fender USAとFender Japanの買取価格の違いは？", acceptedAnswer: { "@type": "Answer", text: "Fender USAは7万〜20万円、Fender Japan（現Made in Japan）は2万〜8万円が一般的な相場です。USA製は中古市場で圧倒的に人気が高く、特にAmerican ProfessionalやAmerican Ultraシリーズは安定した高額買取が期待できます。" } },
      { "@type": "Question", name: "Fender Custom Shopの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "Fender Custom Shop製品は15万〜50万円以上が一般的な買取相場です。マスタービルダー製のモデルは50万〜100万円を超えることもあります。COA（認定証）の有無で査定額が大きく変わるため、必ず揃えて査定に出しましょう。" } },
      { "@type": "Question", name: "Fenderギターの製造国を確認する方法は？", acceptedAnswer: { "@type": "Answer", text: "Fenderギターの製造国は、ヘッドのロゴ下やネックプレートのシリアルナンバーで確認できます。USの場合はUS+数字、MXはメキシコ製、JDやMIJは日本製を示します。製造国により買取相場が異なるため、事前に確認しておくことをおすすめします。" } },
      { "@type": "Question", name: "Fenderを最も高く売るには？", acceptedAnswer: { "@type": "Answer", text: "Fenderを高く売るには、(1)ヒカカク！で複数業者に一括査定する、(2)純正ハードケース・ギグバッグ・保証書を揃える、(3)トレモロアームやレンチなど小物も一緒に出す、(4)弦を張り替えてクリーニングする、の4つが重要です。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】Fender(フェンダー)買取相場・おすすめ業者3選｜高く売るコツ",
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

export default function FenderKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Fender買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】Fender(フェンダー)買取相場・おすすめ業者3選｜高く売るコツを徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            Fender(フェンダー)のギター・ベースを売りたい方へ。本記事では、Stratocaster・Telecaster・Jazz Bassなどモデル別の買取相場をUSA製・メキシコ製・日本製に分けて解説。Custom Shop製品の査定ポイントや、高く売るためのコツまで網羅しています。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#market-price" className="hover:underline">Fenderモデル別・製造国別 買取相場</a></li>
            <li><a href="#country" className="hover:underline">USA・メキシコ・日本製の違いと見分け方</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ買取業者3社比較</a></li>
            <li><a href="#tips" className="hover:underline">Fenderを高く売る5つのコツ</a></li>
            <li><a href="#flow" className="hover:underline">Fender買取の流れ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="market-price">Fenderモデル別・製造国別 買取相場【2026年最新】</h2>

          <p>Fender(フェンダー)は世界で最も売れているギターブランドの一つです。買取価格は<strong>製造国（USA・メキシコ・日本）とモデルラインによって明確にランク分け</strong>されます。</p>

          <h3>Fender USA エレキギターの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">American Professional II Stratocaster</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜14万円</td><td className="px-4 py-3 text-warm-gray">現行USAの主力モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">American Professional II Telecaster</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜14万円</td><td className="px-4 py-3 text-warm-gray">テレキャスUSAの定番</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">American Ultra Stratocaster</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜16万円</td><td className="px-4 py-3 text-warm-gray">モダンスペックの上位機種</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">American Ultra Telecaster</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜16万円</td><td className="px-4 py-3 text-warm-gray">S-1スイッチ搭載</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">American Vintage II シリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜20万円</td><td className="px-4 py-3 text-warm-gray">ヴィンテージ復刻モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Custom Shop Stratocaster / Telecaster</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜50万円以上</td><td className="px-4 py-3 text-warm-gray">マスタービルダー品は100万円超も</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Jazzmaster (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">6万〜15万円</td><td className="px-4 py-3 text-warm-gray">オルタナ系で人気復活</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Jaguar (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">6万〜14万円</td><td className="px-4 py-3 text-warm-gray">ショートスケールの個性派</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Fender メキシコ製・日本製の買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Player Stratocaster（メキシコ製）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">エントリーUSA代替として人気</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Player Telecaster（メキシコ製）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">コスパ良好モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Player Plus（メキシコ製）</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜8万円</td><td className="px-4 py-3 text-warm-gray">ノイズレスPU搭載</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Vintera II（メキシコ製）</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜9万円</td><td className="px-4 py-3 text-warm-gray">ヴィンテージスタイル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Made in Japan Traditional</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">国内で根強い人気</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Made in Japan Hybrid II</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜8万円</td><td className="px-4 py-3 text-warm-gray">モダン×ヴィンテージ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">旧Fender Japan（80〜90年代）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜8万円</td><td className="px-4 py-3 text-warm-gray">JVシリアルは高額</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Squier by Fender各種</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜2万円</td><td className="px-4 py-3 text-warm-gray">エントリーライン</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Fender ベースの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">American Professional II Jazz Bass</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜14万円</td><td className="px-4 py-3 text-warm-gray">ジャズベUSAの定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">American Professional II Precision Bass</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜14万円</td><td className="px-4 py-3 text-warm-gray">プレベUSAの定番</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Custom Shop Jazz Bass</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td><td className="px-4 py-3 text-warm-gray">ハイエンドモデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Player Jazz Bass（メキシコ製）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td><td className="px-4 py-3 text-warm-gray">エントリーモデル</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="country">USA・メキシコ・日本製の違いと見分け方</h2>

          <p>Fenderギターの買取価格は製造国によって明確な差があります。ここでは各製造国の特徴と、見分け方を解説します。</p>

          <h3>製造国による価格帯の違い</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">製造国</th>
                  <th className="px-4 py-3 text-left font-medium">価格帯</th>
                  <th className="px-4 py-3 text-left font-medium">シリアルの頭文字</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-bold">USA（コロナ工場）</td><td className="px-4 py-3 text-gold-dark font-bold">7万〜50万円以上</td><td className="px-4 py-3 text-warm-gray">US + 数字</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-bold">メキシコ（エンセナダ工場）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜9万円</td><td className="px-4 py-3 text-warm-gray">MX + 数字</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-bold">日本（ダイナ楽器等）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜8万円</td><td className="px-4 py-3 text-warm-gray">JD, MIJ, CIJ等</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-bold">中国/インドネシア（Squier）</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜2万円</td><td className="px-4 py-3 text-warm-gray">CGS, IC等</td></tr>
              </tbody>
            </table>
          </div>

          <h3>シリアルナンバーの確認方法</h3>

          <p>Fenderのシリアルナンバーは、<strong>ヘッド表面（主にストラトキャスター）</strong>または<strong>ネックプレート裏（主にヴィンテージモデル）</strong>に記載されています。シリアルの頭文字で製造国が判別でき、数字部分から製造年を特定できます。</p>

          <p>製造国がわからない場合でも、買取査定時に業者が確認してくれるので問題ありません。ただし、<strong>事前に把握しておくことで適正な査定かどうか判断しやすくなります</strong>。</p>

          <CtaBox />

          <h2 id="comparison">Fender買取おすすめ3社を徹底比較</h2>

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
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">Fender対応</td><td className="px-4 py-3">全モデル対応</td><td className="px-4 py-3">全モデル対応</td><td className="px-4 py-3">全モデル対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定スピード</td><td className="px-4 py-3">最短即日（複数社）</td><td className="px-4 py-3">最短即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">業者間競争で最高値</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── Fenderの最高値を見つける</h3>

          <p>Fenderは流通量が多いため業者によって査定額の差が出やすいブランドです。ヒカカク！なら複数の専門業者の査定額を比較でき、<strong>最高値で売却できる可能性が高まります</strong>。特にUSA製やCustom Shopモデルは業者間で数万円の差がつくことがあります。</p>

          <h3>ティファナ ── Squier含む全ライン対応</h3>

          <p>ティファナは出張・店頭・宅配の3方式対応で、SquierなどのエントリーモデルからCustom Shopまで幅広く査定してくれます。<strong>「値段がつくかわからない」というFenderでもまずは相談可能</strong>です。</p>

          <h3>ウリエル ── 複数本まとめて出張買取</h3>

          <p>ウリエルの出張買取なら、ギター本体だけでなくアンプやエフェクターもまとめて売却できます。<strong>Fenderギターとアンプ（Twin Reverbなど）をセットで売ると査定アップ</strong>の可能性もあります。</p>

          <CtaBox />

          <h2 id="tips">Fenderを高く売るための5つのコツ</h2>

          <h3>コツ1: 複数社に査定を依頼する</h3>
          <p>Fenderは流通量が多いため、業者の在庫状況によって査定額が変動します。<strong>ヒカカク！で一括査定し、最低3社の見積もりを比較</strong>しましょう。</p>

          <h3>コツ2: 付属品を漏れなく揃える</h3>
          <ul>
            <li><strong>純正ハードケース / ギグバッグ</strong>: ケースだけで5,000〜2万円の価値あり</li>
            <li><strong>トレモロアーム</strong>: Stratocasterには必須の付属品</li>
            <li><strong>保証書・購入証明書</strong>: 正規品の証明</li>
            <li><strong>六角レンチ・ブリッジカバー</strong>: 細かい付属品も忘れずに</li>
          </ul>

          <h3>コツ3: 製造国とシリアルを事前確認</h3>
          <p>ヘッドのシリアルナンバーで製造国・年式を確認し、<strong>相場を把握してから査定に臨む</strong>ことで、不当に安い査定を避けられます。</p>

          <h3>コツ4: クリーニングで印象アップ</h3>
          <ul>
            <li><strong>ボディ</strong>: ポリウレタン塗装なら市販のポリッシュでOK</li>
            <li><strong>メイプル指板</strong>: 乾拭きで汚れを落とす（オイル不要）</li>
            <li><strong>ローズウッド指板</strong>: レモンオイルで保湿</li>
            <li><strong>弦</strong>: 新品に交換して印象アップ</li>
          </ul>

          <h3>コツ5: 改造パーツは純正に戻す</h3>
          <p>ピックアップやペグを交換している場合は純正パーツに戻しましょう。<strong>Fenderはオリジナルの状態が最も高く評価</strong>されます。純正パーツがない場合は、交換パーツの情報を伝えましょう。</p>

          <CtaBox />

          {/* 買取の流れ */}
          <h2 id="flow">Fender買取の流れ</h2>

          <p>Fenderギターを高く売るための査定から入金までの流れです。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">製造国・シリアルの確認</h3><p className="text-sm text-warm-gray">ヘッドのロゴとシリアルナンバーで製造国（USA/Mexico/Japan）と年代を確認。これが査定額の基準になります。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">一括査定で相場を把握</h3><p className="text-sm text-warm-gray">ヒカカク！で複数社に一括査定。USA製とMexico製で査定額が2〜3倍違うこともあるため、正確な情報を伝えましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">本査定で最終額決定</h3><p className="text-sm text-warm-gray">フレットの状態、ネックの反り、ボディの傷、電装系の動作を確認。Custom Shop製はCOA（認定証）が査定に大きく影響します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h3 className="font-bold text-sm mb-1">買取成立・即日現金化</h3><p className="text-sm text-warm-gray">出張・店頭ならその場で現金、宅配なら振込。キャンセル料・査定料は無料なので安心です。</p></div>
            </div>
          </div>

          <CtaBox />

          <h2 id="faq">Fender買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Fenderギターの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Fenderギターの買取相場は製造国・モデルにより異なります。USA製American Professional IIが7万〜14万円、Custom Shopが15万〜50万円以上、メキシコ製Playerが3万〜6万円、日本製が2万〜8万円が目安です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Fender USAとFender Japanの買取価格の違いは？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Fender USAは7万〜20万円、Fender Japan（現Made in Japan）は2万〜8万円が一般的な相場です。USA製は中古市場で圧倒的に人気が高く、特にAmerican ProfessionalやAmerican Ultraシリーズは安定した高額買取が期待できます。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Fender Custom Shopの買取相場は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Fender Custom Shop製品は15万〜50万円以上が一般的な買取相場です。マスタービルダー製のモデルは50万〜100万円を超えることもあります。COA（認定証）の有無で査定額が大きく変わるため、必ず揃えて査定に出しましょう。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Fenderギターの製造国を確認する方法は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Fenderギターの製造国は、ヘッドのロゴ下やネックプレートのシリアルナンバーで確認できます。USはアメリカ製、MXはメキシコ製、JDやMIJは日本製を示します。製造国により買取相場が異なるため、事前に確認しておくことをおすすめします。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">Fenderを最も高く売るには？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                Fenderを高く売るには、(1)ヒカカク！で複数業者に一括査定する、(2)純正ハードケース・ギグバッグ・保証書を揃える、(3)トレモロアームやレンチなど小物も一緒に出す、(4)弦を張り替えてクリーニングする、の4つが重要です。
              </div>
            </details>
          </div>

          <h2>まとめ：Fender買取は製造国の確認と複数社比較がカギ</h2>

          <p>Fenderギターは製造国とモデルラインによって買取価格が明確に異なります。まずは自分のギターの製造国を確認し、相場を把握してから査定に臨みましょう。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>エントリーモデルも売りたい</strong> → ティファナで相談</li>
            <li><strong>自宅でまとめて売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料です。まずはヒカカク！でお手持ちのFenderの相場をチェックしてみてください。</p>

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
            <Link href="/articles/bass-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ベース買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ベース買取おすすめ3社比較</h3>
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

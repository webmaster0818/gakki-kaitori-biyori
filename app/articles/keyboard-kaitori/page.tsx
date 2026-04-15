import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】キーボード・シンセサイザー買取おすすめ3社比較｜相場ガイド",
  description:
    "キーボード・シンセサイザー買取のおすすめ業者3社を徹底比較。ステージピアノ・ワークステーション・アナログシンセの買取相場、KORG・Roland・YAMAHA・Nord・Moogなどブランド別の相場目安、ビンテージシンセの価値まで解説。",
  openGraph: {
    title: "【2026年最新】キーボード・シンセサイザー買取おすすめ3社比較｜相場ガイド",
    description: "キーボード・シンセサイザー買取のおすすめ業者3社を徹底比較。種類別・ブランド別の買取相場から高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "キーボード・シンセ買取おすすめ", href: "/articles/keyboard-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのキーボード・シンセの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "キーボードとデジタルピアノの違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "キーボードは多種多様な音色を出せる電子楽器で、61鍵や76鍵のモデルが多いです。デジタルピアノ（電子ピアノ）はピアノの音色・タッチに特化した88鍵のモデルです。シンセサイザーは音作りに特化した電子楽器で、キーボードの一種です。買取では別カテゴリとして扱われることが多いです。" } },
      { "@type": "Question", name: "シンセサイザーの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "シンセサイザーの買取相場はタイプにより大幅に異なります。デジタルシンセはKORG KRONOS2で8万〜15万円、Roland FANTOMで5万〜12万円が目安です。アナログシンセは希少性が高く、Moog Minimoogで30万〜100万円以上になることもあります。" } },
      { "@type": "Question", name: "ビンテージシンセは高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ビンテージシンセ（特にアナログシンセ）は非常に高い需要があります。Moog Minimoog、Roland Jupiter-8、Sequential Prophet-5などの名機は、現行品の数倍の価格で取引されることがあります。状態が良く、全ての機能が動作するものほど高額になります。" } },
      { "@type": "Question", name: "キーボードの付属品は査定に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい、付属品は査定額に大きく影響します。特に専用ケース（ソフトケース/ハードケース）、電源アダプター、サステインペダル、譜面台は重要です。電源アダプターがないと動作確認ができないため、大幅な減額になることがあります。" } },
      { "@type": "Question", name: "キーボード買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】キーボード・シンセサイザー買取おすすめ3社比較｜相場ガイド",
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

export default function KeyboardKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">キーボード買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">シンセサイザー</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】キーボード・シンセサイザー買取おすすめ3社比較｜相場・ビンテージの価値を徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            キーボードやシンセサイザーを売りたいけど、適正価格がわからない方へ。本記事では、キーボード・シンセサイザー買取の人気3サービスを徹底比較し、ステージピアノ・ワークステーション・アナログシンセの買取相場、デジタルピアノとの違い、KORG・Roland・YAMAHA・Nord・Moogなどブランド別の相場目安、そしてビンテージシンセの驚くべき価値について詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月13日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#difference" className="hover:underline">キーボード・シンセとデジタルピアノの違い</a></li>
            <li><a href="#market-price" className="hover:underline">キーボード・シンセ買取相場（種類別）</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#brand-price" className="hover:underline">ブランド別買取相場</a></li>
            <li><a href="#vintage" className="hover:underline">ビンテージシンセの価値</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="difference">キーボード・シンセサイザーとデジタルピアノの違い</h2>

          <p>買取に出す前に、お手持ちの楽器がどのカテゴリに該当するかを確認しましょう。買取市場では<strong>キーボード/シンセサイザーとデジタルピアノ（電子ピアノ）は別カテゴリ</strong>として扱われることが多いです。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">種類</th>
                  <th className="px-4 py-3 text-left font-medium">特徴</th>
                  <th className="px-4 py-3 text-left font-medium">鍵盤数</th>
                  <th className="px-4 py-3 text-left font-medium">代表製品</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">キーボード</td><td className="px-4 py-3">多彩な音色・伴奏機能</td><td className="px-4 py-3">61〜76鍵</td><td className="px-4 py-3 text-warm-gray">YAMAHA PSR、CASIO CTK</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">シンセサイザー</td><td className="px-4 py-3">音作り・音色合成に特化</td><td className="px-4 py-3">25〜88鍵</td><td className="px-4 py-3 text-warm-gray">KORG minilogue、Roland JUNO</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ワークステーション</td><td className="px-4 py-3">シンセ＋シーケンサー＋サンプラー</td><td className="px-4 py-3">61〜88鍵</td><td className="px-4 py-3 text-warm-gray">KORG KRONOS、YAMAHA MONTAGE</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">ステージピアノ</td><td className="px-4 py-3">ライブ向け高品質ピアノ音</td><td className="px-4 py-3">73〜88鍵</td><td className="px-4 py-3 text-warm-gray">Nord Stage、Roland RD</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">デジタルピアノ</td><td className="px-4 py-3">ピアノの代替に特化</td><td className="px-4 py-3">88鍵</td><td className="px-4 py-3 text-warm-gray">YAMAHA CLP、Roland HP</td></tr>
              </tbody>
            </table>
          </div>

          <p>デジタルピアノ（電子ピアノ）の買取については、<Link href="/articles/denshi-piano-kaitori/" className="text-accent hover:underline">電子ピアノ買取おすすめ</Link>の記事で詳しく解説しています。本記事ではキーボード・シンセサイザー・ワークステーション・ステージピアノに焦点を当てます。</p>

          <CtaBox />

          <h2 id="market-price">キーボード・シンセサイザー買取相場（種類別）</h2>

          <h3>ステージピアノの買取相場</h3>

          <p>ステージピアノはライブ演奏向けの高品質な鍵盤楽器で、ピアノ音色の質とタッチ感に優れています。特にNord StageシリーズとRoland RDシリーズは高い人気を誇り、安定した買取価格がつきます。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Nord Stage 4</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜30万円</td><td className="px-4 py-3 text-warm-gray">最新フラッグシップ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Nord Stage 3</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜22万円</td><td className="px-4 py-3 text-warm-gray">前世代も高需要</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Nord Piano 5</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td><td className="px-4 py-3 text-warm-gray">ピアノ特化モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland RD-2000</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">RDシリーズの最上位</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA CP88</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">YAMAHAのステージピアノ</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ワークステーション・シンセサイザーの買取相場</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">KORG KRONOS2</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td><td className="px-4 py-3 text-warm-gray">KORGフラッグシップ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">KORG NAUTILUS</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">KRONOSの後継</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA MONTAGE</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td><td className="px-4 py-3 text-warm-gray">YAMAHAフラッグシップ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA MODX</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜8万円</td><td className="px-4 py-3 text-warm-gray">MONTAGEの弟モデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland FANTOM</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">Rolandフラッグシップ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland JUNO-DS</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td><td className="px-4 py-3 text-warm-gray">軽量で人気</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">KORG minilogue xd</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜4万円</td><td className="px-4 py-3 text-warm-gray">アナログ4ボイス</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland JD-Xi</td><td className="px-4 py-3 text-gold-dark font-bold">1.5万〜3万円</td><td className="px-4 py-3 text-warm-gray">コンパクトクロスオーバー</td></tr>
              </tbody>
            </table>
          </div>

          <h3>アナログシンセサイザーの買取相場</h3>

          <p>アナログシンセサイザーは近年のアナログ復興ブームにより、中古市場での価値が急上昇しています。特にMoogやSequentialなどの名門ブランドの製品は高額買取が期待できます。</p>

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
                <tr className="bg-white"><td className="px-4 py-3">Moog Subsequent 37</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td><td className="px-4 py-3 text-warm-gray">現行Moogの代表格</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Moog Grandmother</td><td className="px-4 py-3 text-gold-dark font-bold">4万〜8万円</td><td className="px-4 py-3 text-warm-gray">セミモジュラー</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Sequential Prophet-6</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td><td className="px-4 py-3 text-warm-gray">Prophet-5の後継</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Sequential Prophet Rev2</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td><td className="px-4 py-3 text-warm-gray">16ボイスポリフォニック</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Nord Lead 4</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜7万円</td><td className="px-4 py-3 text-warm-gray">バーチャルアナログ</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="comparison">キーボード・シンセ買取おすすめ3社を徹底比較</h2>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">対応機種</td><td className="px-4 py-3">全般対応</td><td className="px-4 py-3">全般対応</td><td className="px-4 py-3">全般対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">ビンテージシンセを売りたい人</td><td className="px-4 py-3">コンパクト機材を手軽に売りたい人</td><td className="px-4 py-3">88鍵など大型機材を売りたい人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── ビンテージシンセの適正価格がわかる</h3>

          <p>ヒカカク！では複数の買取業者に一括で査定依頼ができます。特にビンテージシンセや高額なワークステーションは、<strong>業者によって10万円以上の査定差がつくことも珍しくない</strong>ため、一括査定の効果が最も大きいカテゴリです。</p>

          <h3>ティファナ ── コンパクトな機材の宅配買取に便利</h3>

          <p>ティファナは出張・店頭・宅配の3方式に対応。25鍵〜61鍵のコンパクトなシンセサイザーやMIDIキーボードは、宅配買取で手軽に売却できます。梱包キットも無料で提供されるため、箱がなくても安心です。</p>

          <h3>ウリエル ── 88鍵ステージピアノも出張買取で楽々</h3>

          <p>ウリエルの出張買取は、<strong>88鍵のステージピアノやワークステーションなど重量のある機材の売却に最適</strong>です。Nord Stage（約20kg）やKORG KRONOS（約25kg）など、持ち運びが困難な機材も自宅から売却できます。</p>

          <CtaBox />

          <h2 id="brand-price">主要ブランド別 キーボード・シンセ買取相場ガイド</h2>

          <h3>KORG（コルグ）の買取相場</h3>

          <p>KORGは日本を代表するシンセサイザーメーカーで、KRONOSシリーズを筆頭に幅広いラインナップを持ちます。近年はminilogue、prologue、wavestateなどアナログ・新世代シンセも好評です。</p>

          <ul>
            <li><strong>KRONOS2（88鍵）</strong>: 10万〜18万円</li>
            <li><strong>KRONOS2（61鍵）</strong>: 8万〜15万円</li>
            <li><strong>NAUTILUS（88鍵）</strong>: 6万〜12万円</li>
            <li><strong>prologue</strong>: 3万〜7万円</li>
            <li><strong>minilogue xd</strong>: 2万〜4万円</li>
            <li><strong>wavestate</strong>: 2万〜4万円</li>
            <li><strong>Pa1000（アレンジャー）</strong>: 3万〜7万円</li>
          </ul>

          <h3>Roland（ローランド）の買取相場</h3>

          <p>Rolandはシンセサイザーの歴史において最も影響力のあるブランドの一つです。FANTOM、JUNOシリーズなどの現行品から、Jupiter-8、Juno-106などのビンテージまで、幅広い需要があります。</p>

          <ul>
            <li><strong>FANTOM-8（88鍵）</strong>: 8万〜15万円</li>
            <li><strong>FANTOM-6（61鍵）</strong>: 5万〜12万円</li>
            <li><strong>RD-2000</strong>: 5万〜12万円</li>
            <li><strong>JUNO-DS88</strong>: 3万〜6万円</li>
            <li><strong>JUNO-DS61</strong>: 2万〜5万円</li>
            <li><strong>Jupiter-X</strong>: 5万〜10万円</li>
            <li><strong>System-8</strong>: 4万〜8万円</li>
          </ul>

          <h3>YAMAHA（ヤマハ）の買取相場</h3>

          <ul>
            <li><strong>MONTAGE8（88鍵）</strong>: 10万〜20万円</li>
            <li><strong>MONTAGE6（61鍵）</strong>: 8万〜15万円</li>
            <li><strong>MODX8</strong>: 5万〜10万円</li>
            <li><strong>MODX6</strong>: 3万〜7万円</li>
            <li><strong>CP88</strong>: 5万〜12万円</li>
            <li><strong>reface シリーズ</strong>: 1.5万〜3万円</li>
            <li><strong>PSR-SX900（アレンジャー）</strong>: 3万〜7万円</li>
          </ul>

          <h3>Nord（ノード）の買取相場</h3>

          <p>Nordはスウェーデンのメーカーで、赤いボディが特徴的なステージキーボードの最高峰ブランドです。<strong>リセールバリュー（再販価値）が非常に高い</strong>ことで知られ、数年使用しても高額買取が期待できます。</p>

          <ul>
            <li><strong>Nord Stage 4（88鍵）</strong>: 18万〜32万円</li>
            <li><strong>Nord Stage 4（73鍵）</strong>: 15万〜28万円</li>
            <li><strong>Nord Stage 3（88鍵）</strong>: 12万〜22万円</li>
            <li><strong>Nord Piano 5</strong>: 8万〜15万円</li>
            <li><strong>Nord Electro 6</strong>: 5万〜10万円</li>
            <li><strong>Nord Lead 4</strong>: 3万〜7万円</li>
          </ul>

          <h3>Moog（モーグ）の買取相場</h3>

          <p>Moogはアナログシンセサイザーの代名詞とも言えるアメリカのブランドです。手作りの高品質なアナログ回路は唯一無二のサウンドを生み出し、中古市場でも非常に高い評価を受けています。</p>

          <ul>
            <li><strong>Moog One（ポリフォニック）</strong>: 30万〜60万円</li>
            <li><strong>Subsequent 37</strong>: 8万〜15万円</li>
            <li><strong>Grandmother</strong>: 4万〜8万円</li>
            <li><strong>Mother-32</strong>: 2万〜4万円</li>
            <li><strong>Matriarch</strong>: 10万〜18万円</li>
          </ul>

          <CtaBox />

          <h2 id="vintage">ビンテージシンセサイザーの価値</h2>

          <p>ビンテージシンセサイザーは、現代のデジタル技術では再現できない独特のサウンドキャラクターを持つことから、<strong>年々価値が上昇している</strong>カテゴリです。特に1970〜80年代のアナログシンセは、音楽プロデューサーやコレクターの間で非常に高い需要があります。</p>

          <h3>高額ビンテージシンセの例</h3>

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
                <tr className="bg-white"><td className="px-4 py-3">Moog Minimoog Model D（オリジナル）</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜100万円以上</td><td className="px-4 py-3 text-warm-gray">シンセの王様</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland Jupiter-8</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜80万円</td><td className="px-4 py-3 text-warm-gray">80年代ポリシンセの頂点</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Sequential Prophet-5</td><td className="px-4 py-3 text-gold-dark font-bold">25万〜70万円</td><td className="px-4 py-3 text-warm-gray">初のプログラマブルポリシンセ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland Juno-106</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">最も人気のビンテージポリシンセ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland TB-303</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜80万円</td><td className="px-4 py-3 text-warm-gray">アシッドベースの原点</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland TR-808</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜80万円</td><td className="px-4 py-3 text-warm-gray">ヒップホップの礎</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">ARP Odyssey（オリジナル）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td><td className="px-4 py-3 text-warm-gray">デュオフォニックの名機</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Oberheim OB-Xa</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜60万円</td><td className="px-4 py-3 text-warm-gray">80年代サウンドの象徴</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA DX7</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜8万円</td><td className="px-4 py-3 text-warm-gray">FM音源の革命。数は多い</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>ビンテージシンセを売る際の注意点：</strong></p>

          <ul>
            <li>全ての鍵盤・ノブ・スイッチ・スライダーが正常に動作するか確認</li>
            <li>電源が正常に入り、音が出るか（無音の場合は「ジャンク」扱いで大幅減額）</li>
            <li>オリジナルのパーツが残っているか（改造品は減額の可能性）</li>
            <li>ビンテージに詳しい専門業者に査定を依頼すること（一般的な買取業者では適正な評価ができない場合がある）</li>
          </ul>

          <CtaBox />

          <h2 id="faq">キーボード・シンセサイザー買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">キーボードとデジタルピアノの違いは何ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                キーボードは多種多様な音色を出せる電子楽器で、61鍵や76鍵のモデルが多いです。デジタルピアノ（電子ピアノ）はピアノの音色・タッチに特化した88鍵のモデルです。シンセサイザーは音作りに特化した電子楽器です。買取では別カテゴリとして扱われることが多く、デジタルピアノの買取については別記事で詳しく解説しています。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">シンセサイザーの買取相場はいくらですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                シンセサイザーの買取相場はタイプにより大幅に異なります。デジタルシンセはKORG KRONOS2で8万〜15万円、Roland FANTOMで5万〜12万円が目安です。アナログシンセは希少性が高く、Moog Subsequent 37で8万〜15万円、ビンテージのMoog Minimoogは30万〜100万円以上になることもあります。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ビンテージシンセは高く売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、ビンテージシンセ（特にアナログシンセ）は非常に高い需要があります。Moog Minimoog、Roland Jupiter-8、Sequential Prophet-5などの名機は数十万〜100万円以上で取引されることがあります。動作状態が最も重要で、全機能が正常に動作するものほど高額に。ビンテージに詳しい専門業者への査定がおすすめです。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">キーボードの付属品は査定に影響しますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、付属品は査定額に大きく影響します。特に電源アダプターがないと動作確認ができないため大幅減額になることがあります。専用ケース、サステインペダル、譜面台、取扱説明書なども揃っていると査定額アップが期待できます。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">キーボード・シンセ買取にかかる費用はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料が無料です。買取が成立しなかった場合もキャンセル料はかかりません。完全無料で利用できます。
              </div>
            </details>
          </div>

          <h2>まとめ：キーボード・シンセは型番と状態が査定の鍵</h2>

          <p>キーボード・シンセサイザーの買取は、<strong>モデル（型番）と動作状態</strong>が査定額を大きく左右します。特にビンテージアナログシンセは業者によって評価が大きく異なるため、必ず複数業者で比較しましょう。</p>

          <ul>
            <li><strong>ビンテージ・高額機材の最高値を知る</strong> → ヒカカク！で一括査定</li>
            <li><strong>コンパクトな機材を手軽に売る</strong> → ティファナで宅配買取</li>
            <li><strong>88鍵など重い機材を売る</strong> → ウリエルで出張買取</li>
          </ul>

          <p>電源アダプターと付属品を忘れず揃えてから査定に出しましょう。査定は完全無料です。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/denshi-piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">電子ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">電子ピアノ買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ピアノ買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/souba-ichiran/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">相場一覧</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取相場一覧まとめ</h3>
            </Link>
            <Link href="/articles/bass-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ベース買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ベース買取おすすめ3社比較</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取相場一覧｜ギター・ピアノ・管楽器・ドラムの相場まとめ",
  description:
    "楽器の買取相場を楽器カテゴリ別に完全網羅。ギター・ベース・ピアノ・電子ピアノ・管楽器・弦楽器・ドラム・キーボードの代表的なブランド・モデルと買取価格レンジを一覧で解説。相場を左右する5つの要因も紹介。",
  openGraph: {
    title: "【2026年最新】楽器買取相場一覧｜全カテゴリの相場まとめ",
    description: "楽器の買取相場を全カテゴリ別に一覧で解説。ギターからドラムまで、代表的なブランド・モデルの買取価格レンジを完全網羅。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "楽器買取相場一覧", href: "/articles/souba-ichiran/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたの楽器の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "楽器の買取相場はどうやって決まりますか？", acceptedAnswer: { "@type": "Answer", text: "楽器の買取相場は主に(1)ブランド・モデル、(2)楽器の状態、(3)付属品の有無、(4)市場の需要、(5)年式・希少性の5つの要因で決まります。同じモデルでも状態や付属品によって数万円の差が出ることがあります。" } },
      { "@type": "Question", name: "楽器を最も高く売る方法は何ですか？", acceptedAnswer: { "@type": "Answer", text: "楽器を最も高く売るには、複数の買取業者に査定を依頼して比較する「相見積もり」が最も効果的です。ヒカカク！のような一括査定サービスを利用すれば、一度の入力で複数業者の査定額を比較できます。" } },
      { "@type": "Question", name: "壊れた楽器や古い楽器でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、多くの買取業者は壊れた楽器や古い楽器でも査定可能です。特に有名ブランドの楽器は、修理可能な状態であれば値段がつくことがあります。ヴィンテージ楽器は古いほど価値が上がることもあるため、諦めずに査定に出してみましょう。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】楽器買取相場一覧｜全カテゴリの相場まとめ",
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

export default function SoubaIchiranPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">相場一覧</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】楽器買取相場一覧｜全カテゴリの買取価格を完全網羅
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            楽器を売りたいけど、自分の楽器がいくらで売れるのかわからない方へ。本記事では、ギター・ベース・ピアノ・電子ピアノ・管楽器（サックス・トランペット等）・弦楽器（バイオリン・チェロ等）・ドラム・キーボード/シンセサイザーの全カテゴリについて、代表的なブランド・モデルの買取価格レンジを一覧でまとめました。相場を左右する5つの要因も解説しているので、売却前の参考にしてください。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月16日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#guitar" className="hover:underline">ギター買取相場</a></li>
            <li><a href="#bass" className="hover:underline">ベース買取相場</a></li>
            <li><a href="#piano" className="hover:underline">ピアノ買取相場</a></li>
            <li><a href="#denshi-piano" className="hover:underline">電子ピアノ買取相場</a></li>
            <li><a href="#wind" className="hover:underline">管楽器買取相場</a></li>
            <li><a href="#strings" className="hover:underline">弦楽器買取相場</a></li>
            <li><a href="#drum" className="hover:underline">ドラム買取相場</a></li>
            <li><a href="#keyboard" className="hover:underline">キーボード・シンセサイザー買取相場</a></li>
            <li><a href="#factors" className="hover:underline">相場を左右する5つの要因</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          {/* ギター */}
          <h2 id="guitar">ギター買取相場</h2>

          <p>ギターは楽器買取市場で最も取引量が多いカテゴリです。エレキギターとアコースティックギターに大別され、ブランドやモデルによって買取価格は数千円から数百万円まで幅広く変動します。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ブランド・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Gibson Les Paul Standard</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜30万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Gibson SG Standard</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Fender Stratocaster (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜20万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Fender Telecaster (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">PRS Custom 24</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜25万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Martin D-28</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Martin D-45</td><td className="px-4 py-3 text-gold-dark font-bold">25万〜60万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Gibson J-45</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA Lシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜10万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Ibanez Prestige</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/guitar-kaitori/" className="text-accent hover:underline font-medium">→ ギター買取の詳細記事を読む</Link></p>

          {/* ベース */}
          <h2 id="bass">ベース買取相場</h2>

          <p>ベースはギターと比較すると流通量がやや少ないですが、Fender Jazz Bass、Musicman StingRayなどの定番モデルは安定した需要があります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ブランド・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Fender Jazz Bass (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Fender Precision Bass (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜16万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Musicman StingRay</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Rickenbacker 4003</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Gibson Thunderbird</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Warwick Thumb/Streamer</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA BBシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/bass-kaitori/" className="text-accent hover:underline font-medium">→ ベース買取の詳細記事を読む</Link></p>

          {/* ピアノ */}
          <h2 id="piano">ピアノ買取相場</h2>

          <p>アコースティックピアノ（グランドピアノ・アップライトピアノ）は、メーカー・モデル・年式・状態に加え、運搬費用も買取価格に影響します。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">種類・ブランド</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA グランドピアノ（C3等）</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜100万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">KAWAI グランドピアノ</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜80万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA アップライト（U3等）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜25万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">KAWAI アップライト</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Steinway & Sons</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜500万円以上</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Bosendorfer</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜400万円以上</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/piano-kaitori/" className="text-accent hover:underline font-medium">→ ピアノ買取の詳細記事を読む</Link></p>

          {/* 電子ピアノ */}
          <h2 id="denshi-piano">電子ピアノ買取相場</h2>

          <p>電子ピアノは型落ちモデルの価格下落が早いため、売却を考えているなら早めの行動がおすすめです。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ブランド・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA CLP（Clavinova上位）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜12万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA ARIUS（YDP系）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland HP/LXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland FP（ポータブル）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">KAWAI CA/CNシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CASIO Privia PXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/denshi-piano-kaitori/" className="text-accent hover:underline font-medium">→ 電子ピアノ買取の詳細記事を読む</Link></p>

          <CtaBox />

          {/* 管楽器 */}
          <h2 id="wind">管楽器買取相場</h2>

          <p>管楽器はメンテナンス状態が査定額に大きく影響するカテゴリです。タンポの状態やキーの動作が重要な査定ポイントとなります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">種類・ブランド・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Selmer Mark VI（アルトサックス・ヴィンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">40万〜120万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Selmer Series III（アルトサックス）</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜50万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YAS-62（アルトサックス）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜10万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Yanagisawa A-WO1（アルトサックス）</td><td className="px-4 py-3 text-gold-dark font-bold">12万〜25万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Bach Stradivarius（トランペット）</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA YTR-8335（トランペット）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Muramatsu DS/SR（フルート）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Buffet Crampon R13（クラリネット）</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Bach 42BO（トロンボーン）</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/saxophone-kaitori/" className="text-accent hover:underline font-medium">→ サックス・管楽器買取の詳細記事を読む</Link></p>

          {/* 弦楽器 */}
          <h2 id="strings">弦楽器買取相場</h2>

          <p>バイオリンを中心とする弦楽器は、鑑定書の有無が買取価格を決定的に左右します。オールド楽器は数百万〜数千万円の価値がつくこともあります。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">種類・ランク</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">バイオリン（入門用）</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">バイオリン（中級・ドイツ製工房品）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">バイオリン（上級・イタリア製）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜80万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">バイオリン（オールド）</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜数千万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">ビオラ（中級）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">チェロ（中級）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜50万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">コントラバス（中級）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Suzuki No.500〜540（バイオリン）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/violin-kaitori/" className="text-accent hover:underline font-medium">→ バイオリン・弦楽器買取の詳細記事を読む</Link></p>

          <CtaBox />

          {/* ドラム */}
          <h2 id="drum">ドラム買取相場</h2>

          <p>ドラムはセット・単品ともに買取可能です。大型で運搬が困難なため、出張買取の利用がおすすめです。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ブランド・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">DW Collector&apos;s Series（シェルキット）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜30万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">TAMA Starclassic（シェルキット）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜18万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Pearl Masters Maple（シェルキット）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Pearl Export Series（シェルキット）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜5万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA Recording Custom（シェルキット）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland TD-50K2（電子ドラム）</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜20万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland TD-17KVX2（電子ドラム）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜6万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Zildjian K Custom（シンバル1枚）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Ludwig Supraphonic（スネア）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜6万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/drum-kaitori/" className="text-accent hover:underline font-medium">→ ドラム買取の詳細記事を読む</Link></p>

          {/* キーボード */}
          <h2 id="keyboard">キーボード・シンセサイザー買取相場</h2>

          <p>キーボード・シンセサイザーは、現行デジタル機材からビンテージアナログシンセまで幅広い価格帯が存在します。ビンテージシンセは年々価値が上昇しています。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">ブランド・モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Nord Stage 4（ステージピアノ）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜30万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">KORG KRONOS2（ワークステーション）</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA MONTAGE（ワークステーション）</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜18万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland FANTOM（ワークステーション）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Moog Subsequent 37（アナログシンセ）</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜15万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Moog Minimoog Model D（ビンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜100万円以上</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland Jupiter-8（ビンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜80万円</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Sequential Prophet-5（ビンテージ）</td><td className="px-4 py-3 text-gold-dark font-bold">25万〜70万円</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm"><Link href="/articles/keyboard-kaitori/" className="text-accent hover:underline font-medium">→ キーボード・シンセサイザー買取の詳細記事を読む</Link></p>

          <CtaBox />

          {/* 相場を左右する5つの要因 */}
          <h2 id="factors">楽器買取相場を左右する5つの要因</h2>

          <p>楽器の買取相場は一律ではなく、さまざまな要因によって変動します。ここでは、買取価格を左右する主要な5つの要因を解説します。</p>

          <h3>要因1: ブランド・モデル（最も重要）</h3>

          <p>楽器の買取価格を最も大きく左右するのが、ブランドとモデルです。Gibson、Fender、YAMAHA、Selmer、Steinwayなどの有名ブランドは中古市場での需要が安定しており、<strong>同じ状態でもノーブランド品の数倍〜数十倍の買取価格</strong>がつきます。</p>

          <p>特に以下のブランドは「リセールバリュー（再販価値）」が高いことで知られています。</p>

          <ul>
            <li><strong>ギター:</strong> Gibson、Fender、PRS、Martin</li>
            <li><strong>ベース:</strong> Fender、Musicman、Rickenbacker</li>
            <li><strong>ピアノ:</strong> Steinway & Sons、YAMAHA、KAWAI</li>
            <li><strong>管楽器:</strong> Selmer、YAMAHA、Yanagisawa、Muramatsu</li>
            <li><strong>弦楽器:</strong> イタリア製手工品、ドイツ製工房品</li>
            <li><strong>ドラム:</strong> DW、TAMA、Pearl、Ludwig</li>
            <li><strong>キーボード:</strong> Nord、Moog、KORG、Roland</li>
          </ul>

          <h3>要因2: 楽器の状態</h3>

          <p>楽器の状態は買取価格に直結します。以下のポイントが特に重要です。</p>

          <ul>
            <li><strong>外観</strong>: 傷、打痕、塗装の剥がれ、変色の程度</li>
            <li><strong>演奏機能</strong>: 正常に音が出るか、操作系に異常がないか</li>
            <li><strong>構造的な問題</strong>: ネックの反り（ギター/ベース）、タンポの劣化（管楽器）、鍵盤の動作（ピアノ/キーボード）</li>
            <li><strong>メンテナンス履歴</strong>: 定期的にメンテナンスされていた楽器は高評価</li>
          </ul>

          <p>一般的に、<strong>美品（ほぼ新品同様）の買取価格を100%とすると、使用感ありの良品で70〜80%、傷や不具合ありで40〜60%、ジャンク品で10〜30%</strong>程度になります。</p>

          <h3>要因3: 付属品の有無</h3>

          <p>付属品の有無は想像以上に買取価格に影響します。以下の付属品が揃っていると査定額アップが期待できます。</p>

          <ul>
            <li><strong>ケース</strong>: 純正ハードケースは特に高評価（ギター/ベースで1万円以上のプラスになることも）</li>
            <li><strong>保証書・購入証明書</strong>: 正規品の証明になり信頼性向上</li>
            <li><strong>電源アダプター</strong>: キーボード/電子ドラムでは必須（ないと大幅減額）</li>
            <li><strong>鑑定書</strong>: バイオリンなど弦楽器では決定的に重要</li>
            <li><strong>純正パーツ</strong>: 交換した元のパーツがあれば加点</li>
          </ul>

          <h3>要因4: 市場の需要（季節変動）</h3>

          <p>楽器の買取価格は市場の需要によっても変動します。一般的に以下の時期は需要が高まり、買取価格も上がりやすい傾向があります。</p>

          <ul>
            <li><strong>2〜3月（新学期前）</strong>: 吹奏楽部や軽音楽部への入部で楽器需要増</li>
            <li><strong>6〜7月（夏のボーナス期）</strong>: 中古楽器の購入者増</li>
            <li><strong>12月（冬のボーナス期）</strong>: クリスマスプレゼント需要</li>
          </ul>

          <h3>要因5: 年式・希少性</h3>

          <p>楽器の年式は通常、新しいほど高く、古いほど安くなります。<strong>ただし例外があります。</strong>ビンテージ楽器やディスコンモデル（生産終了品）は、古いほど価値が上がることがあります。</p>

          <ul>
            <li><strong>値上がりする楽器</strong>: ビンテージギター（Gibson、Fenderの60〜70年代）、ビンテージシンセ（Moog、Roland等）、オールドバイオリン</li>
            <li><strong>値下がりする楽器</strong>: 電子ピアノ、電子ドラム、デジタルキーボード（新モデル発売で旧モデルの価値が下落）</li>
          </ul>

          <p>電子楽器は技術の進歩が早いため、<strong>売却を考えているなら早めの行動</strong>が高額売却のコツです。</p>

          <CtaBox />

          {/* FAQ */}
          <h2 id="faq">楽器買取相場に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">楽器の買取相場はどうやって決まりますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                楽器の買取相場は主に(1)ブランド・モデル、(2)楽器の状態（外観・演奏機能）、(3)付属品の有無（ケース・保証書等）、(4)市場の需要（季節変動）、(5)年式・希少性の5つの要因で決まります。同じモデルでも状態や付属品によって数万円の差が出ることがあるため、正確な価格を知るには実際に査定に出すことが重要です。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">楽器を最も高く売る方法は何ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                楽器を最も高く売るには、複数の買取業者に査定を依頼して比較する「相見積もり」が最も効果的です。ヒカカク！のような一括査定サービスを利用すれば、一度の入力で複数業者の査定額を比較できます。加えて、付属品を揃える・クリーニングする・需要が高い時期に売る、という3つのポイントも意識しましょう。
              </div>
            </details>

            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れた楽器や古い楽器でも売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、多くの買取業者は壊れた楽器や古い楽器でも査定可能です。特にGibson、Fender、Selmerなどの有名ブランドは、修理可能な状態であれば値段がつくことがあります。ビンテージ楽器は古いほど価値が上がることもあるため、諦めずに査定に出してみましょう。本記事で紹介している3社はすべて査定無料です。
              </div>
            </details>
          </div>

          <h2>まとめ：楽器の適正価格を知るには相見積もりが鉄則</h2>

          <p>楽器の買取価格は、ブランド・状態・付属品・市場需要・年式の5つの要因で決まります。同じ楽器でも業者によって査定額に大きな差が出るため、<strong>必ず複数の業者に査定を依頼して比較すること</strong>が最も重要です。</p>

          <p>楽器カテゴリ別の詳細な買取情報は、以下の個別記事もあわせてご覧ください。</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            <Link href="/articles/guitar-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → ギター買取おすすめ3社比較
            </Link>
            <Link href="/articles/bass-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → ベース買取おすすめ3社比較
            </Link>
            <Link href="/articles/piano-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → ピアノ買取おすすめ3社比較
            </Link>
            <Link href="/articles/denshi-piano-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → 電子ピアノ買取おすすめ3社比較
            </Link>
            <Link href="/articles/saxophone-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → サックス・管楽器買取おすすめ3社比較
            </Link>
            <Link href="/articles/violin-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → バイオリン・弦楽器買取おすすめ3社比較
            </Link>
            <Link href="/articles/drum-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → ドラム買取おすすめ3社比較
            </Link>
            <Link href="/articles/keyboard-kaitori/" className="flex items-center gap-2 bg-white border border-warm-border rounded-lg px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all text-sm font-medium text-accent">
              → キーボード・シンセ買取おすすめ3社比較
            </Link>
          </div>

          <p>今回紹介した3社の使い分けをまとめると以下のようになります。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで店頭/宅配買取</li>
            <li><strong>大型楽器を自宅で売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料なので、まずは気軽にお手持ちの楽器の相場を確認してみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">売却ガイド</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">買取方法</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">買取方法を比較（出張/宅配/店頭）</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取 東京おすすめ3選｜出張・店頭・宅配を比較",
  description:
    "東京で楽器を売るならどこがいい？東京対応の楽器買取おすすめ3社を徹底比較。出張買取・店頭買取・宅配買取の違い、東京エリア別の対応状況、高く売るコツまで解説。ギター・ピアノ・管楽器すべて対応。",
  openGraph: {
    title: "【2026年最新】楽器買取 東京おすすめ3選｜出張・店頭・宅配を比較",
    description: "東京で楽器を売るなら。おすすめ買取3社の比較と高く売るコツを徹底解説。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "楽器買取 東京", href: "/articles/tokyo-gakki-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">東京で楽器の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "東京で楽器を高く売るにはどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "東京で楽器を高く売るには、(1)ヒカカク！で複数業者に一括査定を依頼する、(2)御茶ノ水・渋谷・新宿など楽器店が集まるエリアの専門店も含めて比較する、(3)付属品を揃えてクリーニングしてから査定に出す、の3つが重要です。東京は買取業者が多いため、競争原理を活かして最高値を引き出しましょう。" } },
      { "@type": "Question", name: "東京で出張買取に対応している楽器買取業者は？", acceptedAnswer: { "@type": "Answer", text: "ウリエルは東京23区および多摩地域への出張買取に対応しています。ティファナも東京全域で出張買取を行っています。出張料・査定料は無料で、自宅にいながらギター・ピアノ・管楽器などの査定から買取まで完結します。" } },
      { "@type": "Question", name: "東京の楽器買取で即日現金化は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、可能です。ティファナの店頭買取なら、その場で査定・即日現金化ができます。ウリエルの出張買取でも、買取成立後にその場で現金支払いが可能です。ヒカカク！経由の業者でも即日対応のところがあります。" } },
      { "@type": "Question", name: "東京のどのエリアに楽器買取店が多いですか？", acceptedAnswer: { "@type": "Answer", text: "東京で楽器買取店が集中しているのは、御茶ノ水（ギター・ベース専門店街）、渋谷（大型楽器店が多数）、新宿（総合買取店が豊富）、池袋（楽器店多数）です。ただし、出張買取やオンライン一括査定を使えば、店舗に行く必要なく高額買取が可能です。" } },
      { "@type": "Question", name: "ピアノやドラムなど大型楽器は東京でどうやって売ればいい？", acceptedAnswer: { "@type": "Answer", text: "大型楽器はウリエルの出張買取がおすすめです。東京23区・多摩地域全域に対応しており、搬出作業も査定士が行います。ピアノの場合は専門の運搬業者を手配してくれるサービスもあります。出張料・搬出料は無料です。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】楽器買取 東京おすすめ3選｜出張・店頭・宅配を比較",
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

export default function TokyoGakkiKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">東京</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】楽器買取 東京おすすめ3選｜出張・店頭・宅配を徹底比較
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            東京で楽器を売りたいけど、どの業者を選べばいいかわからない方へ。本記事では、東京エリア対応の楽器買取おすすめ3社を徹底比較。出張買取・店頭買取・宅配買取それぞれのメリット・デメリット、東京の楽器買取事情、高く売るためのコツまで詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月16日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#comparison" className="hover:underline">東京対応おすすめ3社比較</a></li>
            <li><a href="#method" className="hover:underline">出張・店頭・宅配 どれがおすすめ？</a></li>
            <li><a href="#area" className="hover:underline">東京エリア別の楽器買取事情</a></li>
            <li><a href="#tips" className="hover:underline">東京で楽器を高く売るコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="comparison">東京対応の楽器買取おすすめ3社を徹底比較</h2>

          <p>東京には数多くの楽器買取業者がありますが、手数料無料・高額査定・対応の良さで特におすすめの3社をご紹介します。</p>

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
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">東京対応</td><td className="px-4 py-3">全域（オンライン）</td><td className="px-4 py-3">23区+多摩</td><td className="px-4 py-3">23区+多摩</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">即日対応</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">店頭なら即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">対応楽器</td><td className="px-4 py-3">全ジャンル</td><td className="px-4 py-3">全ジャンル</td><td className="px-4 py-3">全ジャンル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅完結・大型OK</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">すぐ売りたい人</td><td className="px-4 py-3">大型楽器を売る人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 東京の買取業者を一括比較</h3>
          <p>東京は楽器買取業者の数が日本一多いエリアです。その分、業者によって査定額に大きな差が出ます。ヒカカク！なら、<strong>東京対応の複数業者に一括で査定依頼でき、最高値の業者がすぐにわかります</strong>。御茶ノ水の専門店から大手リサイクルショップまで幅広い業者が参加しています。</p>

          <h3>ティファナ ── 東京で店頭買取・出張買取に対応</h3>
          <p>ティファナは東京都内に複数の店舗を構え、店頭での即日査定・現金化が可能です。出張買取も東京全域に対応しており、<strong>年間4万件の実績</strong>で安心感があります。楽器以外のアイテムもまとめて売れるのがメリットです。</p>

          <h3>ウリエル ── 東京23区・多摩地域へ出張買取</h3>
          <p>ウリエルは東京23区はもちろん、八王子・町田・立川などの多摩地域にも出張買取で対応。<strong>ピアノやドラムセットなど大型楽器の搬出もお任せ</strong>できます。出張料・査定料は完全無料です。</p>

          <CtaBox />

          <h2 id="method">出張・店頭・宅配 ── 東京ではどれがおすすめ？</h2>

          <h3>出張買取がおすすめなケース</h3>
          <ul>
            <li>ピアノ、ドラムセットなど大型楽器を売りたい</li>
            <li>複数の楽器をまとめて売りたい</li>
            <li>仕事が忙しく店舗に行く時間がない</li>
            <li>高額楽器で対面交渉したい</li>
          </ul>

          <h3>店頭買取がおすすめなケース</h3>
          <ul>
            <li>今すぐ現金が欲しい（即日現金化）</li>
            <li>御茶ノ水・渋谷など楽器店街の近くに住んでいる</li>
            <li>ギター1本など持ち運びやすい楽器を売りたい</li>
            <li>査定士と直接話しながら交渉したい</li>
          </ul>

          <h3>宅配買取がおすすめなケース</h3>
          <ul>
            <li>自分のペースで売りたい（対面が苦手）</li>
            <li>コンパクトな楽器（エフェクター・マウスピース等）を売りたい</li>
            <li>時間を気にせず送りたい</li>
          </ul>

          <p>東京にお住まいなら、<strong>まずヒカカク！で一括査定して相場を把握し、その後で最適な買取方法を選ぶ</strong>のが最も効率的です。</p>

          <CtaBox />

          <h2 id="area">東京エリア別の楽器買取事情</h2>

          <h3>御茶ノ水・神保町エリア</h3>
          <p>日本最大のギター・ベース専門店街。<strong>イシバシ楽器、クロサワ楽器、ギタープラネット</strong>など大手楽器店が集中しており、店頭買取の選択肢が豊富です。ただし、専門店は在庫状況によって査定額が変動するため、事前にヒカカク！で相場を把握してから持ち込むのがおすすめです。</p>

          <h3>渋谷・新宿エリア</h3>
          <p>大型楽器店（島村楽器、イケベ楽器）や総合リサイクルショップが多く、<strong>楽器以外のアイテムもまとめて売りやすい</strong>エリアです。駅チカの店舗が多いためアクセスも良好。</p>

          <h3>池袋エリア</h3>
          <p>イケベ楽器の本拠地があり、楽器買取に力を入れている店舗が複数あります。<strong>電子楽器・DJ機器の買取</strong>にも強いエリアです。</p>

          <h3>23区外（多摩地域）</h3>
          <p>八王子・町田・立川などの多摩地域は、店頭買取の選択肢が限られるため、<strong>出張買取（ウリエル）か宅配買取がおすすめ</strong>です。ヒカカク！の一括査定ならオンラインで完結するため、多摩地域でも問題なく利用できます。</p>

          <CtaBox />

          <h2 id="tips">東京で楽器を高く売るための4つのコツ</h2>

          <h3>コツ1: 東京の競争環境を活かして複数社に査定</h3>
          <p>東京は買取業者が最も多いエリアです。この<strong>競争環境を最大限に活かすため、必ず複数社に査定を依頼</strong>しましょう。ヒカカク！を使えば一度の入力で複数社に査定依頼できます。</p>

          <h3>コツ2: 付属品を揃えてクリーニング</h3>
          <p>純正ケース、保証書、付属品を揃え、楽器をきれいにしてから査定に出しましょう。<strong>見た目の第一印象は査定額に大きく影響</strong>します。</p>

          <h3>コツ3: 専門店と総合買取店を使い分ける</h3>
          <p>高額ギター（Gibson、Fenderなど）は御茶ノ水の専門店に持ち込み、一般的な楽器はヒカカク！で一括査定するなど、<strong>楽器の種類に合わせて使い分ける</strong>のが賢い方法です。</p>

          <h3>コツ4: 売却タイミングを見極める</h3>
          <ul>
            <li><strong>2〜3月（新学期前）</strong>: 新入生の需要で高額になりやすい</li>
            <li><strong>ボーナス時期（6〜7月、12月）</strong>: 中古楽器の購買意欲が高まる</li>
            <li><strong>引っ越しシーズン（1〜3月）</strong>: まとめ売りで交渉しやすい</li>
          </ul>

          <CtaBox />

          <h2 id="faq">東京の楽器買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">東京で楽器を高く売るにはどうすればいいですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                東京で楽器を高く売るには、(1)ヒカカク！で複数業者に一括査定を依頼する、(2)御茶ノ水・渋谷・新宿など楽器店が集まるエリアの専門店も含めて比較する、(3)付属品を揃えてクリーニングしてから査定に出す、の3つが重要です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">東京で出張買取に対応している業者は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ウリエルは東京23区および多摩地域への出張買取に対応しています。ティファナも東京全域で出張買取を行っています。出張料・査定料は無料で、自宅にいながら査定から買取まで完結します。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">東京の楽器買取で即日現金化は可能ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、可能です。ティファナの店頭買取なら、その場で査定・即日現金化ができます。ウリエルの出張買取でも、買取成立後にその場で現金支払いが可能です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">東京のどのエリアに楽器買取店が多いですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                御茶ノ水（ギター・ベース専門店街）、渋谷（大型楽器店が多数）、新宿（総合買取店が豊富）、池袋（楽器店多数）です。ただし、出張買取やオンライン一括査定を使えば、店舗に行く必要なく高額買取が可能です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ピアノやドラムなど大型楽器は東京でどうやって売ればいい？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                大型楽器はウリエルの出張買取がおすすめです。東京23区・多摩地域全域に対応しており、搬出作業も査定士が行います。出張料・搬出料は無料です。
              </div>
            </details>
          </div>

          <h2>まとめ：東京なら競争環境を活かして最高値を狙おう</h2>

          <p>東京は日本一楽器買取業者が多いエリアです。この競争環境を最大限に活用し、<strong>必ず複数社に査定を依頼して比較</strong>しましょう。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>すぐに売りたい</strong> → ティファナで店頭買取</li>
            <li><strong>大型楽器・まとめ売り</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料。まずはヒカカク！で相場をチェックしてみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/osaka-gakki-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">大阪</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取 大阪おすすめ3選</h3>
            </Link>
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ピアノ買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ピアノ買取おすすめ3社比較</h3>
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年版】楽器の買取方法4つを徹底比較｜一括査定・出張・店頭・宅配",
  description:
    "楽器の買取方法4つ（一括査定・出張買取・店頭買取・宅配買取）を徹底比較。それぞれのメリット・デメリット、楽器別のおすすめ方法、3社の対応表まで解説します。",
  openGraph: {
    title: "【2026年版】楽器の買取方法4つを徹底比較｜一括査定・出張・店頭・宅配",
    description: "楽器の買取方法4つのメリット・デメリットを比較。楽器別のおすすめ方法と3社の対応表も。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "買取方法比較", href: "/articles/kaitori-houhou-hikaku/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
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
      { "@type": "Question", name: "楽器の出張買取と宅配買取、どちらがおすすめですか？", acceptedAnswer: { "@type": "Answer", text: "大型楽器（ピアノ、ドラムセット等）や高額楽器は出張買取がおすすめです。対面で交渉でき、運搬リスクもありません。小型・軽量の楽器（ギター、管楽器等）は宅配買取でも問題ありません。複数の楽器をまとめて売る場合は出張買取が効率的です。" } },
      { "@type": "Question", name: "一括査定とは何ですか？", acceptedAnswer: { "@type": "Answer", text: "一括査定とは、一度の入力で複数の買取業者に同時に査定依頼できるサービスです。ヒカカク！などのサービスを使えば、楽器の情報を1回入力するだけで複数業者から見積もりが届きます。業者間の競争が生まれるため、高い買取価格が期待できます。" } },
      { "@type": "Question", name: "買取にかかる費用はありますか？", acceptedAnswer: { "@type": "Answer", text: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料無料です。出張買取の場合の出張料も基本的に無料で、宅配買取の送料も業者負担が一般的です。キャンセル料もかかりません。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年版】楽器の買取方法4つを徹底比較",
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

export default function KaitoriHouhouHikakuPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">買取方法比較</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年版】楽器の買取方法4つを徹底比較｜一括査定・出張・店頭・宅配
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            楽器を売りたいけど、どの方法で売ればいいかわからない方へ。一括査定・出張買取・店頭買取・宅配買取の4つの方法を、メリット・デメリットを含めて徹底比較。楽器の種類や状況別のおすすめ方法と、3社の対応表もまとめました。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月16日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#ikkatsu" className="hover:underline">一括査定（複数業者比較）</a></li>
            <li><a href="#shutcho" className="hover:underline">出張買取</a></li>
            <li><a href="#tentou" className="hover:underline">店頭買取</a></li>
            <li><a href="#takuhai" className="hover:underline">宅配買取</a></li>
            <li><a href="#merit-demerit" className="hover:underline">メリデメ比較表</a></li>
            <li><a href="#by-instrument" className="hover:underline">楽器別おすすめ方法</a></li>
            <li><a href="#service-table" className="hover:underline">3社の対応表</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <p>楽器の買取方法は大きく4つに分類できます。それぞれの特徴を理解し、自分の楽器や状況に合った方法を選ぶことが、満足のいく売却につながります。</p>

          <h2 id="ikkatsu">方法1: 一括査定（複数業者比較）</h2>

          <p>一括査定とは、<strong>一度の入力で複数の買取業者に同時に査定依頼できるサービス</strong>です。代表的なサービスとして「ヒカカク！」があります。</p>

          <h3>一括査定の仕組み</h3>

          <ol>
            <li>ヒカカク！のサイトで楽器の情報（メーカー・型番・状態等）を入力</li>
            <li>提携している複数の買取業者に自動的に査定依頼が送信される</li>
            <li>各業者から査定結果（見積もり額）が届く</li>
            <li>最も条件の良い業者を選んで買取を依頼</li>
          </ol>

          <h3>一括査定のメリット</h3>

          <ul>
            <li><strong>最高値が見つかる</strong>: 業者間の競争が生まれるため、1社だけに依頼するよりも高い金額が出やすい</li>
            <li><strong>手間が少ない</strong>: 情報を1回入力するだけで複数社に依頼完了</li>
            <li><strong>相場がわかる</strong>: 複数の見積もりを比較することで、自分の楽器の適正な相場が把握できる</li>
            <li><strong>無料</strong>: 査定依頼は完全無料。キャンセル料もなし</li>
          </ul>

          <h3>一括査定のデメリット</h3>

          <ul>
            <li><strong>複数業者からの連絡</strong>: メールや電話で複数業者から連絡が来る</li>
            <li><strong>最終的な買取は別途手配</strong>: 査定後、実際の買取は出張・宅配等で別途手配する必要がある</li>
            <li><strong>査定額は概算</strong>: 実物を見ないWeb査定のため、実際の買取額と差が出ることもある</li>
          </ul>

          <p><strong>こんな人におすすめ:</strong> 高額楽器を売りたい人、相場を把握してから売り先を決めたい人、少しでも高く売りたい人</p>

          <h2 id="shutcho">方法2: 出張買取</h2>

          <p>出張買取は、<strong>買取業者のスタッフが自宅まで来て、その場で査定・買取を行う方法</strong>です。ウリエルが出張買取専門のサービスとして知られています。</p>

          <h3>出張買取の流れ</h3>

          <ol>
            <li>Webまたは電話で出張買取を申し込み</li>
            <li>日時を調整し、査定士が自宅に訪問</li>
            <li>楽器を実物で査定し、買取価格を提示</li>
            <li>納得すれば買取成立、その場で現金支払い</li>
            <li>楽器の搬出は業者が対応</li>
          </ol>

          <h3>出張買取のメリット</h3>

          <ul>
            <li><strong>運搬不要</strong>: 重いピアノやドラムセットも、業者が搬出してくれる</li>
            <li><strong>対面で交渉可能</strong>: 査定士と直接話しながら、楽器の価値をアピールできる</li>
            <li><strong>即日現金化</strong>: その場で現金を受け取れる（業者による）</li>
            <li><strong>まとめ売りに便利</strong>: 複数の楽器や機材を一度に売却できる</li>
            <li><strong>梱包不要</strong>: 宅配買取のような梱包の手間がない</li>
          </ul>

          <h3>出張買取のデメリット</h3>

          <ul>
            <li><strong>日程調整が必要</strong>: 自分の都合と業者の空き状況を合わせる必要がある</li>
            <li><strong>対応エリアの制限</strong>: 都市部以外は対応していないことがある</li>
            <li><strong>自宅に人を招く</strong>: 知らない人を家に入れることに抵抗がある人には不向き</li>
            <li><strong>断りづらい</strong>: 対面での査定は断りづらいと感じる人もいる（もちろん断ってもOK）</li>
          </ul>

          <p><strong>こんな人におすすめ:</strong> ピアノなど大型楽器を売りたい人、複数の楽器をまとめて売りたい人、梱包が面倒な人、即日で現金が欲しい人</p>

          <h2 id="tentou">方法3: 店頭買取</h2>

          <p>店頭買取は、<strong>自分で楽器を買取店に持ち込み、その場で査定・買取してもらう方法</strong>です。ティファナは全国に店舗を持つ総合買取店で、店頭買取にも対応しています。</p>

          <h3>店頭買取の流れ</h3>

          <ol>
            <li>楽器を持って最寄りの買取店に来店（予約不要の場合が多い）</li>
            <li>その場で査定（通常10〜30分）</li>
            <li>買取価格に納得すれば売却、即現金化</li>
            <li>納得できなければそのまま持ち帰り</li>
          </ol>

          <h3>店頭買取のメリット</h3>

          <ul>
            <li><strong>最速で現金化</strong>: 持ち込んだその日に現金を受け取れる</li>
            <li><strong>予約不要</strong>: 思い立った時にすぐ行ける（営業時間内）</li>
            <li><strong>対面で状態を確認</strong>: 査定の過程を目の前で見られる</li>
            <li><strong>その場で比較</strong>: 近くに複数の買取店があれば、はしごして比較も可能</li>
          </ul>

          <h3>店頭買取のデメリット</h3>

          <ul>
            <li><strong>自分で運搬が必要</strong>: ギターケースを担いで電車移動は大変</li>
            <li><strong>大型楽器は不可</strong>: ピアノやドラムセットは店頭持ち込み不可</li>
            <li><strong>近くに店舗がないと不便</strong>: 地方在住だと選択肢が限られる</li>
            <li><strong>1店舗の査定額のみ</strong>: 複数店をはしごしないと相場がわからない</li>
          </ul>

          <p><strong>こんな人におすすめ:</strong> すぐに現金化したい人、近くに買取店がある人、小型の楽器（ギター・管楽器等）を売りたい人</p>

          <h2 id="takuhai">方法4: 宅配買取</h2>

          <p>宅配買取は、<strong>楽器を梱包して業者に送り、査定結果を確認して買取してもらう方法</strong>です。ティファナの宅配買取は送料無料で利用できます。</p>

          <h3>宅配買取の流れ</h3>

          <ol>
            <li>Webで宅配買取を申し込み</li>
            <li>梱包キットが届く（または自分で梱包）</li>
            <li>楽器を梱包して集荷依頼（または持ち込み）</li>
            <li>業者が受け取り後、査定（1〜3日）</li>
            <li>査定結果に同意すれば買取成立、銀行振込</li>
          </ol>

          <h3>宅配買取のメリット</h3>

          <ul>
            <li><strong>自宅で完結</strong>: 店舗に行く必要がなく、全国どこからでも利用可能</li>
            <li><strong>対面不要</strong>: 人と会わずに売却できる</li>
            <li><strong>送料無料</strong>: 多くの業者は送料を負担してくれる</li>
            <li><strong>時間を選ばない</strong>: 集荷の時間以外は自分のペースで進められる</li>
          </ul>

          <h3>宅配買取のデメリット</h3>

          <ul>
            <li><strong>梱包の手間</strong>: 楽器は精密品のため、丁寧な梱包が必要</li>
            <li><strong>輸送リスク</strong>: 運搬中の破損リスクがゼロではない</li>
            <li><strong>日数がかかる</strong>: 発送から入金まで1週間程度かかることも</li>
            <li><strong>大型楽器は困難</strong>: ピアノやドラムの宅配は現実的ではない</li>
            <li><strong>返送時の送料</strong>: 査定額に納得できずキャンセルした場合、返送料がかかることがある</li>
          </ul>

          <p><strong>こんな人におすすめ:</strong> 地方在住で店舗が近くにない人、対面が苦手な人、小型・軽量の楽器を売りたい人</p>

          <CtaBox />

          <h2 id="merit-demerit">4つの買取方法メリット・デメリット比較表</h2>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-3 py-3 text-left font-medium">項目</th>
                  <th className="px-3 py-3 text-left font-medium">一括査定</th>
                  <th className="px-3 py-3 text-left font-medium">出張買取</th>
                  <th className="px-3 py-3 text-left font-medium">店頭買取</th>
                  <th className="px-3 py-3 text-left font-medium">宅配買取</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-3 py-3 font-medium">買取価格</td><td className="px-3 py-3 text-gold-dark font-bold">最も高い</td><td className="px-3 py-3">高い</td><td className="px-3 py-3">普通</td><td className="px-3 py-3">普通</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-3 font-medium">手軽さ</td><td className="px-3 py-3">普通</td><td className="px-3 py-3">高い</td><td className="px-3 py-3 text-gold-dark font-bold">最も高い</td><td className="px-3 py-3">普通</td></tr>
                <tr className="bg-white"><td className="px-3 py-3 font-medium">スピード</td><td className="px-3 py-3">1〜3日</td><td className="px-3 py-3 text-gold-dark font-bold">即日</td><td className="px-3 py-3 text-gold-dark font-bold">即日</td><td className="px-3 py-3">3〜7日</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-3 font-medium">大型楽器</td><td className="px-3 py-3">対応</td><td className="px-3 py-3 text-gold-dark font-bold">最適</td><td className="px-3 py-3">不可</td><td className="px-3 py-3">困難</td></tr>
                <tr className="bg-white"><td className="px-3 py-3 font-medium">対面不要</td><td className="px-3 py-3">可能</td><td className="px-3 py-3">不可</td><td className="px-3 py-3">不可</td><td className="px-3 py-3 text-gold-dark font-bold">可能</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-3 font-medium">全国対応</td><td className="px-3 py-3">対応</td><td className="px-3 py-3">エリア限定</td><td className="px-3 py-3">店舗周辺のみ</td><td className="px-3 py-3 text-gold-dark font-bold">全国</td></tr>
                <tr className="bg-white"><td className="px-3 py-3 font-medium">費用</td><td className="px-3 py-3">無料</td><td className="px-3 py-3">無料</td><td className="px-3 py-3">無料</td><td className="px-3 py-3">送料無料*</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mb-6">*返送時の送料がかかる場合あり</p>

          <h2 id="by-instrument">楽器別おすすめ買取方法</h2>

          <p>楽器の種類やサイズ、期待買取額によって最適な方法は異なります。以下のガイドを参考にしてください。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">楽器</th>
                  <th className="px-4 py-3 text-left font-medium">最適な方法</th>
                  <th className="px-4 py-3 text-left font-medium">理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">グランドピアノ</td><td className="px-4 py-3 text-gold-dark font-bold">出張買取</td><td className="px-4 py-3 text-warm-gray">搬出が必要。専門業者に任せるべき</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">アップライトピアノ</td><td className="px-4 py-3 text-gold-dark font-bold">出張買取</td><td className="px-4 py-3 text-warm-gray">200kg以上あるため運搬は業者頼み</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">電子ピアノ（据え置き）</td><td className="px-4 py-3 text-gold-dark font-bold">出張買取</td><td className="px-4 py-3 text-warm-gray">分解・搬出を業者に任せられる</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">電子ピアノ（ポータブル）</td><td className="px-4 py-3 text-gold-dark font-bold">宅配 or 店頭</td><td className="px-4 py-3 text-warm-gray">軽量で梱包・持ち込みが容易</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">高額ギター（Gibson等）</td><td className="px-4 py-3 text-gold-dark font-bold">一括査定→出張</td><td className="px-4 py-3 text-warm-gray">価格差が大きいため要比較</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">一般的なギター</td><td className="px-4 py-3 text-gold-dark font-bold">店頭 or 宅配</td><td className="px-4 py-3 text-warm-gray">手軽さ重視でOK</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ベース</td><td className="px-4 py-3 text-gold-dark font-bold">店頭 or 宅配</td><td className="px-4 py-3 text-warm-gray">ギターと同様</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">管楽器</td><td className="px-4 py-3 text-gold-dark font-bold">一括査定</td><td className="px-4 py-3 text-warm-gray">専門店の査定が重要</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ドラムセット</td><td className="px-4 py-3 text-gold-dark font-bold">出張買取</td><td className="px-4 py-3 text-warm-gray">パーツが多く運搬が大変</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">DJ機器</td><td className="px-4 py-3 text-gold-dark font-bold">一括査定→宅配</td><td className="px-4 py-3 text-warm-gray">専門店に繋がりやすい</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">まとめ売り（複数楽器）</td><td className="px-4 py-3 text-gold-dark font-bold">出張買取</td><td className="px-4 py-3 text-warm-gray">一度で全部片付く</td></tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2 id="service-table">3社の対応方法一覧</h2>

          <p>おすすめ3社がそれぞれどの買取方法に対応しているかをまとめました。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">方法</th>
                  <th className="px-4 py-3 text-center font-medium">ヒカカク！</th>
                  <th className="px-4 py-3 text-center font-medium">ティファナ</th>
                  <th className="px-4 py-3 text-center font-medium">ウリエル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">一括査定</td><td className="px-4 py-3 text-center text-gold-dark font-bold">主力</td><td className="px-4 py-3 text-center">-</td><td className="px-4 py-3 text-center">-</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">出張買取</td><td className="px-4 py-3 text-center text-warm-gray">提携業者</td><td className="px-4 py-3 text-center text-gold-dark font-bold">対応</td><td className="px-4 py-3 text-center text-gold-dark font-bold">主力</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">店頭買取</td><td className="px-4 py-3 text-center text-warm-gray">提携業者</td><td className="px-4 py-3 text-center text-gold-dark font-bold">対応</td><td className="px-4 py-3 text-center">-</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">宅配買取</td><td className="px-4 py-3 text-center text-warm-gray">提携業者</td><td className="px-4 py-3 text-center text-gold-dark font-bold">対応</td><td className="px-4 py-3 text-center">-</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定料</td><td className="px-4 py-3 text-center">無料</td><td className="px-4 py-3 text-center">無料</td><td className="px-4 py-3 text-center">無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">対応地域</td><td className="px-4 py-3 text-center">全国</td><td className="px-4 py-3 text-center">全国</td><td className="px-4 py-3 text-center">全国主要都市</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-center text-gold-dark font-bold">最高値比較</td><td className="px-4 py-3 text-center text-gold-dark font-bold">3方式対応</td><td className="px-4 py-3 text-center text-gold-dark font-bold">出張専門</td></tr>
              </tbody>
            </table>
          </div>

          <h3>おすすめの組み合わせ</h3>

          <p>最も効率的な買取方法の選び方は、以下の2ステップです。</p>

          <ol>
            <li><strong>ステップ1: ヒカカク！で一括査定</strong> → 相場を把握し、最高値の業者を見つける</li>
            <li><strong>ステップ2: 最適な方法で実際の買取</strong> → 大型楽器はウリエルで出張買取、小型楽器はティファナで店頭/宅配買取</li>
          </ol>

          <p>この2ステップを踏むことで、<strong>「最高値」と「手軽さ」を両立</strong>できます。</p>

          <CtaBox />

          <h2 id="faq">よくある質問</h2>

          <div className="space-y-4 mt-6">
            {[
              { q: "楽器の出張買取と宅配買取、どちらがおすすめですか？", a: "大型楽器（ピアノ、ドラムセット等）や高額楽器は出張買取がおすすめです。対面で交渉でき、運搬リスクもありません。小型・軽量の楽器（ギター、管楽器等）は宅配買取でも問題ありません。複数の楽器をまとめて売る場合は出張買取が効率的です。" },
              { q: "一括査定とは何ですか？", a: "一括査定とは、一度の入力で複数の買取業者に同時に査定依頼できるサービスです。ヒカカク！などのサービスを使えば、楽器の情報を1回入力するだけで複数業者から見積もりが届きます。業者間の競争が生まれるため、高い買取価格が期待できます。" },
              { q: "買取にかかる費用はありますか？", a: "本記事で紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料無料です。出張買取の出張料も基本無料で、宅配買取の送料も業者負担が一般的です。キャンセル料もかかりません。" },
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

          <h2>まとめ：まず一括査定で相場を把握してから方法を選ぶ</h2>

          <p>楽器の買取方法は4つありますが、<strong>まずはヒカカク！で一括査定を取り、相場を把握することから始めるのが最も賢い方法です</strong>。相場を知った上で、楽器の種類や自分の状況に合った方法を選びましょう。</p>

          <ul>
            <li><strong>相場を把握したい</strong> → ヒカカク！で一括査定</li>
            <li><strong>大型楽器を売りたい</strong> → ウリエルで出張買取</li>
            <li><strong>手軽に売りたい</strong> → ティファナで店頭/宅配買取</li>
          </ul>

          <p>すべて査定無料・キャンセル無料なので、まずは気軽に試してみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

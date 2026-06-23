import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "新宿の楽器買取はどこがいい？相場とおすすめ3社を比較【2026年6月】",
  description:
    "新宿で楽器を売るならどこがいい？出張・店頭・宅配の特徴と買取相場の目安、新宿・高田馬場・中野エリアの事情、おすすめ3社の比較、高く売るコツまで解説。無料査定だけの利用もOK。ギター・ピアノ・管楽器に対応。",
  openGraph: {
    title: "新宿の楽器買取はどこがいい？相場とおすすめ3社を比較【2026年6月】",
    description: "新宿で楽器を売るなら。買取相場の目安とおすすめ3社の比較、高く売るコツを解説。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "楽器買取 新宿", href: "/articles/shinjuku-gakki-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">新宿で楽器の買取価格を今すぐチェック</p>
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
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "新宿で楽器を高く売れる買取業者はどこですか？", acceptedAnswer: { "@type": "Answer", text: "新宿で楽器を高く売るには、ヒカカク！の一括査定で複数業者を比較するのがおすすめです。一括査定で相場を把握してから売却先を決めると、損をしにくくなります。" } },
      { "@type": "Question", name: "新宿で出張買取に来てくれる業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ウリエルは新宿エリアに出張買取に対応しています。ご自宅まで査定士が訪問し、その場で査定・買取が可能です。大型楽器やピアノの売却に便利です。" } },
      { "@type": "Question", name: "新宿の楽器買取相場はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "楽器の買取相場はブランド・モデル・状態によって異なります。Gibson Les Paul Standardで10万〜30万円、YAMAHA アップライトピアノで3万〜15万円、Fender Stratocaster USAで5万〜20万円が一般的な目安です。正確な金額は複数業者に査定依頼して確認しましょう。" } },
      { "@type": "Question", name: "壊れた楽器でも新宿で買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、壊れた楽器やジャンク品でも査定可能です。ヒカカク！やティファナでは状態を問わず査定を受け付けており、ブランド品は壊れていても値段がつくことがあります。" } },
      { "@type": "Question", name: "新宿から宅配買取で楽器を送れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ティファナの宅配買取なら新宿から全国の買取業者に楽器を送れます。送料・査定料・キャンセル料はすべて無料です。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】楽器買取 新宿おすすめ3選｜出張・店頭・宅配を比較",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "楽器買取びより" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年最新】楽器買取 新宿おすすめ3選｜出張・店頭・宅配を徹底比較\", \"item\": \"https://gakkikaitori-biyori.com/articles/shinjuku-gakki-kaitori/\"}]}" }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">新宿エリア</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】楽器買取 新宿おすすめ3選｜出張・店頭・宅配を徹底比較
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            新宿で楽器を売りたいけど、どの買取業者を選べばいいかわからない方へ。本記事では、新宿エリア対応の楽器買取おすすめ3社（ヒカカク！・ティファナ・ウリエル）を徹底比較し、新宿・高田馬場・中野など主要エリアの買取事情から、高く売るコツまで詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#overview" className="hover:underline">新宿の楽器買取事情</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#area-guide" className="hover:underline">新宿エリア別ガイド</a></li>
            <li><a href="#popular-instruments" className="hover:underline">新宿で人気の楽器と買取相場</a></li>
            <li><a href="#tips" className="hover:underline">新宿で楽器を高く売るコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="overview">新宿の楽器買取事情 ── 東京最大のターミナル駅</h2>

          <p>新宿は1日の乗降客数が世界一のターミナル駅であり、東京の交通・商業の中心地です。新宿駅周辺には大手楽器チェーンの店舗があり、楽器の買取サービスも行われています。</p>

          <p>新宿エリアは<strong>音楽スタジオやライブハウスが多い</strong>のが特徴です。新宿ロフト（LOFT）をはじめとするライブハウスがあり、バンド活動が盛んなエリア。高田馬場にもライブハウスやスタジオがあり、学生を中心としたバンドシーンが活発です。</p>

          <p>また、中野ブロードウェイ周辺にはヴィンテージ楽器やレアなエフェクターを扱う店舗もあり、マニアックな楽器の売買が行われています。</p>

          <p>新宿は交通の便が良いため、楽器の持ち込みがしやすいエリアですが、複数店を回る手間を考えると、ヒカカク！で一括査定を行った方が効率的です。</p>

          <CtaBox />

          <h2 id="comparison">新宿対応の楽器買取おすすめ3社を徹底比較</h2>

          <p>新宿エリアに対応している楽器買取3社を、買取方法・特徴・スピードの面から比較します。</p>

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
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">新宿対応</td><td className="px-4 py-3">全国対応（新宿含む）</td><td className="px-4 py-3">全国対応（新宿含む）</td><td className="px-4 py-3">新宿エリア出張可</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定スピード</td><td className="px-4 py-3">最短即日（複数社）</td><td className="px-4 py-3">最短即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">運搬が面倒な人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定で新宿の最高値が見つかる</h3>

          <p>ヒカカク！は複数の買取業者に一括で査定依頼できるサービスです。新宿にいながら全国の買取業者に査定を出せるため、<strong>地元の楽器店だけでは得られない高額査定を受けられる可能性</strong>があります。楽器1点の情報を入力するだけで複数の査定額が届き、最も高い業者を選んで売却できます。</p>

          <h3>ティファナ ── 出張・店頭・宅配の3方式対応</h3>

          <p>ティファナは年間4万件の買取実績を持つ総合買取サービスです。出張・店頭・宅配の3つの方法に対応し、新宿からも利用可能です。楽器の状態を問わず査定してくれるのが強みで、「売れるかわからない」楽器も気軽に相談できます。</p>

          <h3>ウリエル ── 新宿エリアの出張買取に対応</h3>

          <p>ウリエルは出張買取専門のサービスで、新宿エリアに対応しています。ピアノやドラムセットなどの大型楽器は運搬が大変ですが、ウリエルなら<strong>自宅にいながら査定から買取まで完結</strong>します。買取成立後はその場で現金を受け取れます。</p>

          <CtaBox />

          <h2 id="area-guide">新宿エリア別 楽器買取ガイド</h2>



          <h2 id="popular-instruments">新宿で人気の楽器と買取相場</h2>

          <p>新宿エリアで特に需要が高い楽器の買取相場をまとめました。以下は2026年現在の一般的な目安です。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">楽器</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">Gibson Les Paul Standard</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜30万円</td><td className="px-4 py-3 text-warm-gray">年式・状態で大幅変動</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Fender Stratocaster (USA)</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜20万円</td><td className="px-4 py-3 text-warm-gray">Custom Shopは30万円超も</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA アップライトピアノ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td><td className="px-4 py-3 text-warm-gray">U1/U3シリーズが定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland 電子ピアノ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜10万円</td><td className="px-4 py-3 text-warm-gray">上位機種ほど高額</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Martin D-28</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜25万円</td><td className="px-4 py-3 text-warm-gray">アコギの定番名機</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Pearl ドラムセット</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜15万円</td><td className="px-4 py-3 text-warm-gray">シリーズにより変動</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA サックス</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td><td className="px-4 py-3 text-warm-gray">YAS-62以上は高め</td></tr>
              </tbody>
            </table>
          </div>

          <p>上記はあくまで目安です。<strong>正確な買取価格を知るには、複数の業者に査定を依頼しましょう。</strong></p>

          <CtaBox />

          <h2 id="tips">新宿で楽器を高く売る5つのコツ</h2>

          <h3>コツ1: 複数業者に相見積もりを取る</h3>
          <p>最も効果的なのが相見積もりです。ヒカカク！を使えば一度の入力で複数業者から査定額が届きます。業者によって得意ジャンルが異なるため、同じ楽器でも数万円の差が出ることがあります。</p>

          <h3>コツ2: 付属品を揃えて査定に出す</h3>
          <p>ケース・保証書・取扱説明書・アダプターなど、購入時の付属品は可能な限り揃えましょう。特に純正ハードケースは数千円〜1万円のプラス評価になることもあります。</p>

          <h3>コツ3: クリーニングで第一印象アップ</h3>
          <p>査定前にボディを拭き、弦を張り替え、フレットボードを保湿しましょう。見た目の清潔感は査定額に直結します。管楽器は内部洗浄、ピアノは鍵盤の拭き掃除を行うと好印象です。</p>

          <h3>コツ4: 需要が高い時期に売る</h3>
          <p>2〜3月の新学期シーズンやボーナス時期（6〜7月、12月）は楽器の需要が高まり、買取価格も上がりやすい傾向があります。逆に年末年始やお盆は避けた方が無難です。</p>

          <h3>コツ5: 全国サービスも併用する</h3>
          <p>地元の楽器店だけでなく、ヒカカク！のような全国サービスも活用しましょう。<strong>地元店の買取価格が全国相場より低いケースは少なくありません。</strong></p>

          <CtaBox />

          <h2 id="faq">新宿の楽器買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">新宿で楽器を高く売れる買取業者はどこですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">新宿で楽器を高く売るには、ヒカカク！の一括査定で複数業者を比較するのがおすすめです。一括査定で相場を把握してから売却先を決めると、損をしにくくなります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">新宿で出張買取に来てくれる業者はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ウリエルは新宿エリアに出張買取に対応しています。ご自宅まで査定士が訪問し、その場で査定・買取が可能です。大型楽器やピアノの売却に便利です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">新宿の楽器買取相場はどのくらいですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">楽器の買取相場はブランド・モデル・状態によって異なります。Gibson Les Paul Standardで10万〜30万円、YAMAHA アップライトピアノで3万〜15万円が目安です。正確な金額は複数業者に査定依頼して確認しましょう。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れた楽器でも新宿で買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、壊れた楽器やジャンク品でも査定可能です。ブランド品は壊れていても値段がつくことがあります。まずは無料査定で確認しましょう。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">新宿から宅配買取で楽器を送れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ティファナの宅配買取なら新宿から全国の業者に楽器を送れます。送料・査定料・キャンセル料はすべて無料です。</div>
            </details>
          </div>

          <h2>まとめ：新宿の楽器買取は複数社比較が鉄則</h2>

          <p>新宿で楽器を売る際は、1社だけの査定で決めずに複数の業者を比較することが大切です。今回紹介した3社の使い分けをまとめます。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定はすべて無料です。まずはヒカカク！で新宿エリアの買取相場を確認してみてください。</p>

          <CtaBox />
        </div>

        <RelatedArticles
          currentSlug="shinjuku-gakki-kaitori"
          relatedSlugs={["tokyo-gakki-kaitori", "shibuya-gakki-kaitori", "ochanomizu-gakki-kaitori", "ikebukuro-gakki-kaitori", "piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku"]}
        />
      </article>
    </>
  );
}

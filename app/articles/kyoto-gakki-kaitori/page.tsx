import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取 京都おすすめ3選｜出張・店頭・宅配を比較",
  description:
    "京都で楽器を売るならどこがいい？京都対応の楽器買取おすすめ3社を徹底比較。河原町・四条・伏見エリアの買取事情、出張・店頭・宅配買取の違い、高く売るコツまで解説。",
  openGraph: {
    title: "【2026年最新】楽器買取 京都おすすめ3選｜出張・店頭・宅配を比較",
    description: "京都で楽器を売るなら。おすすめ買取3社の比較と高く売るコツを徹底解説。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "楽器買取 京都", href: "/articles/kyoto-gakki-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">京都で楽器の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "京都で楽器を高く売れる買取業者はどこですか？", acceptedAnswer: { "@type": "Answer", text: "京都で楽器を高く売るには、ヒカカク！の一括査定で複数業者を比較するのがおすすめです。河原町・四条周辺の楽器店でも買取を行っていますが、全国規模のサービスを活用することで、より高い買取価格が期待できます。" } },
      { "@type": "Question", name: "京都で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ウリエルは京都市内全域に出張買取に対応しています。左京区・中京区・右京区・伏見区など、ご自宅まで査定士が訪問し、その場で査定・買取が可能です。ピアノや大型楽器の売却に特に便利です。" } },
      { "@type": "Question", name: "京都の大学で使っていた楽器は売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、大学の軽音楽部やオーケストラで使用していた楽器も買取可能です。京都は京大・同志社・立命館など大学が多く、学生楽器の買取需要も高いです。卒業・就職を機に手放す方は、新学期前の2〜3月に売ると高値がつきやすい傾向があります。" } },
      { "@type": "Question", name: "壊れた楽器でも京都で買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、壊れた楽器やジャンク品でも査定可能です。ヒカカク！やティファナでは状態を問わず査定を受け付けており、ブランド楽器は壊れていても値段がつくことがあります。まずは無料査定で確認しましょう。" } },
      { "@type": "Question", name: "京都から宅配買取で楽器を送れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ティファナの宅配買取を利用すれば、京都から全国の買取業者に楽器を送れます。送料・査定料・キャンセル料はすべて無料です。ギターなどの小型〜中型楽器の売却に便利です。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】楽器買取 京都おすすめ3選｜出張・店頭・宅配を比較",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "楽器買取びより" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年最新】楽器買取 京都おすすめ3選｜出張・店頭・宅配を徹底比較\", \"item\": \"https://gakkikaitori-biyori.com/articles/kyoto-gakki-kaitori/\"}]}" }} />
    </>
  );
}

export default function KyotoGakkiKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">京都エリア</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】楽器買取 京都おすすめ3選｜出張・店頭・宅配を徹底比較
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            京都で楽器を売りたいけど、どの買取業者を選べばいいかわからない方へ。本記事では、京都エリア対応の楽器買取おすすめ3社（ヒカカク！・ティファナ・ウリエル）を徹底比較し、河原町・四条・伏見など主要エリアの買取事情から、高く売るコツまで詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#kyoto-overview" className="hover:underline">京都の楽器買取事情</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較表</a></li>
            <li><a href="#area-guide" className="hover:underline">京都エリア別ガイド</a></li>
            <li><a href="#popular-instruments" className="hover:underline">京都で人気の楽器と買取相場</a></li>
            <li><a href="#flow" className="hover:underline">買取の流れ</a></li>
            <li><a href="#tips" className="hover:underline">京都で楽器を高く売るコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="kyoto-overview">京都の楽器買取事情 ── 学生の街ならではの特徴</h2>

          <p>京都は日本有数の大学都市であり、京都大学・同志社大学・立命館大学・京都市立芸術大学など、多くの大学が集まっています。軽音楽部やオーケストラ、吹奏楽部の活動が盛んで、<strong>学生を中心とした楽器の需要と供給が活発</strong>なのが京都の特徴です。</p>

          <p>毎年の卒業シーズン（2〜3月）には、学生が使っていた楽器の買取需要が急増します。エレキギター、ベース、ドラム、キーボードなどバンド系の楽器が多く流通しています。</p>

          <p>また、京都市立芸術大学をはじめとする音楽教育機関の影響で、クラシック楽器（バイオリン、チェロ、フルート、クラリネットなど）の中古市場も活発です。</p>

          <h3>京都で楽器を売る主な選択肢</h3>

          <ul>
            <li><strong>一括査定（ヒカカク！）</strong>: 複数業者を同時比較。最高値が見つかりやすい</li>
            <li><strong>出張買取（ウリエル）</strong>: 自宅訪問で大型楽器の売却に便利</li>
            <li><strong>店頭・宅配・出張（ティファナ）</strong>: 3つの方法から選べる柔軟なサービス</li>
            <li><strong>河原町・四条の楽器店</strong>: 店頭持ち込みが可能だが、1社だけの査定では相場がわかりにくい</li>
          </ul>

          <CtaBox />

          <h2 id="comparison">京都対応の楽器買取おすすめ3社を徹底比較</h2>

          <p>京都エリアに対応している楽器買取3社を比較します。</p>

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
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">京都対応</td><td className="px-4 py-3">全国対応（京都含む）</td><td className="px-4 py-3">全国対応（京都含む）</td><td className="px-4 py-3">京都市内出張可</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定スピード</td><td className="px-4 py-3">最短即日（複数社）</td><td className="px-4 py-3">最短即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅で完結</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">手軽に売りたい人</td><td className="px-4 py-3">運搬が面倒な人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 一括査定で京都の最高値を発見</h3>

          <p>ヒカカク！は複数の買取業者に一括で査定依頼できる比較サービスです。京都にいながら全国の買取業者に査定を出せるため、地元の楽器店だけでは得られない高額査定を受けられる可能性があります。</p>

          <p>特に高額なギターやバイオリンなどは、業者間で数万円の査定差が出ることも珍しくありません。<strong>まずはヒカカク！で相場を把握するのが、京都での楽器売却の第一歩</strong>です。</p>

          <h3>ティファナ ── 3つの買取方法に対応</h3>

          <p>ティファナは年間4万件の買取実績を持つ総合買取サービスです。出張・店頭・宅配の3つの方法に対応しており、京都からも利用可能。楽器の状態を問わず査定してくれるのが強みです。</p>

          <p>京都から宅配買取を利用する場合、送料は無料。梱包して送るだけなので、河原町や四条まで出向く必要がありません。</p>

          <h3>ウリエル ── 京都市内の出張買取に対応</h3>

          <p>ウリエルは出張買取専門のサービスで、京都市内全域に対応しています。左京区・中京区・右京区・上京区・下京区・南区・伏見区・山科区・西京区と、市内全域が出張対象です。</p>

          <p>ピアノやドラムセット、複数の楽器をまとめて売りたい場合に特に便利です。査定士が自宅に訪問し、その場で査定・現金買取が完了します。</p>

          <CtaBox />

          <h2 id="area-guide">京都エリア別 楽器買取ガイド</h2>

          <h3>河原町・四条エリア</h3>

          <p>京都最大の繁華街である河原町・四条周辺には、複数の楽器店があります。新京極や寺町通り沿いにも店舗があり、店頭持ち込みの選択肢が多いエリアです。ただし、<strong>1店舗だけの査定で決めずに、ヒカカク！で相場を確認してから売却先を決める</strong>のがおすすめです。</p>

          <h3>北区・左京区エリア（大学周辺）</h3>

          <p>京都大学や同志社大学がある北区・左京区は学生が多いエリアです。毎年の卒業シーズンにはバンド楽器の売却が増えます。学生の街のため中古楽器の流通量が多く、エレキギターやベースの需要が高いのが特徴です。</p>

          <h3>伏見区・山科区エリア</h3>

          <p>住宅地が広がる伏見区・山科区では、ピアノや電子ピアノの売却ニーズが多い傾向です。お子さんの成長に伴うピアノの処分や、引っ越しを機に大型楽器を手放すケースが目立ちます。このエリアではウリエルの出張買取が特に便利です。</p>

          <h3>宇治・長岡京エリア（京都市外）</h3>

          <p>宇治市や長岡京市など京都市外のエリアでも、ヒカカク！やティファナの宅配買取なら問題なく利用可能です。ウリエルの出張買取も、京都府内の主要エリアであれば対応しています。</p>

          <h2 id="popular-instruments">京都で人気の楽器と買取相場</h2>

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
                <tr className="bg-cream/50"><td className="px-4 py-3">バイオリン（国内メーカー）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜10万円</td><td className="px-4 py-3 text-warm-gray">鈴木バイオリン等</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA フルート</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜8万円</td><td className="px-4 py-3 text-warm-gray">YFL-500以上は高め</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland 電子ドラム</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜12万円</td><td className="px-4 py-3 text-warm-gray">TD-27以上は高額</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Fender Jazz Bass</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td><td className="px-4 py-3 text-warm-gray">USA製は高額</td></tr>
              </tbody>
            </table>
          </div>

          <p>上記はあくまで目安です。正確な買取価格は楽器のコンディション・付属品の有無・市場の需給で変動します。<strong>複数業者に査定を依頼して比較することが、適正価格での売却につながります。</strong></p>

          <CtaBox />

          <h2 id="flow">京都での楽器買取の流れ</h2>

          <p>京都で楽器を売る場合の一般的な流れです。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h4 className="font-bold text-sm mb-1">査定を申し込む</h4><p className="text-sm text-warm-gray">ヒカカク！で一括査定、またはティファナ・ウリエルに直接申し込み。楽器の写真を用意するとスムーズです。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h4 className="font-bold text-sm mb-1">査定額の提示を受ける</h4><p className="text-sm text-warm-gray">業者から査定額が届きます。複数業者の金額を比較して、最も高い業者を選びましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h4 className="font-bold text-sm mb-1">買取方法を選ぶ</h4><p className="text-sm text-warm-gray">出張買取・宅配買取・店頭買取から選択。大型楽器は出張買取、ギター等は宅配も便利です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h4 className="font-bold text-sm mb-1">買取成立・現金受け取り</h4><p className="text-sm text-warm-gray">金額に納得したら買取成立。出張・店頭ならその場で現金、宅配なら1〜3営業日で振込されます。</p></div>
            </div>
          </div>

          <h2 id="tips">京都で楽器を高く売る5つのコツ</h2>

          <h3>コツ1: 複数業者に相見積もりを取る</h3>
          <p>最も効果的なのが相見積もりです。ヒカカク！を使えば一度の入力で複数業者から査定額が届きます。業者によって得意ジャンルが異なるため、同じ楽器でも数万円の差が出ることがあります。</p>

          <h3>コツ2: 付属品を揃えて査定に出す</h3>
          <p>ケース・保証書・取扱説明書・アダプターなど、購入時の付属品は可能な限り揃えましょう。特に純正ハードケースは数千円〜1万円のプラス評価になることもあります。</p>

          <h3>コツ3: クリーニングで第一印象アップ</h3>
          <p>査定前にボディを拭き、弦を張り替え、フレットボードを保湿しましょう。管楽器は内部洗浄、ピアノは鍵盤の拭き掃除を行うと好印象です。見た目の清潔感は査定額に直結します。</p>

          <h3>コツ4: 卒業シーズン前に売る</h3>
          <p>京都は大学が多い街のため、<strong>2〜3月の新入生シーズンは中古楽器の需要がピーク</strong>になります。このタイミングで売却すると、通常より高い査定額が期待できます。</p>

          <h3>コツ5: 全国サービスも併用する</h3>
          <p>河原町の楽器店だけでなく、ヒカカク！のような全国サービスも活用しましょう。地元店の買取価格が全国相場より低いケースは少なくありません。</p>

          <CtaBox />

          <h2 id="faq">京都の楽器買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">京都で楽器を高く売れる買取業者はどこですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">京都で楽器を高く売るには、ヒカカク！の一括査定で複数業者を比較するのがおすすめです。全国規模のサービスを活用することで、より高い買取価格が期待できます。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">京都で出張買取に対応している業者はありますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ウリエルは京都市内全域に出張買取に対応しています。左京区・中京区・右京区・伏見区など、ご自宅まで査定士が訪問可能です。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">京都の大学で使っていた楽器は売れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、大学の軽音楽部やオーケストラで使用していた楽器も買取可能です。卒業を機に手放す方は、新学期前の2〜3月に売ると高値がつきやすい傾向があります。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">壊れた楽器でも京都で買い取ってもらえますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、壊れた楽器やジャンク品でも査定可能です。ブランド楽器は壊れていても値段がつくことがあります。まずは無料査定で確認しましょう。</div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">京都から宅配買取で楽器を送れますか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ティファナの宅配買取なら京都から全国の業者に送れます。送料・査定料・キャンセル料はすべて無料です。</div>
            </details>
          </div>

          <h2>まとめ：京都の楽器買取は大学の街ならではの需要を活かそう</h2>

          <p>京都は大学が多い学術都市であり、楽器の需要が高いエリアです。特に新学期シーズンは中古楽器市場が活発になるため、売却タイミングとして最適です。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定はすべて無料です。まずはヒカカク！で相場を確認してみてください。</p>

          <CtaBox />
        </div>

        <RelatedArticles
          currentSlug="kyoto-gakki-kaitori"
          relatedSlugs={["kyoto-shijo-gakki-kaitori", "osaka-gakki-kaitori", "kobe-gakki-kaitori", "umeda-gakki-kaitori", "piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku"]}
        />
      </article>
    </>
  );
}

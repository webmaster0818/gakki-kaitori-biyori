import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜04時の回）「ピッコロ 買取」。
// 一次データ:
//   島村楽器 買取価格検索 型番「ピッコロ」（2026-11-20 取得・80行からピッコロトランペット等の金管11行を除いた69行）＋型番「YPC」7行
//   ヤフオクの落札済み検索「ピッコロ」「YAMAHA ピッコロ」（2026-11-20 取得・重複除去349件）→ タイトルに YPC の型番とピッコロがある本体97件を型番別に集計
//     （ドラゴンボール関連・スネアドラム・メダカ・頭部管単体・カタログ・お手入れ用品、型番に「？」がつくもの、YPC-3 は除外）。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
// 業者・メーカーの公式（2026-11-20 取得）:
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=piccolo（19件・ヤマハ11件ほか）
//   ヤマハ https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/piccolos/（現行と希望小売価格）
//   島村楽器 https://www.shimamura.co.jp/used/（支払いは口座への入金）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=%E3%83%94%E3%83%83%E3%82%B3%E3%83%AD&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=piccolo";
const YAMAHA = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/piccolos/";

// ヤマハの型番別：希望小売価格（現行品・税込）・島村の掲示（A）・ヤフオク落札（当サイト集計）
const YPC: { model: string; retail: string; shima: string; yahoo: string }[] = [
  { model: "YPC-32（スタンダード・ABS樹脂）", retail: "121,000円", shima: "掲示なし", yahoo: "39件・中央値29,376円（6,950〜60,000円）" },
  { model: "YPC-31（旧スタンダード）", retail: "—", shima: "掲示なし", yahoo: "16件・中央値17,575円（11,000〜32,820円）" },
  { model: "YPC-62（プロフェッショナル・グラナディラ）", retail: "297,000円", shima: "60,000円（62R 65,000円）", yahoo: "22件・中央値101,270円（13,980〜250,000円）" },
  { model: "YPC-61（旧プロフェッショナル）", retail: "—", shima: "掲示なし", yahoo: "6件・中央値69,400円" },
  { model: "YPC-81（ハンドクラフト）", retail: "407,000円", shima: "82,000円", yahoo: "11件・中央値149,000円（70,000〜242,000円）" },
  { model: "YPC-82（ハンドクラフト・銀製頭部管）", retail: "429,000円", shima: "86,000円", yahoo: "3件・132,000円・149,600円・159,850円" },
  { model: "YPC-87（ハンドクラフト）", retail: "638,000円", shima: "129,000円", yahoo: "—" },
  { model: "YPC-91・92（ハンドメイド）", retail: "—", shima: "310,000円・320,000円", yahoo: "—" },
];

const BRANDS: { brand: string; n: number; median: string; range: string }[] = [
  { brand: "パウエル（Powell）", n: 15, median: "419,000円", range: "208,000〜1,094,000円" },
  { brand: "J.G.ハンミッヒ", n: 3, median: "367,000円", range: "352,000〜486,000円" },
  { brand: "P.ハンミッヒ", n: 16, median: "317,500円", range: "96,000〜475,000円" },
  { brand: "バーカート（Burkart）", n: 14, median: "169,000円", range: "89,000〜386,000円" },
  { brand: "サンキョウ（SANKYO）", n: 4, median: "161,000円", range: "68,000〜238,000円" },
  { brand: "ヤマハ", n: 7, median: "86,000円", range: "60,000〜320,000円" },
  { brand: "パール（Pearl）", n: 7, median: "53,000円", range: "31,000〜81,000円" },
];

const FAQ = [
  {
    q: "ヤマハのピッコロはいくらで売れますか？",
    a: `島村楽器の買取価格検索では A ランクで YPC-62 が60,000円、YPC-81 が82,000円、YPC-87 が129,000円でした（${ASOF}確認）。スタンダードモデルの YPC-32 は掲示がありません。ヤフオクの落札中央値は YPC-32 が29,376円、YPC-62 が101,270円です。`,
  },
  {
    q: "島村楽器の掲示とヤフオクの落札で差が大きいのはなぜですか？",
    a: "島村楽器の掲示は買取価格、ヤフオクは個人間・業者の販売価格で、性質が違います。YPC-62 では落札中央値（101,270円）が島村楽器の A ランク（60,000円）の約1.7倍でした。売り方を選ぶ際は、手間と金額の差を比べて判断します。",
  },
  {
    q: "楽器の買取屋さんではピッコロの事例はありますか？",
    a: `ピッコロの買取事例は19件（17,000円〜315,000円）で、ヤマハ11件は17,000円〜95,000円（中間価格30,000円）、ハンミッヒ3件は100,000円〜315,000円でした（${ASOF}確認）。直近は2026年9月の福島県いわき市の事例（ヤマハ 23,000円）です。`,
  },
  {
    q: "ピッコロトランペットも同じ扱いですか？",
    a: "別の楽器です。島村楽器の買取価格検索では、ピッコロトランペットは「トランペット」の区分で掲示されています（シルキー・XO など）。トランペットは「トランペット買取相場ガイド」で扱っています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ピッコロの買取", href: "/articles/piccolo-kaitori/" },
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
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/piccolo-kaitori/" },
  title: "ピッコロの買取相場｜ヤマハ YPC の型番別と島村楽器の掲示69行【2026年11月】",
  description:
    "ピッコロの買取相場を、ヤマハ YPC-32・62・81 などの型番別に、島村楽器の掲示買取価格とヤフオクの落札97件の中央値で整理しました。パウエル・ハンミッヒ・バーカートなどブランド別の掲示と、楽器の買取屋さんの事例19件も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ピッコロの買取相場｜ヤマハ YPC の型番別とブランド別の掲示【2026年11月】",
    description: "YPC-32・62・81 の掲示買取価格と落札価格、パウエル・ハンミッヒなどブランド別の掲示。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ピッコロの買取相場｜ヤマハ YPC の型番別と島村楽器の掲示69行",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/piccolo-kaitori/",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
          { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
          { "@type": "ListItem", position: 3, name: "ピッコロの買取", item: "https://gakkikaitori-biyori.com/articles/piccolo-kaitori/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumb />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
          ピッコロの買取相場｜ヤマハ YPC の型番別と島村楽器の掲示69行
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクの落札で最も多かったのはヤマハのスタンダードモデル YPC-32 で、39件の<strong>中央値は29,376円</strong>でした。
            グラナディラ（木製）の YPC-62 は中央値101,270円、ハンドクラフトの YPC-81 は149,000円と、管体の材質とシリーズで大きく変わります。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            島村楽器はピッコロを69行掲示しており（A ランク中央値241,000円）、パウエル・ハンミッヒなどの海外ブランドが中心です。ヤマハは YPC-62 以上の7型番のみで、<strong>YPC-32 には掲示がありません</strong>。
          </p>
        </div>

        <h2 id="yamaha" className="text-xl font-bold mt-12 mb-4">ヤマハ YPC の型番別：掲示買取価格と落札価格</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-left px-4 py-3 font-medium">希望小売価格（税込）</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器の掲示（A）</th>
                <th className="text-left px-4 py-3 font-medium">ヤフオク落札</th>
              </tr>
            </thead>
            <tbody>
              {YPC.map((r) => (
                <tr key={r.model} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.retail}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                  <td className="px-4 py-3">{r.yahoo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          YPC-62・YPC-81 は、ヤフオクの落札中央値が島村楽器の A ランクの1.7〜1.8倍でした。YPC-32 は店頭の掲示がないため、査定額は実物を見て決まります。
          希望小売価格「—」は、ヤマハの現行の製品一覧で価格を確認できなかった型番（旧型番・ハンドメイド）です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YAMAHA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ ピッコロ 製品一覧</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「ピッコロ」）</a>
          （{ASOF}確認）。ヤフオクは落札済み検索「ピッコロ」「YAMAHA ピッコロ」（{ASOF}取得・重複を除いて349件）のうち、タイトルに YPC の型番とピッコロがある本体97件を型番別に集計しました。
          頭部管単体・スネアドラム・お手入れ用品・カタログ、型番に「？」がつく出品は除外しています。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="brands" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（ブランド別・Aランク）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">掲示行数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {BRANDS.map((r) => (
                <tr key={r.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.brand}</td>
                  <td className="px-4 py-3">{r.n}行</td>
                  <td className="px-4 py-3">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          このほか、ヨーゼフ（hibari 170,000円・uguisu 162,000円）、A.R.ハンミッヒ（457,000円）の掲示があります。最高額はパウエルの「HM Piccolo Gre./14K」の1,094,000円です。
          B ランクは A の77〜85%、C ランクは55〜69%でした。島村楽器の買取代金は口座への入金で、現金での支払いは行っていません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「ピッコロ」）</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>
          （{ASOF}確認）。型番「ピッコロ」の80行から、ピッコロトランペットなど金管楽器の11行を除いた69行を集計しています。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さんの事例</h2>
        <p className="text-sm leading-relaxed mb-4">
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>は、ピッコロの買取事例を19件（17,000円〜315,000円・中間価格51,000円）公開しています。
          ヤマハは11件で17,000円〜95,000円（中間価格30,000円）、ハンミッヒは3件で100,000円〜315,000円でした。2024年以降のヤマハの事例は8件で、23,000円が3件、ほかに17,000円・28,000円・70,000円・72,000円・95,000円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">出典：楽器の買取屋さん ピッコロの買取事例（{ASOF}取得）。型番は記載されていません。</p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番と管体の材質</strong>：ヤマハは管体の刻印で型番を確かめます。YPC-32 は主管が ABS 樹脂、YPC-62・81 は主管・頭部管がグラナディラ材、YPC-82 は頭部管が銀製です（ヤマハ製品情報）。</li>
          <li><strong>頭部管</strong>：頭部管を交換している場合は、純正の頭部管があるかを確認します。落札データでも頭部管が単体で出品されていました。</li>
          <li><strong>調整の状態</strong>：タンポの状態や調整の履歴を伝えられるようにしておきます。</li>
          <li><strong>ケース・付属品</strong>：ハードケース・ケースカバー・掃除棒をそろえます。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          フルートは<Link href="/articles/flute-kaitori/" className="text-accent underline">フルート買取相場ガイド</Link>、
          ムラマツは<Link href="/articles/muramatsu-flute-kaitori/" className="text-accent underline">ムラマツ フルート買取相場</Link>、
          トランペットは<Link href="/articles/trumpet-kaitori/" className="text-accent underline">トランペット買取相場ガイド</Link>で整理しています。
        </p>

        <p className="mb-12">
          <Link
            href="/articles/gakki-kaitori-osusume/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            楽器買取おすすめ業者3社の比較を見る
          </Link>
        </p>

        <h2 id="faq" className="text-xl font-bold mt-12 mb-4">よくある質問</h2>
        <div className="space-y-4 mb-12">
          {FAQ.map((f) => (
            <div key={f.q} className="bg-white border border-warm-200 p-5">
              <p className="text-sm font-medium mb-2">Q. {f.q}</p>
              <p className="text-sm text-warm-gray leading-relaxed">A. {f.a}</p>
            </div>
          ))}
        </div>

        <RelatedArticles
          currentSlug="piccolo-kaitori"
          relatedSlugs={["flute-kaitori", "muramatsu-flute-kaitori", "kangakki-kaitori", "yamaha-kaitori", "pearl-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

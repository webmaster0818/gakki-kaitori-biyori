import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-19）「二胡 買取」。
// 一次データ: ヤフオクの落札済み検索「二胡」（2026-11-19 取得・200件）。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
//   二胡本体以外（松脂・駒・弦・弓毛・弦カバー・CD・教本・楽譜・アクリルスタンド・衣装・アジャスター・弱音器など）と新品・未使用・未開封を除外＝76件。
//   ただし「ケース付き」「入門セット」など本体に付属品がつく出品は残した。タイの擦弦楽器（ソードゥアン）と他の楽器とのまとめ売りは除外。
//   材（紅木・老紅木・紫檀）と製作者・工房名の有無はタイトルの記載で分類（記載がない出品は「材の記載なし」）。
// 業者の対応は各社公式（2026-11-19 取得・HTMLコメントと script 除外）:
//   ウリエル https://www.uriel-cuore.co.jp/instrument/（取引傾向に「二胡（古月琴坊）」）
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=ethnic-instrument（民族楽器の取扱いカテゴリに二胡・事例はバラライカ1件のみ）
//   島村楽器 https://www.shimamura.co.jp/used/（取扱い楽器・買取取り扱いのない楽器のどちらにも二胡の記載なし・買取価格検索「二胡」0件）
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/（買取の難しい楽器の一例に二胡の記載なし）
//   ブックオフ https://www.bookoff.co.jp/sell/electronic/music/（買取対象外の「民芸品、手工芸品」の例にバイオリン・三味線・琴・ハープ・雅楽器）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月19日";
const URIEL = "https://www.uriel-cuore.co.jp/instrument/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=ethnic-instrument";
const SHIMAMURA = "https://www.shimamura.co.jp/used/";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/";
const BOOKOFF = "https://www.bookoff.co.jp/sell/electronic/music/";

// ヤフオク落札（当サイト集計）
const Y_TOTAL = 76;
const Y_MEDIAN = 4295;
const Y_BANDS = [
  { band: "5,000円未満", n: 39 },
  { band: "5,000〜1万円未満", n: 13 },
  { band: "1万〜3万円未満", n: 14 },
  { band: "3万円以上", n: 10 },
];
const Y_MATERIAL: { label: string; n: number; median: string; range: string }[] = [
  { label: "老紅木", n: 4, median: "約4.5万円", range: "3,655〜50,050円" },
  { label: "紫檀", n: 7, median: "24,988円", range: "3,672〜68,000円" },
  { label: "紅木（老紅木を除く）", n: 10, median: "約1万円", range: "1,211〜69,382円" },
  { label: "材の記載なし", n: 49, median: "3,000円", range: "510〜39,800円" },
];

const BUYERS: { name: string; status: string; detail: string; src: string }[] = [
  {
    name: "ウリエル",
    status: "取引の記載あり",
    detail: "楽器買取のページで、和楽器・民族楽器の取引が活発な例として「二胡（古月琴坊）」を挙げている",
    src: URIEL,
  },
  {
    name: "楽器の買取屋さん",
    status: "取扱いカテゴリに二胡",
    detail: "民族楽器の取扱いカテゴリに二胡を掲載。公開されている民族楽器の買取事例はバラライカ1件（61,000円）のみで、二胡の事例は掲載されていない",
    src: KAITORIYA,
  },
  {
    name: "島村楽器",
    status: "記載なし",
    detail: "取扱い楽器の一覧にも「買取取り扱いのない楽器」にも二胡の記載がない。買取価格検索で「二胡」は0件",
    src: SHIMAMURA,
  },
  {
    name: "イシバシ楽器",
    status: "記載なし",
    detail: "「買取の難しい楽器・機材の一例」はピアノ・エレクトーン・ソフトウェア・和琴/大正琴で、二胡の記載はない",
    src: ISHIBASHI,
  },
  {
    name: "ブックオフ",
    status: "民芸品・手工芸品は対象外",
    detail: "買取対象外に「民芸品、手工芸品」を挙げ、例としてバイオリン・三味線・琴・ハープ・雅楽器を記載（二胡の明記はない）",
    src: BOOKOFF,
  },
];

const yen = (n: number) => n.toLocaleString("ja-JP");

const FAQ = [
  {
    q: "中古の二胡はいくらくらいで取引されていますか？",
    a: `${ASOF}に取得したヤフオクの落札済み検索「二胡」の結果から二胡本体${Y_TOTAL}件を集計すると、落札価格の中央値は約${yen(Y_MEDIAN)}円でした。半数以上が5,000円未満で、3万円以上は${Y_BANDS[3].n}件です。老紅木・紫檀など材の記載や製作者名がある出品ほど高い傾向がありました。`,
  },
  {
    q: "二胡を買い取ってくれる業者はありますか？",
    a: "ウリエルは公式サイトで二胡（古月琴坊）の取引を挙げており、楽器の買取屋さんは民族楽器の取扱いカテゴリに二胡を載せています。島村楽器・イシバシ楽器の公式サイトには二胡の記載がないため、査定の前に問い合わせて確認してください。",
  },
  {
    q: "ブックオフで二胡を売れますか？",
    a: "ブックオフの楽器買取ページは「民芸品、手工芸品」を買取対象外とし、例にバイオリン・三味線・琴・ハープ・雅楽器を挙げています。二胡の明記はありませんが、店舗で事前に確認することをおすすめします。",
  },
  {
    q: "査定の前に何を確認すればよいですか？",
    a: "胴や棹の材（紅木・紫檀など）、製作者・工房名の書かれた札や証明書、弓・ケースの有無を確認します。落札データでは、材や製作者名の記載がある出品の中央値が、記載のない出品より高くなっていました。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "二胡の買取", href: "/articles/niko-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/niko-kaitori/" },
  title: "二胡の買取相場と売り先｜落札76件を材（紅木・紫檀）別に集計、取り扱う業者・記載のない楽器店【2026年11月】",
  description:
    "二胡の中古相場を、ヤフオクの落札76件から材（老紅木・紫檀・紅木）別に集計しました。二胡の取引を公式サイトに載せている買取業者と、記載のない楽器店・対象外とする店を各社の公式情報で整理しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "二胡の買取相場と売り先｜落札76件を材別に集計【2026年11月】",
    description: "ヤフオク落札76件の中央値と材別の価格帯、二胡を取り扱う業者・記載のない楽器店。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "二胡の買取相場と売り先｜落札76件を材（紅木・紫檀）別に集計、取り扱う業者・記載のない楽器店",
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/niko-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "二胡の買取", item: "https://gakkikaitori-biyori.com/articles/niko-kaitori/" },
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
          二胡の買取相場と売り先｜落札76件を材（紅木・紫檀）別に集計、取り扱う業者・記載のない楽器店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、業者の対応は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクで落札された二胡本体{Y_TOTAL}件の<strong>中央値は約{yen(Y_MEDIAN)}円</strong>で、半数以上が5,000円未満でした。
            一方で、老紅木・紫檀の材や製作者・工房名がタイトルに書かれた出品は2万〜7万円台の落札が多く、記載の有無で価格帯がはっきり分かれます。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            売り先では、<strong>ウリエルが公式サイトで二胡の取引を挙げ、楽器の買取屋さんが民族楽器の取扱いカテゴリに二胡を載せています</strong>。
            島村楽器・イシバシ楽器の公式サイトには二胡の記載がなく、ブックオフは民芸品・手工芸品を買取対象外としています。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">二胡の中古相場（ヤフオク落札・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">タイトルにある材</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">落札価格の範囲</th>
              </tr>
            </thead>
            <tbody>
              {Y_MATERIAL.map((m) => (
                <tr key={m.label} className="border-t border-warm-200">
                  <td className="px-4 py-3">{m.label}</td>
                  <td className="px-4 py-3">{m.n}件</td>
                  <td className="px-4 py-3">{m.median}</td>
                  <td className="px-4 py-3">{m.range}</td>
                </tr>
              ))}
              <tr className="border-t border-warm-200 font-medium">
                <td className="px-4 py-3">全体（黒檀・紅檀などを含む）</td>
                <td className="px-4 py-3">{Y_TOTAL}件</td>
                <td className="px-4 py-3">約{yen(Y_MEDIAN)}円</td>
                <td className="px-4 py-3">510〜69,382円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          価格帯は、5,000円未満が{Y_BANDS[0].n}件、5,000〜1万円未満が{Y_BANDS[1].n}件、1万〜3万円未満が{Y_BANDS[2].n}件、3万円以上が{Y_BANDS[3].n}件です。
          製作者・工房名（陸林生・名師堂・十三堂・万其興など）がタイトルにある16件の中央値は23,775円で、上海民族楽器一廠の「敦煌牌」は10件の中央値が3,750円でした。
          タイトルに「ジャンク」「現状品」とある出品は30件で、中央値は3,000円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「二胡」の結果200件（{ASOF}取得）から、二胡本体以外（松脂・駒・弦・弓毛・弦カバー・CD・教本・楽譜・アクリルスタンド・衣装・アジャスター・弱音器など）と新品・未使用・未開封、
          他の楽器とのまとめ売りを除いた{Y_TOTAL}件です。材と製作者名はタイトルの記載で分け、実物の確認はしていません。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">二胡を取り扱う業者・記載のない楽器店</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">二胡の扱い</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((b) => (
                <tr key={b.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={b.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {b.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{b.status}</td>
                  <td className="px-4 py-3 leading-relaxed">{b.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          いずれも{ASOF}に各社の公式サイトで確認しました。「記載なし」は買取の可否を示すものではありません。査定の前に各社へお問い合わせください。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>材と製作者</strong>：棹・胴の材（紅木・老紅木・紫檀など）と、製作者・工房名の札や証明書の有無を確かめます。落札データでは記載のある出品ほど高い価格帯に集まっていました。
          </li>
          <li>
            <strong>付属品</strong>：弓・ケース・予備の弦・駒をそろえます。落札データにも、タイトルに「弓なし」と書かれた出品がありました。
          </li>
          <li>
            <strong>皮と棹の状態</strong>：胴に張られた皮の破れ・浮き、棹の反りや割れは写真で伝えられるようにしておきます。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          三味線・琴など和楽器全般の売り先は<Link href="/articles/wagakki-kaitori/" className="text-accent underline">和楽器の買取</Link>、
          バイオリンなど洋楽器の弦楽器は<Link href="/articles/violin-kaitori/" className="text-accent underline">バイオリン買取</Link>、
          ウリエルの買取方法は<Link href="/articles/gakki-kaitori-osusume/" className="text-accent underline">楽器買取おすすめ業者の比較</Link>で整理しています。
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
          currentSlug="niko-kaitori"
          relatedSlugs={["wagakki-kaitori", "violin-kaitori", "shamisen-kaitori", "taishogoto-kaitori", "bookoff-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

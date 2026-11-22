import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-23 深夜02時の回）「ヤマハ フルート 買取」。
// 一次データ:
//   島村楽器 買取価格検索 型番「YFL」（2026-11-23 取得・94行のうちフルート92行。K.Yairi のギター2行は除外）
//   ヤフオクの落札済み検索「ヤマハ フルート YFL」「YAMAHA YFL フルート」（2026-11-23 取得・重複除去200件）
//     → タイトルに YFL の型番とフルートがある本体を百の位（シリーズ）別に集計（頭部管単体・ジャンク・新品・部品・ピッコロは除外）。
//   楽器の買取屋さん ヤマハ フルートの買取事例（2026-11-23 に一覧から取得できた29件）
// メーカーの公式（2026-11-23 取得）: ヤマハ フルート スタンダード（200・300・400シリーズ）／プロフェッショナル（500・600・700シリーズ）／ハンドメイド イデアル（800シリーズ）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月23日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=YFL&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=flute&maker=yamaha";
const YAMAHA_STD = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/flutes/400-300-200-series/";
const YAMAHA_PRO = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/flutes/professional-series/";
const YAMAHA_HM = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/flutes/900-800-series/";

// シリーズ（型番の百の位）別：ヤマハ公式の材質・島村楽器の掲示（A）・ヤフオク落札（当サイト集計）
const SERIES: { series: string; material: string; shima: string; yahoo: string }[] = [
  { series: "200番台（YFL-211・212・221 など）", material: "管体が白銅", shima: "掲示なし", yahoo: "82件・中央値13,531円（2,800〜43,510円）" },
  { series: "300番台（YFL-311・312 など）", material: "頭部管が銀・管体が白銅", shima: "掲示なし", yahoo: "27件・中央値30,000円" },
  { series: "400番台（YFL-411・451 など）", material: "頭部管・管体パイプが銀", shima: "2行（411：60,000円・412LSE：98,000円）", yahoo: "11件・中央値52,000円" },
  { series: "500番台（YFL-514・517・574・584 など）", material: "頭部管が銀・管体が白銅（プロフェッショナル）", shima: "21行・中央値70,000円（65,000〜145,000円）", yahoo: "8件・中央値80,080円" },
  { series: "600番台（YFL-611・614・674・684 など）", material: "頭部管・管体パイプが銀（プロフェッショナル）", shima: "26行・中央値96,000円（80,000〜179,000円）", yahoo: "—" },
  { series: "700番台（YFL-711・714・774・784 など）", material: "頭部管・管体からキイまで銀（総銀製）", shima: "24行・中央値145,000円（130,000〜274,000円）", yahoo: "2件・265,210円・282,700円" },
  { series: "800番台（YFL-811・814・874・881 など）", material: "総銀製のハンドメイド（現行はイデアル）", shima: "15行・中央値155,000円（120,000〜613,000円）", yahoo: "4件・462,000〜990,000円" },
];

const FAQ = [
  {
    q: "ヤマハのフルートはいくらで売れますか？",
    a: `型番の百の位（シリーズ）で大きく変わります。島村楽器の買取価格検索の A ランクの中央値は、500番台が70,000円、600番台が96,000円、700番台が145,000円でした（${ASOF}確認）。最も多く出回っている YFL-211 などの200番台は島村楽器の掲示がなく、ヤフオクの落札中央値は13,531円です。`,
  },
  {
    q: "YFL-211 や YFL-221 は買い取ってもらえますか？",
    a: "島村楽器の買取価格検索には200番台・300番台の掲示がありません。楽器の買取屋さんはヤマハのフルートの買取事例を29件公開しており、2024年以降の24件の中間価格は35,600円、最低額は8,050円でした。型番は記載されていないため、200番台の事例かどうかは分かりません。",
  },
  {
    q: "型番の末尾の「H」は査定に影響しますか？",
    a: "ヤマハはハンドメイド「イデアル」の製品一覧で、H足部管のモデルは品番の末尾に H を付けると案内しています。島村楽器の掲示で、同じ型番・同じ製造期間の H なし／H ありを比べられる29組では、H ありが高いのが23組、同額が5組、低いのが1組でした。",
  },
  {
    q: "島村楽器の A・B・C ランクではどれくらい差がありますか？",
    a: "ヤマハのフルート92行では、B ランクが A の81〜90%、C ランクが63〜80%でした。島村楽器は付属品の欠品を別途減額とし、再販時に修理や調整が必要な場合はその費用を買取価格から差し引くと案内しています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ヤマハのフルートの買取", href: "/articles/yamaha-flute-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yamaha-flute-kaitori/" },
  title: "ヤマハのフルートの買取相場｜YFL シリーズ別と島村楽器の掲示92行【2026年11月】",
  description:
    "ヤマハのフルートの買取相場を、型番の百の位（200〜800番台）ごとに、ヤマハ公式の材質、島村楽器の掲示買取価格92行、ヤフオクの落札中央値で整理しました。H足部管の有無による掲示の差と、楽器の買取屋さんの事例29件も確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ヤマハのフルートの買取相場｜YFL シリーズ別と島村楽器の掲示【2026年11月】",
    description: "200〜800番台の材質・掲示買取価格・落札中央値と、H足部管の有無による差。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ヤマハのフルートの買取相場｜YFL シリーズ別と島村楽器の掲示92行",
        datePublished: "2026-11-23",
        dateModified: "2026-11-23",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yamaha-flute-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ヤマハのフルートの買取", item: "https://gakkikaitori-biyori.com/articles/yamaha-flute-kaitori/" },
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
          ヤマハのフルートの買取相場｜YFL シリーズ別と島村楽器の掲示92行
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤマハのフルートは、型番の百の位でシリーズと材質が決まり、買取額もそれに沿って変わります。
            島村楽器の A ランクの中央値は<strong>500番台 70,000円・600番台 96,000円・700番台 145,000円</strong>でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            落札で最も多い YFL-211 などの200番台（管体が白銅）は、<strong>島村楽器の掲示がなく</strong>、ヤフオクの落札中央値は13,531円です。頭部管が銀の300番台は30,000円でした。
          </p>
        </div>

        <h2 id="series" className="text-xl font-bold mt-12 mb-4">シリーズ別：材質・掲示買取価格・落札価格</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">シリーズ</th>
                <th className="text-left px-4 py-3 font-medium">材質（ヤマハ公式）</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器の掲示（A）</th>
                <th className="text-left px-4 py-3 font-medium">ヤフオク落札</th>
              </tr>
            </thead>
            <tbody>
              {SERIES.map((r) => (
                <tr key={r.series} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.series}</td>
                  <td className="px-4 py-3">{r.material}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                  <td className="px-4 py-3">{r.yahoo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の掲示の最高額は YFL-814WH・874WH の613,000円です。このほか、アルトフルート（YFL-A421・A421U）とバスフルート（YFL-B441）の4行があります。
          現行のハンドメイド「イデアル」の総銀製 YFL-817 は、希望小売価格が1,650,000円（C足部管）・1,738,000円（H足部管）です。
          材質の欄は、各シリーズの現行の製品ページの記載です。旧型番は同じ百の位でも仕様が異なる場合があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YAMAHA_STD} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ フルート スタンダード</a>・
          <a href={YAMAHA_PRO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ フルート プロフェッショナル</a>・
          <a href={YAMAHA_HM} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ フルート ハンドメイド イデアル</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「YFL」）</a>
          （{ASOF}確認）。島村楽器は型番「YFL」の94行のうち、ギター2行を除いた92行を集計しています。
          ヤフオクは落札済み検索「ヤマハ フルート YFL」「YAMAHA YFL フルート」（{ASOF}取得・重複を除いて200件）のうち、タイトルに YFL の型番とフルートがある本体を百の位ごとに集計しました。
          頭部管単体・ジャンク・新品・部品・ピッコロは除外しています。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="h-foot" className="text-xl font-bold mt-12 mb-4">H足部管と製造期間による掲示の差</h2>
        <p className="text-sm leading-relaxed mb-4">
          ヤマハはハンドメイド「イデアル」の製品一覧で、H足部管のモデルは品番の末尾に H を付けると案内しています。島村楽器の掲示で、同じ型番・同じ製造期間の H なし／H ありを比べられる29組では、
          <strong>H ありが高いのが23組</strong>、同額が5組、低いのが1組（YFL-881H）でした。差が大きいのは YFL-674（2009〜2013年製）の88,000円→110,000円です。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は同じ型番でも製造期間・シリアル番号の範囲で行を分けています。たとえば YFL-514 は2000〜2009年製が65,000円、2009〜2013年製（#40001〜）が68,000円でした。
          B ランクは A の81〜90%、C ランクは63〜80%です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「YFL」）</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>
          （{ASOF}確認）。製造期間の表記がない行（YFL-517H・717H など）は、比較の組に含めていません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さんの事例</h2>
        <p className="text-sm leading-relaxed mb-4">
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>は、ヤマハのフルートの買取事例を公開しています。
          {ASOF}に一覧から取得できた29件（2017年1月〜2026年11月）の中間価格は39,000円、範囲は8,050円〜320,000円でした。
          2024年以降の24件では中間価格35,600円です。直近は2026年11月の茨城県鉾田市の事例（16,100円）です。
        </p>
        <p className="text-xs text-warm-gray mb-10">出典：楽器の買取屋さん ヤマハ フルートの買取事例（{ASOF}取得）。型番は記載されていません。</p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番</strong>：管体の刻印で YFL の型番を確かめます。百の位でシリーズ（材質）が分かり、末尾の H で足部管の種類が分かります。</li>
          <li><strong>シリアル番号</strong>：島村楽器はシリアル番号の範囲で掲示を分けているため、番号を控えておくと掲示との照合ができます。</li>
          <li><strong>付属品</strong>：ケース・ケースカバー・掃除棒・保証書をそろえます。島村楽器は付属品の欠品を別途減額としています。</li>
          <li><strong>200番台・300番台の売り先</strong>：掲示がないため、複数の業者に型番を伝えて見積もりを比べます。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          フルート全般は<Link href="/articles/flute-kaitori/" className="text-accent underline">フルート買取相場ガイド</Link>、
          ムラマツは<Link href="/articles/muramatsu-flute-kaitori/" className="text-accent underline">ムラマツ フルート買取相場</Link>、
          ピッコロは<Link href="/articles/piccolo-kaitori/" className="text-accent underline">ピッコロの買取相場</Link>で整理しています。
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
          currentSlug="yamaha-flute-kaitori"
          relatedSlugs={["flute-kaitori", "muramatsu-flute-kaitori", "piccolo-kaitori", "kangakki-kaitori", "pearl-kaitori", "yamaha-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

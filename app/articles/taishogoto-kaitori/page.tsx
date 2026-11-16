import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-16）「大正琴 買取」。
// ⚠️ 相場はヤフオクの落札済み出品（2026-11-16 取得・「大正琴」で検索・新しい順の上位200件）を当サイトが集計した値。
//    取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings / iqr_filter を流用（データファイルには書いていない）。
//    出品タイトルで本体以外（調律器・楽譜・教本・CD/LP/カセット・アンプ・弦・ケース単体ほか）と複数台のまとめ売りを除外し、140件を残した。
//    除外はタイトルの機械判定のため、本体に調律器などが同梱された出品が一部除外されている。
//  定価: 鈴木楽器製作所 公式の製品ページ（税込価格・2026-11-16 確認）
//    https://www.suzuki-music.co.jp/product_category/taisho-harp/kohaku/ ・ /tokumatu-asunaro/ ・ /hakogata/
//  買う・買わない: 島村楽器 https://www.shimamura.co.jp/used/ ・イシバシ楽器 https://www.ishibashi.co.jp/kaitori/
//    ハードオフ宅配買取 https://takuhai-kaitori.hardoff.co.jp/category-3 ・ティファナ https://www.tifana.net/music/
//    ウリエル https://www.uriel-cuore.co.jp/instrument/
//  口コミ・評価は載せない。

const ASOF = "2026年11月16日";
const YAHOO = "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E5%A4%A7%E6%AD%A3%E7%90%B4";
const SZ_KOHAKU = "https://www.suzuki-music.co.jp/product_category/taisho-harp/kohaku/";
const SZ_TOKU = "https://www.suzuki-music.co.jp/product_category/taisho-harp/tokumatu-asunaro/";
const SZ_HAKO = "https://www.suzuki-music.co.jp/product_category/taisho-harp/hakogata/";

// 当サイト集計（落札価格・円）
const TOTAL = { n: 140, iqrN: 132, median: 1555, yen1: 18, under1000: 51, over10000: 14 };

const SERIES: { name: string; n: number; median: number; range: string; list: string }[] = [
  { name: "鈴木楽器 電子大正琴「あゆ」（TES-151）", n: 4, median: 21600, range: "18,500〜31,500", list: "—" },
  { name: "鈴木楽器 電気大正琴「こはく」（CHK）", n: 14, median: 9900, range: "1,300〜26,800", list: "ソプラノ 104,500／アルト・バス 121,000" },
  { name: "ライリッシュ", n: 8, median: 8300, range: "1〜22,550", list: "—" },
  { name: "ヤマハ", n: 5, median: 4990, range: "573〜6,800", list: "—" },
  { name: "全音（ゼンオン）", n: 6, median: 4190, range: "500〜9,800", list: "—" },
  { name: "カワイ", n: 5, median: 2000, range: "565〜3,800", list: "—" },
  { name: "鈴木楽器「蘭」", n: 18, median: 1540, range: "1〜10,571", list: "—" },
  { name: "琴伝流", n: 15, median: 640, range: "1〜10,050", list: "—" },
];

const BUYERS: { name: string; status: string; src: string; label: string }[] = [
  {
    name: "島村楽器",
    status: "買わない。「買取取り扱いのない楽器」に「和楽器（琴、三味線、大正琴など）」と明記",
    src: "https://www.shimamura.co.jp/used/",
    label: "島村楽器「楽器買取のご案内」",
  },
  {
    name: "イシバシ楽器",
    status: "難しい。「買取の難しい楽器・機材の一例」に「和琴/大正琴」",
    src: "https://www.ishibashi.co.jp/kaitori/",
    label: "イシバシ楽器「楽器買取」",
  },
  {
    name: "ハードオフ（宅配買取）",
    status: "楽器カテゴリーの買取できる品物に「和楽器」の記載あり。大正琴の名前は挙がっていない。ケースのない楽器本体は宅配不可",
    src: "https://takuhai-kaitori.hardoff.co.jp/category-3",
    label: "ハードオフ宅配買取「楽器」",
  },
  {
    name: "ティファナ",
    status: "「三味線や琴、横笛、尺八、和太鼓など」の和楽器を買取と記載。大正琴の名前は挙がっていない",
    src: "https://www.tifana.net/music/",
    label: "ティファナ「楽器買取」",
  },
  {
    name: "ウリエル",
    status: "楽器買取のページで、取引が活発な和楽器・民族楽器の例として「琴」「三味線」とともに「大正琴」を挙げている（出張はその場で現金）",
    src: "https://www.uriel-cuore.co.jp/instrument/",
    label: "ウリエル「楽器買取」",
  },
];

const FAQ = [
  {
    q: "大正琴の買取相場はいくらですか？",
    a: `当サイトが${ASOF}にヤフオクの落札済み出品（本体のみ140件）を集計したところ、外れ値を除いた132件の中央値は1,555円でした。1円で落札された出品が18件ある一方、1万円以上も14件あり、機種による差が大きい楽器です。お店の買取額は、この落札額より低くなるのが一般的です。`,
  },
  {
    q: "高く売れやすい大正琴はどれですか？",
    a: "今回の集計では、鈴木楽器の電子大正琴「あゆ」（4件・中央値21,600円）と電気大正琴「こはく」（14件・中央値9,900円）が高めでした。こはくは現行品で、メーカーの税込価格はソプラノ104,500円です。琴伝流（15件・中央値640円）や鈴木楽器の「蘭」（18件・中央値1,540円）は低めでした。",
  },
  {
    q: "島村楽器で大正琴は売れますか？",
    a: "島村楽器の公式サイトでは、大正琴を含む和楽器を「買取取り扱いのない楽器」としています。イシバシ楽器も大正琴を「買取の難しい楽器」の例に挙げています。持ち込む前に、和楽器を扱う業者に問い合わせるのが確実です。",
  },
  {
    q: "値段がつかなかった大正琴はどうすればよいですか？",
    a: "今回の集計でも、1,000円以下の落札が51件ありました。教室やサークルでの譲渡、フリマアプリでの出品、自治体の粗大ごみ・不燃ごみとしての処分などが選択肢です。処分の区分と手数料は自治体ごとに異なるため、お住まいの自治体の案内を確認してください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "大正琴の買取", href: "/articles/taishogoto-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/taishogoto-kaitori/" },
  title: "大正琴の買取相場は機種で10倍以上違う｜落札140件の集計と買い取る業者・買い取らない楽器店【2026年11月】",
  description:
    "大正琴のヤフオク落札140件を当サイトが集計。全体の中央値は1,555円、こはく（中央値9,900円）・あゆ（21,600円）は高め、琴伝流（640円）は低め。島村楽器は買取対象外など各社の対応も公式情報で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "大正琴の買取相場｜落札140件の機種別集計と買い取る業者【2026年11月】",
    description: "ヤフオク落札140件を機種別に集計。島村楽器・イシバシ楽器など各社の大正琴の扱いも整理。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "大正琴の買取相場は機種で10倍以上違う｜落札140件の集計と買い取る業者・買い取らない楽器店",
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/taishogoto-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "大正琴の買取", item: "https://gakkikaitori-biyori.com/articles/taishogoto-kaitori/" },
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
          大正琴の買取相場は機種で10倍以上違う｜落札140件の集計と買い取る業者・買い取らない楽器店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}にヤフオクの落札済み出品を当サイトが集計し、各社の公式サイトを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクで落札された大正琴（本体のみ140件）の<strong>中央値は1,555円</strong>（外れ値を除いた132件）でした。
            ただし機種の差が大きく、鈴木楽器の<strong>「あゆ」は中央値21,600円、「こはく」は9,900円</strong>、琴伝流は640円でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            楽器店では扱わないことがあり、<strong>島村楽器は大正琴を買取対象外</strong>と明記しています。
            売る前に機種名（本体の銘板やケースの表記）を確かめ、和楽器を扱う業者に問い合わせてください。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">機種別の落札価格（当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">機種・メーカー</th>
                <th className="text-right px-4 py-3 font-medium">件数</th>
                <th className="text-right px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">落札価格の幅（円）</th>
                <th className="text-left px-4 py-3 font-medium">メーカー税込価格（円）</th>
              </tr>
            </thead>
            <tbody>
              {SERIES.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 leading-relaxed">{s.name}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{s.n}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">¥{s.median.toLocaleString()}</td>
                  <td className="px-4 py-3 tabular-nums whitespace-nowrap">{s.range}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.list}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          集計方法：
          <a href={YAHOO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤフオクの落札相場検索「大正琴」</a>
          の新しい順200件（{ASOF}取得）から、出品タイトルで本体以外（調律器・楽譜・教本・CD・アンプ・弦・ケース単体など）と複数台のまとめ売りを除いた{TOTAL.n}件。
          機種は出品タイトルの表記で分けたため、表の合計は{TOTAL.n}件になりません。件数が10件未満の機種は参考値です。
          メーカー税込価格は
          <a href={SZ_KOHAKU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">鈴木楽器製作所「こはくシリーズ」</a>
          （{ASOF}確認）。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          全体では、外れ値を除いた{TOTAL.iqrN}件の中央値が¥{TOTAL.median.toLocaleString()}です。
          <strong>1円で落札された出品が{TOTAL.yen1}件</strong>、1,000円以下が{TOTAL.under1000}件ある一方、1万円以上も{TOTAL.over10000}件ありました。
          「こはく」の中央値9,900円は、ソプラノの税込価格104,500円の約1割にあたります。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          鈴木楽器は現在も大正琴を販売しており、公式の税込価格は「特松」60,500円・「あすなろ TAS-12」38,500円・箱型の電気大正琴「桂 TAS-11」82,500円です（
          <a href={SZ_TOKU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">特松・あすなろ</a>・
          <a href={SZ_HAKO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">箱型</a>）。
          今回の集計で特松は4件（1円・1円・1,500円・2,000円）、桂は3件（1,200円・5,904円・7,000円）と、中古の落札額は新品価格を大きく下回っていました。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">大正琴を買い取る業者・買い取らない楽器店</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
                <th className="text-left px-4 py-3 font-medium">出典</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((b) => (
                <tr key={b.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{b.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{b.status}</td>
                  <td className="px-4 py-3">
                    <a href={b.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {b.label}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          {ASOF}時点で確認した5社のうち、大正琴を名指ししていたのはウリエルだけでした。和楽器を扱うと書いている業者でも、大正琴に値段がつくかは機種と状態しだいです。
          問い合わせの際は、メーカー・機種名、電気大正琴かどうか、ケース・アダプター・ピックの有無、音が出るかを伝えると話が早くなります。
          三味線・箏など他の和楽器は<Link href="/articles/wagakki-kaitori/" className="text-accent underline">和楽器の買取</Link>で、箏は<Link href="/articles/koto-kaitori/" className="text-accent underline">琴（箏）の買取</Link>で整理しています。
        </p>

        <h2 id="prepare" className="text-xl font-bold mt-12 mb-4">売る前に確認したいこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li>
            <strong>機種名</strong>：上の集計のとおり、機種によって落札額が大きく違います。メーカー名と機種名（鈴木楽器の「こはく」「蘭」、琴伝流の「白鷺」「敷島」など）を控えてから問い合わせます。
          </li>
          <li>
            <strong>電気大正琴の付属品</strong>：アンプにつなぐ機種は、接続コードやACアダプターの有無を確認します。島村楽器はPSEマークのないデジタル機器を扱わないなど、電気製品として扱う業者もあります。
          </li>
          <li>
            <strong>ケース</strong>：ハードオフの宅配買取は「ケースが無く運搬上破損の可能性がある楽器本体」を受け付けていません。ケースがない場合は店頭か出張を選びます。
          </li>
          <li>
            <strong>まとめて売る</strong>：教室やサークルの解散で複数台を手放す場合は、出張買取に対応する業者にまとめて相談する方法があります。
          </li>
        </ul>

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
          currentSlug="taishogoto-kaitori"
          relatedSlugs={["wagakki-kaitori", "koto-kaitori", "shamisen-kaitori", "shimamura-gakki-kaitori", "hardoff-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-23 深夜02時の回）「ヤマハ トランペット 買取」。
// 一次データ:
//   島村楽器 買取価格検索 型番「YTR」（2026-11-23 取得・69行のうちトランペット64行。ギター・ターンテーブル等の5行は除外）
//   ヤフオクの落札済み検索「ヤマハ トランペット YTR」「YAMAHA YTR トランペット」（2026-11-23 取得・重複除去200件）
//     → タイトルに YTR の型番とトランペットがある本体を型番別に集計（ジャンク・新品・部品・ピッコロ・ポケット・C管は除外）。
//   楽器の買取屋さん ヤマハ トランペットの買取事例（2026-11-23 に一覧から取得できた100件）
// メーカーの公式（2026-11-23 取得）: ヤマハ トランペット 製品一覧・YTR-8335 製品ページ（希望小売価格）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月23日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=YTR&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=trumpet&maker=yamaha";
const YAMAHA = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/trumpets/";
const YAMAHA_8335 = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/trumpets/bb-trumpets/ytr-8335-02/";

// 島村楽器の掲示（A ランク）をシリーズ別に集計
const SERIES: { series: string; n: number; median: string; range: string }[] = [
  { series: "Xeno アーティストモデル（YTR-9335CHS・NYS）", n: 6, median: "110,000円", range: "110,000〜140,000円" },
  { series: "YTR-8335・8345・8330EM・8340EM 系（1981年製〜現行）", n: 38, median: "85,000円", range: "67,000〜174,000円" },
  { series: "YTR-850・800 系", n: 6, median: "64,000円", range: "59,000〜107,000円" },
  { series: "YTR-6000番台（6310Z・6320・6330F・6335 系）", n: 8, median: "60,000円", range: "53,000〜110,000円" },
  { series: "1981〜1992年製の YTR-9300番台（9310M・9335ML ほか）", n: 6, median: "59,000円", range: "59,000円（6行とも同額）" },
];

// 型番別：希望小売価格（現行品・税込）・島村楽器の掲示（A）・ヤフオク落札（当サイト集計）
const MODELS: { model: string; retail: string; shima: string; yahoo: string }[] = [
  { model: "YTR-135（旧型・入門）", retail: "—", shima: "掲示なし", yahoo: "23件・中央値8,500円（4,235〜21,500円）" },
  { model: "YTR-136（旧型・入門）", retail: "—", shima: "掲示なし", yahoo: "15件・中央値11,001円" },
  { model: "YTR-1310（旧型・入門）", retail: "—", shima: "掲示なし", yahoo: "16件・中央値16,307円" },
  { model: "YTR-1335", retail: "—", shima: "掲示なし", yahoo: "8件・中央値27,450円" },
  { model: "YTR-2330（現行・入門）", retail: "96,800円", shima: "掲示なし", yahoo: "3件・40,000円・55,000円・58,000円" },
  { model: "YTR-2335", retail: "—", shima: "掲示なし", yahoo: "6件・中央値47,840円" },
  { model: "YTR-3325", retail: "—", shima: "掲示なし", yahoo: "10件・中央値35,275円" },
  { model: "YTR-3335（現行）", retail: "126,500円", shima: "掲示なし", yahoo: "3件・51,000円・57,000円・81,730円" },
  { model: "YTR-4335G・GII", retail: "—", shima: "掲示なし", yahoo: "4件・中央値109,064円" },
  { model: "YTR-8335（2013年〜・ラッカー）", retail: "467,500円", shima: "70,000円", yahoo: "8335 系8件・中央値180,088円" },
  { model: "YTR-8335S（2013年〜・銀メッキ）", retail: "495,000円", shima: "75,000円", yahoo: "（8335 系に含む）" },
  { model: "YTR-8335G／GS（2013年〜）", retail: "473,000円／500,500円", shima: "G 70,000円・88,000円（2行）／GS 75,000円", yahoo: "—" },
  { model: "YTR-9335CHS・NYS（2019年〜）", retail: "649,000円", shima: "140,000円", yahoo: "—" },
];

const FAQ = [
  {
    q: "ヤマハのトランペットはいくらで売れますか？",
    a: `島村楽器の買取価格検索では、ヤマハのトランペット64行の A ランクの中央値が82,500円でした（${ASOF}確認）。掲示は YTR-6000番台以上の上位機種のみで、YTR-2330 などの入門機種の掲示はありません。入門機種のヤフオクの落札中央値は、YTR-135 が8,500円、YTR-1335 が27,450円、YTR-2335 が47,840円です。`,
  },
  {
    q: "入門機種（YTR-2330 など）を店に持ち込むと、いくらになりますか？",
    a: "島村楽器の買取価格検索に掲示がないため、査定額は実物を見て決まります。楽器の買取屋さんはヤマハのトランペットの買取事例を公開しており、2024年以降の84件の中間価格は45,000円、最低額は4,025円でした。型番は記載されていません。",
  },
  {
    q: "同じ YTR-8335 でも金額が違うのはなぜですか？",
    a: "島村楽器は製造年とシリアル番号の範囲で行を分けて掲示しています。YTR-8335 は1981〜1986年製が75,000円、1997〜2013年製と2013年以降が70,000円でした。銀メッキの YTR-8335S（2013年〜）は75,000円で、ラッカーより5,000円高い掲示です。",
  },
  {
    q: "島村楽器の A・B・C ランクではどれくらい差がありますか？",
    a: "ヤマハのトランペット64行では、B ランクが A の81〜90%、C ランクが63〜80%でした。島村楽器は付属品の欠品を別途減額とし、再販時に修理や調整が必要な場合はその費用を買取価格から差し引くと案内しています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ヤマハのトランペットの買取", href: "/articles/yamaha-trumpet-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yamaha-trumpet-kaitori/" },
  title: "ヤマハのトランペットの買取相場｜YTR 型番別と島村楽器の掲示64行【2026年11月】",
  description:
    "ヤマハのトランペットの買取相場を、島村楽器の掲示買取価格64行（Xeno・カスタムなど）と、YTR-135・1335・2335 など入門機種のヤフオク落札の中央値で型番別に整理しました。楽器の買取屋さんの事例100件も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ヤマハのトランペットの買取相場｜YTR 型番別と島村楽器の掲示【2026年11月】",
    description: "上位機種は島村楽器の掲示64行、入門機種はヤフオク落札の中央値で型番別に整理。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ヤマハのトランペットの買取相場｜YTR 型番別と島村楽器の掲示64行",
        datePublished: "2026-11-23",
        dateModified: "2026-11-23",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yamaha-trumpet-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ヤマハのトランペットの買取", item: "https://gakkikaitori-biyori.com/articles/yamaha-trumpet-kaitori/" },
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
          ヤマハのトランペットの買取相場｜YTR 型番別と島村楽器の掲示64行
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器はヤマハのトランペットを64行掲示しており、A ランクの<strong>中央値は82,500円</strong>（53,000〜174,000円）でした。
            掲示があるのは Xeno・カスタム・YTR-6000番台などの上位機種だけで、<strong>YTR-2330・3335 などの入門機種には掲示がありません</strong>。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            入門機種の相場はヤフオクの落札で確かめられます。旧型の YTR-135 は中央値8,500円、YTR-1335 は27,450円、YTR-2335 は47,840円で、型番と製造時期で大きく変わります。
          </p>
        </div>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（シリーズ別・Aランク）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">シリーズ</th>
                <th className="text-left px-4 py-3 font-medium">掲示行数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {SERIES.map((r) => (
                <tr key={r.series} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.series}</td>
                  <td className="px-4 py-3">{r.n}行</td>
                  <td className="px-4 py-3">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          最高額は YTR-8335WS（ベルインナー金メッキ）の174,000円、次いで YTR-8330EM の171,000円です。
          同じ型番でも製造年・シリアル番号の範囲で行が分かれており、YTR-8310Z は2005〜2018年製が67,000円、2018年以降の第2世代が75,000円でした。
          B ランクは A の81〜90%、C ランクは63〜80%です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「YTR」）</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>
          （{ASOF}確認）。型番「YTR」の69行のうち、トランペット以外（エレキギター・ターンテーブル等）の5行を除いた64行を集計しています。掲示額は目安で、最終的な買取価格は現物確認のうえで決まります。
        </p>

        <h2 id="models" className="text-xl font-bold mt-12 mb-4">型番別：希望小売価格・掲示買取価格・落札価格</h2>
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
              {MODELS.map((r) => (
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
          現行の YTR-8335 は希望小売価格467,500円に対し、島村楽器の A ランクは70,000円（約15%）でした。
          落札データで件数が多いのは YTR-135・136・1310 などの旧型の入門機種で、いずれも中央値は2万円未満です。
          希望小売価格「—」は、ヤマハの現行の製品一覧で価格を確認できなかった型番（旧型番・特別生産品など）です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YAMAHA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ トランペット 製品一覧</a>・
          <a href={YAMAHA_8335} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ YTR-8335</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>
          （{ASOF}確認）。ヤフオクは落札済み検索「ヤマハ トランペット YTR」「YAMAHA YTR トランペット」（{ASOF}取得・重複を除いて200件）のうち、タイトルに YTR の型番とトランペットがある本体を型番別に集計しました。
          ジャンク・新品・部品・ピッコロトランペット・ポケットトランペット・C管は除外しています。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さんの事例</h2>
        <p className="text-sm leading-relaxed mb-4">
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>は、ヤマハのトランペットの買取事例を公開しています。
          {ASOF}に一覧から取得できた100件（2017年2月〜2026年10月）の中間価格は51,250円、範囲は4,025円〜230,000円でした。
          2024年以降の84件に絞ると中間価格は45,000円です。直近は2026年10月の神奈川県南足柄市の事例（シルバー 161,000円）です。
        </p>
        <p className="text-xs text-warm-gray mb-10">出典：楽器の買取屋さん ヤマハ トランペットの買取事例（{ASOF}取得）。型番は記載されていません。</p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番と末尾の記号</strong>：ベル付近の刻印で型番を確かめます。ヤマハの製品一覧では、末尾の S が銀メッキ仕上げ、G がゴールドブラスベルを示しています（例：YTR-8335GS＝ゴールドブラスベル・銀メッキ）。</li>
          <li><strong>シリアル番号</strong>：島村楽器はシリアル番号の範囲で掲示を分けているため、番号を控えておくと掲示との照合ができます。</li>
          <li><strong>付属品</strong>：ハードケース・純正マウスピース・保証書をそろえます。島村楽器は付属品の欠品を別途減額としています。</li>
          <li><strong>入門機種の売り先</strong>：掲示がない型番は、複数の業者に同じ情報を伝えて見積もりを比べます。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          トランペット全般は<Link href="/articles/trumpet-kaitori/" className="text-accent underline">トランペット買取相場ガイド</Link>、
          YTR-8335 は<Link href="/articles/yamaha-ytr8335-kaitori/" className="text-accent underline">ヤマハ YTR-8335の買取相場</Link>、
          仕上げによる違いは<Link href="/articles/lacquer-silver-plate-kaitori/" className="text-accent underline">ラッカーと銀メッキの買取価格の違い</Link>で整理しています。
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
          currentSlug="yamaha-trumpet-kaitori"
          relatedSlugs={["trumpet-kaitori", "yamaha-ytr8335-kaitori", "kangakki-kaitori", "lacquer-silver-plate-kaitori", "mouthpiece-kaitori", "yamaha-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

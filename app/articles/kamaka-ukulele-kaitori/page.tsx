import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜02時の回）「カマカ ウクレレ 買取」。
// 一次データ:
//   ① 島村楽器「買取価格検索」のウクレレ（cat=3）× ブランド KAMAKA（brand=307）全227行（2026-11-20 取得）を当サイトで集計。
//      比較用にウクレレ（cat=3）全3,260行も取得し、20型番以上掲載のブランドごとに A ランクの中央値を算出。
//      シリーズは型番の先頭（HF-1・HF-2・HP-1 など。D・LD2・D2I・100th・-17 などの付記は同じシリーズに含める）で分類。
//   ② ヤフオクの落札済み検索「カマカ ウクレレ」「KAMAKA ウクレレ」（2026-11-20 取得・各4ページ・auctionId で重複除去＝239件）。
//      取得は scripts/fetch-yahoo-medians-gakki.py と同じ方法（__NEXT_DATA__ の出品）を /tmp の別スクリプトで実行（データファイルには書いていない）。
//      カマカの記載がない出品・他ブランドが主の出品・弦・ケース単体・ピック・ブリッジ・ペグ・チューナー・ストラップ・新品/未使用・CD・雑誌・小物を除外＝155件（落札日 2026-05-24〜11-19）。
//      型番・ラベルはタイトルの記載で分類（記載なしは「型番の記載なし」）。
// メーカーの事実は公式（2026-11-20 取得・英語）:
//   https://kamakahawaii.com/our-story/company/（1916年創業・ホノルル 550 South Street・従業員22人）
//   https://kamakahawaii.com/support/dating-your-kamaka-uke/（ラベルと年代：ゴールドラベル〜1969年、ホワイトラベル 1969〜2000年、2000年6月1日から新ラベル、シリアル番号は2000年から）
//   https://kamakahawaii.com/support/serial-no-warranty/（新品1年の限定保証・譲渡不可。シリアル番号は1999年からと記載）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=3&inst=&brand=307&model=&num=100&pg=1";
const SHIMA_ALL = "https://www.shimamura.co.jp/used/search.html?cat=3&inst=&brand=&model=&num=100&pg=1";
const K_COMPANY = "https://kamakahawaii.com/our-story/company/";
const K_DATING = "https://kamakahawaii.com/support/dating-your-kamaka-uke/";
const K_WARRANTY = "https://kamakahawaii.com/support/serial-no-warranty/";

// ① 島村楽器 買取価格検索（当サイト集計）
const S_TOTAL = 227;
const S_MEDIAN = 146000;
const S_SERIES: { s: string; size: string; n: number; base: string; median: string }[] = [
  { s: "HF-1", size: "ソプラノ", n: 26, base: "56,000円", median: "119,500円" },
  { s: "HP-1（パイナップル）", size: "ソプラノ", n: 24, base: "55,000円", median: "123,000円" },
  { s: "HF-2", size: "コンサート", n: 32, base: "68,000円", median: "140,000円" },
  { s: "HF-3", size: "テナー", n: 32, base: "80,000円", median: "159,000円" },
  { s: "HF-36（6弦）", size: "テナー", n: 25, base: "—", median: "157,000円" },
  { s: "HF-38（8弦）", size: "テナー", n: 25, base: "—", median: "164,000円" },
  { s: "HF-4", size: "バリトン", n: 12, base: "89,000円", median: "158,000円" },
];
const S_BRANDS: { brand: string; n: number; median: string }[] = [
  { brand: "KAMAKA（カマカ）", n: 227, median: "146,000円" },
  { brand: "G-string（ジーストリング）", n: 21, median: "100,000円" },
  { brand: "Martin（マーチン）", n: 39, median: "68,000円" },
  { brand: "tkitki ukulele", n: 150, median: "59,000円" },
  { brand: "KoAloha（コアロハ）", n: 208, median: "56,000円" },
  { brand: "Kanile`a（カニレア）", n: 138, median: "55,500円" },
  { brand: "ウクレレ全体（3,260型番）", n: 3260, median: "28,000円" },
];

// ② ヤフオク落札（当サイト集計）
const Y_TOTAL = 155;
const Y_MEDIAN = 63000;
const Y_BANDS = [
  { band: "2万円未満", n: 18 },
  { band: "2万〜5万円未満", n: 41 },
  { band: "5万〜10万円未満", n: 70 },
  { band: "10万円以上", n: 26 },
];
const Y_SERIES: { s: string; n: number; median: string; range: string }[] = [
  { s: "HF-1", n: 24, median: "68,100円", range: "27,280〜167,000円" },
  { s: "HF-2", n: 22, median: "90,501円", range: "63,000〜200,000円" },
  { s: "HF-3", n: 12, median: "146,801円", range: "49,940〜343,981円" },
  { s: "HP-1", n: 6, median: "59,400円", range: "44,550〜66,880円" },
  { s: "Keiki・KK-1x の記載", n: 16, median: "11,448円", range: "2,860〜59,400円" },
  { s: "型番の記載なし", n: 70, median: "43,000円", range: "8,503〜156,200円" },
];
const Y_LABEL: { label: string; n: number; median: string; era: string }[] = [
  { label: "ゴールドラベル", n: 11, median: "23,000円", era: "1954〜1969年の区分（1969年にホワイトラベルへ）" },
  { label: "ホワイトラベル（白ラベル）", n: 15, median: "60,500円", era: "1969〜2000年" },
];

const yen = (n: number) => n.toLocaleString("ja-JP");

const FAQ = [
  {
    q: "カマカのウクレレはいくらで買い取ってもらえますか？",
    a: `${ASOF}に島村楽器の買取価格検索で KAMAKA（カマカ）の${S_TOTAL}型番を集計すると、Aランクの買取価格の中央値は${yen(S_MEDIAN)}円でした。付記のない基本型番では HF-1 が56,000円、HF-2 が68,000円、HF-3 が80,000円、HF-4 が89,000円です。デラックス仕様や記念モデルなど付記のある型番はこれより高く掲示されています。`,
  },
  {
    q: "古いカマカ（ゴールドラベル・ホワイトラベル）は高く売れますか？",
    a: "ヤフオクの落札では、タイトルに「ゴールドラベル」とある11件の中央値が23,000円、「ホワイトラベル」とある15件の中央値が60,500円でした。古いほど高いとは限らず、型番・状態・サイズで大きく変わります。カマカの公式サイトは、内部ラベルのデザインで製造年代の目安がわかると案内しています。",
  },
  {
    q: "メーカー保証は中古で買った人にも引き継がれますか？",
    a: "カマカの公式サイトによると、新品に付く1年間の限定保証は最初の購入者のもので、次の所有者には譲渡できません。売るときに保証書が付いていても、保証が買い手に引き継がれるわけではありません。",
  },
  {
    q: "査定の前に何を確認すればよいですか？",
    a: "サウンドホールから見える内部ラベルの種類とシリアル番号（2000年以降の製品）、型番、ハードケースの有無を確認します。島村楽器の掲示では、Bランクは Aランクの約81%、Cランクは約56%（型番ごとの比率の中央値）でした。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "カマカのウクレレの買取", href: "/articles/kamaka-ukulele-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/kamaka-ukulele-kaitori/" },
  title: "カマカ（KAMAKA）ウクレレの買取相場｜島村楽器の掲示227型番・ヤフオク落札155件を型番とラベル別に集計【2026年11月】",
  description:
    "カマカ（KAMAKA）のウクレレの買取相場を、島村楽器の買取価格検索227型番とヤフオクの落札155件から型番（HF-1・HF-2・HF-3・HP-1 ほか）とラベル別に集計しました。他のウクレレブランドとの掲示価格の比較、公式サイトのラベルによる年代の見分け方も掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "カマカのウクレレの買取相場｜掲示227型番と落札155件【2026年11月】",
    description: "島村楽器の掲示買取価格とヤフオク落札を型番・ラベル別に集計。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "カマカ（KAMAKA）ウクレレの買取相場｜島村楽器の掲示227型番・ヤフオク落札155件を型番とラベル別に集計",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/kamaka-ukulele-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "カマカのウクレレの買取", item: "https://gakkikaitori-biyori.com/articles/kamaka-ukulele-kaitori/" },
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
          カマカ（KAMAKA）ウクレレの買取相場｜島村楽器の掲示227型番・ヤフオク落札155件を型番とラベル別に集計
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、メーカーの情報はカマカ（Kamaka Hawaii）の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器の買取価格検索には KAMAKA（カマカ）が<strong>{S_TOTAL}型番</strong>掲載されており、Aランクの<strong>中央値は{yen(S_MEDIAN)}円</strong>です。20型番以上が掲載されたウクレレのブランドの中で最も高く、ウクレレ全体（3,260型番）の中央値28,000円の約5倍です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクで落札されたカマカのウクレレ{Y_TOTAL}件の<strong>中央値は{yen(Y_MEDIAN)}円</strong>でした。HF-1・HF-2・HF-3 の順にサイズが大きいほど高く、Keiki・KK-1x と書かれた出品は中央値1万円台前半です。
          </p>
        </div>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（227型番・当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          同じ型番でも、仕様や記念モデルを示す付記（D・LD2・D2I・100th・-17 など）ごとに別の行で掲示されています。付記のない基本型番の価格と、付記つきを含めたシリーズ全体の中央値は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">シリーズ</th>
                <th className="text-left px-4 py-3 font-medium">サイズ</th>
                <th className="text-right px-4 py-3 font-medium">型番数</th>
                <th className="text-right px-4 py-3 font-medium">基本型番の A</th>
                <th className="text-right px-4 py-3 font-medium">シリーズの A 中央値</th>
              </tr>
            </thead>
            <tbody>
              {S_SERIES.map((s) => (
                <tr key={s.s} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{s.s}</td>
                  <td className="px-4 py-3">{s.size}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{s.n}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{s.base}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{s.median}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          最も高い掲示は HF-3 D4I JAKE BLUE の479,000円で、HB-3 D2I・HF-3 D2I-17 が367,000円で続きます。最も低いのは、ハイフンのない旧表記の HP1（20,000円）・HF1（40,000円）などでした。
          状態ランクによる差は、型番ごとの比率の中央値で <strong>Bランク＝Aの約81%、Cランク＝Aの約56%</strong> です。
        </p>
        <p className="text-sm leading-relaxed mb-4">他のウクレレブランド（20型番以上が掲載されたもの）と、Aランクの中央値を比べると次のとおりです。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-right px-4 py-3 font-medium">型番数</th>
                <th className="text-right px-4 py-3 font-medium">A 中央値</th>
              </tr>
            </thead>
            <tbody>
              {S_BRANDS.map((b) => (
                <tr key={b.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3">{b.brand}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{yen(b.n)}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{b.median}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（ウクレレ × KAMAKA）</a>・
          <a href={SHIMA_ALL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ウクレレ全件</a>（{ASOF}取得・当サイトで集計）。掲示価格は査定の目安で、実際の査定額は付属品や状態で変わります。島村楽器の買取条件は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>にまとめています。
        </p>

        <h2 id="yahoo" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（155件・当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          ヤフオクの落札済み検索「カマカ ウクレレ」「KAMAKA ウクレレ」の結果から、重複と弦・ケース単体などを除いた{Y_TOTAL}件（落札日 2026年5月24日〜11月19日）を集計しました。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">落札価格</th>
                <th className="text-right px-4 py-3 font-medium">件数</th>
              </tr>
            </thead>
            <tbody>
              {Y_BANDS.map((b) => (
                <tr key={b.band} className="border-t border-warm-200">
                  <td className="px-4 py-3">{b.band}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{b.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">タイトルの型番</th>
                <th className="text-right px-4 py-3 font-medium">件数</th>
                <th className="text-right px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {Y_SERIES.map((s) => (
                <tr key={s.s} className="border-t border-warm-200">
                  <td className="px-4 py-3">{s.s}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{s.n}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{s.median}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{s.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          HF-1・HF-2・HF-3 の落札の中央値は、島村楽器の基本型番の Aランク（56,000円・68,000円・80,000円）を上回っていました。ただし落札にはデラックス仕様や記念モデルも含まれ、送料・手数料も差し引いていないため、手取りで比べると差は小さくなります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索（{ASOF}取得・各4ページ）。型番の付記（D・100th など）は同じシリーズに含めています。落札価格は個別の取引で、同じ金額で売れることを示すものではありません。
        </p>

        <h2 id="label" className="text-xl font-bold mt-12 mb-4">ラベルで年代を確かめる</h2>
        <p className="text-sm leading-relaxed mb-4">
          カマカの公式サイトは、内部ラベルとヘッドのデカールで製造年代の目安がわかると案内しています。1954〜1969年の区分では1958年から使われた「KK」デカールとゴールドラベルが組み合わされ、1969年にホワイトラベル（白地）へ、2000年6月1日に新しいデザインのラベルへ替わり、2000年からはヘッドの「KK」が貝の象嵌になりました。シリアル番号は2000年から（保証のページでは1999年から）使われています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">タイトルのラベル表記</th>
                <th className="text-right px-4 py-3 font-medium">落札件数</th>
                <th className="text-right px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">公式の年代の目安</th>
              </tr>
            </thead>
            <tbody>
              {Y_LABEL.map((l) => (
                <tr key={l.label} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3">{l.label}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{l.n}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{l.median}</td>
                  <td className="px-4 py-3 leading-relaxed">{l.era}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          落札の中央値はゴールドラベルよりホワイトラベルのほうが高く、古いラベルほど高いという結果にはなっていません。ゴールドラベルの11件のうち5件は、Keiki・KK-1x とも書かれた出品でした。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={K_DATING} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Kamaka Hawaii「Dating Your Kamaka Uke」</a>・
          <a href={K_WARRANTY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Serial Number &amp; Limited Warranty</a>（{ASOF}確認・英語の記載を当サイトで要約）。
        </p>

        <h2 id="maker" className="text-xl font-bold mt-12 mb-4">メーカーの公式情報</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed mb-4 space-y-2">
          <li>1916年にサミュエル・カマカ Sr. が創業し、工房と直営店はホノルルの 550 South Street にあり、22人の従業員が製作していると案内されています。</li>
          <li>新品には1年間の限定保証が付きますが、保証は最初の購入者のもので、次の所有者には譲渡できないと明記されています。</li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={K_COMPANY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Kamaka Hawaii「About Us」</a>・
          <a href={K_WARRANTY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Serial Number &amp; Limited Warranty</a>（{ASOF}確認）。
          ウクレレ全般の売り方は<Link href="/articles/ukulele-kaitori/" className="text-accent underline">ウクレレ買取ガイド</Link>にまとめています。
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
          currentSlug="kamaka-ukulele-kaitori"
          relatedSlugs={["guitar-kaitori", "ukulele-kaitori", "martin-kaitori", "acoustic-guitar-kaitori", "shimamura-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

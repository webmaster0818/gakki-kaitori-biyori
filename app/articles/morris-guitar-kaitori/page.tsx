import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜02時の回）「モーリス ギター 買取」。
// 一次データ:
//   ① 島村楽器「買取価格検索」のアコースティックギター（cat=1）× ブランド MORRIS（brand=120）全509行（2026-11-20 取得）を当サイトで集計。
//      楽器の内訳＝アコースティックギター421・エレアコギター86・マンドリン1・バンジョー1。クラシックギター（cat=2）・エレキギター（cat=4）× MORRIS は0件。
//      シリーズは型番の先頭の英字（M・S・F・MF・SC・MD・W など）で分類。
//   ② ヤフオクの落札済み検索「モーリス ギター」「Morris ギター」（2026-11-20 取得・各4ページ・auctionId で重複除去＝216件）。
//      取得は scripts/fetch-yahoo-medians-gakki.py と同じ方法（__NEXT_DATA__ の出品）を /tmp の別スクリプトで実行（データファイルには書いていない）。
//      ブランド名のない出品と、ストラップ・ピック・ペグ・チューナー・ナット・まとめ売り・エレキを除外＝201件（落札日 2026-11-06〜11-19）。
//      型番はタイトルの「W-25」「MD-525」などの記載で分類（記載なしは分類しない）。
// メーカーの事実は公式（2026-11-20 取得）:
//   https://www.morris-guitar.com/about_com.html（会社概要・創業・所在地・ブランド）
//   https://www.morris-guitar.com/（シリーズ構成・Sシリーズ 2001年発表）
//   https://www.morris-guitar.com/information/2026/1104_01.html（塗装を伴う修理の受付再開 2026年11月9日）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=1&inst=&brand=120&model=&num=100&pg=1";
const MORRIS_TOP = "https://www.morris-guitar.com/";
const MORRIS_CO = "https://www.morris-guitar.com/about_com.html";
const MORRIS_REPAIR = "https://www.morris-guitar.com/information/2026/1104_01.html";

// ① 島村楽器 買取価格検索（当サイト集計）
const S_TOTAL = 509;
const S_MEDIAN = 33000;
const S_BANDS = [
  { band: "1万〜2万円未満", n: 153 },
  { band: "2万〜5万円未満", n: 140 },
  { band: "5万〜10万円未満", n: 94 },
  { band: "10万円以上", n: 122 },
];
const S_SERIES: { s: string; n: number; median: string; note: string }[] = [
  { s: "S（Sシリーズ）", n: 68, median: "104,000円", note: "最高 249,000円（S-155R）" },
  { s: "SC", n: 18, median: "115,000円", note: "最高 227,000円（SC-145HRE）" },
  { s: "W", n: 14, median: "51,500円", note: "W-145 240,000円・W-51 40,000円など" },
  { s: "M", n: 104, median: "23,500円", note: "最高 210,000円（M-151G）" },
  { s: "F", n: 64, median: "19,000円", note: "最高 385,000円（F-751）" },
  { s: "MF", n: 36, median: "14,000円", note: "MF-207 は 11,000円" },
  { s: "MD", n: 15, median: "14,000円", note: "全15型番が 10,000〜19,000円" },
];

// ② ヤフオク落札（当サイト集計）
const Y_TOTAL = 201;
const Y_MEDIAN = 7150;
const Y_BANDS = [
  { band: "5,000円未満", n: 69 },
  { band: "5,000〜1万円未満", n: 62 },
  { band: "1万〜2万円未満", n: 41 },
  { band: "2万〜5万円未満", n: 22 },
  { band: "5万円以上", n: 7 },
];
const Y_SERIES: { s: string; n: number; median: string; range: string }[] = [
  { s: "W（2桁の型番：W-25・W-30・W-40・W-20・W-35 など）", n: 67, median: "6,325円", range: "1,001〜52,049円" },
  { s: "MD（MD-525・MD-507・MD-515 など）", n: 23, median: "4,510円", range: "700〜26,400円" },
  { s: "TF（TF-801・TF-805・TF-150 など）", n: 8, median: "28,215円", range: "17,724〜132,120円" },
];

const yen = (n: number) => n.toLocaleString("ja-JP");

const FAQ = [
  {
    q: "モーリスのギターはいくらで買い取ってもらえますか？",
    a: `${ASOF}に島村楽器の買取価格検索で MORRIS（モーリス）の${S_TOTAL}型番を集計すると、Aランク（状態の良いもの）の買取価格の中央値は${yen(S_MEDIAN)}円、最も低い型番でも10,000円でした。Sシリーズ（中央値104,000円）と、M・F・MD・MF などのシリーズ（中央値14,000〜23,500円）で大きく異なります。`,
  },
  {
    q: "昔のモーリス W-25 や W-30 は売れますか？",
    a: "ヤフオクでは W-25・W-30・W-40 など2桁の型番の W シリーズが2週間で67件落札され、中央値は6,325円でした。島村楽器の買取価格検索には、これらの型番は掲載されていません（W-51・W-52・W-61 など一部の型番は掲載あり）。掲載のない型番は、店頭や LINE 査定で個別に確認する必要があります。",
  },
  {
    q: "状態が悪いとどのくらい下がりますか？",
    a: "島村楽器の掲示では、Bランクの価格は Aランクの約81%、Cランクは約56%（いずれも型番ごとの比率の中央値）でした。ヤフオクでも、タイトルに「ジャンク」「現状」とある出品の中央値は5,606円で、それ以外（7,493円）より低くなっていました。",
  },
  {
    q: "売る前に修理したほうがよいですか？",
    a: "モーリスは、塗料の入手難で一時停止していた「塗装を伴う修理」の受付を2026年11月9日に再開したと公式サイトで告知しています。ただし修理費が査定額の上昇分を上回ることもあるため、まず現状のまま査定を受け、修理するかどうかは見積もりを比べてから決めることをおすすめします。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "モーリスギターの買取", href: "/articles/morris-guitar-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/morris-guitar-kaitori/" },
  title: "モーリス（Morris）ギターの買取相場｜島村楽器の掲示509型番とヤフオク落札201件をシリーズ別に集計【2026年11月】",
  description:
    "モーリス（Morris）のアコースティックギターの買取相場を、島村楽器の買取価格検索509型番とヤフオクの落札201件からシリーズ別に集計しました。Sシリーズと W・MD など旧型番の差、状態ランクによる下がり幅、メーカーの修理受付の状況を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "モーリスギターの買取相場｜掲示509型番と落札201件【2026年11月】",
    description: "島村楽器の掲示買取価格とヤフオク落札をシリーズ別に集計。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "モーリス（Morris）ギターの買取相場｜島村楽器の掲示509型番とヤフオク落札201件をシリーズ別に集計",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/morris-guitar-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "モーリスギターの買取", item: "https://gakkikaitori-biyori.com/articles/morris-guitar-kaitori/" },
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
          モーリス（Morris）ギターの買取相場｜島村楽器の掲示509型番とヤフオク落札201件をシリーズ別に集計
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、メーカーの情報はモーリスの公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器の買取価格検索には MORRIS（モーリス）が<strong>{S_TOTAL}型番</strong>掲載されており、Aランクの<strong>中央値は{yen(S_MEDIAN)}円</strong>、最も低い型番でも10,000円です。
            フィンガーピッキング向けの<strong>Sシリーズは中央値104,000円</strong>で、M・F・MD などのシリーズ（中央値14,000〜23,500円）と大きな差があります。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            一方、ヤフオクで2週間に落札されたモーリスのギター{Y_TOTAL}件の<strong>中央値は{yen(Y_MEDIAN)}円</strong>で、その3分の1は W-25・W-30 など2桁の型番の W シリーズでした。
            これらの型番は島村楽器の掲示にないため、手元のギターの型番が掲示にあるかどうかで、売り方の判断が変わります。
          </p>
        </div>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（509型番・当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の買取価格検索で、カテゴリー「アコースティックギター」・ブランド「MORRIS（モーリス）」を指定すると{S_TOTAL}件が表示されます（アコースティックギター421・エレアコギター86・マンドリン1・バンジョー1）。Aランクの価格帯は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Aランクの買取価格</th>
                <th className="text-right px-4 py-3 font-medium">型番数</th>
              </tr>
            </thead>
            <tbody>
              {S_BANDS.map((b) => (
                <tr key={b.band} className="border-t border-warm-200">
                  <td className="px-4 py-3">{b.band}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{b.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">型番の先頭の英字でシリーズに分けると、次のようになります（10型番以上のシリーズ）。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">シリーズ（型番の先頭）</th>
                <th className="text-right px-4 py-3 font-medium">型番数</th>
                <th className="text-right px-4 py-3 font-medium">A 中央値</th>
                <th className="text-left px-4 py-3 font-medium">備考</th>
              </tr>
            </thead>
            <tbody>
              {S_SERIES.map((s) => (
                <tr key={s.s} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{s.s}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{s.n}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{s.median}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          状態ランクによる差は、型番ごとの比率の中央値で <strong>Bランク＝Aの約81%、Cランク＝Aの約56%</strong> でした。たとえば A 10,000円の型番は、C ランクでは5,000〜6,000円前後になる計算です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（アコースティックギター × MORRIS）</a>（{ASOF}取得・全509行を当サイトで集計）。掲示価格は店頭・宅配・出張の査定の目安で、実際の査定額は付属品や状態で変わります。島村楽器の買取条件は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>にまとめています。
        </p>

        <h2 id="yahoo" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（201件・当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          ヤフオクの落札済み検索「モーリス ギター」「Morris ギター」の結果から、重複とアクセサリー類を除いた{Y_TOTAL}件（落札日 2026年11月6日〜19日）を集計しました。
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
                <tr key={s.s} className="border-t border-warm-200 align-top">
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
          落札額の上位は TF-150（132,120円・ハカランダの記載あり）、W-120（100,109円）、S-101III（98,560円・ジャンク表記）でした。
          201件のうち73件はタイトルに「ジャンク」「現状」とあり、その中央値は5,606円（それ以外の128件は7,493円）です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索（{ASOF}取得・各4ページ）。落札価格には送料を含みません。出品者の手数料も差し引いていないため、手取りは落札価格より少なくなります。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">掲示とオークションの比べ方</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed mb-4 space-y-2">
          <li><strong>型番が島村楽器の掲示にある場合</strong>：掲示の最低は10,000円（Aランク）です。MD シリーズは掲示の15型番がすべて10,000〜19,000円ですが、ヤフオクの MD 23件の中央値は4,510円でした。状態が良ければ、掲示のある店で査定を受けるほうが手取りの見込みを立てやすくなります。</li>
          <li><strong>掲示にない旧型番（W-25・W-30 など）</strong>：ヤフオクの中央値は6,325円で、5万円台の落札は W-80 の1件でした。店頭での査定額と、送料・手数料を引いたオークションの手取りを比べて決めることになります。</li>
          <li><strong>Sシリーズ・TF・ハンドメイドの上位機種</strong>：掲示の中央値が10万円を超えるため、複数の店で査定を比べる価値があります。</li>
        </ul>

        <h2 id="maker" className="text-xl font-bold mt-12 mb-4">メーカーの公式情報</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed mb-4 space-y-2">
          <li>製造元はモーリス楽器製造株式会社（長野県松本市・創業 昭和42年1月）です。会社概要には、モーリスのほかトルネード・ランブラー・グルービン・ホタカなどのブランドが記載されています。</li>
          <li>現行の製品は「LUTHIER MADE PREMIUM」「HAND MADE PREMIUM」「PERFORMERS EDITION」に分かれ、フィンガーピッキング向けのSシリーズは2001年に発表されたと案内されています。</li>
          <li>塗料の入手難で一時停止していた<strong>塗装を伴う修理の受付を、2026年11月9日に再開</strong>したと告知しています（問い合わせ先は株式会社モリダイラ楽器）。</li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={MORRIS_CO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">モーリスギター 会社概要</a>・
          <a href={MORRIS_TOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">製品案内</a>・
          <a href={MORRIS_REPAIR} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">塗装を伴う修理受付再開のお知らせ</a>（{ASOF}確認）。
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
          currentSlug="morris-guitar-kaitori"
          relatedSlugs={["acoustic-guitar-kaitori", "guitar-kaitori", "takamine-kaitori", "martin-kaitori", "gibson-j45-kaitori", "shimamura-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// GSC実測（2026-08-17〜09-13）で「楽器の買取屋さん」系の指名クエリが合計526表示・3クリック。
// 専用の受け皿が無く、川崎・名古屋・神戸・横浜・渋谷・札幌の地域記事6本に分散して拾っていた。
// 指名で探している人に、まず事実（会社・買取方法・店舗・対応エリア）を出すページを1本置く。
//
// ⚠️ 本文の事実はすべて公式サイト（https://gakkikaitori.co.jp/ ・2026-09-16取得）から。
//    口コミ・評価は載せない（第三者の投稿を転載しない当サイトの方針）。
//    「高く売れる」といった断定もしない。公表されている条件を並べ、判断材料にしてもらう。

const ASOF = "2026年9月16日";
const OFFICIAL = "https://gakkikaitori.co.jp/";

// 公式サイトの店舗一覧（/kaitori/shop/）に掲載されている店頭買取の店舗
const SHOPS: { pref: string; names: string[] }[] = [
  { pref: "北海道・東北", names: ["宮城岩沼店"] },
  { pref: "関東", names: ["上野店", "池袋店", "板橋店", "大宮店", "柏店", "横浜店", "厚木店", "宇都宮店", "群馬桐生店"] },
  { pref: "甲信越・北陸", names: ["甲府千塚店", "長野松本店", "新潟店", "金沢店", "石川小松店", "福井花堂中店"] },
  { pref: "東海", names: ["名古屋栄店", "名古屋守山店", "豊川店", "富士津田店"] },
  { pref: "近畿", names: ["大阪心斎橋店", "大阪門真店", "奈良神殿店"] },
  { pref: "中国・四国", names: ["広島店", "高松店"] },
  { pref: "九州", names: ["福岡店", "鹿児島店"] },
];
const SHOP_COUNT = SHOPS.reduce((a, s) => a + s.names.length, 0);

const FACTS: { k: string; v: string }[] = [
  { k: "運営会社", v: "UNI SOUND株式会社" },
  { k: "所在地", v: "〒231-0801 神奈川県横浜市中区新山下3-4-17 カリカチュアビル1F（公式サイトに「こちらでは買取を行っていません」と記載）" },
  { k: "買取方法", v: "出張買取／宅配買取／店頭買取／法人買取／遺品買取" },
  { k: "出張の対応エリア", v: "公式サイトの「無料出張見積対応エリア」に46都道府県を掲載" },
  { k: "出張の費用", v: "出張料・査定料は無料と公表" },
  { k: "受付", v: "フリーダイヤル 0120-1717-67（電話受付24時間・年中無休、土日祝も対応と記載）" },
  { k: "古物営業許可", v: "神奈川県公安委員会 第451310006356号" },
];

const FAQ = [
  {
    q: "楽器の買取屋さんはどこの会社が運営していますか？",
    a: "公式サイトの会社概要によると、運営会社はUNI SOUND株式会社です。所在地は神奈川県横浜市中区で、古物営業許可は神奈川県公安委員会 第451310006356号と記載されています。",
  },
  {
    q: "店舗に持ち込むことはできますか？",
    a: `公式サイトの店舗一覧には、店頭買取に対応する店舗が${SHOP_COUNT}店掲載されています（${ASOF}時点）。ただし会社概要に記載の本社所在地では買取を行っていない旨が明記されているため、持ち込む場合は店舗一覧に載っている店舗かどうかを確認してください。`,
  },
  {
    q: "出張買取はどの地域が対象ですか？",
    a: "公式サイトの「無料出張見積対応エリア」には46都道府県が掲載されています。ただし同じ都道府県でも地域によって条件が異なる場合があるため、実際に来てもらえるかは申し込み時にご確認ください。",
  },
  {
    q: "出張料や査定料はかかりますか？",
    a: "公式サイトでは出張料・査定料が無料と公表されています。金額の提示を受けたあとに売らない判断をした場合の扱いについては、申し込み時に確認しておくと安心です。",
  },
  {
    q: "査定額は他社と比べたほうがいいですか？",
    a: "楽器の買取価格は、機種・年式・状態・付属品の有無で大きく変わります。1社の提示額だけでは、それが相場に対して高いのか低いのか判断できません。手間はかかりますが、方式の違う業者を2〜3社比べるのが確実です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "楽器の買取屋さんとは", href: "/articles/gakki-no-kaitoriyasan/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/gakki-no-kaitoriyasan/" },
  title: "楽器の買取屋さんとは？運営会社・店舗一覧・出張の対応エリアを公式情報で整理【2026年9月】",
  description:
    `楽器の買取屋さん（運営：UNI SOUND株式会社）の運営会社・買取方法・店頭買取${SHOP_COUNT}店舗・出張の対応エリアを、公式サイトの公表内容だけで整理しました。持ち込みできる店舗の探し方と、査定を他社と比べるときの見かたも解説します。`,
  openGraph: {
    title: "楽器の買取屋さんとは？運営会社・店舗一覧・出張の対応エリア【2026年9月】",
    description: "公式サイトの公表内容だけで整理。店頭買取の店舗一覧と出張の対応エリア、他社と比べるときの見かた。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "楽器の買取屋さんとは？運営会社・店舗一覧・出張の対応エリアを公式情報で整理",
        datePublished: "2026-09-16",
        dateModified: "2026-09-16",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/gakki-no-kaitoriyasan/",
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
          { "@type": "ListItem", position: 3, name: "楽器の買取屋さんとは", item: "https://gakkikaitori-biyori.com/articles/gakki-no-kaitoriyasan/" },
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
          楽器の買取屋さんとは？運営会社・店舗一覧・出張の対応エリアを公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}時点の
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            公式サイト
          </a>
          の公表内容にもとづきます。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">まず結論</p>
          <p className="text-sm leading-relaxed mb-3">
            楽器の買取屋さんは、<strong>出張買取を中心に、宅配・店頭にも対応している楽器専門の買取サービス</strong>です。
            運営はUNI SOUND株式会社で、公式サイトでは出張料・査定料が無料と公表されています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            店頭に持ち込みたい場合は、<strong>店舗一覧に載っている{SHOP_COUNT}店舗</strong>が対象です。
            会社概要に記載されている本社では買取を行っていないと明記されているため、住所だけを見て向かわないようにしてください。
          </p>
        </div>

        <h2 id="overview" className="text-xl font-bold mt-12 mb-4">公式サイトで公表されている基本情報</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              {FACTS.map((f) => (
                <tr key={f.k} className="border-b border-warm-200 last:border-0">
                  <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">{f.k}</th>
                  <td className="px-4 py-3 leading-relaxed">{f.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            楽器の買取屋さん 公式サイト
          </a>
          （{ASOF}取得）。条件は変更されることがあるため、申し込み前に公式サイトで最新の内容をご確認ください。
        </p>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">店頭買取に対応している店舗（{SHOP_COUNT}店舗）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式サイトの店舗一覧に掲載されている店舗です。「楽器の買取屋さん 店舗」「◯◯店」で探している方は、
          まずご自身の地域に店舗があるかを確認してください。
        </p>
        <div className="space-y-3 mb-4">
          {SHOPS.map((g) => (
            <div key={g.pref} className="bg-white border border-warm-200 p-4">
              <p className="text-xs font-medium text-warm-gray mb-2">{g.pref}</p>
              <p className="text-sm leading-relaxed">{g.names.join(" ／ ")}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-warm-gray mb-10">
          ⚠️ 店舗は増減することがあります。営業時間・定休日・持ち込み前の予約の要否は公式サイトの各店舗ページでご確認ください。
        </p>

        <h2 id="area" className="text-xl font-bold mt-12 mb-4">出張買取の対応エリア</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式サイトの「無料出張見積対応エリア」には<strong>46都道府県</strong>が掲載されています。
          店舗が無い地域でも出張の対象になっている場合があるため、近くに店舗が無いからといって諦める必要はありません。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ただし、<strong>同じ都道府県でも地域によって条件が変わることがあります。</strong>
          公式サイトには「最短30分でお伺い可能」との記載がありますが、これはすべての地域に当てはまるものではありません。
          実際に来てもらえるか、いつ来てもらえるかは、申し込み時にご確認ください。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">1社だけで決めないほうがいい理由</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取価格は、<strong>同じ機種でも年式・状態・付属品の有無で大きく変わります。</strong>
          そのため、1社の提示額を見ただけでは、それが相場に対して高いのか低いのかを判断できません。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          比べるときは、金額よりも先に<strong>買取方式が違う業者を選ぶ</strong>のが要点です。
          出張・宅配・店頭では、業者が負担するコストが違うため、得意な楽器や価格の出しかたも変わります。
          同じ方式の業者を3社並べても、似た金額が3つ出てくるだけになりがちです。
        </p>
        <p className="text-sm leading-relaxed mb-8">
          当サイトでは、方式の異なる3社を比較しています。査定は無料のところが多いので、
          <strong>売ると決める前に相場を知る目的で使う</strong>のも問題ありません。
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

        <h2 id="area-articles" className="text-xl font-bold mt-12 mb-4">地域別に楽器買取を調べる</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            ["yokohama-gakki-kaitori", "横浜"],
            ["kawasaki-gakki-kaitori", "川崎"],
            ["shibuya-gakki-kaitori", "渋谷"],
            ["shinjuku-gakki-kaitori", "新宿"],
            ["nagoya-gakki-kaitori", "名古屋"],
            ["kobe-gakki-kaitori", "神戸"],
            ["sapporo-gakki-kaitori", "札幌"],
            ["fukuoka-gakki-kaitori", "福岡"],
          ].map(([slug, label]) => (
            <Link
              key={slug}
              href={`/articles/${slug}/`}
              className="text-sm border border-warm-200 bg-white px-3 py-1.5 hover:border-accent transition-colors"
            >
              {label}の楽器買取
            </Link>
          ))}
        </div>

        <RelatedArticles
          currentSlug="gakki-no-kaitoriyasan"
          relatedSlugs={["gakki-kaitori-osusume", "gakki-kaitori-sagi", "yokohama-gakki-kaitori", "gakki-kaitori-souba"]}
        />
      </article>
    </>
  );
}

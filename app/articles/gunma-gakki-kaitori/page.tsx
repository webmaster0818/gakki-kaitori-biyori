import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-16）「楽器買取 群馬」。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-16 取得・HTMLコメントと script は除外）から。
//   ハードオフ 店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on&a=10（9件）
//   島村楽器 店舗一覧: https://www.shimamura.co.jp/shop/（関東エリアのうち群馬県の3店・「買取受付」「中古取扱」表示）・出張 /used/flow/visit/
//   楽器の買取屋さん: https://gakkikaitori.co.jp/area/gunma/（出張対象・群馬県の買取事例）・/kaitori/shop/（群馬桐生店）
//   イケベ楽器・ティファナの出張エリアに群馬県が含まれないこと: 各社公式（ikebe 11/14・tifana /visit/ 11/16）
//   店舗数・出張受付の件数は当サイトが数えたもの。口コミ・評価は載せない。

const ASOF = "2026年11月16日";
const HO = "https://www.hardoff.co.jp/shop/list/?t1=on&a=10";
const SHIMA = "https://www.shimamura.co.jp/shop/";
const SHIMA_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const GK_AREA = "https://gakkikaitori.co.jp/area/gunma/";
const GK_SHOP = "https://gakkikaitori.co.jp/kaitori/shop/";

const HO_SHOPS: { name: string; addr: string; visit: string }[] = [
  { name: "ハードオフ前橋天川店", addr: "前橋市天川町4-8", visit: "○" },
  { name: "ハードオフ17号前橋北店", addr: "前橋市関根町2丁目15-2", visit: "×" },
  { name: "ハードオフ高崎高関店", addr: "高崎市高関町321-1", visit: "○" },
  { name: "ハードオフ高前バイパス高崎緑店", addr: "高崎市緑町4-11-1", visit: "×" },
  { name: "ハードオフ伊勢崎茂呂店", addr: "伊勢崎市南千木町5202-3", visit: "○" },
  { name: "ハードオフスーパーモールいせさき店", addr: "伊勢崎市宮子町3417-2", visit: "○" },
  { name: "ハードオフ50号桐生広沢店", addr: "桐生市広沢町6-933-1", visit: "○" },
  { name: "ハードオフ50号桐生西店", addr: "みどり市笠懸町鹿3950", visit: "○" },
  { name: "ハードオフ大泉店", addr: "邑楽郡大泉町坂田269-1", visit: "○" },
];

const SHIMA_SHOPS: { name: string; used: boolean }[] = [
  { name: "イオンモール高崎店", used: true },
  { name: "けやきウォーク前橋店", used: true },
  { name: "イオンモール太田店", used: false },
];

// 楽器の買取屋さん「群馬県の買取事例」（公式に掲載の12件・2026-11-16 確認）
const CASES: { date: string; item: string; price: number; city: string }[] = [
  { date: "2026/11/05", item: "S.YAIRI アコースティックギター", price: 40250, city: "安中市" },
  { date: "2026/10/21", item: "YAMAHA トロンボーン（ゴールド）", price: 32200, city: "藤岡市" },
  { date: "2026/08/13", item: "KEMPER マルチエフェクター", price: 100000, city: "前橋市" },
  { date: "2026/07/08", item: "B.C.Rich エレキギター", price: 17250, city: "太田市" },
  { date: "2026/07/06", item: "YANAGISAWA アルトサックス", price: 169050, city: "高崎市" },
  { date: "2026/04/13", item: "YAMAHA テナーサックス", price: 265000, city: "安中市" },
  { date: "2026/04/09", item: "Martin アコースティックギター", price: 197000, city: "沼田市" },
  { date: "2026/04/02", item: "YAMAHA エレキギター", price: 34500, city: "安中市" },
  { date: "2026/03/30", item: "Fender ストラトキャスター（White）", price: 40250, city: "沼田市" },
  { date: "2026/03/24", item: "Fender ギターアンプ", price: 45000, city: "渋川市" },
  { date: "2026/02/23", item: "Roland アコーディオン", price: 102000, city: "館林市" },
  { date: "2026/02/19", item: "Selmer テナーサックス", price: 280000, city: "渋川市" },
];

const CITY_PAGES: { slug: string; name: string }[] = [
  { slug: "takasaki-gakki-kaitori", name: "高崎" },
  { slug: "isesaki-gakki-kaitori", name: "伊勢崎市" },
  { slug: "ota-gunma-gakki-kaitori", name: "太田市" },
  { slug: "kiryu-gakki-kaitori", name: "桐生市" },
];

const FAQ = [
  {
    q: "群馬県で楽器を持ち込んで売れる店はどこですか？",
    a: `${ASOF}時点の各社公式サイトでは、ハードオフが県内9店（前橋・高崎・伊勢崎・桐生・みどり・大泉）、島村楽器が3店（イオンモール高崎店・けやきウォーク前橋店・イオンモール太田店）、楽器の買取屋さんが群馬桐生店（事前予約制）を掲載しています。`,
  },
  {
    q: "群馬県で出張買取を頼める業者はどこですか？",
    a: "楽器の買取屋さんは群馬県全域を出張対象としています。島村楽器も群馬県を出張対象に含めていますが、LINE/Web査定額が単品30,000円以上（複数なら各20,000円以上）という条件があります。ハードオフは県内9店のうち7店が出張買取受付「○」でした。イケベ楽器とティファナの出張エリアには群馬県が含まれていません。",
  },
  {
    q: "その場で現金を受け取れるのはどこですか？",
    a: "ハードオフの店頭買取はその場で現金、楽器の買取屋さんの出張買取もその場で現金と案内されています。島村楽器は店舗・出張・宅配のいずれも銀行振込のみです。",
  },
  {
    q: "群馬県ではどんな楽器が買い取られていますか？",
    a: "楽器の買取屋さんの公式サイトに掲載された群馬県の買取事例12件（2026年2〜11月）は、サックス・ギター・トロンボーン・アコーディオン・エフェクター・アンプで、金額は17,250円〜280,000円でした。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "群馬県の楽器買取", href: "/articles/gunma-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/gunma-gakki-kaitori/" },
  title: "群馬県の楽器買取はどこがいい？ハードオフ9店・島村楽器3店・出張対応の業者を比較【2026年11月】",
  description:
    "群馬県で楽器を売れる店と出張買取を、各社の公式情報で整理。ハードオフ9店（出張受付7店）の所在地、島村楽器3店、楽器の買取屋さん群馬桐生店と県全域の出張、群馬県の買取事例12件を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "群馬県の楽器買取｜ハードオフ9店・島村楽器3店と出張対応【2026年11月】",
    description: "群馬県の楽器買取店と出張の対象地域、支払い方法を公式情報で比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "群馬県の楽器買取はどこがいい？ハードオフ9店・島村楽器3店・出張対応の業者を比較",
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/gunma-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "群馬県の楽器買取", item: "https://gakkikaitori-biyori.com/articles/gunma-gakki-kaitori/" },
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
          群馬県の楽器買取はどこがいい？ハードオフ9店・島村楽器3店・出張対応の業者を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（店舗検索・店舗一覧・出張エリアのページ）を確認して記載しています。店舗数は当サイトが数えたものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            群馬県で楽器を持ち込める店は、<strong>ハードオフ9店・島村楽器3店・楽器の買取屋さん群馬桐生店（事前予約制）</strong>です。
            3社の店舗は前橋・高崎・伊勢崎・太田・桐生周辺に集まっており、沼田・渋川・安中・藤岡などには3社の店舗がありません。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            店舗が遠い地域では出張買取が現実的です。<strong>楽器の買取屋さんは群馬県全域を出張対象</strong>とし、ハードオフも9店中7店が出張買取を受け付けています。
            首都圏で出張を行うイケベ楽器・ティファナは、群馬県を対象にしていません。
          </p>
        </div>

        <h2 id="hardoff" className="text-xl font-bold mt-12 mb-4">ハードオフ（9店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地（群馬県）</th>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">出張買取受付</th>
              </tr>
            </thead>
            <tbody>
              {HO_SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.addr}</td>
                  <td className="px-4 py-3 text-center">{s.visit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          店頭買取は予約不要で、査定後その場で現金が支払われます。出張買取は「○」の店舗に電話で申し込みます。
          群馬県の出張受付の割合（9店中7店）は、全国のハードオフ（440件中229件・当サイト集計）より高い水準です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={HO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（群馬県）</a>
          （{ASOF}確認）。買取方法の詳細は<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフの楽器買取</Link>にまとめています。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器（3店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">買取受付</th>
                <th className="text-left px-4 py-3 font-medium">中古楽器の販売</th>
              </tr>
            </thead>
            <tbody>
              {SHIMA_SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200">
                  <td className="px-4 py-3">{s.name}</td>
                  <td className="px-4 py-3">あり</td>
                  <td className="px-4 py-3">{s.used ? "あり" : "表示なし"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は店舗への持ち込みで通常買取価格より5%アップと案内していますが、支払いは銀行振込のみです。
          群馬県は出張買取の対象地域に含まれています（LINE/Web査定額が単品30,000円以上、複数なら各20,000円以上が条件）。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>・
          <a href={SHIMA_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>（{ASOF}確認）。
          条件の詳細は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>にまとめています。
        </p>

        <h2 id="kaitoriyasan" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さん（群馬桐生店・県全域の出張）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんの店舗一覧には「群馬桐生店」（桐生市相生町5丁目473-1・10:00〜19:00・事前予約制）が掲載されています。
          出張買取は<strong>群馬県全域が対象</strong>で、出張の場合はその場で現金が支払われると案内されています。
          公式サイトに掲載された群馬県の買取事例は次の12件です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">日付</th>
                <th className="text-left px-4 py-3 font-medium">品物</th>
                <th className="text-right px-4 py-3 font-medium">買取金額</th>
                <th className="text-left px-4 py-3 font-medium">地域</th>
              </tr>
            </thead>
            <tbody>
              {CASES.map((c) => (
                <tr key={c.date + c.item} className="border-t border-warm-200">
                  <td className="px-4 py-3 whitespace-nowrap tabular-nums">{c.date}</td>
                  <td className="px-4 py-3">{c.item}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">¥{c.price.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{c.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          12件のうち9件（安中市3件・沼田市2件・渋川市2件・藤岡市1件・館林市1件）は、このページで挙げた3社の店舗がない市の事例です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「群馬県周辺の楽器買取・出張買取」</a>・
          <a href={GK_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店舗一覧</a>（{ASOF}確認）。
          金額は個別の事例で、同じ楽器が同じ金額で売れることを示すものではありません。会社の概要は
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>にまとめています。
        </p>

        <h2 id="cities" className="text-xl font-bold mt-12 mb-4">市ごとのガイド</h2>
        <p className="text-sm leading-relaxed mb-4">県内の市ごとの買取方法の比較は、次のページもあわせてご覧ください。</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {CITY_PAGES.map((c) => (
            <Link
              key={c.slug}
              href={`/articles/${c.slug}/`}
              className="inline-block border border-warm-200 bg-white px-3 py-2 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              {c.name}の楽器買取
            </Link>
          ))}
        </div>

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
          currentSlug="gunma-gakki-kaitori"
          relatedSlugs={["takasaki-gakki-kaitori", "isesaki-gakki-kaitori", "ota-gunma-gakki-kaitori", "kiryu-gakki-kaitori", "saitama-ken-gakki-kaitori", "hardoff-gakki-kaitori", "shimamura-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜02時の回）「楽器買取 島根」。shiga-gakki-kaitori（11/18）と同じ構成。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-20 取得・HTMLコメントと script は除外）から。
//   ハードオフ 店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on&a=32（2件・出張買取受付の表示）・店頭 /sell/tentou/
//   島村楽器 店舗一覧: https://www.shimamura.co.jp/shops/index.html（イオンモール出雲店は「買取受付」「中古取扱」とも off 表示）・/shop/izumo/・出張 /used/flow/visit/
//   中古楽器堂: https://gakkidou.co.jp/shop/shimane/（「対応する店舗」に店舗の記載なし・買取強化地域の一覧）
//   楽器の買取屋さん: https://gakkikaitori.co.jp/area/shimane/（県全域が出張対象・島根県の買取事例12件・近隣店舗3店）
//   三木楽器 ピアノ買取: https://piano.miki.co.jp/purchase/（買取対象地域に島根県〈離島を除く〉）
//   クロサワ楽器 /kaikuro/syuchou.html・イケベ楽器 /Page/reuse_purchase_method.aspx の出張対応エリア
//   店舗数・事例の内訳は当サイトが数えたもの。口コミ・評価は載せない。

const ASOF = "2026年11月20日";
const HO = "https://www.hardoff.co.jp/shop/list/?t1=on&a=32";
const HO_TENTOU = "https://www.hardoff.co.jp/sell/tentou/";
const SHIMA = "https://www.shimamura.co.jp/shops/index.html";
const SHIMA_SHOP = "https://www.shimamura.co.jp/shop/izumo/";
const SHIMA_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const GD = "https://gakkidou.co.jp/shop/shimane/";
const GK_AREA = "https://gakkikaitori.co.jp/area/shimane/";
const MIKI = "https://piano.miki.co.jp/purchase/";
const IKEBE = "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx";
const KURO = "https://www.kurosawagakki.com/kaikuro/syuchou.html";

const HO_SHOPS: { name: string; addr: string; visit: string }[] = [
  { name: "ハードオフ松江浜乃木店", addr: "松江市浜乃木7-1-18", visit: "○" },
  { name: "ハードオフ出雲高岡店", addr: "出雲市高岡町495", visit: "×" },
];

// 楽器の買取屋さん「島根県の買取事例」（公式に掲載の12件・2026-11-20 確認）
const CASES: { date: string; item: string; price: number; city: string }[] = [
  { date: "2026/08/05", item: "YANAGISAWA サックス", price: 68000, city: "松江市" },
  { date: "2026/05/08", item: "YAMAHA スネア", price: 40000, city: "出雲市" },
  { date: "2024/11/21", item: "YAMAHA トロンボーン", price: 60000, city: "松江市" },
  { date: "2024/10/16", item: "Fulltone エフェクター", price: 20000, city: "松江市" },
  { date: "2024/07/10", item: "Line6 ギターアンプ", price: 22000, city: "江津市" },
  { date: "2024/06/14", item: "BACCHUS エレキベース", price: 46000, city: "松江市" },
  { date: "2024/05/29", item: "Roland シンセサイザー", price: 30000, city: "江津市" },
  { date: "2024/05/21", item: "Fender テレキャスター", price: 63000, city: "安来市" },
  { date: "2024/05/08", item: "YAMAHA シンセサイザー", price: 88000, city: "浜田市" },
  { date: "2024/04/17", item: "KORG シンセサイザー", price: 182000, city: "雲南市" },
  { date: "2024/04/09", item: "J.Michael ホルン", price: 32000, city: "大田市" },
  { date: "2024/04/01", item: "musicman エレキギター", price: 185000, city: "益田市" },
];

// 楽器の買取屋さん 島根県ページの「近隣店舗」（いずれも県外）
const NEAR: { name: string; addr: string }[] = [
  { name: "広島店", addr: "広島県広島市安佐北区あさひが丘3-1-11-1階" },
  { name: "高松店", addr: "香川県高松市十川東町144-1" },
  { name: "大阪門真店", addr: "大阪府門真市四宮5丁目3-16" },
];

const CITY_PAGES: { slug: string; name: string }[] = [
  { slug: "matsue-gakki-kaitori", name: "松江" },
  { slug: "izumo-gakki-kaitori", name: "出雲" },
];

const FAQ = [
  { q: "島根県で楽器を持ち込んで売れる店はどこですか？", a: "2026年11月20日時点の各社公式サイトでは、ハードオフが県内2店（松江浜乃木店・出雲高岡店）を掲載しています。島村楽器のイオンモール出雲店は、店舗一覧で「買取受付」「中古取扱」がいずれも対象外の表示です。中古楽器堂の島根県のページには、対応する店舗の記載がありません。" },
  { q: "島根県で出張買取を頼める業者はどこですか？", a: "楽器の買取屋さんは島根県全域を出張対象としています。ハードオフは松江浜乃木店が出張買取受付「○」、出雲高岡店は「×」です。島村楽器（中国・四国は広島市のみ）・イケベ楽器・クロサワ楽器の出張対象地域に島根県は含まれていません。" },
  { q: "ピアノを売りたい場合はどこに相談できますか？", a: "三木楽器のピアノ買取は、買取対象地域に島根県（離島を除く）を挙げています。グランドピアノ・アップライトピアノは買取可能、電子ピアノ・エレクトーンは「ご相談下さい」、オルガン・電子キーボードは買取不可と案内されています。" },
  { q: "島根県ではどんな楽器が買い取られていますか？", a: "楽器の買取屋さんの公式サイトに掲載された島根県の買取事例12件（2024年4月〜2026年8月）は、ギター・ベース・シンセサイザー・管楽器・スネア・エフェクター・アンプで、金額は20,000円〜185,000円でした。" },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "島根県の楽器買取", href: "/articles/shimane-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/shimane-gakki-kaitori/" },
  title: "島根県の楽器買取はどこがいい？ハードオフ2店と県全域の出張・ピアノの買取地域を比較【2026年11月】",
  description:
    "島根県で楽器を売れる店と出張買取を、各社の公式情報で整理しました。ハードオフ2店（松江・出雲）、買取を受け付けていない島村楽器出雲店の扱い、県全域に出張する業者と島根県の買取事例12件、ピアノの買取対象地域を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "島根県の楽器買取｜持ち込める店と出張の対象地域【2026年11月】",
    description: "島根県の楽器買取店と出張の対象地域、ピアノの買取地域を公式情報で比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "島根県の楽器買取はどこがいい？ハードオフ2店と県全域の出張・ピアノの買取地域を比較",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/shimane-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "島根県の楽器買取", item: "https://gakkikaitori-biyori.com/articles/shimane-gakki-kaitori/" },
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
          島根県の楽器買取はどこがいい？ハードオフ2店と県全域の出張・ピアノの買取地域を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（店舗検索・店舗一覧・出張エリアのページ）を確認して記載しています。店舗数と事例の内訳は当サイトが数えたものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">島根県内で楽器を持ち込んで売れる店として公式サイトで確認できたのは、<strong>ハードオフ2店（松江市・出雲市）</strong>です。島村楽器のイオンモール出雲店は、店舗一覧で「買取受付」「中古取扱」がいずれも対象外の表示で、中古楽器堂の島根県のページにも対応する店舗の記載がありません。</p>
          <p className="text-sm leading-relaxed mb-0">出張買取は、<strong>楽器の買取屋さんが島根県全域</strong>を対象とし、ハードオフは松江浜乃木店が受け付けています。島村楽器・イケベ楽器・クロサワ楽器の出張対象地域に島根県は含まれていません。ピアノは、三木楽器のピアノ買取が島根県（離島を除く）を対象地域としています。</p>
        </div>

        <h2 id="hardoff" className="text-xl font-bold mt-12 mb-4">ハードオフ（2店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地（島根県）</th>
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
          店頭買取は予約不要で、査定は10〜15分程度、その場で現金が支払われます。県内のハードオフは松江市と出雲市の2店で、出張買取を受け付けているのは松江浜乃木店です。浜田市・益田市など石見地方と隠岐にはハードオフの店舗がありません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={HO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（島根県）</a>・
          <a href={HO_TENTOU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店頭買取</a>
          （{ASOF}確認）。買取方法の詳細は<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフの楽器買取</Link>にまとめています。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器（イオンモール出雲店は買取の対象外）</h2>
        <p className="text-sm leading-relaxed mb-4">
          島根県の島村楽器はイオンモール出雲店（出雲市渡橋町1066 イオンモール出雲1F）の1店です。店舗一覧の表示では、楽器販売・音楽教室・リペア受付などは対象ですが、<strong>「買取受付」と「中古取扱」はいずれも対象外</strong>になっています。
        </p>
        <p className="text-sm leading-relaxed mb-4">島村楽器の出張買取は、中国・四国では広島県（広島市）のみが対象地域で、島根県は含まれていません。島根県から島村楽器に売る場合は、宅配買取か、買取受付の表示がある県外の店舗への持ち込みになります。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>・
          <a href={SHIMA_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イオンモール出雲店</a>・
          <a href={SHIMA_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>（{ASOF}確認）。
          条件の詳細は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>にまとめています。
        </p>

        <p className="text-sm leading-relaxed mb-10">
          中古楽器堂の島根県のページ（
          <a href={GD} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">gakkidou.co.jp/shop/shimane/</a>
          ）は、「対応する店舗」の欄に店舗の記載がなく、松江市・出雲市・浜田市・益田市などを買取強化地域として掲載し、出張・店舗・宅配の3つの売却方法を案内しています（{ASOF}確認）。
        </p>

        <h2 id="kaitoriyasan" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さん（島根県全域の出張）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんは、<strong>島根県全域を出張買取の対象</strong>と案内しています。出張の場合は、その場で現金が支払われます。島根県のページに「近隣店舗」として載っているのは、次の3店（いずれも県外）です。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed mb-4">
          {NEAR.map((n) => (
            <li key={n.name}>{n.name}（{n.addr}・10:00〜19:00・駐車場あり）</li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed mb-4">公式サイトに掲載された島根県の買取事例は次の12件です。</p>
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
        <p className="text-sm leading-relaxed mb-4">12件のうち8件（江津市2件・安来市・浜田市・雲南市・大田市・益田市）は、県内で楽器の持ち込み先を確認できた松江市・出雲市以外の事例です。シンセサイザーが3件（30,000円〜182,000円）あり、管楽器（サックス・トロンボーン・ホルン）も3件あります。12件のうち10件は2024年の事例です。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「島根県周辺の楽器買取・出張買取」</a>（{ASOF}確認）。
          金額は個別の事例で、同じ楽器が同じ金額で売れることを示すものではありません。会社の概要は
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>にまとめています。
        </p>

        <h2 id="piano" className="text-xl font-bold mt-12 mb-4">ピアノを売る場合（三木楽器）</h2>
        <p className="text-sm leading-relaxed mb-4">
          三木楽器のピアノ買取は、買取対象地域の「中国・四国（離島を除く）」に島根県を含めています。グランドピアノ・アップライトピアノは「買取可能」、エレクトーン・電子ピアノは「ご相談下さい」、オルガン・電子キーボードは「買取不可」と案内されています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={MIKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">三木楽器 ピアノ買取</a>（{ASOF}確認）。会社全体の買取条件は
          <Link href="/articles/miki-gakki-kaitori/" className="text-accent underline">三木楽器の買取</Link>にまとめています。
        </p>

        <h2 id="others" className="text-xl font-bold mt-12 mb-4">そのほかの楽器店の出張エリア</h2>
        <p className="text-sm leading-relaxed mb-4">クロサワ楽器の出張対応エリア（16都府県）とイケベ楽器の出張対応エリア（関東圏・大阪府北部/東部と兵庫県尼崎市・伊丹市）に島根県は含まれていません。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KURO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器 出張対応エリア</a>・
          <a href={IKEBE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イケベ楽器「買取方法」</a>（{ASOF}確認）。
        </p>

        <h2 id="cities" className="text-xl font-bold mt-12 mb-4">市ごとのガイド</h2>
        <p className="text-sm leading-relaxed mb-4">松江・出雲の買取方法の比較は、次のページもあわせてご覧ください。</p>
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
          currentSlug="shimane-gakki-kaitori"
          relatedSlugs={["matsue-gakki-kaitori", "izumo-gakki-kaitori", "yonago-gakki-kaitori", "tottori-gakki-kaitori", "hiroshima-gakki-kaitori", "hardoff-gakki-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

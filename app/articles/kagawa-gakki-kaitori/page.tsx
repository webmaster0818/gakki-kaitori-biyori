import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜02時の回）「楽器買取 香川」。shiga-gakki-kaitori（11/18）と同じ構成。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-20 取得・HTMLコメントと script は除外）から。
//   ハードオフ 店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on&a=37（5件・出張買取受付の表示）・店頭 /sell/tentou/
//   島村楽器 店舗一覧: https://www.shimamura.co.jp/shops/index.html（イオンモール綾川店は「買取受付」on・「中古取扱」off）・/shop/ayagawa/・出張 /used/flow/visit/
//   中古楽器堂: https://gakkidou.co.jp/shop/kagawa/（高松店・出張買取 毎日9:15〜20:30）
//   楽器の買取屋さん: https://gakkikaitori.co.jp/area/kagawa/（県全域が出張対象・香川県の買取事例12件・近隣店舗に高松店）
//   三木楽器 ピアノ買取: https://piano.miki.co.jp/purchase/（買取対象地域に香川県〈離島を除く〉）
//   クロサワ楽器 /kaikuro/syuchou.html・イケベ楽器 /Page/reuse_purchase_method.aspx の出張対応エリア
//   店舗数・事例の内訳は当サイトが数えたもの。口コミ・評価は載せない。

const ASOF = "2026年11月20日";
const HO = "https://www.hardoff.co.jp/shop/list/?t1=on&a=37";
const HO_TENTOU = "https://www.hardoff.co.jp/sell/tentou/";
const SHIMA = "https://www.shimamura.co.jp/shops/index.html";
const SHIMA_SHOP = "https://www.shimamura.co.jp/shop/ayagawa/";
const SHIMA_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const GD = "https://gakkidou.co.jp/shop/kagawa/";
const GK_AREA = "https://gakkikaitori.co.jp/area/kagawa/";
const MIKI = "https://piano.miki.co.jp/purchase/";
const IKEBE = "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx";
const KURO = "https://www.kurosawagakki.com/kaikuro/syuchou.html";

const HO_SHOPS: { name: string; addr: string; visit: string }[] = [
  { name: "ハードオフ高松やしま店", addr: "高松市屋島西町2486-13", visit: "○" },
  { name: "ハードオフ高松郷東店", addr: "高松市郷東町3-2", visit: "×" },
  { name: "ハードオフ高松桜町店", addr: "高松市桜町2-15-52", visit: "○" },
  { name: "ハードオフ宇多津店", addr: "綾歌郡宇多津町浜二番丁15-10", visit: "○" },
  { name: "ハードオフ丸亀店", addr: "丸亀市田村町446", visit: "×" },
];

// 県内で楽器を持ち込める楽器店（各社公式・2026-11-20 確認）
const SHOPS: { name: string; addr: string; note: string }[] = [
  { name: "楽器の買取屋さん 高松店", addr: "高松市十川東町144-1", note: "10:00〜19:00・駐車場あり。香川県全域が出張買取の対象" },
  { name: "中古楽器堂 高松店", addr: "高松市木太町2796-4 エクセル木太1階", note: "出張買取は毎日9:15〜20:30。店頭買取の時間外も、出張スタッフの都合がつけば店頭で対応可と案内" },
  { name: "島村楽器 イオンモール綾川店", addr: "綾歌郡綾川町萱原822-1 イオンモール綾川2F", note: "店舗一覧で「買取受付」は対象、「中古取扱」は対象外の表示" },
];

// 楽器の買取屋さん「香川県の買取事例」（公式に掲載の12件・2026-11-20 確認）
const CASES: { date: string; item: string; price: number; city: string }[] = [
  { date: "2026/10/30", item: "Marshall ギターアンプ", price: 11500, city: "東かがわ市" },
  { date: "2026/10/12", item: "Martin 000-28EC", price: 207000, city: "丸亀市" },
  { date: "2026/10/07", item: "YAMAHA シンセサイザー ES6", price: 38000, city: "高松市" },
  { date: "2026/09/23", item: "Martin クラシックギター", price: 119000, city: "坂出市" },
  { date: "2026/07/13", item: "YAMAHA トランペット", price: 9775, city: "高松市" },
  { date: "2026/06/04", item: "Martin アコースティックギター", price: 160000, city: "坂出市" },
  { date: "2026/05/25", item: "History アコースティックギター", price: 40250, city: "坂出市" },
  { date: "2026/05/13", item: "Fender テレキャスター", price: 82000, city: "高松市" },
  { date: "2026/04/29", item: "FERNANDES プレシジョンベース", price: 16100, city: "高松市" },
  { date: "2025/11/14", item: "Ampeg ベースアンプ", price: 120000, city: "高松市" },
  { date: "2025/11/03", item: "Fender ギターアンプ", price: 34500, city: "三豊市" },
  { date: "2025/10/24", item: "Pioneer DJコントローラー", price: 95000, city: "さぬき市" },
];

const CITY_PAGES: { slug: string; name: string }[] = [
  { slug: "takamatsu-gakki-kaitori", name: "高松" },
  { slug: "marugame-gakki-kaitori", name: "丸亀" },
  { slug: "sakaide-gakki-kaitori", name: "坂出" },
  { slug: "kannonji-gakki-kaitori", name: "観音寺" },
];

const FAQ = [
  { q: "香川県で楽器を持ち込んで売れる店はどこですか？", a: "2026年11月20日時点の各社公式サイトでは、ハードオフが県内5店（高松市3店・宇多津町・丸亀市）、楽器店では楽器の買取屋さん 高松店・中古楽器堂 高松店・島村楽器 イオンモール綾川店（買取受付）を掲載しています。" },
  { q: "香川県で出張買取を頼める業者はどこですか？", a: "楽器の買取屋さんは香川県全域を出張対象とし、中古楽器堂 高松店も毎日9:15〜20:30に出張買取を行っています。ハードオフは高松やしま店・高松桜町店・宇多津店の3店が出張買取受付「○」です。島村楽器（中国・四国は広島市のみ）・イケベ楽器・クロサワ楽器の出張対象地域に香川県は含まれていません。" },
  { q: "ピアノを売りたい場合はどこに相談できますか？", a: "三木楽器のピアノ買取は、買取対象地域に香川県（離島を除く）を挙げています。グランドピアノ・アップライトピアノは買取可能、電子ピアノ・エレクトーンは「ご相談下さい」、オルガン・電子キーボードは買取不可と案内されています。" },
  { q: "香川県ではどんな楽器が買い取られていますか？", a: "楽器の買取屋さんの公式サイトに掲載された香川県の買取事例12件（2025年10月〜2026年10月）は、ギター・ベース・アンプ・シンセサイザー・トランペット・DJコントローラーで、金額は9,775円〜207,000円でした。Martin のギターが3件含まれています。" },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "香川県の楽器買取", href: "/articles/kagawa-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/kagawa-gakki-kaitori/" },
  title: "香川県の楽器買取はどこがいい？ハードオフ5店・高松の楽器店2店と県全域の出張を比較【2026年11月】",
  description:
    "香川県で楽器を売れる店と出張買取を、各社の公式情報で整理しました。ハードオフ5店（高松・宇多津・丸亀）、楽器の買取屋さん・中古楽器堂の高松店、島村楽器イオンモール綾川店と、香川県の買取事例12件、ピアノの買取対象地域を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "香川県の楽器買取｜持ち込める店と出張の対象地域【2026年11月】",
    description: "香川県の楽器買取店と出張の対象地域、ピアノの買取地域を公式情報で比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "香川県の楽器買取はどこがいい？ハードオフ5店・高松の楽器店2店と県全域の出張を比較",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/kagawa-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "香川県の楽器買取", item: "https://gakkikaitori-biyori.com/articles/kagawa-gakki-kaitori/" },
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
          香川県の楽器買取はどこがいい？ハードオフ5店・高松の楽器店2店と県全域の出張を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（店舗検索・店舗一覧・出張エリアのページ）を確認して記載しています。店舗数と事例の内訳は当サイトが数えたものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">香川県内で楽器を持ち込める店として公式サイトで確認できたのは、<strong>ハードオフ5店（高松市3店・宇多津町・丸亀市）</strong>と、<strong>楽器の買取屋さん 高松店・中古楽器堂 高松店</strong>、買取受付の表示がある<strong>島村楽器 イオンモール綾川店</strong>です。</p>
          <p className="text-sm leading-relaxed mb-0">出張買取は、<strong>楽器の買取屋さんが香川県全域</strong>を対象とし、中古楽器堂 高松店も毎日出張買取を行っています。ハードオフは5店のうち3店が受け付けています。島村楽器・イケベ楽器・クロサワ楽器の出張対象地域に香川県は含まれていません。</p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">県内で楽器を持ち込める楽器店（3店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地（香川県）</th>
                <th className="text-left px-4 py-3 font-medium">公式の記載</th>
              </tr>
            </thead>
            <tbody>
              {SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.addr}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんの香川県のページに載っている近隣店舗は高松店・広島店・大阪門真店の3店で、県内の店舗は高松店です。中古楽器堂の香川県のページは、対応する店舗として高松店を掲載しています。
          島村楽器の綾川店は買取を受け付けていますが、店舗での中古品の取扱いは対象外の表示です。島村楽器の店舗買取の支払いは銀行振込のみです。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「香川県周辺の楽器買取・出張買取」</a>・
          <a href={GD} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">中古楽器堂「香川県の楽器買取」</a>・
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>・
          <a href={SHIMA_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イオンモール綾川店</a>（{ASOF}確認）。
          各社の条件は<Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>・
          <Link href="/articles/chuko-gakkido-kaitori/" className="text-accent underline">中古楽器堂</Link>・
          <Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器</Link>のページにまとめています。
        </p>

        <h2 id="hardoff" className="text-xl font-bold mt-12 mb-4">ハードオフ（5店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地（香川県）</th>
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
          店頭買取は予約不要で、査定は10〜15分程度、その場で現金が支払われます。5店のうち3店（高松やしま店・高松桜町店・宇多津店）が出張買取受付「○」です。東かがわ市・さぬき市・三豊市・観音寺市にはハードオフの店舗がありません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={HO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（香川県）</a>・
          <a href={HO_TENTOU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店頭買取</a>
          （{ASOF}確認・5店中3店が出張受付「○」は当サイト集計）。買取方法の詳細は<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフの楽器買取</Link>にまとめています。
        </p>

        <h2 id="kaitoriyasan" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さんの香川県の買取事例（12件）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんは<strong>香川県全域を出張買取の対象</strong>としており、出張の場合はその場で現金が支払われます。公式サイトに掲載された香川県の買取事例は次の12件です。
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
        <p className="text-sm leading-relaxed mb-4">12件のうち6件（坂出市3件・東かがわ市・三豊市・さぬき市）は、このページで挙げた店舗がない市の事例です。10万円以上の4件のうち3件は Martin のギター（119,000円〜207,000円）で、残る1件は Ampeg のベースアンプ（120,000円）です。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「香川県周辺の楽器買取・出張買取」</a>（{ASOF}確認）。
          金額は個別の事例で、同じ楽器が同じ金額で売れることを示すものではありません。Martin の買取については<Link href="/articles/martin-kaitori/" className="text-accent underline">Martin の買取</Link>にまとめています。
        </p>

        <h2 id="piano" className="text-xl font-bold mt-12 mb-4">ピアノを売る場合（三木楽器）</h2>
        <p className="text-sm leading-relaxed mb-4">
          三木楽器のピアノ買取は、買取対象地域の「中国・四国（離島を除く）」に香川県を含めています。小豆島などの離島は対象外です。グランドピアノ・アップライトピアノは「買取可能」、エレクトーン・電子ピアノは「ご相談下さい」、オルガン・電子キーボードは「買取不可」と案内されています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={MIKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">三木楽器 ピアノ買取</a>（{ASOF}確認）。会社全体の買取条件は
          <Link href="/articles/miki-gakki-kaitori/" className="text-accent underline">三木楽器の買取</Link>にまとめています。
        </p>

        <h2 id="others" className="text-xl font-bold mt-12 mb-4">そのほかの楽器店の出張エリア</h2>
        <p className="text-sm leading-relaxed mb-4">島村楽器の出張買取は中国・四国では広島県（広島市）のみが対象地域です。クロサワ楽器の出張対応エリア（16都府県）とイケベ楽器の出張対応エリア（関東圏・大阪府北部/東部と兵庫県尼崎市・伊丹市）にも香川県は含まれていません。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 出張買取</a>・
          <a href={KURO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器 出張対応エリア</a>・
          <a href={IKEBE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イケベ楽器「買取方法」</a>（{ASOF}確認）。
        </p>

        <h2 id="cities" className="text-xl font-bold mt-12 mb-4">市ごとのガイド</h2>
        <p className="text-sm leading-relaxed mb-4">高松・丸亀・坂出・観音寺の買取方法の比較は、次のページもあわせてご覧ください。</p>
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
          currentSlug="kagawa-gakki-kaitori"
          relatedSlugs={["takamatsu-gakki-kaitori", "marugame-gakki-kaitori", "sakaide-gakki-kaitori", "kannonji-gakki-kaitori", "tokushima-gakki-kaitori", "okayama-gakki-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

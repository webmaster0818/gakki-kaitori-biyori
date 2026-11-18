import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-18）「楽器買取 滋賀」。gunma-gakki-kaitori（11/16）と同じ構成。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-18 取得・HTMLコメントと script は除外）から。
//   ハードオフ 店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on&a=25（3件・出張買取受付の表示）・店頭 /sell/tentou/
//   島村楽器 店舗一覧: https://www.shimamura.co.jp/shops/（各店の「買取受付」「中古取扱」表示）・店舗ページの所在地・出張 /used/flow/visit/
//   中古楽器堂: https://gakkidou.co.jp/shop/ ・県別ページ
//   楽器の買取屋さん: https://gakkikaitori.co.jp/area/shiga/（出張対象・滋賀県の買取事例）・/kaitori/shop/（店舗一覧に滋賀県なし）
//   クロサワ楽器 /kaikuro/syuchou.html・イケベ楽器 /Page/reuse_purchase_method.aspx の出張対応エリア
//   店舗数・出張受付の件数は当サイトが数えたもの。口コミ・評価は載せない。

const ASOF = "2026年11月18日";
const HO = "https://www.hardoff.co.jp/shop/list/?t1=on&a=25";
const HO_TENTOU = "https://www.hardoff.co.jp/sell/tentou/";
const SHIMA = "https://www.shimamura.co.jp/shops/";
const SHIMA_SHOP = "https://www.shimamura.co.jp/shop/kusatsu/";
const SHIMA_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const GK_AREA = "https://gakkikaitori.co.jp/area/shiga/";
const GK_SHOP = "https://gakkikaitori.co.jp/kaitori/shop/";
const IKEBE = "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx";
const KURO = "https://www.kurosawagakki.com/kaikuro/syuchou.html";

const HO_SHOPS: { name: string; addr: string; visit: string }[] = [
  { name: "ハードオフ西大津店", addr: "大津市皇子が丘3-9-1", visit: "○" },
  { name: "ハードオフ草津栗東店", addr: "栗東市坊袋251-1", visit: "○" },
  { name: "ハードオフ長浜店", addr: "長浜市宮司町1148", visit: "○" },
];

// 楽器の買取屋さん「滋賀県の買取事例」（公式に掲載の12件・2026-11-18 確認）
const CASES: { date: string; item: string; price: number; city: string }[] = [
  { date: "2026/06/30", item: "YAMAHA エレキギター", price: 64400, city: "大津市" },
  { date: "2026/06/17", item: "Roland シンセサイザー", price: 38000, city: "長浜市" },
  { date: "2026/04/24", item: "Buffet Crampon クラリネット", price: 38000, city: "大津市" },
  { date: "2026/03/31", item: "Morris アコースティックギター", price: 13800, city: "米原市" },
  { date: "2026/03/31", item: "Bach トランペット", price: 16100, city: "守山市" },
  { date: "2026/03/16", item: "YANAGISAWA テナーサックス", price: 155000, city: "野洲市" },
  { date: "2026/03/10", item: "Fender テレキャスター", price: 120000, city: "野洲市" },
  { date: "2026/03/10", item: "Marshall ギターアンプ", price: 54000, city: "甲賀市" },
  { date: "2026/02/25", item: "Gibson ハミングバード", price: 190000, city: "東近江市" },
  { date: "2026/02/23", item: "Roland 電子ドラム", price: 65000, city: "栗東市" },
  { date: "2026/02/16", item: "SQUIER ブロンコ ベース", price: 11500, city: "甲賀市" },
  { date: "2026/02/02", item: "Epiphone エレキギター", price: 28000, city: "大津市" },
];

const CITY_PAGES: { slug: string; name: string }[] = [
  { slug: "otsu-gakki-kaitori", name: "大津" },
  { slug: "kusatsu-shiga-gakki-kaitori", name: "草津" },
  { slug: "hikone-gakki-kaitori", name: "彦根" },
  { slug: "nagahama-gakki-kaitori", name: "長浜" },
];

const FAQ = [
  { q: "滋賀県で楽器を持ち込んで売れる店はどこですか？", a: "2026年11月18日時点の各社公式サイトでは、ハードオフが県内3店（西大津店・草津栗東店・長浜店）、島村楽器がイオンモール草津店を掲載しています。中古楽器堂は滋賀県内に店舗がなく、出張・宅配買取を案内しています。" },
  { q: "滋賀県で出張買取を頼める業者はどこですか？", a: "楽器の買取屋さんは滋賀県全域を出張対象としています。ハードオフは県内3店すべてが出張買取受付「○」です。島村楽器・イケベ楽器・クロサワ楽器の出張対象地域に滋賀県は含まれていません。" },
  { q: "その場で現金を受け取れるのはどこですか？", a: "ハードオフの店頭買取はその場で現金、楽器の買取屋さんの出張買取もその場で現金と案内されています。島村楽器は店舗・宅配のいずれも銀行振込のみです。" },
  { q: "滋賀県ではどんな楽器が買い取られていますか？", a: "楽器の買取屋さんの公式サイトに掲載された滋賀県の買取事例12件（2026年2〜6月）は、ギター・ベース・サックス・クラリネット・トランペット・アンプ・シンセサイザー・電子ドラムで、金額は11,500円〜190,000円でした。" },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "滋賀県の楽器買取", href: "/articles/shiga-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/shiga-gakki-kaitori/" },
  title: "滋賀県の楽器買取はどこがいい？ハードオフ3店・島村楽器イオンモール草津店と県全域の出張を比較【2026年11月】",
  description:
    "滋賀県で楽器を売れる店と出張買取を、各社の公式情報で整理しました。ハードオフ3店（大津・栗東・長浜、すべて出張受付）、島村楽器イオンモール草津店と、県全域に出張する業者、滋賀県の買取事例12件を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "滋賀県の楽器買取｜持ち込める店と出張の対象地域【2026年11月】",
    description: "滋賀県の楽器買取店と出張の対象地域、支払い方法を公式情報で比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "滋賀県の楽器買取はどこがいい？ハードオフ3店・島村楽器イオンモール草津店と県全域の出張を比較",
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/shiga-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "滋賀県の楽器買取", item: "https://gakkikaitori-biyori.com/articles/shiga-gakki-kaitori/" },
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
          滋賀県の楽器買取はどこがいい？ハードオフ3店・島村楽器イオンモール草津店と県全域の出張を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（店舗検索・店舗一覧・出張エリアのページ）を確認して記載しています。店舗数は当サイトが数えたものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">滋賀県内で楽器を持ち込める店として公式サイトで確認できたのは、<strong>ハードオフ3店（大津市・栗東市・長浜市）と島村楽器 イオンモール草津店</strong>です。中古楽器堂の滋賀県のページは「近隣に店舗が見つかりません」と表示し、出張・宅配買取を案内しています。</p>
          <p className="text-sm leading-relaxed mb-0">出張買取は、<strong>楽器の買取屋さんが滋賀県全域</strong>を対象とし、ハードオフは3店すべてが受け付けています。島村楽器（関西は大阪府・兵庫県）とイケベ楽器（大阪府北部・東部と兵庫県尼崎市・伊丹市）の出張対象地域に、滋賀県は含まれていません。</p>
        </div>

        <h2 id="hardoff" className="text-xl font-bold mt-12 mb-4">ハードオフ（3店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地（滋賀県）</th>
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
          店頭買取は予約不要で、査定は10〜15分程度、その場で現金が支払われます。湖南（大津・栗東）と湖北（長浜）に店舗があり、3店とも出張買取受付が「○」です。彦根・近江八幡などの湖東と、高島などの湖西にはハードオフの店舗がありません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={HO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（滋賀県）</a>・
          <a href={HO_TENTOU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店頭買取</a>
          （{ASOF}確認・3店中3店が出張受付「○」は当サイト集計）。買取方法の詳細は<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフの楽器買取</Link>にまとめています。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器（イオンモール草津店）</h2>
        <p className="text-sm leading-relaxed mb-4">
          滋賀県の島村楽器はイオンモール草津店（滋賀県草津市新浜町300 イオンモール草津 3F）の1店で、店舗一覧では「買取受付」「中古取扱」がともに表示されています。
          店舗への持ち込みは通常買取価格より5%アップと案内されていますが、支払いは銀行振込のみです。
        </p>
        <p className="text-sm leading-relaxed mb-4">島村楽器の出張買取は、近畿では大阪府・兵庫県が対象地域で、滋賀県は含まれていません。滋賀県から島村楽器に売る場合は、草津店への持ち込みか宅配買取になります。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>・
          <a href={SHIMA_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イオンモール草津店</a>・
          <a href={SHIMA_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>（{ASOF}確認）。
          条件の詳細は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>にまとめています。
        </p>

        <p className="text-sm leading-relaxed mb-10">中古楽器堂の滋賀県のページ（https://gakkidou.co.jp/shop/shiga/）は「近隣に店舗が見つかりません」と表示し、出張買取・宅配買取の利用を案内しています。</p>

        <h2 id="kaitoriyasan" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さん（滋賀県全域の出張）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんの店舗一覧に滋賀県の店舗はありませんが、<strong>出張買取は滋賀県全域が対象</strong>と案内されています。出張の場合は、その場で現金が支払われます。公式サイトに掲載された滋賀県の買取事例は次の12件です。
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
        <p className="text-sm leading-relaxed mb-4">12件のうち7件（野洲市2件・甲賀市2件・守山市・米原市・東近江市）は、このページで挙げた店舗がない市の事例です。ギター・ベース類が6件で、電子ドラム・シンセサイザーの事例もあります。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「滋賀県周辺の楽器買取・出張買取」</a>・
          <a href={GK_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店舗一覧</a>（{ASOF}確認）。
          金額は個別の事例で、同じ楽器が同じ金額で売れることを示すものではありません。会社の概要は
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>にまとめています。
        </p>

        <h2 id="others" className="text-xl font-bold mt-12 mb-4">そのほかの楽器店の出張エリア</h2>
        <p className="text-sm leading-relaxed mb-4">クロサワ楽器の出張対応エリア（16都府県）とイケベ楽器の出張対応エリア（関東圏・大阪府北部/東部と兵庫県尼崎市・伊丹市）に滋賀県は含まれていません。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KURO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器 出張対応エリア</a>・
          <a href={IKEBE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イケベ楽器「買取方法」</a>（{ASOF}確認）。
        </p>

        <h2 id="cities" className="text-xl font-bold mt-12 mb-4">市ごとのガイド</h2>
        <p className="text-sm leading-relaxed mb-4">大津・草津・彦根・長浜の買取方法の比較は、次のページもあわせてご覧ください。</p>
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
          currentSlug="shiga-gakki-kaitori"
          relatedSlugs={["otsu-gakki-kaitori", "kusatsu-shiga-gakki-kaitori", "hikone-gakki-kaitori", "nagahama-gakki-kaitori", "kyoto-gakki-kaitori", "hardoff-gakki-kaitori", "shimamura-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

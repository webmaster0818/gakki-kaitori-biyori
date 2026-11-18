import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-18）「楽器買取 山梨」。gunma-gakki-kaitori（11/16）と同じ構成。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-18 取得・HTMLコメントと script は除外）から。
//   ハードオフ 店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on&a=19（6件・出張買取受付の表示）・店頭 /sell/tentou/
//   島村楽器 店舗一覧: https://www.shimamura.co.jp/shops/（各店の「買取受付」「中古取扱」表示）・店舗ページの所在地・出張 /used/flow/visit/
//   中古楽器堂: https://gakkidou.co.jp/shop/ ・県別ページ
//   楽器の買取屋さん: https://gakkikaitori.co.jp/area/yamanashi/（出張対象・山梨県の買取事例）・/kaitori/shop/（店舗一覧に山梨県なし）
//   クロサワ楽器 /kaikuro/syuchou.html・イケベ楽器 /Page/reuse_purchase_method.aspx の出張対応エリア
//   店舗数・出張受付の件数は当サイトが数えたもの。口コミ・評価は載せない。

const ASOF = "2026年11月18日";
const HO = "https://www.hardoff.co.jp/shop/list/?t1=on&a=19";
const HO_TENTOU = "https://www.hardoff.co.jp/sell/tentou/";
const SHIMA = "https://www.shimamura.co.jp/shops/";
const SHIMA_SHOP = "https://www.shimamura.co.jp/shop/kofu/";
const SHIMA_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const GK_AREA = "https://gakkikaitori.co.jp/area/yamanashi/";
const GK_SHOP = "https://gakkikaitori.co.jp/kaitori/shop/";
const IKEBE = "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx";
const KURO = "https://www.kurosawagakki.com/kaikuro/syuchou.html";

const HO_SHOPS: { name: string; addr: string; visit: string }[] = [
  { name: "ハードオフ甲府アルプス通り店", addr: "甲府市徳行3-10-1", visit: "○" },
  { name: "ハードオフ甲府里吉店", addr: "甲府市里吉3丁目2-1", visit: "×" },
  { name: "ハードオフ甲府向町店", addr: "甲府市向町202 グリーンタウン甲府東E棟", visit: "×" },
  { name: "ハードオフ甲斐双葉店", addr: "甲斐市下今井3690番地", visit: "○" },
  { name: "ハードオフアクロスプラザ山梨店", addr: "山梨市下石森7-1", visit: "○" },
  { name: "ハードオフ河口湖店", addr: "南都留郡富士河口湖町船津2988-1", visit: "○" },
];

// 楽器の買取屋さん「山梨県の買取事例」（公式に掲載の12件・2026-11-18 確認）
const CASES: { date: string; item: string; price: number; city: string }[] = [
  { date: "2026/09/28", item: "Gibson SG", price: 120000, city: "南アルプス市" },
  { date: "2026/07/07", item: "YAMAHA フルート", price: 11500, city: "甲府市" },
  { date: "2026/06/11", item: "YAMAHA アルトサックス", price: 190000, city: "南アルプス市" },
  { date: "2026/03/02", item: "YAMAHA フルート", price: 85000, city: "大月市" },
  { date: "2026/01/28", item: "Fender ギターアンプ", price: 112000, city: "甲府市" },
  { date: "2025/12/19", item: "YANAGISAWA テナーサックス", price: 115000, city: "甲府市" },
  { date: "2025/10/14", item: "YAMAHA エレキベース", price: 60000, city: "中央市" },
  { date: "2025/09/30", item: "YAMAHA クラリネット", price: 250000, city: "南アルプス市" },
  { date: "2025/07/04", item: "Line6 コンパクトエフェクター", price: 16000, city: "富士吉田市" },
  { date: "2025/06/26", item: "YAMAHA エレキベース", price: 22100, city: "南アルプス市" },
  { date: "2025/04/16", item: "KORG シンセサイザー", price: 44500, city: "山梨市" },
  { date: "2025/01/24", item: "Ibanez エレキベース", price: 33500, city: "都留市" },
];

const CITY_PAGES: { slug: string; name: string }[] = [
  { slug: "kofu-gakki-kaitori", name: "甲府" },
];

const FAQ = [
  { q: "山梨県で楽器を持ち込んで売れる店はどこですか？", a: "2026年11月18日時点の各社公式サイトでは、ハードオフが県内6店（甲府市3店・甲斐市・山梨市・富士河口湖町）、島村楽器がイオンモール甲府昭和店、中古楽器堂が山梨甲府店（来店前に電話で確認）を掲載しています。" },
  { q: "山梨県で出張買取を頼める業者はどこですか？", a: "楽器の買取屋さんは山梨県全域、クロサワ楽器も山梨県を出張対応エリアとしています。ハードオフは県内6店のうち4店が出張買取受付「○」です。中古楽器堂は山梨甲府店が出張買取を行っています。島村楽器とイケベ楽器の出張対象地域に山梨県は含まれていません。" },
  { q: "その場で現金を受け取れるのはどこですか？", a: "ハードオフの店頭買取はその場で現金、楽器の買取屋さんの出張買取もその場で現金と案内されています。クロサワ楽器の出張買取はその場での支払いが基本で、高額品は後日振込の場合があります。島村楽器は銀行振込のみです。" },
  { q: "山梨県ではどんな楽器が買い取られていますか？", a: "楽器の買取屋さんの公式サイトに掲載された山梨県の買取事例12件（2025年1月〜2026年9月）は、エレキベース・サックス・フルート・クラリネット・ギター・アンプ・エフェクター・シンセサイザーで、金額は11,500円〜250,000円でした。" },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "山梨県の楽器買取", href: "/articles/yamanashi-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yamanashi-gakki-kaitori/" },
  title: "山梨県の楽器買取はどこがいい？ハードオフ6店・島村楽器・中古楽器堂の店舗と出張対応の業者を比較【2026年11月】",
  description:
    "山梨県で楽器を売れる店と出張買取を、各社の公式情報で整理しました。ハードオフ6店（出張受付4店）、島村楽器イオンモール甲府昭和店、中古楽器堂 山梨甲府店と、出張に対応する業者、山梨県の買取事例12件を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "山梨県の楽器買取｜持ち込める店と出張の対象地域【2026年11月】",
    description: "山梨県の楽器買取店と出張の対象地域、支払い方法を公式情報で比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "山梨県の楽器買取はどこがいい？ハードオフ6店・島村楽器・中古楽器堂の店舗と出張対応の業者を比較",
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yamanashi-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "山梨県の楽器買取", item: "https://gakkikaitori-biyori.com/articles/yamanashi-gakki-kaitori/" },
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
          山梨県の楽器買取はどこがいい？ハードオフ6店・島村楽器・中古楽器堂の店舗と出張対応の業者を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（店舗検索・店舗一覧・出張エリアのページ）を確認して記載しています。店舗数は当サイトが数えたものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">山梨県内で楽器を持ち込める店は、<strong>ハードオフ6店、島村楽器 イオンモール甲府昭和店、中古楽器堂 山梨甲府店</strong>です。店舗は甲府市とその周辺（昭和町・甲斐市・山梨市）に集まり、富士五湖方面はハードオフ河口湖店のみです。</p>
          <p className="text-sm leading-relaxed mb-0">出張買取は、<strong>楽器の買取屋さんが山梨県全域</strong>を対象とし、<strong>クロサワ楽器も出張対応エリアに山梨県を含めています</strong>。ハードオフは6店中4店が出張買取を受け付けています。島村楽器とイケベ楽器の出張対象地域には、山梨県が含まれていません。</p>
        </div>

        <h2 id="hardoff" className="text-xl font-bold mt-12 mb-4">ハードオフ（6店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地（山梨県）</th>
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
          店頭買取は予約不要で、査定は10〜15分程度、その場で現金が支払われます。甲府市内の3店のうち、出張買取受付が「○」なのは甲府アルプス通り店のみです。出張を頼む場合は、受付「○」の店舗に電話で申し込みます。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={HO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（山梨県）</a>・
          <a href={HO_TENTOU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店頭買取</a>
          （{ASOF}確認・6店中4店が出張受付「○」は当サイト集計）。買取方法の詳細は<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフの楽器買取</Link>にまとめています。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器（イオンモール甲府昭和店）</h2>
        <p className="text-sm leading-relaxed mb-4">
          山梨県の島村楽器はイオンモール甲府昭和店（山梨県中巨摩郡昭和町飯喰1505-1 イオンモール甲府昭和 2F）の1店で、店舗一覧では「買取受付」「中古取扱」がともに表示されています。
          店舗への持ち込みは通常買取価格より5%アップと案内されていますが、支払いは銀行振込のみです。
        </p>
        <p className="text-sm leading-relaxed mb-4">島村楽器の出張買取の対象地域に山梨県は含まれていません（関東は東京都・千葉県・埼玉県・神奈川県・茨城県・群馬県）。山梨県から島村楽器に売る場合は、甲府昭和店への持ち込みか宅配買取になります。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>・
          <a href={SHIMA_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イオンモール甲府昭和店</a>・
          <a href={SHIMA_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>（{ASOF}確認）。
          条件の詳細は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>にまとめています。
        </p>

        <h2 id="gakkidou" className="text-xl font-bold mt-12 mb-4">中古楽器堂（山梨甲府店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              <tr className="border-t border-warm-200"><th className="text-left px-4 py-3 font-medium bg-warm-50 whitespace-nowrap">所在地</th><td className="px-4 py-3">山梨県甲府市住吉2丁目4-10</td></tr>
              <tr className="border-t border-warm-200"><th className="text-left px-4 py-3 font-medium bg-warm-50 whitespace-nowrap">店頭買取時間</th><td className="px-4 py-3">10:00〜16:30（店舗買取は事前予約）</td></tr>
              <tr className="border-t border-warm-200"><th className="text-left px-4 py-3 font-medium bg-warm-50 whitespace-nowrap">出張買取時間</th><td className="px-4 py-3">毎日 9:00〜20:30（出張見積もりは無料）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">出張で店を空けることがあるため、来店前に電話で確認するよう案内されています。出張買取は毎日9:00〜20:30と掲載されています。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href="https://gakkidou.co.jp/shop/yamanashi/kofu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">中古楽器堂 山梨甲府店</a>（{ASOF}確認）。
          支払い方法などは<Link href="/articles/chuko-gakkido-kaitori/" className="text-accent underline">中古楽器堂の買取</Link>にまとめています。
        </p>

        <h2 id="kaitoriyasan" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さん（山梨県全域の出張）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんの店舗一覧に山梨県の店舗はありませんが、<strong>出張買取は山梨県全域が対象</strong>と案内されています。出張の場合は、その場で現金が支払われます。公式サイトに掲載された山梨県の買取事例は次の12件です。
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
        <p className="text-sm leading-relaxed mb-4">12件のうち8件（南アルプス市4件・中央市・大月市・富士吉田市・都留市）は、このページで挙げた店舗がない市の事例です。掲載期間は2025年1月〜2026年9月で、岩手県や群馬県の事例（いずれも1年以内の12件）より期間が長くなっています。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「山梨県周辺の楽器買取・出張買取」</a>・
          <a href={GK_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店舗一覧</a>（{ASOF}確認）。
          金額は個別の事例で、同じ楽器が同じ金額で売れることを示すものではありません。会社の概要は
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>にまとめています。
        </p>

        <h2 id="others" className="text-xl font-bold mt-12 mb-4">そのほかの楽器店の出張エリア</h2>
        <p className="text-sm leading-relaxed mb-4">クロサワ楽器は出張対応エリア（16都府県）に山梨県を含めています。出張料はかからず、査定に納得すればその場で支払い（高額品は後日振込の場合あり）と案内されています。イケベ楽器の出張対応エリア（関東圏・関西圏の一部）には山梨県が含まれていません。</p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href="https://www.kurosawagakki.com/kaikuro/syuchou.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器 出張買取</a>・<a href={KURO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器 出張対応エリア</a>・
          <a href={IKEBE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イケベ楽器「買取方法」</a>（{ASOF}確認）。
        </p>

        <h2 id="cities" className="text-xl font-bold mt-12 mb-4">市ごとのガイド</h2>
        <p className="text-sm leading-relaxed mb-4">甲府の買取方法の比較は、次のページもあわせてご覧ください。</p>
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
          currentSlug="yamanashi-gakki-kaitori"
          relatedSlugs={["kofu-gakki-kaitori", "nagano-gakki-kaitori", "shizuoka-gakki-kaitori", "hardoff-gakki-kaitori", "shimamura-gakki-kaitori", "kurosawa-gakki-kaitori", "chuko-gakkido-kaitori"]}
        />
      </article>
    </>
  );
}

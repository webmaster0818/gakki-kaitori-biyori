import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-16）「楽器買取 埼玉」。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-16 取得・HTMLコメントと script は除外）から。
//   ハードオフ 店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on&a=11（48件・2ページ）・?t12=on（楽器館）
//   島村楽器 店舗一覧: https://www.shimamura.co.jp/shop/（埼玉の各店の「買取受付」「中古取扱」表示）・出張 /used/flow/visit/
//   楽器の買取屋さん: https://gakkikaitori.co.jp/area/saitama/（出張対象・埼玉県の買取事例）・/kaitori/shop/（大宮店）
//   ティファナ: https://www.tifana.net/visit/（埼玉県の店舗・出張エリア）
//   イケベ楽器: https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx（11/14 確認の出張エリア・ikebe-gakki-kaitori と同じ）
//   市町村別の店舗数・出張受付の件数は当サイトが数えたもの。口コミ・評価は載せない。

const ASOF = "2026年11月16日";
const HO = "https://www.hardoff.co.jp/shop/list/?t1=on&a=11";
const SHIMA = "https://www.shimamura.co.jp/shop/";
const SHIMA_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const GK_AREA = "https://gakkikaitori.co.jp/area/saitama/";
const GK_SHOP = "https://gakkikaitori.co.jp/kaitori/shop/";
const TIF = "https://www.tifana.net/visit/";
const IKEBE = "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx";

const COMPANIES: { name: string; shop: string; visit: string; pay: string }[] = [
  { name: "ハードオフ", shop: "48店（うち出張買取受付「○」19店）", visit: "受付店舗に電話で申し込み", pay: "店頭・出張ともその場で現金（出張は振込も可）" },
  { name: "島村楽器", shop: "店舗一覧の13店のうち「買取受付」表示12店", visit: "埼玉県は出張買取の対象（査定額の下限あり）", pay: "銀行振込のみ" },
  { name: "楽器の買取屋さん", shop: "大宮店（さいたま市大宮区桜木町）", visit: "埼玉県全域が出張対象", pay: "出張はその場で現金" },
  { name: "ティファナ", shop: "川口店・イオンモール川口前川店・イオンモール上尾店", visit: "埼玉県の一部地域", pay: "出張はその場で現金" },
  { name: "イケベ楽器", shop: "県内に買取窓口なし", visit: "さいたま市・川口市・戸田市・草加市など南東部", pay: "預かり後に査定して振込" },
];

// ハードオフ店舗検索（埼玉県・hard off）48件を市町村別に数えたもの
const HO_CITY: { city: string; shops: number; visit: number; names: string }[] = [
  { city: "さいたま市", shops: 8, visit: 3, names: "さいたま上小町店・さいたま浦和南店・さいたま大宮西店・さいたま深作店・大宮東店・AUDIODIGITAL館東大宮駅前店・さいたま宮原店・浦和太田窪店" },
  { city: "越谷市", shops: 3, visit: 1, names: "越谷花田店・越谷草加バイパス店・越谷南店" },
  { city: "上尾市", shops: 2, visit: 2, names: "上尾本町店・北上尾店" },
  { city: "加須市", shops: 2, visit: 0, names: "加須店・加須東店" },
  { city: "川口市", shops: 2, visit: 0, names: "川口上青木店・草加西店" },
  { city: "川越市", shops: 2, visit: 1, names: "川越今福店・川越神明町店" },
  { city: "所沢市", shops: 2, visit: 1, names: "西所沢店・東所沢店" },
  { city: "春日部市", shops: 2, visit: 0, names: "16号庄和店・春日部店" },
  { city: "草加市", shops: 2, visit: 1, names: "草加瀬崎店・草加店" },
  { city: "久喜市", shops: 1, visit: 1, names: "久喜店" },
  { city: "坂戸市", shops: 1, visit: 1, names: "坂戸店" },
  { city: "幸手市", shops: 1, visit: 1, names: "幸手店" },
  { city: "新座市", shops: 1, visit: 1, names: "新座店" },
  { city: "日高市", shops: 1, visit: 1, names: "高麗川店" },
  { city: "本庄市", shops: 1, visit: 1, names: "本庄店" },
  { city: "東松山市", shops: 1, visit: 1, names: "埼玉東松山店" },
  { city: "桶川市", shops: 1, visit: 1, names: "桶川店" },
  { city: "羽生市", shops: 1, visit: 1, names: "羽生店" },
  { city: "鶴ヶ島市", shops: 1, visit: 1, names: "鶴ヶ島インター店" },
  { city: "ふじみ野市", shops: 1, visit: 0, names: "ふじみ野店" },
  { city: "三郷市", shops: 1, visit: 0, names: "三郷店" },
  { city: "入間市", shops: 1, visit: 0, names: "入間藤沢店" },
  { city: "入間郡三芳町", shops: 1, visit: 0, names: "三芳町店" },
  { city: "北本市", shops: 1, visit: 0, names: "北本店" },
  { city: "北葛飾郡杉戸町", shops: 1, visit: 0, names: "杉戸店" },
  { city: "吉川市", shops: 1, visit: 0, names: "吉川店" },
  { city: "戸田市", shops: 1, visit: 0, names: "戸田駅西口店" },
  { city: "深谷市", shops: 1, visit: 0, names: "深谷店" },
  { city: "熊谷市", shops: 1, visit: 0, names: "熊谷月見店" },
  { city: "狭山市", shops: 1, visit: 0, names: "16号狭山店" },
  { city: "白岡市", shops: 1, visit: 0, names: "白岡店" },
  { city: "行田市", shops: 1, visit: 0, names: "行田店" },
];

// 島村楽器 店舗一覧（埼玉）の「買取受付」が表示されている店舗。中古取扱＝中古楽器の販売表示
const SHIMA_SHOPS: { name: string; used: boolean }[] = [
  { name: "浦和パルコ店", used: false },
  { name: "コクーンシティさいたま新都心店", used: false },
  { name: "大宮店", used: true },
  { name: "ららぽーと富士見店", used: true },
  { name: "イオンモール春日部店", used: true },
  { name: "イオンモール川口前川店", used: false },
  { name: "かわぐちキャスティ店", used: false },
  { name: "イオンレイクタウン店", used: true },
  { name: "ららぽーと新三郷店", used: false },
  { name: "エミテラス所沢店", used: true },
  { name: "モラージュ菖蒲店", used: true },
  { name: "イオンモール羽生店", used: false },
];

// 楽器の買取屋さん「埼玉県の買取事例」（公式に掲載の12件・2026-11-16 確認）
const CASES: { date: string; item: string; price: number; city: string }[] = [
  { date: "2026/11/12", item: "Bach トランペット（ゴールド）", price: 103500, city: "吉川市" },
  { date: "2026/10/23", item: "Takamine エレアコ", price: 9775, city: "幸手市" },
  { date: "2026/09/08", item: "Roland 電子ドラム", price: 20000, city: "川越市" },
  { date: "2026/08/06", item: "Ibanez エレキギター", price: 30000, city: "さいたま市" },
  { date: "2026/07/07", item: "G&L エレキベース", price: 23000, city: "川口市" },
  { date: "2026/06/16", item: "Martin アコースティックギター", price: 160000, city: "越谷市" },
  { date: "2026/05/28", item: "Martin アコースティックギター", price: 160000, city: "川口市" },
  { date: "2026/05/08", item: "Fender ストラトキャスター", price: 115000, city: "秩父市" },
  { date: "2026/04/21", item: "Killer エレキギター", price: 50000, city: "さいたま市" },
  { date: "2026/04/14", item: "PRS エレキギター（サンタナ）", price: 40000, city: "久喜市" },
  { date: "2026/03/27", item: "YANAGISAWA アルトサックス", price: 169000, city: "狭山市" },
  { date: "2026/03/16", item: "Gibson エレアコ", price: 190000, city: "蓮田市" },
];

const CITY_PAGES: { slug: string; name: string }[] = [
  { slug: "omiya-gakki-kaitori", name: "大宮" },
  { slug: "kawaguchi-gakki-kaitori", name: "川口" },
  { slug: "tokorozawa-gakki-kaitori", name: "所沢" },
  { slug: "koshigaya-gakki-kaitori", name: "越谷" },
  { slug: "kasukabe-gakki-kaitori", name: "春日部" },
  { slug: "soka-gakki-kaitori", name: "草加" },
  { slug: "toda-saitama-gakki-kaitori", name: "戸田" },
];

const FAQ = [
  {
    q: "埼玉県で楽器を持ち込んで売れる店はどこですか？",
    a: `${ASOF}時点の各社公式サイトでは、ハードオフが県内48店（都道府県別で最多・当サイト集計）、島村楽器は「買取受付」表示のある店舗が12店、楽器の買取屋さんは大宮店、ティファナは川口市・上尾市に3店を掲載しています。狭山市にはハードオフ楽器館（16号狭山店）もあります。`,
  },
  {
    q: "埼玉県で出張買取を頼める業者はどこですか？",
    a: "楽器の買取屋さんは埼玉県全域を出張対象としています。島村楽器も埼玉県を出張対象に含めていますが、LINE/Web査定額が単品30,000円以上（複数なら各20,000円以上）という条件があります。ハードオフは店舗ごとに受付の有無が違い、県内48店のうち19店が出張買取受付「○」でした。イケベ楽器は南東部、ティファナは一部地域が対象です。",
  },
  {
    q: "その場で現金を受け取れるのはどこですか？",
    a: "ハードオフの店頭買取はその場で現金、楽器の買取屋さんとティファナの出張買取もその場で現金と案内されています。島村楽器は店舗・出張・宅配のいずれも銀行振込のみです。",
  },
  {
    q: "埼玉県ではどんな楽器が買い取られていますか？",
    a: "楽器の買取屋さんの公式サイトに掲載された埼玉県の買取事例12件（2026年3〜11月）は、ギター・ベース・サックス・トランペット・電子ドラムで、金額は9,775円〜190,000円でした。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "埼玉県の楽器買取", href: "/articles/saitama-ken-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/saitama-ken-gakki-kaitori/" },
  title: "埼玉県の楽器買取はどこがいい？ハードオフ48店・島村楽器12店の市町村別一覧と出張対応を比較【2026年11月】",
  description:
    "埼玉県で楽器を売れる店と出張買取を、各社の公式情報で整理。ハードオフ48店（出張受付19店）の市町村別一覧、島村楽器の買取受付12店、楽器の買取屋さん大宮店と県全域の出張、埼玉県の買取事例12件を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "埼玉県の楽器買取｜ハードオフ48店・島村楽器12店と出張対応【2026年11月】",
    description: "埼玉県の楽器買取店を市町村別に整理。出張の対象地域と支払い方法も比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "埼玉県の楽器買取はどこがいい？ハードオフ48店・島村楽器12店の市町村別一覧と出張対応を比較",
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/saitama-ken-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "埼玉県の楽器買取", item: "https://gakkikaitori-biyori.com/articles/saitama-ken-gakki-kaitori/" },
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
          埼玉県の楽器買取はどこがいい？ハードオフ48店・島村楽器12店の市町村別一覧と出張対応を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（店舗検索・店舗一覧・出張エリアのページ）を確認して記載しています。店舗数は当サイトが数えたものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            埼玉県は<strong>ハードオフの店舗が48店と都道府県別で最も多い</strong>県です（当サイト集計）。持ち込みでその場で現金化したい場合は、まず近くのハードオフが候補になります。
            ただし出張買取を受け付けているのは48店中19店です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            自宅まで来てほしい場合は、<strong>埼玉県全域を出張対象</strong>とする楽器の買取屋さんか、査定額の条件を満たせば島村楽器が使えます。
            島村楽器は県内12店で買取を受け付けていますが、支払いは銀行振込のみです。
          </p>
        </div>

        <h2 id="companies" className="text-xl font-bold mt-12 mb-4">業者別の埼玉県での対応</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">県内の店舗</th>
                <th className="text-left px-4 py-3 font-medium">出張買取</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
              </tr>
            </thead>
            <tbody>
              {COMPANIES.map((c) => (
                <tr key={c.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{c.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{c.shop}</td>
                  <td className="px-4 py-3 leading-relaxed">{c.visit}</td>
                  <td className="px-4 py-3 leading-relaxed">{c.pay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={HO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（埼玉県）</a>・
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>・
          <a href={SHIMA_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 出張買取</a>・
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん 埼玉県</a>・
          <a href={GK_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">同 店舗一覧</a>・
          <a href={TIF} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ティファナ 出張買取</a>（以上{ASOF}確認）・
          <a href={IKEBE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イケベリユース「買取方法」</a>（2026年11月14日確認）。
          各社の詳しい条件は<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフ</Link>・
          <Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器</Link>・
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>・
          <Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">イケベ楽器</Link>のページにまとめています。
        </p>

        <h2 id="hardoff" className="text-xl font-bold mt-12 mb-4">ハードオフの市町村別の店舗数と出張買取受付</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式の店舗検索で埼玉県の「ハードオフ」を表示した48店を、所在地の市町村ごとに数えました。「出張」は各店舗に表示された出張買取受付が「○」の店舗数です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">市町村</th>
                <th className="text-right px-4 py-3 font-medium">店舗</th>
                <th className="text-right px-4 py-3 font-medium">出張</th>
                <th className="text-left px-4 py-3 font-medium">店舗名（ハードオフ〇〇）</th>
              </tr>
            </thead>
            <tbody>
              {HO_CITY.map((c) => (
                <tr key={c.city} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 whitespace-nowrap">{c.city}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{c.shops}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{c.visit}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{c.names}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          さいたま市の8店のうち1店はAUDIO DIGITAL館（東大宮駅前店）です。草加西店の所在地は川口市峯のため、川口市に数えています。
          このほか、楽器専門の<strong>ハードオフ楽器館16号狭山店</strong>（狭山市下奥富505-1・出張買取受付「×」）があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          店舗の開閉店や受付状況は変わります。出張を頼む場合は、各店舗の表示を確認してから電話で申し込んでください。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の買取受付店舗（12店）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">中古楽器の販売</th>
              </tr>
            </thead>
            <tbody>
              {SHIMA_SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200">
                  <td className="px-4 py-3">{s.name}</td>
                  <td className="px-4 py-3">{s.used ? "あり" : "表示なし"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          店舗一覧の埼玉県の13店のうち、ピアノセレクションセンターは「買取受付」の表示がなく、店舗買取の案内でも対象外とされています。
          島村楽器は和楽器・鍵盤打楽器・オルガンを買い取っていないため、これらは他の業者に相談してください。
        </p>

        <h2 id="cases" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さんの埼玉県の買取事例（12件）</h2>
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
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GK_AREA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん「埼玉県周辺の楽器買取・出張買取」</a>
          の「埼玉県の買取事例」（{ASOF}確認）。金額は個別の事例で、同じ楽器が同じ金額で売れることを示すものではありません。
        </p>

        <h2 id="cities" className="text-xl font-bold mt-12 mb-4">市区ごとのガイド</h2>
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
          currentSlug="saitama-ken-gakki-kaitori"
          relatedSlugs={["omiya-gakki-kaitori", "kawaguchi-gakki-kaitori", "tokorozawa-gakki-kaitori", "koshigaya-gakki-kaitori", "gunma-gakki-kaitori", "hardoff-gakki-kaitori", "shimamura-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

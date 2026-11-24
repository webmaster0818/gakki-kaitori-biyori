import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-15）「和楽器 買取」。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-15 取得・HTMLコメント内の文言は除外）から。
//   ウリエル https://www.uriel-cuore.co.jp/instrument/ ・ /visit/
//   ティファナ https://www.tifana.net/music/ ・ /shipping/
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=wagakki
//   島村楽器 https://www.shimamura.co.jp/used/
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/
//   口コミ・評価・順位は載せない。

const ASOF = "2026年11月15日";

type Row = { name: string; buy: string; how: string; note: string; src: string; srcLabel: string };
const ROWS: Row[] = [
  {
    name: "ウリエル",
    buy: "買う（主な買取対象に「和楽器（三味線、琴など）」）",
    how: "出張・店頭（川崎）・催事。出張料・査定料は無料、出張はその場で現金",
    note: "出張エリアは関東・中部・近畿・中国・四国・九州の府県（一部市町村を除く・沖縄は対象外）",
    src: "https://www.uriel-cuore.co.jp/instrument/",
    srcLabel: "ウリエル「楽器買取」",
  },
  {
    name: "ティファナ",
    buy: "買う（「三味線や琴、横笛、尺八、和太鼓など」を買取と記載）",
    how: "出張・店頭（予約不要）。査定に納得すればその場で現金",
    note: "出張は東京・埼玉・神奈川・千葉の一部地域。宅配買取はシステムリニューアルのため一時停止中",
    src: "https://www.tifana.net/music/",
    srcLabel: "ティファナ「楽器買取」",
  },
  {
    name: "楽器の買取屋さん",
    buy: "買う（和楽器のカテゴリと買取事例を公開）",
    how: "宅配・店頭・出張。出張費・査定料・搬出費用は無料、出張はその場で現金",
    note: "無料出張見積の対象は沖縄を除く46都道府県",
    src: "https://gakkikaitori.co.jp/purchase/category/?big-cat=wagakki",
    srcLabel: "楽器の買取屋さん「和楽器」",
  },
  {
    name: "島村楽器",
    buy: "買わない（「買取取り扱いのない楽器」に「和楽器（琴、三味線、大正琴など）」）",
    how: "—",
    note: "買取価格検索でも箏・三味線は0件",
    src: "https://www.shimamura.co.jp/used/",
    srcLabel: "島村楽器「楽器買取のご案内」",
  },
  {
    name: "イシバシ楽器",
    buy: "難しい（「買取の難しい楽器・機材の一例」に「和琴/大正琴」）",
    how: "—",
    note: "三味線・尺八についての記載はなし。持ち込む前に問い合わせが必要",
    src: "https://www.ishibashi.co.jp/kaitori/",
    srcLabel: "イシバシ楽器「楽器買取」",
  },
];

// 楽器の買取屋さん「和楽器の買取事例」（公式に掲載の7件・2026-11-15確認）
const CASES: { date: string; item: string; price: number; pref: string }[] = [
  { date: "2019/6/9", item: "三味線", price: 72900, pref: "山形県" },
  { date: "2019/6/3", item: "尺八", price: 45000, pref: "佐賀県" },
  { date: "2019/3/9", item: "尺八（10本セット・在銘 容山6本ほか・琴古流）", price: 201960, pref: "秋田県" },
  { date: "2018/3/30", item: "三味線", price: 48000, pref: "東京都大田区" },
  { date: "2018/3/24", item: "三味線", price: 33000, pref: "—" },
  { date: "2018/2/17", item: "尺八", price: 30000, pref: "滋賀県" },
  { date: "2017/2/16", item: "三味線（津軽三味線・紅木・金細ほか）", price: 124000, pref: "東京都江戸川区" },
];

const FAQ = [
  {
    q: "和楽器はどこで買い取ってもらえますか？",
    a: `${ASOF}に各社の公式サイトを確認したところ、ウリエル・ティファナ・楽器の買取屋さんは和楽器を買取対象として案内しています。一方、島村楽器は和楽器（琴、三味線、大正琴など）を「買取取り扱いのない楽器」としており、イシバシ楽器は和琴・大正琴を「買取の難しい楽器」の例に挙げています。`,
  },
  {
    q: "三味線や尺八はいくらで売れますか？",
    a: "楽器の買取屋さんの公式サイトに掲載された和楽器の買取事例7件は、3万円〜20万1,960円でした（三味線4件・尺八3件、2017〜2019年の事例）。素材・銘・付属品で金額は大きく変わるため、写真と銘の情報を添えて見積もりを取ってください。箏（琴）の事例は掲載されていません。",
  },
  {
    q: "楽器店のチェーンでは和楽器は売れませんか？",
    a: "島村楽器は和楽器を買取対象外と明記しています。イシバシ楽器は和琴・大正琴を買取の難しい例に挙げており、三味線・尺八の扱いは公式ページに記載がありません。洋楽器中心の楽器店では断られることがあるため、和楽器を扱う業者に相談するのが確実です。",
  },
  {
    q: "地方に住んでいても和楽器を売れますか？",
    a: "楽器の買取屋さんは沖縄を除く46都道府県を無料出張見積の対象とし、宅配買取もあります。ウリエルの出張は北海道・東北・北陸などを含みません。ティファナの出張は首都圏の一部地域で、宅配買取は一時停止中です（いずれも公式サイト・2026年11月15日確認）。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "和楽器の買取", href: "/articles/wagakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/wagakki-kaitori/" },
  title: "和楽器の買取はどこができる？5社の対応と公開されている買取事例を比較【2026年11月】",
  description:
    "三味線・琴・尺八などの和楽器を買い取る業者と、買い取らない楽器店を公式情報で比較しました。ウリエル・ティファナ・楽器の買取屋さんは対象、島村楽器は対象外です。公開されている買取事例7件の金額も掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "和楽器の買取はどこができる？5社の対応と買取事例【2026年11月】",
    description: "和楽器を買い取る業者・買い取らない楽器店の公式記載と、公開されている買取事例。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "和楽器の買取はどこができる？5社の対応と公開されている買取事例を比較",
        datePublished: "2026-11-15",
        dateModified: "2026-11-15",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/wagakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "和楽器の買取", item: "https://gakkikaitori-biyori.com/articles/wagakki-kaitori/" },
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
          和楽器の買取はどこができる？5社の対応と公開されている買取事例を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイトを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            三味線・琴・尺八などの和楽器は、<strong>ウリエル・ティファナ・楽器の買取屋さん</strong>が買取対象として公式に案内しています。
            一方で、楽器店チェーンの<strong>島村楽器は和楽器を買取対象外</strong>とし、<strong>イシバシ楽器は和琴・大正琴を「買取の難しい楽器」</strong>に挙げています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            金額の目安としては、楽器の買取屋さんが公開している和楽器の買取事例7件が<strong>3万円〜20万1,960円</strong>でした。
          </p>
        </div>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">和楽器を買い取る業者・買い取らない楽器店</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">業者</th>
                <th className="text-left px-3 py-3 font-medium">和楽器の扱い</th>
                <th className="text-left px-3 py-3 font-medium">買取方法・費用</th>
                <th className="text-left px-3 py-3 font-medium">対応地域など</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200 align-top">
                  <td className="px-3 py-3 font-medium whitespace-nowrap">
                    <a href={r.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {r.name}
                    </a>
                  </td>
                  <td className="px-3 py-3 leading-relaxed">{r.buy}</td>
                  <td className="px-3 py-3 leading-relaxed">{r.how}</td>
                  <td className="px-3 py-3 leading-relaxed">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：各社の公式ページ（業者名のリンク先・{ASOF}取得）。ティファナの宅配買取の停止は
          <a href="https://www.tifana.net/shipping/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            公式「宅配買取」ページ
          </a>
          、ウリエルの出張エリアは
          <a href="https://www.uriel-cuore.co.jp/visit/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            公式「出張買取」ページ
          </a>
          の表示によります。条件は変更されることがあるため、申込み前に公式サイトで最新の内容をご確認ください。
        </p>

        <h2 id="cases" className="text-xl font-bold mt-12 mb-4">公開されている和楽器の買取事例（楽器の買取屋さん）</h2>
        <p className="text-sm leading-relaxed mb-4">
          和楽器の買取金額を公開している業者は多くありません。楽器の買取屋さんは公式サイトの和楽器カテゴリに買取事例を掲載しており、{ASOF}時点で7件ありました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">掲載日</th>
                <th className="text-left px-3 py-3 font-medium">品目</th>
                <th className="text-right px-3 py-3 font-medium">買取金額</th>
                <th className="text-left px-3 py-3 font-medium">地域</th>
              </tr>
            </thead>
            <tbody>
              {CASES.map((c) => (
                <tr key={c.date + c.item} className="border-t border-warm-200">
                  <td className="px-3 py-3 whitespace-nowrap">{c.date}</td>
                  <td className="px-3 py-3 leading-relaxed">{c.item}</td>
                  <td className="px-3 py-3 text-right whitespace-nowrap">{c.price.toLocaleString()}円</td>
                  <td className="px-3 py-3 whitespace-nowrap">{c.pref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 text-xs text-warm-gray leading-relaxed space-y-1 mb-10">
          <li>
            出典：
            <a href="https://gakkikaitori.co.jp/purchase/category/?big-cat=wagakki" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
              楽器の買取屋さん「和楽器」カテゴリ
            </a>
            （{ASOF}取得）。7件すべてが2017〜2019年の事例で、現在の買取金額を示すものではありません。
          </li>
          <li>三味線は津軽三味線（太棹・紅木・金細など）の事例が中心です。箏（琴）・和太鼓・大正琴の事例は掲載されていません。</li>
        </ul>

        <h2 id="prepare" className="text-xl font-bold mt-12 mb-4">見積もりを依頼する前に確認すること</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>銘・作者</strong>：ウリエルの公式ページは、三味線・琴・尺八・和太鼓などは「素材の希少性と製作者の銘が買取価格を大きく左右」すると説明しています。尺八の銘、三味線の棹の素材（紅木など）が分かれば伝えてください。
          </li>
          <li>
            <strong>付属品</strong>：撥・駒・ケース・爪など。上の事例でも、撥やハードケースの有無が品目名に書かれています。
          </li>
          <li>
            <strong>大きさ</strong>：箏や和太鼓は大型のため、出張に対応している業者か、宅配で送れる大きさかを先に確認してください。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-8">
          楽器ごとの詳しい情報は、
          <Link href="/articles/shamisen-kaitori/" className="text-accent underline">三味線</Link>・
          <Link href="/articles/koto-kaitori/" className="text-accent underline">琴（箏）</Link>・
          <Link href="/articles/shakuhachi-kaitori/" className="text-accent underline">尺八</Link>・
          <Link href="/articles/wadaiko-kaitori/" className="text-accent underline">和太鼓</Link>
          の各記事をご覧ください。
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
          currentSlug="wagakki-kaitori"
          relatedSlugs={["shamisen-kaitori", "koto-kaitori", "shakuhachi-kaitori", "wadaiko-kaitori", "gakki-kaitori-osusume", "taishogoto-kaitori", "niko-kaitori", "minzoku-gakki-kaitori", "sanshin-kaitori", "biwa-kaitori"]}
        />
      </article>
    </>
  );
}

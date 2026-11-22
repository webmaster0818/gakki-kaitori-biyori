import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-23 深夜02時の回）「マウスピース 買取」。
// 一次データ:
//   ヤフオクの落札済み検索「サックス マウスピース」「トランペット マウスピース」「マウスピース オットーリンク」「マウスピース メイヤー」
//     （2026-11-23 取得・重複除去591件）→ マウスピース単体の345件をブランド別に集計。
//     除外：楽器本体にマウスピースが付いた出品、複数本・セット・まとめ、ジャンク・新品・未使用、書籍・雑誌、クラリネット等ほかの楽器用。
//     ⚠️ オットーリンク・メイヤーは名前で検索しているため件数が多く出る（件数は流通量の比較には使わない）。
//   島村楽器 買取価格検索 型番「マウスピース」＝0件（2026-11-23）
//   楽器の買取屋さん マウスピースの買取事例＝1件（2026-11-23）
// 業者の公式（2026-11-23 取得）: イシバシ楽器 楽器買取（管楽器買取に「各種マウスピース」）、島村楽器 楽器買取のご案内
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月23日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=%E3%83%9E%E3%82%A6%E3%82%B9%E3%83%94%E3%83%BC%E3%82%B9&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=mouthpiece";
const YANA_A_WO2 = "https://www.yanagisawasax.co.jp/saxophones/view/829";

const BRANDS: { brand: string; use: string; n: number; median: string; range: string }[] = [
  { brand: "オットーリンク（メタル・Super Tone Master など）", use: "サックス", n: 49, median: "19,000円", range: "9,000〜143,000円" },
  { brand: "オットーリンク（ラバー・Tone Edge など）", use: "サックス", n: 35, median: "15,000円", range: "5,750〜80,000円" },
  { brand: "メイヤー（Meyer）", use: "サックス", n: 80, median: "14,410円", range: "5,390〜200,000円" },
  { brand: "デュコフ（Dukoff）", use: "サックス", n: 7, median: "24,750円", range: "11,550〜39,300円" },
  { brand: "セルマー（Selmer）", use: "サックス", n: 33, median: "8,250円", range: "1,334〜24,500円" },
  { brand: "バック（Bach）", use: "トランペット", n: 29, median: "3,850円", range: "1,100〜21,000円" },
  { brand: "ヤマハ（YAMAHA）", use: "サックス・トランペット", n: 33, median: "3,740円", range: "870〜11,000円" },
];

const BUYERS: { name: string; status: string; href: string }[] = [
  { name: "イシバシ楽器", status: "管楽器買取の対象に「各種マウスピースなどの買取」と明記", href: ISHIBASHI },
  { name: "楽器の買取屋さん", status: "買取事例の区分に「マウスピース」があり、公開事例は1件（2018年1月・41,500円）", href: KAITORIYA },
  { name: "島村楽器", status: "買取価格検索で型番「マウスピース」の掲示は0件。本体の付属品の欠品は別途減額", href: SHIMA_SEARCH },
];

const FAQ = [
  {
    q: "マウスピースだけでも買い取ってもらえますか？",
    a: `イシバシ楽器は管楽器買取の対象に「各種マウスピース」を挙げています（${ASOF}確認）。楽器の買取屋さんにもマウスピースの事例区分がありますが、公開事例は1件でした。島村楽器の買取価格検索にはマウスピースの掲示がありません。`,
  },
  {
    q: "サックスのマウスピースはいくらで売れますか？",
    a: "ヤフオクのマウスピース単体の落札では、サックス用242件の中央値が14,800円でした。ブランド別ではオットーリンクのメタルが19,000円、メイヤーが14,410円、セルマーが8,250円です。落札価格は個人間・業者の販売価格で、業者の買取価格とは性質が異なります。",
  },
  {
    q: "トランペットのマウスピースは売れますか？",
    a: "トランペット用86件の落札中央値は3,970円で、半数以上の53件が5,000円未満でした。バックは29件で中央値3,850円、ヤマハは3,740円です。単体で売るより、トランペット本体と一緒に査定に出す方法もあります。",
  },
  {
    q: "楽器に付いていたマウスピースは別に売った方がよいですか？",
    a: "島村楽器は付属品の欠品を別途減額としています。ヤナギサワ A-WO2 のようにマウスピースが標準で付属する楽器もあるため、本体を売る場合は純正のマウスピースを一緒に出すのが基本です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "マウスピースの買取", href: "/articles/mouthpiece-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/mouthpiece-kaitori/" },
  title: "マウスピースの買取相場｜落札345件のブランド別集計と買い取る楽器店【2026年11月】",
  description:
    "サックス・トランペットのマウスピースの買取相場を、ヤフオクのマウスピース単体の落札345件からブランド別（オットーリンク・メイヤー・セルマー・バック・ヤマハなど）に集計しました。マウスピースの買取を明記している楽器店と、掲示のない店も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "マウスピースの買取相場｜落札345件のブランド別集計【2026年11月】",
    description: "サックス用の中央値14,800円・トランペット用3,970円。ブランド別の落札中央値と売り先。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "マウスピースの買取相場｜落札345件のブランド別集計と買い取る楽器店",
        datePublished: "2026-11-23",
        dateModified: "2026-11-23",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/mouthpiece-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "マウスピースの買取", item: "https://gakkikaitori-biyori.com/articles/mouthpiece-kaitori/" },
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
          マウスピースの買取相場｜落札345件のブランド別集計と買い取る楽器店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、楽器店の取り扱いは各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクのマウスピース単体の落札345件では、<strong>サックス用242件の中央値が14,800円</strong>、<strong>トランペット用86件の中央値が3,970円</strong>でした。
            サックス用はオットーリンクのメタル（19,000円）やメイヤー（14,410円）などのジャズ向けブランドが高く、トランペット用は半数以上が5,000円未満です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            楽器店では、イシバシ楽器が管楽器買取の対象に「各種マウスピース」を明記しています。島村楽器の買取価格検索にはマウスピースの掲示がありません。
          </p>
        </div>

        <h2 id="brands" className="text-xl font-bold mt-12 mb-4">ブランド別の落札価格（マウスピース単体）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">主な用途</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {BRANDS.map((r) => (
                <tr key={r.brand} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.brand}</td>
                  <td className="px-4 py-3">{r.use}</td>
                  <td className="px-4 py-3">{r.n}件</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          同じブランドでも刻印や年代で差があります。タイトルに「New York」「USA」「Florida」やヴィンテージの表記がある出品は、
          メイヤーが13件で中央値28,500円（それ以外67件は13,000円）、オットーリンクが14件で28,900円（それ以外70件は16,755円）でした。
          最高額はメイヤーのニューヨーク刻印（ヴィンテージ）の200,000円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：ヤフオクの落札済み検索「サックス マウスピース」「トランペット マウスピース」「マウスピース オットーリンク」「マウスピース メイヤー」（{ASOF}取得・重複を除いて591件）のうち、マウスピース単体の345件を当サイトで集計しました。
          楽器本体にマウスピースが付いた出品、複数本のセット、ジャンク・新品・未使用、書籍、ほかの楽器用は除外しています。
          オットーリンク・メイヤーは名前で検索しているため件数が多く出ており、件数は流通量の比較には使えません。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">マウスピースの買取の扱い（楽器店別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">楽器店</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載（{ASOF}確認）</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{r.name}</a>
                  </td>
                  <td className="px-4 py-3">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は買取の取り扱いがないものとして「ケーブル、スタンド類等の周辺アクセサリー類」を挙げていますが、マウスピースについての記載は見当たりませんでした。単体での買取可否は、申し込み前に店舗へ確認します。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 楽器買取</a>・
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん マウスピースの買取事例</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>（{ASOF}確認）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>ブランドと番手・刻印</strong>：シャンク（胴）やテーブル面の刻印で、ブランド・番手（例：6☆・5M）・製造地の表記を確かめます。落札データでは刻印・年代の表記の有無で、中央値に1.7〜2.2倍の差がありました。</li>
          <li><strong>付属品</strong>：リガチャー・キャップ・元箱がある場合はそろえます。</li>
          <li><strong>本体に付属していたもの</strong>：<a href={YANA_A_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤナギサワ A-WO2</a> はマウスピース（クラシック・モデル AC140）が標準で付属します。本体を売る場合は一緒に出します。島村楽器は付属品の欠品を別途減額としています。</li>
          <li><strong>トランペット用の標準品</strong>：落札の中央値が4,000円前後のため、単体で売るよりも本体と一緒に査定に出す方法もあります。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          サックス本体は<Link href="/articles/saxophone-kaitori/" className="text-accent underline">サックス買取ガイド</Link>、
          トランペット本体は<Link href="/articles/trumpet-kaitori/" className="text-accent underline">トランペット買取相場ガイド</Link>、
          ケースや保証書の扱いは<Link href="/articles/gakki-fuzokuhin-kaitori/" className="text-accent underline">付属品の重要性ガイド</Link>で整理しています。
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
          currentSlug="mouthpiece-kaitori"
          relatedSlugs={["kangakki-kaitori", "saxophone-kaitori", "trumpet-kaitori", "gakki-fuzokuhin-kaitori", "gakki-case-kaitori", "yanagisawa-wo2-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜04時の回）「ファゴット 買取」。
// 一次データ:
//   島村楽器 買取価格検索 型番「ファゴット」（2026-11-20 取得・30行＝区分「ファゴット」4行＋「その他木管楽器」26行）
//   ヤフオクの落札済み検索「ファゴット」「ヤマハ ファゴット」（2026-11-20 取得・重複除去210件）→ タイトルを1件ずつ読み、本体30件・ボーカル9件を分類
//     （CD・楽譜・リード・ケース・プラモデル〈MiG-15 の愛称〉・腕時計〈FAGOTTO〉などを除外）。ブランドはタイトル先頭のブランド名で分類。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
// 業者・メーカーの公式（2026-11-20 取得）:
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=bassoon（事例5件）
//   ヤマハ https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/bassoons/（現行 YFG-811/811C・812/812C、スーパーボーカル 176,000円）
//   島村楽器 https://www.shimamura.co.jp/used/（支払いは口座への入金）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=%E3%83%95%E3%82%A1%E3%82%B4%E3%83%83%E3%83%88&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=bassoon";
const YAMAHA = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/bassoons/";

const SHIMA_BRANDS: { brand: string; n: number; median: string; range: string; models: string }[] = [
  { brand: "ヤマハ", n: 8, median: "890,500円", range: "694,000〜1,033,000円", models: "YFG-811・811C・812・812C ほか" },
  { brand: "フォックス（Fox）", n: 12, median: "646,000円", range: "283,000〜1,045,000円", models: "300 Long Bell 1,045,000円・017NIPPON 28万円台" },
  { brand: "シュライバー（W.Schreiber）", n: 4, median: "443,000円", range: "245,000〜689,000円", models: "WS5010〜WS5031" },
  { brand: "オスカーアドラー（Oscar Adler）", n: 3, median: "337,000円", range: "334,000〜477,000円", models: "1357 系" },
  { brand: "モースマン（Moosmann）", n: 3, median: "271,000円", range: "187,000〜302,000円", models: "442SIL・443・445" },
];

const Y_GROUPS: { group: string; n: number; prices: string }[] = [
  { group: "ヤマハ（YFG-812・YFG-811・YFG-411）", n: 5, prices: "302,500〜1,103,190円（中央値500,000円）" },
  { group: "クルスペ（Kruspe）", n: 7, prices: "27,390〜188,100円（中央値170,500円）" },
  { group: "オスカーアドラー（Oscar Adler）", n: 3, prices: "201,300円・232,100円・266,200円" },
  { group: "シュライバー（W.Schreiber）", n: 3, prices: "211,200円・500,000円・644,800円" },
  { group: "モースマン（Moosmann）", n: 2, prices: "441,100円・700,000円" },
  { group: "ヒューラー（G.H.Hüller）", n: 2, prices: "56,101円・170,000円" },
  { group: "そのほか・メーカー記載なし", n: 8, prices: "72,600〜402,000円（中央値233,500円）" },
];

const FAQ = [
  {
    q: "ファゴットの買取価格はどのくらいですか？",
    a: `島村楽器の買取価格検索ではファゴット30行の A ランク中央値が646,000円で、ヤマハの YFG-811C・812C は1,033,000円でした（${ASOF}確認）。ヤフオクの本体の落札30件は27,390円〜1,103,190円、中央値222,800円です。`,
  },
  {
    q: "島村楽器で同じ型番に2つの価格が出るのはなぜですか？",
    a: "島村楽器の買取価格検索では、YFG-812 が区分「ファゴット」で926,000円、区分「その他木管楽器」で694,000円と2行掲示されていました。どちらが適用されるかは査定時に確認してください。",
  },
  {
    q: "ボーカルだけでも売れますか？",
    a: `ヤフオクではボーカル単体の落札が9件あり、ヤマハのボーカルが22,000円〜91,000円（6件）、ヘッケルの CC1 が73,500円〜77,500円でした（${ASOF}取得）。ヤマハのスーパーボーカルは現行品の希望小売価格が176,000円（税込）です。`,
  },
  {
    q: "楽器の買取屋さんのファゴットの買取事例は？",
    a: "公式サイトで5件公開されており、30,000円・35,000円・126,000円・127,000円・181,800円（アマティ）でした。いずれも2017〜2019年の事例です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ファゴットの買取", href: "/articles/fagott-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/fagott-kaitori/" },
  title: "ファゴット（バスーン）の買取相場｜島村楽器の掲示30行とブランド別の落札30件【2026年11月】",
  description:
    "ファゴットの買取相場を、島村楽器が掲示するヤマハ・フォックス・シュライバーなど30行の買取価格と、ヤフオクの本体の落札30件のブランド別集計で整理しました。ボーカル単体の落札価格と、楽器の買取屋さんの事例5件も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ファゴット（バスーン）の買取相場｜ブランド別の掲示買取価格と落札価格【2026年11月】",
    description: "ヤマハ・フォックス・クルスペなどブランド別の買取価格・落札価格と、ボーカル単体の相場。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ファゴット（バスーン）の買取相場｜島村楽器の掲示30行とブランド別の落札30件",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/fagott-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ファゴットの買取", item: "https://gakkikaitori-biyori.com/articles/fagott-kaitori/" },
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
          ファゴット（バスーン）の買取相場｜島村楽器の掲示30行とブランド別の落札30件
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器はファゴットを30行掲示しており、<strong>A ランクの中央値は646,000円</strong>でした。ヤマハの現行モデル YFG-811C・812C は1,033,000円、フォックスは283,000〜1,045,000円です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクの本体の落札30件は中央値222,800円で、島村楽器の掲示にないクルスペ（7件・中央値170,500円）などが多く含まれます。
            ボーカルは単体でも2万〜9万円台で落札されていました。
          </p>
        </div>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（ブランド別・Aランク）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">掲示行数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
                <th className="text-left px-4 py-3 font-medium">型番の例</th>
              </tr>
            </thead>
            <tbody>
              {SHIMA_BRANDS.map((r) => (
                <tr key={r.brand} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.brand}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.n}行</td>
                  <td className="px-4 py-3">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                  <td className="px-4 py-3">{r.models}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          30行すべてで B ランクは A の82〜83%、C ランクは63〜67%でした。ヤマハは区分「ファゴット」の4行（YFG-811・812 が926,000円、811C・812C が1,033,000円）と、
          区分「その他木管楽器」の4行（YFG-812 694,000円、YFG-811Ⅱ・812Ⅱ 748,000円、YFG-812CⅡ 855,000円）があり、同じ YFG-812 に2つの価格が掲示されています。
          島村楽器の買取代金は口座への入金で、現金での支払いは行っていません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「ファゴット」）</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>（{ASOF}確認）。
        </p>

        <h2 id="yahoo" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（ブランド別・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">落札価格</th>
              </tr>
            </thead>
            <tbody>
              {Y_GROUPS.map((g) => (
                <tr key={g.group} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{g.group}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{g.n}件</td>
                  <td className="px-4 py-3">{g.prices}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ヤマハ YFG-812 の落札（1,103,190円）は、島村楽器の YFG-812 の掲示（926,000円）を上回っていました。モースマンも、2012年製の Model 443 が700,000円で落札され、島村楽器の 443 の掲示（271,000円）の2倍以上です。
          一方、オスカーアドラーの落札3件（20万円台）は、島村楽器の 1357 の掲示（334,000〜477,000円）より低い水準でした。
          クルスペは「ジャンク」「未調整」の1件が27,390円、「オーバーホール済み」の1件が145,000円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「ファゴット」「ヤマハ ファゴット」の結果（{ASOF}取得・重複を除いて210件）からタイトルを1件ずつ確認し、本体30件を残しました。
          CD・楽譜・リード・ケース・小物と、同じ名前のプラモデル（MiG-15 の愛称）・腕時計は除外しています。ブランドはタイトルのブランド名で分類しました。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">買取業者の事例とメーカーの現行品</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>：
            ファゴットの買取事例5件（30,000円〈2018年〉・35,000円〈2018年・高知県〉・126,000円〈2019年・群馬県〉・127,000円〈2017年・山形県〉・181,800円〈アマティ・2019年・宮城県〉）
          </li>
          <li>
            <a href={YAMAHA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ</a>：
            現行のファゴットは YFG-811/811C と YFG-812/812C の2系統。スーパーボーカル（CN・EN・PN・VN の各1S/2S）は希望小売価格176,000円（税込）
          </li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">出典：各社公式サイト（{ASOF}取得）。</p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>メーカーと型番・製造番号</strong>：管体の刻印で確認します。ヤマハは型番、ドイツ製はメーカー名と製造番号（#）がタイトルに書かれた落札が多くありました。</li>
          <li><strong>ボーカル</strong>：ボーカルは単体でも値段がつく部品です。本体と別に何本あるか、型番（CN1 など）を確かめます。</li>
          <li><strong>調整の状態</strong>：落札では YFG-411 の「全タンポ交換」済みの1件が500,000円、「ジャンク品」の1件が414,500円でした。調整の記録があれば査定時に伝えます。</li>
          <li><strong>ケース・付属品</strong>：ハードケース・ストラップ・ハンドレストをそろえます。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          同じダブルリードのオーボエは<Link href="/articles/oboe-kaitori/" className="text-accent underline">オーボエ買取相場ガイド</Link>、
          管楽器全般は<Link href="/articles/kangakki-kaitori/" className="text-accent underline">管楽器買取</Link>で整理しています。
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
          currentSlug="fagott-kaitori"
          relatedSlugs={["clarinet-kaitori", "oboe-kaitori", "buffet-kaitori", "kangakki-kaitori", "yamaha-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

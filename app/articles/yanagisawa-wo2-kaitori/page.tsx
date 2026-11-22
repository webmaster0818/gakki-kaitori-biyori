import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-23 深夜02時の回）「ヤナギサワ WO2」。
// 一次データ:
//   島村楽器 買取価格検索 型番「WO2」（2026-11-23 取得・19行＝WO2 4行・WO20 15行）
//   ヤフオクの落札済み検索「ヤナギサワ WO2」「YANAGISAWA WO2」「A-WO2」「T-WO2」（2026-11-23 取得・重複除去25件）
//     → 新品1件・A-902 1件を除いた WO2 の中古本体（アルト17件・テナー5件・ソプラノ1件）
//   楽器の買取屋さん ヤナギサワ サックスの買取事例（2026-11-23 に一覧から取得できた86件・型番の記載なし）
// メーカーの公式（2026-11-23 取得）: ヤナギサワ 製品情報 A-WO2・S-WO2・T-WO2・A-WO20・A-WO1・A-WO10（標準価格・管体の材質・付属品）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月23日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=WO2&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wind-instruments&small-cat=saxophone&maker=yanagisawa";
const YANA_A_WO2 = "https://www.yanagisawasax.co.jp/saxophones/view/829";
const YANA_S_WO2 = "https://www.yanagisawasax.co.jp/saxophones/view/844";
const YANA_T_WO2 = "https://www.yanagisawasax.co.jp/saxophones/view/835";
const YANA_A_WO20 = "https://www.yanagisawasax.co.jp/saxophones/view/830";

// WO2 の型番別：標準価格（税込）・島村楽器の掲示（A/B/C）・ヤフオク落札（当サイト集計）
const MODELS: { model: string; retail: string; shima: string; ratio: string; yahoo: string }[] = [
  { model: "A-WO2（アルト・ラッカー）", retail: "506,000円", shima: "A 166,000円／B 140,000円／C 115,000円", ratio: "約33%", yahoo: "17件・中央値277,200円（213,862〜316,800円）" },
  { model: "A-WO2SP（アルト・銀メッキ）", retail: "770,000円", shima: "A 131,000円／B 111,000円／C 91,000円", ratio: "約17%", yahoo: "—" },
  { model: "S-WO2（ソプラノ・ラッカー）", retail: "583,000円", shima: "A 175,000円／B 145,000円／C 116,000円", ratio: "約30%", yahoo: "1件・381,260円" },
  { model: "T-WO2（テナー・ラッカー）", retail: "605,000円", shima: "A 185,000円／B 154,000円／C 123,000円", ratio: "約31%", yahoo: "5件・中央値385,001円（346,000〜399,000円）" },
];

// 同じ WO シリーズの比較（アルト）
const LINE: { model: string; body: string; retail: string; shima: string }[] = [
  { model: "A-WO1", body: "ブラス", retail: "478,500円", shima: "—（型番「WO2」の検索対象外）" },
  { model: "A-WO2", body: "ブロンズブラス（ライト仕様）", retail: "506,000円", shima: "166,000円" },
  { model: "A-WO10", body: "ブラス", retail: "610,500円", shima: "—（型番「WO2」の検索対象外）" },
  { model: "A-WO20", body: "ブロンズブラス（ヘヴィー仕様）", retail: "693,000円", shima: "227,000円" },
];

const FAQ = [
  {
    q: "ヤナギサワ A-WO2 はいくらで売れますか？",
    a: `島村楽器の買取価格検索では、A-WO2（ラッカー）の掲示が A ランク166,000円・B ランク140,000円・C ランク115,000円でした（${ASOF}確認）。現行の標準価格506,000円の約33%です。ヤフオクの中古の落札17件の中央値は277,200円でした。`,
  },
  {
    q: "銀メッキの A-WO2SP の方が高く売れますか？",
    a: "島村楽器の掲示では逆で、A-WO2SP（銀メッキ）は A ランク131,000円と、ラッカーの A-WO2 より35,000円低い掲示でした。新品の標準価格は銀メッキの方が264,000円高いため、標準価格に対する割合は約17%にとどまります。A-WO20 でも銀メッキ（199,000円）がラッカー（227,000円）を下回っていました。",
  },
  {
    q: "WO2 と WO20 の違いは査定額に表れますか？",
    a: "ヤナギサワの製品情報では、どちらも管体はブロンズブラス製で、WO2 は「ライト仕様」、WO20 は「ヘヴィー仕様」です。島村楽器の A ランクはアルトで WO2 が166,000円、WO20 が227,000円、テナーで185,000円と245,000円でした。",
  },
  {
    q: "楽器の買取屋さんの事例は WO2 の金額ですか？",
    a: "楽器の買取屋さんのヤナギサワの事例には型番が記載されていないため、WO2 の金額かどうかは分かりません。アルトサックス38件の中間価格は113,300円、テナーサックス27件は94,000円でした。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ヤナギサワ WO2の買取", href: "/articles/yanagisawa-wo2-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yanagisawa-wo2-kaitori/" },
  title: "ヤナギサワ WO2の買取相場｜A-WO2・T-WO2 の掲示買取価格と落札価格【2026年11月】",
  description:
    "ヤナギサワ WO2（A-WO2・S-WO2・T-WO2）の買取相場を、メーカーの標準価格、島村楽器の掲示買取価格（A・B・Cランク）、ヤフオクの中古の落札価格で整理しました。銀メッキの A-WO2SP がラッカーより低い掲示であることや、WO20 との差も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ヤナギサワ WO2の買取相場｜A-WO2・T-WO2 の掲示買取価格と落札価格【2026年11月】",
    description: "A-WO2・S-WO2・T-WO2 の標準価格・掲示買取価格・落札価格と、銀メッキ・WO20 との差。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ヤナギサワ WO2の買取相場｜A-WO2・T-WO2 の掲示買取価格と落札価格",
        datePublished: "2026-11-23",
        dateModified: "2026-11-23",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yanagisawa-wo2-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ヤナギサワ WO2の買取", item: "https://gakkikaitori-biyori.com/articles/yanagisawa-wo2-kaitori/" },
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
          ヤナギサワ WO2の買取相場｜A-WO2・T-WO2 の掲示買取価格と落札価格
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            アルトサックス A-WO2（ラッカー）の島村楽器の掲示は <strong>A ランク166,000円</strong>で、現行の標準価格506,000円の約33%でした。
            テナー T-WO2 は185,000円、ソプラノ S-WO2 は175,000円です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクの中古の落札は A-WO2 が17件で中央値277,200円、T-WO2 が5件で中央値385,001円でした。
            新品では高い<strong>銀メッキの A-WO2SP は、掲示がラッカーより35,000円低い</strong>点に注意が必要です。
          </p>
        </div>

        <h2 id="models" className="text-xl font-bold mt-12 mb-4">WO2 の型番別：標準価格・掲示買取価格・落札価格</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-left px-4 py-3 font-medium">標準価格（税込）</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器の掲示</th>
                <th className="text-left px-4 py-3 font-medium">A÷標準価格</th>
                <th className="text-left px-4 py-3 font-medium">ヤフオク落札（中古）</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((r) => (
                <tr key={r.model} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.retail}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.ratio}</td>
                  <td className="px-4 py-3">{r.yahoo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          B ランクは A の83〜85%、C ランクは66〜69%でした。ヤフオクの中古の落札中央値は、島村楽器の A ランクに対してアルトで約1.7倍、テナーで約2.1倍です。
          島村楽器の掲示は買取価格、ヤフオクは個人間・業者の販売価格で性質が異なるため、売り方を選ぶ際は手間と金額の差を比べて判断します。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YANA_A_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤナギサワ A-WO2</a>・
          <a href={YANA_S_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">S-WO2</a>・
          <a href={YANA_T_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">T-WO2</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「WO2」）</a>
          （{ASOF}確認）。ヤフオクは落札済み検索「ヤナギサワ WO2」「YANAGISAWA WO2」「A-WO2」「T-WO2」（{ASOF}取得・重複を除いて25件）のうち、新品1件と A-902 1件を除いた中古の本体です。
          島村楽器の掲示は目安で、最終的な買取価格は現物確認のうえで決まります。
        </p>

        <h2 id="line" className="text-xl font-bold mt-12 mb-4">WO シリーズの中での WO2 の位置（アルト）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-left px-4 py-3 font-medium">管体（ヤナギサワ公式）</th>
                <th className="text-left px-4 py-3 font-medium">標準価格（ラッカー・税込）</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器の掲示（A）</th>
              </tr>
            </thead>
            <tbody>
              {LINE.map((r) => (
                <tr key={r.model} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3">{r.body}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.retail}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ヤナギサワは WO2 を「しっかりとした響きを持つ『ライト仕様』」、WO20 を「『ヘヴィー仕様』でありながら、やわらかな音色を実現」と紹介しています。
          島村楽器の掲示では、A-WO20 は A-WO2 より61,000円高い227,000円でした。
          A-WO2 には、クラシック・モデル AC140 のマウスピース、Yany Ligature、マウスピースキャップ、ケースが標準で付属します（T-WO2 のマウスピースは TC180）。売却時は付属品をそろえておきます。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YANA_A_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤナギサワ A-WO2</a>・
          <a href={YANA_A_WO20} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">A-WO20</a>
          ・ヤナギサワ A-WO1・A-WO10 の製品情報（{ASOF}確認）。A-WO1・A-WO10 は型番「WO2」の検索に含まれないため、島村楽器の掲示を載せていません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">楽器の買取屋さんの事例（ヤナギサワ全体）</h2>
        <p className="text-sm leading-relaxed mb-4">
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>は、ヤナギサワのサックスの買取事例を公開しています。
          {ASOF}に一覧から取得できた86件（2013年6月〜2026年9月）は、アルトサックス38件が中間価格113,300円（26,000〜220,000円）、テナーサックス27件が94,000円（45,000〜288,000円）、ソプラノサックス7件が130,000円でした。
          事例に型番の記載はないため、WO2 の金額かどうかは分かりません。
        </p>
        <p className="text-xs text-warm-gray mb-10">出典：楽器の買取屋さん ヤナギサワ サックスの買取事例（{ASOF}取得）。</p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番と仕上げ</strong>：ベルの刻印で WO2 か WO20 か、ラッカーか銀メッキ（SP）かを確かめます。島村楽器の掲示は仕上げで分かれています。</li>
          <li><strong>シリアル番号</strong>：落札データでも「#00371591」のようにシリアル番号を示した出品が多く見られました。控えておくと問い合わせが円滑です。</li>
          <li><strong>付属品</strong>：マウスピース・リガチャー・キャップ・ケースをそろえます。島村楽器は付属品の欠品を別途減額としています。</li>
          <li><strong>調整の状態</strong>：島村楽器は、再販時に修理や調整が必要な場合はその費用を買取価格から差し引くと案内しています。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          ヤナギサワ全体は<Link href="/articles/yanagisawa-kaitori/" className="text-accent underline">ヤナギサワ買取相場ガイド</Link>、
          A-WO10 は<Link href="/articles/yanagisawa-awo10-kaitori/" className="text-accent underline">ヤナギサワ AWO10買取ガイド</Link>、
          仕上げによる違いは<Link href="/articles/lacquer-silver-plate-kaitori/" className="text-accent underline">ラッカーと銀メッキの買取価格の違い</Link>で整理しています。
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
          currentSlug="yanagisawa-wo2-kaitori"
          relatedSlugs={["saxophone-kaitori", "yanagisawa-kaitori", "yanagisawa-awo10-kaitori", "lacquer-silver-plate-kaitori", "mouthpiece-kaitori", "selmer-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

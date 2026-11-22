import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-23 深夜02時の回）「ラッカー メッキ 違い」。査定への影響（掲示買取価格の差）として書く。
// 一次データ:
//   島村楽器 買取価格検索 型番「YAS」「YTS」「YTR」「WO2」（2026-11-23 取得）
//     → 同じ型番・同じ製造期間（またはシリアル範囲）でラッカーと銀メッキの両方が掲示されている36組を当サイトで突き合わせ。
//       製造期間の表記がない行と表記がある行は組にしていない（YTR-850S・850GS など）。
// メーカーの公式（2026-11-23 取得）: ヤマハ YAS-62・YTS-62・YTR-8335・トランペット製品一覧（仕上げの説明・希望小売価格）、
//   ヤナギサワ A-WO2・S-WO2・T-WO2・A-WO20（仕上げ別の標準価格）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月23日";
const SHIMA = (m: string) => `https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=${m}&num=100&pg=1`;
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const YAMAHA_YAS62 = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/saxophones/yas-62/";
const YAMAHA_8335 = "https://jp.yamaha.com/musical-instruments/brass-woodwinds/products/trumpets/bb-trumpets/ytr-8335-02/";
const YANA_A_WO2 = "https://www.yanagisawasax.co.jp/saxophones/view/829";
const YANA_A_WO20 = "https://www.yanagisawasax.co.jp/saxophones/view/830";

// 新品の価格差と、島村楽器の掲示（A）の差
const RETAIL: { model: string; retail: string; retailDiff: string; shima: string; shimaDiff: string }[] = [
  { model: "ヤマハ YAS-62 → YAS-62S", retail: "440,000円 → 528,000円", retailDiff: "+20.0%", shima: "95,000円 → 119,000円（62NM → 62SNM）", shimaDiff: "+25.3%" },
  { model: "ヤマハ YTR-8335 → YTR-8335S", retail: "467,500円 → 495,000円", retailDiff: "+5.9%", shima: "70,000円 → 75,000円（2013年〜）", shimaDiff: "+7.1%" },
  { model: "ヤマハ YTR-8335G → YTR-8335GS", retail: "473,000円 → 500,500円", retailDiff: "+5.8%", shima: "70,000円 → 75,000円（2013年〜）", shimaDiff: "+7.1%" },
  { model: "ヤナギサワ A-WO2 → A-WO2SP", retail: "506,000円 → 770,000円", retailDiff: "+52.2%", shima: "166,000円 → 131,000円", shimaDiff: "−21.1%" },
  { model: "ヤナギサワ A-WO20 → A-WO20S", retail: "693,000円 → 957,000円", retailDiff: "+38.1%", shima: "227,000円 → 199,000円", shimaDiff: "−12.3%" },
];

// 島村楽器の掲示（A）：同じ型番・同じ製造期間のラッカー／銀メッキ 36組（型番の表記は島村楽器の掲示に合わせた）
const PAIRS: { name: string; lac: string; sil: string; diff: string }[] = [
  { name: "YAS-62（1978〜1994年）", lac: "100,000円", sil: "100,000円", diff: "±0円" },
  { name: "YAS-62（2）（1994〜2002年）", lac: "105,000円", sil: "100,000円", diff: "−5,000円（−4.8%）" },
  { name: "YAS-62（3）", lac: "120,000円", sil: "130,000円", diff: "+10,000円（+8.3%）" },
  { name: "YAS-62G1（2002〜2003年）", lac: "108,000円", sil: "110,000円", diff: "+2,000円（+1.9%）" },
  { name: "YAS-62G1（2003〜2006年）", lac: "108,000円", sil: "120,000円", diff: "+12,000円（+11.1%）" },
  { name: "YAS-62G1（2006〜2013年）", lac: "110,000円", sil: "125,000円", diff: "+15,000円（+13.6%）" },
  { name: "YAS-62NM", lac: "95,000円", sil: "119,000円", diff: "+24,000円（+25.3%）" },
  { name: "YAS-82Z（2002〜2013年）", lac: "160,000円", sil: "150,000円", diff: "−10,000円（−6.2%）" },
  { name: "YAS-82Z（2）（2005〜2013年）", lac: "160,000円", sil: "160,000円", diff: "±0円" },
  { name: "YAS-855（1988〜2002年）", lac: "120,000円", sil: "150,000円", diff: "+30,000円（+25.0%）" },
  { name: "YAS-875（1988〜2002年）", lac: "110,000円", sil: "120,000円", diff: "+10,000円（+9.1%）" },
  { name: "YAS-875（2002〜2015年）", lac: "150,000円", sil: "160,000円", diff: "+10,000円（+6.7%）" },
  { name: "YAS-875EX（2002〜2015年）", lac: "160,000円", sil: "160,000円", diff: "±0円" },
  { name: "YTS-62（1979〜1994年）", lac: "100,000円", sil: "120,000円", diff: "+20,000円（+20.0%）" },
  { name: "YTS-62（2）（1994〜2002年）", lac: "110,000円", sil: "120,000円", diff: "+10,000円（+9.1%）" },
  { name: "YTS-62（3）", lac: "110,000円", sil: "140,000円", diff: "+30,000円（+27.3%）" },
  { name: "YTS-62G1（2002〜2003年）", lac: "110,000円", sil: "120,000円", diff: "+10,000円（+9.1%）" },
  { name: "YTS-62G1（2003〜2006年）", lac: "110,000円", sil: "120,000円", diff: "+10,000円（+9.1%）" },
  { name: "YTS-62G1（2006〜2013年）", lac: "110,000円", sil: "120,000円", diff: "+10,000円（+9.1%）" },
  { name: "YTS-82Z（2）", lac: "180,000円", sil: "180,000円", diff: "±0円" },
  { name: "YTS-875（1990〜2002年）", lac: "185,000円", sil: "185,000円", diff: "±0円" },
  { name: "YTS-875EX", lac: "200,000円", sil: "210,000円", diff: "+10,000円（+5.0%）" },
  { name: "YTR-8335（1981〜1986年）", lac: "75,000円", sil: "85,000円", diff: "+10,000円（+13.3%）" },
  { name: "YTR-8335（1997〜2013年）", lac: "70,000円", sil: "70,000円", diff: "±0円" },
  { name: "YTR-8335（2013年〜）", lac: "70,000円", sil: "75,000円", diff: "+5,000円（+7.1%）" },
  { name: "YTR-8335G（1997〜2013年）", lac: "70,000円", sil: "75,000円", diff: "+5,000円（+7.1%）" },
  { name: "YTR-8335G（2013年〜）", lac: "70,000円", sil: "75,000円", diff: "+5,000円（+7.1%）" },
  { name: "YTR-8335LA（2008年〜）", lac: "75,000円", sil: "85,000円", diff: "+10,000円（+13.3%）" },
  { name: "YTR-8335LA-02", lac: "132,000円", sil: "140,000円", diff: "+8,000円（+6.1%）" },
  { name: "YTR-8310Z（2005〜2018年）", lac: "67,000円", sil: "69,000円", diff: "+2,000円（+3.0%）" },
  { name: "YTR-8310Z//02（2018年〜）", lac: "75,000円", sil: "78,000円", diff: "+3,000円（+4.0%）" },
  { name: "YTR-850（2007年〜）", lac: "59,000円", sil: "63,000円", diff: "+4,000円（+6.8%）" },
  { name: "YTR-6335F（2020年〜）", lac: "100,000円", sil: "110,000円", diff: "+10,000円（+10.0%）" },
  { name: "YTR-8330EM", lac: "171,000円", sil: "153,000円", diff: "−18,000円（−10.5%）" },
  { name: "ヤナギサワ A-WO2", lac: "166,000円", sil: "131,000円", diff: "−35,000円（−21.1%）" },
  { name: "ヤナギサワ A-WO20", lac: "227,000円", sil: "199,000円", diff: "−28,000円（−12.3%）" },
];

const FAQ = [
  {
    q: "ラッカーと銀メッキでは、どちらが高く売れますか？",
    a: `島村楽器の掲示で、同じ型番・同じ製造期間のラッカーと銀メッキを比べられる36組では、銀メッキが高いのが25組、同額が6組、低いのが5組でした（${ASOF}確認）。差の中央値は約7%です。ヤマハのサックス・トランペットは銀メッキがやや高い傾向ですが、ヤナギサワの A-WO2・A-WO20 は銀メッキの方が低い掲示でした。`,
  },
  {
    q: "新品で高かった銀メッキは、その分高く売れますか？",
    a: "新品の価格差ほどの差はつかない場合があります。ヤナギサワ A-WO2 は銀メッキ（A-WO2SP）の標準価格がラッカーより264,000円高い一方、島村楽器の掲示はラッカー166,000円・銀メッキ131,000円で逆転していました。ヤマハ YAS-62 は新品で20.0%高く、掲示では25.3%高い結果でした。",
  },
  {
    q: "アンラッカーや金メッキの仕上げはどう評価されていますか？",
    a: "ヤマハはアンラッカー（UL）を YAS-62・82Z などに用意しています。島村楽器の掲示では YAS-82ZUL（2）が180,000円で、YAS-82Z（2）の160,000円より20,000円高い掲示でした。ヤナギサワ A-WO20 の金メッキ（GP）は404,000円で、ラッカー（227,000円）の約1.8倍です。",
  },
  {
    q: "ラッカーのはがれやメッキの変色は、どれくらい減額されますか？",
    a: "島村楽器の買取価格検索は状態を A・B・C の3ランクで掲示していますが、ラッカーのはがれやメッキの変色がどのランクに当たるかは記載されていません。今回の36組では、B ランクは A の8〜9割、C ランクは6〜8割でした。また、再販時に修理や調整が必要と判断された場合、その費用を買取価格から差し引くと案内しています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ラッカーと銀メッキの買取価格の違い", href: "/articles/lacquer-silver-plate-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/lacquer-silver-plate-kaitori/" },
  title: "ラッカーと銀メッキの違いで買取価格は変わる？｜島村楽器の掲示36組を比較【2026年11月】",
  description:
    "管楽器のラッカー仕上げと銀メッキ仕上げで買取価格がどう違うかを、島村楽器の掲示買取価格から同じ型番・同じ製造期間の36組を突き合わせて整理しました。ヤマハのサックス・トランペットとヤナギサワで傾向が異なる点、新品の価格差との比較も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ラッカーと銀メッキの違いで買取価格は変わる？｜島村楽器の掲示36組を比較【2026年11月】",
    description: "同じ型番・同じ製造期間の36組で、銀メッキが高い25組・同額6組・低い5組。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ラッカーと銀メッキの違いで買取価格は変わる？｜島村楽器の掲示36組を比較",
        datePublished: "2026-11-23",
        dateModified: "2026-11-23",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/lacquer-silver-plate-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ラッカーと銀メッキの買取価格の違い", item: "https://gakkikaitori-biyori.com/articles/lacquer-silver-plate-kaitori/" },
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
          ラッカーと銀メッキの違いで買取価格は変わる？｜島村楽器の掲示36組を比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索を当サイトで突き合わせ、仕上げの説明と新品の価格はメーカーの公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器の掲示買取価格（A ランク）で、同じ型番・同じ製造期間のラッカーと銀メッキを36組比べると、
            <strong>銀メッキが高いのが25組・同額が6組・低いのが5組</strong>で、差の中央値は約7%でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤマハのサックス・トランペットは銀メッキがやや高い傾向です。一方、ヤナギサワの A-WO2・A-WO20 は、新品では銀メッキの方が高いにもかかわらず、
            <strong>掲示買取価格は銀メッキの方が12〜21%低い</strong>結果でした。仕上げの差はメーカー・型番によって異なります。
          </p>
        </div>

        <h2 id="finish" className="text-xl font-bold mt-12 mb-4">ラッカー仕上げと銀メッキ仕上げ（メーカーの説明）</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>ヤマハのサックス</strong>：YAS-62 は「スタンダードなゴールドラッカー仕上げ」、YAS-62S は「やわらかな響きを与える銀メッキ」と説明されています。ほかにアンバーラッカー（62A）とアンラッカー（62UL）があります。</li>
          <li><strong>ヤマハのトランペット</strong>：Xeno の YTR-8335 は「イエローブラス、ゴールドブラスともにクリアラッカー、銀メッキ仕上げをラインナップ」しており、型番末尾の S が銀メッキです。</li>
          <li><strong>ヤナギサワ</strong>：A-WO2 はラッカー仕上と銀メッキ仕上（A-WO2SP）、A-WO20 はさらに金メッキ（GP）・ピンクゴールドメッキ（PGP）を用意しています（金メッキ・ピンクゴールドメッキは受注休止中）。</li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YAMAHA_YAS62} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ YAS-62</a>・
          <a href={YAMAHA_8335} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ YTR-8335</a>・
          <a href={YANA_A_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤナギサワ A-WO2</a>・
          <a href={YANA_A_WO20} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">A-WO20</a>（{ASOF}確認）。
        </p>

        <h2 id="retail" className="text-xl font-bold mt-12 mb-4">新品の価格差と、掲示買取価格の差</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ラッカー → 銀メッキ</th>
                <th className="text-left px-4 py-3 font-medium">新品（税込）</th>
                <th className="text-left px-4 py-3 font-medium">差</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器の掲示（A）</th>
                <th className="text-left px-4 py-3 font-medium">差</th>
              </tr>
            </thead>
            <tbody>
              {RETAIL.map((r) => (
                <tr key={r.model} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3">{r.retail}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.retailDiff}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.shimaDiff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ヤマハの3組は、新品の価格差（6〜20%）と同じ程度の差が掲示買取価格にも表れていました。
          ヤナギサワは銀メッキの新品価格がラッカーより38〜52%高いものの、掲示買取価格では逆転しています。
          新品の価格は現行品のもので、掲示の行は製造期間が対応する行を選びました（YAS-62 は島村楽器の「62NM」「62SNM」の行）。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YAMAHA_YAS62} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ YAS-62</a>・
          <a href={YAMAHA_8335} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ YTR-8335</a>・
          <a href={YANA_A_WO2} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤナギサワ A-WO2</a>・
          <a href={YANA_A_WO20} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">A-WO20</a>・
          島村楽器 買取価格検索（
          <a href={SHIMA("YAS")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">YAS</a>・
          <a href={SHIMA("YTR")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">YTR</a>・
          <a href={SHIMA("WO2")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">WO2</a>）
          （{ASOF}確認）。
        </p>

        <h2 id="pairs" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示36組（Aランク）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番（製造期間）</th>
                <th className="text-left px-4 py-3 font-medium">ラッカー</th>
                <th className="text-left px-4 py-3 font-medium">銀メッキ</th>
                <th className="text-left px-4 py-3 font-medium">銀メッキ − ラッカー</th>
              </tr>
            </thead>
            <tbody>
              {PAIRS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.lac}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.sil}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          差が大きかったのは YTS-62（3）の+30,000円（+27.3%）、YAS-62NM の+24,000円（+25.3%）、YAS-855 の+30,000円（+25.0%）です。
          銀メッキが低かったのは、ヤナギサワ2組のほか、YTR-8330EM（−10.5%）、YAS-82Z（2002〜2013年・−6.2%）、YAS-62（2）（−4.8%）でした。
          YTS-875・YAS-875EX・YTR-8335（1997〜2013年）などの6組は同額です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：島村楽器 買取価格検索（
          <a href={SHIMA("YAS")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">YAS</a>・
          <a href={SHIMA("YTS")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">YTS</a>・
          <a href={SHIMA("YTR")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">YTR</a>・
          <a href={SHIMA("WO2")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">WO2</a>）
          （{ASOF}確認）を当サイトで突き合わせました。製造期間の表記がない行と表記がある行は組にしていません。掲示額は目安で、最終的な買取価格は現物確認のうえで決まります。
        </p>

        <h2 id="condition" className="text-xl font-bold mt-12 mb-4">仕上げの状態と査定</h2>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の買取価格検索は、状態を A・B・C の3ランクで掲示しています。上の36組の各行では、B ランクは A の8〜9割、C ランクは6〜8割でした。
          ただし、ラッカーのはがれやメッキの変色がどのランクに当たるかは記載されていません。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>島村楽器は高額買取のコツとして、汚れやホコリをできる限り落とすことを挙げています。</li>
          <li>再販時に修理や調整が必要と判断された場合、その費用は買取価格から差し引かれます。</li>
          <li>付属品の欠品は別途減額です。ケース・ネック・マウスピースなどをそろえます。</li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>・
          <a href={SHIMA("YAS")} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>（{ASOF}確認）。
        </p>

        <p className="text-sm leading-relaxed mb-10">
          型番別の相場は<Link href="/articles/yamaha-trumpet-kaitori/" className="text-accent underline">ヤマハのトランペットの買取相場</Link>、
          <Link href="/articles/yanagisawa-wo2-kaitori/" className="text-accent underline">ヤナギサワ WO2の買取相場</Link>、
          <Link href="/articles/yamaha-yas62-kaitori/" className="text-accent underline">ヤマハ YAS-62の買取相場</Link>、
          サックス全般は<Link href="/articles/saxophone-kaitori/" className="text-accent underline">サックス買取ガイド</Link>で整理しています。
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
          currentSlug="lacquer-silver-plate-kaitori"
          relatedSlugs={["kangakki-kaitori", "saxophone-kaitori", "trumpet-kaitori", "yamaha-trumpet-kaitori", "yanagisawa-wo2-kaitori", "yamaha-yas62-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜04時の回）「サイレントギター 買取」。
// 一次データ:
//   島村楽器 買取価格検索 型番「SLG」（2026-11-20 取得・17行のうちヤマハ15行。他社2行は型番に SLG を含む別製品なので除外）
//   ヤフオクの落札済み検索「サイレントギター」（2026-11-20 取得・重複除去200件）→ タイトルに SLG の型番がある本体139件を型番別に集計
//     （ピックガード・ケース単体・電源アダプター単体は除外）。ほかのメーカーは名称で数えた。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
// 業者・メーカーの公式（2026-11-20 取得）:
//   ヤマハ https://jp.yamaha.com/musical-instruments/guitars-basses-amps/products/silent-guitar/（あゆみ・現行は SLG200 Series）
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=guitar&small-cat=silent-guitar（事例4件）
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/tentou/（ACアダプター等の欠品）
//   島村楽器 https://www.shimamura.co.jp/used/（支払いは口座への入金）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=SLG&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const YAMAHA_SLG = "https://jp.yamaha.com/musical-instruments/guitars-basses-amps/products/silent-guitar/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=guitar&small-cat=silent-guitar";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/tentou/";

// 型番・発売年（ヤマハ「サイレントギターのあゆみ」）・島村の掲示（A/B/C）・ヤフオク落札（当サイト集計）
const ROWS: { model: string; year: string; strings: string; shima: string; yahoo: string }[] = [
  { model: "SLG200S", year: "2015年", strings: "スチール弦", shima: "35,000円／28,000円／19,000円", yahoo: "46件・中央値38,500円（24,090〜50,000円）" },
  { model: "SLG200N・SLG200NW", year: "2015年・2017年", strings: "ナイロン弦", shima: "N 27,000円／NW 29,000円（A）", yahoo: "16件・中央値41,175円（19,600〜50,000円）" },
  { model: "SLG110S", year: "2010年", strings: "スチール弦", shima: "23,000円／18,000円／13,000円", yahoo: "10件・中央値22,662円" },
  { model: "SLG110N", year: "2010年", strings: "ナイロン弦", shima: "13,000円／10,000円／6,000円", yahoo: "5件・中央値22,110円" },
  { model: "SLG130NW", year: "2010年", strings: "ナイロン弦", shima: "23,000円／18,000円／11,000円", yahoo: "4件・中央値24,586円" },
  { model: "SLG120NW", year: "2005年", strings: "ナイロン弦", shima: "25,000円／19,000円／12,000円", yahoo: "4件・中央値25,800円" },
  { model: "SLG100S", year: "2002年", strings: "スチール弦", shima: "27,000円／22,000円／15,000円", yahoo: "24件・中央値18,700円（8,250〜30,800円）" },
  { model: "SLG100N・SLG100NW", year: "2001年・2003年", strings: "ナイロン弦", shima: "各20,000円（A）", yahoo: "24件・中央値16,920円（11,265〜34,900円）" },
];

const FAQ = [
  {
    q: "サイレントギターはいくらで売れますか？",
    a: `島村楽器の買取価格検索では、ヤマハ SLG200S が Aランク35,000円・Cランク19,000円、初代の SLG100N が Aランク20,000円でした（${ASOF}確認）。ヤフオクでは SLG200S の落札46件の中央値が38,500円でした。`,
  },
  {
    q: "古い SLG100 シリーズでも買い取ってもらえますか？",
    a: "島村楽器は SLG100S・SLG100N・SLG100NW などの旧型番にも買取価格を掲示しています。ヤマハの製品ページでは現行の製品一覧が SLG200 Series のみで、SLG100・110・120・130 は旧型番にあたります。",
  },
  {
    q: "電源アダプターやフレームをなくしていても売れますか？",
    a: "イシバシ楽器は、動作チェックに必要なもの（専用のACアダプター等）が欠品している場合は買取できない場合があり、付属品の欠品は減額すると案内しています。取り外し式のフレームや電源アダプターは、本体と一緒に査定に出してください。",
  },
  {
    q: "ヤマハ以外のサイレントギターは売れますか？",
    a: `ヤフオクでは ARIA Sinsonido（19件・中央値10,780円）、Donner HUSH（10件・中央値18,569円）、ENYA NEXG（5件・中央値35,000円）が落札されていました（${ASOF}取得）。楽器の買取屋さんも ARIA の買取事例（5,750円）を公開しています。`,
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "サイレントギターの買取", href: "/articles/silent-guitar-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/silent-guitar-kaitori/" },
  title: "サイレントギターの買取相場｜ヤマハ SLG の型番別・島村楽器の掲示と落札139件【2026年11月】",
  description:
    "ヤマハのサイレントギター（SLG100〜SLG200）の買取相場を型番別に整理しました。島村楽器が掲示する15型番の買取価格と、ヤフオクの落札139件の中央値、発売年、付属品の扱いを公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "サイレントギターの買取相場｜ヤマハ SLG の型番別【2026年11月】",
    description: "SLG200S・SLG200N・SLG100 など型番別の掲示買取価格と落札価格、付属品の扱い。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "サイレントギターの買取相場｜ヤマハ SLG の型番別・島村楽器の掲示と落札139件",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/silent-guitar-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "サイレントギターの買取", item: "https://gakkikaitori-biyori.com/articles/silent-guitar-kaitori/" },
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
          サイレントギターの買取相場｜ヤマハ SLG の型番別・島村楽器の掲示と落札139件
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索とヤフオクの落札データを当サイトで集計し、発売年・付属品の扱いは各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤマハのサイレントギターは、現行の<strong>SLG200 シリーズ（2015年〜）が島村楽器の掲示でAランク27,000〜35,000円</strong>、
            2001〜2010年発売の SLG100・110・120・130 が13,000〜28,000円でした。ヤフオクの落札でも SLG200S（46件）の中央値は38,500円、SLG100S（24件）は18,700円と、世代で2倍前後の差があります。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            島村楽器は旧型番も含めてヤマハの15型番に買取価格を掲示しています。取り外し式のフレームや電源アダプターがそろっているかで査定が変わるため、売る前に付属品を確認しておきます。
          </p>
        </div>

        <h2 id="models" className="text-xl font-bold mt-12 mb-4">型番別の掲示買取価格と落札価格</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-left px-4 py-3 font-medium">発売</th>
                <th className="text-left px-4 py-3 font-medium">弦</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器の掲示（A／B／C）</th>
                <th className="text-left px-4 py-3 font-medium">ヤフオク落札</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.model} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{r.model}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.year}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.strings}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                  <td className="px-4 py-3">{r.yahoo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器はこのほか、SLG100SJ（28,000円）・SLG110SFM（28,000円）・SLG110SQM（28,000円）・SLG110NFM（23,000円）・SLG110NQM（22,000円）にも掲示があります（いずれもAランク）。
          区分はスチール弦が「エレアコギター」、ナイロン弦が「エレガットギター」です。
          ヤマハ15型番の B ランクは A の75〜82%、C ランクは46〜57%で、SLG200S では A と C の差が16,000円ありました。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          SLG200S は、ヤフオクの落札中央値（38,500円）が島村楽器の A ランク（35,000円）を上回っていました。一方、SLG100S は落札中央値（18,700円）が島村楽器の A ランク（27,000円）を下回っており、
          旧型番は店の掲示のほうが高い場合があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（型番「SLG」）</a>・
          <a href={YAMAHA_SLG} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ サイレントギター（あゆみ）</a>
          （{ASOF}確認）。ヤフオクは落札済み検索「サイレントギター」（{ASOF}取得・重複を除いて200件）のうち、タイトルに SLG の型番がある本体139件を型番別に集計しました。
          ピックガード・ケース単体・電源アダプター単体は除外し、「SLG200」とだけ書かれた6件（中央値31,460円）は表に入れていません。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">買取業者の公開事例と条件</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>：
            サイレントギターの買取事例を4件公開（ヤマハ 13,800円〈2026年7月・鳥取県米子市〉、25,000円〈2018年・栃木県〉、25,000円〈2018年・福島県〉、ARIA 5,750円〈2025年12月・富山県魚津市〉）。型番は記載されていません
          </li>
          <li>
            <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器</a>：
            動作チェックに必要なもの（専用のACアダプター等）が欠品している場合は買取できない場合があり、付属品の欠品は減額と案内
          </li>
          <li>
            <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器</a>：
            買取代金は指定口座への入金で、現金での支払いは行っていません。店舗買取は通常買取価格より5%アップと案内しています
          </li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">出典：各社公式サイト（{ASOF}取得）。</p>

        <h2 id="other-brands" className="text-xl font-bold mt-12 mb-4">ヤマハ以外のサイレントギター</h2>
        <p className="text-sm leading-relaxed mb-4">
          同じ検索で落札されたヤマハ以外の製品は、ARIA Sinsonido（シンソニード）19件・中央値10,780円、Donner HUSH シリーズ10件・中央値18,569円、ENYA NEXG シリーズ5件・中央値35,000円でした。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：上と同じ200件のうち、タイトルに製品名（Sinsonido／HUSH／NEXG）がある出品を数えました（{ASOF}取得）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>型番</strong>：SLG100S と SLG200S では掲示買取価格が8,000円、落札中央値は約2万円違います。本体の表示で型番（S＝スチール弦、N＝ナイロン弦、NW＝ナイロン弦ワイドネック）を確かめます。
          </li>
          <li>
            <strong>付属品</strong>：取り外し式のフレーム、電源アダプター、ソフトケース、取扱説明書をそろえます。
          </li>
          <li>
            <strong>動作</strong>：ヘッドホン出力・ライン出力・エフェクト（リバーブ等）が動くかを確かめておくと、査定の説明がしやすくなります。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          アコースティックギター全般は<Link href="/articles/acoustic-guitar-kaitori/" className="text-accent underline">アコギ買取ガイド</Link>、
          ナイロン弦のギターは<Link href="/articles/classic-guitar-kaitori/" className="text-accent underline">クラシックギター買取ガイド</Link>、
          付属品の扱いは<Link href="/articles/gakki-fuzokuhin-kaitori/" className="text-accent underline">付属品の重要性ガイド</Link>で整理しています。
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
          currentSlug="silent-guitar-kaitori"
          relatedSlugs={["guitar-kaitori", "acoustic-guitar-kaitori", "classic-guitar-kaitori", "yamaha-kaitori", "gakki-fuzokuhin-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

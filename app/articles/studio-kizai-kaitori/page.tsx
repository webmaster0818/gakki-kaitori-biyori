import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-25 深夜02時の回）「スタジオ機材 買取」。
// 一次データ:
//   島村楽器 買取価格検索 cat=16「PA機器・音響機器」全866行（2026-11-25 取得）を楽器区分・ブランド別に集計。
//   島村楽器 PA機材の買取ページ（申込時の注意事項・2021年の買取実績）
//   楽器の買取屋さん「レコーディング・PA・DAW」の買取価格相場（公開事例43件の区分別）
//   イシバシ楽器 楽器買取（音響機器・PAシステム・マイクロフォン・ヘッドフォンの買取）
// 音楽制作・配信機器（cat=18：インターフェース・MIDIキーボード）は dtm-kizai-kaitori で集計済みのため、ここでは扱わない。
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月25日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=16&inst=&brand=&model=&num=100&pg=1";
const SHIMA_PA = "https://www.shimamura.co.jp/used/gakki/pa/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=recording-equipment";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/";

const KINDS: { kind: string; n: string; median: string; max: string; over100k: string }[] = [
  { kind: "マイク", n: "269行", median: "21,000円", max: "616,000円（SONY C-800G/9X）", over100k: "27行" },
  { kind: "スピーカー（モニタースピーカーなど）", n: "264行", median: "24,000円", max: "540,000円（amphion One25A）", over100k: "19行" },
  { kind: "その他PA機器・音響機器（プリアンプ・EQ・コンプレッサーなど）", n: "175行", median: "37,000円", max: "401,000円（AMS Neve 1073OPX）", over100k: "44行" },
  { kind: "ミキサー", n: "112行", median: "26,000円", max: "297,000円", over100k: "8行" },
  { kind: "ヘッドホン・イヤホン", n: "46行", median: "16,500円", max: "177,000円", over100k: "4行" },
];

const BRANDS: { brand: string; n: string; median: string }[] = [
  { brand: "NEUMANN（ノイマン）", n: "16行", median: "177,500円" },
  { brand: "Solid State Logic", n: "10行", median: "123,000円" },
  { brand: "GENELEC（ジェネレック）", n: "55行", median: "54,000円" },
  { brand: "ADAM Audio", n: "21行", median: "26,000円" },
  { brand: "SHURE（シュア）", n: "63行", median: "19,000円" },
  { brand: "YAMAHA（ヤマハ）", n: "104行", median: "18,500円" },
  { brand: "audio-technica", n: "30行", median: "11,500円" },
  { brand: "PreSonus（プレソナス）", n: "41行", median: "9,000円" },
];

const MODELS: { model: string; a: string; b: string; c: string }[] = [
  { model: "NEUMANN U 87 Ai（マイク）", a: "300,000", b: "259,000", c: "200,000" },
  { model: "GENELEC 8040B（スピーカー）", a: "69,000", b: "59,000", c: "44,000" },
  { model: "NEUMANN TLM 102（マイク）", a: "61,000", b: "53,000", c: "40,000" },
  { model: "GENELEC 8030C（スピーカー）", a: "39,000", b: "34,000", c: "25,000" },
  { model: "SHURE SM7B（マイク）", a: "28,000", b: "24,000", c: "18,000" },
  { model: "YAMAHA HS8（スピーカー）", a: "15,000", b: "13,000", c: "9,000" },
  { model: "SHURE BETA 58A（マイク）", a: "11,000", b: "10,000", c: "7,000" },
  { model: "YAMAHA HS5（スピーカー）", a: "7,000", b: "6,000", c: "4,000" },
];

const FAQ = [
  {
    q: "スタジオ機材はどこで売れますか？",
    a: `島村楽器はPA機器・音響機器の買取価格を866行掲示しており、イシバシ楽器は音響機器・PAシステム・マイクロフォン・ヘッドフォンの買取を案内しています。楽器の買取屋さんは「レコーディング・PA・DAW」の区分で43件の買取事例を公開しています（${ASOF}確認）。`,
  },
  {
    q: "オーディオ用のアンプやスピーカーも買い取ってもらえますか？",
    a: "島村楽器はPA機材の申込時の注意事項で、メディアプレーヤーやプリメインアンプなどのピュアオーディオ機器とホームシアターの買取は行っていないとしています。モニタースピーカーなど制作・PA用の機器が対象です。",
  },
  {
    q: "マイクは保証書がないと売れませんか？",
    a: "島村楽器の掲示では、ノイマン5型番・シュア3型番の型番欄に「保証書など正規品購入履歴確認必須」と書かれています。それ以外の型番に同じ注記はありませんが、保証書や購入時の書類があればそろえておきます。",
  },
  {
    q: "傷があるとどのくらい下がりますか？",
    a: "島村楽器の掲示866行では、Bランク（多少の傷や汚れ）はAランクの約84%、Cランク（使用感があり傷や汚れが目立つ）は約59%が中央値でした。付属品の欠品は別途減額です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "スタジオ機材の買取", href: "/articles/studio-kizai-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/studio-kizai-kaitori/" },
  title: "スタジオ機材の買取相場｜島村楽器の掲示866行をマイク・モニター・アウトボード別に集計【2026年11月】",
  description:
    "スタジオ機材（マイク・モニタースピーカー・プリアンプやコンプレッサー・ミキサー・ヘッドホン）の買取相場を、島村楽器の買取価格検索「PA機器・音響機器」866行から区分別・ブランド別に集計しました。買取の対象外になる機器と、事例を公開している業者も確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "スタジオ機材の買取相場｜島村楽器の掲示866行を区分別に集計【2026年11月】",
    description: "アウトボードの中央値37,000円・ミキサー26,000円・スピーカー24,000円・マイク21,000円（Aランク）。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "スタジオ機材の買取相場｜島村楽器の掲示866行をマイク・モニター・アウトボード別に集計",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/studio-kizai-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "スタジオ機材の買取", item: "https://gakkikaitori-biyori.com/articles/studio-kizai-kaitori/" },
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
          スタジオ機材の買取相場｜島村楽器の掲示866行をマイク・モニター・アウトボード別に集計
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に島村楽器の買取価格検索「PA機器・音響機器」の掲示を全件取得し、当サイトで集計しています。業者の取り扱いは各社の公式サイトで確認しました。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器の買取価格検索「PA機器・音響機器」には866行の掲示があり、Aランクの中央値は<strong>プリアンプ・EQ・コンプレッサーなどのアウトボードが37,000円</strong>、ミキサー26,000円、スピーカー24,000円、マイク21,000円、ヘッドホン16,500円です。
            866行のうち102行が10万円以上、176行が1万円未満でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ブランドではノイマン（中央値177,500円）とSolid State Logic（123,000円）が高く、ジェネレックのモニタースピーカーは55行で中央値54,000円です。
            なお島村楽器は、プリメインアンプなどのピュアオーディオ機器とホームシアターを買取対象外としています。
          </p>
        </div>

        <h2 id="kinds" className="text-xl font-bold mt-12 mb-4">機材の区分別の買取価格（島村楽器の掲示・Aランク）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">区分</th>
                <th className="text-left px-4 py-3 font-medium">掲示</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">最高</th>
                <th className="text-left px-4 py-3 font-medium">10万円以上</th>
              </tr>
            </thead>
            <tbody>
              {KINDS.map((r) => (
                <tr key={r.kind} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.kind}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.n}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.median}</td>
                  <td className="px-4 py-3">{r.max}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.over100k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          10万円以上の割合が最も高いのはアウトボード（175行中44行）で、AMS Neve 1073 系・Rupert Neve Designs・API・WesAudio などのプリアンプやEQ・コンプレッサーが上位に並びます。
          全866行では、Bランクの価格はAランクの約84%、Cランクは約59%が中央値でした。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（PA機器・音響機器）</a>（{ASOF}確認・866行）。
          島村楽器は表示の買取価格を目安とし、最終的な価格は現物確認の上で決めるとしています。インターフェース・MIDIキーボードなど「音楽制作・配信機器」の掲示は<Link href="/articles/dtm-kizai-kaitori/" className="text-accent underline">DTM機材の買取相場</Link>で集計しています。
        </p>

        <h2 id="brands" className="text-xl font-bold mt-12 mb-4">ブランド別の買取価格（島村楽器の掲示・Aランクの中央値）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">掲示</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
              </tr>
            </thead>
            <tbody>
              {BRANDS.map((r) => (
                <tr key={r.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.brand}</td>
                  <td className="px-4 py-3">{r.n}</td>
                  <td className="px-4 py-3">{r.median}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-base font-bold mt-8 mb-3">定番機種の掲示</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-left px-4 py-3 font-medium">Aランク</th>
                <th className="text-left px-4 py-3 font-medium">Bランク</th>
                <th className="text-left px-4 py-3 font-medium">Cランク</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((r) => (
                <tr key={r.model} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3">{r.a}円</td>
                  <td className="px-4 py-3">{r.b}円</td>
                  <td className="px-4 py-3">{r.c}円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          島村楽器のPA機材ページには2021年の買取実績として YAMAHA HS8 18,000円・HS5 16,000円、NEUMANN TLM102 22,000円が載っています。実績には状態や本数の記載がなく、現在の掲示とは単純に比べられません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">スタジオ機材の買取の扱い（業者別）</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>島村楽器</strong>：PA機器・音響機器の買取価格を866行掲示。店舗買取は通常の買取価格より5%アップ。ピュアオーディオ機器・ホームシアターは対象外</li>
          <li><strong>イシバシ楽器</strong>：買取の案内に「音響機器、PAシステム、マイクロフォン、ヘッドフォンなどの買取」と記載</li>
          <li><strong>楽器の買取屋さん</strong>：「レコーディング・PA・DAW」の公開事例43件（中間価格50,400円）。区分別ではインターフェース10件 45,900円、PAミキサー9件 53,100円（最高250,000円）、マイク5件 43,000円、サンプラー4件 53,000円。事例の多くは2019年以前で、新しいものは2024年7〜8月のサンプラー3件</li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_PA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 PA機材の買取</a>・
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 楽器買取</a>・
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん レコーディング・PA・DAWの買取事例</a>（{ASOF}確認）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">まとめて売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番の一覧</strong>：機材ごとにブランドと型番を書き出します。島村楽器の買取価格検索は区分・ブランド・型番で引けます。</li>
          <li><strong>本数・ペア</strong>：モニタースピーカーは掲示が1本単位かペアかを申し込み時に確認します。</li>
          <li><strong>保証書・購入履歴</strong>：ノイマン・シュアの一部のマイクは、島村楽器の掲示に正規品の購入履歴の確認が必須と書かれています。</li>
          <li><strong>付属品</strong>：電源ケーブル・ラックの耳・ショックマウント・元箱をそろえます。島村楽器は付属品の欠品を別途減額としています。</li>
          <li><strong>大型機材</strong>：大型のミキサーやラック一式は、島村楽器では出張買取（大型楽器・複数楽器向け）が案内されています。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          マイク単体は<Link href="/articles/microphone-kaitori/" className="text-accent underline">マイク買取</Link>、
          ミキサーは<Link href="/articles/mixer-kaitori/" className="text-accent underline">ミキサー買取</Link>、
          インターフェースは<Link href="/articles/audio-interface-kaitori/" className="text-accent underline">オーディオインターフェース買取</Link>で詳しく整理しています。
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
          currentSlug="studio-kizai-kaitori"
          relatedSlugs={["microphone-kaitori", "dtm-kizai-kaitori", "mixer-kaitori", "audio-interface-kaitori", "behringer-kaitori", "dj-kizai-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

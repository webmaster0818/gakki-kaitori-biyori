import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-25 深夜02時の回）「ベリンガー 買取」。
// 一次データ:
//   島村楽器 買取価格検索 brand=1060（BEHRINGER）: cat=13 シンセサイザー 21行・cat=16 PA機器・音響機器 16行（2026-11-25 全行取得）。
//     ほかのカテゴリー（エフェクター cat=7・音楽制作・配信機器 cat=18 など）のブランド選択肢にベリンガーはない（get-options.php で確認）。
//   ヤフオクの落札済み検索「ベリンガー」「BEHRINGER」（2026-11-25 取得・重複を除いて273件）→ ベリンガー製品の単品189件を当サイトで集計。
//     除外：ジャンク・新品・未使用・まとめ/セット/複数台・ケーブル/電源/ケース類・TC Electronic/MIDAS など同グループ他ブランド・メガネ（bellinger）・ステッカー。
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月25日";
const SHIMA_SYN = "https://www.shimamura.co.jp/used/search.html?cat=13&inst=&brand=1060&model=&num=100&pg=1";
const SHIMA_PA = "https://www.shimamura.co.jp/used/search.html?cat=16&inst=&brand=1060&model=&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";

const SYN: { model: string; a: string; b: string; c: string }[] = [
  { model: "SYSTEM 55", a: "148,000", b: "119,000", c: "74,000" },
  { model: "JN-80", a: "83,000", b: "74,000", c: "60,000" },
  { model: "UB-Xa", a: "75,000", b: "62,000", c: "43,000" },
  { model: "SYSTEM 15", a: "64,000", b: "51,000", c: "32,000" },
  { model: "SYSTEM 35", a: "57,000", b: "48,000", c: "33,000" },
  { model: "UB-Xa D", a: "49,000", b: "41,000", c: "29,000" },
  { model: "BMX（テーブルトップ）", a: "47,000", b: "41,000", c: "32,000" },
  { model: "POLY D", a: "34,000", b: "28,000", c: "19,000" },
  { model: "LM DRUM（テーブルトップ）", a: "25,000", b: "21,000", c: "14,000" },
  { model: "PROTON", a: "23,000", b: "19,000", c: "13,000" },
  { model: "MonoPoly", a: "22,000", b: "17,000", c: "11,000" },
  { model: "PRO-800", a: "19,000", b: "16,000", c: "11,000" },
  { model: "RD-9", a: "14,000", b: "11,000", c: "7,000" },
  { model: "2-XM", a: "21,000", b: "18,000", c: "12,000" },
  { model: "MODEL 15", a: "15,000", b: "13,000", c: "9,000" },
  { model: "SolinaStringEnsemble", a: "14,000", b: "12,000", c: "8,000" },
  { model: "CAT", a: "12,000", b: "10,000", c: "7,000" },
  { model: "KOBOL EXPANDER", a: "12,000", b: "10,000", c: "7,000" },
  { model: "EDGE", a: "11,000", b: "9,000", c: "6,000" },
  { model: "SKIES", a: "6,000", b: "5,000", c: "3,000" },
  { model: "STEPS", a: "6,000", b: "5,000", c: "3,000" },
];

const PA: { model: string; kind: string; a: string }[] = [
  { model: "1273", kind: "その他PA機器・音響機器", a: "39,000" },
  { model: "369", kind: "その他PA機器・音響機器", a: "32,000" },
  { model: "676", kind: "その他PA機器・音響機器", a: "32,000" },
  { model: "NX6000", kind: "その他PA機器・音響機器", a: "21,000" },
  { model: "NX3000D", kind: "その他PA機器・音響機器", a: "17,000" },
  { model: "PMP500MP3", kind: "ミキサー", a: "13,000" },
  { model: "B108D EUROLIVE", kind: "スピーカー", a: "10,000" },
  { model: "P16-HQ", kind: "ミキサー", a: "10,000" },
  { model: "1204USB", kind: "ミキサー", a: "8,000" },
  { model: "B212XL", kind: "スピーカー", a: "5,000" },
  { model: "73", kind: "その他PA機器・音響機器", a: "13,000" },
  { model: "NX1000", kind: "その他PA機器・音響機器", a: "12,000" },
  { model: "SpringReverb 646", kind: "その他PA機器・音響機器", a: "10,000" },
  { model: "B215D", kind: "スピーカー", a: "9,000" },
  { model: "B215XL", kind: "スピーカー", a: "8,000" },
  { model: "XENYX1832FX", kind: "ミキサー", a: "4,000" },
];

const FAQ = [
  {
    q: "ベリンガーの機材は買い取ってもらえますか？",
    a: `島村楽器の買取価格検索には、ベリンガーのシンセサイザー21型番とPA機器・音響機器16型番の買取価格が掲示されています（${ASOF}確認）。エフェクターやオーディオインターフェースのカテゴリーにはベリンガーの掲示がなく、それらの機種は店舗やWeb査定で個別に確認します。`,
  },
  {
    q: "ベリンガーのミキサーはいくらで売れますか？",
    a: "島村楽器の掲示（Aランク）は、XENYX1832FX が4,000円、1204USB が8,000円、P16-HQ が10,000円、パワードミキサー PMP500MP3 が13,000円です。ヤフオクでも XENYX シリーズ18件の落札中央値は3,450円でした。",
  },
  {
    q: "ベリンガーで高く売れるのはどの製品ですか？",
    a: "島村楽器の掲示ではアナログシンセサイザーが高く、SYSTEM 55 が148,000円、JN-80 が83,000円、UB-Xa が75,000円です（Aランク）。ヤフオクでもシンセサイザー・リズムマシン10件の落札中央値は27,235円で、それ以外の178件（4,000円）を大きく上回っています。",
  },
  {
    q: "傷や使用感があるとどのくらい下がりますか？",
    a: "島村楽器の掲示37型番では、Bランク（多少の傷や汚れ）はAランクの約83%、Cランク（使用感があり傷や汚れが目立つ）は約56%が中央値でした。付属品の欠品は別途減額です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ベリンガーの買取", href: "/articles/behringer-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/behringer-kaitori/" },
  title: "ベリンガー（BEHRINGER）の買取価格｜島村楽器の掲示37型番と落札189件【2026年11月】",
  description:
    "ベリンガー（BEHRINGER）の買取価格を、島村楽器の買取価格検索に掲示されたシンセサイザー21型番・PA機器16型番と、ヤフオクの落札189件から整理しました。シンセサイザーとミキサー・エフェクターで価格帯が大きく異なります。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ベリンガー（BEHRINGER）の買取価格｜島村楽器の掲示37型番と落札189件【2026年11月】",
    description: "掲示の中央値はシンセ22,000円・PA機器11,000円。落札はシンセ以外の中央値4,000円。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ベリンガー（BEHRINGER）の買取価格｜島村楽器の掲示37型番と落札189件",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/behringer-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ベリンガーの買取", item: "https://gakkikaitori-biyori.com/articles/behringer-kaitori/" },
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
          ベリンガー（BEHRINGER）の買取価格｜島村楽器の掲示37型番と落札189件
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に島村楽器の買取価格検索のベリンガー掲示を全件取得し、同日のヤフオクの落札データとあわせて当サイトで集計しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器の買取価格検索には、ベリンガーの<strong>シンセサイザー21型番（Aランクの中央値22,000円）</strong>と<strong>PA機器・音響機器16型番（同11,000円）</strong>が掲示されています。
            最も高いのはモジュラーシンセサイザー SYSTEM 55 の148,000円、最も低いのはミキサー XENYX1832FX の4,000円です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクのベリンガー製品189件では、落札の中央値が4,200円で、半数を超える104件が5,000円未満でした。シンセサイザー・リズムマシンの10件に限ると中央値は27,235円です。
          </p>
        </div>

        <h2 id="synth" className="text-xl font-bold mt-12 mb-4">シンセサイザーの買取価格（島村楽器の掲示）</h2>
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
              {SYN.map((r) => (
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
        <p className="text-sm leading-relaxed mb-4">
          掲示21型番は、すべて「アナログ・アナログモデリングシンセサイザー」か「テーブルトップ・ガジェット」の区分です。
          21型番のうち9型番がAランク2万円未満で、5万円を超えるのは SYSTEM 55・JN-80・UB-Xa・SYSTEM 15・SYSTEM 35 の5型番です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={SHIMA_SYN} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（シンセサイザー × BEHRINGER）</a>（{ASOF}確認・21行）。
          島村楽器は表示の買取価格を目安とし、最終的な価格は現物確認の上で決めるとしています。
        </p>

        <h2 id="pa" className="text-xl font-bold mt-12 mb-4">ミキサー・スピーカー・PA機器の買取価格（島村楽器の掲示）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-left px-4 py-3 font-medium">区分</th>
                <th className="text-left px-4 py-3 font-medium">Aランク</th>
              </tr>
            </thead>
            <tbody>
              {PA.map((r) => (
                <tr key={r.model} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3">{r.kind}</td>
                  <td className="px-4 py-3">{r.a}円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          マイクプリアンプやコンプレッサーの型番（1273・369・676）が3万円台で、ミキサーとスピーカーは1万円前後かそれ以下です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={SHIMA_PA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（PA機器・音響機器 × BEHRINGER）</a>（{ASOF}確認・16行）。
        </p>

        <h2 id="auction" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（ベリンガー製品189件）</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>全体</strong>：189件の中央値4,200円。104件が5,000円未満</li>
          <li><strong>シンセサイザー・リズムマシン</strong>：10件の中央値27,235円（主な落札は TD-3 系 12,760〜24,000円、PRO-800 49,800円、RD-9 50,000円、2600 56,100円、DeepMind 12D 60,500円）</li>
          <li><strong>それ以外（ミキサー・エフェクター・スピーカー・マイクなど）</strong>：178件の中央値4,000円</li>
          <li><strong>XENYX シリーズ（アナログミキサー）</strong>：18件の中央値3,450円</li>
          <li><strong>EUROPOWER PMP シリーズ（パワードミキサー）</strong>：8件の中央値12,513円</li>
          <li><strong>DEQ2496（デジタルイコライザー）</strong>：3件 13,500円・23,000円・24,750円</li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          落札でも島村楽器の掲示でも、シンセサイザーとそれ以外の価格差ははっきりしています。小型のミキサーやコンパクトエフェクターは数千円の落札が中心のため、単品で売るよりもほかの機材とまとめて査定に出す方法があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：ヤフオクの落札済み検索「ベリンガー」「BEHRINGER」（{ASOF}取得・重複を除いて273件）のうち、ベリンガー製品の単品189件を当サイトで集計しました。
          ジャンク・新品・未使用、まとめ売り・複数台、ケーブル・電源・ケースなどの周辺品、同じグループの他ブランド（TC Electronic・MIDAS など）は除外しています。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番</strong>：本体の背面・底面で型番を確かめます。島村楽器の買取価格検索はブランドと型番で引けます。</li>
          <li><strong>付属品</strong>：電源アダプター・ケーブル・元箱をそろえます。島村楽器は付属品の欠品を別途減額としています。</li>
          <li><strong>動作</strong>：フェーダー・ツマミのガリ、鍵盤の反応、全チャンネルの入出力を確認します。島村楽器は修理・調整が必要な場合、その費用を買取価格から差し引くとしています。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          シンセサイザー全般は<Link href="/articles/synthesizer-kaitori/" className="text-accent underline">シンセサイザー買取ガイド</Link>、
          ミキサーは<Link href="/articles/mixer-kaitori/" className="text-accent underline">ミキサー買取</Link>、
          インターフェースなどは<Link href="/articles/dtm-kizai-kaitori/" className="text-accent underline">DTM機材の買取相場</Link>で整理しています。
          島村楽器の買取方法は<a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器買取のご案内</a>で確認できます。
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
          currentSlug="behringer-kaitori"
          relatedSlugs={["synthesizer-kaitori", "mixer-kaitori", "dtm-kizai-kaitori", "effector-kaitori", "microphone-kaitori", "audio-interface-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

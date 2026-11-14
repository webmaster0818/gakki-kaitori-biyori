import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import medians from "@/data/yahoo-medians-gakki.json";

// kw-expansion（2026-11-14）「管楽器 買取」。管楽器の種類別ハブ（以前は存在せず、リンクは saxophone-kaitori に振り替えていた）。
// 一次データ: data/yahoo-medians-gakki.json（ヤフオク!落札の中央値・週次取得）。週次の再ビルドで自動更新される。
// 業者の事実は各社公式（2026-11-14 取得）:
//   山野楽器 https://www.yamano-music.co.jp/service/used-purchasing/
//   イケベリユース https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx ・ /wants/category/sax/ ・ /wants/category/trumpet/
//   ウリエル https://www.uriel-cuore.co.jp/instrument/
// ⚠️ 落札中央値は買取額ではない。買取額の目安として書かない。insufficient の型番は表示しない。

const ASOF = "2026年11月14日";

type Med = { median?: number | null; filtered_n?: number; insufficient?: boolean; fetched_at?: string; query_used?: string; label?: string };
const M = medians as unknown as Record<string, Med>;

// 当サイトが週次で落札データを取っている管楽器の型番
const WIND: { slug: string; kind: string }[] = [
  { slug: "selmer-markvi-kaitori", kind: "サックス" },
  { slug: "selmer-series2-kaitori", kind: "サックス" },
  { slug: "yamaha-yas62-kaitori", kind: "サックス" },
  { slug: "bach-stradivarius-kaitori", kind: "トランペット" },
  { slug: "yamaha-ytr8335-kaitori", kind: "トランペット" },
  { slug: "bach-42-trombone-kaitori", kind: "トロンボーン" },
  { slug: "buffet-r13-kaitori", kind: "クラリネット" },
  { slug: "muramatsu-flute-kaitori", kind: "フルート" },
];

// 同じ系統の型番について、イケベリユースが公式に掲示している通常買取価格（新品に近い状態・付属品欠品なしの目安）
const POSTED: { slug: string; model: string; price: number; posted: string }[] = [
  { slug: "yamaha-yas62-kaitori", model: "YAMAHA アルトサックス YAS-62(第4世代)", price: 160000, posted: "2025-10-23" },
  { slug: "selmer-series2-kaitori", model: "Selmer Paris アルトサックス SA-80II Jubilee", price: 320000, posted: "2025-10-07" },
  { slug: "yamaha-ytr8335-kaitori", model: "YAMAHA Bb管 トランペット YTR-8335 2013-(#526506〜)", price: 100000, posted: "2025-12-08" },
  { slug: "bach-stradivarius-kaitori", model: "V.Bach Bb管 トランペット 180ML37/25 SP", price: 200000, posted: "2025-10-07" },
];

const SHOPS: { name: string; wind: string; how: string; src: string }[] = [
  {
    name: "ウリエル",
    wind: "対象（楽器買取ページで管楽器を買取対象として明記。FAQでは「基本的に買取・査定ができない楽器はございません」）",
    how: "出張買取が中心",
    src: "https://www.uriel-cuore.co.jp/instrument/",
  },
  {
    name: "イケベ楽器（イケベリユース）",
    wind: "対象（サックス・トランペットなどジャンル別の各店でも買取・下取りの相談可。通常買取価格の一覧を公開）",
    how: "店頭・宅配・出張・預かり代行販売",
    src: "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx",
  },
  {
    name: "山野楽器",
    wind: "対象外（「トランペットなどの管楽器」は買い取りできないと明記）",
    how: "店頭のみ（ギター・ベース・アンプ・エフェクターなど）",
    src: "https://www.yamano-music.co.jp/service/used-purchasing/",
  },
];

const KINDS: [string, string][] = [
  ["saxophone-kaitori", "サックス"],
  ["trumpet-kaitori", "トランペット"],
  ["trombone-kaitori", "トロンボーン"],
  ["flute-kaitori", "フルート"],
  ["clarinet-kaitori", "クラリネット"],
  ["oboe-kaitori", "オーボエ"],
  ["horn-kaitori", "ホルン"],
  ["euphonium-kaitori", "ユーフォニアム"],
  ["tuba-kaitori", "チューバ"],
];

const FAQ = [
  {
    q: "管楽器はどこで買い取ってもらえますか？",
    a: `楽器店によって扱いが違います。${ASOF}時点の各社公式サイトでは、イケベ楽器（イケベリユース）とウリエルは管楽器を買取対象としている一方、山野楽器の中古買い取りは「トランペットなどの管楽器」を対象外としています。持ち込む前に、売りたい楽器が対象かを公式サイトで確認してください。`,
  },
  {
    q: "管楽器の買取相場はどれくらいですか？",
    a: "型番と状態で大きく変わります。当サイトがヤフオク!の落札データから集計した中古の中央値は本文の表のとおりですが、これは個人間で売れた価格で、買取業者の提示額とは異なります。買取額の目安には、イケベリユースのように業者が公式に掲示している買取価格も合わせて確認してください。",
  },
  {
    q: "掲示されている買取価格どおりに売れますか？",
    a: "イケベリユースの一覧は、新品に近い状態で付属品の欠品がない場合の目安と明記されています。キズ・凹み・パッドの劣化・付属品の欠品があれば減額されます。",
  },
  {
    q: "年式や世代はどう確認すればいいですか？",
    a: "多くの管楽器は本体に製造番号（シリアル番号）が刻印されています。掲示価格でも「YTR-8335 2013-(#526506〜)」のように製造番号で世代を分けている例があるため、型番と製造番号を控えてから査定を申し込むと話が早く進みます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "管楽器買取", href: "/articles/kangakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/kangakki-kaitori/" },
  title: "管楽器の買取はどこがいい？落札相場と業者の掲示買取価格を型番別に比較【2026年11月】",
  description:
    "サックス・トランペット・フルートなど管楽器の型番別の中古落札の中央値（当サイト集計・週次更新）と、楽器店が公式に掲示する買取価格を並べて比較。管楽器を買い取る店・買い取らない店も公式情報で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "管楽器の買取はどこがいい？落札相場と業者の掲示買取価格を型番別に比較【2026年11月】",
    description: "管楽器の型番別の落札中央値（週次集計）と公式の掲示買取価格を比較。買い取る店・買い取らない店。",
  },
};

export default function Page() {
  const rows = WIND.map((w) => ({ ...w, d: M[w.slug] })).filter((r) => r.d && r.d.median && !r.d.insufficient);
  const fetched = rows.map((r) => r.d!.fetched_at || "").sort().pop() || "";
  const posted = POSTED.map((p) => ({ ...p, d: M[p.slug] })).filter((p) => p.d && p.d.median && !p.d.insufficient);
  const below = posted.filter((p) => p.price < (p.d!.median as number)).length;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "管楽器の買取はどこがいい？落札相場と業者の掲示買取価格を型番別に比較",
        datePublished: "2026-11-14",
        dateModified: "2026-11-14",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/kangakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "管楽器買取", item: "https://gakkikaitori-biyori.com/articles/kangakki-kaitori/" },
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
          管楽器の買取はどこがいい？落札相場と業者の掲示買取価格を型番別に比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          落札相場は当サイトがヤフオク!の落札データから毎週集計した値（最新取得 {fetched}）、業者の情報は{ASOF}に各社公式サイトで確認した内容です。
          当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            管楽器は<strong>楽器店でも買い取らないところがあります</strong>。山野楽器の中古買い取りは管楽器を対象外としており、
            イケベ楽器（イケベリユース）やウリエルは対象としています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            金額は型番で大きく変わります。下の表の<strong>落札中央値</strong>（個人間の取引価格）と、
            楽器店が公式に掲示している<strong>買取価格</strong>を並べると、業者に売る場合の水準の見当がつきます。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">管楽器を買い取る店・買い取らない店（公式の記載）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">管楽器の扱い</th>
                <th className="text-left px-4 py-3 font-medium">買取方法</th>
              </tr>
            </thead>
            <tbody>
              {SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={s.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {s.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed">{s.wind}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          各社の公式ページ（業者名のリンク先）を{ASOF}に確認。各社の詳しい条件は
          <Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">イケベ楽器の買取</Link>・
          <Link href="/articles/yamano-gakki-kaitori/" className="text-accent underline">山野楽器の買取</Link>・
          <Link href="/articles/uriel-gakki-kaitori-kuchikomi/" className="text-accent underline">ウリエルの楽器買取</Link>
          の記事で整理しています。
        </p>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">管楽器{rows.length}型番の中古落札相場（当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          ヤフオク!で過去180日に落札された出品を型番ごとに集め、外れ値を除いた中央値です。毎週取り直しています。
          <strong>個人間で売れた価格で、買取業者の提示額とは異なります</strong>（業者の掲示価格との比較は次の表をご覧ください）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">種類</th>
                <th className="text-left px-4 py-3 font-medium">型番</th>
                <th className="text-right px-4 py-3 font-medium">落札中央値</th>
                <th className="text-right px-4 py-3 font-medium">件数</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.slug} className="border-t border-warm-200">
                  <td className="px-4 py-3 whitespace-nowrap">{r.kind}</td>
                  <td className="px-4 py-3">
                    <Link href={`/articles/${r.slug}/`} className="text-accent underline">
                      {r.d!.label}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">¥{r.d!.median!.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.d!.filtered_n}件</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：ヤフオク!の落札データを当サイトが集計（{fetched}取得）。型番ごとの検索語で取得し、本体以外の出品（部品・ケースのみ等）を除いて中央値を算出しています。
          同じ型番でも世代・仕上げ・状態の違う個体が混ざるため、目安としてご覧ください。集計方法は
          <Link href="/souba-ranking/" className="text-accent underline">楽器買取相場ランキング</Link>に記載しています。
        </p>

        <h2 id="posted" className="text-xl font-bold mt-12 mb-4">落札中央値と、楽器店の掲示買取価格を並べると</h2>
        <p className="text-sm leading-relaxed mb-4">
          同じ系統の型番について、イケベリユースが公式サイトに掲示している通常買取価格と並べました。
          掲示価格は<strong>新品に近い状態・付属品の欠品なし</strong>の場合の目安で、型番の世代・仕上げが当サイトの集計と完全には一致しません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">当サイト集計の型番</th>
                <th className="text-right px-4 py-3 font-medium">落札中央値</th>
                <th className="text-left px-4 py-3 font-medium">イケベリユースの掲示（掲示日）</th>
                <th className="text-right px-4 py-3 font-medium">通常買取価格</th>
              </tr>
            </thead>
            <tbody>
              {posted.map((p) => (
                <tr key={p.slug} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3">{p.d!.label}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">¥{p.d!.median!.toLocaleString()}</td>
                  <td className="px-4 py-3 leading-relaxed">
                    {p.model}（{p.posted}）
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">¥{p.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：
          <a href="https://www.ikebe-gakki.com/wants/category/sax/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            イケベリユース 買取価格一覧（サックス）
          </a>
          ・
          <a href="https://www.ikebe-gakki.com/wants/category/trumpet/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            同（トランペット）
          </a>
          （{ASOF}確認）。落札中央値は当サイト集計（{fetched}取得）。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          {posted.length}型番のうち{below}型番で、掲示買取価格が落札中央値を下回っています。業者に売る場合は、
          <strong>落札相場をそのまま期待せず、複数の業者の提示額を比べる</strong>のが現実的です。
          フリマ・オークションで自分で売る場合との手間の違いは
          <Link href="/articles/mercari-vs-gyosha/" className="text-accent underline">メルカリと買取業者の比較</Link>をご覧ください。
        </p>

        <h2 id="kinds" className="text-xl font-bold mt-12 mb-4">楽器の種類別に調べる</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {KINDS.map(([slug, label]) => (
            <Link
              key={slug}
              href={`/articles/${slug}/`}
              className="text-sm border border-warm-200 bg-white px-3 py-1.5 hover:border-accent transition-colors"
            >
              {label}買取
            </Link>
          ))}
        </div>

        <h2 id="before" className="text-xl font-bold mt-12 mb-4">査定を申し込む前に控えておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li>
            <strong>メーカー・型番・製造番号</strong>：イケベリユースの掲示価格でも、YTR-8335 は製造番号（#526506〜）で世代を分けています。
          </li>
          <li>
            <strong>付属品</strong>：ケース・マウスピース・ストラップなど。イケベリユースは付属品の欠品で買取できない場合があるとしています。
          </li>
          <li>
            <strong>状態</strong>：ウリエルの楽器買取ページは、管体のキズや凹み、パッドの状態、バルブ・キイの動作を主な評価点に挙げています。
          </li>
        </ul>

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
          currentSlug="kangakki-kaitori"
          relatedSlugs={["saxophone-kaitori", "trumpet-kaitori", "flute-kaitori", "clarinet-kaitori", "trombone-kaitori", "ikebe-gakki-kaitori", "selmer-kaitori"]}
        />
      </article>
    </>
  );
}

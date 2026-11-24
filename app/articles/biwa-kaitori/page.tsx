import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-25 深夜04時の回）「琵琶 買取」。
// 一次データ:
//   ヤフオクの落札済み検索「琵琶」カテゴリー 和楽器＞琵琶（auccat=2084305875・終了180日間 198件・2026-11-25 全件取得）
//     → 琵琶本体114件を当サイトで集計。種類はタイトルの表記による（「薩摩」のみ＝薩摩琵琶／「筑前」のみ＝筑前琵琶／両方または表記なし＝区分なし）。
//     除外：撥・琵琶台・弦・ケース・教本などの単品53件、中国琵琶12件、ジャンク表記14件、正倉院宝物のレプリカ2件、月琴2件、2点セット1件。
//     撥の単品32件（撥掛・撥立・まとめ売りを除く）も別に集計。
//   島村楽器 買取価格検索 型番「琵琶」＝0件（2026-11-25）
//   楽器の買取屋さん 和楽器カテゴリー（取扱いカテゴリ＝三味線・尺八・三線・和太鼓・笙。琵琶なし）（2026-11-25）
//   おたからや 参考買取価格「琵琶 和楽器」（2019年5月26日時点・価格表示は ASK）（2026-11-25）
// 業者の公式（2026-11-25 取得）: ウリエル 楽器買取（和楽器の査定ポイント）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月25日";
const YAHOO = "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E7%90%B5%E7%90%B6&auccat=2084305875";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=%E7%90%B5%E7%90%B6&num=100&pg=1";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wagakki";
const OTAKARAYA = "https://www.otakaraya.jp/result/gakki/wa-gakki/155635/";
const URIEL = "https://www.uriel-cuore.co.jp/instrument/";

const KIND: { label: string; n: string; median: string; dist: string }[] = [
  { label: "薩摩琵琶（タイトルに「薩摩」のみ）", n: "20件", median: "50,750円", dist: "1万円未満3件・1万〜5万円7件・5万円以上10件" },
  { label: "筑前琵琶（タイトルに「筑前」のみ）", n: "43件", median: "20,000円", dist: "1万円未満5件・1万〜5万円32件・5万円以上6件" },
  { label: "種類の表記なし・両方の表記", n: "51件", median: "20,500円", dist: "1万円未満13件・1万〜5万円28件・5万円以上10件" },
  { label: "琵琶本体の合計", n: "114件", median: "27,740円", dist: "1万円未満21件・1万〜5万円67件・5万円以上26件" },
];

const OTHER: { label: string; n: string; median: string }[] = [
  { label: "筑前琵琶で五弦の表記", n: "23件", median: "40,000円" },
  { label: "筑前琵琶で四弦の表記", n: "23件", median: "16,000円" },
  { label: "桑の表記（総桑・桑製など）", n: "13件", median: "45,000円" },
  { label: "時代・骨董・古美術の表記", n: "51件", median: "23,499円" },
  { label: "撥（ばち）の単品", n: "32件", median: "13,500円" },
  { label: "中国琵琶（ピパ）と書かれた量産品", n: "9件", median: "4,286円（すべて2万円以下）" },
];

const BUYERS: { name: string; status: string; href: string }[] = [
  { name: "おたからや", status: "和楽器の参考買取価格に「琵琶 和楽器」を掲載。2019年5月26日時点の参考買取価格で、金額は「ASK」（問い合わせ）の表示です", href: OTAKARAYA },
  { name: "ウリエル", status: "和楽器（三味線・琴・尺八・和太鼓など）について「素材の希少性と製作者の銘が買取価格を大きく左右」と案内。琵琶の名前は挙げていません", href: URIEL },
  { name: "楽器の買取屋さん", status: "和楽器の取扱いカテゴリーは三味線・尺八・三線・和太鼓・笙で、琵琶はありません。公開事例7件も三味線と尺八のみです", href: KAITORIYA },
  { name: "島村楽器", status: "買取価格検索で型番「琵琶」の掲示は0件", href: SHIMA_SEARCH },
];

const FAQ = [
  {
    q: "琵琶はいくらで売れますか？",
    a: `ヤフオクの琵琶本体114件の落札中央値は27,740円で、1万円未満が21件、5万円以上が26件でした（${ASOF}取得・終了180日間）。タイトルに薩摩琵琶とある20件は中央値50,750円、筑前琵琶とある43件は20,000円です。落札価格は個人間・業者の販売価格で、買取価格とは性質が異なります。`,
  },
  {
    q: "薩摩琵琶と筑前琵琶で値段は違いますか？",
    a: "落札の中央値では薩摩琵琶が筑前琵琶の約2.5倍でした。ただし筑前琵琶も、五弦の表記がある23件は中央値40,000円で、四弦の23件（16,000円）の2.5倍です。種類と弦の数を申し込みの際に伝えると、話が早く進みます。",
  },
  {
    q: "撥（ばち）だけでも売れますか？",
    a: "ヤフオクでは撥の単品が180日間で32件落札され、中央値は13,500円でした。琵琶本体と一緒に査定に出す場合も、撥を付属品としてそろえておきます。単品の買取を明記している楽器店は、今回確認した範囲では見当たりませんでした。",
  },
  {
    q: "作者名がわからない古い琵琶でも査定してもらえますか？",
    a: "おたからやは「琵琶 和楽器」を参考買取価格の一覧に載せていますが、金額は問い合わせの表示です。ヤフオクでは作者・銘の表記がない時代物も多く落札されており、時代・骨董の表記がある51件の中央値は23,499円でした。胴の内側や背面に銘があれば写真を撮っておきます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "琵琶の買取", href: "/articles/biwa-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/biwa-kaitori/" },
  title: "琵琶の買取相場｜薩摩・筑前の落札114件を集計と買い取る業者【2026年11月】",
  description:
    "琵琶の買取相場を、ヤフオクの琵琶本体の落札114件から薩摩琵琶・筑前琵琶・弦の数・撥の単品に分けて集計しました。琵琶を買取の対象に挙げている業者と、主要な楽器店の掲載状況を公式サイトで確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "琵琶の買取相場｜薩摩・筑前の落札114件を集計【2026年11月】",
    description: "琵琶本体の落札中央値27,740円。薩摩琵琶50,750円・筑前琵琶20,000円。撥の単品は13,500円。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "琵琶の買取相場｜薩摩・筑前の落札114件を集計と買い取る業者",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/biwa-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "琵琶の買取", item: "https://gakkikaitori-biyori.com/articles/biwa-kaitori/" },
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
          琵琶の買取相場｜薩摩・筑前の落札114件を集計と買い取る業者
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、業者・楽器店の取り扱いは各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクで直近180日間に落札された琵琶本体114件の中央値は<strong>27,740円</strong>でした。
            タイトルに<strong>薩摩琵琶とある20件は中央値50,750円</strong>、<strong>筑前琵琶とある43件は20,000円</strong>です。
            筑前琵琶は弦の数で差が大きく、五弦の表記がある23件は40,000円、四弦の23件は16,000円でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            買取の対象として琵琶を公式サイトに載せている業者は、今回確認した範囲ではおたからや（参考買取価格は問い合わせ）でした。楽器の買取屋さんの和楽器カテゴリーと島村楽器の買取価格検索には、琵琶の掲載がありません。
          </p>
        </div>

        <h2 id="kind" className="text-xl font-bold mt-12 mb-4">種類別の落札価格</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">区分（タイトルの表記）</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">価格帯の内訳</th>
              </tr>
            </thead>
            <tbody>
              {KIND.map((r) => (
                <tr key={r.label} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.n}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.median}</td>
                  <td className="px-4 py-3">{r.dist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">そのほかの表記・単品</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
              </tr>
            </thead>
            <tbody>
              {OTHER.map((r) => (
                <tr key={r.label} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                  <td className="px-4 py-3">{r.n}</td>
                  <td className="px-4 py-3">{r.median}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          最高額は作者名と銘を書いた薩摩琵琶の418,000円で、10万円を超えたのは本体114件中4件でした。
          一方で、中国琵琶（ピパ）と書かれた量産品は9件すべてが2万円以下で、日本の琵琶とは価格帯が大きく異なります。
          撥は単品でも32件が落札され、中央値は13,500円でした。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={YAHOO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤフオクの落札済み検索「琵琶」（カテゴリー 和楽器＞琵琶）</a>の終了180日間198件（{ASOF}取得）のうち、琵琶本体の114件を当サイトで集計しました。
          撥・琵琶台・弦・ケース・教本などの単品、中国琵琶、ジャンクの表記、正倉院宝物のレプリカ、月琴、セット売りは本体の集計から除いています。種類と弦の数はタイトルの表記によるもので、現物の確認ではありません。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">琵琶の買取の扱い（業者・楽器店別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者・楽器店</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載（{ASOF}確認）</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{r.name}</a>
                  </td>
                  <td className="px-4 py-3">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          琵琶の金額つきの買取事例を公開している業者は、今回確認した範囲では見つかりませんでした。
          大手の楽器店は琵琶を取扱いカテゴリーに挙げていないため、申し込む前に電話やLINEで琵琶を査定できるかを確認します。
          三味線・琴など和楽器全体の各社の対応は<Link href="/articles/wagakki-kaitori/" className="text-accent underline">和楽器の買取</Link>で比較しています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={OTAKARAYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">おたからや 琵琶 和楽器の参考買取価格</a>・
          <a href={URIEL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ウリエル 楽器買取</a>・
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん 和楽器の買取事例</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>（{ASOF}確認）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>種類</strong>：薩摩琵琶か筑前琵琶かで、落札の中央値に約2.5倍の差がありました。わからない場合は、全体の写真と柱（じゅう）の数がわかる写真を用意します。</li>
          <li><strong>弦と柱の数</strong>：「四弦五柱」「五弦五柱」のように数えて伝えます。筑前琵琶では五弦の表記がある出品のほうが高く落札されていました。</li>
          <li><strong>作者・銘</strong>：胴の内側や背面に銘・花押がないかを確かめます。ウリエルは和楽器について、製作者の銘が買取価格を大きく左右すると案内しています。</li>
          <li><strong>材</strong>：桑の表記がある13件は中央値45,000円でした。購入時の書類や販売店の説明で材がわかれば伝えます。</li>
          <li><strong>付属品</strong>：撥・琵琶台・ケースをそろえます。撥は単品でも中央値13,500円で落札されており、本体と一緒に査定に出します。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          筑前（福岡県）・薩摩（鹿児島県）の地域で持ち込み先を探す場合は、
          <Link href="/articles/fukuoka-gakki-kaitori/" className="text-accent underline">福岡の楽器買取</Link>と
          <Link href="/articles/kagoshima-gakki-kaitori/" className="text-accent underline">鹿児島の楽器買取</Link>で整理しています。
          同じ弦楽器の和楽器は<Link href="/articles/shamisen-kaitori/" className="text-accent underline">三味線買取ガイド</Link>もご覧ください。
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
          currentSlug="biwa-kaitori"
          relatedSlugs={["wagakki-kaitori", "shamisen-kaitori", "koto-kaitori", "sanshin-kaitori", "minzoku-gakki-kaitori", "fukuoka-gakki-kaitori", "kagoshima-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

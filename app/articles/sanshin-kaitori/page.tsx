import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-25 深夜02時の回）「三線 買取」。
// 一次データ:
//   ヤフオクの落札済み検索「三線」（2026-11-25 取得・重複を除いて200件）→ 三線本体の49件を当サイトで集計。
//     除外：尺八（「銀三線」の表記）・「三線式」の鉄道模型・CD/LP・教本・工工四・部品（ウマ・カラクイ・チーガ・ティーガ・棹材・原木）・
//     スタンド・カバー・ケースのみ・2本/2丁セット・ジャンク・新品・未使用・三味線。
//     皮の分類はタイトルの表記による（本皮・本蛇皮・天然皮・強化張り＝本皮／人工皮・合成革・プリント蛇皮・蛇柄＝人工皮／表記なし）。
//   島村楽器 買取価格検索 型番「三線」＝0件（2026-11-25）
//   楽器の買取屋さん 和楽器カテゴリー（取扱いカテゴリに三線・公開事例は三味線4件と尺八3件のみ）（2026-11-25）
// 業者の公式（2026-11-25 取得）: ウリエル 楽器買取（和楽器の査定ポイント）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月25日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=%E4%B8%89%E7%B7%9A&num=100&pg=1";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=wagakki";
const URIEL = "https://www.uriel-cuore.co.jp/instrument/";

const SKIN: { label: string; n: string; median: string; range: string }[] = [
  { label: "本皮（本皮・本蛇皮・天然皮・強化張りの表記）", n: "13件", median: "25,280円", range: "11,500〜69,000円" },
  { label: "人工皮（人工皮・合成革・プリント蛇皮などの表記）", n: "18件", median: "10,890円", range: "5,775〜52,000円" },
  { label: "皮の表記なし", n: "18件", median: "14,300円", range: "5,500〜130,000円" },
  { label: "三線本体の合計", n: "49件", median: "16,500円", range: "5,500〜130,000円" },
];

const OTHER: { label: string; n: string; median: string }[] = [
  { label: "棹材の表記あり（黒木・八重山黒木・黒檀・クルチなど）", n: "9件", median: "45,000円（20,000〜69,000円）" },
  { label: "ハードケース付き", n: "21件", median: "21,680円" },
  { label: "エレキ三線", n: "2件", median: "21,000円・23,000円" },
];

const BUYERS: { name: string; status: string; href: string }[] = [
  { name: "楽器の買取屋さん", status: "和楽器の取扱いカテゴリーに「三線」があります。公開されている和楽器の事例7件は三味線4件・尺八3件で、三線の事例はありません", href: KAITORIYA },
  { name: "ウリエル", status: "和楽器の査定について「三線袋・駒・撥など付属品がそろっていると、査定に有利」と案内。棹の素材（黒檀・紫檀など）・胴の状態・皮のコンディションが主な評価ポイント", href: URIEL },
  { name: "島村楽器", status: "買取価格検索で型番「三線」の掲示は0件", href: SHIMA_SEARCH },
];

const FAQ = [
  {
    q: "三線はいくらで売れますか？",
    a: `ヤフオクの三線本体49件の落札中央値は16,500円で、14件が1万円未満でした（${ASOF}取得）。タイトルに本皮の表記がある13件は中央値25,280円、人工皮の表記がある18件は10,890円です。落札価格は個人間・業者の販売価格で、買取価格とは性質が異なります。`,
  },
  {
    q: "人工皮の三線でも買い取ってもらえますか？",
    a: "楽器の買取屋さんは和楽器の取扱いカテゴリーに三線を挙げていますが、皮の種類による条件は公式サイトに書かれていません。人工皮の三線もヤフオクで18件落札されており、中央値は10,890円でした。申し込みの際に皮の種類を伝えて確認します。",
  },
  {
    q: "棹の材質は査定に関係しますか？",
    a: "ウリエルは和楽器の主な評価ポイントとして、棹の素材（黒檀・紫檀など）・胴の状態・皮のコンディションを挙げています。ヤフオクでもタイトルに黒木・黒檀などの棹材の表記がある9件は中央値45,000円で、本体全体の中央値の約2.7倍でした。",
  },
  {
    q: "皮が破れた三線は売れますか？",
    a: "公式サイトで、皮が破れた三線の扱いを明記している業者は見当たりませんでした。ウリエルは皮のコンディションを評価ポイントに挙げているため、破れがある場合は写真を送って査定を受けます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "三線の買取", href: "/articles/sanshin-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/sanshin-kaitori/" },
  title: "三線の買取相場｜落札49件を本皮・人工皮別に集計と買い取る業者【2026年11月】",
  description:
    "沖縄三線の買取相場を、ヤフオクの三線本体の落札49件から本皮・人工皮・棹材の表記別に集計しました。三線を取扱いカテゴリーに挙げている楽器店と、査定で見られる点（棹の素材・胴・皮・付属品）を公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "三線の買取相場｜落札49件を本皮・人工皮別に集計【2026年11月】",
    description: "三線本体の落札中央値16,500円。本皮25,280円・人工皮10,890円。棹材の表記ありは45,000円。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "三線の買取相場｜落札49件を本皮・人工皮別に集計と買い取る業者",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/sanshin-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "三線の買取", item: "https://gakkikaitori-biyori.com/articles/sanshin-kaitori/" },
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
          三線の買取相場｜落札49件を本皮・人工皮別に集計と買い取る業者
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、楽器店の取り扱いは各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクの三線本体49件の落札中央値は<strong>16,500円</strong>で、49件中14件が1万円未満でした。
            タイトルに<strong>本皮の表記がある13件は中央値25,280円</strong>、<strong>人工皮の表記がある18件は10,890円</strong>で、皮の種類で2倍以上の差があります。
            黒木・黒檀などの棹材を書いた9件は中央値45,000円でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            楽器店では、楽器の買取屋さんが和楽器の取扱いカテゴリーに三線を挙げています。島村楽器の買取価格検索には三線の掲示がありません。
          </p>
        </div>

        <h2 id="skin" className="text-xl font-bold mt-12 mb-4">皮の種類別の落札価格</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">区分（タイトルの表記）</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {SKIN.map((r) => (
                <tr key={r.label} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.n}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">そのほかの表記</th>
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
          最高額は「沖縄三線、ハードケース」とだけ書かれた出品の130,000円でした。真壁型（まかびがた）など型の名前や、作者名を書いた出品は数件のみで、型・作者別の集計はできませんでした。
          検索語「三線」には尺八（「銀三線」の表記）や鉄道模型（「三線式」）が多く混ざるため、本体の出品だけを1件ずつ選んでいます。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：ヤフオクの落札済み検索「三線」（{ASOF}取得・重複を除いて200件）のうち、三線本体の49件を当サイトで集計しました。
          部品（ウマ・カラクイ・チーガ・棹材）、ケースのみ、教本・CD、2本以上のセット、ジャンク・新品・未使用は除外しています。皮の区分はタイトルの表記によるもので、現物の確認ではありません。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">三線の買取の扱い（楽器店別）</h2>
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
          三線の価格つきの買取事例を公開している楽器店は、今回確認した範囲では見つかりませんでした。三味線・琴など和楽器全体の各社の対応は<Link href="/articles/wagakki-kaitori/" className="text-accent underline">和楽器の買取</Link>で比較しています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん 和楽器の買取事例</a>・
          <a href={URIEL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ウリエル 楽器買取</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>（{ASOF}確認）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>皮の種類</strong>：本皮か人工皮かで落札の中央値に2倍以上の差がありました。購入時の書類や販売店の表示で確かめます。</li>
          <li><strong>棹の材</strong>：黒木（八重山黒木など）・黒檀などの材が分かれば伝えます。ウリエルは棹の素材を評価ポイントに挙げています。</li>
          <li><strong>付属品</strong>：三線袋・駒（ウマ）・撥などをそろえます。ハードケース付きの21件は中央値21,680円でした。</li>
          <li><strong>皮の破れ・棹の反り</strong>：状態の写真を撮っておくと、宅配や写真査定のやり取りが早く進みます。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          本土の三味線は<Link href="/articles/shamisen-kaitori/" className="text-accent underline">三味線買取ガイド</Link>、
          沖縄県内で持ち込み先を探す場合は<Link href="/articles/naha-gakki-kaitori/" className="text-accent underline">那覇の楽器買取</Link>と<Link href="/articles/okinawa-city-gakki-kaitori/" className="text-accent underline">沖縄市の楽器買取</Link>で整理しています。
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
          currentSlug="sanshin-kaitori"
          relatedSlugs={["wagakki-kaitori", "shamisen-kaitori", "minzoku-gakki-kaitori", "niko-kaitori", "koto-kaitori", "naha-gakki-kaitori", "okinawa-city-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

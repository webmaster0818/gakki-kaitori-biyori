import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜02時の回）「民族楽器 買取」。
// 一次データ: ヤフオクの落札済み検索（2026-11-20 取得・各2ページ）「シタール」「チャランゴ」「バグパイプ」「ディジュリドゥ」「バラライカ」「カリンバ」。
//   取得は scripts/fetch-yahoo-medians-gakki.py と同じ方法（__NEXT_DATA__ の出品）を /tmp の別スクリプトで実行（データファイルには書いていない）。
//   楽器本体以外（CD・LP・本・切手・絵葉書・ぬいぐるみ・カード・ライター・フィギュア・同名のアニメキャラクター商品・エフェクター・交換用パーツ・ケース単体・練習用チャンター・新品/未使用）を除外。
//   シタールはミニシタールとタンプーラを除外し、エレクトリックシタール（STARS・Jerry Jones など）を分けて集計。スティールパンはハンドパンが大半で本体が1件のため載せていない。
// 業者の対応は各社公式（2026-11-20 取得・HTMLコメントと script 除外）:
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=ethnic-instrument（取扱いカテゴリ7種・買取事例はバラライカ1件 61,000円 2018/02/03 静岡県）
//   ウリエル https://www.uriel-cuore.co.jp/instrument/（和楽器・民族楽器の取引が活発な例に「二胡（古月琴坊）」）
//   島村楽器 https://www.shimamura.co.jp/used/search.html（買取価格検索の楽器区分：弦楽器＝バイオリン・ビオラ・チェロ、ドラム・パーカッション＝電子ドラム・シンバル・スネアドラム・その他ハードウェア）
//   ブックオフ https://www.bookoff.co.jp/sell/electronic/music/（買取対象外に「民芸品、手工芸品」）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=ethnic-instrument";
const URIEL = "https://www.uriel-cuore.co.jp/instrument/";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html";
const BOOKOFF = "https://www.bookoff.co.jp/sell/electronic/music/";

// ヤフオク落札（当サイト集計）
const KINDS: { kind: string; origin: string; n: number; median: string; range: string; note: string }[] = [
  { kind: "エレクトリックシタール", origin: "インド（電気楽器版）", n: 10, median: "97,950円", range: "70,000〜180,000円", note: "STARS ELS-1 が中心。Jerry Jones は180,000円" },
  { kind: "シタール（アコースティック）", origin: "インド", n: 12, median: "5,682円", range: "310〜40,000円", note: "工房名入りの出品も5,390円（ジャンク）〜36,500円と幅がある" },
  { kind: "バグパイプ", origin: "スコットランドほか", n: 9, median: "17,846円", range: "7,975〜42,000円", note: "グレート・ハイランド・バグパイプの記載が3件（17,846〜42,000円）" },
  { kind: "チャランゴ", origin: "南米アンデス", n: 25, median: "13,200円", range: "830〜83,000円", note: "acha（アチャ）の記載が5件・中央値21,500円" },
  { kind: "ディジュリドゥ", origin: "オーストラリア", n: 20, median: "5,711円", range: "1〜155,000円", note: "製作者名（D. Gurruwiwi）入りの3件は45,000〜155,000円" },
  { kind: "バラライカ", origin: "ロシア", n: 12, median: "2,250円", range: "1,000〜32,980円", note: "12件中6件に旧ソ連製の記載。最高はルナチャルスキー工場製" },
  { kind: "カリンバ", origin: "アフリカ（親指ピアノ）", n: 36, median: "1,900円", range: "1〜11,699円", note: "5,000円以上の7件のうち4件が32〜34キー" },
];

const BUYERS: { name: string; status: string; detail: string; src: string }[] = [
  {
    name: "楽器の買取屋さん",
    status: "取扱いカテゴリあり",
    detail: "民族楽器の取扱いカテゴリにバラライカ・バグパイプ・チャランゴ・カリンバ・ディジュリドゥ・二胡・シタールの7種を掲載。公開されている買取事例はバラライカ1件（61,000円・2018年）のみ",
    src: KAITORIYA,
  },
  {
    name: "ウリエル",
    status: "取引の記載あり",
    detail: "楽器買取のページで、和楽器・民族楽器の取引が活発な例として「二胡（古月琴坊）」を挙げている",
    src: URIEL,
  },
  {
    name: "島村楽器",
    status: "価格検索に区分なし",
    detail: "買取価格検索の楽器区分は、弦楽器がバイオリン・ビオラ・チェロ、ドラム・パーカッションが電子ドラム・シンバル・スネアドラム・その他ハードウェアで、民族楽器の区分はない",
    src: SHIMA_SEARCH,
  },
  {
    name: "ブックオフ",
    status: "民芸品・手工芸品は対象外",
    detail: "買取対象外に「民芸品、手工芸品」を挙げ、例としてバイオリン・三味線・琴・ハープ・雅楽器を記載（民族楽器の個別の明記はない）",
    src: BOOKOFF,
  },
];

const FAQ = [
  {
    q: "民族楽器はいくらくらいで取引されていますか？",
    a: `${ASOF}に取得したヤフオクの落札データを種類別に集計すると、中央値はエレクトリックシタール97,950円、バグパイプ17,846円、チャランゴ13,200円、シタール（アコースティック）5,682円、ディジュリドゥ5,711円、バラライカ2,250円、カリンバ1,900円でした。チャランゴ・ディジュリドゥでは、工房名・製作者名の記載がある出品が高くなる傾向がありました。`,
  },
  {
    q: "民族楽器を買い取ってくれる業者はありますか？",
    a: "楽器の買取屋さんは民族楽器の取扱いカテゴリに7種類を載せており、ウリエルは民族楽器の取引を公式サイトで挙げています。島村楽器の買取価格検索には民族楽器の区分がなく、ブックオフは民芸品・手工芸品を買取対象外としているため、事前に問い合わせて確認してください。",
  },
  {
    q: "お土産で買った民族楽器も売れますか？",
    a: "落札データでは、製作者名や工房名の記載がない出品は数千円以下で取引されるものが多く、カリンバ（中央値1,900円）やバラライカ（中央値2,250円）は低い価格帯に集中していました。楽器店の査定では値段が付かない場合もあるため、査定の前に作られた地域・工房名・寸法を確認しておくと説明がしやすくなります。",
  },
  {
    q: "大きくて運べない場合はどうすればよいですか？",
    a: "楽器の買取屋さんは出張買取を行っています。オークションで売る場合、シタールやディジュリドゥは長さが1.2m前後ある出品が多く、直接引取に限定した出品も見られました。送料が価格に見合うかどうかを先に確認してください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "民族楽器の買取", href: "/articles/minzoku-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/minzoku-gakki-kaitori/" },
  title: "民族楽器の買取相場と売り先｜シタール・チャランゴ・バグパイプなど7種類の落札を集計【2026年11月】",
  description:
    "民族楽器の中古相場を、ヤフオクの落札データからシタール・チャランゴ・バグパイプ・ディジュリドゥ・バラライカ・カリンバの種類別に集計しました。民族楽器を取り扱う買取業者と、区分のない楽器店・対象外とする店を各社の公式情報で整理しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "民族楽器の買取相場と売り先｜7種類の落札を集計【2026年11月】",
    description: "シタール・チャランゴ・バグパイプなどの落札中央値と、民族楽器を取り扱う業者。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "民族楽器の買取相場と売り先｜シタール・チャランゴ・バグパイプなど7種類の落札を集計",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/minzoku-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "民族楽器の買取", item: "https://gakkikaitori-biyori.com/articles/minzoku-gakki-kaitori/" },
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
          民族楽器の買取相場と売り先｜シタール・チャランゴ・バグパイプなど7種類の落札を集計
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、業者の対応は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクの落札を種類別に集計すると、中央値は<strong>エレクトリックシタール97,950円、バグパイプ17,846円、チャランゴ13,200円</strong>で、アコースティックのシタール・ディジュリドゥは5,000円台、<strong>バラライカ・カリンバは2,000円前後</strong>でした。
            チャランゴ・ディジュリドゥでは、工房名や製作者名がタイトルに書かれた出品が高い価格帯に分かれています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            売り先では、<strong>楽器の買取屋さんが民族楽器の取扱いカテゴリに7種類を載せ、ウリエルが民族楽器の取引を挙げています</strong>。
            島村楽器の買取価格検索には民族楽器の区分がなく、ブックオフは民芸品・手工芸品を買取対象外としています。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">種類別の中古相場（ヤフオク落札・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">種類</th>
                <th className="text-left px-4 py-3 font-medium">地域</th>
                <th className="text-right px-4 py-3 font-medium">件数</th>
                <th className="text-right px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
                <th className="text-left px-4 py-3 font-medium">傾向</th>
              </tr>
            </thead>
            <tbody>
              {KINDS.map((k) => (
                <tr key={k.kind} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{k.kind}</td>
                  <td className="px-4 py-3">{k.origin}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{k.n}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{k.median}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{k.range}</td>
                  <td className="px-4 py-3 leading-relaxed">{k.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          シタールは、電気楽器のエレクトリックシタール（10件すべてが7万円以上）と、インドの伝統的なシタール（12件の中央値5,682円）で価格帯がまったく異なります。ディジュリドゥも、製作者名のある3件を除いた17件の中央値は5,000円でした。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索（{ASOF}取得・各2ページ・落札日は種類により2026年5月〜11月）。CD・本・切手・同名のキャラクター商品・交換用パーツ・新品などを除いた楽器本体の件数です。落札価格には送料を含まず、出品者の手数料も差し引いていません。二胡は<Link href="/articles/niko-kaitori/" className="text-accent underline">二胡の買取</Link>、打楽器は<Link href="/articles/dagakki-kaitori/" className="text-accent underline">打楽器の買取</Link>にまとめています。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">民族楽器の売り先（公式サイトの記載）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">扱い</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((b) => (
                <tr key={b.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={b.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{b.name}</a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{b.status}</td>
                  <td className="px-4 py-3 leading-relaxed">{b.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：各社の公式サイト（{ASOF}確認）。「記載なし」「区分なし」は買い取らないという意味ではありません。査定の可否は各社にお問い合わせください。各社の条件は
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>・
          <Link href="/articles/bookoff-gakki-kaitori/" className="text-accent underline">ブックオフの楽器買取</Link>にまとめています。
        </p>

        <h2 id="check" className="text-xl font-bold mt-12 mb-4">査定の前に確認すること</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed mb-10 space-y-2">
          <li><strong>工房名・製作者名</strong>：チャランゴの acha（アチャ）は5件の中央値21,500円、ディジュリドゥの D. Gurruwiwi は3件とも45,000円以上で、いずれも同じ種類の中央値を上回っていました。楽器の内側や裏側のラベル・刻印を確認します。</li>
          <li><strong>大きさと送り方</strong>：シタール・ディジュリドゥは全長1.2m前後の出品が多く、直接引取を条件にした出品もありました。出張買取に対応する業者か、送料を含めて採算が合うかを確かめます。</li>
          <li><strong>付属品</strong>：ケース・替えの部品・バグパイプのバッグやドローンなど、演奏に必要な部品がそろっているかを確認します。</li>
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
          currentSlug="minzoku-gakki-kaitori"
          relatedSlugs={["wagakki-kaitori", "niko-kaitori", "dagakki-kaitori", "ukulele-kaitori", "bookoff-gakki-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

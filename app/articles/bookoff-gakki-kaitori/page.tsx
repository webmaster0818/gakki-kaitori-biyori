import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-19）「ブックオフ 楽器 買取」。
// 事実はすべて公式（2026-11-19 取得・HTMLコメントと script 除外）:
//   ブックオフ 楽器買取ページ https://www.bookoff.co.jp/sell/electronic/music/（買取対象外商品・持参したい物・支払い）
//   ブックオフ 売りたい https://www.bookoff.co.jp/sell/（出張買取は予約制・その場で支払い）
//   店舗検索 https://www.bookoff.co.jp/shop/search-result.html の検索API（公式ページが読み込む as.blue.asp.appirits.com/bookoff2/search.json）。
//     「売りたい」の楽器4区分（弦楽器 p0601・管楽器 p0602・楽器周辺機器 p0603・その他楽器 p0604）の tag 2/3 で絞り込み＝公式の楽器買取ページの「店舗検索」リンクと同じ条件。
//     絞り込みなし 779店・楽器 137店。店舗の業態（store_category）と都道府県は当サイトで集計。
// 比較の他社: 島村楽器 /used/・買取価格検索 cat=11（バイオリン388・チェロ231・ビオラ29 行）・イシバシ楽器 /kaitori/（買取可能な楽器・買取の難しい楽器の一例）。
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月19日";
const BO_MUSIC = "https://www.bookoff.co.jp/sell/electronic/music/";
const BO_SELL = "https://www.bookoff.co.jp/sell/";
const BO_SHOP =
  "https://www.bookoff.co.jp/shop/search-result.html#opt_and_or=or/fq=p0601_tag%3A3%20OR%20p0601_tag%3A2%20OR%20p0602_tag%3A3%20OR%20p0602_tag%3A2%20OR%20p0603_tag%3A3%20OR%20p0603_tag%3A2%20OR%20p0604_tag%3A3%20OR%20p0604_tag%3A2";
const SHIMAMURA = "https://www.shimamura.co.jp/used/";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/";

const ALL_SHOPS = 779;
const GAKKI_SHOPS = 137;
const BY_TYPE: { type: string; n: number }[] = [
  { type: "BOOKOFF SUPER BAZAAR", n: 52 },
  { type: "BOOKOFF", n: 44 },
  { type: "Rehello by BOOKOFF", n: 22 },
  { type: "BOOKOFF PLUS", n: 17 },
  { type: "B・STYLE／from・B", n: 2 },
];
const BY_CAT: { cat: string; n: number }[] = [
  { cat: "弦楽器", n: 135 },
  { cat: "楽器周辺機器", n: 134 },
  { cat: "その他楽器", n: 120 },
  { cat: "管楽器", n: 106 },
];
const BY_PREF: { pref: string; n: number }[] = [
  { pref: "東京都", n: 30 },
  { pref: "神奈川県", n: 16 },
  { pref: "埼玉県", n: 10 },
  { pref: "千葉県", n: 9 },
  { pref: "大阪府", n: 9 },
  { pref: "愛知県", n: 7 },
  { pref: "徳島県", n: 7 },
  { pref: "兵庫県", n: 6 },
];

const EXCLUDE: { item: string; bookoff: string; shimamura: string; ishibashi: string }[] = [
  { item: "ピアノ", bookoff: "対象外（輸送や処分が困難なもの）", shimamura: "窓口が別（ピアノ専用の査定申込み）", ishibashi: "買取の難しい楽器の一例" },
  { item: "エレクトーン", bookoff: "対象外（輸送や処分が困難なもの）", shimamura: "取扱いあり（楽器一覧に掲載）", ishibashi: "買取の難しい楽器の一例" },
  { item: "電子ピアノ", bookoff: "製造から5年以上は対象外", shimamura: "取扱いあり（楽器一覧に掲載）", ishibashi: "記載なし" },
  { item: "バイオリン", bookoff: "対象外（民芸品、手工芸品の例）", shimamura: "買取価格検索にバイオリン388型番を掲示", ishibashi: "記載なし" },
  { item: "三味線・琴", bookoff: "対象外（民芸品、手工芸品の例）", shimamura: "対象外（和楽器）", ishibashi: "和琴は買取の難しい楽器の一例" },
];

const FAQ = [
  {
    q: "ブックオフならどの店舗でも楽器を売れますか？",
    a: `売れない店舗があります。公式の店舗検索で「売りたい」の楽器（弦楽器・管楽器・楽器周辺機器・その他楽器）にあてはまる店舗は、${ASOF}時点で全${ALL_SHOPS}店のうち${GAKKI_SHOPS}店でした。楽器買取のページにも「一部取扱いのない店舗もございます」と書かれています。`,
  },
  {
    q: "ブックオフでバイオリンやピアノは売れますか？",
    a: "ブックオフの楽器買取ページでは、ピアノ・エレクトーンを「輸送や処分が困難なもの」、バイオリン・三味線・琴・ハープ・雅楽器を「民芸品、手工芸品」の例として、買取対象外に挙げています。製造から5年以上経過した電子ピアノも対象外です。",
  },
  {
    q: "買取代金はその場でもらえますか？",
    a: "ブックオフの公式サイトでは、査定金額に了承すればその場で現金で支払うと案内しています。ただし高額な品物や店舗の状況によっては後日の支払いになる場合があります。",
  },
  {
    q: "楽器を売るときに持っていくものは？",
    a: "本人確認ができる証明書・書類が必要です。楽器買取ページでは、保証書・本体の付属品（ケーブルなど）・カバーやケースを一緒に持参するよう案内しています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ブックオフの楽器買取", href: "/articles/bookoff-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/bookoff-gakki-kaitori/" },
  title: "ブックオフの楽器買取とは？｜楽器を買い取る店舗は779店中137店・買取対象外の楽器【2026年11月】",
  description:
    "ブックオフで楽器を売れる店舗を公式の店舗検索で数えると、全779店のうち137店でした。業態・都道府県別の内訳、ピアノやバイオリンなど買取対象外の楽器、支払い方法を公式情報で整理し、楽器店2社の条件とも比べています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ブックオフの楽器買取とは？｜楽器を買い取る店舗は779店中137店【2026年11月】",
    description: "楽器を買い取る店舗の数と内訳、買取対象外の楽器、支払い方法。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ブックオフの楽器買取とは？｜楽器を買い取る店舗は779店中137店・買取対象外の楽器",
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/bookoff-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ブックオフの楽器買取", item: "https://gakkikaitori-biyori.com/articles/bookoff-gakki-kaitori/" },
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
          ブックオフの楽器買取とは？｜楽器を買い取る店舗は779店中137店・買取対象外の楽器
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}にブックオフの公式サイトと店舗検索で確認し、店舗数は当サイトで集計しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ブックオフはギター・ベース・アンプ・エフェクター・キーボード・ドラム・管楽器などを買い取っていますが、
            <strong>楽器の買取を行う店舗は公式の店舗検索で全{ALL_SHOPS}店のうち{GAKKI_SHOPS}店</strong>（約18%）でした。東京都・神奈川県で3分の1を占め、楽器を扱う店舗が見つからない県もあります。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            <strong>ピアノ・エレクトーン、製造から5年以上の電子ピアノ、バイオリン・三味線・琴・ハープ</strong>は買取対象外です。査定に了承すればその場で現金で受け取れます（高額品などは後日の場合あり）。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">楽器を買い取る店舗（{GAKKI_SHOPS}店・当サイト集計）</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-warm-200">
              <thead className="bg-warm-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">店舗の業態</th>
                  <th className="text-left px-4 py-3 font-medium">店舗数</th>
                </tr>
              </thead>
              <tbody>
                {BY_TYPE.map((t) => (
                  <tr key={t.type} className="border-t border-warm-200">
                    <td className="px-4 py-3">{t.type}</td>
                    <td className="px-4 py-3">{t.n}店</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-warm-200">
              <thead className="bg-warm-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">都道府県（上位）</th>
                  <th className="text-left px-4 py-3 font-medium">店舗数</th>
                </tr>
              </thead>
              <tbody>
                {BY_PREF.map((p) => (
                  <tr key={p.pref} className="border-t border-warm-200">
                    <td className="px-4 py-3">{p.pref}</td>
                    <td className="px-4 py-3">{p.n}店</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          楽器を買い取る店舗がある都道府県は27で、残る20県では店舗検索で楽器の買取店舗が見つかりませんでした。
          区分ごとの店舗数は、弦楽器{BY_CAT[0].n}店・楽器周辺機器{BY_CAT[1].n}店・その他楽器{BY_CAT[2].n}店・管楽器{BY_CAT[3].n}店で、管楽器を扱う店舗は少なめです。
          東京都の30店のうち21店は「Rehello by BOOKOFF」の店舗でした。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：
          <a href={BO_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ブックオフ 店舗検索</a>
          で「売りたい」の楽器4区分（弦楽器・管楽器・楽器周辺機器・その他楽器）のいずれかにあてはまる店舗を{ASOF}に取得しました（公式の楽器買取ページの「店舗検索」と同じ条件）。
          全店数は条件なしの検索結果です。取扱いは店舗ごとに変わるため、来店前に各店舗へご確認ください。
        </p>

        <h2 id="exclude" className="text-xl font-bold mt-12 mb-4">買取対象外の楽器（楽器店2社との比較）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">楽器</th>
                <th className="text-left px-4 py-3 font-medium">ブックオフ</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器</th>
                <th className="text-left px-4 py-3 font-medium">イシバシ楽器</th>
              </tr>
            </thead>
            <tbody>
              {EXCLUDE.map((e) => (
                <tr key={e.item} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{e.item}</td>
                  <td className="px-4 py-3">{e.bookoff}</td>
                  <td className="px-4 py-3">{e.shimamura}</td>
                  <td className="px-4 py-3">{e.ishibashi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ブックオフはこのほか、コピー品・模造品と、データ消去や動作確認ができないものを対象外に挙げ、壊れている品物も対象外になる場合があるとしています。
          島村楽器では買取価格検索にバイオリン、取扱い楽器の一覧に電子ピアノが含まれており、ブックオフで断られた楽器は楽器専門の買取店に相談する方法があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={BO_MUSIC} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ブックオフ 楽器の買取・査定</a>・
          <a href={SHIMAMURA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>・
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 楽器買取（よくあるご質問）</a>
          （いずれも{ASOF}取得）。「記載なし」は買取の可否を示すものではありません。
        </p>

        <h2 id="flow" className="text-xl font-bold mt-12 mb-4">売り方と支払い</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>店頭</strong>：楽器を店舗に持ち込み、本人確認書類を提示します。1点ずつ査定し、金額に了承すればその場で現金で支払われます（高額な品物や店舗の状況により後日の場合あり）。
          </li>
          <li>
            <strong>出張</strong>：出張買取は予約制で、出張費は無料です。スタッフが自宅で査定し、買取金額はその場で支払われます。対象エリアは買取方法ごとに異なります。
          </li>
          <li>
            <strong>持参したい物</strong>：保証書、本体の付属品（ケーブルなど）、カバーやケース。購入時の状態に近いほど高い査定につながると案内しています。
          </li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={BO_MUSIC} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ブックオフ 楽器の買取・査定</a>・
          <a href={BO_SELL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ブックオフ 売りたい</a>
          （{ASOF}取得）。
        </p>

        <p className="text-sm leading-relaxed mb-10">
          リサイクル店と楽器専門店の違いは<Link href="/articles/senmonten-vs-recycle/" className="text-accent underline">楽器専門店とリサイクルショップの比較</Link>、
          同じリユースチェーンのハードオフは<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフの楽器買取</Link>、
          島村楽器の条件は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>で整理しています。
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
          currentSlug="bookoff-gakki-kaitori"
          relatedSlugs={["hardoff-gakki-kaitori", "senmonten-vs-recycle", "shimamura-gakki-kaitori", "mercari-vs-gyosha", "gakki-shobun-houhou", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

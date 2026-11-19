import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-19）「ハモンドオルガン 買取」。
// 一次データ: ヤフオクの落札済み検索「ハモンドオルガン」「HAMMOND」「ハモンド オルガン」（2026-11-19 取得・重複除去253件）。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
//   タイトルを1件ずつ読み、オルガン本体・レスリースピーカーだけを機種の系統別に分類（レコード・CD・書籍・フィギュア・衣料・ハーモニカ・
//   真空管/トランスなどの部品・リズムボックス・ペダル類は除外）。
// 業者の対応は各社公式（2026-11-19 取得・HTMLコメントと script 除外）:
//   島村楽器 https://www.shimamura.co.jp/used/（買取取り扱いのない楽器に「オルガン」）・買取価格検索（型番 SK PRO・SK1・XK-5・M-solo・SKX で検索）
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/tentou/（店頭買取のお取り扱いできない物に「オルガン」）
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=organ（ハモンドの事例5件）
//   鈴木楽器製作所 https://www.suzuki-music.co.jp/product_category/hammond/（ホームオルガン・B-3 は生産完了、XK-7/7D 2026年3月7日発売）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月19日";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=SK+PRO&num=100&pg=1";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/tentou/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=organ";
const SUZUKI = "https://www.suzuki-music.co.jp/product_category/hammond/";

// ヤフオク落札（当サイト集計）
const Y_GROUPS: { group: string; models: string; n: number; prices: string }[] = [
  {
    group: "B-3（トーンホイール）",
    models: "B-3＋レスリー 122/147",
    n: 3,
    prices: "17,900円（観賞用）・522,000円・541,200円（ジャンク・店舗受取限定）",
  },
  {
    group: "現行系ステージキーボード",
    models: "SK1（61/73鍵）・SK PRO（61/73鍵）",
    n: 5,
    prices: "132,000〜220,000円（中央値152,000円）",
  },
  {
    group: "XK シリーズ",
    models: "XK-2・XK-5（2段鍵盤・足鍵盤つきセット）",
    n: 3,
    prices: "XK-2 32,900円・35,000円／XK-5 セット 396,000円",
  },
  {
    group: "1990年代のポータブル・音源",
    models: "XB-1・XB-2・XE-1・XM-1・XM-2",
    n: 9,
    prices: "3,300〜41,600円（中央値25,000円）",
  },
  {
    group: "家庭用の旧型（日本ハモンドほか）",
    models: "17050K・XT-100・Super SX-1・R-182・18150KT",
    n: 7,
    prices: "1,600〜52,000円（中央値11,792円）",
  },
  {
    group: "レスリースピーカー",
    models: "3300P・147・312・820",
    n: 4,
    prices: "35,000〜198,000円",
  },
];

const SHIMA_ROWS: { model: string; a: string; b: string; c: string }[] = [
  { model: "SKX PRO", a: "150,000円", b: "128,000円", c: "97,000円" },
  { model: "XK-5", a: "143,000円", b: "121,000円", c: "88,000円" },
  { model: "SK PRO-73", a: "122,000円", b: "105,000円", c: "81,000円" },
  { model: "SK PRO", a: "111,000円", b: "96,000円", c: "74,000円" },
  { model: "SKX", a: "66,000円", b: "53,000円", c: "33,000円" },
  { model: "SK1-73", a: "64,000円", b: "53,000円", c: "37,000円" },
  { model: "M-solo", a: "53,000円", b: "46,000円", c: "34,000円" },
];

const FAQ = [
  {
    q: "島村楽器はオルガンを買い取らないと聞きましたが、ハモンドも売れませんか？",
    a: `島村楽器の「買取取り扱いのない楽器」には「オルガン」が挙げられていますが、買取価格検索にはハモンドの SK PRO・SK1・XK-5・M-solo・SKX がステージキーボード・シンセサイザーの区分で掲示されています（${ASOF}確認）。持ち運べる現行系のモデルは、型番で検索してから相談するのが確実です。`,
  },
  {
    q: "B-3 のような大型のハモンドはどこに売ればよいですか？",
    a: "楽器の買取屋さんはハモンドのオルガンの買取事例を5件（27,000〜135,000円）公開しており、出張費・査定料・搬出費用は無料と案内しています。ヤフオクでは B-3 とレスリーのセットが50万円台で落札された例があり、いずれも店舗受取や直接引取の条件がついていました。",
  },
  {
    q: "古い家庭用のハモンドにも値段はつきますか？",
    a: `日本ハモンドの 17050K などの家庭用・旧型モデルは、ヤフオクで1,600円〜52,000円の落札でした（${ASOF}取得・7件）。鈴木楽器製作所の製品ページでもホームオルガンは「生産を完了」と案内されています。売れない場合は自治体の粗大ごみで処分する方法があります。`,
  },
  {
    q: "レスリースピーカーだけでも売れますか？",
    a: "ヤフオクではレスリースピーカー単体が35,000円〜198,000円で落札されていました（3300P・147・312・820 の4件）。オルガン本体と別に査定を依頼できます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ハモンドオルガンの買取", href: "/articles/hammond-organ-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/hammond-organ-kaitori/" },
  title: "ハモンドオルガンの買取相場｜機種の系統別の落札価格と島村楽器の掲示7型番【2026年11月】",
  description:
    "ハモンドオルガンの買取相場を、ヤフオクの落札31件を B-3・SK・XK・XB・家庭用・レスリーの系統別に集計して整理しました。島村楽器が掲示している7型番の買取価格と、オルガンを扱わない楽器店の条件も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ハモンドオルガンの買取相場｜系統別の落札価格と島村楽器の掲示7型番【2026年11月】",
    description: "B-3・SK・XK・XB・家庭用・レスリーの落札価格と、ハモンドを買い取る業者・扱わない楽器店。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ハモンドオルガンの買取相場｜機種の系統別の落札価格と島村楽器の掲示7型番",
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/hammond-organ-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ハモンドオルガンの買取", item: "https://gakkikaitori-biyori.com/articles/hammond-organ-kaitori/" },
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
          ハモンドオルガンの買取相場｜機種の系統別の落札価格と島村楽器の掲示7型番
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ハモンドは機種の系統で相場が大きく分かれます。ヤフオクでは<strong>現行系の SK1・SK PRO が13万〜22万円</strong>、
            1990年代の XB・XE・XM は数千円〜4万円台、日本ハモンドの家庭用モデルは1万円前後が中心でした。B-3 とレスリーのセットは50万円台の落札があります。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            島村楽器・イシバシ楽器は「オルガン」を買取の対象外に挙げていますが、<strong>島村楽器の買取価格検索には SK PRO・XK-5 など7型番が掲示</strong>されています。
            持ち運べる現行系モデルは楽器店、大型・旧型は出張に対応する業者という分け方が目安になります。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（系統別・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">系統</th>
                <th className="text-left px-4 py-3 font-medium">落札された機種</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">落札価格</th>
              </tr>
            </thead>
            <tbody>
              {Y_GROUPS.map((g) => (
                <tr key={g.group} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{g.group}</td>
                  <td className="px-4 py-3">{g.models}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{g.n}件</td>
                  <td className="px-4 py-3">{g.prices}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          このほか、M-solo（49鍵）が108,500円、44 HYPER・PRO-44Hv2 が17,000円前後で落札されていました。
          XB-2 は「動作良好」「鍵盤音出しOK」とある出品が約4万円、「ジャンク品」は3,300円で、動作の確認の有無で10倍以上の差がありました。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「ハモンドオルガン」「HAMMOND」「ハモンド オルガン」の結果（{ASOF}取得・重複を除いて253件）からタイトルを1件ずつ確認し、
          オルガン本体とレスリースピーカーだけを残しました。レコード・CD・書籍・フィギュア・衣料・ハーモニカ・真空管やトランスなどの部品・リズムボックス・ペダル類は除外しています。
          落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（ハモンド7型番）</h2>
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
              {SHIMA_ROWS.map((r) => (
                <tr key={r.model} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3">{r.a}</td>
                  <td className="px-4 py-3">{r.b}</td>
                  <td className="px-4 py-3">{r.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          SK PRO-73 の掲示（Aランク122,000円）は、ヤフオクで落札された SK PRO-73 の2件（148,000円・220,000円）より低い水準です。
          島村楽器の買取代金は口座振込のみで、現金での支払いは行っていません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>
          （型番 SK PRO・SK1・XK-5・M-solo・SKX で検索・{ASOF}確認）。区分は「ステージピアノ・ステージキーボード」「その他シンセサイザー」です。XK-3・XK-4 は同じ検索で掲示が見つかりませんでした。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">ハモンドを買い取る業者・扱わない楽器店</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">
                  オルガンの買取事例のうちハモンドは5件（27,000円・53,000円・100,000円・108,000円・135,000円、2017〜2018年）。出張費・査定料・搬出費用は無料
                </td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">
                  「買取取り扱いのない楽器」に「オルガン」を掲載。一方で買取価格検索にはハモンドの7型番を掲示（上の表）
                </td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">店頭買取の「お取り扱いできない物」に「オルガン」を掲載。ハモンドのステージキーボードの扱いは記載がありません</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          メーカーの鈴木楽器製作所（ハモンドの国内製造・販売元）は、製品ページで「ホームオルガン」と「B-3」を生産完了と案内しています。
          現行の製品はドローバーキーボード・ステージキーボード・コンボオルガンの3区分で、2026年3月7日に XK-7・XK-7D が発売されました。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん オルガンの買取事例</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>・
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 店頭買取</a>・
          <a href={SUZUKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">鈴木楽器製作所 ハモンドオルガン</a>
          （いずれも{ASOF}取得）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>型番</strong>：同じハモンドでも、SK・XK の現行系と1990年代の XB、家庭用の旧型では相場が一桁違います。本体の銘板や背面の表示で型番を確かめます。
          </li>
          <li>
            <strong>動作</strong>：鍵盤・ドローバー・レスリー切り替えの動作は査定額に直結します。落札データでも XB-2 は動作確認済みの出品とジャンク品で10倍以上の差がありました。
          </li>
          <li>
            <strong>付属品</strong>：足鍵盤・エクスプレッションペダル・専用ケース・スタンドがあれば一緒に査定に出します。
          </li>
          <li>
            <strong>搬出</strong>：B-3 や家庭用の大型モデルは宅配で送れないため、出張査定を依頼する際は設置場所と搬出経路を伝えておきます。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          オルガン全般の売り先と処分費用は<Link href="/articles/organ-kaitori/" className="text-accent underline">オルガンの買取</Link>、
          エレクトーンは<Link href="/articles/electone-kaitori/" className="text-accent underline">エレクトーン買取</Link>、
          持ち運べるキーボード類は<Link href="/articles/synthesizer-kaitori/" className="text-accent underline">シンセサイザー買取</Link>で整理しています。
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
          currentSlug="hammond-organ-kaitori"
          relatedSlugs={["piano-kaitori", "organ-kaitori", "electone-kaitori", "synthesizer-kaitori", "keyboard-kaitori", "gakki-shucchou-kaitori", "reed-organ-kaitori"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-19）「スネアドラム 買取」。
// 一次データ:
//   ① 島村楽器「買取価格検索」のドラムカテゴリ（cat=12）全件を取得（2026-11-19・8,073行）→ 楽器カテゴリー「スネアドラム」2,914型番を当サイトで集計。
//   ② ヤフオクの落札済み検索「スネアドラム」（2026-11-19 取得・200件）。取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
//      タイトルでスネア本体以外（スティック・マイク・スタンド・ヘッド単体・フープ・ラグ・ストレイナー・ケース単体・練習パッド・電子ドラム・まとめ売り・新品/未使用・マーチング）を除外＝125件。
//      ブランドはタイトルに最初に出るブランド名で分類（他社のヘッドやスタンドが付属する出品の誤分類を避けるため）。
// 業者の対応は各社公式（2026-11-19 取得・HTMLコメントと script 除外）:
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=drums&small-cat=snare（スネアの買取事例 86件・メーカー別）
//   イシバシ楽器 https://www.ishibashi.co.jp/ec/sp/52snare/（査定の確認項目・ランク）
//   島村楽器 https://www.shimamura.co.jp/used/（支払いは振込のみ）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月19日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=12&inst=&brand=&model=&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=drums&small-cat=snare";
const ISHIBASHI = "https://www.ishibashi.co.jp/ec/sp/52snare/";

// ① 島村楽器 買取価格検索（当サイト集計）
const S_TOTAL = 2914;
const S_MEDIAN = 22000;
const S_BANDS = [
  { band: "5,000円未満", n: 28 },
  { band: "5,000〜1万円未満", n: 284 },
  { band: "1万〜2万円未満", n: 976 },
  { band: "2万〜5万円未満", n: 1211 },
  { band: "5万〜10万円未満", n: 392 },
  { band: "10万円以上", n: 23 },
];
const S_BRANDS: { brand: string; n: number; median: string; max: string }[] = [
  { brand: "Pearl（パール）", n: 544, median: "18,500円", max: "228,000円" },
  { brand: "TAMA（タマ）", n: 427, median: "20,000円", max: "545,000円" },
  { brand: "GRETSCH（グレッチ）", n: 268, median: "30,000円", max: "115,000円" },
  { brand: "Ludwig（ラディック）", n: 213, median: "35,000円", max: "323,000円" },
  { brand: "NEGI（ネギ）", n: 188, median: "12,000円", max: "24,000円" },
  { brand: "YAMAHA（ヤマハ）", n: 181, median: "19,000円", max: "118,000円" },
  { brand: "CANOPUS（カノウプス）", n: 177, median: "17,000円", max: "79,000円" },
  { brand: "DW（ディーダブリュー）", n: 176, median: "59,000円", max: "120,000円" },
  { brand: "SONOR（ソナー）", n: 139, median: "41,000円", max: "257,000円" },
];

// ② ヤフオク落札（当サイト集計）
const Y_TOTAL = 125;
const Y_MEDIAN = 25501;
const Y_BRANDS: { brand: string; n: number; median: string }[] = [
  { brand: "Pearl", n: 47, median: "21,550円" },
  { brand: "Ludwig", n: 17, median: "71,000円" },
  { brand: "YAMAHA", n: 17, median: "26,291円" },
  { brand: "TAMA", n: 10, median: "19,200円" },
  { brand: "GRETSCH", n: 6, median: "56,375円" },
  { brand: "CANOPUS", n: 4, median: "51,900円" },
  { brand: "その他（SONOR・NEGI・DW ほか）", n: 24, median: "—" },
];

// ③ 楽器の買取屋さん（公式の買取事例）
const K_ROWS: { brand: string; n: number; min: string; mid: string; max: string }[] = [
  { brand: "ヤマハ", n: 19, min: "10,000円", mid: "16,500円", max: "63,000円" },
  { brand: "ラディック", n: 14, min: "11,500円", mid: "30,000円", max: "54,900円" },
  { brand: "ソナー", n: 13, min: "20,000円", mid: "42,500円", max: "93,000円" },
  { brand: "カノウプス", n: 13, min: "11,000円", mid: "24,500円", max: "68,000円" },
  { brand: "パール", n: 8, min: "10,000円", mid: "11,750円", max: "30,000円" },
  { brand: "グレッチ", n: 8, min: "24,000円", mid: "39,000円", max: "55,000円" },
];

const yen = (n: number) => n.toLocaleString("ja-JP");

const FAQ = [
  {
    q: "スネアドラムの買取価格はどれくらいですか？",
    a: `島村楽器の買取価格検索に掲示されているスネアドラム${yen(S_TOTAL)}型番の上限額（Aランク）は、中央値が${yen(S_MEDIAN)}円でした。2万〜5万円未満が最も多く、10万円以上は23型番です。楽器の買取屋さんが公開しているスネアの買取事例86件の中間価格は30,000円です（いずれも${ASOF}確認）。`,
  },
  {
    q: "ヴィンテージのLudwigは島村楽器の掲示額で売るべきですか？",
    a: "島村楽器の掲示ではLudwig LM400のAランクが17,000円ですが、ヤフオクでは1970年代のLM400・LM402が7万〜15万円で落札されています。掲示は型番ごとの目安で、製造年代は区別されていません。年代物はヴィンテージの扱いがある店にも査定を依頼し、金額を比べることをおすすめします。",
  },
  {
    q: "ヘッドが古いままでも買い取ってもらえますか？",
    a: "買い取りの対象にはなります。イシバシ楽器は査定を減点方式とし、ヘッドの状態も確認項目に挙げています。交換が必要な部品がある場合はBランク以下、修理が必要な場合はさらに減額としています。",
  },
  {
    q: "島村楽器でスネアを売ると現金でもらえますか？",
    a: "島村楽器の買取代金は指定口座への振込で、現金での支払いは行っていないと公式サイトに記載されています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "スネアドラムの買取", href: "/articles/snare-drum-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/snare-drum-kaitori/" },
  title: "スネアドラムの買取価格｜島村楽器の掲示2,914型番とヤフオク落札125件をブランド別に集計【2026年11月】",
  description:
    "スネアドラムの買取価格を、島村楽器の買取価格検索に掲示された2,914型番とヤフオク落札125件からブランド別に集計しました。ヴィンテージで掲示額と落札額が大きく離れる例や、査定で見られる項目も整理しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "スネアドラムの買取価格｜掲示2,914型番と落札125件をブランド別に集計【2026年11月】",
    description: "島村楽器の掲示額とヤフオク落札をブランド別に比較。ヴィンテージの扱いと査定の確認項目。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "スネアドラムの買取価格｜島村楽器の掲示2,914型番とヤフオク落札125件をブランド別に集計",
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/snare-drum-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "スネアドラムの買取", item: "https://gakkikaitori-biyori.com/articles/snare-drum-kaitori/" },
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
          スネアドラムの買取価格｜島村楽器の掲示2,914型番とヤフオク落札125件をブランド別に集計
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に島村楽器の買取価格検索とヤフオクの落札データを取得して当サイトで集計し、業者の対応は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器が掲示しているスネアドラム{yen(S_TOTAL)}型番の上限額（Aランク）は、<strong>中央値{yen(S_MEDIAN)}円</strong>です。
            全体の4割強が2万〜5万円未満に入り、10万円を超えるのは限定モデルなど23型番だけでした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ブランド別ではDW・SONOR・Ludwigの掲示が高めです。ただし<strong>1970年代のLudwig LM400・LM402は、ヤフオクで掲示額の4倍以上で落札</strong>されており、
            年代物は型番の掲示額だけで判断しないことが大切です。
          </p>
        </div>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示買取価格（スネアドラム{yen(S_TOTAL)}型番・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Aランクの上限額</th>
                <th className="text-left px-4 py-3 font-medium">型番の数</th>
              </tr>
            </thead>
            <tbody>
              {S_BANDS.map((b) => (
                <tr key={b.band} className="border-t border-warm-200">
                  <td className="px-4 py-3">{b.band}</td>
                  <td className="px-4 py-3">{yen(b.n)}型番</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">掲示の型番数</th>
                <th className="text-left px-4 py-3 font-medium">Aランクの中央値</th>
                <th className="text-left px-4 py-3 font-medium">最高額</th>
              </tr>
            </thead>
            <tbody>
              {S_BRANDS.map((b) => (
                <tr key={b.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3">{b.brand}</td>
                  <td className="px-4 py-3">{b.n}型番</td>
                  <td className="px-4 py-3">{b.median}</td>
                  <td className="px-4 py-3">{b.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          最高額は TAMA PL555（545,000円）、続いて TAMA PL565（436,000円）、Ludwig LLS354XX シリーズ（323,000円）でした。
          Ludwig の定番 LM400 は Aランク17,000円・Bランク13,000円・Cランク8,000円、LM402 は18,000円・14,000円・9,000円、
          ブラックビューティー LB416 は29,000円・23,000円・14,000円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（ドラムカテゴリ）</a>
          の全8,073行を{ASOF}に取得し、楽器カテゴリーが「スネアドラム」の行を集計しました。Aランク＝新品同様で傷や汚れがなく機能に問題がない状態の上限額です（島村楽器の定義）。
          掲示は査定の目安で、実際の買取額は状態・付属品で変わります。
        </p>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格との比較（{Y_TOTAL}件・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">落札価格の中央値</th>
              </tr>
            </thead>
            <tbody>
              {Y_BRANDS.map((b) => (
                <tr key={b.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3">{b.brand}</td>
                  <td className="px-4 py-3">{b.n}件</td>
                  <td className="px-4 py-3">{b.median}</td>
                </tr>
              ))}
              <tr className="border-t border-warm-200 font-medium">
                <td className="px-4 py-3">合計</td>
                <td className="px-4 py-3">{Y_TOTAL}件</td>
                <td className="px-4 py-3">{yen(Y_MEDIAN)}円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          落札全体の中央値（{yen(Y_MEDIAN)}円）は島村楽器の掲示の中央値に近い水準でした。目立って離れていたのは Ludwig で、
          落札された LM400・LM402（スープラフォニック）6件は69,300円〜150,000円、タイトルに「1970年代」「ヴィンテージ」とある出品が中心です。
          同じ型番の島村楽器の掲示（Aランク17,000円・18,000円）は年代を区別しておらず、イシバシ楽器はスネアの買取ページで Ludwig・SONOR・GRETSCH・ROGERS・SLINGERLAND の「ビンテージ大歓迎」を掲げています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「スネアドラム」の結果200件（{ASOF}取得）から、スネア本体以外（スティック・マイク・スタンド・ヘッド単体・フープ・ラグ・ストレイナー・ケース単体・練習パッド・電子ドラム・まとめ売り・新品/未使用・マーチング用）を除いた{Y_TOTAL}件です。
          ブランドはタイトルに最初に出るブランド名で分けました。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="kaitoriya" className="text-xl font-bold mt-12 mb-4">買取事例を公開している業者（楽器の買取屋さん）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんはスネアの買取事例を86件公開しており、全体は最低10,000円・中間30,000円・最高102,960円です。メーカー別の内訳は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">メーカー</th>
                <th className="text-left px-4 py-3 font-medium">事例数</th>
                <th className="text-left px-4 py-3 font-medium">最低</th>
                <th className="text-left px-4 py-3 font-medium">中間</th>
                <th className="text-left px-4 py-3 font-medium">最高</th>
              </tr>
            </thead>
            <tbody>
              {K_ROWS.map((r) => (
                <tr key={r.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3">{r.brand}</td>
                  <td className="px-4 py-3">{r.n}件</td>
                  <td className="px-4 py-3">{r.min}</td>
                  <td className="px-4 py-3">{r.mid}</td>
                  <td className="px-4 py-3">{r.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん スネアの買取事例</a>
          （{ASOF}取得）。DW 5件・TAMA 4件・SAKAE 3件は表から省いています。
        </p>

        <h2 id="satei" className="text-xl font-bold mt-12 mb-4">査定で確認される項目</h2>
        <p className="text-sm leading-relaxed mb-4">
          イシバシ楽器はスネアの査定を減点方式としており、公式ページに次の確認項目を挙げています。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>ドラムヘッドが新しいか、状態が良いか</li>
          <li>シェルに変形・キズ・ヒビがないか</li>
          <li>フープ（リム）の変形・キズ・錆</li>
          <li>テンションロッドがすべて揃い、錆びずに動くか</li>
          <li>スナッピー（スネアワイヤー）の状態とテンション調整</li>
          <li>シェル・ヘッド・フープ・スナッピーの組み合わせがオリジナルか、適切な組み合わせか</li>
          <li>本来の付属品が揃っているか</li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          傷・汚れがなければAランク、汚れや細かい傷があればB+ランクで、パーツ交換が必要な場合はBランク以下、修理が必要な場合はさらに減額となります。
          島村楽器の買取代金は口座振込のみで、現金での支払いは行っていません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 スネアドラム買取</a>・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>
          （いずれも{ASOF}取得）。
        </p>

        <p className="text-sm leading-relaxed mb-10">
          ドラムセットやシンバルもまとめて売る場合は<Link href="/articles/drum-kaitori/" className="text-accent underline">ドラム買取</Link>、
          Ludwig のスープラフォニックは<Link href="/articles/ludwig-supraphonic-kaitori/" className="text-accent underline">ラディック スープラフォニックの買取</Link>、
          ほかの打楽器は<Link href="/articles/dagakki-kaitori/" className="text-accent underline">打楽器の買取</Link>で整理しています。
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
          currentSlug="snare-drum-kaitori"
          relatedSlugs={["drum-kaitori", "ludwig-supraphonic-kaitori", "ludwig-kaitori", "pearl-kaitori", "sonor-kaitori", "dagakki-kaitori"]}
        />
      </article>
    </>
  );
}

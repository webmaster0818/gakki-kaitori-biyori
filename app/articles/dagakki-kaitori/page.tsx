import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-19）「打楽器 買取」。
// 一次データ:
//   ① 島村楽器「買取価格検索」のドラムカテゴリ（cat=12）全8,073行を取得（2026-11-19）→ 楽器カテゴリーの内訳を当サイトで集計
//      （シンバル3,781・スネアドラム2,914・その他ハードウェア1,256・電子ドラム122。ハンドパーカッション・コンサート打楽器の行は0）。
//   ② ヤフオクの落札済み検索「コンガ」「ジャンベ」「ボンゴ」「ティンパニ」「グロッケン」「ビブラフォン」（2026-11-19 取得・各100件前後）。
//      取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
//      タイトルに打楽器メーカー名（LP・Pearl・REMO・TOCA・MEINL・YAMAHA・ADAMS・Saito・KOROGI・Ludwig・KAWAI・KOSTH・Gon Bops・Nikkan・Tribal Beat など）があるものに限り、
//      レコード・CD・ゲーム周辺機器・スカーフ・ヘッド単体・スタンド単体・マレット・チューニングキー・子供用・新品/未使用を除外。
//      「直接引取」の件数は、タイトルに「引取」「引き取り」「手渡し」「配送不可」「店頭受取」「直接取引」のいずれかがある出品を数えた。
// 業者の対応は各社公式（2026-11-19 取得・HTMLコメントと script 除外）:
//   島村楽器 https://www.shimamura.co.jp/used/（鍵盤打楽器は買取対象外・アコースティックドラムセットは一部店舗の店舗買取のみ）
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=percussion（パーカッションの買取事例68件・内訳）
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/（ドラム買取の対象品目）
//   ティファナ https://www.tifana.net/music/（楽器の買取品目に「打楽器」）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月19日";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=12&inst=&brand=&model=&num=100&pg=1";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=percussion";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/";
const TIFANA = "https://www.tifana.net/music/";

const SHIMA_CAT: { cat: string; n: number }[] = [
  { cat: "シンバル", n: 3781 },
  { cat: "スネアドラム", n: 2914 },
  { cat: "その他 ハードウェア", n: 1256 },
  { cat: "電子ドラム", n: 122 },
];

const KAITORIYA_ROWS: { kind: string; n: number; min: string; mid: string; max: string }[] = [
  { kind: "マリンバ", n: 47, min: "15,000円", mid: "110,000円", max: "450,000円" },
  { kind: "ビブラフォン", n: 9, min: "32,500円", mid: "64,800円", max: "380,000円" },
  { kind: "その他のパーカッション", n: 5, min: "4,600円", mid: "35,000円", max: "190,000円" },
  { kind: "コンガ", n: 3, min: "46,800円", mid: "69,300円", max: "150,000円" },
  { kind: "ティンパニー", n: 3, min: "40,000円", mid: "57,600円", max: "405,000円" },
];

const Y_ROWS: { kind: string; n: number; median: string; range: string; pickup: number }[] = [
  { kind: "ティンパニ", n: 29, median: "65,010円", range: "6,000〜990,000円", pickup: 17 },
  { kind: "ビブラフォン", n: 18, median: "62,700円", range: "1,100〜366,410円", pickup: 13 },
  { kind: "コンガ", n: 23, median: "18,000円", range: "1,100〜132,000円", pickup: 4 },
  { kind: "ジャンベ", n: 26, median: "14,960円", range: "1,430〜56,000円", pickup: 1 },
  { kind: "グロッケン", n: 31, median: "11,244円", range: "1,000〜82,200円", pickup: 0 },
  { kind: "ボンゴ", n: 7, median: "3,100円", range: "1,000〜22,500円", pickup: 0 },
];

const yen = (n: number) => n.toLocaleString("ja-JP");
const SHIMA_TOTAL = SHIMA_CAT.reduce((a, b) => a + b.n, 0);

const FAQ = [
  {
    q: "島村楽器でコンガやティンパニを売れますか？",
    a: `島村楽器の買取価格検索のドラムカテゴリ（${yen(SHIMA_TOTAL)}行・${ASOF}取得）はシンバル・スネアドラム・ハードウェア・電子ドラムだけで、コンガやティンパニなどの掲示はありませんでした。マリンバ・ビブラフォンなどの鍵盤打楽器は「買取取り扱いのない楽器」に挙げられています。売れるかどうかは店舗に問い合わせて確認してください。`,
  },
  {
    q: "打楽器の買取事例を公開している業者はありますか？",
    a: "楽器の買取屋さんはパーカッションの買取事例を68件公開しており、マリンバ47件・ビブラフォン9件・コンガ3件・ティンパニー3件などが含まれます。全体の中間価格は95,750円です。",
  },
  {
    q: "大型の打楽器は宅配で送れますか？",
    a: "ヤフオクで落札されたティンパニ29件のうち17件、ビブラフォン18件のうち13件は、タイトルに直接引取・配送不可などの条件が書かれていました。大型の打楽器は出張買取に対応する業者に相談するのが現実的です。",
  },
  {
    q: "スネアやシンバルはどこで相場を調べられますか？",
    a: "島村楽器の買取価格検索ではスネアドラム2,914型番・シンバル3,781型番の掲示買取価格を型番で調べられます。スネアの集計は当サイトのスネアドラムの買取ページで整理しています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "打楽器の買取", href: "/articles/dagakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/dagakki-kaitori/" },
  title: "打楽器の買取｜種類別の落札相場と、コンガ・ティンパニを扱う業者・扱わない楽器店【2026年11月】",
  description:
    "打楽器の買取相場を、ティンパニ・ビブラフォン・コンガ・ジャンベ・グロッケン・ボンゴのヤフオク落札から種類別に集計しました。島村楽器の掲示8,073行の内訳と、パーカッションの買取事例を公開している業者を公式情報で整理しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "打楽器の買取｜種類別の落札相場と、扱う業者・扱わない楽器店【2026年11月】",
    description: "6種類の打楽器の落札相場と直接引取の割合、楽器店ごとの打楽器の扱い。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "打楽器の買取｜種類別の落札相場と、コンガ・ティンパニを扱う業者・扱わない楽器店",
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/dagakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "打楽器の買取", item: "https://gakkikaitori-biyori.com/articles/dagakki-kaitori/" },
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
          打楽器の買取｜種類別の落札相場と、コンガ・ティンパニを扱う業者・扱わない楽器店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に島村楽器の買取価格検索とヤフオクの落札データを取得して当サイトで集計し、業者の対応は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            打楽器は、ドラム（スネア・シンバル・ハードウェア）と、それ以外のパーカッションで売り先が分かれます。
            島村楽器の買取価格検索のドラムカテゴリ{yen(SHIMA_TOTAL)}行は<strong>すべてドラム関連で、コンガ・ジャンベ・ティンパニなどの掲示は0件</strong>でした。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクの落札では、<strong>ティンパニ・ビブラフォンの中央値が6万円台</strong>、コンガ・ジャンベ・グロッケンは1万円台でした。
            ティンパニ・ビブラフォンは半数以上が直接引取の条件つきで、出張に対応する業者が中心の売り先になります。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">種類別の落札相場（ヤフオク・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">種類</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">落札価格の範囲</th>
                <th className="text-left px-4 py-3 font-medium">直接引取の記載</th>
              </tr>
            </thead>
            <tbody>
              {Y_ROWS.map((r) => (
                <tr key={r.kind} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.kind}</td>
                  <td className="px-4 py-3">{r.n}件</td>
                  <td className="px-4 py-3">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                  <td className="px-4 py-3">{r.pickup}件</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          高値の出品は、ティンパニが ADAMS の4台セット（990,000円）やヤマハのペダルティンパニ4台セット（501,000円）、ビブラフォンがヤマハ YV-3000AJ（278,300円・331,100円）、
          コンガが LP・Gon Bops のペアでした。同じ種類でもセットか1台か、ペダル式か手締め式かで価格が大きく変わります。ボンゴは件数が7件と少なく、参考値です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索（{ASOF}取得・種類ごとに100件前後）から、タイトルに打楽器メーカー名（LP・Pearl・REMO・TOCA・MEINL・YAMAHA・ADAMS・Saito・KOROGI・Ludwig・KAWAI・KOSTH・Gon Bops・Nikkan など）があるものに限り、
          レコード・CD・ゲーム周辺機器・ヘッド単体・スタンド単体・マレット・子供用・新品/未使用を除きました。「直接引取の記載」はタイトルに引取・手渡し・配送不可・店頭受取の記載がある件数です。
          落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="shimamura" className="text-xl font-bold mt-12 mb-4">島村楽器の掲示はドラム関連だけ（{yen(SHIMA_TOTAL)}行の内訳）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">楽器カテゴリー</th>
                <th className="text-left px-4 py-3 font-medium">掲示の行数</th>
              </tr>
            </thead>
            <tbody>
              {SHIMA_CAT.map((c) => (
                <tr key={c.cat} className="border-t border-warm-200">
                  <td className="px-4 py-3">{c.cat}</td>
                  <td className="px-4 py-3">{yen(c.n)}行</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は「買取取り扱いのない楽器」に鍵盤打楽器（マリンバ・シロフォン・グロッケン・ヴァイブ・ビブラフォンなど）を挙げ、
          アコースティックドラムセットは一部店舗の店舗買取のみ（出張・宅配は利用不可）としています。買取代金は口座振込のみです。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（ドラムカテゴリ）</a>
          の全行を{ASOF}に取得して集計・
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>。
          掲示がない楽器でも、店舗で相談できる場合があります。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">打楽器を扱う業者</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんはパーカッションの買取事例を68件公開しています（全体は最低4,600円・中間95,750円・最高450,000円）。主な内訳は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">種類</th>
                <th className="text-left px-4 py-3 font-medium">事例数</th>
                <th className="text-left px-4 py-3 font-medium">最低</th>
                <th className="text-left px-4 py-3 font-medium">中間</th>
                <th className="text-left px-4 py-3 font-medium">最高</th>
              </tr>
            </thead>
            <tbody>
              {KAITORIYA_ROWS.map((r) => (
                <tr key={r.kind} className="border-t border-warm-200">
                  <td className="px-4 py-3">{r.kind}</td>
                  <td className="px-4 py-3">{r.n}件</td>
                  <td className="px-4 py-3">{r.min}</td>
                  <td className="px-4 py-3">{r.mid}</td>
                  <td className="px-4 py-3">{r.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            楽器の買取屋さん：出張費・査定費・作業代・搬出費用はかからないと公式のよくある質問で案内しています。
          </li>
          <li>
            ティファナ：楽器の買取品目に「打楽器」を掲載しています。
          </li>
          <li>
            イシバシ楽器：ドラム買取の対象としてスネアドラム・シンバル・ドラムセット・ドラムタム・キックペダル・ドラム用ケースを挙げています。楽器買取のページにパーカッションの記載はありません。
          </li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん パーカッションの買取事例</a>・
          <a href={TIFANA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ティファナ 楽器の買取</a>・
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 楽器買取</a>
          （いずれも{ASOF}取得）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>メーカーと型番</strong>：ティンパニやビブラフォンは型番で価格帯が大きく変わります。脚やフレームのラベルで型番を確かめます。
          </li>
          <li>
            <strong>台数・セット</strong>：ティンパニは2台・4台のセットで取引されることが多く、セットのまま査定に出すか、1台ずつにするかで売り先が変わります。
          </li>
          <li>
            <strong>搬出</strong>：ティンパニ・ビブラフォン・マリンバは宅配で送りにくいため、設置場所と搬出経路を伝えて出張査定を依頼します。
          </li>
          <li>
            <strong>付属品</strong>：ケース・カバー・スタンド・マレット・チューニングキーがあれば一緒に査定に出します。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          種類ごとの詳しい相場は<Link href="/articles/snare-drum-kaitori/" className="text-accent underline">スネアドラムの買取</Link>・
          <Link href="/articles/marimba-kaitori/" className="text-accent underline">マリンバの買取</Link>・
          <Link href="/articles/cajon-kaitori/" className="text-accent underline">カホン買取</Link>・
          <Link href="/articles/drum-kaitori/" className="text-accent underline">ドラム買取</Link>で整理しています。
          出張買取の流れは<Link href="/articles/gakki-shucchou-kaitori/" className="text-accent underline">楽器の出張買取</Link>をご覧ください。
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
          currentSlug="dagakki-kaitori"
          relatedSlugs={["drum-kaitori", "snare-drum-kaitori", "marimba-kaitori", "cajon-kaitori", "gakki-shucchou-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

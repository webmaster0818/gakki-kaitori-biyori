import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-17）「楽器ケース 買取」。
// 一次データ1: ヤフオク落札済み検索（2026-11-17 取得）「ギター ハードケース」「ベース ハードケース」「SKB ギターケース」「BAM ケース」「Hiscox ケース」
//   の結果（各上位100件）を合わせ、ケース単体の出品だけを当サイトがタイトルで選別＝106件。
//   除外：楽器本体とセット（「付」「付き」「付属」等）、楽器本体の出品、エフェクターボード・ラック、工具箱・ミリタリーケース、スマホケース等。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
// 一次データ2: イシバシ楽器 買取価格検索「ケース」（2026-11-17 表示・117件ヒットのうち表示された先頭20件）。
// 業者の記載: イシバシ楽器 https://www.ishibashi.co.jp/kaitori/（買取対象にギター・ベース用ケース、ドラム用ケース）
//   クロサワ楽器 https://www.kurosawagakki.com/kaikuro/takuhai.html（専用ケース等の付属品は楽器と一緒に・欠品は査定額に影響）
//   島村楽器 https://www.shimamura.co.jp/used/（買取取り扱いのない楽器に「ケーブル、スタンド類等の周辺アクセサリー類」）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月17日";
const ISHI = "https://www.ishibashi.co.jp/kaitori/";
const ISHI_SEARCH = "https://www.ishibashi.co.jp/kaitori/kaitori_search.php";
const KURO = "https://www.kurosawagakki.com/kaikuro/takuhai.html";
const SHIMA = "https://www.shimamura.co.jp/used/";

const Y_TOTAL = 106;
const BY_TYPE: { type: string; n: number; median: string; mid: string; range: string }[] = [
  { type: "ギター用（エレキ・アコギ・クラシック）", n: 53, median: "10,000円", mid: "6,655〜15,500円", range: "1,100〜81,000円" },
  { type: "ベース用", n: 15, median: "8,800円", mid: "5,500〜10,500円", range: "3,400〜30,000円" },
  { type: "管楽器用（サックス・トランペット・フルートなど）", n: 26, median: "約2.2万円", mid: "15,000〜35,200円", range: "5,250〜115,000円" },
  { type: "弦楽器用（バイオリン・ビオラ・チェロ）", n: 12, median: "約3.3万円", mid: "22,550〜56,000円", range: "4,100〜126,000円" },
];

// イシバシ楽器の買取価格検索「ケース」で表示された先頭20件からの抜粋（美品／良品／並品）
const ISHI_ROWS: { kind: string; item: string; a: string; b: string; c: string }[] = [
  { kind: "エレキギター用", item: "RITTER RG3000", a: "500円", b: "300円", c: "100円" },
  { kind: "エレキギター用", item: "RITTER RG9000 2005", a: "1,000円", b: "500円", c: "100円" },
  { kind: "エレキギター用", item: "RITTER RG9000-6 DE（2本用）", a: "2,000円", b: "1,000円", c: "500円" },
  { kind: "エフェクター用", item: "BOSS BCB-30（ペダルボード）", a: "1,500円", b: "1,300円", c: "1,000円" },
  { kind: "エフェクター用", item: "BOSS BCB-60", a: "5,000円", b: "4,000円", c: "3,000円" },
  { kind: "エフェクター用", item: "PEDALTRAIN PT-PRO-HC（ハードケース付き）", a: "4,000円", b: "3,000円", c: "2,000円" },
  { kind: "エフェクター用", item: "PULSE EC06（W600×D400×H100）", a: "4,000円", b: "3,200円", c: "2,600円" },
];

const FAQ = [
  {
    q: "楽器ケースだけでも買い取ってもらえますか？",
    a: "業者によります。イシバシ楽器は公式サイトの買取対象に「ギター・ベース用ケース」「ドラム用ケース」を挙げており、買取価格検索でもケースの価格を公開しています。島村楽器は「ケーブル、スタンド類等の周辺アクセサリー類」を買取の対象外としていますが、ケース単体の可否は明記していません。持ち込む前に確認するのが確実です。",
  },
  {
    q: "ギターのハードケースは中古でいくらくらいですか？",
    a: `${ASOF}に取得したヤフオクの落札データから、ケース単体の出品を当サイトで選んで集計すると、ギター用53件の中央値は10,000円（中央の半数は6,655〜15,500円）でした。ブランド品を名指しした検索を含むため、実際の相場より高めに出ている可能性があります。`,
  },
  {
    q: "楽器を売るときにケースだけ別に売ったほうが得ですか？",
    a: "楽器も一緒に売る場合は、ケースを付けたままのほうが無難です。クロサワ楽器は専用ケースなどの付属品の欠品は査定額に影響すると案内しており、イシバシ楽器もケースなどの付属品の欠品は減額の対象になる場合があるとしています。",
  },
  {
    q: "ギグバッグ（ソフトケース）にも値段はつきますか？",
    a: "イシバシ楽器の買取価格検索では、RITTER のエレキギター用ギグバッグに美品で500〜2,000円、並品で100〜500円の価格が掲示されていました（表示された範囲）。ハードケースより低い価格帯です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "楽器ケースの買取", href: "/articles/gakki-case-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/gakki-case-kaitori/" },
  title: "楽器ケースだけでも買取してもらえる？ケース単体の落札相場106件と、買取価格を公開している店【2026年11月】",
  description:
    "楽器ケースを単体で売る場合の目安を、ヤフオクのケース単体の落札106件（ギター用・ベース用・管楽器用・弦楽器用）とイシバシ楽器が公開している買取価格で整理しました。ケースを買い取ると明記している店、楽器と一緒に出したほうがよい理由も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "楽器ケースだけでも買取してもらえる？落札相場106件と公開買取価格【2026年11月】",
    description: "ケース単体の落札106件を種類別に集計。ケースを買い取る店と、楽器と一緒に出したほうがよい理由。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "楽器ケースだけでも買取してもらえる？ケース単体の落札相場106件と、買取価格を公開している店",
        datePublished: "2026-11-17",
        dateModified: "2026-11-17",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/gakki-case-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "楽器ケースの買取", item: "https://gakkikaitori-biyori.com/articles/gakki-case-kaitori/" },
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
          楽器ケースだけでも買取してもらえる？ケース単体の落札相場106件と、買取価格を公開している店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、買取の可否と掲示価格は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            楽器ケースは単体でも売れますが、<strong>買い取ると明記している店は限られます</strong>。イシバシ楽器は買取対象に「ギター・ベース用ケース」「ドラム用ケース」を挙げ、ケースの買取価格も公開しています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクでケース単体として落札された{Y_TOTAL}件を集計すると、<strong>中央値はギター用10,000円・ベース用8,800円</strong>、管楽器用と弦楽器用は2万〜3万円台でした。
            楽器も一緒に手放すなら、ケースは楽器に付けたまま査定に出すのが基本です。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">ケース単体の落札相場（ヤフオク・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ケースの種類</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">中央の半数</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {BY_TYPE.map((t) => (
                <tr key={t.type} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3">{t.type}</td>
                  <td className="px-4 py-3">{t.n}件</td>
                  <td className="px-4 py-3">{t.median}</td>
                  <td className="px-4 py-3">{t.mid}</td>
                  <td className="px-4 py-3">{t.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ギター用では、Gibson 純正のハードケースが1.5万円前後、Fender 純正や SKB のハードケースが1万円前後で、SKB のセミハードケースは1,100〜16,800円と幅がありました。
          管楽器用・弦楽器用は BAM（フランス）のケースが中心で、チェロ用やファゴット用は10万円を超える落札もあります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「ギター ハードケース」「ベース ハードケース」「SKB ギターケース」「BAM ケース」「Hiscox ケース」の各結果（{ASOF}取得）を合わせ、
          ケース単体の出品だけをタイトルで選びました。楽器本体とのセット、エフェクターボード・ラック、工具箱やミリタリー用のハードケースは除外しています。
          ブランド名を指定した検索を含むため、ノーブランドのケースより高い側に偏っている可能性があります。落札価格は買取価格ではありません。
        </p>

        <h2 id="ishibashi" className="text-xl font-bold mt-12 mb-4">買取価格を公開している例（イシバシ楽器）</h2>
        <p className="text-sm leading-relaxed mb-4">
          イシバシ楽器の買取価格検索で「ケース」と入力すると117件がヒットしました。表示された先頭20件は、ギグバッグ（RITTER）とエフェクターボード・ペダルケース（BOSS・PEDALTRAIN・PULSE など）でした。その一部です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">用途</th>
                <th className="text-left px-4 py-3 font-medium">商品</th>
                <th className="text-left px-4 py-3 font-medium">美品</th>
                <th className="text-left px-4 py-3 font-medium">良品</th>
                <th className="text-left px-4 py-3 font-medium">並品</th>
              </tr>
            </thead>
            <tbody>
              {ISHI_ROWS.map((r) => (
                <tr key={r.item} className="border-t border-warm-200">
                  <td className="px-4 py-3 whitespace-nowrap">{r.kind}</td>
                  <td className="px-4 py-3">{r.item}</td>
                  <td className="px-4 py-3">{r.a}</td>
                  <td className="px-4 py-3">{r.b}</td>
                  <td className="px-4 py-3">{r.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ギグバッグの掲示は美品でも500〜2,000円で、ヤフオクのギター用ハードケースの中央値（10,000円）とは開きがあります。
          高価なハードケースを売る場合は、型番・ブランドを伝えて個別に査定を受けたほうが、実際の価値を確かめやすくなります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={ISHI_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 買取価格検索</a>
          （キーワード「ケース」、{ASOF}表示）。公式サイトは「商品状態や時期によって金額の増減がございます。あくまで目安程度にお考えください」としています。
        </p>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">ケースの扱いについての各社の記載</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <a href={ISHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器</a>
            ：買取対象商品に「ギターパーツ・ケース類（ギター・ベース用ピックアップ、その他ギターパーツ、ギター・ベース用ケース）」と、ドラム買取の「ドラム用ケース」を記載。ケースなどの付属品の欠品は減額になる場合があるとも案内
          </li>
          <li>
            <a href={KURO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器</a>
            ：宅配買取では、専用ケースなどの付属品も必ず楽器と一緒に送るよう案内し、欠品は査定額に影響するとしている
          </li>
          <li>
            <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器</a>
            ：「買取取り扱いのない楽器」に「ケーブル、スタンド類等の周辺アクセサリー類」を挙げている。ケース単体の可否は明記なし
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          楽器と一緒に売る場合の付属品の考え方は<Link href="/articles/gakki-fuzokuhin-kaitori/" className="text-accent underline">楽器の付属品と査定額</Link>、
          各社の買取条件は<Link href="/articles/kurosawa-gakki-kaitori/" className="text-accent underline">クロサワ楽器の買取</Link>・
          <Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>で整理しています。
        </p>

        <h2 id="tips" className="text-xl font-bold mt-12 mb-4">ケースを売る前に確認すること</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li><strong>何用のケースか</strong>：ギターの形（ストラト・レスポール・変形ギターなど）や楽器の種類が分かると、買い手が見つかりやすくなります。</li>
          <li><strong>ブランドと型番</strong>：純正ケース（Gibson・Fender など）や SKB・BAM・Hiscox などはタイトルや査定で伝えます。</li>
          <li><strong>鍵とラッチ</strong>：落札データには「鍵なし」「内蓋欠品」と書かれた出品もありました。欠品や破損は事前に申告します。</li>
          <li><strong>楽器も売るかどうか</strong>：楽器も手放すなら、ケースは付けたまま査定に出すのが基本です（上記のとおり欠品は減額の対象）。</li>
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
          currentSlug="gakki-case-kaitori"
          relatedSlugs={["gakki-fuzokuhin-kaitori", "takaku-uru-kotsu", "gakki-takuhai-kaitori", "kurosawa-gakki-kaitori", "shimamura-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

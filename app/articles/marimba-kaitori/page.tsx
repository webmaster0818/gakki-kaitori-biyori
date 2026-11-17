import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-17）「マリンバ 買取」。
// 一次データ: ヤフオクの落札済み検索「マリンバ」（2026-11-17 取得・検索結果の上位200件）。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
//   タイトルにメーカー名（KOROGI/こおろぎ・YAMAHA・SAITO・ADAMS・Musser・KOSTH・MIZUNO・DEAGAN・KMK）を含む出品だけを残し、
//   マレット・CD・楽譜・ブランデーの「マリンバ型ボトル」・カリンバ・電子マリンバ（MIDI）・シロフォン単体を除外＝61件。
//   「引取限定」の件数は、タイトルに「（直接）引取限定」「店頭／店舗受取限定」「配送不可」「直接渡しのみ」等の記載がある出品を数えた。
// 業者の対応は各社公式（2026-11-17 取得・HTMLコメントと script 除外）:
//   楽器の買取屋さん https://gakkikaitori.co.jp/kaitori/marimba/（マリンバの買取事例の件数・価格）
//   島村楽器 https://www.shimamura.co.jp/used/（買取取り扱いのない楽器に鍵盤打楽器）
//   こおろぎ社 https://www.korogi.co.jp/faq/ ・ https://www.korogi.co.jp/support/（中古の売却・下取りの相談）
//   三木楽器 https://www.mikigakki.com/shop/appraisal/contact.aspx（ドラム・コンサートパーカッション専門フロアが受付店舗）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月17日";
const KAITORIYA = "https://gakkikaitori.co.jp/kaitori/marimba/";
const SHIMAMURA = "https://www.shimamura.co.jp/used/";
const KOROGI_FAQ = "https://www.korogi.co.jp/faq/";
const KOROGI_SUP = "https://www.korogi.co.jp/support/";
const MIKI = "https://www.mikigakki.com/shop/appraisal/contact.aspx";

// ヤフオク落札（当サイト集計）
const Y_TOTAL = 61;
const Y_MEDIAN = 106480;
const Y_GE100K = 34;
const Y_LT50K = 13;
const Y_PICKUP = 41;
const Y_JUNK = 6;
const BY_MAKER: { maker: string; n: number; median: string; range: string }[] = [
  { maker: "KOROGI（こおろぎ社）", n: 33, median: "約13.6万円", range: "17,732〜1,090,100円" },
  { maker: "YAMAHA（ヤマハ）", n: 14, median: "約7.5万円", range: "10,725〜550,000円" },
  { maker: "SAITO（斎藤楽器製作所）", n: 5, median: "約3.9万円", range: "1,650〜89,000円" },
  { maker: "ADAMS（アダムス）", n: 3, median: "約34.3万円", range: "100,000〜1,012,605円" },
  { maker: "KOSTH（コッス）", n: 2, median: "—", range: "1,760円・21,120円" },
  { maker: "その他（MIZUNO・Musser・DEAGAN・KMK）", n: 4, median: "—", range: "40,500〜679,521円" },
];

const BUYERS: { name: string; status: string; detail: string; src: string }[] = [
  {
    name: "楽器の買取屋さん",
    status: "買取事例を公開",
    detail: "マリンバの買取事例47件（最低15,000円・中間110,000円・最高450,000円）。メーカー別ではコオロギ25件・ヤマハ15件・斎藤楽器6件",
    src: KAITORIYA,
  },
  {
    name: "こおろぎ社（メーカー）",
    status: "売却・下取りの相談を受付",
    detail: "公式FAQで「弊社での買取をご希望の場合は、お問い合わせフォームより」と案内。中古品は価格面の折り合いなどで成立に時間がかかる場合があると記載",
    src: KOROGI_FAQ,
  },
  {
    name: "三木楽器",
    status: "要問い合わせ",
    detail: "買取の受付店舗に「ドラム・コンサートパーカッション専門フロア」（大阪・西心斎橋）がある。マリンバの明記はない",
    src: MIKI,
  },
  {
    name: "島村楽器",
    status: "買取対象外",
    detail: "「買取取り扱いのない楽器」に鍵盤打楽器（マリンバ・シロフォン・グロッケン・ヴァイブ・ビブラフォンなど）を明記",
    src: SHIMAMURA,
  },
];

const yen = (n: number) => n.toLocaleString("ja-JP");

const FAQ = [
  {
    q: "中古のマリンバはいくらくらいで取引されていますか？",
    a: `${ASOF}に取得したヤフオクの落札済み検索「マリンバ」の結果から、メーカー名のあるマリンバ本体${Y_TOTAL}件を集計すると、落札価格の中央値は約${Math.round(Y_MEDIAN / 1000) / 10}万円でした。10万円以上が${Y_GE100K}件、5万円未満が${Y_LT50K}件と幅があり、メーカー・音域・状態で大きく変わります。買取価格は落札価格より低くなるのが一般的です。`,
  },
  {
    q: "島村楽器でマリンバを売れますか？",
    a: "島村楽器の公式サイトでは、鍵盤打楽器（マリンバ・シロフォン・グロッケン・ヴァイブ・ビブラフォンなど）を「買取取り扱いのない楽器」に挙げており、買取の対象外です。",
  },
  {
    q: "マリンバを宅配で送って売ることはできますか？",
    a: `大型のマリンバは宅配便での発送が難しく、ヤフオクの落札${Y_TOTAL}件のうち${Y_PICKUP}件はタイトルに「引取限定」「店頭受取限定」などと書かれていました。売る場合は出張買取に対応する業者か、メーカーへの相談が現実的です。`,
  },
  {
    q: "メーカーに直接売ることはできますか？",
    a: "こおろぎ社（KOROGI）は公式サイトのFAQで、買取を希望する場合はお問い合わせフォームから連絡するよう案内しています。下取りで新しい楽器を購入する相談も受け付けています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "マリンバの買取", href: "/articles/marimba-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/marimba-kaitori/" },
  title: "マリンバの買取相場と売り先｜落札61件のメーカー別集計と、買い取る業者・買い取らない楽器店【2026年11月】",
  description:
    "マリンバの中古相場を、ヤフオクの落札61件からメーカー別（コオロギ・ヤマハ・斎藤楽器など）に集計しました。7割近くが引取限定で取引されている実態と、買取事例を公開している業者・メーカーの相談窓口・買取対象外の楽器店を公式情報で整理しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "マリンバの買取相場と売り先｜落札61件をメーカー別に集計【2026年11月】",
    description: "ヤフオク落札61件の中央値とメーカー別の価格帯、マリンバを買い取る業者・買い取らない楽器店。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "マリンバの買取相場と売り先｜落札61件のメーカー別集計と、買い取る業者・買い取らない楽器店",
        datePublished: "2026-11-17",
        dateModified: "2026-11-17",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/marimba-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "マリンバの買取", item: "https://gakkikaitori-biyori.com/articles/marimba-kaitori/" },
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
          マリンバの買取相場と売り先｜落札61件のメーカー別集計と、買い取る業者・買い取らない楽器店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、業者の対応は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクで落札されたマリンバ本体{Y_TOTAL}件の<strong>中央値は{yen(Y_MEDIAN)}円</strong>でした。ただし1,650円から100万円超まで幅が広く、メーカー別ではコオロギが高めで、ヤマハの小型機や古い斎藤楽器は数万円以下の取引もあります。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            {Y_TOTAL}件のうち<strong>{Y_PICKUP}件は「引取限定」などの条件つき</strong>で、発送できない大きさであることが取引の前提になっています。
            楽器店チェーンでは<strong>島村楽器が鍵盤打楽器を買取対象外</strong>としており、出張に対応する業者かメーカーへの相談が中心になります。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">マリンバの中古相場（ヤフオク落札・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">メーカー</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">落札価格の範囲</th>
              </tr>
            </thead>
            <tbody>
              {BY_MAKER.map((m) => (
                <tr key={m.maker} className="border-t border-warm-200">
                  <td className="px-4 py-3">{m.maker}</td>
                  <td className="px-4 py-3">{m.n}件</td>
                  <td className="px-4 py-3">{m.median}</td>
                  <td className="px-4 py-3">{m.range}</td>
                </tr>
              ))}
              <tr className="border-t border-warm-200 font-medium">
                <td className="px-4 py-3">合計</td>
                <td className="px-4 py-3">{Y_TOTAL}件</td>
                <td className="px-4 py-3">{yen(Y_MEDIAN)}円</td>
                <td className="px-4 py-3">1,650〜1,090,100円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          価格帯の内訳は、10万円以上が{Y_GE100K}件、5万〜10万円未満が{Y_TOTAL - Y_GE100K - Y_LT50K}件、5万円未満が{Y_LT50K}件です。
          高値の出品は KOROGI UM2400CC・3000CF、ADAMS AD-MAHC50（5オクターブ）、MIZUNO のコンサートマリンバなどで、
          10万円前後にはコオロギの教育用（650DX・650K・700）やヤマハ YM-4000・YM-400C が多く見られました。
          タイトルに「ジャンク」とある出品は{Y_JUNK}件含みます。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「マリンバ」の検索結果の上位200件（{ASOF}取得）から、タイトルにメーカー名を含むマリンバ本体だけを残しました。
          マレット・CD・楽譜・ブランデーの「マリンバ型ボトル」・カリンバ・電子マリンバ（MIDIコントローラー）・シロフォン単体は除外しています。
          落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">マリンバを買い取る業者・買い取らない楽器店</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">対応</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((b) => (
                <tr key={b.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={b.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {b.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{b.status}</td>
                  <td className="px-4 py-3 leading-relaxed">{b.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんが公開している買取事例の中間価格（110,000円）は、上のヤフオク落札の中央値（{yen(Y_MEDIAN)}円）と近い水準です。
          事例の掲載はヤマハ YM-5100A 450,000円、コオロギ 1500F 351,000円、斎藤楽器 No.300 168,480円などで、型番によって差があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん マリンバの買取事例</a>・
          <a href={KOROGI_FAQ} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">こおろぎ社 FAQ</a>・
          <a href={KOROGI_SUP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">こおろぎ社 中古製品について</a>・
          <a href={MIKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">三木楽器 楽器買取</a>・
          <a href={SHIMAMURA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>
          （いずれも{ASOF}取得）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>メーカーと型番</strong>：同じ4オクターブでも、メーカーと型番で中央値が数倍違います。フレームや音板の裏などに表示がないか確認します。
          </li>
          <li>
            <strong>音域（鍵数）</strong>：落札データでは、3〜3.5オクターブの小型機（ヤマハ YM-35・YM-40、コオロギ RM40 など）は1万〜8万円程度でした。タイトルの鍵数・オクターブ表記も査定の手がかりになります。
          </li>
          <li>
            <strong>搬出の方法</strong>：大型のマリンバは宅配での発送が難しいため、出張査定を依頼する際は設置場所と搬出経路（階段・エレベーターの有無）を伝えておきます。
          </li>
          <li>
            <strong>付属品</strong>：カバー・ケース・マレットがあれば一緒に査定に出します。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          出張買取の流れは<Link href="/articles/gakki-shucchou-kaitori/" className="text-accent underline">楽器の出張買取</Link>、
          ほかの打楽器は<Link href="/articles/drum-kaitori/" className="text-accent underline">ドラム買取</Link>・
          <Link href="/articles/cajon-kaitori/" className="text-accent underline">カホン買取</Link>で整理しています。
          島村楽器の買取条件の全体は<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器の買取</Link>をご覧ください。
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
          currentSlug="marimba-kaitori"
          relatedSlugs={["drum-kaitori", "cajon-kaitori", "gakki-shucchou-kaitori", "gakki-no-kaitoriyasan", "shimamura-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

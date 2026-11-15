import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-15）「クラビノーバ 買取」。
// ⚠️ 一次情報:
//   - 当サイト集計: ヤフオク「落札相場」（closedsearch）を「クラビノーバ」で検索した落札200件（2026-11-15 取得・4ページ）。
//     出品タイトルから型番（CLP/CVP/SCLP）を読み取り、フロッピー・楽譜・椅子のみ・部品・ジャンク・新品を除外した126件を
//     型番の世代ごとにまとめた。中央値は fetch-yahoo-medians-gakki.py の iqr_filter（四分位範囲で外れ値を除外）を通した値。
//     データファイルには書いていない（このページだけの集計）。
//   - 島村楽器「電子ピアノ 出張買取」https://www.shimamura.co.jp/used/gakki/digital-piano/ （2026-11-15）
//   - ヤマハ公式 クラビノーバ製品ページ（2026-11-15）
//   口コミ・評価・順位は載せない。落札価格は買取価格ではない。

const ASOF = "2026年11月15日";
const SHIM = "https://www.shimamura.co.jp/used/gakki/digital-piano/";
const YAMAHA = "https://jp.yamaha.com/products/musical_instruments/pianos/clavinova/index.html";
const YAMAHA_CLP = "https://jp.yamaha.com/musical-instruments/pianos/products/clavinova/clp-800-series/";
const YAHOO = "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%AF%E3%83%A9%E3%83%93%E3%83%8E%E3%83%BC%E3%83%90";

// 当サイト集計（2026-11-15・ヤフオク落札）。n＝除外後の件数、median＝外れ値除外後の中央値、range＝外れ値除外後の最小〜最大
const SOUBA: { g: string; models: string; years: string; n: number; median: number; range: string }[] = [
  { g: "CLP-700番台", models: "CLP-735・745・775・785", years: "2020〜2023年", n: 13, median: 98000, range: "90,288〜110,000円" },
  { g: "CLP-600番台", models: "CLP-635・645・675・685", years: "2017〜2020年", n: 20, median: 68700, range: "28,061〜133,100円" },
  { g: "CLP-500番台", models: "CLP-535・545・575", years: "2014〜2017年", n: 21, median: 53000, range: "35,200〜78,100円" },
  { g: "CLP-400番台", models: "CLP-430・440・470", years: "2011〜2013年", n: 8, median: 39800, range: "33,000〜55,000円" },
  { g: "CLP-100〜300番台", models: "CLP-120・150・230・240・280・330 など", years: "1994〜2007年", n: 28, median: 18425, range: "1,000〜42,333円" },
  { g: "CVP（旧型）", models: "CVP-69・103・109・201・303・501 など", years: "1996〜2003年", n: 17, median: 9800, range: "100〜28,000円" },
];

const SHIM_NG = [
  "製造から8年以上経過しているもの",
  "音が出ないなど、通常使用に支障があるもの",
  "海外でご購入または海外仕様電源プラグの品番",
  "その他、品番によって買取できない場合があります。",
];

const FAQ = [
  {
    q: "クラビノーバはいくらで売れますか？",
    a: `型番の世代と製造年で大きく変わります。当サイトが${ASOF}にヤフオクの落札（個人間売買）を集計したところ、中央値はCLP-700番台で約9.8万円、CLP-600番台で約6.9万円、CLP-500番台で約5.3万円、CLP-100〜300番台で約1.8万円でした。これは落札価格で、業者の買取価格はこれより低くなるのが一般的です。正確な金額は業者の査定でご確認ください。`,
  },
  {
    q: "古いクラビノーバでも買い取ってもらえますか？",
    a: "業者によって異なります。島村楽器の電子ピアノ出張買取は「製造から8年以上経過しているもの」を買取対象外としており、製造年は本体ラベルの年数で、年単位で区分すると案内しています。対象外の品番は有料引取サービスがあります（WEB/LINE査定フォームで選べる品番に限る）。他社は年式の条件が異なるため、型番と製造年を伝えて確認してください。",
  },
  {
    q: "型番と製造年はどこで確認できますか？",
    a: "島村楽器の案内では、モデル・型名、製造年、製造番号は、ピアノ背面や鍵盤の下部に貼られているラベルで確認できます。査定の申込みではこの3つを伝えると話が早く進みます。",
  },
  {
    q: "島村楽器の電子ピアノ出張買取では、いつ代金が支払われますか？",
    a: "当社指定の引き上げ業者が自宅に伺って楽器を預かり、島村楽器に納入後に状態を確認して正式な買取価格を決めます。代金は現物確認完了後1週間後を目安に口座振込です。島村楽器のスタッフは訪問しないと案内されています。",
  },
  {
    q: "現行のクラビノーバはどの型番ですか？",
    a: `ヤマハ公式サイトの製品ページ（${ASOF}確認）では、CLPシリーズはCLP-800シリーズ（CLP-825・835・845・875・885など）、CVPシリーズはCVP-905・909、CSPシリーズはCSP-255・275が掲載されています。CLP-700番台以前は現行の製品一覧に掲載されていません。`,
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "クラビノーバの買取", href: "/articles/yamaha-clavinova-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yamaha-clavinova-kaitori/" },
  title: "クラビノーバの買取相場は型番の世代で決まる｜落札126件の集計と年式の条件【2026年11月】",
  description:
    "ヤマハ クラビノーバの中古相場を、ヤフオクの落札126件から型番の世代別に集計しました（2026年11月15日）。CLP-700番台は中央値約9.8万円、100〜300番台は約1.8万円。島村楽器の出張買取は製造8年以上を対象外としています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "クラビノーバの買取相場は型番の世代で決まる【2026年11月】",
    description: "ヤフオク落札126件の世代別中央値と、島村楽器の電子ピアノ出張買取の条件。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "クラビノーバの買取相場は型番の世代で決まる｜落札126件の集計と年式の条件",
        datePublished: "2026-11-15",
        dateModified: "2026-11-15",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yamaha-clavinova-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "クラビノーバの買取", item: "https://gakkikaitori-biyori.com/articles/yamaha-clavinova-kaitori/" },
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
          クラビノーバの買取相場は型番の世代で決まる｜落札126件の集計と年式の条件
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に当サイトがヤフオクの落札データを集計し、島村楽器・ヤマハの公式ページを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクで落札されたクラビノーバ126件を型番の世代ごとに集計すると、中央値は
            <strong>CLP-700番台で約9.8万円、CLP-600番台で約6.9万円、CLP-500番台で約5.3万円</strong>、
            2007年以前のCLP-100〜300番台では<strong>約1.8万円</strong>でした。新しい世代ほど高く、世代が1つ古くなるごとに下がっています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            業者の買取では年式の条件もあります。島村楽器の電子ピアノ出張買取は<strong>「製造から8年以上経過しているもの」を対象外</strong>としています。
            売る前に、本体ラベルで型番と製造年を確認してください。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">型番の世代別の落札価格（当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          ヤフオクの落札相場を「クラビノーバ」で検索した200件（{ASOF}取得）から、出品タイトルで型番が分かるものを世代ごとにまとめました。
          自動演奏用フロッピー・楽譜・椅子のみ・部品・ジャンク品・新品は除外しています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">世代</th>
                <th className="text-left px-3 py-3 font-medium">主な型番</th>
                <th className="text-left px-3 py-3 font-medium">タイトルの製造年</th>
                <th className="text-right px-3 py-3 font-medium">件数</th>
                <th className="text-right px-3 py-3 font-medium">中央値</th>
                <th className="text-left px-3 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {SOUBA.map((s) => (
                <tr key={s.g} className="border-t border-warm-200">
                  <td className="px-3 py-3 font-medium whitespace-nowrap">{s.g}</td>
                  <td className="px-3 py-3 leading-relaxed">{s.models}</td>
                  <td className="px-3 py-3 whitespace-nowrap">{s.years}</td>
                  <td className="px-3 py-3 text-right">{s.n}</td>
                  <td className="px-3 py-3 text-right whitespace-nowrap">{s.median.toLocaleString()}円</td>
                  <td className="px-3 py-3 whitespace-nowrap">{s.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 text-xs text-warm-gray leading-relaxed space-y-1 mb-4">
          <li>中央値と範囲は、四分位範囲から大きく外れた価格を除いて計算しています（CLP-700番台は13件中4件を除外）。</li>
          <li>「タイトルの製造年」は出品タイトルに書かれていた年の最小〜最大で、すべての出品に製造年が書かれているわけではありません。</li>
          <li>CLP-800番台（2件）・SCLP（8件・年式がばらつく）・1990年代のCLP-560・760・840 など（9件）は、世代としてまとめるには件数や条件がそろわないため表に入れていません。</li>
          <li>落札価格は個人間売買の金額で、送料・設置費は含みません。引き取り限定の出品も多く含まれます。<strong>業者の買取価格ではありません。</strong></li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={YAHOO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            ヤフオク 落札相場「クラビノーバ」
          </a>
          （{ASOF}取得・当サイト集計）。落札の顔ぶれは日々入れ替わるため、取得日によって値は変わります。
        </p>

        <h2 id="condition" className="text-xl font-bold mt-12 mb-4">業者の買取条件：島村楽器の電子ピアノ出張買取</h2>
        <p className="text-sm leading-relaxed mb-4">
          クラビノーバを販売している島村楽器は、電子ピアノの出張買取の条件を公開しています（{ASOF}確認）。次のいずれかに当たる電子ピアノは買取できないと記載されています。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          {SHIM_NG.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          製造年は楽器本体のラベルに表示された年数で、買取の可否は年単位で区分するとされています。買取できない品番は有料引取サービスで引き上げる案内もあります。
          上の集計に当てはめると、<strong>落札価格が比較的高いCLP-700番台・600番台の一部（2019年以降の製造）が、年式の条件を満たす範囲</strong>になります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">申込み</th>
                <td className="px-4 py-3 leading-relaxed">WEB査定またはLINE査定。査定結果に納得したら買取を申し込む</td>
              </tr>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">引き上げ</th>
                <td className="px-4 py-3 leading-relaxed">当社指定の引き上げ業者が自宅に伺う（島村楽器のスタッフは訪問しない）。引き上げ先は本人確認ができる自宅住所に限る</td>
              </tr>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">費用</th>
                <td className="px-4 py-3 leading-relaxed">引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で、代金は買取金額から差し引き</td>
              </tr>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">支払い</th>
                <td className="px-4 py-3 leading-relaxed">納入後に状態を確認して正式な買取価格を決定。現物確認完了後1週間後を目安に口座振込</td>
              </tr>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">査定アップ</th>
                <td className="px-4 py-3 leading-relaxed">島村楽器で購入した商品は査定5%UP、買い替え時の下取は査定10%UP</td>
              </tr>
              <tr>
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">対象地域</th>
                <td className="px-4 py-3 leading-relaxed">北海道（一部の市町のみ）・宮城・福島・関東4都県・新潟・石川・富山・東海4県・近畿4府県・広島・福岡・熊本・佐賀（一部地域を除く県あり）。離島は対象外</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIM} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            島村楽器「電子ピアノ 出張買取」
          </a>
          （{ASOF}取得）。対象地域の細かな除外市町村は公式ページでご確認ください。
        </p>

        <h2 id="model" className="text-xl font-bold mt-12 mb-4">型番と製造年の確かめ方</h2>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の案内では、モデル・型名、製造年、製造番号（SERIAL No.）は<strong>ピアノ背面や鍵盤の下部に貼られているラベル</strong>で確認できます。
          型番の末尾の英字（R・WA・PE・B・DW など）は仕上げ（色）の違いで、上の集計では同じ型番として扱っています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ヤマハ公式サイトの製品ページ（{ASOF}確認）に掲載されている現行品は、CLPシリーズが
          <a href={YAMAHA_CLP} target="_blank" rel="noopener noreferrer" className="text-accent underline">CLP-800シリーズ</a>
          （CLP-825・835・845・875・885 など）、CVPシリーズがCVP-905・909、CSPシリーズがCSP-255・275です（
          <a href={YAMAHA} target="_blank" rel="noopener noreferrer" className="text-accent underline">クラビノーバ製品一覧</a>
          ）。CLP-700番台以前は現行の一覧に掲載されていない旧世代です。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売り方を決めるときの見かた</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>製造から8年未満のCLP-700番台・600番台の後期</strong>：楽器店の出張買取の年式条件を満たしやすい世代です。複数の業者に型番・製造年・状態を伝えて見積もりを比べてください。
          </li>
          <li>
            <strong>CLP-400〜600番台の前期</strong>：落札では3〜7万円台で取引されていますが、年式の条件で楽器店の出張買取の対象外になることがあります。年式を問わない業者や、個人間売買も選択肢になります。
          </li>
          <li>
            <strong>2007年以前のCLP-100〜300番台・旧型CVP</strong>：落札の中央値は1〜2万円前後で、引き取り限定の出品が中心です。運搬費を考えると、買取できない場合は処分方法もあわせて検討してください。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-8">
          電子ピアノ全体の相場は<Link href="/articles/denshi-piano-kaitori/" className="text-accent underline">電子ピアノ買取相場ガイド</Link>、
          ヤマハ製品全般は<Link href="/articles/yamaha-kaitori/" className="text-accent underline">YAMAHA買取の記事</Link>、
          エレクトーンは<Link href="/articles/electone-kaitori/" className="text-accent underline">エレクトーン買取の記事</Link>をご覧ください。
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
          currentSlug="yamaha-clavinova-kaitori"
          relatedSlugs={["denshi-piano-kaitori", "yamaha-kaitori", "electone-kaitori", "piano-kaitori", "roland-denshi-piano-kaitori"]}
        />
      </article>
    </>
  );
}

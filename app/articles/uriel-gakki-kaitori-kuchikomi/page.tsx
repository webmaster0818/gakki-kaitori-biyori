import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { URIEL } from "@/data/affiliate";

const PUBLISHED = "2026-10-09";
const UPDATED = "2026-11-20";
const UPDATED_JA = "2026年11月20日";
const URL = "https://gakkikaitori-biyori.com/articles/uriel-gakki-kaitori-kuchikomi/";
const TITLE = "ウリエルの楽器買取 口コミ・評判は悪い？公式の声279件とヒカカク3件を集計｜手数料・出張エリア【2026年11月最新】";
const DESC =
  "ウリエルの楽器買取の口コミ・評判を、公式「お客様の声」全279件（楽器7件）の当サイト集計とヒカカク！の第三者クチコミ（3件・2.67点）から出典付きで整理。手数料・出張エリア・7倍キャンペーンの条件・クーリングオフ、「やばい」と検索される理由も解説します。";

const faqs = [
  {
    q: "ウリエルの楽器買取に手数料はかかりますか？",
    a: "公式の楽器買取ページのよくある質問に「査定料や買取手数料、キャンセル料、出張費用などすべて無料」とあります。査定額を聞いて断った場合もキャンセル料はかからないと、出張買取ページにも明記されています。",
  },
  {
    q: "ウリエルの口コミは悪いのですか？",
    a: "誰でも投稿できる第三者サイトでは、ヒカカク！のウリエル掲載ページに3件（星5・星2・星1、総合2.67点）しかなく、楽器の取引に関する投稿はありません（2026年11月20日確認）。件数が少ないため、点数だけで良し悪しは判断できません。公式サイトの「お客様の声」は全279件で、そのうち楽器は7件です（当サイト集計）。楽器の声は、運べない楽器を自宅で手放せた点と査定士の対応を評価する内容が中心で、価格は「妥当な線」「そこそこ」と書く声もあります。",
  },
  {
    q: "どの地域で出張買取を頼めますか？",
    a: "出張買取ページでは関東・中部（岐阜・静岡・愛知）・近畿・中国・四国・九州が対応エリアとされ、沖縄県は対象外、一部対応できない市町村があると書かれています。楽器買取ページには「買取対応エリア」の見出しがありますが、2026年11月20日時点で地域の一覧は表示されていません。申込時に住所で確認してください。",
  },
  {
    q: "ウリエルのキャンペーンは楽器でも使えますか？",
    a: "公式のキャンペーンページの条件は「広告・WEBサイトを見て申し込んだ出張買取1回で成約金額5,000円以上」で、品目の限定は書かれていません。2026年11月分は11月1日〜30日が対象で、抽選で2名に買取金額を含めて7倍の金額を還元、1回の当せんにつき上限10万円、クーリングオフを申請した場合は対象外です。抽選のため、売るかどうかはキャンペーンを除いた査定額で判断するのが確実です。",
  },
  {
    q: "女性の査定士に来てもらえますか？",
    a: "出張買取ページに「女性スタッフに対応してもらいたい」「部屋に上がらず玄関で査定してほしい」などを事前に希望できると書かれています。以前の女性向けプラン（レディースパック）の公式ページは、2026年11月20日時点で表示されません。希望は申込時に伝えてください。",
  },
  {
    q: "ギター1本だけでも来てもらえますか？",
    a: "出張買取ページのよくある質問に「1点でも出張買取可能」とあります。公式の楽器の「お客様の声」にもギター1本で出張を依頼した事例が掲載されています。",
  },
  {
    q: "壊れた楽器や付属品のない楽器も買い取ってもらえますか？",
    a: "公式の楽器ページでは、壊れている楽器も買取可能（状態が非常に悪いと値が付かない場合あり）、付属品がなくても買取可能と回答しています。弦が切れた・サビ・割れ・音が出ない楽器も相談できるとしています。",
  },
  {
    q: "売った後にキャンセルできますか？",
    a: "出張買取は特定商取引法の「訪問購入」にあたり、公式のクーリングオフのページでも、契約書面を受け取った日から8日以内なら契約を解除できると案内しています。店頭買取はクーリングオフの対象外です。",
  },
];

/** felmat 計測リンク（テキスト）。リンクと1x1計測はセットで置く。 */
function UrielCta({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8 text-center not-prose">
      <p className="font-bold text-base mb-2 text-accent-dark">{title}</p>
      <p className="text-sm text-warm-gray mb-4">{lead}</p>
      <p className="text-xs text-warm-gray mb-3">
        <span className="inline-block align-middle border border-warm-gray/50 rounded px-1.5 py-0.5 mr-2 text-[11px] font-bold tracking-wide">PR</span>
        買取専門店ウリエル（出張料・査定料・キャンセル料 無料）
      </p>
      <a
        href={URIEL.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md"
      >
        出張買取を申し込む
      </a>
      {/* felmatインプレッション計測 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={URIEL.imp} width={1} height={1} alt="" style={{ border: "none" }} />
    </div>
  );
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { images: ["/og-image.png"], title: TITLE, description: DESC, url: URL, type: "article" },
};

function Schemas() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESC,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    mainEntityOfPage: URL,
    author: { "@type": "Organization", name: "楽器買取びより", url: "https://gakkikaitori-biyori.com/author/" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "ウリエルの楽器買取 口コミ・評判", item: URL },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}

const linkCls = "text-accent underline hover:text-accent-dark";

export default function UrielGakkiKuchikomiPage() {
  return (
    <>
      <Schemas />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">ウリエルの楽器買取 口コミ・評判</span></li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8" style={{ ["--subhero" as string]: "url(/images/subhero/howto-uriel-gakki-kaitori-kuchikomi.webp)", ["--subhero-m" as string]: "url(/images/subhero/howto-uriel-gakki-kaitori-kuchikomi-m.webp)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">サービス評判</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年11月最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">ウリエルの楽器買取 口コミ・評判は？公式の声279件とヒカカク3件・手数料・出張エリア・注意点</h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            「ギターやサックス、琴をウリエルの出張買取に出して大丈夫か」を知りたい方向けに、ウリエル公式サイトの各ページと「お客様の声」全28ページ、第三者の口コミサイト（ヒカカク！のウリエル掲載ページ）を{UPDATED_JA}に確認して整理しました。口コミは本文を転載せず、件数と内容の傾向だけを出典付きで示します。本記事は広告（PR）リンクを含みます。
          </p>
          <p className="text-warm-gray text-xs leading-relaxed mt-2">
            ※「ウリエル」という名前だけで検索すると、天使の名前やゲームのキャラクターの情報が上位に表示されます。本記事で扱うのは、株式会社クオーレが運営する「買取専門店ウリエル」（公式サイト uriel-cuore.co.jp）です。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: {UPDATED_JA}</p>
        </header>

        <section className="article-body space-y-4 text-[15px] leading-relaxed">
          <h2 id="conclusion">ウリエルの楽器買取が適している方</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ウリエルは<strong>株式会社クオーレ（愛知県大府市）</strong>が運営する総合買取店。楽器は公式に買取品目の1つで、ギター・ベース・弦楽器・管楽器・和楽器・デジタル楽器を扱う。</li>
            <li>中心は<strong>出張買取</strong>。出張料・査定料・キャンセル料・買取手数料はすべて無料、査定額に納得すればその場で現金払い。</li>
            <li>第三者の口コミは<strong>ヒカカク！に3件（総合2.67点）だけで、楽器の投稿は0件</strong>。公式の「お客様の声」は<strong>全279件のうち楽器7件</strong>（当サイト集計）で、「運べない楽器を自宅で手放せた」「査定士の対応が良い」が中心。価格は「妥当な線」「そこそこ」と書く声もある。</li>
            <li>出張買取には<strong>抽選で2名に買取金額を含めて7倍を還元するキャンペーン</strong>がある（2026年11月分は11/1〜11/30・成約5,000円以上・1回の当せんにつき上限10万円）。抽選のため、査定額そのもので判断したい。</li>
            <li>向いているのは<strong>持ち運べない楽器（琴・ドラム・アンプ）や、複数本・他の品物とまとめて売りたい人</strong>。型番の分かるギター1本を最高値で売りたいなら、一括査定や店頭と比べてから決めたい。</li>
          </ul>

          <UrielCta title="運べない楽器を自宅で査定" lead="出張料・査定料・キャンセル料は無料。金額に納得できなければ断れます。" />

          <h2 id="about">ウリエルとは（運営会社・許可・買取方法）</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream w-36">サービス名</th><td className="px-4 py-3">買取専門店ウリエル（uriel）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">運営会社</th><td className="px-4 py-3">株式会社クオーレ（設立 平成23年3月・代表 竹本泰志・資本金5,000万円）本社 愛知県大府市。東京支社・東京営業所（品川区）、大阪営業所あり</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">古物商許可</th><td className="px-4 py-3">愛知県公安委員会 第542791100800号（会社概要の記載）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">買取方法</th><td className="px-4 py-3">出張買取・催事買取・店舗買取。店舗は「ウリエル川崎 ラ チッタデッラ店」（川崎市川崎区小川町・ラ チッタデッラ内 マッジョーレ2階、11時〜21時・最終受付20時）のみで、他店舗は準備中・来店は事前の電話予約が必須。宅配買取は現在の案内にない</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">料金</th><td className="px-4 py-3">査定料・買取手数料・キャンセル料・出張費用すべて無料</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">楽器の対象</th><td className="px-4 py-3">ギター・ベース／弦楽器／管楽器／和楽器（三味線・琴など）／デジタル楽器。「基本的に買取・査定ができない楽器はございません」とFAQで回答</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">受付</th><td className="px-4 py-3">電話 0120-242-556（24時間受付・年末年始除く）、メール・LINE</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">運営側の表示</th><td className="px-4 py-3">「創業15年以上」「年間15万点以上の買取実績」「対応満足度93.29%」（満足度は自社調べ・2025年7月〜2026年6月の出張査定利用者アンケート、有効回答283件）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">女性スタッフ・玄関査定</th><td className="px-4 py-3">出張買取ページに「女性スタッフに対応してもらいたい」「部屋に上がらず玄関で査定してほしい」などを事前に希望できると記載。女性向けプラン（レディースパック）の公式ページは表示されない</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※ いずれも{UPDATED_JA}にウリエル公式サイト（会社概要・楽器買取・出張買取・店頭買取ページ）を確認して記載。実績・満足度は運営会社の自己申告です。</p>
          <p>
            買取品目は着物・切手・ブランド品・お酒・オーディオなど幅広く、楽器専門店ではありません。そのぶん<strong>実家の片付けや遺品整理で、楽器と他の品物をまとめて1回で見てもらえる</strong>のが特徴です。公式の楽器ページでも、切手やゲームソフトなどと合わせた「まとめ売り」が多いと紹介しています。遺品の楽器の扱い方は<Link href="/articles/ihin-gakki-kaitori/" className={linkCls}>遺品の楽器買取ガイド</Link>にまとめています。
          </p>

          <h2 id="area">出張エリアと訪問時間</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">公式ページ</th><th className="px-4 py-3 text-left font-medium">対応エリアの記載</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">出張買取ページ</td><td className="px-4 py-3">関東（茨城・栃木・埼玉・千葉・東京・神奈川）／中部（岐阜・静岡・愛知）／近畿（兵庫・京都・滋賀・大阪・奈良・和歌山・三重）／中国（島根・鳥取・岡山・広島・山口）／四国4県／九州（福岡・長崎・大分・佐賀・熊本・宮崎・鹿児島）。<strong>沖縄県は対象外</strong>、一部対応できない市町村あり</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">楽器買取ページ</td><td className="px-4 py-3">「出張買取で以下の地域からの買取に対応」「買取対応エリア」の見出しのみで、地域の一覧は表示されていない（2026年11月20日確認。10月9日の確認時は関東6都県・中部3県・近畿7府県・岡山のみの記載）</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            楽器買取ページでは以前、中国地方は岡山だけが載っていました。現在は出張買取ページの一覧が唯一の記載のため、<strong>中国・四国・九州で楽器を出す場合は申込時に「楽器で来てもらえるか」を確認</strong>してください。北海道・東北・群馬・北陸・甲信越・沖縄は出張買取ページの一覧にありません。
            訪問時間は原則10:00〜17:00、最短で翌日以降の対応です（出張買取ページのよくある質問）。出張先は本人確認書類の住所が原則で、申込者本人の立会いが必要です。
          </p>

          <h2 id="flow">楽器を出張買取に出す流れ</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>電話・メール・LINEで申込</strong>：希望日時を伝えて予約。「査定額を聞いてから決めたい」という査定だけの依頼もできると公式に記載があります。楽器のメーカー・型番・本数、ケースの有無、<strong>大きさ（琴・ドラム・アンプなど）</strong>を伝えておきます。公式FAQでは、大きな品物は後日の引き取りになる場合があるとしています。</li>
            <li><strong>査定士が訪問・査定</strong>：目の前で査定し、金額を提示。女性査定士の希望や、部屋に上がらず玄関での査定も事前に頼めます。当日の品物の追加も可能です。</li>
            <li><strong>納得すれば契約・現金払い</strong>：契約書に記入し、本人確認書類を提示（コピーを取られます）。その場で現金で支払われます。納得できなければ断ってよく、キャンセル料はかかりません。</li>
          </ol>
          <p>
            必要なのは本人確認書類（運転免許証・マイナンバーカード・パスポート等）です。200万円を超える取引は公共料金の領収書か住民票も必要、18歳未満は利用不可、18・19歳は同意書か委任状が必要です。
          </p>

          <h2 id="examples">公式に載っている楽器の買取例</h2>
          <p>ウリエルの楽器買取ページに掲載されている買取例です（金額・日付は公式表記のまま）。</p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">買取日</th><th className="px-4 py-3 text-left font-medium">品物</th><th className="px-4 py-3 text-right font-medium">買取価格</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">2026/03/14</td><td className="px-4 py-3">Yamaha YTR-800（トランペット）</td><td className="px-4 py-3 text-right">¥20,000</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">2026/03/06</td><td className="px-4 py-3">Ibanez Destroyer II</td><td className="px-4 py-3 text-right">¥1,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">2026/03/01</td><td className="px-4 py-3">Fender Michiya Haruhata Stratocaster</td><td className="px-4 py-3 text-right">¥60,000</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">2022/07/13</td><td className="px-4 py-3">セルマー アルトサックスなど複数点</td><td className="px-4 py-3 text-right">¥170,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">2022/02/17</td><td className="px-4 py-3">アストリアス クラシックギターなど数点（千葉県松戸市）</td><td className="px-4 py-3 text-right">¥38,000</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">2021/04/15</td><td className="px-4 py-3">セルマー バリトンサックスなど複数点</td><td className="px-4 py-3 text-right">¥185,000</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            直近の3件（2026年3月）は¥1,000〜¥60,000と幅があり、高額例はサックスなど「複数点」のまとめ売りです。公式ページには「セルマー テナーサックスなど数点」をウリエル¥193,000、A社¥93,500／B社¥163,250／C社¥170,000と比べた例も載っていますが、他社名・査定日・条件は示されていないので参考程度に見てください。
            売る前に、当サイトの<Link href="/souba-ranking/" className={linkCls}>楽器買取相場ランキング</Link>（ヤフオクの週次の落札中央値）で手持ちモデルの中古実勢を確認しておくと、提示額が妥当か判断しやすくなります。たとえば<Link href="/articles/yamaha-yas62-kaitori/" className={linkCls}>YAMAHA YAS-62</Link>、<Link href="/articles/selmer-kaitori/" className={linkCls}>セルマー</Link>、<Link href="/articles/fender-stratocaster-kaitori/" className={linkCls}>Fender ストラトキャスター</Link>は型番ページに相場カードがあります。
          </p>

          <h2 id="reviews">良い評判・気になる評判（出典付き）</h2>
          <h3>第三者の口コミサイト：ヒカカク！のウリエル掲載ページ</h3>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">表示（2026年11月20日確認）</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">総合評価</td><td className="px-4 py-3">2.67（5点満点）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">件数の内訳</td><td className="px-4 py-3">星5：1件／星4：0件／星3：0件／星2：1件／星1：1件（合計3件。10月9日の確認時から増減なし）</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">投稿された品物と投稿日</td><td className="px-4 py-3">オーディオ（2022年9月9日）、記載なし（2022年9月30日）、時計・アクセサリー・バッグ（2025年8月20日）。<strong>楽器の投稿はなし</strong></td></tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>良い内容</strong>：古いオーディオを複数店で査定したうえで、ウリエルが最も高く担当者も誠実だったという星5の投稿。</li>
            <li><strong>気になる内容</strong>：古い腕時計が数千円・バッグが千円の査定で再利用はしないという星2（その場ですぐ査定した点は評価）、「口車に乗って売ってしまった」と不満を書いた星1。</li>
          </ul>
          <p>
            3件の平均なので<strong>点数でウリエル全体を評価するのは無理がある</strong>一方、気になる声が「価格への不満」と「その場で決めた後悔」に集中している点は、出張買取全般に共通する注意点です（下の注意点の章を参照）。
          </p>

          <h3 id="voice-count">公式「お客様の声」全279件の集計（当サイト集計）</h3>
          <p>ウリエル公式サイトの「お客様の声」一覧（全28ページ）を{UPDATED_JA}に取得し、1件ずつ数えました。楽器かどうかは、タイトル・本文・査定士コメントに書かれた品物で判定しています。</p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">件数</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">掲載されている声の総数</td><td className="px-4 py-3">279件（すべて出張買取の利用者）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">楽器の声</td><td className="px-4 py-3"><strong>7件</strong>（ギター・ベース3件、管楽器2件、琴1件、DTM音源モジュール1件）。全体の約2.5%</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">7倍キャンペーンの当選者の声</td><td className="px-4 py-3">9件（買取日 2025年9月〜2026年1月、当選金額6.6万〜10万円）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">タイトルで価格への不満・残念を書いた声</td><td className="px-4 py-3">3件（ゴルフセット・毛皮と香水・ブランドバッグ）。うち1件は対応と価格の両方に不満を書いた内容。楽器の声には該当なし</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">査定士の返信コメントが付いた声</td><td className="px-4 py-3">251件</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">都道府県（多い順）</td><td className="px-4 py-3">東京75・神奈川37・埼玉35・千葉32・愛知32・大阪28・兵庫15・岐阜6・栃木6、ほか各1〜2件</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            声の9割以上が関東と愛知・大阪・兵庫に集まっており、中国・四国・九州の声は0件です（沖縄県の声が1件あります）。出張エリアの一覧には中国・四国・九州も入っていますが、<strong>利用実績の多い地域は関東・東海・関西</strong>と読めます。
          </p>

          <h3>公式サイトの楽器の「お客様の声」（7件）</h3>
          <p>楽器の声7件のうち6件は楽器買取ページにも掲載され、DTM音源モジュール（YAMAHA MU80・VL70-m、奈良県）の1件は「お客様の声」一覧にだけ載っています。内容の傾向は次のとおりです。</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>運べない楽器を自宅で手放せた</strong>：エレキなどギター4本（70代男性・大阪府）、琴5面（70代女性・愛知県）、音源モジュールとキーボードスタンド（50代男性）など、重い・かさばる機材を店へ運べない人の利用が目立ちます。</li>
            <li><strong>査定士の対応を評価</strong>：思い出話を聞いてくれた、問い合わせ時の対応が温かかった、など対応に触れた声が中心です。</li>
            <li><strong>品物</strong>：エピフォンのギター1本、学生時代のマーチンのギター（査定士コメントで判明）、YAMAHA YAS-62、ヤマハのフルートなど、型番・ブランドの分かる楽器が多く含まれます。</li>
            <li><strong>価格の受け止めは分かれる</strong>：エピフォン・YAS-62・フルート・音源モジュールは価格に満足した、予想より高かったとする一方、ギター4本と琴5面は「妥当な線」「そこそこ」という書き方です。</li>
          </ul>
          <p className="text-xs text-warm-gray">※ 公式の「お客様の声」は事業者が選んで掲載しているもので、金額は記載されていません（キャンペーン当選者の声を除く）。第三者サイトの件数・評価は表示を転記したもので、当サイトが集計したものではありません。投稿本文の引用はしていません。</p>

          <h2 id="yabai">「ウリエル やばい」「怪しい」と検索される背景と確認できる事実</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>名前だけでは運営元が分かりにくい</strong>：「ウリエル」は天使の名前でもあり、検索結果に買取以外の情報が混ざります。申し込む前に、公式サイトのドメイン（uriel-cuore.co.jp）、運営会社（株式会社クオーレ）、古物商許可番号（愛知県公安委員会 第542791100800号）が一致しているかを確かめてください。</li>
            <li><strong>出張買取そのものへの警戒</strong>：訪問購入は特定商取引法で規制され、事業者は依頼を受けていない勧誘ができず、契約書面の交付と8日間のクーリングオフが定められています（消費者庁 特定商取引法ガイド）。ウリエルの出張買取もこの対象です。</li>
            <li><strong>第三者の口コミが少ない</strong>：ヒカカク！は3件のみで、判断材料が少ないこと自体が不安につながりやすい状況です。上の公式の声279件は事業者が選んだ声である点も踏まえて読む必要があります。</li>
            <li><strong>キャンペーンの当選連絡</strong>：公式に載った当選者の声9件のうち2件は、最初は当選の連絡を詐欺ではないかと疑ったと書いています。キャンペーンページでは、当選者には当せん通知を郵送すると案内しています。</li>
          </ul>

          <h2 id="campaign">買取金額7倍キャンペーンの条件（2026年11月分）</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream w-36">対象期間</th><td className="px-4 py-3">2026年11月1日〜11月30日に成約した出張買取</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">対象</th><td className="px-4 py-3">広告・WEBサイトを見て出張買取を申し込み、1回の成約金額が5,000円以上（品目の限定は記載なし）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">特典</th><td className="px-4 py-3">期間中、抽選で2名に買取金額を含めて7倍の金額を還元。1回の当せんにつき上限10万円</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">対象外</th><td className="px-4 py-3">クーリングオフを申請した場合。当せん通知の郵送後に連絡が取れない場合は無効</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">翌月以降</th><td className="px-4 py-3">「同条件または別条件でのキャンペーン実施を予定」。予告なく変更・終了する場合あり</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            公式に掲載された当選者9件を見ると、当選金額は買取金額の6倍で、買取金額と合わせて7倍になります（例：買取15,000円→当選90,000円）。ただし上限が10万円のため、計算上は買取金額がおよそ16,700円を超えると当選金額は10万円で頭打ちです（9件中6件が10万円）。<strong>月2名の抽選なので、売るかどうかはキャンペーンを除いた査定額で判断</strong>し、当選したら上乗せと考えるのが確実です。クーリングオフを使うと対象外になる点にも注意してください。
          </p>
          <p className="text-xs text-warm-gray">※ 条件はウリエル公式のキャンペーンページ（{UPDATED_JA}確認）。毎月内容が変わる可能性があるため、申込時に公式でご確認ください。</p>

          <h2 id="caution">楽器を出す前の注意点</h2>
          <h3>1. 売る物を先に決め、それ以外は見せない</h3>
          <p>
            国民生活センターは訪問購入（出張買取）の相談が2022年度に7,722件あり、契約当事者の8割近くが60歳以上だったと公表しています（ウリエルに限った数字ではありません）。典型例は「売るつもりのない物まで買い取られた」というものです。<strong>申込時に「楽器だけ」と伝え、当日も楽器以外は出さない</strong>のが確実です。
          </p>
          <h3>2. 契約から8日間はクーリングオフできる</h3>
          <p>
            ウリエルのクーリングオフのページでも、出張買取は契約書面を受け取ってから8日以内なら解除でき、店頭買取は対象外と案内しています。特定商取引法では、この期間中は品物の引渡しを拒めます。迷うときはその場で渡さず、家族と相談してから決めて構いません。困ったときは消費者ホットライン188へ。手口の見分け方は<Link href="/articles/gakki-kaitori-sagi/" className={linkCls}>楽器買取の詐欺・トラブル対策</Link>で解説しています。
          </p>
          <h3>3. 1社だけで決めない</h3>
          <p>
            第三者の口コミで評価を分けたのは「他店と比べたかどうか」でした。型番の分かるギターや管楽器は、<Link href="/articles/hikakaku-gakki-kaitori-kuchikomi/" className={linkCls}>ヒカカク！の一括査定</Link>で複数社の見積もりを取ってから、出張で来てもらう相手を選ぶと判断材料が揃います。
          </p>
          <h3>4. ピアノは申込時に搬出の可否を確認</h3>
          <p>
            公式の楽器ページはピアノの人気ブランド（Steinway・川上）に触れていますが、ピアノの搬出方法や費用の記載はありません。大きな品物は後日引き取りになる場合があるとFAQにあるので、<strong>ピアノは型番・設置階・搬出経路を伝えて、来てもらえるか・費用がかかるかを事前に確認</strong>してください（<Link href="/articles/piano-kaitori/" className={linkCls}>ピアノ買取ガイド</Link>参照）。
          </p>
          <h3>5. 値が付かなかった物は持ち帰りになる</h3>
          <p>
            出張買取のFAQでは「買取可能なお品物のみの対応」、店頭買取のFAQでは値が付かない物は持ち帰りと案内されています。処分まで任せたい楽器があるなら、申込時に不用品回収の相談が必要です。
          </p>

          <h2 id="compare">ほかの売り方との違い</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">ウリエルの出張買取</th><th className="px-4 py-3 text-left font-medium">一括査定（ヒカカク！など）</th><th className="px-4 py-3 text-left font-medium">楽器店の店頭買取</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">楽器を運ぶ手間</td><td className="px-4 py-3">不要。大きい物は申込時に大きさを伝える（後日引き取りの場合あり）</td><td className="px-4 py-3">依頼先の買取方法による</td><td className="px-4 py-3">自分で店へ運ぶ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">金額が分かる時点</td><td className="px-4 py-3">査定士の訪問後（楽器買取ページに買取価格表の掲載なし）</td><td className="px-4 py-3">複数社の見積もりを見てから依頼先を選べる</td><td className="px-4 py-3">持ち込んだその場</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">支払い</td><td className="px-4 py-3">その場で現金</td><td className="px-4 py-3">依頼先による</td><td className="px-4 py-3">店による（現金・振込）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">クーリングオフ</td><td className="px-4 py-3">対象（契約書面の受領から8日以内）</td><td className="px-4 py-3">依頼先が出張買取なら対象</td><td className="px-4 py-3">対象外</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">楽器以外とまとめて</td><td className="px-4 py-3">可（着物・オーディオ・切手など総合買取）</td><td className="px-4 py-3">依頼先による</td><td className="px-4 py-3">楽器と関連機材が中心</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            型番の分かるギターや管楽器で金額を比べたい場合は一括査定、運べない楽器や片付けを兼ねる場合はウリエルの出張、近くに楽器店があり持ち込める場合は店頭、という使い分けが目安です。
          </p>

          <h2 id="fit">向いている人・向かない人</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
            <div className="border border-gold/40 bg-gold/5 rounded-xl p-4">
              <p className="font-bold text-foreground mb-2">向いている人</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>琴・ドラム・アンプなど<strong>自分で運べない楽器</strong>を売りたい</li>
                <li>楽器と着物・オーディオなどを<strong>まとめて1回で</strong>片付けたい</li>
                <li>ネット申込や梱包より<strong>対面で説明を聞きたい</strong></li>
                <li>関東・東海・関西に住んでいる（公式の声の9割以上がこの地域）</li>
              </ul>
            </div>
            <div className="border border-warm-border rounded-xl p-4">
              <p className="font-bold text-foreground mb-2">向かない人</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>型番の分かるギター1本を<strong>最高値</strong>で売りたい（まず相見積もり）</li>
                <li>北海道・東北・群馬・沖縄など対応エリアの記載がない地域に住んでいる</li>
                <li>宅配で送って済ませたい（宅配買取の案内がない）</li>
                <li>自宅に人を呼びたくない</li>
              </ul>
            </div>
          </div>
          <p>
            出張・店頭・宅配の違いは<Link href="/articles/kaitori-houhou-hikaku/" className={linkCls}>出張・店頭・宅配買取の比較</Link>、出張買取の一般的な流れは<Link href="/articles/gakki-shucchou-kaitori/" className={linkCls}>楽器の出張買取の流れと注意点</Link>、3社の比較は<Link href="/articles/gakki-kaitori-osusume/" className={linkCls}>楽器買取おすすめ業者の比較</Link>にまとめています。Fenderなどのギターを売る場合は<Link href="/articles/fender-kaitori/" className={linkCls}>Fender買取ガイド</Link>もどうぞ。
          </p>

          <UrielCta title="楽器の出張買取を申し込む" lead="型番・本数・大きさを伝えるとスムーズです。査定だけの依頼もできます。" />

          <h2 id="faq">よくある質問</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>Q. {f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="sources">出典</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><a href="https://www.uriel-cuore.co.jp/instrument/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ウリエル 楽器買取（対象・流れ・買取例・お客様の声・FAQ・エリア）</a></li>
            <li><a href="https://www.uriel-cuore.co.jp/visit/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ウリエル 出張買取（対応エリア・訪問時間・最短日・女性スタッフの希望・FAQ）</a></li>
            <li><a href="https://www.uriel-cuore.co.jp/voice/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ウリエル お客様の声（全28ページ・279件を当サイトで集計）</a></li>
            <li><a href="https://www.uriel-cuore.co.jp/campaign/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ウリエル 買取金額7倍キャンペーン（条件・当選者の声）</a></li>
            <li><a href="https://www.uriel-cuore.co.jp/shop/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ウリエル 店頭・持込買取（川崎店・予約制）</a></li>
            <li><a href="https://www.uriel-cuore.co.jp/coolingoff/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ウリエル クーリングオフ</a>／<a href="https://www.uriel-cuore.co.jp/company/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">会社概要（古物商許可番号）</a></li>
            <li><a href="https://hikakaku.com/company/23566/reviews/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ヒカカク！ ウリエルのクチコミ・評判（総合評価・件数内訳）</a></li>
            <li><a href="https://www.kokusen.go.jp/news/data/n-20230927_1.html" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">国民生活センター「訪問購入のトラブルが増えています」（2023年9月27日）</a></li>
            <li><a href="https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">消費者庁 特定商取引法ガイド「訪問購入」</a></li>
          </ul>
          <p className="text-xs text-warm-gray">※ いずれも{UPDATED_JA}に各ページを確認して記載しています。サービス内容・エリア・件数は変わることがあるため、最新情報は公式サイトでご確認ください。本記事はPRリンクを含みます。</p>
        </section>

        <RelatedArticles currentSlug="uriel-gakki-kaitori-kuchikomi" relatedSlugs={["gakki-kaitori-osusume", "gakki-shucchou-kaitori", "hikakaku-gakki-kaitori-kuchikomi", "kaitori-houhou-hikaku", "fender-kaitori", "gakki-kaitori-sagi", "ihin-gakki-kaitori"]} />
      </article>
    </>
  );
}

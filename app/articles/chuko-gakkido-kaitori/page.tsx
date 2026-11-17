import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-17）「中古楽器堂 評判」。
// ⚠️ 口コミ・評価は載せない（第三者の投稿を転載しない方針）。title/h1 に「評判」を入れない（trust-audit C5）。
//    本文の事実はすべて中古楽器堂の公式サイト（2026-11-17 取得・HTMLコメントと script は除外）から。
//   売却方法 https://gakkidou.co.jp/purchase-method/（/shop/・/trip/・/delivery/）
//   会社概要・古物表示 https://gakkidou.co.jp/company/
//   店舗一覧 https://gakkidou.co.jp/shop/（41店）と各店舗ページの「店頭買取時間」「出張買取時間」を当サイトが1店ずつ確認して集計。
//   福岡博多店 https://gakkidou.co.jp/shop/fukuoka/hakata/ は一覧に載っていない（出張買取専門）。

const ASOF = "2026年11月17日";
const METHOD = "https://gakkidou.co.jp/purchase-method/";
const M_SHOP = "https://gakkidou.co.jp/purchase-method/shop/";
const M_TRIP = "https://gakkidou.co.jp/purchase-method/trip/";
const M_DELI = "https://gakkidou.co.jp/purchase-method/delivery/";
const COMPANY = "https://gakkidou.co.jp/company/";
const SHOPS = "https://gakkidou.co.jp/shop/";
const HAKATA = "https://gakkidou.co.jp/shop/fukuoka/hakata/";

const STORES: { name: string; pref: string; addr: string; tentou: string; url: string }[] = [
  { name: "札幌店", pref: "北海道", addr: "北海道札幌市中央区南八条西9丁目755-28フォレストエム1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/hokkaido/sapporo/" },
  { name: "旭川8条7丁目店", pref: "北海道", addr: "北海道旭川市8条通7丁目34ｰ19 PREMIUM8.7 1階", tentou: "10:00～18:00", url: "https://gakkidou.co.jp/shop/hokkaido/asahikawa/" },
  { name: "岩手盛岡店", pref: "岩手県", addr: "岩手県盛岡市本町通3丁目15-30", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/iwate/moriokaten/" },
  { name: "仙台店", pref: "宮城県", addr: "宮城県仙台市泉区泉中央2丁目21-1 ツインプラザ幸1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/miyagi/sendai/" },
  { name: "秋田店", pref: "秋田県", addr: "秋田県秋田市仁井田本町1丁目1-25 シャーデンプラザ1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/akita/akitaten/" },
  { name: "福島郡山店", pref: "福島県", addr: "福島県郡山市桑野3丁目19-16 ヒルズ21桑野 101", tentou: "要予約", url: "https://gakkidou.co.jp/shop/fukushima/koriyama/" },
  { name: "水戸店", pref: "茨城県", addr: "茨城県水戸市中央2丁目8-31", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/ibaraki/mito/" },
  { name: "宇都宮店", pref: "栃木県", addr: "栃木県宇都宮市花房本町3-18", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/tochigi/utsunomiya/" },
  { name: "岩槻店｜岩槻駅前", pref: "埼玉県", addr: "埼玉県さいたま市岩槻区本町4丁目10-3 カトルセゾン1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/saitama/saitamahonbu/" },
  { name: "埼玉本部・川口店", pref: "埼玉県", addr: "埼玉県川口市芝2丁目9-22", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/saitama/honbukawaguchi/" },
  { name: "所沢店", pref: "埼玉県", addr: "埼玉県所沢市緑町4丁目30-1 第二平岡ビル1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/saitama/honbutokorozawa/" },
  { name: "松戸店", pref: "千葉県", addr: "千葉県松戸市竹ヶ花208-1 阪本ビル1階", tentou: "要予約", url: "https://gakkidou.co.jp/shop/chiba/matsudochiba/" },
  { name: "秋葉原駅前店", pref: "東京都", addr: "東京都千代田区外神田1丁目16-10 ニュー秋葉原センタービル2階23号室", tentou: "要予約", url: "https://gakkidou.co.jp/shop/tokyo/akiba/" },
  { name: "新宿本店", pref: "東京都", addr: "東京都新宿区西新宿1丁目2-13 山田ビル2階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/tokyo/shinjuku/" },
  { name: "品川店", pref: "東京都", addr: "東京都品川区大井3丁目6-9 アーバンライフ大井町1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/tokyo/shinagawa/" },
  { name: "世田谷店｜千歳船橋駅前", pref: "東京都", addr: "東京都世田谷区経堂4丁目19-4", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/tokyo/honbusetagaya/" },
  { name: "南平台店", pref: "東京都", addr: "東京都渋谷区南平台町1-9 南平台宝来ビル1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/tokyo/shibuya/" },
  { name: "渋谷店", pref: "東京都", addr: "東京都渋谷区道玄坂2丁目6-2 藤山恒産第一ビル5階", tentou: "要予約", url: "https://gakkidou.co.jp/shop/tokyo/dogenzaka/" },
  { name: "池袋本店", pref: "東京都", addr: "東京都豊島区西池袋3丁目30-3 西池本田ビル2階", tentou: "10:00～19:00", url: "https://gakkidou.co.jp/shop/tokyo/ikebukuro/" },
  { name: "大塚店", pref: "東京都", addr: "東京都豊島区西巣鴨1丁目9-11 大同ビル1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/tokyo/otsuka/" },
  { name: "板橋店", pref: "東京都", addr: "東京都板橋区赤塚7丁目19-15 第一鈴木ビル1階", tentou: "要予約", url: "https://gakkidou.co.jp/shop/tokyo/kanto/" },
  { name: "西八王子店", pref: "東京都", addr: "東京都八王子市千人町1丁目6-1", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/tokyo/honbuhachiouji/" },
  { name: "神奈川本部・横浜店", pref: "神奈川県", addr: "神奈川県横浜市保⼟ケ⾕区今井町44-3", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/kanagawa/yokohama/" },
  { name: "富山店", pref: "富山県", addr: "富山県富山市黒瀬447-1 アルビトロジェイ1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/toyama/toyamashop/" },
  { name: "金沢店", pref: "石川県", addr: "石川県金沢市間明町2丁目335 アジュール間明1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/ishikawa/kanazawa/" },
  { name: "山梨甲府店", pref: "山梨県", addr: "山梨県甲府市住吉2丁目4-10", tentou: "10:00～16:30", url: "https://gakkidou.co.jp/shop/yamanashi/kofu/" },
  { name: "長野店", pref: "長野県", addr: "長野県長野市中御所5丁目3-3 柳澤ビル1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/nagano/naganoshop/" },
  { name: "岐阜店", pref: "岐阜県", addr: "岐阜県岐阜市加納神明町4丁目9 クレール神明1階", tentou: "10:00～17:30", url: "https://gakkidou.co.jp/shop/gifu/gifuhonbu/" },
  { name: "静岡本部・静岡店", pref: "静岡県", addr: "静岡県静岡市葵区本通7丁目9-5 モーリビル1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/shizuoka/honbushizuoka/" },
  { name: "愛知本部・名古屋店", pref: "愛知県", addr: "愛知県名古屋市名東区社が丘2丁目1116 第2ヤマケンビル1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/aichi/chubu/" },
  { name: "三重本部・四日市店", pref: "三重県", addr: "三重県四日市市城北町1-12 ルグランビル1階", tentou: "要予約", url: "https://gakkidou.co.jp/shop/mie/miehonbu/" },
  { name: "京都本部・京都店", pref: "京都府", addr: "京都府京都市伏見区横大路下三栖山殿54-1", tentou: "要予約", url: "https://gakkidou.co.jp/shop/kyoto/honbukyoto/" },
  { name: "大阪本部・吹田店", pref: "大阪府", addr: "大阪府吹田市垂水町3丁目3-1 ラックスリービル1階", tentou: "10:00-17:30", url: "https://gakkidou.co.jp/shop/osaka/kansai/" },
  { name: "三宮店", pref: "兵庫県", addr: "兵庫県神戸市中央区北長挟通２丁目31-47 高架下店舗31-47号1階北号室", tentou: "要予約", url: "https://gakkidou.co.jp/shop/hyogo/sannomiya/" },
  { name: "岡山店", pref: "岡山県", addr: "岡山県岡山市北区京橋町12-22 ふぁみーゆ旭川1階", tentou: "9:30～19:00", url: "https://gakkidou.co.jp/shop/okayama/okayamashop/" },
  { name: "広島店", pref: "広島県", addr: "広島県広島市東区曙3丁目3-37 林ビル1階", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/hiroshima/hiroshimaten/" },
  { name: "高松店", pref: "香川県", addr: "香川県高松市木太町2796-4 エクセル木太1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/kagawa/takamatsu/" },
  { name: "松山店", pref: "愛媛県", addr: "愛媛県松山市山越3丁目6-30 太陽山越ビル1階", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/ehime/matsuyama/" },
  { name: "高知店", pref: "高知県", addr: "高知県高知市北本町2丁目4-3 森ビル1階", tentou: "10:00～18:00", url: "https://gakkidou.co.jp/shop/kochi/kochishop/" },
  { name: "熊本店", pref: "熊本県", addr: "熊本県熊本市中央区渡鹿4丁目6-7", tentou: "9:30～18:00", url: "https://gakkidou.co.jp/shop/kumamoto/kumamotohonbu/" },
  { name: "鹿児島店", pref: "鹿児島県", addr: "鹿児島県鹿児島市宇宿2丁目24-36", tentou: "11:00～18:30", url: "https://gakkidou.co.jp/shop/kagoshima/kagoshimashop/" },
];

const reserveOnly = STORES.filter((s) => s.tentou === "要予約");
const withHours = STORES.filter((s) => s.tentou !== "要予約");
const prefs = Array.from(new Set(STORES.map((s) => s.pref)));
const tokyoN = STORES.filter((s) => s.pref === "東京都").length;

const METHODS: { name: string; how: string; pay: string; note: string }[] = [
  {
    name: "出張買取",
    how: "電話またはフォームで連絡し、日時を決めて自宅で査定。当日の出張にも対応",
    pay: "その場で現金（高額の場合は一部振込の場合あり）",
    note: "出張料・査定料は無料。見積もりのみの出張査定も可。各店舗ページの出張買取時間は毎日9:00〜20:30",
  },
  {
    name: "店舗買取",
    how: "直接来店、または電話・フォーム・予約カレンダーで予約して持ち込む（予約者を優先）",
    pay: "その場で現金",
    note: "店舗によって「要予約」。下の一覧を参照",
  },
  {
    name: "宅配買取",
    how: "電話またはメールで申し込み、買取の可否の回答を受けてから、届いた宅配キットの着払伝票で発送",
    pay: "本人名義の口座へ、成約後3営業日以内に振込",
    note: "送料無料。宅配キットは本人確認つきの配送で届く。不成立の場合の返送料・査定料も無料。マイナンバーカードは本人確認書類に使えない",
  },
];

const FAQ = [
  {
    q: "中古楽器堂はどこの会社が運営していますか？",
    a: "公式サイトの会社概要では、株式会社リサイクルマイスター（東京本社：東京都豊島区西池袋）が運営しています。古物商許可番号は東京都公安委員会 第305590806398号です。",
  },
  {
    q: "中古楽器堂の店舗には予約なしで持ち込めますか？",
    a: `店舗によって異なります。${ASOF}に店舗一覧の${STORES.length}店の店舗ページを確認したところ、${withHours.length}店は店頭買取の時間を掲載し、${reserveOnly.length}店は店頭買取時間を「要予約」としていました。売却方法のページでは、予約した人を優先し、店舗の休みもあるため問い合わせたほうが確実と案内されています。`,
  },
  {
    q: "買取代金はいつ受け取れますか？",
    a: "出張買取と店舗買取は、成約するとその場で現金で支払われます（出張で高額の場合は一部振込の場合あり）。宅配買取は、査定額に同意したあと、本人名義の口座へ金融機関の3営業日以内に振り込まれます。福岡博多店の店頭買取は振込です。",
  },
  {
    q: "宅配買取の送料はかかりますか？",
    a: "公式サイトでは、送付は中古楽器堂が送る着払伝票で行い送料無料、成約しなかった場合の返送料・査定料も無料と案内されています。段ボール箱や緩衝材が必要な場合は、申し込みの際に依頼できます。",
  },
  {
    q: "福岡に中古楽器堂の店舗はありますか？",
    a: "店舗一覧には福岡県の店舗は掲載されていませんが、福岡博多店（福岡市博多区美野島）の店舗ページがあります。出張買取専門で、店頭での買取は予約制、支払いは振込と案内されています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "中古楽器堂の買取", href: "/articles/chuko-gakkido-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/chuko-gakkido-kaitori/" },
  title: "中古楽器堂の買取とは？出張・店舗・宅配の流れと41店舗の店頭買取時間を公式情報で整理【2026年11月】",
  description:
    "中古楽器堂（運営：株式会社リサイクルマイスター）の楽器買取について、出張・店舗・宅配の流れと支払い方法、41店舗それぞれの店頭買取時間（要予約の店舗を含む）を、公式サイトと各店舗ページで確認して整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "中古楽器堂の買取とは？3つの売却方法と41店舗の店頭買取時間【2026年11月】",
    description: "公式サイトと各店舗ページを確認。出張・店舗・宅配の流れ、支払い、要予約の店舗、運営会社。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "中古楽器堂の買取とは？出張・店舗・宅配の流れと41店舗の店頭買取時間を公式情報で整理",
        datePublished: "2026-11-17",
        dateModified: "2026-11-17",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/chuko-gakkido-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "中古楽器堂の買取", item: "https://gakkikaitori-biyori.com/articles/chuko-gakkido-kaitori/" },
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
          中古楽器堂の買取とは？出張・店舗・宅配の流れと41店舗の店頭買取時間を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={METHOD} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            中古楽器堂 公式サイトの「売却方法一覧」
          </a>
          と会社概要、店舗一覧に載っている{STORES.length}店の店舗ページを1店ずつ確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            中古楽器堂は、<strong>株式会社リサイクルマイスター</strong>が運営する楽器買取の専門店です。売却方法は<strong>出張・店舗・宅配の3つ</strong>で、出張と店舗はその場で現金、宅配は3営業日以内の振込です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            店舗一覧には{prefs.length}都道府県の{STORES.length}店が載っています（東京都が{tokyoN}店）。ただし、そのうち<strong>{reserveOnly.length}店は店頭買取が「要予約」</strong>で、時間を掲載している店舗も予約者が優先です。
            持ち込む前に電話か予約カレンダーで確認するのが確実です。
          </p>
        </div>

        <h2 id="methods" className="text-xl font-bold mt-12 mb-4">売却方法ごとの流れと支払い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">流れ</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
                <th className="text-left px-4 py-3 font-medium">公式の案内</th>
              </tr>
            </thead>
            <tbody>
              {METHODS.map((m) => (
                <tr key={m.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{m.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.how}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.pay}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          出張買取は原則として自宅への訪問で、職場へ伺うのは「法人買取」の場合のみと記載されています。
          買取の対象は、ギター・ベース・アンプ・弦楽器・打楽器・電子ドラム・鍵盤楽器・DJ機器・PA/録音機器などのカテゴリで案内されています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={M_TRIP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>・
          <a href={M_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店舗買取</a>・
          <a href={M_DELI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">宅配買取</a>
          （{ASOF}取得）。
        </p>

        <h2 id="stores" className="text-xl font-bold mt-12 mb-4">店舗一覧と店頭買取時間（{STORES.length}店・当サイト確認）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式の店舗一覧に載っている店舗について、各店舗ページの「店頭買取時間」を確認しました。
          {withHours.length}店は時間を掲載し、{reserveOnly.length}店（{reserveOnly.map((s) => s.name).join("・")}）は「要予約」です。
          店舗ページの電話受付は41店とも「24時間対応」、出張買取時間は「毎日（9:00〜20:30）」でした。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地</th>
                <th className="text-left px-4 py-3 font-medium">店頭買取時間</th>
              </tr>
            </thead>
            <tbody>
              {STORES.map((s) => (
                <tr key={s.url} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {s.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{s.addr}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{s.tentou}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          新宿本店の店舗ページには、店頭買取時間外でも出張スタッフの都合がつけば店頭での買取に対応できる場合がある、と記載されています。
          渋谷店（道玄坂）の店舗ページでは、掲載している営業時間は電話受付の時間で、来店での買取は完全予約制と案内されています。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          一覧には載っていない
          <a href={HAKATA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">福岡博多店</a>
          （福岡市博多区美野島）は出張買取専門で、店頭での買取は予約制・支払いは振込です。福岡の他の買取店は
          <Link href="/articles/fukuoka-gakki-kaitori/" className="text-accent underline">福岡の楽器買取</Link>で整理しています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={SHOPS} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">中古楽器堂 店舗一覧</a>と各店舗ページ（{ASOF}取得）。
          電話番号は掲載していません。営業時間・予約の要否は変わることがあるため、来店前に公式ページでご確認ください。
        </p>

        <h2 id="delivery" className="text-xl font-bold mt-12 mb-4">宅配買取で用意するもの</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>売りたい楽器（申し込んだもの以外は受け取れないと案内されています）</li>
          <li>買取依頼者情報シート（氏名・住所・生年月日・職業・本人名義の口座を直筆で記入）</li>
          <li>本人確認書類のコピー（運転免許証・パスポートなど。裏面に住所の記載がある場合は裏面も）</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          宅配キットは本人確認つきの配送で届くため、受け取りの際に本人確認書類の提示が必要です。マイナンバーカードは本人確認書類として使えません。
          楽器ごとの梱包の注意は<Link href="/articles/gakki-takuhai-kaitori/" className="text-accent underline">楽器の宅配買取</Link>でまとめています。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">他社と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          中古楽器堂は店舗数が多く、出張・店頭ともその場で現金を受け取れる一方、店舗によっては予約がないと持ち込めません。
          出張でその場払いの<Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>、
          予約不要で店頭現金払いの<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフ</Link>、
          振込のみの<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器</Link>と、支払い方法と予約の要否を並べて比べると選びやすくなります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          古物営業法に基づく表示：株式会社リサイクルマイスター・東京都公安委員会 第305590806398号（
          <a href={COMPANY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">公式の表記</a>、{ASOF}確認）。
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
          currentSlug="chuko-gakkido-kaitori"
          relatedSlugs={["gakki-no-kaitoriyasan", "hardoff-gakki-kaitori", "shimamura-gakki-kaitori", "kurosawa-gakki-kaitori", "gakki-shucchou-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

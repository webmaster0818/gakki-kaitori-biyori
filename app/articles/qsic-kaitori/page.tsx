import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-15）「Qsic 買取」。
// ⚠️ 本文の事実はすべて Qsic の公式サイト（2026-11-15 取得・HTMLコメント内の文言は除外）から。
//   買取サイト https://www.gakkikaitori.com/ （/profile/ 会社概要・/way/ 買取方法・/way/visit.html 出張・/yuso/ 宅配）
//   販売サイト https://www.qsic.jp/ （?mode=f6 下取りサービス）※qsic.jp は EUC-JP
//   ⚠️ gakkikaitori.com（Qsic・株式会社LUXTIS）と gakkikaitori.co.jp（楽器の買取屋さん・UNISOUND株式会社）は別の会社。
//   口コミ・評価・順位は載せない。電話番号は転載しない。

const ASOF = "2026年11月15日";
const BUY = "https://www.gakkikaitori.com/";
const PROFILE = "https://www.gakkikaitori.com/profile/";
const WAY = "https://www.gakkikaitori.com/way/";
const VISIT = "https://www.gakkikaitori.com/way/visit.html";
const YUSO = "https://www.gakkikaitori.com/yuso/";
const SHITADORI = "https://www.qsic.jp/?mode=f6";

const SHOPS: { name: string; addr: string; hours: string; closed: string }[] = [
  { name: "神戸本店", addr: "兵庫県神戸市中央区三宮町1丁目8-1 さんプラザ3階", hours: "平日12時〜19時／土日祝11時〜19時30分", closed: "水曜日（祝日の場合は翌日）" },
  { name: "梅田店", addr: "大阪府大阪市北区茶屋町 梅田地下街1-3号 ホワイティうめだ地下1階", hours: "10時〜21時", closed: "奇数月の第3木曜日" },
  { name: "みのおキューズモール店", addr: "大阪府箕面市西宿1丁目17番22号 みのおキューズモール EAST1", hours: "10時〜20時", closed: "なし" },
  { name: "あべのキューズモール店", addr: "大阪府大阪市阿倍野区阿倍野筋1-6-1 あべのキューズモール3F", hours: "10時〜21時", closed: "なし" },
];

// 宅配買取の送料無料の範囲（公式 /yuso/ の表。買取金額は最終査定金額の合計）
const YUSO_TABLE: { amount: string; free: string; hokkaido: string }[] = [
  { amount: "5,000円未満", free: "なし", hokkaido: "なし" },
  { amount: "5,000円以上", free: "1,000円まで", hokkaido: "1,000円まで" },
  { amount: "1万円以上", free: "1梱包まで無料", hokkaido: "2,000円まで" },
  { amount: "3万円以上", free: "2梱包まで無料", hokkaido: "4,000円まで" },
  { amount: "5万円以上", free: "3梱包まで無料", hokkaido: "6,000円まで" },
  { amount: "7万円以上", free: "4梱包まで無料", hokkaido: "8,000円まで" },
  { amount: "9万円以上", free: "5梱包まで無料", hokkaido: "10,000円まで" },
  { amount: "11万円以上", free: "6梱包まで無料（以降2万円ごとに1梱包）", hokkaido: "12,000円まで（以降2,000円刻み）" },
];

const FAQ = [
  {
    q: "Qsicの買取方法は何がありますか？",
    a: `公式の買取サイトでは、宅配買取・店頭買取（神戸本店・梅田店・箕面店・阿倍野店）・出張買取の3つを案内しています（${ASOF}確認）。宅配は着払いで神戸本店へ送り、検品後に口座へ振り込まれます。店頭はその場で査定・支払いで、高額の場合は振込になることがあります。`,
  },
  {
    q: "Qsicの出張買取はどの地域が対象ですか？",
    a: "公式の出張買取ページでは、東京都・神奈川県・埼玉県・千葉県（2026年11月追加）、大阪府・兵庫県・奈良県・京都府、滋賀県・和歌山県・岡山県・徳島県・香川県（条件あり）が対象エリアです。関東の4都県はその場で支払い、関西圏は持ち帰って検品した後に振込と案内されています。",
  },
  {
    q: "宅配買取の送料は無料ですか？",
    a: "最終査定金額の合計に応じて、送料が無料になる梱包数が決まっています。5,000円未満は無料枠なし、5,000円以上は1,000円まで、1万円以上で1梱包まで無料、以降金額に応じて増えます。北海道・沖縄県は梱包数ではなく、店側が負担する金額の上限が設けられています。",
  },
  {
    q: "Qsicで楽器を買うと買取額が上がりますか？",
    a: "販売サイトの下取りサービスでは、買取と購入が同時〜7日以内に成立すると買取金額が最大10%アップします。上限は購入商品の税抜価格の50%で、公式販売サイト以外での注文や、差額をクレジットカード等で決済する場合は5%アップです。弦などの小物は対象外です。",
  },
  {
    q: "「楽器の買取屋さん」とQsicは同じ会社ですか？",
    a: "別の会社です。Qsicの買取サイト（gakkikaitori.com）の運営会社は株式会社LUXTIS（古物 兵庫県公安委員会 第631160700008号）、楽器の買取屋さん（gakkikaitori.co.jp）の運営会社はUNISOUND株式会社（古物 神奈川県公安委員会 第451310006356号）です。ドメインが似ているため、申込み前に運営会社をご確認ください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "Qsic（キュージック）の買取", href: "/articles/qsic-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/qsic-kaitori/" },
  title: "Qsic（キュージック）の買取方法と条件｜宅配の送料・出張エリア・4店舗を公式情報で整理【2026年11月】",
  description:
    "神戸・大阪の楽器店Qsic（キュージック）の買取を公式情報で整理しました。宅配・店頭・出張の違い、宅配の送料無料の範囲、2026年11月に関東4都県が加わった出張エリア、下取りの10%アップ条件、運営会社と古物商許可を掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "Qsic（キュージック）の買取方法と条件【2026年11月】",
    description: "宅配の送料、出張エリア、店舗、下取りの条件、運営会社を公式情報で整理。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Qsic（キュージック）の買取方法と条件｜宅配の送料・出張エリア・4店舗を公式情報で整理",
        datePublished: "2026-11-15",
        dateModified: "2026-11-15",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/qsic-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "Qsic（キュージック）の買取", item: "https://gakkikaitori-biyori.com/articles/qsic-kaitori/" },
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
          Qsic（キュージック）の買取方法と条件｜宅配の送料・出張エリア・4店舗を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={BUY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            Qsic 公式の買取サイト
          </a>
          と販売サイトを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            Qsic（キュージック）は、神戸・大阪に4店舗を持つ中古楽器店です。運営は<strong>株式会社LUXTIS</strong>で、買取は
            <strong>宅配・店頭・出張の3つ</strong>から選べます。宅配は着払いで送り、検品後に振込。店頭はその場で査定・支払いです。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            出張買取は関西の府県に加え、<strong>2026年11月から東京都・神奈川県・埼玉県・千葉県が対象</strong>になりました。
            なお、買取サイトのドメイン（gakkikaitori.com）は「楽器の買取屋さん」（gakkikaitori.co.jp）と似ていますが、別の会社です。
          </p>
        </div>

        <h2 id="way" className="text-xl font-bold mt-12 mb-4">3つの買取方法の違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">方法</th>
                <th className="text-left px-3 py-3 font-medium">流れ</th>
                <th className="text-left px-3 py-3 font-medium">支払い</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-3 py-3 font-medium whitespace-nowrap">宅配買取</td>
                <td className="px-3 py-3 leading-relaxed">事前査定に納得したら、ヤマト運輸の宅急便・着払いで神戸本店へ送る。梱包資材・ハードケースの無料貸し出しあり</td>
                <td className="px-3 py-3 leading-relaxed">検品後、指定口座へ振込（振込手数料は無料。多くは商品到着日に振込と案内）</td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-3 py-3 font-medium whitespace-nowrap">店頭買取</td>
                <td className="px-3 py-3 leading-relaxed">4店舗へ持ち込み、その場で査定。現住所が印字された身分証明書が必要。未成年は保護者の同意書が必要</td>
                <td className="px-3 py-3 leading-relaxed">その場で現金。高額の場合は振込になることがある</td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-3 py-3 font-medium whitespace-nowrap">出張買取</td>
                <td className="px-3 py-3 leading-relaxed">事前査定のあと日程を決めて訪問。品物が小型・少数の場合は宅配・店頭を案内されることがある。混雑時は引き取りまで2週間ほどかかる場合あり</td>
                <td className="px-3 py-3 leading-relaxed">関東4都県はその場で支払い。関西圏は持ち帰って当日〜翌日に検品し、同意後に振込</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={WAY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">買取方法</a>・
          <a href={VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>・
          <a href={YUSO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">宅配買取</a>
          （Qsic 買取サイト・{ASOF}取得）。最終査定でキャンセルすることも可能と案内されています。
        </p>

        <h2 id="area" className="text-xl font-bold mt-12 mb-4">出張買取の対象エリア</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>東京都・神奈川県・埼玉県・千葉県（2026年11月追加・その場で支払い）</li>
          <li>大阪府・兵庫県・奈良県・京都府</li>
          <li>滋賀県・和歌山県・岡山県・徳島県・香川県（条件あり・訪問の条件が厳しい場合あり）</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          上記以外の地域は出張の対象外で、宅配買取か持ち込みを利用するよう案内されています。関西圏の出張でも、近日中に現地での支払いに対応する予定と記載されています（{ASOF}時点）。
        </p>

        <h2 id="yuso" className="text-xl font-bold mt-12 mb-4">宅配買取の送料が無料になる範囲</h2>
        <p className="text-sm leading-relaxed mb-4">
          宅配買取は着払いで送りますが、送料が全額無料になるわけではありません。<strong>最終査定金額の合計</strong>に応じて、無料になる梱包数（北海道・沖縄県は店側の負担額の上限）が決まっています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">合計買取金額</th>
                <th className="text-left px-3 py-3 font-medium">送料無料の範囲</th>
                <th className="text-left px-3 py-3 font-medium">北海道・沖縄県</th>
              </tr>
            </thead>
            <tbody>
              {YUSO_TABLE.map((y) => (
                <tr key={y.amount} className="border-t border-warm-200">
                  <td className="px-3 py-3 whitespace-nowrap">{y.amount}</td>
                  <td className="px-3 py-3">{y.free}</td>
                  <td className="px-3 py-3">{y.hokkaido}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          例えば合計5,000円未満の場合、送料は全額自己負担になります。エフェクター1台など小さな品物を送る場合は、店頭への持ち込みや、他社の宅配条件とも比べてください。
          宅急便には1梱包あたり30万円までの補償が適用されると案内されています。
        </p>

        <h2 id="shitadori" className="text-xl font-bold mt-12 mb-4">買い替えるときの下取り（最大10%アップ）</h2>
        <p className="text-sm leading-relaxed mb-4">
          Qsicの販売サイトの下取りサービスでは、買取と購入が<strong>同時〜7日以内</strong>に成立すると、買取金額が最大10%アップします。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>アップする金額の上限は、購入商品の税抜価格の50%</li>
          <li>公式販売サイト以外での注文、または差額をクレジットカード・Amazon Pay・PayPay 等で決済する場合は5%アップ</li>
          <li>弦などの小物は対象外。他のサービス・キャンペーン・クーポンとの併用は不可</li>
        </ul>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHITADORI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            Qsic 販売サイト「下取りサービス」
          </a>
          （{ASOF}取得）。
        </p>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">店頭買取ができる4店舗</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">店舗</th>
                <th className="text-left px-3 py-3 font-medium">所在地</th>
                <th className="text-left px-3 py-3 font-medium">営業時間</th>
                <th className="text-left px-3 py-3 font-medium">定休日</th>
              </tr>
            </thead>
            <tbody>
              {SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-3 py-3 font-medium whitespace-nowrap">{s.name}</td>
                  <td className="px-3 py-3 leading-relaxed">{s.addr}</td>
                  <td className="px-3 py-3 leading-relaxed">{s.hours}</td>
                  <td className="px-3 py-3 leading-relaxed">{s.closed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={PROFILE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            Qsic 買取サイト「会社概要」
          </a>
          （{ASOF}取得）。電話番号は公式サイトでご確認ください。
        </p>

        <h2 id="company" className="text-xl font-bold mt-12 mb-4">運営会社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-36">運営会社</th>
                <td className="px-4 py-3 leading-relaxed">株式会社LUXTIS（ラグティス）</td>
              </tr>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-36">古物営業許可</th>
                <td className="px-4 py-3 leading-relaxed">兵庫県公安委員会 第631160700008号</td>
              </tr>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-36">創業・設立</th>
                <td className="px-4 py-3 leading-relaxed">創業 2005年3月／設立 2007年3月</td>
              </tr>
              <tr>
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-36">サイト</th>
                <td className="px-4 py-3 leading-relaxed">買取＝gakkikaitori.com／販売＝qsic.jp</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-8">
          関西の店頭買取の選択肢は<Link href="/articles/kobe-gakki-kaitori/" className="text-accent underline">神戸の楽器買取</Link>・
          <Link href="/articles/osaka-gakki-kaitori/" className="text-accent underline">大阪の楽器買取</Link>の記事に、
          楽器店系の買取は<Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">イケベ楽器</Link>・
          <Link href="/articles/yamano-gakki-kaitori/" className="text-accent underline">山野楽器</Link>の記事にまとめています。
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
          currentSlug="qsic-kaitori"
          relatedSlugs={["kobe-gakki-kaitori", "osaka-gakki-kaitori", "ikebe-gakki-kaitori", "yamano-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

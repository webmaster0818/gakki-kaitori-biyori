import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-14）「山野楽器 買取」。
// ⚠️ 本文の事実はすべて山野楽器の公式サイト（2026-11-14 取得）から。
//    https://www.yamano-music.co.jp/service/used-purchasing/ （中古買い取り）
//    https://www.yamano-music.co.jp/about-regulation/ （古物営業法に基づく表記）
//    口コミ・評価は載せない。買取価格の公表は無いので、金額も書かない。

const ASOF = "2026年11月14日";
const SRC = "https://www.yamano-music.co.jp/service/used-purchasing/";
const REG = "https://www.yamano-music.co.jp/about-regulation/";

// 公式「中古買い取り」ページの実施店舗（9店舗）
const SHOPS: { name: string; addr: string }[] = [
  { name: "銀座本店4F Ginza Guitar Garden", addr: "東京都中央区銀座4-5-6" },
  { name: "サウンドクルー吉祥寺", addr: "東京都武蔵野市吉祥寺本町2-12-7 吉祥寺MHビル 1F" },
  { name: "たまプラーザ テラス店", addr: "神奈川県横浜市青葉区美しが丘1-1-2 たまプラーザ テラス ゲートプラザ 2F" },
  { name: "サウンドクルー熊谷", addr: "埼玉県熊谷市銀座2-245 ニットーモール3F" },
  { name: "イオンモール北戸田店", addr: "埼玉県戸田市美女木東1-3-1 イオンモール北戸田 3F" },
  { name: "柏店", addr: "千葉県柏市柏1-2-31 柏共同ビル 2F" },
  { name: "ロックイン難波", addr: "大阪府大阪市中央区難波5-1-60 なんばシティ南館 2F" },
  { name: "イオンモール鶴見緑地店", addr: "大阪府大阪市鶴見区鶴見4-17-1-420 イオンモール鶴見緑地 4F" },
  { name: "西宮ガーデンズ店", addr: "兵庫県西宮市高松町14-2 阪急西宮ガーデンズ3F" },
];

const FACTS: { k: string; v: string }[] = [
  { k: "買取の方法", v: "店頭買い取りのみ掲載（宅配・出張の案内は中古買い取りページにありません）" },
  { k: "予約", v: "不要。営業時間内であれば持ち込み可（担当スタッフ不在時は待ち時間あり）" },
  { k: "査定", v: "無料・1点から。状態によっては預かり査定" },
  { k: "買取対象", v: "エレキギター、アコースティックギター、クラシックギター、ベース、アンプ、エフェクターなど" },
  { k: "買取対象外の種類", v: "DTM関連機材などのデジタル楽器、トランペットなどの管楽器、ヴァイオリンなどの弦楽器、ピアノ・電子ピアノを含む鍵盤楽器" },
  { k: "支払い", v: "指定口座への振込（1週間〜10日程度）。買取価格が1万円未満の場合はその場で現金" },
  { k: "持ち物", v: "身分証明書・印鑑・振込口座の分かるもの" },
  { k: "年齢", v: "18歳未満は買取対象外" },
  { k: "買い替え", v: "楽器を同時に購入する場合は査定額がアップすると案内" },
  { k: "古物営業許可", v: "東京都公安委員会 第301069602133号" },
];

const NG: string[] = [
  "通常使用に支障があるもの（音が出ない、高額修理が必要、修理不可など）",
  "著しい改造が施されているもの",
  "販売が困難なもの・価格設定ができないもの",
  "PSEマークのない電気製品",
  "クレジット・ローン等の残債があるもの",
  "身分確認ができない場合、18歳未満の場合",
];

const FAQ = [
  {
    q: "山野楽器は楽器の買取をしていますか？",
    a: `しています。公式サイトの「中古買い取りいたします」ページで、ギター・ベース・アンプ・エフェクターなどの店頭買い取りを案内しています（${ASOF}確認）。実施店舗は東京・神奈川・埼玉・千葉・大阪・兵庫の9店舗です。`,
  },
  {
    q: "管楽器やピアノも山野楽器で売れますか？",
    a: "公式ページには、DTM関連機材などのデジタル楽器、トランペットなどの管楽器、ヴァイオリンなどの弦楽器、ピアノ・電子ピアノを含む鍵盤楽器は買い取りできないと記載されています。これらは管楽器・ピアノを扱う別の買取業者に相談する必要があります。",
  },
  {
    q: "買取代金はその場で受け取れますか？",
    a: "公式ページでは、支払いは指定口座への振込で1週間〜10日程度かかると案内されています。買取価格が1万円未満の場合はその場で現金での支払いです。",
  },
  {
    q: "予約は必要ですか？",
    a: "公式ページでは予約不要とされています。ただし担当スタッフが不在の場合は時間がかかること、楽器の状態によっては預かり査定になることが記載されています。店舗によって買い取りをしていない楽器もあるため、持ち込む前に店舗へ確認するよう案内されています。",
  },
  {
    q: "宅配買取や出張買取はありますか？",
    a: `${ASOF}時点の中古買い取りページには、店頭買い取りの流れのみが掲載されています。近くに実施店舗がない場合や、管楽器・鍵盤楽器を売りたい場合は、宅配・出張に対応する他社と比べてください。`,
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "山野楽器の買取", href: "/articles/yamano-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yamano-gakki-kaitori/" },
  title: "山野楽器の買取は何が売れる？対象の楽器・実施9店舗・支払い方法を公式情報で整理【2026年11月】",
  description:
    "山野楽器の中古買い取りは店頭のみで、対象はギター・ベース・アンプ・エフェクターなど。管楽器・弦楽器・鍵盤楽器は対象外です。実施9店舗、振込までの日数、持ち物を公式情報で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "山野楽器の買取は何が売れる？対象の楽器・実施9店舗・支払い方法【2026年11月】",
    description: "公式の中古買い取りページの内容を整理。対象外の楽器、実施店舗、振込までの日数。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "山野楽器の買取は何が売れる？対象の楽器・実施9店舗・支払い方法を公式情報で整理",
        datePublished: "2026-11-14",
        dateModified: "2026-11-14",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yamano-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "山野楽器の買取", item: "https://gakkikaitori-biyori.com/articles/yamano-gakki-kaitori/" },
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
          山野楽器の買取は何が売れる？対象の楽器・実施9店舗・支払い方法を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={SRC} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            山野楽器 公式サイトの「中古買い取りいたします」ページ
          </a>
          を確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            山野楽器の中古買い取りは、<strong>9店舗での店頭買い取り</strong>です。対象は
            <strong>ギター・ベース・アンプ・エフェクターなど</strong>で、予約は不要、査定は無料です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            一方で、<strong>管楽器・弦楽器・デジタル楽器・鍵盤楽器（ピアノ・電子ピアノを含む）は買い取りできない</strong>と公式に明記されています。
            代金は原則として口座振込で、受け取りまで1週間〜10日程度かかります。
          </p>
        </div>

        <h2 id="overview" className="text-xl font-bold mt-12 mb-4">公式サイトで公表されている買取条件</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              {FACTS.map((f) => (
                <tr key={f.k} className="border-b border-warm-200 last:border-0">
                  <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-40">{f.k}</th>
                  <td className="px-4 py-3 leading-relaxed">{f.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SRC} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            山野楽器「中古買い取りいたします」
          </a>
          ・
          <a href={REG} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            古物営業法に基づく表記
          </a>
          （{ASOF}取得）。条件は変更されることがあるため、持ち込む前に公式サイトで最新の内容をご確認ください。
        </p>

        <h2 id="ng" className="text-xl font-bold mt-12 mb-4">買い取り対象外になる楽器・ケース</h2>
        <p className="text-sm leading-relaxed mb-4">
          山野楽器の店舗では管楽器やピアノも販売していますが、<strong>中古買い取りの対象はギター系の楽器と機材に限られています</strong>。
          公式ページには、楽器の種類とは別に、次の場合も対象外と記載されています。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          {NG.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          また「店舗により買い取りをしていない楽器もございます」とあるため、持ち込む前に店舗へ電話で確認するのが確実です。
          管楽器を売りたい場合は<Link href="/articles/kangakki-kaitori/" className="text-accent underline">管楽器の買取ガイド</Link>、
          ピアノ・電子ピアノは<Link href="/articles/piano-kaitori/" className="text-accent underline">ピアノ買取の記事</Link>をご覧ください。
        </p>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">買い取りを実施している店舗（9店舗）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式ページに掲載されている実施店舗です（{ASOF}時点）。山野楽器の全店舗で買い取りをしているわけではありません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地</th>
              </tr>
            </thead>
            <tbody>
              {SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{s.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.addr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          電話番号・営業時間は公式サイトの各店舗ページでご確認ください。実施店舗は変更されることがあります。
        </p>

        <h2 id="flow" className="text-xl font-bold mt-12 mb-4">店頭買い取りの流れと支払い</h2>
        <ol className="list-decimal pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>実施店舗へ持ち込む（予約不要・1点から）</li>
          <li>その場で状態・付属品を確認して査定（状態によっては預かり）</li>
          <li>査定金額の説明。納得できなければキャンセル可</li>
          <li>伝票記入と本人確認（顔写真・氏名・現住所・生年月日がそろう証明書なら1点、そろわない場合は2点）</li>
          <li>支払い：指定口座へ振込（1週間〜10日程度）。1万円未満はその場で現金</li>
        </ol>
        <p className="text-sm leading-relaxed mb-10">
          <strong>1万円以上の楽器はその日のうちに現金化できない</strong>点に注意が必要です。
          急いで現金が必要な場合は、店頭で即日現金払いに対応している他社の条件も確認してください。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">他社と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          山野楽器は楽器の同時購入で査定額がアップすると案内しており、<strong>買い替えを前提にする場合</strong>に検討しやすい条件です。
          売るだけの場合や、対象外の楽器を含む場合は、宅配・出張に対応した業者と比べてください。
        </p>
        <p className="text-sm leading-relaxed mb-8">
          同じ楽器店系の買取では、<Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">イケベ楽器（イケベリユース）</Link>
          が店頭・宅配・出張の3方式と通常買取価格の一覧を公開しています。
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
          currentSlug="yamano-gakki-kaitori"
          relatedSlugs={["ikebe-gakki-kaitori", "gakki-kaitori-osusume", "guitar-kaitori", "effector-kaitori", "kangakki-kaitori"]}
        />
      </article>
    </>
  );
}

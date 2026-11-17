import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-17）「三木楽器 買取」。
// 本文の事実はすべて三木楽器の公式サイト（2026-11-17 取得・HTMLコメントと script は除外）から。
//   中古楽器買取（窓口の案内） https://www.miki.co.jp/used/
//   楽器買取・下取り・委託販売 https://www.mikigakki.com/shop/appraisal/contact.aspx（受付店舗10店・方法・本人確認）
//   ピアノ買取センター https://piano.miki.co.jp/purchase/（買取対象地域・対象のピアノ・標準買取価格一覧・FAQ）
//   防音室の買取 https://design.miki.co.jp/purchase/
//   ピアノ標準買取価格一覧の件数・分布は、当サイトが一覧の305行を数えたもの。
// 口コミ・評価は載せない。

const ASOF = "2026年11月17日";
const USED = "https://www.miki.co.jp/used/";
const GAKKI = "https://www.mikigakki.com/shop/appraisal/contact.aspx";
const PIANO = "https://piano.miki.co.jp/purchase/";
const ROOM = "https://design.miki.co.jp/purchase/";

const WINDOWS: { name: string; target: string; how: string; pay: string }[] = [
  {
    name: "楽器の買取・下取り・委託販売",
    target: "ギター（アコギ・エレキ・ウクレレ・マンドリン・バンジョー）、ベース、ドラム、アンプ・エフェクター、管楽器、鍵盤楽器",
    how: "下の受付店舗へ持ち込む、または事前に連絡して宅配便で送る",
    pay: "持ち込みはその場で現金（金額により後日振込）、宅配は振込",
  },
  {
    name: "ピアノ買取センター",
    target: "アップライトピアノ・グランドピアノ（エレクトーン・電子ピアノは相談、オルガン・電子キーボードは不可）",
    how: "メールフォームか電話で見積もり → 引き取り日にピアノ専門運送業者が訪問",
    pay: "引き取りの際にその場で一括（高額品は振込の相談あり）",
  },
  {
    name: "防音室の買取（MIKI MUSIC DESIGN+）",
    target: "ヤマハのユニット防音室「アビテックス」（旧品番を含む）と調音パネル",
    how: "専用フォームで査定 → 売渡書を返送 → ヤマハ認定業者が解体・引き取り",
    pay: "引き取り後1週間以内に振込",
  },
];

const SHOPS: { name: string; kind: string; addr: string }[] = [
  { name: "梅田店", kind: "ギター専門店", addr: "大阪市北区角田町1-15" },
  { name: "Acoustic INN", kind: "アコースティックギター＆ウクレレ専門店", addr: "大阪市中央区西心斎橋2-10-2 CriceNikko西心斎橋2F" },
  { name: "アメリカ村店", kind: "エレキギター専門店", addr: "大阪市中央区西心斎橋1-7-18" },
  { name: "RHYTHM SQUARE BassSide", kind: "エレキベース専門フロア", addr: "大阪市中央区西心斎橋1-16-8-3F" },
  { name: "RHYTHM SQUARE DrumCenter", kind: "ドラム・コンサートパーカッション専門フロア", addr: "大阪市中央区西心斎橋1-16-8-3F" },
  { name: "WindForest", kind: "管楽器専門店", addr: "大阪市中央区南船場3-10-26 吉川ビル8F（公式サイトに移転の告知あり）" },
  { name: "LowBrassCenter", kind: "トロンボーン・ユーフォニアム・テューバ専門店", addr: "大阪市北区梅田1-2-2-100 大阪駅前第2ビル1F" },
  { name: "DZONE", kind: "DJ・デジタル専門店", addr: "（受付フォームに所在地の記載なし）" },
  { name: "Smalls guitar shop", kind: "ギター専門店", addr: "東京都千代田区神田駿河台1-8-5 1F" },
  { name: "COCO GUITAR SHOP", kind: "ギター専門店", addr: "東京都渋谷区代官山13-4 B1F" },
];

// ピアノ買取センター「標準買取価格一覧」からの抜粋（年は「〜」付きの製造年の目安）
const PIANO_ROWS: { model: string; year: string; price: string }[] = [
  { model: "ヤマハ U1H", year: "昭和47年〜", price: "〜無料" },
  { model: "ヤマハ U1A", year: "昭和57年〜", price: "3万円程度" },
  { model: "ヤマハ U3H", year: "昭和47年〜", price: "3万円程度" },
  { model: "ヤマハ U3A", year: "昭和57年〜", price: "10万円程度" },
  { model: "ヤマハ U30A", year: "平成1年〜", price: "17万円程度" },
  { model: "ヤマハ YU3", year: "平成9年〜", price: "27万円程度" },
  { model: "ヤマハ YUS3", year: "平成18年〜", price: "52万円程度" },
  { model: "ヤマハ b113", year: "平成30年〜", price: "9万円程度" },
  { model: "ヤマハ G3E（グランド）", year: "平成2年〜", price: "20万円程度" },
  { model: "ヤマハ C3（グランド）", year: "昭和54年〜", price: "22万円程度" },
  { model: "ヤマハ C3（グランド）", year: "平成19年〜", price: "69万円程度" },
  { model: "カワイ K-8W", year: "平成18年〜", price: "19万円程度" },
  { model: "カワイ RX-2（グランド）", year: "平成20年〜", price: "42万円程度" },
  { model: "カワイ SK-3（グランド）", year: "平成24年〜", price: "60万円程度" },
];
const PIANO_TOTAL = 305;
const PIANO_FREE = 13;
const PIANO_GE50 = 30;
const PIANO_SHOWA = 102;
const PIANO_SHOWA_LE3 = 35;

const AREA =
  "関東：東京都・埼玉県・神奈川県横浜市・川崎市・千葉県北西部／東海：愛知県・岐阜県・三重県／近畿：大阪府・兵庫県・京都府・滋賀県・奈良県・和歌山県／中国・四国（離島を除く）：鳥取県・島根県・岡山県・広島県・山口県・徳島県・香川県・愛媛県・高知県／九州（離島を除く）：福岡県・佐賀県";

const FAQ = [
  {
    q: "三木楽器ではバイオリンやチェロも買い取ってもらえますか？",
    a: "楽器買取のページでは、バイオリン・チェロなどの弦楽器は買取り対象外と明記されています。委託販売も、管弦楽器・デジタル機器・ピアノなど一部扱わない楽器があるため、事前に問い合わせるよう案内されています。",
  },
  {
    q: "三木楽器のピアノ買取はどの地域で利用できますか？",
    a: `${ASOF}時点の公式サイトでは、関東（東京都・埼玉県・横浜市・川崎市・千葉県北西部）、東海（愛知県・岐阜県・三重県）、近畿2府4県、中国・四国9県（離島を除く）、福岡県・佐賀県（離島を除く）が買取対象地域です。`,
  },
  {
    q: "ピアノの見積もり額が引き取り当日に下がることはありますか？",
    a: "公式のFAQでは、申し込み時の情報（メーカー・品番・製造番号・ペダルの本数・状態・搬出方法）に誤りがない限り、ネズミの害などの特殊な例を除いて見積もり額が下がることはないと説明されています。減額に納得できない場合は、キャンセル料・出張費はかからないとしています。",
  },
  {
    q: "ピアノの搬出の下見に費用はかかりますか？",
    a: "三木楽器に引き取りを依頼した場合、搬出の下見費用は三木楽器の負担です。依頼するか決めていない段階でも、3,300円で搬出の下見を受け付けています（島しょ部でフェリー代などが必要な場合は別途）。",
  },
  {
    q: "下取りと買取はどちらが有利ですか？",
    a: "公式サイトでは、楽器を買い替える場合は買取より有利な下取りを勧めています。下取り額は新しく購入する楽器の販売価格から差し引かれ、下取り額が購入額を上回る場合は差額が現金で支払われます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "三木楽器の買取", href: "/articles/miki-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/miki-gakki-kaitori/" },
  title: "三木楽器の買取とは？楽器・ピアノ・防音室の窓口と条件、ピアノの標準買取価格を公式情報で整理【2026年11月】",
  description:
    "三木楽器の買取について、楽器（店舗持ち込み・宅配・下取り・委託販売）、ピアノ買取センター、防音室の3つの窓口の条件と支払い方法、受付店舗10店、ピアノの買取対象地域と標準買取価格一覧の内容を公式サイトで確認して整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "三木楽器の買取とは？3つの窓口とピアノの標準買取価格【2026年11月】",
    description: "公式サイトの内容を整理。楽器・ピアノ・防音室の窓口、受付店舗、ピアノの対象地域と標準買取価格。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "三木楽器の買取とは？楽器・ピアノ・防音室の窓口と条件、ピアノの標準買取価格を公式情報で整理",
        datePublished: "2026-11-17",
        dateModified: "2026-11-17",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/miki-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "三木楽器の買取", item: "https://gakkikaitori-biyori.com/articles/miki-gakki-kaitori/" },
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
          三木楽器の買取とは？楽器・ピアノ・防音室の窓口と条件、ピアノの標準買取価格を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            三木楽器 公式サイトの「中古楽器買取」
          </a>
          と、案内先の楽器買取・ピアノ買取センター・防音室買取の各ページを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            三木楽器（三木楽器株式会社・1825年創業、大阪・関西を中心に展開）の買取は、<strong>楽器・ピアノ・防音室で窓口が分かれています</strong>。
            ギターや管楽器などは大阪・東京の専門店10店が受付、ピアノは「ピアノ買取センター」、防音室は「MIKI MUSIC DESIGN+」です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ピアノは<strong>型番・製造年ごとの標準買取価格を公開</strong>しており、一覧の{PIANO_TOTAL}行のうち{PIANO_FREE}行は「〜無料」でした。
            バイオリン・チェロなどの弦楽器は買取の対象外です。
          </p>
        </div>

        <h2 id="windows" className="text-xl font-bold mt-12 mb-4">3つの窓口の違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">窓口</th>
                <th className="text-left px-4 py-3 font-medium">対象</th>
                <th className="text-left px-4 py-3 font-medium">申し込み方</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
              </tr>
            </thead>
            <tbody>
              {WINDOWS.map((w) => (
                <tr key={w.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{w.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{w.target}</td>
                  <td className="px-4 py-3 leading-relaxed">{w.how}</td>
                  <td className="px-4 py-3 leading-relaxed">{w.pay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GAKKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器買取り・下取り・委託販売</a>・
          <a href={PIANO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ピアノ買取センター</a>・
          <a href={ROOM} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">防音室の中古買取</a>
          （{ASOF}取得）。
        </p>

        <h2 id="gakki" className="text-xl font-bold mt-12 mb-4">楽器の買取・下取り・委託販売</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器は受付店舗への持ち込みか、宅配便での送付です。事前に査定フォームか電話で依頼すると概算の査定額が案内されます（概算が不要なら直接持ち込みも可）。
          公式サイトでは、とくにギター・ドラムのビンテージ品を歓迎すると記載されています。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>持ち込み：身分証明書・印鑑（認印）、未成年は記入済みの売渡承諾書。成立するとその場で現金（金額により後日振込）</li>
          <li>宅配：事前に店舗へ連絡し、宅配買取申込書・身分証明書のコピーと同梱して店舗へ送る。申込書を自分で印刷する場合は住民票の写し（原本・3か月以内）も必要。成立後に振込</li>
          <li>下取り：購入する楽器の販売価格から差し引く。下取り額が上回れば差額を現金で受け取れる</li>
          <li>委託販売：販売価格は店舗と相談して決め、販売完了後に振込。委託手数料は取り扱い店舗に確認</li>
        </ul>
        <h3 className="text-lg font-bold mt-8 mb-3">受付店舗（10店）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">専門分野</th>
                <th className="text-left px-4 py-3 font-medium">所在地</th>
              </tr>
            </thead>
            <tbody>
              {SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.kind}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{s.addr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          受付店舗は大阪8店・東京2店で、いずれも楽器の種類ごとの専門店です。売りたい楽器を扱う店舗に送る・持ち込む形になります。
          大阪で他の買取店も比べたい場合は<Link href="/articles/osaka-gakki-kaitori/" className="text-accent underline">大阪の楽器買取</Link>、
          梅田周辺は<Link href="/articles/umeda-gakki-kaitori/" className="text-accent underline">梅田の楽器買取</Link>で整理しています。
        </p>

        <h2 id="piano" className="text-xl font-bold mt-12 mb-4">ピアノ買取センターの条件と標準買取価格</h2>
        <p className="text-sm leading-relaxed mb-4">ピアノの買取対象地域は次のとおりです。</p>
        <div className="bg-white border border-warm-200 p-4 mb-4">
          <p className="text-sm leading-relaxed">{AREA}</p>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          見積もりには、ピアノの種類・メーカー・機種・製造番号・ペダルの数のすべてが必要です。査定見積もりは無料で、引き取りを依頼した後や引き取り当日でもキャンセルでき、費用は請求しないと案内されています。
          消音装置は修理用部品の保有期間の関係で原則として評価の対象外ですが、製造から10年以内のピアノはプラスになる場合が多いとしています。
        </p>
        <h3 className="text-lg font-bold mt-8 mb-3">標準買取価格一覧からの抜粋</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">機種</th>
                <th className="text-left px-4 py-3 font-medium">製造年の目安</th>
                <th className="text-left px-4 py-3 font-medium">標準買取価格</th>
              </tr>
            </thead>
            <tbody>
              {PIANO_ROWS.map((r) => (
                <tr key={r.model + r.year} className="border-t border-warm-200">
                  <td className="px-4 py-3">{r.model}</td>
                  <td className="px-4 py-3">{r.year}</td>
                  <td className="px-4 py-3">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          一覧全体（{PIANO_TOTAL}行）を数えると、「〜無料」が{PIANO_FREE}行（ヤマハ U1H・U2M・MC シリーズの一部・XO-2）、50万円程度以上が{PIANO_GE50}行で、50万円以上はグランドピアノと YUS シリーズなどのアップライト上位機種でした。
          製造年が昭和の{PIANO_SHOWA}行のうち{PIANO_SHOWA_LE3}行は3万円程度以下です。同じ型番でも製造年で金額が変わるため、
          <Link href="/articles/yamaha-piano-seizou-bangou/" className="text-accent underline">ヤマハピアノの製造番号</Link>を先に確認しておくと見積もりがスムーズです。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={PIANO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">三木楽器ピアノ買取センター</a>（{ASOF}取得）。
          公式サイトは「買取価格はピアノの状態や市場動向により変動します。参考までに目安相場として価格を表記しております」としています。件数は当サイトが一覧の行を数えたものです。
        </p>

        <h2 id="room" className="text-xl font-bold mt-12 mb-4">防音室（アビテックス）の買取</h2>
        <p className="text-sm leading-relaxed mb-4">
          防音室は、ヤマハのユニット防音室アビテックス（アビテックスミニ・セフィーネ・ウッディ・マイルームなどの歴代モデル）と調音パネルが対象です。
          アビテックスのフリータイプ、屋外設置のサイレントハウス、ヤマハ以外の防音製品（カワイのナサール、だんぼっちなど）は扱っていません。
          買取対象地区は原則として近畿圏内で、査定額がつかない場合の解体・処分は有料です。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ピアノと防音室を同時に手放す場合は、同時の買取・運搬の相談ができると案内されています。
          ピアノのみの売り先を比べる場合は<Link href="/articles/piano-kaitori/" className="text-accent underline">ピアノ買取</Link>のページも参考になります。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">他社と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          三木楽器はピアノの標準買取価格を型番・製造年ごとに公開しているため、見積もり前に目安を確認できます。一方で、楽器の受付店舗は大阪と東京の専門店に限られます。
          全国の店舗で受け付ける<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器</Link>、
          関東中心の<Link href="/articles/kurosawa-gakki-kaitori/" className="text-accent underline">クロサワ楽器</Link>、
          出張でその場払いの<Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>と比べて選ぶとよいでしょう。
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
          currentSlug="miki-gakki-kaitori"
          relatedSlugs={["shimamura-gakki-kaitori", "yamaha-piano-seizou-bangou", "kurosawa-gakki-kaitori", "ikebe-gakki-kaitori", "osaka-gakki-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

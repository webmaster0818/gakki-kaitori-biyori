import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-14）「イケベ楽器 買取」。
// ⚠️ 本文の事実はすべてイケベ楽器店の公式サイト（2026-11-14 取得）から。
//    買取方法: https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx
//    買取価格一覧: https://www.ikebe-gakki.com/wants/category/sax/ ・ /wants/category/trumpet/
//    口コミ・評価は載せない。価格は公式に掲示された「通常買取価格」を、掲示日つきでそのまま写す。

const ASOF = "2026年11月14日";
const SRC = "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx";
const PRICE_SAX = "https://www.ikebe-gakki.com/wants/category/sax/";
const PRICE_TP = "https://www.ikebe-gakki.com/wants/category/trumpet/";

const METHODS: { name: string; pay: string; note: string }[] = [
  {
    name: "店頭買取",
    pay: "納得すればその場で支払い（査定金額や店舗の状況により振込）",
    note: "鍵盤・デジタル機材・レコーディング機材・DJ機材は原則預かり。ジャンルや混雑で1〜2週間かかる場合あり",
  },
  {
    name: "宅配買取",
    pay: "本人名義の口座へ振込（振込手数料は同社負担）",
    note: "写真・情報で事前に概算査定。梱包キット無料・全国送料無料・キャンセル時の返送料も無料",
  },
  {
    name: "出張買取",
    pay: "預かり後に査定し、振込",
    note: "訪問時の査定はなし（預かって専門スタッフが査定）。キャンセル時は配送で返送",
  },
  {
    name: "預かり代行販売（委託販売）",
    pay: "売却後およそ1週間で振込",
    note: "代行販売手数料20%（税抜売却価格の80%を受け取り）。委託期間は最長3か月",
  },
];

const SHOPS: { name: string; addr: string }[] = [
  { name: "イケシブリユース", addr: "東京都渋谷区桜丘町24-2 第3富士商事ビル5〜6F" },
  { name: "イケベリユースAKIBA", addr: "東京都千代田区神田佐久間河岸55 ASビル" },
  { name: "イケベリユースIKEBUKURO", addr: "東京都豊島区東池袋1-36-1 1F" },
  { name: "イケベリユースOSAKA", addr: "大阪府大阪市中央区西心斎橋1-9-17 田万ビル 1F" },
];

// 公式「買取価格一覧」に掲示された通常買取価格（新品に近い状態・付属品欠品なしの目安）。2026-11-14 に確認
const PRICES: { model: string; price: number; posted: string; src: string }[] = [
  { model: "Selmer Paris アルトサックス Reference AGL/ABS", price: 340000, posted: "2026-07-27 更新", src: PRICE_SAX },
  { model: "YAMAHA テナーサックス YTS-875(II)/875EX(II)", price: 320000, posted: "2026-07-27 更新", src: PRICE_SAX },
  { model: "YANAGISAWA アルトサックス A-WO10", price: 220000, posted: "2026-07-27 更新", src: PRICE_SAX },
  { model: "YAMAHA アルトサックス YAS-62(第4世代)", price: 160000, posted: "2025-10-23 更新", src: PRICE_SAX },
  { model: "YAMAHA Bb管 トランペット YTR-8335 2013-(#526506〜)", price: 100000, posted: "2025-12-08 更新", src: PRICE_TP },
  { model: "YAMAHA Bb管 トランペット YTR-4335GII 2011-", price: 65000, posted: "2026-04-08 更新", src: PRICE_TP },
];

const FAQ = [
  {
    q: "イケベ楽器ではどんな方法で楽器を売れますか？",
    a: "公式サイトでは、店頭買取・宅配買取・出張買取の3つと、預かり代行販売（委託販売）が案内されています。どの買取方法でも査定額に差はなく、査定料や送料はかからないと記載されています。",
  },
  {
    q: "イケベ楽器の買取価格は事前に分かりますか？",
    a: `公式サイトに楽器ごとの「通常買取価格」の一覧があり、例えばサックスは128件、トランペットは43件が掲載されています（${ASOF}確認）。掲載金額は新品に近い状態で付属品の欠品がない場合の目安で、年式・キズ・故障・付属品などで変わると記載されています。`,
  },
  {
    q: "出張買取はどの地域が対象ですか？",
    a: "公式サイトでは、関東は東京都（23区と多摩の一部の市）・横浜市・川崎市・埼玉県南東部・千葉県北西部、関西は大阪府の北部・東部を中心とした市町と兵庫県尼崎市・伊丹市が挙げられています。エリア外でも品物の内容や数量により対応できる場合があるとされています。",
  },
  {
    q: "高校生でも買取を利用できますか？",
    a: "公式サイトでは、18歳未満の方・高校生の方の利用は受けておらず、親権者・保護者から申し込むよう案内されています。",
  },
  {
    q: "買取できない楽器はありますか？",
    a: "クレジット利用中の楽器、PSEマークまたは旧法表示のない並行輸入品・古い電子楽器のほか、大型のアンプ・スピーカーキャビネット・電子ピアノなど一部の商品は買取できない場合があると記載されています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "イケベ楽器の買取", href: "/articles/ikebe-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/ikebe-gakki-kaitori/" },
  title: "イケベ楽器の買取（イケベリユース）とは？3つの買取方法・委託手数料・掲示買取価格を公式情報で整理【2026年11月】",
  description:
    "イケベ楽器店の楽器買取「イケベリユース」の店頭・宅配・出張の違い、預かり代行販売の手数料20%、出張エリア、公式に掲示された通常買取価格の例を、公式サイトの内容だけで整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "イケベ楽器の買取（イケベリユース）とは？買取方法・委託手数料・掲示買取価格【2026年11月】",
    description: "公式サイトの内容を整理。店頭・宅配・出張・委託販売の違いと、掲示された通常買取価格の例。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "イケベ楽器の買取（イケベリユース）とは？3つの買取方法・委託手数料・掲示買取価格を公式情報で整理",
        datePublished: "2026-11-14",
        dateModified: "2026-11-14",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/ikebe-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "イケベ楽器の買取", item: "https://gakkikaitori-biyori.com/articles/ikebe-gakki-kaitori/" },
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
          イケベ楽器の買取（イケベリユース）とは？3つの買取方法・委託手数料・掲示買取価格を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={SRC} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            イケベ楽器店 公式サイトの「買取方法」ページ
          </a>
          と買取価格一覧を確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            イケベ楽器店（株式会社池部楽器店）の買取サービスは「イケベリユース」です。
            <strong>店頭・宅配・出張の3方式</strong>があり、公式サイトでは<strong>どの方式でも査定額に差はなく、査定料・送料はかからない</strong>と案内されています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            楽器ごとの<strong>通常買取価格を公式サイトで公開</strong>している点が特徴です。
            売るより高く手放したい場合は、手数料20%の<strong>預かり代行販売（委託販売）</strong>も選べます。
          </p>
        </div>

        <h2 id="methods" className="text-xl font-bold mt-12 mb-4">買取方法ごとの違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
                <th className="text-left px-4 py-3 font-medium">公式の案内</th>
              </tr>
            </thead>
            <tbody>
              {METHODS.map((m) => (
                <tr key={m.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{m.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.pay}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SRC} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            イケベリユース「買取方法」
          </a>
          （{ASOF}取得）。古物商許可は東京都公安委員会 第301039603336号・大阪府公安委員会 第621112101107号（同サイトの表記）。
        </p>

        <h2 id="prices" className="text-xl font-bold mt-12 mb-4">公式に掲示されている通常買取価格の例</h2>
        <p className="text-sm leading-relaxed mb-4">
          イケベリユースの買取価格一覧から、管楽器の例を抜き出しました。掲載金額は
          <strong>新品に近い状態で、付属品の欠品がない場合の目安</strong>と明記されています。実際の査定額は年式・キズ・故障・付属品で変わります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">モデル</th>
                <th className="text-right px-4 py-3 font-medium">通常買取価格</th>
                <th className="text-left px-4 py-3 font-medium">掲示日</th>
              </tr>
            </thead>
            <tbody>
              {PRICES.map((p) => (
                <tr key={p.model} className="border-t border-warm-200">
                  <td className="px-4 py-3 leading-relaxed">{p.model}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">¥{p.price.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{p.posted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={PRICE_SAX} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            イケベリユース 買取価格一覧（サックス）
          </a>
          ・
          <a href={PRICE_TP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            同（トランペット）
          </a>
          （{ASOF}確認）。一覧には「掲載金額から随時行われているキャンペーン特典が適用されます」とも記載されています。
          同じモデルの中古の落札相場は<Link href="/articles/kangakki-kaitori/" className="text-accent underline">管楽器の買取ガイド</Link>で当サイトの集計と並べています。
        </p>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">買取の総合受付店（イケベリユース4店舗）</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の種類やジャンルを問わず買取を受け付ける総合窓口として、公式サイトに次の4店舗が掲載されています。
          このほか、ギター・ベース・サックス・トランペットなど<strong>ジャンル別のイケベ楽器各店でも買取・下取りの相談ができる</strong>とされています。
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
        <p className="text-sm leading-relaxed mb-10">
          来店前に査定申し込みフォームから申し込むと、概算の査定金額を事前に確認でき、本人確認書類のアップロードで来店時の提示が不要になると案内されています。
          アップロードしていない場合は、運転免許証・マイナンバーカード・パスポート・在留カードのいずれか1点が必要です。
        </p>

        <h2 id="area" className="text-xl font-bold mt-12 mb-4">出張買取の対応エリア</h2>
        <div className="space-y-3 mb-4">
          <div className="bg-white border border-warm-200 p-4">
            <p className="text-xs font-medium text-warm-gray mb-2">関東</p>
            <p className="text-sm leading-relaxed">
              東京都（23区、西東京市・武蔵野市・三鷹市・調布市・狛江市・清瀬市・東久留米市・東村山市・小平市・小金井市・府中市・稲城市・国分寺市・国立市）／
              神奈川県（横浜市・川崎市）／埼玉県（さいたま市・川口市・戸田市・草加市など南東部）／千葉県（千葉市・船橋市・松戸市・柏市など北西部）
            </p>
          </div>
          <div className="bg-white border border-warm-200 p-4">
            <p className="text-xs font-medium text-warm-gray mb-2">関西</p>
            <p className="text-sm leading-relaxed">
              大阪府（大阪市・豊中市・吹田市・枚方市・東大阪市・堺市など北部・東部を中心とする市町）／兵庫県（尼崎市・伊丹市）
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          エリア外でも品物の内容や数量により訪問できる場合があり、逆にエリア内でも宅配買取を案内される場合があると記載されています。
          出張買取では<strong>訪問時に査定額は分からず</strong>、預かったあとで金額が案内されます。その場で金額を知りたい場合は店頭買取が向いています。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">他社と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          掲示された通常買取価格は、状態が良い個体の上限に近い目安です。使用感のある楽器は、ここから減額されることを前提に比べてください。
          同じ楽器店系でも、<Link href="/articles/yamano-gakki-kaitori/" className="text-accent underline">山野楽器</Link>は店頭のみ・ギター系に限るなど条件が大きく違います。
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
          currentSlug="ikebe-gakki-kaitori"
          relatedSlugs={["yamano-gakki-kaitori", "kangakki-kaitori", "gakki-kaitori-osusume", "saxophone-kaitori", "trumpet-kaitori", "shibuya-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

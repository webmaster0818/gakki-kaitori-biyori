import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-16）「島村楽器 買取 評判」。
// ⚠️ 口コミ・評価は載せない（第三者の投稿を転載しない方針）。title/h1 に「評判」を入れない（trust-audit C5）。
//    本文の事実はすべて島村楽器の公式サイト（2026-11-16 取得・HTMLコメントと script は除外）から。
//   楽器買取のご案内: https://www.shimamura.co.jp/used/
//   店舗買取 /used/flow/shop/ ・出張買取 /used/flow/visit/ ・宅配買取 /used/flow/delivery/ ・委託販売 /used/flow/consignment/
//   古物営業法に基づく表記: https://www.shimamura.co.jp/used/permit.html
//   店舗一覧: https://www.shimamura.co.jp/shop/（各店舗の「買取受付」表示を当サイトが数えた）

const ASOF = "2026年11月16日";
const USED = "https://www.shimamura.co.jp/used/";
const F_SHOP = "https://www.shimamura.co.jp/used/flow/shop/";
const F_VISIT = "https://www.shimamura.co.jp/used/flow/visit/";
const F_DELI = "https://www.shimamura.co.jp/used/flow/delivery/";
const F_CONS = "https://www.shimamura.co.jp/used/flow/consignment/";
const PERMIT = "https://www.shimamura.co.jp/used/permit.html";
const SHOPS = "https://www.shimamura.co.jp/shop/";

const METHODS: { name: string; cond: string; pay: string; note: string }[] = [
  {
    name: "店舗買取",
    cond: "ミュージックサロン（音楽教室）など一部を除く店舗で受付。クラシック専門店は扱う楽器に限る",
    pay: "後日、銀行振込",
    note: "持ち込むと通常買取価格より5%アップ。通常使用に支障がある楽器（音が出ない・修理が必要など）は基本的に買取不可",
  },
  {
    name: "出張買取",
    cond: "LINE/Web査定額が複数申込なら各20,000円以上、単品申込なら30,000円以上（単品はギター・76鍵以上のシンセなど大型）",
    pay: "現物確認後1週間を目安に振込",
    note: "引き取りに来るのは指定業者で、島村楽器のスタッフは来ない。本人確認書類の現住所でのみ実施",
  },
  {
    name: "宅配買取",
    cond: "LINE/Web査定額が単品5,000円以上。梱包キットに収まらない楽器・ポータブルキーボードは対象外",
    pay: "現物確認後1週間を目安に振込",
    note: "梱包キット・送料・現物査定後のキャンセル返品はすべて無料",
  },
  {
    name: "委託販売",
    cond: "対象店舗26店のみ。ギター・ベース・ウクレレ・アンプで、販売価格10万円（税別）以上",
    pay: "販売後に精算",
    note: "手数料は税別販売価格50万円未満20%・50万円以上15%。預かり3か月。期間内のキャンセルは事務手数料3,000円（税別）",
  },
];

const NOT_ACCEPTED = [
  "PSE取得のないデジタル機器",
  "ケーブル・スタンド類などの周辺アクセサリー",
  "和楽器（琴・三味線・大正琴など）",
  "鍵盤打楽器（マリンバ・シロフォン・グロッケン・ヴィブラフォンなど）",
  "オルガン",
];

const VISIT_AREA =
  "北海道（札幌市・北広島市・江別市・石狩市・恵庭市・千歳市・小樽市）／宮城県／東京都・千葉県・埼玉県・神奈川県・茨城県・群馬県／愛知県／大阪府・兵庫県／広島県（広島市）／福岡県（福岡市）";

const FAQ = [
  {
    q: "島村楽器の買取代金は現金でもらえますか？",
    a: "いいえ。公式サイトでは、店舗買取・宅配買取・出張買取のいずれも銀行振込で支払い、現金での支払いは行っていないと案内されています。振込手数料は島村楽器が負担します。",
  },
  {
    q: "島村楽器で買い取ってもらえない楽器はありますか？",
    a: "公式サイトの「買取取り扱いのない楽器」には、PSE取得のないデジタル機器、ケーブル・スタンド類などの周辺アクセサリー、和楽器（琴・三味線・大正琴など）、鍵盤打楽器（マリンバなど）、オルガンが挙げられています。アコースティックドラムセットは一部店舗の店舗買取のみ対応です。",
  },
  {
    q: "出張買取はどの地域で利用できますか？",
    a: `${ASOF}時点の公式サイトでは、北海道の一部の市、宮城県、東京都・千葉県・埼玉県・神奈川県・茨城県・群馬県、愛知県、大阪府・兵庫県、広島市、福岡市が対象です。ピアノ・防音室は対象地域が別に定められています。`,
  },
  {
    q: "店舗買取で査定額が上がる条件はありますか？",
    a: "公式サイトでは、店舗への持ち込みで5%アップ、買い替え時の下取で10%アップ（購入商品代金の10%が上限）、島村楽器で購入した商品は5%アップ（保証書・レシートなどの提示が必要）と案内されています。グランドピアノは下取の10%アップの対象外です。",
  },
  {
    q: "18歳未満でも売れますか？",
    a: "店頭では保護者同伴で手続きでき、身分証明書と申込書の記入は保護者が行います。Web受付では18歳未満の申し込みは利用できないと記載されています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "島村楽器の買取", href: "/articles/shimamura-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/shimamura-gakki-kaitori/" },
  title: "島村楽器の買取とは？店舗・出張・宅配・委託の条件と買い取らない楽器を公式情報で整理【2026年11月】",
  description:
    "島村楽器の楽器買取について、店舗・出張・宅配・委託販売の利用条件、支払いが振込のみであること、買取の対象外となる楽器、出張の対象地域、買取を受け付ける店舗数を公式サイトの内容で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "島村楽器の買取とは？4つの方法の条件と買い取らない楽器【2026年11月】",
    description: "公式サイトの内容を整理。店舗・出張・宅配・委託の条件、支払い方法、対象外の楽器、出張エリア。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "島村楽器の買取とは？店舗・出張・宅配・委託の条件と買い取らない楽器を公式情報で整理",
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/shimamura-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "島村楽器の買取", item: "https://gakkikaitori-biyori.com/articles/shimamura-gakki-kaitori/" },
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
          島村楽器の買取とは？店舗・出張・宅配・委託の条件と買い取らない楽器を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            島村楽器 公式サイトの「楽器買取のご案内」
          </a>
          と各買取方法のページ、店舗一覧を確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器（島村楽器株式会社）の楽器買取は、<strong>店舗・出張・宅配の3方式と委託販売</strong>があります。
            どの方式でも<strong>支払いは銀行振込のみ</strong>で、現金での支払いは行っていません。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            出張と宅配は、先にLINEまたはWebで査定を受け、<strong>査定額が一定以上の楽器だけ</strong>が対象です（出張は単品30,000円以上など）。
            和楽器・鍵盤打楽器・オルガンは買取の対象外と明記されています。
          </p>
        </div>

        <h2 id="methods" className="text-xl font-bold mt-12 mb-4">買取方法ごとの条件</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">利用条件</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
                <th className="text-left px-4 py-3 font-medium">公式の案内</th>
              </tr>
            </thead>
            <tbody>
              {METHODS.map((m) => (
                <tr key={m.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{m.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.cond}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.pay}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={F_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店舗買取</a>・
          <a href={F_VISIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>・
          <a href={F_DELI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">宅配買取</a>・
          <a href={F_CONS} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">委託販売</a>
          （{ASOF}取得）。委託販売は2026年5月11日に内容が変更されたと告知されています。
        </p>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">買取を受け付ける店舗の数（当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式の店舗一覧には、店舗ごとに「買取受付」「中古取扱」などのサービス表示があります。電話番号つきで掲載された184店を数えると、
          <strong>「買取受付」の表示がある店舗は166店</strong>、「中古取扱」の表示がある店舗は132店でした。
          地域別の「買取受付」の店舗数は、近畿24・東京22・東海20・九州沖縄20・千葉17・埼玉12・神奈川10などです。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          店舗買取の案内では、ミュージックサロン全店（音楽教室のため）、ピアノショールーム市川コルトンプラザ店・八千代店、ピアノセレクションセンターが受付の対象外とされています。
          クラシック楽器専門店（札幌クラシック店・シマムラストリングス秋葉原・錦糸町マルイクラシック店など9店）は、管楽器・弦楽器など扱う楽器に限って受け付けます。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHOPS} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 店舗一覧</a>（{ASOF}時点の表示を当サイトが数えたもの。一覧の総数表示は186店舗）・
          <a href={F_SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店舗買取</a>。
          埼玉県・群馬県の店舗名は
          <Link href="/articles/saitama-ken-gakki-kaitori/" className="text-accent underline">埼玉県の楽器買取</Link>・
          <Link href="/articles/gunma-gakki-kaitori/" className="text-accent underline">群馬県の楽器買取</Link>に掲載しています。
        </p>

        <h2 id="not-accepted" className="text-xl font-bold mt-12 mb-4">買取の対象外とされている楽器</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          {NOT_ACCEPTED.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          対象外の楽器を売る場合は、扱っている業者を探す必要があります。当サイトでは
          <Link href="/articles/wagakki-kaitori/" className="text-accent underline">和楽器</Link>・
          <Link href="/articles/taishogoto-kaitori/" className="text-accent underline">大正琴</Link>・
          <Link href="/articles/organ-kaitori/" className="text-accent underline">オルガン</Link>
          について、各社の公式サイトの記載を確認して整理しています。
        </p>

        <h2 id="area" className="text-xl font-bold mt-12 mb-4">出張買取の対象地域</h2>
        <div className="bg-white border border-warm-200 p-4 mb-4">
          <p className="text-sm leading-relaxed">{VISIT_AREA}</p>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          公式サイトには「順次拡大予定」とあります。電子ピアノ・アップライトピアノ・グランドピアノ・防音室は窓口と対象地域が別です。
          なお、76鍵盤以上のシンセサイザー、中型・大型のギターアンプ・ベースアンプ、PA機材は宅配ではなく出張買取の扱いです。
        </p>

        <h2 id="bonus" className="text-xl font-bold mt-12 mb-4">査定額が上がる条件</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>店舗に持ち込む（店舗買取）：通常買取価格より5%アップ</li>
          <li>買い替えで下取に出す：10%アップ（購入商品代金の10%が上限・グランドピアノは対象外）</li>
          <li>島村楽器で購入した楽器：5%アップ（保証書・レシートなどの提示が必要）</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          このほか、期間・楽器・ブランドを限った買取キャンペーンが随時行われています（{ASOF}時点ではアコースティックギター・ギター・ベース機材・エフェクターの「買取10%UP」が掲載）。
          島村楽器は買取価格検索で型番ごとの買取価格を公開しており、当サイトでは
          <Link href="/articles/martin-kaitori/" className="text-accent underline">Martin</Link>・
          <Link href="/articles/sonor-kaitori/" className="text-accent underline">Sonor スネア</Link>・
          <Link href="/articles/mixer-kaitori/" className="text-accent underline">DJミキサー</Link>
          などのページで掲示価格を確認日つきで引用しています。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">他社と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は店舗数が多く持ち込みやすい一方、支払いは振込のみで、出張・宅配には査定額の下限があります。
          その場で現金を受け取りたい場合は、店頭で現金払いの
          <Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフ</Link>や、出張でその場払いの
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>が候補になります。
          同じ楽器店系では、<Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">イケベ楽器</Link>も通常買取価格を公開しています。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          古物営業法に基づく表示：島村楽器株式会社・東京都公安委員会 第307779503948号（
          <a href={PERMIT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">公式の表記</a>、{ASOF}確認）。
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
          currentSlug="shimamura-gakki-kaitori"
          relatedSlugs={["hardoff-gakki-kaitori", "ikebe-gakki-kaitori", "yamano-gakki-kaitori", "gakki-no-kaitoriyasan", "qsic-kaitori", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

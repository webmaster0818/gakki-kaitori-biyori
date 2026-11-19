import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-15）「オルガン 買取」。
// ⚠️ 本文の事実はすべて各社・各自治体の公式ページ（2026-11-15 取得・HTMLコメント内の文言は除外）から。
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=organ
//   島村楽器 https://www.shimamura.co.jp/used/ ・ /used/gakki/electric-organ/
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/tentou/
//   ウリエル /instrument/・ティファナ /music/ はオルガンの記載なし（記載がないことのみ書く）
//   名古屋市・相模原市・文京区の粗大ごみ手数料
//   口コミ・評価・順位は載せない。

const ASOF = "2026年11月15日";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=organ";

const ROWS: { name: string; v: string; src: string }[] = [
  {
    name: "楽器の買取屋さん",
    v: "買取事例を公開（カテゴリ「オルガン」）。査定フォームの区分は「エレクトーン・オルガン・チェンバロ」。出張費・査定料・搬出費用は無料、無料出張見積は沖縄を除く46都道府県",
    src: KAITORIYA,
  },
  {
    name: "島村楽器",
    v: "「買取取り扱いのない楽器」に「オルガン」を掲載。エレクトーンは指定の型番（ELB-02・ELC-02・ELS-02/02C/02X・ELS-03G/03X/03XR/03XF）のみ出張買取",
    src: "https://www.shimamura.co.jp/used/",
  },
  {
    name: "イシバシ楽器",
    v: "店頭買取の「お取り扱いできない物」に「アコースティックピアノ」「エレクトーン」「オルガン」を掲載",
    src: "https://www.ishibashi.co.jp/kaitori/tentou/",
  },
  {
    name: "ウリエル",
    v: "楽器買取ページの主な買取対象（ギター・ベース／弦楽器／管楽器／和楽器／デジタル楽器）にオルガンの記載なし",
    src: "https://www.uriel-cuore.co.jp/instrument/",
  },
  {
    name: "ティファナ",
    v: "楽器買取ページの買取品目にオルガンの記載なし（エレクトーンはヤマハの説明の中でのみ言及）",
    src: "https://www.tifana.net/music/",
  },
];

// 楽器の買取屋さん「オルガンの買取事例」（金額の掲載がある8件・2026-11-15確認）
const CASES: { date: string; item: string; price: number; pref: string }[] = [
  { date: "2019/6/22", item: "カワイ楽器 オルガン", price: 270000, pref: "神奈川県藤沢市" },
  { date: "2018/12/5", item: "ハモンド オルガン", price: 135000, pref: "東京都" },
  { date: "2018/4/17", item: "ハモンド オルガン", price: 100000, pref: "愛知県" },
  { date: "2017/11/17", item: "ローランド オルガン", price: 125000, pref: "東京都足立区" },
  { date: "2017/11/12", item: "ハモンド オルガン", price: 108000, pref: "鳥取県" },
  { date: "2017/8/30", item: "ヤマハ オルガン", price: 150000, pref: "神奈川県川崎市" },
  { date: "2017/7/23", item: "ハモンド オルガン", price: 27000, pref: "大阪府" },
  { date: "2017/6/25", item: "ハモンド オルガン", price: 53000, pref: "鹿児島県" },
];

const SODAI: { city: string; fee: string; note: string; src: string; asof: string }[] = [
  {
    city: "名古屋市",
    fee: "オルガン 1,500円／電子オルガン 2,500円",
    note: "ピアノは従来から排出禁止",
    src: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html",
    asof: "更新日 2026年9月30日",
  },
  {
    city: "相模原市",
    fee: "電子オルガン以外のもの 1,600円／電子オルガン 2,400円",
    note: "電子オルガンは重量制限あり",
    src: "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/katei/1008324.html",
    asof: "最終更新日 令和7年12月22日",
  },
  {
    city: "東京都文京区",
    fee: "オルガン 2,300円",
    note: "エレクトーン・電子ピアノ・電子オルガンを含む",
    src: "https://www.city.bunkyo.lg.jp/documents/959/sodaigomiitiran0806.pdf",
    asof: "令和8年6月版",
  },
];

const FAQ = [
  {
    q: "オルガンはどこで買い取ってもらえますか？",
    a: `${ASOF}に各社の公式サイトを確認したところ、オルガンの買取事例を公開しているのは楽器の買取屋さんでした。島村楽器は「買取取り扱いのない楽器」に、イシバシ楽器は店頭買取の「お取り扱いできない物」にオルガンを挙げています。ウリエル・ティファナの楽器買取ページにはオルガンの記載がありません。`,
  },
  {
    q: "オルガンはいくらで売れますか？",
    a: "楽器の買取屋さんが公開しているオルガンの買取事例8件は、2万7,000円〜27万円でした（2017〜2019年）。ハモンドオルガンの事例が5件と多く、金額は2万7,000円〜13万5,000円でした。足踏み式のリードオルガンの事例は掲載されていません。",
  },
  {
    q: "エレクトーンとオルガンは同じ扱いですか？",
    a: "業者によって異なります。島村楽器はオルガンを買取対象外とする一方、エレクトーンは指定の型番（ELB-02・ELC-02・ELS-02系・ELS-03系）に限って出張買取を行っています。エレクトーンの売り方はエレクトーン買取の記事をご覧ください。",
  },
  {
    q: "売れなかったオルガンはどう処分しますか？",
    a: "多くの自治体で粗大ごみとして出せます。例えば名古屋市はオルガン1,500円・電子オルガン2,500円、相模原市は電子オルガン以外1,600円・電子オルガン2,400円（重量制限あり）、文京区はオルガン2,300円です（各自治体の公式ページ・2026年11月15日確認）。手数料と出し方はお住まいの自治体でご確認ください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "オルガンの買取", href: "/articles/organ-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/organ-kaitori/" },
  title: "オルガンの買取はどこができる？楽器店5社の対応・公開されている買取事例・処分費用【2026年11月】",
  description:
    "オルガンを買い取る業者と、買い取らない楽器店を公式情報で比較しました。島村楽器・イシバシ楽器は対象外と明記しています。公開されている買取事例8件（2.7万〜27万円）と、売れない場合の粗大ごみ手数料も掲載しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "オルガンの買取はどこができる？5社の対応と買取事例【2026年11月】",
    description: "オルガンの買取対応（公式記載）、公開されている買取事例、粗大ごみ手数料。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "オルガンの買取はどこができる？楽器店5社の対応・公開されている買取事例・処分費用",
        datePublished: "2026-11-15",
        dateModified: "2026-11-15",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/organ-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "オルガンの買取", item: "https://gakkikaitori-biyori.com/articles/organ-kaitori/" },
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
          オルガンの買取はどこができる？楽器店5社の対応・公開されている買取事例・処分費用
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社・各自治体の公式ページを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            オルガンは、楽器店チェーンでは買い取らないことが多い楽器です。<strong>島村楽器・イシバシ楽器はオルガンを買取対象外と明記</strong>しており、
            ウリエル・ティファナの楽器買取ページにもオルガンの記載はありません。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            確認した5社のうち、オルガンの買取事例を公開しているのは<strong>楽器の買取屋さん</strong>で、事例8件の金額は
            <strong>2万7,000円〜27万円</strong>（ハモンド・カワイ・ローランド・ヤマハ）でした。売れない場合は粗大ごみとして1,500〜2,500円程度で処分できる自治体があります。
          </p>
        </div>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">楽器店・買取業者5社のオルガンの扱い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={r.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {r.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed">{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：各社の公式ページ（業者名のリンク先・{ASOF}取得）。島村楽器のエレクトーンの対象型番は
          <a href="https://www.shimamura.co.jp/used/gakki/electric-organ/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            エレクトーン出張買取のページ
          </a>
          によります。「記載なし」は買取しないという意味ではありません。申込み前に各社へ確認してください。
        </p>

        <h2 id="cases" className="text-xl font-bold mt-12 mb-4">公開されているオルガンの買取事例（楽器の買取屋さん）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">掲載日</th>
                <th className="text-left px-3 py-3 font-medium">品目</th>
                <th className="text-right px-3 py-3 font-medium">買取金額</th>
                <th className="text-left px-3 py-3 font-medium">地域</th>
              </tr>
            </thead>
            <tbody>
              {CASES.map((c) => (
                <tr key={c.date + c.item} className="border-t border-warm-200">
                  <td className="px-3 py-3 whitespace-nowrap">{c.date}</td>
                  <td className="px-3 py-3">{c.item}</td>
                  <td className="px-3 py-3 text-right whitespace-nowrap">{c.price.toLocaleString()}円</td>
                  <td className="px-3 py-3 whitespace-nowrap">{c.pref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="list-disc pl-6 text-xs text-warm-gray leading-relaxed space-y-1 mb-10">
          <li>
            出典：
            <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
              楽器の買取屋さん「オルガン」カテゴリ
            </a>
            （{ASOF}取得）。このほか金額の掲載がない事例が1件（2012年・ローランド）あります。
          </li>
          <li>8件すべてが2017〜2019年の事例で、現在の買取金額を示すものではありません。型番は事例一覧に掲載されていません。</li>
          <li>ハモンドオルガン5件の金額は2万7,000円〜13万5,000円で、同じメーカーでも約5倍の差があります。足踏み式のリードオルガンの事例は掲載されていません。</li>
        </ul>

        <h2 id="shobun" className="text-xl font-bold mt-12 mb-4">売れなかった場合の処分費用（粗大ごみ）</h2>
        <p className="text-sm leading-relaxed mb-4">
          買取を断られた場合は、自治体の粗大ごみとして出す方法があります。オルガンの手数料を明記している自治体の例です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-3 py-3 font-medium">自治体</th>
                <th className="text-left px-3 py-3 font-medium">手数料</th>
                <th className="text-left px-3 py-3 font-medium">備考</th>
                <th className="text-left px-3 py-3 font-medium">ページの日付</th>
              </tr>
            </thead>
            <tbody>
              {SODAI.map((s) => (
                <tr key={s.city} className="border-t border-warm-200 align-top">
                  <td className="px-3 py-3 font-medium whitespace-nowrap">
                    <a href={s.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {s.city}
                    </a>
                  </td>
                  <td className="px-3 py-3 leading-relaxed">{s.fee}</td>
                  <td className="px-3 py-3 leading-relaxed">{s.note}</td>
                  <td className="px-3 py-3 whitespace-nowrap">{s.asof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          自治体によって品目の区分（オルガンと電子オルガンを分けるか）と手数料が異なります。お住まいの自治体の公式ページでご確認ください。
          エレクトーン（電子オルガン）の処分は<Link href="/articles/electone-shobun/" className="text-accent underline">エレクトーンの処分方法と費用</Link>にまとめています。
        </p>

        <h2 id="prepare" className="text-xl font-bold mt-12 mb-4">見積もりを依頼する前に確認すること</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>メーカーと型番</strong>：本体の銘板や背面のラベルで確認します。ハモンド・カワイ・ローランド・ヤマハなどのメーカー名だけでも伝えてください。</li>
          <li><strong>種類</strong>：電気・電子式のオルガン、足踏み式のリードオルガン、エレクトーンのどれかで、相談先が変わります。</li>
          <li><strong>搬出経路</strong>：大型の鍵盤楽器のため、設置階・階段の有無を伝えると出張の可否と費用を確認しやすくなります。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-8">
          エレクトーンの売り方は<Link href="/articles/electone-kaitori/" className="text-accent underline">エレクトーン買取の記事</Link>、
          ピアノは<Link href="/articles/piano-kaitori/" className="text-accent underline">ピアノ買取の記事</Link>をご覧ください。
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
          currentSlug="organ-kaitori"
          relatedSlugs={["piano-kaitori", "electone-kaitori", "electone-shobun", "denshi-piano-kaitori", "gakki-kaitori-osusume", "hammond-organ-kaitori"]}
        />
      </article>
    </>
  );
}

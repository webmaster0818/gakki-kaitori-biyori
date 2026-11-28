import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-29 深夜02時の回）「電子ピアノ 買取 東京」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：東京都に出張（または宅配）で電子ピアノを買い取る業者を公式で2社以上確認できた場合だけ作る
//   → 島村楽器（電子ピアノ出張買取の対象地域に東京都・離島は対象外）・楽器の買取屋さん（東京都全域が出張買取の対象・取扱いに電子ピアノ）・高く売れるドットコム（出張買取の対応エリアに東京）の3社を確認（2026-11-29）。高く売れるドットコムの公開実績から東京都の電子ピアノ6件を抽出。
// 楽器全般の店舗一覧は /articles/tokyo-gakki-kaitori/ にあるので書き直さない（電子ピアノの出張買取・搬出・処分費に絞る）。
// ⚠️ 電話番号は転載しない（サイトの方針）。

const ASOF = "2026年11月29日";

const SHOPS: { name: string; area: string; age: string; cost: string; pay: string; src: string }[] = [
  {
    name: "島村楽器（電子ピアノ出張買取）",
    area: "電子ピアノ出張買取の対象地域に東京都（離島地域は対象外）",
    age: "製造から8年以上は買取不可（本体ラベルの製造年・年単位）",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で買取金額から差し引き",
    pay: "当社指定の引き上げ業者が自宅から引き上げ（島村楽器のスタッフは伺わない）→現物確認後1週間を目安に口座振込",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/"
  },
  {
    name: "楽器の買取屋さん",
    area: "「東京都全域が出張買取の対象」。都内の店舗は池袋店（豊島区）・板橋店（板橋区）・上野店（台東区）",
    age: "公式に年式の基準の記載なし",
    cost: "出張費・査定費・作業代・搬出費用はかからないと記載",
    pay: "訪問査定。金額に納得すればその場で現金",
    src: "https://gakkikaitori.co.jp/area/tokyo/"
  },
  {
    name: "高く売れるドットコム",
    area: "出張買取の対応エリアに関東（茨城・栃木・群馬・埼玉・千葉・東京・神奈川）。都内のリユースセンターは東京・新宿・池袋・西東京",
    age: "製造から5年ほどが目安（それ以上の人気シリーズも相談可と記載）",
    cost: "出張料・査定料は無料。運び出しもスタッフが行うと記載",
    pay: "事前査定→訪問。原則その場で現金（高額品は振込の場合あり）",
    src: "https://www.takakuureru.com/flow/visit/"
  },
];

const FAQ = [
  {
    q: "東京で電子ピアノを出張買取してくれる業者はありますか？",
    a: "2026年11月29日時点の公式サイトで、島村楽器（電子ピアノ出張買取の対象地域に東京都）、楽器の買取屋さん（東京都全域が出張買取の対象）、高く売れるドットコム（出張買取の対応エリアに東京）の3社を確認しました。島村楽器は離島地域を対象外としています。",
  },
  {
    q: "東京都で電子ピアノはいくらで売れていますか？",
    a: "高く売れるドットコムが公開している東京都の電子ピアノの買取実績6件（2026年10〜11月）は6,000〜30,000円で、中央値は16,000円でした。最も高いのは2021年製の Roland LX705-DR（30,000円）です。実績であり、同じ機種の価格を保証するものではありません。",
  },
  {
    q: "10年以上前の電子ピアノでも東京で売れますか？",
    a: "島村楽器は製造から8年以上の電子ピアノを買取できないとしています。高く売れるドットコムは製造から5年ほどを目安としつつ人気シリーズは相談を受け付けており、東京都で2013年製の KAWAI CA15R を12,000円（2026年11月17日）で買い取った実績を公開しています。",
  },
  {
    q: "東京23区で電子ピアノを粗大ごみに出すといくらですか？",
    a: "区ごとに異なります。中央区の品目・手数料一覧では「エレクトーン、電子ピアノ（オルガンを含む）重さ70kgまで」が1,800円です。お住まいの区の品目一覧でご確認ください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "東京の電子ピアノ買取", href: "/articles/denshi-piano-kaitori-tokyo/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-tokyo/" },
  title: "東京で電子ピアノを売るには？出張買取3社の条件と都内の買取実績6件・粗大ごみ手数料【2026年11月】",
  description:
    "東京都で電子ピアノを出張買取する島村楽器・楽器の買取屋さん・高く売れるドットコムの対象地域、年式の基準、搬出費、支払い方法を公式情報で比較。都内の買取実績6件（6,000〜30,000円・製造2013〜2022年）と、中央区の粗大ごみ手数料も掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "東京で電子ピアノを売るには？出張買取3社と都内の買取実績【2026年11月】",
    description: "東京都に出張する3社の条件と、都内の電子ピアノ買取実績6件。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "東京で電子ピアノを売るには？出張買取3社の条件と都内の買取実績",
        datePublished: "2026-11-29",
        dateModified: "2026-11-29",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-tokyo/",
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
          { "@type": "ListItem", position: 3, name: "東京の電子ピアノ買取", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-tokyo/" },
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
          東京で電子ピアノを売るには？出張買取3社の条件と都内の買取実績
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各社の公式サイトと東京都中央区の公式資料を{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            東京都で電子ピアノを<strong>出張買取</strong>する業者として、島村楽器・楽器の買取屋さん・高く売れるドットコムの3社を公式サイトで確認しました。島村楽器は離島地域を対象外としているため、伊豆諸島・小笠原諸島にお住まいの場合は他の2社に確認が必要です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            高く売れるドットコムが公開している<strong>都内の電子ピアノの買取実績は6件</strong>（2026年10〜11月）で、買取価格は6,000〜30,000円、中央値は16,000円でした。製造から13年の機種（2013年製）にも12,000円がついており、年式の基準が業者ごとに違うことが結果に表れています。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">東京都に出張する電子ピアノ買取3社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">東京都の対応</th>
                <th className="text-left px-4 py-3 font-medium">年式の基準</th>
                <th className="text-left px-4 py-3 font-medium">出張・搬出の費用</th>
                <th className="text-left px-4 py-3 font-medium">流れ・支払い</th>
              </tr>
            </thead>
            <tbody>
              {SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">
                    <a href={s.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {s.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed">{s.area}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.age}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.cost}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.pay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：業者名のリンク先ほか各社公式（
          <a href="https://www.shimamura.co.jp/used/gakki/digital-piano/" target="_blank" rel="noopener noreferrer" className="underline">島村楽器 電子ピアノ買取</a>・
          <a href="https://www.takakuureru.com/flow/visit/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 出張買取</a>
          ）。{ASOF}確認。対象地域・条件は変更されることがあります。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li>
            <strong>島村楽器</strong>は、出張買取を申込者本人の住所でのみ行い、実家など別の場所からの引き上げはできません。訪問日はエリアごとの日程から選ぶ方式で、時間の指定はできません。
          </li>
          <li>
            <strong>楽器の買取屋さん</strong>の東京都のページは、23区と多摩地域の市町村を挙げて「東京都全域が出張買取の対象」としています。よくある質問では、出張費・査定費に加えて作業代・搬出費用もかからないとしています。
          </li>
          <li>
            <strong>高く売れるドットコム</strong>は、事前査定で目安の金額を伝えてから訪問する流れです。訪問から支払いまでの平均は60分と案内しています。
          </li>
        </ul>

        <h2 id="record" className="text-xl font-bold mt-12 mb-4">東京都での電子ピアノの買取実績（6件）</h2>
        <p className="text-sm leading-relaxed mb-4">
          高く売れるドットコムが電子ピアノ・クラビノーバ・ローランドの各ページで公開している買取実績のうち、「東京都で買取」とある電子ピアノは次の6件でした（{ASOF}確認）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">機種</th>
                <th className="text-left px-4 py-3 font-medium">製造年</th>
                <th className="text-left px-4 py-3 font-medium">買取日</th>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-right px-4 py-3 font-medium">買取価格</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">Roland LX705-DR</td>
                <td className="px-4 py-3">2021年製</td>
                <td className="px-4 py-3">2026年11月12日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">30,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">KAWAI CA49R</td>
                <td className="px-4 py-3">2020年製</td>
                <td className="px-4 py-3">2026年11月4日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">25,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-545R</td>
                <td className="px-4 py-3">2017年製</td>
                <td className="px-4 py-3">2026年10月14日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">20,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">KAWAI CA15R</td>
                <td className="px-4 py-3">2013年製</td>
                <td className="px-4 py-3">2026年11月17日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">12,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">YAMAHA ARIUS YDP-163WA</td>
                <td className="px-4 py-3">2018年製</td>
                <td className="px-4 py-3">2026年11月6日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">6,500円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">CASIO PX-S1100</td>
                <td className="px-4 py-3">2022年製</td>
                <td className="px-4 py-3">2026年11月9日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">6,000円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：<a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 電子ピアノ買取</a>・<a href="https://www.takakuureru.com/gakki/denshi-piano/clavinova/" target="_blank" rel="noopener noreferrer" className="underline">クラビノーバ買取</a>・<a href="https://www.takakuureru.com/gakki/denshi-piano/roland/" target="_blank" rel="noopener noreferrer" className="underline">ローランド買取</a>の買取実績（{ASOF}確認）。製造年は商品名の表記どおりです。実績であり、同じ機種の買取価格を保証するものではありません。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          6件のうち、製造から8年以上にあたるのは CA15R（2013年製）と CLP-545R（2017年製）の2件です。いずれも島村楽器の基準では対象外の年式ですが、高く売れるドットコムでは12,000円・20,000円で買い取られていました。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          一方、2022年製の PX-S1100 は6,000円で、新しい年式でも価格が高いとは限りません。PX-S1100 は本体を持ち運べるスリムなタイプで、キャビネット型の上位機種（LX705・CA49）とは価格帯が異なります。年式と機種の両方を伝えて見積もりを取ることをおすすめします。年式ごとの各社の条件は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>にまとめています。
        </p>

        <h2 id="sodaigomi" className="text-xl font-bold mt-12 mb-4">売れなかった場合：東京23区の粗大ごみ（中央区の例）</h2>
        <p className="text-sm leading-relaxed mb-4">
          東京23区の粗大ごみは区ごとに受け付けており、手数料も区ごとに定められています。例として中央区の<a href="https://www.city.chuo.lg.jp/documents/5389/sodaihinmoku0701.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">粗大ごみ 品目・手数料一覧</a>では、「エレクトーン、電子ピアノ（オルガンを含む）重さ70kgまで」が<strong>1,800円</strong>です（{ASOF}確認）。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          重さの条件があるため、キャビネット型の上位機種は重量を取扱説明書で確かめてから申し込むと確実です。ほかの自治体との比較は<Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>、都内の楽器買取店（店頭）の一覧は<Link href="/articles/tokyo-gakki-kaitori/" className="text-accent underline">東京の楽器買取</Link>をご覧ください。
        </p>

        <p className="mb-12">
          <Link
            href="/articles/denshi-piano-kaitori/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            電子ピアノの機種別の買取相場を見る
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
          currentSlug="denshi-piano-kaitori-tokyo"
          relatedSlugs={["tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "shinjuku-gakki-kaitori", "ikebukuro-gakki-kaitori", "denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-sodaigomi", "denshi-piano-kaitori-kanagawa", "denshi-piano-kaitori-chiba", "shimamura-gakki-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

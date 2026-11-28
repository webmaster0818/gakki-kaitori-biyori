import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-28 20時の回）「電子ピアノ 買取 大阪」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：大阪府に出張（または宅配）で電子ピアノを買い取る業者を公式で2社以上確認できた場合だけ作る
//   → 島村楽器（電子ピアノ出張買取の対象地域に大阪府）・楽器の買取屋さん（大阪府全域が出張買取の対象・取扱いに電子ピアノ）・
//     高く売れるドットコム（出張買取の対応エリアに大阪・電子ピアノ買取ページあり）の3社を確認（2026-11-28）。
// 楽器全般の大阪の店舗一覧は /articles/osaka-gakki-kaitori/ にあるので書き直さない（電子ピアノの出張買取・搬出・処分費に絞る）。
// ⚠️ 電話番号は転載しない（サイトの方針）。

const ASOF = "2026年11月28日";

const SHOPS: { name: string; area: string; age: string; cost: string; pay: string; src: string }[] = [
  {
    name: "島村楽器（電子ピアノ出張買取）",
    area: "電子ピアノ出張買取の対象地域に大阪府（離島地域は対象外）",
    age: "製造から8年以上は買取不可（本体ラベルの製造年・年単位）",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で買取金額から差し引き",
    pay: "当社指定の引き上げ業者が自宅から引き上げ→現物確認後1週間を目安に口座振込",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/",
  },
  {
    name: "楽器の買取屋さん",
    area: "「大阪府全域が出張買取の対象」。府内の店舗は大阪心斎橋店（大阪市中央区南船場）・大阪門真店（門真市四宮）",
    age: "公式に年式の基準の記載なし",
    cost: "出張費・査定料・搬出費用は無料と記載",
    pay: "訪問査定（電話・フォーム・LINEで申し込み）",
    src: "https://www.gakkikaitori.co.jp/area/osaka/",
  },
  {
    name: "高く売れるドットコム",
    area: "出張買取の対応エリアに大阪。リユースセンターは大阪（江坂）・大阪（東住吉）",
    age: "製造から5年ほどが目安（それ以上の人気シリーズも相談可と記載）",
    cost: "出張・宅配・店頭の査定は無料と記載",
    pay: "事前査定→出張。出張・店頭はその場で現金（宅配は振込）",
    src: "https://www.takakuureru.com/flow/visit/",
  },
];

const FAQ = [
  {
    q: "大阪で電子ピアノを出張買取してくれる業者はありますか？",
    a: `${ASOF}時点の公式サイトで、島村楽器（電子ピアノ出張買取の対象地域に大阪府）、楽器の買取屋さん（大阪府全域が出張買取の対象）、高く売れるドットコム（出張買取の対応エリアに大阪）の3社を確認しました。年式の基準や支払い方法は各社で異なります。`,
  },
  {
    q: "古い電子ピアノでも大阪で売れますか？",
    a: "島村楽器は製造から8年以上の電子ピアノを買取できないとしています。高く売れるドットコムは製造から5年ほどを目安としつつ、それ以上も相談を受け付けており、公開実績には2018年製のヤマハ クラビノーバ CLP-635WA を大阪府で20,000円（2026年10月6日）で買い取った例があります。楽器の買取屋さんは公式に年式の基準を記載していません。",
  },
  {
    q: "大阪市で電子ピアノを粗大ごみに出すといくらですか？",
    a: "大阪市の粗大ごみ処理手数料一覧（2026年10月29日）では電子ピアノは1,000円です。ただし大阪市の品目別収集区分では、電子ピアノはまず小型家電リサイクル回収（宅配便による自宅回収・有料）を案内し、出せない場合に粗大ごみとしています。大阪市以外の府内の市町村は、それぞれの案内をご確認ください。",
  },
  {
    q: "マンションの上の階からでも引き取ってもらえますか？",
    a: "島村楽器は、階段作業などのオプション作業を有料とし、その代金を買取金額から差し引くとしています。楽器の買取屋さんは搬出費用を無料としています。エレベーターの有無や階段の幅は、申し込み時に伝えておくと確認が早く進みます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "大阪の電子ピアノ買取", href: "/articles/denshi-piano-kaitori-osaka/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-osaka/" },
  title: "大阪で電子ピアノを売るには？出張買取3社の対象地域・年式の基準・搬出費と大阪市の粗大ごみ手数料【2026年11月】",
  description:
    "大阪府で電子ピアノを出張買取する島村楽器・楽器の買取屋さん・高く売れるドットコムの対象地域、年式の基準（8年・5年目安）、搬出費、支払い方法を公式情報で比較。大阪府での買取実績と、大阪市の粗大ごみ手数料（1,000円）・小型家電回収の案内も掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "大阪で電子ピアノを売るには？出張買取3社の比較【2026年11月】",
    description: "大阪府に出張する3社の対象地域・年式の基準・搬出費。大阪市の粗大ごみ手数料も。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "大阪で電子ピアノを売るには？出張買取3社の対象地域・年式の基準・搬出費",
        datePublished: "2026-11-28",
        dateModified: "2026-11-28",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-osaka/",
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
          { "@type": "ListItem", position: 3, name: "大阪の電子ピアノ買取", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-osaka/" },
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
          大阪で電子ピアノを売るには？出張買取3社の対象地域・年式の基準・搬出費
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各社の公式サイトと大阪市の公式ページを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            大阪府で電子ピアノを<strong>出張買取</strong>する業者として、島村楽器・楽器の買取屋さん・高く売れるドットコムの3社を公式サイトで確認しました。
            電子ピアノは大型のため、3社とも自宅からの引き取り（出張）が中心です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            違いが大きいのは<strong>年式の基準</strong>です。島村楽器は製造から8年以上を買取不可、高く売れるドットコムは製造から5年ほどを目安（それ以上も相談可）とし、楽器の買取屋さんは公式に年式の基準を記載していません。
            売れなかった場合、大阪市の粗大ごみ手数料は<strong>1,000円</strong>です。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">大阪府に出張する電子ピアノ買取3社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">大阪府の対応</th>
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
          <a href="https://www.gakkikaitori.co.jp/kaitori/shop/" target="_blank" rel="noopener noreferrer" className="underline">楽器の買取屋さん 店舗一覧</a>・
          <a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 電子ピアノ買取</a>
          ）。{ASOF}確認。対象地域・条件は変更されることがあります。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li>
            <strong>島村楽器</strong>は、引き上げに島村楽器のスタッフではなく<strong>指定の引き上げ業者</strong>が伺う方式です。出張買取は申込者本人の住所でのみ実施し、訪問日はエリアごとの日程から第3希望まで指定できます（時間指定は不可）。買取できない品番には有料引取サービスがあります。
          </li>
          <li>
            <strong>楽器の買取屋さん</strong>の大阪府のページは、府内の市町村を挙げて「大阪府全域が出張買取の対象」としています。取扱いの楽器に電子ピアノを明記しています。
          </li>
          <li>
            <strong>高く売れるドットコム</strong>は、出張買取の対応エリアに大阪を含め、近畿では京都・兵庫・奈良・和歌山・滋賀・三重も挙げています。
          </li>
        </ul>

        <h2 id="record" className="text-xl font-bold mt-12 mb-4">大阪府での電子ピアノの買取実績</h2>
        <p className="text-sm leading-relaxed mb-4">
          高く売れるドットコムが電子ピアノ（クラビノーバ）のページで公開している買取実績に、大阪府の1件があります（{ASOF}確認）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">機種</th>
                <th className="text-left px-4 py-3 font-medium">製造年</th>
                <th className="text-left px-4 py-3 font-medium">買取日</th>
                <th className="text-right px-4 py-3 font-medium">買取価格</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-635WA</td>
                <td className="px-4 py-3">2018年製</td>
                <td className="px-4 py-3">2026年10月6日</td>
                <td className="px-4 py-3 text-right tabular-nums">20,000円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：
          <a href="https://www.takakuureru.com/gakki/denshi-piano/clavinova/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム クラビノーバ買取</a>
          の買取実績。実績であり、同じ機種の買取価格を保証するものではありません。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          この CLP-635WA は2026年時点で製造から8年にあたり、島村楽器の「製造から8年以上は買取不可」の基準では対象外になる年式です。
          製造年によっては依頼先で結果が変わるため、型番と製造年（本体背面や鍵盤の下のラベル）を控えてから申し込むと手戻りがありません。
          年式ごとの各社の条件は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>にまとめています。
        </p>

        <h2 id="sodaigomi" className="text-xl font-bold mt-12 mb-4">売れなかった場合：大阪市の粗大ごみと小型家電回収</h2>
        <p className="text-sm leading-relaxed mb-4">
          大阪市の
          <a href="https://www.city.osaka.lg.jp/kankyo/page/0000384507.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            粗大ごみ処理手数料一覧表
          </a>
          （2026年10月29日）では、電子ピアノの手数料は<strong>1,000円</strong>です。手数料券は200円・400円・700円・1,000円の4区分で、収集は事前の申し込みが必要です。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          ただし大阪市の
          <a href="https://www.city.osaka.lg.jp/kankyo/page/0000201907.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            品目別収集区分一覧表
          </a>
          では、電子ピアノはまず<strong>小型家電リサイクル回収（宅配便による自宅回収・有料）</strong>に出し、出せない場合に粗大ごみとする案内になっています。
          なお、アコースティックピアノは「収集しません」とされ、メーカー・販売店・専門業者等への相談を案内しています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          大阪市以外の府内の市町村は、品目や手数料が異なる場合があります。ほかの自治体との比較は
          <Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>をご覧ください。
          大阪府内の楽器買取店（店頭）の一覧は<Link href="/articles/osaka-gakki-kaitori/" className="text-accent underline">大阪の楽器買取</Link>に掲載しています。
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
          currentSlug="denshi-piano-kaitori-osaka"
          relatedSlugs={["osaka-gakki-kaitori", "umeda-gakki-kaitori", "namba-gakki-kaitori", "denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-sodaigomi", "miki-gakki-kaitori", "shimamura-gakki-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

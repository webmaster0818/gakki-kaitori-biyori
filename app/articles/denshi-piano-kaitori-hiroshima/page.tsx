import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-29 深夜02時の回）「電子ピアノ 買取 広島」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：広島県に出張（または宅配）で電子ピアノを買い取る業者を公式で2社以上確認できた場合だけ作る
//   → 島村楽器（電子ピアノ出張買取の対象地域に広島県・庄原市と神石郡を除く）・楽器の買取屋さん（広島県全域が出張買取の対象・取扱いに電子ピアノ・広島市の電子ピアノ買取事例あり）・高く売れるドットコム（出張買取の対応エリアに広島）の3社を確認（2026-11-29）。
// 楽器全般の店舗一覧は /articles/hiroshima-gakki-kaitori/ にあるので書き直さない（電子ピアノの出張買取・搬出・処分費に絞る）。
// ⚠️ 電話番号は転載しない（サイトの方針）。

const ASOF = "2026年11月29日";

const SHOPS: { name: string; area: string; age: string; cost: string; pay: string; src: string }[] = [
  {
    name: "島村楽器（電子ピアノ出張買取）",
    area: "広島県は庄原市、神石郡（神石高原町）を除く地域でのみ実施（離島地域も対象外）",
    age: "製造から8年以上は買取不可（本体ラベルの製造年・年単位）",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で買取金額から差し引き",
    pay: "当社指定の引き上げ業者が自宅から引き上げ（島村楽器のスタッフは伺わない）→現物確認後1週間を目安に口座振込",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/"
  },
  {
    name: "楽器の買取屋さん",
    area: "「広島県全域が出張買取の対象」。県内の店舗は広島店（広島市安佐北区あさひが丘・駐車場あり）",
    age: "公式に年式の基準の記載なし",
    cost: "出張費・査定費・作業代・搬出費用はかからないと記載",
    pay: "訪問査定。金額に納得すればその場で現金",
    src: "https://gakkikaitori.co.jp/area/hiroshima/"
  },
  {
    name: "高く売れるドットコム",
    area: "出張買取の対応エリアに中国（岡山・広島・鳥取・島根・山口）。県内のリユースセンターは広島",
    age: "製造から5年ほどが目安（それ以上の人気シリーズも相談可と記載）",
    cost: "出張料・査定料は無料。運び出しもスタッフが行うと記載",
    pay: "事前査定→訪問。原則その場で現金（高額品は振込の場合あり）",
    src: "https://www.takakuureru.com/flow/visit/"
  },
];

const FAQ = [
  {
    q: "広島県で電子ピアノを出張買取してくれる業者はありますか？",
    a: "2026年11月29日時点の公式サイトで、島村楽器（広島県の庄原市・神石郡を除く地域）、楽器の買取屋さん（広島県全域が出張買取の対象）、高く売れるドットコム（出張買取の対応エリアに広島）の3社を確認しました。",
  },
  {
    q: "庄原市や神石高原町でも電子ピアノの出張買取は頼めますか？",
    a: "島村楽器は広島県の電子ピアノ出張買取を「庄原市、神石郡（神石高原町）を除く地域でのみ実施」としています。楽器の買取屋さんは広島県全域を出張買取の対象とし、対象の市町村に庄原市を挙げています。申し込み前に各社へご確認ください。",
  },
  {
    q: "広島市で電子ピアノを大型ごみに出すといくらですか？",
    a: "広島市の大型ごみ収集運搬料金品目別一覧表（更新日 2025年2月19日）に「電子ピアノ」という品目名の行はなく、近い品目として「オルガン 電子オルガン」1,250円があります。電子ピアノの区分と手数料は、予約時に大型ごみ受付センターでご確認ください。",
  },
  {
    q: "古い電子ピアノでも広島で売れますか？",
    a: "島村楽器は製造から8年以上の電子ピアノを買取できないとしています。高く売れるドットコムは製造から5年ほどを目安としつつ人気シリーズは相談可とし、楽器の買取屋さんは公式に年式の基準を記載していません。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "広島の電子ピアノ買取", href: "/articles/denshi-piano-kaitori-hiroshima/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-hiroshima/" },
  title: "広島で電子ピアノを売るには？出張買取3社の対象地域（庄原市・神石高原町の扱い）と広島市の大型ごみ【2026年11月】",
  description:
    "広島県で電子ピアノを出張買取する島村楽器・楽器の買取屋さん・高く売れるドットコムの対象地域を公式情報で比較。島村楽器は庄原市・神石郡を対象外としています。広島市での買取事例（23,000円）と、広島市の大型ごみ手数料表での電子ピアノの扱いも掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "広島で電子ピアノを売るには？出張買取3社の対象地域【2026年11月】",
    description: "広島県に出張する3社の対象地域と、広島市の大型ごみの扱い。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "広島で電子ピアノを売るには？出張買取3社の対象地域と広島市の大型ごみ",
        datePublished: "2026-11-29",
        dateModified: "2026-11-29",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-hiroshima/",
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
          { "@type": "ListItem", position: 3, name: "広島の電子ピアノ買取", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-hiroshima/" },
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
          広島で電子ピアノを売るには？出張買取3社の対象地域と広島市の大型ごみ
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各社の公式サイトと広島市の公式ページを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            広島県で電子ピアノを<strong>出張買取</strong>する業者として、島村楽器・楽器の買取屋さん・高く売れるドットコムの3社を公式サイトで確認しました。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            注意したいのは対象地域です。島村楽器は広島県のうち<strong>庄原市と神石郡（神石高原町）を除く地域</strong>でのみ電子ピアノの出張買取を行っています。楽器の買取屋さんは「広島県全域が出張買取の対象」とし、県内には広島店（広島市安佐北区）があります。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">広島県に出張する電子ピアノ買取3社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">広島県の対応</th>
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
            <strong>島村楽器</strong>は、広島県の注記として「庄原市、神石郡（神石高原町）を除く地域でのみ実施」と記載しています。この2地域にお住まいの場合は、楽器の買取屋さんか高く売れるドットコムに出張の可否を確認してください。
          </li>
          <li>
            <strong>楽器の買取屋さん</strong>の広島県のページは、広島市・福山市・呉市・庄原市などを挙げて県全域を出張買取の対象としています。近隣店舗として広島店のほか、高松店（香川県）・福岡店（福岡県）を案内しています。
          </li>
          <li>
            <strong>高く売れるドットコム</strong>は、出張買取の対応エリアとして中国地方の5県を挙げ、それ以外のエリアも相談を受け付けるとしています。
          </li>
        </ul>

        <h2 id="record" className="text-xl font-bold mt-12 mb-4">広島県での電子ピアノの買取事例</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんの広島県のページに掲載されている買取事例のうち、電子ピアノは次の1件でした（{ASOF}確認）。
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
                <td className="px-4 py-3 font-medium">KORG 電子ピアノ（型番の記載なし）</td>
                <td className="px-4 py-3">記載なし</td>
                <td className="px-4 py-3">2026年7月24日</td>
                <td className="px-4 py-3">楽器の買取屋さん（広島市）</td>
                <td className="px-4 py-3 text-right tabular-nums">23,000円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：<a href="https://gakkikaitori.co.jp/area/hiroshima/" target="_blank" rel="noopener noreferrer" className="underline">楽器の買取屋さん 広島県</a>の「広島県の買取事例」（{ASOF}確認）。事例であり、同じ機種の買取価格を保証するものではありません。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          事例には型番や製造年の記載がないため、機種の比較には使えません。広島県では高く売れるドットコムの公開実績に該当する電子ピアノはありませんでした（電子ピアノ・クラビノーバ・ローランドの各ページ、{ASOF}確認）。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          機種別の相場の目安は<Link href="/articles/denshi-piano-kaitori/" className="text-accent underline">電子ピアノの買取相場</Link>、年式ごとの各社の条件は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>にまとめています。
        </p>

        <h2 id="sodaigomi" className="text-xl font-bold mt-12 mb-4">売れなかった場合：広島市の大型ごみ</h2>
        <p className="text-sm leading-relaxed mb-4">
          広島市では粗大ごみを「大型ごみ」と呼び、<a href="https://www.city.hiroshima.lg.jp/living/gomi-kankyo/1021277/1003072/1026095/1026097/1003174.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">大型ごみ収集運搬料金品目別一覧表</a>（更新日 2025年2月19日）で品目ごとの手数料を定めています。この一覧表の「娯楽用具、運動用具その他生活用具」には<strong>「オルガン 電子オルガン」1,250円</strong>・「オルガン その他のもの」750円の行がありますが、<strong>「電子ピアノ」という品目名の行はありません</strong>（{ASOF}確認）。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          電子ピアノがどの区分になるかは、予約の際に大型ごみ受付センターで確認してください。広島市は、納付券（シール）を購入する前に受付センターで予約するよう案内しています。県内の楽器買取店（店頭）は<Link href="/articles/hiroshima-gakki-kaitori/" className="text-accent underline">広島の楽器買取</Link>、ほかの自治体の手数料は<Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>をご覧ください。
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
          currentSlug="denshi-piano-kaitori-hiroshima"
          relatedSlugs={["hiroshima-gakki-kaitori", "guitar-kaitori-hiroshima", "kure-gakki-kaitori", "higashihiroshima-gakki-kaitori", "denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-sodaigomi", "denshi-piano-kaitori-osaka", "denshi-piano-kaitori-fukuoka", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

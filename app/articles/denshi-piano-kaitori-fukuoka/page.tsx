import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-28 20時の回）「電子ピアノ 買取 福岡」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：福岡県に出張（または宅配）で電子ピアノを買い取る業者を公式で2社以上確認できた場合だけ作る
//   → 島村楽器（電子ピアノ出張買取の対象地域に福岡県）・楽器の買取屋さん（福岡県全域が出張買取の対象・取扱いに電子ピアノ）・
//     高く売れるドットコム（出張買取の対応エリアに福岡）の3社を確認（2026-11-28）。
// 楽器全般の福岡の店舗一覧は /articles/fukuoka-gakki-kaitori/ にあるので書き直さない（電子ピアノの出張買取・搬出・処分費に絞る）。
// ⚠️ 事実の出典（2026-11-28 取得）: 上記3社の公式／楽器の買取屋さん 電子ピアノの買取事例一覧（福岡県 2025/10/08 ヤマハ 11,500円）／
//   高く売れるドットコム 電子ピアノ買取の実績（CASIO PX-S1100 2021年製 福岡県 2026/11/4 12,000円）／福岡市 粗大ごみ受付 品目一覧・持ち出しサービス
// ⚠️ 電話番号は転載しない（サイトの方針）。

const ASOF = "2026年11月28日";

const SHOPS: { name: string; area: string; age: string; cost: string; src: string }[] = [
  {
    name: "島村楽器（電子ピアノ出張買取）",
    area: "電子ピアノ出張買取の対象地域に福岡県（九州は福岡県・熊本県・佐賀県。離島地域は対象外）",
    age: "製造から8年以上は買取不可（本体ラベルの製造年・年単位）",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で買取金額から差し引き。支払いは現物確認後1週間を目安に口座振込",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/",
  },
  {
    name: "楽器の買取屋さん",
    area: "「福岡県全域が出張買取の対象」。県内の店舗は福岡店（柳川市三橋町）",
    age: "公式に年式の基準の記載なし",
    cost: "出張費・査定料・搬出費用は無料と記載",
    src: "https://www.gakkikaitori.co.jp/area/fukuoka/",
  },
  {
    name: "高く売れるドットコム",
    area: "出張買取の対応エリアに福岡（九州は福岡・佐賀・長崎・大分・熊本）。リユースセンター 福岡あり",
    age: "製造から5年ほどが目安（それ以上の人気シリーズも相談可と記載）",
    cost: "出張・宅配・店頭の査定は無料と記載。出張・店頭はその場で現金（宅配は振込）",
    src: "https://www.takakuureru.com/flow/visit/",
  },
];

const RECORDS: { shop: string; model: string; date: string; price: string; src: string }[] = [
  {
    shop: "高く売れるドットコム",
    model: "CASIO Privia PX-S1100（2021年製・ペダル・スタンド付き）",
    date: "2026年11月4日",
    price: "12,000円",
    src: "https://www.takakuureru.com/gakki/denshi-piano/",
  },
  {
    shop: "楽器の買取屋さん",
    model: "ヤマハ 電子ピアノ（型番の記載なし）",
    date: "2025年10月8日",
    price: "11,500円",
    src: "https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=electronic-piano",
  },
];

const FAQ = [
  {
    q: "福岡で電子ピアノを出張買取してくれる業者はありますか？",
    a: `${ASOF}時点の公式サイトで、島村楽器（電子ピアノ出張買取の対象地域に福岡県）、楽器の買取屋さん（福岡県全域が出張買取の対象）、高く売れるドットコム（出張買取の対応エリアに福岡）の3社を確認しました。年式の基準と支払い方法は各社で異なります。`,
  },
  {
    q: "福岡県の離島からでも依頼できますか？",
    a: "島村楽器は、離島地域を出張下取・出張買取ともに対象外としています。ほかの2社は離島の扱いを公式ページで明記していないため、申し込み時に住所を伝えて確認してください。",
  },
  {
    q: "福岡市で電子ピアノを粗大ごみに出すといくらですか？",
    a: "福岡市の粗大ごみ受付の品目一覧では「エレクトーン・電子ピアノ（イスは別料金）」が1,000円です。所定の場所まで運べない65歳以上の方などには、屋内から1個500円・玄関先から300円の持ち出しサービスがあります。福岡市以外の県内の市町村は、それぞれの案内をご確認ください。",
  },
  {
    q: "製造から何年までなら売れますか？",
    a: "島村楽器は製造から8年以上の電子ピアノを買取できないとし、高く売れるドットコムは製造から5年ほどを目安としています（それ以上も相談可）。楽器の買取屋さんは公式に年式の基準を記載していません。年式の古い電子ピアノの買取実績は、古い電子ピアノの買取のページにまとめています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "福岡の電子ピアノ買取", href: "/articles/denshi-piano-kaitori-fukuoka/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-fukuoka/" },
  title: "福岡で電子ピアノを売るには？出張買取3社の対象地域・年式の基準と福岡市の粗大ごみ手数料【2026年11月】",
  description:
    "福岡県で電子ピアノを出張買取する島村楽器・楽器の買取屋さん・高く売れるドットコムの対象地域、年式の基準（8年・5年目安）、搬出費、支払い方法を公式情報で比較。福岡県での買取実績2件と、福岡市の粗大ごみ手数料（1,000円）・持ち出しサービスも掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "福岡で電子ピアノを売るには？出張買取3社の比較【2026年11月】",
    description: "福岡県に出張する3社の対象地域・年式の基準・搬出費。福岡市の粗大ごみ手数料も。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "福岡で電子ピアノを売るには？出張買取3社の対象地域・年式の基準と福岡市の粗大ごみ手数料",
        datePublished: "2026-11-28",
        dateModified: "2026-11-28",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-fukuoka/",
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
          { "@type": "ListItem", position: 3, name: "福岡の電子ピアノ買取", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-fukuoka/" },
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
          福岡で電子ピアノを売るには？出張買取3社の対象地域・年式の基準と福岡市の粗大ごみ手数料
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各社の公式サイトと福岡市の公式ページを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            福岡県で電子ピアノを<strong>出張買取</strong>する業者として、島村楽器・楽器の買取屋さん・高く売れるドットコムの3社を公式サイトで確認しました。
            九州で島村楽器の電子ピアノ出張買取の対象になっているのは福岡県・熊本県・佐賀県の3県です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            年式の基準は、島村楽器が<strong>製造から8年以上は買取不可</strong>、高く売れるドットコムが<strong>製造から5年ほどが目安</strong>（それ以上も相談可）で、楽器の買取屋さんは公式に基準を記載していません。
            売れなかった場合、福岡市の粗大ごみ手数料は<strong>1,000円</strong>（イスは別料金）です。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">福岡県に出張する電子ピアノ買取3社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">福岡県の対応</th>
                <th className="text-left px-4 py-3 font-medium">年式の基準</th>
                <th className="text-left px-4 py-3 font-medium">費用・支払い</th>
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
        <p className="text-sm leading-relaxed mb-10">
          楽器の買取屋さんの福岡店は柳川市にあり、福岡市・北九州市の中心部からは離れています。電子ピアノは持ち込みより出張が現実的で、同社の福岡県のページは県内の市町村を挙げて
          「福岡県全域が出張買取の対象」としています。島村楽器は、島村楽器のスタッフではなく<strong>指定の引き上げ業者</strong>が自宅に伺う方式で、出張買取は申込者本人の住所でのみ実施するとしています。
        </p>

        <h2 id="records" className="text-xl font-bold mt-12 mb-4">福岡県での電子ピアノの買取実績</h2>
        <p className="text-sm leading-relaxed mb-4">各社が公開している電子ピアノの買取実績のうち、福岡県の分です（{ASOF}確認）。</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">機種</th>
                <th className="text-left px-4 py-3 font-medium">買取日</th>
                <th className="text-right px-4 py-3 font-medium">買取価格</th>
              </tr>
            </thead>
            <tbody>
              {RECORDS.map((r) => (
                <tr key={r.shop} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={r.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {r.shop}
                    </a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed">{r.model}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.date}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：業者名のリンク先の買取実績・買取事例。実績であり、同じ機種の買取価格を保証するものではありません。楽器の買取屋さんの電子ピアノの事例一覧から当サイトが取得できた33件のうち、福岡県は1件でした。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          機種別の相場は<Link href="/articles/denshi-piano-kaitori/" className="text-accent underline">電子ピアノ買取相場ガイド</Link>、
          製造から年数がたった電子ピアノの扱いは<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>をご覧ください。
        </p>

        <h2 id="sodaigomi" className="text-xl font-bold mt-12 mb-4">売れなかった場合：福岡市の粗大ごみと持ち出しサービス</h2>
        <p className="text-sm leading-relaxed mb-4">
          福岡市の
          <a href="https://sodaigomi-kankyo.city.fukuoka.lg.jp/list.cgi" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            粗大ごみ受付 品目一覧
          </a>
          では、「エレクトーン・電子ピアノ（イスは別料金）」の手数料が<strong>1,000円</strong>です。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          所定の場所まで運び出せない65歳以上の方や障がいのある方などは、
          <a href="https://sodaigomi-kankyo.city.fukuoka.lg.jp/take.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            持ち出しサービス
          </a>
          を利用でき、屋内からは1個500円、玄関先からは300円が粗大ごみ手数料とは別に必要です。人力（3人）で持ち出せない物や玄関口から出ない大きな物は対象外で、立会いが必要とされています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          福岡市以外の県内の市町村は、品目や手数料が異なる場合があります。ほかの自治体との比較は
          <Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>、
          福岡の楽器買取店（店頭）の一覧は<Link href="/articles/fukuoka-gakki-kaitori/" className="text-accent underline">福岡の楽器買取</Link>に掲載しています。
        </p>

        <p className="mb-12">
          <Link
            href="/articles/fukuoka-gakki-kaitori/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            福岡の楽器買取店を見る
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
          currentSlug="denshi-piano-kaitori-fukuoka"
          relatedSlugs={["fukuoka-gakki-kaitori", "kitakyushu-gakki-kaitori", "kurume-gakki-kaitori", "denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-sodaigomi", "shimamura-gakki-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-29 深夜02時の回）「電子ピアノ 買取 神奈川」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：神奈川県に出張（または宅配）で電子ピアノを買い取る業者を公式で2社以上確認できた場合だけ作る
//   → 島村楽器（電子ピアノ出張買取の対象地域に神奈川県）・楽器の買取屋さん（神奈川県全域が出張買取の対象・取扱いに電子ピアノ）・高く売れるドットコム（出張買取の対応エリアに神奈川）の3社を確認（2026-11-29）。
// 楽器全般の店舗一覧は /articles/yokohama-gakki-kaitori/ にあるので書き直さない（電子ピアノの出張買取・搬出・処分費に絞る）。
// ⚠️ 電話番号は転載しない（サイトの方針）。

const ASOF = "2026年11月29日";

const SHOPS: { name: string; area: string; age: string; cost: string; pay: string; src: string }[] = [
  {
    name: "島村楽器（電子ピアノ出張買取）",
    area: "電子ピアノ出張買取の対象地域に神奈川県（離島地域は対象外）",
    age: "製造から8年以上は買取不可（本体ラベルの製造年・年単位）",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で買取金額から差し引き",
    pay: "当社指定の引き上げ業者が自宅から引き上げ（島村楽器のスタッフは伺わない）→現物確認後1週間を目安に口座振込",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/"
  },
  {
    name: "楽器の買取屋さん",
    area: "「神奈川県全域が出張買取の対象」。県内の店舗は横浜店（横浜市中区万代町）・厚木店（厚木市愛甲東）",
    age: "公式に年式の基準の記載なし",
    cost: "出張費・査定費・作業代・搬出費用はかからないと記載",
    pay: "訪問査定。金額に納得すればその場で現金",
    src: "https://gakkikaitori.co.jp/area/kanagawa/"
  },
  {
    name: "高く売れるドットコム",
    area: "出張買取の対応エリアに関東（茨城・栃木・群馬・埼玉・千葉・東京・神奈川）。県内のリユースセンターは神奈川",
    age: "製造から5年ほどが目安（それ以上の人気シリーズも相談可と記載）",
    cost: "出張料・査定料は無料。運び出しもスタッフが行うと記載",
    pay: "事前査定→訪問。原則その場で現金（高額品は振込の場合あり）",
    src: "https://www.takakuureru.com/flow/visit/"
  },
];

const FAQ = [
  {
    q: "神奈川県で電子ピアノを出張買取してくれる業者はありますか？",
    a: "2026年11月29日時点の公式サイトで、島村楽器（電子ピアノ出張買取の対象地域に神奈川県）、楽器の買取屋さん（神奈川県全域が出張買取の対象）、高く売れるドットコム（出張買取の対応エリアに神奈川）の3社を確認しました。",
  },
  {
    q: "10年以上前のクラビノーバでも神奈川で売れますか？",
    a: "島村楽器は製造から8年以上の電子ピアノを買取できないとしています。高く売れるドットコムは製造から5年ほどを目安としつつ人気シリーズは相談を受け付けており、神奈川県で2015年製の CLP-545WA を23,000円（2026年10月10日）で買い取った実績を公開しています。",
  },
  {
    q: "2階から電子ピアノを降ろす費用はかかりますか？",
    a: "楽器の買取屋さんは作業代・搬出費用もかからないとしています。島村楽器は階段作業等のオプション作業を有料とし、代金を買取金額から差し引くとしています。高く売れるドットコムは運び出しもスタッフが行うと案内しています。",
  },
  {
    q: "横浜市で電子ピアノを粗大ごみに出すにはどうすればいいですか？",
    a: "横浜市は粗大ごみの処分に事前の申し込みと手数料が必要で、品目ごとの手数料は市の「粗大ごみ処理手数料（インターネット品目一覧）」で案内しています。申し込みは粗大ごみ受付センターで受け付けており、インターネット・LINE・チャットからは24時間申し込めます。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "神奈川の電子ピアノ買取", href: "/articles/denshi-piano-kaitori-kanagawa/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-kanagawa/" },
  title: "神奈川で電子ピアノを売るには？出張買取3社の対象地域・年式の基準と県内の買取実績【2026年11月】",
  description:
    "神奈川県で電子ピアノを出張買取する島村楽器・楽器の買取屋さん・高く売れるドットコムの対象地域、年式の基準、搬出費を公式情報で比較。神奈川県でのクラビノーバの買取実績2件と、横浜市の粗大ごみの申し込み方法も掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "神奈川で電子ピアノを売るには？出張買取3社の比較【2026年11月】",
    description: "神奈川県に出張する3社の対象地域・年式の基準と、県内の買取実績。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "神奈川で電子ピアノを売るには？出張買取3社の対象地域・年式の基準と買取実績",
        datePublished: "2026-11-29",
        dateModified: "2026-11-29",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-kanagawa/",
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
          { "@type": "ListItem", position: 3, name: "神奈川の電子ピアノ買取", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-kanagawa/" },
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
          神奈川で電子ピアノを売るには？出張買取3社の対象地域・年式の基準と買取実績
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各社の公式サイトと横浜市の公式ページを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            神奈川県で電子ピアノを<strong>出張買取</strong>する業者として、島村楽器・楽器の買取屋さん・高く売れるドットコムの3社を公式サイトで確認しました。楽器の買取屋さんは県内に横浜店（横浜市中区）と厚木店（厚木市）を置いています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            神奈川県での公開実績には、2015年製のヤマハ クラビノーバ CLP-545WA が<strong>23,000円</strong>で買い取られた例があります。製造から10年を超える機種で、島村楽器の「製造から8年以上は買取不可」の基準では対象外です。古い機種ほど、依頼先を変えて見積もりを取る意味があります。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">神奈川県に出張する電子ピアノ買取3社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">神奈川県の対応</th>
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
            <strong>楽器の買取屋さん</strong>の神奈川県のページは、横浜市・川崎市・相模原市から箱根町・真鶴町まで県内の市町村を挙げ、「神奈川県全域が出張買取の対象」としています。
          </li>
          <li>
            <strong>島村楽器</strong>の出張買取は、引き上げを指定の業者が行う方式です。階段作業などのオプション作業は有料で、その代金は買取金額から差し引かれます。2階以上からの搬出がある場合は、申し込み時に費用を確認してください。
          </li>
          <li>
            <strong>高く売れるドットコム</strong>は、出張買取を本人確認書類に記載の住所でのみ行うとしています。
          </li>
        </ul>

        <h2 id="record" className="text-xl font-bold mt-12 mb-4">神奈川県での電子ピアノの買取実績</h2>
        <p className="text-sm leading-relaxed mb-4">
          高く売れるドットコムがクラビノーバのページで公開している買取実績に、神奈川県の2件があります（{ASOF}確認）。
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
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-685B</td>
                <td className="px-4 py-3">記載なし</td>
                <td className="px-4 py-3">2026年8月19日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">50,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-545WA</td>
                <td className="px-4 py-3">2015年製</td>
                <td className="px-4 py-3">2026年10月10日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">23,000円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：<a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 電子ピアノ買取</a>・<a href="https://www.takakuureru.com/gakki/denshi-piano/clavinova/" target="_blank" rel="noopener noreferrer" className="underline">クラビノーバ買取</a>・<a href="https://www.takakuureru.com/gakki/denshi-piano/roland/" target="_blank" rel="noopener noreferrer" className="underline">ローランド買取</a>の買取実績（{ASOF}確認）。製造年は商品名の表記どおりです。実績であり、同じ機種の買取価格を保証するものではありません。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          CLP-685B はクラビノーバの上位機種で、商品名に製造年の記載はありません。CLP-545WA は2015年製で、2026年時点で製造から11年にあたります。同じ CLP-545WA は千葉県で2016年製が15,000円（2026年9月1日）という実績もあり、状態や付属品で金額は変わります。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          電子ピアノの部品の保有期間や修理の受付状況は<Link href="/articles/denshi-piano-jumyou/" className="text-accent underline">電子ピアノの寿命</Link>、年式ごとの各社の条件は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>にまとめています。
        </p>

        <h2 id="sodaigomi" className="text-xl font-bold mt-12 mb-4">売れなかった場合：粗大ごみの申し込み（横浜市の例）</h2>
        <p className="text-sm leading-relaxed mb-4">
          横浜市の<a href="https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/gomi/shushu/sodaigomi/dashikata/sodaigomi.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">粗大ごみの申込み</a>のページ（最終更新日 2026年10月30日）では、一番長い辺が30cm以上の金属製品、50cm以上の金属以外の製品を粗大ごみとし、処分には事前の申し込みと手数料が必要としています。品目ごとの手数料は「粗大ごみ処理手数料（インターネット品目一覧）」で案内されています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          川崎市・相模原市など県内のほかの市町村は、それぞれの品目一覧で手数料が異なります。手数料を公式で確認できた自治体の比較は<Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>、県内の楽器買取店（店頭）は<Link href="/articles/yokohama-gakki-kaitori/" className="text-accent underline">横浜の楽器買取</Link>・<Link href="/articles/kawasaki-gakki-kaitori/" className="text-accent underline">川崎の楽器買取</Link>をご覧ください。
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
          currentSlug="denshi-piano-kaitori-kanagawa"
          relatedSlugs={["yokohama-gakki-kaitori", "kawasaki-gakki-kaitori", "sagamihara-gakki-kaitori", "atsugi-gakki-kaitori", "denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-jumyou", "denshi-piano-sodaigomi", "denshi-piano-kaitori-tokyo", "yamaha-clavinova-kaitori", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

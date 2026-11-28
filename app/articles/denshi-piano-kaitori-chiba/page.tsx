import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-29 深夜02時の回）「電子ピアノ 買取 千葉」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：千葉県に出張（または宅配）で電子ピアノを買い取る業者を公式で2社以上確認できた場合だけ作る
//   → 島村楽器（電子ピアノ出張買取の対象地域に千葉県）・楽器の買取屋さん（千葉県全域が出張買取の対象・取扱いに電子ピアノ）・高く売れるドットコム（出張買取の対応エリアに千葉）の3社を確認（2026-11-29）。
// 楽器全般の店舗一覧は /articles/chiba-gakki-kaitori/ にあるので書き直さない（電子ピアノの出張買取・搬出・処分費に絞る）。
// ⚠️ 電話番号は転載しない（サイトの方針）。

const ASOF = "2026年11月29日";

const SHOPS: { name: string; area: string; age: string; cost: string; pay: string; src: string }[] = [
  {
    name: "島村楽器（電子ピアノ出張買取）",
    area: "電子ピアノ出張買取の対象地域に千葉県（離島地域は対象外）",
    age: "製造から8年以上は買取不可（本体ラベルの製造年・年単位）",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で買取金額から差し引き",
    pay: "当社指定の引き上げ業者が自宅から引き上げ（島村楽器のスタッフは伺わない）→現物確認後1週間を目安に口座振込",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/"
  },
  {
    name: "楽器の買取屋さん",
    area: "「千葉県全域が出張買取の対象」。県内の店舗は柏店（柏市）",
    age: "公式に年式の基準の記載なし",
    cost: "出張費・査定費・作業代・搬出費用はかからないと記載",
    pay: "訪問査定。金額に納得すればその場で現金",
    src: "https://gakkikaitori.co.jp/area/chiba/"
  },
  {
    name: "高く売れるドットコム",
    area: "出張買取の対応エリアに関東（茨城・栃木・群馬・埼玉・千葉・東京・神奈川）。県内のリユースセンターは千葉",
    age: "製造から5年ほどが目安（それ以上の人気シリーズも相談可と記載）",
    cost: "出張料・査定料は無料。運び出しもスタッフが行うと記載",
    pay: "事前査定→訪問。原則その場で現金（高額品は振込の場合あり）",
    src: "https://www.takakuureru.com/flow/visit/"
  },
];

const FAQ = [
  {
    q: "千葉県で電子ピアノを出張買取してくれる業者はありますか？",
    a: "2026年11月29日時点の公式サイトで、島村楽器（電子ピアノ出張買取の対象地域に千葉県）、楽器の買取屋さん（千葉県全域が出張買取の対象）、高く売れるドットコム（出張買取の対応エリアに千葉）の3社を確認しました。",
  },
  {
    q: "千葉県でクラビノーバはいくらで売れていますか？",
    a: "高く売れるドットコムが公開している千葉県の実績は、CLP-735WA（2021年製）45,000円、CLP-545WA（2016年製）15,000円、CLP-280PE（2007年製）5,000円の3件です（2026年8〜9月）。実績であり、同じ機種の価格を保証するものではありません。",
  },
  {
    q: "千葉市で電子ピアノを粗大ごみに出すといくらですか？",
    a: "千葉市の粗大ごみ処理手数料一覧（更新日 2026年1月15日）に「電子ピアノ」の行はなく、「電子オルガン（サイドフレームを外し、長さ1.5m以下…）」が1,560円です。電子ピアノの扱いは粗大ごみ受付センターでご確認ください。",
  },
  {
    q: "買取できなかった電子ピアノは引き取ってもらえますか？",
    a: "島村楽器は、買取できない品番を有料引取サービスで引き上げると案内しています（WEB/LINE査定フォームで選択できる品番に限る）。費用は申し込み時に確認してください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "千葉の電子ピアノ買取", href: "/articles/denshi-piano-kaitori-chiba/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-chiba/" },
  title: "千葉で電子ピアノを売るには？出張買取3社と県内のクラビノーバ買取実績3件・千葉市の粗大ごみ【2026年11月】",
  description:
    "千葉県で電子ピアノを出張買取する島村楽器・楽器の買取屋さん・高く売れるドットコムの対象地域、年式の基準、搬出費を公式情報で比較。千葉県でのクラビノーバ買取実績3件（2007〜2021年製・5,000〜45,000円）と、千葉市の粗大ごみ手数料一覧での扱いも掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "千葉で電子ピアノを売るには？出張買取3社と県内の買取実績【2026年11月】",
    description: "千葉県に出張する3社の条件と、県内のクラビノーバ買取実績3件。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "千葉で電子ピアノを売るには？出張買取3社と県内のクラビノーバ買取実績",
        datePublished: "2026-11-29",
        dateModified: "2026-11-29",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-chiba/",
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
          { "@type": "ListItem", position: 3, name: "千葉の電子ピアノ買取", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-kaitori-chiba/" },
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
          千葉で電子ピアノを売るには？出張買取3社と県内のクラビノーバ買取実績
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各社の公式サイトと千葉市の公式ページを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            千葉県で電子ピアノを<strong>出張買取</strong>する業者として、島村楽器・楽器の買取屋さん・高く売れるドットコムの3社を公式サイトで確認しました。楽器の買取屋さんは県内に柏店（柏市）を置いています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            千葉県での公開実績は<strong>クラビノーバ3件</strong>で、2021年製の CLP-735WA が45,000円、2016年製の CLP-545WA が15,000円、2007年製の CLP-280PE が5,000円でした。同じシリーズでも、年式で金額に大きな差が出ています。
          </p>
        </div>

        <h2 id="shops" className="text-xl font-bold mt-12 mb-4">千葉県に出張する電子ピアノ買取3社</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">千葉県の対応</th>
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
            <strong>楽器の買取屋さん</strong>の千葉県のページは、千葉市・船橋市・柏市から銚子市・館山市・南房総市まで県内の市町村を挙げ、「千葉県全域が出張買取の対象」としています。近隣店舗として柏店のほか、上野店・板橋店（東京都）を案内しています。
          </li>
          <li>
            <strong>島村楽器</strong>は、買取できない品番（製造8年以上など）について、有料引取サービスでの引き上げも受け付けています（WEB/LINE査定フォームで選択できる品番に限る）。
          </li>
          <li>
            <strong>高く売れるドットコム</strong>は、無料査定で目安の金額を確かめた後に出張日時を指定できます。キャンセルは出張買取の前に連絡するよう案内しています。
          </li>
        </ul>

        <h2 id="record" className="text-xl font-bold mt-12 mb-4">千葉県での電子ピアノの買取実績（クラビノーバ3件）</h2>
        <p className="text-sm leading-relaxed mb-4">
          高く売れるドットコムがクラビノーバのページで公開している買取実績のうち、「千葉県で買取」とあるものは次の3件でした（{ASOF}確認）。
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
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-735WA</td>
                <td className="px-4 py-3">2021年製</td>
                <td className="px-4 py-3">2026年8月25日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">45,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-545WA</td>
                <td className="px-4 py-3">2016年製</td>
                <td className="px-4 py-3">2026年9月1日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">15,000円</td>
              </tr>
              <tr className="border-t border-warm-200">
                <td className="px-4 py-3 font-medium">YAMAHA Clavinova CLP-280PE</td>
                <td className="px-4 py-3">2007年製</td>
                <td className="px-4 py-3">2026年8月19日</td>
                <td className="px-4 py-3">高く売れるドットコム</td>
                <td className="px-4 py-3 text-right tabular-nums">5,000円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：<a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 電子ピアノ買取</a>・<a href="https://www.takakuureru.com/gakki/denshi-piano/clavinova/" target="_blank" rel="noopener noreferrer" className="underline">クラビノーバ買取</a>・<a href="https://www.takakuureru.com/gakki/denshi-piano/roland/" target="_blank" rel="noopener noreferrer" className="underline">ローランド買取</a>の買取実績（{ASOF}確認）。製造年は商品名の表記どおりです。実績であり、同じ機種の買取価格を保証するものではありません。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          3件はいずれもヤマハのクラビノーバです。製造から5年の CLP-735WA（45,000円）に対し、10年の CLP-545WA は15,000円、19年の CLP-280PE は5,000円でした。製造から19年でも値段がついている点は、島村楽器の「製造から8年以上は買取不可」の基準と大きく異なります。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ただし、同じ CLP-545WA でも神奈川県では2015年製が23,000円（2026年10月10日）で、年式だけで金額が決まるわけではありません。クラビノーバの機種別の情報は<Link href="/articles/yamaha-clavinova-kaitori/" className="text-accent underline">ヤマハ クラビノーバの買取</Link>、年式ごとの各社の条件は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>をご覧ください。
        </p>

        <h2 id="sodaigomi" className="text-xl font-bold mt-12 mb-4">売れなかった場合：千葉市の粗大ごみ</h2>
        <p className="text-sm leading-relaxed mb-4">
          千葉市の<a href="https://www.city.chiba.jp/kankyo/junkan/shushugyomu/sodaigomitesuryo.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">粗大ごみ処理手数料一覧</a>（更新日 2026年1月15日）には、「電子ピアノ」という品目名の行はありません。近い品目として<strong>「電子オルガン（サイドフレームを外し、長さ1.5m以下または、1.5m以下に切断してあるもの）」1,560円</strong>の行があります（{ASOF}確認）。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          千葉市は、この一覧にない品目については粗大ごみ受付センターへ問い合わせるよう案内しています。電子ピアノの扱いは申し込み時にご確認ください。ほかの自治体の手数料は<Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>、県内の楽器買取店（店頭）は<Link href="/articles/chiba-gakki-kaitori/" className="text-accent underline">千葉の楽器買取</Link>をご覧ください。
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
          currentSlug="denshi-piano-kaitori-chiba"
          relatedSlugs={["chiba-gakki-kaitori", "guitar-kaitori-chiba", "ichikawa-gakki-kaitori", "funabashi-gakki-kaitori", "denshi-piano-kaitori", "yamaha-clavinova-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-sodaigomi", "denshi-piano-kaitori-tokyo", "gakki-no-kaitoriyasan"]}
        />
      </article>
    </>
  );
}

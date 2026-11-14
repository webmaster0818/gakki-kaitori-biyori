import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-14）「エレクトーン 処分」。売る側は /articles/electone-kaitori/ が受け皿。こちらは処分方法と費用。
// ⚠️ 事実の出典（2026-11-14 取得）:
//   粗大ごみ手数料＝各市の公式ページ（名古屋市・京都市・相模原市・広島市）。各ページの更新日・告示日を併記
//   買取の対象外＝山野楽器 中古買い取り（鍵盤楽器は対象外）／イケベリユース（古い電子楽器・電子ピアノ等は買取できない場合あり、PSE）
// エレクトーンの買取相場（金額）はこのページでは書かない（根拠となる一次データがない）。

const ASOF = "2026年11月14日";

const FEES: { city: string; item: string; fee: string; note: string; date: string; src: string }[] = [
  {
    city: "名古屋市",
    item: "電子オルガン",
    fee: "2,500円",
    note: "同じ表で電子ピアノ（脚付き）は2,000円。ピアノは排出禁止物",
    date: "ページ更新日 2026年9月30日",
    src: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html",
  },
  {
    city: "相模原市",
    item: "オルガン（電子オルガン）",
    fee: "2,400円",
    note: "「重量制限あり」と記載。電子オルガン以外のオルガンは1,600円",
    date: "最終更新日 令和7年12月22日",
    src: "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/katei/1008324.html",
  },
  {
    city: "京都市",
    item: "電子オルガン",
    fee: "2,000円",
    note: "オルガン（電子オルガンを除く）は1,600円",
    date: "京都市告示第24号（令和7年4月1日から適用）",
    src: "https://www2.city.kyoto.lg.jp/somu/bunsyo/kouhou/r0704/0401/0401_33.pdf",
  },
  {
    city: "広島市",
    item: "オルガン（電子オルガン）",
    fee: "1,250円",
    note: "オルガンのその他のものは750円",
    date: "ページ更新日 2025年2月19日",
    src: "https://www.city.hiroshima.lg.jp/living/gomi-kankyo/1021277/1003072/1026095/1026097/1003174.html",
  },
];

const OPTIONS: { way: string; cost: string; point: string }[] = [
  {
    way: "買取業者に売る",
    cost: "出張料・査定料が無料の業者がある",
    point: "動作する比較的新しい機種が対象。楽器店でも鍵盤楽器を買い取らない店がある",
  },
  {
    way: "自治体の粗大ごみに出す",
    cost: "1,250〜2,500円（下表の4市）",
    point: "収集の場所・運び出しの方法は自治体ごとに確認。重量制限がある市もある",
  },
  {
    way: "知人・教室などに譲る",
    cost: "運搬費は別途",
    point: "大型のため、運搬の手配を誰が行うかを先に決めておく",
  },
];

const FAQ = [
  {
    q: "エレクトーンは粗大ごみに出せますか？",
    a: `当サイトが確認した4市（名古屋市・相模原市・京都市・広島市）では、いずれも「電子オルガン」が粗大ごみの品目として手数料つきで掲載されていました（${ASOF}確認）。手数料は1,250〜2,500円です。名古屋市ではピアノは排出禁止物ですが、電子オルガンは品目として掲載されています。お住まいの自治体の品目一覧で確認してください。`,
  },
  {
    q: "エレクトーンは家電リサイクル法の対象ですか？",
    a: "家電リサイクル法の対象はエアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機で、電子オルガンは含まれていません（相模原市の手数料一覧でも家電リサイクル対象品として、この6品目が別枠で案内されています）。",
  },
  {
    q: "古いエレクトーンでも売れますか？",
    a: "業者の基準によります。山野楽器の中古買い取りはピアノ・電子ピアノを含む鍵盤楽器を対象外としており、イケベリユースも古い電子楽器やPSEマークのない機器は買取できない場合があるとしています。売れない場合に備えて、粗大ごみの手数料も確認しておくと判断しやすくなります。",
  },
  {
    q: "処分と買取のどちらを先に検討すべきですか？",
    a: "動作する場合は、先に無料査定で値段がつくかを確認するのが順番として合理的です。値段がつかなかった場合でも、出張に対応する業者なら引き取りの可否や費用を同時に確認できます。粗大ごみに出す場合は手数料がかかり、収集場所までの運び出しが必要になることもあります。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "エレクトーンの処分", href: "/articles/electone-shobun/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/electone-shobun/" },
  title: "エレクトーンの処分方法と費用｜粗大ごみ手数料を4市で比較・売れない場合の選択肢【2026年11月】",
  description:
    "エレクトーン（電子オルガン）は多くの自治体で粗大ごみとして出せます。名古屋市・相模原市・京都市・広島市の手数料（1,250〜2,500円）を公式ページで比較し、買取・譲渡との違いと、楽器店で買い取ってもらえない場合を整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "エレクトーンの処分方法と費用｜粗大ごみ手数料を4市で比較【2026年11月】",
    description: "電子オルガンの粗大ごみ手数料を4市の公式ページで比較。買取・譲渡との違い。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "エレクトーンの処分方法と費用｜粗大ごみ手数料を4市で比較・売れない場合の選択肢",
        datePublished: "2026-11-14",
        dateModified: "2026-11-14",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/electone-shobun/",
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
          { "@type": "ListItem", position: 3, name: "エレクトーンの処分", item: "https://gakkikaitori-biyori.com/articles/electone-shobun/" },
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
          エレクトーンの処分方法と費用｜粗大ごみ手数料を4市で比較・売れない場合の選択肢
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          粗大ごみの手数料は各市の公式ページ、買取の条件は各社の公式サイトを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            エレクトーン（電子オルガン）は、当サイトが確認した4市すべてで<strong>粗大ごみの品目</strong>として掲載されており、
            手数料は<strong>1,250〜2,500円</strong>でした。また、家電リサイクル法の対象品目（エアコン・テレビ・冷蔵庫・冷凍庫・洗濯機・衣類乾燥機）にも含まれません。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            動作するなら、<strong>先に無料査定で値段がつくかを確認</strong>し、つかなければ粗大ごみ、という順番が無駄のない進め方です。
            ただし楽器店の中には鍵盤楽器を買い取らない店もあるため、依頼先は選ぶ必要があります。
          </p>
        </div>

        <h2 id="options" className="text-xl font-bold mt-12 mb-4">エレクトーンを手放す3つの方法</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">費用</th>
                <th className="text-left px-4 py-3 font-medium">注意点</th>
              </tr>
            </thead>
            <tbody>
              {OPTIONS.map((o) => (
                <tr key={o.way} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{o.way}</td>
                  <td className="px-4 py-3 leading-relaxed">{o.cost}</td>
                  <td className="px-4 py-3 leading-relaxed">{o.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="fees" className="text-xl font-bold mt-12 mb-4">粗大ごみの手数料（4市の公式ページで比較）</h2>
        <p className="text-sm leading-relaxed mb-4">
          各市が公表している粗大ごみの品目・手数料から、電子オルガンの行を抜き出しました。同じ品目でも<strong>市によって約2倍の差</strong>があります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">市</th>
                <th className="text-left px-4 py-3 font-medium">品目名</th>
                <th className="text-right px-4 py-3 font-medium">手数料</th>
                <th className="text-left px-4 py-3 font-medium">同じ表の記載</th>
                <th className="text-left px-4 py-3 font-medium">出典の日付</th>
              </tr>
            </thead>
            <tbody>
              {FEES.map((f) => (
                <tr key={f.city} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={f.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {f.city}
                    </a>
                  </td>
                  <td className="px-4 py-3">{f.item}</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">{f.fee}</td>
                  <td className="px-4 py-3 leading-relaxed">{f.note}</td>
                  <td className="px-4 py-3 leading-relaxed">{f.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：市名のリンク先（各市の公式ページ・{ASOF}確認）。手数料は改定されることがあります。申し込み前にお住まいの自治体で最新の金額をご確認ください。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          名古屋市の一覧では、<strong>ピアノは「排出禁止になっている物」</strong>とされている一方、電子オルガンは手数料2,500円の品目として掲載されています。
          ピアノと同じ感覚で「粗大ごみに出せない」と考える必要はありません。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          相模原市は電子オルガンに「重量制限あり」と記載しています。大型の機種は対象にならない場合があるため、品目の条件を申し込み時に確認してください。
          収集の場所や運び出しの方法も自治体ごとに定められています。自宅の外まで出す必要がある場合、大型のエレクトーンは運び出しの人手を確保しておく必要があります。
        </p>

        <h2 id="sell" className="text-xl font-bold mt-12 mb-4">売る場合：楽器店でも鍵盤楽器を買い取らない店がある</h2>
        <p className="text-sm leading-relaxed mb-4">
          楽器店の買取だからといって、エレクトーンを受け付けているとは限りません。{ASOF}時点の公式サイトの記載は次のとおりです。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <a href="https://www.yamano-music.co.jp/service/used-purchasing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
              山野楽器
            </a>
            ：中古買い取りは「ピアノや電子ピアノを含む鍵盤楽器は買い取りできません」と明記（
            <Link href="/articles/yamano-gakki-kaitori/" className="text-accent underline">詳しく</Link>）
          </li>
          <li>
            <a href="https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
              イケベリユース
            </a>
            ：「PSEマークまたは旧法表示のない並行輸入品・古い電子楽器」や電子ピアノなど一部の商品は買取できない場合があると記載。鍵盤は動作確認のため原則預かり（
            <Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">詳しく</Link>）
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          エレクトーンは大型で運び出しにも手間がかかるため、<strong>出張に対応している業者</strong>に、機種名と型番、動作の状態を伝えて査定を依頼するのが確実です。
          機種別の見られ方や業者の比較は<Link href="/articles/electone-kaitori/" className="text-accent underline">エレクトーン買取ガイド</Link>にまとめています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ⚠️ 自宅で買い取る「訪問購入」には特定商取引法のルールがあり、事前に約束していない品物の売却を求めることは禁止されています。
          トラブルの例と相談先は<Link href="/articles/gakki-kaitori-sagi/" className="text-accent underline">楽器買取の詐欺・トラブル対策</Link>をご覧ください。
        </p>

        <h2 id="before" className="text-xl font-bold mt-12 mb-4">処分の前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li><strong>機種名・型番</strong>：本体に表示された型番（ELS-02 など）を控えておくと、査定や粗大ごみの品目確認が早く進みます</li>
          <li><strong>動作するかどうか</strong>：電源が入るか、鍵盤・ペダルが反応するか。買取の可否を分ける点です</li>
          <li><strong>付属品</strong>：椅子・譜面台・電源コードなど。粗大ごみでは別の品目として数えられる場合があります</li>
          <li><strong>運び出しの経路</strong>：階段・エレベーター・ドア幅。出張買取でも粗大ごみでも必要になる情報です</li>
        </ul>

        <p className="mb-12">
          <Link
            href="/articles/electone-kaitori/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            エレクトーン買取ガイドを見る
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
          currentSlug="electone-shobun"
          relatedSlugs={["electone-kaitori", "denshi-piano-kaitori", "piano-kaitori", "yamaha-kaitori", "gakki-kaitori-sagi"]}
        />
      </article>
    </>
  );
}

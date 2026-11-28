import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-28 20時の回）「電子ピアノ 粗大ごみ」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：処分の手順・費用は自治体の公式案内を出典にし、買取・引取との比べ方として書く。
// 楽器全般の処分（/articles/gakki-shobun-houhou/）・エレクトーン（/articles/electone-shobun/）と重ならないよう電子ピアノに絞る。
// 自治体ごとに違う点（品目名・手数料・重量条件・収集方法）は断定しない＝各自治体の記載をそのまま並べる。
// ⚠️ 事実の出典（2026-11-28 取得）:
//   大阪市＝粗大ごみ処理手数料一覧表（2026年10月29日）／品目別収集区分一覧表（電子ピアノ＝小型家電リサイクル回収〈宅配便・有料〉→出せない場合は粗大ごみ、ピアノ＝収集しません）
//   福岡市＝粗大ごみ受付 品目一覧（エレクトーン・電子ピアノ〈イスは別料金〉1000）／持ち出しサービス（65歳以上等・屋内500円/玄関先300円）
//   秋田市＝粗大ごみ処理手数料の目安（更新日 令和4年10月3日・電子ピアノ・オルガン 1,500円）
//   東京都中央区＝粗大ごみ 品目・手数料一覧（PDF・エレクトーン、電子ピアノ〈オルガンを含む〉重さ70kgまで 1,800円）
//   名古屋市＝粗大ごみ処理手数料の例（更新日 2026年9月30日・電子ピアノ〈脚付きのもの〉2,000円、ピアノは排出禁止物）
//   買取側＝島村楽器 電子ピアノ出張買取／楽器の買取屋さん トップ／高く売れるドットコム 電子ピアノ買取

const ASOF = "2026年11月28日";

const FEES: { city: string; item: string; fee: string; note: string; date: string; src: string }[] = [
  {
    city: "大阪市",
    item: "電子ピアノ",
    fee: "1,000円",
    note: "品目別収集区分では、まず小型家電リサイクル回収（宅配便・有料）を案内し、出せない場合は粗大ごみ。ピアノは「収集しません」",
    date: "手数料一覧 2026年10月29日",
    src: "https://www.city.osaka.lg.jp/kankyo/page/0000384507.html",
  },
  {
    city: "福岡市",
    item: "エレクトーン・電子ピアノ（イスは別料金）",
    fee: "1,000円",
    note: "粗大ごみ受付の品目一覧（趣味用品）に掲載",
    date: "品目一覧（日付の記載なし）",
    src: "https://sodaigomi-kankyo.city.fukuoka.lg.jp/list.cgi",
  },
  {
    city: "秋田市",
    item: "電子ピアノ・オルガン",
    fee: "1,500円",
    note: "「目安」として掲載。品名が同じでも重さ・大きさにより料金が変わると記載",
    date: "更新日 令和4年10月3日",
    src: "https://www.city.akita.lg.jp/kurashi/recycle/1006080/1006202.html",
  },
  {
    city: "東京都中央区",
    item: "エレクトーン、電子ピアノ（オルガンを含む）",
    fee: "1,800円",
    note: "備考欄に「重さ70kgまで」",
    date: "品目・手数料一覧（PDF）",
    src: "https://www.city.chuo.lg.jp/documents/5389/sodaihinmoku0701.pdf",
  },
  {
    city: "名古屋市",
    item: "電子ピアノ（脚付きのもの）",
    fee: "2,000円",
    note: "同じ表で電子オルガンは2,500円。ピアノは排出禁止物",
    date: "更新日 2026年9月30日",
    src: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1012185.html",
  },
];

const COMPARE: { way: string; cost: string; work: string; cond: string }[] = [
  {
    way: "粗大ごみに出す",
    cost: "手数料1,000〜2,000円（上の5市区）",
    work: "申し込み・手数料券の購入・指定場所までの運び出し（自治体の案内による）",
    cond: "品目名・重量の条件は自治体ごとに異なる",
  },
  {
    way: "島村楽器の出張買取",
    cost: "引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で、買取金額から差し引き",
    work: "Web・LINEで査定→指定業者が自宅から引き上げ",
    cond: "製造から8年以上は買取不可。買取できない品番は有料引取サービスあり（フォームで選べる品番に限る）",
  },
  {
    way: "楽器の買取屋さんの出張買取",
    cost: "出張費・査定料・搬出費用は無料と公式に記載",
    work: "電話・フォーム・LINEで申し込み→訪問査定",
    cond: "公式に年式の基準の記載なし（査定で判断）",
  },
  {
    way: "高く売れるドットコムの出張買取",
    cost: "出張・宅配・店頭の査定は無料と記載",
    work: "Web・電話で事前査定→出張",
    cond: "製造から5年ほどが目安。それ以上の人気シリーズも相談可と記載",
  },
];

const FAQ = [
  {
    q: "電子ピアノは粗大ごみに出せますか？",
    a: `当サイトが確認した5市区（大阪市・福岡市・秋田市・東京都中央区・名古屋市）では、いずれも電子ピアノが粗大ごみの品目として手数料つきで掲載されていました（${ASOF}確認）。手数料は1,000〜2,000円です。ただし品目名や条件（重さ70kgまで、脚付きのもの等）は自治体ごとに異なるため、お住まいの自治体の品目一覧でご確認ください。`,
  },
  {
    q: "アコースティックピアノと同じ扱いですか？",
    a: "確認した自治体では扱いが分かれていました。大阪市はピアノを「収集しません」（メーカー・販売店・専門業者等に相談）とし、名古屋市もピアノを排出禁止物としていますが、両市とも電子ピアノは粗大ごみの品目として掲載しています。",
  },
  {
    q: "粗大ごみ以外の出し方はありますか？",
    a: "大阪市の品目別収集区分では、電子ピアノはまず小型家電リサイクル回収（宅配便による自宅回収・有料）に出し、出せない場合に粗大ごみとする案内になっています。自治体によって回収の仕組みが違うため、品目別の分別案内を確認してください。",
  },
  {
    q: "自分で運び出せない場合はどうすればよいですか？",
    a: "福岡市は、65歳以上の方や障がいのある方など、所定の場所まで運べない方向けに「持ち出しサービス」（屋内から1個500円、玄関先から300円を粗大ごみ手数料とは別に負担）を設けています。人力3人で持ち出せない物は対象外です。買取業者の出張では、搬出を業者が行うのが一般的ですが、階段作業などで費用が発生する業者もあります（島村楽器はオプション作業を有料と記載）。",
  },
  {
    q: "処分と買取のどちらを先に検討すべきですか？",
    a: "動作する比較的新しい電子ピアノなら、先に無料査定で値段がつくかを確認するのが無駄のない順番です。島村楽器は製造から8年以上、ブックオフは製造から5年以上の電子ピアノを買取対象外としているため、製造年を確認してから依頼先を選ぶと手戻りがありません。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "電子ピアノの粗大ごみ", href: "/articles/denshi-piano-sodaigomi/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-sodaigomi/" },
  title: "電子ピアノは粗大ごみに出せる？5市区の手数料（1,000〜2,000円）と買取・引取との比べ方【2026年11月】",
  description:
    "電子ピアノの粗大ごみ手数料を大阪市・福岡市・秋田市・東京都中央区・名古屋市の公式ページで比較（1,000〜2,000円）。重量条件やピアノとの扱いの違い、運び出しのサービス、出張買取・有料引取との費用と手間の違いを整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "電子ピアノは粗大ごみに出せる？5市区の手数料と買取との比べ方【2026年11月】",
    description: "電子ピアノの粗大ごみ手数料を5市区の公式ページで比較。出張買取・有料引取との違い。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "電子ピアノは粗大ごみに出せる？5市区の手数料と買取・引取との比べ方",
        datePublished: "2026-11-28",
        dateModified: "2026-11-28",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-sodaigomi/",
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
          { "@type": "ListItem", position: 3, name: "電子ピアノの粗大ごみ", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-sodaigomi/" },
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
          電子ピアノは粗大ごみに出せる？5市区の手数料と買取・引取との比べ方
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          粗大ごみの品目・手数料は各自治体の公式ページ、買取の条件は各社の公式サイトを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            当サイトが確認した5市区では、電子ピアノはいずれも<strong>粗大ごみの品目</strong>として掲載され、手数料は<strong>1,000〜2,000円</strong>でした。
            一方、品目名の書き方（脚付きのもの、オルガンを含む等）や<strong>重量の条件</strong>、小型家電の回収を先に案内するかどうかは自治体ごとに違います。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            粗大ごみは手数料に加えて、指定場所までの<strong>運び出しを自分で行う</strong>のが基本です。製造から年数の浅い電子ピアノなら、搬出を業者が行う出張買取で値段がつくかを先に確認すると、費用と手間の両方を抑えられる場合があります。
          </p>
        </div>

        <h2 id="fees" className="text-xl font-bold mt-12 mb-4">電子ピアノの粗大ごみ手数料（5市区の公式ページ）</h2>
        <p className="text-sm leading-relaxed mb-4">
          各自治体が公表している粗大ごみの品目・手数料の一覧から、電子ピアノの行を抜き出しました。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">自治体</th>
                <th className="text-left px-4 py-3 font-medium">品目名</th>
                <th className="text-right px-4 py-3 font-medium">手数料</th>
                <th className="text-left px-4 py-3 font-medium">同じ一覧の記載</th>
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
          出典：自治体名のリンク先（各自治体の公式ページ・{ASOF}確認）。手数料や品目の扱いは改定されることがあります。お住まいの自治体の最新の案内をご確認ください。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li><strong>品目名の違い</strong>：電子ピアノ単独の品目（大阪市・名古屋市）と、エレクトーン・オルガンと同じ品目（福岡市・秋田市・中央区）があります。</li>
          <li><strong>条件の違い</strong>：中央区は「重さ70kgまで」、名古屋市は「脚付きのもの」、秋田市は重さ・大きさにより料金が変わる「目安」としての掲載です。</li>
          <li><strong>椅子</strong>：福岡市は「イスは別料金」と明記しています。椅子を一緒に出す場合は別の品目として数えられる場合があります。</li>
          <li><strong>ピアノとの違い</strong>：大阪市・名古屋市とも、アコースティックピアノは収集しない（排出禁止）としていますが、電子ピアノは品目として掲載しています。</li>
        </ul>

        <h2 id="carry" className="text-xl font-bold mt-12 mb-4">運び出しと申し込みについて</h2>
        <p className="text-sm leading-relaxed mb-4">
          粗大ごみは事前の申し込みが必要で、手数料券（シール）を購入して品目に貼る方式の自治体が多くあります（大阪市は200円・400円・700円・1,000円の4区分の手数料券）。
          出す場所や運び出しの方法も自治体の案内に従います。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          福岡市には、65歳以上の方や障がいのある方など、所定の場所まで運べない方を対象にした
          <a href="https://sodaigomi-kankyo.city.fukuoka.lg.jp/take.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            持ち出しサービス
          </a>
          があり、屋内からは1個500円、玄関先からは300円が粗大ごみ手数料とは別に必要です。人力（3人）で持ち出せない物や、玄関口から出ない大きな物は対象外とされています。
          同じような仕組みの有無はお住まいの自治体にご確認ください。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">粗大ごみ・出張買取・有料引取の比べ方</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">費用</th>
                <th className="text-left px-4 py-3 font-medium">手間</th>
                <th className="text-left px-4 py-3 font-medium">条件</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((c) => (
                <tr key={c.way} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{c.way}</td>
                  <td className="px-4 py-3 leading-relaxed">{c.cost}</td>
                  <td className="px-4 py-3 leading-relaxed">{c.work}</td>
                  <td className="px-4 py-3 leading-relaxed">{c.cond}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：
          <a href="https://www.shimamura.co.jp/used/gakki/digital-piano/" target="_blank" rel="noopener noreferrer" className="underline">島村楽器 電子ピアノ出張買取</a>・
          <a href="https://www.gakkikaitori.co.jp/" target="_blank" rel="noopener noreferrer" className="underline">楽器の買取屋さん</a>・
          <a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 電子ピアノ買取</a>
          （いずれも{ASOF}確認）。出張の対応地域は各社で異なります。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          判断の分かれ目は<strong>製造年</strong>です。島村楽器は製造から8年以上の電子ピアノを買取できないとし、買取できない品番には有料の引取サービスを用意しています。
          ブックオフも製造から5年以上の電子ピアノを買取対象外としています。製造から年数がたっている場合は、年式の基準を明記していない業者や、古い年式の買取実績を公開している業者に相談すると、粗大ごみに出す前に値段がつくかを確認できます。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          年式ごとの各社の条件と買取実績は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>、
          メーカーの部品保有期間は<Link href="/articles/denshi-piano-jumyou/" className="text-accent underline">電子ピアノの寿命</Link>、
          楽器全般の処分方法は<Link href="/articles/gakki-shobun-houhou/" className="text-accent underline">楽器の処分方法</Link>にまとめています。
        </p>

        <h2 id="before" className="text-xl font-bold mt-12 mb-4">申し込みの前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li><strong>型番と製造年</strong>：本体背面や鍵盤の下のラベルで確認できます。買取の可否と、粗大ごみの品目（重量条件）の確認の両方に使います</li>
          <li><strong>重さ</strong>：取扱説明書の仕様欄に質量が書かれています。重量条件のある自治体では必要になる情報です</li>
          <li><strong>椅子・ペダル・譜面台</strong>：別の品目として数える自治体があります。買取では付属品として査定に含まれる場合があります</li>
          <li><strong>運び出しの経路</strong>：階段・エレベーター・ドア幅。出張買取でも粗大ごみでも必要になります</li>
        </ul>

        <p className="mb-12">
          <Link
            href="/articles/denshi-piano-kaitori/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            電子ピアノ買取相場ガイドを見る
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
          currentSlug="denshi-piano-sodaigomi"
          relatedSlugs={["denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-jumyou", "electone-shobun", "gakki-shobun-houhou", "kodomo-piano-yameta", "hikkoshi-gakki-shobun", "gakki-kaitori-sagi"]}
        />
      </article>
    </>
  );
}

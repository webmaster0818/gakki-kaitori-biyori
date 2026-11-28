import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-28 20時の回）「古い電子ピアノ 買取」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：/articles/kowareta-gakki-kaitori/・/articles/denshi-piano-kaitori/ に近い →
//   電子ピアノ固有の条件（年式・故障の扱い）を各社公式の買取条件で示せる場合だけ作る＝島村（8年）・ブックオフ（5年）・高く売れるドットコム（5年目安）で示せたので作成。
// ⚠️ 事実の出典（2026-11-28 取得）:
//   島村楽器 /used/gakki/digital-piano/（製造から8年以上は買取不可・年単位・ラベルの年・音が出ない等は不可・有料引取サービス）
//   ブックオフ /sell/electronic/music/（製造から5年以上経過した電子ピアノは買取対象外）
//   高く売れるドットコム /gakki/denshi-piano/（FAQ「製造から5年ほど」が目安・それ以上も相談）
//   買取実績＝高く売れるドットコム /gakki/denshi-piano/・/clavinova/・/roland/ に掲載の実績のうち、商品名に製造年があるもの20件（2026/8/19〜11/17 買取）。
//   経過年数＝買取日の年−製造年（当サイトで計算）。データファイルには書いていない。

const ASOF = "2026年11月28日";

const RULES: { shop: string; rule: string; other: string; src: string }[] = [
  {
    shop: "島村楽器（出張買取）",
    rule: "製造から8年以上経過しているものは買取不可",
    other: "可否は本体ラベルの製造年で、年単位で判断。音が出ないなど通常使用に支障があるもの・海外仕様電源プラグの品番も不可。買取できない品番は有料引取サービスあり",
    src: "https://www.shimamura.co.jp/used/gakki/digital-piano/",
  },
  {
    shop: "ブックオフ",
    rule: "製造から5年以上経過した電子ピアノは買取対象外",
    other: "データ消去や動作確認ができないもの、壊れているものも対象外になる場合あり。取扱いは店舗により異なる",
    src: "https://www.bookoff.co.jp/sell/electronic/music/",
  },
  {
    shop: "高く売れるドットコム",
    rule: "製造から5年ほどが目安",
    other: "「それ以上の年数が経過したクラビノーバやプリヴィアなどの人気シリーズでも高値がつく場合がございます」と記載。出張・宅配・店頭で査定",
    src: "https://www.takakuureru.com/gakki/denshi-piano/",
  },
];

// 高く売れるドットコムの公開買取実績のうち、商品名に製造年が書かれたもの（2026-11-28 取得）
const RECORDS: { model: string; year: number; date: string; pref: string; price: number }[] = [
  { model: "YAMAHA CLP-280", year: 2007, date: "2026-08-19", pref: "千葉県", price: 5000 },
  { model: "YAMAHA CLP-470", year: 2011, date: "2026-09-19", pref: "静岡県", price: 8000 },
  { model: "KAWAI CA15R", year: 2013, date: "2026-11-17", pref: "東京都", price: 12000 },
  { model: "YAMAHA CLP-545WA", year: 2015, date: "2026-10-10", pref: "神奈川県", price: 23000 },
  { model: "YAMAHA CLP-545WA", year: 2016, date: "2026-09-01", pref: "千葉県", price: 15000 },
  { model: "YAMAHA CLP-575", year: 2016, date: "2026-09-20", pref: "愛知県", price: 22000 },
  { model: "YAMAHA CLP-545R", year: 2017, date: "2026-10-14", pref: "東京都", price: 20000 },
  { model: "YAMAHA CLP-645R", year: 2018, date: "2026-09-19", pref: "愛知県", price: 25000 },
  { model: "YAMAHA CLP-635WA", year: 2018, date: "2026-10-06", pref: "大阪府", price: 20000 },
  { model: "YAMAHA CLP-635WA", year: 2018, date: "2026-10-25", pref: "宮城県", price: 12000 },
  { model: "YAMAHA YDP-163WA", year: 2018, date: "2026-11-06", pref: "東京都", price: 6500 },
  { model: "YAMAHA CLP-635WA", year: 2019, date: "2026-09-04", pref: "北海道", price: 17000 },
  { model: "KAWAI CA49 R", year: 2020, date: "2026-11-04", pref: "東京都", price: 25000 },
  { model: "YAMAHA CLP-735WA", year: 2021, date: "2026-08-25", pref: "千葉県", price: 45000 },
  { model: "CASIO PX-S1100", year: 2021, date: "2026-11-04", pref: "福岡県", price: 12000 },
  { model: "Roland LX705-DR", year: 2021, date: "2026-11-12", pref: "東京都", price: 30000 },
  { model: "CASIO PX-S1100", year: 2022, date: "2026-11-09", pref: "東京都", price: 6000 },
  { model: "YAMAHA P-125a", year: 2022, date: "2026-11-12", pref: "宮城県", price: 10000 },
  { model: "CASIO CDP-S160", year: 2023, date: "2026-11-10", pref: "兵庫県", price: 3000 },
  { model: "CASIO PX-S1100WE", year: 2025, date: "2026-11-04", pref: "京都府", price: 10000 },
];

function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  const n = s.length;
  return n % 2 ? s[(n - 1) / 2] : Math.round((s[n / 2 - 1] + s[n / 2]) / 2);
}
const withAge = RECORDS.map((r) => ({ ...r, age: Number(r.date.slice(0, 4)) - r.year }));
const OLD = withAge.filter((r) => r.age >= 8);
const NEW = withAge.filter((r) => r.age < 8);
const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;

const FAQ = [
  {
    q: "古い電子ピアノは買い取ってもらえますか？",
    a: `業者によって基準が異なります。${ASOF}時点の公式の記載では、島村楽器は製造から8年以上、ブックオフは製造から5年以上の電子ピアノを買取の対象外としています。高く売れるドットコムは製造から5年ほどを目安としつつ、それ以上の人気シリーズも相談を受け付けており、公開している買取実績には製造から8年以上の電子ピアノが${OLD.length}件（${yen(Math.min(...OLD.map((r) => r.price)))}〜${yen(Math.max(...OLD.map((r) => r.price)))}）含まれていました。`,
  },
  {
    q: "製造年はどこで確認できますか？",
    a: "島村楽器の案内では、モデル・型名、製造年、製造番号は本体背面や鍵盤の下部に貼られたラベルで確認できるとしています。島村楽器はこのラベルに表示された年数で、年単位で買取の可否を判断しています。",
  },
  {
    q: "20年近く前の電子ピアノでも値段はつきますか？",
    a: `高く売れるドットコムの公開実績には、2007年製のヤマハ クラビノーバ CLP-280 を2026年8月に${yen(5000)}で買い取った例があります。ただし実績の大半はクラビノーバなど同社が人気シリーズとして挙げる機種で、すべての古い電子ピアノに値段がつくわけではありません。`,
  },
  {
    q: "壊れている古い電子ピアノはどうなりますか？",
    a: "島村楽器は音が出ないなど通常使用に支障があるものを買取できないとし、ブックオフも壊れている品物は対象外になる場合があるとしています。値段がつかない場合は、有料引取サービス（島村楽器）や自治体の粗大ごみを検討することになります。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "古い電子ピアノの買取", href: "/articles/furui-denshi-piano-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/furui-denshi-piano-kaitori/" },
  title: "古い電子ピアノは買取できる？各社の年式の基準（5年・8年）と製造8年以上の買取実績11件【2026年11月】",
  description:
    "古い電子ピアノの買取条件を公式で比較。島村楽器は製造8年以上、ブックオフは製造5年以上を対象外とする一方、高く売れるドットコムの公開実績には製造8〜19年の電子ピアノ11件（5,000〜25,000円）がありました。製造年の確認方法と、売れない場合の選択肢も掲載。",
  openGraph: {
    images: ["/og-image.png"],
    title: "古い電子ピアノは買取できる？各社の年式の基準と製造8年以上の買取実績【2026年11月】",
    description: "島村楽器8年・ブックオフ5年の基準と、製造8〜19年の買取実績11件。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "古い電子ピアノは買取できる？各社の年式の基準と製造8年以上の買取実績",
        datePublished: "2026-11-28",
        dateModified: "2026-11-28",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/furui-denshi-piano-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "古い電子ピアノの買取", item: "https://gakkikaitori-biyori.com/articles/furui-denshi-piano-kaitori/" },
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
          古い電子ピアノは買取できる？各社の年式の基準と製造8年以上の買取実績
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          買取の条件と買取実績は、各社の公式サイトを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            電子ピアノは業者ごとに<strong>年式の基準</strong>があります。島村楽器は<strong>製造から8年以上</strong>、ブックオフは<strong>製造から5年以上</strong>の電子ピアノを買取の対象外と公式に明記しています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            一方、高く売れるドットコムは「製造から5年ほど」を目安としながら、それ以上の人気シリーズも相談を受け付けています。同社の公開実績のうち製造年が書かれた{RECORDS.length}件を当サイトで整理すると、
            <strong>製造から8年以上の電子ピアノが{OLD.length}件</strong>（{yen(Math.min(...OLD.map((r) => r.price)))}〜{yen(Math.max(...OLD.map((r) => r.price)))}、中央値{yen(median(OLD.map((r) => r.price)))}）ありました。
            古い電子ピアノは、<strong>年式の基準で断られない業者を選ぶ</strong>ことが最初の分かれ目です。
          </p>
        </div>

        <h2 id="rules" className="text-xl font-bold mt-12 mb-4">各社の年式の基準（公式の記載）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">年式の基準</th>
                <th className="text-left px-4 py-3 font-medium">そのほかの条件</th>
              </tr>
            </thead>
            <tbody>
              {RULES.map((r) => (
                <tr key={r.shop} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={r.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {r.shop}
                    </a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed">{r.rule}</td>
                  <td className="px-4 py-3 leading-relaxed">{r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：業者名のリンク先（各社公式・{ASOF}確認）。条件は変更されることがあります。申し込み前に各社の最新の案内をご確認ください。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          なお、山野楽器の中古買い取りは電子ピアノを含む鍵盤楽器自体を対象外としています（
          <Link href="/articles/yamano-gakki-kaitori/" className="text-accent underline">詳しく</Link>）。
          楽器店だからといって古い電子ピアノを受け付けているとは限らないため、依頼先は条件を見て選ぶ必要があります。
        </p>

        <h2 id="records" className="text-xl font-bold mt-12 mb-4">製造年つきの買取実績{RECORDS.length}件（高く売れるドットコム）</h2>
        <p className="text-sm leading-relaxed mb-4">
          高く売れるドットコムの電子ピアノ買取ページ（総合・クラビノーバ・ローランド）に掲載された買取実績のうち、商品名に製造年が書かれているものを抜き出し、
          買取日の年から製造年を引いた<strong>経過年数</strong>を当サイトで計算しました。新しい順ではなく、古い順に並べています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">機種</th>
                <th className="text-right px-4 py-3 font-medium">製造年</th>
                <th className="text-right px-4 py-3 font-medium">経過年数</th>
                <th className="text-left px-4 py-3 font-medium">買取日・地域</th>
                <th className="text-right px-4 py-3 font-medium">買取価格</th>
              </tr>
            </thead>
            <tbody>
              {withAge.map((r) => (
                <tr key={`${r.model}-${r.date}-${r.price}`} className={`border-t border-warm-200 ${r.age >= 8 ? "bg-warm-50" : ""}`}>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{r.model}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.year}年</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.age}年</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.date.replace(/-/g, "/")}・{r.pref}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{yen(r.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：
          <a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline">高く売れるドットコム 電子ピアノ買取</a>
          ・
          <a href="https://www.takakuureru.com/gakki/denshi-piano/clavinova/" target="_blank" rel="noopener noreferrer" className="underline">クラビノーバ</a>
          ・
          <a href="https://www.takakuureru.com/gakki/denshi-piano/roland/" target="_blank" rel="noopener noreferrer" className="underline">ローランド</a>
          の買取実績（{ASOF}取得・2026年8月19日〜11月17日の買取分）。色付きの行は経過年数8年以上。買取価格は実績であり、同じ機種の買取を保証するものではありません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">経過年数</th>
                <th className="text-right px-4 py-3 font-medium">件数</th>
                <th className="text-right px-4 py-3 font-medium">買取価格の範囲</th>
                <th className="text-right px-4 py-3 font-medium">中央値</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "8年未満", rows: NEW },
                { label: "8年以上", rows: OLD },
              ].map((g) => (
                <tr key={g.label} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{g.label}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{g.rows.length}件</td>
                  <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">
                    {yen(Math.min(...g.rows.map((r) => r.price)))}〜{yen(Math.max(...g.rows.map((r) => r.price)))}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">{yen(median(g.rows.map((r) => r.price)))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">集計：当サイト（上の{RECORDS.length}件から計算）。</p>
        <p className="text-sm leading-relaxed mb-4">
          中央値は8年以上の{OLD.length}件が{yen(median(OLD.map((r) => r.price)))}、8年未満の{NEW.length}件が{yen(median(NEW.map((r) => r.price)))}で、古い年式のほうが高く出ています。これは年式が古いほど高く売れるという意味ではなく、
          <strong>古い年式で実績に載っているのが主にクラビノーバ（CLPシリーズ）の上位寄りの機種</strong>で、新しい年式にはカシオのポータブル型など価格帯の低い機種が多く含まれているためです。
          件数は少なく、機種の構成もそろっていないため、相場の目安ではなく「製造から8年以上でも買取の実績がある機種がある」ことを示す資料としてご覧ください。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          また、2018年製の CLP-635WA は2026年の買取時点で経過8年にあたり、島村楽器の「製造から8年以上」の基準では対象外になる年式です。
          同じ機種でも、<strong>依頼先によって売れる・売れないが分かれる</strong>ことがわかります。
        </p>

        <h2 id="check" className="text-xl font-bold mt-12 mb-4">古い電子ピアノを売る前に確認すること</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>製造年</strong>：本体背面や鍵盤の下部のラベルで確認します。島村楽器はラベルの年で、年単位で判断するとしています</li>
          <li><strong>音が出るか・全鍵盤が鳴るか</strong>：島村楽器は通常使用に支障があるものを買取できないとしています。電源・鍵盤・ペダルの動作を確かめておきます</li>
          <li><strong>シリーズ名</strong>：クラビノーバ（CLP）、プリヴィア（PX）など。高く売れるドットコムは人気シリーズを相談可能な例として挙げています</li>
          <li><strong>メーカーの修理受付</strong>：部品の保有期間が過ぎると修理できない場合があります。メーカー別の期間は<Link href="/articles/denshi-piano-jumyou/" className="text-accent underline">電子ピアノの寿命</Link>にまとめました</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          値段がつかなかった場合は、島村楽器の有料引取サービスや自治体の粗大ごみが選択肢になります。手数料の例は
          <Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ</Link>、
          故障した楽器全般の売り方は<Link href="/articles/kowareta-gakki-kaitori/" className="text-accent underline">壊れた楽器の買取</Link>をご覧ください。
        </p>

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
          currentSlug="furui-denshi-piano-kaitori"
          relatedSlugs={["denshi-piano-kaitori", "denshi-piano-jumyou", "denshi-piano-sodaigomi", "yamaha-clavinova-kaitori", "kowareta-gakki-kaitori", "shimamura-gakki-kaitori", "bookoff-gakki-kaitori", "roland-denshi-piano-kaitori"]}
        />
      </article>
    </>
  );
}

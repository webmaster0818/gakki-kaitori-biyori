import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-25 深夜02時の回）「ギターピックアップ 買取」。
// 一次データ:
//   ヤフオクの落札済み検索「ピックアップ セイモアダンカン」「ピックアップ ディマジオ」「ピックアップ EMG」「ギター ピックアップ」
//     「Fender ピックアップ」「Gibson ピックアップ」（2026-11-25 取得・重複を除いて570件）→ ピックアップ単体（1個またはセット）267件を当サイトで集計し、
//     主要5ブランドの254件をブランド別に整理。
//     除外：ギター・ベース本体（「搭載」「換装」「交換」「〜タイプ」・ブランド名つきの本体）、ピックガードやアッセンブリー込み、カバー・ネジ・リング類、ケーブル、
//     ピエゾ・アコースティック用、ジャンク・新品・未使用、まとめ売り。ブランドはタイトルの表記で分類。
//   島村楽器 買取価格検索 型番「ピックアップ」＝ウクレレ1行のみ（ピックアップ単体の掲示なし）（2026-11-25）
// 業者の公式（2026-11-25 取得）: イシバシ楽器 楽器買取（ギターパーツ・ケース類にピックアップ）、楽器の買取屋さん ピックアップの買取ページ
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月25日";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=guitar&small-cat=pickup-guiter";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=&inst=&brand=&model=%E3%83%94%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97&num=100&pg=1";

const BRANDS: { brand: string; n: string; median: string; range: string }[] = [
  { brand: "Gibson（ギブソン）", n: "35件", median: "21,500円", range: "3,100〜207,900円" },
  { brand: "EMG", n: "46件", median: "14,900円", range: "1,000〜55,000円" },
  { brand: "DiMarzio（ディマジオ）", n: "57件", median: "10,000円", range: "5,600〜35,500円" },
  { brand: "Seymour Duncan（セイモアダンカン）", n: "75件", median: "9,500円", range: "1,280〜24,000円" },
  { brand: "Fender（フェンダー）", n: "41件", median: "9,000円", range: "880〜49,000円" },
];

const BUYERS: { name: string; status: string; href: string }[] = [
  { name: "イシバシ楽器", status: "買取の案内の「ギターパーツ・ケース類」に「ギター・ベース用ピックアップ、その他ギターパーツ」と明記", href: ISHIBASHI },
  { name: "楽器の買取屋さん", status: "ピックアップの買取ページがあり「ギター用のピックアップは買取できます」と案内。ページにメーカー別の買取事例は表示されていません", href: KAITORIYA },
  { name: "島村楽器", status: "買取価格検索で型番「ピックアップ」の掲示はウクレレ1行のみで、ピックアップ単体の掲示はありません", href: SHIMA_SEARCH },
];

const FAQ = [
  {
    q: "交換して外したピックアップだけでも売れますか？",
    a: `イシバシ楽器は買取の対象に「ギター・ベース用ピックアップ」を挙げており、楽器の買取屋さんも「ギター用のピックアップは買取できます」と案内しています（${ASOF}確認）。島村楽器の買取価格検索にはピックアップ単体の掲示がありません。`,
  },
  {
    q: "ピックアップはいくらで売れますか？",
    a: "ヤフオクの主要5ブランドのピックアップ単体254件では、落札の中央値が10,500円でした。ブランド別ではギブソン21,500円、EMG 14,900円、ディマジオ10,000円、セイモアダンカン9,500円、フェンダー9,000円です。落札価格は個人間・業者の販売価格で、買取価格とは性質が異なります。",
  },
  {
    q: "古いギブソンのピックアップは高いですか？",
    a: "ギブソンの35件のうち、PAF・T-Top・ナンバード・年代の表記がある7件は中央値45,000円で、ステッカーナンバードPAFは207,900円でした。それ以外の28件は中央値約20,000円です。年代は裏面のステッカーや刻印で判断されるため、外した状態のまま写真を撮って査定に出します。",
  },
  {
    q: "フロントとリアはセットで売った方がよいですか？",
    a: "セット（フロント・リアなど2個以上）とわかる出品57件の落札中央値は17,500円で、全体の中央値10,500円より高くなっています。同じギターから外したものは、そろえて出すのが基本です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ギターピックアップの買取", href: "/articles/guitar-pickup-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/guitar-pickup-kaitori/" },
  title: "ギターピックアップの買取相場｜落札254件のブランド別集計と買い取る楽器店【2026年11月】",
  description:
    "交換して外したギターピックアップの買取相場を、ヤフオクのピックアップ単体の落札254件からブランド別（ギブソン・EMG・ディマジオ・セイモアダンカン・フェンダー）に集計しました。ピックアップの買取を明記している楽器店も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ギターピックアップの買取相場｜落札254件のブランド別集計【2026年11月】",
    description: "全体の中央値10,500円。ギブソン21,500円・EMG 14,900円。セットは17,500円。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ギターピックアップの買取相場｜落札254件のブランド別集計と買い取る楽器店",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/guitar-pickup-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ギターピックアップの買取", item: "https://gakkikaitori-biyori.com/articles/guitar-pickup-kaitori/" },
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
          ギターピックアップの買取相場｜落札254件のブランド別集計と買い取る楽器店
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、楽器店の取り扱いは各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ヤフオクのピックアップ単体の落札のうち、主要5ブランドの254件の中央値は<strong>10,500円</strong>で、111件が1万円未満でした。
            ブランド別では<strong>ギブソンが21,500円</strong>で最も高く、EMG 14,900円、ディマジオ10,000円、セイモアダンカン9,500円、フェンダー9,000円と続きます。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            楽器店では、イシバシ楽器が買取の対象に「ギター・ベース用ピックアップ」を明記しています。島村楽器の買取価格検索にはピックアップ単体の掲示がありません。
          </p>
        </div>

        <h2 id="brands" className="text-xl font-bold mt-12 mb-4">ブランド別の落札価格（ピックアップ単体）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ブランド</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">範囲</th>
              </tr>
            </thead>
            <tbody>
              {BRANDS.map((r) => (
                <tr key={r.brand} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.brand}</td>
                  <td className="px-4 py-3">{r.n}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.median}</td>
                  <td className="px-4 py-3">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ギブソンは年代ものの差が大きく、PAF・T-Top・ナンバード・1950〜60年代の P-90 など年代の表記がある7件は中央値45,000円（19,999〜207,900円）、それ以外の28件は中央値約20,000円でした。
          最高額は「ステッカーナンバード PAF」の207,900円です。
          年代の表記がある出品はセイモアダンカン6件・ディマジオ5件・フェンダー6件で、いずれも7,000〜42,000円の範囲に収まり、ギブソンほどの差は見られませんでした。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          フロント・リアなど2個以上のセットとわかる出品は57件で、中央値は17,500円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：ヤフオクの落札済み検索「ピックアップ セイモアダンカン」「ピックアップ ディマジオ」「ピックアップ EMG」「ギター ピックアップ」「Fender ピックアップ」「Gibson ピックアップ」（{ASOF}取得・重複を除いて570件）のうち、ピックアップ単体の267件を当サイトで集計し、主要5ブランドの254件を表にしました。
          ギター・ベース本体（ピックアップ搭載・交換済みの出品）、ピックガードやアッセンブリー込みの出品、カバー・ネジ・ケーブル類、アコースティック用、ジャンク・新品・未使用、まとめ売りは除外しています。
          ブランドはタイトルの表記で分類しました。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">ピックアップの買取の扱い（楽器店別）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">楽器店</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載（{ASOF}確認）</th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{r.name}</a>
                  </td>
                  <td className="px-4 py-3">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんは、ピックアップ単体はギター本体と比べると大きな金額にならないため、ほかのギター用の小物とまとめて出すことをすすめています。
          落札でも1万円未満が4割を超えており、単体で送るより、エフェクターや外したパーツと一緒に査定に出す方法が現実的です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 楽器買取</a>・
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん ピックアップの買取</a>・
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索</a>（{ASOF}確認）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番とポジション</strong>：裏面のステッカーや刻印で型番（例：SH-4・DP100・81）とフロント／リア用を確かめます。</li>
          <li><strong>リード線の長さ</strong>：取り外しの際に短く切ったものは、再搭載しにくくなります。切った場合は申告します。</li>
          <li><strong>付属品</strong>：元箱・取り付けネジ・スプリング、EMG などアクティブタイプは付属の配線部品もそろえます。</li>
          <li><strong>純正品</strong>：ギターから外した純正ピックアップは、そのギターの型番と年式も伝えます。ギター本体を売る場合、純正パーツの有無が査定に影響します（<Link href="/articles/gakki-fuzokuhin-kaitori/" className="text-accent underline">付属品の重要性ガイド</Link>）。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          エレキギター本体は<Link href="/articles/guitar-kaitori/" className="text-accent underline">ギター買取ガイド</Link>、
          ブランド別の本体の相場は<Link href="/articles/gibson-kaitori/" className="text-accent underline">ギブソン</Link>・<Link href="/articles/fender-kaitori/" className="text-accent underline">フェンダー</Link>の各ページ、
          エフェクターは<Link href="/articles/effector-kaitori/" className="text-accent underline">エフェクター買取</Link>で整理しています。
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
          currentSlug="guitar-pickup-kaitori"
          relatedSlugs={["guitar-kaitori", "gakki-fuzokuhin-kaitori", "effector-kaitori", "gibson-kaitori", "fender-kaitori", "bass-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜04時の回）「リードオルガン 買取」。
// 一次データ: ヤフオクの落札済み検索「リードオルガン」「足踏みオルガン」（2026-11-20 取得・重複除去27件）。
//   取得は scripts/fetch-yahoo-medians-gakki.py の fetch / extract_listings を流用（データファイルには書いていない）。
//   タイトルを1件ずつ読み、足踏み式のオルガン本体22件だけを残した（CD・書籍・手回しオルガン（オルガネット）・ハルモニウムは除外）。
// 業者の対応は各社公式（2026-11-20 取得・HTMLコメントと script 除外）:
//   島村楽器 https://www.shimamura.co.jp/used/（買取取り扱いのない楽器に「オルガン」）
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/tentou/（お取り扱いできない物に「オルガン」）
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=organ（事例8件・リードオルガンなし）
//   ヤマハ https://www.yamaha.com/ja/about/history/（1887年のオルガン修理・製作が創業のきっかけ）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/tentou/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=keyboard-instruments&small-cat=organ";
const YAMAHA_HISTORY = "https://www.yamaha.com/ja/about/history/";

const Y_GROUPS: { group: string; n: number; prices: string; note: string }[] = [
  {
    group: "ヤマハ（日本楽器）の足踏みオルガン",
    n: 11,
    prices: "1円〜35,000円（中央値5,000円）",
    note: "35,000円は「3A型」「七号型」「100年超」と型式や年代を書いた3件。それ以外の8件は1円〜23,100円",
  },
  {
    group: "ベビーオルガン（小型の足踏み式）",
    n: 6,
    prices: "2,000円〜66,000円（中央値3,750円）",
    note: "66,000円は西川風琴製作所（西川オルガン）の1件。ヤマハの「金魚オルガン」は3,500円・19,800円",
  },
  {
    group: "ほかのメーカー・メーカー記載なし",
    n: 4,
    prices: "1円・780円・1,100円・299,800円",
    note: "299,800円は米国 KIMBALL（キンボール）の61鍵。カワイ・ディアパソンは来店引取限定で1,000円前後",
  },
  {
    group: "折りたたみ式（携帯型）",
    n: 1,
    prices: "40,000円",
    note: "49鍵の折りたたみ式",
  },
];

const FAQ = [
  {
    q: "リードオルガン（足踏みオルガン）は楽器店で買い取ってもらえますか？",
    a: `島村楽器は「買取取り扱いのない楽器」に、イシバシ楽器は店頭買取の「お取り扱いできない物」に「オルガン」を挙げています（${ASOF}確認）。楽器の買取屋さんはオルガンの買取事例を8件公開していますが、ハモンド・ローランド・ヤマハ・カワイの事例で、足踏み式のリードオルガンの事例はありません。`,
  },
  {
    q: "古いヤマハの足踏みオルガンにはどのくらいの値段がつきますか？",
    a: `ヤフオクで${ASOF}に確認した落札11件は1円〜35,000円で、中央値は5,000円でした。35,000円で落札された3件は「3A型」「七号型」など型式や年代がタイトルに書かれていました。`,
  },
  {
    q: "大きくて運べない場合はどうなりますか？",
    a: "落札された22件のうち8件は「引取限定」「来店引取限定」など、落札者が取りに行く条件でした。発送できない大きさのため、売る場合も搬出の方法を先に決めておく必要があります。",
  },
  {
    q: "売れなかった場合はどう処分しますか？",
    a: "多くの自治体で粗大ごみとして出せます。手数料はお住まいの自治体のページで確認してください。オルガン全般の処分費用の例は「オルガンの買取」の記事で紹介しています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "リードオルガンの買取", href: "/articles/reed-organ-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/reed-organ-kaitori/" },
  title: "リードオルガン（足踏みオルガン）の買取相場｜落札22件と楽器店の対応【2026年11月】",
  description:
    "リードオルガン（足踏みオルガン）の買取相場を、ヤフオクの落札22件をヤマハ・ベビーオルガン・ほかのメーカー別に集計して整理しました。島村楽器・イシバシ楽器がオルガンを買取対象外としている点や、引取限定の出品が多い理由も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "リードオルガン（足踏みオルガン）の買取相場｜落札22件と楽器店の対応【2026年11月】",
    description: "足踏みオルガンの落札価格と、オルガンを扱わない楽器店・引取限定が多い理由。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "リードオルガン（足踏みオルガン）の買取相場｜落札22件と楽器店の対応",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/reed-organ-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "リードオルガンの買取", item: "https://gakkikaitori-biyori.com/articles/reed-organ-kaitori/" },
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
          リードオルガン（足踏みオルガン）の買取相場｜落札22件と楽器店の対応
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得したヤフオクの落札データを当サイトで集計し、業者・メーカーの情報は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            足踏み式のリードオルガンは、ヤフオクの落札22件のうち<strong>13件が5,000円以下</strong>でした（中央値3,750円）。
            一方で、型式や年代が分かるヤマハの3件は35,000円、西川風琴製作所のベビーオルガンは66,000円、米国 KIMBALL の1台は299,800円で落札されています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            <strong>島村楽器・イシバシ楽器はオルガンを買取の対象外</strong>としており、楽器の買取屋さんが公開しているオルガンの事例にもリードオルガンはありません。
            22件中8件が「引取限定」の出品で、搬出できるかどうかが売り方を左右します。
          </p>
        </div>

        <h2 id="souba" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（種類別・当サイト集計）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">種類</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">落札価格</th>
                <th className="text-left px-4 py-3 font-medium">内容</th>
              </tr>
            </thead>
            <tbody>
              {Y_GROUPS.map((g) => (
                <tr key={g.group} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{g.group}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{g.n}件</td>
                  <td className="px-4 py-3">{g.prices}</td>
                  <td className="px-4 py-3">{g.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          1円で落札された出品が3件あり、いずれも「アンティーク」「レトロ」など、動作や型式の説明がほとんどない出品でした。
          「出音確認済み」と書かれたヤマハの1台は5,000円で、音が出るかどうかよりも、型式・年代・製造元が分かるかどうかで値段が分かれていました。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          集計方法：ヤフオクの落札済み検索「リードオルガン」「足踏みオルガン」の結果（{ASOF}取得・重複を除いて27件）からタイトルを1件ずつ確認し、
          足踏み式のオルガン本体22件だけを残しました。CD・書籍・手回しオルガン（オルガネット）・ハルモニウムは除外しています。
          落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="buyers" className="text-xl font-bold mt-12 mb-4">楽器店・買取業者の対応</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">公式サイトの記載</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">「買取取り扱いのない楽器」に「オルガン」を掲載</td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">店頭買取の「お取り扱いできない物」に「オルガン」を掲載</td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">
                  オルガンの買取事例8件（27,000円〜270,000円）を公開。メーカーはハモンド5件・カワイ・ローランド・ヤマハで、足踏み式のリードオルガンの事例はなし
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ヤマハは、1887年に創業者の山葉寅楠が浜松で壊れたオルガンを修理し、国産オルガンの製作に成功したことをグループの始まりとしています。
          古いヤマハ（日本楽器）の足踏みオルガンが多く出回っているのはこのためで、ヤフオクの落札22件のうち16件がヤマハでした（ベビーオルガン5件を含む）。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 楽器買取のご案内</a>・
          <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器 店頭買取</a>・
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん オルガンの買取事例</a>・
          <a href={YAMAHA_HISTORY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ 歴史</a>
          （いずれも{ASOF}取得）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>製造元と型式</strong>：落札データでは、型式や年代が書かれたヤマハは35,000円、書かれていないものは1万円未満が中心でした。本体の内側や背面の銘板・ラベルを確認します。
          </li>
          <li>
            <strong>大きさと搬出経路</strong>：通常サイズの足踏みオルガンは宅配で送れないことが多く、落札でも8件が引取限定でした。設置場所から玄関までの経路と、車で運べるかを確かめておきます。
          </li>
          <li>
            <strong>音とペダル</strong>：ふいごを動かすペダル・鍵盤・ストップの状態を、写真や動画で伝えられるようにしておきます。
          </li>
          <li>
            <strong>楽器店に断られた場合</strong>：大型楽器を出張で引き取る業者に相談するか、個人売買・粗大ごみでの処分を比べます。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          オルガン全般の売り先と自治体の処分費用の例は<Link href="/articles/organ-kaitori/" className="text-accent underline">オルガンの買取</Link>、
          ハモンドは<Link href="/articles/hammond-organ-kaitori/" className="text-accent underline">ハモンドオルガンの買取</Link>、
          エレクトーンは<Link href="/articles/electone-kaitori/" className="text-accent underline">エレクトーン買取</Link>で整理しています。
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
          currentSlug="reed-organ-kaitori"
          relatedSlugs={["piano-kaitori", "organ-kaitori", "hammond-organ-kaitori", "electone-kaitori", "gakki-shucchou-kaitori", "gakki-shobun-houhou"]}
        />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-15）「ピアノの買取屋さん 評判」。
// ⚠️ 本文の事実はすべて公式サイト piano-kaitoriyasan.com（2026-11-15 取得・HTMLコメント内の文言は除外）から。
//   https://piano-kaitoriyasan.com/lp/ （サービス内容・FAQ・出張対応エリア）
//   https://piano-kaitoriyasan.com/lp-contact/ （フッターの運営会社・古物商許可）
//   運営会社・許可番号が楽器の買取屋さん（gakkikaitori.co.jp フッター）と同じであることは同日に両サイトで確認。
//   口コミ・評価・評判の要約は載せない（第三者の投稿を転載しない方針）。期間限定キャンペーンも載せない。

const ASOF = "2026年11月15日";
const LP = "https://piano-kaitoriyasan.com/lp/";
const CONTACT = "https://piano-kaitoriyasan.com/lp-contact/";
const CAA = "https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/";

const AREA = "東京、神奈川、千葉、埼玉、群馬、栃木、茨城、静岡、山梨、長野、大阪、兵庫、京都、奈良、和歌山、滋賀、愛知、三重、岐阜、富山、石川、福井、広島、岡山、香川、愛媛、徳島、高知、福岡、熊本、大分、佐賀、長崎";

const FACTS: { k: string; v: string }[] = [
  { k: "運営会社", v: "UNISOUND 株式会社（神奈川県横浜市中区新山下3-4-17 カリカチュアビル1F）" },
  { k: "古物商許可", v: "神奈川県公安委員会 第451310006356号" },
  { k: "買取の方法", v: "ピアノは出張買取のみ（よくある質問に「ピアノの買取の場合は「出張買取」のみ」と記載）" },
  { k: "対象のピアノ", v: "グランドピアノ・アップライトピアノ。メーカーを問わず、古いもの・壊れているもの・欠品があるものも相談可と記載" },
  { k: "費用", v: "出張・査定・搬出は基本無料。クレーン専用車を使う作業などの特殊作業は特殊作業料金がかかる。メーカー・モデル・状態により引き取りに費用が発生する場合がある（金額の記載なし）" },
  { k: "支払い", v: "査定額に納得した場合、搬出日にその場で現金" },
  { k: "キャンセル", v: "査定額に満足できなかった場合、キャンセル料・手数料はかからない" },
  { k: "本人確認", v: "全員に本人確認書類の提示が必要（運転免許証など。住所変更の届出が済んだもの・コピー不可）" },
  { k: "出張の早さ", v: "近隣なら最短30分で出張と記載" },
];

const FAQ = [
  {
    q: "ピアノの買取屋さんの運営会社はどこですか？",
    a: `公式サイトのフッターに、運営会社 UNISOUND 株式会社（神奈川県横浜市中区新山下）、古物商許可 神奈川県公安委員会 第451310006356号と記載されています（${ASOF}確認）。この運営会社名と許可番号は、楽器全般を扱う「楽器の買取屋さん」の公式サイトの記載と同じです。`,
  },
  {
    q: "ピアノの買取屋さんは全国に出張してくれますか？",
    a: `公式サイトには「【全国】出張対応エリア」として33都府県（${AREA}）が並んでいます。北海道・東北・新潟・鳥取・島根・山口・宮崎・鹿児島・沖縄はこの一覧にありません。一覧にない地域は申込み前に問い合わせて確認してください。`,
  },
  {
    q: "搬出費用はかかりますか？",
    a: "公式サイトでは出張・査定・搬出は「基本無料」とされています。ただし、クレーン専用車を使う作業などの特殊作業には特殊作業料金がかかり、メーカー・モデル・状態によっては引き取りに費用が発生する場合があると記載されています。金額は掲載されていないため、見積もりの段階で費用の有無を確認してください。",
  },
  {
    q: "電子ピアノやエレクトーンも買い取ってもらえますか？",
    a: `${ASOF}時点の公式サイトには、電子ピアノ・エレクトーンについての記載がありません（対象として書かれているのはグランドピアノ・アップライトピアノです）。「ピアノ以外でもご不要なものがあれば買取」との記載はあるため、型番を伝えて問い合わせてください。`,
  },
  {
    q: "評判や口コミはどこで確認できますか？",
    a: "当サイトでは第三者の口コミ・評価を転載していません。評判を調べる場合は、投稿の日付と、ピアノの出張買取についての投稿かどうかを確認してください。あわせて、契約前に運営会社・古物商許可番号・費用の条件を公式サイトで確認することをおすすめします。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ピアノの買取屋さん", href: "/articles/piano-no-kaitoriyasan/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/piano-no-kaitoriyasan/" },
  title: "ピアノの買取屋さんの評判を調べる前に｜運営会社・出張エリア・費用の条件を公式情報で確認【2026年11月】",
  description:
    "ピアノの買取屋さんの運営会社（UNISOUND株式会社）、古物商許可番号、出張対応エリア33都府県、搬出費用と特殊作業料金、支払い方法を公式サイトの記載で整理しました。口コミの転載は行っていません。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ピアノの買取屋さんの運営会社・出張エリア・費用の条件【2026年11月】",
    description: "公式サイトに記載の運営会社・古物商許可・出張対応エリア・費用・支払い方法。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ピアノの買取屋さんの評判を調べる前に｜運営会社・出張エリア・費用の条件を公式情報で確認",
        datePublished: "2026-11-15",
        dateModified: "2026-11-15",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/piano-no-kaitoriyasan/",
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
          { "@type": "ListItem", position: 3, name: "ピアノの買取屋さん", item: "https://gakkikaitori-biyori.com/articles/piano-no-kaitoriyasan/" },
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
          ピアノの買取屋さんの評判を調べる前に｜運営会社・出張エリア・費用の条件を公式情報で確認
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={LP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            ピアノの買取屋さん 公式サイト
          </a>
          を確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            「ピアノの買取屋さん」は、<strong>UNISOUND 株式会社</strong>が運営するピアノの出張買取サービスです。
            公式サイトに記載の運営会社名と古物商許可番号（神奈川県公安委員会 第451310006356号）は、楽器全般を扱う
            <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>
            と同じです。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ピアノは<strong>出張買取のみ</strong>で、出張・査定・搬出は「基本無料」、代金は<strong>搬出日にその場で現金</strong>と案内されています。
            ただし、クレーン作業などの特殊作業や、メーカー・モデル・状態によっては費用が発生する場合があり、その金額は公開されていません。
          </p>
        </div>

        <h2 id="overview" className="text-xl font-bold mt-12 mb-4">公式サイトに記載されている内容</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              {FACTS.map((f) => (
                <tr key={f.k} className="border-b border-warm-200 last:border-0">
                  <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-36">{f.k}</th>
                  <td className="px-4 py-3 leading-relaxed">{f.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={LP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            ピアノの買取屋さん 公式サイト
          </a>
          ・
          <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            お問い合わせページ（フッターの運営会社・古物商許可）
          </a>
          （{ASOF}取得）。条件は変更されることがあるため、申込み前に公式サイトで最新の内容をご確認ください。
        </p>

        <h2 id="area" className="text-xl font-bold mt-12 mb-4">出張対応エリア（33都府県）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式サイトには「【全国】出張対応エリア」の見出しの下に、次の33都府県が並んでいます。
        </p>
        <p className="text-sm leading-relaxed bg-white border border-warm-200 p-4 mb-4">{AREA}</p>
        <p className="text-sm leading-relaxed mb-10">
          見出しは「全国」ですが、<strong>北海道・東北6県・新潟・鳥取・島根・山口・宮崎・鹿児島・沖縄は一覧に含まれていません</strong>。
          これらの地域にお住まいの場合は、対応できるかを申込み前に確認してください。
        </p>

        <h2 id="check" className="text-xl font-bold mt-12 mb-4">申込み前に確かめておきたい点</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li>
            <strong>買取方法の記載</strong>：公式サイトには「選べる３つの買取方法」との記載がある一方、よくある質問では「ピアノの買取の場合は「出張買取」のみ」とされています。ピアノを売る場合は出張買取として考えてください。
          </li>
          <li>
            <strong>費用が発生する条件</strong>：「基本無料」の例外として、クレーン専用車を使う作業などの特殊作業料金と、メーカー・モデル・状態による引き取り費用が挙げられています。2階からの搬出や設置場所の条件がある場合は、見積もりの段階で費用の有無を確認してください。
          </li>
          <li>
            <strong>型番・製造番号</strong>：見積もりの精度が上がります。ヤマハのピアノであれば
            <Link href="/articles/yamaha-piano-seizou-bangou/" className="text-accent underline">製造番号で製造年を調べる方法</Link>
            も参考になります。
          </li>
          <li>
            <strong>クーリング・オフ</strong>：自宅での出張買取は特定商取引法の「訪問購入」に当たり、書面を受け取った日から8日以内であればクーリング・オフができます（
            <a href={CAA} target="_blank" rel="noopener noreferrer" className="text-accent underline">消費者庁 特定商取引法ガイド</a>
            ）。訪問買取の注意点は<Link href="/articles/gakki-kaitori-sagi/" className="text-accent underline">楽器買取のトラブル事例</Link>にまとめています。
          </li>
        </ul>
        <p className="text-sm leading-relaxed mb-8">
          ピアノの買取全般は<Link href="/articles/piano-kaitori/" className="text-accent underline">ピアノ買取の記事</Link>、
          業者の比較は下のページをご覧ください。
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
          currentSlug="piano-no-kaitoriyasan"
          relatedSlugs={["piano-kaitori", "gakki-no-kaitoriyasan", "grand-piano-kaitori", "yamaha-piano-seizou-bangou", "gakki-kaitori-sagi"]}
        />
      </article>
    </>
  );
}

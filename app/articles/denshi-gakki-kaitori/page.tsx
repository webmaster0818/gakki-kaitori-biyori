import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-18）「電子楽器 買取」。
// ⚠️ 本文の事実はすべて各社の公式サイト（2026-11-18 取得・HTMLコメントと script は除外）から。
//   島村楽器 https://www.shimamura.co.jp/used/ （買取取り扱いのない楽器）
//   イケベ楽器 https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx （買取時のご注意事項・預かり代行販売・店頭）
//   ハードオフ 宅配買取 https://takuhai-kaitori.hardoff.co.jp/not-covered （楽器の条件）
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/ ・/kaitori/tentou/ （Q&A・取り扱いできない物）
//   クロサワ楽器 https://www.kurosawagakki.com/kaikuro/kiyaku.html ・/kaikuro/ （買取規約・PSE）
//   楽器の買取屋さん https://gakkikaitori.co.jp/faq/
//   ロッキン https://www.rockin.co.jp/buy/ （委託販売できない商品）
//   7社の条件を同じ項目に並べた比較表は当サイトが作成したもの。買取相場の金額は書かない。口コミ・評価は載せない。

const ASOF = "2026年11月18日";

const SRC = {
  shimamura: "https://www.shimamura.co.jp/used/",
  ikebe: "https://www.ikebe-gakki.com/Page/reuse_purchase_method.aspx",
  hardoff: "https://takuhai-kaitori.hardoff.co.jp/not-covered",
  ishibashi: "https://www.ishibashi.co.jp/kaitori/",
  ishibashiTentou: "https://www.ishibashi.co.jp/kaitori/tentou/",
  kurosawa: "https://www.kurosawagakki.com/kaikuro/kiyaku.html",
  kurosawaTop: "https://www.kurosawagakki.com/kaikuro/",
  gk: "https://gakkikaitori.co.jp/faq/",
  rockin: "https://www.rockin.co.jp/buy/",
};

// 同じ項目で7社をそろえた比較（当サイト作成）。「記載なし」＝確認したページに該当の記載が見当たらないもの。
const ROWS: { name: string; pse: string; soft: string; other: string; src: string[] }[] = [
  {
    name: "島村楽器",
    pse: "PSE取得のないデジタル機器は買取取り扱いなし",
    soft: "記載なし",
    other: "オルガンも買取取り扱いなし。製造年が新しいものほど買取価格が高くなる傾向と案内",
    src: ["shimamura"],
  },
  {
    name: "イケベ楽器",
    pse: "PSEマークまたは旧法表示のない並行輸入品・古い電子楽器は買取できない場合あり。預かり代行販売は正規輸入品のみで、PSEマークのない機材は不可",
    soft: "記載なし",
    other: "店頭でも鍵盤・デジタル機材・レコーディング機材・DJ機材は動作確認のため原則預かり。電子ピアノなど一部は買取できない場合あり",
    src: ["ikebe"],
  },
  {
    name: "ハードオフ",
    pse: "記載なし",
    soft: "音楽制作ソフトはグループ全体で取り扱いなし",
    other: "ライセンス解除が必要な楽器機材は宅配買取の対象外（店頭・出張では扱える場合あり）。電波法に触れる周波数のワイヤレス機材は取り扱いなし",
    src: ["hardoff"],
  },
  {
    name: "イシバシ楽器",
    pse: "記載なし",
    soft: "音楽制作ソフトはライセンスや動作環境の確認ができないため取り扱いなし",
    other: "MIDI鍵盤・コントローラー・アウトボードエフェクターなどPC周辺機器は買取。エレクトーン・オルガン・オープンデッキMTRは店頭で取り扱いなし",
    src: ["ishibashi", "ishibashiTentou"],
  },
  {
    name: "クロサワ楽器",
    pse: "電源コード付きの商品（アンプ・エフェクター・キーボード・電子ピアノ・シンセ等）でPSE表示がないものは問い合わせ",
    soft: "DTM用ソフトウェアは買取不可",
    other: "エレクトーン・オルガンも買取不可。電子楽器のユーザープリセット等のデータは利用者が消去",
    src: ["kurosawa"],
  },
  {
    name: "楽器の買取屋さん",
    pse: "記載なし",
    soft: "音楽制作ソフトはライセンスや動作環境の確認ができないため原則買取なし",
    other: "動作確認に必要な専用ACアダプター等がない場合は受けられないことあり。MIDI鍵盤などPC周辺機器は買取",
    src: ["gk"],
  },
  {
    name: "ロッキン",
    pse: "記載なし",
    soft: "ソフトウェア・DTM音源は委託販売の対象外",
    other: "アンプ・エフェクター・ピアノ等の大型商品も委託販売の対象外（買取の可否は別）",
    src: ["rockin"],
  },
];

const SRC_LABEL: Record<string, string> = {
  shimamura: "島村楽器 中古・買取",
  ikebe: "イケベ楽器 買取方法",
  hardoff: "ハードオフ宅配買取 買取できないもの",
  ishibashi: "イシバシ楽器 楽器買取",
  ishibashiTentou: "イシバシ楽器 店頭買取",
  kurosawa: "クロサワ楽器 買取規約",
  gk: "楽器の買取屋さん よくある質問",
  rockin: "ロッキン 買取・委託販売",
};

const countPse = ROWS.filter((r) => r.pse !== "記載なし").length;
const countSoft = ROWS.filter((r) => r.soft !== "記載なし").length;

const FAQ = [
  {
    q: "PSEマークのない古い電子楽器は売れますか？",
    a: `${ASOF}に確認した7社のうち${countPse}社が、公式サイトでPSE表示について触れていました。島村楽器はPSE取得のないデジタル機器を買取の対象外としており、イケベ楽器はPSEマークまたは旧法表示のない古い電子楽器を買取できない場合があるとしています。クロサワ楽器はPSE表示のない電源コード付き商品について問い合わせるよう案内しています。売る前に本体や電源アダプターの表示を確認し、表示がなければ申し込み時に伝えてください。`,
  },
  {
    q: "DTMソフトやソフトシンセは楽器店に売れますか？",
    a: `確認した7社のうち${countSoft}社が、音楽制作ソフト（DTMソフト・ソフトシンセ・DTM音源）を買取または委託販売の対象外としていました。理由として、イシバシ楽器と楽器の買取屋さんはライセンスや動作環境の確認ができないことを挙げています。一方、MIDI鍵盤やコントローラーなどのハードウェアは、イシバシ楽器と楽器の買取屋さんが買い取ると案内しています。`,
  },
  {
    q: "電源アダプターがなくても電子楽器は売れますか？",
    a: "楽器の買取屋さんは、動作確認に必要な専用ACアダプター等がない場合は受けられないことがあると案内しています。イシバシ楽器・イケベ楽器・楽器の買取屋さんは付属品の欠品や状態で査定額が変わると案内しているため、電源・ペダル・譜面台などは本体とそろえて査定に出してください。",
  },
  {
    q: "店頭に持ち込めばその場で査定してもらえますか？",
    a: "イケベ楽器は、鍵盤・デジタル機材・レコーディング機材・DJ機材は動作確認の関係上、店頭でも原則お預かりになると案内しています。電子楽器はその場で結果が出ない場合があるため、時間に余裕をもって持ち込んでください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "電子楽器の買取", href: "/articles/denshi-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-gakki-kaitori/" },
  title: "電子楽器の買取で断られる条件は？PSE表示・DTMソフト・付属品の扱いを楽器店7社の公式情報で比較【2026年11月】",
  description:
    "シンセサイザー・電子ピアノ・電子ドラムなど電子楽器の買取について、PSE表示のない機器、DTMソフト、電源アダプターなどの付属品、ライセンス解除の扱いを、島村楽器・イケベ楽器・ハードオフ・イシバシ楽器・クロサワ楽器・楽器の買取屋さん・ロッキンの公式情報で比較しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "電子楽器の買取｜PSE表示・DTMソフト・付属品の扱いを7社で比較【2026年11月】",
    description: "電子楽器を売る前に確認したい各社の買取条件を、公式情報で比較。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "電子楽器の買取で断られる条件は？PSE表示・DTMソフト・付属品の扱いを楽器店7社の公式情報で比較",
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "電子楽器の買取", item: "https://gakkikaitori-biyori.com/articles/denshi-gakki-kaitori/" },
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
          電子楽器の買取で断られる条件は？PSE表示・DTMソフト・付属品の扱いを楽器店7社の公式情報で比較
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に各社の公式サイト（買取の案内・買取規約・よくある質問）を確認して記載しています。比較表は当サイトが同じ項目にそろえて作成したものです。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            シンセサイザー・電子ピアノ・電子ドラムなどの電子楽器は、楽器店や買取業者の多くが買取対象にしています。
            ただし電子楽器には、生楽器にはない断られ方が3つあります。<strong>PSE表示のない機器</strong>、<strong>DTMソフトなどのソフトウェア</strong>、<strong>動作確認に必要な電源や付属品の欠品</strong>です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            確認した7社のうち、PSE表示に触れていたのは{countPse}社、音楽制作ソフトを買取または委託の対象外としていたのは{countSoft}社でした。
            同じ「電子楽器」でも、MIDI鍵盤やコントローラーなどのハードウェアは買い取る業者があります。
          </p>
        </div>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">楽器店7社の条件の比較</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">会社</th>
                <th className="text-left px-4 py-3 font-medium">PSE表示</th>
                <th className="text-left px-4 py-3 font-medium">音楽制作ソフト</th>
                <th className="text-left px-4 py-3 font-medium">そのほかの条件</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{r.name}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{r.pse}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{r.soft}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          {Object.entries(SRC_LABEL).map(([k, label], i) => (
            <span key={k}>
              {i > 0 && "・"}
              <a href={SRC[k as keyof typeof SRC]} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{label}</a>
            </span>
          ))}
          （{ASOF}確認）。「記載なし」は、確認したページに該当の記載が見当たらなかったことを示し、買い取ることを意味するものではありません。
        </p>

        <h2 id="pse" className="text-xl font-bold mt-12 mb-4">PSE表示のない機器</h2>
        <p className="text-sm leading-relaxed mb-4">
          PSEマークは電気用品安全法にもとづく表示です。
          楽器店の公式サイトでは、<strong>島村楽器が「PSE取得の無いデジタル機器」を買取の対象外</strong>としています。
          イケベ楽器は「PSEマークまたは旧法表示のない並行輸入品・古い電子楽器」を買取できない場合があるとし、預かり代行販売では正規輸入品に限ったうえでPSEマークのない機材を受け付けていません。
          クロサワ楽器は、アンプ・エフェクター・キーボード・電子ピアノ・シンセ等の電源コード付き商品でPSE表示がないものは問い合わせるよう案内しています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          海外から個人で輸入した機材や、古い年代の電子楽器を売るときは、本体と電源アダプターの表示を事前に確認し、申し込みの段階で伝えると手戻りを防げます。
        </p>

        <h2 id="software" className="text-xl font-bold mt-12 mb-4">DTMソフト・ソフトシンセとライセンス</h2>
        <p className="text-sm leading-relaxed mb-4">
          ハードオフは音楽制作ソフトをグループ全体で取り扱わず、クロサワ楽器はDTM用ソフトウェアを買取不可としています。
          イシバシ楽器と楽器の買取屋さんは、<strong>ライセンスや動作環境の確認ができない</strong>ことを理由に音楽制作ソフトを扱わないと説明しています。ロッキンも、ソフトウェアとDTM音源を委託販売の対象外としています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ハードウェアでも、ハードオフの宅配買取は「ライセンス解除が必要な楽器機材」を対象外としています（店頭・出張では扱える場合があります）。
          ソフトとセットで販売された機材を売る場合は、ライセンスの登録状態を確認しておくと査定が進めやすくなります。
          MIDI鍵盤・コントローラーなどの機材の売り方は<Link href="/articles/midi-keyboard-kaitori/" className="text-accent underline">MIDIキーボードの買取</Link>にまとめています。
        </p>

        <h2 id="accessories" className="text-xl font-bold mt-12 mb-4">電源・付属品とデータの消去</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed mb-4">
          <li>楽器の買取屋さん：動作確認に必要な専用ACアダプター等がない場合は受けられないことがある</li>
          <li>イケベ楽器：鍵盤・デジタル機材・レコーディング機材・DJ機材は、店頭でも動作確認のため原則預かり</li>
          <li>クロサワ楽器：電子楽器のユーザープリセット等のデータは利用者の責任で消去する</li>
          <li>島村楽器：製造年が新しいものは買取価格が高くなる傾向と案内</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          電子楽器は動作の確認が査定の前提になるため、電源・ペダル・譜面台・専用スタンドなどの付属品は本体とそろえてください。
          クロサワ楽器の買取ページには「生産完了から3年以内の電子ピアノを買取強化中」と掲載されており（{ASOF}時点）、年式が新しいうちに売るほうが条件はよいと考えられます。
          電子ピアノの売り方は<Link href="/articles/denshi-piano-kaitori/" className="text-accent underline">電子ピアノの買取</Link>、
          故障した楽器は<Link href="/articles/kowareta-gakki-kaitori/" className="text-accent underline">壊れた楽器・古い楽器の買取</Link>をご覧ください。
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
          currentSlug="denshi-gakki-kaitori"
          relatedSlugs={["keyboard-kaitori", "denshi-piano-kaitori", "roland-td-kaitori", "midi-keyboard-kaitori", "dj-kizai-kaitori", "effector-kaitori", "kowareta-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

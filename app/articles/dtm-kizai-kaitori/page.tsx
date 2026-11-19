import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-20 深夜04時の回）「DTM機材 買取」。
// 一次データ: 島村楽器 買取価格検索 カテゴリー「音楽制作・配信機器」（cat=18）全509行（2026-11-20 取得）
//   ＝インターフェース284行・キーボードコントローラー192行・その他音楽制作・配信機器33行。A ランクの中央値・ブランド別・価格帯を当サイトで集計。
//   型番欄の「トランスファー処理必要」「トランスファーID必要」の行数も数えた。
// 業者の条件は各社公式（2026-11-20 取得・HTMLコメントと script 除外）:
//   イシバシ楽器 https://www.ishibashi.co.jp/kaitori/tentou/（コンピュータミュージック用ソフトは対象外・MIDI鍵盤/コントローラーは買取・ACアダプター欠品）
//   島村楽器 https://www.shimamura.co.jp/used/（PSE取得の無いデジタル機器・ケーブル/スタンド類は対象外、取り扱いに「DTM関連機材」）
//   楽器の買取屋さん https://gakkikaitori.co.jp/purchase/category/?big-cat=recording-equipment&small-cat=interface（事例10件）
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月20日";
const SHIMA_SEARCH = "https://www.shimamura.co.jp/used/search.html?cat=18&inst=&brand=&model=&num=100&pg=1";
const SHIMA_USED = "https://www.shimamura.co.jp/used/";
const ISHIBASHI = "https://www.ishibashi.co.jp/kaitori/tentou/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=recording-equipment&small-cat=interface";

const KINDS: { kind: string; rows: string; median: string; bands: string }[] = [
  {
    kind: "インターフェース（オーディオインターフェース）",
    rows: "284行",
    median: "22,000円",
    bands: "1万円未満67・1万〜3万円100・3万〜10万円71・10万円以上46",
  },
  {
    kind: "キーボードコントローラー（MIDIキーボード・パッド）",
    rows: "192行",
    median: "11,000円",
    bands: "1万円未満84・1万〜3万円83・3万〜10万円22・10万円以上3",
  },
  {
    kind: "その他音楽制作・配信機器",
    rows: "33行",
    median: "—（20行がソフトウェアで0円）",
    bands: "値段がついた13行は6,000〜37,000円（フィジカルコントローラー・配信用スイッチャー）",
  },
];

const IFACE_BRANDS: { brand: string; n: number; median: string; range: string }[] = [
  { brand: "Universal Audio", n: 60, median: "79,000円", range: "13,000〜445,000円" },
  { brand: "MOTU", n: 13, median: "70,000円", range: "19,000〜166,000円" },
  { brand: "Solid State Logic", n: 10, median: "32,000円", range: "7,000〜172,000円" },
  { brand: "ヤマハ", n: 12, median: "30,000円", range: "9,000〜66,000円" },
  { brand: "Apogee", n: 15, median: "25,000円", range: "4,000〜150,000円" },
  { brand: "Focusrite", n: 41, median: "22,000円", range: "5,000〜208,000円" },
  { brand: "audient", n: 14, median: "18,500円", range: "6,000〜191,000円" },
  { brand: "Arturia", n: 11, median: "16,000円", range: "5,000〜62,000円" },
  { brand: "PreSonus", n: 15, median: "12,000円", range: "5,000〜42,000円" },
  { brand: "Steinberg", n: 15, median: "8,000円", range: "5,000〜22,000円" },
];

const CTRL_BRANDS: { brand: string; n: number; median: string; range: string }[] = [
  { brand: "Studiologic", n: 7, median: "36,000円", range: "19,000〜65,000円" },
  { brand: "ROLI", n: 5, median: "29,000円", range: "21,000〜105,000円" },
  { brand: "Arturia", n: 41, median: "16,000円", range: "5,000〜91,000円" },
  { brand: "Novation", n: 34, median: "11,000円", range: "5,000〜38,000円" },
  { brand: "nektar", n: 9, median: "10,000円", range: "5,000〜24,000円" },
  { brand: "AKAI", n: 21, median: "9,000円", range: "4,000〜25,000円" },
  { brand: "KORG", n: 12, median: "6,000円", range: "5,000〜31,000円" },
  { brand: "Native Instruments", n: 15, median: "4,000円", range: "2,000〜37,000円" },
];

const FAQ = [
  {
    q: "DTM機材はまとめて楽器店に売れますか？",
    a: `オーディオインターフェースや MIDI キーボードは、島村楽器が「音楽制作・配信機器」として509行の買取価格を掲示しており（${ASOF}確認）、イシバシ楽器も MIDI 鍵盤・コントローラー・アウトボードエフェクターの買取を行うと案内しています。ただし DTM ソフトやソフトシンセは、イシバシ楽器が対象外としています。`,
  },
  {
    q: "DAW ソフトやプラグインは売れますか？",
    a: "イシバシ楽器は「音楽制作ソフトはライセンスや動作環境などのチェックができないため」取り扱わないと案内しています。島村楽器の買取価格検索でも、FabFilter・Vienna Symphonic Library などのソフトウェア20行は買取価格が0円と表示されていました。",
  },
  {
    q: "「トランスファー処理必要」「トランスファーID必要」とは何ですか？",
    a: "島村楽器の買取価格検索で、Universal Audio のインターフェース33行に「トランスファー処理必要」、Native Instruments のコントローラー15行に「トランスファーID必要」と型番に書き添えられています。ライセンスの移行（トランスファー）に関する注記で、売る前にメーカーでの手続き方法を確認しておくと安心です。",
  },
  {
    q: "電源アダプターやケーブルがなくても売れますか？",
    a: "イシバシ楽器は、動作チェックに必要なもの（専用の ACアダプター等）が欠品している場合は買取できない場合があると案内しています。島村楽器はケーブル・スタンド類などの周辺アクセサリーを単体では買い取っていません。",
  },
];

function BrandTable({ rows }: { rows: { brand: string; n: number; median: string; range: string }[] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-warm-200">
        <thead className="bg-warm-50">
          <tr>
            <th className="text-left px-4 py-3 font-medium">ブランド</th>
            <th className="text-left px-4 py-3 font-medium">掲示行数</th>
            <th className="text-left px-4 py-3 font-medium">Aランクの中央値</th>
            <th className="text-left px-4 py-3 font-medium">Aランクの範囲</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.brand} className="border-t border-warm-200">
              <td className="px-4 py-3 font-medium">{r.brand}</td>
              <td className="px-4 py-3">{r.n}行</td>
              <td className="px-4 py-3">{r.median}</td>
              <td className="px-4 py-3">{r.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "DTM機材の買取", href: "/articles/dtm-kizai-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/dtm-kizai-kaitori/" },
  title: "DTM機材の買取相場｜島村楽器の掲示509行をインターフェース・MIDIキーボード別に集計【2026年11月】",
  description:
    "DTM機材の買取相場を、島村楽器の買取価格検索「音楽制作・配信機器」509行から、オーディオインターフェース・キーボードコントローラーのブランド別・価格帯別に集計しました。ソフトウェアやライセンス移行の扱い、付属品の条件も公式情報で確認しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "DTM機材の買取相場｜インターフェース・MIDIキーボードのブランド別【2026年11月】",
    description: "島村楽器の掲示509行の集計と、DTMソフト・ライセンス移行・付属品の扱い。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "DTM機材の買取相場｜島村楽器の掲示509行をインターフェース・MIDIキーボード別に集計",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/dtm-kizai-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "DTM機材の買取", item: "https://gakkikaitori-biyori.com/articles/dtm-kizai-kaitori/" },
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
          DTM機材の買取相場｜島村楽器の掲示509行をインターフェース・MIDIキーボード別に集計
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に取得した島村楽器の買取価格検索を当サイトで集計し、業者の条件は各社の公式サイトで確認しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            島村楽器の「音楽制作・配信機器」の掲示509行では、<strong>オーディオインターフェースの A ランク中央値が22,000円、キーボードコントローラーは11,000円</strong>でした。
            インターフェースは Universal Audio（60行・中央値79,000円）が突出し、コントローラーは半数近く（84行）が1万円未満です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            一方で<strong>DAW ソフトやプラグインは楽器店では売れない</strong>と考えておくのが確実です。イシバシ楽器は音楽制作ソフトを取り扱わず、島村楽器の検索でもソフトウェア20行は0円でした。
            売る前に、付属ソフトのライセンス移行（トランスファー）と電源アダプターの有無を確認しておきます。
          </p>
        </div>

        <h2 id="kinds" className="text-xl font-bold mt-12 mb-4">機材の種類別の掲示買取価格（島村楽器・Aランク）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">区分</th>
                <th className="text-left px-4 py-3 font-medium">掲示行数</th>
                <th className="text-left px-4 py-3 font-medium">Aランクの中央値</th>
                <th className="text-left px-4 py-3 font-medium">価格帯の内訳（行数）</th>
              </tr>
            </thead>
            <tbody>
              {KINDS.map((k) => (
                <tr key={k.kind} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{k.kind}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{k.rows}</td>
                  <td className="px-4 py-3">{k.median}</td>
                  <td className="px-4 py-3">{k.bands}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          B ランクは A の中央値で約8割（インターフェース83%・コントローラー82%）、C ランクは6割強（64%・62%）でした。
          掲示の最高額はインターフェースが Universal Audio Apollo x16 Gen2 Ultimate の445,000円、コントローラーが Ableton Push 3 Standalone の107,000円です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA_SEARCH} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 買取価格検索（音楽制作・配信機器）</a>
          （{ASOF}に全509行を取得）。同じ型番の色違いも1行として数えています。島村楽器は、正式な買取価格は楽器を預かって現物で決めると案内しています。
        </p>

        <h2 id="interface" className="text-xl font-bold mt-12 mb-4">オーディオインターフェースのブランド別（掲示10行以上）</h2>
        <BrandTable rows={IFACE_BRANDS} />
        <p className="text-sm leading-relaxed mb-4">
          同じブランドでも世代で差があり、Focusrite Scarlett 2i2 は Gen3 が5,000円、Gen4 が16,000円でした。Steinberg UR22C は7,000〜8,000円です。
          オーディオインターフェースの売り方は<Link href="/articles/audio-interface-kaitori/" className="text-accent underline">オーディオインターフェース買取ガイド</Link>でも整理しています。
        </p>
        <p className="text-xs text-warm-gray mb-10">集計方法：上と同じデータの「インターフェース」284行をブランド別に集計（{ASOF}取得）。</p>

        <h2 id="controller" className="text-xl font-bold mt-12 mb-4">キーボードコントローラーのブランド別（掲示5行以上）</h2>
        <BrandTable rows={CTRL_BRANDS} />
        <p className="text-sm leading-relaxed mb-4">
          Native Instruments は15行すべてに「トランスファーID必要」と書き添えられ、MASCHINE MK2・KOMPLETE KONTROL S49 MK2 などは A ランクでも2,000〜5,000円でした。値段がついているのは MASCHINE+（37,000円）・MASCHINE MK3（11,000円）など一部です。
          MIDI キーボードの選び方・売り方は<Link href="/articles/midi-keyboard-kaitori/" className="text-accent underline">MIDIキーボード買取ガイド</Link>にまとめています。
        </p>
        <p className="text-xs text-warm-gray mb-10">集計方法：上と同じデータの「キーボードコントローラー」192行をブランド別に集計（{ASOF}取得）。</p>

        <h2 id="conditions" className="text-xl font-bold mt-12 mb-4">ソフト・ライセンス・付属品の扱い</h2>
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
                  <a href={ISHIBASHI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">イシバシ楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">
                  「ソフトシンセ等のコンピュータミュージック用ソフト」は取り扱いなし（ライセンスや動作環境のチェックができないため）。PC周辺機器は MIDI 鍵盤・コントローラー・アウトボードエフェクターなどを買取。動作チェックに必要な専用 ACアダプター等が欠品していると買取できない場合あり
                </td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={SHIMA_USED} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">
                  取り扱い楽器に「DTM関連機材」を掲載。「PSE取得の無いデジタル機器」「ケーブル、スタンド類等の周辺アクセサリー類」は買取の取り扱いなし。代金は口座への入金のみ
                </td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">
                  「インターフェース」の買取事例10件（34,000〜67,000円・中間価格45,900円）を公開。「DAW・DTM」のカテゴリーは事例なし
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の買取価格検索では、Universal Audio の33行に「トランスファー処理必要」、Native Instruments の15行に「トランスファーID必要」と書かれていました。
          ライセンスの移行（トランスファー）に関する注記で、売る前にメーカーでの手続き方法を確認しておくと安心です。電子楽器全般の PSE 表示・ソフトの扱いは
          <Link href="/articles/denshi-gakki-kaitori/" className="text-accent underline">電子楽器の買取</Link>で7社を比べています。
        </p>
        <p className="text-xs text-warm-gray mb-10">出典：各社公式サイト（{ASOF}取得）。</p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">売る前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>型番と世代</strong>：Scarlett 2i2 の Gen3 と Gen4 で掲示が3倍違うように、世代表記（Gen・MK）まで確認します。</li>
          <li><strong>ライセンス</strong>：付属ソフトやプラグインのライセンスを移行できるか、メーカーのアカウントで確認しておきます。ソフト単体は楽器店では値段がつかないと考えておきます。</li>
          <li><strong>付属品</strong>：専用の電源アダプター・USB ケーブル・元箱をそろえます。ケーブル類だけでは買い取られません。</li>
          <li><strong>まとめて売る場合</strong>：インターフェース・コントローラー・モニタースピーカーなどを1回で査定に出すと、出張や宅配の手間を1回で済ませられます。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          シンセサイザーは<Link href="/articles/synthesizer-kaitori/" className="text-accent underline">シンセサイザー買取相場ガイド</Link>、
          ミキサーは<Link href="/articles/mixer-kaitori/" className="text-accent underline">ミキサー買取ガイド</Link>、
          DJ 機材は<Link href="/articles/dj-kizai-kaitori/" className="text-accent underline">DJ機材買取相場ガイド</Link>で整理しています。
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
          currentSlug="dtm-kizai-kaitori"
          relatedSlugs={["audio-interface-kaitori", "midi-keyboard-kaitori", "synthesizer-kaitori", "denshi-gakki-kaitori", "mixer-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

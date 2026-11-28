import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-28 20時の回）「電子ピアノ 寿命」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：メーカー公式（取扱説明書・サポートページ）の数字だけで書く。
// ⚠️ 事実の出典（2026-11-28 取得）:
//   ヤマハ＝P-145BT 取扱説明書 PDF「補修用性能部品の最低保有期間…製造終了後8年」・有寿命部品の例
//   カワイ＝電子楽器の修理依頼ページ「製造打切後5ヶ年間」
//   ローランド＝「補修対応に関して」（製造完了後6年〜8年）／「機種別経過年数＆修理対応期間一覧」（2026年11月現在）
//   カシオ＝修理サービスご利用規約 第12条の表（ピアノ8年・木製鍵盤ピアノ10年）
//   ローランド一覧の集計は当サイト：性能部品保有期間が8年の家庭用・ポータブル電子ピアノ系の型番（HP/HPi/LX/RP/F/DP/FP/GP/KF。色違いは別型番として数える）307型番
// 「電子ピアノの寿命は○年」という一般論の年数は書かない（メーカーの公式な記載がない）。

const ASOF = "2026年11月28日";

const MAKERS: { maker: string; period: string; note: string; src: string; srcName: string }[] = [
  {
    maker: "ヤマハ",
    period: "製造終了後8年",
    note: "電子ピアノ P-145BT の取扱説明書に「製品の機能を維持するために必要な部品の最低保有期間は、製造終了後8年」と記載",
    src: "https://data.yamaha.com/files/download/other_assets/4/2332824/P-145BT_owners_manual_Ja_A0.pdf",
    srcName: "P-145BT 取扱説明書（PDF）",
  },
  {
    maker: "カワイ",
    period: "製造打切後5年",
    note: "電子楽器の修理ページに「保証期間経過後の補修用性能部品の保有期間については、製造打切後5ヶ年間」と記載",
    src: "https://www.kawai.jp/support/service/ep/repair/",
    srcName: "電子楽器の修理｜修理依頼について",
  },
  {
    maker: "ローランド",
    period: "製造完了後6〜8年（機種による）",
    note: "保有期間は製品に付属の保証書に記載。機種別の一覧では家庭用の電子ピアノの多くが8年",
    src: "https://www.roland.com/jp/support/service_repair/information/",
    srcName: "補修対応に関して",
  },
  {
    maker: "カシオ",
    period: "生産終了後8年（木製鍵盤ピアノは10年）",
    note: "修理サービスご利用規約の表で「電子楽器（ピアノ、ドラム、カラオケ…）」8年、「電子楽器（木製鍵盤ピアノ）」10年",
    src: "https://casio.jp/agreement/repair/terms/",
    srcName: "修理サービスご利用規約",
  },
];

// ローランド「機種別経過年数＆修理対応期間一覧」（2026年11月現在）を当サイトで集計
const ROLAND: { end: string; total: number; ok: number; ng: number; other: string }[] = [
  { end: "2014年以前", total: 175, ok: 0, ng: 175, other: "" },
  { end: "2015年", total: 10, ok: 0, ng: 10, other: "" },
  { end: "2016年", total: 9, ok: 0, ng: 9, other: "" },
  { end: "2017年", total: 9, ok: 0, ng: 9, other: "" },
  { end: "2018年", total: 4, ok: 1, ng: 3, other: "" },
  { end: "2019年", total: 17, ok: 14, ng: 3, other: "" },
  { end: "2020年", total: 10, ok: 8, ng: 0, other: "△2（FP-30）" },
  { end: "2022〜2023年", total: 19, ok: 19, ng: 0, other: "" },
  { end: "製造中", total: 54, ok: 54, ng: 0, other: "" },
];

const FAQ = [
  {
    q: "電子ピアノの寿命は何年ですか？",
    a: `メーカー各社は「寿命○年」という形では公表していません。公表しているのは、修理に必要な部品（補修用性能部品）を製造終了後に何年保有するかで、ヤマハは8年、カワイは5年、ローランドは6〜8年（機種による）、カシオはピアノで8年（木製鍵盤ピアノは10年）です（${ASOF}確認）。部品の保有期間が過ぎると、故障しても修理できない場合が出てきます。`,
  },
  {
    q: "保有期間は購入してからの年数ですか？",
    a: "いいえ。4社とも起算点は「製造終了（製造打切・製造完了・生産終了）」です。同じ型番が長く販売されていれば、購入から8年以上たっても修理を受け付けている場合があり、逆に販売終了間際に購入した場合は早く期間が終わります。",
  },
  {
    q: "自分の電子ピアノが修理できるか調べる方法はありますか？",
    a: "ローランドは「機種別経過年数＆修理対応期間一覧」で、型番ごとに修理対応の可否（〇／×）、発売年、製造完了年、性能部品の保有期間を公開しています。そのほかのメーカーは、型番を控えたうえでサポート窓口に問い合わせるのが確実です。型番・製造年は本体背面や鍵盤の下に貼られたラベルで確認できる、と島村楽器の買取案内に記載があります。",
  },
  {
    q: "修理できなくなった電子ピアノは売れますか？",
    a: "業者の基準によります。島村楽器の出張買取は「製造から8年以上経過しているもの」を買取できないとしており、ブックオフも「製造から5年以上経過した電子ピアノ」を買取対象外としています。一方、高く売れるドットコムは製造から5年ほどを目安としつつ、それ以上でも相談を受け付けています。詳しくは古い電子ピアノの買取のページにまとめています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "電子ピアノの寿命", href: "/articles/denshi-piano-jumyou/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-jumyou/" },
  title: "電子ピアノの寿命は何年？メーカー4社の部品保有期間とローランド307型番の修理受付状況【2026年11月】",
  description:
    "電子ピアノの「寿命」の目安になる補修用性能部品の保有期間を、ヤマハ（8年）・カワイ（5年）・ローランド（6〜8年）・カシオ（8年／木製鍵盤10年）の公式記載で比較。ローランドの機種別一覧307型番を製造完了年別に集計し、修理受付が終わる時期を示しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "電子ピアノの寿命は何年？メーカー4社の部品保有期間【2026年11月】",
    description: "補修用性能部品の保有期間を4社の公式記載で比較。ローランド307型番の修理受付状況を集計。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "電子ピアノの寿命は何年？メーカー4社の部品保有期間とローランド307型番の修理受付状況",
        datePublished: "2026-11-28",
        dateModified: "2026-11-28",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-jumyou/",
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
          { "@type": "ListItem", position: 3, name: "電子ピアノの寿命", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-jumyou/" },
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
          電子ピアノの寿命は何年？メーカー4社の部品保有期間とローランド307型番の修理受付状況
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          各メーカーの取扱説明書・サポートページ・利用規約を{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            電子ピアノのメーカーは「寿命○年」とは公表していません。目安になるのは、修理に使う部品をどれだけの期間保有するかという
            <strong>補修用性能部品の保有期間</strong>で、<strong>ヤマハ8年・カワイ5年・ローランド6〜8年・カシオ8年（木製鍵盤ピアノは10年）</strong>です。起算点はいずれも購入日ではなく<strong>製造終了</strong>です。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ローランドが公開している機種別の一覧を当サイトで集計すると、保有期間8年の電子ピアノ系307型番のうち、
            <strong>製造完了が2017年以前の203型番はすべて修理受付が終了</strong>していました。製造完了から8年前後が、修理して使い続けられるかどうかの分かれ目です。
          </p>
        </div>

        <h2 id="makers" className="text-xl font-bold mt-12 mb-4">メーカー4社の補修用性能部品の保有期間</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">メーカー</th>
                <th className="text-left px-4 py-3 font-medium">保有期間</th>
                <th className="text-left px-4 py-3 font-medium">公式の記載</th>
              </tr>
            </thead>
            <tbody>
              {MAKERS.map((m) => (
                <tr key={m.maker} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{m.maker}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{m.period}</td>
                  <td className="px-4 py-3 leading-relaxed">
                    {m.note}（
                    <a href={m.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {m.srcName}
                    </a>
                    ）
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：表中のリンク先（{ASOF}確認）。ヤマハは機種ごとの取扱説明書に記載があり、表は電子ピアノ P-145BT の記載です。お使いの機種の取扱説明書・保証書もあわせてご確認ください。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          ヤマハの取扱説明書は、部品の保有期間とは別に<strong>「有寿命部品」</strong>として、ボリュームコントロール、スイッチ、ランプ、リレー類、接続端子、鍵盤機構部品、鍵盤接点などを挙げ、
          使用時間や使用環境により劣化しやすく、消耗に応じて交換が必要になると説明しています。鍵盤の反応が悪い、音が途切れるといった症状は、こうした部品の劣化で起きることがあります。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ローランドは、期間内であっても部品メーカー側の早期製造打ち切りなどで対応できなくなる場合があること、期間満了後でも故障の内容によっては補修できる場合があることを併記しています。
          保有期間は「この年数で使えなくなる」という意味ではなく、<strong>メーカーが修理を約束している期間の目安</strong>として読むのが正確です。
        </p>

        <h2 id="roland" className="text-xl font-bold mt-12 mb-4">ローランド307型番の修理受付状況（製造完了年別）</h2>
        <p className="text-sm leading-relaxed mb-4">
          ローランドの
          <a href="https://www.roland.com/jp/support/service_repair/1708080000/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            機種別経過年数＆修理対応期間一覧
          </a>
          （2026年11月現在）から、性能部品の保有期間が8年とされている家庭用・ポータブルの電子ピアノ系型番（HP・HPi・LX・RP・F・DP・FP・GP・KF の各シリーズ）を抜き出し、製造完了年ごとに修理対応の〇×を数えました。色違いの型番は別々に数えています。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">製造完了年</th>
                <th className="text-right px-4 py-3 font-medium">型番数</th>
                <th className="text-right px-4 py-3 font-medium">修理可能（〇）</th>
                <th className="text-right px-4 py-3 font-medium">受付終了（×）</th>
                <th className="text-left px-4 py-3 font-medium">その他</th>
              </tr>
            </thead>
            <tbody>
              {ROLAND.map((r) => (
                <tr key={r.end} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{r.end}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.total}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.ok}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.ng}</td>
                  <td className="px-4 py-3">{r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          集計：当サイト（{ASOF}取得）。一覧の凡例は「〇：修理可能」「×：修理受付終了」の2つで、FP-30の2型番は「△」と表示されています。製造完了年が「**」の型番は「製造中」に数えました。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>製造完了から9年以上</strong>たった型番（2017年以前）は、203型番すべてが受付終了でした。</li>
          <li><strong>2018〜2019年</strong>に製造完了した型番は、〇と×が混在しています。たとえば同じ2019年完了でも、HP603-A系・HP605・LX-7・LX-17 は〇、HP601 は×です（いずれも経過年数7年6ヶ月）。</li>
          <li>一覧の冒頭では、製造完了後<strong>6年でお預かり修理、8年で出張修理の受付期間が終了</strong>すると説明されています。大型の家庭用電子ピアノは出張修理の対象が多いため、8年が実質的な区切りになります。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          同じ一覧には型番ごとの発売年と製造完了年も載っているため、ローランドの電子ピアノは<strong>型番から製造時期の範囲を調べる</strong>ことにも使えます。
        </p>

        <h2 id="label" className="text-xl font-bold mt-12 mb-4">型番・製造年の確認方法</h2>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の
          <a href="https://www.shimamura.co.jp/used/gakki/digital-piano/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            電子ピアノ出張買取の案内
          </a>
          は、モデル・型名、製造年、製造番号（SERIAL No.）は、ピアノ背面や鍵盤の下部に貼られたラベルで確認できると説明しています。修理の問い合わせでも買取の査定でも、最初に聞かれる情報です。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-10">
          <li><strong>型番</strong>：CLP-745、HP704 など。色の記号（-PE、-WH 等）まで控えておくと照合が確実です</li>
          <li><strong>製造年</strong>：ラベルに年が書かれていれば控えます。島村楽器は買取の可否を「ラベルに表示された年数」で、年単位で判断するとしています</li>
          <li><strong>症状</strong>：音が出ない・一部の鍵盤が鳴らない・ペダルが効かないなど。修理見積もりにも買取の可否にも関わります</li>
        </ul>

        <h2 id="sell" className="text-xl font-bold mt-12 mb-4">修理と買い替え・売却の考え方</h2>
        <p className="text-sm leading-relaxed mb-4">
          部品の保有期間が残っている電子ピアノは、故障しても修理という選択肢があります。期間が過ぎた電子ピアノは修理できない可能性が高まり、同時に<strong>買取の条件からも外れやすくなります</strong>。
          {ASOF}時点の各社公式の記載では、島村楽器は製造から8年以上、ブックオフは製造から5年以上の電子ピアノを買取の対象外としています。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          買い替えを考え始めた段階で、型番と製造年を控えて査定に出しておくと、値段がつくうちに判断できます。年式による各社の条件の違いと、製造から8年以上たった電子ピアノの買取実績は
          <Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>
          にまとめました。機種別の買取相場は<Link href="/articles/denshi-piano-kaitori/" className="text-accent underline">電子ピアノ買取相場ガイド</Link>をご覧ください。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          値段がつかない場合の処分方法と費用は、
          <Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ手数料（5市区の比較）</Link>に掲載しています。
        </p>

        <p className="mb-12">
          <Link
            href="/articles/furui-denshi-piano-kaitori/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            古い電子ピアノの買取条件を見る
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
          currentSlug="denshi-piano-jumyou"
          relatedSlugs={["denshi-piano-kaitori", "furui-denshi-piano-kaitori", "denshi-piano-sodaigomi", "roland-denshi-piano-kaitori", "roland-kaitori", "yamaha-clavinova-kaitori", "kawai-piano-kaitori", "casio-kaitori", "kowareta-gakki-kaitori"]}
        />
      </article>
    </>
  );
}

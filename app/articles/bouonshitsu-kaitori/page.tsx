import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-25 深夜02時の回）「防音室 買取」。
// 一次情報（2026-11-25 取得）:
//   島村楽器 防音室の買取ページ https://www.shimamura.co.jp/used/gakki/soundproof/（対象モデル・出張エリア・買取できない条件・費用・支払い・公開実績5件）
//   三木楽器 MIKI MUSIC DESIGN+ 防音室買取 https://design.miki.co.jp/purchase/（対象モデルと発売年・買取できない商品・手順・支払い・対象地区）
//   楽器の買取屋さん 防音室の買取事例（2件）
//   ヤマハ 防音室 製品情報（定型タイプ 0.8〜4.3畳・移設可）
//   ヤフオクの落札済み検索「防音室」「アビテックス」（重複を除いて113件）→ ユニット型15件・簡易防音室50件を当サイトで分類・集計。
//     除外：吸音材・遮音シート・床材・テレカ・管楽器用消音器・カラオケ用マスク・ペット用・プレハブ・卓上ブース・メーカー不明。
// 口コミ・★・人物は載せない。

const ASOF = "2026年11月25日";
const SHIMA = "https://www.shimamura.co.jp/used/gakki/soundproof/";
const MIKI = "https://design.miki.co.jp/purchase/";
const KAITORIYA = "https://gakkikaitori.co.jp/purchase/category/?big-cat=audio-equipment&small-cat=soundproof-room";
const YAMAHA = "https://jp.yamaha.com/musical-instruments/soundproofing/products/index.html";

const CONDITIONS: { item: string; shima: string; miki: string }[] = [
  {
    item: "対象のブランド・モデル",
    shima: "ヤマハ（セフィーネII・セフィーネIIev・セフィーネNS・ウッディミニ・ウッディボックス）とカワイ（ナサールのユニット各タイプ）。簡易防音室を含むほかの商品は対象外",
    miki: "ヤマハのアビテックス（セフィーネNS・IIev・II・セフィーネ・アビテックスミニ・マイスタディ・ウッディミニ・ウッディボックス・マイルームの各シリーズ）と調音パネル。カワイ ナサール・だんぼっちなどヤマハ以外は取り扱いなし",
  },
  {
    item: "対象地域",
    shima: "ヤマハ：買取は沖縄県を除く全国、下取は全国。カワイ：東京・千葉・埼玉・神奈川・茨城・栃木・群馬",
    miki: "原則として近畿圏内（ほかの地域は相談）",
  },
  {
    item: "買取できない・できない場合がある条件",
    shima: "製造から11年以上経過、汚れ・傷・へこみ・においがひどいもの。喫煙・ペット使用・カビ・解体済みは買取不可",
    miki: "自由設計タイプ、掲載のない旧ユニットタイプ、屋外設置タイプ、防音ドア・サッシ、ローン支払い中・所有者が異なるもの",
  },
  {
    item: "解体・搬出の費用",
    shima: "出張料は基本無料。解体・搬出・運搬は利用者の負担で、諸費用を差し引いた額が買取価格。エレベーター・階段・クレーン作業などは有料",
    miki: "ヤマハ認定業者が解体・引き取り。査定額がつかない場合の処分は有料",
  },
  {
    item: "支払い",
    shima: "引き取りの2週間後を目安に口座振込",
    miki: "引き取り後1週間以内に口座振込",
  },
];

const UNIT: { label: string; n: string; median: string; note: string }[] = [
  { label: "ヤマハ（アビテックス・セフィーネ・ウッディ）", n: "13件", median: "101,000円", note: "40,000〜251,000円。3畳前後は241,001円・251,000円、セフィーネ 1.2畳 Dr-35 は166,000円" },
  { label: "カワイ（ナサール）", n: "2件", median: "—", note: "20,000円・50,000円" },
  { label: "ユニット型の合計", n: "15件", median: "82,000円", note: "14件が「解体済み」「引取限定」「エリア限定」のいずれか" },
];

const SIMPLE: { label: string; n: string; median: string }[] = [
  { label: "だんぼっち（神田産業）", n: "14件", median: "30,800円" },
  { label: "OTODASU（オトダス）", n: "10件", median: "62,650円" },
  { label: "ヤマハ DIY.M（組立型簡易防音室）", n: "4件", median: "29,500〜45,590円" },
  { label: "簡易防音室の合計", n: "50件", median: "34,900円" },
];

const SERIES: { name: string; code: string; years: string }[] = [
  { name: "セフィーネNS", code: "AMD", years: "2015年〜現行" },
  { name: "セフィーネIIev", code: "AMCV", years: "2010〜2015年" },
  { name: "セフィーネII", code: "AMC", years: "2007〜2015年" },
  { name: "セフィーネ", code: "AMB", years: "2005〜2008年" },
  { name: "アビテックスミニ", code: "AMA", years: "2002〜2005年" },
];

const SHIMA_RECORDS: { model: string; size: string; years: string; home: string; when: string }[] = [
  { model: "カワイ ナサール Dr-35", size: "1.5畳", years: "約5年", home: "一戸建て", when: "2021年9月" },
  { model: "ヤマハ セフィーネII Dr-35", size: "0.8畳", years: "約1年半", home: "マンション3F", when: "2021年7月" },
  { model: "カワイ ナサール Dr-35", size: "3.0畳", years: "約8年", home: "マンション1F", when: "2021年7月" },
  { model: "ヤマハ ウッディボックス Dr-35", size: "1.2畳", years: "約10年", home: "一戸建て", when: "2021年5月" },
  { model: "ヤマハ セフィーネNS Dr-40", size: "1.5畳", years: "約1年半", home: "一戸建て", when: "2021年3月" },
];

const FAQ = [
  {
    q: "だんぼっちなどの簡易防音室は買い取ってもらえますか？",
    a: `島村楽器は「簡易防音室を含む」対象モデル以外を買取対象外としています。三木楽器もカワイ ナサール・だんぼっちなどヤマハ以外の防音製品は取り扱いません（${ASOF}確認）。簡易防音室はヤフオクで50件の落札があり、中央値は34,900円でした。`,
  },
  {
    q: "古い防音室でも売れますか？",
    a: "島村楽器は製造から11年以上経過したものを「買取・下取できない場合がある」としています。2026年11月時点では、おおむね2015年以前の製造品がこれに当たります。三木楽器は旧品番を含むアビテックスを買取対象としており、2002〜2005年のアビテックスミニもモデル一覧に載っています。",
  },
  {
    q: "防音室を自分で解体してから売った方がよいですか？",
    a: "島村楽器は解体済みの防音室を買取不可としており、解体・搬出は専門の施工業者が行うと案内しています。エアコンは事前に取り外す必要があり、島村楽器では利用者側での手配が基本です。三木楽器はエアコンの取り外しや楽器の運搬も同時に請け負うと案内しています。",
  },
  {
    q: "買取代金はいつ受け取れますか？",
    a: "島村楽器は引き取りの2週間後を目安、三木楽器は引き取り後1週間以内に、いずれも口座振込です。島村楽器の買取価格は、解体・搬出・運搬などの諸費用を差し引いた額になります。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "防音室の買取", href: "/articles/bouonshitsu-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/bouonshitsu-kaitori/" },
  title: "防音室の買取｜島村楽器・三木楽器の買取条件と落札65件の価格【2026年11月】",
  description:
    "防音室の買取について、島村楽器と三木楽器の対象モデル・対象地域・買取できない条件（製造11年以上・解体済み・喫煙など）・解体費用・支払い時期を公式情報で比較しました。ヤフオクの落札からユニット型15件と簡易防音室50件の価格も集計しています。",
  openGraph: {
    images: ["/og-image.png"],
    title: "防音室の買取｜島村楽器・三木楽器の買取条件と落札65件の価格【2026年11月】",
    description: "買取対象はヤマハ・カワイのユニット型が中心。簡易防音室は対象外。落札はユニット型の中央値82,000円。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "防音室の買取｜島村楽器・三木楽器の買取条件と落札65件の価格",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/bouonshitsu-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "防音室の買取", item: "https://gakkikaitori-biyori.com/articles/bouonshitsu-kaitori/" },
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
          防音室の買取｜島村楽器・三木楽器の買取条件と落札65件の価格
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          買取の条件は{ASOF}に各社の公式サイトで確認し、落札価格は同日に取得したヤフオクのデータを当サイトで集計しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            楽器店の防音室買取は、<strong>ヤマハ（アビテックス）とカワイ（ナサール）のユニット型が対象</strong>です。
            島村楽器・三木楽器とも、だんぼっちなどの簡易防音室は対象に含めていません。島村楽器は<strong>製造から11年以上経過したもの</strong>や、喫煙・ペット使用・カビ・解体済みのものを買取できないとしています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤフオクの落札では、ユニット型15件の中央値が82,000円でした。ただし15件中14件が「解体済み」「引取限定」などの条件つきで、解体・運搬は落札者側の負担です。
            楽器店の買取では、解体・搬出・運搬の費用を差し引いた額が買取価格になります（島村楽器）。
          </p>
        </div>

        <h2 id="conditions" className="text-xl font-bold mt-12 mb-4">島村楽器と三木楽器の買取条件</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">項目</th>
                <th className="text-left px-4 py-3 font-medium">島村楽器</th>
                <th className="text-left px-4 py-3 font-medium">三木楽器（MIKI MUSIC DESIGN+）</th>
              </tr>
            </thead>
            <tbody>
              {CONDITIONS.map((r) => (
                <tr key={r.item} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{r.item}</td>
                  <td className="px-4 py-3">{r.shima}</td>
                  <td className="px-4 py-3">{r.miki}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は、LINE査定では写真を送ってから2営業日以内に買取価格の上限額を連絡するとしています。引き上げは同社指定の業者が行い、作業時間は大きさによりおよそ3〜4時間です。
          出張先は本人確認ができる自宅住所に限られます。防音室の買い替え時の下取は査定10%アップ、同社で購入した商品は査定5%アップです。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 防音室の買取</a>・
          <a href={MIKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">三木楽器 MIKI MUSIC DESIGN+ 防音室買取</a>（{ASOF}確認）。
        </p>

        <h2 id="age" className="text-xl font-bold mt-12 mb-4">「製造から11年」に当たるモデル</h2>
        <p className="text-sm leading-relaxed mb-4">
          三木楽器の査定フォームには、ヤマハのユニット防音室のシリーズと販売期間が載っています。島村楽器の「製造から11年以上」を当てはめると、2026年11月時点ではおおむね2015年以前の製造品が該当し、セフィーネIIとセフィーネIIevは販売終了の年がちょうど境目です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">シリーズ</th>
                <th className="text-left px-4 py-3 font-medium">品番の頭</th>
                <th className="text-left px-4 py-3 font-medium">販売期間</th>
              </tr>
            </thead>
            <tbody>
              {SERIES.map((r) => (
                <tr key={r.name} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3">{r.code}</td>
                  <td className="px-4 py-3">{r.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={MIKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">三木楽器 中古防音室査定申し込みフォームのシリーズ選択肢</a>（{ASOF}確認）。
          製造年は個体ごとに異なるため、銘板や購入時の書類で確認します。島村楽器の基準は「買取・下取できない場合がある」で、一律に断るとは書かれていません。
        </p>

        <h2 id="auction" className="text-xl font-bold mt-12 mb-4">ヤフオクの落札価格（ユニット型・簡易防音室）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">ユニット型</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値</th>
                <th className="text-left px-4 py-3 font-medium">内訳</th>
              </tr>
            </thead>
            <tbody>
              {UNIT.map((r) => (
                <tr key={r.label} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.n}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{r.median}</td>
                  <td className="px-4 py-3">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">簡易防音室</th>
                <th className="text-left px-4 py-3 font-medium">件数</th>
                <th className="text-left px-4 py-3 font-medium">中央値・範囲</th>
              </tr>
            </thead>
            <tbody>
              {SIMPLE.map((r) => (
                <tr key={r.label} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                  <td className="px-4 py-3">{r.n}</td>
                  <td className="px-4 py-3">{r.median}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          ユニット型は、解体済みの部材を落札者が引き取る形の出品がほとんどでした。三木楽器は「ネットでの個人売買は解体・移送・再組立費用が予想以上に高額になり、トラブルが起こりがち」と案内しています。
          落札額だけで比べず、解体・運搬・再組立にかかる費用を含めて考える必要があります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：ヤフオクの落札済み検索「防音室」「アビテックス」（{ASOF}取得・重複を除いて113件）のうち、ユニット型15件と簡易防音室50件を当サイトで分類しました。
          吸音材・遮音シート・床材・管楽器用の消音器・カラオケ用マスク・ペット用防音室・プレハブ・卓上ブース・メーカー不明の出品は除外しています。落札価格は個人間・業者の販売価格であり、買取価格ではありません。
        </p>

        <h2 id="records" className="text-xl font-bold mt-12 mb-4">公開されている買取実績</h2>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器の防音室ページには2021年の買取実績が5件載っています。いずれも関東エリアで、状態は「良好」、<strong>買取価格の記載はありません</strong>。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">モデル</th>
                <th className="text-left px-4 py-3 font-medium">広さ</th>
                <th className="text-left px-4 py-3 font-medium">使用年数</th>
                <th className="text-left px-4 py-3 font-medium">住まい</th>
                <th className="text-left px-4 py-3 font-medium">買取時期</th>
              </tr>
            </thead>
            <tbody>
              {SHIMA_RECORDS.map((r, i) => (
                <tr key={i} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{r.model}</td>
                  <td className="px-4 py-3">{r.size}</td>
                  <td className="px-4 py-3">{r.years}</td>
                  <td className="px-4 py-3">{r.home}</td>
                  <td className="px-4 py-3">{r.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          楽器の買取屋さんの防音室カテゴリーには、価格つきの事例が2件あります（2018年10月 アビテックス 216,000円・千葉県／2018年10月 メーカー表記なし 69,300円・宮城県）。
          どちらも8年前の事例で、現在の査定額の目安にはなりません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={SHIMA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器 防音室 買取実績</a>・
          <a href={KAITORIYA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん 防音室の買取事例</a>（{ASOF}確認）。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">査定を申し込む前に確認しておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>シリーズ・品番・広さ・遮音等級</strong>：セフィーネNS（AMD）などの品番の頭と、0.8畳・1.2畳などの広さ、Dr-35・Dr-40の遮音等級を控えます。分からない場合、島村楽器は写真と寸法から品番を確認すると案内しています。</li>
          <li><strong>解体しない</strong>：島村楽器は解体済みを買取不可としています。引っ越しが決まっていても、査定の前に自分で解体しないようにします。</li>
          <li><strong>エアコン・電気工事</strong>：防音室内のエアコンは取り外した状態が必要です。島村楽器では取り外しや電気工事の原状復帰は利用者側の手配が基本で、同社に頼む場合は別途見積もりです。</li>
          <li><strong>建物の条件</strong>：エレベーターのない集合住宅や階段作業・クレーン作業が必要な場合は、有料のオプション作業になる可能性があります。</li>
          <li><strong>中のピアノ</strong>：島村楽器は防音室内のアップライト・グランドピアノの同時買取にも対応しています。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-10">
          <a href={YAMAHA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハの定型タイプの防音室</a>は0.8畳から4.3畳まであり、引っ越しの際に移設できることを特長としています。
          売らずに移設する選択肢もあり、島村楽器・三木楽器とも解体・移設だけの依頼を受け付けています。
          ピアノを一緒に手放す場合は<Link href="/articles/piano-kaitori/" className="text-accent underline">ピアノ買取ガイド</Link>、三木楽器のほかの窓口は<Link href="/articles/miki-gakki-kaitori/" className="text-accent underline">三木楽器の買取</Link>で整理しています。
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
          currentSlug="bouonshitsu-kaitori"
          relatedSlugs={["piano-kaitori", "grand-piano-kaitori", "miki-gakki-kaitori", "shimamura-gakki-kaitori", "gakki-shucchou-kaitori", "hikkoshi-gakki-shobun", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

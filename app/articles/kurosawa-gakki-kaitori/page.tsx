import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-17）「クロサワ楽器 買取 評判」。
// ⚠️ 口コミ・評価は載せない（第三者の投稿を転載しない方針）。title/h1 に「評判」を入れない（trust-audit C5）。
//    本文の事実はすべてクロサワ楽器店の公式サイト「KAIKURO（カイクロ）」（2026-11-17 取得・HTMLコメントと script は除外）から。
//   買取トップ https://www.kurosawagakki.com/kaikuro/
//   店頭買取 /kaikuro/store.html（各店舗の住所と「買取お取扱い楽器種別」）・宅配買取 /kaikuro/takuhai.html
//   出張買取 /kaikuro/syuchou.html・買取規約 /kaikuro/kiyaku.html
//   店舗ごとの取扱楽器の集計は、店頭買取ページの19店舗の記載を当サイトが数えたもの。

const ASOF = "2026年11月17日";
const TOP = "https://www.kurosawagakki.com/kaikuro/";
const STORE = "https://www.kurosawagakki.com/kaikuro/store.html";
const TAKUHAI = "https://www.kurosawagakki.com/kaikuro/takuhai.html";
const SYUCHOU = "https://www.kurosawagakki.com/kaikuro/syuchou.html";
const KIYAKU = "https://www.kurosawagakki.com/kaikuro/kiyaku.html";

const STORES: { name: string; addr: string; kinds: string }[] = [
  { name: "お茶の水駅前店", addr: "東京都千代田区神田駿河台2-2-2", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・デジタル機器・ピアノ/キーボード・ドラム" },
  { name: "ドクターサウンド", addr: "東京都千代田区神田小川町3-22", kinds: "アコースティックギター・ウクレレ・クラシックギター・バンジョー・マンドリン" },
  { name: "お茶の水ドラムコネクション", addr: "東京都千代田区神田小川町3-22 地下1階", kinds: "ドラム" },
  { name: "G-CLUB TOKYO", addr: "東京都千代田区神田小川町3-8", kinds: "エレキギター・エレキベース・アンプ・エフェクター" },
  { name: "クロサワバイオリンお茶の水店", addr: "東京都千代田区神田駿河台2-2-1", kinds: "弦楽器（バイオリン・ビオラ・チェロ・コントラバス・各楽弓）" },
  { name: "クロサワウインドお茶の水店", addr: "東京都千代田区神田駿河台2-4-2", kinds: "管楽器（サックス・ホルン・フルート・トランペット・トロンボーンほか）" },
  { name: "日本総本店", addr: "東京都新宿区百人町1-10-8", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・弦楽器・管楽器" },
  { name: "G-CLUB SHIBUYA", addr: "東京都渋谷区道玄坂2-29-17", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・デジタル機器・ピアノ/キーボード" },
  { name: "クロサワバイオリン渋谷本店", addr: "東京都渋谷区渋谷1-16-9 KIビルB1F", kinds: "弦楽器（バイオリン・ビオラ・チェロ・コントラバス・各楽弓）" },
  { name: "池袋店", addr: "東京都豊島区南池袋1-25-11 第15野萩ビルB1", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・デジタル機器" },
  { name: "クロサワバイオリン池袋店", addr: "東京都豊島区南池袋2-27-8 南水ビルB1", kinds: "弦楽器（バイオリン・ビオラ・チェロ・コントラバス・各楽弓）" },
  { name: "町田店", addr: "東京都町田市原町田6-2-6 町田モディ7F", kinds: "エレキギター・エレキベース・エフェクター・アコースティックギター・ウクレレ・クラシックギター・管楽器" },
  { name: "横浜店", addr: "神奈川県横浜市西区南幸1-3-1 横浜モアーズ4F", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・管楽器" },
  { name: "クロサワバイオリン横浜店", addr: "神奈川県横浜市神奈川区鶴屋町2-17-1 相鉄岩崎学園ビル2F", kinds: "弦楽器（バイオリン・ビオラ・チェロ・コントラバス・各楽弓）" },
  { name: "名古屋店", addr: "愛知県名古屋市中区栄2-3-1 名古屋広小路ビルヂング地下1階", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・管楽器" },
  { name: "クロサワバイオリン名古屋店", addr: "愛知県名古屋市中区栄2-3-1 名古屋広小路ビルヂング地下1階", kinds: "弦楽器（バイオリン・ビオラ・チェロ・コントラバス・各楽弓）" },
  { name: "G-CLUB UMEDA", addr: "大阪府大阪市北区梅田2-4-9 ブリーゼブリーゼ4階", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・デジタル機器・ピアノ/キーボード" },
  { name: "クロサワバイオリン大阪梅田店", addr: "大阪府大阪市北区梅田1-11-4 大阪駅前第4ビル1F", kinds: "弦楽器（バイオリン・ビオラ・チェロ・コントラバス・各楽弓）" },
  { name: "福岡店（ミーナ天神）", addr: "福岡県福岡市中央区天神4丁目3-8 ミーナ天神8F", kinds: "エレキギター・エレキベース・アンプ・エフェクター・アコースティックギター・ウクレレ・クラシックギター・デジタル機器・ピアノ/キーボード" },
];

// 楽器種別ごとに「買取お取扱い」に挙がっている店舗数を数える（当サイト集計）
const KIND_COUNT: { label: string; match: RegExp }[] = [
  { label: "エレキギター", match: /エレキギター/ },
  { label: "アコースティックギター", match: /アコースティックギター/ },
  { label: "管楽器", match: /管楽器/ },
  { label: "弦楽器（バイオリンなど）", match: /弦楽器/ },
  { label: "デジタル機器", match: /デジタル機器/ },
  { label: "ピアノ/キーボード", match: /ピアノ\/キーボード/ },
  { label: "ドラム", match: /ドラム/ },
];
const counted = KIND_COUNT.map((k) => ({ label: k.label, n: STORES.filter((s) => k.match.test(s.kinds)).length }));
const prefCount = (p: string) => STORES.filter((s) => s.addr.startsWith(p)).length;

const METHODS: { name: string; how: string; pay: string; note: string }[] = [
  {
    name: "店頭買取",
    how: "楽器を取り扱っている店舗へ持ち込む。事前の電話・メールでの問い合わせを案内",
    pay: "店頭で現金（高額品は後日振込の場合あり）",
    note: "店舗によって扱わない楽器がある。弦楽器はクロサワバイオリン、管楽器はクロサワウインドの各店へ",
  },
  {
    name: "宅配買取",
    how: "フォームで申し込み、買取可否と上限買取価格の連絡を受けてから発送（梱包は利用者）",
    pay: "振込または現金書留",
    note: "送料はクロサワ楽器負担（着払い）。住民票の写し（3か月以内・原本）と身分証のコピー、宅配買取申込書を同梱。不成立時の返送料は利用者負担",
  },
  {
    name: "出張買取",
    how: "電話・メールで相談し、日程を決めて自宅で査定",
    pay: "その場で支払い（高額品は後日振込の場合あり）",
    note: "出張料はかからない。対応エリアは関東・甲信・東海・大阪府・福岡県・佐賀県の16都府県",
  },
];

const FAQ = [
  {
    q: "クロサワ楽器ではどの店舗でも同じ楽器を買い取ってもらえますか？",
    a: `いいえ。公式の店頭買取ページには店舗ごとの「買取お取扱い楽器種別」が掲載されており、店舗によって扱う楽器が異なります。${ASOF}時点の19店舗の記載では、エレキギターは${counted[0].n}店、管楽器は${counted[2].n}店、ドラムは${counted[6].n}店が対象でした。持ち込む前に、楽器を扱っている店舗か確認することが案内されています。`,
  },
  {
    q: "クロサワ楽器で買い取ってもらえないものはありますか？",
    a: "買取規約では、アコースティックピアノ・エレクトーン・オルガン・DTM用ソフトウェアは買い取りできないとされています。PSE表示のない電源コード付きの機器は問い合わせるよう案内されています。古くてパーツがないなど、自社でメンテナンスできない物も扱えない場合があります。",
  },
  {
    q: "宅配買取に住民票の写しが必要なのはなぜですか？",
    a: "公式サイトでは、古物営業法施行規則により非対面の買取には住民票の写しが必要と説明されています。発行から3か月以内・コピー不可・マイナンバーの記載がないもので、現住所と住民票の住所が同じである必要があります。",
  },
  {
    q: "出張買取に費用はかかりますか？",
    a: "公式サイトでは出張料はかからず、成約しなかった場合も料金は発生しないと案内されています。対応エリアは東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県・長野県・山梨県・静岡県・愛知県・岐阜県・三重県・大阪府・福岡県・佐賀県で、その他の地域も相談を受け付けています。",
  },
  {
    q: "18歳未満でも売れますか？",
    a: "18歳未満または高校生の場合は、保護者同意書の記入・捺印が必要です。買取規約では、保護者または親権者への電話確認を行ってから買い取ると記載されています。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "クロサワ楽器の買取", href: "/articles/kurosawa-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/kurosawa-gakki-kaitori/" },
  title: "クロサワ楽器の買取とは？店頭・宅配・出張の条件と店舗ごとの買取対象楽器を公式情報で整理【2026年11月】",
  description:
    "クロサワ楽器店の楽器買取（KAIKURO）について、店頭・宅配・出張の手順と支払い方法、19店舗それぞれが買い取る楽器の種類、出張の対応エリア、買い取らない楽器を公式サイトの内容で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "クロサワ楽器の買取とは？店舗ごとの買取対象楽器と3つの方法【2026年11月】",
    description: "公式サイトの内容を整理。店頭・宅配・出張の条件、19店舗の買取対象楽器、出張エリア、対象外の楽器。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "クロサワ楽器の買取とは？店頭・宅配・出張の条件と店舗ごとの買取対象楽器を公式情報で整理",
        datePublished: "2026-11-17",
        dateModified: "2026-11-17",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/kurosawa-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "クロサワ楽器の買取", item: "https://gakkikaitori-biyori.com/articles/kurosawa-gakki-kaitori/" },
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
          クロサワ楽器の買取とは？店頭・宅配・出張の条件と店舗ごとの買取対象楽器を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={TOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            クロサワ楽器店の買取サイト「KAIKURO（カイクロ）」
          </a>
          の各ページ（店頭・宅配・出張・買取規約）を確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            クロサワ楽器店（株式会社黒澤楽器店）の買取は、<strong>店頭・宅配・出張の3方式</strong>です。店頭と出張はその場で支払い、宅配は振込または現金書留です（高額品は店頭・出張でも後日振込になる場合があります）。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            店頭買取は全店で受け付けていますが、<strong>店舗ごとに買い取る楽器の種類が決まっています</strong>。
            公式に掲載された19店舗のうち、管楽器を扱うのは{counted[2].n}店、ドラムは{counted[6].n}店です。アコースティックピアノ・エレクトーン・オルガンは買取の対象外です。
          </p>
        </div>

        <h2 id="methods" className="text-xl font-bold mt-12 mb-4">買取方法ごとの条件</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">手順</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
                <th className="text-left px-4 py-3 font-medium">公式の案内</th>
              </tr>
            </thead>
            <tbody>
              {METHODS.map((m) => (
                <tr key={m.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{m.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.how}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.pay}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          買取規約には「査定金額が1万円を超える場合は、銀行振り込みとさせていただく場合がございます」とあり、バイオリン・ビオラ・チェロ・コントラバスは振込のみです。
          宅配の送り先はクロサワ中古楽器買取センター（東京都豊島区高田）で、事前連絡のない発送は受け付けていません。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={STORE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店頭買取</a>・
          <a href={TAKUHAI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">宅配買取</a>・
          <a href={SYUCHOU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>・
          <a href={KIYAKU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">買取規約</a>
          （{ASOF}取得）。
        </p>

        <h2 id="stores" className="text-xl font-bold mt-12 mb-4">店舗ごとの買取対象楽器（19店舗）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式の店頭買取ページに掲載された店舗と「買取お取扱い楽器種別」をそのまま一覧にしました。所在地は東京都{prefCount("東京都")}店・神奈川県{prefCount("神奈川県")}店・愛知県{prefCount("愛知県")}店・大阪府{prefCount("大阪府")}店・福岡県{prefCount("福岡県")}店です。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地</th>
                <th className="text-left px-4 py-3 font-medium">買取対象の楽器</th>
              </tr>
            </thead>
            <tbody>
              {STORES.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{s.addr}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{s.kinds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-6">
          出典：<a href={STORE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クロサワ楽器店 店頭買取のご案内</a>（{ASOF}取得）。電話番号は掲載していません。来店前に公式ページで最新の情報をご確認ください。
        </p>

        <h3 className="text-lg font-bold mt-8 mb-3">楽器の種類ごとの対象店舗数（当サイト集計）</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">楽器の種類</th>
                <th className="text-left px-4 py-3 font-medium">買取対象に挙げている店舗数（19店中）</th>
              </tr>
            </thead>
            <tbody>
              {counted.map((c) => (
                <tr key={c.label} className="border-t border-warm-200">
                  <td className="px-4 py-3">{c.label}</td>
                  <td className="px-4 py-3">{c.n}店</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-10">
          ギター類は、弦楽器（クロサワバイオリン）・管楽器（クロサワウインド）・ドラムの専門店を除くほぼすべての店舗で受け付けていますが、管楽器・ドラム・鍵盤は対象店舗が限られます。とくにドラムはお茶の水の2店（お茶の水駅前店・お茶の水ドラムコネクション）だけで、
          ピアノ/キーボードはお茶の水駅前店・G-CLUB SHIBUYA・G-CLUB UMEDA・福岡店の4店です。対象店舗が近くにない場合は、宅配または出張を利用することになります。
          お茶の水の楽器店街については<Link href="/articles/ochanomizu-gakki-kaitori/" className="text-accent underline">御茶ノ水の楽器買取</Link>でも整理しています。
        </p>

        <h2 id="not-accepted" className="text-xl font-bold mt-12 mb-4">買取の対象外とされているもの</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>アコースティックピアノ</li>
          <li>エレクトーン</li>
          <li>オルガン</li>
          <li>DTM用ソフトウェア</li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          このほか、電源コード付きでPSE表示のない機器は問い合わせが必要で、クレジットの支払いが終わっていない楽器は買い取れないと案内されています。
          ピアノやオルガンを売る場合は、<Link href="/articles/piano-kaitori/" className="text-accent underline">ピアノ買取</Link>・
          <Link href="/articles/organ-kaitori/" className="text-accent underline">オルガン買取</Link>のページで、扱っている業者を確認できます。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          なお、公式サイトの「買取強化中」の欄には、クラシックギター・ギブソン・フェンダージャパン・バンジョー/マンドリン/リゾネーター・ドラム・Nord のシンセ・生産完了から3年以内の電子ピアノ・ヴィンテージのローランドが挙がっています（{ASOF}時点）。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">他社と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          クロサワ楽器は店頭・出張でその場の支払いに対応している一方、宅配では住民票の写しの原本が必要で、不成立時の返送料は利用者の負担です。
          支払いが振込のみの<Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器</Link>、
          店頭で現金払いの<Link href="/articles/hardoff-gakki-kaitori/" className="text-accent underline">ハードオフ</Link>、
          通常買取価格を公開している<Link href="/articles/ikebe-gakki-kaitori/" className="text-accent underline">イケベ楽器</Link>と、条件を並べて比べると選びやすくなります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          古物営業法に基づく表示：東京都公安委員会 第305509505081号（
          <a href={KIYAKU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">公式の表記</a>、{ASOF}確認）。
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
          currentSlug="kurosawa-gakki-kaitori"
          relatedSlugs={["shimamura-gakki-kaitori", "ikebe-gakki-kaitori", "yamano-gakki-kaitori", "hardoff-gakki-kaitori", "ochanomizu-gakki-kaitori", "gakki-kaitori-osusume", "rockin-kaitori"]}
        />
      </article>
    </>
  );
}

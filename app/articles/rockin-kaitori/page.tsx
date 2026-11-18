import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-18）「ロッキン 買取」。kurosawa-gakki-kaitori（11/17）と同じ「業者を知る」型。
// ⚠️ 本文の事実はすべてロッキン（有限会社平野楽器）の公式サイト（2026-11-18 取得・HTMLコメントと script は除外）から。
//   買取・委託販売 https://www.rockin.co.jp/buy/ ／出張買取 /buy/purchase/ ／名古屋市のギター買取 /buy/nagoya_guitar/
//   店舗ページ /shopinfo/kariya/・toyota/・nagoya/・historicguitars/・gifu/・hamamatsu/（6ページを1件ずつ取得）
//   店舗ごとの取扱いの違い（総合店か専門店か）は各店舗ページの「〜について」の記載を当サイトが表にしたもの。
//   口コミ・評価は載せない（title/h1 に「評判」を入れない）。

const ASOF = "2026年11月18日";
const BUY = "https://www.rockin.co.jp/buy/";
const PURCHASE = "https://www.rockin.co.jp/buy/purchase/";
const NAGOYA_GUITAR = "https://www.rockin.co.jp/buy/nagoya_guitar/";

const STORES: { name: string; addr: string; hours: string; focus: string; url: string }[] = [
  {
    name: "ロッキン 刈谷本店",
    addr: "愛知県刈谷市中山町4-40",
    hours: "11:00〜20:00（水曜定休）",
    focus: "総合楽器店。ギター・ベース約1,000本に加え、ピアノ・管楽器・ドラムも扱う。ライブハウス・音楽教室を併設",
    url: "https://www.rockin.co.jp/shopinfo/kariya/",
  },
  {
    name: "ロッキン 豊田店",
    addr: "愛知県豊田市丸山町3-6-1",
    hours: "11:00〜20:00（水曜定休）",
    focus: "総合楽器店。ギター中心にドラム・鍵盤楽器・管楽器。ギター・管楽器のリペアマンが常駐。専用駐車場30台",
    url: "https://www.rockin.co.jp/shopinfo/toyota/",
  },
  {
    name: "ロッキン 名古屋栄店",
    addr: "愛知県名古屋市中区栄3-32-6 BECOME SAKAE 10F",
    hours: "11:00〜20:00（水曜定休）",
    focus: "ギター・ベース専門店（常時1,000本以上と掲載）。専用・提携駐車場なし",
    url: "https://www.rockin.co.jp/shopinfo/nagoya/",
  },
  {
    name: "Historic Guitars 名古屋",
    addr: "名古屋栄店の店内奥",
    hours: "11:00〜20:00（水曜定休）",
    focus: "Gibson Custom Shop の専門フロア",
    url: "https://www.rockin.co.jp/shopinfo/historicguitars/",
  },
  {
    name: "ロッキン 岐阜店",
    addr: "岐阜県各務原市那加萱場町3-8 イオンモール各務原インター2F",
    hours: "9:00〜21:00（年中無休）",
    focus: "総合楽器店。ギター約500本、アコースティックピアノ・デジタルピアノ、管楽器（新品・中古）",
    url: "https://www.rockin.co.jp/shopinfo/gifu/",
  },
  {
    name: "ロッキン 浜松店",
    addr: "静岡県浜松市中央区志都呂2丁目37番1号 イオンモール浜松志都呂3F",
    hours: "10:00〜21:00（年中無休）",
    focus: "総合楽器店（静岡県で唯一の店舗）。ギターと管楽器のリペアマンが常駐",
    url: "https://www.rockin.co.jp/shopinfo/hamamatsu/",
  },
];

const METHODS: { name: string; area: string; pay: string; note: string }[] = [
  {
    name: "店頭買取",
    area: "東海地区の5店舗（上表）",
    pay: "その場で現金（買取金額によっては振込）",
    note: "査定は通常15分程度。点数が多い・確認に時間がかかる品は預かり。身分証明書と印鑑が必要",
  },
  {
    name: "出張買取",
    area: "愛知県・岐阜県・静岡県・三重県の全域（最短即日）",
    pay: "訪問時に品物を預ける方式で、その場での代金の受け渡しはなし",
    note: "1点から・土日祝や夜間も対応。品物によっては関東圏・関西圏など車で日帰りできる地域、一部の高額ヴィンテージは全国",
  },
  {
    name: "宅配買取",
    area: "全国（遠方向け）",
    pay: "到着・検品後、見積もりと変わらなければ翌営業日までに振込",
    note: "事前見積もり後に着払いで発送。住民票の写し（3か月以内・原本）・身分証のコピー・申込書が必要",
  },
  {
    name: "委託販売",
    area: "店頭・宅配（出張での引き受けはなし）",
    pay: "売却後に代金を受け取り",
    note: "手数料は税抜き販売価格の20%。ギター本体等は別途 調整代＋弦代（6,600円〜）",
  },
];

const FAQ = [
  {
    q: "ロッキンの店頭買取はその場で現金ですか？",
    a: "公式サイトでは、身分証明書と印鑑を持参すれば、その場で査定から現金買取まで行うと案内されています。ただし、買取金額によっては振込になる場合があると記載されています。査定は通常15分程度です。",
  },
  {
    q: "ロッキンの出張買取はどこまで来てもらえますか？",
    a: "出張買取の対応地域は愛知県・岐阜県・静岡県・三重県の東海4県で、全域に最短即日で訪問すると案内されています。品物によっては関東圏・関西圏など車で日帰りできる地域にも出張します。出張では品物を預ける方式のため、その場での代金の受け渡しはありません。",
  },
  {
    q: "宅配買取の送料はかかりますか？",
    a: "1点ごとの見積もり金額が5万円以上なら送料はロッキンの負担（着払い）、10万円以上なら梱包材も無料で送られます。5万円未満の品物やアンプなどの大型品は、梱包材と送料が利用者の負担です。買取をキャンセルした場合の返送料も利用者の負担です。",
  },
  {
    q: "ロッキンで買い取ってもらえない楽器はありますか？",
    a: "公式サイトには、和楽器や民族楽器の買取は行っていないと明記されています。また委託販売では、アンプ・エフェクター・ソフトウェア・DTM音源・ピアノ等の大型商品は扱っていません。18歳未満・高校生からの買取は断っており、親権者が同伴して親権者からの買取とする形になります。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ロッキンの楽器買取", href: "/articles/rockin-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/rockin-kaitori/" },
  title: "ロッキン（平野楽器）の楽器買取とは？店頭・出張・宅配・委託の条件と東海5店舗【2026年11月】",
  description:
    "東海地区の楽器店ロッキン（有限会社平野楽器）の買取について、店頭・出張・宅配・委託販売の条件と支払い方法、宅配の送料が無料になる金額、買い取らない楽器、5店舗それぞれの取扱いの違いを公式サイトの内容で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ロッキン（平野楽器）の楽器買取｜店頭・出張・宅配・委託の条件【2026年11月】",
    description: "ロッキンの買取方法ごとの条件と支払い、東海5店舗の取扱いを公式情報で整理。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ロッキン（平野楽器）の楽器買取とは？店頭・出張・宅配・委託の条件と東海5店舗",
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/rockin-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ロッキンの楽器買取", item: "https://gakkikaitori-biyori.com/articles/rockin-kaitori/" },
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
          ロッキン（平野楽器）の楽器買取とは？店頭・出張・宅配・委託の条件と東海5店舗
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}にロッキンの公式サイト（買取・委託販売、出張買取、各店舗のページ）を確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ロッキンは、愛知県刈谷市の有限会社平野楽器が東海地区で運営する楽器店です。買取は<strong>店頭・出張・宅配・委託販売</strong>の4つで、
            店頭はその場で現金、宅配は振込です。<strong>出張は東海4県（愛知・岐阜・静岡・三重）が対象</strong>で、品物を預ける方式のため訪問時の代金の受け渡しはありません。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ギター・管楽器・鍵盤楽器などを扱う一方、<strong>和楽器と民族楽器は買い取っていません</strong>。名古屋栄店はギター・ベース専門のため、管楽器や鍵盤楽器は刈谷・豊田・岐阜・浜松の総合店が持ち込み先になります。
          </p>
        </div>

        <h2 id="methods" className="text-xl font-bold mt-12 mb-4">買取方法ごとの条件</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">対象地域</th>
                <th className="text-left px-4 py-3 font-medium">支払い</th>
                <th className="text-left px-4 py-3 font-medium">公式の案内</th>
              </tr>
            </thead>
            <tbody>
              {METHODS.map((m) => (
                <tr key={m.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{m.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.area}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.pay}</td>
                  <td className="px-4 py-3 leading-relaxed">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          出張買取の説明は、買取トップでは「お伺いしたスタッフへお預け頂くだけ」、出張買取のページでは「お伺いさせていただいたその場での代金お渡しは出来ません」となっています。
          出張でもその場で現金を受け取れる業者（楽器の買取屋さん・ハードオフなど）とは、ここが異なります。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={BUY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取・委託販売</a>・
          <a href={PURCHASE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の出張買取</a>（{ASOF}取得）。
        </p>

        <h2 id="takuhai" className="text-xl font-bold mt-12 mb-4">宅配買取の送料と梱包材</h2>
        <p className="text-sm leading-relaxed mb-4">
          宅配買取は、フォームかLINEで見積もりを受けてから発送します。送料と梱包材の負担は、<strong>1点ごとの見積もり金額</strong>で次のように変わります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">1点ごとの見積もり金額</th>
                <th className="text-left px-4 py-3 font-medium">送料</th>
                <th className="text-left px-4 py-3 font-medium">梱包材</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200"><td className="px-4 py-3">5万円未満（アンプなど大型品を含む）</td><td className="px-4 py-3">利用者負担</td><td className="px-4 py-3">利用者が用意</td></tr>
              <tr className="border-t border-warm-200"><td className="px-4 py-3">5万円以上</td><td className="px-4 py-3">ロッキン負担（着払い）</td><td className="px-4 py-3">利用者が用意</td></tr>
              <tr className="border-t border-warm-200"><td className="px-4 py-3">10万円以上</td><td className="px-4 py-3">ロッキン負担（着払い）</td><td className="px-4 py-3">ロッキンが無料で送付</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          同梱する書類は、買取申込書・身分証明書のコピー・住民票の写し（3か月以内に発行された原本）です。住民票の写しがない場合は買い取れないと明記されています。
          到着後の査定が見積もりより下がった場合は、そのまま売るかキャンセルするかを選べますが、キャンセル時の返送料は利用者の負担です。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={BUY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取・委託販売（宅配買取）</a>（{ASOF}取得）。
        </p>

        <h2 id="stores" className="text-xl font-bold mt-12 mb-4">店舗ごとの取扱い（5店舗＋専門フロア）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式の6つの店舗ページを1件ずつ確認し、各店の紹介文に書かれた取扱いを表にしました。愛知県3店・岐阜県1店・静岡県1店で、三重県には店舗がありません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地</th>
                <th className="text-left px-4 py-3 font-medium">営業時間</th>
                <th className="text-left px-4 py-3 font-medium">店舗ページの記載</th>
              </tr>
            </thead>
            <tbody>
              {STORES.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{s.name}</a>
                  </td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{s.addr}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs whitespace-nowrap">{s.hours}</td>
                  <td className="px-4 py-3 leading-relaxed text-xs">{s.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          名古屋栄店の買取ページ（名古屋市のギター買取）では、出張の対象を「名古屋市内全域・愛知県内全域」とし、名古屋市内は最短即日と案内しています。
          名古屋で他の楽器店と比べたい場合は<Link href="/articles/nagoya-gakki-kaitori/" className="text-accent underline">名古屋の楽器買取</Link>に、持ち込み先6店の早見表をまとめています。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：各店舗ページ（表のリンク）・<a href={NAGOYA_GUITAR} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">名古屋市のギター買取</a>（{ASOF}取得）。電話番号は掲載していません。
        </p>

        <h2 id="not" className="text-xl font-bold mt-12 mb-4">買い取らない楽器・委託できない品物</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed mb-4">
          <li>和楽器・民族楽器は買い取っていません（買取ページに明記）。</li>
          <li>委託販売の対象外：アンプ、エフェクター、ソフトウェア、DTM音源、ピアノ等の大型商品。著しく状態の悪い商品も預かれません。</li>
          <li>18歳未満・高校生からの買取は行わず、親権者同伴のうえ親権者からの買取となります。</li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          和楽器を売る場合は<Link href="/articles/wagakki-kaitori/" className="text-accent underline">和楽器の買取</Link>を参考にしてください。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：<a href={BUY} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取・委託販売</a>（{ASOF}取得）。
          運営：有限会社平野楽器（愛知県刈谷市中山町4-40）・古物商許可 愛知県公安委員会 第543819800700号（公式サイトのフッター表記）。
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
          currentSlug="rockin-kaitori"
          relatedSlugs={["nagoya-gakki-kaitori", "kurosawa-gakki-kaitori", "shimamura-gakki-kaitori", "ikebe-gakki-kaitori", "hardoff-gakki-kaitori", "kaitori-houhou-hikaku"]}
        />
      </article>
    </>
  );
}

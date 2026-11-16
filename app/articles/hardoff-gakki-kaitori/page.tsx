import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-16）「ハードオフ 楽器 買取」。
// ⚠️ 本文の事実はすべてハードオフの公式サイト（2026-11-16 取得・HTMLコメントと script は除外）から。
//   売りたい（買取サービス一覧・取扱商品）: https://www.hardoff.co.jp/sell/ ・ /sell/all-items/
//   店頭買取: https://www.hardoff.co.jp/sell/tentou/  出張買取: https://www.hardoff.co.jp/sell/shuccho/
//   店舗検索: https://www.hardoff.co.jp/shop/list/?t1=on（全15ページ・440件）・?t12=on（ハードオフ楽器館 3件）
//   宅配買取: https://takuhai-kaitori.hardoff.co.jp/category-3 ・ /not-covered ・ /guide
//   古物営業法に基づく表示: https://www.hardoff.co.jp/license_no/
//   都道府県別の店舗数・出張買取受付の件数は、店舗検索の結果を当サイトが数えたもの。
//   口コミ・評価は載せない。

const ASOF = "2026年11月16日";
const SELL = "https://www.hardoff.co.jp/sell/";
const ITEMS = "https://www.hardoff.co.jp/sell/all-items/";
const TENTOU = "https://www.hardoff.co.jp/sell/tentou/";
const SHUCCHO = "https://www.hardoff.co.jp/sell/shuccho/";
const SHOP = "https://www.hardoff.co.jp/shop/list/?t1=on";
const GAKKIKAN = "https://www.hardoff.co.jp/shop/list/?t12=on";
const TK_GAKKI = "https://takuhai-kaitori.hardoff.co.jp/category-3";
const TK_NG = "https://takuhai-kaitori.hardoff.co.jp/not-covered";
const TK_GUIDE = "https://takuhai-kaitori.hardoff.co.jp/guide";

const METHODS: { name: string; how: string; pay: string; note: string }[] = [
  {
    name: "店頭買取",
    how: "店舗に持ち込む。予約不要・1点から",
    pay: "その場で現金",
    note: "査定は10〜15分程度（混雑時は長くなる場合あり）。金額に納得できなければキャンセル可",
  },
  {
    name: "出張買取",
    how: "近くの店舗に電話して予約。スタッフが自宅に来る",
    pay: "その場で現金（希望すれば振込）",
    note: "出張を受け付けていない店舗もある（下の集計を参照）。東京23区は専用の出張買取サービスあり",
  },
  {
    name: "宅配買取",
    how: "ネットで申し込み、自分で梱包。佐川急便が自宅に集荷",
    pay: "指定口座に振込（売買成立後2〜4営業日）",
    note: "送料・手数料は0円。ギター本体は梱包資材の事前送付を申し込める",
  },
  {
    name: "オファー買取",
    how: "アプリで写真を撮って出品",
    pay: "—",
    note: "全国のグループ店舗から買取希望金額（オファー）が届く。売る前に金額が分かる",
  },
];

// 店舗検索「hard off」の結果（440件）を当サイトが都道府県別に数えた上位10。2026-11-16
const PREF_TOP: { pref: string; shops: number; visit: number }[] = [
  { pref: "埼玉県", shops: 48, visit: 19 },
  { pref: "東京都", shops: 33, visit: 16 },
  { pref: "北海道", shops: 25, visit: 15 },
  { pref: "千葉県", shops: 25, visit: 12 },
  { pref: "愛知県", shops: 25, visit: 14 },
  { pref: "神奈川県", shops: 23, visit: 16 },
  { pref: "大阪府", shops: 21, visit: 6 },
  { pref: "新潟県", shops: 19, visit: 17 },
  { pref: "静岡県", shops: 18, visit: 5 },
  { pref: "福岡県", shops: 13, visit: 5 },
];

const GAKKIKAN_SHOPS: { name: string; addr: string; visit: string }[] = [
  { name: "ハードオフ楽器館16号狭山店", addr: "埼玉県狭山市下奥富505-1", visit: "×" },
  { name: "ハードオフ楽器STUDIO吉祥寺店", addr: "東京都武蔵野市吉祥寺東町1-4-27 アソルティ吉祥寺エスト2F", visit: "○" },
  { name: "ハードオフ楽器館新潟近江店", addr: "新潟県新潟市中央区近江3-1-40", visit: "○" },
];

const FAQ = [
  {
    q: "ハードオフでは楽器をどの方法で売れますか？",
    a: "公式サイトの取扱商品一覧では、楽器は店頭買取・オファー買取・出張買取・宅配買取の4つすべてが「○」です。ただし、状態や種別によっては買取できない場合があると記載されています。",
  },
  {
    q: "どの店舗でも出張買取をしてもらえますか？",
    a: `いいえ。店舗検索の各店舗に「出張買取受付」の○×が表示されており、${ASOF}時点で「ハードオフ」440件のうち○は229件でした（当サイト集計・閉店済みなどの表示を含む件数）。出張を頼む場合は、○の店舗に電話で申し込みます。`,
  },
  {
    q: "宅配買取で送れない楽器はありますか？",
    a: "ハードオフ宅配買取の「買取できない品物」では、楽器について「ケースが無く運搬上破損の可能性がある楽器本体」と「ライセンス解除が必要な楽器機材」が宅配の対象外とされています。これらは店頭・出張・オファー買取なら扱える場合があると案内されています。音楽制作ソフト、開封済みの消耗品、電波法に触れる周波数のワイヤレス機材は、グループ全体で扱わないと記載されています。",
  },
  {
    q: "店頭買取の支払いは現金ですか？",
    a: "はい。公式サイトの店頭買取の流れでは、査定後に本人確認を行い、その場で現金で支払うと案内されています。本人確認には住所・氏名が確認できる公的証明書（運転免許証・各種資格確認書・学生証・年金手帳など）が必要です。",
  },
  {
    q: "楽器専門のハードオフはありますか？",
    a: `店舗検索で「ハードオフ楽器館」を選ぶと、${ASOF}時点で3店舗（埼玉県狭山市・東京都武蔵野市・新潟県新潟市）が表示されました。それ以外の通常のハードオフでも、楽器は取扱商品に含まれています。`,
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ハードオフの楽器買取", href: "/articles/hardoff-gakki-kaitori/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/hardoff-gakki-kaitori/" },
  title: "ハードオフの楽器買取とは？4つの買取方法・出張を受ける店舗の数・宅配で送れない楽器を公式情報で整理【2026年11月】",
  description:
    "ハードオフで楽器を売る方法（店頭・出張・宅配・オファー買取）の違い、出張買取を受け付ける店舗の数（440件中229件・当サイト集計）、宅配で送れない楽器の条件を公式サイトの内容で整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ハードオフの楽器買取とは？買取方法・出張受付店の数・宅配の条件【2026年11月】",
    description: "公式サイトの内容を整理。店頭・出張・宅配・オファー買取の違いと、都道府県別の店舗数・出張受付の集計。",
  },
};

export default function Page() {
  const totalShops = 440;
  const totalVisit = 229;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ハードオフの楽器買取とは？4つの買取方法・出張を受ける店舗の数・宅配で送れない楽器を公式情報で整理",
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/hardoff-gakki-kaitori/",
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
          { "@type": "ListItem", position: 3, name: "ハードオフの楽器買取", item: "https://gakkikaitori-biyori.com/articles/hardoff-gakki-kaitori/" },
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
          ハードオフの楽器買取とは？4つの買取方法・出張を受ける店舗の数・宅配で送れない楽器を公式情報で整理
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          {ASOF}に
          <a href={SELL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            ハードオフ公式サイトの「売りたい」ページ
          </a>
          と店舗検索、ハードオフ宅配買取のサイトを確認して記載しています。当サイトは口コミ・評価の掲載を行っていません。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            ハードオフは楽器・オーディオ・カメラ・パソコンなどを扱うリユース店です。楽器は
            <strong>店頭・出張・宅配・オファー買取（アプリ）の4つすべて</strong>で売ることができます。
            店頭は予約不要で、査定後<strong>その場で現金</strong>が支払われます。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ただし、出張買取は<strong>店舗によって受け付けていない</strong>ことがあります。
            当サイトが店舗検索の結果を数えたところ、「ハードオフ」{totalShops}件のうち出張買取受付が「○」の店舗は{totalVisit}件でした。
          </p>
        </div>

        <h2 id="methods" className="text-xl font-bold mt-12 mb-4">4つの買取方法の違い</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">方法</th>
                <th className="text-left px-4 py-3 font-medium">申し込み</th>
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
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={TENTOU} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">店頭買取</a>・
          <a href={SHUCCHO} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">出張買取</a>・
          <a href={TK_GUIDE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ宅配買取 ご利用ガイド</a>・
          <a href={ITEMS} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">取扱商品一覧</a>
          （{ASOF}取得）。取扱商品一覧では、楽器は4つの方法すべてが「○」で、「状態や種別により買取できない場合があります」と注記されています。
        </p>

        <h2 id="visit" className="text-xl font-bold mt-12 mb-4">出張買取を受け付ける店舗の数（当サイト集計）</h2>
        <p className="text-sm leading-relaxed mb-4">
          公式の店舗検索では、店舗ごとに「出張買取受付：○／×」が表示されます。種類「hard off」で全国を検索した{totalShops}件（閉店済み2件・一時閉店中2件の表示を含む）を数えると、
          <strong>○は{totalVisit}件（約{Math.round((totalVisit / totalShops) * 100)}%）</strong>でした。店舗の多い10都道府県は次のとおりです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">都道府県</th>
                <th className="text-right px-4 py-3 font-medium">店舗数</th>
                <th className="text-right px-4 py-3 font-medium">出張買取受付「○」</th>
              </tr>
            </thead>
            <tbody>
              {PREF_TOP.map((p) => (
                <tr key={p.pref} className="border-t border-warm-200">
                  <td className="px-4 py-3">
                    {p.pref === "埼玉県" ? (
                      <Link href="/articles/saitama-ken-gakki-kaitori/" className="text-accent underline">{p.pref}</Link>
                    ) : (
                      p.pref
                    )}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">{p.shops}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{p.visit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：
          <a href={SHOP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（種類：hard off）</a>
          の{ASOF}時点の表示を当サイトが数えたもの。店舗の開閉店や受付状況は変わるため、申し込む前に各店舗の表示を確認してください。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          県ごとの差は大きく、新潟県は19店中17店が○、大阪府は21店中6店が○でした。熊本県（5店）と宮崎県（3店）は○の店舗がありませんでした。
          群馬県は9店中7店が○です（<Link href="/articles/gunma-gakki-kaitori/" className="text-accent underline">群馬県の楽器買取</Link>で店舗別に整理しています）。
        </p>

        <h2 id="gakkikan" className="text-xl font-bold mt-12 mb-4">楽器専門の「ハードオフ楽器館」</h2>
        <p className="text-sm leading-relaxed mb-4">
          店舗検索で種類「hard gakki」を選ぶと、次の3店舗が表示されます。通常のハードオフでも楽器は扱っていますが、楽器だけをまとめて売りたい場合の候補になります。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">店舗</th>
                <th className="text-left px-4 py-3 font-medium">所在地</th>
                <th className="text-left px-4 py-3 font-medium whitespace-nowrap">出張買取受付</th>
              </tr>
            </thead>
            <tbody>
              {GAKKIKAN_SHOPS.map((s) => (
                <tr key={s.name} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3 leading-relaxed">{s.addr}</td>
                  <td className="px-4 py-3 text-center">{s.visit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={GAKKIKAN} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ 店舗検索（種類：hard gakki）</a>（{ASOF}確認）。
        </p>

        <h2 id="takuhai" className="text-xl font-bold mt-12 mb-4">宅配買取で送れる楽器・送れない楽器</h2>
        <p className="text-sm leading-relaxed mb-4">
          ハードオフ宅配買取の楽器カテゴリーには、エレキギター・ベース、エフェクター・アンプ、DJ機器、電子ドラム・打楽器、管楽器、ヴァイオリン・ウクレレのほか、和楽器・エスニック楽器・ハーモニカなども挙げられています。
          一方、次の条件に当たる楽器は宅配では送れません。
        </p>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-1 mb-4">
          <li>ケースがなく、運搬中に壊れるおそれのある楽器本体</li>
          <li>ライセンス解除が必要な楽器機材</li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          これらは店頭・出張買取・オファー買取なら扱える場合があると案内されています。
          また、<strong>音楽制作ソフト、開封済みの消耗品、電波法に触れる周波数のワイヤレス機材</strong>は、宅配に限らずハードオフグループでは扱わないと記載されています。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          宅配の送料・手数料は0円です。申し込み時に「自動で承諾（スピーディ入金）」を選ぶと査定完了で売買が成立し、発送後のキャンセルはできません。
          「確認後に承諾（通常入金）」を選んだ場合は、査定額を見てから返却を選べます（期日までに回答すれば返送料は同社負担）。
          段ボールは自分で用意しますが、ギター本体は梱包資材の事前送付を申し込めます。
        </p>
        <p className="text-xs text-warm-gray mb-10">
          出典：
          <a href={TK_GAKKI} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ハードオフ宅配買取「楽器」</a>・
          <a href={TK_NG} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">「買取できない品物」</a>・
          <a href={TK_GUIDE} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">「ご利用ガイド」</a>（{ASOF}取得）。
        </p>

        <h2 id="compare" className="text-xl font-bold mt-12 mb-4">楽器店・楽器買取専門店と比べるときの見かた</h2>
        <p className="text-sm leading-relaxed mb-4">
          ハードオフは楽器以外もまとめて売れる点と、店頭でその場で現金を受け取れる点が特徴です。
          楽器店の買取は条件が異なり、たとえば
          <Link href="/articles/shimamura-gakki-kaitori/" className="text-accent underline">島村楽器</Link>は支払いが銀行振込のみ、
          <Link href="/articles/yamano-gakki-kaitori/" className="text-accent underline">山野楽器</Link>は店頭のみ・ギター系に限っています。
          出張でその場で現金を受け取りたい場合は、
          <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline">楽器の買取屋さん</Link>のような出張専門の業者も比較対象になります。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          なお、古物営業法に基づく表示には、株式会社ハードオフコーポレーションを含む39件の許可番号が掲載されており、店舗は複数の会社が運営しています。
          受付時間や出張の対応範囲は店舗ごとに異なるため、利用する店舗の情報を確認してください。
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
          currentSlug="hardoff-gakki-kaitori"
          relatedSlugs={["shimamura-gakki-kaitori", "saitama-ken-gakki-kaitori", "gunma-gakki-kaitori", "ikebe-gakki-kaitori", "yamano-gakki-kaitori", "gakki-no-kaitoriyasan", "gakki-kaitori-osusume"]}
        />
      </article>
    </>
  );
}

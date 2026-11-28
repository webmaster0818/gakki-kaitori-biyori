import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-29 深夜02時の回）「電子ピアノ 運ぶ」。競合 epco-inc.co.jp の棚卸し語。
// decisions-20261128.json の check：メーカー公式（取扱説明書・仕様ページ）の数字（重量）だけで書く。
//   → ヤマハ CLP-885/875/845/835 取扱説明書（「楽器の移動と設置」・安全上のご注意・仕様の質量）、P-145BT 取扱説明書（質量）、
//     ローランド HP704 仕様（質量）、カワイ CA401 製品ページ（重量・梱包重量）。2026-11-29 取得。
//   カシオ公式（casio.com）は 403 のため不使用（回避しない）。
// 売る場合の搬出は各社公式（島村楽器・楽器の買取屋さん・高く売れるドットコム）の記載。

const ASOF = "2026年11月29日";

const YAMAHA_CLP = "https://data.yamaha.com/files/download/other_assets/1/2288871/CLP-885_owners_manual_Ja_B0.pdf";
const YAMAHA_P145 = "https://data.yamaha.com/files/download/other_assets/4/2332824/P-145BT_owners_manual_Ja_A0.pdf";

const WEIGHTS: { model: string; type: string; kg: string; note: string; src: string; srcName: string }[] = [
  { model: "ヤマハ P-145BT", type: "ポータブル（スタンドなし）", kg: "11.1kg", note: "幅1,326mm・奥行268mm", src: YAMAHA_P145, srcName: "取扱説明書 仕様" },
  { model: "ヤマハ クラビノーバ CLP-835", type: "据え置き（キャビネット型）", kg: "57kg", note: "つや出し仕上げは60kg", src: YAMAHA_CLP, srcName: "取扱説明書 仕様" },
  { model: "カワイ CA401", type: "据え置き（キャビネット型）", kg: "58.0kg", note: "梱包時は80.0kg", src: "https://www.kawai.jp/product/ca401/", srcName: "製品ページ 仕様" },
  { model: "ローランド HP704", type: "据え置き（専用スタンド込み）", kg: "59.5kg", note: "HP704-PE（黒塗鏡面）は61.0kg", src: "https://www.roland.com/jp/products/hp704/specifications/", srcName: "仕様" },
  { model: "ヤマハ クラビノーバ CLP-845", type: "据え置き（キャビネット型）", kg: "60kg", note: "つや出し仕上げは63kg", src: YAMAHA_CLP, srcName: "取扱説明書 仕様" },
  { model: "ヤマハ クラビノーバ CLP-875", type: "据え置き（キャビネット型）", kg: "71kg", note: "つや出し仕上げは74kg", src: YAMAHA_CLP, srcName: "取扱説明書 仕様" },
  { model: "ヤマハ クラビノーバ CLP-885", type: "据え置き（キャビネット型）", kg: "87kg", note: "つや出し仕上げは90kg", src: YAMAHA_CLP, srcName: "取扱説明書 仕様" },
];

const FAQ = [
  {
    q: "電子ピアノは1人で運べますか？",
    a: "ヤマハはクラビノーバの取扱説明書で「本製品を持ち上げて運ぶ場合は、必ず2人以上で行う」としています。1人で無理に持ち上げると腰を痛めたり、落下してけがや破損の原因になるためです。当サイトが確認した据え置き型の質量は57〜90kgでした。",
  },
  {
    q: "電子ピアノの重さはどのくらいですか？",
    a: `メーカー公式の仕様で確認した7機種では、ポータブル型のヤマハ P-145BT が11.1kg、据え置き型はカワイ CA401 58.0kg、ローランド HP704 59.5kg、ヤマハ クラビノーバ CLP-835 57kg〜CLP-885 87kg（つや出し仕上げは90kg）でした（${ASOF}確認）。`,
  },
  {
    q: "引っ越しのとき、電子ピアノは分解したほうがいいですか？",
    a: "ヤマハのクラビノーバ CLP-885/875/845/835 の取扱説明書は「引っ越しの際は、通常の荷物と同様に運べます。組み立てた状態でも、解体した状態でも構いません」としています。移動の際は本体の底面を持ち、水平にして運ぶこと、移動前にペダル下のアジャスターを床から離すことも記載されています。",
  },
  {
    q: "売る場合、運び出しは自分でする必要がありますか？",
    a: "出張買取では業者が運び出すのが一般的です。楽器の買取屋さんは作業代・搬出費用もかからないとし、高く売れるドットコムは運び出しもスタッフが行うとしています。島村楽器は指定の引き上げ業者が伺い、階段作業等のオプション作業は有料（買取金額から差し引き）です。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "電子ピアノの運び方と重さ", href: "/articles/denshi-piano-hakobu/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/denshi-piano-hakobu/" },
  title: "電子ピアノは自分で運べる？7機種の重さ（11〜90kg）とメーカーの運び方・売るときの搬出費【2026年11月】",
  description:
    "電子ピアノの重さをヤマハ・カワイ・ローランドの公式仕様で7機種確認（ポータブル11.1kg、据え置き57〜90kg）。ヤマハの取扱説明書にある運び方（2人以上・水平・底面を持つ・アジャスター）と、粗大ごみの重量条件、出張買取での搬出費の扱いを整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "電子ピアノは自分で運べる？重さとメーカーの運び方【2026年11月】",
    description: "公式仕様で7機種の重さを確認。ヤマハの取扱説明書の運び方と、売るときの搬出費。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "電子ピアノは自分で運べる？7機種の重さとメーカーの運び方・売るときの搬出費",
        datePublished: "2026-11-29",
        dateModified: "2026-11-29",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/denshi-piano-hakobu/",
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
          { "@type": "ListItem", position: 3, name: "電子ピアノの運び方と重さ", item: "https://gakkikaitori-biyori.com/articles/denshi-piano-hakobu/" },
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
          電子ピアノは自分で運べる？7機種の重さとメーカーの運び方・売るときの搬出費
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          メーカーの取扱説明書・仕様ページと各社の公式サイトを{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            電子ピアノの重さは、スタンドのない<strong>ポータブル型なら10kg台</strong>（ヤマハ P-145BT 11.1kg）ですが、
            家庭でよく使われる<strong>据え置き型（キャビネット型）は57〜90kg</strong>でした（メーカー公式の仕様で7機種を確認）。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            ヤマハはクラビノーバの取扱説明書で、持ち上げて運ぶときは<strong>必ず2人以上</strong>で、水平にして本体の底面を持つよう定めています。
            売る場合は、出張買取の業者が運び出す方法もあります（搬出費の扱いは業者により異なります）。
          </p>
        </div>

        <h2 id="weight" className="text-xl font-bold mt-12 mb-4">電子ピアノ7機種の重さ（メーカー公式の仕様）</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">機種</th>
                <th className="text-left px-4 py-3 font-medium">タイプ</th>
                <th className="text-right px-4 py-3 font-medium">質量</th>
                <th className="text-left px-4 py-3 font-medium">補足</th>
                <th className="text-left px-4 py-3 font-medium">出典</th>
              </tr>
            </thead>
            <tbody>
              {WEIGHTS.map((w) => (
                <tr key={w.model} className="border-t border-warm-200 align-top">
                  <td className="px-4 py-3 font-medium">{w.model}</td>
                  <td className="px-4 py-3">{w.type}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{w.kg}</td>
                  <td className="px-4 py-3 leading-relaxed">{w.note}</td>
                  <td className="px-4 py-3">
                    <a href={w.src} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                      {w.srcName}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：各メーカーの取扱説明書・仕様ページ（{ASOF}確認）。軽い順に掲載しています。掲載していない機種の重さは、各メーカーの取扱説明書でご確認ください。
        </p>
        <p className="text-sm leading-relaxed mb-4">
          据え置き型の4機種（CLP-835・CA401・HP704・CLP-845）は57〜60kgに集まり、同じクラビノーバでも上位機種の CLP-885 は87kg（つや出し仕上げは90kg）と、CLP-835 より30kg重くなります。
          カワイ CA401 は製品ページに梱包時の重量（80.0kg）も記載しており、箱に入れて運ぶとさらに重くなります。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          重さは処分の方法にも関わります。たとえば東京都中央区の
          <a href="https://www.city.chuo.lg.jp/documents/5389/sodaihinmoku0701.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">粗大ごみ 品目・手数料一覧</a>
          は「エレクトーン、電子ピアノ（オルガンを含む）重さ70kgまで」を1,800円としています。上の表では CLP-875（71kg）と CLP-885（87kg）がこの重さを超えます。
          ほかの自治体の手数料は<Link href="/articles/denshi-piano-sodaigomi/" className="text-accent underline">電子ピアノの粗大ごみ（5市区の比較）</Link>をご覧ください。
        </p>

        <h2 id="howto" className="text-xl font-bold mt-12 mb-4">メーカーの取扱説明書にある運び方</h2>
        <p className="text-sm leading-relaxed mb-4">
          ヤマハの
          <a href={YAMAHA_CLP} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">クラビノーバ CLP-885/875/845/835 取扱説明書</a>
          は、「安全上のご注意」と「楽器の移動と設置」で次のように定めています。
        </p>
        <ol className="list-decimal pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>移動の前に、すべての接続ケーブルを外す</strong>（ケーブルを傷めたり、人が転倒したりするおそれがあるため）。</li>
          <li><strong>ペダル下のアジャスターを回し、床から離す</strong>（床を傷つける原因になるため）。</li>
          <li><strong>持ち上げて運ぶときは必ず2人以上で行う</strong>（1人で無理に持ち上げると腰を痛めたり、落下してけがや破損の原因になるため）。</li>
          <li><strong>水平にして運び、大きな振動や衝撃を与えない</strong>。持つのは<strong>本体の底面</strong>で、底面以外を持つと本体の破損やけがの原因になります。</li>
          <li><strong>設置後は各部のネジを確認</strong>し、ゆるんでいれば締め直す。</li>
        </ol>
        <p className="text-sm leading-relaxed mb-4">
          引っ越しについては「通常の荷物と同様に運べます。組み立てた状態でも、解体した状態でも構いません」と記載されています。組み立て（解体）も「必ず2人以上で」行うよう書かれています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ポータブル型の
          <a href={YAMAHA_P145} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ヤマハ P-145BT の取扱説明書</a>
          も、移動の前にすべての接続ケーブルを外すよう定めています。ほかのメーカーの機種は、それぞれの取扱説明書でご確認ください。
        </p>

        <h2 id="sell" className="text-xl font-bold mt-12 mb-4">売る場合：出張買取の搬出費の扱い</h2>
        <p className="text-sm leading-relaxed mb-4">
          手放す予定がある場合は、自分で運ばずに出張買取の業者に運び出してもらう方法があります。搬出の費用の扱いは業者によって異なります（{ASOF}確認）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">業者</th>
                <th className="text-left px-4 py-3 font-medium">運び出す人</th>
                <th className="text-left px-4 py-3 font-medium">搬出の費用</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium">
                  <a href="https://www.shimamura.co.jp/used/gakki/digital-piano/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">島村楽器</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">当社指定の引き上げ業者（島村楽器のスタッフは伺わない）</td>
                <td className="px-4 py-3 leading-relaxed">引き上げ出張料の基本料は無料。階段作業等のオプション作業は有料で、代金は買取金額から差し引き</td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium">
                  <a href="https://gakkikaitori.co.jp/area/tokyo/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">楽器の買取屋さん</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">訪問した査定スタッフ</td>
                <td className="px-4 py-3 leading-relaxed">出張費・査定費に加えて作業代・搬出費用もかからないと記載</td>
              </tr>
              <tr className="border-t border-warm-200 align-top">
                <td className="px-4 py-3 font-medium">
                  <a href="https://www.takakuureru.com/gakki/denshi-piano/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">高く売れるドットコム</a>
                </td>
                <td className="px-4 py-3 leading-relaxed">査定スタッフ（自宅まで伺い、運び出しまで行うと記載）</td>
                <td className="px-4 py-3 leading-relaxed">出張料・査定料は無料と記載</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          島村楽器は製造から8年以上の電子ピアノを買取不可としており、高く売れるドットコムは製造から5年ほどを目安としています。年式によっては出張買取の対象にならないため、申し込みの前に本体のラベルで製造年を確認しておくと確実です。
          年式ごとの条件は<Link href="/articles/furui-denshi-piano-kaitori/" className="text-accent underline">古い電子ピアノの買取</Link>、地域ごとの出張対応は
          <Link href="/articles/denshi-piano-kaitori-tokyo/" className="text-accent underline">東京</Link>・
          <Link href="/articles/denshi-piano-kaitori-osaka/" className="text-accent underline">大阪</Link>・
          <Link href="/articles/denshi-piano-kaitori-fukuoka/" className="text-accent underline">福岡</Link>の各ページにまとめています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          なお、どの業者でも、2階以上からの搬出や階段の幅は申し込み時に伝えておくと、当日の作業や費用の確認がスムーズです。
        </p>

        <p className="mb-12">
          <Link
            href="/articles/denshi-piano-kaitori/"
            className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            電子ピアノの機種別の買取相場を見る
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
          currentSlug="denshi-piano-hakobu"
          relatedSlugs={["denshi-piano-kaitori", "denshi-piano-jumyou", "denshi-piano-sodaigomi", "furui-denshi-piano-kaitori", "yamaha-clavinova-kaitori", "roland-denshi-piano-kaitori", "hikkoshi-gakki-shobun", "denshi-piano-kaitori-tokyo", "denshi-piano-kaitori-osaka"]}
        />
      </article>
    </>
  );
}

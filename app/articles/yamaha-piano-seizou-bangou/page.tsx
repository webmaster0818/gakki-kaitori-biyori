import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

// kw-expansion（2026-11-14）「ヤマハピアノ 製造番号」。
// ⚠️ 事実の出典（2026-11-14 取得）:
//   製造番号の位置・製造時期の問い合わせ先＝ヤマハ アップライトピアノ／グランドピアノ 取扱説明書（日本語）
//     https://data.yamaha.com/files/download/other_assets/7/1291667/YA982G0_up_gp_om_ja.pdf
//   製造年と製造番号の対応表（日本・浜松製）＝米国ヤマハ「Finding the Age of Your Yamaha Piano」
//     https://usa.yamaha.com/support/finding_age_of_yamaha_piano/index.html
//   国内ヤマハの掛川工場の年表PDFは 2026-11-14 時点で取得できなかった（403/404）。数字は載せない。
// 表の数字は公式表のまま写す。中古相場（金額）は、当サイトのピアノの落札データが insufficient のため載せない。

const ASOF = "2026年11月14日";
const MANUAL = "https://data.yamaha.com/files/download/other_assets/7/1291667/YA982G0_up_gp_om_ja.pdf";
const USA = "https://usa.yamaha.com/support/finding_age_of_yamaha_piano/index.html";

// [年, アップライト, グランド]。1971年以前と2000年以降は公式表の列が1つ（アップライト・グランド共通）
const TABLE: [number, number, number | null][] = [
  [1950, 42073, null], [1951, 44262, null], [1952, 47675, null], [1953, 51266, null], [1954, 57057, null],
  [1955, 63400, null], [1956, 69300, null], [1957, 77000, null], [1958, 89000, null], [1959, 102000, null],
  [1960, 124000, null], [1961, 149000, null], [1962, 188000, null], [1963, 237000, null], [1964, 298000, null],
  [1965, 368000, null], [1966, 489000, null], [1967, 570000, null], [1968, 685000, null], [1969, 805000, null],
  [1970, 960000, null], [1971, 1130000, null],
  [1972, 1317500, 1358500], [1973, 1510500, 1538500], [1974, 1745000, 1753500], [1975, 1945000, 1935000],
  [1976, 2154000, 2153000], [1977, 2384000, 2362000], [1978, 2585000, 2580500], [1979, 2810500, 2848000],
  [1980, 3001000, 3040000], [1981, 3261000, 3270000], [1982, 3465000, 3490000], [1983, 3646200, 3710500],
  [1984, 3832200, 3891600], [1985, 3987600, 4040700], [1986, 4156500, 4214600], [1987, 4334800, 4351100],
  [1988, 4491300, 4561000], [1989, 4672700, 4671400], [1990, 4837200, 4810900], [1991, 4967900, 4951200],
  [1992, 5086800, 5071800], [1993, 5204100, 5181400], [1994, 5296400, 5291500], [1995, 5375000, 5368000],
  [1996, 5446000, 5448000], [1997, 5530000, 5502000], [1998, 5579000, 5588000], [1999, 5792000, 5810000],
  [2000, 5860000, null], [2001, 5920000, null], [2002, 5970000, null], [2003, 6020000, null], [2004, 6060000, null],
  [2005, 6100000, null], [2006, 6145000, null], [2007, 6191000, null], [2008, 6220000, null], [2009, 6250000, null],
  [2010, 6280000, null], [2011, 6310000, null], [2012, 6340000, null], [2013, 6360000, null], [2014, 6380000, null],
  [2015, 6400000, null], [2016, 6420000, null], [2017, 6440000, null], [2018, 6460000, null], [2019, 6480000, null],
  [2020, 6500000, null], [2021, 6520000, null],
];

const PREFIX: [string, string][] = [
  ["T", "米国ジョージア州トマストン"],
  ["U", "米国ミシガン州サウスヘイブン"],
  ["H", "中国・杭州"],
  ["YT", "台湾・桃園"],
  ["J", "インドネシア・ジャカルタ"],
];

const FAQ = [
  {
    q: "ヤマハピアノの製造番号はどこに書いてありますか？",
    a: "ヤマハの取扱説明書では、アップライトピアノは屋根（上ふた）を開けて内部を、グランドピアノは譜面台の下を見るよう案内されています。米国ヤマハの案内では、いずれも内部の金色のプレートに刻印されていると説明されています。",
  },
  {
    q: "製造番号から何年製か分かりますか？",
    a: "米国ヤマハが、日本（浜松）で製造したピアノについて製造年ごとの製造番号の表を公開しています。製造番号がある年の番号以上で、次の年の番号未満なら、その年の製造と見るのが目安です。正確な製造時期は、ヤマハの取扱説明書のとおり、商標名・機種名・製造番号を控えてヤマハ特約楽器店に問い合わせてください。",
  },
  {
    q: "製造番号の頭にアルファベットが付いています。",
    a: "米国ヤマハの案内では、T＝米国トマストン、U＝米国サウスヘイブン、H＝中国・杭州、YT＝台湾・桃園、J＝インドネシア・ジャカルタの製造です。これらは日本製の番号表には当てはまりません。",
  },
  {
    q: "古いヤマハピアノでも売れますか？",
    a: "製造年だけで売れる・売れないは決まりません。査定では機種名・製造番号に加えて、外装や弦・ハンマー・アクションの状態、設置場所と搬出経路を確認されます。製造番号と機種名を控えたうえで、ピアノを扱う複数の業者に査定を依頼してください。",
  },
];

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "ヤマハピアノの製造番号", href: "/articles/yamaha-piano-seizou-bangou/" },
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
  alternates: { canonical: "https://gakkikaitori-biyori.com/articles/yamaha-piano-seizou-bangou/" },
  title: "ヤマハピアノの製造番号で何年製か調べる方法｜番号の場所と製造年の対応表（1950〜2021年）",
  description:
    "ヤマハピアノの製造番号の場所（アップライトは屋根の内側、グランドは譜面台の下）と、日本製ピアノの製造年ごとの製造番号の対応表を、ヤマハの取扱説明書と米国ヤマハの公開表から整理しました。",
  openGraph: {
    images: ["/og-image.png"],
    title: "ヤマハピアノの製造番号で何年製か調べる方法｜番号の場所と製造年の対応表",
    description: "製造番号の場所と、日本製ピアノの製造年ごとの製造番号表（1950〜2021年・公式表）。",
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "ヤマハピアノの製造番号で何年製か調べる方法｜番号の場所と製造年の対応表",
        datePublished: "2026-11-14",
        dateModified: "2026-11-14",
        author: { "@type": "Organization", name: "楽器買取びより編集部" },
        mainEntityOfPage: "https://gakkikaitori-biyori.com/articles/yamaha-piano-seizou-bangou/",
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
          { "@type": "ListItem", position: 3, name: "ヤマハピアノの製造番号", item: "https://gakkikaitori-biyori.com/articles/yamaha-piano-seizou-bangou/" },
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
          ヤマハピアノの製造番号で何年製か調べる方法｜番号の場所と製造年の対応表
        </h1>
        <p className="text-xs text-warm-gray mb-8">
          ヤマハの
          <a href={MANUAL} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            アップライトピアノ／グランドピアノ取扱説明書
          </a>
          と、米国ヤマハの
          <a href={USA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            Finding the Age of Your Yamaha Piano
          </a>
          を{ASOF}に確認して記載しています。
        </p>

        <div className="border-l-4 border-accent bg-white p-5 mb-10">
          <p className="text-xs font-medium text-accent mb-2">概要</p>
          <p className="text-sm leading-relaxed mb-3">
            製造番号は、<strong>アップライトピアノなら屋根（上ふた）を開けた内部、グランドピアノなら譜面台の下</strong>にあります（ヤマハ取扱説明書）。
            内部の金色のプレートに刻印されています。
          </p>
          <p className="text-sm leading-relaxed mb-0">
            番号が分かれば、下の<strong>製造年と製造番号の対応表</strong>でおおよその製造年が分かります。
            例えば製造番号 5,500,000 のアップライトは、1996年の 5,446,000 以上・1997年の 5,530,000 未満なので、<strong>1996年製が目安</strong>です。
          </p>
        </div>

        <h2 id="where" className="text-xl font-bold mt-12 mb-4">製造番号の場所</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <tbody>
              <tr className="border-b border-warm-200">
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-44">アップライトピアノ</th>
                <td className="px-4 py-3 leading-relaxed">屋根を開けて内部を見る。金色のプレートに刻印</td>
              </tr>
              <tr>
                <th className="text-left align-top px-4 py-3 bg-warm-50 font-medium whitespace-nowrap w-44">グランドピアノ</th>
                <td className="px-4 py-3 leading-relaxed">譜面台の下を見る。内部の金色のプレートに刻印</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          取扱説明書には、製造番号は品質管理上重要なもので、<strong>本体と保証書の製造番号が一致していることを確認する</strong>よう書かれています。
          保証書（ブックレット）は、アップライトはピアノ内部、グランドはピアノ下部または内部のホルダーに保管されています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          取扱説明書は、屋根の開閉は操作手順に沿ってゆっくり静かに行うこと、特にグランドピアノの屋根は重いので十分に注意すること、ピアノの中に手を入れないことを注意事項に挙げています。番号は内部に手を入れずに目で確認してください。
        </p>

        <h2 id="table" className="text-xl font-bold mt-12 mb-4">製造年と製造番号の対応表（日本・浜松製）</h2>
        <p className="text-sm leading-relaxed mb-4">
          米国ヤマハが公開している、日本（浜松）で製造したヤマハピアノの製造年ごとの製造番号です。
          <strong>製造番号がその年の番号以上で、次の年の番号未満であれば、その年の製造</strong>と見るのが目安です。
          1972〜1999年はアップライトとグランドで番号が分かれています。
        </p>
        <div className="overflow-x-auto mb-4 max-h-[36rem] overflow-y-auto border border-warm-200">
          <table className="w-full text-sm">
            <thead className="bg-warm-50 sticky top-0">
              <tr>
                <th className="text-left px-4 py-2 font-medium">製造年</th>
                <th className="text-right px-4 py-2 font-medium">アップライト</th>
                <th className="text-right px-4 py-2 font-medium">グランド</th>
              </tr>
            </thead>
            <tbody>
              {TABLE.map(([y, up, gr]) => (
                <tr key={y} className="border-t border-warm-200">
                  <td className="px-4 py-2 whitespace-nowrap">{y}年</td>
                  {gr === null ? (
                    <td className="px-4 py-2 text-right tabular-nums" colSpan={2}>
                      {up.toLocaleString()}（共通）
                    </td>
                  ) : (
                    <>
                      <td className="px-4 py-2 text-right tabular-nums">{up.toLocaleString()}</td>
                      <td className="px-4 py-2 text-right tabular-nums">{gr.toLocaleString()}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          出典：
          <a href={USA} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            Yamaha Corporation of America「Finding the Age of Your Yamaha Piano」
          </a>
          の「Pianos Manufactured in Hamamatsu, Japan」表（{ASOF}確認）。同表は1917年から掲載されています。数字は公式表のまま転記しています。
        </p>
        <p className="text-sm leading-relaxed mb-10">
          ⚠️ この表は米国ヤマハの公開資料です。国内向けの資料では、取扱説明書が「ピアノの製造時期については、商標名、機種名及び製造番号をお調べの上、お買上げのヤマハ特約楽器店にお問い合わせください」と案内しています。
          年の境目に近い番号や、売却・修理の判断に使う場合は、特約楽器店で確認してください。
        </p>

        <h2 id="prefix" className="text-xl font-bold mt-12 mb-4">番号の頭にアルファベットがある場合</h2>
        <p className="text-sm leading-relaxed mb-4">
          米国ヤマハの案内では、製造番号の先頭の文字で製造地が分かります。これらは上の日本製の表には当てはまりません。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-warm-200">
            <thead className="bg-warm-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium">先頭の文字</th>
                <th className="text-left px-4 py-3 font-medium">製造地</th>
              </tr>
            </thead>
            <tbody>
              {PREFIX.map(([p, place]) => (
                <tr key={p} className="border-t border-warm-200">
                  <td className="px-4 py-3 font-medium">{p}</td>
                  <td className="px-4 py-3">{place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-10">
          出典：同上（米国市場向けに製造されたピアノについての案内）。日本国内で販売されたピアノにアルファベット付きの番号がある場合は、特約楽器店にお問い合わせください。
        </p>

        <h2 id="sell" className="text-xl font-bold mt-12 mb-4">売る前に控えておくこと</h2>
        <ul className="list-disc pl-6 text-sm leading-relaxed space-y-2 mb-4">
          <li><strong>商標名・機種名</strong>：「YAMAHA」などの商標と、U1・U3・C3 などの機種名（取扱説明書が製造時期の問い合わせに必要な情報として挙げています）</li>
          <li><strong>製造番号</strong>：上記の場所に刻印された番号。写真に撮っておくと伝え間違いを防げます</li>
          <li><strong>設置場所と搬出経路</strong>：階数・エレベーターの有無・クレーンが必要かどうか</li>
        </ul>
        <p className="text-sm leading-relaxed mb-4">
          当サイトでは、ヤフオク!の落札データから楽器の中古相場を毎週集計していますが、ピアノは本体の出品が少なく、部品や付属品の出品が混ざるため、
          <strong>相場として十分なデータが得られず金額を掲載していません</strong>。金額は製造番号と機種名を伝えて、複数の業者の査定で確認してください。
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            ["yamaha-u1-kaitori", "ヤマハ U1"],
            ["yamaha-u3-kaitori", "ヤマハ U3"],
            ["yamaha-c3-kaitori", "ヤマハ C3"],
            ["piano-kaitori", "ピアノ買取"],
            ["grand-piano-kaitori", "グランドピアノ買取"],
          ].map(([slug, label]) => (
            <Link
              key={slug}
              href={`/articles/${slug}/`}
              className="text-sm border border-warm-200 bg-white px-3 py-1.5 hover:border-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
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
          currentSlug="yamaha-piano-seizou-bangou"
          relatedSlugs={["piano-kaitori", "yamaha-u1-kaitori", "yamaha-u3-kaitori", "yamaha-c3-kaitori", "yamaha-kaitori", "gakki-kaitori-sagi"]}
        />
      </article>
    </>
  );
}

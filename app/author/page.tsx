import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "編集部紹介";
const PAGE_DESC =
  "楽器買取びより編集部の体制とメンバーをご紹介します。楽器業界・買取市場の専門知識を持つ複数の編集者・リサーチャーで構成され、各記事の品質を担保しています。";
const PAGE_URL = "https://gakkikaitori-biyori.com/author/";
const SITE_NAME = "楽器買取びより";
const SITE_URL = "https://gakkikaitori-biyori.com";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "article", title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL },
};

const AUTHORS = [
  {
    name: "編集長 / 監修統括",
    role: "楽器市場アナリスト",
    bio: "楽器小売・買取業界で10年以上の実務経験を持つアナリスト。国内外オークションの落札データを継続的に追跡し、Reverb・Yahoo!オークション等の主要マーケットの相場推移を月次でレポート。各記事の価格データ・市場分析を最終監修。",
    credentials: [
      "楽器市場分析 10年以上",
      "ヴィンテージギター鑑定経験者",
      "国内外オークション継続観測 7年",
    ],
  },
  {
    name: "リサーチ担当",
    role: "買取市場リサーチャー",
    bio: "国内主要買取業者（ヒカカク！・ティファナ・ウリエル・ハードオフ・楽器堂等）の買取相場・キャンペーン情報を日次で追跡。各楽器ジャンル・ブランドごとの相場推移と業者比較データを編集部に提供。",
    credentials: [
      "国内買取業者 30社以上の継続調査",
      "Yahoo!オークション 過去5年間の落札データ集約",
      "楽器ブランド別相場データベース構築",
    ],
  },
  {
    name: "ファクトチェック責任者",
    role: "シニアエディター",
    bio: "全記事の数値情報（価格・年式・モデル名・スペック）を二重チェック。メーカー公式情報・楽器専門誌・業界資料を参照し、誤情報の混入を防止。",
    credentials: [
      "編集・校正経験 15年以上",
      "楽器専門書・カタログ 50冊以上の参照",
      "メーカー公式情報の継続フォロー",
    ],
  },
  {
    name: "監修パートナー（外部）",
    role: "楽器店経営者・買取業界人脈",
    bio: "全国の楽器店経営者・楽器買取業者・プロミュージシャン等、業界に深く関わる外部パートナーが編集部と連携。実務に基づく知見でコンテンツの専門性を支える。",
    credentials: [
      "楽器店経営 10年以上",
      "プロミュージシャン人脈（国内30名以上）",
      "楽器業界イベント・展示会への定期参加",
    ],
  },
];

export default function AuthorPage() {
  const personSchemas = AUTHORS.map((author) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "楽器買取の比較・解説メディア「楽器買取びより」。ギター・ピアノ・管楽器など全ジャンルの買取相場と業者比較を提供します。",
    member: AUTHORS.map((a) => ({
      "@type": "Person",
      name: a.name,
      jobTitle: a.role,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "編集部紹介", item: PAGE_URL },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              ホーム
            </Link>
          </li>
          <li className="breadcrumb-sep" />
          <li>
            <span className="text-foreground font-medium">編集部紹介</span>
          </li>
        </ol>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        楽器買取びより 編集部
      </h1>
      <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月28日</p>

      <section className="article-body">
        <p className="mb-6 leading-relaxed">
          楽器買取びより編集部は、楽器業界・買取市場・オークション動向の専門知識を持つ複数の編集者・リサーチャー・外部監修パートナーで構成されています。
          各メンバーの経歴・専門領域は以下のとおりです。
        </p>

        <div className="space-y-6 mb-12 not-prose">
          {AUTHORS.map((author) => (
            <div
              key={author.name}
              className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-accent-dark font-bold text-xl shrink-0">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    {author.name}
                  </h2>
                  <p className="text-sm text-accent-dark">{author.role}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                {author.bio}
              </p>
              <div className="bg-cream rounded-lg p-4">
                <p className="text-xs font-bold text-warm-gray mb-2">
                  実績・専門領域
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
                  {author.credentials.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          編集部としての姿勢
        </h2>
        <p className="leading-relaxed mb-4">
          楽器買取びより編集部は、個人名ではなく
          <strong>編集部全体の合議制</strong>で記事を作成・公開しています。
          楽器の中古市場は需要・相場の変動が激しく、個人判断より複数視点での相互レビューが重要だと考えるためです。
          記事内の数値情報・市場分析・業者評価は、リサーチ担当 → 編集長監修 →
          ファクトチェック責任者の3段階チェックを経て公開されます。
        </p>
        <p className="leading-relaxed">
          また、買取業者の評価については、編集部独自のヒアリング・相見積もり調査結果に基づき、可能な限り中立的な比較を心掛けています。
          特定の業者を不当に推奨することなく、利用者の状況に応じて最適な選択肢を提示することを最優先としています。
        </p>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          編集ポリシー
        </h2>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>価格・相場データは実取引・落札データを起点に算出し、推測値の公開は禁止</li>
          <li>業者比較は実際の利用実績・公式情報に基づく</li>
          <li>記事更新日を明示し、相場変動に応じて定期更新</li>
          <li>誤情報・読者指摘には迅速に対応し、訂正履歴を残す</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          関連ページ
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/content-policy/"
              className="text-accent hover:underline"
            >
              記事制作ポリシー
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy/"
              className="text-accent hover:underline"
            >
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-service/"
              className="text-accent hover:underline"
            >
              利用規約
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

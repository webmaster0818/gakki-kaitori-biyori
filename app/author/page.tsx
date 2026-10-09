import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "運営方針とデータの確認手順";
const PAGE_DESC =
  "楽器買取びよりの運営方針と、掲載している相場・業者・店舗データをどこから取得し、いつ・どのように更新しているかをご説明します。";
const PAGE_URL = "https://gakkikaitori-biyori.com/author/";
const SITE_NAME = "楽器買取びより";
const SITE_URL = "https://gakkikaitori-biyori.com";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: { images: ["/og-image.png"], type: "article", title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL },
};

export default function AuthorPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "楽器買取の比較・解説メディア「楽器買取びより」。ギター・ピアノ・管楽器など全ジャンルの買取相場と業者比較を提供します。",
    parentOrganization: {
      "@type": "Organization",
      name: "株式会社MediaX",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: PAGE_TITLE, item: PAGE_URL },
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

      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              ホーム
            </Link>
          </li>
          <li className="breadcrumb-sep" />
          <li>
            <span className="text-foreground font-medium">{PAGE_TITLE}</span>
          </li>
        </ol>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        {SITE_NAME} {PAGE_TITLE}
      </h1>
      <p className="text-warm-gray text-sm mb-8">最終更新: 2026年10月7日</p>

      <section className="article-body">
        <p className="mb-4 leading-relaxed">
          「{SITE_NAME}」は、楽器の売却を検討している方に向けて、中古相場の目安と買取業者の比較情報を提供するWebメディアです。
          運営者は株式会社MediaXです（所在地などは
          <Link href="/privacy-policy/" className="text-accent hover:underline">プライバシーポリシー</Link>
          の「お問い合わせ窓口」に記載）。
        </p>
        <p className="mb-8 leading-relaxed">
          このページでは、個人の執筆者や経歴ではなく、
          <strong>当サイトが実際に行っている運営方針と、掲載データの取得・更新の手順</strong>
          を公開しています。記事は編集部名義で作成し、個人名・肩書・経歴は掲載していません。
        </p>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          運営方針
        </h2>

        <div className="space-y-6 mb-10 not-prose">
          <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-base text-foreground mb-2">1. 相場は落札データの中央値で示し、サンプル数と取得日を明記する</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              モデル別・ブランド別の相場は、Yahoo!オークションの過去180日分の落札データから、四分位範囲（IQR）による外れ値除去を行ったうえで中央値を算出しています。
              相場を表示する箇所には、算出に使ったサンプル数と取得日、検索に使った条件を併記します。
              サンプル数が不足しているモデルや、部品・ジャンク品が混じって中央値が実態と離れるモデル（アップライトピアノ・グランドピアノなど）は、金額を表示せず「データ不足のため非表示」としています。
            </p>
          </div>

          <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-base text-foreground mb-2">2. 中古相場と買取査定額は別のものとして扱う</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              表示している中央値は「中古品が落札された実取引価格」であり、買取業者の査定額ではありません。
              一般に買取査定額は中古相場の50〜70%程度が目安になりますが、年式・状態・付属品で変わるため、当サイトは買取額を保証しません。
              週次更新と明記していない価格（地域ページなどの目安表）は、自動更新の対象外の参考値です。
            </p>
          </div>

          <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-base text-foreground mb-2">3. 業者情報は各社の公式サイトの公開情報のみを使う</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              買取業者の店舗数・買取方法・対応エリア・手数料などは、各社の公式サイトで確認できる情報だけを掲載し、取得元のURLを出典として保持しています。
              推測で埋めることはせず、公式に明記がない項目は「不明（要問合せ）」と表記します。
              地域ページの店舗一覧も、各社公式の店舗ページで実在を確認できた店舗のみを掲載しています。
            </p>
          </div>

          <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-base text-foreground mb-2">4. 口コミ本文は転載しない</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              第三者が投稿した口コミ・レビューの本文は転載しません。業者の評判に触れる場合は、参照した媒体と調査時点を明記したうえで、内容の傾向を要約するにとどめます。
              「高く売れる」などの断定的な表現も使いません。
            </p>
          </div>

          <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-base text-foreground mb-2">5. 広告と評価を分ける</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              当サイトはプロモーション（PR）を含み、記事内のリンク経由でお申し込みがあった場合に紹介報酬が発生することがあります。
              広告報酬の有無で比較表の内容や評価を変えることはありません。記事の作り方は
              <Link href="/content-policy/" className="text-accent hover:underline">記事制作ポリシー</Link>
              をご覧ください。
            </p>
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          データの更新手順
        </h2>

        <div className="not-prose space-y-4 mb-10">
          <div className="bg-cream rounded-lg p-4">
            <p className="text-xs font-bold text-warm-gray mb-2">毎週（月曜 4:00）に自動実行する処理</p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-foreground/80 leading-relaxed">
              <li>対象モデル（ギター・ベース・アンプ・エフェクター・サックス・トランペット・ドラム・ピアノの約20モデル）について、Yahoo!オークションの過去180日分の落札データを取得する</li>
              <li>外れ値を除去して中央値を算出し、モデル別の履歴に追記する。サンプル不足・異常値のモデルは非表示フラグを付ける</li>
              <li>
                <Link href="/souba-ranking/" className="text-accent hover:underline">相場ランキング</Link>
                ・
                <Link href="/souba-index/" className="text-accent hover:underline">相場指数</Link>
                ・
                <Link href="/widget/" className="text-accent hover:underline">相場ウィジェット</Link>
                を同じデータから再生成する
              </li>
              <li>サイト全体を再生成し、モデル記事・ブランドページの相場カードを最新の中央値に更新して公開する</li>
            </ol>
          </div>
          <div className="bg-cream rounded-lg p-4">
            <p className="text-xs font-bold text-warm-gray mb-2">毎月1日に自動実行する処理</p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-foreground/80 leading-relaxed">
              <li>上記の相場データを再取得する</li>
              <li>記事に表示している年月の表記と更新日を当月に更新し、再生成して公開する</li>
            </ol>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80 leading-relaxed">
            <li>取得に失敗した週は前回取得分の表示が残ります。相場カードの「取得日」が直近でない場合は、その日付時点の値です。</li>
            <li>業者情報・店舗情報は自動更新の対象外です。公式サイトを確認のうえ、追加・修正のたびに手動で更新しています。</li>
          </ul>
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          掲載していないもの
        </h2>
        <ul className="list-disc pl-6 space-y-2 leading-relaxed">
          <li>執筆者・監修者の個人名、肩書、経歴、顔写真</li>
          <li>第三者の口コミ・レビューの本文</li>
          <li>公式サイトで確認できない買取条件や店舗</li>
          <li>サンプル不足・異常値と判定したモデルの相場金額</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
          関連ページ
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/content-policy/" className="text-accent hover:underline">
              記事制作ポリシー
            </Link>
          </li>
          <li>
            <Link href="/souba-ranking/" className="text-accent hover:underline">
              楽器買取相場ランキング（週次更新）
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy/" className="text-accent hover:underline">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service/" className="text-accent hover:underline">
              利用規約
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

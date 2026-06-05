import type { Metadata } from "next";
import Link from "next/link";
import articlesMetadata from "@/data/articles-metadata.json";

const SITE_URL = "https://gakkikaitori-biyori.com";

export const metadata: Metadata = {
  title: "楽器買取の記事一覧｜楽器・ブランド・地域・売り方別ガイド",
  description:
    "楽器買取に関する記事一覧。ピアノ・ギター・管楽器など楽器別、YAMAHA・Gibson・Fenderなどブランド別、地域別の買取おすすめ、相場・高く売るコツまで網羅。あなたの楽器の売却に役立つ情報が見つかります。",
};

type ArticleCategory = "instrument" | "brand" | "region" | "howto";
type ArticleMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  category: ArticleCategory;
};

const GROUP_ORDER: ArticleCategory[] = ["instrument", "brand", "region", "howto"];
const GROUP_LABEL: Record<ArticleCategory, string> = {
  instrument: "楽器の種類別ガイド",
  brand: "ブランド別ガイド",
  region: "地域別の楽器買取ガイド",
  howto: "売り方・高く売るための知識",
};

function BreadcrumbSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles/` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export default function ArticlesIndexPage() {
  const all = articlesMetadata as ArticleMeta[];
  const grouped: Record<ArticleCategory, ArticleMeta[]> = { instrument: [], brand: [], region: [], howto: [] };
  for (const m of all) grouped[m.category]?.push(m);

  return (
    <>
      <BreadcrumbSchema />
      <article className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">記事一覧</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">楽器買取の記事一覧</h1>
        <p className="text-warm-gray text-sm mb-10 leading-relaxed">
          楽器を高く売るための情報を、楽器の種類・ブランド・地域・売り方別にまとめています。全{all.length}記事。お持ちの楽器に近いガイドからご覧ください。
        </p>

        <div className="space-y-10">
          {GROUP_ORDER.map((category) => {
            const list = grouped[category];
            if (!list || list.length === 0) return null;
            return (
              <section key={category}>
                <h2 className="font-display text-lg font-bold text-accent-dark mb-4 pb-2 border-b border-warm-border">
                  {GROUP_LABEL[category]}（{list.length}）
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {list.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/articles/${m.slug}/`}
                      className="block bg-white border border-warm-border rounded-xl p-4 hover:border-accent hover:shadow-md transition-all"
                    >
                      <span className="inline-block text-xs bg-gold/10 text-gold-dark rounded px-2 py-0.5 mb-2">{m.badge}</span>
                      <p className="text-sm font-bold text-foreground leading-snug">{m.shortTitle || m.title}</p>
                      <p className="text-xs text-warm-gray mt-1 line-clamp-2">{m.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
}

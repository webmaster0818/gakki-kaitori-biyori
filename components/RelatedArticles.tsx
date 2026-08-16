import Link from "next/link";
import articlesMetadata from "@/data/articles-metadata.json";
import PriceDisclaimer from "@/components/PriceDisclaimer";
import RecommendedServices from "@/components/RecommendedServices";

type ArticleCategory = "instrument" | "brand" | "model" | "region" | "howto";

type ArticleMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  category: ArticleCategory;
};

type Props = {
  currentSlug: string;
  relatedSlugs: string[];
};

/**
 * 業者そのものを調べたい人の受け皿への導線。全記事の末尾に出す。
 *
 * ⚠️ なぜ全記事に置くか:
 *   指名クエリ「楽器の買取屋さん」(251表示/28日) に対して、専用の検証ページではなく
 *   名古屋・横浜・福岡などのエリア記事10本が7〜10位に分散して出ており、クリックは0だった。
 *   専用ページは自分の主題語ですら74位で、内部リンクが23ファイルしか無かったことが主因。
 *   1箇所の変更で全記事から参照させ、どのページが主題を持つのかを明確にする。
 */
function BuyerReviewLink({ currentSlug }: { currentSlug: string }) {
  const slug = "gakki-no-kaitoriyasan-hyoban";
  if (currentSlug === slug) return null;
  return (
    <p className="mt-8 text-sm text-warm-gray">
      業者そのものを調べている方は{" "}
      <Link href={`/articles/${slug}/`} className="text-accent-dark font-medium underline">
        楽器の買取屋さんの店舗一覧・運営会社・評判の検証
      </Link>{" "}
      もあわせてご覧ください。
    </p>
  );
}

const metadataMap: Record<string, ArticleMeta> = (() => {
  const map: Record<string, ArticleMeta> = {};
  for (const m of articlesMetadata as ArticleMeta[]) {
    map[m.slug] = m;
  }
  return map;
})();

const GROUP_ORDER: ArticleCategory[] = ["instrument", "brand", "model", "region", "howto"];
const GROUP_LABEL: Record<ArticleCategory, string> = {
  instrument: "楽器カテゴリ",
  brand: "ブランド別",
  model: "人気モデル別",
  region: "地域別",
  howto: "高く売るためのガイド",
};

export default function RelatedArticles({ currentSlug, relatedSlugs }: Props) {
  const seen = new Set<string>();
  const items: ArticleMeta[] = [];
  for (const slug of relatedSlugs) {
    if (slug === currentSlug) continue;
    if (seen.has(slug)) continue;
    const meta = metadataMap[slug];
    if (!meta) continue;
    seen.add(slug);
    items.push(meta);
  }
  // 関連記事が無くてもおすすめ業者＋価格注記は必ず表示する
  if (items.length === 0)
    return (
      <>
        <RecommendedServices />
        <PriceDisclaimer />
        <BuyerReviewLink currentSlug={currentSlug} />
      </>
    );

  const grouped: Record<ArticleCategory, ArticleMeta[]> = {
    instrument: [],
    brand: [],
    model: [],
    region: [],
    howto: [],
  };
  for (const item of items) {
    grouped[item.category].push(item);
  }

  return (
    <>
    <RecommendedServices />
    <PriceDisclaimer />
    <BuyerReviewLink currentSlug={currentSlug} />
    <aside className="mt-12 pt-8 border-t border-warm-border">
      <h2 className="font-display text-lg font-bold mb-6">関連記事</h2>
      <div className="space-y-8">
        {GROUP_ORDER.map((category) => {
          const list = grouped[category];
          if (list.length === 0) return null;
          return (
            <section key={category}>
              <h3 className="text-sm font-bold text-accent-dark mb-3 pb-2 border-b border-warm-border">
                {GROUP_LABEL[category]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {list.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/articles/${item.slug}/`}
                    className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group"
                  >
                    <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <h4 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">
                      {item.shortTitle}
                    </h4>
                    <p className="text-xs text-warm-gray mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </aside>
    </>
  );
}

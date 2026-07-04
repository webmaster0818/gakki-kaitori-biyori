import Link from "next/link";

// 種別ヘッド→モデル別買取ページのハブ導線（意図分離＋内部リンク集中）。
// 実在するモデルページのみをチップでリンクする（架空ページは作らない）。
type Item = { slug: string; label: string };

export default function ModelHubChips({ heading, intro, items }: { heading: string; intro?: string; items: Item[] }) {
  if (!items.length) return null;
  return (
    <section className="my-8 bg-cream/60 rounded-lg border border-warm-border p-5">
      <h2 className="text-lg font-bold text-foreground mb-1">{heading}</h2>
      {intro && <p className="text-sm text-warm-gray mb-4">{intro}</p>}
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <Link
            key={it.slug}
            href={`/articles/${it.slug}/`}
            className="inline-block text-sm text-accent-dark bg-white border border-warm-border rounded-full px-3 py-1.5 hover:border-accent transition-colors"
          >
            {it.label}の買取相場 →
          </Link>
        ))}
      </div>
    </section>
  );
}

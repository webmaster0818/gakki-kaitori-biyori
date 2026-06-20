import Link from "next/link";
import data from "@/data/souba-ranking-gakki.json";

type M = { slug: string; name: string; category: string; median: number; sample_n: number; change_1w: number | null };

/**
 * ブランドページ用：当該ブランドの主要モデルの実勢相場（ヤフオク落札中央値）を表示。
 * data/souba-ranking-gakki.json を参照するため週次cronの再ビルドで自動更新される。
 * 該当モデルが無いブランドでは何も描画しない（null）。
 */
export default function BrandSpotPrices({ brand }: { brand: string }) {
  const models = (data.models as M[])
    .filter((m) => m.slug.startsWith(brand + "-"))
    .sort((a, b) => b.median - a.median);
  if (!models.length) return null;
  const updated = data.updated as string;
  return (
    <section className="my-8 bg-white rounded-lg border border-warm-border p-5">
      <h2 className="text-lg font-bold text-foreground mb-1">主要モデルの実勢買取相場【{updated}更新】</h2>
      <p className="text-xs text-warm-gray mb-3">
        ヤフオク!落札データ（過去180日）の中央値（IQR外れ値除去）を当サイトが独自集計。買取額は中央値の概ね50〜70%が目安です（実額は無料査定で確認）。
      </p>
      <ul>
        {models.map((m) => (
          <li key={m.slug} className="flex items-center justify-between gap-3 py-2 border-b border-warm-border last:border-0">
            <Link href={`/articles/${m.slug}/`} className="font-medium text-foreground hover:text-accent transition-colors">
              {m.name}
            </Link>
            <span className="tabular-nums text-sm text-foreground whitespace-nowrap">中古中央値 ¥{m.median.toLocaleString()}</span>
          </li>
        ))}
      </ul>
      <Link href="/souba-ranking/" className="inline-block mt-3 text-sm font-medium text-accent hover:text-accent-dark transition-colors">
        ▶ 全モデルの楽器買取相場ランキングを見る
      </Link>
    </section>
  );
}

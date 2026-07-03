import Link from "next/link";
import data from "@/data/souba-ranking-gakki.json";

type M = { slug: string; name: string; category: string; median: number; sample_n: number; change_1w: number | null };

const GUITAR_CATEGORIES = ["エレキギター"];
const GEAR_CATEGORIES = ["アンプ", "エフェクター"];

function Row({ m }: { m: M }) {
  const chg = m.change_1w;
  const chgLabel = chg === null ? "—" : `${chg > 0 ? "+" : ""}${chg.toFixed(1)}%`;
  const chgClass = chg === null ? "text-warm-gray" : chg > 0 ? "text-accent-dark font-medium" : chg < 0 ? "text-warm-gray" : "text-warm-gray";
  return (
    <tr className="bg-white even:bg-cream/50">
      <td className="px-4 py-3">
        <Link href={`/articles/${m.slug}/`} className="font-medium text-foreground hover:text-accent transition-colors">
          {m.name}
        </Link>
      </td>
      <td className="px-4 py-3 tabular-nums whitespace-nowrap">¥{m.median.toLocaleString()}</td>
      <td className={`px-4 py-3 tabular-nums whitespace-nowrap ${chgClass}`}>{chgLabel}</td>
    </tr>
  );
}

/**
 * ギター買取×都市ページ用：ギター系（エレキギター本体＋ギター関連機材）の
 * 実勢相場（ヤフオク!落札中央値）を週次表示。data/souba-ranking-gakki.json を
 * 参照するため、週次cronの再ビルドで自動更新される。
 * データに存在するギター系モデルのみ表示（Martin等データ外のブランドは載せない）。
 */
export default function GuitarSpotPrices() {
  const all = data.models as M[];
  const guitars = all.filter((m) => GUITAR_CATEGORIES.includes(m.category)).sort((a, b) => b.median - a.median);
  const gear = all.filter((m) => GEAR_CATEGORIES.includes(m.category)).sort((a, b) => b.median - a.median);
  if (!guitars.length) return null;
  const updated = data.updated as string;
  return (
    <section className="my-8 bg-white rounded-lg border border-warm-border p-5">
      <h3 className="text-lg font-bold text-foreground mb-1">ギター主要モデルの実勢買取相場【{updated}更新】</h3>
      <p className="text-xs text-warm-gray mb-3">
        ヤフオク!落札データ（過去180日）の中央値（IQR外れ値除去）を当サイトが独自集計し、毎週更新しています。中古楽器の相場は全国のオンライン市場で形成されるため、都市による大きな差はありません。買取店の提示額は中央値の概ね50〜70%が目安です（実額は無料査定で確認）。
      </p>
      <div className="table-wrapper mb-4">
        <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
          <thead className="bg-accent-dark text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">モデル</th>
              <th className="px-4 py-3 text-left font-medium">中古中央値</th>
              <th className="px-4 py-3 text-left font-medium">前週比</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-border">
            {guitars.map((m) => (
              <Row key={m.slug} m={m} />
            ))}
          </tbody>
        </table>
      </div>
      {gear.length > 0 && (
        <>
          <h4 className="text-sm font-bold text-foreground mb-2">ギターアンプ・エフェクターの実勢相場</h4>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">中古中央値</th>
                  <th className="px-4 py-3 text-left font-medium">前週比</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                {gear.map((m) => (
                  <Row key={m.slug} m={m} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <Link href="/souba-ranking/" className="inline-block text-sm font-medium text-accent hover:text-accent-dark transition-colors">
        ▶ 全モデルの楽器買取相場ランキングを見る
      </Link>
    </section>
  );
}

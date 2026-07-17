import Link from "next/link";
import idx from "@/data/souba-index-gakki.json";
import ranking from "@/data/souba-ranking-gakki.json";

// G3売り時ガイド: 一次データ(相場指数＋相場ランキング)から「今が売り時か」のシグナルを提示。
// 週次cron(weekly-yahoo-update.sh)で両JSONが再生成されるため自動更新。数値は全て実データ・捏造なし。

type Point = { date: string; index: number };
type M = { slug: string; name: string; category: string; median: number; sample_n: number; change_1w: number | null };

export function SellTimingSignal() {
  const composite = idx.composite as Point[];
  const latest = composite[composite.length - 1];
  const fromBase = Math.round((latest.index - 100) * 100) / 100;
  const trend = fromBase > 0.5 ? "上昇傾向" : fromBase < -0.5 ? "軟調（やや下落）" : "横ばい";
  const trendNote =
    fromBase > 0.5
      ? "市場全体は上向き。相場が伸びている今は、急がず値動きを見ながら売却先を比較する余裕があります。"
      : fromBase < -0.5
        ? "市場全体はやや軟調。下落が続くモデルは、待つほど下がる可能性があるため早めの査定が有利になりやすい局面です。"
        : "市場全体は横ばい。大きな追い風・向かい風はないため、モデルごとの値動き（下記）で判断するのがおすすめです。";

  const models = (ranking.models as M[]).filter((m) => m.change_1w !== null);
  const risers = [...models].sort((a, b) => (b.change_1w ?? 0) - (a.change_1w ?? 0)).filter((m) => (m.change_1w ?? 0) > 0).slice(0, 5);
  const fallers = [...models].sort((a, b) => (a.change_1w ?? 0) - (b.change_1w ?? 0)).filter((m) => (m.change_1w ?? 0) < 0).slice(0, 5);
  const pct = (v: number | null) => (v === null ? "—" : `${v > 0 ? "+" : ""}${v}%`);

  return (
    <div className="not-prose my-8 rounded-xl border border-warm-gray/25 bg-cream/50 p-6">
      <p className="text-xs font-bold tracking-wider text-accent mb-1">当サイト独自データ・毎週更新</p>
      <h3 className="text-xl font-bold text-foreground mb-4">今の中古楽器相場は「売り時」？</h3>

      {/* 市場全体（指数） */}
      <div className="rounded-lg bg-white border border-warm-gray/20 p-4 mb-5">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm text-warm-gray">中古楽器買取相場指数（総合・基準週=100）</span>
          <span className="text-lg font-bold text-foreground">
            {latest.index}
            <span className={`ml-2 text-sm ${fromBase > 0 ? "text-emerald-700" : fromBase < 0 ? "text-rose-600" : "text-warm-gray"}`}>
              基準比 {fromBase >= 0 ? "+" : ""}{fromBase}
            </span>
          </span>
        </div>
        <p className="text-sm font-medium text-foreground">市場全体：{trend}</p>
        <p className="text-sm text-warm-gray leading-relaxed mt-1">{trendNote}</p>
        <Link href="/souba-index/" className="inline-block mt-2 text-sm font-medium text-accent hover:text-accent-dark">▶ 相場指数の推移を見る</Link>
      </div>

      {/* モデル別の値動き */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-white border border-warm-gray/20 p-4">
          <p className="text-sm font-bold text-emerald-700 mb-2">値上がり中のモデル（焦らず比較を）</p>
          {risers.length === 0 ? (
            <p className="text-xs text-warm-gray">直近で明確な値上がりはありません。</p>
          ) : (
            <ul className="space-y-1 text-sm">
              {risers.map((m) => (
                <li key={m.slug} className="flex justify-between">
                  <span className="text-foreground">{m.name}</span>
                  <span className="text-emerald-700 font-medium tabular-nums">{pct(m.change_1w)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-lg bg-white border border-warm-gray/20 p-4">
          <p className="text-sm font-bold text-rose-600 mb-2">値下がり中のモデル（早めの査定が有利）</p>
          {fallers.length === 0 ? (
            <p className="text-xs text-warm-gray">直近で明確な値下がりはありません。</p>
          ) : (
            <ul className="space-y-1 text-sm">
              {fallers.map((m) => (
                <li key={m.slug} className="flex justify-between">
                  <span className="text-foreground">{m.name}</span>
                  <span className="text-rose-600 font-medium tabular-nums">{pct(m.change_1w)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="text-xs text-warm-gray mt-3">
        ※前週比はヤフオク!落札中央値の変化。相場は中古実勢で、買取査定額はこの50〜70%が目安（保証しません）。個別モデルの値動きは
        <Link href="/souba-ranking/" className="text-accent hover:text-accent-dark underline mx-1">相場ランキング</Link>
        で確認できます。
      </p>
    </div>
  );
}

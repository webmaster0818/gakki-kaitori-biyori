import type { Metadata } from "next";
import Link from "next/link";
import idx from "@/data/souba-index-gakki.json";

type Point = { date: string; index: number };
const composite = idx.composite as Point[];
const categories = idx.categories as Record<string, Point[]>;
const latest = composite[composite.length - 1];
const prev = composite[composite.length - 2];
const wow = Math.round((latest.index - prev.index) * 100) / 100;
const fromBase = Math.round((latest.index - 100) * 100) / 100;
const total = (idx.constituents as { total: number; by_category: Record<string, number> });
const fmtDate = (d: string) => d.replace(/^\d{4}-0?(\d+)-0?(\d+)$/, "$1/$2");

export const metadata: Metadata = {
  title: `中古楽器買取相場指数【${idx.latest_date}】ギター・管楽器の市場インデックス（最新 ${latest.index}）`,
  description: `人気楽器${total.total}モデルのヤフオク!実勢中央値を合成した「中古楽器買取相場指数」。基準週（${idx.base_date}）=100として週次で自動更新。最新値${latest.index}（前週比${wow >= 0 ? "+" : ""}${wow}／基準比${fromBase >= 0 ? "+" : ""}${fromBase}）。出典明記での引用歓迎。`,
  alternates: { canonical: "/souba-index/" },
};

function LineChart({ series, color, label }: { series: Point[]; color: string; label: string }) {
  const W = 640, H = 220, PAD = 42;
  const vals = series.map((p) => p.index);
  const min = Math.min(...vals, 98), max = Math.max(...vals, 102);
  const x = (i: number) => PAD + (i * (W - PAD * 2)) / (series.length - 1);
  const y = (v: number) => H - PAD - ((v - min) * (H - PAD * 2)) / (max - min);
  const path = series.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(p.index).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl border border-warm-gray/25 bg-white" role="img" aria-label={`${label}の週次推移チャート`}>
      <line x1={PAD} y1={y(100)} x2={W - PAD} y2={y(100)} stroke="#d8cdbd" strokeDasharray="4 3" />
      <text x={PAD - 6} y={y(100) + 4} fontSize="10" fill="#9b8d7a" textAnchor="end">100</text>
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
      {series.map((p, i) => (
        <g key={p.date}>
          <circle cx={x(i)} cy={y(p.index)} r="3" fill={color} />
          <text x={x(i)} y={H - PAD + 16} fontSize="9" fill="#9b8d7a" textAnchor="middle">{fmtDate(p.date)}</text>
        </g>
      ))}
      <text x={x(series.length - 1)} y={y(series[series.length - 1].index) - 8} fontSize="12" fontWeight="bold" fill={color} textAnchor="end">{series[series.length - 1].index}</text>
    </svg>
  );
}

export default function SoubaIndexPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "中古楽器買取相場指数",
    description: `中古楽器の買取相場を示す独自の週次インデックスです。人気楽器${total.total}モデルについてYahoo!オークションの落札実勢（過去180日の中央値）を毎週集計し、基準週を100として等ウェイトで合成しています。ギター・ベース・鍵盤・管楽器などカテゴリ別の指数も公開しています。`,
    url: "https://gakkikaitori-biyori.com/souba-index/",
    license: "出典明記で引用可",
    creator: { "@type": "Organization", name: "楽器買取日和" },
    temporalCoverage: `${idx.base_date}/${idx.latest_date}`,
    variableMeasured: [
      { "@type": "PropertyValue", name: "総合指数(最新)", value: latest.index },
      { "@type": "PropertyValue", name: "前週比", value: wow },
      { "@type": "PropertyValue", name: "基準比", value: fromBase },
    ],
  };

  const trend = fromBase > 0.5 ? "上昇" : fromBase < -0.5 ? "軟調" : "横ばい";
  const catColors = ["#c0392b", "#2e7d5b", "#b7791f", "#5b6bbf"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

      <nav className="text-xs text-warm-gray mb-4">
        <Link href="/" className="hover:text-accent">ホーム</Link> ／ 中古楽器買取相場指数
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">中古楽器買取相場指数</h1>
      <p className="text-warm-gray leading-relaxed mb-6">
        人気楽器 <strong className="text-foreground">{total.total}モデル</strong> のヤフオク!実勢中央値を合成した、中古楽器市場の週次インデックスです。基準週（{idx.base_date}）を <strong>100</strong> とし、毎週自動で更新しています。買取や売却のタイミングを「市場全体が上向きか・下向きか」で捉えるための独自指標です。
      </p>

      {/* サマリー */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-cream rounded-xl p-4 text-center">
          <div className="text-xs text-warm-gray mb-1">最新指数</div>
          <div className="text-2xl font-bold text-foreground">{latest.index}</div>
        </div>
        <div className="bg-cream rounded-xl p-4 text-center">
          <div className="text-xs text-warm-gray mb-1">前週比</div>
          <div className={`text-2xl font-bold ${wow > 0 ? "text-emerald-700" : wow < 0 ? "text-rose-600" : "text-foreground"}`}>{wow >= 0 ? "+" : ""}{wow}</div>
        </div>
        <div className="bg-cream rounded-xl p-4 text-center">
          <div className="text-xs text-warm-gray mb-1">基準比</div>
          <div className={`text-2xl font-bold ${fromBase > 0 ? "text-emerald-700" : fromBase < 0 ? "text-rose-600" : "text-foreground"}`}>{fromBase >= 0 ? "+" : ""}{fromBase}</div>
        </div>
      </div>

      <div className="bg-cream/60 border border-warm-gray/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>今週のまとめ：</strong> 基準週（{idx.base_date}）から <strong>{idx.latest_date}</strong> 時点で総合指数は <strong>{latest.index}</strong>（基準比 {fromBase >= 0 ? "+" : ""}{fromBase}）。中古楽器市場全体は足元で <strong>{trend}</strong> です。個別モデルの値上がり・値下がりは<Link href="/souba-ranking/" className="text-accent hover:text-accent-dark underline">楽器買取相場ランキング</Link>で確認できます。
        </p>
      </div>

      {/* 総合指数チャート */}
      <h2 className="text-xl font-bold text-foreground mb-3">総合指数の推移</h2>
      <LineChart series={composite} color="#c0392b" label="中古楽器買取相場指数（総合）" />
      <p className="text-xs text-warm-gray mt-2 mb-10">
        ※構成 {total.total}モデル・等ウェイト。基準週 {idx.base_date} = 100。
      </p>

      {/* カテゴリ別サブ指数 */}
      {Object.keys(categories).length > 0 && (
        <>
          <h2 className="text-xl font-bold text-foreground mb-3">カテゴリ別指数</h2>
          <p className="text-sm text-warm-gray mb-4">構成モデルが3以上のカテゴリのみ掲載しています。</p>
          <div className="space-y-8 mb-10">
            {Object.entries(categories).map(([cat, series], i) => {
              const l = series[series.length - 1];
              const b = Math.round((l.index - 100) * 100) / 100;
              return (
                <div key={cat}>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{cat}</h3>
                    <span className={`text-sm font-bold ${b > 0 ? "text-emerald-700" : b < 0 ? "text-rose-600" : "text-warm-gray"}`}>
                      最新 {l.index}（基準比 {b >= 0 ? "+" : ""}{b}）
                    </span>
                  </div>
                  <LineChart series={series} color={catColors[i % catColors.length]} label={`${cat}指数`} />
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* メソドロジー */}
      <h2 className="text-xl font-bold text-foreground mb-3">算出方法（メソドロジー）</h2>
      <ul className="text-sm text-warm-gray leading-relaxed space-y-2 mb-8 list-disc pl-5">
        <li>各モデルの週次スナップショットは、ヤフオク!の落札（終了）データから個別ロットの落札価格の<strong>中央値</strong>を採用（IQRによる外れ値除去後）。</li>
        <li>指数は、基準週（{idx.base_date}）の各モデル中央値を100とした相対値の<strong>単純平均（等ウェイト）</strong>。</li>
        <li>品質ゲート：<strong>全週でサンプル数20件以上</strong>のモデルのみ採用。系列が不連続（前週比3倍超）のモデルは汚染疑いとして除外。履歴の浅い新規モデルは指数に含めません（構成 {total.total}モデル）。</li>
        <li>カテゴリ別指数は構成3モデル以上のカテゴリのみ。</li>
        <li>本指数は中古市場（ヤフオク!実勢）の水準を示すもので、各社の買取査定額はこの水準の概ね50〜70%が目安です（保証するものではありません）。</li>
      </ul>

      {/* 引用歓迎（被リンク資産） */}
      <div className="bg-cream border border-warm-gray/20 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-2">データの引用について（引用歓迎）</h2>
        <p className="text-sm text-warm-gray leading-relaxed mb-3">
          本指数の数値・チャートは、出典を明記いただければ引用・転載を歓迎します。出典表記例：
        </p>
        <p className="text-xs text-foreground bg-white rounded p-3">
          出典：楽器買取日和「中古楽器買取相場指数」（https://gakkikaitori-biyori.com/souba-index/）
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/souba-ranking/" className="inline-block bg-accent text-white rounded-lg px-5 py-3 text-sm font-bold hover:bg-accent-dark transition-colors">値上がり/値下がりモデルを見る →</Link>
        <Link href="/articles/gakki-kaitori-osusume/" className="inline-block border border-warm-gray/30 text-foreground rounded-lg px-5 py-3 text-sm font-bold">買取業者を比較する</Link>
      </div>
    </div>
  );
}

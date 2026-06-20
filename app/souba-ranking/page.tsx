import type { Metadata } from "next";
import Link from "next/link";
import data from "@/data/souba-ranking-gakki.json";

type Model = {
  slug: string;
  name: string;
  category: string;
  median: number;
  sample_n: number;
  change_1w: number | null;
  change_2w: number | null;
};

const models = data.models as Model[];
const updated = data.updated as string;

export const metadata: Metadata = {
  title: `楽器買取相場ランキング【${updated}更新】値上がり/値下がりモデルと高額相場`,
  description:
    "人気楽器モデルの実勢買取相場を毎週更新。今週の値上がり・値下がりモデル、高額相場ランキング、流通量ランキングを、ヤフオク!の落札データにもとづく当サイト独自集計（中央値・IQR外れ値除去）で公開します。出典明記で引用歓迎。",
  alternates: { canonical: "/souba-ranking/" },
};

function yen(n: number) {
  return "¥" + n.toLocaleString();
}

function Change({ v }: { v: number | null }) {
  if (v === null) return <span className="text-warm-gray text-xs">—</span>;
  const up = v >= 0;
  return (
    <span className={`font-bold tabular-nums ${up ? "text-emerald-700" : "text-rose-600"}`}>
      {up ? "▲" : "▼"}
      {Math.abs(v).toFixed(1)}%
    </span>
  );
}

function Row({ m, metric }: { m: Model; metric: "change" | "median" | "n" }) {
  return (
    <li className="flex items-center justify-between gap-3 py-2.5 border-b border-warm-border last:border-0">
      <Link href={`/articles/${m.slug}/`} className="min-w-0 flex-1 hover:text-accent transition-colors">
        <span className="font-medium text-foreground truncate">{m.name}</span>
        <span className="ml-2 text-xs text-warm-gray">{m.category}</span>
      </Link>
      <span className="tabular-nums text-sm text-foreground whitespace-nowrap">{yen(m.median)}</span>
      <span className="w-16 text-right">
        {metric === "change" ? <Change v={m.change_1w} /> : metric === "n" ? <span className="text-xs text-warm-gray tabular-nums">n={m.sample_n}</span> : <span className="text-xs text-warm-gray">—</span>}
      </span>
    </li>
  );
}

export default function Page() {
  const movers = models.filter((m) => m.change_1w !== null);
  const up = [...movers].filter((m) => (m.change_1w as number) > 0).sort((a, b) => (b.change_1w as number) - (a.change_1w as number)).slice(0, 8);
  const down = [...movers].filter((m) => (m.change_1w as number) < 0).sort((a, b) => (a.change_1w as number) - (b.change_1w as number)).slice(0, 8);
  const byMedian = [...models].sort((a, b) => b.median - a.median).slice(0, 12);
  const byN = [...models].sort((a, b) => (b.sample_n || 0) - (a.sample_n || 0)).slice(0, 10);

  const crumbs = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "楽器買取相場ランキング", href: "/souba-ranking/" },
  ];
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `https://gakkikaitori-biyori.com${c.href}` })),
  };

  return (
    <div className="bg-cream min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          {crumbs.map((c, i) => (
            <li key={c.href} className="flex items-center">
              {i > 0 && <span className="breadcrumb-sep" />}
              {i === crumbs.length - 1 ? <span className="text-foreground font-medium">{c.name}</span> : <Link href={c.href} className="hover:text-accent transition-colors">{c.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-16">
        <header className="py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">楽器買取相場ランキング</h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            人気楽器モデルの実勢相場を<strong className="text-foreground">毎週更新</strong>。ヤフオク!の過去180日落札データから、個別落札額の<strong className="text-foreground">中央値（IQR外れ値除去）</strong>を当サイトが独自集計したものです。買取額の目安は、状態・付属品・時期により中央値の概ね50〜70%が目安となります（実額は無料査定でご確認ください）。
            <br />
            <span className="text-xs">最終更新: {updated}／対象 {models.length} モデル。本データは出典（gakkikaitori-biyori.com）明記のうえ引用歓迎です。</span>
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-white rounded-lg border border-warm-border p-5">
            <h2 className="text-lg font-bold text-foreground mb-1">今週の値上がりモデル</h2>
            <p className="text-xs text-warm-gray mb-3">前週比（中央値）</p>
            <ul>{up.length ? up.map((m) => <Row key={m.slug} m={m} metric="change" />) : <li className="text-sm text-warm-gray py-2">該当なし（前週から横ばい）</li>}</ul>
          </section>
          <section className="bg-white rounded-lg border border-warm-border p-5">
            <h2 className="text-lg font-bold text-foreground mb-1">今週の値下がりモデル</h2>
            <p className="text-xs text-warm-gray mb-3">前週比（中央値）</p>
            <ul>{down.length ? down.map((m) => <Row key={m.slug} m={m} metric="change" />) : <li className="text-sm text-warm-gray py-2">該当なし（前週から横ばい）</li>}</ul>
          </section>
        </div>

        <section className="bg-white rounded-lg border border-warm-border p-5 mb-8">
          <h2 className="text-lg font-bold text-foreground mb-3">高額相場ランキング</h2>
          <ul>{byMedian.map((m) => <Row key={m.slug} m={m} metric="change" />)}</ul>
        </section>

        <section className="bg-white rounded-lg border border-warm-border p-5 mb-8">
          <h2 className="text-lg font-bold text-foreground mb-1">流通量の多いモデル</h2>
          <p className="text-xs text-warm-gray mb-3">落札サンプル数（180日）= 売りやすさの目安</p>
          <ul>{byN.map((m) => <Row key={m.slug} m={m} metric="n" />)}</ul>
        </section>

        <section className="bg-white rounded-lg border border-warm-border p-5 text-sm text-warm-gray leading-relaxed">
          <h2 className="text-base font-bold text-foreground mb-2">集計方法（メソドロジー）</h2>
          <p>ヤフオク!の「落札済み」検索（過去180日）から各モデルの個別落札額を収集し、四分位範囲(IQR)で外れ値を除去した<strong className="text-foreground">中央値</strong>を算出。毎週自動更新しています。中央値は中古市場の実勢であり、買取店の提示額（一般に中央値の50〜70%目安）とは異なります。金額は変動し、特定の買取額を保証するものではありません。正確な額は各買取業者の無料査定でご確認ください。</p>
        </section>
      </main>
    </div>
  );
}

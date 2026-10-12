#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const BASE = "https://gakkikaitori-biyori.com";
const OUT = path.join(ROOT, "public", "sitemap.xml");
// ローカル（JST）基準の日付。toISOString()はUTCのため深夜〜朝は前日になる
const TODAY = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

// ⚠️ lastmod は「そのページの中身が最後に変わった日」（2026-10-12 成長ルーチン）。
//    以前は全URLをビルド日にしていたため、Google が lastmod を当てにせず、
//    新規・更新ページ（ウリエル／ヒカカク受け皿）が「Google が認識していない」まま再クロールされなかった。
//    ページのディレクトリと、そのページが読むデータ（@/data の import・相場カードの price-history）の
//    最終コミット日の最大値。未コミットの変更があれば当日。
const FILE_DATES = (() => {
  const m = new Map();
  let date = "";
  const log = execFileSync("git", ["log", "--format=@%cs", "--name-only", "--", "app", "data"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1 << 28 });
  for (const line of log.split("\n")) {
    if (line.startsWith("@")) date = line.slice(1);
    else if (line && !m.has(line)) m.set(line, date);
  }
  const dirty = execFileSync("git", ["status", "--porcelain", "--", "app", "data"], { cwd: ROOT, encoding: "utf8" });
  for (const line of dirty.split("\n")) if (line) m.set(line.slice(3).trim(), TODAY);
  return m;
})();

function lastmodOf(...rels) {
  let best = "";
  for (const rel of rels) {
    for (const [f, d] of FILE_DATES) {
      if ((f === rel || f.startsWith(rel + "/")) && d > best) best = d;
    }
  }
  return best || TODAY;
}

function dataDeps(pageFile) {
  let src = "";
  try { src = fs.readFileSync(path.join(ROOT, pageFile), "utf8"); } catch { return []; }
  const deps = [...src.matchAll(/from\s+["']@\/data\/([^"']+)["']/g)].map(m => {
    const rel = `data/${m[1]}`;
    return fs.existsSync(path.join(ROOT, rel)) ? rel : (fs.existsSync(path.join(ROOT, rel + ".ts")) ? rel + ".ts" : rel);
  });
  return deps;
}

function articleLastmod(slug) {
  const dir = `app/articles/${slug}`;
  const deps = dataDeps(`${dir}/page.tsx`);
  // 相場カードは yahoo-medians-gakki.json を slug で引く。値が変わった週は price-history/<slug>.json も変わる
  if (fs.existsSync(path.join(ROOT, "data", "price-history-gakki", `${slug}.json`))) {
    deps.push(`data/price-history-gakki/${slug}.json`);
  }
  return lastmodOf(dir, ...deps);
}

// Tier 1: 高優先度
const TIER1_HUB = ["guitar-kaitori", "piano-kaitori", "drum-kaitori", "tokyo-gakki-kaitori"];
// Tier 2: ハウツー・比較系
const TIER2_HOWTO = [
  "kaitori-houhou-hikaku", "takaku-uru-kotsu", "souba-ichiran", "mercari-vs-gyosha",
  "matome-uri-kaitori", "ihin-gakki-kaitori", "gakki-kaitori-sagi", "kowareta-gakki-kaitori",
];

function priorityFor(slug) {
  if (TIER1_HUB.includes(slug)) return "0.9";
  if (TIER2_HOWTO.includes(slug)) return "0.8";
  return "0.7";
}

function changefreqFor(priority) {
  return parseFloat(priority) >= 0.8 ? "weekly" : "monthly";
}

const STATIC_PAGES = [
  { path: "/widget/", priority: "0.5", changefreq: "weekly" },
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/articles/", priority: "0.9", changefreq: "weekly" },
  { path: "/souba-ranking/", priority: "0.8", changefreq: "weekly" },
  { path: "/souba-index/", priority: "0.8", changefreq: "weekly" },
  { path: "/author/", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy-policy/", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-of-service/", priority: "0.3", changefreq: "yearly" },
  { path: "/content-policy/", priority: "0.3", changefreq: "yearly" },
];

function articleSlugs() {
  const dir = path.join(ROOT, "app", "articles");
  // ⚠️ noindex にしたページは sitemap から外す（2026-09-02）。
  //    「索引しないで」と書きながら sitemap で送るのは矛盾したシグナルになる。
  const isNoindex = (slug) => {
    try {
      return fs.readFileSync(path.join(dir, slug, "page.tsx"), "utf8").includes("index: false");
    } catch {
      return false;
    }
  };
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("["))
    .map(e => e.name)
    .filter(slug => !isNoindex(slug))
    .sort();
}

function build() {
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

  const articles = articleSlugs();
  const articleDates = new Map(articles.map(slug => [slug, articleLastmod(slug)]));
  // TOP と記事一覧は記事のリストを載せるので、いちばん新しい記事の日付
  const newestArticle = [...articleDates.values()].sort().at(-1) || TODAY;

  for (const p of STATIC_PAGES) {
    const dir = p.path === "/" ? "app/page.tsx" : `app${p.path.replace(/\/$/, "")}`;
    const own = p.path === "/" ? lastmodOf(dir, ...dataDeps(dir)) : lastmodOf(dir, ...dataDeps(`${dir}/page.tsx`));
    const lastmod = (p.path === "/" || p.path === "/articles/") && newestArticle > own ? newestArticle : own;
    lines.push(`  <url><loc>${BASE}${p.path}</loc><lastmod>${lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`);
  }

  for (const slug of articles) {
    const p = priorityFor(slug);
    const cf = changefreqFor(p);
    lines.push(`  <url><loc>${BASE}/articles/${slug}/</loc><lastmod>${articleDates.get(slug)}</lastmod><changefreq>${cf}</changefreq><priority>${p}</priority></url>`);
  }

  lines.push("</urlset>", "");
  return { xml: lines.join("\n"), total: STATIC_PAGES.length + articles.length };
}

const result = build();
fs.writeFileSync(OUT, result.xml);
console.log(`✓ Wrote ${OUT}`);
console.log(`  ${result.total} URLs`);

import Link from "next/link";
import relatedGroups from "@/data/related-groups.json";

/**
 * 同じ都道府県／同じ楽器カテゴリの記事への導線。
 *
 * ⚠️ なぜあるか（2026-10-05 公開前チェック [14]）:
 *   地域記事179本と、ブランド・楽器・型番記事42本が「記事一覧からしかリンクされていない」
 *   実質孤立だった。地域記事は RelatedArticles を持たず、型番記事12本は一覧にも出ていなかった。
 *
 * グループは scripts/gen-related-groups.py が記事ソースの事実（都道府県・relatedSlugs の
 * 楽器カテゴリ）から作る。noindex の記事はグループに入っていない＝ここには出ない・
 * noindex の記事にはこのブロック自体を出さない。
 *
 * 全員を並べると大きい県（東京40本）でリンクの羅列になるので、グループ内の並び順で
 * 前後に近いものから MAX 本だけ出す（並びは住所順なので、同じ市の区が隣り合う）。
 * 前後対称に取るので、グループが3本以上あれば全記事が2本以上から張られる。
 */
type Group = { label: string; members: string[] };
const groups = relatedGroups.groups as Record<string, Group>;
const labels = relatedGroups.labels as Record<string, string>;

const groupOf: Record<string, string> = {};
for (const [key, g] of Object.entries(groups)) {
  for (const slug of g.members) groupOf[slug] = key;
}

const MAX = 8;

export default function SameGroupArticles({
  slug,
  exclude = [],
}: {
  slug: string;
  /** 同じページの関連記事ブロックに既に出ているもの（重複表示しない） */
  exclude?: string[];
}) {
  const key = groupOf[slug];
  if (!key) return null;
  const { label, members } = groups[key];
  const n = members.length;
  const at = members.indexOf(slug);
  const skip = new Set([slug, ...exclude]);
  const picked: string[] = [];
  // 近い順（+1, -1, +2, -2 …）に取る
  for (let d = 1; d <= Math.floor(n / 2) && picked.length < MAX; d++) {
    for (const i of [(at + d) % n, (at - d + n) % n]) {
      const s = members[i];
      if (skip.has(s) || picked.length >= MAX) continue;
      skip.add(s);
      picked.push(s);
    }
  }
  if (picked.length === 0) return null;

  return (
    <aside className="mt-10 pt-8 border-t border-warm-border">
      <h2 className="font-display text-lg font-bold mb-4">{label}</h2>
      <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
        {picked.map((s) => (
          <li key={s} className="m-0 p-0">
            <Link
              href={`/articles/${s}/`}
              className="inline-block bg-white border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-gold/40 hover:text-accent transition-colors"
            >
              {labels[s]}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

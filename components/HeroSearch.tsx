"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** TOP のキービジュアルの検索窓（2026-10-21 デザイン②）。記事タイトルから候補を出し、一致した記事へ移動する。無ければ記事一覧へ。 */
export default function HeroSearch({ items }: { items: { slug: string; label: string }[] }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const s = q.trim().toLowerCase();
    if (!s) return router.push("/articles/");
    const hit = items.find((i) => i.label.toLowerCase() === s) || items.find((i) => i.label.toLowerCase().includes(s));
    router.push(hit ? `/articles/${hit.slug}/` : "/articles/");
  };
  return (
    <form onSubmit={go} role="search" className="flex w-full max-w-xl rounded-lg overflow-hidden border border-white/20 bg-white/10 backdrop-blur focus-within:border-gold">
      <input
        type="search"
        list="hero-search-list"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="楽器名・モデル名で探す（例：レスポール）"
        aria-label="楽器名・モデル名で探す"
        className="flex-1 min-w-0 bg-transparent px-4 py-3.5 text-white placeholder:text-white/55 outline-none text-[15px]"
      />
      <button type="submit" aria-label="検索" className="px-4 text-white/80 hover:text-gold">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" strokeLinecap="round" /></svg>
      </button>
      <datalist id="hero-search-list">
        {items.map((i) => <option key={i.slug} value={i.label} />)}
      </datalist>
    </form>
  );
}

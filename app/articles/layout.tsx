import GakkiScrollReveal from "@/components/GakkiScrollReveal";

// 全記事共通レイアウト。スクロールで本文ブロックをフェードインさせる。
export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gakki-reveal">
      {children}
      <GakkiScrollReveal />
    </div>
  );
}

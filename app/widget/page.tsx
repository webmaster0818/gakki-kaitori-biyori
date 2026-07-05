import type { Metadata } from "next";
import Link from "next/link";
import ranking from "@/data/souba-ranking-gakki.json";

export const metadata: Metadata = {
  title: "楽器買取相場ウィジェット無料配布｜ブログ・サイトに今週の実勢相場を表示",
  description:
    "今週の楽器買取相場（人気モデルの中古実勢中央値・毎週自動更新）を、あなたのブログやサイトに無料で埋め込めるウィジェットを配布しています。コピペ1行で設置完了。",
  alternates: { canonical: "https://gakkikaitori-biyori.com/widget/" },
  robots: { index: true, follow: true },
};

const SCRIPT_CODE = `<script src="https://gakkikaitori-biyori.com/widget.js" async></script>`;
const IFRAME_CODE = `<iframe src="https://gakkikaitori-biyori.com/widget.html" width="340" height="220" style="border:none;" loading="lazy" title="今週の楽器買取相場（楽器買取びより）"></iframe>`;

type M = { slug: string; name: string; median: number };

export default function WidgetPage() {
  const updated = (ranking as { updated: string }).updated;
  const top = ((ranking as { models: M[] }).models || [])
    .filter((m) => m.median)
    .sort((a, b) => b.median - a.median)
    .slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">楽器買取相場ウィジェット</span></li>
        </ol>
      </nav>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">楽器買取相場ウィジェット（無料配布）</h1>
        <p>
          今週の楽器買取相場（人気モデルの中古実勢中央値）を、あなたのブログやWebサイトに表示できる無料ウィジェットです。
          価格は当サイトがヤフオク!落札データから独自集計（中央値・IQR外れ値除去）し、<strong>毎週自動更新</strong>されます。設置はコードを1行貼るだけです。
        </p>

        <h2>表示イメージ</h2>
        <div className="not-prose my-4" style={{ maxWidth: 340 }}>
          <div style={{ border: "1px solid #d9c58a", borderRadius: 12, padding: "14px 16px", background: "linear-gradient(135deg,#fffdf5,#f6f0e2)", color: "#3a3326", lineHeight: 1.5 }}>
            <div style={{ fontSize: 11, color: "#8a7a55", marginBottom: 6 }}>今週の楽器 実勢買取相場（中古中央値・{updated}更新）</div>
            {top.map((m) => (
              <div key={m.slug} style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 13, marginTop: 3 }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.name}</span>
                <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>¥{Math.round(m.median).toLocaleString()}</span>
              </div>
            ))}
            <div style={{ fontSize: 11, marginTop: 9 }}>
              <span style={{ color: "#9a7b2d", textDecoration: "underline" }}>楽器買取びより｜相場ランキング</span>（毎週更新）
            </div>
            <div style={{ fontSize: 10, color: "#9b8e6e", marginTop: 4 }}>※中古実勢の中央値。買取額は業者・状態により異なります。</div>
          </div>
        </div>

        <h2>設置方法（コピペ1行）</h2>
        <p>表示したい場所に、以下のコードを貼り付けてください（JavaScriptが使えるブログ・サイト向け）。</p>
        <div className="table-wrapper not-prose">
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", background: "#faf7ef", border: "1px solid #e6dcc2", borderRadius: 8, padding: 12, fontSize: 12 }}>{SCRIPT_CODE}</pre>
        </div>
        <p>JavaScriptを埋め込めない場合は、iframe版もご利用いただけます。</p>
        <div className="table-wrapper not-prose">
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", background: "#faf7ef", border: "1px solid #e6dcc2", borderRadius: 8, padding: 12, fontSize: 12 }}>{IFRAME_CODE}</pre>
        </div>

        <h2>ご利用について</h2>
        <ul>
          <li>個人・法人ともに<strong>無料</strong>でご利用いただけます。</li>
          <li>ウィジェット内の「楽器買取びより」へのリンクは、出典明示のため<strong>削除・改変せずに</strong>ご利用ください。</li>
          <li>データは毎週自動更新されるため、設置後の貼り替えは不要です。</li>
          <li>相場データを記事内で引用される場合も、出典（gakkikaitori-biyori.com）を明記のうえ<strong>引用歓迎</strong>です。</li>
        </ul>

        <h2>あわせて見る</h2>
        <ul>
          <li><Link href="/souba-ranking/">楽器買取相場ランキング（今週の値上がり・値下がり）</Link></li>
          <li><Link href="/articles/gakki-kaitori-osusume/">楽器買取おすすめ比較</Link></li>
        </ul>
      </article>
    </div>
  );
}

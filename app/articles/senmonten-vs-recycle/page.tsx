import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取専門店 vs リサイクルショップ｜査定額に最大10倍の差",
  description: "楽器を売るなら買取専門店とリサイクルショップどっち？査定額の差、専門性、対応範囲を比較。最大10倍の査定額差が生じる理由も解説。",
  openGraph: {
    title: "【2026年最新】楽器買取専門店 vs リサイクルショップ｜査定額に最大10倍の差",
    description: "楽器を売るなら買取専門店とリサイクルショップどっち？査定額の差、専門性、対応範囲を比較。最大10倍の査定額差が生じる理由も解説。",
  },
};

function Schema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u697d\u5668\u8cb7\u53d6\u5c02\u9580\u5e97\u3068\u30ea\u30b5\u30a4\u30af\u30eb\u30b7\u30e7\u30c3\u30d7\u3001\u3069\u3061\u3089\u306b\u58f2\u308b\u3079\u304d\uff1f\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
  );
}

export default function Page() {
  return (
    <>
      <Schema />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">比較・FAQ</span></li>
        </ol>
      </nav>
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">比較・FAQ</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">楽器買取専門店とリサイクルショップ、どちらに売るべき？</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「リサイクルショップに持ち込んだら査定額が低かった」——よくある悩みです。楽器買取専門店とリサイクルショップでは、査定能力・知識・対応範囲が全く異なります。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <div className="table-wrapper"><table><thead><tr><th>項目</th><th>楽器買取専門店</th><th>リサイクルショップ</th></tr></thead><tbody><tr><td>査定知識</td><td>高い（楽器ごとの相場把握）</td><td>低い（家具・家電と一緒の扱い）</td></tr><tr><td>査定額</td><td>市場相場の70〜90%</td><td>市場相場の10〜40%</td></tr><tr><td>対応範囲</td><td>ヴィンテージ・希少品もOK</td><td>メジャーブランドのみ</td></tr><tr><td>真贋判定</td><td>可能</td><td>不可</td></tr><tr><td>手間</td><td>事前予約・査定</td><td>持ち込み即査定</td></tr></tbody></table></div>

          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
          </div>

          <h2>関連記事</h2>
          <ul>
            <li><Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">楽器の買取方法4つを徹底比較</Link></li>
            <li><Link href="/articles/takaku-uru-kotsu/" className="text-accent hover:underline">楽器を高く売るコツ完全ガイド</Link></li>
            <li><Link href="/articles/souba-ichiran/" className="text-accent hover:underline">楽器買取相場一覧</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}

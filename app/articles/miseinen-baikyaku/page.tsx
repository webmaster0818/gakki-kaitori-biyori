import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】未成年でも楽器を売れる？親の同意・手続き・注意点まとめ",
  description: "18歳未満の未成年が楽器を売却する方法と注意点を解説。親権者の同意の必要性、必要書類、業者の対応状況、トラブル回避のコツまで。",
  openGraph: {
    title: "【2026年最新】未成年でも楽器を売れる？親の同意・手続き・注意点まとめ",
    description: "18歳未満の未成年が楽器を売却する方法と注意点を解説。親権者の同意の必要性、必要書類、業者の対応状況、トラブル回避のコツまで。",
  },
};

function Schema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u672a\u6210\u5e74\u3067\u3082\u697d\u5668\u3092\u58f2\u308c\u308b\uff1f\u624b\u7d9a\u304d\u3068\u6ce8\u610f\u70b9\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">未成年でも楽器を売れる？手続きと注意点</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「親に内緒で楽器を売りたい」「学生で時間がないので一人で買取に行きたい」——未成年が楽器を売る場合、原則として親権者の同意が必要です。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <div className="table-wrapper"><table><thead><tr><th>業者タイプ</th><th>未成年対応</th></tr></thead><tbody><tr><td>大手楽器買取専門店</td><td>親同伴 or 親同意書必須</td></tr><tr><td>リサイクルショップ</td><td>親同伴必須（一人では不可な店も）</td></tr><tr><td>メルカリ等個人売買</td><td>18歳以上のみ利用可（メルカリ規約）</td></tr><tr><td>ヤフオク</td><td>18歳以上のみ利用可</td></tr></tbody></table></div>

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

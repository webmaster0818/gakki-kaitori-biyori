import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/miseinen-baikyaku/' },
  title: "【2026年最新】未成年でも楽器を売れる？親の同意・手続き・注意点まとめ",
  description: "18歳未満の未成年が楽器を売却する方法と注意点を解説。親権者の同意の必要性、必要書類、業者の対応状況、トラブル回避のコツまで。",
  openGraph: {
    title: "【2026年最新】未成年でも楽器を売れる？親の同意・手続き・注意点まとめ",
    description: "18歳未満の未成年が楽器を売却する方法と注意点を解説。親権者の同意の必要性、必要書類、業者の対応状況、トラブル回避のコツまで。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u672a\u6210\u5e74\u3067\u3082\u697d\u5668\u3092\u58f2\u308c\u308b\uff1f\u624b\u7d9a\u304d\u3068\u6ce8\u610f\u70b9\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"未成年でも楽器を売れる？手続きと注意点\", \"item\": \"https://gakkikaitori-biyori.com/articles/miseinen-baikyaku/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"未成年でも楽器を売ることはできますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"18歳以上であれば親権者の同意書を用意することで売却可能です。18歳未満（中学生・高校生）は原則として買取不可で、保護者名義での取引が必要になります。\"}}, {\"@type\": \"Question\", \"name\": \"親の同意書はどう書けばいいですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"「○○（買取業者名）における楽器買取に同意します」と本文、本人と親権者の氏名・住所・続柄・日付・押印を記載します。多くの業者がフォーマットを提供しているので事前にダウンロードしてください。\"}}, {\"@type\": \"Question\", \"name\": \"未成年が黙って親の楽器を売るとどうなりますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"民法により親権者は契約取消権を行使でき、買取代金を返金して楽器を取り戻すことができます。発覚すると業者からブラックリスト登録され、損害賠償請求されることもあります。\"}}, {\"@type\": \"Question\", \"name\": \"親が立ち会えば未成年でも売れますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"はい。親権者本人の身分証と立ち会いがあれば、ほとんどの業者で買取可能です。出張買取・店頭買取では親権者の同伴が最もスムーズです。\"}}, {\"@type\": \"Question\", \"name\": \"18歳の誕生日を迎えれば自由に売れますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"2026年8月の成年年齢引下げにより、18歳から契約は原則自由ですが、買取業者によっては20歳未満に対して親権者同意を求めるケースもまだあります。事前に確認してください。\"}}]}" }} />
    </>
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

          <p className="leading-relaxed mt-6 mb-5"><strong>未成年（18歳未満）が楽器を売る場合、原則として親権者の同意が必要</strong>です。上表のとおり、買取専門店は同意書または同伴を求め、メルカリ・ヤフオク等の個人売買は規約上18歳以上しか利用できません。一人だけで売却を完結するのは難しいと考えておきましょう。</p>

          <h2 id="why" className="font-display text-xl font-bold text-foreground mt-8 mb-3">なぜ親の同意が必要なのか</h2>
          <p className="leading-relaxed mb-4">民法では、未成年が親権者の同意なく行った契約は<strong>あとから取り消せる</strong>とされています（未成年者取消権）。そのため買取業者は、トラブル回避のために未成年単独との取引を断る・同意を求めるのが一般的です。なお2022年の成年年齢引き下げで<strong>18歳・19歳は成人</strong>となり、単独で売却できます（高校生でも18歳ならOK。学生証等で年齢確認を求められることがあります）。</p>

          <h2 id="need" className="font-display text-xl font-bold text-foreground mt-8 mb-3">未成年が売るときに必要なもの</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4 leading-relaxed">
            <li>親権者の同意書（業者所定の様式がある場合あり）</li>
            <li>親権者の本人確認書類</li>
            <li>本人（未成年）の本人確認書類（学生証・保険証など）</li>
            <li>親権者が同伴できると最もスムーズ</li>
          </ul>

          <h2 id="caution" className="font-display text-xl font-bold text-foreground mt-8 mb-3">トラブルを避けるために</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4 leading-relaxed">
            <li>「親に内緒で」はおすすめしません。後で取消・返品トラブルになりやすいです。</li>
            <li>高額な楽器ほど、同意・同伴を求められます。</li>
            <li>必要書類は <Link href="/articles/hitsuyou-shorui" className="text-accent underline">必要な書類リスト</Link>・<Link href="/articles/mibunsho-hitsuyou" className="text-accent underline">身分証ガイド</Link> も参照。</li>
          </ul>
          <p className="text-xs text-warm-gray mb-2">※ 未成年の受付可否・必要書類は業者により異なります。詳細は各業者へご確認ください。</p>

          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
          </div>

          <RelatedArticles
            currentSlug="miseinen-baikyaku"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "mibunsho-hitsuyou", "hitsuyou-shorui", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu", "souba-ichiran"]}
          />
        </div>
      </article>
    </>
  );
}

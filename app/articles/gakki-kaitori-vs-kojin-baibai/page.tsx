import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取 vs 個人売買どちらが得？メリット・デメリット完全比較",
  description: "楽器を売る時、業者買取と個人売買（メルカリ・ヤフオク・ジモティー）どちらがお得？手数料・手間・スピード・リスクを徹底比較。状況別の最適な選び方も解説。",
  openGraph: {
    title: "【2026年最新】楽器買取 vs 個人売買どちらが得？メリット・デメリット完全比較",
    description: "楽器を売る時、業者買取と個人売買（メルカリ・ヤフオク・ジモティー）どちらがお得？手数料・手間・スピード・リスクを徹底比較。状況別の最適な選び方も解説。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u697d\u5668\u8cb7\u53d6 vs \u500b\u4eba\u58f2\u8cb7\u3001\u3069\u3061\u3089\u304c\u5f97\uff1f\u30e1\u30ea\u30c3\u30c8\u30fb\u30c7\u30e1\u30ea\u30c3\u30c8\u5b8c\u5168\u6bd4\u8f03\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"楽器買取 vs 個人売買、どちらが得？メリット・デメリット完全比較\", \"item\": \"https://gakkikaitori-biyori.com/articles/gakki-kaitori-vs-kojin-baibai/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"楽器買取と個人売買、どちらが高く売れますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"個人売買（メルカリ・ヤフオク）の方が10〜30%程度高く売れる傾向があります。ただし、出品の手間・梱包発送・トラブル対応の負担があるため、時間を考慮すると買取業者の方がトータルでお得な場合も多いです。\"}}, {\"@type\": \"Question\", \"name\": \"メルカリで楽器を売るときの注意点は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"送料・販売手数料（10%）が引かれます。また、楽器は破損リスクが高いため、梱包は専用ハードケース＋ダンボール二重で行い、配送は楽天SAL便・ヤマト便など補償付きを選びましょう。\"}}, {\"@type\": \"Question\", \"name\": \"個人売買のデメリットは何ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"売れるまで時間がかかる、値下げ交渉や質問対応に時間を取られる、配送中の破損・受取拒否トラブルなどが起こり得ます。高額楽器ほどリスクが高いため、買取業者を選ぶ人も多いです。\"}}, {\"@type\": \"Question\", \"name\": \"ジモティーで楽器を売るのは安全ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"手渡し・直接取引が基本のため詐欺リスクは低めですが、相手が冷やかしや無断キャンセルすることもあります。公共の場（駅前など）での待ち合わせ、現金即決取引を徹底してください。\"}}, {\"@type\": \"Question\", \"name\": \"どちらを選ぶべきか判断基準を教えてください。\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"高く売りたい・時間がある・梱包に自信がある → 個人売買。早く売りたい・手間を避けたい・確実に売却したい → 買取業者。10万円以上の高額楽器は個人売買のリスクが高いため買取業者がおすすめです。\"}}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">楽器買取 vs 個人売買、どちらが得？メリット・デメリット完全比較</h1>
          <p className="text-warm-gray text-sm leading-relaxed">楽器を売る方法は大きく2つ。業者買取と個人売買です。それぞれに長所と短所があり、自分の状況に合った方法を選ぶことが重要。本記事では両者を徹底比較し、最適な売り方を提案します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <h3>売却方法の基本比較</h3>
        <div className="table-wrapper"><table><thead><tr><th>項目</th><th>業者買取</th><th>個人売買</th></tr></thead><tbody><tr><td>手取り額</td><td>相場の60〜80%</td><td>相場の80〜95%</td></tr><tr><td>手数料</td><td>0円</td><td>メルカリ10%・ヤフオク5〜10%</td></tr><tr><td>スピード</td><td>最短即日</td><td>1週間〜数ヶ月</td></tr><tr><td>手間</td><td>★（少ない）</td><td>★★★（多い）</td></tr><tr><td>トラブルリスク</td><td>低（業者保証あり）</td><td>中〜高（個人間）</td></tr><tr><td>梱包・発送</td><td>業者対応</td><td>自分で対応</td></tr><tr><td>大型楽器対応</td><td>出張買取で対応</td><td>発送が難しい</td></tr></tbody></table></div>
        <div className="table-wrapper"><table><thead><tr><th>状況</th><th>おすすめ</th></tr></thead><tbody><tr><td>大型楽器（ピアノ・ドラム等）</td><td>業者買取一択（出張買取）</td></tr><tr><td>高額楽器（50万円以上）</td><td>業者買取（個人売買はトラブルリスク大）</td></tr><tr><td>時間がない（急ぎ）</td><td>業者買取（即日対応可）</td></tr><tr><td>手間を惜しまず高く売りたい</td><td>個人売買（メルカリ・ヤフオク）</td></tr><tr><td>ジャンク・難ありの楽器</td><td>業者買取（個人売買は売れにくい）</td></tr><tr><td>珍しい・マニアック楽器</td><td>個人売買（特定マニアに高値で売れる）</td></tr></tbody></table></div>

          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
          </div>

          <RelatedArticles
            currentSlug="gakki-kaitori-vs-kojin-baibai"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "mercari-vs-gyosha", "senmonten-vs-recycle", "kaitori-houhou-hikaku", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

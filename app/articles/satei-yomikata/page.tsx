import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/satei-yomikata/' },
  title: "【2026年最新】楽器査定書の読み方ガイド｜減額理由・項目・チェックポイント",
  description: "楽器の査定書の読み方を解説。査定額の内訳、減額理由の項目、納得できない場合の対応方法、複数業者の査定書比較のコツまで。",
  openGraph: {
    title: "【2026年最新】楽器査定書の読み方ガイド｜減額理由・項目・チェックポイント",
    description: "楽器の査定書の読み方を解説。査定額の内訳、減額理由の項目、納得できない場合の対応方法、複数業者の査定書比較のコツまで。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u697d\u5668\u67fb\u5b9a\u66f8\u306e\u8aad\u307f\u65b9\u30ac\u30a4\u30c9\uff5c\u6e1b\u984d\u7406\u7531\u30fb\u9805\u76ee\u30fb\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"楽器査定書の読み方ガイド｜減額理由・項目・チェックポイント\", \"item\": \"https://gakkikaitori-biyori.com/articles/satei-yomikata/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"楽器査定書はどう読めばいいですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"①ブランド・モデル名、②シリアル番号、③本体査定額、④減額項目（傷・汚れ・付属品欠品など）、⑤付属品ボーナス、⑥最終買取金額、の順で記載されているのが一般的です。\"}}, {\"@type\": \"Question\", \"name\": \"査定書に減額理由が書かれていない場合は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"業者に必ず内訳を確認してください。「打痕：-5,000円」「ピックアップ動作不良：-10,000円」など項目別の減額理由を提示しない業者は信用度が低いため避けましょう。\"}}, {\"@type\": \"Question\", \"name\": \"査定額の交渉はできますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能です。他社の査定書を提示すると「では合わせます」と再査定してくれるケースが多くあります。複数社で相見積もりを取り、最高値を提示する業者で売るのが基本戦略です。\"}}, {\"@type\": \"Question\", \"name\": \"査定額に有効期限はありますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"多くの業者で7〜14日の有効期限があります。中古市場の価格変動を反映するためで、期限を過ぎると再査定が必要になります。\"}}, {\"@type\": \"Question\", \"name\": \"査定書をもらえない業者は怪しいですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"正規業者であれば必ず査定明細を発行します。明細を渋る・口頭のみで進める業者は古物営業法違反の可能性があり、利用は避けるのが安全です。\"}}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">楽器査定書の読み方ガイド｜減額理由・項目・チェックポイント</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「査定書を渡されたけど、何を見ればいいかわからない」——査定書の読み方を理解すれば、適正価格か判断でき、複数業者の比較も容易になります。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <div className="table-wrapper"><table><thead><tr><th>減額理由</th><th>減額率</th><th>対策</th></tr></thead><tbody><tr><td>経年劣化</td><td>10〜30%</td><td>防げないが、清掃で印象UP</td></tr><tr><td>付属品欠品</td><td>5〜20%</td><td>ケース・保証書を揃える</td></tr><tr><td>塗装の傷・色あせ</td><td>5〜15%</td><td>事前の軽い清掃</td></tr><tr><td>金属パーツの錆</td><td>10〜30%</td><td>軽い磨き（深い磨きは逆効果）</td></tr><tr><td>弦・パッドの劣化</td><td>5〜10%</td><td>交換は業者に任せる</td></tr><tr><td>シリアル不鮮明</td><td>10〜30%</td><td>対応不可（ヴィンテージは特に）</td></tr><tr><td>改造・カスタム</td><td>0〜30%</td><td>オリジナル状態が高評価</td></tr></tbody></table></div>

          <p className="leading-relaxed mt-6 mb-4">査定書を受け取ったら、まず<strong>「①査定額の総額」「②減額項目とその理由」「③査定の有効期限」</strong>の3点を確認しましょう。上表のように、減額は「経年劣化・付属品欠品・傷・錆・改造」など項目ごとに積み上げられます。理由が明記されていれば、納得して売るか、別業者と比較するかを判断できます。</p>

          <h2 id="check" className="font-display text-xl font-bold text-foreground mt-8 mb-3">適正な査定か見極めるには</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4 leading-relaxed">
            <li><strong>減額理由が具体的か</strong>：「状態が悪いので」だけでなく、どの部分がどう影響したかを説明できる業者は信頼できます。</li>
            <li><strong>複数社で比較</strong>：同じ楽器でも査定書の総額・減額幅に差が出ます。1社で即決せず相見積りを。</li>
            <li><strong>有効期限を確認</strong>：相場は変動するため、査定額には期限が付くのが一般的です。</li>
          </ul>
          <p className="leading-relaxed mb-4">減額を抑えるコツは <Link href="/articles/takaku-uru-kotsu" className="text-accent underline">高く売るコツ</Link>、相場の見方は <Link href="/articles/souba-ichiran" className="text-accent underline">相場一覧</Link> も参考にしてください。</p>
          <p className="text-xs text-warm-gray mb-2">※ 減額率は一般的な目安です。実際の評価は楽器・状態・業者により異なります。</p>

          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        {/* felmatインプレッション計測 */}
        <img src="https://t.felmat.net/fmimp/A11184N.11542509.O138027B" width={1} height={1} alt="" style={{ border: "none" }} />
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
          </div>

          <RelatedArticles
            currentSlug="satei-yomikata"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kougaku-satei-ranking", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori"]}
          />
        </div>
      </article>
    </>
  );
}

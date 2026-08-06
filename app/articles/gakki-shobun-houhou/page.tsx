import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gakki-shobun-houhou/' },
  title: "【2026年最新】楽器の処分方法10選｜捨てる・売る・譲るを徹底比較",
  description: "楽器の処分方法10種を徹底比較。買取・粗大ゴミ・寄付・譲渡・廃品回収・メルカリ・ヤフオクなど、各方法の費用・手間・所要時間を一覧表で解説。",
  openGraph: {
    title: "【2026年最新】楽器の処分方法10選｜捨てる・売る・譲るを徹底比較",
    description: "楽器の処分方法10種を徹底比較。買取・粗大ゴミ・寄付・譲渡・廃品回収・メルカリ・ヤフオクなど、各方法の費用・手間・所要時間を一覧表で解説。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u697d\u5668\u306e\u51e6\u5206\u65b9\u6cd510\u9078\uff5c\u6368\u3066\u308b\u30fb\u58f2\u308b\u30fb\u8b72\u308b\u3092\u5fb9\u5e95\u6bd4\u8f03\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"楽器の処分方法10選｜捨てる・売る・譲るを徹底比較\", \"item\": \"https://gakkikaitori-biyori.com/articles/gakki-shobun-houhou/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"楽器の処分方法で一番おすすめは何ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"状態が良ければ買取専門店が最もお得です。値段がつかない楽器でも、寄付・譲渡・粗大ゴミなど10通りの方法があるため、まずは無料査定で値段を確認してから処分方法を決めるのがおすすめです。\"}}, {\"@type\": \"Question\", \"name\": \"壊れた楽器でも処分する方法はありますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"あります。粗大ゴミ（500〜2,000円）、不用品回収業者（3,000〜20,000円）、自治体の小型家電回収ボックスなどが利用可能です。Fender・Gibsonなどブランド品の場合は壊れていても買取できるケースがあるため、廃棄前に査定をおすすめします。\"}}, {\"@type\": \"Question\", \"name\": \"ピアノなどの大型楽器はどう処分すればいいですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"ピアノは粗大ゴミでは出せません。専門の運搬業者が必要で、廃棄費用は3〜5万円かかります。一方、ピアノ買取専門業者なら出張査定・運搬を無料で行ってくれるため、まずは買取査定を依頼するのが経済的です。\"}}, {\"@type\": \"Question\", \"name\": \"楽器を寄付できる団体はありますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"NPO法人イシンプロジェクト、楽器寄付ふるさと納税、地域の音楽教室・吹奏楽部などが楽器の寄付を受け付けています。送料は自己負担になるケースが多いですが、税控除を受けられる場合もあります。\"}}, {\"@type\": \"Question\", \"name\": \"廃品回収車に楽器を渡すのは安全ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"おすすめできません。無料を謳いつつ、回収時に高額請求するトラブルが多発しています。一般廃棄物収集運搬業の許可を持つ業者か、自治体の粗大ゴミ収集を利用するのが安全です。\"}}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">楽器の処分方法10選｜捨てる・売る・譲るを徹底比較</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「楽器を処分したいけど方法がわからない」——本記事では10通りの処分方法を網羅し、状況別に最適な選び方を提案します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <div className="table-wrapper"><table><thead><tr><th>方法</th><th>費用</th><th>手間</th><th>所要時間</th></tr></thead><tbody><tr><td>楽器買取専門店</td><td>プラス</td><td>★★</td><td>最短即日</td></tr><tr><td>リサイクルショップ</td><td>プラス（少）</td><td>★</td><td>即日</td></tr><tr><td>メルカリ・ヤフオク</td><td>プラス・大</td><td>★★★</td><td>1週間〜数ヶ月</td></tr><tr><td>ジモティー</td><td>プラス・中</td><td>★★★</td><td>数日〜1ヶ月</td></tr><tr><td>知人譲渡</td><td>送料程度</td><td>★★★</td><td>数日</td></tr><tr><td>音楽教室寄付</td><td>送料程度</td><td>★★</td><td>1〜2週間</td></tr><tr><td>NPO寄付</td><td>送料程度</td><td>★★</td><td>2〜4週間</td></tr><tr><td>粗大ゴミ</td><td>500〜2,000円</td><td>★★</td><td>1〜2週間</td></tr><tr><td>不用品回収</td><td>3,000〜20,000円</td><td>★</td><td>即日〜数日</td></tr><tr><td>廃品回収車</td><td>高額請求リスク</td><td>★</td><td>即日</td></tr></tbody></table></div>

          <p className="leading-relaxed mt-6 mb-4"><strong>結論：まずは「売れるか」を確認してから処分方法を決める</strong>のが正解です。動作する楽器・有名メーカー品は、捨てる前に買取専門店の無料査定に出せば、お金になるうえ処分の手間も省けます。値段が付かない・壊れている場合に、寄付や粗大ゴミなどを検討しましょう。</p>

          <h2 id="select" className="font-display text-xl font-bold text-foreground mt-8 mb-3">状況別のおすすめ</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4 leading-relaxed">
            <li><strong>価値がありそう／動作する</strong>：楽器買取専門店（プラスになり手間も少ない）。</li>
            <li><strong>急いで手放したい・大量</strong>：出張買取、または不用品回収。</li>
            <li><strong>値が付かない・思い出の品を活かしたい</strong>：音楽教室・NPOへの寄付や知人譲渡。</li>
            <li><strong>完全に壊れている</strong>：自治体の粗大ゴミ（最も安価）。</li>
          </ul>
          <div className="bg-cream border border-warm-border rounded-xl p-4 my-5">
            <p className="text-sm leading-relaxed"><strong>注意：</strong>「無料回収」をうたう<strong>廃品回収車・無許可業者</strong>は、後から高額請求されるトラブルが報告されています。一般廃棄物収集の許可がある業者か、自治体の案内で確認しましょう。</p>
          </div>
          <p className="leading-relaxed mb-4">処分か売却かで迷う場合は <Link href="/articles/gakki-danshari" className="text-accent underline">楽器の断捨離ガイド</Link> も参考に。</p>
          <p className="text-xs text-warm-gray mb-2">※ 費用・所要時間は一般的な目安です。地域・業者により異なります。</p>

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
            currentSlug="gakki-shobun-houhou"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "gakki-danshari", "hikkoshi-gakki-shobun", "souko-seiri-gakki", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

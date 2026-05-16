import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】趣味をやめた楽器の処分方法｜売却・譲渡・記念品保管の選択肢",
  description: "趣味をやめた・続かなかった楽器の処分方法を解説。売却で残金化、知人への譲渡、記念品として保管、寄付の4つの選択肢のメリット・デメリットを比較。",
  openGraph: {
    title: "【2026年最新】趣味をやめた楽器の処分方法｜売却・譲渡・記念品保管の選択肢",
    description: "趣味をやめた・続かなかった楽器の処分方法を解説。売却で残金化、知人への譲渡、記念品として保管、寄付の4つの選択肢のメリット・デメリットを比較。",
  },
};

function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">シチュエーション</span></li>
      </ol>
    </nav>
  );
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
    </div>
  );
}

function Schema() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u8cb7\u3063\u3066\u6570\u30f6\u6708\u3067\u58f2\u3063\u3066\u3082\u640d\u3057\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u65b0\u54c1\u6642\u306e60\u301c70%\u7a0b\u5ea6\u3067\u58f2\u308c\u308b\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002\u300c\u4f7f\u308f\u305a\u306b\u4fdd\u7ba1\u3057\u3066\u3082\u4fa1\u5024\u306f\u4e0b\u304c\u308b\u300d\u305f\u3081\u3001\u601d\u3044\u5207\u3063\u3066\u65e9\u3081\u306b\u58f2\u308b\u65b9\u304c\u640d\u5931\u306f\u6700\u5c0f\u5316\u3067\u304d\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u8da3\u5473\u518d\u958b\u306e\u53ef\u80fd\u6027\u304c\u6b8b\u3063\u3066\u3044\u307e\u3059\u304c\u2026\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u300c2\u5e74\u4ee5\u5185\u306b\u518d\u958b\u3059\u308b\u5177\u4f53\u7684\u4e88\u5b9a\u300d\u304c\u306a\u3044\u9650\u308a\u3001\u307b\u307c\u518d\u958b\u3057\u307e\u305b\u3093\u3002\u518d\u958b\u3057\u305f\u3044\u6642\u306b\u4e2d\u53e4\u3067\u540c\u30e2\u30c7\u30eb\u3092\u518d\u8cfc\u5165\u3059\u308b\u65b9\u304c\u3001\u4fdd\u7ba1\u30b3\u30b9\u30c8\u3092\u8003\u3048\u3066\u3082\u5408\u7406\u7684\u3067\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u89aa\u306b\u8cb7\u3063\u3066\u3082\u3089\u3063\u305f\u697d\u5668\u306a\u306e\u3067\u58f2\u308b\u306e\u306f\u6c17\u304c\u5f15\u3051\u307e\u3059\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u89aa\u306b\u76f8\u8ac7\u3057\u3066\u5408\u610f\u3092\u5f97\u3066\u304b\u3089\u58f2\u308b\u306e\u304c\u30d9\u30b9\u30c8\u3002\u300c\u4f7f\u308f\u308c\u305a\u306b\u7720\u3063\u3066\u3044\u308b\u65b9\u304c\u60b2\u3057\u3044\u300d\u3068\u8003\u3048\u308b\u89aa\u3082\u591a\u3044\u3067\u3059\u3002\u58f2\u5374\u984d\u3092\u30d7\u30ec\u30bc\u30f3\u30c8\u3059\u308b\u306e\u3082\u4e00\u6848\u3002\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u8da3\u5473\u3092\u3084\u3081\u305f\u697d\u5668\u306e\u51e6\u5206\u65b9\u6cd5\uff5c\u58f2\u5374\u30fb\u8b72\u6e21\u30fb\u8a18\u5ff5\u54c1\u4fdd\u7ba1\u306e\u9078\u629e\u80a2\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Schema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">シチュエーション</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">趣味をやめた楽器の処分方法｜売却・譲渡・記念品保管の選択肢</h1>
          <p className="text-warm-gray text-sm leading-relaxed">ギターを始めたけど続かなかった、ピアノを習ったけどやめた——趣味として始めた楽器が「使われないまま」になることは珍しくありません。本記事では、趣味をやめた楽器の4つの処分選択肢と、それぞれの判断基準を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#choices" className="hover:underline">趣味をやめた楽器の4つの選択肢</a></li>
            <li><a href="#kijun" className="hover:underline">選択肢を選ぶ判断基準</a></li>
            <li><a href="#souba" className="hover:underline">趣味楽器の買取相場目安</a></li>
            <li><a href="#partner" className="hover:underline">おすすめ買取サービス</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
        <h2 id="choices">趣味をやめた楽器の4つの選択肢</h2>
        <h3>選択肢1: 売却（残金化）</h3>
        <p>中古市場で価値がある楽器なら、買取が最もお得。趣味をやめた区切りとしても整理がつきやすい。</p>
        <h3>選択肢2: 知人・家族に譲渡</h3>
        <p>演奏する知人や家族にあげる方法。社会的価値あり。</p>
        <h3>選択肢3: 記念品として保管</h3>
        <p>「いつか再開するかも」と思うなら保管も選択肢。ただし保管環境を整える必要あり。</p>
        <h3>選択肢4: 寄付</h3>
        <p>音楽教育NPOや子ども会、地域音楽団体への寄付。価値の高い社会貢献。</p>

        <h2 id="kijun">選択肢を選ぶ判断基準</h2>
        <div className="table-wrapper"><table><thead><tr><th>状況</th><th>おすすめの選択肢</th></tr></thead><tbody><tr><td>楽器が市場価値あり、もう絶対弾かない</td><td>売却</td></tr><tr><td>楽器が市場価値あり、演奏する知人がいる</td><td>譲渡 or 売却</td></tr><tr><td>楽器に思い入れがあり、保管スペースがある</td><td>保管</td></tr><tr><td>楽器の市場価値が低い</td><td>譲渡 or 寄付 or 処分</td></tr><tr><td>再開の可能性が低くないが、収納場所がない</td><td>売却（再開時に同モデル中古を購入）</td></tr></tbody></table></div>

        <h2 id="souba">趣味楽器の買取相場目安</h2>
        <div className="table-wrapper"><table><thead><tr><th>楽器</th><th>初心者モデル相場</th><th>中級者モデル相場</th></tr></thead><tbody><tr><td>アコギ</td><td>3,000〜10,000円</td><td>20,000〜80,000円</td></tr><tr><td>エレキギター</td><td>5,000〜20,000円</td><td>30,000〜100,000円</td></tr><tr><td>ベース</td><td>5,000〜15,000円</td><td>20,000〜80,000円</td></tr><tr><td>電子ピアノ</td><td>10,000〜30,000円</td><td>40,000〜100,000円</td></tr><tr><td>管楽器（吹奏楽部レンタル品）</td><td>10,000〜30,000円</td><td>50,000〜200,000円</td></tr></tbody></table></div>

        <h2 id="partner">おすすめ買取サービス</h2>
        <ul><li><strong>ヒカカク！</strong>: 楽器初心者でも使いやすい一括査定</li><li><strong>ウリエル</strong>: 出張買取で1台でも対応</li><li><strong>ティファナ</strong>: 全国の店舗で持ち込み即現金化</li></ul>

        <h2 id="faq">よくある質問</h2>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">買って数ヶ月で売っても損しますか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">新品時の60〜70%程度で売れることが多いです。「使わずに保管しても価値は下がる」ため、思い切って早めに売る方が損失は最小化できます。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">趣味再開の可能性が残っていますが…<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">「2年以内に再開する具体的予定」がない限り、ほぼ再開しません。再開したい時に中古で同モデルを再購入する方が、保管コストを考えても合理的です。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">親に買ってもらった楽器なので売るのは気が引けます<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">親に相談して合意を得てから売るのがベスト。「使われずに眠っている方が悲しい」と考える親も多いです。売却額をプレゼントするのも一案。</p></details>

          <CtaBox />

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

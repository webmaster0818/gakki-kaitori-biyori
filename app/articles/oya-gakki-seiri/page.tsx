import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/oya-gakki-seiri/' },
  title: "【2026年最新】親の家の楽器整理マニュアル｜遺品・実家じまいで失敗しないコツ",
  description: "親の家に残された楽器の整理に困っている方へ。遺品整理、実家じまいでの楽器処分・買取の手順、価値ある楽器の見分け方、相続税との関係まで網羅解説。",
  openGraph: {
    title: "【2026年最新】親の家の楽器整理マニュアル｜遺品・実家じまいで失敗しないコツ",
    description: "親の家に残された楽器の整理に困っている方へ。遺品整理、実家じまいでの楽器処分・買取の手順、価値ある楽器の見分け方、相続税との関係まで網羅解説。",
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
        <a href="https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        {/* felmatインプレッション計測 */}
        <img src="https://t.felmat.net/fmimp/A11184N.11542509.O138027B" width={1} height={1} alt="" style={{ border: "none" }} />
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

function Schema() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u5f62\u898b\u3068\u3057\u3066\u4e00\u90e8\u3060\u3051\u6b8b\u3059\u306e\u306f\u30c0\u30e1\u3067\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u3082\u3061\u308d\u3093OK\u3067\u3059\u3002\u5bb6\u65cf\u3067\u8a71\u3057\u5408\u3044\u3001\u601d\u3044\u5165\u308c\u306e\u3042\u308b\u697d\u5668\u306f\u6b8b\u3057\u307e\u3057\u3087\u3046\u3002\u624b\u653e\u3059\u524d\u306b\u5199\u771f\u3068\u52d5\u753b\u3092\u64ae\u3063\u3066\u304a\u304f\u3068\u3001\u5fc3\u306e\u6574\u7406\u304c\u3064\u304d\u3084\u3059\u3044\u3067\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u53e4\u3044\u697d\u5668\u306e\u5e74\u4ee3\u304c\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u30b7\u30ea\u30a2\u30eb\u30ca\u30f3\u30d0\u30fc\u304b\u3089\u5224\u5225\u3067\u304d\u308b\u5834\u5408\u304c\u591a\u3044\u3067\u3059\u3002\u8cb7\u53d6\u696d\u8005\u306e\u5c02\u9580\u67fb\u5b9a\u58eb\u304c\u898b\u308c\u3070\u3001\u5e74\u4ee3\u3082\u4fa1\u5024\u3082\u4e00\u767a\u3067\u308f\u304b\u308a\u307e\u3059\u3002\u307e\u305a\u306f\u7121\u6599\u67fb\u5b9a\u3092\u4f9d\u983c\u3057\u307e\u3057\u3087\u3046\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5b9f\u5bb6\u3092\u58f2\u5374\u3059\u308b\u524d\u306b\u3044\u3064\u307e\u3067\u306b\u51e6\u5206\u3059\u3079\u304d\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5b9f\u5bb6\u58f2\u5374\u306e\u5f15\u304d\u6e21\u3057\u306e1\u301c2\u30f6\u6708\u524d\u306b\u306f\u3001\u697d\u5668\u306e\u51e6\u5206\u3092\u5b8c\u4e86\u3055\u305b\u308b\u306e\u304c\u7406\u60f3\u3067\u3059\u3002\u8cb7\u53d6\u67fb\u5b9a\u301c\u5f15\u304d\u53d6\u308a\u30672\u301c4\u9031\u9593\u304b\u304b\u308b\u305f\u3081\u3001\u4f59\u88d5\u3092\u6301\u3063\u3066\u6e96\u5099\u3057\u307e\u3057\u3087\u3046\u3002\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u89aa\u306e\u5bb6\u306e\u697d\u5668\u6574\u7406\u30de\u30cb\u30e5\u30a2\u30eb\uff5c\u907a\u54c1\u30fb\u5b9f\u5bb6\u3058\u307e\u3044\u3067\u5931\u6557\u3057\u306a\u3044\u30b3\u30c4\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"親の家の楽器整理マニュアル｜遺品・実家じまいで失敗しないコツ\", \"item\": \"https://gakkikaitori-biyori.com/articles/oya-gakki-seiri/\"}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">親の家の楽器整理マニュアル｜遺品・実家じまいで失敗しないコツ</h1>
          <p className="text-warm-gray text-sm leading-relaxed">親が亡くなった、施設に入った、実家を処分する——人生のターニングポイントで、親の家に残された楽器の整理に直面する方は多いはず。「価値がわからない」「捨てるには罪悪感がある」と悩む前に、本記事の手順で順序立てて整理を進めましょう。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#order" className="hover:underline">整理を始める前に押さえる3つの心得</a></li>
            <li><a href="#kachi" className="hover:underline">価値ある楽器の見分け方</a></li>
            <li><a href="#steps" className="hover:underline">親の家の楽器整理7ステップ</a></li>
            <li><a href="#souzoku" className="hover:underline">相続税との関係</a></li>
            <li><a href="#partner" className="hover:underline">親の家の楽器整理におすすめサービス</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
        <h2 id="order">整理を始める前に押さえる3つの心得</h2>
        <ol><li><strong>急いで処分しない</strong>: 価値ある楽器を粗大ゴミに出してしまうリスクが最大</li><li><strong>家族で相談</strong>: 兄弟姉妹や親族と相談し、思い出の品として残したい人がいるか確認</li><li><strong>相続関連の手続きを先に</strong>: 高額な楽器（バイオリン、グランドピアノ等）は相続財産として扱うべきケースあり</li></ol>

        <h2 id="kachi">価値ある楽器の見分け方</h2>
        <h3>1. メーカーで判断</h3>
        <ul><li><strong>ピアノ</strong>: ヤマハ、カワイ、スタインウェイ、ベヒシュタイン</li><li><strong>ギター</strong>: フェンダー、ギブソン、マーチン、テイラー</li><li><strong>バイオリン</strong>: ストラディヴァリ、ガルネリ、国内のオールド楽器</li><li><strong>管楽器</strong>: セルマー、ヤマハカスタム、バック</li></ul>
        <h3>2. シリアルナンバー・年式で判断</h3>
        <p>古い楽器が一概に価値が低いわけではなく、ヴィンテージとして評価される場合があります。シリアルナンバーから製造年を特定できる楽器も多いです。</p>
        <h3>3. 付属品の有無</h3>
        <p>オリジナルケース、保証書、購入時の領収書、修理記録などが揃っていると評価が大幅にアップします。</p>

        <h2 id="steps">親の家の楽器整理7ステップ</h2>
        <ol><li><strong>全楽器をリスト化</strong>: 写真撮影＋メーカー・型番をメモ</li><li><strong>家族間で相談</strong>: 残したい人を確認</li><li><strong>相続税の確認</strong>: 高額楽器は税理士へ相談</li><li><strong>一括査定で価値把握</strong>: ヒカカク！等で概算額を取得</li><li><strong>買取依頼</strong>: 価値ある楽器は買取業者へ</li><li><strong>譲渡・寄付</strong>: 買取がつかない楽器は知人・音楽教室・NPOへ</li><li><strong>処分</strong>: 上記いずれも対象外の楽器のみ粗大ゴミ・不用品回収業者へ</li></ol>

        <h2 id="souzoku">相続税との関係</h2>
        <p>原則として、市場価値が30万円を超える高額楽器は相続財産に含まれます。</p>
        <ul><li><strong>ストラディヴァリのバイオリン</strong>: 数百万〜数億円。必ず申告対象</li><li><strong>スタインウェイのグランドピアノ</strong>: 200万〜500万円。申告対象</li><li><strong>ヴィンテージのギブソンギター</strong>: 50万〜300万円。状態次第で申告対象</li></ul>
        <p>「現金化したら相続税が発生するのでは」と心配して隠す行為はNG。後から発覚すると追徴課税のリスクがあります。心配な場合は税理士に相談しましょう。</p>

        <h2 id="partner">親の家の楽器整理におすすめサービス</h2>
        <ul><li><strong>ヒカカク！（一括査定）</strong>: 楽器の価値を素早く把握できる</li><li><strong>ウリエル（出張買取）</strong>: 大型ピアノも自宅まで査定に来てくれる</li><li><strong>ティファナ（店頭買取）</strong>: 小型楽器をまとめて持ち込み可能</li></ul>

        <h2 id="faq">よくある質問</h2>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">形見として一部だけ残すのはダメですか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">もちろんOKです。家族で話し合い、思い入れのある楽器は残しましょう。手放す前に写真と動画を撮っておくと、心の整理がつきやすいです。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">古い楽器の年代がわからない場合は？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">シリアルナンバーから判別できる場合が多いです。買取業者の専門査定士が見れば、年代も価値も一発でわかります。まずは無料査定を依頼しましょう。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">実家を売却する前にいつまでに処分すべき？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">実家売却の引き渡しの1〜2ヶ月前には、楽器の処分を完了させるのが理想です。買取査定〜引き取りで2〜4週間かかるため、余裕を持って準備しましょう。</p></details>

          <CtaBox />

          <RelatedArticles
            currentSlug="oya-gakki-seiri"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "souko-seiri-gakki", "gakki-danshari", "kodomo-piano-yameta", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

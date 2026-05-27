import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "【2026年最新】バンド解散後の機材整理術｜アンプ・エフェクター・ドラムまで一括処分",
  description: "バンドが解散した後の機材整理・買取方法を解説。アンプ、エフェクター、ドラム、ベースなど多種多様な機材を一括で売る手順とおすすめ業者、メンバー間の精算方法まで。",
  openGraph: {
    title: "【2026年最新】バンド解散後の機材整理術｜アンプ・エフェクター・ドラムまで一括処分",
    description: "バンドが解散した後の機材整理・買取方法を解説。アンプ、エフェクター、ドラム、ベースなど多種多様な機材を一括で売る手順とおすすめ業者、メンバー間の精算方法まで。",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u30b9\u30bf\u30b8\u30aa\u306b\u7f6e\u3044\u3066\u3042\u308b\u6a5f\u6750\u3082\u58f2\u308c\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u306f\u3044\u3001\u51fa\u5f35\u8cb7\u53d6\u306e\u5834\u5408\u306f\u30b9\u30bf\u30b8\u30aa\u306b\u76f4\u63a5\u6765\u3066\u3082\u3089\u3046\u3053\u3068\u3082\u53ef\u80fd\uff08\u696d\u8005\u30fb\u30b9\u30bf\u30b8\u30aa\u306e\u8a31\u53ef\u6b21\u7b2c\uff09\u3002\u4e8b\u524d\u306b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30e1\u30f3\u30d0\u30fc\u3067\u63c9\u3081\u305f\u5834\u5408\u306f\u3069\u3046\u3059\u308c\u3070\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u4e8b\u524d\u306b\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3067\u4fa1\u5024\u30fb\u6240\u6709\u8005\u3092\u53ef\u8996\u5316\u3057\u3001\u7b2c\u4e09\u8005\uff08\u8cb7\u53d6\u696d\u8005\u306e\u67fb\u5b9a\u984d\uff09\u3092\u5224\u65ad\u57fa\u6e96\u306b\u3059\u308b\u3068\u63c9\u3081\u306b\u304f\u3044\u3067\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u97f3\u697d\u6d3b\u52d5\u3092\u518d\u958b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u5834\u5408\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u30e1\u30a4\u30f3\u697d\u5668\uff08\u81ea\u5206\u306e\u30e1\u30a4\u30f3\u30ae\u30bf\u30fc\u30fb\u30d9\u30fc\u30b9\u7b49\uff09\u3060\u3051\u6b8b\u3057\u3066\u3001\u30d4\u30c3\u30af\u30a2\u30c3\u30d7\u30fb\u30da\u30c0\u30eb\u306a\u3069\u88dc\u52a9\u6a5f\u6750\u3092\u51e6\u5206\u3059\u308b\u306e\u304c\u30d0\u30e9\u30f3\u30b9\u306e\u3044\u3044\u9078\u629e\u3067\u3059\u3002\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u30d0\u30f3\u30c9\u89e3\u6563\u5f8c\u306e\u6a5f\u6750\u6574\u7406\u8853\uff5c\u30a2\u30f3\u30d7\u30fb\u30a8\u30d5\u30a7\u30af\u30bf\u30fc\u30fb\u30c9\u30e9\u30e0\u307e\u3067\u4e00\u62ec\u51e6\u5206\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"バンド解散後の機材整理術｜アンプ・エフェクター・ドラムまで一括処分\", \"item\": \"https://gakkikaitori-biyori.com/articles/band-kaisan-kizai/\"}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">バンド解散後の機材整理術｜アンプ・エフェクター・ドラムまで一括処分</h1>
          <p className="text-warm-gray text-sm leading-relaxed">バンド解散——10年、20年と続けてきたバンドが終わりを迎えるとき、メンバーで共有していた機材や、それぞれが持ち寄った楽器・機材の処分が課題に。スタジオの荷物撤去期限もある中、効率的に整理する手順を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#mendoukusasa" className="hover:underline">バンド機材整理が面倒な3つの理由</a></li>
            <li><a href="#steps" className="hover:underline">効率的な機材整理6ステップ</a></li>
            <li><a href="#seisan" className="hover:underline">メンバー間の機材精算3パターン</a></li>
            <li><a href="#souba" className="hover:underline">バンド機材の買取相場目安</a></li>
            <li><a href="#partner" className="hover:underline">バンド機材整理におすすめ買取サービス</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
        <h2 id="mendoukusasa">バンド機材整理が面倒な3つの理由</h2>
        <ul><li><strong>機材の種類が多い</strong>: ギター、ベース、ドラム、アンプ、エフェクター、シールド、マイク等</li><li><strong>所有者が複数</strong>: 個人所有・共有所有が入り混じる</li><li><strong>スタジオ撤去期限</strong>: 練習スタジオを退会する締切が短いケースが多い</li></ul>

        <h2 id="steps">効率的な機材整理6ステップ</h2>
        <ol><li><strong>メンバー全員で機材リストを作成</strong>: スプレッドシートで所有者・残価値・希望（売却/譲渡/返却）を整理</li><li><strong>個人所有機材の引き取り</strong>: 各メンバーが自分の機材を引き取る期限を設定</li><li><strong>共有機材の精算方法を決定</strong>: 売却して山分け or 1人が買い取り or 譲渡</li><li><strong>一括査定で売却額を把握</strong>: ヒカカク！等で複数業者の見積もりを取得</li><li><strong>出張買取で一気に売却</strong>: 1回の出張査定で全機材を売却</li><li><strong>売却額をメンバーで分配</strong>: あらかじめ決めた比率で振り込み</li></ol>

        <h2 id="seisan">メンバー間の機材精算3パターン</h2>
        <h3>パターン1: 共有機材を1人が買い取る</h3>
        <p>メンバーの中で「自分が個人で続ける」と決めた人がいる場合、その人が他のメンバーに対して市場価値の比率を払って買い取る。</p>
        <h3>パターン2: 全部売却して山分け</h3>
        <p>誰も継続しない場合、機材を全て売却して、メンバー数で売却額を分配。シンプルで揉めにくい。</p>
        <h3>パターン3: 物々で分ける</h3>
        <p>売却せず、メンバーがそれぞれ価値に応じた機材を持ち帰る。事務処理は楽だが、価値の見積もりで意見が割れがち。</p>

        <h2 id="souba">バンド機材の買取相場目安</h2>
        <div className="table-wrapper"><table><thead><tr><th>機材カテゴリ</th><th>相場目安</th></tr></thead><tbody><tr><td>エレキギター（フェンダー・ギブソン中堅）</td><td>30,000〜200,000円</td></tr><tr><td>ベース（フェンダー中堅）</td><td>20,000〜150,000円</td></tr><tr><td>ドラムセット（パール・タマ中堅）</td><td>30,000〜150,000円</td></tr><tr><td>ギターアンプ（マーシャル等中型）</td><td>20,000〜80,000円</td></tr><tr><td>エフェクターボード一式</td><td>10,000〜50,000円</td></tr><tr><td>シールド・ケーブル類</td><td>セットで5,000〜15,000円</td></tr></tbody></table></div>

        <h2 id="partner">バンド機材整理におすすめ買取サービス</h2>
        <ul><li><strong>ヒカカク！（一括査定）</strong>: 様々なジャンルの機材を一度に査定依頼</li><li><strong>ウリエル（出張買取）</strong>: スタジオまで来てもらえる業者もあり</li><li><strong>ティファナ（店頭買取）</strong>: 楽器店ネットワークで様々な機材を査定</li></ul>

        <h2 id="faq">よくある質問</h2>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">スタジオに置いてある機材も売れますか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">はい、出張買取の場合はスタジオに直接来てもらうことも可能（業者・スタジオの許可次第）。事前に確認しましょう。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">メンバーで揉めた場合はどうすれば？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">事前にスプレッドシートで価値・所有者を可視化し、第三者（買取業者の査定額）を判断基準にすると揉めにくいです。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">音楽活動を再開する可能性がある場合は？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">メイン楽器（自分のメインギター・ベース等）だけ残して、ピックアップ・ペダルなど補助機材を処分するのがバランスのいい選択です。</p></details>

          <CtaBox />

          <RelatedArticles
            currentSlug="band-kaisan-kizai"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "daigaku-sotsugyo-gakki", "matome-uri-kaitori", "shumi-yameta-gakki", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

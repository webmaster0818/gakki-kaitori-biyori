import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/daigaku-sotsugyo-gakki/' },
  title: "【2026年最新】大学卒業時の楽器処分ガイド｜就職前に整理・買取して新生活を",
  description: "大学卒業を機に、サークルや個人で使った楽器を処分したい方へ。卒業前に整理すべき理由、買取相場、就職先への引っ越しと連動した処分手順を解説。",
  openGraph: {
    title: "【2026年最新】大学卒業時の楽器処分ガイド｜就職前に整理・買取して新生活を",
    description: "大学卒業を機に、サークルや個人で使った楽器を処分したい方へ。卒業前に整理すべき理由、買取相場、就職先への引っ越しと連動した処分手順を解説。",
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
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

function Schema() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u5352\u8ad6\u3067\u5fd9\u3057\u304f\u6642\u9593\u304c\u306a\u3044\u5834\u5408\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5b85\u914d\u8cb7\u53d6\u304c\u304a\u3059\u3059\u3081\u3002\u96c6\u8377\u3082\u767a\u9001\u3082\u81ea\u5b85\u5b8c\u7d50\u3067\u3001\u6700\u77ed3\u65e5\u3067\u73fe\u91d1\u632f\u8fbc\u307e\u3067\u5b8c\u4e86\u3057\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5f15\u3063\u8d8a\u3057\u3068\u540c\u65e5\u306b\u51e6\u5206\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u51fa\u5f35\u8cb7\u53d6\u3068\u5f15\u3063\u8d8a\u3057\u3092\u540c\u65e5\u306b\u7d44\u3080\u306e\u306f\u96e3\u3057\u3044\u3067\u3059\u304c\u3001\u5f15\u3063\u8d8a\u3057\u524d\u65e5\u306b\u51fa\u5f35\u8cb7\u53d6\u3092\u5165\u308c\u308b\u65b9\u306f\u591a\u3044\u3067\u3059\u3002\u4e8b\u524d\u4e88\u7d04\u3092\u3057\u307e\u3057\u3087\u3046\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30d0\u30f3\u30c9\u30e1\u30f3\u30d0\u30fc\u3067\u5171\u6709\u3057\u3066\u3044\u305f\u697d\u5668\u306e\u5834\u5408\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u4ee3\u8868\u8005\u3092\u6c7a\u3081\u3066\u58f2\u5374\u30fb\u5206\u914d\u3059\u308b\u306e\u304c\u4e00\u822c\u7684\u3002\u4e8b\u524d\u306b\u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u306e\u5408\u610f\u3092\u6587\u66f8\uff08LINE\u7b49\uff09\u3067\u6b8b\u3057\u3066\u304a\u304f\u3068\u5f8c\u3067\u30c8\u30e9\u30d6\u30eb\u3092\u907f\u3051\u3089\u308c\u307e\u3059\u3002\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u5927\u5b66\u5352\u696d\u6642\u306e\u697d\u5668\u51e6\u5206\u30ac\u30a4\u30c9\uff5c\u5c31\u8077\u524d\u306b\u6574\u7406\u30fb\u8cb7\u53d6\u3057\u3066\u65b0\u751f\u6d3b\u3092\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"大学卒業時の楽器処分ガイド｜就職前に整理・買取して新生活を\", \"item\": \"https://gakkikaitori-biyori.com/articles/daigaku-sotsugyo-gakki/\"}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">大学卒業時の楽器処分ガイド｜就職前に整理・買取して新生活を</h1>
          <p className="text-warm-gray text-sm leading-relaxed">卒業＋就職＋引っ越し——人生最大の節目に、4年間使ったサークルの楽器・趣味の楽器をどうするか。新生活のスタートを身軽に切るための整理術を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#why" className="hover:underline">卒業時に楽器を処分すべき3つの理由</a></li>
            <li><a href="#baseline" className="hover:underline">卒業時によく処分される楽器ランキング</a></li>
            <li><a href="#steps" className="hover:underline">卒業時の楽器処分・買取5ステップ</a></li>
            <li><a href="#benefit" className="hover:underline">卒業時の楽器処分で得られるメリット</a></li>
            <li><a href="#partner" className="hover:underline">卒業生におすすめの買取サービス</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
        <h2 id="why">卒業時に楽器を処分すべき3つの理由</h2>
        <ol><li><strong>新生活のスペース問題</strong>: 一人暮らしのワンルームに楽器を持ち込むスペースがない</li><li><strong>演奏機会の激減</strong>: 就職後は楽器を弾く時間が大幅に減るケースが多い</li><li><strong>引っ越し費用節約</strong>: 大型楽器の運搬料金は数千〜数万円。処分すれば浮く</li></ol>

        <h2 id="baseline">卒業時によく処分される楽器ランキング</h2>
        <div className="table-wrapper"><table><thead><tr><th>順位</th><th>楽器</th><th>理由</th><th>買取相場の目安</th></tr></thead><tbody><tr><td>1</td><td>アコギ</td><td>サークル定番、社会人で弾かなくなる</td><td>5,000〜30,000円</td></tr><tr><td>2</td><td>エレキギター</td><td>バンド活動終了とともに不要に</td><td>10,000〜80,000円</td></tr><tr><td>3</td><td>ベース</td><td>バンドの解散・卒業で手放す</td><td>10,000〜60,000円</td></tr><tr><td>4</td><td>電子ピアノ</td><td>実家から持ってきた個体を処分</td><td>10,000〜100,000円</td></tr><tr><td>5</td><td>管楽器（吹奏楽部）</td><td>高校・大学のサークル使用後に処分</td><td>20,000〜200,000円</td></tr></tbody></table></div>

        <h2 id="steps">卒業時の楽器処分・買取5ステップ</h2>
        <ol><li><strong>卒業の3ヶ月前</strong>: 所有楽器の棚卸し。リスト化</li><li><strong>卒業の2ヶ月前</strong>: 一括査定で概算額を取得</li><li><strong>卒業の1ヶ月前</strong>: 買取業者を選定し、出張または持ち込みで査定実施</li><li><strong>卒業直前</strong>: 売却完了。残金は引っ越し費用に充当</li><li><strong>新生活開始</strong>: 必要最小限の楽器だけ持っていく or 一切持っていかない</li></ol>

        <h2 id="benefit">卒業時の楽器処分で得られるメリット</h2>
        <ul><li><strong>初任給前の貴重な収入源</strong>: 楽器の売却額が引っ越し費用や敷金・礼金の一部に</li><li><strong>身軽な新生活</strong>: 余計な荷物がない状態でスタート</li><li><strong>精神的リセット</strong>: 学生時代のものを整理することで、新しい人生フェーズに集中できる</li></ul>

        <h2 id="partner">卒業生におすすめの買取サービス</h2>
        <ul><li><strong>ヒカカク！</strong>: スマホで完結する一括査定。LINEで完了するケースも</li><li><strong>ウリエル</strong>: 大型楽器（ドラム・ピアノ等）の引き取り対応</li><li><strong>ティファナ</strong>: 卒業前に大学近辺の店舗で即現金化</li></ul>

        <h2 id="faq">よくある質問</h2>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">卒論で忙しく時間がない場合は？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">宅配買取がおすすめ。集荷も発送も自宅完結で、最短3日で現金振込まで完了します。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">引っ越しと同日に処分できますか？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">出張買取と引っ越しを同日に組むのは難しいですが、引っ越し前日に出張買取を入れる方は多いです。事前予約をしましょう。</p></details>
        <details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">バンドメンバーで共有していた楽器の場合は？<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">代表者を決めて売却・分配するのが一般的。事前にメンバー全員の合意を文書（LINE等）で残しておくと後でトラブルを避けられます。</p></details>

          <CtaBox />

          <RelatedArticles
            currentSlug="daigaku-sotsugyo-gakki"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "shumi-yameta-gakki", "renshu-shinai-gakki", "band-kaisan-kizai", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

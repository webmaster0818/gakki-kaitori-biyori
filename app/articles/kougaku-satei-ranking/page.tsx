import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import DealerComparisonTable from "@/components/DealerComparisonTable";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/kougaku-satei-ranking/' },
  title: "【2026年最新】高額査定がつく楽器ランキングTOP10｜100万円超えのお宝も",
  description: "高額買取が期待できる楽器ランキング。100万円以上の査定がつくヴィンテージギター・ピアノ・バイオリン・管楽器の代表モデルを紹介。",
  openGraph: {
    title: "【2026年最新】高額査定がつく楽器ランキングTOP10｜100万円超えのお宝も",
    description: "高額買取が期待できる楽器ランキング。100万円以上の査定がつくヴィンテージギター・ピアノ・バイオリン・管楽器の代表モデルを紹介。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u9ad8\u984d\u67fb\u5b9a\u304c\u3064\u304f\u697d\u5668\u30e9\u30f3\u30ad\u30f3\u30b0TOP10\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"高額査定がつく楽器ランキングTOP10\", \"item\": \"https://gakkikaitori-biyori.com/articles/kougaku-satei-ranking/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"どんな楽器が高額査定になりますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"ヴィンテージギター（Fender・Gibson 1970年代以前）、グランドピアノ（Steinway・Bösendorfer）、プロ仕様サックス・トランペット、楽器全般のヴィンテージモデルが高額査定の対象です。\"}}, {\"@type\": \"Question\", \"name\": \"ヴィンテージギターは何年から価値が上がりますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"一般的に1970年以前の個体が「ヴィンテージ」と呼ばれ、特にFenderは1954〜1965年（プリCBS）、Gibsonは1959年バーストが最高値です。状態次第で100万円〜数千万円の査定がつきます。\"}}, {\"@type\": \"Question\", \"name\": \"グランドピアノは買取してもらえますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"はい。SteinwayはモデルM/B/Dで200〜1,000万円、BösendorferのImperialで300〜800万円が買取相場です。運搬には専門業者が必要なため、ピアノ専門の買取業者へ依頼してください。\"}}, {\"@type\": \"Question\", \"name\": \"どこのブランドが一番高く売れますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"弦楽器: Fender・Gibson・Martin・Gretsch、管楽器: Selmer・Yamaha・Yanagisawa、ピアノ: Steinway・Bösendorfer・Bechstein、ドラム: Gretsch・Ludwig・DWなどが高額査定ブランドの代表格です。\"}}, {\"@type\": \"Question\", \"name\": \"古い楽器ほど高くなりますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"必ずしもそうではありません。ヴィンテージ価値があるのは「製造当時の品質が現代より優れていた」と評価されるブランドのみです。安価ブランドや量産モデルは古くても値段はつきにくいです。\"}}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">高額査定がつく楽器ランキングTOP10</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「家に眠っている楽器が高額査定になるかも？」——意外と知られていない高額査定の楽器10選を紹介します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">

          <p className="leading-relaxed mb-5">
            高額査定がつきやすいのは、<strong>「中古でも需要が高く、数が出回りにくい楽器」</strong>です。とくに<strong>ヴィンテージ・名器・プロ仕様</strong>はその傾向が強く、状態が良ければ思わぬ高値になることもあります。以下は高額査定が期待できる楽器ジャンルのランキングです（金額はあくまで目安。モデル・年式・状態で大きく変動します）。
          </p>

          <ol className="space-y-3 my-6">
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">1. ヴィンテージ・エレキギター</strong>（1950〜60年代のFender/Gibson 等）<br /><span className="text-sm text-warm-gray">本数が少なく世界的に需要が高い。程度次第で数十万〜数百万円規模になることも。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">2. グランドピアノ</strong>（スタインウェイ等の名器）<br /><span className="text-sm text-warm-gray">名門メーカーの中古は需要が安定。状態・型番により数十万〜数百万円。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">3. オールド弦楽器</strong>（ヴァイオリン・チェロ等）<br /><span className="text-sm text-warm-gray">製作者・産地・年代で評価が大きく変わる。鑑定で価値が確定するタイプ。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">4. プロ用サックス</strong>（セルマー マークVI 等の名器）<br /><span className="text-sm text-warm-gray">プロ・上級者に定番需要。人気モデルは中古でも高値で取引される。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">5. ヴィンテージ・チューブアンプ</strong>（Marshall/Fender/VOX 旧型）<br /><span className="text-sm text-warm-gray">ギター本体と並んで人気。旧年式・希少モデルは数万〜数十万円。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">6. アナログ・シンセサイザー</strong>（Moog/Roland 等の名機）<br /><span className="text-sm text-warm-gray">復刻不可の旧機種に根強い需要。動作品は高評価になりやすい。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">7. 高級アコースティックギター</strong>（Martin/Gibson の定番機）<br /><span className="text-sm text-warm-gray">定番モデルは中古市場が厚く、状態が良ければ高めの査定に。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">8. 人気アップライトピアノ</strong>（ヤマハ/カワイの上位機種）<br /><span className="text-sm text-warm-gray">海外輸出需要もあり中古流通が活発。型番で査定差が出る。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">9. プロ用管楽器</strong>（総銀フルート・上位トランペット 等）<br /><span className="text-sm text-warm-gray">上位グレードは中古でも需要が安定。素材・モデルで評価が変わる。</span></li>
            <li className="border border-warm-border rounded-xl p-4"><strong className="text-accent-dark">10. ヴィンテージ・エフェクター</strong>（旧BOSS/Ibanez/MXR 等）<br /><span className="text-sm text-warm-gray">小型でも旧年式・希少モデルはコレクター需要で高値が付くことがある。</span></li>
          </ol>

          <h2 id="point" className="font-display text-xl font-bold text-foreground mt-8 mb-3">高額査定を引き出す3つのポイント</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4 leading-relaxed">
            <li><strong>付属品を揃える</strong>：ケース・保証書・元箱・付属パーツが揃うと評価が上がりやすい。</li>
            <li><strong>専門性の高い業者を選ぶ</strong>：楽器専門の査定士がいる業者ほど、希少モデルの価値を正しく評価できる。</li>
            <li><strong>複数社で相見積り</strong>：同じ楽器でも提示額に差が出ます（<Link href="/articles/takaku-uru-kotsu/" className="text-accent underline">高く売るコツ</Link>・<Link href="/articles/souba-ichiran/" className="text-accent underline">相場一覧</Link>）。</li>
          </ul>
          <p className="text-xs text-warm-gray mb-2">※ 掲載のジャンル・金額感は一般的な中古市場の傾向にもとづく目安です。実際の買取額はモデル・年式・状態・付属品・各業者の在庫状況により異なります。正確な額は無料査定でご確認ください。</p>

          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
          </div>
          <DealerComparisonTable heading="楽器を高額査定する主要7社（公式公開情報の比較）" intro="高額査定を狙うなら、複数社の見積もりを取るのが基本です。下表は各社公式サイトに記載されている店舗数・対応エリア・査定スピードの公開情報をまとめたもの（2026年7月時点）。" />


          <RelatedArticles
            currentSlug="kougaku-satei-ranking"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "takaku-uru-kotsu", "souba-ichiran", "satei-yomikata", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori"]}
          />
        </div>
      </article>
    </>
  );
}

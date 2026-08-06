import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/senmonten-vs-recycle/' },
  title: "【2026年最新】楽器買取専門店 vs リサイクルショップ｜査定額に最大10倍の差",
  description: "楽器を売るなら買取専門店とリサイクルショップどっち？査定額の差、専門性、対応範囲を比較。最大10倍の査定額差が生じる理由も解説。",
  openGraph: {
    title: "【2026年最新】楽器買取専門店 vs リサイクルショップ｜査定額に最大10倍の差",
    description: "楽器を売るなら買取専門店とリサイクルショップどっち？査定額の差、専門性、対応範囲を比較。最大10倍の査定額差が生じる理由も解説。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u697d\u5668\u8cb7\u53d6\u5c02\u9580\u5e97\u3068\u30ea\u30b5\u30a4\u30af\u30eb\u30b7\u30e7\u30c3\u30d7\u3001\u3069\u3061\u3089\u306b\u58f2\u308b\u3079\u304d\uff1f\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"楽器買取専門店とリサイクルショップ、どちらに売るべき？\", \"item\": \"https://gakkikaitori-biyori.com/articles/senmonten-vs-recycle/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"楽器買取専門店とリサイクルショップ、どちらに売るべきですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"高値で売りたいなら楽器買取専門店、すぐに現金化したいならリサイクルショップがおすすめです。専門店の方が査定額は平均2〜3倍高くなる傾向があります。\"}}, {\"@type\": \"Question\", \"name\": \"リサイクルショップの査定額が安いのはなぜですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"リサイクルショップは楽器の専門知識を持つスタッフが少なく、市場相場より安く見積もる傾向があります。また、再販ルートが限られているため利益率を確保するための低い買取になります。\"}}, {\"@type\": \"Question\", \"name\": \"ハードオフでも楽器を売れますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"売れます。ハードオフは楽器に強いリサイクルショップで、ジャンク楽器も買い取ってくれます。ただし専門店と比べると査定額は安めなので、相場確認用に利用するのがおすすめです。\"}}, {\"@type\": \"Question\", \"name\": \"どんな楽器なら専門店に持っていくべきですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Fender・Gibson・Steinway・Selmerなどブランド品、ヴィンテージ品、10万円以上の中〜高額楽器は必ず専門店へ。エントリーモデルや汎用品はリサイクルショップでも大差ないことがあります。\"}}, {\"@type\": \"Question\", \"name\": \"両方で査定してから決めても良いですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"むしろ推奨です。リサイクルショップ・楽器専門店・ヒカカク！の一括査定を併用し、最も高い査定額を選ぶのが買取金額を最大化するコツです。\"}}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">楽器買取専門店とリサイクルショップ、どちらに売るべき？</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「リサイクルショップに持ち込んだら査定額が低かった」——よくある悩みです。楽器買取専門店とリサイクルショップでは、査定能力・知識・対応範囲が全く異なります。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <div className="table-wrapper"><table><thead><tr><th>項目</th><th>楽器買取専門店</th><th>リサイクルショップ</th></tr></thead><tbody><tr><td>査定知識</td><td>高い（楽器ごとの相場把握）</td><td>低い（家具・家電と一緒の扱い）</td></tr><tr><td>査定額</td><td>市場相場の70〜90%</td><td>市場相場の10〜40%</td></tr><tr><td>対応範囲</td><td>ヴィンテージ・希少品もOK</td><td>メジャーブランドのみ</td></tr><tr><td>真贋判定</td><td>可能</td><td>不可</td></tr><tr><td>手間</td><td>事前予約・査定</td><td>持ち込み即査定</td></tr></tbody></table></div>

          <p className="leading-relaxed mt-6 mb-4"><strong>結論：楽器を高く・正しく売るなら「楽器買取専門店」が基本</strong>です。専門店は楽器ごとの相場やヴィンテージの価値を把握しており、市場相場に近い査定が期待できます。一方リサイクルショップは家具・家電と同じ枠で扱うため、メジャー機種以外は安値・買取不可になりがちです。</p>

          <h2 id="recycle-ok" className="font-display text-xl font-bold text-foreground mt-8 mb-3">リサイクルショップでも良いケース</h2>
          <p className="leading-relaxed mb-4">「とにかく早く手放したい」「メーカー不明の入門機で値段が付けば十分」という場合は、持ち込み即査定のリサイクルショップでも構いません。ただし<strong>少しでも価値がありそうな楽器は、先に専門店の無料査定</strong>で当たりをつけるのがおすすめです（<Link href="/articles/takaku-uru-kotsu" className="text-accent underline">高く売るコツ</Link>・<Link href="/articles/satei-yomikata" className="text-accent underline">査定書の読み方</Link>）。</p>
          <p className="text-xs text-warm-gray mb-2">※ 査定額の割合は一般的な傾向の目安です。実際の評価は店舗・楽器の状態により異なります。</p>

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
            currentSlug="senmonten-vs-recycle"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "kaitori-houhou-hikaku", "mercari-vs-gyosha", "gakki-kaitori-sagi", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

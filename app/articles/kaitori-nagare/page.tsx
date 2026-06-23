import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import DealerComparisonTable from "@/components/DealerComparisonTable";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取の流れ完全ガイド｜申込〜入金まで6ステップ",
  description: "楽器買取の流れを6ステップで解説。申込・査定・引き取り・入金までの所要時間、各ステップでの注意点、業者別の違いまで完全マニュアル。",
  openGraph: {
    title: "【2026年最新】楽器買取の流れ完全ガイド｜申込〜入金まで6ステップ",
    description: "楽器買取の流れを6ステップで解説。申込・査定・引き取り・入金までの所要時間、各ステップでの注意点、業者別の違いまで完全マニュアル。",
  },
};

function Schema() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Article\", \"headline\": \"\u697d\u5668\u8cb7\u53d6\u306e\u6d41\u308c\u5b8c\u5168\u30ac\u30a4\u30c9\uff5c\u7533\u8fbc\u301c\u5165\u91d1\u307e\u30676\u30b9\u30c6\u30c3\u30d7\", \"datePublished\": \"2026-05-17\", \"dateModified\": \"2026-05-17\", \"author\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"\u697d\u5668\u8cb7\u53d6\u3073\u3088\u308a\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"楽器買取の流れ完全ガイド｜申込〜入金まで6ステップ\", \"item\": \"https://gakkikaitori-biyori.com/articles/kaitori-nagare/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"楽器買取はどんな流れで進みますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"①Web/電話で査定申込 → ②写真送信またはヒアリングで仮査定 → ③出張査定または楽器送付 → ④本査定 → ⑤金額合意 → ⑥契約書類記入 → ⑦入金、の6ステップが一般的です。\"}}, {\"@type\": \"Question\", \"name\": \"申込から入金まで何日くらいかかりますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"出張買取なら最短即日、宅配買取なら3〜7日、店頭買取なら当日中に完了します。急ぎの場合は出張買取または店頭買取を選ぶと良いでしょう。\"}}, {\"@type\": \"Question\", \"name\": \"仮査定と本査定で金額が変わることはありますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"あります。仮査定は写真ベースのため、実物確認で傷・汚れ・動作不良が見つかると本査定で減額されることがあります。逆に状態が良ければアップするケースもあります。\"}}, {\"@type\": \"Question\", \"name\": \"買取金額に納得できない場合はキャンセルできますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"ほとんどの業者でキャンセル可能です。出張・店頭買取はその場で断れます。宅配買取の場合は返送料が自己負担になる業者もあるため、事前に確認してください。\"}}, {\"@type\": \"Question\", \"name\": \"買取代金はいつ振り込まれますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"出張・店頭買取は当日現金、宅配買取は本査定確定後1〜3営業日以内に銀行振込が一般的です。業者によっては最短当日振込も対応しています。\"}}]}" }} />
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
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">楽器買取の流れ完全ガイド｜申込〜入金まで6ステップ</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「楽器買取の手続きが面倒そう」——本記事を読めば、楽器買取の全フローが10分で分かります。出張・店頭・宅配の3つの方式別に解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">

          <p className="leading-relaxed mb-5">
            楽器買取は <strong>「①申込 → ②仮査定 → ③引き取り（出張・店頭・宅配）→ ④本査定 → ⑤金額合意 → ⑥入金」</strong> の6ステップで進みます。出張・店頭なら最短即日、宅配でも3〜7日で完了するのが一般的です。まず全体の流れと自分に合う買取方式を押さえるのが、手間なく高く売るコツです。
          </p>

          <h2 id="houshiki" className="font-display text-xl font-bold text-foreground mt-8 mb-3">まず買取方式を選ぶ（出張・店頭・宅配）</h2>
          <p className="leading-relaxed mb-4">流れは方式によって所要時間と手間が変わります。楽器の大きさ・量・急ぎ度で選びましょう。</p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cream">
                  <th className="border border-warm-border p-2 text-left">方式</th>
                  <th className="border border-warm-border p-2 text-left">所要時間の目安</th>
                  <th className="border border-warm-border p-2 text-left">向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-warm-border p-2 font-medium">出張買取</td><td className="border border-warm-border p-2">最短即日・その場で現金</td><td className="border border-warm-border p-2">ピアノ・ドラム等の大型、量が多い、運べない</td></tr>
                <tr><td className="border border-warm-border p-2 font-medium">店頭買取</td><td className="border border-warm-border p-2">当日中・その場で現金</td><td className="border border-warm-border p-2">持ち運べるギター・管楽器、すぐ現金化したい</td></tr>
                <tr><td className="border border-warm-border p-2 font-medium">宅配買取</td><td className="border border-warm-border p-2">3〜7日・後日振込</td><td className="border border-warm-border p-2">近くに店舗がない、自分のペースで進めたい</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="steps" className="font-display text-xl font-bold text-foreground mt-8 mb-3">楽器買取の流れ【6ステップ】</h2>
          <h3 className="font-bold text-base text-accent-dark mt-5 mb-1">ステップ1：査定を申し込む</h3>
          <p className="leading-relaxed mb-4">Web・電話・LINEなどで申込みます。楽器の<strong>メーカー・型番・購入時期・状態</strong>を伝えると以降がスムーズです。型番は本体ラベルや保証書で確認できます。</p>
          <h3 className="font-bold text-base text-accent-dark mt-5 mb-1">ステップ2：仮査定（写真・ヒアリング）</h3>
          <p className="leading-relaxed mb-4"><strong>仮査定はあくまで目安</strong>で、実物確認で前後します。全体・型番・キズ部分を明るい場所で撮ると精度が上がります。</p>
          <h3 className="font-bold text-base text-accent-dark mt-5 mb-1">ステップ3：引き取り（出張・店頭・宅配）</h3>
          <p className="leading-relaxed mb-4">選んだ方式で楽器を渡します。宅配は<strong>付属品（ケース・保証書・付属パーツ）</strong>も一緒に。付属品が揃うと評価が上がりやすいです。</p>
          <h3 className="font-bold text-base text-accent-dark mt-5 mb-1">ステップ4：本査定</h3>
          <p className="leading-relaxed mb-4">プロが実機を確認し最終額を提示。傷・汚れ・動作不良があると<strong>減額</strong>、状態が良ければ<strong>増額</strong>することもあります。</p>
          <h3 className="font-bold text-base text-accent-dark mt-5 mb-1">ステップ5：金額に合意（納得できなければキャンセル）</h3>
          <p className="leading-relaxed mb-4">提示額に納得できれば売却。<strong>納得できなければキャンセル可能</strong>ですが、宅配買取は<strong>返送料が自己負担になる業者</strong>もあるため、申込前にキャンセル条件を確認しましょう。</p>
          <h3 className="font-bold text-base text-accent-dark mt-5 mb-1">ステップ6：入金</h3>
          <p className="leading-relaxed mb-4">出張・店頭はその場で現金、宅配は本査定確定後おおむね1〜3営業日で銀行振込が一般的です（最短当日振込の業者も）。</p>

          <h2 id="kotsu" className="font-display text-xl font-bold text-foreground mt-8 mb-3">手間なく高く売るコツ</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4 leading-relaxed">
            <li><strong>複数社で相見積り</strong>：同じ楽器でも提示額に差が出ます（<Link href="/articles/takaku-uru-kotsu/" className="text-accent underline">高く売るコツ</Link>）。</li>
            <li><strong>付属品を揃える</strong>：ケース・保証書・付属パーツは評価アップ要因。</li>
            <li><strong>軽い清掃のみ</strong>：ホコリ・指紋を拭く程度でOK。無理な修理・研磨は逆効果。</li>
            <li><strong>キャンセル条件を事前確認</strong>：特に宅配の返送料負担。</li>
          </ul>
          <p className="text-xs text-warm-gray mb-2">※ 所要時間・手順は一般的な目安です。具体的な手続き・キャンセル条件は各業者の規定により異なります。</p>

          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
          </div>
          <DealerComparisonTable heading="買取の流れを比較できる楽器買取業者 主要7社" intro="店頭・出張・宅配のどの流れに対応しているか、公式情報で比較しました。" />


          <h2 id="faq" className="font-display text-xl font-bold text-foreground mt-8 mb-3">よくある質問</h2>
          <div className="space-y-4 my-6">
            <div><p className="font-bold mb-1">Q. 申込から入金まで何日くらいかかりますか？</p><p className="text-sm leading-relaxed text-warm-gray">出張買取なら最短即日、宅配買取なら3〜7日、店頭買取なら当日中が目安です。急ぎなら出張または店頭を選びましょう。</p></div>
            <div><p className="font-bold mb-1">Q. 仮査定と本査定で金額が変わることはありますか？</p><p className="text-sm leading-relaxed text-warm-gray">あります。仮査定は写真ベースのため、実物確認で傷・汚れ・動作不良が見つかると減額、状態が良ければ増額になることもあります。</p></div>
            <div><p className="font-bold mb-1">Q. 買取金額に納得できない場合はキャンセルできますか？</p><p className="text-sm leading-relaxed text-warm-gray">ほとんどの業者でキャンセル可能です。出張・店頭はその場で断れます。宅配買取は返送料が自己負担になる業者もあるため事前に確認してください。</p></div>
            <div><p className="font-bold mb-1">Q. 買取代金はいつ振り込まれますか？</p><p className="text-sm leading-relaxed text-warm-gray">出張・店頭は当日現金、宅配は本査定確定後1〜3営業日以内の銀行振込が一般的です。最短当日振込に対応する業者もあります。</p></div>
          </div>

          <RelatedArticles
            currentSlug="kaitori-nagare"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "kaitori-houhou-hikaku", "hitsuyou-shorui", "mibunsho-hitsuyou", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

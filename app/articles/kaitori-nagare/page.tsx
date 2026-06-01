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


          <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
            <p className="font-bold text-base mb-4 text-center text-accent-dark">まずは無料査定で買取価格をチェック</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
              <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
              <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
            </div>
          </div>
          <DealerComparisonTable heading="買取の流れを比較できる楽器買取業者 主要7社" intro="店頭・出張・宅配のどの流れに対応しているか、公式情報で比較しました。" />


          <RelatedArticles
            currentSlug="kaitori-nagare"
            relatedSlugs={["piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "kaitori-houhou-hikaku", "hitsuyou-shorui", "mibunsho-hitsuyou", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
          />
        </div>
      </article>
    </>
  );
}

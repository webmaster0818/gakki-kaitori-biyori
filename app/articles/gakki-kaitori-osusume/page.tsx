import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import soubaData from "@/data/souba-ranking-gakki.json";

const soubaTop = [...soubaData.models]
  .filter((m) => m.median != null)
  .sort((a, b) => (b.median ?? 0) - (a.median ?? 0))
  .slice(0, 5);

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gakki-kaitori-osusume/' },
  title: "【2026年9月最新】楽器買取おすすめ業者3社を徹底比較｜失敗しない選び方",
  description:
    "楽器買取はどこがおすすめ？一括査定のヒカカク！・出張買取のウリエル・店頭買取のティファナの3社を買取方式・手数料・得意分野で徹底比較。ギター・管楽器・ピアノ・ドラムなど楽器別の売り方と、査定額を上げる準備のコツも解説します。",
  openGraph: {
    title: "【2026年9月最新】楽器買取おすすめ業者3社を徹底比較｜失敗しない選び方",
    description: "楽器買取のおすすめ3社を買取方式・手数料・得意分野で徹底比較。楽器別の売り方ガイドつき。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "記事一覧", href: "/articles/" },
    { name: "楽器買取おすすめ業者比較", href: "/articles/gakki-kaitori-osusume/" },
  ];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたの楽器の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        {/* felmatインプレッション計測 */}
        <img src="https://t.felmat.net/fmimp/A11184N.11542509.O138027B" width={1} height={1} alt="" style={{ border: "none" }} />
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "楽器買取はどこに頼むのがおすすめですか？", acceptedAnswer: { "@type": "Answer", text: "売りたい楽器の種類と状況によります。最高値を狙うなら複数の楽器専門業者から見積もりが取れる一括査定（ヒカカク！）、大型楽器や複数本をまとめて売るなら出張買取（ウリエル）、すぐ現金化したいなら店頭買取（ティファナ）が向いています。いずれも査定・手数料は無料です。" } },
    { "@type": "Question", name: "楽器を高く売る一番のコツは何ですか？", acceptedAnswer: { "@type": "Answer", text: "複数の業者から見積もりを取って比較することです。同じ楽器でも業者の在庫状況や得意ジャンルによって査定額は大きく変わります。加えて、付属品（ハードケース・保証書・純正パーツ）を揃える、ホコリや手垢を軽く清掃しておくことも査定額アップにつながります。" } },
    { "@type": "Question", name: "壊れた楽器・古い楽器でも買取してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "ジャンク品やヴィンテージ楽器でも買取対象になることは多いです。特に有名ブランドの楽器は、修理やパーツ取りの需要があるため値段がつくことがあります。自己判断で処分する前に、無料査定で価値を確認するのがおすすめです。" } },
    { "@type": "Question", name: "出張買取と店頭買取はどちらが高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "買取方式そのものよりも「楽器の専門性がある業者かどうか」が査定額を左右します。どの方式でも、楽器専門の査定士がいる業者を選び、可能であれば複数社を比較するのが高価買取への近道です。" } },
    { "@type": "Question", name: "楽器の買取相場はどこで確認できますか？", acceptedAnswer: { "@type": "Answer", text: "当サイトではギター・管楽器・ピアノ・ドラムなど楽器種別ごと、Fender・Gibson・YAMAHAなどブランドごとに買取のポイントと相場の目安を解説しています。ただし実際の買取額は型番・年式・状態で大きく変動するため、正確な金額は無料査定での確認をおすすめします。" } },
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年9月最新】楽器買取おすすめ業者3社を徹底比較｜失敗しない選び方", datePublished: "2026-06-11", dateModified: "2026-09-01", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "楽器買取おすすめ業者3社を徹底比較", item: "https://gakkikaitori-biyori.com/articles/gakki-kaitori-osusume/" },
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} /></>);
}

const INSTRUMENT_LINKS = [
  { href: "/articles/acoustic-guitar-kaitori/", label: "アコースティックギター" },
  { href: "/articles/guitar-kaitori/", label: "ギター" },
  { href: "/articles/bass-kaitori/", label: "ベース" },
  { href: "/articles/piano-kaitori/", label: "ピアノ" },
  { href: "/articles/saxophone-kaitori/", label: "サックス" },
  { href: "/articles/trumpet-kaitori/", label: "トランペット" },
  { href: "/articles/violin-kaitori/", label: "バイオリン" },
  { href: "/articles/drum-kaitori/", label: "ドラム" },
  { href: "/articles/effector-kaitori/", label: "エフェクター" },
  { href: "/articles/guitar-amp-kaitori/", label: "ギターアンプ" },
];

const REGION_LINKS = [
  { href: "/articles/tokyo-gakki-kaitori/", label: "東京" },
  { href: "/articles/yokohama-gakki-kaitori/", label: "横浜" },
  { href: "/articles/nagoya-gakki-kaitori/", label: "名古屋" },
  { href: "/articles/osaka-gakki-kaitori/", label: "大阪" },
  { href: "/articles/fukuoka-gakki-kaitori/", label: "福岡" },
  { href: "/articles/sendai-gakki-kaitori/", label: "仙台" },
  { href: "/articles/sapporo-gakki-kaitori/", label: "札幌" },
  { href: "/articles/kyoto-gakki-kaitori/", label: "京都" },
];

export default function GakkiKaitoriOsusumePage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">業者比較</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年9月最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年9月最新】楽器買取おすすめ業者3社を徹底比較｜失敗しない選び方</h1>
          <p className="text-warm-gray text-sm leading-relaxed">「楽器を売りたいけど、どこに頼めばいいかわからない」という方へ。本記事では、楽器買取で実績のある3つのサービス（ヒカカク！・ウリエル・ティファナ）を買取方式・手数料・得意分野で比較し、あなたの状況に合った業者の選び方を解説します。あわせて、ギター・管楽器・ピアノなど楽器種別ごとの売り方ガイド、査定額を上げる準備のコツもまとめました。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年9月1日</p>
        </header>

        <section className="article-body space-y-4 text-[15px] leading-relaxed">
          <h2 id="conclusion">結論: あなたに合う楽器買取業者はこれ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>1円でも高く売りたい</strong> → 複数の楽器専門業者の見積もりを比較できる<strong>一括査定（ヒカカク！）</strong></li>
            <li><strong>ピアノ・ドラムなど大型楽器、または複数まとめて売りたい</strong> → 自宅まで来てくれる<strong>出張買取（ウリエル）</strong></li>
            <li><strong>今日すぐ現金化したい</strong> → 持ち込みでその場で売れる<strong>店頭買取（ティファナ）</strong></li>
          </ul>
          <p>どの業者も<strong>査定料・手数料は無料</strong>なので、迷ったらまず一括査定で相場感をつかみ、都合に合う方式で売るのが失敗しない手順です。</p>

          <CtaBox />

          <h2 id="comparison">楽器買取おすすめ3社の比較表</h2>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">ヒカカク！</th><th className="px-4 py-3 text-left font-medium">ウリエル</th><th className="px-4 py-3 text-left font-medium">ティファナ</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3 text-gold-dark font-bold">一括査定（複数業者）</td><td className="px-4 py-3">出張買取専門</td><td className="px-4 py-3">出張/店頭/宅配</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">強み</td><td className="px-4 py-3">業者間競争で高値が出やすい</td><td className="px-4 py-3">自宅で完結・大型楽器OK</td><td className="px-4 py-3">店舗持込で即現金化</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">査定・手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">向いている人</td><td className="px-4 py-3">最高値で売りたい</td><td className="px-4 py-3">自宅で完結したい</td><td className="px-4 py-3">手軽に・すぐ売りたい</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※各社のサービス内容は公開情報に基づきます。対応エリア・対象楽器の詳細は各公式サイトでご確認ください。</p>

          <h2 id="souba-pickup">今週の高額買取相場ピックアップ（ヤフオク実取引データ）</h2>
          <p>当サイトが毎週更新している中古市場の実取引データ（{soubaData.updated}時点・{soubaData.count}モデル調査）から、中古相場の高いモデルを抜粋します。買取額は一般に中古実勢の50〜70%が目安です（金額は保証されません。正確な額は無料査定でご確認ください）。</p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">モデル</th><th className="px-4 py-3 text-left font-medium">カテゴリ</th><th className="px-4 py-3 text-left font-medium">中古実勢中央値</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                {soubaTop.map((m, i) => (
                  <tr key={m.slug} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                    <td className="px-4 py-3"><Link href={`/articles/${m.slug}/`} className="text-accent-dark underline">{m.name}</Link></td>
                    <td className="px-4 py-3">{m.category}</td>
                    <td className="px-4 py-3 font-medium">{m.median.toLocaleString()}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm"><Link href="/souba-ranking/" className="text-accent-dark underline">→ 全{soubaData.count}モデルの相場ランキング（毎週更新）を見る</Link></p>

          <h2 id="how-to-choose">失敗しない楽器買取業者の選び方5つの基準</h2>
          <h3>基準1: 楽器専門の査定士がいるか</h3>
          <p>総合リサイクルショップでは、ヴィンテージギターや高級管楽器の価値が正しく評価されないことがあります。<strong>楽器の専門知識を持つ業者</strong>に査定を依頼するのが大前提です。</p>
          <h3>基準2: 複数社の見積もりを比較できるか</h3>
          <p>同じ楽器でも、業者の在庫状況・得意ジャンル・販路によって査定額は大きく変わります。<strong>必ず2社以上の見積もりを比較</strong>しましょう。一括査定なら一度の依頼で複数社を比較できます。</p>
          <h3>基準3: 売りたい楽器に合った買取方式か</h3>
          <p>ピアノやドラムセットのような大型楽器は出張買取、小型で持ち運べる楽器なら店頭・宅配も選択肢です。<strong>運搬の手間と査定方式のバランス</strong>で選びましょう。</p>
          <h3>基準4: 手数料・キャンセル料が無料か</h3>
          <p>査定料・出張料・キャンセル料がすべて無料の業者なら、査定額に納得できなければ断ればよいだけなので、リスクなく比較できます。本記事で紹介する3社はいずれも査定無料です。</p>
          <h3>基準5: 買取実績が公開されているか</h3>
          <p>ブランド別・モデル別の買取実績を公開している業者は、相場に基づいた適正な査定が期待できます。実績例と自分の楽器を見比べて、おおよその目安をつかんでから依頼するのがおすすめです。</p>

          <CtaBox />

          <h2 id="by-instrument">楽器の種類別 買取ガイド</h2>
          <p>楽器の種類によって、査定で見られるポイントや高く売るコツは異なります。お手持ちの楽器のガイドをご覧ください。</p>
          <div className="flex flex-wrap gap-2 my-4">
            {INSTRUMENT_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm bg-cream border border-warm-border text-accent-dark rounded-full px-4 py-2 hover:bg-gold/10 transition-colors">{l.label}買取</Link>
            ))}
          </div>
          <p><Link href="/articles/#instrument" className="text-accent underline hover:text-accent-dark">すべての楽器種別ガイドを見る →</Link></p>

          <p>ピアノは種類・ブランド別の専用ガイドも用意しています: <Link href="/articles/grand-piano-kaitori/">グランドピアノ</Link>・<Link href="/articles/denshi-piano-kaitori/">電子ピアノ</Link>・<Link href="/articles/roland-denshi-piano-kaitori/">ローランド電子ピアノ</Link>・<Link href="/articles/kawai-piano-kaitori/">カワイピアノ</Link></p>

          <h2 id="by-region">地域別 楽器買取ガイド</h2>
          <p>お住まいの地域の買取事情（持ち込みできる店舗の傾向・出張対応など）は地域別ガイドで解説しています。</p>
          <div className="flex flex-wrap gap-2 my-4">
            {REGION_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm bg-cream border border-warm-border text-accent-dark rounded-full px-4 py-2 hover:bg-gold/10 transition-colors">{l.label}の楽器買取</Link>
            ))}
          </div>
          <p><Link href="/articles/#region" className="text-accent underline hover:text-accent-dark">すべての地域別ガイドを見る →</Link></p>

          <h2 id="preparation">査定前にやっておくと査定額が上がる3つの準備</h2>
          <h3>準備1: 付属品を揃える</h3>
          <p>ハードケース・保証書・純正パーツ・説明書の有無は査定額に直結します。購入時の箱や付属品が残っていれば必ず一緒に査定に出しましょう。</p>
          <h3>準備2: 軽く清掃する</h3>
          <p>ホコリや手垢を柔らかいクロスで拭き取るだけでも印象は変わります。ただし、塗装を傷めるような強い溶剤の使用や、分解清掃は逆効果なので避けてください。</p>
          <h3>準備3: 型番・シリアルナンバーを控える</h3>
          <p>メーカー名・型番・製造年（シリアルナンバー）が分かると、査定がスムーズに進み、事前見積もりの精度も上がります。ヘッド裏やボディ内部のラベルを確認しておきましょう。</p>
          <p>より詳しいコツは「<Link href="/articles/takaku-uru-kotsu/" className="text-accent underline hover:text-accent-dark">楽器を高く売るコツ</Link>」「<Link href="/articles/mercari-vs-gyosha/" className="text-accent underline hover:text-accent-dark">メルカリと買取業者どっちが得？</Link>」もあわせてご覧ください。</p>

          <h2 id="faq">よくある質問</h2>
          <h3>Q. 楽器買取はどこに頼むのがおすすめ？</h3>
          <p>売りたい楽器と状況次第です。最高値狙いなら一括査定、大型楽器や複数まとめ売りなら出張買取、即現金化なら店頭買取が向いています。</p>
          <h3>Q. 壊れた楽器・古い楽器でも売れる？</h3>
          <p>有名ブランドならジャンク品でも修理・パーツ取り需要で値段がつくことがあります。処分する前に無料査定で確認しましょう。</p>
          <h3>Q. 買取相場はどこで確認できる？</h3>
          <p>当サイトの楽器種別・ブランド別ガイドで目安を解説しています。ただし実額は型番・年式・状態で変動するため、正確な金額は無料査定でご確認ください。</p>

          <CtaBox />
        </section>

        <RelatedArticles currentSlug="gakki-kaitori-osusume" relatedSlugs={["takaku-uru-kotsu", "mercari-vs-gyosha", "guitar-kaitori", "tokyo-gakki-kaitori", "piano-kaitori", "saxophone-kaitori"]} />
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import BrandSpotPrices from "@/components/BrandSpotPrices";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/kawai-kaitori/' },
  title: "【2026年8月 週次相場更新】KAWAI買取おすすめ3社比較｜ピアノ・電子ピアノの相場",
  description: "KAWAI（カワイ）のピアノ・電子ピアノを売るならどこがいい？グランドピアノ・アップライトピアノ・電子ピアノの買取相場とおすすめ3社を徹底比較。高く売るコツまで解説。",
  openGraph: {
    title: "【2026年8月 週次相場更新】KAWAI買取おすすめ3社比較｜ピアノ・電子ピアノの相場",
    description: "KAWAI製ピアノの買取相場とおすすめ3社を徹底比較。高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "KAWAI買取", href: "/articles/kawai-kaitori/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのKAWAI製品の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        {/* felmatインプレッション計測 */}
        <img src="https://t.felmat.net/fmimp/A11184N.11542509.O138027B" width={1} height={1} alt="" style={{ border: "none" }} />
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "KAWAIアップライトピアノの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "現行Kシリーズで5万〜30万円、旧BLシリーズで1万〜8万円が目安です。年式・状態・モデルで大きく変動します。" } },
      { "@type": "Question", name: "KAWAI電子ピアノのCAシリーズの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "CAシリーズは3万〜15万円が目安です。木製鍵盤搭載で人気が高く、中古市場でも安定した需要があります。" } },
      { "@type": "Question", name: "KAWAIピアノを高く売るコツは？", acceptedAnswer: { "@type": "Answer", text: "複数業者に査定を依頼する、椅子や付属品を揃える、クリーニングする、調律履歴を伝える、の4つが重要です。" } },
      { "@type": "Question", name: "大型のKAWAIピアノを出張買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ウリエルの出張買取ならグランドピアノやアップライトピアノも自宅で査定・買取が完結します。査定料・出張料は無料です。" } },
      { "@type": "Question", name: "古いKAWAIピアノでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、古いモデルでも買取可能です。KAWAIの旧モデル（BL・US・BSシリーズ等）は今でも需要があります。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年8月 週次相場更新】KAWAI買取おすすめ3社比較｜ピアノ・電子ピアノの相場", datePublished: "2026-04-26", dateModified: "2026-08-01", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年8月 週次相場更新】KAWAI買取おすすめ3社比較｜ピアノ・電子ピアノの相場\", \"item\": \"https://gakkikaitori-biyori.com/articles/kawai-kaitori/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">KAWAI買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年8月 週次相場更新】KAWAI買取おすすめ3社比較｜ピアノ・電子ピアノの相場</h1>
          <p className="text-warm-gray text-sm leading-relaxed">KAWAI（カワイ/河合楽器）のピアノ・電子ピアノを売りたい方へ。本記事では、KAWAI製品の買取に強い3社を徹底比較し、グランドピアノ・アップライトピアノ・電子ピアノのシリーズ別買取相場、高く売るコツまで詳しく解説します。KAWAIは1927年創業の日本を代表するピアノメーカーで、YAMAHAと並ぶ国産ピアノの二大ブランドです。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年8月1日</p>
        </header>

        <div className="article-body">

          {/* 2026-08-26 型番クエリの受け皿。ハブに着地していた型番検索を、型番ページへ振り分ける */}
          <div className="bg-warm-bg border border-warm-border rounded-xl p-5 my-6">
            <p className="font-bold mb-2">型番・モデルが決まっている方へ</p>
            <p className="text-sm text-warm-gray mb-3">お手持ちのモデルが分かっている場合は、下記の型番別ページのほうが相場を細かく確認できます。</p>
            <ul className="space-y-1 text-sm list-disc pl-5">
              <li><a href="/articles/kawai-k300-kaitori/" className="text-accent-dark underline">カワイ K-300の買取相場</a></li>
              <li><a href="/articles/kawai-piano-kaitori/" className="text-accent-dark underline">カワイピアノの買取相場ガイドグランド・アップライト・電子ピアノ別の査定ポイント</a></li>
              <li><a href="/articles/kawai-rx2-kaitori/" className="text-accent-dark underline">カワイ RX-2買取相場</a></li>
            </ul>
          </div>


          <h2 id="about">KAWAIブランドの特徴 ── 国産ピアノの名門</h2>
          <p>河合楽器製作所（KAWAI）は1927年に河合小市が静岡県浜松市で創業したピアノメーカーです。グランドピアノ「Shigeru Kawai」は<strong>世界のコンサートホールで採用される</strong>トップクラスの楽器であり、電子ピアノのCAシリーズは木製鍵盤による本格的なタッチ感で高い評価を受けています。</p>
          <p>KAWAIの特徴は<strong>ABS樹脂製アクション部品やカーボンファイバー入りハンマー</strong>など、独自の素材技術です。木材の経年変化の影響を受けにくい設計で、中古品でも安定した品質を保っています。</p>

          <CtaBox />

          <h2 id="grand">KAWAIグランドピアノの買取相場</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">シリーズ</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3">Shigeru Kawai SK-2〜SK-7</td><td className="px-4 py-3 text-gold-dark font-bold">50万〜200万円</td><td className="px-4 py-3 text-warm-gray">最高級ライン。コンサート品質</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">GXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜80万円</td><td className="px-4 py-3 text-warm-gray">上位グランド</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">GLシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜40万円</td><td className="px-4 py-3 text-warm-gray">スタンダードグランド</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">GMシリーズ（旧モデル）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜25万円</td><td className="px-4 py-3 text-warm-gray">年式による</td></tr>
          </tbody></table></div>

          <h2 id="upright">KAWAIアップライトピアノの買取相場</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">シリーズ</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3">Kシリーズ（K-200/K-300/K-500/K-800）</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜30万円</td><td className="px-4 py-3 text-warm-gray">現行ライン。サイズで変動</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">BLシリーズ（旧モデル）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜8万円</td><td className="px-4 py-3 text-warm-gray">初心者向けの定番</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">USシリーズ（旧モデル）</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜10万円</td><td className="px-4 py-3 text-warm-gray">上位アップライト</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">BSシリーズ（旧モデル）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">コンパクトモデル</td></tr>
          </tbody></table></div>

          <h2 id="digital">KAWAI電子ピアノの買取相場</h2>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">シリーズ</th><th className="px-4 py-3 text-left font-medium">買取相場</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3">CAシリーズ（木製鍵盤）</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜15万円</td><td className="px-4 py-3 text-warm-gray">CA49/CA59/CA79/CA99等</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">CNシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">CN29/CN39等。エントリー</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">ESシリーズ（ポータブル）</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜4万円</td><td className="px-4 py-3 text-warm-gray">ES920等。軽量</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3">NVシリーズ（NOVUS）</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td><td className="px-4 py-3 text-warm-gray">ハイブリッドピアノ</td></tr>
          </tbody></table></div>

          <p>KAWAIの電子ピアノは<strong>木製鍵盤のCAシリーズが特に人気</strong>で、中古市場でも安定した需要があります。ピアノ教室でも推奨されるモデルが多く、初心者〜上級者まで幅広い層に需要があります。</p>

          <CtaBox />

          <div className="bg-gold/10 border border-warm-border rounded-xl p-5 my-8">
            <p className="font-bold text-sm mb-1">カワイのピアノを売るなら専用ガイドへ</p>
            <p className="text-sm text-warm-gray mb-2">RX・GXグランド、Kシリーズアップライト、CA・CN・CL電子ピアノのシリーズ別査定ポイントを専用ページで詳しく解説しています。</p>
            <Link href="/articles/kawai-piano-kaitori/" className="text-accent font-medium text-sm hover:underline">カワイピアノの買取相場ガイドを見る →</Link>
          </div>

          <h2 id="tips">KAWAIピアノを高く売る5つのコツ</h2>
          <h3>コツ1: 複数業者に査定を依頼する</h3>
          <p>ヒカカク！で一括査定を行い、ピアノ専門の業者を含む複数社の査定額を比較しましょう。</p>
          <h3>コツ2: 椅子・カバー・取扱説明書を揃える</h3>
          <p>専用椅子、鍵盤カバー、トップカバー、取扱説明書、保証書を揃えましょう。椅子があるだけで数千円のプラスになります。</p>
          <h3>コツ3: 鍵盤と外装をクリーニング</h3>
          <p>鍵盤を専用クリーナーで拭き、外装のホコリを除去しましょう。黒いピアノは指紋が目立つため、ピアノ用クロスで磨くと好印象です。</p>
          <h3>コツ4: 調律履歴を伝える</h3>
          <p>アコースティックピアノの場合、定期的に調律していたかどうかは重要な査定ポイントです。調律履歴がある場合は伝えましょう。</p>
          <h3>コツ5: 大型ピアノは出張買取を活用</h3>
          <p>グランドピアノやアップライトピアノは運搬が困難です。ウリエルの出張買取なら自宅で完結するため最も便利です。</p>

          <h2 id="faq">KAWAI買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">KAWAIアップライトピアノの買取相場は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">現行Kシリーズで5万〜30万円、旧BLシリーズで1万〜8万円が目安です。年式・状態・モデルで大きく変動します。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">KAWAI電子ピアノのCAシリーズの買取相場は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">CAシリーズは3万〜15万円が目安です。木製鍵盤搭載で人気が高く、中古市場でも安定した需要があります。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">KAWAIピアノを高く売るコツは？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">複数業者に査定を依頼する、椅子や付属品を揃える、クリーニングする、調律履歴を伝える、の4つが重要です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">大型のKAWAIピアノを出張買取できますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、ウリエルの出張買取ならグランドピアノやアップライトピアノも自宅で査定・買取が完結します。査定料・出張料は無料です。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">古いKAWAIピアノでも買い取ってもらえますか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">はい、古いモデルでも買取可能です。KAWAIの旧モデル（BL・US・BSシリーズ等）は今でも需要があります。</div></details>
          </div>

          <h2>まとめ：KAWAI製品は複数業者の比較で高額買取を実現</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>

        <BrandSpotPrices brand="kawai" />

        <RelatedArticles
          currentSlug="kawai-kaitori"
          relatedSlugs={["kawai-piano-kaitori", "piano-kaitori", "grand-piano-kaitori", "denshi-piano-kaitori", "yamaha-kaitori", "steinway-kaitori", "bosendorfer-kaitori", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "osaka-gakki-kaitori", "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku"]}
        />
      </article>
    </>
  );
}

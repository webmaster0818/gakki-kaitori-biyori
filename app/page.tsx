import Link from "next/link";

const services = [
  {
    name: "ヒカカク！",
    url: "https://hikakaku.com",
    tagline: "一括査定で最高値を比較",
    description: "複数の買取業者に一括で査定依頼。最高値の業者が見つかる比較サイト。楽器以外にも対応し、相場がひと目でわかります。",
    features: ["一括査定で複数業者比較", "最高値が簡単にわかる", "無料で利用可能"],
    recommended: "最高値で売りたい人",
    color: "bg-amber-50 border-gold/30",
  },
  {
    name: "ティファナ",
    url: "https://tifana.net",
    tagline: "出張・店頭・宅配の3方式対応",
    description: "年間4万件の買取実績。出張・店頭・宅配の3つの方法から選べる総合買取サービス。楽器の状態問わず査定可能。",
    features: ["3つの買取方法から選べる", "年間4万件の実績", "状態問わず査定OK"],
    recommended: "手軽に売りたい人",
    color: "bg-blue-50 border-blue-200",
  },
  {
    name: "ウリエル",
    url: "https://uriel-cuore.co.jp",
    tagline: "出張買取で自宅完結",
    description: "出張買取専門のサービス。自宅にいながら査定から買取まで完結。大型楽器や重い楽器の売却に最適です。",
    features: ["自宅で査定・買取完結", "大型楽器の運搬不要", "即日現金化も可能"],
    recommended: "自宅で完結したい人",
    color: "bg-green-50 border-green-200",
  },
];

const instrumentCategories = [
  { name: "ギター", icon: "🎸", href: "/articles/guitar-kaitori/", desc: "エレキ・アコギ・クラシック" },
  { name: "ベース", icon: "🎸", href: "/articles/bass-kaitori/", desc: "エレキベース・ウッドベース" },
  { name: "ピアノ", icon: "🎹", href: "/articles/piano-kaitori/", desc: "グランド・アップライト" },
  { name: "電子ピアノ", icon: "🎹", href: "/articles/denshi-piano-kaitori/", desc: "YAMAHA・Roland・KAWAI" },
  { name: "管楽器", icon: "🎺", href: "/articles/saxophone-kaitori/", desc: "サックス・トランペット等" },
  { name: "弦楽器", icon: "🎻", href: "/articles/violin-kaitori/", desc: "バイオリン・チェロ等" },
  { name: "ドラム", icon: "🥁", href: "/articles/drum-kaitori/", desc: "電子ドラム・アコースティック" },
  { name: "キーボード", icon: "🎹", href: "/articles/keyboard-kaitori/", desc: "シンセサイザー・ステージピアノ" },
  { name: "Gibson", icon: "🎸", href: "/articles/gibson-kaitori/", desc: "Les Paul・SG・ES-335" },
  { name: "Fender", icon: "🎸", href: "/articles/fender-kaitori/", desc: "ストラト・テレキャス" },
  { name: "YAMAHA", icon: "🎵", href: "/articles/yamaha-kaitori/", desc: "ピアノ・ギター・管楽器" },
  { name: "東京エリア", icon: "🗼", href: "/articles/tokyo-gakki-kaitori/", desc: "東京の楽器買取おすすめ" },
  { name: "大阪エリア", icon: "🏯", href: "/articles/osaka-gakki-kaitori/", desc: "大阪の楽器買取おすすめ" },
  { name: "壊れた楽器", icon: "🔧", href: "/articles/kowareta-gakki-kaitori/", desc: "ジャンク品・古い楽器" },
  { name: "相場一覧", icon: "📊", href: "/articles/souba-ichiran/", desc: "全楽器の買取相場まとめ" },
];

const faqs = [
  {
    question: "壊れている楽器でも買い取ってもらえますか？",
    answer: "はい、多くの買取業者は壊れている楽器や傷のある楽器でも査定可能です。特にヴィンテージ品やブランド品は、状態が悪くても価値がある場合があります。まずは一括査定で複数業者に相談することをおすすめします。",
  },
  {
    question: "楽器の買取相場はどのくらいですか？",
    answer: "楽器の買取相場はブランド・モデル・状態・年式によって大きく異なります。例えばGibson Les Paul Standardで10万〜30万円、YAMAHA アップライトピアノで3万〜15万円が目安です。正確な金額は複数業者の査定で確認しましょう。",
  },
  {
    question: "大型楽器（ピアノやドラムセット）はどう売ればいいですか？",
    answer: "大型楽器は出張買取がおすすめです。ウリエルなどの出張買取サービスなら、自宅まで来てくれるので運搬の手間がかかりません。ピアノの場合は専門の運搬業者を手配してくれるサービスもあります。",
  },
  {
    question: "楽器買取に費用はかかりますか？",
    answer: "当サイトで紹介している3社（ヒカカク！・ティファナ・ウリエル）はすべて査定料・出張料・送料・キャンセル料が無料です。買取が成立しなかった場合も一切費用はかかりません。",
  },
  {
    question: "楽器を高く売るにはどうすればいいですか？",
    answer: "楽器を高く売るための最も効果的な方法は、複数の買取業者に相見積もりを取ることです。同じ楽器でも業者によって数万円の差が出ることがあります。その他、付属品を揃える、クリーニングする、売却時期を見極めるなどのコツがあります。",
  },
];

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export default function Home() {
  return (
    <>
      <FaqSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-background">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gold-dark font-medium text-sm mb-3 tracking-wider">
              楽器買取おすすめ比較ガイド 2026年最新版
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              あなたの楽器を、
              <br />
              <span className="text-accent">最高価格</span>で売るなら。
            </h1>
            <p className="text-warm-gray text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              ギター・ピアノ・管楽器など、楽器買取の人気3サービスを徹底比較。
              一括査定・出張買取・宅配買取、あなたに最適な売却方法が見つかります。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://hikakaku.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-gold text-white font-medium px-7 py-3.5 rounded-full hover:bg-gold-dark transition-colors shadow-md hover:shadow-lg"
              >
                一括査定で最高値を調べる
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/articles/guitar-kaitori/"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg"
              >
                ギター買取おすすめを見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      </section>

      {/* Trust Badges */}
      <section className="border-y border-warm-border bg-white">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-warm-gray">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              楽器買取の専門ガイド
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              厳選3社を徹底比較
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              2026年最新情報
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              すべて無料で利用可能
            </span>
          </div>
        </div>
      </section>

      {/* 3社比較サマリーカード */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          楽器買取おすすめ3社を比較
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8">
          あなたの目的に合った買取サービスが見つかります
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.name} className={`${s.color} border rounded-2xl p-6 flex flex-col`}>
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-gold-dark text-sm font-medium mb-3">{s.tagline}</p>
              <p className="text-warm-gray text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
              <ul className="space-y-1.5 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-warm-gray mb-3">こんな人におすすめ: <strong className="text-accent">{s.recommended}</strong></p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-5 py-2.5 rounded-full hover:bg-accent-dark transition-colors text-sm"
              >
                公式サイトを見る
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 楽器種類別リンク */}
      <section className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
            楽器の種類から探す
          </h2>
          <p className="text-warm-gray text-sm text-center mb-8">
            あなたが売りたい楽器のジャンルを選んでください
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {instrumentCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="bg-white rounded-xl border border-warm-border p-5 text-center hover:border-gold/40 hover:shadow-md transition-all group"
              >
                <span className="text-3xl mb-2 block">{cat.icon}</span>
                <h3 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-warm-gray text-xs">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 高く売るコツへのリンク */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          楽器を少しでも高く売るために
        </h2>
        <p className="text-warm-gray text-sm text-center mb-10">
          3ステップで買取額アップを目指しましょう
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "複数社に査定依頼", desc: "1社だけの査定では相場がわかりません。ヒカカク！で一括査定し、最高値を把握しましょう。" },
            { step: "02", title: "付属品を揃える", desc: "ケース・保証書・取扱説明書など付属品が揃っていると買取額が10〜20%アップすることも。" },
            { step: "03", title: "きれいに掃除する", desc: "弦を張り替え、ボディを拭くだけで印象が変わります。見た目の第一印象は査定に大きく影響します。" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold-dark font-display font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/articles/takaku-uru-kotsu/"
            className="inline-flex items-center gap-2 bg-gold text-white font-medium px-7 py-3.5 rounded-full hover:bg-gold-dark transition-colors shadow-md hover:shadow-lg"
          >
            高く売るコツをもっと見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ抜粋 */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-xl border border-warm-border overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                  <span className="pr-4">{faq.question}</span>
                  <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-b from-background to-cream py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            まずは無料査定からはじめよう
          </h2>
          <p className="text-warm-gray mb-8 text-sm md:text-base leading-relaxed">
            複数の買取業者に一括で査定依頼。
            <br className="md:hidden" />
            あなたの楽器の最高買取価格がわかります。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://hikakaku.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-gold text-white font-medium px-7 py-3.5 rounded-full hover:bg-gold-dark transition-colors shadow-md hover:shadow-lg"
            >
              一括査定で最高値を調べる
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://uriel-cuore.co.jp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg"
            >
              出張買取を申し込む
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

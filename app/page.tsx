import Image from "next/image";
import Link from "next/link";
import GakkiScrollReveal from "@/components/GakkiScrollReveal";

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
  { name: "ギター", image: "/images/icon-guitar.png", href: "/articles/guitar-kaitori/", desc: "エレキ・アコギ・クラシック" },
  { name: "ベース", image: "/images/icon-guitar.png", href: "/articles/bass-kaitori/", desc: "エレキベース・ウッドベース" },
  { name: "ピアノ", image: "/images/icon-piano.png", href: "/articles/piano-kaitori/", desc: "グランド・アップライト" },
  { name: "電子ピアノ", image: "/images/icon-electronic.png", href: "/articles/denshi-piano-kaitori/", desc: "YAMAHA・Roland・KAWAI" },
  { name: "管楽器", image: "/images/icon-brass.png", href: "/articles/saxophone-kaitori/", desc: "サックス・トランペット等" },
  { name: "弦楽器", image: "/images/icon-strings.png", href: "/articles/violin-kaitori/", desc: "バイオリン・チェロ等" },
  { name: "ドラム", image: "/images/icon-drums.png", href: "/articles/drum-kaitori/", desc: "電子ドラム・アコースティック" },
  { name: "キーボード", image: "/images/icon-keyboard.png", href: "/articles/keyboard-kaitori/", desc: "シンセサイザー・ステージピアノ" },
  { name: "Gibson", image: "/images/icon-guitar.png", href: "/articles/gibson-kaitori/", desc: "Les Paul・SG・ES-335" },
  { name: "Fender", image: "/images/icon-guitar.png", href: "/articles/fender-kaitori/", desc: "ストラト・テレキャス" },
  { name: "YAMAHA", image: "/images/icon-piano.png", href: "/articles/yamaha-kaitori/", desc: "ピアノ・ギター・管楽器" },
  { name: "東京エリア", image: "/images/icon-compare.png", href: "/articles/tokyo-gakki-kaitori/", desc: "東京の楽器買取おすすめ" },
  { name: "大阪エリア", image: "/images/icon-compare.png", href: "/articles/osaka-gakki-kaitori/", desc: "大阪の楽器買取おすすめ" },
  { name: "名古屋エリア", image: "/images/icon-compare.png", href: "/articles/nagoya-gakki-kaitori/", desc: "名古屋の楽器買取おすすめ" },
  { name: "福岡エリア", image: "/images/icon-compare.png", href: "/articles/fukuoka-gakki-kaitori/", desc: "福岡の楽器買取おすすめ" },
  { name: "横浜エリア", image: "/images/icon-compare.png", href: "/articles/yokohama-gakki-kaitori/", desc: "横浜の楽器買取おすすめ" },
  { name: "札幌エリア", image: "/images/icon-compare.png", href: "/articles/sapporo-gakki-kaitori/", desc: "札幌の楽器買取おすすめ" },
  { name: "仙台エリア", image: "/images/icon-compare.png", href: "/articles/sendai-gakki-kaitori/", desc: "仙台の楽器買取おすすめ" },
  { name: "神戸エリア", image: "/images/icon-compare.png", href: "/articles/kobe-gakki-kaitori/", desc: "神戸の楽器買取おすすめ" },
  { name: "京都エリア", image: "/images/icon-compare.png", href: "/articles/kyoto-gakki-kaitori/", desc: "京都の楽器買取おすすめ" },
  { name: "広島エリア", image: "/images/icon-compare.png", href: "/articles/hiroshima-gakki-kaitori/", desc: "広島の楽器買取おすすめ" },
  { name: "大宮・埼玉", image: "/images/icon-compare.png", href: "/articles/omiya-gakki-kaitori/", desc: "大宮・埼玉の楽器買取" },
  { name: "千葉エリア", image: "/images/icon-compare.png", href: "/articles/chiba-gakki-kaitori/", desc: "千葉の楽器買取おすすめ" },
  { name: "川崎エリア", image: "/images/icon-compare.png", href: "/articles/kawasaki-gakki-kaitori/", desc: "川崎の楽器買取おすすめ" },
  { name: "御茶ノ水", image: "/images/icon-compare.png", href: "/articles/ochanomizu-gakki-kaitori/", desc: "楽器街の買取ガイド" },
  { name: "渋谷エリア", image: "/images/icon-compare.png", href: "/articles/shibuya-gakki-kaitori/", desc: "渋谷の楽器買取おすすめ" },
  { name: "新宿エリア", image: "/images/icon-compare.png", href: "/articles/shinjuku-gakki-kaitori/", desc: "新宿の楽器買取おすすめ" },
  { name: "池袋エリア", image: "/images/icon-compare.png", href: "/articles/ikebukuro-gakki-kaitori/", desc: "池袋の楽器買取おすすめ" },
  { name: "Roland", image: "/images/icon-electronic.png", href: "/articles/roland-kaitori/", desc: "電子ピアノ・シンセ・V-Drums" },
  { name: "Pearl", image: "/images/icon-drums.png", href: "/articles/pearl-kaitori/", desc: "ドラムセット・スネア" },
  { name: "Martin", image: "/images/icon-guitar.png", href: "/articles/martin-kaitori/", desc: "アコギの王様" },
  { name: "Selmer", image: "/images/icon-brass.png", href: "/articles/selmer-kaitori/", desc: "サックスの最高峰" },
  { name: "KAWAI", image: "/images/icon-piano.png", href: "/articles/kawai-kaitori/", desc: "ピアノ・電子ピアノ" },
  { name: "Ibanez", image: "/images/icon-guitar.png", href: "/articles/ibanez-kaitori/", desc: "RG・JEM・Prestige" },
  { name: "壊れた楽器", image: "/images/icon-howto.png", href: "/articles/kowareta-gakki-kaitori/", desc: "ジャンク品・古い楽器" },
  { name: "まとめ売り", image: "/images/icon-howto.png", href: "/articles/matome-uri-kaitori/", desc: "複数楽器の一括買取" },
  { name: "遺品整理", image: "/images/icon-howto.png", href: "/articles/ihin-gakki-kaitori/", desc: "故人の楽器を売る方法" },
  { name: "詐欺・注意点", image: "/images/icon-howto.png", href: "/articles/gakki-kaitori-sagi/", desc: "トラブル回避ガイド" },
  { name: "メルカリvs業者", image: "/images/icon-howto.png", href: "/articles/mercari-vs-gyosha/", desc: "どっちが得か徹底比較" },
  { name: "相場一覧", image: "/images/icon-price.png", href: "/articles/souba-ichiran/", desc: "全楽器の買取相場まとめ" },
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
    <div className="gakki-reveal-home">
      <FaqSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center">
        <Image
          src="/images/hero-gakki.png"
          alt="楽器買取のプロが丁寧にギターを査定している様子"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-amber-200 font-medium text-sm mb-3 tracking-wider">
              楽器買取おすすめ比較ガイド 2026年最新版
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              大切な楽器を、
              <br />
              <span className="text-amber-300">最高価格</span>で。
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              あなたの楽器を丁寧に査定。プロの目で適正価格をお約束します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://hikakaku.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-amber-500 text-white font-medium px-7 py-3.5 rounded-full hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg"
              >
                無料査定を依頼する
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/articles/guitar-kaitori/"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                ギター買取おすすめを見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
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
                <div className="w-14 h-14 mx-auto mb-2 relative">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
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
      <GakkiScrollReveal />
    </div>
  );
}

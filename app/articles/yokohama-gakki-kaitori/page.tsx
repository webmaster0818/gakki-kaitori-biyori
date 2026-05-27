import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】楽器買取 横浜おすすめ3選｜横浜駅周辺の専門店も比較",
  description:
    "横浜で楽器を売るならどこがいい？横浜対応の楽器買取おすすめ3社を徹底比較。横浜駅周辺のイシバシ楽器・クロサワ楽器など専門店情報、出張買取・店頭買取・宅配買取の違い、高く売るコツまで解説。",
  openGraph: {
    title: "【2026年最新】楽器買取 横浜おすすめ3選｜横浜駅周辺の専門店も比較",
    description: "横浜で楽器を売るなら。おすすめ買取3社の比較と高く売るコツを徹底解説。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "楽器買取 横浜", href: "/articles/yokohama-gakki-kaitori/" },
  ];
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center">
            {i > 0 && <span className="breadcrumb-sep" />}
            {i === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">横浜で楽器の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">
          一括査定で最高値を調べる
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">
          出張買取を申し込む
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">
          近くの店舗を探す
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "横浜で楽器を高く売るにはどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "横浜で楽器を高く売るには、(1)ヒカカク！で複数業者に一括査定を依頼する、(2)横浜駅周辺のイシバシ楽器やクロサワ楽器などの専門店も含めて比較する、(3)付属品を揃えてクリーニングしてから査定に出す、の3つが重要です。横浜は東京に次ぐ楽器市場規模があるため、複数社比較で高額査定が期待できます。" } },
      { "@type": "Question", name: "横浜で出張買取に対応している楽器買取業者は？", acceptedAnswer: { "@type": "Answer", text: "ウリエルは横浜市内全域への出張買取に対応しています。ティファナも横浜エリアで出張買取を行っています。また、楽器の買取屋さん横浜店は最短30分で出張査定に来てくれるスピード対応が特徴です。出張料・査定料はいずれも無料です。" } },
      { "@type": "Question", name: "横浜の楽器買取で即日現金化は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、可能です。イシバシ楽器横浜店やクロサワ楽器横浜店の店頭買取なら、その場で査定・即日現金化ができます。楽器の買取屋さんの出張買取でも、その場で見積もり・即現金支払いに対応しています。" } },
      { "@type": "Question", name: "横浜駅周辺に楽器買取店は多いですか？", acceptedAnswer: { "@type": "Answer", text: "はい、横浜駅周辺には楽器買取店が集中しています。イシバシ楽器横浜店（南幸2丁目・相鉄南幸第7ビル2F/3F）、クロサワ楽器横浜店（横浜岡田屋モアーズ4F）、島村楽器横浜ビブレ店など、徒歩圏内に大手楽器チェーンが揃っています。" } },
      { "@type": "Question", name: "ピアノやドラムなど大型楽器は横浜でどうやって売ればいい？", acceptedAnswer: { "@type": "Answer", text: "大型楽器はウリエルの出張買取がおすすめです。横浜市内全域に対応しており、搬出作業も査定士が行います。出張料・搬出料は無料です。横浜楽器でも大型楽器の出張買取に対応しています。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】楽器買取 横浜おすすめ3選｜横浜駅周辺の専門店も比較",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "楽器買取びより" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年最新】楽器買取 横浜おすすめ3選｜横浜駅周辺の専門店も徹底比較\", \"item\": \"https://gakkikaitori-biyori.com/articles/yokohama-gakki-kaitori/\"}]}" }} />
    </>
  );
}

export default function YokohamaGakkiKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">横浜</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】楽器買取 横浜おすすめ3選｜横浜駅周辺の専門店も徹底比較
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            横浜で楽器を売りたいけど、どの業者を選べばいいかわからない方へ。本記事では、横浜エリア対応の楽器買取おすすめ3社を徹底比較。横浜駅周辺のイシバシ楽器・クロサワ楽器・島村楽器など専門店の情報から、出張買取・店頭買取・宅配買取それぞれのメリット・デメリット、高く売るためのコツまで詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月26日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#comparison" className="hover:underline">横浜対応おすすめ3社比較</a></li>
            <li><a href="#area" className="hover:underline">横浜駅周辺の楽器買取事情</a></li>
            <li><a href="#local-shops" className="hover:underline">横浜の主要楽器買取店ガイド</a></li>
            <li><a href="#method" className="hover:underline">出張・店頭・宅配 どれがおすすめ？</a></li>
            <li><a href="#tips" className="hover:underline">横浜で楽器を高く売るコツ</a></li>
            <li><a href="#flow" className="hover:underline">横浜での買取の流れ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="comparison">横浜対応の楽器買取おすすめ3社を徹底比較</h2>

          <p>横浜は東京に次ぐ人口を誇る大都市であり、楽器文化も盛んです。横浜駅周辺を中心に多くの楽器買取店がありますが、手数料無料・高額査定・対応の良さで特におすすめの3社をご紹介します。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">ヒカカク！</th>
                  <th className="px-4 py-3 text-left font-medium">ティファナ</th>
                  <th className="px-4 py-3 text-left font-medium">ウリエル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定（複数業者）</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取専門</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">横浜対応</td><td className="px-4 py-3">全域（オンライン）</td><td className="px-4 py-3">横浜市内対応</td><td className="px-4 py-3">横浜市内全域</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">即日対応</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">店頭なら即日</td><td className="px-4 py-3">最短即日</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">対応楽器</td><td className="px-4 py-3">全ジャンル</td><td className="px-4 py-3">全ジャンル</td><td className="px-4 py-3">全ジャンル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅完結・大型OK</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">すぐ売りたい人</td><td className="px-4 py-3">大型楽器を売る人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── 横浜の買取業者を一括比較</h3>
          <p>横浜には楽器買取業者が10店舗以上あり、業者によって査定額に大きな差が出ます。ヒカカク！なら、<strong>横浜対応の複数業者に一括で査定依頼でき、最高値の業者がすぐにわかります</strong>。横浜の専門店から全国対応のリサイクルショップまで幅広い業者が参加しています。</p>

          <h3>ティファナ ── 横浜エリアで出張買取・宅配買取に対応</h3>
          <p>ティファナは横浜エリアでも出張買取・宅配買取に対応しており、<strong>年間4万件の実績</strong>で安心感があります。楽器以外のアイテムもまとめて売れるのがメリットで、引っ越しの際のまとめ売りにも便利です。</p>

          <h3>ウリエル ── 横浜市内全域へ出張買取</h3>
          <p>ウリエルは横浜市内全域に出張買取で対応。18区すべてのエリアに対応しており、<strong>ピアノやドラムセットなど大型楽器の搬出もお任せ</strong>できます。出張料・査定料は完全無料です。</p>

          <CtaBox />

          <h2 id="area">横浜駅周辺の楽器買取事情</h2>

          <p>横浜で楽器を売る場合、横浜駅周辺が最も選択肢が豊富です。駅から徒歩圏内に大手楽器チェーンが集中しています。</p>

          <h3>横浜駅西口エリア ── 大手楽器店が集結</h3>
          <p>横浜駅西口は楽器買取の一大エリアです。<strong>イシバシ楽器 横浜店</strong>は横浜市西区南幸2-17-1の相鉄南幸第7ビル2F/3Fにあり、買取専門窓口を設けています。80年以上の歴史を持つ老舗楽器店ならではの査定力が魅力です。</p>
          <p><strong>クロサワ楽器 横浜店</strong>は横浜市西区南幸1-3-1の横浜岡田屋モアーズ4Fに位置し、横浜駅から徒歩約3分のアクセスです。営業時間は11:00〜20:00で、ギター・ベース・ウクレレ・管楽器を扱う地域最大級の専門店です。Fenderやマーティンなどの品揃えに定評があり、買取・下取りにも対応しています。</p>
          <p>また、<strong>クロサワバイオリン横浜店</strong>も横浜駅から徒歩約3分の場所にあり、入門用からヨーロッパで買付けたオールド・モダン楽器まで幅広く扱っています。バイオリン・チェロなど弦楽器の買取に特化した専門性が魅力です。</p>

          <h3>横浜駅東口・みなとみらいエリア</h3>
          <p><strong>島村楽器 横浜ビブレ店</strong>は横浜駅東口すぐの横浜ビブレ内にあり、中古楽器の販売・買取・下取を取り扱っています。査定は無料で、楽器買取のキャンペーンを定期的に開催しています。総合楽器店のため、ギター以外にも電子ピアノ・ドラム・管楽器など幅広いジャンルに対応しています。</p>

          <h3>横浜市内その他のエリア</h3>
          <p>横浜市内は18区に分かれており、横浜駅から離れたエリアでは出張買取の利用が便利です。<strong>楽器の買取屋さん横浜店</strong>は神奈川県内の楽器買取を強化しており、最短30分で出張査定に来てくれるスピード対応が特徴です。汚れている楽器や壊れている楽器も買取対象で、その場で即現金支払いが可能です。</p>
          <p><strong>イーストマウンテン</strong>は横浜を拠点とする楽器買取専門店で、個人・法人どちらも利用可能です。楽器だけでなく周辺機器や音響設備まで幅広く対応しており、店頭・出張・宅配の3つの買取方法を選べます。</p>
          <p><strong>セントラル楽器</strong>は管楽器・木管楽器・金管楽器の買取に特化した専門店です。最短即日で査定・買取・支払いまで完了し、新しい楽器の購入時の下取りではさらに高価買取となります。管楽器を売りたい方には特におすすめです。</p>
          <p><strong>横浜楽器</strong>は横浜市を拠点に展開する中古楽器の買取専門店で、従業員がほぼ全員現役ミュージシャンまたは元ミュージシャンという特徴があります。海外需要にも対応しているため強気の買取価格を提示できるのが強みです。</p>

          <CtaBox />

          <h2 id="local-shops">横浜の主要楽器買取店ガイド</h2>

          <p>横浜の楽器買取店を特徴別にまとめました。楽器の種類や買取方法に合わせて最適な店舗を選びましょう。</p>

          <h3>イシバシ楽器 横浜店 ── 全国チェーンの安心感</h3>
          <p>横浜市西区南幸2-17-1 相鉄南幸第7ビル2F/3Fに位置する、80年以上の歴史を持つ楽器専門店です。ヴィンテージ品から現行モデルまで幅広い買取実績があり、店頭買取はもちろん出張買取・宅配買取にも対応しています。買取専門フリーダイヤルでの事前査定も可能です。</p>

          <h3>クロサワ楽器 横浜店 ── 地域最大級の品揃え</h3>
          <p>横浜岡田屋モアーズ4Fにあり、横浜駅から徒歩約3分。ギター・ベース・ウクレレ・管楽器の地域最大級の専門店です。FenderやMartinなど人気ブランドの査定に強く、店内にリペア工房を併設しているため修理歴のある楽器も正確に評価できます。</p>

          <h3>楽器の買取屋さん横浜店 ── 最短30分の出張買取</h3>
          <p>楽器に特化した買取店で、最短30分で出張査定に来てくれるスピード対応が売りです。汚れや壊れがある楽器でも買取対象となり、その場で即現金支払い。神奈川県全域に対応しています。</p>

          <h3>セントラル楽器 ── 管楽器専門の高額査定</h3>
          <p>管楽器・木管楽器・金管楽器の買取に特化した専門店です。サックス・トランペット・フルート・クラリネットなどの管楽器を売りたい方に特におすすめ。専門店ならではの正確な査定で、一般のリサイクルショップよりも高額査定が期待できます。下取なら更に高価買取となります。</p>

          <h3>横浜楽器 ── ミュージシャンスタッフによる査定</h3>
          <p>従業員がほぼ全員現役ミュージシャンまたは元ミュージシャンという特徴を持つ買取専門店です。演奏者目線での正確な状態評価と、海外需要への対応力で強気の買取価格を提示できます。</p>

          <h3>イーストマウンテン ── 音響設備まで幅広く対応</h3>
          <p>横浜拠点の楽器買取専門店で、楽器本体だけでなくPA機器・録音機材・音響設備まで幅広く対応。個人・法人どちらも利用可能で、スタジオ閉鎖や機材入れ替えの際のまとめ売りにも対応しています。</p>

          <CtaBox />

          <h2 id="method">出張・店頭・宅配 ── 横浜ではどれがおすすめ？</h2>

          <h3>出張買取がおすすめなケース</h3>
          <ul>
            <li>ピアノ、ドラムセットなど大型楽器を売りたい</li>
            <li>複数の楽器をまとめて売りたい</li>
            <li>横浜駅周辺まで行く時間がない</li>
            <li>港南区・戸塚区・瀬谷区など横浜駅から離れたエリアに住んでいる</li>
          </ul>

          <h3>店頭買取がおすすめなケース</h3>
          <ul>
            <li>今すぐ現金が欲しい（即日現金化）</li>
            <li>横浜駅周辺に住んでいる・通勤している</li>
            <li>ギター1本など持ち運びやすい楽器を売りたい</li>
            <li>イシバシ楽器やクロサワ楽器で専門的な査定を受けたい</li>
            <li>管楽器ならセントラル楽器の専門査定を受けたい</li>
          </ul>

          <h3>宅配買取がおすすめなケース</h3>
          <ul>
            <li>自分のペースで売りたい（対面が苦手）</li>
            <li>コンパクトな楽器（エフェクター・マウスピース等）を売りたい</li>
            <li>神奈川県内で横浜市外にお住まいの方</li>
          </ul>

          <p>横浜にお住まいなら、<strong>まずヒカカク！で一括査定して相場を把握し、横浜駅周辺の専門店の査定額と比較する</strong>のが最も効率的です。東京の御茶ノ水にも足を延ばせるため、高額楽器なら東京の専門店も含めて検討しましょう。</p>

          <CtaBox />

          <h2 id="tips">横浜で楽器を高く売るための4つのコツ</h2>

          <h3>コツ1: 横浜駅周辺の複数店舗と一括査定を併用</h3>
          <p>横浜駅周辺にはイシバシ楽器・クロサワ楽器・島村楽器が徒歩圏内にあるため、<strong>1日で複数店舗を回って査定額を比較</strong>できます。ヒカカク！の一括査定で相場を把握した上で店舗を回ると効率的です。</p>

          <h3>コツ2: 楽器の種類に合った専門店を選ぶ</h3>
          <p>管楽器ならセントラル楽器、バイオリンならクロサワバイオリン横浜店など、<strong>楽器の種類に合った専門店に持ち込む</strong>ことで高額査定が期待できます。専門店は一般的なリサイクルショップよりも楽器の価値を正確に評価してくれます。</p>

          <h3>コツ3: 付属品を揃えてクリーニング</h3>
          <p>純正ケース、保証書、付属品を揃え、楽器をきれいにしてから査定に出しましょう。<strong>見た目の第一印象は査定額に大きく影響</strong>します。ギターなら弦を張り替え、管楽器ならマウスピースまで丁寧に掃除しましょう。</p>

          <h3>コツ4: 東京の専門店も視野に入れる</h3>
          <ul>
            <li>横浜から御茶ノ水まで電車で約50分</li>
            <li>高額ギター（Gibson、Fenderなど）は御茶ノ水の専門店街も検討</li>
            <li>ヒカカク！なら東京・横浜両エリアの業者を同時に比較可能</li>
          </ul>

          <CtaBox />

          <h2 id="flow">横浜での楽器買取の流れ</h2>

          <p>横浜で楽器を売る場合の一般的な流れをご紹介します。横浜駅周辺の店舗なら店頭買取が便利です。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">一括査定で横浜対応業者を比較</h3><p className="text-sm text-warm-gray">ヒカカク！で一括査定すれば、横浜に対応する複数業者から見積もりが届きます。横浜駅周辺の専門店の買取価格と比較する基準値として活用しましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">買取方法を選択</h3><p className="text-sm text-warm-gray">横浜駅周辺ならイシバシ楽器・クロサワ楽器で店頭買取が便利。横浜市内ならウリエルの出張買取も最短即日対応です。楽器の買取屋さんなら最短30分で出張査定に来てくれます。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">本査定・買取成立</h3><p className="text-sm text-warm-gray">実物を確認して正式な買取額を提示。店頭買取なら即現金支払い、出張買取でもその場で現金化可能です。</p></div>
            </div>
          </div>

          <CtaBox />

          <h2 id="faq">横浜の楽器買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">横浜で楽器を高く売るにはどうすればいいですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                横浜で楽器を高く売るには、(1)ヒカカク！で複数業者に一括査定を依頼する、(2)横浜駅周辺のイシバシ楽器やクロサワ楽器などの専門店も含めて比較する、(3)付属品を揃えてクリーニングしてから査定に出す、の3つが重要です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">横浜で出張買取に対応している業者は？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                ウリエルは横浜市内全域への出張買取に対応しています。ティファナも横浜エリアで出張買取を行っています。楽器の買取屋さん横浜店は最短30分で出張査定可能です。出張料・査定料はいずれも無料です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">横浜の楽器買取で即日現金化は可能ですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、可能です。イシバシ楽器やクロサワ楽器の店頭買取なら即日現金化ができます。楽器の買取屋さんの出張買取でもその場で即現金支払いに対応しています。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">横浜駅周辺に楽器買取店は多いですか？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                はい、横浜駅周辺にはイシバシ楽器、クロサワ楽器、島村楽器など大手楽器チェーンが徒歩圏内に揃っています。1日で複数店舗を回って査定額を比較することも可能です。
              </div>
            </details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">ピアノやドラムなど大型楽器は横浜でどうやって売ればいい？</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                大型楽器はウリエルの出張買取がおすすめです。横浜市内全域に対応しており、搬出作業も査定士が行います。出張料・搬出料は無料です。
              </div>
            </details>
          </div>

          <h2>まとめ：横浜なら駅周辺の専門店と一括査定を併用しよう</h2>

          <p>横浜駅周辺にはイシバシ楽器・クロサワ楽器・島村楽器など大手楽器チェーンが集中しており、1日で複数店舗を回れるのが強みです。<strong>一括査定と店頭査定を併用して最高値を狙いましょう</strong>。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>すぐに売りたい</strong> → ティファナ or 横浜駅周辺の店舗で店頭買取</li>
            <li><strong>大型楽器・まとめ売り</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料。まずはヒカカク！で相場をチェックしてみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/tokyo-gakki-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">東京</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取 東京おすすめ3選</h3>
            </Link>
            <Link href="/articles/nagoya-gakki-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">名古屋</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取 名古屋おすすめ3選</h3>
            </Link>
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">売却ガイド</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

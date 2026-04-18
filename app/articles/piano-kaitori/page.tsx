import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】ピアノ買取おすすめ3社比較｜グランド・アップライト相場",
  description:
    "ピアノ買取のおすすめ業者3社を徹底比較。グランドピアノ・アップライトピアノ・電子ピアノの買取相場、YAMAHA・KAWAI・Steinwayなどブランド別の相場目安、高く売るコツまで解説します。",
  openGraph: {
    title: "【2026年最新】ピアノ買取おすすめ3社比較｜グランド・アップライト相場",
    description: "ピアノ買取のおすすめ業者3社を徹底比較。グランド・アップライトの買取相場からブランド別相場、高く売るコツまで完全ガイド。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ピアノ買取おすすめ", href: "/articles/piano-kaitori/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">あなたのピアノの買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "ピアノの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "ピアノの買取相場はタイプ・ブランド・年式・状態によって大きく異なります。YAMAHA アップライトピアノで3万〜15万円、KAWAI アップライトで2万〜12万円、YAMAHA グランドピアノで15万〜80万円が目安です。Steinwayなど海外高級ブランドは100万円以上になることもあります。" } },
      { "@type": "Question", name: "古いピアノでも買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、30年以上前のピアノでも買取可能な業者は多いです。特にYAMAHAやKAWAIのピアノは耐久性が高く、古いモデルでも需要があります。ただし、40年以上経過したピアノは状態次第で値段がつかないこともあるため、まずは無料査定で確認することをおすすめします。" } },
      { "@type": "Question", name: "ピアノの搬出・運搬費用は誰が負担しますか？", acceptedAnswer: { "@type": "Answer", text: "多くの買取業者では、搬出・運搬費用は業者負担（無料）です。ただし、2階以上でエレベーターがない場合やクレーン搬出が必要な場合は、別途費用がかかることがあります。事前に搬出環境を伝えて見積もりを取りましょう。" } },
      { "@type": "Question", name: "電子ピアノとアコースティックピアノ、どちらが高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "一般的にはアコースティックピアノ（グランド・アップライト）の方が高く売れます。電子ピアノは技術の進化が早いため、古いモデルの価値が下がりやすい傾向があります。ただし、Roland・YAMAHAの上位モデル（CLP-700シリーズ等）は高額買取が期待できます。" } },
      { "@type": "Question", name: "ピアノの調律をしてから売った方が高くなりますか？", acceptedAnswer: { "@type": "Answer", text: "買取前に調律する必要はありません。買取業者は自社で調律を行うため、調律済みかどうかは査定額にほとんど影響しません。ただし、定期的に調律していた記録（調律師のカード等）があれば、ピアノの管理状態の良さを証明できるため、査定にプラスになることがあります。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ピアノ買取おすすめ3社比較｜グランド・アップライト相場",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    author: { "@type": "Organization", name: "楽器買取びより" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
    </>
  );
}

export default function PianoKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">ピアノ買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【2026年最新】ピアノ買取おすすめ3社比較｜グランド・アップライト・電子の相場を徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            ピアノを売りたいけど、大きくて運べない、相場がわからない、どこに頼めばいいかわからない。そんな悩みを解決します。本記事では、ピアノ買取の人気3サービスを比較し、グランドピアノ・アップライトピアノ・電子ピアノそれぞれの買取相場から高く売るコツまで解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#market-price" className="hover:underline">ピアノ買取相場</a></li>
            <li><a href="#comparison" className="hover:underline">おすすめ3社比較</a></li>
            <li><a href="#flow" className="hover:underline">ピアノ買取の流れ</a></li>
            <li><a href="#types" className="hover:underline">アップライト・グランド・電子ピアノの違い</a></li>
            <li><a href="#tips" className="hover:underline">ピアノを高く売るコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="market-price">ピアノ買取相場（2026年最新版）</h2>

          <p>ピアノの買取相場は、タイプ（グランド・アップライト・電子）、ブランド、年式、状態によって大きく異なります。まずは全体像を把握しましょう。</p>

          <h3>アップライトピアノの買取相場</h3>

          <p>アップライトピアノは日本の家庭で最も普及しているタイプです。YAMAHAとKAWAIが圧倒的なシェアを持ち、中古市場でも安定した需要があります。特にYAMAHA Uシリーズは海外への輸出需要も高く、古いモデルでも値段がつきやすいのが特徴です。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA U1</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">最も流通量の多い定番モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA U3</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">U1より高さがあり音質に優れる</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA YUS/YUシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">10万〜30万円</td><td className="px-4 py-3 text-warm-gray">上位モデル。状態次第で高額</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA bシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">インドネシア製エントリーモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">KAWAI Kシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜12万円</td><td className="px-4 py-3 text-warm-gray">木製アクション搭載で好評</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">KAWAI KSシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">2万〜8万円</td><td className="px-4 py-3 text-warm-gray">スタンダードモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">APOLLO/ATLAS/DIAPASON</td><td className="px-4 py-3 text-gold-dark font-bold">1万〜5万円</td><td className="px-4 py-3 text-warm-gray">国産その他ブランド</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>注意点:</strong> アップライトピアノの買取価格には、搬出環境が影響します。1階でトラック横付け可能な場合と、2階以上でクレーン搬出が必要な場合では、運搬コストの差が買取価格に反映されることがあります。</p>

          <h3>グランドピアノの買取相場</h3>

          <p>グランドピアノはアップライトと比べて買取価格が高くなる傾向があります。特にYAMAHA CシリーズやKAWAI RX/SKシリーズは中古市場での人気が高く、状態が良ければ数十万円の買取価格が期待できます。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA C1/C2</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜40万円</td><td className="px-4 py-3 text-warm-gray">コンパクトグランドの定番</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA C3</td><td className="px-4 py-3 text-gold-dark font-bold">20万〜60万円</td><td className="px-4 py-3 text-warm-gray">最も人気のサイズ（186cm）</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA C5/C6/C7</td><td className="px-4 py-3 text-gold-dark font-bold">30万〜100万円</td><td className="px-4 py-3 text-warm-gray">プロ向け大型モデル</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA CFX</td><td className="px-4 py-3 text-gold-dark font-bold">200万〜500万円</td><td className="px-4 py-3 text-warm-gray">コンサートグランド最高峰</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">KAWAI RXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">15万〜50万円</td><td className="px-4 py-3 text-warm-gray">カーボンアクション搭載</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">KAWAI SKシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">40万〜120万円</td><td className="px-4 py-3 text-warm-gray">Shigeru Kawaiブランド</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Steinway Model B/D</td><td className="px-4 py-3 text-gold-dark font-bold">100万〜500万円</td><td className="px-4 py-3 text-warm-gray">世界最高峰ブランド</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Bosendorfer</td><td className="px-4 py-3 text-gold-dark font-bold">80万〜400万円</td><td className="px-4 py-3 text-warm-gray">ウィーンの名門</td></tr>
              </tbody>
            </table>
          </div>

          <p>グランドピアノは<strong>サイズ（奥行き）が大きいほど買取価格が高い</strong>傾向にあります。これは音域の広さや音量が大きさに比例するためです。ただし、搬出が困難な場合は費用が差し引かれることもあります。</p>

          <h3>電子ピアノの買取相場</h3>

          <p>電子ピアノは技術の進化が早いため、アコースティックピアノに比べて中古価値の下落が早い傾向があります。ただし、YAMAHA CLPシリーズやRoland HPシリーズなどの上位モデルは、比較的安定した買取価格がつきます。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">モデル</th>
                  <th className="px-4 py-3 text-left font-medium">買取相場</th>
                  <th className="px-4 py-3 text-left font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">YAMAHA CLP-700シリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜15万円</td><td className="px-4 py-3 text-warm-gray">Clavinovaフラッグシップ</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">YAMAHA CLP-600シリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td><td className="px-4 py-3 text-warm-gray">1世代前でも人気</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Roland HP700シリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5万〜12万円</td><td className="px-4 py-3 text-warm-gray">SuperNATURAL音源搭載</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">Roland LXシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">8万〜20万円</td><td className="px-4 py-3 text-warm-gray">最上位ライン</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">KAWAI CN/CAシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">3万〜10万円</td><td className="px-4 py-3 text-warm-gray">木製鍵盤モデルが人気</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">CASIO Priviaシリーズ</td><td className="px-4 py-3 text-gold-dark font-bold">5,000〜3万円</td><td className="px-4 py-3 text-warm-gray">コスパモデル</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">KORG/その他</td><td className="px-4 py-3 text-gold-dark font-bold">3,000〜2万円</td><td className="px-4 py-3 text-warm-gray">ブランドにより大幅変動</td></tr>
              </tbody>
            </table>
          </div>

          <p>電子ピアノは<strong>製造から5年以内</strong>のモデルが最も高く売れます。5年を超えると大幅に価値が下がる傾向があるため、使わなくなったら早めに売却することをおすすめします。詳しくは<Link href="/articles/denshi-piano-kaitori/" className="text-accent hover:underline">電子ピアノ買取ガイド</Link>をご覧ください。</p>

          <CtaBox />

          <h2 id="comparison">ピアノ買取おすすめ3社を徹底比較</h2>

          <p>ピアノ買取は、ギターなどの小型楽器と比べて「搬出・運搬」が大きなポイントになります。ここではピアノ買取に対応した3社の特徴を比較します。</p>

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
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">ピアノ搬出</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">搬出対応あり</td><td className="px-4 py-3">搬出対応あり</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">搬出費用</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">基本無料</td><td className="px-4 py-3">基本無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">グランドピアノ</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">電子ピアノ</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3 text-gold-dark font-bold">最高値を比較</td><td className="px-4 py-3 text-gold-dark font-bold">実績豊富で安心</td><td className="px-4 py-3 text-gold-dark font-bold">大型でも自宅完結</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── ピアノ専門業者を含む一括査定</h3>

          <p>ヒカカク！では、ピアノ専門の買取業者を含む複数社に一括で査定依頼が可能です。ピアノのメーカー・型番・年式・状態を入力するだけで、各業者から見積もりが届きます。</p>

          <p><strong>ピアノ買取で最も重要なのは「相見積もり」です。</strong>同じYAMAHA U3でも、業者によって5万円以上の差がつくことがあります。これは各業者の販売ルート（国内中古市場・海外輸出）や在庫状況が異なるためです。まずはヒカカク！で相場を確認しましょう。</p>

          <h3>ティファナ ── 年間4万件の実績で安心</h3>

          <p>ティファナは年間4万件の買取実績を持つ総合買取サービスです。ピアノの出張買取にも対応しており、搬出から運搬まで一括で対応してくれます。</p>

          <p>ピアノだけでなく、周辺のアクセサリー（椅子、メトロノーム、楽譜台など）もまとめて買い取ってくれるのが便利なポイントです。「ピアノ教室を閉じるので全部まとめて売りたい」といったケースにも対応可能です。</p>

          <h3>ウリエル ── 大型ピアノでも出張買取で安心</h3>

          <p>ウリエルは出張買取専門のサービスで、グランドピアノのような大型楽器でも自宅で査定・買取が完結します。専門のスタッフが搬出まで行ってくれるため、自分で運ぶ必要は一切ありません。</p>

          <p>特に<strong>グランドピアノやアップライトピアノは重量があるため、出張買取が最も合理的な選択肢</strong>です。査定結果に納得できればその場で買取、現金支払いも可能です。</p>

          <CtaBox />

          {/* 買取の流れ */}
          <h2 id="flow">ピアノ買取の流れ ── 査定申し込みから搬出まで</h2>

          <p>ピアノは大型楽器のため、買取の流れは他の楽器と異なる部分があります。特に搬出の準備が重要です。</p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h3 className="font-bold text-sm mb-1">Web・電話で査定申し込み</h3><p className="text-sm text-warm-gray">ブランド名・型番・製造年（ピアノ内部のフレームに記載）・外観の状態を伝えます。設置場所（階数・エレベーターの有無）も重要な情報です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h3 className="font-bold text-sm mb-1">仮査定（概算見積もり）</h3><p className="text-sm text-warm-gray">型番と状態から概算の買取額が提示されます。搬出に特殊作業（クレーン等）が必要な場合は、搬出費の見積もりも含まれます。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h3 className="font-bold text-sm mb-1">訪問・本査定</h3><p className="text-sm text-warm-gray">査定士が自宅を訪問し、実物を確認。鍵盤の動作、ペダル、外装の状態をチェックして正式な買取額を提示します。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h3 className="font-bold text-sm mb-1">買取成立・搬出</h3><p className="text-sm text-warm-gray">金額に同意したら買取成立。専門の運搬スタッフがピアノを搬出します。現金またはお振込みで支払いが完了します。</p></div>
            </div>
          </div>

          <p><strong>搬出費用が無料の業者を選ぶのがポイント</strong>です。2階以上でエレベーターがない場合、クレーン搬出が必要になることがありますが、対応可能な業者を選べば追加費用を抑えられます。</p>

          <CtaBox />

          <h2 id="types">アップライト・グランド・電子ピアノの違いと買取のポイント</h2>

          <p>ピアノには大きく分けて3つのタイプがあり、それぞれ買取の際に注意すべきポイントが異なります。</p>

          <h3>アップライトピアノ</h3>

          <p>アップライトピアノは縦型で省スペースなため、日本の家庭で最も普及しているタイプです。中古市場でも需要が安定しており、状態が良ければ確実に値段がつきます。</p>

          <p><strong>買取のポイント:</strong></p>
          <ul>
            <li>製造年（シリアルナンバーで確認可能）が重要。30年以内のモデルが好まれる</li>
            <li>外装（塗装の状態、キズ、変色）は見た目の印象に直結</li>
            <li>鍵盤の動作、ペダルの状態を確認</li>
            <li>搬出環境（何階か、エレベーターの有無）を事前に伝える</li>
            <li>消音ユニット付きはプラス査定になることが多い</li>
          </ul>

          <h3>グランドピアノ</h3>

          <p>グランドピアノは買取価格が高い一方で、搬出にコストがかかるため、買取価格から搬出費用が差し引かれることがあります。事前に搬出環境を正確に伝えることが重要です。</p>

          <p><strong>買取のポイント:</strong></p>
          <ul>
            <li>サイズ（奥行き）が大きいほど高額。C3（186cm）以上が特に人気</li>
            <li>ブランドが最も重要。YAMAHA・KAWAI・Steinway・Bosendorferは高額</li>
            <li>響板の割れ、弦の錆び、ハンマーの状態が査定に大きく影響</li>
            <li>搬出経路（ドアの幅、階段の有無）を事前確認</li>
            <li>定期調律の記録があればプラス査定</li>
          </ul>

          <h3>電子ピアノ</h3>

          <p>電子ピアノは技術進化が早く、5年で価値が半減することも珍しくありません。使わなくなったら早めの売却がおすすめです。</p>

          <p><strong>買取のポイント:</strong></p>
          <ul>
            <li>製造から5年以内が高額買取の目安</li>
            <li>鍵盤タイプ（木製鍵盤か樹脂鍵盤か）で価格差が大きい</li>
            <li>付属品（専用スタンド、ペダル、ヘッドホン、説明書）を揃える</li>
            <li>動作確認（全鍵盤の音が出るか、液晶表示は正常か）</li>
            <li>組み立て式の場合、分解して搬出できるため送料が安い</li>
          </ul>

          <CtaBox />

          <h2 id="tips">ピアノを高く売るための5つのコツ</h2>

          <h3>コツ1: 複数業者に査定を依頼する</h3>
          <p>ピアノの買取価格は業者によって大きく異なります。ヒカカク！で一括査定を行い、最低3社以上の見積もりを比較しましょう。同じYAMAHA U1でも、5万〜15万円と3倍もの差がつくことがあります。</p>

          <h3>コツ2: メーカー・型番・製造年を正確に把握する</h3>
          <p>ピアノの天板を開けると、フレーム（金色の部分）にメーカー名と型番が刻印されています。製造年はシリアルナンバーから調べられます。YAMAHAの場合はYAMAHA公式サイトでシリアルナンバーから製造年を確認できます。</p>

          <h3>コツ3: 搬出環境を事前に確認・伝える</h3>
          <p>ピアノの搬出は買取のコストに直結します。以下の情報を事前に確認し、査定時に正確に伝えましょう。</p>
          <ul>
            <li>ピアノの設置階（1階・2階・それ以上）</li>
            <li>エレベーターの有無とサイズ</li>
            <li>搬出経路の幅（廊下、ドア、階段の幅）</li>
            <li>トラック横付けの可否</li>
            <li>クレーン搬出の必要性</li>
          </ul>

          <h3>コツ4: 外装をきれいにする</h3>
          <p>ピアノの塗装面を柔らかい布で拭き、ホコリを除去しましょう。鍵盤は中性洗剤を薄めた液で拭き取ると、見た目がぐっときれいになります。ただし、ラッカー塗装のピアノには研磨剤入りのクリーナーを使わないように注意してください。</p>

          <h3>コツ5: 付属品・書類を揃える</h3>
          <p>以下の付属品・書類があれば、必ず一緒に査定に出しましょう。</p>
          <ul>
            <li>椅子（純正品であれば特にプラス）</li>
            <li>メトロノーム、ピアノカバー</li>
            <li>購入時の保証書、領収書</li>
            <li>調律記録（調律師のカード・履歴）</li>
            <li>取扱説明書</li>
          </ul>

          <CtaBox />

          <h2 id="faq">ピアノ買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
            {[
              { q: "ピアノの買取相場はいくらですか？", a: "ピアノの買取相場はタイプ・ブランド・年式・状態によって大きく異なります。YAMAHA アップライトピアノで3万〜15万円、KAWAI アップライトで2万〜12万円、YAMAHA グランドピアノで15万〜80万円が目安です。Steinwayなど海外高級ブランドは100万円以上になることもあります。正確な価格は必ず複数業者の査定で確認しましょう。" },
              { q: "古いピアノでも買い取ってもらえますか？", a: "はい、30年以上前のピアノでも買取可能な業者は多いです。特にYAMAHAやKAWAIのピアノは耐久性が高く、海外需要もあるため古いモデルでも値段がつきます。ただし、響板の割れ、弦の大量の錆び、虫害がある場合は値段がつかないこともあります。まずは無料査定で確認しましょう。" },
              { q: "ピアノの搬出・運搬費用は誰が負担しますか？", a: "多くの買取業者では搬出・運搬費用は業者負担（無料）です。ただし、2階以上でエレベーターがない場合やクレーン搬出が必要な場合は別途費用がかかることがあります。ウリエルやティファナでは事前に搬出環境を確認し、無料で見積もりを出してくれます。" },
              { q: "電子ピアノとアコースティックピアノ、どちらが高く売れますか？", a: "一般的にアコースティックピアノ（グランド・アップライト）の方が高く売れます。電子ピアノは技術の進化が早く、5年で価値が半減することもあります。ただし、Roland LXシリーズやYAMAHA CLP上位モデルは高額買取が期待できます。" },
              { q: "ピアノの調律をしてから売った方が高くなりますか？", a: "買取前に調律する必要はありません。買取業者は自社で調律を行うため、調律済みかどうかは査定額にほとんど影響しません。ただし、定期的に調律していた記録があれば管理状態の良さを証明でき、プラスになることがあります。" },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-warm-border overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                  <span className="pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2>まとめ：ピアノ買取は搬出環境の確認と相見積もりが鍵</h2>

          <p>ピアノ買取で最も重要なのは、<strong>搬出環境を正確に把握した上で、複数の業者に査定を依頼すること</strong>です。搬出費用は業者によって大きく異なるため、見積もり時に搬出費込みの金額を確認しましょう。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで出張/店頭買取</li>
            <li><strong>大型ピアノを自宅から</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は無料で、キャンセル料もかかりません。まずは気軽に査定を依頼してみてください。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/denshi-piano-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">電子ピアノ</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">電子ピアノ買取相場ガイド</h3>
            </Link>
            <Link href="/articles/yamaha-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">YAMAHA買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">YAMAHA楽器の買取相場まとめ</h3>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">買取方法</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">出張・宅配・店頭 買取方法比較</h3>
            </Link>
            <Link href="/articles/takaku-uru-kotsu/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">高く売るコツ</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器を高く売る5つのコツ</h3>
            </Link>
            <Link href="/articles/keyboard-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">キーボード買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">キーボード・シンセ買取おすすめ</h3>
            </Link>
            <Link href="/articles/souba-ichiran/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">相場一覧</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">楽器買取相場一覧まとめ</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

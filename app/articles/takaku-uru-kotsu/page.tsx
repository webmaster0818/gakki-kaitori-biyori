import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【完全ガイド】楽器を高く売る5つのコツ｜買取額アップの秘訣",
  description:
    "楽器を少しでも高く売るための5つの実践的なコツを解説。相見積もり・付属品・クリーニング・売却タイミング・買取方法の選び方まで。ギター・ピアノ・管楽器すべてに使えるノウハウです。",
  openGraph: {
    title: "【完全ガイド】楽器を高く売る5つのコツ｜買取額アップの秘訣",
    description: "楽器買取額をアップさせる5つの実践的なコツを徹底解説。相見積もり・付属品・クリーニング・タイミング・方法選びのポイント。",
  },
};

function Breadcrumb() {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "楽器を高く売るコツ", href: "/articles/takaku-uru-kotsu/" },
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">楽器の買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "楽器を高く売るために最も効果的なことは何ですか？", acceptedAnswer: { "@type": "Answer", text: "最も効果的なのは複数の買取業者に相見積もりを取ることです。同じ楽器でも業者によって数万円の差がつくことがあります。ヒカカク！を使えば一度の入力で複数業者に査定依頼でき、最高値を簡単に把握できます。" } },
      { "@type": "Question", name: "楽器の付属品がない場合、買取価格はどのくらい下がりますか？", acceptedAnswer: { "@type": "Answer", text: "付属品の有無による影響は楽器によって異なりますが、ケースがないと5〜15%、保証書がないと3〜10%程度の減額になることがあります。特にハードケースは単体でも価値があるため、必ず一緒に査定に出しましょう。" } },
      { "@type": "Question", name: "楽器を売るのに最適な時期はいつですか？", acceptedAnswer: { "@type": "Answer", text: "需要が高まる2〜3月（新学期前）とボーナス時期（6〜7月、12月）が高く売れる傾向にあります。ただし、電子楽器は技術の進化で時間が経つほど価値が下がるため、使わなくなったら早めに売ることが最も重要です。" } },
    ],
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【完全ガイド】楽器を高く売る5つのコツ｜買取額アップの秘訣",
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

export default function TakakuUruKotsuPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">高く売るコツ</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">完全ガイド</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            【完全ガイド】楽器を高く売る5つのコツ｜買取額アップの秘訣を徹底解説
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            「もっと高く売れたのに...」と後悔しないために。同じ楽器でも、売り方ひとつで買取額が数万円変わることがあります。この記事では、ギター・ピアノ・管楽器など、すべての楽器に使える「高く売るための5つの実践的なコツ」を詳しく解説します。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年4月18日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#tip1" className="hover:underline">コツ1: 複数業者に相見積もりを取る</a></li>
            <li><a href="#tip2" className="hover:underline">コツ2: 付属品をすべて揃える</a></li>
            <li><a href="#tip3" className="hover:underline">コツ3: クリーニングして見た目を整える</a></li>
            <li><a href="#tip4" className="hover:underline">コツ4: 売却のタイミングを見極める</a></li>
            <li><a href="#tip5" className="hover:underline">コツ5: 最適な買取方法を選ぶ</a></li>
            <li><a href="#services" className="hover:underline">3社の使い分けガイド</a></li>
            <li><a href="#by-instrument" className="hover:underline">楽器別ワンポイント</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <p>楽器の買取価格は、楽器そのものの価値だけでなく、<strong>「どう売るか」によっても大きく変わります</strong>。以下の5つのコツを実践するだけで、同じ楽器でも買取額が10〜30%アップすることも珍しくありません。</p>

          <h2 id="tip1">コツ1: 複数業者に相見積もりを取る（効果: 最大数万円アップ）</h2>

          <p>これは楽器買取において<strong>最も重要で、最も効果が大きいコツ</strong>です。買取業者にはそれぞれ得意なジャンルや販売ルートがあり、同じ楽器でも業者によって査定額に大きな差がつきます。</p>

          <h3>なぜ業者によって査定額が違うのか？</h3>

          <ul>
            <li><strong>販売ルートの違い</strong>: 国内のみで販売する業者と海外にも輸出する業者では、同じ楽器の価値が異なります。例えばYAMAHAピアノは海外需要が高いため、海外輸出ルートを持つ業者の方が高い査定額を出せます。</li>
            <li><strong>在庫状況</strong>: 特定のモデルの在庫が少ない業者は、仕入れのために高い査定額を提示することがあります。</li>
            <li><strong>専門性</strong>: ギター専門店はギターの価値を正確に評価できますが、総合買取店では過小評価されることがあります。逆もまた然りです。</li>
            <li><strong>時期・キャンペーン</strong>: 買取強化キャンペーンを実施している業者は、通常より高い査定額を出すことがあります。</li>
          </ul>

          <h3>相見積もりの実践方法</h3>

          <ol>
            <li><strong>ヒカカク！で一括査定</strong>: まず一度の入力で複数業者から見積もりを取得。最高値と最低値の差を把握します。</li>
            <li><strong>専門店にも直接問い合わせ</strong>: ギターならギター専門店、ピアノならピアノ専門店にも査定を依頼します。</li>
            <li><strong>最低3社、できれば5社以上</strong>: 比較する業者が多いほど、適正な相場がわかります。</li>
            <li><strong>査定額だけでなく条件も比較</strong>: 搬出費用、振込手数料、キャンセル料なども確認しましょう。</li>
          </ol>

          <div className="bg-gold/5 border border-gold/20 rounded-xl p-5 my-6">
            <p className="font-bold text-sm text-gold-dark mb-2">実例: Gibson Les Paul Standardの査定額の差</p>
            <ul className="text-sm space-y-1 text-warm-gray">
              <li>A社（総合買取）: 12万円</li>
              <li>B社（楽器専門）: 18万円</li>
              <li>C社（ギター特化）: 22万円</li>
            </ul>
            <p className="text-sm text-gold-dark font-bold mt-2">→ 最大10万円の差！</p>
          </div>

          <h2 id="tip2">コツ2: 付属品をすべて揃える（効果: 5〜20%アップ）</h2>

          <p>楽器の買取価格は、本体だけでなく<strong>付属品の有無によっても大きく変わります</strong>。買取業者は中古品として再販する際、付属品が揃っているほうが高値で販売できるため、その分を買取価格に反映してくれます。</p>

          <h3>楽器別の重要な付属品チェックリスト</h3>

          <h4>ギター・ベース</h4>
          <ul>
            <li>純正ハードケース / ギグバッグ（最も重要。ケースだけで数千〜1万円の価値があることも）</li>
            <li>保証書・購入証明書（正規品の証明。並行輸入品と正規品で査定が変わる）</li>
            <li>トレモロアーム、レンチ、六角レンチ</li>
            <li>取扱説明書</li>
            <li>純正の弦やピック（おまけ程度だが印象は良い）</li>
          </ul>

          <h4>ピアノ</h4>
          <ul>
            <li>椅子（純正品は特に重要）</li>
            <li>ピアノカバー</li>
            <li>保証書・購入時の領収書</li>
            <li>調律記録（調律師のカードや履歴書）</li>
            <li>メトロノーム、補助ペダル</li>
          </ul>

          <h4>管楽器</h4>
          <ul>
            <li>純正ケース（最重要）</li>
            <li>マウスピース（純正＋追加購入分も）</li>
            <li>リガチャー、スワブ、クリーニングクロス</li>
            <li>保証書・購入証明書</li>
            <li>リード（新品であれば）</li>
          </ul>

          <h4>電子楽器</h4>
          <ul>
            <li>電源アダプター（これがないと大幅減額）</li>
            <li>専用スタンド・ペダル</li>
            <li>取扱説明書</li>
            <li>USB ケーブル等の接続ケーブル</li>
          </ul>

          <h2 id="tip3">コツ3: クリーニングして見た目を整える（効果: 5〜15%アップ）</h2>

          <p>査定士も人間です。きれいに手入れされた楽器は「大切に使われてきた」という印象を与え、査定額にプラスの影響があります。逆に、ホコリまみれで汚れた楽器は、実際の状態より低く評価されることがあります。</p>

          <h3>楽器別のクリーニング方法</h3>

          <h4>ギター・ベース</h4>
          <ul>
            <li><strong>ボディ</strong>: 楽器用ポリッシュで拭き上げ（ラッカー塗装注意）</li>
            <li><strong>フレットボード</strong>: レモンオイルで保湿クリーニング</li>
            <li><strong>弦</strong>: 錆びた弦は新品に交換（コスト500〜1,000円で印象大幅改善）</li>
            <li><strong>金属パーツ</strong>: ペグ、ブリッジ、ピックアップカバーを専用クロスで磨く</li>
            <li><strong>フレット</strong>: 専用の磨き粉で曇りを取る</li>
          </ul>

          <h4>ピアノ</h4>
          <ul>
            <li><strong>塗装面</strong>: 柔らかい布で乾拭き（研磨剤NG）</li>
            <li><strong>鍵盤</strong>: 中性洗剤を薄めた液で拭き取り</li>
            <li><strong>内部</strong>: 蓋を開けてホコリを除去（無理に掃除しない）</li>
          </ul>

          <h4>管楽器</h4>
          <ul>
            <li><strong>外観</strong>: シルバーポリッシュまたはラッカーポリッシュで磨く</li>
            <li><strong>内部</strong>: スワブで水分・汚れを除去</li>
            <li><strong>キイ</strong>: キイオイルを差して動きを滑らかに</li>
          </ul>

          <p><strong>注意:</strong> クリーニングはあくまで「きれいにする」程度にとどめましょう。深いキズを研磨で消そうとすると、かえってダメージを与えることがあります。</p>

          <h2 id="tip4">コツ4: 売却のタイミングを見極める（効果: 5〜10%アップ）</h2>

          <p>楽器の買取需要は時期によって変動します。需要が高い時期に売却することで、通常よりも高い買取額を得られる可能性があります。</p>

          <h3>高く売れやすい時期</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">時期</th>
                  <th className="px-4 py-3 text-left font-medium">理由</th>
                  <th className="px-4 py-3 text-left font-medium">特に需要が高い楽器</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">2〜3月</td><td className="px-4 py-3">新学期・新生活で楽器を始める人が増加</td><td className="px-4 py-3 text-warm-gray">ギター、電子ピアノ、管楽器</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">6〜7月</td><td className="px-4 py-3">夏のボーナスで中古楽器の購入が増加</td><td className="px-4 py-3 text-warm-gray">高額ギター、アンプ</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">9〜10月</td><td className="px-4 py-3">文化祭シーズン。バンド活動の需要増</td><td className="px-4 py-3 text-warm-gray">エレキギター、ベース、ドラム</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">12月</td><td className="px-4 py-3">冬のボーナスとクリスマス需要</td><td className="px-4 py-3 text-warm-gray">全般</td></tr>
              </tbody>
            </table>
          </div>

          <h3>避けた方がいい時期</h3>

          <ul>
            <li><strong>年末年始（12月末〜1月初旬）</strong>: 買取業者の繁忙期で対応が遅れがち</li>
            <li><strong>お盆（8月中旬）</strong>: 同上</li>
            <li><strong>ゴールデンウィーク</strong>: 査定スタッフが減る時期</li>
          </ul>

          <p><strong>ただし、最も重要なのは「使わなくなったら早く売る」ことです。</strong>特に電子楽器は時間が経つほど価値が下がるため、「最適なタイミングを待つ」よりも「今すぐ売る」方が結果的に高く売れることが多いです。</p>

          <h2 id="tip5">コツ5: 最適な買取方法を選ぶ（効果: 状況次第で大きな差）</h2>

          <p>楽器の種類やあなたの状況によって、最適な買取方法は異なります。間違った方法を選ぶと、本来の価値よりも低い金額になってしまうことがあります。</p>

          <h3>4つの買取方法の特徴</h3>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">方法</th>
                  <th className="px-4 py-3 text-left font-medium">メリット</th>
                  <th className="px-4 py-3 text-left font-medium">デメリット</th>
                  <th className="px-4 py-3 text-left font-medium">向いている楽器</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">一括査定</td><td className="px-4 py-3">最高値が見つかる</td><td className="px-4 py-3">複数業者からの連絡</td><td className="px-4 py-3 text-warm-gray">全般（特に高額品）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">出張買取</td><td className="px-4 py-3">運搬不要・即日現金</td><td className="px-4 py-3">日程調整が必要</td><td className="px-4 py-3 text-warm-gray">ピアノ、大型楽器</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">店頭買取</td><td className="px-4 py-3">その場で現金化</td><td className="px-4 py-3">自分で持ち込む必要</td><td className="px-4 py-3 text-warm-gray">小型楽器（ギター等）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">宅配買取</td><td className="px-4 py-3">自宅で完結</td><td className="px-4 py-3">梱包の手間・輸送リスク</td><td className="px-4 py-3 text-warm-gray">小型・軽量楽器</td></tr>
              </tbody>
            </table>
          </div>

          <h3>楽器別のおすすめ売り方</h3>

          <ul>
            <li><strong>高額ギター（Gibson/Fender/PRS等）</strong>: ヒカカク！で一括査定 → 最高値業者に出張買取</li>
            <li><strong>一般的なギター</strong>: ティファナに店頭買取 or 宅配買取</li>
            <li><strong>グランドピアノ・アップライト</strong>: ウリエルで出張買取（搬出込み）</li>
            <li><strong>電子ピアノ（据え置き型）</strong>: ウリエルで出張買取</li>
            <li><strong>電子ピアノ（ポータブル）</strong>: ティファナで宅配 or 店頭買取</li>
            <li><strong>管楽器</strong>: ヒカカク！で一括査定（専門店に繋がる可能性大）</li>
            <li><strong>まとめ売り</strong>: ウリエルで出張買取（一度に全部引き取り）</li>
          </ul>

          <CtaBox />

          <h2 id="services">3社の使い分けガイド</h2>

          <p>ここまでの5つのコツを踏まえ、おすすめ3社の最適な使い分け方をまとめます。</p>

          <h3>ヒカカク！ ── まず最初に使うべきサービス</h3>

          <p>どの楽器を売る場合でも、<strong>まずはヒカカク！で一括査定</strong>を取ることをおすすめします。複数業者の査定額を比較することで、自分の楽器の「本当の価値」がわかります。これが「コツ1: 相見積もり」を最も効率的に実践する方法です。</p>

          <p>特に高額楽器（ギターで5万円以上、ピアノで10万円以上が期待できるもの）では、業者間の査定額の差が大きくなるため、一括査定のメリットが最大化されます。</p>

          <h3>ティファナ ── 手軽さを重視する場合</h3>

          <p>「査定額よりも手軽さを重視したい」「できるだけ早く売りたい」という場合はティファナがおすすめです。出張・店頭・宅配の3方式から選べるため、自分の都合に合わせやすいのが強みです。</p>

          <p>年間4万件の買取実績があり、楽器に限らず幅広いジャンルに対応しているため、「楽器と一緒にオーディオ機器やCDも売りたい」といったケースにも便利です。</p>

          <h3>ウリエル ── 大型楽器・まとめ売りに最適</h3>

          <p>ピアノやドラムセットなどの大型楽器、または複数の楽器をまとめて売りたい場合はウリエルの出張買取が最適です。自宅に来てくれるため、重い楽器を運ぶ必要がありません。</p>

          <p>「引っ越し前に楽器を全部処分したい」「趣味をやめたので機材一式を売りたい」といったケースでも、一度の出張ですべて完了します。</p>

          <CtaBox />

          {/* 楽器別ワンポイント */}
          <h2 id="by-instrument">楽器別 高く売るためのワンポイントアドバイス</h2>

          <p>楽器のジャンルによって、特に気をつけるべきポイントが異なります。あなたの楽器に該当する項目をチェックしましょう。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">楽器</th>
                  <th className="px-4 py-3 text-left font-medium">高く売るポイント</th>
                  <th className="px-4 py-3 text-left font-medium">詳細記事</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ギター</td><td className="px-4 py-3 text-warm-gray">弦交換・フレットボード清掃。改造パーツは純正に戻す</td><td className="px-4 py-3"><Link href="/articles/guitar-kaitori/" className="text-accent hover:underline">ギター買取ガイド</Link></td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">ピアノ</td><td className="px-4 py-3 text-warm-gray">調律記録があれば提示。搬出環境を事前に確認</td><td className="px-4 py-3"><Link href="/articles/piano-kaitori/" className="text-accent hover:underline">ピアノ買取ガイド</Link></td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">管楽器</td><td className="px-4 py-3 text-warm-gray">オーバーホール歴があれば伝える。マウスピースも一緒に</td><td className="px-4 py-3"><Link href="/articles/saxophone-kaitori/" className="text-accent hover:underline">管楽器買取ガイド</Link></td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">バイオリン</td><td className="px-4 py-3 text-warm-gray">鑑定書があれば必ず添付。弓も一緒に査定に出す</td><td className="px-4 py-3"><Link href="/articles/violin-kaitori/" className="text-accent hover:underline">弦楽器買取ガイド</Link></td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">ドラム</td><td className="px-4 py-3 text-warm-gray">スタンド・ペダル・シンバルもセットで。出張買取推奨</td><td className="px-4 py-3"><Link href="/articles/drum-kaitori/" className="text-accent hover:underline">ドラム買取ガイド</Link></td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">電子ピアノ</td><td className="px-4 py-3 text-warm-gray">早めに売る（年式が新しいほど高い）。椅子・ペダル付き</td><td className="px-4 py-3"><Link href="/articles/denshi-piano-kaitori/" className="text-accent hover:underline">電子ピアノ買取ガイド</Link></td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="faq">よくある質問</h2>

          <div className="space-y-4 mt-6">
            {[
              { q: "楽器を高く売るために最も効果的なことは何ですか？", a: "最も効果的なのは複数の買取業者に相見積もりを取ることです。同じ楽器でも業者によって数万円の差がつくことがあります。ヒカカク！を使えば一度の入力で複数業者に査定依頼でき、最高値を簡単に把握できます。" },
              { q: "楽器の付属品がない場合、買取価格はどのくらい下がりますか？", a: "付属品の有無による影響は楽器によって異なりますが、ケースがないと5〜15%、保証書がないと3〜10%程度の減額になることがあります。特にハードケースは単体でも価値があるため、必ず一緒に査定に出しましょう。" },
              { q: "楽器を売るのに最適な時期はいつですか？", a: "需要が高まる2〜3月（新学期前）とボーナス時期（6〜7月、12月）が高く売れる傾向にあります。ただし、電子楽器は時間が経つほど価値が下がるため、使わなくなったら早めに売ることが最も重要です。" },
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

          <h2>まとめ：5つのコツを実践して買取額を最大化</h2>

          <p>楽器を高く売るための5つのコツをおさらいします。</p>

          <ol>
            <li><strong>相見積もり</strong> — 複数業者に査定を依頼し、最高値を見つける（ヒカカク！で一括査定）</li>
            <li><strong>付属品を揃える</strong> — ケース・保証書・説明書をすべて添える</li>
            <li><strong>クリーニング</strong> — 見た目をきれいにして第一印象アップ</li>
            <li><strong>タイミング</strong> — 需要が高い時期を狙う（ただし早めの売却も重要）</li>
            <li><strong>方法選び</strong> — 楽器の種類に合った最適な買取方法を選ぶ</li>
          </ol>

          <p>この中で最も効果が大きいのは、圧倒的に<strong>「相見積もり」</strong>です。まずはヒカカク！で一括査定を取り、あなたの楽器の本当の価値を知ることから始めましょう。</p>

          <CtaBox />
        </div>

        <aside className="mt-12 pt-8 border-t border-warm-border">
          <h2 className="font-display text-lg font-bold mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/articles/guitar-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">ギター買取</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">ギター買取おすすめ3社比較</h3>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:border-gold/40 hover:shadow-md transition-all group">
              <span className="bg-gold/10 text-gold-dark text-xs font-bold px-2 py-0.5 rounded-full">買取方法</span>
              <h3 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">買取方法比較ガイド</h3>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}

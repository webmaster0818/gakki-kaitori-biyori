import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gakki-no-kaitoriyasan-hyoban/' },
  title: "楽器の買取屋さんの評判は怪しい？運営会社・店舗一覧・手数料を検証【2026年7月】",
  description: "「楽器の買取屋さん」の評判・口コミ・運営会社・買取方法・料金を公開情報で検証。査定料/出張料/キャンセル料0円・全国出張対応の実態、良い評判と気になる声の傾向、他社との比較まで中立的に整理します。",
  openGraph: {
    title: "楽器の買取屋さんの評判は怪しい？運営会社・店舗一覧・手数料を検証【2026年7月】",
    description: "「楽器の買取屋さん」の運営会社・買取方法・料金・評判の傾向を公開情報で中立的に検証。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "楽器の買取屋さんの評判", href: "/articles/gakki-no-kaitoriyasan-hyoban/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">1社だけで決めず、複数社の査定額を比べて最高値で売りましょう</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
      <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

const FAQ = [
  { q: "楽器の買取屋さんの運営会社はどこですか？", a: "UNI SOUND株式会社が運営しています（2025年に株式会社GRACEの楽器事業部から会社分割で独立）。古物商許可（神奈川県公安委員会 第451310006356号）を取得しています。なお古い記事では旧「株式会社GRACE」運営と記載されている場合があります。" },
  { q: "楽器の買取屋さんの買取方法は？", a: "出張・宅配・店頭の3方式に対応し、LINE査定での申込もできます。出張は公式で「全国出張買取対応・最短30分」と案内されていますが、地域や点数によっては出張非対応となる場合があるため、対応可否は事前確認をおすすめします。" },
  { q: "査定料や手数料はかかりますか？", a: "公式では査定料・出張料・キャンセル料などが0円（お客様負担0円）と案内されています。ただし宅配買取の送料負担や宅配時の入金日数については公式ページに明確な記載が見当たらないため、申込前にご確認ください。" },
  { q: "どんな楽器を買い取ってもらえますか？", a: "ギター・ベース・弦楽器・管楽器・ピアノ・電子ピアノ・シンセサイザー・ドラム・DJ/音響/レコーディング機材などに対応しています。一方、口コミでは和楽器（琴・三味線）やエレクトーン・一部の電子ピアノは買取を断られたという声もあるため、対応可否は事前確認が確実です。" },
  { q: "高く売るにはどうすればいいですか？", a: "楽器の買取価格は業者・時期・状態で数万円単位の差が出ます。楽器の買取屋さん1社だけで決めず、一括査定や他の専門店の見積もりと比較するのが最も確実に高く売るコツです。付属品（ケース・保証書・シールド等）を揃え、状態を清掃してから査定に出すと評価が上がりやすくなります。" },
];

export default function Page() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "楽器の買取屋さんの評判は怪しい？運営会社・店舗一覧・手数料を検証【2026年7月】", datePublished: "2026-07-08", dateModified: "2026-07-08", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  const crumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" }, { "@type": "ListItem", position: 2, name: "楽器の買取屋さんの評判", item: "https://gakkikaitori-biyori.com/articles/gakki-no-kaitoriyasan-hyoban/" }] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-3">楽器の買取屋さんの評判・口コミは？運営会社・買取方法・料金を検証【2026年7月】</h1>
        <p className="text-xs text-warm-gray mb-6">最終更新: 2026年7月8日／編集部調べ（各社公式・公開情報より）</p>

        <div className="bg-cream border border-warm-border rounded-2xl p-5 mb-8">
          <p className="font-bold mb-2 text-accent-dark">まず結論</p>
          <p className="text-sm leading-relaxed">「楽器の買取屋さん」は<strong>UNI SOUND株式会社</strong>が運営する楽器買取専門店で、<strong>古物商許可あり・出張/宅配/店頭に対応・査定料/出張料/キャンセル料0円</strong>を掲げています。出張は最短30分・その場で現金化とスピードが強み。一方で「和楽器・一部電子ピアノは対象外だった」「返信が遅い」といった声もあります。<strong>金額は業者で差が出るため、1社に絞らず複数社の査定を比較</strong>するのが失敗しないコツです。</p>
        </div>

        {/* conclusion-202607: 指名検索者の疑問に冒頭で即答 */}
        <div className="my-6 rounded-2xl border border-warm-border bg-cream p-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-warm-gray">まず結論</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>・<strong>運営会社</strong>：UNI SOUND株式会社（古物商許可：神奈川県公安委員会 第451310006356号）。実在する許可事業者です。</li>
            <li>・<strong>手数料</strong>：公式で査定料・出張料・キャンセル料が0円と案内されています（宅配時の送料・入金日数は公式に明記がないため要確認）。</li>
            <li>・<strong>買取方法</strong>：出張・宅配・店頭の3方式。店頭は全店舗で持ち込み対応（予約推奨）。</li>
            <li>・<strong>「怪しい」と感じたら</strong>：古物商許可番号が公開されている点は確認材料になります。ただし提示額の妥当性は1社では判断できないため、<strong>複数社の査定額を比べるのが確実</strong>です。</li>
          </ul>
          <p className="mt-3 text-xs text-warm-gray">※本ページは公式サイトおよび公開されている利用者の声をもとに、当編集部が中立の立場で整理したものです（2026年7月時点）。</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">運営会社・基本情報</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><tbody>
          <tr className="border-b border-warm-border"><th className="bg-cream text-left px-4 py-2 font-medium w-32">運営会社</th><td className="px-4 py-2">UNI SOUND株式会社（2025年に株式会社GRACE楽器事業部から会社分割で独立）※旧社名表記が残る記事があるため要確認</td></tr>
          <tr className="border-b border-warm-border"><th className="bg-cream text-left px-4 py-2 font-medium">古物商許可</th><td className="px-4 py-2">神奈川県公安委員会 第451310006356号</td></tr>
          <tr className="border-b border-warm-border"><th className="bg-cream text-left px-4 py-2 font-medium">所在地</th><td className="px-4 py-2">神奈川県横浜市中区新山下3-4-17 カリカチュアビル1F（宅配の送付先倉庫は横浜市金沢区）</td></tr>
          <tr className="border-b border-warm-border"><th className="bg-cream text-left px-4 py-2 font-medium">買取方法</th><td className="px-4 py-2">出張／宅配／店頭／LINE査定（法人・遺品/生前整理買取にも対応）</td></tr>
          <tr className="border-b border-warm-border"><th className="bg-cream text-left px-4 py-2 font-medium">対応地域</th><td className="px-4 py-2">公式は「全国出張買取対応」。ただし地域・点数により出張非対応の場合あり（要確認）</td></tr>
          <tr><th className="bg-cream text-left px-4 py-2 font-medium">手数料</th><td className="px-4 py-2">査定料・出張料・キャンセル料0円（公式）。宅配の送料負担・入金日数は公式に明記が乏しく要確認</td></tr>
        </tbody></table></div>
        <p className="text-xs text-warm-gray mt-2">※上記は各社公式・公開情報をもとに編集部が整理した2026年7月時点の内容です。最新の条件・対応可否は必ず公式サイトでご確認ください。</p>

        <CtaBox />

        <h2 className="text-xl font-bold mt-8 mb-3">評判・口コミの傾向（出典付き）</h2>
        <p className="text-sm text-warm-gray mb-3">出典：比較・買取系メディア（excite買取・買取探偵EX・みん評 等／調査時点2026年7月）。以下は口コミ本文の転載ではなく、内容の傾向を要約したものです。中立的な一次口コミ（Googleマップ等）の網羅的確認は限定的な点にご留意ください。</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-warm-border rounded-lg p-4"><p className="font-bold text-sm mb-2 text-accent-dark">好意的な声に多い内容</p><ul className="text-sm space-y-1 list-disc pl-5"><li>出張が早く来て、その場で現金化できた</li><li>電話・スタッフの対応が丁寧だった</li><li>他店より査定額が高かった</li><li>壊れた楽器でも対応してくれた</li></ul></div>
          <div className="border border-warm-border rounded-lg p-4"><p className="font-bold text-sm mb-2">気になる声に多い内容</p><ul className="text-sm space-y-1 list-disc pl-5"><li>和楽器（琴・三味線）・エレクトーン・一部電子ピアノは買取を断られた</li><li>返信が遅い／連絡が来ないことがあった</li><li>スタッフの知識にばらつきを感じた</li><li>査定担当のタバコ臭が気になった</li></ul></div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">メリット・デメリット（正直な整理）</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-warm-border rounded-lg p-4"><p className="font-bold text-sm mb-2 text-accent-dark">メリット</p><ul className="text-sm space-y-1 list-disc pl-5"><li>楽器買取専門店で幅広いジャンルに対応</li><li>出張最短30分・その場現金手渡しのスピード</li><li>査定料・出張料・キャンセル料0円を明示</li><li>古物商許可を取得した事業者</li></ul></div>
          <div className="border border-warm-border rounded-lg p-4"><p className="font-bold text-sm mb-2">デメリット・注意点</p><ul className="text-sm space-y-1 list-disc pl-5"><li>和楽器・エレクトーン・一部電子ピアノは対象外の場合あり</li><li>宅配の送料・入金日数など一部条件が公式で分かりにくい</li><li>出張は地域・点数により非対応の場合あり</li><li>金額は1社だけでは相場か判断しづらい（比較推奨）</li></ul></div>
        </div>

        <div className="bg-cream border border-warm-border rounded-2xl p-5 my-8">
          <p className="font-bold mb-2 text-accent-dark">後悔しない売り方＝複数社で比較</p>
          <p className="text-sm leading-relaxed">楽器の買取価格は業者・時期・状態で数万円単位の差が出ます。楽器の買取屋さんを検討する場合も、<strong>一括査定や他の専門店の見積もりと比べてから決める</strong>のが確実です。当サイトの<a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark underline font-medium">楽器買取おすすめ業者比較</a>や<a href="/articles/mercari-vs-gyosha/" className="text-accent-dark underline font-medium">フリマ vs 買取業者の比較</a>もあわせてご覧ください。</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">店舗一覧（店頭買取・持ち込み対応）</h2>
        <p className="text-sm mb-3">楽器の買取屋さんは全国に店舗を展開しており、<strong>全店舗で店頭買取（持ち込み）に対応</strong>しています（来店前の電話予約でよりスムーズに対応可能と公式に案内されています）。以下は公式店舗ページで確認できる店舗の一覧です（2026年7月10日時点・当サイト確認）。住所詳細・営業時間・電話番号は<a href="https://gakkikaitori.co.jp/kaitori/shop/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">公式の店舗一覧ページ</a>でご確認ください。</p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
            <thead className="bg-cream"><tr><th className="px-3 py-2 text-left border-b border-warm-border">地方</th><th className="px-3 py-2 text-left border-b border-warm-border">店舗（所在地）</th></tr></thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b border-warm-border font-medium whitespace-nowrap">東北・関東</td><td className="px-3 py-2 border-b border-warm-border">宮城岩沼店（宮城県岩沼市）／宇都宮店（栃木県宇都宮市）／群馬桐生店（群馬県桐生市）／大宮店（さいたま市大宮区）／柏店（千葉県柏市）／上野店（東京都台東区）／池袋店（東京都豊島区）／横浜店（横浜市中区）／厚木店（神奈川県厚木市）</td></tr>
              <tr><td className="px-3 py-2 border-b border-warm-border font-medium whitespace-nowrap">北陸・甲信越</td><td className="px-3 py-2 border-b border-warm-border">新潟店（新潟市西区）／金沢店（石川県金沢市）／石川小松店（石川県小松市）／福井花堂中店（福井県福井市）／甲府千塚店（山梨県甲府市）／長野松本店（長野県松本市）</td></tr>
              <tr><td className="px-3 py-2 border-b border-warm-border font-medium whitespace-nowrap">東海</td><td className="px-3 py-2 border-b border-warm-border">富士津田店（静岡県富士市）／豊川店（愛知県豊川市）／名古屋守山店（名古屋市守山区）／名古屋栄店（名古屋市中区）</td></tr>
              <tr><td className="px-3 py-2 border-b border-warm-border font-medium whitespace-nowrap">関西</td><td className="px-3 py-2 border-b border-warm-border">大阪門真店（大阪府門真市）／大阪心斎橋店（大阪市中央区）／奈良神殿店（奈良県奈良市）</td></tr>
              <tr><td className="px-3 py-2 border-b border-warm-border font-medium whitespace-nowrap">中国・四国・九州</td><td className="px-3 py-2 border-b border-warm-border">広島店（広島市安佐北区）／高松店（香川県高松市）／福岡店（福岡県柳川市）／鹿児島店（鹿児島県鹿児島市）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-6">※店舗の開店・閉店・移転があるため、来店前に必ず公式サイトで最新の店舗情報をご確認ください。近くに店舗がない場合も、出張買取・宅配買取が利用できます。</p>

        <div className="my-6 rounded-lg border border-warm-border bg-white p-5">
          <p className="mb-2 text-sm font-bold">お住まいの地域で他社とも比べる</p>
          <p className="mb-3 text-sm leading-relaxed text-warm-gray">楽器の買取屋さんを含め、その地域で選べる買取店をまとめて比較できます。</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/articles/fukuoka-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">福岡・博多</Link>
            <Link href="/articles/nagoya-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">名古屋</Link>
            <Link href="/articles/yokohama-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">横浜</Link>
            <Link href="/articles/shinjuku-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">新宿</Link>
            <Link href="/articles/kobe-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">神戸</Link>
            <Link href="/articles/sendai-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">仙台</Link>
            <Link href="/articles/shibuya-gakki-kaitori/" className="rounded-full border border-warm-border px-3 py-1.5 text-xs hover:border-accent">渋谷</Link>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">よくある質問</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (<div key={f.q} className="border border-warm-border rounded-lg p-4"><p className="font-bold text-sm mb-1">Q. {f.q}</p><p className="text-sm text-warm-gray leading-relaxed">A. {f.a}</p></div>))}
        </div>

        <RelatedArticles currentSlug="gakki-no-kaitoriyasan-hyoban" relatedSlugs={["gakki-kaitori-osusume", "mercari-vs-gyosha", "guitar-kaitori", "souba-ranking"]} />
      </article>
    </>
  );
}

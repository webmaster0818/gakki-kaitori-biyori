import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import DealerComparisonTable from "@/components/DealerComparisonTable";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/articles/gakki-kaitori-sagi/' },
  title: "【2026年最新】楽器買取の詐欺・トラブル事例と回避策｜安心して売るための注意点",
  description: "ピアノの出張買取で困ったら？クーリング・オフ（書面受領から8日・メールでも可）、引渡しの拒絶、査定を超えた勧誘の禁止を消費者庁の説明で整理。楽器買取の詐欺パターンと対処法、偽サイトの確かめ方も解説します。",
  openGraph: { images: ["/og-image.png"], 
    title: "【2026年最新】楽器買取の詐欺・トラブル事例と回避策｜安心して売るための注意点",
    description: "楽器買取の詐欺・トラブルを防ぐ方法と安心して売るための注意点を解説します。",
  },
};

function Breadcrumb() {
  const items = [{ name: "ホーム", href: "/" }, { name: "楽器買取 詐欺 注意点", href: "/articles/gakki-kaitori-sagi/" }];
  return (<nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3"><ol className="flex flex-wrap items-center text-xs text-warm-gray">{items.map((item, i) => (<li key={item.href} className="flex items-center">{i > 0 && <span className="breadcrumb-sep" />}{i === items.length - 1 ? (<span className="text-foreground font-medium">{item.name}</span>) : (<Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>)}</li>))}</ol></nav>);
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">楽器の買取価格を今すぐチェック</p>
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
      { "@type": "Question", name: "楽器買取で詐欺に遭わないためにはどうすればよいですか？", acceptedAnswer: { "@type": "Answer", text: "複数業者に査定を依頼する、古物商許可番号を確認する、口コミを確認する、手数料が明確な業者を選ぶ、の4つが基本的な対策です。本記事で紹介している3社も、申し込む前に返送料などの条件を公式サイトでご確認ください。" } },
      { "@type": "Question", name: "出張買取で強引に買い取られた場合はどうすればよいですか？", acceptedAnswer: { "@type": "Answer", text: "訪問買取には特定商取引法に基づくクーリングオフが適用されます。契約書面を受け取った日から8日以内であれば、書面または電磁的記録（電子メール等）で通知することで、無条件で契約を解除できます。" } },
      { "@type": "Question", name: "事前査定額と実際の買取額が違った場合は？", acceptedAnswer: { "@type": "Answer", text: "事前査定はあくまで概算です。ただし、大幅に減額する業者には注意が必要です。事前に「この写真の状態で○万円か」を確認し、減額の条件を明確にしておいてください。" } },
      { "@type": "Question", name: "楽器買取のトラブルはどこに相談すればよいですか？", acceptedAnswer: { "@type": "Answer", text: "消費者ホットライン（188）に電話すれば、最寄りの消費生活センターにつながります。明らかな詐欺の場合は警察に被害届を出してください。" } },
      { "@type": "Question", name: "信頼できる買取業者の見分け方は？", acceptedAnswer: { "@type": "Answer", text: "古物商許可番号の明記、会社所在地・連絡先の明示、手数料の明確さ、口コミの良さ、の4点をご確認ください。" } }
  ]};
  const articleData = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】楽器買取の詐欺・トラブル事例と回避策｜安心して売るための注意点", datePublished: "2026-04-26", dateModified: "2026-11-08", author: { "@type": "Organization", name: "楽器買取びより" }, publisher: { "@type": "Organization", name: "楽器買取びより" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"ホーム\", \"item\": \"https://gakkikaitori-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"記事一覧\", \"item\": \"https://gakkikaitori-biyori.com/articles/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"【2026年最新】楽器買取の詐欺・トラブル事例と回避策｜安心して売るための注意点\", \"item\": \"https://gakkikaitori-biyori.com/articles/gakki-kaitori-sagi/\"}]}" }} /></>);
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8" style={{ ["--subhero" as string]: "url(/images/subhero/howto-gakki-kaitori-sagi.webp)", ["--subhero-m" as string]: "url(/images/subhero/howto-gakki-kaitori-sagi-m.webp)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">詐欺・注意点</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">【2026年最新】楽器買取の詐欺・トラブル事例と回避策｜安心して売るための注意点</h1>
          <p className="text-warm-gray text-sm leading-relaxed">楽器買取で詐欺やトラブルに遭わないための注意点を解説します。よくある詐欺パターン、悪質業者の見分け方、安心して売るためのチェックリスト、被害に遭った場合の対処法まで。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年11月8日</p>
        </header>

        <section id="answer" className="bg-white border border-warm-border rounded-xl p-5 mb-8">
          <h2 className="font-bold text-lg mb-2">ピアノの出張買取で困ったときの答え（特定商取引法の「訪問購入」）</h2>
          <p className="text-sm text-warm-gray leading-relaxed mb-3">業者が自宅に来てピアノなどを買い取る取引は、特定商取引法の「訪問購入」にあたります。消費者庁「特定商取引法ガイド」の訪問購入のページ（2026年11月8日確認）に書かれているルールは次のとおりです。</p>
          <div className="table-wrapper mb-3">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-3 py-2 text-left font-medium whitespace-nowrap">困っていること</th><th className="px-3 py-2 text-left font-medium">法律上のルール（消費者庁の説明）</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-3 py-2 font-medium">売った後で取り消したい</td><td className="px-3 py-2">法律で決められた書面を受け取った日から数えて8日以内なら、書面または電磁的記録（電子メール等）で申込みの撤回・契約の解除（クーリング・オフ）ができます。損害賠償や違約金を払う必要はありません。</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">すぐに運び出すと言われた</td><td className="px-3 py-2">クーリング・オフの期間内は、業者に品物の引渡しを拒むことができます。業者は、期間内に品物を受け取るときは、引渡しを拒めることを告げなければなりません。</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">査定だけ頼んだのに売るよう迫られた</td><td className="px-3 py-2">頼んでいない勧誘は禁止されています（不招請勧誘の禁止）。査定の依頼を受けただけなのに、査定を超えて勧誘することは法に抵触します。断った後に勧誘を続けることも禁止されています。</td></tr>
                <tr className="bg-cream/50"><td className="px-3 py-2 font-medium">ピアノも対象になるか</td><td className="px-3 py-2">対象外になる物品は政令で決められています。消費者庁の具体例（自動車、持ち運びが容易でない家電、家具、書籍、有価証券、CD・DVD等）に楽器は挙がっていません。</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-medium">相談先</td><td className="px-3 py-2">消費者ホットライン「188」（最寄りの消費生活センター等を案内）。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray leading-relaxed mb-2">出典：<a href="https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" target="_blank" rel="noopener noreferrer" className="underline">消費者庁 特定商取引法ガイド「訪問購入」</a>・<a href="https://www.no-trouble.caa.go.jp/pdf/20230421la02_10.pdf" target="_blank" rel="noopener noreferrer" className="underline">特定商取引に関する法律施行令第34条で規定する物品の具体例</a>（いずれも2026年11月8日確認）。国民生活センターの発表（2023年9月27日）では、訪問購入の相談は2022年度に7,722件でした（<a href="https://www.kokusen.go.jp/news/data/n-20230927_1.html" target="_blank" rel="noopener noreferrer" className="underline">国民生活センター</a>）。このルールは、業者が自宅など店舗以外の場所で買い取る場合のものです（店頭への持ち込みは対象外）。</p>
          <h3 className="font-bold text-base mt-4 mb-2">「楽器の買取屋さん」の偽サイトが心配な場合</h3>
          <p className="text-sm text-warm-gray leading-relaxed">2026年11月8日時点で、楽器の買取屋さんの公式サイトの新着情報に、偽サイトについての注意喚起は見当たりませんでした。公式サイトのアドレスは gakkikaitori.co.jp です（gakkikaitori.jp も同じ公式サイトへ転送されます）。申し込む前に、ページ下部の古物営業許可番号（神奈川県公安委員会 第451310006356号）と運営会社名（UNI SOUND株式会社）が表示されていることを確認してください。<Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline hover:text-accent-dark">楽器の買取屋さんの基本情報</Link>もあわせてご覧ください。</p>
        </section>

        <div className="article-body">

          <h2 id="overview">楽器買取で注意すべき詐欺・トラブル</h2>
          <p>楽器買取サービスの多くは健全に運営されていますが、中には悪質な業者も存在します。大切な楽器を不当に安く買い叩かれたり、査定後に強引に買取を迫られたりするトラブルが報告されています。</p>
          <p>本記事では、<strong>楽器買取でよくある詐欺・トラブルのパターンと、それを回避するための具体的な対策</strong>を解説します。事前に知識を持っておくことで、安心して楽器を売却できます。</p>

          <h2 id="patterns">よくある詐欺・トラブルパターン</h2>
          <h3>パターン1: 事前査定と実際の買取額が大幅に違う</h3>
          <p>Webや電話での事前査定では高額を提示しておきながら、実際に楽器を送った後や出張査定の現場で「傷がある」「状態が悪い」などの理由をつけて大幅に減額するケースです。</p>
          <p><strong>対策:</strong> 事前査定の段階で、減額の条件や基準をご確認ください。写真を詳細に送り、「この写真の状態で○万円ですか？」と確認を取ることが重要です。</p>

          <h3>パターン2: 宅配買取で返送時に高額な送料を請求</h3>
          <p>「送料無料」と謳いながら、査定後にキャンセルすると高額な返送料を請求されるケースです。楽器は大きく重いため、返送料が5,000〜10,000円になることもあります。</p>
          <p><strong>対策:</strong> 申し込み前に「キャンセル時の返送料」を必ずご確認ください。本記事で紹介している3社の公式サイトの表記（2026年10月29日確認）は次のとおりです。ティファナの宅配買取は、返却を希望した場合の送料を同社が負担します（取扱対象外の品物は利用者の送料負担。宅配買取は現在一時停止中）。ウリエルは宅配買取を行っておらず、出張・店頭・催事での買取です。ヒカカク！は一括査定の窓口で、利用は無料ですが、返送料などの条件は実際に依頼する業者ごとに異なります。</p>

          <h3>パターン3: 出張買取での強引な買い取り</h3>
          <p>出張査定に来た業者が、査定額に納得していないのに「もう来たので」「今日中に決めてくれれば」などと言って、強引に買取を迫るケースです。</p>
          <p><strong>対策:</strong> 査定額に納得できない場合は、はっきりと「お断りします」と伝えてください。法律上、訪問買取は8日間のクーリングオフが適用されます。</p>

          <h3>パターン4: 楽器の価値を知らない業者による過小評価</h3>
          <p>これは詐欺ではありませんが、楽器の知識が乏しい総合リサイクルショップに持ち込んだ結果、ヴィンテージギターやプロ仕様の管楽器が数千円で買い叩かれるケースです。</p>
          <p><strong>対策:</strong> 楽器は必ず楽器に詳しい専門業者に査定を出してください。ヒカカク！では最大20社に一括で査定を依頼でき、複数の業者の査定額を比べられます。</p>

          <h3>パターン5: 個人間取引（フリマアプリ）でのトラブル</h3>
          <p>メルカリやヤフオクで楽器を売る際、「商品が説明と違う」とクレームをつけられ、返品・返金を強要されるケースがあります。楽器は状態の判断が主観的な部分もあるため、トラブルになりやすいジャンルです。</p>
          <p><strong>対策:</strong> 個人間取引のリスクを避けたい場合は、信頼できる買取業者をご利用ください。</p>

          <CtaBox />
          <p className="text-sm">一括査定サービスそのものの評判や注意点（キャンセル方法・電話連絡・個人情報）は <Link href="/articles/hikakaku-gakki-kaitori-kuchikomi/" className="text-accent underline hover:text-accent-dark">ヒカカクの楽器買取 口コミ・評判</Link> で公式クチコミの傾向を出典付きで整理しています。</p>
        {/* piano-sagi-202609: GSC実測「ピアノ買取 詐欺」36imp pos22.2 がこの記事に着地している。
            ピアノは運び出しが絡むぶんトラブルの形が他の楽器と違うので、独立した節にする。 */}
        <h2 className="text-xl font-bold mt-12 mb-4">ピアノの買取で起きやすいトラブル</h2>
        <p className="text-sm leading-relaxed mb-4">
          ピアノは他の楽器と違い、<strong>運び出しが必ず伴います。</strong>そのぶん、金額以外のところでもめやすくなります。
          「ピアノ買取 詐欺」と調べている方は、次の3つを先に確認してください。
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-white border border-warm-200 p-5">
            <p className="text-sm font-medium mb-2">① 搬出費用が後から出てくる</p>
            <p className="text-sm text-warm-gray leading-relaxed">
              査定額は伝えられたのに、当日になって階段作業料・クレーン費用・床養生費を差し引かれる、という形です。
              <strong>見積もりの時点で「差し引かれる費用が他にあるか」を必ず聞き、金額を書面かメッセージで残してください。</strong>
              ピアノは設置場所（2階以上か、エレベーターの有無、通路幅）で作業が変わるため、
              建物の条件を伝えずに出た金額は、そもそも確定額ではありません。
            </p>
          </div>
          <div className="bg-white border border-warm-200 p-5">
            <p className="text-sm font-medium mb-2">② 「処分費がかかる」と言われて0円、あるいは支払いを求められる</p>
            <p className="text-sm text-warm-gray leading-relaxed">
              古い機種や状態の悪いピアノでは、実際に買取額がつかないことはあります。問題は、
              <strong>その説明が搬出当日に、他の選択肢がなくなった状態で出てくる</strong>ことです。
              その場で決めず、いったん中止して構いません。断ったことで費用を請求される契約になっていないか、
              申し込み時の書面を確認してください。
            </p>
          </div>
          <div className="bg-white border border-warm-200 p-5">
            <p className="text-sm font-medium mb-2">③ 訪問が「ピアノ以外」に広がる</p>
            <p className="text-sm text-warm-gray leading-relaxed">
              ピアノの査定で家に上がったあと、貴金属や時計の話に移る形です。
              <strong>頼んでいない品物の話が始まったら、その場で断って構いません。</strong>
              買取の訪問には特定商取引法のクーリング・オフが適用される場合があります。
              不安があれば、消費者ホットライン（188）に相談できます。
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-8">
          ピアノを売ること自体が危険なわけではありません。
          <strong>建物の条件を先に伝え、差し引かれる費用を含めた金額を文字で受け取り、当日に決めない。</strong>
          この3つで、ここに挙げたトラブルはほぼ避けられます。
        </p>


          <h2 id="checklist">安心して楽器を売るためのチェックリスト</h2>
          <ul>
            <li><strong>複数業者に査定を依頼しているか</strong>: 1社だけの査定は危険。必ず3社以上に見積もりを取る</li>
            <li><strong>査定料・出張料・送料・キャンセル料が無料か</strong>: 有料の場合は注意が必要</li>
            <li><strong>会社の所在地・連絡先が明記されているか</strong>: 住所不明の業者は避ける</li>
            <li><strong>古物商許可番号が公開されているか</strong>: 買取業を行うには古物商許可が必要</li>
            <li><strong>口コミ・評判を確認したか</strong>: Google口コミやSNSで評判をチェック</li>
            <li><strong>事前査定額の根拠を説明してくれるか</strong>: 根拠なく高額を提示する業者は注意が必要</li>
            <li><strong>クーリングオフの説明があるか</strong>: 訪問買取は8日間のクーリングオフが法律で保障されている</li>
          </ul>

          <h2 id="safe">安心して利用できる買取サービス3選</h2>
          <p>本記事で紹介している3社の料金を、公式サイトの表記で整理しました（2026年10月29日確認）。<strong>いずれも査定は無料</strong>です。返送料など、業者によって条件が異なる項目は申し込み前にご確認ください。</p>
          <div className="table-wrapper mb-6"><table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden"><thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">ヒカカク！</th><th className="px-4 py-3 text-left font-medium">ティファナ</th><th className="px-4 py-3 text-left font-medium">ウリエル</th></tr></thead><tbody className="divide-y divide-warm-border">
            <tr className="bg-white"><td className="px-4 py-3 font-medium">査定料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">出張料</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
            <tr className="bg-white"><td className="px-4 py-3 font-medium">キャンセル料</td><td className="px-4 py-3">利用は無料（査定額に納得しなければ買取依頼は不要）</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
            <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">返送料</td><td className="px-4 py-3">依頼先の業者による</td><td className="px-4 py-3">無料（取扱対象外の品物は自己負担・宅配買取は一時停止中）</td><td className="px-4 py-3">—（宅配買取なし）</td></tr>
          </tbody></table></div>

          <CtaBox />

          <h2 id="trouble">トラブルに遭った場合の対処法</h2>
          <h3>クーリングオフの行使</h3>
          <p>訪問買取（出張買取）で売却した場合、<strong>特定商取引法に基づき8日間のクーリングオフ</strong>が適用されます。契約書面を受け取った日から8日以内であれば、書面または電磁的記録（電子メール等）で通知することで、無条件で契約を解除できます。</p>
          <h3>消費生活センターへの相談</h3>
          <p>トラブルに遭った場合は、<strong>消費者ホットライン（188）</strong>に電話すれば、最寄りの消費生活センターにつながります。専門の相談員が対応してくれます。</p>
          <h3>警察への相談</h3>
          <p>明らかな詐欺行為（偽物とすり替えられた、代金が振り込まれない等）があった場合は、警察に被害届を出してください。</p>

          <h2 id="faq">よくある質問</h2>
          <div className="space-y-4 mt-6">
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">楽器買取で詐欺に遭わないためにはどうすればよいですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">複数業者に査定を依頼する、古物商許可番号を確認する、口コミを確認する、手数料が明確な業者を選ぶ、の4つが基本的な対策です。本記事で紹介している3社も、申し込む前に返送料などの条件を公式サイトでご確認ください。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">出張買取で強引に買い取られた場合はどうすればよいですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">訪問買取には特定商取引法に基づくクーリングオフが適用されます。契約書面を受け取った日から8日以内であれば、書面または電磁的記録（電子メール等）で通知することで、無条件で契約を解除できます。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">事前査定額と実際の買取額が違った場合は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">事前査定はあくまで概算です。ただし、大幅に減額する業者には注意が必要です。事前に「この写真の状態で○万円か」を確認し、減額の条件を明確にしておいてください。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">楽器買取のトラブルはどこに相談すればよいですか？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">消費者ホットライン（188）に電話すれば、最寄りの消費生活センターにつながります。明らかな詐欺の場合は警察に被害届を出してください。</div></details>
            <details className="bg-white rounded-xl border border-warm-border overflow-hidden"><summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">信頼できる買取業者の見分け方は？</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">古物商許可番号の明記、会社所在地・連絡先の明示、手数料の明確さ、口コミの良さ、の4点をご確認ください。</div></details>
          </div>

          <h2>まとめ</h2>
          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>手軽に売りたい</strong> → ティファナで宅配/店頭買取（店舗は東京都・埼玉県のみ・宅配は一時停止中）</li>
            <li><strong>自宅で完結したい</strong> → ウリエルで出張買取</li>
          </ul>
          <CtaBox />
        </div>
          <DealerComparisonTable heading="信頼できる楽器買取業者の見分け方（公式情報のある主要7社）" intro="詐欺被害を避けるには、公式サイトで店舗情報・運営会社・査定の透明性を確認することが重要です。下表は実在が公式に確認できる主要7社です。" />


        <RelatedArticles
          currentSlug="gakki-kaitori-sagi"
          relatedSlugs={["hikakaku-gakki-kaitori-kuchikomi", "piano-kaitori", "guitar-kaitori", "drum-kaitori", "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori", "senmonten-vs-recycle", "mercari-vs-gyosha", "gakki-kaitori-vs-kojin-baibai", "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "takaku-uru-kotsu"]}
        />
      </article>
    </>
  );
}

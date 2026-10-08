import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

const UPDATED = "2026-10-08";
const UPDATED_JA = "2026年10月8日";
const URL = "https://gakkikaitori-biyori.com/articles/hikakaku-gakki-kaitori-kuchikomi/";
const TITLE = "ヒカカクの楽器買取 口コミ・評判は？一括査定の仕組み・流れ・注意点【2026年10月最新】";
const DESC =
  "ヒカカク！で楽器を売る前に知りたい口コミ・評判を、公式クチコミの評価分布（総合3.4・1,083件）と傾向から出典付きで整理。無料・最大20社の一括査定の仕組み、楽器カテゴリ（1,117社掲載）の使い方、ギター・ピアノを出す流れ、キャンセル・電話連絡の注意点、向いている人まで解説。";

const faqs = [
  {
    q: "ヒカカク！の楽器買取は無料ですか？",
    a: "公式のよくあるご質問に「完全無料でご利用いただけます」と明記されています。利用規約第6条でも「当社がユーザーに対して請求する費用は原則無料」です。査定結果を見て売らない選択をしても料金はかかりません。",
  },
  {
    q: "ヒカカク！が楽器を査定・買取するのですか？",
    a: "いいえ。公式FAQに「ヒカカク！では買取業者のご紹介のみ行っており、査定や買取に関しましては直接買取業者よりご連絡」とあります。査定額を出すのも買い取るのも、紹介先の各買取店です。",
  },
  {
    q: "ピアノやドラムなど大型の楽器も一括査定できますか？",
    a: "できます。ピアノは「ピアノ」の専用カテゴリ（2026年10月8日時点で616社掲載）、ドラム・ギター・管楽器などは「楽器」カテゴリ（同1,117社掲載）です。大型楽器は申込時の買取方法で「出張」を選んでおくと、自宅まで引き取りに来る業者が見つかりやすくなります。",
  },
  {
    q: "査定後にキャンセルしたいときは？",
    a: "公式FAQでは、申込後は買取業者と直接取引になるため、キャンセルは業者へ直接連絡するよう案内されています。ヒカカク！側でまとめて取り消す仕組みはありません。査定価格に納得しなければ買取依頼をやめてよいことは、使い方ガイドに明記されています。",
  },
  {
    q: "査定結果はいつ届きますか？届かないこともありますか？",
    a: "使い方ガイドには「最短1日で登録したアドレスにメールが届きます」とあります。一方でFAQには、商品の状態や年代によっては買取不可となり、1社からも査定結果が返信されないことがあると明記されています。",
  },
  {
    q: "ヒカカク！の口コミは悪いものが多いのですか？",
    a: "公式クチコミページ（2026年10月8日時点）では総合評価3.4、星5が425件、星1が266件で、公式自身が「悪い・ひどい・買取が安いというクチコミの比率は32.5%」と表示しています。気になる内容は電話の多さと見積もり業者数の少なさに集中しています。詳しくは本文の評判の章をご覧ください。",
  },
];

function CtaBox({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8 text-center not-prose">
      <p className="font-bold text-base mb-2 text-accent-dark">{title}</p>
      <p className="text-sm text-warm-gray mb-4">{lead}</p>
      <p className="text-xs text-warm-gray mb-3">
        <span className="inline-block align-middle border border-warm-gray/50 rounded px-1.5 py-0.5 mr-2 text-[11px] font-bold tracking-wide">PR</span>
        ヒカカク！（買取価格比較サイト・最大20社に一括査定・完全無料）
      </p>
      <a
        href="https://hikakaku.com"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md"
      >
        楽器の一括査定で最高値を調べる →
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { images: ["/og-image.png"], title: TITLE, description: DESC, url: URL, type: "article" },
};

function Schemas() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESC,
    datePublished: UPDATED,
    dateModified: UPDATED,
    mainEntityOfPage: URL,
    author: { "@type": "Organization", name: "楽器買取びより", url: "https://gakkikaitori-biyori.com/author/" },
    publisher: { "@type": "Organization", name: "楽器買取びより" },
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gakkikaitori-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gakkikaitori-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "ヒカカクの楽器買取 口コミ・評判", item: URL },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}

export default function HikakakuGakkiKuchikomiPage() {
  return (
    <>
      <Schemas />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">ヒカカクの楽器買取 口コミ・評判</span></li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">サービス評判</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年10月最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">ヒカカクの楽器買取 口コミ・評判は？一括査定の仕組み・流れ・注意点</h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            「楽器を一括査定に出したいけれど、ヒカカク！の評判は実際どうなのか」を知りたい方向けに、公式サイトと公式クチコミページを{UPDATED_JA}に確認して整理しました。本文の口コミは転載せず、評価分布と内容の傾向だけを出典付きで示します。本記事は広告（PR）リンクを含みます。
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: {UPDATED_JA}</p>
        </header>

        <section className="article-body space-y-4 text-[15px] leading-relaxed">
          <h2 id="conclusion">結論：ヒカカクの楽器買取はこんな人向け</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ヒカカク！は<strong>買取店を紹介する比較サイト</strong>で、自社では査定も買取もしない。利用は<strong>完全無料</strong>、最大20社から査定結果がメールで届く。</li>
            <li>楽器カテゴリは<strong>1,117社・39,236点</strong>、ピアノは別カテゴリで<strong>616社・854点</strong>の掲載（2026年10月8日時点の公式カテゴリページ表記）。</li>
            <li>公式クチコミは<strong>総合3.4・1,083件</strong>。良い声は「一度の入力で複数社から返事」「買取不可でも丁寧」、気になる声は「電話が多い」「見積もり業者が少ない」。</li>
            <li>向いているのは<strong>型番が分かる楽器で複数社の相見積もりを取りたい人</strong>。電話連絡を避けたい人や、今日中に現金化したい人には向かない。</li>
          </ul>

          <CtaBox title="楽器の買取価格を複数社で比較" lead="メーカー・型番・状態を入力するだけ。査定額に納得できなければ売らなくてOKです。" />

          <h2 id="about">ヒカカク！とは（仕組み・運営会社・楽器カテゴリ）</h2>
          <p>
            ヒカカク！（hikakaku.com）は「買取価格比較サイト」です。公式の使い方ガイドでは、できることを「一括査定の申し込み」「買取業者を見つける」「買取相場を知る」の3つに整理しています。
            本記事で扱う一括査定は、<strong>商品情報を送ると最大20社から査定結果がメールで届き、価格を比較して納得した業者にだけ買取を申し込む</strong>仕組みです。
          </p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream w-36">サービス名</th><td className="px-4 py-3">ヒカカク！（買取価格比較サイト）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">運営会社</th><td className="px-4 py-3">株式会社じげん（ZIGExN Co., Ltd.）東京都港区虎ノ門3-4-8／代表責任者 平尾 丈</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">許可・表記</th><td className="px-4 py-3">古物営業法に基づき都道府県公安委員会の許可を取得と表記。アフィリエイトプログラムを利用したサービス紹介を行う旨も明記</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">料金</th><td className="px-4 py-3">完全無料（利用規約第6条「当社がユーザーに対して請求する費用は原則無料」）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">査定社数</th><td className="px-4 py-3">最大20社から査定結果（買取不可の場合は返信が無いこともある）</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">買取方法</th><td className="px-4 py-3">宅配・出張・店頭から最大3つを希望として選択</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">楽器カテゴリ</th><td className="px-4 py-3">掲載 39,236点・1,117社。直近1年の買取実績は「最低1円〜最高1,700,000円」と表示。絞り込みにギター・ベース・アンプ・エフェクター・管楽器・弦楽器・ドラム・電子ピアノ・DTM機材・PA機器など</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">ピアノカテゴリ</th><td className="px-4 py-3">掲載 854点・616社。直近1年の買取実績は「最低100円〜最高1,000,000円」と表示。ヤマハ・カワイのアップライト／グランドで絞り込み可</td></tr>
                <tr className="bg-white"><th className="px-4 py-3 text-left font-medium bg-cream">利用規模</th><td className="px-4 py-3">「月間300万人以上が利用する買取比較サイト」（使い方ガイドの記載）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※ 数値はいずれも2026年10月8日に公式サイトの各ページを確認したもの。掲載点数・社数は日々変動します。</p>
          <p>
            押さえておきたいのは、<strong>ヒカカク！自身は査定も買取もしない</strong>点です。公式FAQに「買取業者のご紹介のみ行っており、査定や買取に関しましては直接買取業者よりご連絡」とあり、利用規約第5条でも「一切の買取業務は行わず、金銭の授受には関与しない」「取引の成立・内容について保証しない」と定められています。
            査定額の妥当性や対応の良し悪しは<strong>紹介先の買取店ごとに違う</strong>ため、届いた査定を比べて選ぶ作業が利用者側に残ります。当サイトの<Link href="/articles/gakki-kaitori-osusume/" className="text-accent underline hover:text-accent-dark">楽器買取おすすめ業者3社の比較</Link>では、この一括査定と出張専門・店頭型の業者を方式別に整理しています。
          </p>

          <h2 id="flow">楽器を一括査定に出す流れ</h2>
          <p>公式の「査定申込の流れ」をもとに、楽器を出す場合の実務に置き換えると次の5ステップです。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>査定フォームを起動</strong>：トップの「一括査定・見積もり」から。写真でAI査定（品名・型番が分からなくてもOK）と、自分で入力する方式の2つがあります。型番が分からないヴィンテージ品や貰い物は写真方式が便利です。
            </li>
            <li>
              <strong>商品情報を入力</strong>：商品カテゴリは「楽器・ピアノ」を選び、商品名にメーカー・型番・年式（例：Fender USA Stratocaster 2015・Gibson Les Paul Standard）を入れます。商品状態は「新品・未開封」「中古美品」「中古品・使用感あり」「目立つ傷がある」「故障品」から選択。
              公式ガイドは「詳細などの任意項目を詳しく入力いただくとより正確な査定結果」としているので、<strong>ハードケース・保証書・純正パーツの有無、ネックの反りや電装の不具合、シリアル番号</strong>を備考に書いておくと、実物査定での減額を避けやすくなります（<Link href="/articles/takaku-uru-kotsu/" className="text-accent underline hover:text-accent-dark">楽器を高く売るコツ</Link>参照）。
            </li>
            <li>
              <strong>お客様情報を入力</strong>：氏名・メール・電話番号・地域が必須で、買取方法（宅配・出張・店頭）を最大3つ選びます。公式フォームには「『宅配』にチェックを入れると、たくさん業者が見つかる可能性が高まります」と注記があります。<strong>ピアノ・ドラム・大型アンプは「出張」を必ず入れる</strong>のが実務上のポイントです。
            </li>
            <li>
              <strong>SMS認証→申込完了</strong>：携帯のSMSで届く6桁コードを入力して完了。登録アドレスに確認メールが届きます。
            </li>
            <li>
              <strong>査定結果を比較して業者を選ぶ</strong>：公式ガイドでは「最短1日」でメールが届くとされています。当サイトの<Link href="/souba-ranking/" className="text-accent underline hover:text-accent-dark">楽器買取相場ランキング</Link>（中古実勢の週次データ）と照らし、極端に低い提示を除外します。納得した業者にだけ買取を申し込みます。
            </li>
          </ol>

          <h2 id="caution">楽器を出す前に知っておきたい注意点</h2>
          <p>公式FAQ・利用規約の記載から、楽器を出す人が事前に知っておくべき点を抜き出します。</p>
          <h3>1. キャンセルは「各業者へ直接」</h3>
          <p>
            FAQでは「査定のお申込み後は、買取業者とお客様で直接お取引していただいております。キャンセルをご希望の場合、業者へ直接ご連絡」と案内されています。ヒカカク！側で一括して取り消す機能はありません。<strong>査定価格に納得しなければ買取依頼をやめてよい</strong>ことは使い方ガイドに明記されていますが、断る連絡は自分で各業者に行います。
          </p>
          <h3>2. 申込後は商品情報・個人情報を変更できない／削除もできない</h3>
          <p>
            FAQに「お申込み完了後は、ご記入いただいた商品情報や個人情報の変更はできかねます」「お客様からいただいた情報は削除することができません」とあります。型番や状態を書き間違えると修正が効かないので、送信前に確認してください。
          </p>
          <h3>3. 電話連絡が来る前提で申し込む</h3>
          <p>
            電話番号は必須項目で、査定・買取の連絡は各業者から直接来ます。利用規約第4条でも、サイト上・電話・メールで各種連絡をすることがあると定められています。後述の口コミでも電話の多さは指摘が多い点なので、<strong>連絡が取りやすい時間帯に申し込む</strong>か、備考にメール希望と書いておくのが現実的な対処です。
          </p>
          <h3>4. 査定額は「実物を見て変わる」ことがある</h3>
          <p>
            使い方ガイドのQ&amp;Aには「商品状態を詳しく鑑定する中で当初想定していた状態と違っていた際に買取価格が変更となる場合があります」とあります。楽器は<strong>ネックの状態・フレットの減り・電装の動作・付属品</strong>で差が付くので、状態は正直に書くのが結果的に早道です。
            一方で、あまりに不当な値下げをされた場合は「買取業者へ注意喚起を行うので、お問い合わせフォームからご連絡ください」とも案内されています。悪質な手口の見分け方は<Link href="/articles/gakki-kaitori-sagi/" className="text-accent underline hover:text-accent-dark">楽器買取の詐欺・トラブル対策</Link>にまとめています。
          </p>
          <h3>5. 楽器専門でない業者が混じることがある</h3>
          <p>
            紹介先は総合買取店から楽器専門店まで幅があります。ヴィンテージギターや高級管楽器は、楽器の専門知識がある業者の査定額が高くなりやすいため、届いた査定のうち<strong>楽器買取の実績を公開している業者</strong>を優先して比較してください。フリマとの使い分けは<Link href="/articles/mercari-vs-gyosha/" className="text-accent underline hover:text-accent-dark">メルカリと買取業者どっちが得？</Link>で解説しています。
          </p>

          <h2 id="reviews">良い評判・気になる評判（出典付き）</h2>
          <p>
            口コミは、ヒカカク！が自社サイトで公開している「ヒカカク！のクチコミ・評判」ページ（2026年10月8日確認）を出典にしています。本文の転載はせず、評価分布と内容の傾向だけを整理しました。
          </p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">項目</th><th className="px-4 py-3 text-left font-medium">公式クチコミページの表示（2026年10月8日時点）</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">総合評価</td><td className="px-4 py-3">3.4（5点満点）</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">件数の内訳</td><td className="px-4 py-3">星5：425件／星4：200件／星3：106件／星2：86件／星1：266件（合計1,083件）</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">公式の注記</td><td className="px-4 py-3">「悪い・ひどい・買取が安いというクチコミの比率は32.5%」と自サイトに表示</td></tr>
              </tbody>
            </table>
          </div>
          <h3>良い評判に多い内容</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>一度の入力で複数社から査定が返る</strong>：ピックアップ掲載の高評価では、1回の依頼で3〜4社から結果が届き、個人情報の入力も一度で済む点が便利とされています。</li>
            <li><strong>買取不可でも連絡や代替案がある</strong>：2026年の投稿でも「買取不可であっても迅速丁寧に対応」「他の方法も提案」といった評価が複数見られます。</li>
            <li><strong>複数社から速やかに金額提示があった</strong>：他カテゴリの事例ですが、8社から丁寧に査定額が提示され比較できたという声があります。</li>
          </ul>
          <h3>気になる評判に多い内容</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>見積もり業者が少ない・1社しか来ない</strong>：「事前見積もりの業者数が少ない」「一社しか価格提示がなく桁違いに安かった」という星1の投稿があります。公式FAQも、商品によっては1社も返信が無いことがあると認めています。</li>
            <li><strong>電話がひっきりなしに来る</strong>：申込直後から電話が続いた、価格を明示せず「実物を見せてほしい」と言われたという星1の投稿があります。</li>
            <li><strong>店舗で相場より低い提示</strong>：持ち込み後に相場変動を理由に低い額を出されたという声。実物査定で変わりうることは公式も明記しています。</li>
            <li><strong>操作が分かりにくい</strong>：返信方法が分からなかったという星3の投稿があり、会員登録・マイページの使い方は事前に確認した方が安心です。</li>
          </ul>
          <h3>楽器カテゴリのクチコミ欄で見える傾向</h3>
          <p>
            公式の楽器カテゴリ・ピアノカテゴリのページには、紹介先の買取店に対する利用者のクチコミが掲載されています。2026年10月上旬の投稿では、「ネットの仮査定と実際の買取額に差がなかった」「終活で電子ピアノを整理した」「遺品のピアノを型番が分からない状態から査定してもらえた」といった高評価が目立ちます。<strong>評価はヒカカク！そのものより、紹介先の業者ごとに分かれる</strong>というのがカテゴリ欄から読み取れる傾向です。
          </p>
          <p className="text-xs text-warm-gray">※ 口コミの件数・評価は公式サイトの表示を転記したもので、当サイトが集計したものではありません。投稿本文の引用はしていません。</p>

          <h2 id="fit">向いている人・向かない人</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
            <div className="border border-gold/40 bg-gold/5 rounded-xl p-4">
              <p className="font-bold text-foreground mb-2">向いている人</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>メーカー・型番が分かる楽器で、<strong>複数社の相見積もり</strong>を取りたい</li>
                <li>Fender・Gibson・Martin・YAMAHAなど<strong>業者間で差が出やすいブランド</strong>を売る</li>
                <li>ピアノ・ドラム・まとめ売りで<strong>出張対応の業者</strong>を探したい</li>
                <li>電話・メールのやり取りが苦にならない</li>
              </ul>
            </div>
            <div className="border border-warm-border rounded-xl p-4">
              <p className="font-bold text-foreground mb-2">向かない人</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>複数の業者からの<strong>電話連絡を避けたい</strong></li>
                <li>今日中に現金化したい（店頭買取に直接持ち込む方が早い）</li>
                <li>ノーブランドの入門機・故障品だけを売りたい（返信が来ない可能性がある）</li>
                <li>申込後に情報を修正・削除したい</li>
              </ul>
            </div>
          </div>
          <p>
            迷う場合は、まず<Link href="/souba-ranking/" className="text-accent underline hover:text-accent-dark">相場ランキング</Link>で手持ちモデルの中古実勢を把握し、差が出やすい楽器だけ一括査定に出す、という使い分けが無駄がありません。買取方式ごとの違いは<Link href="/articles/kaitori-houhou-hikaku/" className="text-accent underline hover:text-accent-dark">出張・店頭・宅配買取の比較</Link>にまとめています。
          </p>

          <CtaBox title="型番を入力して複数社の査定額を比較" lead="ケース・保証書・不具合の有無を書き添えると、実物査定での減額を避けやすくなります。" />

          <h2 id="faq">よくある質問</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>Q. {f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="sources">出典</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><a href="https://hikakaku.com/lp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ヒカカク！ サイトの使い方（一括査定の流れ・無料・最大20社・よくある質問）</a></li>
            <li><a href="https://hikakaku.com/hikakaku_reviews/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ヒカカク！のクチコミ・評判（総合評価・件数内訳）</a></li>
            <li><a href="https://hikakaku.com/category/all-category/musical-instruments/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">楽器の買取価格を比較（掲載点数・社数・買取実績・カテゴリ内クチコミ）</a></li>
            <li><a href="https://hikakaku.com/category/all-category/piano/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ピアノの買取価格を比較（掲載点数・社数・買取実績）</a></li>
            <li><a href="https://hikakaku.com/%e3%82%88%e3%81%8f%e3%81%82%e3%82%8b%e3%81%94%e8%b3%aa%e5%95%8f/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ヒカカク！ よくあるご質問（紹介のみ・キャンセル・情報変更・削除・配信停止）</a></li>
            <li><a href="https://hikakaku.com/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">ヒカカク！ サイト利用規約（第4〜6条・最終改定2024年10月1日）</a></li>
            <li><a href="https://hikakaku.com/pages/company/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">運営者情報</a>／<a href="https://hikakaku.com/pages/kobutsu_hyoki/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">古物営業法に基づく表記</a></li>
          </ul>
          <p className="text-xs text-warm-gray">※ いずれも{UPDATED_JA}に公式サイトの生ページを確認して記載しています。サービス内容・件数は変更されることがあるため、最新情報は公式サイトでご確認ください。本記事はPRリンクを含みます。</p>
        </section>

        <RelatedArticles currentSlug="hikakaku-gakki-kaitori-kuchikomi" relatedSlugs={["gakki-kaitori-osusume", "kaitori-houhou-hikaku", "takaku-uru-kotsu", "mercari-vs-gyosha", "gakki-kaitori-sagi", "ihin-gakki-kaitori"]} />
      </article>
    </>
  );
}

#!/usr/bin/env python3
"""P1第2弾: ピアノ種別・ブランドハブ整備（冪等）。

前提（2026-07-04 実査結果）:
- `grand-piano-kaitori` / `denshi-piano-kaitori` は既存ページあり → 新設せず
  「月次鮮度バンプ＋新ページへの内部リンク」で強化する。
- 新設は `roland-denshi-piano-kaitori` / `kawai-piano-kaitori` の2本。
- 週次相場表は掲載しない: souba-ranking-gakki.json のピアノ系
  （KAWAI K-300 ¥8,320 / Steinway B-211 ¥3,443 / YAMAHA U1等）は
  yahoo-medians-gakki.json 側で全て insufficient=True（アコースティック
  ピアノは重量物でヤフオク個人間流通がほぼ無く、落札は小物・部品が主）。
  実態を反映しない金額のため、新ページでは金額を書かず
  「モデル名・製造番号で無料査定」へ正直に誘導する。KAWAI RX-2 は
  そもそもデータに無い。
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
META = ROOT / "data" / "articles-metadata.json"
BASE = "https://gakkikaitori-biyori.com"
TODAY = "2026-07-04"
TODAY_JP = "2026年7月4日"

# ---------------------------------------------------------------- 共通部品

FAQ_ITEM_TEMPLATE = '''            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">__Q__</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                __A__
              </div>
            </details>'''

TEMPLATE = '''import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: '__CANONICAL__' },
  title: "__TITLE__",
  description: "__DESC__",
  openGraph: {
    title: "__TITLE__",
    description: "__OGDESC__",
  },
};

function Schema() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: __FAQ_SCHEMA__ }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: __ARTICLE_SCHEMA__ }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: __BREADCRUMB_SCHEMA__ }} />
    </>
  );
}

function CtaBox() {
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">__CTA_HEADING__</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">
          出張買取を申し込む
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">
          一括査定で最高値を調べる
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">
          近くの店舗を探す
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
      <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Schema />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="__PARENT_HREF__" className="hover:text-accent transition-colors">__PARENT_NAME__</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">__CRUMB__</span></li>
        </ol>
      </nav>
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">__BADGE__</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年7月更新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            __TITLE__
          </h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            __LEAD__
          </p>
          <p className="text-xs text-warm-gray mt-2">更新日: __TODAY_JP__</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
__TOC__
          </ol>
        </nav>

        <div className="article-body">
__BODY__
        </div>

        <RelatedArticles
          currentSlug="__SLUG__"
          relatedSlugs={__RELATED__}
        />
      </article>
    </>
  );
}
'''

COMPARISON_TABLE = '''          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">ヒカカク！</th>
                  <th className="px-4 py-3 text-left font-medium">ウリエル</th>
                  <th className="px-4 py-3 text-left font-medium">ティファナ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定（複数業者）</td><td className="px-4 py-3">出張買取専門</td><td className="px-4 py-3">出張/店頭/宅配</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">__ROW_TAISHO__</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">搬出</td><td className="px-4 py-3">業者による</td><td className="px-4 py-3">スタッフが対応</td><td className="px-4 py-3">出張時対応</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">自宅完結・まとめ売りOK</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">搬出まで任せたい人</td><td className="px-4 py-3">すぐ売りたい人</td></tr>
              </tbody>
            </table>
          </div>'''

# ---------------------------------------------------------------- 新設2ページ

PAGES = [
    {
        "slug": "kawai-piano-kaitori",
        "title": "カワイピアノの買取相場ガイド【2026年7月】グランド・アップライト・電子ピアノ別の査定ポイント",
        "desc": "カワイ（KAWAI）のピアノを売るならどこがいい？RX・GXグランド、Kシリーズアップライト、CA・CN・CL電子ピアノのシリーズ別査定ポイント、製造番号での年代確認、重量物ならではの出張買取の流れとおすすめ3社を解説。無料査定だけの利用もOK。",
        "ogdesc": "カワイピアノを売るなら。シリーズ別の査定ポイントとモデル名・製造番号での査定手順、おすすめ買取3社を解説。",
        "lead": "カワイ（KAWAI）のピアノの買取を検討している方へ。本記事では、グランドピアノ（RX・GX・Shigeru Kawai）・アップライトピアノ（Kシリーズ・BL/KUシリーズ）・電子ピアノ（CA・CN・CL・ES）のシリーズ別査定ポイント、査定の鍵になるモデル名と製造番号の確認方法、重量物のピアノで主流となる出張買取の流れ、おすすめ買取3社を解説します。",
        "badge": "KAWAI×ピアノ",
        "crumb": "カワイピアノ買取",
        "parent_href": "/articles/piano-kaitori/",
        "parent_name": "ピアノ買取",
        "cta_heading": "カワイピアノの買取価格を無料で確認",
        "row_taisho": "グランド/アップライト/電子",
        "toc": [
            ("comparison", "カワイピアノの買取おすすめ3社を比較"),
            ("series", "シリーズ別の査定ポイント（グランド・アップライト・電子）"),
            ("souba", "カワイピアノの買取相場の考え方"),
            ("sell", "ピアノは重量物 ── 出張買取が主流"),
            ("tips", "カワイピアノを高く売る4つのコツ"),
            ("faq", "よくある質問"),
        ],
        "faqs": [
            (
                "CL5Eのような型番はどこで確認できますか？",
                "カワイの電子ピアノの型番は、鍵盤蓋の周辺や本体背面の銘板（ラベル）に記載されています。アコースティックピアノの場合はモデル名と製造番号が本体内部のフレーム（金属部分）に刻印されており、アップライトは上前板を開けた内側、グランドは大屋根を開けた内側で確認できます。型番と製造番号を査定フォームに書き添えると、査定がスムーズで正確になります。",
            ),
            (
                "古いカワイピアノ（BL・KUシリーズなど）でも売れますか？",
                "1960〜80年代のBL・KUシリーズなど古いモデルでも、状態次第で買取対象になります。国産中古ピアノは海外リユース需要があるため、国内で値が付きにくい年式でも買い取られるケースがあります。一方で、状態や年式によっては値が付かないこともあるため、まずは無料査定で確認するのが確実です。",
            ),
            (
                "ピアノの搬出費用はかかりますか？",
                "本記事で紹介している3社は査定・出張料無料です。ピアノは専門スタッフが搬出しますが、2階以上でエレベーターがない場合やクレーン搬出が必要な場合は条件が変わることがあるため、設置階・搬出経路を申込時に伝えておくとスムーズです。",
            ),
            (
                "カワイとヤマハ、どちらが高く売れますか？",
                "ブランドとしてはどちらも国産二大メーカーとして安定した需要があります。買取額を左右するのはブランド差よりも、モデル・年式・状態・搬出条件です。同クラスのモデル同士であれば大きな差は出にくいため、複数業者の査定額を比較するほうが効果的です。",
            ),
        ],
        "related": ["kawai-rx2-kaitori", "kawai-k300-kaitori", "kawai-kaitori", "piano-kaitori", "grand-piano-kaitori", "denshi-piano-kaitori", "roland-denshi-piano-kaitori", "yamaha-kaitori", "takaku-uru-kotsu", "gakki-kaitori-osusume"],
        "body": '''          <h2 id="comparison">カワイピアノの買取おすすめ3社を比較</h2>

          <p>カワイのピアノを売るなら、手数料無料で査定を比較できるおすすめ3社はこちらです。アコースティックピアノは重量物のため、<strong>搬出まで業者が対応する出張買取が主流</strong>です。</p>

__COMPARISON_TABLE__

          <h3>ヒカカク！ ── 複数業者の査定額を一括比較</h3>
          <p>ピアノは業者の販路（国内再販・海外輸出・レストア）によって査定額の差が出やすい楽器です。ヒカカク！なら<strong>複数業者に一括で査定依頼でき、最高値の業者がすぐにわかります</strong>。モデル名と製造番号を添えて依頼すると、より正確な金額が出ます。</p>

          <h3>ウリエル ── 出張買取で搬出まで自宅完結</h3>
          <p>ウリエルは出張買取専門で、出張料・査定料は無料です。<strong>自宅にいながら査定から引き渡しまで完結</strong>できるため、動かせないアップライト・グランドピアノに向いています。</p>

          <h3>ティファナ ── 出張・店頭・宅配の3方式に対応</h3>
          <p>ティファナは<strong>年間4万件の買取実績</strong>があり、ピアノ以外の楽器や家財もまとめて売れるのが強みです。電子ピアノなど比較的小型のモデルなら宅配買取も選べます。</p>

          <CtaBox />

          <h2 id="series">シリーズ別の査定ポイント（グランド・アップライト・電子）</h2>

          <h3>グランドピアノ ── RX・GX・Shigeru Kawai</h3>
          <p>カワイのグランドピアノは、1990年代〜2010年代前半の中核シリーズ<strong>RX</strong>、その後継の<strong>GX</strong>、最上位ハンドクラフトの<strong>Shigeru Kawai（SK）</strong>が代表格です。中でも家庭・教室向け定番サイズのRX-2は中古市場でも流通が多く、当サイトでは専用ガイドを用意しています。</p>
          <div className="bg-cream border border-warm-border rounded-xl p-5 my-6">
            <p className="text-sm text-warm-gray mb-1">RX-2をお持ちの方は、年式別の査定ポイントを専用ページで解説しています</p>
            <Link href="/articles/kawai-rx2-kaitori/" className="text-accent font-medium text-sm hover:underline">カワイ RX-2の買取相場ガイドを見る →</Link>
          </div>
          <p>グランドピアノ全般の相場観・メーカー比較は<Link href="/articles/grand-piano-kaitori/">グランドピアノ買取相場ガイド</Link>をご覧ください。</p>

          <h3>アップライトピアノ ── Kシリーズ・BL/KUシリーズ</h3>
          <p>現行の中核は<strong>Kシリーズ</strong>（K-300など）で、1960〜80年代の量産期には<strong>BL・KUシリーズ</strong>が広く普及しました。古い国産アップライトは海外リユース需要があるため、年式が古くても状態次第で買取対象になります。定番モデルK-300の査定ポイントは<Link href="/articles/kawai-k300-kaitori/">カワイ K-300の買取相場ガイド</Link>で解説しています。</p>

          <h3>電子ピアノ ── CA・CN・CL・ESシリーズ</h3>
          <p>カワイの電子ピアノは、木製鍵盤の上位<strong>CAシリーズ</strong>、スタンダードの<strong>CNシリーズ</strong>、コンパクトな<strong>CLシリーズ</strong>（CL5Eなど）、ポータブルの<strong>ESシリーズ</strong>があります。電子ピアノは電子機器のため<strong>経年による減価が大きく、型番と製造年が査定額をほぼ決めます</strong>。型番は鍵盤蓋周辺や背面の銘板で確認できます。電子ピアノ全般の売り方は<Link href="/articles/denshi-piano-kaitori/">電子ピアノ買取ガイド</Link>をご覧ください。</p>

          <h2 id="souba">カワイピアノの買取相場の考え方</h2>

          <p>アコースティックピアノは重量物で個人間のオンライン取引（ヤフオク!・フリマ）にほとんど流通しないため、<strong>当サイトの週次実勢相場データではカワイのアコースティックピアノの信頼できる金額を提示できません</strong>。ギターのように「相場表を見てから売る」ことが難しい楽器です。</p>
          <p>そのぶん査定額は<strong>モデル・製造年（製造番号から判定）・状態・搬出条件</strong>で大きく変動します。確実なのは、モデル名と製造番号を控えて複数業者の無料査定を比較することです。モデル名と製造番号は本体フレームの刻印で確認できます（アップライトは上前板の内側、グランドは大屋根の内側）。</p>

          <CtaBox />

          <h2 id="sell">ピアノは重量物 ── 出張買取が主流</h2>

          <p>アップライトピアノは約200〜280kg、グランドピアノは300kgを超えるモデルもある重量物です。自分で運ぶことは現実的でないため、<strong>専門スタッフが搬出まで行う出張買取が基本</strong>になります。査定申込時に次の3点を伝えておくと、当日の搬出がスムーズです。</p>
          <ul>
            <li><strong>設置階とエレベーターの有無</strong>（2階以上・階段のみの場合は要相談）</li>
            <li><strong>搬出経路</strong>（廊下・ドア幅・段差など）</li>
            <li><strong>クレーン搬出の要否</strong>（窓からの搬出が必要な場合）</li>
          </ul>
          <p>電子ピアノは組み立て式のモデルが多く、分解して搬出できるため出張買取のハードルはさらに低くなります。</p>

          <h2 id="tips">カワイピアノを高く売る4つのコツ</h2>

          <h3>コツ1: モデル名と製造番号を控えてから査定に出す</h3>
          <p>製造番号からメーカーは製造年を特定できます。事前に伝えることで査定が正確になり、年式による上乗せ評価も受けやすくなります。</p>

          <h3>コツ2: 複数業者で相見積もりを取る</h3>
          <p>ピアノは販路（国内再販・海外輸出）によって業者ごとの査定額の差が出やすいため、一括査定で比較してから決めるのが確実です。</p>

          <h3>コツ3: 調律記録・付属品を揃える</h3>
          <p>調律師のカードなど定期的な調律の記録は、管理状態の良さの証明になります。椅子・鍵・保証書などの付属品も揃えて査定に出しましょう。外装はやわらかい布で乾拭きし、ほこりを落としておきます。</p>

          <h3>コツ4: 売ると決めたら早めに動く</h3>
          <p>ピアノは設置したまま放置すると湿度による内部劣化が進みます。使っていないピアノは、状態が良いうちに査定へ出すのが減額を防ぐ最大のポイントです。</p>

          <CtaBox />

          <h2 id="faq">カワイピアノの買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
__FAQ_ITEMS__
          </div>

          <h2>まとめ: カワイピアノはモデル名・製造番号を控えて比較査定へ</h2>

          <p>カワイのピアノを売るなら、まずモデル名と製造番号を確認し、<strong>出張買取対応の業者を複数比較</strong>するのが鉄則です。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>搬出まで自宅で完結したい</strong> → ウリエルで出張買取</li>
            <li><strong>他の楽器・家財もまとめて売りたい</strong> → ティファナ</li>
          </ul>

          <p>査定は完全無料。まずはモデル名の確認から始めてみてください。</p>

          <CtaBox />''',
    },
    {
        "slug": "roland-denshi-piano-kaitori",
        "title": "ローランド電子ピアノの買取ガイド【2026年7月】LX・HP・FPシリーズを高く売るコツ",
        "desc": "ローランド（Roland）の電子ピアノを売るならどこがいい？LX・HP・RP・FPシリーズ別の査定ポイント、査定の鍵になる型番と製造年の確認方法、据置型の分解搬出と出張買取の流れ、おすすめ買取3社を比較。無料査定だけの利用もOK。",
        "ogdesc": "ローランドの電子ピアノを売るなら。LX・HP・FPシリーズ別の査定ポイントとおすすめ買取3社を解説。",
        "lead": "ローランド（Roland）の電子ピアノの買取を検討している方へ。本記事では、LX・HP・RP・FPシリーズ別の査定ポイント、査定額をほぼ決める型番・製造年の確認方法、据置型ならではの分解搬出と出張買取の流れ、おすすめ買取3社を解説します。",
        "badge": "Roland×電子ピアノ",
        "crumb": "ローランド電子ピアノ買取",
        "parent_href": "/articles/denshi-piano-kaitori/",
        "parent_name": "電子ピアノ買取",
        "cta_heading": "ローランド電子ピアノの買取価格を無料で確認",
        "row_taisho": "電子ピアノ（据置/ポータブル）",
        "toc": [
            ("comparison", "ローランド電子ピアノの買取おすすめ3社を比較"),
            ("series", "シリーズ別の査定ポイント（LX・HP・RP・FP）"),
            ("souba", "買取相場の考え方 ── 型番と製造年がほぼすべて"),
            ("sell", "据置型は分解搬出 ── 出張買取が便利"),
            ("tips", "高く売る4つのコツ"),
            ("faq", "よくある質問"),
        ],
        "faqs": [
            (
                "古いローランドの電子ピアノでも売れますか？",
                "製造10年以内であれば多くの業者で買取対象になります。10年以上経過したモデルは値が付かないこともありますが、LXシリーズなど上位モデルは古くても値段が付くことがあります。型番と製造年を伝えて、まず無料査定で確認するのがおすすめです。",
            ),
            (
                "据置型の電子ピアノは自分で分解する必要がありますか？",
                "出張買取なら業者のスタッフが分解・搬出まで対応してくれるため、自分で分解する必要はありません。多くの据置型電子ピアノは組み立て式のため、アコースティックピアノより搬出のハードルは低めです。",
            ),
            (
                "ローランド電子ピアノの買取相場はいくらですか？",
                "電子ピアノはモデルと製造年によって価格が大きく変動するため、一律の相場を示すことはできません。シリーズ・モデル別の目安は電子ピアノ買取ガイドに掲載していますが、正確な金額は型番（例: LX708、HP704、FP-30X）と製造年を添えた無料査定で確認するのが確実です。",
            ),
            (
                "宅配買取はできますか？",
                "FPシリーズなどポータブルタイプは宅配買取が可能です。据置型（LX・HP・RPシリーズ）は重量とサイズがあるため、分解・搬出まで任せられる出張買取のほうが手軽で安全です。",
            ),
        ],
        "related": ["denshi-piano-kaitori", "roland-kaitori", "piano-kaitori", "kawai-piano-kaitori", "grand-piano-kaitori", "yamaha-kaitori", "casio-kaitori", "keyboard-kaitori", "takaku-uru-kotsu", "gakki-kaitori-osusume"],
        "body": '''          <h2 id="comparison">ローランド電子ピアノの買取おすすめ3社を比較</h2>

          <p>ローランドの電子ピアノを売るなら、手数料無料で査定を比較できるおすすめ3社はこちらです。据置型は<strong>分解・搬出まで任せられる出張買取</strong>、ポータブル型は宅配買取も選べます。</p>

__COMPARISON_TABLE__

          <h3>ヒカカク！ ── 複数業者の査定額を一括比較</h3>
          <p>電子ピアノは在庫状況・販路によって業者間の査定額に差が出ます。ヒカカク！なら<strong>複数業者に一括で査定依頼でき、最高値の業者がすぐにわかります</strong>。型番と製造年を添えて依頼すると正確な金額が出やすくなります。</p>

          <h3>ウリエル ── 出張買取で分解・搬出まで自宅完結</h3>
          <p>ウリエルは出張買取専門で、出張料・査定料は無料です。<strong>据置型電子ピアノの分解・搬出までスタッフに任せられる</strong>ため、LX・HPシリーズなど大型モデルに向いています。</p>

          <h3>ティファナ ── 出張・店頭・宅配の3方式に対応</h3>
          <p>ティファナは<strong>年間4万件の買取実績</strong>があり、電子ピアノ以外のアイテムもまとめて売れるのが強みです。ポータブルモデルなら宅配買取も利用できます。</p>

          <CtaBox />

          <h2 id="series">シリーズ別の査定ポイント（LX・HP・RP・FP）</h2>

          <h3>LXシリーズ ── 据置型の最上位ライン</h3>
          <p>LXシリーズはローランドの電子ピアノ最上位ラインで、ハイブリッド構造の鍵盤や多スピーカー構成を備えます。上位モデルほど中古需要が安定しており、<strong>年式が古くても値が付きやすいのがこのクラスの特徴</strong>です。</p>

          <h3>HPシリーズ ── 家庭用据置型の中核</h3>
          <p>HPシリーズは家庭用据置型の中核ラインです。同じ「HP」でも世代（例: HP704とHP605）で査定が大きく変わるため、<strong>型番を正確に伝えることが査定の出発点</strong>になります。</p>

          <h3>RPシリーズ ── エントリー据置型</h3>
          <p>RPシリーズはエントリー向けの据置型です。単価は上位ラインより下がりますが、需要層が広く、状態が良ければ安定して買い手が付きます。</p>

          <h3>FPシリーズ ── ポータブル型</h3>
          <p>FPシリーズはステージ・自宅兼用のポータブル型で、<strong>宅配買取が使える</strong>のが据置型との大きな違いです。専用スタンド・ペダルユニットの有無も査定で確認されます。</p>

          <p>シリーズ・モデル別の買取目安の一覧は<Link href="/articles/denshi-piano-kaitori/">電子ピアノ買取ガイド</Link>に掲載しています。あわせて、電子ピアノ以外のローランド製品（シンセ・電子ドラム・アンプ）は<Link href="/articles/roland-kaitori/">Roland買取総合ガイド</Link>をご覧ください。</p>

          <h2 id="souba">買取相場の考え方 ── 型番と製造年がほぼすべて</h2>

          <p>電子ピアノは電子機器のため、アコースティックピアノと違って<strong>経年による減価が大きく、「どのモデルか」「何年製か」で査定額がほぼ決まります</strong>。同シリーズでも世代が1つ違うだけで査定が変わるため、一律の「ローランド電子ピアノの相場」は存在しません。</p>
          <ul>
            <li><strong>型番の確認</strong>: 譜面立て周辺や本体背面の銘板（ラベル）に記載（例: LX708、HP704、FP-30X）</li>
            <li><strong>製造年の確認</strong>: 銘板のシリアル・取扱説明書・購入時の記録から特定</li>
            <li><strong>動作確認</strong>: 全鍵盤の発音・スピーカー・ヘッドホン端子・ペダルをチェック</li>
          </ul>
          <p>この3点を査定フォームに書き添えるだけで、査定のスピードと精度が大きく変わります。正確な金額は無料査定での確認が確実です。</p>

          <CtaBox />

          <h2 id="sell">据置型は分解搬出 ── 出張買取が便利</h2>

          <p>LX・HP・RPシリーズなどの据置型は重量・サイズがあるため、<strong>分解・搬出までスタッフが対応する出張買取が最も手軽</strong>です。多くのモデルは組み立て式のため、アコースティックピアノのようなクレーン搬出はほぼ不要です。</p>
          <p>FPシリーズなどポータブル型は宅配買取も選べます。梱包の際は鍵盤面を保護し、ペダル・アダプタなどの付属品を同梱しましょう。</p>

          <h2 id="tips">ローランド電子ピアノを高く売る4つのコツ</h2>

          <h3>コツ1: 型番と製造年を正確に伝える</h3>
          <p>査定額をほぼ決める2要素です。銘板を確認し、査定依頼時に必ず書き添えましょう。</p>

          <h3>コツ2: 売ると決めたら早めに売る</h3>
          <p>電子ピアノは後継モデルの発表で旧モデルの相場が下がる「鮮度が命」の商品です。使っていないなら、1年待つだけで査定が下がることがあります。</p>

          <h3>コツ3: 付属品を揃える</h3>
          <p>専用スタンド・ペダルユニット・ACアダプタ・椅子・取扱説明書が揃っていると減額を防げます。外装はやわらかい布で拭き、鍵盤の汚れを落としておきましょう。</p>

          <h3>コツ4: 複数業者で相見積もりを取る</h3>
          <p>同じモデルでも業者の在庫・販路によって査定額は変わります。一括査定で比較してから売り先を決めるのが確実です。</p>

          <CtaBox />

          <h2 id="faq">ローランド電子ピアノの買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
__FAQ_ITEMS__
          </div>

          <h2>まとめ: ローランド電子ピアノは型番・製造年を控えて早めの査定へ</h2>

          <p>ローランドの電子ピアノを売るなら、型番と製造年を確認し、<strong>減価が進む前に複数業者の査定を比較</strong>するのが鉄則です。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>据置型の分解・搬出まで任せたい</strong> → ウリエルで出張買取</li>
            <li><strong>すぐに売りたい・他のアイテムもまとめたい</strong> → ティファナ</li>
          </ul>

          <p>査定は完全無料。まずは銘板の型番チェックから始めてみてください。</p>

          <CtaBox />''',
    },
]

META_ENTRIES = {
    "kawai-piano-kaitori": {
        "slug": "kawai-piano-kaitori",
        "title": "カワイピアノ買取ガイド",
        "shortTitle": "カワイピアノ買取",
        "badge": "KAWAI×ピアノ",
        "description": "カワイのグランド・アップライト・電子ピアノのシリーズ別査定ポイントとおすすめ買取3社を解説。",
        "category": "brand",
    },
    "roland-denshi-piano-kaitori": {
        "slug": "roland-denshi-piano-kaitori",
        "title": "ローランド電子ピアノ買取ガイド",
        "shortTitle": "ローランド電子ピアノ買取",
        "badge": "Roland×電子ピアノ",
        "description": "ローランドLX・HP・RP・FPシリーズの査定ポイントと高く売るコツ、おすすめ買取3社を解説。",
        "category": "brand",
    },
}


def build_page(p):
    canonical = f"{BASE}/articles/{p['slug']}/"
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in p["faqs"]
        ],
    }
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": p["title"],
        "datePublished": TODAY,
        "dateModified": TODAY,
        "author": {"@type": "Organization", "name": "楽器買取びより"},
        "publisher": {"@type": "Organization", "name": "楽器買取びより"},
    }
    breadcrumb_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "ホーム", "item": f"{BASE}/"},
            {"@type": "ListItem", "position": 2, "name": p["parent_name"], "item": f"{BASE}{p['parent_href']}"},
            {"@type": "ListItem", "position": 3, "name": p["crumb"], "item": canonical},
        ],
    }
    toc = "\n".join(
        f'            <li><a href="#{aid}" className="hover:underline">{label}</a></li>'
        for aid, label in p["toc"]
    )
    faq_items = "\n".join(
        FAQ_ITEM_TEMPLATE.replace("__Q__", q).replace("__A__", a) for q, a in p["faqs"]
    )
    body = (
        p["body"]
        .replace("__COMPARISON_TABLE__", COMPARISON_TABLE.replace("__ROW_TAISHO__", p["row_taisho"]))
        .replace("__FAQ_ITEMS__", faq_items)
    )
    return (
        TEMPLATE
        .replace("__CANONICAL__", canonical)
        .replace("__TITLE__", p["title"])
        .replace("__DESC__", p["desc"])
        .replace("__OGDESC__", p["ogdesc"])
        .replace("__LEAD__", p["lead"])
        .replace("__FAQ_SCHEMA__", json.dumps(json.dumps(faq_schema, ensure_ascii=False), ensure_ascii=False))
        .replace("__ARTICLE_SCHEMA__", json.dumps(json.dumps(article_schema, ensure_ascii=False), ensure_ascii=False))
        .replace("__BREADCRUMB_SCHEMA__", json.dumps(json.dumps(breadcrumb_schema, ensure_ascii=False), ensure_ascii=False))
        .replace("__CTA_HEADING__", p["cta_heading"])
        .replace("__PARENT_HREF__", p["parent_href"])
        .replace("__PARENT_NAME__", p["parent_name"])
        .replace("__CRUMB__", p["crumb"])
        .replace("__BADGE__", p["badge"])
        .replace("__TOC__", toc)
        .replace("__BODY__", body)
        .replace("__RELATED__", json.dumps(p["related"], ensure_ascii=False))
        .replace("__TODAY_JP__", TODAY_JP)
        .replace("__SLUG__", p["slug"])
    )


# ---------------------------------------------------------------- 既存ページのパッチ（冪等）

def _replace_once(src, old, new, path, label):
    if new in src:
        return src, False
    if old not in src:
        print(f"  ⚠️ pattern not found ({label}): {path.name}")
        return src, False
    return src.replace(old, new, 1), True


def _prepend_related(src, path, slugs):
    """relatedSlugs 配列の先頭に slug 群を追加（冪等）。"""
    changed = False
    m = re.search(r'relatedSlugs=\{\[', src)
    if not m:
        print(f"  ⚠️ no relatedSlugs in {path}")
        return src, False
    for slug in reversed(slugs):
        if f'"{slug}"' in src:
            continue
        src = src.replace('relatedSlugs={[', f'relatedSlugs={{["{slug}", ', 1)
        changed = True
    return src, changed


def _insert_before(src, anchor_re, block_builder, marker):
    """anchor（h2等）の直前に block を挿入（冪等: marker があればスキップ）。"""
    if marker in src:
        return src, False
    m = re.search(anchor_re, src, re.M)
    if not m:
        return src, None  # anchor not found
    indent = m.group(1)
    return src[: m.start()] + block_builder(indent) + src[m.start():], True


def patch_file(rel, fn):
    path = ARTICLES_DIR / rel / "page.tsx"
    if not path.exists():
        print(f"  ⚠️ missing page: {rel}")
        return
    src = path.read_text(encoding="utf-8")
    new = fn(src, path)
    if new != src:
        path.write_text(new, encoding="utf-8")
        print(f"  🔗 patched: {rel}")
    else:
        print(f"  skip (already patched): {rel}")


def patch_grand(src, path):
    # 月次バンプ（title/og ＋ escaped Article schema headline）
    src, _ = _replace_once(src, "【2026年最新】", "【2026年7月最新】", path, "title month")
    src = src.replace("【2026年最新】", "【2026年7月最新】")
    src = src.replace("\\u30102026\\u5e74\\u6700\\u65b0\\u3011", "\\u30102026\\u5e747\\u6708\\u6700\\u65b0\\u3011")
    src = src.replace('>2026年最新</span>', '>2026年7月更新</span>')
    src = src.replace('更新日: 2026-05-17', f'更新日: {TODAY_JP}')
    src = src.replace('\\"dateModified\\": \\"2026-05-17\\"', f'\\"dateModified\\": \\"{TODAY}\\"')
    # 下向きリンクブロック（FAQ直前）
    def block(indent):
        return (
            f'{indent}<h2 id="by-series">ブランド・モデル別のグランドピアノ買取ガイド</h2>\n'
            f'{indent}<p>お持ちのグランドピアノのブランド・モデルが決まっている場合は、専用ガイドで査定ポイントを詳しく解説しています。</p>\n'
            f'{indent}<div className="flex flex-wrap gap-2 my-4">\n'
            f'{indent}  <Link href="/articles/kawai-piano-kaitori/" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">カワイピアノ買取</Link>\n'
            f'{indent}  <Link href="/articles/kawai-rx2-kaitori/" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">カワイ RX-2</Link>\n'
            f'{indent}  <Link href="/articles/yamaha-c3-kaitori/" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">ヤマハ C3</Link>\n'
            f'{indent}  <Link href="/articles/steinway-b211-kaitori/" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">スタインウェイ B-211</Link>\n'
            f'{indent}  <Link href="/articles/steinway-kaitori/" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">スタインウェイ買取</Link>\n'
            f'{indent}</div>\n\n'
        )
    src2, ok = _insert_before(src, r'^([ \t]*)<h2 id="faq">', block, 'id="by-series"')
    if ok is None:
        print(f"  ⚠️ no faq anchor: {path}")
    else:
        src = src2
    src, _ = _prepend_related(src, path, ["kawai-piano-kaitori", "kawai-rx2-kaitori", "yamaha-c3-kaitori", "steinway-b211-kaitori"])
    return src


def patch_denshi(src, path):
    src = src.replace("【2026年最新】", "【2026年7月最新】")
    src = src.replace("\\u30102026\\u5e74\\u6700\\u65b0\\u3011", "\\u30102026\\u5e747\\u6708\\u6700\\u65b0\\u3011")
    src = src.replace('>2026年最新</span>', '>2026年7月更新</span>')
    src = src.replace('更新日: 2026年4月18日', f'更新日: {TODAY_JP}')
    src = src.replace('dateModified: "2026-04-18"', f'dateModified: "{TODAY}"')
    def block(indent):
        return (
            f'{indent}<div className="bg-gold/10 border border-warm-border rounded-xl p-5 my-8">\n'
            f'{indent}  <p className="font-bold text-sm mb-1">ローランドの電子ピアノを売るなら専用ガイドへ</p>\n'
            f'{indent}  <p className="text-sm text-warm-gray mb-2">LX・HP・RP・FPシリーズ別の査定ポイントと、据置型の分解搬出・出張買取の流れを専用ページで詳しく解説しています。</p>\n'
            f'{indent}  <Link href="/articles/roland-denshi-piano-kaitori/" className="text-accent font-medium text-sm hover:underline">ローランド電子ピアノの買取ガイドを見る →</Link>\n'
            f'{indent}</div>\n\n'
        )
    src2, ok = _insert_before(src, r'^([ \t]*)<h2 id="comparison">', block, "roland-denshi-piano-kaitori")
    if ok is None:
        print(f"  ⚠️ no comparison anchor: {path}")
    else:
        src = src2
    src, _ = _prepend_related(src, path, ["roland-denshi-piano-kaitori", "kawai-piano-kaitori"])
    return src


def patch_piano_hub(src, path):
    def block(indent):
        links = [
            ("/articles/grand-piano-kaitori/", "グランドピアノ買取"),
            ("/articles/denshi-piano-kaitori/", "電子ピアノ買取"),
            ("/articles/roland-denshi-piano-kaitori/", "ローランド電子ピアノ買取"),
            ("/articles/kawai-piano-kaitori/", "カワイピアノ買取"),
            ("/articles/kawai-rx2-kaitori/", "カワイ RX-2"),
            ("/articles/yamaha-c3-kaitori/", "ヤマハ C3"),
        ]
        chips = "\n".join(
            f'{indent}  <Link href="{href}" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">{label}</Link>'
            for href, label in links
        )
        return (
            f'{indent}<h2 id="by-type">種類・ブランド別のピアノ買取ガイド</h2>\n'
            f'{indent}<p>ピアノの種類（グランド・電子）やブランド・モデルが決まっている場合は、専用ガイドで査定ポイントを詳しく解説しています。</p>\n'
            f'{indent}<div className="flex flex-wrap gap-2 my-4">\n'
            f'{chips}\n'
            f'{indent}</div>\n\n'
        )
    src2, ok = _insert_before(src, r'^([ \t]*)<h2 id="faq">', block, 'id="by-type"')
    if ok is None:
        print(f"  ⚠️ no faq anchor: {path}")
    else:
        src = src2
    src = src.replace('dateModified: "2026-04-18"', f'dateModified: "{TODAY}"')
    src = src.replace('更新日: 2026年4月18日', f'更新日: {TODAY_JP}')
    src, _ = _prepend_related(src, path, ["roland-denshi-piano-kaitori", "kawai-piano-kaitori"])
    return src


def patch_kawai_brand(src, path):
    def block(indent):
        return (
            f'{indent}<div className="bg-gold/10 border border-warm-border rounded-xl p-5 my-8">\n'
            f'{indent}  <p className="font-bold text-sm mb-1">カワイのピアノを売るなら専用ガイドへ</p>\n'
            f'{indent}  <p className="text-sm text-warm-gray mb-2">RX・GXグランド、Kシリーズアップライト、CA・CN・CL電子ピアノのシリーズ別査定ポイントを専用ページで詳しく解説しています。</p>\n'
            f'{indent}  <Link href="/articles/kawai-piano-kaitori/" className="text-accent font-medium text-sm hover:underline">カワイピアノの買取相場ガイドを見る →</Link>\n'
            f'{indent}</div>\n\n'
        )
    src2, ok = _insert_before(src, r'^([ \t]*)<h2 id="tips">', block, "kawai-piano-kaitori")
    if ok is None:
        print(f"  ⚠️ no tips anchor: {path}")
    else:
        src = src2
    src, _ = _prepend_related(src, path, ["kawai-piano-kaitori"])
    return src


def patch_roland_brand(src, path):
    def block(indent):
        return (
            f'{indent}<div className="bg-gold/10 border border-warm-border rounded-xl p-5 my-8">\n'
            f'{indent}  <p className="font-bold text-sm mb-1">ローランドの電子ピアノを売るなら専用ガイドへ</p>\n'
            f'{indent}  <p className="text-sm text-warm-gray mb-2">LX・HP・RP・FPシリーズ別の査定ポイントと出張買取の流れを専用ページで詳しく解説しています。</p>\n'
            f'{indent}  <Link href="/articles/roland-denshi-piano-kaitori/" className="text-accent font-medium text-sm hover:underline">ローランド電子ピアノの買取ガイドを見る →</Link>\n'
            f'{indent}</div>\n\n'
        )
    src2, ok = _insert_before(src, r'^([ \t]*)<h2 id="synth">', block, "roland-denshi-piano-kaitori")
    if ok is None:
        print(f"  ⚠️ no synth anchor: {path}")
    else:
        src = src2
    src, _ = _prepend_related(src, path, ["roland-denshi-piano-kaitori"])
    return src


def patch_model_related(slugs_to_add):
    def fn(src, path):
        src, _ = _prepend_related(src, path, slugs_to_add)
        return src
    return fn


def patch_osusume(src, path):
    marker = "roland-denshi-piano-kaitori"
    if marker in src:
        return src
    m = re.search(r'^([ \t]*)<h2 id="by-region">', src, re.M)
    if not m:
        print(f"  ⚠️ no by-region anchor: {path}")
        return src
    indent = m.group(1)
    line = (
        f'{indent}<p>ピアノは種類・ブランド別の専用ガイドも用意しています: '
        f'<Link href="/articles/grand-piano-kaitori/">グランドピアノ</Link>・'
        f'<Link href="/articles/denshi-piano-kaitori/">電子ピアノ</Link>・'
        f'<Link href="/articles/roland-denshi-piano-kaitori/">ローランド電子ピアノ</Link>・'
        f'<Link href="/articles/kawai-piano-kaitori/">カワイピアノ</Link></p>\n\n'
    )
    return src[: m.start()] + line + src[m.start():]


def main():
    meta = json.load(open(META, encoding="utf-8"))
    existing = {a["slug"] for a in meta}
    added = []
    for p in PAGES:
        d = ARTICLES_DIR / p["slug"]
        if p["slug"] in existing or d.exists():
            print(f"  skip page: {p['slug']}")
        else:
            d.mkdir(parents=True, exist_ok=True)
            (d / "page.tsx").write_text(build_page(p), encoding="utf-8")
            meta.append(META_ENTRIES[p["slug"]])
            added.append(p["slug"])
            print(f"  ✅ {p['slug']}")

    patch_file("grand-piano-kaitori", patch_grand)
    patch_file("denshi-piano-kaitori", patch_denshi)
    patch_file("piano-kaitori", patch_piano_hub)
    patch_file("kawai-kaitori", patch_kawai_brand)
    patch_file("roland-kaitori", patch_roland_brand)
    patch_file("kawai-rx2-kaitori", patch_model_related(["kawai-piano-kaitori", "grand-piano-kaitori"]))
    patch_file("kawai-k300-kaitori", patch_model_related(["kawai-piano-kaitori"]))
    patch_file("yamaha-c3-kaitori", patch_model_related(["grand-piano-kaitori"]))
    patch_file("steinway-b211-kaitori", patch_model_related(["grand-piano-kaitori"]))
    patch_file("gakki-kaitori-osusume", patch_osusume)

    json.dump(meta, open(META, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"\ngenerated: {len(added)}  metadata total: {len(meta)}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
楽器買取びより Phase 4: メーカー拡張 15記事ジェネレータ
"""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"

MAKERS = [
    {"slug": "korg-kaitori", "name": "Korg（コルグ）", "category": "シンセ・キーボード", "instruments": "シンセサイザー、ステージピアノ、DJ機器、エフェクター", "models": [("Wavestate / Wavestate Native", "60,000〜120,000円"), ("Minilogue XD / Prologue", "40,000〜120,000円"), ("Kross / Krome / Kronos", "30,000〜180,000円"), ("Volca シリーズ", "10,000〜30,000円"), ("MicroKEY / nanoKEY", "5,000〜15,000円")]},
    {"slug": "casio-kaitori", "name": "CASIO（カシオ）", "category": "電子楽器", "instruments": "電子ピアノ、シンセ、キーボード", "models": [("Privia PXシリーズ", "20,000〜80,000円"), ("Celviano（セルヴィアーノ）", "30,000〜150,000円"), ("CT-X / LK-Sシリーズ", "8,000〜25,000円"), ("CDP-Sシリーズ", "15,000〜40,000円")]},
    {"slug": "boss-kaitori", "name": "BOSS（ボス）", "category": "エフェクター", "instruments": "コンパクトエフェクター、マルチエフェクター", "models": [("DD-3 / DD-5 ヴィンテージ", "10,000〜50,000円"), ("RV-1 / DM-2 ヴィンテージ", "30,000〜150,000円"), ("GT-1000 / GT-1000CORE", "50,000〜120,000円"), ("Katana アンプシリーズ", "20,000〜80,000円"), ("一般コンパクト（OD-3/DS-1等）", "3,000〜15,000円")]},
    {"slug": "marshall-kaitori", "name": "Marshall（マーシャル）", "category": "ギターアンプ", "instruments": "真空管アンプ、ソリッドステートアンプ、キャビネット", "models": [("JTM45 / Plexi ヴィンテージ", "300,000〜1,500,000円"), ("JCM800 / JCM900", "80,000〜250,000円"), ("Silver Jubilee 2555", "150,000〜400,000円"), ("DSL / MG / Code シリーズ", "20,000〜80,000円"), ("Origin / Studio シリーズ", "30,000〜120,000円")]},
    {"slug": "vox-kaitori", "name": "VOX（ヴォックス）", "category": "ギターアンプ", "instruments": "真空管アンプ、コンボアンプ、エフェクター", "models": [("AC30 ヴィンテージ（1960年代）", "300,000〜800,000円"), ("AC30CC / AC30C2 / AC15", "60,000〜180,000円"), ("Night Train / Pathfinder", "15,000〜40,000円"), ("Hand-Wired シリーズ", "100,000〜250,000円")]},
    {"slug": "tama-kaitori", "name": "TAMA（タマ）", "category": "ドラム", "instruments": "ドラムセット、シンバルスタンド、ハードウェア", "models": [("Star Custom（最高峰）", "300,000〜800,000円"), ("Starclassic シリーズ", "150,000〜400,000円"), ("Superstar / Imperialstar", "50,000〜150,000円"), ("Iron Cobra（ペダル）", "10,000〜40,000円")]},
    {"slug": "sonor-kaitori", "name": "Sonor（ソナー）", "category": "ドラム", "instruments": "プロフェッショナルドラムセット、スネア", "models": [("SQ2 / SQ1（フラッグシップ）", "300,000〜800,000円"), ("AQ2 / AQ1", "100,000〜300,000円"), ("Force シリーズ", "60,000〜180,000円"), ("Vintage（HLD590等）", "150,000〜500,000円")]},
    {"slug": "ludwig-kaitori", "name": "Ludwig（ラディック）", "category": "ドラム", "instruments": "クラシックドラムセット、スネアドラム", "models": [("Black Beauty（スネア）", "100,000〜300,000円"), ("Supraphonic LM400 ヴィンテージ", "60,000〜200,000円"), ("Classic Maple / Birch", "150,000〜400,000円"), ("Acrolite / Atlas", "40,000〜100,000円")]},
    {"slug": "yanagisawa-kaitori", "name": "Yanagisawa（ヤナギサワ）", "category": "管楽器", "instruments": "サックス（ソプラノ・アルト・テナー・バリトン）", "models": [("WO20 / WO30 / WO37（プロモデル）", "300,000〜700,000円"), ("A-WO1 / T-WO1（スタンダード）", "180,000〜400,000円"), ("ヴィンテージ（1980年代以前）", "200,000〜600,000円"), ("シルバー / ブラスソプラノ", "200,000〜500,000円")]},
    {"slug": "bach-kaitori", "name": "Bach（バック）", "category": "管楽器", "instruments": "トランペット、トロンボーン、フリューゲルホルン", "models": [("Stradivarius トランペット 180ML/72/37", "200,000〜500,000円"), ("Stradivarius トロンボーン 42B/36B", "150,000〜400,000円"), ("Mercedes II トロンボーン", "70,000〜150,000円"), ("TR-200 / TR-300（スチューデント）", "30,000〜80,000円")]},
    {"slug": "buffet-kaitori", "name": "Buffet Crampon（ビュッフェ・クランポン）", "category": "管楽器", "instruments": "クラリネット、オーボエ、ファゴット", "models": [("R-13 クラリネット", "180,000〜350,000円"), ("Tosca / Festival クラリネット", "300,000〜600,000円"), ("E-11 / E-12F（ABS樹脂）", "30,000〜80,000円"), ("Tradition クラリネット", "200,000〜400,000円")]},
    {"slug": "steinway-kaitori", "name": "Steinway & Sons（スタインウェイ）", "category": "ピアノ", "instruments": "グランドピアノ、アップライトピアノ", "models": [("D型 コンサートグランド", "8,000,000〜15,000,000円"), ("B型 / C型 グランド", "3,000,000〜8,000,000円"), ("M型 / O型 / A型 グランド", "1,500,000〜5,000,000円"), ("S型 ベビーグランド", "1,000,000〜3,000,000円"), ("K型 アップライト", "800,000〜1,800,000円")]},
    {"slug": "bosendorfer-kaitori", "name": "Bösendorfer（ベーゼンドルファー）", "category": "ピアノ", "instruments": "グランドピアノ、アップライトピアノ", "models": [("280VC / 290 Imperial", "5,000,000〜12,000,000円"), ("214VC / 200", "3,000,000〜7,000,000円"), ("170 / 185", "1,800,000〜4,000,000円"), ("130CL アップライト", "1,500,000〜3,000,000円")]},
    {"slug": "shure-kaitori", "name": "Shure（シュア）", "category": "マイク", "instruments": "ダイナミックマイク、コンデンサーマイク、ワイヤレス", "models": [("SM7B（配信・ボーカル）", "30,000〜60,000円"), ("SM58 / SM57（業務スタンダード）", "5,000〜20,000円"), ("KSM44A / KSM8", "30,000〜100,000円"), ("BLX / GLX-D ワイヤレス", "30,000〜100,000円"), ("Beta シリーズ", "10,000〜40,000円")]},
    {"slug": "sennheiser-kaitori", "name": "Sennheiser（ゼンハイザー）", "category": "マイク", "instruments": "ダイナミックマイク、コンデンサーマイク、ヘッドホン", "models": [("MD441 / MD421", "30,000〜120,000円"), ("e935 / e945 / e835", "10,000〜40,000円"), ("HD600 / HD650 / HD800S（ヘッドホン）", "20,000〜250,000円"), ("EW Digital ワイヤレス", "100,000〜400,000円")]},
]


def build_page(maker: dict) -> str:
    name = maker["name"]
    name_only = name.split("（")[0]
    slug = maker["slug"]
    cat = maker["category"]
    title = f"【2026年最新】{name_only}買取相場ガイド｜全モデル査定額・高く売るコツ"
    description = f"{name}の{maker['instruments']}買取相場、人気モデル別の査定額目安、高く売る5つのコツ、おすすめ買取業者3社を解説。"
    h1 = f"{name_only}買取相場と高く売る完全ガイド"
    lead = f"{name}は{cat}カテゴリで世界的に高い評価を持つメーカーです。{maker['instruments']}など、ラインナップが幅広く、中古市場でも安定した需要があります。本記事では{name}の買取相場・モデル別査定額・高く売るコツを解説します。"

    model_rows = "".join(f"<tr><td>{m[0]}</td><td>{m[1]}</td></tr>" for m in maker["models"])
    faqs_list = [
        (f"{name_only}の古いモデルでも買取してもらえますか？", f"はい、{name}は中古市場で需要があるブランドです。製造後10年〜数十年経過したモデルでも、状態次第で買取可能です。特にヴィンテージ価値があるモデルは新品より高値になることもあります。"),
        (f"{name_only}の付属品がないと買取できませんか？", f"本体のみでも買取可能ですが、純正ケース・取扱説明書・保証書などが揃うと査定額が10〜30%アップします。可能な限り付属品を揃えましょう。"),
        (f"{name_only}を高く売るタイミングは？", "新生活前（1〜3月）、文化祭シーズン（9〜10月）が中古需要のピーク。また、新機種発表前は旧モデル価格が下がる前に売却するのがおすすめです。"),
        (f"故障している{name_only}でも買取してもらえますか？", "状態によります。動作する状態なら買取可能、明らかな故障でも修理工房を持つ買取業者なら部品取り目的で買取してくれることがあります。"),
    ]
    faqs_html = "\n        ".join(
        f'<details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">{q}<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">{a}</p></details>'
        for q, a in faqs_list
    )
    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs_list]}
    article_schema = {"@context": "https://schema.org", "@type": "Article", "headline": h1, "datePublished": "2026-05-17", "dateModified": "2026-05-17", "author": {"@type": "Organization", "name": "楽器買取びより"}, "publisher": {"@type": "Organization", "name": "楽器買取びより"}}

    return f'''import type {{ Metadata }} from "next";
import Link from "next/link";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
  openGraph: {{ title: "{title}", description: "{description}" }},
}};

function Schema() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(faq_schema, ensure_ascii=False))} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(article_schema, ensure_ascii=False))} }}}} />
    </>
  );
}}

export default function Page() {{
  return (
    <>
      <Schema />
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
        <ol className="flex flex-wrap items-center text-xs text-warm-gray">
          <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">{name_only}買取</span></li>
        </ol>
      </nav>
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">{cat}</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">{h1}</h1>
          <p className="text-warm-gray text-sm leading-relaxed">{lead}</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <div className="article-body">
        <h2>1. {name_only}のブランド概要</h2>
        <p>{name}は、{cat}カテゴリで長年にわたり愛されてきたメーカーです。{maker['instruments']}を製造し、プロからアマチュアまで幅広い層に支持されています。</p>
        <p>中古市場での{name_only}は、入門モデルから最上位プロモデルまで価格帯が広く、ヴィンテージ価値のあるモデルは新品以上の値段がつくことも珍しくありません。</p>

        <h2>2. {name_only}の人気モデル別買取相場</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>モデル</th><th>買取相場</th></tr></thead>
            <tbody>{model_rows}</tbody>
          </table>
        </div>
        <p>※相場は2026年5月時点の参考値。状態・付属品・買取業者により上下します。</p>

        <h2>3. 状態別の査定額目安</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>状態</th><th>査定額比率</th></tr></thead>
            <tbody>
              <tr><td>新品同様</td><td>100%</td></tr>
              <tr><td>非常に良い</td><td>80〜90%</td></tr>
              <tr><td>良い</td><td>60〜75%</td></tr>
              <tr><td>並</td><td>40〜55%</td></tr>
              <tr><td>難あり</td><td>10〜30%</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4. {name_only}を高く売る5つのコツ</h2>
        <ol>
          <li><strong>純正ケース・付属品を揃える</strong>: 取扱説明書・保証書・購入時の領収書まで</li>
          <li><strong>軽い清掃で見た目を整える</strong>: 深いクリーニングは業者に任せる</li>
          <li><strong>複数業者で相見積もり</strong>: 1社の査定額を鵜呑みにしない</li>
          <li><strong>需要期に売る</strong>: 1〜3月（新生活前）、9〜10月（文化祭前）</li>
          <li><strong>{cat}専門業者を選ぶ</strong>: {name_only}を正しく評価できる業者を選ぶ</li>
        </ol>

        <h2>5. {name_only}買取のおすすめ業者3社</h2>
        <ul>
          <li><strong>ヒカカク！</strong>: 一括査定。複数業者から見積もり比較で最高値を引き出せる</li>
          <li><strong>ウリエル</strong>: 出張買取専門。大型楽器も自宅で査定</li>
          <li><strong>ティファナ</strong>: 全国の楽器店ネットワークでの査定・即現金化</li>
        </ul>

        <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
          <p className="font-bold text-base mb-4 text-center text-accent-dark">{name_only}の買取価格を無料で確認</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
          </div>
        <p className="text-center mt-4 text-sm"><a href="/articles/gakki-kaitori-osusume/" className="text-accent-dark font-medium underline">楽器買取おすすめ業者の比較を見る →</a></p>
        </div>

        <h2>6. よくある質問</h2>
        {faqs_html}

        <h2>関連記事</h2>
        <ul>
          <li><Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">楽器の買取方法4つを徹底比較</Link></li>
          <li><Link href="/articles/takaku-uru-kotsu/" className="text-accent hover:underline">楽器を高く売るコツ完全ガイド</Link></li>
          <li><Link href="/articles/souba-ichiran/" className="text-accent hover:underline">楽器買取相場一覧</Link></li>
        </ul>
        </div>
      </article>
    </>
  );
}}
'''


def main():
    print(f"Generating {len(MAKERS)} Phase 4 articles...")
    for m in MAKERS:
        dir_path = ARTICLES_DIR / m["slug"]
        dir_path.mkdir(parents=True, exist_ok=True)
        (dir_path / "page.tsx").write_text(build_page(m), encoding="utf-8")
        print(f"  ✅ {m['slug']} ({m['name']})")
    print(f"✅ Done. {len(MAKERS)} articles")


if __name__ == "__main__":
    main()

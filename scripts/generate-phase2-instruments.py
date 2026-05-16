#!/usr/bin/env python3
"""
楽器買取びより Phase 2: 楽器カテゴリ拡張 20記事ジェネレータ

カテゴリ:
- 管楽器系 (5): トランペット/クラリネット/フルート/トロンボーン/オーボエ
- 和楽器 (4): 三味線/琴/和太鼓/尺八
- DJ/DTM (3): DJ機材/MIDIキーボード/オーディオインターフェース
- 大型・希少 (4): チェロ/コントラバス/ハープ/グランドピアノ
- 周辺機器 (4): エフェクター/ギターアンプ/シンセサイザー/マイク
"""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"

INSTRUMENTS = [
    # 管楽器系
    {
        "slug": "trumpet-kaitori", "name": "トランペット", "name_en": "Trumpet",
        "category": "管楽器",
        "outline": "金管楽器の代表格。ジャズ・クラシック・吹奏楽で需要が高い",
        "brands": [
            ("ヤマハ（YTR-2330〜9300）", "20,000〜350,000円"),
            ("バック（Stradivarius）", "200,000〜600,000円"),
            ("シルキー", "180,000〜500,000円"),
            ("ゲッツェン", "100,000〜300,000円"),
            ("カリキオ", "150,000〜400,000円"),
            ("シャーガル/中国製", "5,000〜30,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "80,000", "high": "600,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "clarinet-kaitori", "name": "クラリネット", "name_en": "Clarinet",
        "category": "管楽器",
        "outline": "オーケストラ・吹奏楽の主力木管楽器。グラナディラ材の希少性から中古でも需要安定",
        "brands": [
            ("ビュッフェ・クランポン（R-13, RC, Festival, Tosca）", "100,000〜700,000円"),
            ("ヤマハ（YCL-450〜CSGIII）", "30,000〜300,000円"),
            ("セルマー（Privilege, Recital）", "150,000〜500,000円"),
            ("クランポン トラディション", "150,000〜400,000円"),
            ("ヤマハ・スチューデント（YCL-255）", "20,000〜50,000円"),
        ],
        "price_ranges": {"low": "10,000", "mid": "100,000", "high": "700,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "flute-kaitori", "name": "フルート", "name_en": "Flute",
        "category": "管楽器",
        "outline": "銀メッキ・銀製・金製があり、素材と作り手で価格は数万円〜数百万円まで幅広い",
        "brands": [
            ("ムラマツ（Standard〜DS, GX, EX-III）", "100,000〜1,500,000円"),
            ("サンキョウ", "150,000〜600,000円"),
            ("ヤマハ（YFL-211〜CSP）", "20,000〜500,000円"),
            ("パウエル", "300,000〜2,000,000円"),
            ("ブランネン", "500,000〜3,000,000円"),
            ("初心者モデル（中国製等）", "5,000〜30,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "120,000", "high": "3,000,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "trombone-kaitori", "name": "トロンボーン", "name_en": "Trombone",
        "category": "管楽器",
        "outline": "テナー・テナーバス・バスの3種が主流。ジャズ・吹奏楽・オーケストラで需要",
        "brands": [
            ("バック（42B, 36B）", "150,000〜400,000円"),
            ("ヤマハ（YSL-446〜882）", "40,000〜300,000円"),
            ("コーン（88H, 8H）", "120,000〜350,000円"),
            ("シャイアース", "100,000〜250,000円"),
            ("ゲッツェン", "80,000〜250,000円"),
            ("入門モデル", "10,000〜40,000円"),
        ],
        "price_ranges": {"low": "10,000", "mid": "100,000", "high": "400,000"},
        "needs_appraisal": False,
    },
    {
        "slug": "oboe-kaitori", "name": "オーボエ", "name_en": "Oboe",
        "category": "管楽器",
        "outline": "ダブルリード木管楽器の代表格。希少性と高度な調整技術により高値傾向",
        "brands": [
            ("マリゴ（901, 2001）", "300,000〜800,000円"),
            ("ロレー（D2）", "300,000〜700,000円"),
            ("リグータ", "400,000〜900,000円"),
            ("ヤマハ（YOB-241〜841）", "80,000〜500,000円"),
            ("ハンス・カイルベルト", "300,000〜700,000円"),
        ],
        "price_ranges": {"low": "30,000", "mid": "300,000", "high": "900,000"},
        "needs_appraisal": True,
    },
    # 和楽器
    {
        "slug": "shamisen-kaitori", "name": "三味線", "name_en": "Shamisen",
        "category": "和楽器",
        "outline": "津軽・地唄・長唄など種類により買取相場が異なる。胴の皮材（紅木・花梨等）で査定額が大きく変動",
        "brands": [
            ("紅木（こうき）製 高級品", "100,000〜500,000円"),
            ("花梨（かりん）製 中級品", "50,000〜200,000円"),
            ("樫・栴檀（せんだん）製 入門品", "10,000〜50,000円"),
            ("津軽三味線", "30,000〜300,000円"),
            ("地唄三味線", "20,000〜200,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "80,000", "high": "500,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "koto-kaitori", "name": "琴（こと）", "name_en": "Koto",
        "category": "和楽器",
        "outline": "13弦・17弦・20弦などがあり、桐材の樹齢と作り手の銘で価格が決まる。胴に「綾杉彫り」がある個体は高評価",
        "brands": [
            ("名工銘入り（伝統工芸士）", "200,000〜1,500,000円"),
            ("綾杉彫り桐製", "100,000〜500,000円"),
            ("中級桐製", "30,000〜150,000円"),
            ("普及品", "5,000〜50,000円"),
            ("17弦・20弦琴", "150,000〜800,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "100,000", "high": "1,500,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "wadaiko-kaitori", "name": "和太鼓", "name_en": "Wadaiko",
        "category": "和楽器",
        "outline": "宮太鼓・締太鼓・桶胴太鼓などサイズ・種類による幅が大きい。欅・栓などの材質と職人の手仕事で価格決定",
        "brands": [
            ("欅一木造り 大型（2尺以上）", "300,000〜1,500,000円"),
            ("欅張り合わせ 中型", "100,000〜400,000円"),
            ("栓・カヤ材", "50,000〜200,000円"),
            ("締太鼓", "30,000〜150,000円"),
            ("桶胴太鼓", "20,000〜100,000円"),
            ("樹脂胴 入門", "5,000〜30,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "100,000", "high": "1,500,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "shakuhachi-kaitori", "name": "尺八", "name_en": "Shakuhachi",
        "category": "和楽器",
        "outline": "竹材・節の数・地塗りの有無で価格が大きく変動。銘入り・名工製は数十万円台",
        "brands": [
            ("名工銘入り（人間国宝級）", "300,000〜3,000,000円"),
            ("地塗り高級品", "100,000〜500,000円"),
            ("中級品", "30,000〜150,000円"),
            ("入門品（漆塗り）", "5,000〜30,000円"),
            ("プラスチック製", "1,000〜10,000円"),
        ],
        "price_ranges": {"low": "1,000", "mid": "80,000", "high": "3,000,000"},
        "needs_appraisal": True,
    },
    # DJ/DTM
    {
        "slug": "dj-kizai-kaitori", "name": "DJ機材", "name_en": "DJ Equipment",
        "category": "DJ/DTM",
        "outline": "DJ機材はターンテーブル・CDJ・DJコントローラー・ミキサーが主流。Pioneer DJ・Technicsが二大ブランド",
        "brands": [
            ("Pioneer DJ CDJ-3000", "180,000〜250,000円"),
            ("Pioneer DJ DJM-A9", "150,000〜250,000円"),
            ("Technics SL-1200MK7", "80,000〜120,000円"),
            ("Pioneer DJ DDJ-FLX10/FLX6", "50,000〜180,000円"),
            ("Numark / Reloop コントローラー", "10,000〜80,000円"),
            ("Native Instruments TRAKTOR", "20,000〜100,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "80,000", "high": "250,000"},
        "needs_appraisal": False,
    },
    {
        "slug": "midi-keyboard-kaitori", "name": "MIDIキーボード", "name_en": "MIDI Keyboard",
        "category": "DJ/DTM",
        "outline": "DTM・宅録の必需品。鍵盤数（25/49/61/88）と機能（プログラマブル・アフタータッチ）で価格決定",
        "brands": [
            ("Native Instruments Komplete Kontrol S88", "60,000〜120,000円"),
            ("Akai MPK Series", "20,000〜80,000円"),
            ("Roland A-Pro / FA Series", "30,000〜100,000円"),
            ("Arturia KeyLab", "30,000〜120,000円"),
            ("Korg MicroKey/nanoKey", "5,000〜20,000円"),
            ("M-Audio Oxygen", "10,000〜40,000円"),
        ],
        "price_ranges": {"low": "3,000", "mid": "30,000", "high": "120,000"},
        "needs_appraisal": False,
    },
    {
        "slug": "audio-interface-kaitori", "name": "オーディオインターフェース", "name_en": "Audio Interface",
        "category": "DJ/DTM",
        "outline": "DTM・配信・宅録の心臓部。入出力数・プリアンプ品質・USB/Thunderbolt接続が査定の鍵",
        "brands": [
            ("Universal Audio Apollo Twin / x4", "80,000〜250,000円"),
            ("RME Babyface Pro / Fireface UCX", "100,000〜200,000円"),
            ("MOTU M2/M4/828", "20,000〜100,000円"),
            ("Focusrite Scarlett 2i2/4i4/18i20", "10,000〜80,000円"),
            ("Steinberg UR Series", "10,000〜60,000円"),
            ("PreSonus Studio Series", "10,000〜50,000円"),
        ],
        "price_ranges": {"low": "5,000", "mid": "40,000", "high": "250,000"},
        "needs_appraisal": False,
    },
    # 大型・希少
    {
        "slug": "cello-kaitori", "name": "チェロ", "name_en": "Cello",
        "category": "弦楽器",
        "outline": "数千円〜数千万円まで幅が広い弦楽器。オールド（1800年代以前）は数百万〜数億の世界",
        "brands": [
            ("オールド・イタリアン", "5,000,000〜数億円"),
            ("モダン・フレンチ", "800,000〜5,000,000円"),
            ("国産工房（東京弦楽器・松井等）", "200,000〜1,500,000円"),
            ("ヤマハ V/SVシリーズ", "100,000〜500,000円"),
            ("カール・ヘフナー", "150,000〜600,000円"),
            ("初心者モデル（中国製等）", "20,000〜80,000円"),
        ],
        "price_ranges": {"low": "20,000", "mid": "500,000", "high": "50,000,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "contrabass-kaitori", "name": "コントラバス", "name_en": "Contrabass",
        "category": "弦楽器",
        "outline": "オーケストラの最低音弦楽器。サイズの大きさから運搬・保管難易度高。出張買取が主流",
        "brands": [
            ("オールド・ヨーロピアン", "1,500,000〜10,000,000円"),
            ("国産工房", "300,000〜1,200,000円"),
            ("ピサシリーズ（Eastman等）", "200,000〜600,000円"),
            ("カール・ヘフナー", "200,000〜700,000円"),
            ("ヤマハ", "100,000〜400,000円"),
            ("初心者モデル", "50,000〜150,000円"),
        ],
        "price_ranges": {"low": "30,000", "mid": "400,000", "high": "10,000,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "harp-kaitori", "name": "ハープ", "name_en": "Harp",
        "category": "弦楽器",
        "outline": "ペダルハープ（グランドハープ）とレバーハープ（アイリッシュハープ）に分類。希少性高",
        "brands": [
            ("Lyon & Healy（リヨンヒーリー）", "1,500,000〜8,000,000円"),
            ("Salvi（サルヴィ）", "1,200,000〜6,000,000円"),
            ("青山ハープ（国産）", "500,000〜2,500,000円"),
            ("レバーハープ（Camac等）", "300,000〜1,500,000円"),
            ("小型ケルティックハープ", "100,000〜500,000円"),
        ],
        "price_ranges": {"low": "100,000", "mid": "1,500,000", "high": "8,000,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "grand-piano-kaitori", "name": "グランドピアノ", "name_en": "Grand Piano",
        "category": "ピアノ",
        "outline": "ホール用大型からリビング向けまでサイズ別。ヤマハ・カワイ・スタインウェイが三大ブランド",
        "brands": [
            ("スタインウェイ&サンズ（A・B・C・D・O型）", "1,500,000〜15,000,000円"),
            ("ベヒシュタイン", "1,000,000〜8,000,000円"),
            ("ベーゼンドルファー", "1,500,000〜12,000,000円"),
            ("ヤマハ（C・S・CFシリーズ）", "300,000〜3,000,000円"),
            ("カワイ（KG・RXシリーズ）", "200,000〜1,500,000円"),
            ("ディアパソン", "150,000〜800,000円"),
        ],
        "price_ranges": {"low": "100,000", "mid": "1,000,000", "high": "15,000,000"},
        "needs_appraisal": True,
    },
    # 周辺機器
    {
        "slug": "effector-kaitori", "name": "エフェクター", "name_en": "Effector / Pedal",
        "category": "周辺機器",
        "outline": "ギター・ベース用エフェクトペダル。ヴィンテージ・限定モデル・ハンドメイドペダルは高値",
        "brands": [
            ("Klon Centaur ヴィンテージ", "300,000〜600,000円"),
            ("Strymon（TimeLine, BigSky, Mobius）", "30,000〜80,000円"),
            ("BOSS 名機（DD-3, OD-1, RV-1, DS-1）", "5,000〜80,000円"),
            ("Eventide H9 / TimeFactor", "30,000〜100,000円"),
            ("MXR/Dunlop", "5,000〜30,000円"),
            ("Maxon ヴィンテージ", "30,000〜150,000円"),
        ],
        "price_ranges": {"low": "1,000", "mid": "20,000", "high": "600,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "guitar-amp-kaitori", "name": "ギターアンプ", "name_en": "Guitar Amplifier",
        "category": "周辺機器",
        "outline": "真空管アンプ（チューブ）はヴィンテージ価値が高い。Marshall・Fender・Voxが三大ブランド",
        "brands": [
            ("Fender Twin/Deluxe Reverb ヴィンテージ", "200,000〜800,000円"),
            ("Marshall JTM45/Plexi", "300,000〜1,500,000円"),
            ("Vox AC30 ヴィンテージ", "150,000〜600,000円"),
            ("Mesa/Boogie", "80,000〜400,000円"),
            ("Roland JC-120 / JC-40", "30,000〜80,000円"),
            ("入門モデル（ソリッドステート）", "5,000〜30,000円"),
        ],
        "price_ranges": {"low": "3,000", "mid": "80,000", "high": "1,500,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "synthesizer-kaitori", "name": "シンセサイザー", "name_en": "Synthesizer",
        "category": "周辺機器",
        "outline": "アナログ・デジタル・ハイブリッドあり。70-80年代ヴィンテージは数十万〜数百万円",
        "brands": [
            ("Moog Minimoog / Voyager", "300,000〜1,200,000円"),
            ("Sequential Prophet 5 / 10 / OB-6", "200,000〜700,000円"),
            ("Roland Jupiter-8 / Juno-60", "300,000〜1,000,000円"),
            ("Yamaha DX7 / CS-80", "30,000〜2,000,000円"),
            ("Korg Wavestate/Prologue", "60,000〜200,000円"),
            ("Behringer / Arturia（中級）", "20,000〜80,000円"),
        ],
        "price_ranges": {"low": "10,000", "mid": "100,000", "high": "2,000,000"},
        "needs_appraisal": True,
    },
    {
        "slug": "microphone-kaitori", "name": "マイク", "name_en": "Microphone",
        "category": "周辺機器",
        "outline": "ボーカル・楽器録音・配信用。スタジオ用コンデンサーマイクと業務ライブマイクで需要",
        "brands": [
            ("Neumann U47/U67/U87", "300,000〜1,500,000円"),
            ("AKG C414 / C12", "80,000〜600,000円"),
            ("Sennheiser MD421 / MD441", "30,000〜120,000円"),
            ("Shure SM7B / SM58 / SM57", "10,000〜80,000円"),
            ("Audio-Technica AT2020/AT4040", "8,000〜40,000円"),
            ("Rode NT1 / NT2", "10,000〜50,000円"),
        ],
        "price_ranges": {"low": "3,000", "mid": "30,000", "high": "1,500,000"},
        "needs_appraisal": True,
    },
]


def md_to_html(text: str) -> str:
    return re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)


def build_article(inst: dict) -> str:
    name = inst["name"]
    name_en = inst["name_en"]
    slug = inst["slug"]
    cat = inst["category"]

    title = f"【2026年最新】{name}買取相場ガイド｜メーカー別査定額・高く売るコツ・おすすめ業者3選"
    description = f"{name}（{name_en}）の買取相場、メーカー別の査定額目安、状態別の評価、高く売る5つのコツ、おすすめ買取業者3社を徹底解説。{cat}の買取で損しないための完全ガイド。"

    brand_rows = "".join(
        f"<tr><td>{b[0]}</td><td>{b[1]}</td></tr>" for b in inst["brands"]
    )

    appraisal_section = ""
    if inst.get("needs_appraisal"):
        appraisal_section = f"""
        <h2 id="appraisal">{name}の真贋・査定のポイント</h2>
        <p>{name}は高額品ほど贋作・コピー品が市場に流通しています。買取査定では以下の点が重視されます:</p>
        <ul>
          <li><strong>製造番号（シリアル）</strong>: メーカーの正規シリアル番号と一致するか</li>
          <li><strong>刻印・ロゴ</strong>: 正規品とフォント・位置が同じか</li>
          <li><strong>材質</strong>: 表記された素材と実物が一致するか</li>
          <li><strong>仕上げの精度</strong>: 正規品レベルの仕上げか</li>
          <li><strong>付属品</strong>: 純正ケース・保証書・購入時の領収書</li>
        </ul>
        <p>不安な場合は、{name}の専門知識を持つ買取業者で鑑定査定を依頼しましょう。</p>
"""

    faqs_list = [
        (f"{name}は古くても買取してもらえますか？", f"はい、{name}は中古市場でも需要があるため、メーカー・状態・年式によっては10年以上前のモデルでも買取可能です。特にヴィンテージとして評価される個体は、新品よりも高値になるケースがあります。"),
        (f"{name}を高く売るタイミングは？", f"新生活前（1〜3月）、文化祭シーズン（9〜10月）は中古需要が高まる時期です。また、メーカーが新機種を発表する直前は旧モデルの相場が落ち着くため、早めの売却がおすすめです。"),
        (f"{name}の付属品がない場合、買取できますか？", f"本体のみでも買取は可能ですが、ケース・保証書・取扱説明書・購入時の領収書などが揃っていると査定額が10〜30%アップします。可能な限り付属品を揃えて出しましょう。"),
        (f"{name}が壊れていても買取できますか？", f"破損の程度によります。動作する状態であれば買取可能、明らかな故障があっても部品取り目的で買取できる業者もあります。まずは無料査定で確認しましょう。"),
    ]
    faqs_html = "\n        ".join(
        f'<details className="border border-warm-border rounded-lg p-4 mb-3"><summary className="font-bold cursor-pointer flex justify-between items-center">{q}<svg className="faq-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M19 9l-7 7-7-7" /></svg></summary><p className="mt-3 text-sm">{a}</p></details>'
        for q, a in faqs_list
    )
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in faqs_list
        ],
    }
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "datePublished": "2026-05-17",
        "dateModified": "2026-05-17",
        "author": {"@type": "Organization", "name": "楽器買取びより"},
        "publisher": {"@type": "Organization", "name": "楽器買取びより"},
    }

    return f'''import type {{ Metadata }} from "next";
import Link from "next/link";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
  openGraph: {{
    title: "{title}",
    description: "{description}",
  }},
}};

function Breadcrumb() {{
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">{name}買取</span></li>
      </ol>
    </nav>
  );
}}

function CtaBox() {{
  return (
    <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
      <p className="font-bold text-base mb-4 text-center text-accent-dark">{name}の買取価格を無料で確認</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
      </div>
    </div>
  );
}}

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
      <Breadcrumb />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">{cat}</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">{name}の買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm leading-relaxed">{name}（{name_en}）は{inst['outline']}。本記事では、メーカー別の買取相場、状態別の査定額、高く売る5つのコツ、おすすめ買取業者3社を解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026-05-17</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#summary" className="hover:underline">1. {name}の特徴と市場概況</a></li>
            <li><a href="#brand-souba" className="hover:underline">2. メーカー別の買取相場</a></li>
            <li><a href="#state-price" className="hover:underline">3. 状態別の査定額目安</a></li>
            <li><a href="#how-to-sell" className="hover:underline">4. 高く売る5つのコツ</a></li>
            {"<li><a href='#appraisal' className='hover:underline'>5. 真贋・査定のポイント</a></li>" if inst.get("needs_appraisal") else ""}
            <li><a href="#partner" className="hover:underline">{6 if inst.get("needs_appraisal") else 5}. おすすめ買取業者3社</a></li>
            <li><a href="#faq" className="hover:underline">{7 if inst.get("needs_appraisal") else 6}. よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
        <h2 id="summary">1. {name}の特徴と市場概況</h2>
        <p>{name}は{inst['outline']}。{cat}カテゴリの中でも特に中古市場での需要が安定している楽器の一つです。</p>
        <p>2026年5月現在、{name}の買取相場は、入門モデルで{inst['price_ranges']['low']}円〜、中級モデルで約{inst['price_ranges']['mid']}円前後、プロ仕様の上位モデルは{inst['price_ranges']['high']}円までと幅広い価格帯になります。</p>
        <p>買取額を最大化するには、<strong>メーカー・モデル・状態・付属品</strong>の4要素が鍵となります。本記事では、それぞれの観点から{name}の買取相場を整理します。</p>

        <h2 id="brand-souba">2. メーカー別の買取相場</h2>
        <p>{name}は、メーカー・モデルによって買取相場が大きく異なります。代表的なブランドの相場目安は以下の通りです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>メーカー・モデル</th><th>買取相場</th></tr></thead>
            <tbody>{brand_rows}</tbody>
          </table>
        </div>
        <p>※相場は2026年5月時点の参考値。状態・付属品・買取業者により上下します。</p>

        <h2 id="state-price">3. 状態別の査定額目安</h2>
        <p>同じモデルでも、状態によって査定額は大きく変わります。{name}の状態別査定の目安は以下の通りです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>状態</th><th>査定額比率</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td>新品同様（未使用）</td><td>100%</td><td>箱・付属品・保証書すべて揃い、傷・汚れなし</td></tr>
              <tr><td>非常に良い（中古A）</td><td>80〜90%</td><td>軽微な使用感のみ、動作に問題なし</td></tr>
              <tr><td>良い（中古B）</td><td>60〜75%</td><td>目に見える使用感あり、動作良好</td></tr>
              <tr><td>並（中古C）</td><td>40〜55%</td><td>傷・汚れあり、軽い不具合の可能性</td></tr>
              <tr><td>難あり（ジャンク）</td><td>10〜30%</td><td>故障・破損あり、修理が必要</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="how-to-sell">4. 高く売る5つのコツ</h2>
        <ol>
          <li><strong>付属品を揃える</strong>: ケース、取扱説明書、保証書、購入時の領収書を揃えて出すと査定額が10〜30%アップ</li>
          <li><strong>クリーニングする</strong>: 軽い拭き取り清掃で見た目を整える。深いクリーニングは業者に任せる</li>
          <li><strong>複数業者で相見積もり</strong>: 1社の査定額を鵜呑みにせず、ヒカカク！等で複数業者を比較</li>
          <li><strong>繁忙期を狙う</strong>: 1〜3月（新生活前）、9〜10月（文化祭シーズン）は需要が高まる</li>
          <li><strong>専門業者を選ぶ</strong>: {cat}に強い買取業者なら、適正価格で査定してくれる</li>
        </ol>
{appraisal_section}
        <h2 id="partner">{6 if inst.get("needs_appraisal") else 5}. おすすめ買取業者3社</h2>
        <p>{name}の買取で実績のある3社を紹介します。それぞれ強みが異なるため、自分の状況に合わせて選ぶのがおすすめです。</p>
        <ul>
          <li><strong>ヒカカク！</strong>: 一括査定サービス。1度の入力で複数業者から見積もりが届き、最高値を選べる</li>
          <li><strong>ウリエル</strong>: 出張買取専門。大型・重量楽器（ピアノ・ハープ等）も自宅まで査定に来てくれる</li>
          <li><strong>ティファナ</strong>: 全国の楽器店ネットワーク。持ち込みで即現金化が可能</li>
        </ul>
        <p>まずは無料査定で、おおよその{name}の買取価格を確認してみましょう。</p>

        <CtaBox />

        <h2 id="faq">{7 if inst.get("needs_appraisal") else 6}. よくある質問</h2>
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
    print(f"Generating {len(INSTRUMENTS)} Phase 2 articles...")
    for inst in INSTRUMENTS:
        dir_path = ARTICLES_DIR / inst["slug"]
        dir_path.mkdir(parents=True, exist_ok=True)
        (dir_path / "page.tsx").write_text(build_article(inst), encoding="utf-8")
        print(f"  ✅ {inst['slug']} ({inst['name']})")
    print(f"\n✅ Done. {len(INSTRUMENTS)} articles created")


if __name__ == "__main__":
    main()

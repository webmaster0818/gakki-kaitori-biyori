#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""G1相場データバンク拡張: souba-ranking未作成モデルのページを生成(2026-07-16)。
gibson-sg-kaitoriテンプレ準拠・ModelSpotPriceCard(週次相場自動更新)・FAQ/Article/Breadcrumb schema。
"""
import json, os

ROOT = "/Users/takashi.hasegawa/projects/gakki-kaitori-biyori"
DATE = "2026-07-16"

# モデル定義: slug -> (表示名, カテゴリkey, 見出し名, 1行説明, keywords, 相場帯レンジ文)
# category: guitar/acoustic/bass/amp/effector/wind/drums/synth → パンくず親
CAT = {
    "guitar": ("ギター買取", "/articles/guitar-kaitori/"),
    "acoustic": ("アコギ買取", "/articles/acoustic-guitar-kaitori/"),
    "bass": ("ベース買取", "/articles/bass-kaitori/"),
    "amp": ("アンプ買取", "/articles/amp-kaitori/"),
    "effector": ("エフェクター買取", "/articles/effector-kaitori/"),
    "wind": ("管楽器買取", "/articles/kangakki-kaitori/"),
    "drums": ("ドラム買取", "/articles/drum-kaitori/"),
    "synth": ("シンセ・キーボード買取", "/articles/synth-kaitori/"),
}

MODELS = {
    "gibson-es335-kaitori": ("Gibson ES-335", "ギブソン ES-335", "guitar", "Gibson", "/articles/gibson-kaitori/", "セミアコの代名詞。センターブロック入りのフルアコ／セミアコ構造で、ジャンルを問わず愛される名機です。"),
    "gibson-explorer-kaitori": ("Gibson Explorer", "ギブソン エクスプローラー", "guitar", "Gibson", "/articles/gibson-kaitori/", "近未来的なシェイプのハードロック／メタル定番モデル。個体差と年式で評価が大きく変わります。"),
    "gibson-flyingv-kaitori": ("Gibson Flying V", "ギブソン フライングV", "guitar", "Gibson", "/articles/gibson-kaitori/", "V字ボディの象徴的モデル。ヴィンテージ個体は高い評価がつく傾向があります。"),
    "gibson-firebird-kaitori": ("Gibson Firebird", "ギブソン ファイアーバード", "guitar", "Gibson", "/articles/gibson-kaitori/", "リバースボディとミニハムが個性的なモデル。中古市場で根強い需要があります。"),
    "fender-mustang-kaitori": ("Fender Mustang", "フェンダー ムスタング", "guitar", "Fender", "/articles/fender-kaitori/", "ショートスケールの人気モデル。オルタナ／インディー系での需要が高い一本です。"),
    "fender-jazzmaster-kaitori": ("Fender Jazzmaster", "フェンダー ジャズマスター", "guitar", "Fender", "/articles/fender-kaitori/", "オフセットボディのオルタナ定番。USA製・年式で相場が動きます。"),
    "fender-jaguar-kaitori": ("Fender Jaguar", "フェンダー ジャガー", "guitar", "Fender", "/articles/fender-kaitori/", "ショートスケール・多機能スイッチが特徴のオフセットギター。"),
    "prs-se-kaitori": ("PRS SE", "PRS SE", "guitar", "PRS", "/articles/prs-kaitori/", "PRSの普及価格帯シリーズ。状態と付属品で査定が変わります。"),
    "esp-horizon-kaitori": ("ESP Horizon", "ESP ホライゾン", "guitar", "ESP", "/articles/esp-kaitori/", "国産ハイエンドの定番。メタル系で安定した需要があります。"),
    "ibanez-jem-kaitori": ("Ibanez JEM", "アイバニーズ JEM", "guitar", "Ibanez", "/articles/ibanez-kaitori/", "スティーヴ・ヴァイのシグネチャー。モノグリップやピラミッドインレイが象徴的です。"),
    "martin-000-kaitori": ("Martin 000-28", "マーティン 000-28", "acoustic", "Martin", "/articles/martin-kaitori/", "小ぶりなボディでフィンガーピッキングにも人気のマーティン定番。"),
    "martin-d45-kaitori": ("Martin D-45", "マーティン D-45", "acoustic", "Martin", "/articles/martin-kaitori/", "マーティンの最高峰ドレッドノート。ヴィンテージは非常に高い評価がつきます。"),
    "warwick-thumb-kaitori": ("Warwick Thumb", "ワーウィック サム", "bass", "Warwick", "/articles/bass-kaitori/", "独特のネックスルー構造とサウンドで人気のドイツ製ハイエンドベース。"),
    "rickenbacker-4003-kaitori": ("Rickenbacker 4003", "リッケンバッカー 4003", "bass", "Rickenbacker", "/articles/bass-kaitori/", "唯一無二のサウンドとルックスを持つリッケンバッカーの定番ベース。"),
    "fender-deluxereverb-kaitori": ("Fender Deluxe Reverb", "フェンダー デラックスリバーブ", "amp", "Fender", "/articles/amp-kaitori/", "録音・ライブ両用で定評のあるチューブコンボ。年式で評価が分かれます。"),
    "vox-ac30-kaitori": ("VOX AC30", "VOX AC30", "amp", "VOX", "/articles/amp-kaitori/", "ブリティッシュサウンドの代名詞。定番チューブアンプとして安定した需要。"),
    "roland-jc120-kaitori": ("Roland JC-120", "ローランド JC-120", "amp", "Roland", "/articles/amp-kaitori/", "クリーンの定番ジャズコーラス。スタジオ常設の超定番モデルです。"),
    "mesaboogie-markv-kaitori": ("Mesa Boogie Mark V", "メサブギー マークV", "amp", "Mesa Boogie", "/articles/amp-kaitori/", "多彩なモードを持つハイエンドチューブアンプ。ハイゲイン系で人気。"),
    "boss-bd2-kaitori": ("BOSS BD-2", "BOSS BD-2 Blues Driver", "effector", "BOSS", "/articles/boss-kaitori/", "定番オーバードライブ。手頃な価格帯ですが安定した需要があります。"),
    "ibanez-ts808-kaitori": ("Ibanez TS808", "アイバニーズ TS808", "effector", "Ibanez", "/articles/ibanez-kaitori/", "伝説的チューブスクリーマー。復刻・ヴィンテージで評価が異なります。"),
    "ehx-bigmuff-kaitori": ("Electro-Harmonix Big Muff", "エレハモ ビッグマフ", "effector", "Electro-Harmonix", "/articles/effector-kaitori/", "ファズの定番。年代・バージョンでコレクター需要が変わります。"),
    "yamaha-ytr8335-kaitori": ("YAMAHA YTR-8335", "ヤマハ YTR-8335", "wind", "YAMAHA", "/articles/yamaha-kaitori/", "Xenoシリーズのプロ向けトランペット。管楽器買取で安定需要があります。"),
    "buffet-r13-kaitori": ("Buffet Crampon R13", "クランポン R13", "wind", "Buffet Crampon", "/articles/kangakki-kaitori/", "クラリネットの世界的定番。プロ・アマ問わず需要の高いモデルです。"),
    "muramatsu-flute-kaitori": ("Muramatsu Flute", "ムラマツ フルート", "wind", "Muramatsu", "/articles/kangakki-kaitori/", "国産最高峰フルートブランド。銀・金の素材や型番で相場が大きく動きます。"),
    "bach-42-trombone-kaitori": ("Bach 42 Trombone", "バック 42 トロンボーン", "wind", "Bach", "/articles/kangakki-kaitori/", "テナーバストロンボーンの定番。オーケストラ・吹奏楽で広く使われます。"),
    "tama-starclassic-kaitori": ("TAMA Starclassic", "タマ スタークラシック", "drums", "TAMA", "/articles/drum-kaitori/", "国産ハイエンドドラム。素材・構成で相場が動く人気シリーズです。"),
    "dw-collectors-kaitori": ("DW Collector's", "DW コレクターズ", "drums", "DW", "/articles/drum-kaitori/", "米国ハイエンドドラムの代名詞。カスタム構成が多く個体差があります。"),
    "ludwig-supraphonic-kaitori": ("Ludwig Supraphonic", "ラディック スープラフォニック", "drums", "Ludwig", "/articles/drum-kaitori/", "スネアの定番中の定番。録音現場でも愛用される名機です。"),
    "roland-juno-kaitori": ("Roland Juno", "ローランド Juno", "synth", "Roland", "/articles/synth-kaitori/", "ヴィンテージから現行まで人気のシンセ。型番で評価が大きく異なります。"),
    "nord-stage-kaitori": ("Nord Stage", "ノード ステージ", "synth", "Nord", "/articles/synth-kaitori/", "ステージキーボードの定番。プロ需要が高く中古も安定しています。"),
    "moog-subsequent37-kaitori": ("Moog Subsequent 37", "モーグ サブスィークエント37", "synth", "Moog", "/articles/synth-kaitori/", "アナログシンセの名門Moogの人気モデル。太いサウンドで需要があります。"),
    "korg-minilogue-kaitori": ("KORG minilogue", "コルグ ミニローグ", "synth", "KORG", "/articles/synth-kaitori/", "手頃なアナログポリシンセ。入門〜中級で安定した需要があります。"),
    "prs-custom24-kaitori": ("PRS Custom 24", "PRS カスタム24", "guitar", "PRS", "/articles/prs-kaitori/", "PRSの看板モデル。美しいトップ材と汎用性で高い人気を誇ります。"),
    "martin-d28-kaitori": ("Martin D-28", "マーティン D-28", "acoustic", "Martin", "/articles/martin-kaitori/", "ドレッドノートの世界標準。アコギ買取で最も需要の高い一本です。"),
    "taylor-814ce-kaitori": ("Taylor 814ce", "テイラー 814ce", "acoustic", "Taylor", "/articles/taylor-kaitori/", "モダンアコギの定番。エレアコ機能付きで幅広い層に人気です。"),
    "gibson-j45-kaitori": ("Gibson J-45", "ギブソン J-45", "acoustic", "Gibson", "/articles/gibson-kaitori/", "ラウンドショルダーの定番アコギ。ヴィンテージ人気も高いモデルです。"),
    "rickenbacker-330-kaitori": ("Rickenbacker 330", "リッケンバッカー 330", "guitar", "Rickenbacker", "/articles/guitar-kaitori/", "ジャングリーなサウンドが唯一無二のセミアコ。根強い需要があります。"),
    "gretsch-6120-kaitori": ("Gretsch 6120", "グレッチ 6120", "guitar", "Gretsch", "/articles/guitar-kaitori/", "ロカビリー〜ロックで愛されるフルアコ。個性的なルックスも魅力です。"),
    "ibanez-rg-kaitori": ("Ibanez RG", "アイバニーズ RG", "guitar", "Ibanez", "/articles/ibanez-kaitori/", "ハイスピード系の定番。プレステージ等グレードで相場が動きます。"),
    "musicman-stingray-kaitori": ("Music Man StingRay", "ミュージックマン スティングレイ", "bass", "Music Man", "/articles/bass-kaitori/", "パワフルなサウンドの定番ベース。中古市場で安定した需要があります。"),
    "fender-precisionbass-kaitori": ("Fender Precision Bass", "フェンダー プレシジョンベース", "bass", "Fender", "/articles/bass-kaitori/", "エレキベースの原点。USA製・年式で評価が変わる定番モデルです。"),
    "yamaha-c3-kaitori": ("YAMAHA C3", "ヤマハ C3", "synth", "YAMAHA", "/articles/piano-kaitori/", "定番のグランドピアノ。製造番号・状態で相場が動きます。※ピアノ"),
}

def esc_json(s): return json.dumps(s, ensure_ascii=False)

def faq_block(disp, low):
    faqs = [
        (f"{disp}の買取相場はいくらですか？", f"{disp}の買取相場は年式・状態・付属品により大きく異なります。本ページ上部の相場カードで、ヤフオク落札の実勢中央値（毎週自動更新）を確認できます。正確な査定額は無料査定でご確認ください。"),
        (f"古い{disp}でも買い取ってもらえますか？", f"はい、{disp}は中古市場で需要があるため、年式が古くても状態次第で買取可能なケースが多いです。ヴィンテージ価値が評価される個体もあります。"),
        (f"{disp}を高く売るにはどうすればいいですか？", "(1)複数業者で一括査定して相見積もりを取る、(2)純正ケース・付属品・保証書を揃える、(3)軽い清掃で見た目を整える、(4)需要が高まる時期に売る、の4点が基本です。深い修理・改造は自分で行わず業者に任せましょう。"),
    ]
    return "[" + ", ".join('{"@type": "Question", "name": %s, "acceptedAnswer": {"@type": "Answer", "text": %s}}' % (esc_json(q), esc_json(a)) for q,a in faqs) + "]"

count = 0
for slug, (en, disp, cat, brand, brand_url, desc) in MODELS.items():
    d = f"{ROOT}/app/articles/{slug}"
    if os.path.isdir(d):
        continue
    cat_label, cat_url = CAT[cat]
    os.makedirs(d, exist_ok=True)
    faq = faq_block(disp, 0)
    page = f'''import type {{ Metadata }} from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import ModelSpotPriceCard from "@/components/ModelSpotPriceCard";

export const metadata: Metadata = {{
  title: "{disp}の買取相場｜今週の実勢中央値・高く売るコツ【2026年7月最新】",
  description: "{disp}の買取相場をヤフオク落札の実勢中央値（毎週更新）で解説。{desc[:40]} 価格を左右するポイント、高く売るコツ、おすすめ買取業者まで。正確な査定額は無料査定で確認できます。",
  keywords: "{disp},{en} 買取,{en} 相場,{brand} 買取",
  alternates: {{ canonical: "/articles/{slug}/" }},
  openGraph: {{
    title: "{disp}の買取相場｜今週の実勢中央値・高く売るコツ【2026年7月最新】",
    description: "{disp}の買取相場・高く売るコツ・おすすめ業者を実勢データで解説。",
    url: "/articles/{slug}/",
    type: "article",
  }},
}};

function Schema() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {esc_json('{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": ' + faq + '}')} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {esc_json('{"@context": "https://schema.org", "@type": "Article", "headline": "' + disp + 'の買取相場と高く売るコツ（実勢データ付き）", "datePublished": "' + DATE + '", "dateModified": "' + DATE + '", "author": {"@type": "Organization", "name": "楽器買取びより"}, "publisher": {"@type": "Organization", "name": "楽器買取びより"}}')} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {esc_json('{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gakkikaitori-biyori.com/"}, {"@type": "ListItem", "position": 2, "name": "' + cat_label + '", "item": "https://gakkikaitori-biyori.com' + cat_url + '"}, {"@type": "ListItem", "position": 3, "name": "' + disp + '買取", "item": "https://gakkikaitori-biyori.com/articles/' + slug + '/"}]}')} }}}} />
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
          <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="{cat_url}" className="hover:text-accent transition-colors">{cat_label}</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">{disp}買取</span></li>
        </ol>
      </nav>
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">{disp}買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年7月最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">{disp}の買取相場と高く売るコツ</h1>
          <p className="text-warm-gray text-sm leading-relaxed">{desc}中古市場での需要をふまえ、実勢データと高く売るコツを解説します。</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年7月16日</p>
        </header>

        <ModelSpotPriceCard slug="{slug}" modelName="{en}" />

        <section id="souba" className="mb-10 mt-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{disp}の買取相場（実勢データの見方）</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">上の相場カードは、ヤフオク！の落札実績から算出した中央値（毎週自動更新）です。年式・状態・付属品の有無で実際の査定額は上下します。特に純正ケース・保証書・オリジナルパーツの有無は評価に大きく影響します。相場はあくまで目安で、買取額を保証するものではありません。</p>
        </section>

        <section id="factors" className="mb-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">買取価格を左右するポイント</h2>
          <ul className="space-y-2 text-foreground/90 leading-relaxed list-disc list-inside">
            <li><strong>年式・製造国</strong>: 同型でも製造年・製造国で評価が変わります</li>
            <li><strong>状態</strong>: 打痕・塗装剥がれ・電気系トラブルの有無</li>
            <li><strong>付属品</strong>: 純正ケース・保証書・オリジナルパーツ</li>
            <li><strong>改造の有無</strong>: 非純正パーツへの交換は評価が下がる場合があります</li>
          </ul>
        </section>

        <section id="tips" className="mb-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{disp}を高く売るコツ</h2>
          <ol className="space-y-2 text-foreground/90 leading-relaxed list-decimal list-inside">
            <li><strong>複数業者で相見積もり</strong>: 一括査定で最高値を引き出す</li>
            <li><strong>付属品を揃える</strong>: ケース・保証書・元箱で査定アップ</li>
            <li><strong>軽く清掃</strong>: 見た目の印象を整える（分解清掃は不要）</li>
            <li><strong>需要期に売る</strong>: 新生活前（1〜3月）は買取が活発</li>
          </ol>
          <p className="text-foreground/90 leading-relaxed mt-4">まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent-dark underline">ヒカカク！の一括査定</a>で複数業者の見積もりを比較し、その金額を基準に専門店の個別査定と組み合わせるのがおすすめです。</p>
        </section>

        <RelatedArticles slug="{slug}" />
      </article>
    </>
  );
}}
'''
    open(f"{d}/page.tsx", "w").write(page)
    count += 1

print(f"生成: {count}モデルページ")

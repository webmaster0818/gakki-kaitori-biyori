#!/usr/bin/env python3
"""
楽器買取びより Phase 6: 人気モデル別（型番レベル）下層記事 20本ジェネレータ

3階層構造: ホーム > カテゴリ記事 > ブランド記事 > モデル記事(本記事)
既存の yamaha-kaitori / piano-kaitori と同じ TypeScript page.tsx 構造に揃える:
  - metadata (title/description/keywords/openGraph/alternates.canonical)
  - BreadcrumbList + FAQPage + Article schema
  - RelatedArticles コンポーネント
"""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
SITE = "https://gakkikaitori-biyori.com"
DATE = "2026-05-28"

# 既存記事の日本語表示名（パンくず・関連リンク用）
CAT_LABEL = {
    "piano-kaitori": "ピアノ買取",
    "grand-piano-kaitori": "グランドピアノ買取",
    "guitar-kaitori": "ギター買取",
    "bass-kaitori": "ベース買取",
    "saxophone-kaitori": "サックス買取",
    "trumpet-kaitori": "トランペット買取",
    "guitar-amp-kaitori": "ギターアンプ買取",
    "drum-kaitori": "ドラム買取",
    "effector-kaitori": "エフェクター買取",
}
BRAND_LABEL = {
    "yamaha-kaitori": "YAMAHA買取",
    "kawai-kaitori": "KAWAI買取",
    "steinway-kaitori": "Steinway買取",
    "gibson-kaitori": "Gibson買取",
    "fender-kaitori": "Fender買取",
    "selmer-kaitori": "Selmer買取",
    "bach-kaitori": "Bach買取",
    "marshall-kaitori": "Marshall買取",
    "pearl-kaitori": "Pearl買取",
    "boss-kaitori": "BOSS買取",
    "ibanez-kaitori": "Ibanez買取",
}

# ─────────────────────────────────────────────────────────────
# 20モデルのデータ定義
#   price_rows : (年式・グレード, 相場目安, 備考) 行
#   spec       : 特徴・人気の理由（事実ベース）の段落リスト
#   factors    : 価格を左右するポイント（リスト項目）
#   tips       : 高く売るコツ（リスト項目）
#   faqs       : (質問, 回答)
# ─────────────────────────────────────────────────────────────
MODELS = [
    {
        "slug": "yamaha-u3-kaitori", "model": "ヤマハ U3", "badge": "ヤマハU3",
        "cat": "piano-kaitori", "brand": "yamaha-kaitori",
        "kw": "ヤマハ U3,U3買取,ヤマハ アップライト 買取,U3 相場,中古ピアノ 買取",
        "lead": "ヤマハ U3は高さ131cmの大型アップライトピアノで、豊かな音量と響きから一般家庭・音楽教室・学校で長く愛されてきた定番モデルです。中古市場でも流通量・需要ともに多く、アップライトの代表的な買取対象です。",
        "price_rows": [
            ("製造後10年以内（U3A／U30Aなど）", "8万〜20万円前後", "現行に近い世代。状態良好なら高値傾向"),
            ("1980〜90年代（U3H／U3Mなど）", "4万〜12万円前後", "流通量が多い世代。人気が安定"),
            ("1970年代以前の旧モデル", "2万〜6万円前後", "状態と外装次第。象牙鍵盤は要確認"),
        ],
        "spec": [
            "U3はヤマハのアップライトの中でも高さ131cmと背が高く、その分だけ弦長と響板面積が大きいため、コンパクトモデルより豊かでよく響く音量が得られます。",
            "兄弟機の<strong>U1（高さ121cm）</strong>と比べると、U3はパワーと低音の伸びで上回り、レッスン用・発表会用として支持されてきました。世代によりU3A・U3H・U3M・U30A など枝番が付きます。",
            "鍵盤・アクションの耐久性が高く、製造から数十年経っても整調・整音で実用レベルに戻せるため、中古でも継続的に需要があります。",
        ],
        "factors": [
            "<strong>製造年・製造番号</strong>: ヤマハは本体内部・フレームの製造番号から年代を特定できます。新しいほど高評価。",
            "<strong>外装の状態</strong>: 黒艶出し塗装の傷・退色、屋根や鍵盤蓋の状態。",
            "<strong>鍵盤・象牙の有無</strong>: 古い個体は象牙鍵盤の場合があり、取引が制限されることがあります（要確認）。",
            "<strong>付属品</strong>: 専用椅子・取扱説明書・調律記録があると印象が上がります。",
            "<strong>搬出環境</strong>: 階数・エレベーター有無・クレーン要否で搬出費の扱いが変わる場合があります。",
        ],
    },
    {
        "slug": "yamaha-u1-kaitori", "model": "ヤマハ U1", "badge": "ヤマハU1",
        "cat": "piano-kaitori", "brand": "yamaha-kaitori",
        "kw": "ヤマハ U1,U1買取,ヤマハ アップライト 買取,U1 相場,中古ピアノ 売る",
        "lead": "ヤマハ U1は高さ121cmのスタンダードなアップライトピアノで、ヤマハのアップライトの中で最も流通している定番モデルです。家庭用として扱いやすいサイズと安定した品質で、中古買取でも需要が高い1台です。",
        "price_rows": [
            ("製造後10年以内（U1A／U10Aなど）", "7万〜18万円前後", "現行世代に近く高値傾向"),
            ("1980〜90年代（U1H／U1Mなど）", "3万〜10万円前後", "最も流通する世代"),
            ("1970年代以前の旧モデル", "1.5万〜5万円前後", "状態と外装で変動"),
        ],
        "spec": [
            "U1は高さ121cmで、131cmのU3より一回りコンパクト。設置スペースを取りすぎず、一般家庭でも扱いやすいことから最も普及したヤマハアップライトです。",
            "音量・パワーはU3に一歩譲りますが、バランスの良い音色と高い信頼性で、初級〜中級のレッスン用として長年定番の地位にあります。",
            "流通量が非常に多いため中古相場は安定しており、買取業者も評価基準を持っているため査定がスムーズに進みやすいモデルです。",
        ],
        "factors": [
            "<strong>製造年・製造番号</strong>: フレーム刻印で年代を確認。新しいほど有利。",
            "<strong>外装・塗装の状態</strong>: 傷・退色・打痕の程度。",
            "<strong>消音・自動演奏ユニットの有無</strong>: 後付けのサイレント機能などは加点要素になることがあります。",
            "<strong>付属品</strong>: 椅子・説明書・保証書・調律記録。",
            "<strong>搬出環境</strong>: 設置階・搬出経路の状況。",
        ],
    },
    {
        "slug": "yamaha-yus5-kaitori", "model": "ヤマハ YUS5", "badge": "ヤマハYUS5",
        "cat": "piano-kaitori", "brand": "yamaha-kaitori",
        "kw": "ヤマハ YUS5,YUS5買取,ヤマハ アップライト 上位,YUS5 相場",
        "lead": "ヤマハ YUS5は高さ131cmのアップライト上位ラインYUSシリーズの最上位モデルです。グランドピアノに迫る表現力を狙って設計され、中古市場でも高い人気と買取価格を保っています。",
        "price_rows": [
            ("製造後5年以内（美品）", "20万〜45万円前後", "現行上位機。高額買取が期待できる"),
            ("製造後6〜15年", "12万〜30万円前後", "状態良好なら高値を維持"),
            ("旧YUS世代（YUSなど）", "8万〜20万円前後", "世代・状態により変動"),
        ],
        "spec": [
            "YUSシリーズはヤマハアップライトの上位ラインで、YUS5はその最上位。131cmの大型ボディに上位仕様のハンマー・弦・響板を組み合わせ、豊かな音量とダイナミクスを実現しています。",
            "現行のCFXコンサートグランドの設計思想を取り入れた音作りがうたわれ、アップライトながら表現力を求める層に支持されています。",
            "上位機ゆえ新品価格が高く、中古でも価値が落ちにくいため、状態が良ければアップライトの中でも高額買取が見込めるモデルです。",
        ],
        "factors": [
            "<strong>製造年</strong>: 上位機は新しいほど評価が高くなります。",
            "<strong>外装の状態</strong>: 高級モデルゆえ艶出し塗装の美観が重視されます。",
            "<strong>消音・録音機能の有無</strong>: サイレント仕様などは加点対象。",
            "<strong>付属品</strong>: 純正椅子・保証書・調律記録一式。",
            "<strong>搬出環境</strong>: 大型・重量級のため搬出条件を確認。",
        ],
    },
    {
        "slug": "kawai-k300-kaitori", "model": "カワイ K-300", "badge": "カワイK-300",
        "cat": "piano-kaitori", "brand": "kawai-kaitori",
        "kw": "カワイ K-300,K300買取,カワイ アップライト 買取,K-300 相場",
        "lead": "カワイ K-300は高さ122cmの現行アップライトピアノで、Kシリーズのスタンダードモデルです。NEOTEXシボ仕上げ鍵盤など現代的な仕様を備え、新品でも人気が高く、中古買取でも安定した需要があります。",
        "price_rows": [
            ("製造後5年以内（美品）", "12万〜30万円前後", "現行モデル。高値傾向"),
            ("製造後6〜12年", "8万〜20万円前後", "状態良好なら高値を維持"),
            ("旧K3／K30など先代", "4万〜12万円前後", "世代・状態により変動"),
        ],
        "spec": [
            "K-300はカワイの現行アップライトKシリーズの中心モデルで、高さ122cm。家庭・教室で扱いやすいサイズながら、しっかりとした響きを持ちます。",
            "鍵盤表面にNEOTEX（人工象牙・黒檀調シボ仕上げ）を採用し、指離れのよいタッチ感が特徴。アクションにはカワイ独自設計が用いられています。",
            "現行品として流通しているため部品供給・整備性が良く、買取業者の評価基準も明確で査定が安定しやすいモデルです。",
        ],
        "factors": [
            "<strong>製造年</strong>: 現行モデルは新しいほど高評価。",
            "<strong>外装・鍵盤の状態</strong>: シボ仕上げ鍵盤の摩耗や外装の傷。",
            "<strong>消音ユニットの有無</strong>: ATX等のサイレント仕様は加点要素。",
            "<strong>付属品</strong>: 椅子・説明書・保証書・調律記録。",
            "<strong>搬出環境</strong>: 設置階・搬出経路の状況。",
        ],
    },
    {
        "slug": "steinway-b211-kaitori", "model": "スタインウェイ B-211", "badge": "Steinway B-211",
        "cat": "grand-piano-kaitori", "brand": "steinway-kaitori",
        "kw": "スタインウェイ B-211,Steinway B211 買取,グランドピアノ 買取,B-211 相場",
        "lead": "スタインウェイ B-211（モデルB）は全長約211cmのグランドピアノで、コンサートグランドDに次ぐ表現力を持ち「完璧なピアノ」とも称される名機です。中古市場でも極めて高い価値を保ち、買取でも高額査定が期待できます。",
        "price_rows": [
            ("ハンブルク製・近年製（オーバーホール済等）", "数百万〜1,000万円超", "製造地・整備状態で大きく変動"),
            ("ハンブルク製・経年個体", "300万〜800万円前後", "状態と整備履歴が重要"),
            ("ニューヨーク製・ヴィンテージ", "個体差大", "年代・修復歴で評価が分かれる"),
        ],
        "spec": [
            "モデルB（B-211）は全長約211cmのグランドピアノで、サロン・スタジオ・ホールで広く使われます。スタインウェイのラインの中でも完成度が高く評価され「the perfect piano」と称されることがあります。",
            "製造地は<strong>ハンブルク（ドイツ）とニューヨーク（米国）</strong>の2拠点があり、音色傾向・部材・評価が異なります。中古査定でも製造地の確認が重要です。",
            "スタインウェイは資産価値が高く、適切に整備された個体は経年しても高値を維持。オーバーホール（再生）履歴の有無が査定を大きく左右します。",
        ],
        "factors": [
            "<strong>製造地（ハンブルク／ニューヨーク）</strong>: 製造番号・銘板で確認。",
            "<strong>製造年・製造番号</strong>: スタインウェイは番号から製造年を特定できます。",
            "<strong>オーバーホール・修復履歴</strong>: 響板・弦・アクションの整備状態。",
            "<strong>外装と内部の状態</strong>: 響板割れ・ピン緩みの有無。",
            "<strong>付属品・証明書</strong>: 保証書・整備記録・専用椅子。",
        ],
    },
    {
        "slug": "gibson-lespaul-standard-kaitori", "model": "ギブソン レスポール スタンダード", "badge": "LP Standard",
        "cat": "guitar-kaitori", "brand": "gibson-kaitori",
        "kw": "ギブソン レスポール スタンダード,Les Paul Standard 買取,Gibson 買取,レスポール 相場",
        "lead": "ギブソン レスポール スタンダードは、メイプルトップ＋マホガニーバックにハムバッカーを2基搭載した、エレキギターを代表する不朽の名機です。中古市場でも常に高い需要があり、買取でも安定して高額査定が期待できます。",
        "price_rows": [
            ("現行USA製 Standard（50s／60s）", "12万〜25万円前後", "年式・仕様・状態で変動"),
            ("2000〜2010年代 USA製", "8万〜20万円前後", "人気カラー・希少仕様は加点"),
            ("ヴィンテージ／リイシュー上位", "数十万〜数百万円", "年代・希少性で大きく変動"),
        ],
        "spec": [
            "レスポール スタンダードはメイプルトップとマホガニーバックのセットネック構造で、太く甘いサステインのあるトーンが特徴。2基のハムバッカーでロック〜ブルースまで幅広く対応します。",
            "現行ラインでは<strong>50s（太めのネック）と60s（スリムテーパーネック）</strong>の仕様差があり、ネックシェイプの好みで人気・査定が分かれます。",
            "Gibson USA製は中古需要が安定。フレイムメイプルの杢（バールス・トップ）の出方やカラー（Bourbon Burst等）も評価に影響します。",
        ],
        "factors": [
            "<strong>製造年・シリアル</strong>: ヘッド裏のシリアルで製造年・工場を確認。",
            "<strong>ネック仕様（50s/60s）とピックアップ</strong>: 仕様で需要が変わります。",
            "<strong>トップ材の杢・カラー</strong>: 杢の美しさ・人気色は加点。",
            "<strong>改造・交換の有無</strong>: ペグ・ピックアップ等のオリジナル度。",
            "<strong>付属品</strong>: 純正ハードケース・保証書・調整工具。",
        ],
    },
    {
        "slug": "gibson-lespaul-custom-kaitori", "model": "ギブソン レスポール カスタム", "badge": "LP Custom",
        "cat": "guitar-kaitori", "brand": "gibson-kaitori",
        "kw": "ギブソン レスポール カスタム,Les Paul Custom 買取,Gibson 買取,レスポールカスタム 相場",
        "lead": "ギブソン レスポール カスタムは「Black Beauty」の愛称で知られる上位モデルで、多層バインディングと豪華な装飾、エボニー指板を備えた高級機です。中古市場でも別格の人気を誇り、買取でも高値が付きやすいモデルです。",
        "price_rows": [
            ("現行USA製 Custom（エボニー等）", "20万〜40万円前後", "仕様・カラー・状態で変動"),
            ("2000〜2010年代 USA製／Custom Shop", "15万〜40万円前後", "Custom Shop製は高値傾向"),
            ("ヴィンテージ／希少仕様", "数十万〜数百万円", "年代・希少性で大きく変動"),
        ],
        "spec": [
            "レスポール カスタムは標準のスタンダードより装飾が豪華で、多層バインディング・スプリットダイヤモンドインレイ・<strong>エボニー指板</strong>を採用。重厚で煌びやかな外観が特徴です。",
            "黒（エボニー）の個体は「Black Beauty」と呼ばれ象徴的存在。アルパインホワイト等のカラーも人気があります。",
            "Custom Shop（カスタムショップ）製は工房製の高付加価値モデルで、通常ラインより中古評価が高くなる傾向があります。",
        ],
        "factors": [
            "<strong>製造ライン（USA／Custom Shop）</strong>: 工房製は高評価。",
            "<strong>製造年・シリアル</strong>: ヘッド裏で確認。",
            "<strong>カラー・装飾の状態</strong>: バインディングのひび・退色。",
            "<strong>改造・交換の有無</strong>: オリジナルパーツの維持。",
            "<strong>付属品</strong>: 純正ハードケース・保証書・タグ類。",
        ],
    },
    {
        "slug": "gibson-sg-kaitori", "model": "ギブソン SG", "badge": "Gibson SG",
        "cat": "guitar-kaitori", "brand": "gibson-kaitori",
        "kw": "ギブソン SG,Gibson SG 買取,SG Standard 買取,SG 相場",
        "lead": "ギブソン SGはダブルカッタウェイの薄型マホガニーボディに、軽量さと鋭いアタックが魅力のエレキギターです。SG Standardをはじめ多くのバリエーションがあり、中古市場でも根強い人気を持ちます。",
        "price_rows": [
            ("現行USA製 SG Standard", "9万〜18万円前後", "年式・カラー・状態で変動"),
            ("SG Special／Tribute等", "5万〜12万円前後", "仕様により幅がある"),
            ("ヴィンテージ／上位モデル", "数十万円〜", "年代・希少性で大きく変動"),
        ],
        "spec": [
            "SGはオールマホガニーの薄型ボディで軽量。レスポールより軽く取り回しが良く、鋭いアタックとミドルの効いたトーンが特徴です。",
            "ダブルカッタウェイによりハイポジションの演奏性に優れ、ロックギタリストに広く愛用されてきました。<strong>SG Standard</strong>が中心モデルです。",
            "Special・Tribute・Juniorなど派生が多く、ピックアップ構成（ハムバッカー／P-90）や仕様で音色と査定が変わります。",
        ],
        "factors": [
            "<strong>製造年・シリアル</strong>: ヘッド裏で製造年・工場を確認。",
            "<strong>モデルグレード</strong>: Standard／Special等で評価が異なる。",
            "<strong>ピックアップ仕様</strong>: ハムバッカー／P-90など。",
            "<strong>改造・交換の有無</strong>: オリジナル度が重要。",
            "<strong>付属品</strong>: 純正ケース・保証書。",
        ],
    },
    {
        "slug": "fender-stratocaster-kaitori", "model": "フェンダー ストラトキャスター", "badge": "Stratocaster",
        "cat": "guitar-kaitori", "brand": "fender-kaitori",
        "kw": "フェンダー ストラトキャスター,Stratocaster 買取,Fender 買取,ストラト 相場",
        "lead": "フェンダー ストラトキャスターは、3基のシングルコイルとトレモロユニットを備えたエレキギターの世界標準とも言える名器です。USA・メキシコ・日本製などラインが多彩で、中古買取でも極めて需要が高いモデルです。",
        "price_rows": [
            ("American Professional／Ultra（USA）", "10万〜25万円前後", "年式・仕様・状態で変動"),
            ("Player／Vintera（メキシコ製）", "5万〜12万円前後", "コスパ良好で需要安定"),
            ("Custom Shop／ヴィンテージ", "数十万〜数百万円", "年代・希少性で大きく変動"),
        ],
        "spec": [
            "ストラトキャスターはアルダーまたはアッシュボディ、ボルトオンのメイプルネック、3シングルコイル＋5wayセレクター、シンクロナイズドトレモロを基本仕様とします。",
            "クリアで伸びやかなトーンとハーフトーンの絶妙な音色が魅力。<strong>製造国（USA／Mexico／Japan）</strong>で価格帯と評価が分かれます。",
            "Custom Shop製やヴィンテージは別格の評価。指板材（メイプル／ローズウッド）やカラーも査定に影響します。",
        ],
        "factors": [
            "<strong>製造国・シリアル</strong>: ネックプレート/ヘッドのシリアルで判別。",
            "<strong>製造年・仕様</strong>: ピックアップ・ブリッジ仕様。",
            "<strong>改造・交換の有無</strong>: ピックアップ・ペグ等のオリジナル度。",
            "<strong>カラー・指板材</strong>: 人気色・希少色は加点。",
            "<strong>付属品</strong>: 純正ケース・保証書・トレモロアーム。",
        ],
    },
    {
        "slug": "fender-telecaster-kaitori", "model": "フェンダー テレキャスター", "badge": "Telecaster",
        "cat": "guitar-kaitori", "brand": "fender-kaitori",
        "kw": "フェンダー テレキャスター,Telecaster 買取,Fender 買取,テレキャス 相場",
        "lead": "フェンダー テレキャスターは、量産エレキギターの先駆けとなったシンプルかつ完成された名器です。歯切れの良いトーンと独特のジャキッとしたサウンドで多ジャンルに愛用され、中古買取でも安定した需要があります。",
        "price_rows": [
            ("American Professional／Ultra（USA）", "10万〜24万円前後", "年式・仕様・状態で変動"),
            ("Player／Vintera（メキシコ製）", "5万〜12万円前後", "需要安定"),
            ("Custom Shop／ヴィンテージ", "数十万〜数百万円", "年代・希少性で大きく変動"),
        ],
        "spec": [
            "テレキャスターはシングルカッタウェイのソリッドボディに2基のシングルコイルを搭載。ブリッジ側の鋭いアタックと「テレキャストーン」と呼ばれる歯切れの良さが特徴です。",
            "構造がシンプルで堅牢、メンテナンス性も高く、カントリーからロックまで幅広く使われます。<strong>製造国</strong>で価格帯が分かれます。",
            "シンライン・デラックスなど派生もあり、ピックアップ構成やボディ構造の違いで査定が変わります。",
        ],
        "factors": [
            "<strong>製造国・シリアル</strong>: USA／Mexico／Japanで評価が異なる。",
            "<strong>製造年・仕様</strong>: ピックアップ・ブリッジ仕様。",
            "<strong>改造・交換の有無</strong>: オリジナルパーツの維持。",
            "<strong>カラー・指板材</strong>: 人気色は加点。",
            "<strong>付属品</strong>: 純正ケース・保証書。",
        ],
    },
    {
        "slug": "fender-jazzbass-kaitori", "model": "フェンダー ジャズベース", "badge": "Jazz Bass",
        "cat": "bass-kaitori", "brand": "fender-kaitori",
        "kw": "フェンダー ジャズベース,Jazz Bass 買取,Fender ベース 買取,ジャズベ 相場",
        "lead": "フェンダー ジャズベース（Jazz Bass）は、2基のシングルコイルとスリムなネックを備えたエレキベースの定番です。プレシジョンベースと並ぶ名機で、幅広いジャンルで使われ、中古買取でも高い人気があります。",
        "price_rows": [
            ("American Professional／Ultra（USA）", "10万〜24万円前後", "年式・仕様・状態で変動"),
            ("Player／Vintera（メキシコ製）", "6万〜13万円前後", "需要安定"),
            ("Custom Shop／ヴィンテージ", "数十万〜数百万円", "年代・希少性で大きく変動"),
        ],
        "spec": [
            "ジャズベースは2基のシングルコイルピックアップ（フロント／リア）を独立した音量ノブで操作でき、太い音から鋭いサウンドまで幅広く作れます。",
            "プレシジョンベースより<strong>ネックがスリム（ナット幅が狭い）</strong>で、指弾き・スラップともに扱いやすいのが特徴。多くのプロが使用します。",
            "製造国（USA／Mexico／Japan）で価格帯が分かれ、ヴィンテージやCustom Shop製は高額査定になります。",
        ],
        "factors": [
            "<strong>製造国・シリアル</strong>: ネック/ヘッドのシリアルで判別。",
            "<strong>製造年・仕様</strong>: ピックアップ・回路仕様（アクティブ/パッシブ）。",
            "<strong>改造・交換の有無</strong>: オリジナル度。",
            "<strong>カラー・指板材</strong>: 人気色は加点。",
            "<strong>付属品</strong>: 純正ケース・保証書。",
        ],
    },
    {
        "slug": "selmer-markvi-kaitori", "model": "セルマー マークVI", "badge": "Mark VI",
        "cat": "saxophone-kaitori", "brand": "selmer-kaitori",
        "kw": "セルマー マークVI,Mark VI 買取,Selmer サックス 買取,マーク6 相場",
        "lead": "セルマー マークVI（Mark VI）は、1954年から製造されたヴィンテージサックスの最高峰として世界中のプレイヤーに憧れられる名器です。製造番号により評価が大きく変わり、中古買取でも非常に高額な査定が期待できます。",
        "price_rows": [
            ("アルト 人気シリアル帯・美品", "数十万〜100万円超", "シリアル・状態で大きく変動"),
            ("テナー 人気シリアル帯・美品", "数十万〜数百万円", "テナーは特に高評価"),
            ("オリジナルラッカー残存・未改造個体", "高額傾向", "オリジナル度が重要"),
        ],
        "spec": [
            "マークVIはフランス・セルマー社が1954年から製造した名機で、抜けの良い音色と高い操作性で「サックスの王様」とも称されます。ジャズ・クラシック問わず多くの名手が愛用しました。",
            "<strong>製造番号（シリアル）</strong>で製造年が分かり、特定のシリアル帯（いわゆる『黄金期』）が特に高く評価されます。アルトとテナーで人気・相場が異なります。",
            "オリジナルラッカーの残存率、彫刻、未改造（ネックやキー周りに後年の改造が無い）であることが査定に大きく影響します。",
        ],
        "factors": [
            "<strong>製造番号（シリアル）</strong>: 製造年・人気帯の特定が最重要。",
            "<strong>オリジナルラッカー残存率</strong>: 再ラッカーは評価が下がる傾向。",
            "<strong>改造・修理歴</strong>: ネック交換・はんだ補修など。",
            "<strong>タンポ・キー機構の状態</strong>: 気密と動作の良否。",
            "<strong>付属品</strong>: オリジナルケース・ネック・マウスピース。",
        ],
    },
    {
        "slug": "selmer-series2-kaitori", "model": "セルマー シリーズII", "badge": "Series II",
        "cat": "saxophone-kaitori", "brand": "selmer-kaitori",
        "kw": "セルマー シリーズII,Series II 買取,Selmer サックス 買取,シリーズ2 相場",
        "lead": "セルマー シリーズII（Series II／Super Action 80 Series II）は、現代のプロ・上級者向けスタンダードとして広く使われるサックスです。中古市場でも安定した需要があり、状態の良い個体は高値で取引されます。",
        "price_rows": [
            ("アルト 美品", "15万〜35万円前後", "状態・付属品で変動"),
            ("テナー 美品", "20万〜45万円前後", "テナーは高評価傾向"),
            ("ジュビリー／彫刻入り等", "加点傾向", "仕様・年式で変動"),
        ],
        "spec": [
            "シリーズIIは1980年代に登場した「Super Action 80」の発展形で、均一でコントロールしやすい吹奏感を持ち、吹奏楽・クラシックで定番の地位を築きました。",
            "後継の<strong>シリーズIII</strong>やリファレンス系と比べ、シリーズIIは扱いやすさとバランスで根強い人気があります。アルト・テナーともに需要が安定。",
            "現行に近い世代のため部品供給・整備性が良く、買取査定も比較的安定しています。ジュビリー（記念）仕様などは加点要素です。",
        ],
        "factors": [
            "<strong>製造番号・年式</strong>: 新しいほど評価が高い傾向。",
            "<strong>ラッカー・彫刻の状態</strong>: 外観の美観。",
            "<strong>タンポ・キー機構の状態</strong>: 気密・調整の良否。",
            "<strong>改造・修理歴</strong>: オリジナル度。",
            "<strong>付属品</strong>: 純正ケース・ネック・マウスピース。",
        ],
    },
    {
        "slug": "yamaha-yas62-kaitori", "model": "ヤマハ YAS-62", "badge": "YAS-62",
        "cat": "saxophone-kaitori", "brand": "yamaha-kaitori",
        "kw": "ヤマハ YAS-62,YAS-62 買取,ヤマハ アルトサックス 買取,YAS62 相場",
        "lead": "ヤマハ YAS-62は、プロフェッショナルモデルへの入口として長年支持されてきたアルトサックスの定番です。確かな品質と扱いやすさで吹奏楽からプロまで幅広く使われ、中古買取でも安定した需要があります。",
        "price_rows": [
            ("現行世代（第3世代など）・美品", "8万〜18万円前後", "年式・状態で変動"),
            ("旧世代（初代・第2世代）", "4万〜10万円前後", "世代・状態により幅がある"),
            ("Purple Logo等 旧ヴィンテージ", "加点傾向", "コレクター需要がある場合も"),
        ],
        "spec": [
            "YAS-62はヤマハのアルトサックスの中でプロモデルへの橋渡し的存在で、明るく芯のある音色と安定したキーメカニズムが特徴です。",
            "世代を重ねて改良されており、初代・第2世代・現行（第3世代）で仕様が異なります。古い<strong>Purple Logo</strong>世代は独特の評価を受けることがあります。",
            "学校・吹奏楽での採用が多く中古の流通量も多いため、相場が比較的読みやすく査定が安定しています。",
        ],
        "factors": [
            "<strong>製造世代・製造番号</strong>: 世代で評価が異なる。",
            "<strong>ラッカー・外観の状態</strong>: 傷・くすみの程度。",
            "<strong>タンポ・キーの状態</strong>: 気密・調整の良否。",
            "<strong>改造・修理歴</strong>: オリジナル度。",
            "<strong>付属品</strong>: 純正ケース・ネック・マウスピース・ストラップ。",
        ],
    },
    {
        "slug": "bach-stradivarius-kaitori", "model": "バック ストラディバリ", "badge": "Bach Strad",
        "cat": "trumpet-kaitori", "brand": "bach-kaitori",
        "kw": "バック ストラディバリ,Bach Stradivarius 買取,バック トランペット 買取,180ML 相場",
        "lead": "バック（Bach）ストラディバリ（Stradivarius）は、プロ用トランペットの世界的スタンダードとして君臨する名器です。180ML37をはじめ多彩な仕様があり、中古買取でも高い人気と安定した需要があります。",
        "price_rows": [
            ("180ML37（定番）・美品", "12万〜25万円前後", "仕様・年式・状態で変動"),
            ("180ML72／LR等 仕様違い", "10万〜25万円前後", "ベル・ボアの仕様で変動"),
            ("旧ヴィンテージ（Mt Vernon等）", "数十万円〜", "希少年代は高額"),
        ],
        "spec": [
            "ストラディバリはアメリカ・バック社のプロ用ライン。豊かな響きと幅広い表現力で、オーケストラからジャズまで多くの奏者に使われます。",
            "<strong>ベルの番号（37／72等）とボアサイズ（ML等）、仕上げ（ラッカー／銀メッキ）</strong>で仕様が分かれ、定番の180ML37が最も流通します。",
            "Mt Vernon期など古いヴィンテージは特に高評価。シリアルで製造年代が判別でき、状態とオリジナル度が査定を左右します。",
        ],
        "factors": [
            "<strong>仕様（ベル番号・ボア・仕上げ）</strong>: 人気仕様は加点。",
            "<strong>製造年・シリアル</strong>: ヴィンテージは高評価。",
            "<strong>外観・メッキ／ラッカーの状態</strong>: 摩耗・剥がれ。",
            "<strong>へこみ・修理歴</strong>: バルブの動作とオリジナル度。",
            "<strong>付属品</strong>: 純正ケース・マウスピース。",
        ],
    },
    {
        "slug": "marshall-jcm800-kaitori", "model": "マーシャル JCM800", "badge": "JCM800",
        "cat": "guitar-amp-kaitori", "brand": "marshall-kaitori",
        "kw": "マーシャル JCM800,JCM800 買取,Marshall アンプ 買取,2203 2204 相場",
        "lead": "マーシャル JCM800は、1980年代を象徴する真空管ギターアンプで、ロックの定番サウンドを作り上げた名機です。中古市場でもヴィンテージ的価値があり、買取でも高い人気と安定した需要があります。",
        "price_rows": [
            ("2203／2204 ヘッド（実機・良好）", "8万〜25万円前後", "年式・状態で変動"),
            ("コンボ（4010等）", "8万〜20万円前後", "状態・オリジナル度で変動"),
            ("初期ロット・希少仕様", "高額傾向", "コレクター需要がある場合も"),
        ],
        "spec": [
            "JCM800は1981年に登場したマスターボリューム搭載の真空管アンプで、歪みとミドルの効いた抜けの良いトーンが「ザ・マーシャルサウンド」として広く知られます。",
            "代表機は<strong>2203（100W）と2204（50W）</strong>のヘッド。シングルチャンネルのシンプルな構成で、多くのロックギタリストに使われました。",
            "真空管アンプのため、整備状態・真空管の劣化・改造（モディファイ）の有無が査定に影響します。実機の動作確認が重要です。",
        ],
        "factors": [
            "<strong>モデル（2203／2204等）・年式</strong>: 仕様と製造年。",
            "<strong>動作状態・真空管の状態</strong>: ノイズ・出力の正常性。",
            "<strong>改造（モディファイ）の有無</strong>: オリジナル回路の維持。",
            "<strong>外観の状態</strong>: トーレックス・グリルの傷。",
            "<strong>付属品</strong>: フットスイッチ・取扱説明書。",
        ],
    },
    {
        "slug": "fender-twinreverb-kaitori", "model": "フェンダー ツインリバーブ", "badge": "Twin Reverb",
        "cat": "guitar-amp-kaitori", "brand": "fender-kaitori",
        "kw": "フェンダー ツインリバーブ,Twin Reverb 買取,Fender アンプ 買取,ツインリバーブ 相場",
        "lead": "フェンダー ツインリバーブ（Twin Reverb）は、クリーントーンの代名詞として世界中で愛用される真空管コンボアンプです。large音量と美しいリバーブで定評があり、中古買取でも安定した需要があります。",
        "price_rows": [
            ("Silverface／Blackface系（実機）", "10万〜30万円前後", "年代・状態で変動"),
            ("65 Reissue 等 復刻", "8万〜18万円前後", "状態・付属で変動"),
            ("ヴィンテージ（1960年代）", "数十万円〜", "希少年代は高額"),
        ],
        "spec": [
            "ツインリバーブは2発の12インチスピーカーと大出力の真空管回路を備えたコンボアンプで、煌びやかで張りのあるクリーントーンが最大の魅力です。",
            "外観・年代により<strong>Blackface（ブラックフェイス）／Silverface（シルバーフェイス）</strong>などに分類され、年代で音色傾向と評価が分かれます。65 Reissue等の復刻機も流通します。",
            "重量があり真空管アンプのため、整備状態・スピーカーのオリジナル度・動作の正常性が査定を左右します。",
        ],
        "factors": [
            "<strong>年代・仕様（Blackface/Silverface）</strong>: ヴィンテージは高評価。",
            "<strong>動作状態・真空管の状態</strong>: ノイズ・出力。",
            "<strong>スピーカーのオリジナル度</strong>: 交換歴の有無。",
            "<strong>外観の状態</strong>: トーレックス・グリルの傷。",
            "<strong>付属品</strong>: フットスイッチ・カバー。",
        ],
    },
    {
        "slug": "pearl-masters-kaitori", "model": "パール マスターズ", "badge": "Masters",
        "cat": "drum-kaitori", "brand": "pearl-kaitori",
        "kw": "パール マスターズ,Pearl Masters 買取,パール ドラム 買取,Masters 相場",
        "lead": "パール マスターズ（Pearl Masters）は、パールのプロ・上級者向けドラムセットの代表ラインです。メイプル等のシェルによる豊かな鳴りで、レコーディングからライブまで幅広く使われ、中古買取でも安定した需要があります。",
        "price_rows": [
            ("Masters Maple／MCX等 フルセット・美品", "10万〜30万円前後", "構成・状態で変動"),
            ("シェルパックのみ", "6万〜18万円前後", "ハードウェア別の場合"),
            ("上位仕様・希少フィニッシュ", "加点傾向", "仕様・状態で変動"),
        ],
        "spec": [
            "マスターズはパールのプロ向けライン。メイプルやバーチなどのシェルを採用し、明瞭でレンジの広いサウンドが特徴で、スタジオ・ステージ問わず使われます。",
            "世代・仕様により<strong>Masters Maple、MCX、MMX、Masters Maple Complete</strong>など多くのバリエーションがあり、シェル材・ラグ・フィニッシュで評価が変わります。",
            "ドラムセットは構成（バス・タム・フロアタム・スネア）と付属ハードウェアの有無で査定が大きく変わるため、内容の確認が重要です。",
        ],
        "factors": [
            "<strong>シェル材・世代・仕様</strong>: メイプル等の材と世代。",
            "<strong>セット構成・点数</strong>: 何点セットか、シェルパックのみか。",
            "<strong>フィニッシュ（塗装/ラップ）の状態</strong>: 傷・剥がれ。",
            "<strong>ハードウェアの有無</strong>: スタンド・ペダル等。",
            "<strong>付属品</strong>: 各ヘッド・専用ケース。",
        ],
    },
    {
        "slug": "boss-ds1-kaitori", "model": "BOSS DS-1", "badge": "DS-1",
        "cat": "effector-kaitori", "brand": "boss-kaitori",
        "kw": "BOSS DS-1,DS-1 買取,ボス ディストーション 買取,DS-1 相場",
        "lead": "BOSS DS-1（Distortion）は、1978年発売の超ロングセラー・ディストーションペダルです。シンプルで使いやすく世界中で定番化しており、特に初期の銀ネジ・日本製個体は中古市場でプレミアが付くことがあります。",
        "price_rows": [
            ("現行品（中古・良好）", "3,000〜6,000円前後", "状態により変動"),
            ("旧ロット（日本製・台湾製）", "5,000〜1.5万円前後", "ロット・状態で変動"),
            ("初期 銀ネジ（MIJ・希少ロット）", "1万〜数万円", "コレクター需要で高額化"),
        ],
        "spec": [
            "DS-1は1978年に発売されたBOSSのオレンジ色ディストーションで、鋭い歪みと扱いやすさから定番の地位を確立。長年生産が続くロングセラーです。",
            "製造年・製造国（<strong>日本製＝MIJ、台湾製＝MIT</strong>）やネジの仕様（初期の銀ネジ）でコレクター評価が変わり、初期個体はプレミア化することがあります。",
            "現行品は安価ですが流通量が多く、状態が良ければ手堅く買取されます。ヴィンテージ個体は内部基板・パーツのオリジナル度が重要です。",
        ],
        "factors": [
            "<strong>製造年・製造国（MIJ/MIT）</strong>: 初期日本製は加点。",
            "<strong>ロット・ネジ仕様</strong>: 銀ネジ等の希少仕様。",
            "<strong>動作の正常性</strong>: ノイズ・ガリの有無。",
            "<strong>外観の状態</strong>: 塗装・印字の状態。",
            "<strong>付属品</strong>: 箱・取扱説明書（あれば加点）。",
        ],
    },
    {
        "slug": "ibanez-ts9-kaitori", "model": "Ibanez TS9", "badge": "TS9",
        "cat": "effector-kaitori", "brand": "ibanez-kaitori",
        "kw": "Ibanez TS9,TS9 買取,アイバニーズ チューブスクリーマー 買取,TS9 相場",
        "lead": "Ibanez TS9（Tube Screamer）は、チューブスクリーマー系オーバードライブの定番として世界中で愛されるペダルです。ミドルが持ち上がる独特のトーンで人気が高く、特に旧仕様や日本製個体は中古市場で高値になることがあります。",
        "price_rows": [
            ("現行 TS9（中古・良好）", "5,000〜1万円前後", "状態により変動"),
            ("再発初期／日本製ロット", "1万〜2万円前後", "ロット・状態で変動"),
            ("ヴィンテージ（オリジナルTS9等）", "2万〜数万円", "希少ロットは高額化"),
        ],
        "spec": [
            "TS9はチューブスクリーマー系の代表機で、ミドルレンジが持ち上がる暖かなオーバードライブが特徴。単体での歪みだけでなく、アンプのブースターとしても定番です。",
            "オリジナル期のTS9や、内部の<strong>オペアンプ（JRC4558等）</strong>の世代で音色・評価が変わり、ヴィンテージ個体はコレクター需要があります。",
            "現行品も人気で流通量が多く手堅く買取されますが、古いロット・日本製個体・オリジナルTS808系との関係で相場が動きます。",
        ],
        "factors": [
            "<strong>製造年・ロット・製造国</strong>: 旧仕様・日本製は加点。",
            "<strong>内部オペアンプ等の仕様</strong>: 世代による音色差。",
            "<strong>動作の正常性</strong>: ノイズ・ガリの有無。",
            "<strong>外観の状態</strong>: 塗装・印字の状態。",
            "<strong>付属品</strong>: 箱・取扱説明書（あれば加点）。",
        ],
    },
]

VENDORS = """
        <h3>ヒカカク！ ── 一括査定で最高値を見つける</h3>
        <p>ヒカカク！は複数の買取業者に一度に査定を依頼できる一括査定サービスです。{model}は専門業者ごとに評価が分かれるため、相見積もりで最高値を引き出せます。</p>
        <h3>ウリエル ── 大型・繊細な楽器も出張買取</h3>
        <p>ウリエルは出張買取に対応しており、ピアノ・アンプ・ドラムなど運搬が難しい楽器も自宅で査定・搬出してもらえます。</p>
        <h3>ティファナ ── 店頭・宅配で手軽に現金化</h3>
        <p>ティファナは全国の店舗ネットワークを持ち、店頭・宅配での査定に対応。手軽に現金化したい方に向いています。</p>
"""


def cta(model: str) -> str:
    return f'''        <div className="bg-cream border border-warm-border rounded-2xl p-6 my-8">
          <p className="font-bold text-base mb-4 text-center text-accent-dark">{model}の買取価格を今すぐ無料でチェック</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">一括査定で最高値を調べる</a>
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">出張買取を申し込む</a>
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-warm-gray text-white font-medium px-6 py-3 rounded-full hover:bg-foreground transition-colors text-sm shadow-md">近くの店舗を探す</a>
          </div>
        </div>'''


def build_faqs(m: dict):
    model = m["model"]
    cat_label = CAT_LABEL[m["cat"]]
    brand_label = BRAND_LABEL[m["brand"]].replace("買取", "")
    return [
        (f"{model}の買取相場はいくらですか？",
         f"{model}の買取相場は年式・状態・付属品により大きく異なります。中古市場では{m['price_rows'][0][1]}（最も状態の良い世代）が一つの目安として取引される傾向がありますが、断定はできません。正確な査定額は無料査定でご確認ください。"),
        (f"古い{model}でも買い取ってもらえますか？",
         f"はい、{model}は中古市場で需要があるため、年式が古くても状態次第で買取可能なケースが多いです。ヴィンテージ価値が評価される個体もあります。まずは無料査定に出してみることをおすすめします。"),
        (f"{model}を高く売るにはどうすればいいですか？",
         "(1)複数業者に一括査定して相見積もりを取る、(2)純正ケース・付属品・保証書を揃える、(3)軽い清掃で見た目を整える、(4)需要が高まる時期に売る、の4点が基本です。深い修理・改造は自分で行わず業者に任せましょう。"),
        (f"{model}の付属品がなくても査定してもらえますか？",
         "本体のみでも査定・買取は可能ですが、純正ケースや付属品が揃っていると査定額が上がる傾向があります。可能な範囲で揃えてから査定に出すのがおすすめです。"),
        (f"{model}の正確な査定額はどこで分かりますか？",
         f"相場はあくまで目安です。{model}の状態は個体ごとに異なるため、正確な金額は{cat_label}・{brand_label}に対応した買取業者の無料査定で確認するのが確実です。一括査定なら複数社の金額を比較できます。"),
    ]


def build_page(m: dict) -> str:
    slug = m["slug"]
    model = m["model"]
    cat = m["cat"]
    brand = m["brand"]
    cat_label = CAT_LABEL[cat]
    brand_label = BRAND_LABEL[brand]
    url = f"{SITE}/articles/{slug}/"

    title = f"【2026年最新】{model}の買取相場｜高く売るコツ・おすすめ業者"
    description = f"{model}の買取相場を年式・状態別に解説。{model}の特徴と人気の理由、価格を左右するポイント、高く売るコツ、おすすめ買取業者3社まで。正確な査定額は無料査定で確認できます。"
    og_desc = f"{model}の買取相場・特徴・高く売るコツ・おすすめ業者を解説。"
    h1 = f"{model}の買取相場と高く売るコツ完全ガイド"

    price_rows = "".join(
        f'<tr className="{"bg-white" if i % 2 == 0 else "bg-cream/50"}"><td className="px-4 py-3">{r[0]}</td><td className="px-4 py-3 text-gold-dark font-bold">{r[1]}</td><td className="px-4 py-3 text-warm-gray">{r[2]}</td></tr>'
        for i, r in enumerate(m["price_rows"])
    )
    spec_html = "\n          ".join(f"<p>{p}</p>" for p in m["spec"])
    factors_html = "\n            ".join(f"<li>{f}</li>" for f in m["factors"])

    faqs = build_faqs(m)
    faqs_details = "\n            ".join(
        f'''<details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold"><span className="pr-4">{q}</span><svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">{a}</div>
            </details>'''
        for q, a in faqs
    )

    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage",
                  "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}
    article_schema = {"@context": "https://schema.org", "@type": "Article", "headline": h1,
                      "datePublished": DATE, "dateModified": DATE,
                      "author": {"@type": "Organization", "name": "楽器買取びより"},
                      "publisher": {"@type": "Organization", "name": "楽器買取びより"}}
    breadcrumb_schema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "ホーム", "item": f"{SITE}/"},
        {"@type": "ListItem", "position": 2, "name": cat_label, "item": f"{SITE}/articles/{cat}/"},
        {"@type": "ListItem", "position": 3, "name": brand_label, "item": f"{SITE}/articles/{brand}/"},
        {"@type": "ListItem", "position": 4, "name": f"{model}買取", "item": url},
    ]}

    # 関連記事: カテゴリ・ブランド親 + 同カテゴリ/同ブランドのモデル + howto
    related = [cat, brand, "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku", "satei-yomikata", "gakki-kaitori-sagi"]
    related_json = json.dumps(related, ensure_ascii=False)

    return f'''import type {{ Metadata }} from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
  keywords: "{m['kw']}",
  alternates: {{ canonical: "/articles/{slug}/" }},
  openGraph: {{
    title: "{title}",
    description: "{og_desc}",
    url: "/articles/{slug}/",
    type: "article",
  }},
}};

function Schema() {{
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(faq_schema, ensure_ascii=False))} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(article_schema, ensure_ascii=False))} }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {json.dumps(json.dumps(breadcrumb_schema, ensure_ascii=False))} }}}} />
    </>
  );
}}

function Breadcrumb() {{
  return (
    <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-xs text-warm-gray">
        <li className="flex items-center"><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/{cat}/" className="hover:text-accent transition-colors">{cat_label}</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/{brand}/" className="hover:text-accent transition-colors">{brand_label}</Link></li>
        <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">{model}買取</span></li>
      </ol>
    </nav>
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
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">{m['badge']}買取</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年最新</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">{h1}</h1>
          <p className="text-warm-gray text-sm leading-relaxed">{m['lead']}</p>
          <p className="text-xs text-warm-gray mt-2">更新日: 2026年5月28日</p>
        </header>

        <nav className="bg-cream border border-warm-border rounded-xl p-5 mb-8">
          <p className="font-bold text-sm mb-3">この記事の目次</p>
          <ol className="space-y-1.5 text-sm text-accent list-decimal list-inside">
            <li><a href="#souba" className="hover:underline">{model}の買取相場（年式・状態別の目安）</a></li>
            <li><a href="#spec" className="hover:underline">{model}の特徴と人気の理由</a></li>
            <li><a href="#factors" className="hover:underline">買取価格を左右するポイント</a></li>
            <li><a href="#tips" className="hover:underline">{model}を高く売るコツ</a></li>
            <li><a href="#vendors" className="hover:underline">おすすめ買取業者</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="souba">{model}の買取相場（年式・状態別の目安）</h2>
          <p>{model}の買取価格は、製造年・状態・付属品の有無によって大きく変わります。以下は中古市場で取引される傾向のある<strong>おおよその目安</strong>であり、実際の査定額を保証するものではありません。正確な金額は無料査定でご確認ください。</p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">年式・グレード</th><th className="px-4 py-3 text-left font-medium">買取相場の目安</th><th className="px-4 py-3 text-left font-medium">備考</th></tr></thead>
              <tbody className="divide-y divide-warm-border">{price_rows}</tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※相場は2026年5月時点の参考目安です。個体差・市況・買取業者により変動するため、断定的な金額ではありません。</p>

{cta(model)}

          <h2 id="spec">{model}の特徴と人気の理由</h2>
          {spec_html}

          <h2 id="factors">買取価格を左右するポイント（年式・製造国・カスタム・付属品）</h2>
          <p>{model}の査定額は、次のようなポイントで変動します。査定前にチェックしておくと、適正価格での売却につながります。</p>
          <ul>
            {factors_html}
          </ul>

          <h3>状態ランク別の査定額の目安</h3>
          <p>多くの買取業者は、外観・動作・付属品などを総合して状態ランクを判定します。同じ{model}でも、状態によって査定額は次のように差が出やすい傾向があります（あくまで一般的な目安です）。</p>
          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white"><tr><th className="px-4 py-3 text-left font-medium">状態ランク</th><th className="px-4 py-3 text-left font-medium">目安となる評価比率</th><th className="px-4 py-3 text-left font-medium">主な状態</th></tr></thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3">新品同様</td><td className="px-4 py-3 text-gold-dark font-bold">90〜100%</td><td className="px-4 py-3 text-warm-gray">使用感がほぼなく付属品も完備</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">非常に良い</td><td className="px-4 py-3 text-gold-dark font-bold">75〜90%</td><td className="px-4 py-3 text-warm-gray">わずかな使用感のみ。動作良好</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">良い</td><td className="px-4 py-3 text-gold-dark font-bold">55〜75%</td><td className="px-4 py-3 text-warm-gray">通常使用の傷あり。実用上問題なし</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3">並</td><td className="px-4 py-3 text-gold-dark font-bold">35〜55%</td><td className="px-4 py-3 text-warm-gray">目立つ傷や経年劣化が見られる</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">難あり</td><td className="px-4 py-3 text-gold-dark font-bold">10〜35%</td><td className="px-4 py-3 text-warm-gray">要修理・付属品欠品など</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※比率は同型同年式を基準とした一般的な目安で、{model}の実際の査定額を示すものではありません。最終的な金額は実物確認で決まります。</p>

{cta(model)}

          <h2 id="tips">{model}を高く売るコツ</h2>
          <ol>
            <li><strong>複数業者で相見積もりを取る</strong>: 1社だけで決めず、一括査定で最高値を比較しましょう。</li>
            <li><strong>純正ケース・付属品・保証書を揃える</strong>: オリジナルの付属品が揃うほど査定はプラスに働きます。</li>
            <li><strong>軽い清掃で見た目を整える</strong>: ほこり・指紋を拭き取る程度に。深い修理や改造は自分で行わず業者に任せます。</li>
            <li><strong>正確な型番・製造番号を伝える</strong>: {model}は仕様・年式で価格が変わるため、製造番号やシリアルを確認しておきましょう。</li>
            <li><strong>需要が高まる時期に売る</strong>: 新生活前（1〜3月）や文化祭シーズン（9〜10月）は中古需要が高まりやすい傾向があります。</li>
          </ol>

          <h2 id="vendors">{model}のおすすめ買取業者</h2>
          <p>{model}を売るなら、楽器の専門知識を持つ業者を選ぶことが大切です。以下の3社は手数料無料で査定でき、当サイトでも案内している買取サービスです。</p>
{VENDORS.format(model=model)}
{cta(model)}

          <h3>{model}買取の基本的な流れ</h3>
          <p>{model}を売却するときは、次のステップで進めるとスムーズです。</p>
          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              <div><h4 className="font-bold text-sm mb-1">型番・製造番号と状態を確認</h4><p className="text-sm text-warm-gray">{model}は仕様・年式で評価が変わります。本体の型番や製造番号、傷・動作の状態、付属品の有無を整理しておきましょう。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              <div><h4 className="font-bold text-sm mb-1">一括査定で複数社に依頼</h4><p className="text-sm text-warm-gray">ヒカカク！などで複数業者に一括査定を依頼し、概算額を比較します。1社だけの提示額で判断しないことが大切です。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              <div><h4 className="font-bold text-sm mb-1">買取方法を選ぶ（出張・店頭・宅配）</h4><p className="text-sm text-warm-gray">大型・繊細な楽器は出張買取、手軽さ重視なら店頭・宅配など、{model}に合った方法を選びます。</p></div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-warm-border rounded-xl p-4">
              <span className="bg-gold text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              <div><h4 className="font-bold text-sm mb-1">実物査定・買取成立</h4><p className="text-sm text-warm-gray">実物確認の上で正式な査定額が提示されます。金額に納得できれば買取成立。複数社の最高値を基準に交渉するのがおすすめです。</p></div>
            </div>
          </div>

          <h2 id="faq">{model}買取に関するよくある質問</h2>
          <div className="space-y-4 mt-6">
            {faqs_details}
          </div>

          <h2>まとめ：{model}は相場の把握と複数社比較が高額売却の鍵</h2>
          <p>{model}は中古市場でも需要があり、年式・状態・付属品の条件が揃えば手堅い査定が期待できます。ただし掲載した相場はあくまで目安です。正確な金額は無料査定で確認し、複数社を比較して最高値を狙いましょう。</p>
          <p>より広い視点での相場や売り方は、親カテゴリの<Link href="/articles/{cat}/" className="text-accent hover:underline">{cat_label}ガイド</Link>と、メーカー別の<Link href="/articles/{brand}/" className="text-accent hover:underline">{brand_label}相場ガイド</Link>もあわせてご覧ください。</p>

{cta(model)}
        </div>

        <RelatedArticles currentSlug="{slug}" relatedSlugs={{{related_json}}} />
      </article>
    </>
  );
}}
'''


def main():
    print(f"Generating {len(MODELS)} Phase 6 model articles...")
    for m in MODELS:
        dir_path = ARTICLES_DIR / m["slug"]
        dir_path.mkdir(parents=True, exist_ok=True)
        (dir_path / "page.tsx").write_text(build_page(m), encoding="utf-8")
        print(f"  OK {m['slug']} ({m['model']})")
    print(f"Done. {len(MODELS)} articles")


if __name__ == "__main__":
    main()

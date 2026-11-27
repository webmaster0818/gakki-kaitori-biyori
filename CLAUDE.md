# gakkikaitori-biyori.com — 楽器買取アフィリエイト

Discord ch: `1492366652183150694`（⚠️gold-biyori `1492366658…` と酷似、取り違え注意）
deploy: `gakki-kaitori-biyori-deploy`（方式B、out→rsync＋.txt削除でCF 20k対策）/ source push=§16 webmaster0818 HTTPS
送客3社: ヒカカク！/ウリエル/ティファナ

## 作業ログ

### 2026-06-11 MediaXAI依頼: 最短・最大成長戦略（ASP以外）
GSC実数診断:
- 28日: クリック15・表示1,459・平均22.8位・CTR 1.0%。週次表示は60→533（8週で9倍）と伸長局面
- 表示ありは220ページ中112
- 勝ち筋=地域（福岡16位/表示204・横浜13.4・仙台16・名古屋21）＋準勝ち筋ブランド5本（martin 8.1/ibanez 8.6/marshall 9.6/yamaha-yas62 7.8/sonor 8）

**最大の発見: 「楽器買取 おすすめ」（商用ヘッドターム）の専用受け皿ページが無い**。京都/横浜/札幌/広島の地域ページが代打で9〜19位に分散表示（ホームは93.5位）＝カニバリ。専用比較ページ1本に内部リンク集約すれば1ページ目を狙える。

戦略をDiscordに報告済（承認待ち）:
- Phase 0 = 「楽器買取おすすめ業者比較」決定版ページ新設（3社比較＋種別/地域ハブ兼用、TOP/ナビから直リンク）＋準勝ち筋9ページ強化＋Indexing API
- Phase 1 = 500ページ化を**地域カテゴリ優先**（region 43→110先行、model→200は後段）に組み替え提案＋バッチ毎にインデックス併走
- Phase 2 = 週次ヤフオクデータを「楽器買取相場ランキング」化（peatbid souba-rankingの移植）→被リンク
- KPI: 15→100クリック/28d（7月末）、「楽器買取 おすすめ」5位以内

### 同日 Phase 0実行（MediaXAI「phase0進めよう」）
1. **`/articles/gakki-kaitori-osusume/` 決定版ページ新設**（手書きpage.tsx）: 結論ファースト早見→3社比較表（既存記事の表内容を踏襲し事実一貫）→選び方5基準→楽器種別チップ10→地域チップ8→査定前準備3つ→FAQ（FAQPage/Article/BreadcrumbList schema）。articles-metadata.json先頭にcategory=howtoで登録
2. **内部リンク集約**: ヘッダーnav「おすすめ業者」（PC＋モバイル）＋フッター＋**TOPヒーローの第2CTA**（旧guitar-kaitori行き→差し替え）＝TOPから8リンク
3. **準勝ち筋9ページのタイトル鮮度**: martin/ibanez/marshall/sonor/yamaha-yas62/fukuoka/yokohama/sendai/nagoya を【2026年最新】→【2026年6月最新】＋更新日/dateModified更新
4. sitemap 227URL再送信＋Indexing API 10件送信（全成功）。本番反映curl確認済
- ⚠️RelatedArticlesのpropsは `currentSlug`＋`relatedSlugs`（currentではない。型エラーで発覚）

### 2026-06-12 Phase 1実行（地域カテゴリ優先増設）
- 第1陣+20: 岡山/新潟/宇都宮/高崎/水戸/長野/松本/福井/大津/奈良/和歌山/姫路/西宮/堺/東大阪/豊橋/四日市/久留米/長崎/大分（scripts/gen-phase1-areas-batch1.py、generate-phase5-areasのbuild_page()をimportlib再利用）
- 第2陣+20: 船橋/市川/川越/所沢/越谷/尼崎/豊中/枚方/吹田/岡崎/一宮/春日井/郡山/いわき/青森/秋田/旭川/函館/宮崎/佐賀（batch2）
- region 43→83。**残り27で110目標**（次候補: 相模原/横須賀/藤沢/八尾/徳島/下関/鳥取/松江/釧路/帯広/高知※既存/山口/米子/長岡/富士/沼津/川西/明石/加古川/倉敷/福山※注: fukuyama無いか要確認）
- 各バッチでsitemap再生成＋Indexing API 20件送信（クォータ全体~200/日と他サイト分に注意）

### 2026-06-18 Phase 1完了（第3陣 +27都市、region 110達成）
MediaXAI「phase1で全部終わった？」→正直に「第2陣83止まり・27未着手」を報告し即完了。`scripts/gen-phase1-areas-batch3.py`(batch2複製、generate-phase5-areas.build_page再利用)で +27=相模原/横須賀/藤沢/八尾/寝屋川/高槻/徳島/下関/山口/鳥取/米子/松江/釧路/帯広/長岡/富士/沼津/川西/明石/加古川/倉敷/福山/甲府/津/鈴鹿/弘前/佐世保。**region 83→110達成**(metadata計288: brand50/instrument49/region110/model46/howto33)。sitemap 294URL・Indexing API 27/27成功。ビルドNODE_OPTIONS=8192・方式Bデプロイ(.txt削除・818ファイル)。次=Phase2(週次ヤフオクデータの相場ランキング/指数化=peatbid移植で被リンク)提案済。

### 2026-06-18 Phase 2完了（楽器買取相場ランキング新設＝一次データ被リンク資産）
MediaXAI「進めてください」。peatbid souba-ranking移植。`scripts/generate-souba-ranking-gakki.py`＝`data/price-history-gakki/*.json`(20モデル週次history[])から中央値・週次変化率(change_1w/2w)・流通量(sample_n)を算出→`data/souba-ranking-gakki.json`。`app/souba-ranking/page.tsx`＝値上がり/値下がりTOP8・高額相場TOP12・流通量TOP10＋各モデルの/articles/{slug}/へ内部リンク＋BreadcrumbList schema＋「出典明記で引用歓迎」＋メソドロジー注記(中央値=中古実勢/買取は50-70%目安/保証しない)。デザイン=gakkiトークン(accent/gold/cream/foreground/warm-gray)。**週次cron weekly-yahoo-update.shにデータ再生成＋sitemap再生成を組込み(fetch直後)→毎週自動更新**。ヘッダーnav(PC/モバイル)に「相場ランキング」追加。sitemap 295URL(STATIC_PAGESに/souba-ranking/追加)・Indexing API送信・本番curl確認。ビルドNODE_OPTIONS=8192・方式Bデプロイ(819ファイル)。

### 2026-06-20 戦略再策定（フルフュージョン）＋P1着手（CTR最適化）
MediaXAI「今後の戦略をフルフュージョンで」→`fusion --full`(claude+codex+gemini-2.5-pro, judge=claude)で実行(3者応答確認)。最新GSC28日(5/22-6/18)=クリック30・表示2,372・CTR1.26%・20.1位。**結論=ボトルネックはCTR(pos7-13に表示滞留しSERPで選ばれていない)**。Claude独自指摘=「小サンプル(12imp等)の0clkは統計正常→追うな。表示が積み上がるクラスタだけ。CTR単独でなく順位×差別化の掛け算。差別化武器=週次一次相場データ。計測実装が基盤」。プラン全文=`gakkikaitori-30day-plan.md`。
**P1実行(MediaXAI「p1進めて」)**: 留保どおり現行title/meta実ファイル確認後にリライト。
- **機会6ページのtitle/meta意図最適化**: shinjuku/fukuoka/yokohama/nagoya/sendai/martin。旧「【年月】楽器買取 {都市}おすすめ3選｜…」→新「{都市}の楽器買取はどこがいい？相場とおすすめ3社を比較【2026年6月】」。検索意図語「どこがいい？」(GSCで楽器買取どこがいい/売るなら等がpos8-10・0clk)を前方に。descも意図+相場目安+無料査定OKに刷新。
  - ⚠️**事実確認の結果**: 地域ページの相場は静的目安(週次でない)・martinは11ブランド(BrandSpotPrices)に**含まれない**→「週次相場」は名乗らず「相場(目安)」に留めた(架空回避)。週次を名乗れるのはBrandSpotPrices注入済の11ブランドのみ。
- **martin**: dateModified 2026-04-26→2026-06-20。
- **ブランド9頁の月鮮度**: fender/gibson/yamaha/boss/selmer/kawai/steinway/bach/pearl の「【2026年最新】」→「【2026年6月最新】」(ibanez/marshallは既に6月)。
- ビルドEXIT0・方式Bデプロイ(819ファイル・.txt削除)・source+deploy両push・**本番curl全6+fender確認OK**・Indexing API 15/15(URL_UPDATED)送信。
- **未了=査定クリック計測**: 当サイトにGA4等の解析が一切無く、CV(アフィリ送客クリック)計測には測定ID/解析基盤の選定が必要→MediaXAIに方針確認中(title/meta効果自体はGSCのCTRで計測可)。
- 次候補=P2(新宿クラスタ統合・意思決定LP)／計測方針決定後に実装。

### 2026-06-18 勝ち筋ブランド押し上げ（MediaXAI「勝ち筋ブランド押し上げを進めて」）
GSC28日=クリック28・表示2,209(+51%)・164頁表示。勝ち筋ブランド/モデルがpos5-12で0-1クリック。ブランドページに一次相場データが無いのが弱点→`components/BrandSpotPrices.tsx`新設(souba-ranking-gakki.json参照→該当ブランドのモデル相場表＋各モデル/相場ランキングへ内部リンク、週次再ビルドで自動更新)。11ブランド(fender/gibson/yamaha/ibanez/marshall/boss/selmer/kawai/steinway/bach/pearl)の`<RelatedArticles`直前に注入(import追加・冪等パッチ)。勝ち筋18頁にIndexing API 18/18。方式Bデプロイ・本番curl確認。20データモデルは既に全てModelSpotPriceCard表示済を確認。次=被リンク営業(相場データ引用打診)。

### 2026-06-25 残タスク棚卸し＋①川口LP意思決定化（MediaXAI「戦略の残タスク進めたい」）
GSC28日=クリック33・表示2455・pos18.5。最大取りこぼし=高表示なのにpage2のエリアページ(福岡356imp/pos12.9・名古屋135/21.5)＋ローカル意図クラスタ(近くの楽器買取店◯◯/持ち込み◯◯)。
- **正直な判断**: 福岡は既に網羅的(天神博多/出張店頭宅配/3社/FAQ)→pos12.9は権威待ち。**勝率高い川口(pos7-9)を先行**。
- **①川口LP意思決定化**: 「近くの楽器買取店 川口」20imp/pos7.3・「持ち込み川口」21imp/pos8.8で表示あるのに本文薄(持ち込み1/近く0)→title刷新(「川口の楽器買取はどこがいい？近くの店・持ち込み・出張の選び方とおすすめ3社」)＋新section「近くの楽器買取店に持ち込み・店頭で売るには？」追加(近く10/持ち込み22に強化・店頭即現金vs出張vs一括査定底値の意思決定)＋dateModified→2026-06-25。架空店舗なし。ビルドEXIT0・方式B(.txt削除862ファイル)・両push・Indexing送信・本番確認。
- **残**: ②同手法を博多/名古屋へ横展開 ③被リンク営業(週次相場データ引用打診=本丸) ④dateMod週次cron連動。効果は1-2週GSC。

### 2026-07-01 残エリアバッチ6（中堅市+35・MediaXAI「このまま進めて」）
`scripts/gen-areas-highimp6.py`（highimp5複製・generate-phase5のbuild_page再利用）で+35中堅市。愛知(小牧/稲沢/半田/東海)・静岡(磐田/富士宮/掛川)・岐阜(大垣/多治見/各務原)・三重(松阪/桑名)・大阪(和泉/守口/門真/箕面/池田)・兵庫(三田/高砂/芦屋)・滋賀(草津/彦根/長浜)・京都(長岡京/亀岡/舞鶴)・広島(呉/東広島)・四国(今治/丸亀/新居浜)・九州(大牟田/飯塚/延岡/諫早)。**region 269→304**。事実ベース(実在隣接エリアで没個性化回避・相場目安/無料査定注記・送客3社)。build EXIT0・方式Bデプロイ(.txt削除1056ファイル)・source+deploy両push・**sitemap 489URL(generate-sitemap.mjsはpublic/へ書くのでout/へcp必須)**・**本番200確認・Indexing API 35/35**。効果1-2週GSC測定。残=中国/四国/九州の他中堅市(呉/東広島以外の県庁未満)少数。

### 2026-07-01 残エリアバッチ7（中堅市+37・MediaXAI「進めて！」）＝面拡充ほぼ完了
`scripts/gen-areas-highimp7.py`で+37。中国(尾道/周南/宇部/防府/岩国/津山/出雲)・四国(坂出/観音寺/阿南/西条/宇和島)・九州沖縄(春日/大野城/宗像/中津/日田/日向/都城/鹿屋/霧島/唐津/伊万里/大村/沖縄市/浦添/宜野湾)・近畿(富田林/河内長野/羽曳野/松原/泉佐野)・中部(江南/豊川/常滑/西尾/蒲郡)。**region 304→341**・sitemap 526URL。事実ベース・build EXIT0・方式Bデプロイ・両push・**本番200・Indexing 37/37**。**主要都市＋中核市＋中堅市をほぼ網羅＝面拡充は概ね完了**。次は測定フェーズ推奨(効果1-2週GSC・勝ち筋への内部リンク集中/CTR最適化へ移行)。

### 2026-07-02 成長戦略再策定（MediaXAI「fable5で最短・最大の実行計画を」）
GSC診断(28d 6/3-7/1): クリック41(前月15→2.7倍)・表示2,698(2.2倍)・平均18.1位・CTR1.52%。週次クリック10→13→14と安定成長(pilatesのような減速なし)。表示ありは203/526URL=新規167リージョン(6/26+7/1)は評価待ち。
- 勝ち筋=モデル/ブランド(rx-2 7.4位/ES-335 7.9/martin 9.8/ibanez 10.6)。機会バンド(8-30位×30imp+)16ページ、筆頭fukuoka 345imp/12.9位/CTR1.4%
- **金脈発見: 「ギター買取 {都市} おすすめ」12都市以上で29-87位に表示・専用受け皿ゼロ**(名古屋19.5/福岡29/神戸49/東京56/横浜68/札幌87等、楽器買取汎用ページが代打)＝楽器種別×都市レイヤー未開拓
- 楽器種別ヘッド弱い: bass-kaitori 192imp/33位・アコギ買取48-58位。「楽器買取おすすめ」=osusumeページ21.8位(あと一押し)
- 技術: **canonical全ページ欠落(pilatesと同根)**・308リダイレクトはあり。計測ゼロ(GA4なし、送客クリック測定不能=6/20から未決)

**戦略4本柱(Discord報告済)**: P0=canonical一括+機会16ページへ内部リンク集中+osusumeに一次相場注入+無料計測導入(CF Web Analytics提案) / P1=ギター買取×12都市→ピアノ買取×都市レイヤー新設(BrandSpotPrices流用・実クエリある都市のみ・最大上振れ) / P2=週次相場データの被リンク営業(本丸・費用ゼロ) / P3=面拡大凍結→新規167ページの評価測定2-4週。KPI=8月末150クリック/10月末500。

### 2026-07-02 P0実行（MediaXAI「p0進めて」）
- ①canonical: `scripts/add-canonical-202607.py`(pilates版流用)で503ページ＋homepage(サーバーC・直接metadata追加)=out 526/528にcanonical。layoutにmetadataBase既存
- ②内部リンク: app/page.tsxのFAQ手前に「今週の注目買取ガイド」チップ枠(機会ページ10リンク=fukuoka/shinjuku/ibanez/martin/pearl/kawai-rx2/rickenbacker-330/kawaguchi/mercari-vs-gyosha/souba-ranking)。【2026年6月最新】→7月バンプ8ページ
- ③osusumeに一次相場注入: `data/souba-ranking-gakki.json`をimport→比較表直下に「今週の高額買取相場ピックアップ」(median上位5+各モデル記事リンク+/souba-ranking/導線+50-70%目安・保証しない注記)。**週次cron再ビルドで自動更新**。dateModified/バッジ/更新日を7/2に整合
- ④CF Web Analytics: cf-pages-tokenにRUM権限なし(Authentication error)→**MediaXAIにダッシュボードでのサイト追加+トークン共有を依頼中**(Discord報告済)
- 方式Bデプロイ(.txt削除)・両push・本番確認(souba枠/注目ガイド/canonical)・**Indexing API 18/18**。効果1-2週GSC。次=P1(ギター買取×12都市)承認待ち

### 2026-07-04 P1第1弾: ギター買取×12都市（MediaXAI「p1進めて」）✅本番反映済み
- `scripts/gen-guitar-city.py`(冪等)で `guitar-kaitori-{nagoya,fukuoka,kobe,kyoto,sendai,chiba,osaka,hiroshima,tokyo,yokohama,sapporo,aichi}` 12ページ生成（GSC実クエリ都市のみ）
- **新規`components/GuitarSpotPrices.tsx`**=souba-ranking-gakki.jsonからギター系5モデル+機材4種の週次中央値表（週次cron再ビルドで自動更新）。Martinはデータ無→表に載せずアコギガイドへリンク（捏造回避）
- 意図分離: 汎用11ページ→専用へコールアウト＋relatedSlugs先頭、専用→汎用へ戻り導線、guitar-kaitori総合に都市チップ12。愛知は汎用無し→nagoya経由＋aichi⇄nagoya相互
- 都市事情は事実のみ（出張対応/宅配全国共通/楽器店街の一般事実）・「相場は全国共通」明記
- sitemap 526→538・metadata 519→531(region)・build EXIT0・方式B両push・本番Stratocaster実数描画確認・Indexing 12/12・sitemap再送信
- 次=P1第2弾（ピアノ買取×主要都市・同ジェネレータ複製）＋ベース/アコギ/エレキヘッド強化。効果測定2-4週GSC

### 2026-07-04 P1第2弾: ピアノ種別/ブランド（MediaXAI「第二弾行こう」）✅本番反映済み
- **軸修正**: ピアノ×都市は実クエリほぼ無し(GSC90日実測・1imp散発のみ)→「実クエリなき都市は作らない」原則で都市展開中止、**種別/ブランド軸**に変更してMediaXAI報告済み
- `scripts/gen-piano-pages.py`(冪等)。新設2=kawai-piano-kaitori/roland-denshi-piano-kaitori。grand-piano/denshi-pianoは**既存本格ページあり→新設せず鮮度+ハブ化強化**(重複回避)。内部リンク=モデル4ページ⇄ハブ相互・piano-kaitoriにチップ6・osusumeから導線
- **ピアノに相場金額は不掲載**: yahoo-mediansで全ピアノinsufficient:true(ヤフオク流通=小物/部品でジャンク中央値。Steinway¥3,443等)→「型番・製造番号を控えて無料査定へ」に統一
- 🚨**generate-souba-ranking-gakki.pyにinsufficient除外を実装**(ジャンク中央値がsouba-ranking/kawai/steinwayブランドページに本番表示されていた既存バグを根治。20→15モデル・週次cronで維持)。ModelSpotPriceCardは元からinsufficient対応済
- generate-sitemap.mjsのUTC日付バグをJST化。sitemap 538→540・build EXIT0・方式B両push・本番確認(ジャンク値消滅)・Indexing 5/5
- 次候補=ベース/アコギ/エレキヘッド強化 or P2被リンク営業

### 2026-07-10 受け皿横展開（MediaXAI「受け皿横展開進めたい」）✅本番反映済み
GSC実需で選定: ①「楽器の買取屋さん 店舗」37imp/9.4位=hyoban記事(7/8新設・1P目)に店舗情報が無く0クリック＋店舗別クエリ(名古屋守山/大阪堺/横浜/池袋等)発芽 ②ベース買取ヘッド計80imp(ベース45/51位・エレキベース25/45位)。ウリエル/ティファナ指名は表示ゼロ=第2指名受け皿は見送り(正直判断)。
- **①hyoban記事に店舗一覧セクション**: 公式店舗ページ(gakkikaitori.co.jp/kaitori/shop/)をWebFetchで直接確認→**全国26店舗**を地方別表で追加(店頭買取/持ち込み全店対応・電話予約推奨の公式案内・出典リンク・確認日・開閉店注意の正直注記)。⚠️GSCクエリの「大阪堺店」「札幌」は公式一覧に無い→記載しない(正直)。電話番号は転載せず「公式で確認」誘導
- **②bass-kaitori強化**: title「どこがいい？」型即答化＋`ModelSpotPriceCard slug="fender-jazzbass-kaitori"`注入(ヤフオク242件・中央値138,614円・週次cron自動更新)。⚠️**ModelSpotPriceCardはdefault export**(named importでビルド失敗)
- 方式Bデプロイ・両push・本番確認・Indexing 2/2。次の横展開判断はギター×12都市(7/4)の評価(現状仙台28位で発芽)を見てから

### 2026-07-12 川口方式の横展開8ページ（MediaXAI「横展開進めたい」）✅本番反映済み
GSC28日実需で選定(全てCTR0%): 博多52imp/9.8・新宿クラスタ~130imp/9-11(近くの店38/持ち込み35/専門店24)・道玄坂28/10.4・池袋店舗18/27・名古屋区部(中区12/26.9・中川区12/25.6・西区6/34・緑区6/28.5)。
- `scripts/expand-chikaku-202607.py`(ジェネレータ型5=hakata+名古屋4区: title/h1川口型刷新+chikakuセクション挿入+節番号4→5,5→6,6→7繰り下げ)＋`expand-chikaku-rich-202607.py`(リッチ型: 渋谷/池袋+新宿微調整)。全て冪等。
- **事実ベース店舗情報**(楽器の買取屋さん公式26店・hyoban記事7/10確認分のみ): 名古屋栄店=中区(nakaの実例)/池袋店=豊島区(ikebukuroの実例)/上野店=台東区/福岡店=柳川市(博多に店なし→出張宅配誘導を正直に)。渋谷は「道玄坂・宇田川町に楽器店が集まる」一般地理表現のみ(個店名なし=捏造回避)。
- **発見: 渋谷・池袋の「エリア別ガイド」h2が中身空のプレースホルダだった**→chikakuコンテンツで充填(id="area-guide"維持でTOCアンカー無傷+span id="chikaku"併設)。
- 新宿は「近くの楽器買取店」完全一致フレーズが本文に無かった→補足文で自然に組み込み(初回ビルド後のout検証で検出→再ビルド)。
- build EXIT0×2・方式B(.txt削除)・両push・本番8/8で chikaku描画確認・Indexing 8/8。効果1-2週GSC。次候補=ベース買取ヘッド(80imp/40-51位)の本格強化 or 横浜市緑区受け皿(5imp/10.4発芽)。

### 2026-07-23 G4静岡+愛知9市の川口方式（MediaXAI「都市リスト出して進めよう」→「進めよう」）✅本番反映済み
GSC実需で選定した未カバー9市に川口方式を横展開(既存base page 9本にStage-Bオーバーレイ)。対象=藤枝/焼津/掛川/三島/富士宮/湖西(静岡6)+岡崎/北名古屋/名古屋熱田区(愛知3)。全て「{市}楽器買取/持ち込み/近く」がpos15-30・0click。
- `scripts/expand-chikaku-shizuoka-aichi-202607.py`(expand-chikaku-202607複製・冪等・id="chikaku"ガード)。title「{市}の楽器買取はどこがいい？」型即答化+chikaku意思決定セクション挿入(店頭/出張/宅配+一括査定底値)+節番号4→5,5→6,6→7繰り下げ。
- **実在店舗を一次確認(並列調査2体・各社公式)**: 藤枝=ハードオフ藤枝/すみやグッディ/買取おりづる駅前・掛川=ハードオフ掛川・三島=ハードオフ静岡三島(店頭のみ)・富士宮=ハードオフ富士宮ひばりが丘・湖西=ハードオフ湖西・岡崎=島村楽器イオンモール岡崎+ハードオフ2店。**店が無い市は正直に**: 焼津=市内なし→近隣吉田IC/藤枝+出張(買取屋さん静岡全域)・北名古屋=専門店なし→2ndST西春(小型)+近隣ハードオフ空港通・名古屋熱田区=区内ゼロ→隣接2ndST桜山(昭和区)/イシバシ楽器名古屋栄(中区)+出張。架空ゼロ・買取屋さんは静岡=富士津田店(富士市)/愛知=守山・栄・豊川が最寄と正直明記。
- homepage注目ガイドチップに藤枝/岡崎追加。build EXIT0(heap8192)・方式B(sitemap→out cp・.txt削除・両push)・本番fujieda確認・**Indexing 9/9**。sitemap567不変(base既存)。効果1-2週GSC。**G4累計=川口方式 川口+8(7/12)+9(7/23)=18都市**。次候補=横浜市緑区/東京総称ハブ・効果測定後の残都市。

### 2026-07-27 ②実データ格上げ（フュージョン②・MediaXAI「②進めよう」）✅本番反映済み
GSC実測で上位＋striking distanceの市区町村ページを監査→**福岡/名古屋/横浜/仙台/札幌は既に#local-shops+#method済・tokyoもOK**。genuinely thinな高表示5市を特定=**渋谷100i/神戸70i/新宿56i/川崎37i/池袋36i**（#local-shops無し・実店舗名ほぼ無し）。並列調査5体で各市の実在買取店を各社公式店舗検索から確認→`scripts/inject-local-shops-202607.py`(冪等)で`#local-shops`セクション(実店舗h3+公式リンク+店頭/出張/宅配の選び方+正直注記)をFAQ手前に注入、TOCも追加。神戸/川崎はtitle意図型化。**正直な事実**: イシバシ神戸三宮=2019閉店(最寄大阪)・ハードオフ渋谷区内なし(高座渋谷店は神奈川大和市)・島村渋谷なし・ハードオフ池袋常設なし・島村ラゾーナ川崎2026/9閉店予定・セカストは81kg超大型ピアノ買取不可…全て記載。build EXIT0(heap8192)・方式B(.txt削除)・両push・本番shibuya確認・Indexing5/5。効果1-2週GSC。残=残thin市の同様格上げ or ③ゼロ表示棚卸し/静岡ハブ・①柱ページ強化。

### 2026-08-26 GSC再測定→型番クエリの受け皿を修復（MediaXAI「最新のGSCデータ見た上で、ネクストアクション実行して」）✅本番反映済み
- **状態**: 8月(1-23) click48 / imp4,121 / pos13.4。表示・順位は伸びているが**CTRが1.79%→1.16%に低下**。
- 🚨 **原因＝自社ページの食い合い**: `/articles/martin-kaitori/`（ハブ）が **imp207・pos8.8・0クリック**、一方 `/articles/martin-d28-kaitori/`（型番）は **imp21・pos7.5・2クリック（CTR9.5%）**。「マーチンd28 買取価格」が**型番ページではなくハブに着地**していた。
  真因は内部リンク: ハブの被リンク22に対し型番は4、そして **ハブから型番ページへのリンクが0本**。
- **全ブランドを調査したら31ハブ・37型番ページで同じ状態**（fender 10/10未リンク・yamaha 4/7・gibson 2/10・martin/prs/nord/rickenbacker/tama は全て0）。
- **対応**: 全31ハブの本文先頭（目次直後）に「**型番・モデルが決まっている方へ**」の導線を新設し、型番ページへ振り分け（31/31本番確認）。スクリプトは `/tmp/link_models.py`（h2の正規表現は `<h2[ >]` にすること。`<h2 ` だけだと `<h2>1. …` 形式の10ハブを取りこぼす）。
- **副次で404を修正**: `/articles/amp-kaitori/` `/synth-kaitori/` `/kangakki-kaitori/` が存在しないのに**29ファイルのパンくず・関連記事・構造化データから参照**されていた → 実在する `guitar-amp-kaitori` / `synthesizer-kaitori` / `saxophone-kaitori` へ振替（12ファイル）。**全566ページでリンク切れ0件を確認**。
- ⚠️ **地域ページのCTR改修は「やらない」判断**: 渋谷 imp501/pos8.8/CTR0.80%、新宿 imp260/pos9.3/CTR0.38%、「楽器買取 持ち込み 渋谷」pos6.1で0クリック。**中身は実店舗6社を住所・買取方式つきで掲載済みで十分**（渋谷区内に無いチェーンの注記まである）。それでも押されない＝**地域名×買取はGoogleマップのローカル枠に食われている**仮説。**gold-biyori の駅名クエリと同一症状（2サイト目）**。gold側で駅ページ2本を作って検証中なので、その結果が出るまで地域ページに追加投資しない。
- Indexing 39/39・sitemap再送信OK。**測定（2〜3週後）**: 型番クエリの着地がハブ→型番ページに入れ替わるか（207imp・0clickが動くか）。

### 2026-09-02 A→B実行：薄いページ117本をnoindex＋受け皿のクロール改善（MediaXAI「A→B進めて」）✅本番反映済み
- **背景**: 8月 click59 / imp5,331 / pos13.4。**表示は7月の1.6倍・順位も改善しているのにクリックは横ばい**（61→59）。原因を掘ったらサイト規模そのものだった。
  ```
  記事ページ 558本 / 90日で表示ゼロ 184本 / 表示10未満 252本
  scaled-content-lint: THIN=284/558（独自量の中央値93・しきい値100）
  中央値も最小値も93で揃う＝同一テンプレの複製が大量にある（小都市のエリアページ群）
  ```
  **takushokuがスパムアップデートで被弾したのと同じ形。**
- **A: noindex 117本**。対象は**2条件を両方満たすものだけ**にした＝ ①lintのTHIN判定 ②90日で表示ゼロ。284∩184=**117本**で、**失うクリック・表示はゼロ**。
  ⚠️ THINだが表示があるもの167本、表示ゼロだがTHINでないもの67本は**残した**。片方の条件だけで切ると、育っている途中のページを殺す。
  - 301ではなく noindex を選んだ理由: 117本に個別の統合先を手で割り当てるのは非現実的で、**誤った統合先へ送るほうが害が大きい**。noindexは可逆で、直接訪問者にはページが残る（`follow: true` なのでリンクは辿られる）。
  - **`scripts/generate-sitemap.mjs` も修正**し、noindexページをsitemapから自動除外するようにした（「索引するな」と書きながらsitemapで送るのは矛盾したシグナル）。**sitemap 567→450URL**。
- **B: 受け皿がクロールされない問題**。「楽器の買取屋さん」が **442imp/2click・15ページに分散**。受け皿 `/articles/gakki-no-kaitoriyasan-hyoban/` は存在するのに1impだった。
  🔍 **内部リンク不足を疑ったが逆だった**:
  ```
  受け皿    558ページから被リンク → 1imp
  横浜ページ   8ページから被リンク → 436imp
  ```
  **URL検査APIで真因判明＝受け皿は 2026-07-09 を最後にクロールされていない**（横浜は8/26）。リンクは足りている。さらに**アンカーが557本すべて同一文言**で定型リンク化していた。
  → よくクロールされる主要エリア6本（渋谷/新宿/横浜/名古屋/神戸/福岡）のアンカーだけ、**業者名を含む別々の文言**に変更（全298本を変えると今度はその文言が定型になる）。Indexing APIで受け皿＋主要6本に更新通知。
- **Indexing**: 更新通知8/8、**noindex化した117本にURL_DELETEDを117/117送信**（索引から外す意思を明示）、sitemap再送信OK。
- 検証: 本番で対象20本を抽出しnoindex反映を確認（20/20）、**残すページ（渋谷/横浜/martin/受け皿）にnoindexが付いていないことも確認**、sitemapにnoindexページが0件。
- ⚠️ **8/26施策（型番ページへの入れ替え）はまだ測定不能**。GSC最新日8/29で施策後3日分しかなく、「マーチンd28 買取価格」はまだハブに着地。**9月中旬に再測定**。
- **次に見るもの**: ①受け皿がクロールされ「楽器の買取屋さん」442impを拾い始めるか ②noindex後に残り449ページの平均順位/CTRが改善するか ③型番クエリの着地。

### 2026-09-16 GSC実測→「楽器の買取屋さん」受け皿を新設（MediaXAI「ネクストアクションを策定して実行」）
GSC 28日（8/17〜9/13）: click 68 / imp 5,695 / pos 14.2（前期 48 / 4,252 / 14.1）＝表示は伸びているがCTR 1.2%。
- 🚨 **最大の未回収は指名クエリ**。「楽器の買取屋さん」系が**合計526imp・3click**で、
  **専用ページが無く**川崎・名古屋・神戸・横浜・渋谷・札幌の地域記事6本に分散して拾っていた（pos 5.5〜11）。
  サブクエリも「店舗」40 /「横浜」36 /「札幌」10 /「持ち込み」/「横浜店 レビュー」/「大宮」と広い。
- → `/articles/gakki-no-kaitoriyasan/` を新設。**事実は公式サイト（gakkikaitori.co.jp・2026-09-16取得）のみ**。
  運営=UNI SOUND株式会社／店頭買取27店舗／出張の対応エリア46都道府県／古物許可番号／出張・査定無料。
  ⚠️ **口コミ・評価は載せない**（第三者投稿を転載しない方針）。「高く売れる」等の断定もしない。
  比較導線は `/articles/gakki-kaitori-osusume/` へ。地域記事6本から内部リンクを張った（被リンク7本）。
- ⚠️ **アンカー付きURLがGSCで別行になる**（`#overview` `#comparison` 等）。
  「楽器買取 渋谷 386imp」のように見えるが、実体は1ページで96imp＋アンカー3本。
  **合計を実表示数として報告しない**（サイトリンクとして1つの検索結果に出ている）。
- ⚠️ 地域クエリは pos 6〜10 に大量にいるのにCTRがほぼ0（例: 新宿 443imp pos7.8 **0click**）。
  買取系はローカルパックに押し下げられる構造で、titleは既に「どこがいい？」型で対策済み。
  **titleの手直しでは動かない可能性が高い**ため、今回は指名（＝ローカルパックに食われない）を優先した。
- 効果測定は2〜3週後。指名526impがこのページに移り、クリックになるかを見る。

### 2026-09-16（続き）GSC再測→「どこがいい」の受け皿改善＋ピアノ詐欺の節 ✅本番反映済み
再測しても診断は同じ（click68/imp5,695/pos14.2）。**未回収は指名と、1ページ目なのに0クリックの2つ**。
- 🚨 **「楽器 買取 どこがいい」系 約60impが pos6.5〜9.6 で0クリック**。着地は**札幌・神戸・名古屋の地域記事**。
  地域名の入らない問いに地域ページが出ている**クエリと着地のミスマッチ**で、スニペットに「札幌の…」と出る。
  → ①比較ページのtitleを実クエリに合わせた（「楽器買取はどこがいい？おすすめ業者3社を比較」）
    ②そのクエリで1ページ目にいる地域4記事（札幌/神戸/名古屋/渋谷）から比較ページへ導線を追加。
  ⚠️ 比較ページ自体は「楽器 買取 おすすめ」で pos54.6 と弱い。**ヘッドタームを取りにいくより、
     既に1ページ目にいる地域記事から答えのページへ送るほうが現実的**と判断した。
- **「ピアノ買取 詐欺」36imp pos22.2** が `/articles/gakki-kaitori-sagi/`（サイトで3番目にクリックが出ている
  記事・CTR2.7%）に着地しているのに、**ピアノの記述が1つも無かった**。ピアノ専用の節を追加：
  搬出費用の後出し／当日に処分費を言われる／訪問がピアノ以外に広がる の3つ＋消費者ホットライン188。
- ⚠️ 相場データ（souba-ranking-gakki.json・55モデル・2026-09-14更新）に**ピアノはYAMAHA C3の1件のみ**。
  ピアノの金額を語るには母数が足りないので、金額ではなく**トラブルの構造**で書いた。

### 2026-10-07 管楽器型番3本の関連リンク・パンくずが「サックス」になっていたのを根本修正 ✅本番反映済み
- **原因の連鎖**: `scripts/gen-souba-models-202607.py`（7/16）が型番ページを `[カテゴリハブ, ブランドハブ(無ければカテゴリハブ), …]` で生成し、管楽器は一律 `wind → /articles/kangakki-kaitori/`（存在しない）。8/26 の404修正で `kangakki-kaitori → saxophone-kaitori` に機械置換 → トロンボーン/クラリネット/フルートの型番がサックス扱いに（relatedSlugs 先頭2つ・パンくず表示・BreadcrumbList JSON-LD の3箇所）。10/5 は gen-related-groups.py の HUB_FIX でグループ側だけ上書きしていた。
- **修正**: bach-42-trombone → `trombone-kaitori`+`bach-kaitori`／buffet-r13 → `clarinet-kaitori`+`buffet-kaitori`／muramatsu-flute → `flute-kaitori`（ブランド記事なし・重複は落とす）。パンくず（表示＋JSON-LD）も「トロンボーン買取／クラリネット買取／フルート買取」→各楽器ハブへ。生成元 gen-souba-models-202607.py の CAT に trombone/clarinet/flute を追加し3本の定義を差し替え。HUB_FIX から3本を削除（kalimba のみ残す）。
- gen-related-groups.py 再実行 → `data/related-groups.json` は**差分0**（46グループ・437記事。HUB_FIX が既に同じ結果を出していたため、他ページの関連ブロックは不変）。add-og-image.py は付与0（482付与済）。影響ページ＝3本のみ。
- 🔍 **見つけたが直していない**（同じ原因）: `yamaha-ytr8335-kaitori`（トランペット）も relatedSlugs 先頭とパンくずが `saxophone-kaitori`「管楽器買取」。gen-souba-models-202607.py の CAT `amp`→`/amp-kaitori/`・`synth`→`/synth-kaitori/` も存在しないハブのまま（ページ側は8/26に guitar-amp/synthesizer へ振替済）。`conn-kaitori`（ブランド）は sax 先頭だが Conn はサックス主力なので誤りとは言えない。

### 2026-10-05 公開前チェック（site-precheck.py）不合格3項目を修正 ✅本番反映済み
初回 precheck（568ページ・noindex 117）: [7] og:image 無し 568 / [8] favicon 無し / [14] 被リンク1本以下 223（/widget/・/author/・記事221）。→ **全項目OK**。
- **[7] og:image**: `public/og-image.png`（1200×630・`scripts/make-og.py`・数字なし）。
  ⚠️ **ページ側で `openGraph` を定義すると layout の `openGraph.images` は引き継がれない**。`app/opengraph-image.png`（ファイル規約）でも同じで、482ページで出なかった（実測）。
  → 自前の openGraph を持つ482ページに `images: ["/og-image.png"]` を付与（`scripts/add-og-image.py`・冪等）。**記事を新設したら add-og-image.py を流す**（生成スクリプトは images を出さない）。
- **[8] favicon**: `app/icon.png`＋`app/favicon.ico`（make-og.py が同時に作る）。
- **[14] 孤立**: 地域記事179本は関連記事ブロック自体が無く、型番記事12本は articles-metadata.json にも無く一覧にすら出ていなかった（warwick-thumb / ehx-bigmuff は被リンク0）。
  → `components/SameGroupArticles.tsx`（同じ都道府県／同じ楽器カテゴリの記事を、並び順で近い最大8本）。グループは `scripts/gen-related-groups.py` → `data/related-groups.json`（46グループ・437記事）。
  - 地域＝description の都道府県。インデックス対象4本未満の県は同じ地方でまとめる。それ以外＝relatedSlugs の最初の楽器カテゴリ記事が親。3本未満は系統（管楽器等）でまとめる。
  - **noindex の117本はグループに入れず、ブロックも出さない**。
  - RelatedArticles を持つ記事は RelatedArticles の中から出る（ページ編集不要）。持たない地域記事182本には `<SameGroupArticles slug="…" />` を `</article>` の直前に注入した。
  - ⚠️ **記事を足した・noindex を変えたら `python3 scripts/gen-related-groups.py` を再実行**。RelatedArticles を持たない記事を新設したら SameGroupArticles の1行も入れる。
  - /author/・/widget/ はフッター「サイト情報」からリンク。
- 🔍 **見つけたが直していない**:
  - `tama-kaitori` は metadata が「楽器買取 多摩エリア」（region・badge 多摩）なのに**ページの中身はドラムの TAMA**（relatedSlugs は多摩の地域記事のまま）。一覧・関連記事に誤った名前で出ている。関連グループからは除外（gen-related-groups.py の SKIP）。
  - 型番記事24本が articles-metadata.json に未登録（一覧に出ない）。うち slug 違いの重複らしき組: `gibson-flyingv`/`gibson-flying-v`、`fender-deluxereverb`/`fender-deluxe-reverb`、`nord-stage`/`nord-stage3`。
  - 管楽器の型番3本（bach-42-trombone / buffet-r13 / muramatsu-flute）の relatedSlugs 先頭が `saxophone-kaitori`（8/26 の kangakki 振替の名残）。→ **2026-10-07 にページ側を修正済み（上記）**。
- 先頭の「source push=§16 HTTPS」は古い。remote は SSH エイリアス（`git@github.com-webmaster0818-gakki-kaitori-biyori`）。

### 2026-10-08 「ヒカカク 楽器買取 口コミ／評判」受け皿 新規（MediaXAI指示・3サイト横断） ✅本番反映済み
- 既存ページを title/h1/URL で「ヒカカク」検索→該当なし（CTA言及のみ）→ `/articles/hikakaku-gakki-kaitori-kuchikomi/` 新規（手書き page.tsx・category=howto・badge「サービス評判」）
- 一次情報は hikakaku.com の**生HTML**を curl で確認（/lp/ 使い方・よくあるご質問・利用規約・運営者情報・古物営業法表記・/hikakaku_reviews/・楽器/ピアノカテゴリ）。口コミは公式クチコミページの評価分布（総合3.4／星5=425・4=200・3=106・2=86・1=266＝1,083件・「悪い比率32.5%」は公式表示）＋内容の傾向のみ。本文転載・架空・件数捏造なし。Googleマップ等の独自集計は使っていない（取れないので書かない）
- 構成: 結論→とは（表）→楽器を出す流れ5step→注意点5→良い/気になる評判→向き不向き→FAQ6(FAQPage)→出典。PR表記＋`rel="noopener noreferrer nofollow sponsored"`
- 内部リンク元5本: gakki-kaitori-osusume / kaitori-houhou-hikaku / takaku-uru-kotsu / mercari-vs-gyosha / gakki-kaitori-sagi（最初の `<CtaBox />` 直後に1文＋relatedSlugs先頭）。sitemap 452 URL再生成
- precheck: 初回「description 167字」不合格→141字に短縮→✅全項目OK。deploy 87399d3bc・本番curl 200・Indexing API 6/6
- ⚠️ 自前 openGraph を書くページは `images: ["/og-image.png"]` を必ず入れる（layoutのデフォルトが上書きされて og:image が消える＝peatbidで precheck 不合格になった）

### 2026-10-09 /author/ 差し替え・/content-policy/ 実装なし記述の削除・型番16本に相場カード ✅本番反映済み（src c3df075 / deploy c255c3afc）
- **(a) /author/**: 10/8 既定案どおり `wip/author-policy`（7b8418e）を main にマージ（競合なし）。編集部メンバーの経歴・Person 構造化データを削り「運営方針とデータの確認手順」だけに。フッター文言「編集部紹介」→「運営方針・データの確認手順」。out/ 全体 grep: Person schema 0 件・「編集部紹介」0 件（残る「経歴」1件は「個人名・経歴は載せない」という否定文）。
- **(b) /content-policy/**: 「口コミ・評判を紹介しています」「SNS（X、Instagram等）上の投稿」「編集部独自のアンケート調査」の3記述を削除（scripts 36本・data に該当実装が0、サイト自身が口コミ本文を載せないと明記）。残した参照元は「公式サイト掲載レビュー」「口コミサイトの投稿」の2つ。out/ 全体 grep: アンケート 0・SNS投稿 0・口コミ紹介 0。
- **(c) 相場カード未表示18本の原因**: 18本は全て `scripts/gen-models-batch1.py` 製で、同スクリプトが再利用する `gen-expansion-articles.py` の gen() テンプレに `ModelSpotPriceCard` が無い（`gen-souba-models-202607.py` のテンプレには `</header>` 直後にある）。データ側は `data/yahoo-medians-gakki.json` 62件（全て fetched_at 2026-10-05）に揃っていた。18本＝fender-jaguar/jazzmaster/precisionbass・gibson-es335/j45・gretsch-6120・ibanez-rg/ts808・korg-minilogue・martin-d28・musicman-stingray・prs-custom24・rickenbacker-330・roland-jc120・tama-starclassic・taylor-814ce・vox-ac30・yamaha-c3。
  - **16本に追加**: import ＋ `</header>` 直後に `<ModelSpotPriceCard slug=… modelName={dataのlabel} />`（gibson-sg と同じ位置・同じ部品。値・n・取得日は部品が週次データから読む）。カード付きページ 45→61。
  - ⚠️ **2本は保留（vox-ac30・yamaha-c3）**: 10/5 データが VOX AC30 中央値 ¥3,200（n=178）・YAMAHA C3 ¥8,000（n=10・前週比-93.1%）で部品・小物混入が明らか。表示すると誤った相場になるのでカードは入れず、`fetch-yahoo-medians-gakki.py` に vox-ac30 の下限 ¥30,000・yamaha-c3 を常時 insufficient（他ピアノ5本と同じ扱い）を追加。**次回週次（10/12）以降に2本へカードを追加**すれば他と同じ「データ不足のため非表示」表示になる。
  - 🔍 **見つけたが直していない**: `/souba-ranking/` に YAMAHA C3 ¥8,000 が現在も載っている（souba-ranking-gakki.json に insufficient なしで入っているため）。上記ルール追加で 10/12 の再生成から外れる見込み。gen-expansion-articles.py のテンプレ自体は未変更（model カテゴリで再生成するとまたカードなしになる）。
- precheck ✅全項目OK（569ページ）。本番 curl: es335 ¥254,100・n=46・取得 2026-10-05／jc120 ¥29,800／author Person 0／content-policy 該当0。

### 2026-10-09 (2) VOX AC30 ¥3,200・YAMAHA C3 ¥8,000 を ranking/ハブ/指数から当日除外 ✅本番反映済み（src b9c7332 / deploy 7fe77a725）
- コーディネータ指示「10/12 まで待たず今日外す」。out/ grep で露出を実数確認: **YAMAHA C3 ¥8,000**＝/souba-ranking/・/articles/yamaha-kaitori/（BrandSpotPrices）の2ページ／**VOX AC30 ¥3,200**＝/articles/guitar-kaitori/＋ギター地域12本（GuitarSpotPrices）の13ページ＋/souba-index/ の構成銘柄。grand-piano の「1,000,000〜8,000,000円」は静的レンジ表の部分一致で無関係。
- 全消費側（souba-ranking/widget/BrandSpotPrices/GuitarSpotPrices/SellTimingSignal/gakki-kaitori-osusume）は `data/souba-ranking-gakki.json` を読み、ranking 生成器は history の `latest.insufficient` を除外条件にしている → **データ側に同じ規則を当てる**のが一点で済む。
- `fetch-yahoo-medians-gakki.py`: ルール適用を `apply_quality_rules()` に一本化し、**`--reapply`**（取得せず既存 medians と history の latest に現行ルールを当て直し、insufficient になった取得日の点を history[] から外す＝write_history と同じ扱い。数値は不変）を追加。ルールを足した日はこれを流してから ranking/index/widget を再生成する。
- 実行結果: reapply で2件 insufficient 化 → ranking 55→53モデル、相場指数 45→44銘柄（VOX AC30 が構成から外れ、最新 2026-10-05 の指数 95.69→95.79）、widget 変化なし。precheck ✅全項目OK。本番 curl: /souba-ranking/・/articles/guitar-kaitori/・/articles/guitar-kaitori-tokyo/・/articles/yamaha-kaitori/・/souba-index/ で該当0。
- ⚠️ 10/12 の週次 fetch は新ルールで取得時に自動 insufficient 化されるので追加作業なし。vox-ac30 の history は 10/1 以前の ¥3,2xx 台が残っている（正しい値が取れたら大きな前週比が出る。クエリ「VOX AC30 ギターアンプ」の見直しが本筋）。

### 2026-10-09 (3) 「ウリエル 楽器買取 口コミ／評判」受け皿 新規＋ヒカカク記事に使い分けの章（12:00成長ルーチン B・C） ✅本番反映済み（src 5d6a324 / deploy 557e35b70）
- 既存チェック: title/h1/URL に「ウリエル」を含むページ0（言及は TOP カード・比較表・CTA のみ）→ `/articles/uriel-gakki-kaitori-kuchikomi/` 新規（手書き page.tsx・howto・badge「サービス評判」）
- **felmat 規約**: リポ・workspace に A11184N の掲載レギュレーションのメモは無し（確認できたのは affiliate.ts の「リンク末尾を編集しない・imp 1x1 をセット」のみ）。既存と同じテキストリンク `URIEL.url`＋`URIEL.imp`、文言は TOP と同じ「出張買取を申し込む」、PR 表記・`rel="noopener noreferrer nofollow sponsored"`
- 一次情報は uriel-cuore.co.jp の**生HTML**（⚠️HTMLコメント内に旧文言＝宅配買取・営業時間が残っているので**コメントを除去してから読む**）: 会社概要（株式会社クオーレ・古物商 愛知県公安委員会 第542791100800号）／楽器買取（対象・流れ・買取例6件・お客様の声6件・FAQ・エリア）／出張買取（エリア・10-17時・最短翌日以降・1点可・本人立会い）／店頭（川崎店のみ・予約制）／クーリングオフ（出張のみ8日）
  - ⚠️ 出張エリアがページで違う（出張ページ＝関東〜九州・沖縄除外／楽器ページ＝関東・中部・近畿・岡山）→両方載せて申込時確認と書いた。宅配買取ページは404
  - 全体FAQ（/faq/）は「金・ブランド品等のみ買取」「出張・催事の2方式」と古い記述 → 楽器ページを優先
- 口コミ: 第三者＝ヒカカク！ company/23566（3件・2.67点・66.7%・楽器投稿0）。公式の楽器の声6件の傾向。本文転載なし。競合（sakai2-jh 着物買取ノート 2026-09）が引用している「カメラの低評価＋査定士の謝罪」は公式 voice 全28ページ・camera ページで見つからず→不採用
- 国民生活センター 2023-09-27（訪問購入 2022年度7,722件・60歳以上8割近く）・消費者庁「訪問購入」を出典に注意点5つ
- 内部リンク元: fender-kaitori（GSC着地ページ）/ gakki-kaitori-osusume / gakki-shucchou-kaitori / kaitori-houhou-hikaku / hikakaku-gakki-kaitori-kuchikomi
- 表記修正: fender の比較表 ウリエル「最短即日」→「最短翌日以降（出張）」（公式FAQ）、osusume・fender「出張買取専門」→「出張買取中心」（川崎店・催事あり）
- ヒカカク記事: 競合（ecopolis/uridoki/kmhc/omocha 等）が共通して持つ「他サービスとの比較」が無かった→「ヒカカク！と他の売り方の使い分け」表を追加。公開日/更新日を分けて表示（datePublished 10-08・dateModified 10-09）。評価分布は10/9再確認で変化なし。競合の「ヒカカク裁判」は一次情報が取れないため不採用
- precheck ✅全項目OK（570ページ）。本番200は push 約9分後。Indexing API 6/6

### 2026-10-10 VOX AC30 / YAMAHA C3 の週次取得を本体だけに（スクリプト修正のみ・データ書き換え/デプロイなし）
- **原因（実測）**: 10/10 に「VOX AC30 ギターアンプ」を1回だけ取得（3ページ・116出品）して出品タイトルを目視 → 本体は26件だけで、残りは **amPlug / AP2-AC / AP3-AC（ヘッドホンアンプ ¥510〜6,990）**・VGH-AC30 / APHN-AC30（ヘッドホン）・AC30 RADIO・ピンバッジ・純正ハードケース・Pathfinder。真空管・スピーカー単品は今回0件。¥3,200 の正体は amPlug で、**history 7/16〜10/1 の ¥3,4xx も全部 amPlug**。「ヤマハ C3 グランドピアノ」は5出品中3件がピアノカバー（¥5,000〜8,000）、本体2件（¥528,000 / ¥223,500）
- `fetch-yahoo-medians-gakki.py`: `TITLE_RULES`（vox-ac30・yamaha-c3 のみ）＝ `__NEXT_DATA__` の出品 title/price を読み、除外語・除外正規表現・1出品あたりの価格下限（VOX ¥8,000／C3 ¥100,000）で IQR の前に落とす。対象外の60モデルは従来の正規表現経路のまま（出力不変）。タイトルが読めない時は汚れた値を出さず insufficient
  - 「真空管」「フットスイッチ付」「カバー付き」「celestion」「消音」「キャスター」は本体タイトルにも出るので単語では落とさない（「〜のみ／単体」「AC30用」の形だけ）
  - `HISTORY_RESET_BEFORE`（両モデル 2026-10-10）: 次回 write_history でそれより前の点を捨てる。残すと 10/12 に前週比 +1,800% 級の偽の値動きがランキングに出る
- **今の取得結果で検証（取得関数そのものを保存HTMLで実行）**: VOX **¥3,200（n=182）→ ¥61,000（n=50＝26出品×2、除外180）**、残り26件は全て AC30 本体（AC30/6TB・C2・C2X・CC1/CC2・HW2・H2・AC30T 1965・VR）。C3 ¥8,000（n=10）→ ¥375,750（n=4）で引き続き insufficient（常時非表示のまま）。10/12 の書き込みを temp で再現 → VOX history は 10/12 の1点だけ（前週比なし・指数は履歴4点未満で自動除外）、C3 は history 空
  - 価格下限で落ちた本体らしき出品3件: AC30VR ¥1,600・¥3,969、「VOX AC30 ギターアンプ」¥3,500（中身不明）
  - ⚠️ VOX の ¥61,000 は AC30VR（¥1〜2万台・トランジスタ）と AC30C2/6TB（¥6〜12万）が混ざった AC30 シリーズ全体の中央値
- **見つけたが直していない（範囲外）**: Yahoo の `__NEXT_DATA__` は1ページ内で同じ出品を2回持っており、全62モデルの n（raw_n/filtered_n）が実出品数の約2倍。中央値はほぼ不変だが、出品数で数えると MIN_SAMPLE=8 を割るモデルが7本（moog-subsequent37 / ibanez-jem / gibson-explorer / tama-starclassic / taylor-814ce / ibanez-rg / gibson-firebird）。今回は他モデルと数え方を揃えるため VOX/C3 も同じ数え方
- `gen-expansion-articles.py`: model カテゴリの gen() に `ModelSpotPriceCard`（import＋`</header>` 直後・modelName は yahoo-medians の label）。非 model 52本は旧テンプレと出力が完全一致、batch1 の26本は差分がこの2行だけで、既にカードがある16本は本番と同じ行。生成器は既存 slug をスキップするので本番に差分0 → デプロイなし
- 残: 10/12 週次後に vox-ac30 の値（¥5〜7万台なら正常）を確認して vox-ac30 にカードを追加（yamaha-c3 は「データ不足」表示になる）

### 2026-10-11 ピアノ5機種の付属品・別商品混入を週次取得で除外＋n二重計上の重複除去（フラグ無効）（スクリプト修正のみ・データ書き換え/デプロイなし）
- **実測（10/11 取得・各最大3ページ・出品タイトル目視）**: U1 14出品・U3 7出品は**全て本体**（カバー等の混入0。¥1〜¥5,000 は引取限定/1円スタートの本体）。**YUS5 / K-300 / B-211 は各150出品で型番一致の本体が0件**＝Yahoo が型番を無視して他社アップライト・ピアノカバー・鍵・トイピアノ（YUS5/K-300）、インクカートリッジ・切符・腕時計・ワンピースカード等（B-211）を返していた。C3 は 10/10 と同じ5出品（カバー3＋本体2）
- `fetch-yahoo-medians-gakki.py`: TITLE_RULES に5機種を追加（C3 と同方式＋**`require_regex`＝タイトルに型番必須**、B-211 はブランド名も必須）。共通の `PIANO_ACCESSORY_REGEX`（ピアノ/トップ/レースカバー・椅子のみ・ピアノ椅子・インシュレーター・鍵（「88鍵」「鍵盤」は除外しない）・トイ/ミニピアノ・電子ピアノ・カタログ・〜用/対応 等）。1出品下限 アップライト ¥10,000 / B-211 ¥1,000,000
  - C3 の単語除外から「椅子」「イス」「チェア」を外し共通正規表現へ（U1/U3 の本体タイトルに「椅子付き」が4件）。今日のデータで C3 の結果は不変
- **除外前→後（中央値 / filtered_n）**: U1 ¥8,900/20 → ¥27,500/10、U3 ¥36,166/12 → ¥42,333/10、YUS5 ¥5,811/234 → なし/0、K-300 ¥3,050/218 → なし/0、B-211 ¥1,940/224 → なし/0、C3 ¥375,750/4（不変）。全機種 ALWAYS_INSUFFICIENT のままなので**サイト表示は不変**。保存HTMLで旧スクリプトと全62モデルを比較し、変わるのはこの5機種だけ
- **n の二重計上**: `DEDUP_LISTINGS = False`（1行で有効化）。True で全モデル auctionId 重複除去（ページ跨ぎも）。dry: 中央値は全モデル不変・n はほぼ半分。**MIN_SAMPLE=8 を割って非表示になるのは5本**: gibson-explorer 14→7 / ibanez-jem 12→6 / tama-starclassic 12→6 / mesaboogie-markv 8→4 / moog-subsequent37 8→4。境界: taylor-814ce 8・ibanez-rg 8・gibson-firebird 9
- 判断待ち: n を A 実数に直す（上記5本が非表示）/ B 今のまま

### 2026-10-12 週次後点検：VOX AC30 / YAMAHA C3 に相場カード・Rickenbacker 330 / Fender Jaguar を暫定非表示 ✅本番反映済み（src 23b6876 / deploy b698e0e3e）
- **VOX AC30**: 週次 ¥61,000・filtered_n 50（insufficient False）。同クエリ3ページを取り直して目視＝ユニーク114出品中、ルール通過26件は**全て AC30 本体**（AC30VR ¥10,000〜20,900・CC1/CC2/C2/C2X・/6TB・H2/HW2・AC30T 1965 ¥349,800）。`</header>` 直後に `ModelSpotPriceCard`（10/9 の16本と同じ部品）。ranking には週次で既に戻っていて change_1w/2w=None（履歴1点＝前週比なし・異常値なし）、指数は履歴不足で自動除外のまま
- **YAMAHA C3**: 同じ部品で「データ不足のため非表示」表示（ALWAYS_INSUFFICIENT）
- **Rickenbacker 330 / Fender Jaguar（新発見）**: 7/16 から中央値が漸減（330 ¥170,800→¥48,350・Jaguar ¥200,000→¥96,000）。目視で330は22出品中 キーホルダー4・ケース1・コピー/〜タイプ/レプリカ等7、Jaguar は17出品中 部品/ケース7＋コンポーネント1。→ `MIN_PLAUSIBLE_MEDIAN` に 330=¥90,000・Jaguar=¥100,000 を足して `--reapply`（暫定の非表示）。ranking 55→53・指数 44→42銘柄（指数系列は再計算され最新 95.5→98.23）。ギター地域12本・guitar-kaitori・各型番ページ・/souba-ranking/ から消えた
  - ⚠️ 本筋は TITLE_RULES 化（判断待ち）。直すときは HISTORY_RESET_BEFORE も要（330 は 9/7 以降、Jaguar は 10/5 以降の点が混入値）
- **dw-collectors**: 「新たに非表示」ではなく、**7/16 の追加以来ずっと insufficient**（raw_n 2→4＝実出品2件、history 空）。原因はクエリ「DW Collector's ドラムセット」がセット出品しかヒットしないこと（目視: ¥321,999 / ¥1,000,000 の2件）。「DW コレクターズ」なら15件出るがスネア・タム単体中心（＋ビートルズLP・Nikon DW-1 等の無関係品）でセット相場にはならない。ページは「データ不足のため非表示」で古い数値の露出なし。ただし本文「上の相場カードは…中央値（毎週自動更新）です」・FAQ・description が数値ありの前提の文で、カードと食い違う（insufficient 9本でこの文があるのは DW だけ・未修正）
- **ピアノ5機種**: 新ルールが効いた＝YUS5/K-300/B-211 は n=0、U1 n=10（¥27,500 前後）・U3 n=12。全て ALWAYS_INSUFFICIENT で非表示（表示不変）
- **前週比 ±50% 超**: 0本（最大 Rickenbacker 330 -28.9%）
- **ytr8335 パンくず**: `wip/ytr8335-breadcrumb`（956f309）＝表示・JSON-LD・relatedSlugs 先頭を trumpet-kaitori「トランペット買取」へ、related-groups はサックス群→トランペット群へ1本移動。未デプロイ
- precheck ✅全項目OK（570ページ）


### 2026-10-12 成長ルーチン: sitemap lastmod
- `scripts/generate-sitemap.mjs` の lastmod を「ビルド日」→「ページと参照データ（@/data の import）の最終コミット日」に変更。全URLが毎回同じ日付だと Google が lastmod を当てにせず、新規の受け皿記事が「Google が認識していない」まま残っていたため。
- 記事を直したら **コミットしてから** `node scripts/generate-sitemap.mjs`（未コミットのファイルは当日扱い）→ ビルド → deploy。週次スクリプトは従来どおり自動で生成する。

### 2026-10-13 Rickenbacker 330 / Fender Jaguar を TITLE_RULES 化（暫定非表示→本体だけの値で再表示） ✅本番反映済み（src 3a84922・77fe9a6 / deploy aaaafd422）
- **10/13 のヤフオク実データで出品タイトルを全件目視**（両クエリとも1ページで終端）:
  - 「Rickenbacker 330 ギター」22出品 → 落とす12＝キーホルダー4（¥1,500〜1,900）・「330、360 ギター用 ハードケース」1・コピー/〜タイプ/〜風/レプリカ/Honey SG-5/Academy/Legend 7（¥14,300〜48,500）。残り10は**全て本物の 330 系**（Model330・330FG・330/12・1966 MOD 等 ¥95,150〜222,200）
  - 「Fender USA Jaguar」17出品 → 落とす9＝コンデンサー・ブリッジカバー・ジャガー用ブリッジ・PU フロントのみ・ケース3・AmPro ボディ＋パーツ（¥63,000）・MJT コンポーネント（¥96,000）。残り8は**全て USA 本体**（AV62/AV65/Johnny Marr 等 ¥151,000〜264,000）
- `fetch-yahoo-medians-gakki.py` の TITLE_RULES に2本追加（AC30 と同方式）: 330＝型番 `330` と Rickenbacker 表記必須・コピー系メーカー名/タイプ/風/レプリカ除外・下限 ¥60,000／Jaguar＝jaguar と fender 表記必須・〜用/コンデンサー/コンポーネント/ブリッジカバー/〜のみ除外・下限 ¥70,000。ケースは「ケース付/あり」が続かない形だけ落とす（本体タイトルに「ハードケース付き」が普通に出る）。「ステッカー」「ストラップ」も本体の付属品表記に出るので単語では落とさない
- 結果: 330 ¥48,350（n=44）→ **¥177,001（n=18、IQR で ¥95,150 の2件落ち）**、Jaguar ¥96,000（n=34）→ **¥221,000（n=16）**。MIN_PLAUSIBLE_MEDIAN（9万/10万）は保険として残置
- **履歴**: HISTORY_RESET_BEFORE＝両方 2026-10-13（旧方式の点を全部捨てる）。指示は「330 は 9/7〜・Jaguar は 10/5〜」の破棄だったが、その期間だけ消すと前の点（330 9/1 ¥140,800・Jaguar 10/1 ¥123,500）との間に **+25%／+79% の偽の前週比**がランキングに出る。Jaguar の 9/7〜10/1 ¥123,500 も本体値 ¥22万から大きく外れており混入が 10/5 より前からの可能性が高い → VOX と同じ全リセットにした。history は 10/13 の1点、change_1w/2w=None
- **当日反映**: `--only slug,slug`（指定モデルだけ取得し既存 JSON の他モデルは残す）を追加。⚠️ ただし今日は差分確認で全62クエリ×2回を取得した直後で **Yahoo が HTTP 500 を返した**（--only 実行が fetch_failed → data は git checkout で戻した）。同じ10/13取得HTMLのキャッシュで main(only) を実行して反映。⚠️ fetch_failed の結果は insufficient キーが無く、HISTORY_RESET_BEFORE の対象モデルだと履歴が空になる（今回は戻したので無害）
- **他60モデル不変の確認**: 同じ取得HTMLで HEAD 版と新版を全62モデル実行 → 差分は2本だけ（ただし後半13モデルは Yahoo 500 で両方 error。コード上 TITLE_RULES/HISTORY_RESET の追加は2スラッグのキーのみで他経路は不変）。ranking 53→55（他53モデルの行は完全一致）・指数 42銘柄 不変（2本は履歴1点で自動除外）・widget は日付以外不変なので戻した
- precheck ✅全項目OK（570ページ）。ranking の「最終更新」は 2026-10-13 表示になる（2本だけ 10/13 取得・他は 10/12）
- ⚠️ **Yahoo closedsearch が 10/13 09:0x 以降 HTTP 500 を返し続けている**（トップは200。今日の差分確認で約190リクエストを打った後から。約30分後（09:50頃）に200へ回復）。一時的な制限と見られる。**1日に全62クエリ×複数回を打たない**こと

### 2026-10-13 DEDUP_LISTINGS=True（n を実数に）の影響を再計算 → 10/14 実行手順（今日は有効にしていない）
- **方法**: 10/13 取得HTML（49モデル。後半13モデルは上記の Yahoo 500 で取れず、10/12 週次値の n を半分にして補完＝10/11 dry で中央値不変・n ほぼ半分を確認済みのため）で DEDUP 無/有を実行し、データ複製に「次回週次 10/19」として書き込んで ranking/指数を再生成して比較
- **中央値**: 全モデル不変（取得できた49モデルで実測）
- **MIN_SAMPLE=8 を割って非表示になる4本**: gibson-explorer 14→7 / tama-starclassic 12→6 / mesaboogie-markv 8→4 / moog-subsequent37 8→4（10/11 dry の5本のうち ibanez-jem は今日 n=16→8 で境界に残った）。境界 n=8〜9: fender-jaguar・ibanez-jem・ibanez-rg・taylor-814ce（8）、gibson-firebird・rickenbacker-330（9）＝翌週以降の出入りが起きやすい
- **ranking**: 55→51（上の4本が消える）。他モデルの中央値・前週比は不変。流通量TOP10 の顔ぶれ・順位も不変（n が全体に半分になるだけ）。ModelSpotPriceCard の「サンプル数 n=」は全ページで約半分の表示になる
- **相場指数**: 42→37銘柄。🚨 指数生成器の「全履歴点で sample_n>=20」条件に、新しい点（実数 n）が引っかかって **esp-horizon / fender-mustang / gibson-lespaul-custom / ludwig-supraphonic / warwick-thumb の5本が指数から外れる**（実出品数が減ったのではなく数え方が変わっただけ）。構成が変わるので**過去の指数系列ごと再計算され、10/12 の値も 98.23→98.79 に変わる**（最新 10/19 試算 98.30→99.02）
- **10/14 の実行手順（既定案）**:
  1. `scripts/fetch-yahoo-medians-gakki.py` の `DEDUP_LISTINGS = False` → `True`（1行）
  2. 指数の数え方も揃える（推奨・同時に）: `generate-souba-index-gakki.py` の `sample_n < 20` を「DEDUP 後の点は 10」にする。例: write_history の点に `"dedup": True` を入れ、指数側は `h.get("sample_n",0) < (10 if h.get("dedup") else 20)`。これをしないと上の5本が数え方の変更だけで指数から落ち、系列も書き換わる
  3. 10/14 には取得しない（全62モデルの再取得は history に 10/14 の週外の点ができ、前週比が「2日比」になる＋今日 Yahoo 500 が出た）。**commit/push のみで、10/19 の週次から効く**
  4. 10/19 週次後に確認: insufficient 化が上の4本（＋境界6本）で収まっているか、ranking 件数、指数の構成数と最新値、カードの n 表示
- 判断が要る点: 4本（Explorer/Starclassic/Mark V/Subsequent 37）が「データ不足のため非表示」になること、指数の構成変更（手順2を入れるか）

### 2026-10-15 /author/ の「約20モデル」→ 実数（62）✅本番反映済み（src 0da0572・5860c79 / deploy 7b9753772）
- 「データの更新手順」が「ギター〜ピアノの約20モデル」（6月の初期値のまま）。週次取得は `data/yahoo-medians-gakki.json` の 62 モデル、カテゴリにシンセ（Juno/Nord/Moog/minilogue）・トロンボーン・クラリネット・フルートも入っている。数字は `Object.keys(yahoo-medians).length` から出すようにした（モデルを足しても手で直さなくてよい）
- 「過去180日分」の記述は未確認のまま（取得 URL に期間指定なし。Yahoo 側の保持期間を一次情報で確かめていない）
- 他ページに同じ数の記述なし（souba-ranking は `models.length` で動的）。型番ページ 62/62 に相場カードあり・リンク切れ0（out/ 全走査）
- DEDUP 再計算（10/13 取得キャッシュ49モデル＋残り13は n 半分補完・取得0回）: 非表示4本＝gibson-explorer 14→7 / mesaboogie-markv 8→4 / tama-starclassic 12→6 / moog-subsequent37 8→4（後2本は補完値）、境界 n=8〜9 は6本、ranking 55→51、指数 42→37（落ちる5本＝esp-horizon / fender-mustang / gibson-lespaul-custom / ludwig-supraphonic / warwick-thumb、10/12 98.23→98.79・10/19 試算 99.02）＝10/13 の一覧と一致

### 2026-10-16 指数の採用基準 n≧10（DEDUP 後）を wip に用意（main 未マージ・本番変更なし）
- wip `wip/index-n10-1016`（103771a・origin push 済み）。件数基準の所在を全部洗い出した＝**指数用の件数基準は `generate-souba-index-gakki.py` の1か所だけ**（取得側の `MIN_SAMPLE=8` は insufficient 判定用で別物・`--reapply` は点を消すだけで件数を見ない）＋表示文言 `app/souba-index/page.tsx`「全週でサンプル数20件以上」＋ generated_note。
  - 取得側: write_history の点と latest に `"dedup": DEDUP_LISTINGS` を記録（10/19 週次の点から True）。指数側: `INDEX_MIN_N = 10`、印の無い旧点（〜10/12・重複込み）は ×`LEGACY_N_FACTOR=2`（=20）で判定＝旧点の判定は従来と完全に同じ
- dry（取得0回。10/15 の 10/13 キャッシュ試算 `/tmp/gakki1015/dedup.json` を temp コピーに 10/19 点として書き込み）: 現データ → 指数 JSON が generated_note 以外完全一致（42銘柄・10/12=98.23）。10/19 試算 → **42銘柄のまま・7/16〜10/12 の系列とカテゴリ別も完全一致・10/19=98.30**（旧基準だと 37銘柄・10/12 が 98.79 に書き換わる）。救われる5本の 10/19 n は warwick-thumb 12 / mustang 15 / supraphonic 15（半分補完）/ lespaul-custom 16 / esp-horizon 19＝warwick は境界に近い
- **10/17 の手順**: `cd ~/projects/gakki-kaitori-biyori && git checkout main && git pull && git merge --no-ff wip/index-n10-1016 && python3 scripts/generate-souba-index-gakki.py`（42モデル・最新 98.23 を確認）`&& git push`。**取得・ビルド・デプロイはしない**（/souba-index/ の文言は 10/19 週次のビルドで出る）。⚠️ 週次 cron は「今チェックアウトしているブランチの HEAD」を main に push するので、**作業後は必ず main に戻しておく**
- 10/19 週次後の確認: 指数 42銘柄（warwick-thumb の n が 10 未満なら 41）・10/12 の値が 98.23 のまま・新しい点に `"dedup": true` が入っているか
- DW Collector's の wip `wip/dw-text-1014`（42f194a）を確認: 本文・FAQ・title/description から「実勢中央値（毎週更新）」前提の文が消え、カードの「データ不足」と一致。main へのマージは衝突なし。DEDUP 後も n=4→2 で insufficient のまま＝文言は 10/19 以降も正しい。判断待ち（マージすればデプロイが要る）

### 2026-10-16 全文言のビジネス文書化（MediaXAI「全ページの文言をビジネス文書基準で棚卸し」・writing-standards.md §8）✅本番反映済み
- **`scripts/normalize-copy-202610.py`（冪等）**＝言い換え規則の一覧。app/**/*.tsx・components・data（articles-metadata / dealers / related-groups）に加え、**記事ジェネレータ scripts/*.py にも同じ規則を当てた**（generate-phase5-areas の build_page で試作→再適用の置換 0 件＝再生成しても新しい文言が出る）。FAQPage JSON-LD の `\uXXXX` 表記も復号して同じ規則を当てる。⚠️ **新しい生成スクリプトを書いたら出力後にこのスクリプトを流す**。
  - 主な規則: 〜しましょう→〜してください（確認/相談/利用/依頼→ご〜ください）／メタ説明の体言止め→〜します／徹底比較・完全ガイド・一択・鉄則・正直に・けど・多いはず・〜OK・無い→ない 等。地域テンプレ324本の「〜方法。」「最適。」「利用可能。」などの体言止めもです・ます化。
  - 手で書き直し: TOP（h1「大切な楽器を、最高価格で。」「プロの目で適正価格をお約束します」→ 比較ガイドの説明に）・フッター・記事制作ポリシー（見出し4つを「〜に努めます」型）・運営方針（見出し・手順を です・ます）・相場ランキング/指数/ウィジェット（「引用歓迎」「コピペ1行」→「出典を明記のうえ引用いただけます」、指数ページの別表記「楽器買取日和」→「楽器買取びより」）・各コンポーネント。
- **事実の修正**: ウリエルの「出張買取専門」（地域テンプレ・比較表のウリエル列・紹介文）→「出張買取中心」（公式お知らせ 2026-09-17 川崎 ラ チッタデッラ店開業）、「即日現金化」→「訪問時にその場で現金買取」（公式 /visit/ は「最短翌日以降」）。
- 🚨 **`refresh-freshness-gakki.py` が歴史的な日付まで毎月当月に書き換えていた**（`20XX年X月` を全部置換）→ 後ろが 現在/時点/最新/更新/ 週次/】/版 のときだけに限定。壊れていた3か所を戻した: miseinen「2026年10月の成年年齢引下げ」→2022年4月／kobe「イシバシ神戸三宮店は2026年10月閉店」→2019年8月／kaitoriyasan-hyoban「調査時点2026年10月」→7月（実際の調査月）。
- out/ 全574 HTML で旧い言い回し・§8 NG 0 件（残る「出張買取専門」4件は中古楽器堂 福岡博多店の記述＝未確認のため未変更）。アフィリエイト計測（felmat fmcl/fmimp）は 562 ページで本番と完全一致。precheck ✅全項目OK。
- src 5081f11・b5a9fc7・08125dd・c5cd4ab・8a7b16f ／ deploy abac1b641（push 後約2分で本番反映。TOP・akita・martin-d28・content-policy・souba-index・kobe・miseinen・osusume を curl で確認・felmat 562ページ本番一致）。
- ⚠️ `wip/dw-text-1014` は今回の変更と**衝突するようになった**（dw-collectors page.tsx・articles-metadata.json）。`wip/index-n10-1016`・`wip/ytr8335-breadcrumb` は衝突なし。
- ⚠️ `python3 scripts/gen-related-groups.py` は引数を見ずに実行される（`--help` でも書き込む）。現行データで流すと 46→47グループ・437→439 記事に変わる（今回は戻した）。
- 🔍 **見つけたが直していない（事実・要確認）**: 地域テンプレ324本のウリエル「対応エリア: 〇〇を含む〇〇全域」・FAQ「主要3社がすべて対応エリア」（ウリエル公式の出張エリアは北海道・東北・沖縄等を含まない）／ティファナ「〇〇近隣に店舗あり」（店舗は首都圏中心）・「年間4万件」・「状態を問わず査定OK」（公式トップに該当の文言なし）／「需要期 1〜3月・9〜10月」の根拠／miseinen FAQ「18歳以上であれば親権者の同意書を用意することで売却可能」（18歳以上は成年で同意不要）／中古楽器堂 福岡博多店「出張買取専門」／【2026年10月最新】等の月タグは月次スクリプトが本文の見直しなしに進めている（見せかけ鮮度）。

### 2026-10-17 copy-audit 指摘の残り（失敗しないコツ）
- oya-gakki-seiri の title/h1/JSON-LD（JSON-LD は \\uXXXX エスケープ表記で置換が届いていなかった）「失敗しないコツ」→「での注意点」、gakki-no-kaitoriyasan-hyoban「するのが失敗しないコツです」→「することをおすすめします」、kaitori-houhou-hikaku 目次「メリデメ」→「メリット・デメリット」。generate-phase1-situations.py・normalize-copy-202610.py にも規則を追加。
- out/ の §8 NG 0・precheck 全項目OK・felmat 562ページ一致・copy-audit --n 60 で NG 0。source aeddaf9 / deploy 672800c4e。

### 2026-10-17 P1: 指数 n≧10 マージ＋期限切れ情報の更新 ✅本番反映済み（src 8511910・b06d6cd / deploy 4e296fe68）
- `wip/index-n10-1016` を main に --no-ff マージ（8511910）。再生成で 42モデル・10/12=98.23 不変（JSON は generated_note のみ差分）。今日のデプロイに同梱されたため /souba-index/ の「全週でサンプル数10件以上（10/12 以前は20件以上）」の文言は本番に出ている。DEDUP の点は 10/19 週次から。確認は 10/16 の項のとおり
- 期限切れ（out/ 全574 HTML を締切・期間・キャンペーン・閉店予定・古い月表記で走査）: ①川崎 島村ラゾーナ川崎店「9/23 閉店予定」→ 閉店済み（公式 shop/l-kawasaki/ 閉店のお知らせ・10/17確認）。同時に川崎ルフロン店は買取代金が銀行振込のみ（公式 shop/kawasaki/used/）→「即現金化」の括りから外した ②池袋「西武池袋本店の期間限定催事」→ 2023/8/3〜8/14 の販売のみ・買取なし（hardoff news n2367・shop p=101114）と明記 ③横浜市緑区 セカスト横浜中山店「楽器買取キャンペーンあり」→ 公式で確認できず削除 ④grand-piano の JSON-LD headline【2026年7月最新】（\u エスケープで月次スクリプトが届いていなかった）→ 未確認ページのため title/og/headline を【2026年最新】、本文「2026年10月現在」「2026年10月時点の参考値」も月を外した
- out/ 全体で 7月等の古い月タグ 0。月次スクリプトが当月に進めている【2026年10月】タグ（約480）は「古い」に当たらないため未変更（＝見せかけ鮮度の課題は残る）
- felmat 等の計測リンク: deploy 前後 1168件/562ページ完全一致・変更4ページは本番でも一致。precheck 全項目OK。⚠️ CF Pages のビルドが今回約13分かかった（push 00:21Z→完了 00:34Z）

### 2026-10-18 P2: GSC 表示上位3記事の業者・店舗情報を公式と照合 ✅本番反映済み（src d22d848・037bf9c / deploy 1a00f14b9）
- GSC 28日（9/19〜10/16）表示上位: yokohama 866・kobe 411・piano-kaitori 369（martin 335 が4位）
- 直した値（すべて10/18に公式で確認）: ①島村 横浜ビブレ店「横浜駅東口すぐ」→ 西区南幸2-15-13 ビブレ5F・みなみ西口徒歩3分、営業時間、査定UP条件（持込5%・購入品5%・下取10%・最大20%）、実施中「ローランド電子ドラム買取10%UP」、**買取代金は銀行振込のみ・現金なし**（shop/yokohama/used/）。三宮オーパ店にも同じ条件と振込のみを追記 ②ウリエル「最短即日」→ 最短翌日以降（/visit/ FAQ）、神戸「市内全域」→ 兵庫県が対応エリア（一部市町村除く） ③ティファナ: 出張=東京・埼玉・神奈川・千葉の一部、店舗=東京15・埼玉3（神奈川・関西なし）→ 横浜表「店頭なら即日」、神戸表「全国対応」、まとめの「店頭買取」を修正。宅配=送料・キット無料・返送料無料・1箱140サイズまで。「年間4万件」は公式（トップ・会社概要・楽器・宅配）に記載なし→この3記事の本文・表から外した。「状態を問わず」→ 公式は「状態が悪い・古いものも相談可」で「音が出ない楽器」は買取不可 ④Qsic 読み「キューシック」→ キュージック、営業時間・水曜定休・宅配送料無料 ⑤イシバシ横浜店 営業時間12-20時・1938年創業・店頭は即時現金（50万円以上は振込） ⑥クロサワ横浜店 西口徒歩1分、公式に無い「リペア工房併設」「地域最大級」を外した ⑦ヒカカク「最短即日（複数社）」→ 業者による／最大20社
- 🔍 未確認のまま（判断待ち・未変更）: 横浜記事のイーストマウンテン／セントラル楽器／横浜楽器／クロサワバイオリン横浜店は公式ページが見つからない（実在未確認）。神戸のハードオフ灘店（2025/12新規）・鈴蘭台・星陵台は公式店舗ページを開けず未確認。ピアノ表の「グランドピアノ 対応」（ティファナ・ウリエル）は公式に明記なし。**「年間4万件」は RecommendedServices など共通部品・地域テンプレで 263 ページに残る**
- 計測リンク（felmat ページ内ユニーク）1168件/562ページ 前後一致・ページ別も完全一致。precheck 全項目OK
- ⚠️ `scripts/normalize-copy-202610.py --help` は引数を見ずに scripts/*.py まで書き換える（fetch-yahoo-medians・generate-souba-index のコメント「無い→ない」）→ 戻した。週次の前日は流さない

### 2026-10-19 週次後点検（非表示11モデル）＋GSC 表示上位の次の3記事（martin・名古屋・渋谷）を公式と照合 ✅本番反映済み（src 4fda5bc・b8c70dc / deploy 5cee859d1）
- **非表示11モデル（本番 ?cb= で確認）**: 11ページとも相場カードは「データ不足のため非表示／サンプル数が少ないため算出不可（取得 2026-10-19）」。NaN・¥0・Infinity は0件（HTML 内の `undefined` 45件は RSC の `$undefined` で表示されない）。/souba-ranking/（51モデル）・/souba-index/（42銘柄・10/12=98.23 不変・10/19=98.78）・widget・osusume・ブランド/楽器ハブに11モデルの週次値なし（ハブに残る Explorer / Starclassic / DW の金額は静的な目安レンジ表）。前週比 ±50% 超 0本（最大 ibanez-jem -17.8%）
  - **今週新たに非表示＝4本。理由はすべて n 不足（DEDUP で実出品数に直した結果。中央値は前週と同値）**: gibson-explorer 14→7（¥150,000）／mesaboogie-markv 8→4（¥197,000）／tama-starclassic 12→6（¥154,335）／moog-subsequent37 8→4（¥242,273）。10/13・10/15 の予測どおり。異常値による非表示は0
  - 前週から非表示のまま 7本: ピアノ6本（U1 n=6・U3 n=6・C3 n=2・YUS5/K-300/B-211 n=0。ALWAYS_INSUFFICIENT）・dw-collectors（n=3）
  - 🔍 未修正: explorer / markv / subsequent37 の本文「上の相場カードは…中央値（毎週自動更新）です」がカードの「データ不足」と食い違う（DW と同じ。tama-starclassic にはこの文なし）。`wip/dw-text-1014` と同じ扱いで判断待ち
- **GSC 28日（9/19〜10/16・アンカー合算）**: yokohama 895・kobe 433・piano 374（10/18 済）の次＝ **martin 343・nagoya 330・shibuya 319**
- 直した値（10/19 に公式で確認）: ①ウリエル 最短即日→最短翌日以降（/visit/ FAQ）、出張エリア「名古屋市内全域」→愛知県（一部市町村を除く）、「渋谷エリア」→東京都、公式に無い「搬出も査定士が行う」「ピアノは運搬業者を手配」「搬出料無料」を外した（公式は「大きい品物も買取可・申込時に大きさを伝える」） ②ティファナ 名古屋：出張は東京・埼玉・神奈川・千葉の一部、店舗は東京・埼玉のみ→「名古屋は宅配のみ」に、「年間4万件」を外した（公式は「100,000件突破」「300,000件突破」とページで不一致）。渋谷：渋谷区は出張エリア（/visit/shibuya-ku/）、「全国の業者に送れる」→自社宅配、「状態を問わず」→「汚れている・音が出ないなど状態が悪い楽器も相談可」（10/19 の /music/ の文言。10/18 の「音が出ない楽器は買取不可」とは表記が変わっている） ③コメ兵：「常時約1,000本」はロッキン名古屋栄店の公式の数字で取り違え→削除、「4箇所のリペアブース」削除、「月200〜300本のリペア」→毎月集まる USED 200〜300本、買取品目を公式の列挙に、現金または振込 ④クロサワ名古屋：「マーティン・キャノンボール買取強化」「リペア工房併設」→公式は専属リペアマン常駐、所在地・即現金（高額は後日振込あり） ⑤ロッキン：「下取10%アップ」→公式は「通常よりも買取価格を大幅アップ」（率の記載なし）、出張は東海4県 ⑥高く売れるドットコム 名古屋リユースセンター：名駅ではなく中区栄2-5-11、店頭 10:30〜18:30（「19:00まで」「楽器専門スタッフ常駐」は誤り）、名称の「楽器」を外した ⑦イシバシ名古屋栄：「電話で概算査定」→フリーダイヤルで無料相談（10:00〜18:30）・価格目安は公式サイト公開・店頭即日現金 ⑧渋谷：楽器の買取屋さん都内店舗に板橋店追加、「最短30分査定」→公式「最短30分でお伺い可能」、KAIKURO「ギター・ベースに強い」→公式の買取対象一覧、島村の「最寄り新宿PePe」→新宿PePe・二子玉川など ⑨martin 比較表「全モデル対応」→ティファナ「アコギを強化買取（マーチン等）」・ウリエル「マーチンの買取例あり」
- 🔍 未確認のまま（未変更）: コメ兵「愛知県内20店舗」（店舗一覧が JS 描画で取れず）・「1980〜2000年代中心の品揃え」、セカンドストリート渋谷神南店（2ndstreet.jp が 10/17 から不正アクセス対応でメンテ中・店舗ページ読めず）、比較表の「対応楽器 全ジャンル」。共通部品 RecommendedServices の「年間4万件」は 10/18 と同じく判断待ち
- 計測リンク 1168件/562ページ 前後一致（out・deploy とも）。precheck ✅全項目OK（570ページ）
- **(続き・親指示) ティファナ「年間4万件」を全ページから削除** ✅本番反映済み（src 96df447・9f785af / deploy bec179bc6）: 公式に無い数字のため、別の公式値には置き換えず、数字なしの表現にした。RecommendedServices・TOP（description・features→「宅配は送料・宅配キット無料」）・記事41本・生成スクリプトの、比較表「年間4万件実績」→「出張・店頭・宅配の3方式」と本文の文。旧 deploy（534715dad）で「4万件」を含んでいた264ページ（記事263＋TOP）を本番 ?cb= で全件取得→0件・全200。計測リンク 1168/562 一致、precheck 全項目OK。Indexing は martin・名古屋・渋谷の3本（3/3 OK）
  - 🔍 未修正: 地域記事に「ティファナは福岡エリアでも出張買取」「大阪エリアでも店頭・出張・宅配」「広島・京都からも（3方式で）利用可能」など、首都圏外での出張・店頭を示す文が残っている（公式は出張＝東京・埼玉・神奈川・千葉の一部、店舗＝東京・埼玉）
- **(続き2・親指示) 首都圏外の地域記事のティファナ記述を公式どおりに** ✅本番反映済み（src af7ac93・f8514be / deploy ae820086a）: 10/19 に公式 /visit/（出張＝東京・埼玉・神奈川・千葉の一部）、店舗一覧（東京・埼玉のみ）、/music/（遠方は全国送料無料の宅配）を再確認。首都圏外の地域記事は249本（都道府県判定は gen-related-groups.py と同じ）で、出張・店頭・近隣店舗を示す記述は本番で **246ページ・1,212か所 → 0**（?cb= で249本を全件取得）
  - 地域テンプレ232本: 「③ ティファナ（店頭・宅配）／店頭・宅配のハイブリッド／全国の店舗ネットワーク／〇〇近隣に店舗あり」→「（宅配）／〇〇からは宅配買取／〇〇近隣に店舗なし」、FAQ（表示とJSON-LD の \u エスケープ版の両方）の「ヒカカク！・ウリエル・ティファナ等がすべて対応エリア」からティファナを外して、宅配になる旨を1文足した。tifana.net 直リンクのボタン（計測なし）の文言を「近くの店舗を探す」→「ティファナの宅配買取」に
  - ギター×都市9本（名古屋・愛知・福岡・神戸・京都・大阪・広島・札幌・仙台）と福岡・大阪・京都・広島・神戸: 比較表の対応エリア→「宅配のみ（出張・店舗は首都圏）」、即日→「発送後に査定」、「ティファナも〇〇エリアで出張」「→ ティファナ or 店頭買取」「ティファナの店頭買取なら即日現金化」を修正。同じ行のウリエル「最短即日」→ 最短翌日以降
  - 生成スクリプト: `generate-phase5-areas.py`・`gen-guitar-city.py` は pref が東京都・埼玉県・神奈川県・千葉県で始まるかを見て文言を切り替える（首都圏は従来の文言のまま）
  - 計測リンク 1168/562 一致・precheck 全項目OK。push 10:10（movi-ai の 10:17 より前）
  - 🔍 未修正: 首都圏内でも神奈川・千葉の地域テンプレの「〇〇近隣に店舗あり」はティファナの店舗が無い県（神奈川23本・千葉13本）。共通 CtaBox の「近くの店舗を探す」ボタン（全ページ・計測リンク）も首都圏外では文言と実態が合わない
- **(続き3・親指示) 神奈川23本・千葉13本の地域テンプレ** ✅本番反映済み（src 3ab5ce9 系 / deploy 03ed670262）: 「③ ティファナ（店頭・宅配）／店頭・宅配のハイブリッド／全国の店舗ネットワーク／〇〇近隣に店舗あり」→「（出張・宅配）／店舗は東京都・埼玉県のみ／出張は神奈川県の一部地域（対象かは申込時に確認）、千葉は全域が相談地域」（公式 /visit/ の文言どおり）。FAQ のティファナも同じ範囲に（表示＋JSON-LD）。本番 36ページ・180か所 → 0。generate-phase5-areas.py は神奈川・千葉を別分岐に（東京・埼玉は従来の「近隣に店舗あり」のまま＝店舗あり。55ページ）。CTA ボタン文言は未変更（指示どおり）。計測リンク 1168/562 一致・precheck 全項目OK

### 2026-10-20 確認待ち2件＋GSC 表示上位の次の3記事（札幌・川崎・磯子区）を公式と照合 ✅本番反映済み（src 8867d7e / deploy 112a09842）
- **コメ兵「愛知県内20店舗」→ 45店**: 店舗一覧は JS 描画だが、komehyo.jp/kaitori/shop/ の裏の Yext 検索（ページ内の公開キー・experienceKey=shop-search・filters address.region=愛知県）で取得。愛知52件中【閉店】4件を除く48件、うち店頭買取あり45件（買取センター含む）。楽器を扱うかは店舗ごとと明記。「1980〜2000年代中心」は公式 /include_html/landing/komehyoguitar/（「平成レトロ」）で確認→本文に。「ヴィンテージに定評」「専属リペアスタッフによる正確な状態評価」→公式の「社内リペアで修理コストを買取価格に還元」に
- **セカンドストリート渋谷神南店: 今日も未確認（未変更）**。2ndstreet.jp は全URL（robots.txt 含む）が Akamai の 403 Access Denied（curl・WebFetch とも）。メンテ表示ではなくボット遮断の可能性。第三者サイトでは代用しない
- GSC 28日（9/20〜10/17・アンカー合算）: kobe 1174・yokohama 1107・shibuya 885・martin 784・nagoya 579・piano 377（以上照合済み）の次＝ **sapporo 313・kawasaki 211・yokohama-isogo 191**
- 直した値（10/20 公式）: ①**ウリエルの出張エリアに北海道なし**（/visit/：関東=茨城・栃木・埼玉・千葉・東京・神奈川／中部=岐阜・静岡・愛知／近畿／中国／四国／九州。東北・北陸・甲信・群馬・沖縄も無し）→札幌の表・節・FAQ・流れ・まとめを修正（ウリエルの節と計測リンクは残した） ②**ウリエル川崎 ラ チッタデッラ店が 2026/9/17 開店**（/shops/kawasaki/：川崎区小川町4-1 マッジョーレ2F・11〜21時（最終受付20時）・予約不要・その場で現金）。⚠️ 10/18 のメモ「店頭は川崎店のみ・予約制」は古い。宅配買取は無い（買取方法＝出張・店頭・催事） ③島村楽器は全店で買取代金は振込のみ（/used/flow/「現金でのお支払いは実施しておりません」）→札幌の即日現金化の記述を修正 ④TOPKING は大型楽器（電子ピアノ・ピアノ・グランドハープ）の買取を休止中 ⑤JINGLE=北区北23条西7丁目、MR.GAKKI LAB=東区東苗穂、ミツノ=豊平区月寒中央通（「大通エリア」は誤り） ⑥リコレクションズ送料無料は査定合計5,000円以上 ⑦ティファナ 神奈川の出張エリア＝川崎市（多摩・高津・中原・宮前区）／横浜市（青葉・都筑区）、相談地域＝川崎市（川崎・幸・麻生区）／横浜市の残り16区（磯子区含む） ⑧島村 川崎ルフロン「駅直結」→JR川崎駅東口徒歩2分、イシバシ横浜店 西口徒歩5分 ⑨磯子区「磯子区駅周辺・郊外型店舗」「神奈川全域が対応エリア」「ヒカカク！・ウリエル等がすべて対応エリア」を修正（表示＋\u エスケープの JSON-LD）
- 🔍 未確認のまま: ミツノ「創業50年超」、島村「買取キャンペーン定期開催」、TOPKING「その場で現金」（削除のみ）、セカスト全般
- 🔍 他ページの同じ問題（未修正・件数のみ）: ウリエルの出張エリア外（北海道・東北・北陸・甲信・群馬・沖縄）の地域記事でウリエル出張対応と読める記述 約40ページ／地域テンプレ「〇〇駅周辺・郊外型店舗どちらも利用できます」322ページ・「ヒカカク！・ウリエル等）がすべて対応エリア」267ページ・「〇〇を含む神奈川全域が対応エリア」22ページ
- 計測リンク 1168/562 前後完全一致（ページ別も一致）。precheck ✅全項目OK（570ページ）。Indexing API は未送信
- **(続き・親指示) ウリエルの出張エリア外の地域記事41本を公式どおりに** ✅本番反映済み（src 564501f / deploy 4ec2f2640）: 公式 /visit/（10/20）にない県＝北海道14・群馬5・沖縄4・福島3・青森2・宮城2・長野2・新潟2・秋田・岩手・山形・富山・石川・福井・山梨 各1（都道府県判定は gen-related-groups.py と同じ）
  - 地域テンプレ37本: 「② ウリエル（出張買取）」→「（〇〇県は出張エリア外）」、方式＝出張と店頭（川崎市の1店舗）、強み＝出張エリア内では大きい品物も買取可、対応エリア＝公式の出張エリアに〇〇県は含まれない。FAQ「ヒカカク！・ウリエル等がすべて対応エリア」→ 業者により異なる＋ウリエルは対象外＋ヒカカク！は一括査定（表示＋\u エスケープの JSON-LD）
  - 手書き3本: guitar-kaitori-sapporo / guitar-kaitori-sendai / sendai-gakki-kaitori（表・節・FAQ・まとめを札幌と同じ形に。仙台の島村ロフト店の「即日現金化」→ 振込のみ）
  - 生成スクリプト: generate-phase5-areas.py に URIEL_OUT（highimp・batch も build_page を継承）、gen-guitar-city.py に同じ分岐（札幌・仙台）。phase5 の25エリアと guitar-city 3本で生成結果のウリエル部分が本番ソースと一致することを確認
  - 本番 ?cb= で41本全件200・旧表記0件・新表記41本。計測リンク 1168/562 前後一致（41本はページ別にも一致）。precheck 全項目OK。ボタン（計測リンク）は不変。Indexing は送っていない
  - 🔍 残り: エリア内の県の230本の「ヒカカク！・ウリエル等）がすべて対応エリア」は県単位では食い違わないので未変更（ウリエルは「一部対応できない市町村あり」・ヒカカク！は一括査定で出張業者ではない点は残る）。テンプレの「〇〇を含む〇〇全域が対応エリア」「〇〇駅周辺・郊外型店舗どちらも」も未変更

### 2026-10-21 デザイン刷新：②スタジオ（チャコール×アンバー）＋ロゴB（MediaXAI 選定）✅本番（src c089034 / deploy e5db85b7a）
- 案出し `scripts/gen-design-proposals.py`（FV3案＋ロゴ5案・design-proposals/ は gitignore）。採用＝②＋B
- 全ページの色は `app/globals.css` のトークンだけで切り替え（accent=チャコール、gold=アンバー #f2b134、gold-dark #a8710c は文字用）。`.bg-gold.text-white` は文字をチャコールに上書き（アンバーに白は読めない）
- ヘッダー＝bg-accent-dark＋ロゴB インラインSVG（public/images/logo-b.svg と同じ図形）。TOP キービジュアル＝hero-studio.jpg（生成・ヘッドのロゴ風文字は画素で消した）＋HeroSearch（記事名 datalist）＋相場ランキング上位3（souba-ranking-gakki.json）＋数字帯（記事数は app/articles のディレクトリ数をビルド時に数える）
- ⚠️ SEO: TOP の h1 は従来文言「楽器買取サービスの比較ガイド」を維持（大キャッチは p）。デプロイ前に全ページの title/desc/canonical/robots/og/LD/h1/h2/リンク先を旧 deploy と照合して同一を確認した
- 確認待ちの間は wip ブランチに置き main に入れない（週次・定例が main を push/deploy するため）

### 2026-10-21 地域テンプレ322本の出張・店頭の定型文を公式の範囲に ✅本番反映済み（src 1532513・a0082bc / deploy 7a709c6ec）
- 旧「{name}駅周辺・郊外型店舗どちらも利用できます。即日の現金化も可能です。」（322本・「大田区駅」等の実在しない駅名も含む）／「{name}を含む{region}全域が対応エリアです。」（322本）／ウリエルの対応エリア「{name}を含む{region}全域」（285本）を、10/21 に開いた公式の範囲に置換: ウリエル出張＝/visit/ の都府県（「一部対応できない市町村がございます」・沖縄対象外）、ウリエル店舗＝/shops/ 川崎 ラ チッタデッラ店のみ（その場で現金）、ティファナ出張＝/visit/ FAQ「東京都・埼玉県・神奈川県・千葉県の一部地域」、ティファナ店舗＝/access/ 東京都・埼玉県（川口・川口前川・上尾）のみ・店頭は現金払い（/tento/）。店頭は「3社の店舗は東京都・埼玉県・川崎市のみ、{県}内にはない」＋地元店は支払い方法（現金/振込）が店舗ごと、と書いた
- 文言の定義は `scripts/fix-area-template-stores-202610.py`（冪等・既存ページへの置換も兼ねる）に一本化し、`generate-phase5-areas.py` が importlib で読む（highimp/batch も build_page 経由で継承）
- 本番との照合: 本文が変わったのは322ページのみ（title/meta/JSON-LD 不変）、計測リンク 2336件（fmcl+fmimp ユニーク）/562ページ 前後完全一致、precheck 全項目OK
- ⚠️ ソースは /tmp の git worktree で作業した（別セッションがデザイン作業中だったため）。Turbopack は symlink の node_modules を拒否する → worktree では `cp -Rc` で複製する
- 🔍 未変更: Tokyo/Saitama テンプレの ティファナ「{name}近隣に店舗あり」（店舗の無い区市でも出る）・FAQ「主要3社がすべて対応エリア」（東京・埼玉55本）／FAQ「{name}エリアは主要業者の対応圏内」（ウリエル出張エリア外の県でも出る）／FAQ「出張買取にも最短即日で対応する業者があります」／kawasaki「楽器の買取屋さんは川崎市を含む神奈川県全域に出張」（未照合）

## 2026-10-21 配下ページのテイスト統一＋公式サイトキャプチャ（MediaXAI）
- 見出し帯: globals.css の「配下ページの見出し帯」。記事はCSSセレクタ（パンくずnav＋直後article/mainの先頭header）で適用＝生成物を触らない。非記事は <header className="subhead">
- キャプチャ: components/ServiceCapture.tsx を各社紹介h3の直下に（scripts/add-service-captures-202610.py・冪等）。⚠️記事ジェネレータで再生成・新規生成したら、このスクリプトを再実行すること。画像=public/images/services/{hikakaku,tifana,uriel}.webp（1280×800・2026-10-21撮影。撮り直したら ServiceCapture の CAPTURED_ON も更新）
- **見出し帯のテーマ画像（2026-10-21・MediaXAI 承認「テーマ単位で約160枚・約3,000円」）**: 記事559本の帯に、ページの主題の写真を出す（Nano Banana Pro・110枚・生成134回＝上限170内）。
  - 画像: `scripts/gen-subhero-images-202610.py`（プロンプト全部入り。元画像は design-proposals/subhero-raw/＝リポ外、却下版は rejected/）→ `public/images/subhero/<key>.webp`（PC 1200px）＋`<key>-m.webp`（スマホ用に右側を切り出し 780px）。
    楽器49＋補助7（無銘エレキ5種・アンプスタック・スネア/シンバル）／売り方35／地域19（8地方×2、関東・近畿・中部は×3）。無銘・人物なし・文字なし・TOP の hero-studio.jpg と同じトーン。
    ⚠️ エレキは放っておくとストラト/テレ/レスポールの形（Fender/Gibson のヘッド形状）で出る → STYLE に「3+3 の丸いヘッド・特定モデルの複製でない」を入れてある。作り直したら必ずヘッドを拡大して確認。
  - 割り当て: `python3 scripts/add-subhero-images-202610.py`（冪等）。記事の先頭 `<header>` に `style={{ ["--subhero" as string]: "url(...)", ["--subhero-m" as string]: "url(...)" }}` だけを足す（文言・リンク・metadata・JSON-LD は不変）。結果＝`data/subhero-map.json`。
    instrument＝その楽器／howto＝その記事の場面／brand・model＝その楽器の画像を流用（スクリプト内 BRAND_MODEL）／region＝description の都道府県→8地方（gen-related-groups.py の PREF_FIX/AREA を流用）を都道府県順に a・b(・c) と回す。
    ⚠️ **記事ジェネレータで再生成・新規作成したら、このスクリプトを再実行する**（新しい brand/model は BRAND_MODEL に足す。足さないと「割り当てなし」と表示され、その記事はスタジオ写真のまま）。
  - CSS: globals.css「配下ページのテーマ画像」。`header[style*="--subhero"]` の帯だけ PC は右に広く（min(58vw,820px)・不透明度0.9）、スマホは見出しの上に写真の面（高さ min(64vw,340px)・-m 画像）。--subhero の無いページ（記事一覧・相場ランキング・相場指数・author・ポリシー）は従来どおりスタジオ写真。
  - 帯の無い2本（gakki-no-kaitoriyasan / gakki-no-kaitoriyasan-hyoban：article の先頭が header でない）は画像なし。

### 2026-10-22 朝ルーチン：東京・埼玉テンプレ55本のティファナ記述＋楽器の買取屋さん店舗一覧 26店（src 8dfabc8・c1db663 / deploy 60efb3f8c）
- **07:00 点検「データが10日より古い」（hyoban 2026-08-16）**＝店舗一覧の確認日。公式 /kaitori/shop/ を再確認したら**名古屋栄店が一覧から消え、/kaitori/shop/sakae は HTTP 410**（お知らせに閉店告知なし）→ 27→26店・確認日 10/22。10店舗（群馬桐生・厚木・新潟・金沢・福井花堂中・甲府千塚・長野松本・富士津田・広島・鹿児島）が「※事前予約制」を追記。gakki-no-kaitoriyasan も SHOPS から栄店を外し SHOPS_ASOF=10/22（description の店舗数 27→26・articles-metadata も）
- **東京・埼玉55本**: `scripts/fix-tokyo-saitama-tifana-202610.py`（冪等・generate-phase5-areas.py が importlib で読む）。公式 10/22: 店舗＝/access/＋各店舗ページの住所（東京10区市・埼玉 川口/上尾）、出張＝/visit/ の「出張可能エリア」モーダルの JS データ（出張エリア／ご相談地域。無い区市は対象外）。「{name}近隣に店舗あり」→「{区市}内に店舗あり（〇〇店）／なし（店舗は…）。出張は出張エリア／相談地域／対象外」（店舗あり12・なし43、出張エリア34・相談14・対象外7）。「全国の店舗ネットワーク、宅配買取も全国対応」→ 店頭は現金払い＋宅配一時停止中。FAQ「主要3社がすべて対応エリア」→ 業者別（表示＋\u の JSON-LD）
- 🚨 **ティファナの宅配買取が一時停止中**（/shipping/ ほか全ページのお知らせ「オンラインショップと宅配買取のサービスを一時的に停止」10/22）。首都圏外の「ティファナの宅配買取」ボタン・本文は未変更（判断待ち）
- 🔍 未変更: 楽器の買取屋さん名古屋栄店の記述が5本7か所（nagoya-naka×3〔description にも〕・nishi・nakagawa・midori・okazaki）。「全国の店舗ネットワーク」が型番・ブランド記事20本に残る
- 本文が変わったのは57本＋articles 一覧のみ。title/canonical/リンクは全574 HTML で旧 deploy と一致（description・h2 は kaitoriyasan の店舗数のみ）。felmat 6338 前後一致。precheck 全項目OK

### 2026-10-23 朝ルーチン：型番・ブランド記事20本のティファナ「全国の店舗ネットワーク」＋川口・世田谷の店頭買取なし店舗（src 5b3733a・a7cff92 / deploy 2527a8424・f4dbc63a8）
- 公式 10/23: /access/ の店舗一覧＝東京都16・埼玉県3（Reuse&Vintage 豪徳寺・ReTRee store 吉祥寺を含む）、/tento/ の「買取店舗一覧」＝17店舗（東京15〔ReTRee 吉祥寺を含む〕・埼玉2＝川口・上尾）・予約不要・現金お渡し。**イオンモール川口前川店は店舗ページに「買取受付 対応不可」**、Reuse&Vintage 豪徳寺は「店頭買取を実施しておりません」
- 型番・ブランド20本（generate-phase6-models.py も）: 「全国の店舗ネットワークを持ち…」→ 店舗は東京都・埼玉県だけ・店頭買取は17店舗（東京15・埼玉2）・予約不要・現金。本番 40か所→0（20本×2）・新表記 40・全200
- 川口・世田谷: 「店舗あり（川口店・イオンモール川口前川店）」等→ 店頭買取なしの店を明記。fix-tokyo-saitama-tifana-202610.py の TIF_STORES から外し TIF_NOBUY に
- 🚨 ティファナ宅配一時停止のお知らせは 10/23 も出ている（トップ・/shipping/・/access/・/tento/）。文言は「宅配買取のサービスを一時的に停止」に変わり、10/22 の「オンラインショップと」は消えた。本文の注記は判断待ち（未変更）。型番20本の「店頭・宅配での査定に対応」も未変更
- 計測リンク 9507/9507（html 6338）一致・precheck 全項目OK・Indexing 未送信

### 2026-10-24 朝ルーチン：ティファナ店舗数の照合（src 1f75040d・979f1d38 / deploy 866786722）
- 公式 10/24: /access/ のメニュー・フッターは国内19店舗（東京16・埼玉3。台湾2店とポップアップ マルイファミリー溝口店はコメントアウト）。カード一覧は18枚（ReTRee store 吉祥寺店のカードだけコメントアウト・店舗ページは200で買取あり）。カードの「買取」×は Reuse&Vintage 豪徳寺店・イオンモール川口前川店の2店。/tento/ の「買取店舗一覧」は17店舗（東京15〔ReTRee 含む〕・埼玉2）。→ 19（全店舗）と17（店頭買取できる店舗）は食い違いではなく対象の違い
- 型番・ブランド20本＋generate-phase6-models.py: 「店舗一覧」19店舗（東京16・埼玉3）と「買取店舗一覧」17店舗を出典ページ名つきで併記・販売のみ2店を明記・確認日 10/24。kaitori-houhou-hikaku の「ティファナは全国に店舗を持つ総合買取店」→ 東京都・埼玉県のみ・17店舗。本番21本 200・新表記あり・旧表記0。計測リンク html 6338/562 一致。precheck 全項目OK。Indexing 未送信
- 🚨 宅配一時停止のお知らせは 10/24 も継続。文言は「宅配買取のサービス・ECサイトをリニューアルのため一時停止」（10/23 の「セキュリティ対策として」から変更）。注記は判断待ち（未変更）
- 🔍 未変更: tokyo-gakki-kaitori「出張買取も東京全域に対応」（10/22 の /visit/ では東京にも相談地域・対象外あり。今日は未照合）

### 2026-10-25 朝ルーチン：ティファナの出張範囲（東京全域→公式の出張可能エリア）（src 75c39172 / deploy 5503796eb）
- 公式 10/25: /visit/ の「出張可能エリア」JS データは 10/22 と同一。東京都＝出張エリア 23区全部＋西東京・武蔵野・三鷹・調布・狛江・小金井・国分寺・国立の8市／相談地域 立川・府中・町田・小平・日野・東村山・東大和・清瀬・東久留米・多摩・稲城の11市／八王子など他は対象外。千葉県＝相談地域のみ（市川・船橋・松戸・柏・流山・浦安）。ウリエル /visit/ は千葉県・東京都を含む（一部対応できない市町村あり）
- tokyo-gakki-kaitori: 「ティファナも東京全域で出張買取」（FAQ表示＋JSON-LD）・「出張買取も東京全域に対応」・比較表のティファナ「23区+多摩」→ 上の区分どおり（確認日つき）
- guitar-kaitori-tokyo: 比較表ティファナ「対応エリア」→「出張は23区＋多摩8市（11市は相談地域）」
- guitar-kaitori-chiba: 「ウリエル・ティファナなど全国対応の主要業者が千葉市とその周辺を出張エリア」×4（本文2・FAQ表示・JSON-LD）→ ウリエル＝千葉県（一部除く）、ティファナ＝6市が相談地域で千葉市は含まれない。比較表ティファナ「対応エリア」→「出張は6市が相談地域（千葉市は対象外）」。gen-guitar-city.py の chiba/tokyo に tif_area と outreach を反映（再生成で戻らないように）
- 本文が変わったのは3本のみ（全 HTML の可視テキスト比較）。felmat 6338/6338 一致。precheck 全項目OK。Indexing 未送信
- 🚨 宅配一時停止のお知らせは 10/25 も継続（トップ「宅配買取のサービス・ECサイトをリニューアルのため一時停止」、/shipping/ は「システムリニューアルのため」）。注記は判断待ち（未変更）
- 🔍 未変更: chiba-gakki-kaitori（手書き）の「出張・店頭・宅配の3方式に対応し、千葉からも利用可能」・比較表「全国対応（千葉含む）」・「すぐ現金化→ティファナ」（千葉に店舗なし）＝宅配の判断と一緒に直す。guitar-kaitori-chiba「すぐに現金化したい → ティファナ」も同様。guitar-kaitori-yokohama 表「対応エリア」（横浜は2区が出張エリア・16区は相談＝範囲外ではない）

### 2026-10-26 朝ルーチン：ティファナ宅配一時停止の注記（既定案A 実行）＋千葉2本＋kawasaki 照合（src acdf22c7・78a6b1ca / deploy af027250c・f7173508e）
- 公式 10/26: トップ「宅配買取のサービス・ECサイトをリニューアルのため一時停止」、/shipping/「…システムリニューアルのため一時停止」。再開時期の記載なし（10/22 から継続）
- `scripts/fix-tifana-shipping-pause-202610.py`（冪等）: ティファナ紹介 h3 直下（ServiceCapture の下）に注記段落 326本／「…宅配買取になります・利用可能です・送れます 等。」の後に「なお、…一時停止中です（公式のお知らせ）。」495か所（表示＋raw/\u の JSON-LD）／「→ …ティファナ…宅配」行に「（宅配は一時停止中）」30／地域テンプレの強み 268／tifana.net 直リンク（計測なし）ボタン「ティファナの宅配買取（一時停止中）」232。既に「一時停止」記述のある東京・埼玉テンプレ55本は注記を入れない。宅配の記述・ボタン自体は残した（A＝注記）
- 共通カード RecommendedServices（全記事末尾）と TOP の features にも一時停止を併記
- 生成器: generate-phase5-areas.py・generate-phase6-models.py は build_page をラップして patch() を通す（highimp/batch も継承）。gen-guitar-city.py も build_page の最後で patch()。phase5 25本・phase6 20本・guitar-city 12本で生成結果のティファナ行が本番ソースに含まれることを確認
- chiba-gakki-kaitori: h3「3方式対応」→「千葉県内に店舗なし・出張は6市が相談地域」、本文「3つの方法に対応し、千葉からも利用可能」→ 店舗なし・6市相談地域（千葉市含まず）・宅配一時停止、表「全国対応（千葉含む）」(ティファナ列)→ 同上、査定スピード「最短即日」→「見積もりは最短5分（LINE・公式）」、特徴「3方式」→「（千葉は出張の相談地域のみ）」、宅配FAQ（表示＋JSON-LD）を一時停止に、「手軽に売りたい → ティファナで宅配/店頭買取」→ 近くの楽器店の店頭買取
- guitar-kaitori-chiba: h3・本文・表「すぐ売りたい人」→「ギター以外もまとめて売りたい人」・「すぐに現金化したい → ティファナ or 千葉駅周辺」→ 千葉駅周辺の店頭（ティファナ店舗は東京・埼玉のみ）。gen-guitar-city.py の chiba に tif_h3/tif_p/tif_pick/quick
- kawasaki 照合（10/26 公式）: 楽器の買取屋さん＝/area/kanagawa/「神奈川県全域が出張買取の対象」（川崎市あり）・出張費/査定料/搬出費無料・出張はその場で現金・神奈川の店舗は横浜/厚木のみ＝一致。ハードオフ小田栄＝10:00〜20:00・出張買取「実施なし」・ギター/ベース買取強化中＝一致。ティファナ /visit/「最短即日査定」＝表の「出張は最短即日査定」一致。本文「宅配買取は送料無料で全国から利用できます」→ 一時停止中に修正。セカスト 2ndstreet.jp は今日も 403（未照合）
- 🔍 FAQ「{name}エリアは主要業者の対応圏内」322本・「出張買取にも最短即日で対応する業者があります」323本: 最短即日の根拠はティファナ /visit/「最短即日査定」のみ（ティファナの出張範囲＝東京・埼玉・神奈川・千葉の一部）。ウリエルは最短翌日以降、楽器の買取屋さんは「即日現金化（出張はその場で現金）」で訪問日の記載なし → 首都圏外では根拠なし（未修正・報告のみ）
- felmat html fmcl 2910・fmimp 3340 前後一致。precheck 全項目OK。Indexing 未送信

### 2026-10-27 朝ルーチン：fukuoka（GSC 28日 表示9位・117imp・照合未実施の最上位）の業者・店舗情報を公式と照合（src e5b2f0f9 / deploy c030d45ff）
- GSC 9/27〜10/24 表示上位: yokohama 927・kobe 399・martin 343・shibuya 318・sapporo 301・nagoya 286・kawasaki 207・gakki-kaitori-sagi 176・fukuoka 117（上位7本は 10/18〜10/26 に照合済み）
- 直した値（10/27 公式）: ①**島村楽器 アミュプラザ博多店「10万円未満はその場で現金」→ 買取代金は銀行振込のみ・現金なし、10万円以上の振込は1週間ほど**（/shop/hakata/used/・/used/flow/shop/）。本文2か所・FAQ（表示＋JSON-LD）・流れ ②ウリエル「福岡市内」→ 福岡県（一部市町村除く）、「即日対応可能」→ 最短翌日以降、「搬出も査定士・搬出料無料」→ 大きな品物も買取可（申込時に大きさを伝える）・出張料/査定料無料（/visit/）。出張はその場で現金＝一致 ③クロサワ ミーナ天神店「ギター・ベース・管楽器の専門知識」→ 公式は「ギター・ベース専門店」、天神駅徒歩3分・11:00〜20:00、**修理の新規受付を一時停止中**（店舗トップのお知らせ）を追記 ④「楽器高く売れるドットコム 福岡リユースセンター…博多エリア・テレビ出演バイヤー・楽器専門スタッフ」→ 高く売れるドットコム 福岡リユースセンター＝南区清水2-2-18（高宮駅徒歩14分・博多駅から車10分）、店頭 10:30〜18:30 年中無休、宅配/出張/店頭、店頭は現金 ⑤イシバシ「福岡パルコ店」→ 公式店名「福岡店」（福岡パルコ8F）。住所・10:00〜20:30・天神駅直結・買取 0120-51-1484・店頭即日現金＝一致
- 🔍 未確認のまま（未変更）: 中古楽器堂 福岡博多店（出張買取専門・事前予約制・リペアマン在籍）、福岡楽器買取センター（楽器王福岡店／AI即時査定・市内全域出張）＝公式ページが見つからない。イシバシ「商品によっては価格保証」未照合。コツ3「クロサワのリペア工房」は修理受付停止中
- 本文が変わったのは fukuoka 1本のみ（全 HTML 可視テキスト比較）。felmat fmcl 2910・fmimp 3340 前後一致。precheck 全項目OK。Indexing 未送信
- 🚨 ティファナ宅配一時停止は 10/27 も継続（トップ「宅配買取のサービス・ECサイトをリニューアルのため一時停止」、/shipping/「…システムリニューアルのため一時停止」、再開時期の記載なし）→ 注記はそのまま

### 2026-10-29 朝ルーチン：gakki-kaitori-sagi・kawai-kaitori の業者事実を公式と照合（src 822604fe / deploy 91b05a990）
- 公式 10/29: ティファナ /shipping/ FAQ「返却を希望した場合は弊社負担で返送（取扱対象外の品物は客負担）」・/visit/「出張は完全無料・キャンセル料など請求なし」・トップ「最短5分！完全無料でスピード査定」。ウリエル トップ/FAQ の買取方法は出張・店頭・催事（宅配買取はコメントアウト＝無い）、/visit/「出張料・査定料無料・断ってもキャンセル料なし・大きい品物も買取可（申込時に大きさを伝える・後日引き取りあり）・最短翌日以降」、/instrument/ の主な買取対象＝ギター・ベース／弦楽器／管楽器／和楽器／デジタル楽器（ピアノなし）。ヒカカク！ /lp/「完全無料・最大20社・納得しなければ買取依頼しなくてOK」。カワイ /company/history/ 1927年 河合小市「河合楽器研究所」＝一致、kawai.jp/piano/「グランドのウルトラ・レスポンシブ・アクションⅡにカーボンファイバー入り樹脂素材」
- sagi: 「3社ともキャンセル料・返送料無料」→ 業者別（ティファナ返送料同社負担・対象外は自己負担・宅配一時停止中／ウリエル宅配なし／ヒカカク！依頼先による）。比較表の返送料・キャンセル料（ヒカカク！）列。「楽器専門の買取業者に依頼できる」→ 最大20社に一括査定
- kawai: FAQ「ウリエルの出張買取ならグランド/アップライトも自宅で完結」（表示＋JSON-LD）・コツ5・まとめ → ピアノは主な買取対象に無い＝申込時に確認。「カーボンファイバー入りハンマー」→ アクションの樹脂素材
- 本文が変わったのは2本のみ（全 HTML の可視テキスト・JSON-LD・href 比較）。felmat fmcl 2910・fmimp 3340 前後一致。precheck 全項目OK。__next*.txt 3,986件は rsync 前に削除。Indexing 未送信
- 🚨 ティファナ宅配一時停止は 10/29 も継続（トップ「宅配買取のサービス・ECサイトをリニューアルのため一時停止」、/shipping/「…システムリニューアルのため一時停止」＋マイページ不具合で宅配申込不可のお知らせ）→ 注記はそのまま
- 🔍 未変更: kawai の相場表の機種名（CA49/59/79/99・CN29/39・ES920 等）は旧世代の型番が混在（業者事実ではないため今日は触らず）。sagi まとめ「ティファナで宅配/店頭買取」（店頭は東京・埼玉のみ）・CtaBox「近くの店舗を探す」は共通ボタンの判断待ち

### 2026-10-30 朝ルーチン：kawai-kaitori 相場表の型番の世代を公式の製品一覧どおりに明記（src 574ca9ef / deploy a499ffaa4）
- 公式 10/30（kawai.jp/product/c/ の各シリーズ一覧）: CA＝CA401/CA501/CA701/CA901（CA49/CA59 は製品ページが残るが一覧に無い・CA79/CA99 は 404）、CN＝CN201/CN301 とも「生産終了」表示（CN29/CN39 は 404）、ES＝ES920/ES120 Filo/ES60（ES920 は現行）、NV＝NV6/NV12（NEW）・NV5S/NV10S は「生産終了」、K＝K-200/K-300/K-400/K-500/K-700（K-800 は 404）、SK-2/3/5/6/7/SK-EX・GX・GL-10/30/50 は現行。GM・BL・US・BS は現行一覧に無い。生産終了品の一覧ページは公式に見当たらない（各一覧の「生産終了」表示で判断）
- 備考欄に現行/旧世代を明記（CA・CN・ES・NV・K）。表の下に注記2つ（型番は混在・相場は従来の掲載値で型番別ではない／旧モデルとK-800は現行一覧に無い）。FAQ「現行Kシリーズで」→ K-800 を含むと明記、CA の FAQ に現行型番（表示＋JSON-LD）。相場の金額は不変
- 本文が変わったのは kawai-kaitori 1本のみ（全 HTML 可視テキスト比較）。felmat fmcl 2910・fmimp 3340 前後一致。precheck 全項目OK。__next*.txt 3,986件は rsync 前に削除。本番 09:28 反映（新表記あり・旧表記0）。Indexing 未送信
- 🔍 未変更: denshi-piano-kaitori にも CA49 等の旧型番あり（今日は未照合）

### 2026-10-31 朝ルーチン：denshi-piano-kaitori の型番に現行/旧世代を公式の製品一覧どおりに明記（src e6985bae / deploy e00ab8af4）
- 公式 10/31: ヤマハ Clavinova 一覧＝CLP-800シリーズ（CLP-825/835/845/875/885 等）・CVP-905/909・CSP-255/275（CLP-700/600・CVP-800/700 は一覧に無い）、Pシリーズ一覧＝P-525/P-225/P-145（P-515・P-125 は無い）。ローランド JP カテゴリ一覧＝HP702/HP704・LX-5/6/9・RP701/RP107・FP-10/30X/60X/90X 等、LX708/LX706/LX705/LX-17/HP605/HP603/RP501R は製品ページに「販売完了」。カワイ＝CA401/501/701/901、CN201/CN301 とも「生産終了」、ES920/ES120 Filo/ES60（ES520・ES110 は無い）
- 直した表記: CLP表の特徴欄を「旧世代（CLP-700/600シリーズ）」に・CLP-785「最上位」→ 旧世代の最上位、CVP-809「最新フラッグシップ」→ 旧世代、P-515 旧モデル、HP/RP/FP/CA の現行品に「現行」、LX708「プロジェクター付き」→ 公式に記載なし＝削除し「販売完了」、CN301「新世代エントリー」→ 生産終了、ES520/ES110 旧モデル。各メーカー節に注記（現行型番・確認日）。金額は不変（全「〜万円」一致を diff で確認）。更新日/dateModified 10/1→10/31（title不変）
- 本文が変わったのは denshi-piano-kaitori 1本のみ（全 HTML 可視テキスト＋JSON-LD 比較）。felmat fmcl 2910・fmimp 3340・t.felmat.net 6338 前後一致。precheck 全項目OK。Indexing 未送信
- 🔍 未変更: 発売年列（CLP-700「2021」・CA901「2023」・CA99/79/49「2020」等）は公式で未照合。roland-kaitori の FAQ・表に LX706/LX708 が「上位機」として現行品のように書かれている（同方針で要対応）。FAQ の JSON-LD「KAWAI CNシリーズで3万〜10万円」と表示 FAQ「KAWAI CAシリーズで5万〜18万円」が不一致（金額のため未変更）

### 2026-11-01 朝ルーチン：点検「データが10日より古い」の切り分け＋roland LX706/LX708＋denshi-piano FAQ JSON-LD（src e8a71785 / deploy 0c45ff171・f421e61a8）
- 07:00 点検 toda-saitama（2026-10-21）＝**誤検知**。拾っていたのは ServiceCapture のキャプチャ撮影日「画像：〇〇 公式サイト（…）2026年10月21日時点」で、このページに週次データ（取得日）は無い。週次データは 11/01 05:23 の月次鮮度で 62件とも fetched_at 2026-11-01（正常）。workspace の daily-site-check.py に CAPTION_RE（キャプション撮影日を照合前に除外）を追加。⚠️ 地域ページは RecommendedServices 等の「2026年10月26日時点で一時停止中」も拾うため、11/6 以降は同じ形の誤検知が出る見込み（未対応）
- roland-kaitori（Roland 公式 11/1: /jp/products/lx706/・lx708/・gp609/ に「販売完了」、lx-5/lx-6/lx-9・gp-3/gp-6/gp-9・hp704/hp702/rp701/fp-30x/fp-90x は表示なし）: FAQ（表示＋JSON-LD）「上位機のLX706で」→ LXシリーズ（LX706・LX708は販売完了・現行はLX-5/6/9）、表 LX 行「高級感あり」→ 販売完了の旧世代、GP 行「GP609/GP6/GP9」→ GP609（販売完了）/GP-6/GP-9、表下に確認日つき注記。金額は不変
- denshi-piano: FAQ JSON-LD「KAWAI CNシリーズで3万〜10万円」→ 表示と同じ「CAシリーズで5万〜18万円」（本文 CA表＝CA501 5万〜CA901 18万。CN は本文 1万〜6万で 3万〜10万の根拠なし）
- ⚠️ 週次と同じ `find out -name "__next*.txt"` だけだと index.txt 570本が deploy に入る（今回一度 push → 削除コミット）。robots.txt 以外の .txt を消すこと
- 本文が変わったのは2本のみ（可視テキスト比較）。felmat 2336/2336 一致。precheck 全項目OK。本番 09:25 反映。Indexing 未送信

### 2026-11-02 朝ルーチン：週次（11/2 04:00）の中央値点検＋週次で再混入した index.txt の削除（src 本コミット / deploy bdba7b93b）
- 週次 deploy 818c15f0a / src 4c810f67（49/62）。前週比（history 1点前・2点前）±30% 超は **0本**。最大は vox-ac30 ¥44,950（n=21・11/1 ¥52,975 比 -15.1%・10/26 ¥61,300 比 -26.7%）。TITLE_RULES 経路でタイトル除外 84件・下限 ¥8,000 通過・min ¥10,000（10/12 目視で AC30VR が ¥10,000〜20,900 の本体だった帯）。warwick-thumb が n 8→7 で新たに insufficient（中央値はほぼ同値）
- ⚠️ **出品タイトルは保存されていない**（fetch-yahoo-medians-gakki.py は中央値・n・min/max だけ書く）＝再検索しない限り目視できない。今回は統計値（n・min/max・title_excluded_n・history）で判定
- ⚠️ history に 11/1（月次鮮度）と 11/2（週次）の点が並ぶ＝今週の change_1w は実質「前日比」
- 🚨 **週次スクリプトが `__next*.txt` だけ消していたため index.txt 570本が 818c15f0a で再混入** → deploy から削除（bdba7b93b）、weekly-yahoo-update.sh を「robots.txt 以外の .txt を全部消す」に修正。precheck 全項目OK
- ティファナ宅配一時停止は 11/2 も継続（トップ「…リニューアルのため一時停止」、/shipping/「…システムリニューアルのため一時停止」）→ 注記はそのまま

### 2026-11-03 朝ルーチン：/author/ C3 は誤検知／guitar-kaitori-yokohama のティファナ出張・店舗（src 7e771d07 / deploy e30548abe）
- 点検 C3 /author/「監修者・筆者や経歴ではなく、当サイトが実際に」: 本番原文は「個人の執筆者や経歴ではなく、当サイトが実際に行っている運営方針と、掲載データの取得・更新の手順を公開」「掲載していないもの：執筆者・監修者の個人名…」＝監修者を置かない旨の否定文・運営方針の説明。体験・実績の主張ではないため誤検知（未変更）
- ティファナ宅配一時停止は 11/3 も継続（トップ「宅配買取のサービス・ECサイトをリニューアルのため一時停止」、/shipping/「…システムリニューアルのため一時停止」＋マイページ不具合で宅配申込不可）→ 注記はそのまま
- 公式 11/3 /visit/ 出張可能エリア（神奈川）: 出張＝川崎市（多摩・高津・中原・宮前区）／横浜市（青葉・都筑区）、相談地域＝川崎市（川崎・幸・麻生区）／横浜市の残り16区。/access/ 店舗は東京都・埼玉県のみ（マルイファミリー溝口店はコメントアウト＝掲載なし）
- guitar-kaitori-yokohama: 「ティファナも横浜エリアで出張・宅配買取」（本文・FAQ表示＋JSON-LD 計4か所）→ 青葉・都筑区が出張対象・16区は相談地域、h3「出張・店頭・宅配の3方式に対応」→「横浜市内に店舗なし・出張は青葉区・都筑区」、本文「宅配買取は全国共通で利用でき、店頭・出張と使い分け」→ 店舗は東京・埼玉のみ・出張範囲（確認日つき）、表「横浜対応」→「出張は青葉区・都筑区（16区は相談地域）」、おすすめ「すぐ売りたい人」→「ギター以外もまとめて売りたい人」、「すぐに現金化したい → ティファナ or 横浜駅西口」→ 横浜駅西口の店頭（ティファナ店舗は東京・埼玉のみ）。gen-guitar-city.py の yokohama に tif_area/tif_h3/tif_p/tif_pick/quick と outreach を反映（build_page の出力と page.tsx のティファナ行が一致を確認）。本番 新表記12・旧表記0。計測リンク html 6338/6338・当該ページ 24/24 一致。precheck 全項目OK。Indexing 未送信
- 🔍 未変更: 同ページ ウリエル「横浜市内全域への出張買取」（公式 /visit/ は神奈川県・一部対応できない市町村あり＝「全域」は未照合）／共通カード「ティファナ 出張・店頭・宅配の3方式に対応」（全ページ・CtaBox 判断待ちと一緒）

### 2026-11-03 12:00 成長ルーチン：店名指名「楽器の買取屋さん」が着地する横浜・川崎・神戸に公式の基本情報の節（src 16e773a8 / deploy 43599e21a）
- GSC 10/4〜10/31: yokohama 181imp・9.3位（「楽器の買取屋さん 横浜」99・8.1／「…横浜店 レビュー」35・10.3）、kawasaki 77・7.2、kobe 51・7.5。クリックほぼ0
- 公式 11/3（gakkikaitori.co.jp）: 運営 UNI SOUND株式会社・古物 神奈川県公安委員会 第451310006356号・本社 横浜市中区新山下（買取は行っていない）。会社概要の店舗欄に横浜店＝中区万代町1-2-3 座間ビル3F・10〜19時（店舗欄で営業時間があるのは横浜店のみ）。出張＝/kaitori/trip/（訪問・査定費無料・最短即日30分・その場で現金・キャンセル料なし・出張のみクーリングオフ8日）、/area/kanagawa/{yokohama,kawasaki}/＝神奈川県全域、/area/hyogo/kobe/＝兵庫県全域。宅配＝/kaitori/deliv/（着払い・成立後24時間以内に振込・不成立の返送料は客負担・身分証コピーと住民票の写し）
- 🚨 公式の変化: **店頭買取の店舗一覧 /kaitori/shop/ が 404**（/kaitori/shop/{slug}/ は /shop/{slug}/ 等へ 301。/shop/ の店舗紹介は本文が「店舗を持たず買取用の倉庫のみ」の定型文で住所なし）。会社概要・/shop/ 一覧の店舗は **23**（10/22 の当サイト 26 店から 甲府千塚・金沢・奈良神殿 が無い）→ gakki-no-kaitoriyasan（SHOPS・SHOP_COUNT・「店頭買取に対応する店舗が26店」）と hyoban の店舗表は**未変更・要照合**
- 実装: `components/KaitoriyasanInfo.tsx`（area=yokohama|kawasaki|kobe・ASOF 11/3・計測リンクなし・電話番号は転載しない・口コミ/評点なし）を各記事の地域ガイド h2 の直前に。冒頭（header 直後）に節へのリンク、目次に1行。更新日/dateModified 11/1→11/3（title 不変＝11/1 月次で変更済みのため）
- WebSearch（米国経由・日本の SERP 取れず）: uridoki「【横浜】楽器買取おすすめ店12選」（10/31）は楽器の買取屋さんの住所・営業時間が空欄、口コミは Google 引用＋最終閲覧日。hikakaku の店舗ページは住所欄が別拠点。→ 公式の所在地・営業時間・条件を出典つきで載せた
- 本文が変わったのは3本のみ（可視テキスト比較）。felmat 6338/562 前後一致・ページ別も一致。precheck 全項目OK。sitemap lastmod は3本（＋朝の guitar-kaitori-yokohama・TOP/一覧）のみ。Indexing 未送信（16時）

### 2026-11-04 朝ルーチン：ティファナ宅配は停止継続（注記不変）／fukuoka コツ3 にクロサワの修理受付停止を明記／/author/ C3 は誤検知
- ティファナ 11/4: /shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止」が表示。申込ボタン4か所はコメントアウト、申込先 online.tifana.net は 503（申込フォームの GET のみ・送信なし）→ 注記 327 ファイルは不変
- ⚠️ **ティファナの HTML はコメントアウトを含めて読むこと**。タグ除去だけだと `<!-- -->` 内の文言が本文に混ざる。11/4 時点でトップの「リニューアルのため一時停止」はコメント内＝非表示（/shipping/ は表示）。「マイページ不具合で宅配申込不可」は 11/2 の保存 HTML でもコメント内＝10/29・11/3 の記録の「＋マイページ不具合」は誤読。再開の判定は /shipping/ の表示と online.tifana.net の応答で見る
- クロサワ ミーナ天神店 公式 11/4（/sh_fuk/）: 「修理受付一時停止のお知らせ」継続（再開時期は未定）・リペア工房併設/リペアマン常駐の説明も掲載・買取/下取・ギターベース専門店・天神駅徒歩3分・11:00〜20:00 は本文と一致。コツ3「リペア工房を併設するクロサワ楽器」に修理受付停止を追記（同ページの他2か所は 10/27 時点の記載で一致）
- 中古楽器堂: 福岡博多店 公式 11/4＝住所・予約制・出張時間・店頭振込・電話とも本文と一致。サイトからのリンク3本（shinjuku/ikebukuro/dogenzaka）は 200・リダイレクトなし。sites.md の「旧URL」が指す URL は記録に見当たらず特定できない
- 点検 C3 /author/: 原文は「個人の執筆者や経歴ではなく、当サイトが実際に行っている運営方針…」「掲載していないもの：執筆者・監修者の個人名…」＝否定文・運営説明。Person 構造化データ 0。誤検知（未変更）
- 本文が変わったのは fukuoka 1本のみ（全 HTML 可視テキスト比較）。felmat fmcl 2910・fmimp 3340 前後一致。precheck 全項目OK。Indexing 未送信

### 2026-11-04 12:00 成長ルーチン：新宿の誤記2件のみ訂正／指示の3本は 10/26 の本文変更があるため追加は見送り
- ルール「10/25 以降に内容の変更があるURLは本文も触らず報告だけ（誤記訂正は可）」により、shibuya・shinjuku・martin の冒頭への追加は見送り。3本とも acdf22c7（10/26 ティファナ宅配停止の注記＝本文変更）あり。ce410967（11/1 月次鮮度）は日付のみ。title も 11/1 に変更があるため不変
- 公式 11/4 で訂正（shinjuku のみ）: 島村楽器 新宿PePe店＝買取代金は銀行振込のみ・現金なし・10万円以上は振込1週間ほど（/shop/shinjuku/used/）→ 店舗欄と「持ち込み＝その場で現金化」の行に明記。クロサワ楽器 日本総本店＝「11:00〜20:00年中無休」→ 平日・土 11〜20時、日・祝 11〜19時（/sh_ohkubo/。年中無休の記載は確認できず削除）、買取方式に出張を追加（/kaikuro/）
- 公式 11/4 で一致: イシバシ渋谷（12〜20時・予約なし可）・イシバシ新宿・中古楽器堂 渋谷（店頭は要予約）・中古楽器堂 新宿（店頭 11:00〜18:30・電話24時間）・イケシブリユース住所・ハードオフ新宿マルイメン。渋谷は誤記なし＝未変更
- 🔍 未確認のまま: イシバシ新宿「1981年開業」「1階に買取カウンター」、ハードオフ「首都圏出張買取センターが23区対応」、クロサワ G-CLUB 渋谷の住所・買取対象（/sh_gcshibuya/ の本文が短く取れず）、セカンドストリート（公式 403）、クロサワ「メール回答」
- 🔍 楽器の買取屋さんの都内実店舗が shibuya「上野・池袋・板橋」／shinjuku「上野・池袋」で不一致（店舗数の判断待ちと一緒に）
- 10日経過後（11/5 以降）の候補: 新宿・渋谷の冒頭に持ち込み早見表、martin の冒頭に当サイト週次中央値（D-28 ¥221,100 n=91・D-45 ¥746,735 n=23・000-28 ¥280,250 n=46、いずれも 11/2 の中古実勢＝買取価格ではない）へのリンクと店別の掲示買取価格（要確認）
- felmat fmcl 2910・fmimp 3340・fmimg 88・562ページ 前後一致。本文が変わったのは shinjuku 1本のみ。precheck 全項目OK。Indexing 未送信（16時）

### 2026-11-05 朝ルーチン：vs-kojin-baibai の★削除（点検 C6）／ティファナ宅配は停止継続／roland・denshi-piano は対応済みを確認（src 810c5976 / deploy 36e90b70c）
- 点検 C6: gakki-kaitori-vs-kojin-baibai の比較表「手間」行「★（少ない）／★★★（多い）」は出典も評価基準もなし → 「少ない／多い」。generate-phase3-faq.py も同じ表記に。本文が変わったのは1本のみ（全 HTML 可視テキスト比較）。JSON-LD 変更なし。fmcl 2910・fmimp 3340・fmimg 88 前後一致。precheck 全項目OK。sitemap lastmod は当該ページ＋TOP/一覧（生成器の仕様で最新記事の日付に追従）
- 🔍 未変更: 同じ根拠なしの★表が hikkoshi-gakki-shobun 5行・kabi-gakki-kaitori 5行・gakki-shobun-houhou 10行（計3ページ20行。generate-phase1-situations.py・generate-phase3-faq.py にも同じ値）
- ティファナ 11/5: /shipping/「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止」が表示。トップの同文はコメント内。online.tifana.net は 503（GET のみ）→ 注記 327 ファイルは不変
- roland-kaitori: FAQ（表示＋JSON-LD）・表とも LX706/LX708 は「販売完了」明記済み。Roland 公式 11/5 も lx706・lx708 に「販売完了」→ 変更なし。denshi-piano: JSON-LD・表示とも「KAWAI CAシリーズで5万〜18万円」、ソースに「CNシリーズで」0件・本番も CA のみ → 変更なし

### 2026-11-05 12:00 成長ルーチン：渋谷・新宿の冒頭に持ち込み早見表／martin の冒頭に2社の掲示買取価格＋相場の食い違いを訂正
- 公式 11/5 で確認して早見表（店名・所在地・駅徒歩・受付時間・買取品目・予約/支払い）: 渋谷＝イシバシ渋谷（12〜20時・予約なし可）／クロサワ G-CLUB（道玄坂2-29-17・ハチ公口徒歩5分・平日土11〜20時/日祝11〜19時）／イケシブリユース（西口徒歩3分・11〜20時・元日除き無休）／中古楽器堂 渋谷（完全予約制）。新宿＝イシバシ新宿／中古楽器堂 新宿本店（店頭11:00〜18:30・FAQ で事前予約必要）／島村 PePe（振込のみ・11/4 と一致）／クロサワ日本総本店（11/4 と一致）／ハードオフ新宿マルイメン（11〜20時・無休）。セカスト（公式未確認）は表に入れず
- martin: 島村楽器「買取価格検索」（brand=112）とイシバシ楽器「買取価格検索」（reuse.ishibashi.co.jp・JS 描画のためヘッドレス Chrome で確認）の掲示額を表に。D-28 Standard 島村 264,000/214,000/148,000・イシバシ 215,000/195,000/170,000、HD-28 Standard 301,000/244,000/169,000・200,000/180,000/160,000、000-28 Standard 301,000/244,000/169,000・260,000/235,000/210,000、D-45 Standard 813,000/661,000/457,000・700,000/620,000/540,000
- 訂正（martin のみ）: 掲示額と食い違っていた相場表 D-28「10万〜25万」→「8万〜26万（現行Standard 15万〜26万）」（下限は島村の旧 D-28 C ランク 84,000）、D-45「25万〜60万」→「46万〜81万」、000-28「10万〜22万」→「17万〜30万」、FAQ の D-28・D-45（表示＋JSON-LD）
- 🔍 未変更: martin-d28-kaitori（現行Standard 10万〜20万）等の型番ページと shibuya/shinjuku の相場表 D-28「10万〜25万」は掲示額と未整合／ハードオフ新宿マルイメン店舗ページが「出張買取 実施なし」と「出張買取を行っております」の両方を記載＝shinjuku の「首都圏出張買取センターが23区対応」は未解決／クロサワ日本総本店「新大久保駅徒歩1分」は今日の公式で確認できず（早見表は「新大久保エリア」）
- WebSearch は米国経由で日本の SERP 取れず。title 不変（11/1 に変更済み）。description は3本とも変更。本文が変わったのは3本のみ（全 HTML 可視テキスト比較）。felmat fmcl 2910・fmimp 3340・fmimg 88 前後一致。precheck 全項目OK。Indexing 未送信（16時）

### 2026-11-06 朝ルーチン：鮮度アラート 11/12件は誤検知（ティファナ注記の日付に反応）／ティファナ宅配は停止継続で確認日を 11/6 に更新
- 週次データは正常: com.gakki.weekly-yahoo-update は 11/2 04:00 開始→04:05 完了（終了コード 0）、yahoo-medians-gakki.json は 62 件すべて fetched_at 2026-11-02。次回は 11/9。
- 原因: daily-site-check の DATE_RE が「2026年10月26日時点で一時停止中」を取得日扱いした。11/6 に 11 日経過で初めて閾値 10 日を超えた。更新前の本番を同じ判定にかけると sitemap 453 本中 344 本が該当（日付なし 43 本）。この 344 本に週次の取得日はない。
- ティファナ 11/6: /shipping/ の表示に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止」。online.tifana.net は 503（GET のみ）。申込リンク online.tifana.net は /shipping/ の表示部分に 0 件（17 件すべてコメント内）。再開時期の記載なし。トップの同文はコメント内。→ 注記の日付を 10/26 → 11/6 に更新（330 ファイル・1,095 か所。うち JSON-LD の \\u 表記 232 か所）。fix-tifana-shipping-pause-202610.py の CHECKED も更新し、生成器も同じ日付になる。
- 🚨 注記の日付を更新すると、週次の取得日を持つページも最新日付が注記の日付になる（max を取るため）。点検が直るまで、週次停止はこの点検では検知しにくい。週次の監視はログと git log で見る。注記の日付は 11/17 に再び閾値を超える。
- クロサワ ミーナ天神店 11/6（/sh_fuk/）: 修理の新規受付の一時停止は継続（再開時期は未定）。fukuoka の記載は変更なし。
- 点検 C3 /author/: 11/3・11/4 と同じ否定文の誤検知（未変更）。


### 2026-11-06 12:00 成長ルーチン：RX-2 の掲示買取価格と相場訂正／川口・三鷹・多摩の持ち込み早見表（多摩は noindex 解除）／fender の冒頭に2社の掲示買取価格
- kawai-rx2: title・description・h1・冒頭を掲示買取価格の答えに。ピアノワン参考表 RX-2 ¥500,000〜650,000（表は 2026/7/7 更新、11/6 確認）、未来ピアノガーデン実績 RX2 2006年製 ¥670,000。カワイ発表資料で奥行き 178cm、カワイ公式 FAQ（古い・故障は査定額なし・有料廃棄の可能性）。島村の買取価格検索にピアノの項目なし。SCHECTER RX-2-24-CTM（島村 A229,000／B177,000／C106,000）は別の楽器と明記
- 訂正（rx2 のみ）: 出典のない「10万〜35万円」（本文・FAQ 表示＋JSON-LD）を削除し掲示額に置換／ティファナ「店頭・宅配に対応」→ 宅配は 11/6 時点で一時停止＋持ち込みの注意／「3社とも出張・送料無料」→ 査定料・キャンセル料無料、搬出費用は申込時に確認
- kawaguchi: 冒頭に早見表（島村かわぐちキャスティ・ティファナ川口・島村イオンモール川口前川・ハードオフ川口上青木）。ピアノは出張の案内。title 不変（11/1 変更）。ティファナ前川店は買取受付「対応不可」、ハードオフ上青木の出張対象はオーディオ・テレビのみ（楽器なし）、草加西は電車来店が厳しいと公式
- mitaka: 市内で確認できたのはハードオフ三鷹深大寺のみ＋最寄り島村吉祥寺パルコ。ティファナ吉祥寺・西荻窪は店舗ページの買取品目に楽器なし。title 変更
- tama-tokyo: 島村京王聖蹟桜ヶ丘（駅直結）・ハードオフ多摩和田・島村フレンテ南大沢。多摩センター周辺は公式で確認できず。title 変更。**中身を足したので noindex（9/2）を解除し sitemap に復帰**（sitemap 453→454）。GSC に表示は出ていた（18@8.0）
- fender: 冒頭に島村・イシバシの掲示買取価格（AmPro II Strat／AV II 1957／MIJ Traditional 50s／Player Tele／Player Jazz Bass。公式 11/6）。既存の相場表と矛盾なし＝本文の相場は未変更。title 不変。島村の AmPro II Strat は通常品の行がなく Anniversary(2CS) の値と注記
- 🔍 未変更: piano-kaitori の「KAWAI RXシリーズ 15万〜50万円」は今回の掲示額（50万〜65万）と未整合。kawai-kaitori・kawai-piano-kaitori・grand-piano-kaitori は未照合。イシバシ検索の「Fender Player Stratocaster」はヘッドレスで描画できない回があり表に入れず
- WebSearch は米国経由で日本の SERP 順位は取れず。RX-2 はピアノワン・未来ピアノガーデン・pianosouba 等が価格を掲示。本文が変わったのは5本のみ（全 HTML 可視テキスト比較）。felmat fmcl 2910・fmimp 3340・fmimg 88 前後一致。precheck 全項目OK。Indexing 未送信（16時）


### 2026-11-07 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/7 に更新／ミーナ天神は修理受付停止継続／ウリエル「市内全域」を公式の記載に訂正
- ティファナ 11/7: /shipping/ の表示に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止」。online.tifana.net は 503（GET のみ）。表示部分に申込リンクなし（残る online.tifana.net は JS の svg 取得のみ）。再開時期の記載なし。→ 注記の日付を 11/6 → 11/7（331 ファイル・1,096 か所。うち JSON-LD の \\u 表記 232 か所）。店舗の確認日など 11/6 のティファナ以外の日付は不変。
- クロサワ ミーナ天神店 11/7（/sh_fuk/）: 修理の新規受付の一時停止は継続（再開時期は未定）。リペア工房併設の説明も掲載＝fukuoka の3か所は一致のため不変。リペア工房の記載は他ページになし。
- ウリエル: /visit/ は「買取対応エリア ※一部対応できない市町村がございます」で神奈川県・京都府。「横浜市内全域」「京都市内全域」「18区すべて」と区名の列挙を公式の記載に（yokohama 7か所・guitar-kaitori-yokohama 4か所・kyoto 3か所。gen-guitar-city.py も同じ）。title は不変。
- 🔍 未確認のまま: セカンドストリート（www.2ndstreet.jp は robots.txt を含め 403）。未変更: 東京・埼玉テンプレ55本の「宅配買取は一時停止中（公式のお知らせ・2026年10月22日確認）」は日付が古いまま。
- 点検 C3 /author/: 「個人の執筆者や経歴ではなく」「監修者の個人名…掲載していないもの」の否定文で誤検知（未変更）。


### 2026-11-07 12:00 成長ルーチン：conn・bass の掲示買取価格、藤枝・磯子・千種の持ち込み早見表（kawai-kaitori・gakki-kaitori-sagi は 10/29〜30 の変更ありで未変更）
- conn: 冒頭にイシバシ楽器「買取価格検索」の掲示額（CAS280・CTS280・CSS280R・CBS280・88H・88HR・8D・8DS・1B）＋楽器の買取屋さんの相場表（8D ¥167,000・8DS ¥148,000・89HY ¥135,000）と事例（アルトサックス ¥63,000・2025/6/20）。島村の検索にコーンの管楽器なし。6M・10M はイシバシの検索が読み込み完了せず（「CONN 6M」「C.G.CONN 10M」各4回）、C.G.CONN は 1〜2 ページ 40 行まで確認で行なし＝掲示を確認できず。「10万〜40万円以上」は裏付けなしと本文に明記（値は未変更）
- 訂正（conn のみ）: 「いずれも査定料・送料・キャンセル料が無料」「掲載3社はすべて無料」（FAQ 表示＋JSON-LD）→ 査定は無料・条件は業者で異なる（sagi 10/29 の照合に合わせた）。ティファナ「店頭・宅配に対応」→ 店舗は東京・埼玉のみ・宅配は 11/7 時点で一時停止（/shipping/ 11/7 確認）。このページは 10/26 の一括注記から漏れていた
- bass: 冒頭にアコベの掲示額（島村・イシバシ。Kingman Bass SCE／V2、Taylor GS Mini-e Bass、AEB10E、AEGB24E）。相場表を掲示額に合わせ訂正: Taylor 3万〜6万→1.4万〜6.5万、Kingman 2万〜5万→1.2万〜4.4万、Ibanez 1万〜3万→0.7万〜3万。title 不変（11/1 変更）。イシバシの AEGB24E は読み込めず「確認できず」
- fujieda: ハードオフ藤枝店＋島村静岡パルコ店。すみやグッディ藤枝店・買取おりづる藤枝駅前店は公式を確認できず表に入れない旨を明記（本文の 7/23 の記述は未変更・description からは外した）。ハードオフの出張はカテゴリに楽器があるが取扱品目は大型テレビ・オーディオ＝電話確認と記載
- isogo: 磯子区内は確認できず（ハードオフ一覧に磯子・港南・南・中区なし）。ハードオフ横浜金沢富岡店（出張なし）・イシバシ横浜店・島村横浜ビブレ店。chikusa: ハードオフ名古屋覚王山店（区内）・イシバシ名古屋栄店・島村名古屋パルコ店。title はいずれも不変
- 🔍 未変更: kawai-kaitori（574ca9ef 10/30）・gakki-kaitori-sagi（822604fe 10/29）はルールにより見送り。楽器の買取屋さんのトップに偽サイトの注意喚起は見当たらず（WebFetch 11/7・サイト全体は未確認）。bass の Tacoma Thunderchief 5万〜12万と conn FAQ「プリウォーや Chu Berry 期は高額」は掲示で裏付けられず
- WebSearch は米国経由で日本の SERP 順位は取れず。本文が変わったのは5本のみ（全 HTML 可視テキスト比較）。felmat fmcl 2910・fmimp 3340・fmimg 88 前後一致。precheck 全項目OK。sitemap lastmod は conn のみ変化（他4本は 11/7 の注記コミットで既に当日）

### 2026-11-08 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/8 に更新／ミーナ天神は修理受付停止継続（src 8bfcd76a / deploy fac012afe）
- ティファナ 11/8: /shipping/ の表示（コメント除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止」。online.tifana.net は 503（GET のみ）。表示部分の online.tifana.net は JS の svg 取得のみ。再開時期の記載なし。トップの表示に一時停止の文言なし（11/4 以降と同じ）。→ 注記の日付を 11/7 → 11/8（332 ファイル・1,097 か所。うち JSON-LD の \u 表記 232 か所）。置換は「確認・再開時期の記載なし」「時点は/時点で一時停止中」「時点で公式サイトのお知らせにより一時停止中」の4型のみ。ウリエル等 11/7 の他の確認日は不変。fix-tifana-shipping-pause-202610.py の CHECKED も 11/8
- クロサワ ミーナ天神店 11/8（/sh_fuk/）: 「修理受付一時停止のお知らせ」継続（受付再開の時期は決まり次第案内）。リペア工房併設の説明も掲載＝fukuoka の3か所は不変
- 点検 C3 /author/: 本番原文「個人の執筆者や経歴ではなく、当サイトが実際に行っている運営方針と…手順を公開」「掲載していないもの：執筆者・監修者の個人名、肩書、経歴」＝否定文・運営説明。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340・fmimg 88（574 html）前後一致。precheck 全項目OK。本番で 6 ページ new>0・旧日付 0。Indexing 未送信（日付のみの変更）

### 2026-11-08 12:00 成長ルーチン：sagi の冒頭に訪問購入のルール（消費者庁）＋偽サイトの確かめ方／岡崎・佐賀・札幌の冒頭に持ち込み早見表（src be6b34e4 / deploy f4076e693）
- sagi（「ピアノ買取 詐欺」26@15.8・「楽器の買取屋さん 偽サイト」16@8.7）: 冒頭 #answer に表。消費者庁 特定商取引法ガイド「訪問購入」（/what/doortodoorpurchases/・11/8）＝書面受領から8日以内・書面又は電磁的記録でクーリング・オフ／期間内は引渡し拒絶可／不招請勧誘の禁止（査定依頼だけで査定を超えた勧誘は抵触）／再勧誘の禁止。政令34条の具体例 PDF（自動車・携行困難な家電・家具・書籍・有価証券・CD等）に楽器なし。国民生活センター 2023/9/27＝訪問購入相談 2022年度 7,722件
- 偽サイト: 楽器の買取屋さん公式の新着情報に注意喚起なし（11/8）＝「注意喚起は見当たらない」と書き、公式ドメイン gakkikaitori.co.jp（gakkikaitori.jp は 301 で同じ公式へ）・フッターの古物許可番号・UNI SOUND株式会社の確認を案内。偽サイトの存在は書いていない
- 訂正（sagi）: クーリング・オフの通知「書面で」→「書面または電磁的記録（電子メール等）」（本文・FAQ 表示・JSON-LD の3か所）／FAQ「本記事で紹介している3社はすべて安心して利用できます」（表示＋JSON-LD）→ 条件を公式で確認／まとめ ティファナ「宅配/店頭」に店舗は東京都・埼玉県のみ（tifana.net/shop/ 11/8）。title 不変・description 変更
- 早見表（公式 11/8・調査サブエージェント3体）: okazaki＝ハードオフ岡崎六名（六名駅北へ徒歩3分）・岡崎上里（大門駅徒歩20分・楽器買取強化中）・島村イオンモール岡崎（振込のみ・査定13〜18時がスムーズ）。chikaku の島村「ギター・ベースの下取り／買取」→ 管楽器等も・振込のみ。saga＝ハードオフイオン佐賀・島村イオンモール佐賀大和（ピアノは店頭不可）・小川楽器佐賀店（ピアノ買取の問い合わせ受付・佐賀駅北口徒歩3分）＋島村の電子ピアノ出張は佐賀県対象（2026/5/14 追加・製造8年以上不可）。sapporo＝島村 パルコ・ステラプレイス・クラシック、ハードオフ南郷20丁目・伏古。楽器の買取屋さん・イシバシ・クロサワは札幌に店舗なし、玉光堂は楽器を買取品目にしていない
- 🔍 未変更: sapporo の #local-shops（ミツノ楽器「創業50年超」・中古楽器堂 札幌店・札幌TOPKING・JINGLE・リコレクションズ）は今日照合していない（中古楽器堂の札幌店は要確認）。ハードオフ各店の店舗ページは出張買取が「実施なし」と「実施」の両方を記載。sagi パターン2「返送料が5,000〜10,000円」は出典なし。nagoya は確認のみ＝冒頭は3社比較表（「どこがいい」への一文の答えはない）、表のティファナ「名古屋対応＝宅配買取のみ」は宅配一時停止中（直下の注記で説明）
- felmat fmcl 2910・fmimp 3340・fmimg 88（574 html）前後一致・4本ページ別も一致。本文が変わったのは4本のみ（全 HTML 可視テキスト比較）。precheck 全項目OK。sitemap lastmod は sagi のみ変化（他3本は朝の注記コミットで既に当日）。本番 12:13 反映（新表記あり・旧表記0）。Indexing 未送信

### 2026-11-09 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/9 に更新／ミーナ天神は修理受付停止継続（src c20ab0f9 / deploy 0e22dd7bf）
- ティファナ 11/9: /shipping/ の表示（コメント除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止」。online.tifana.net は 503（GET のみ）。表示部分の online.tifana.net は JS の svg 取得のみ（他はメールアドレス tifana-online@tifana.net）。再開時期の記載なし。トップの表示に一時停止・再開の文言なし。→ 注記の日付を 11/8 → 11/9（332 ファイル・1,097 か所。うち JSON-LD の \u 表記 232 か所）。置換は 11/8 と同じ4型のみ。fix-tifana-shipping-pause-202610.py の CHECKED も 11/9
- ⚠️→✅ 04:00 の weekly-yahoo-update はビルドで失敗（next/font の Noto Sans JP が module-not-found＝フォント本体を取れず）。未コミット67本（data/yahoo-medians・price-history 62本・souba-ranking/index・public/sitemap.xml・widget.js）は mtime 04:00〜04:04・差分は fetched_at/date 11-02→11-09 と 11/9 の追記のみ＝週次の出力と確認。ヤフオクは再取得せず、そのデータで再ビルド→precheck OK→deploy c060ded49・src f5011186（09:35 push・本番 09:54 反映。/souba-ranking/ 最終更新 2026-11-09・widget.js 2026-11-09更新）。原因：layout.tsx/next.config/package に 11/2 以降変更なし、10/12〜11/2 の週次は 04:05 に成功、09:2x と 09:3x の再ビルドはキャッシュなしでフォント取得成功＝設定ではなく 04:04 時点のネットワーク一時障害と判断（ログはビルドの tail -5 しか残らず、エラーコードは取れていない）
- クロサワ ミーナ天神店 11/9（/sh_fuk/）: 「修理受付一時停止のお知らせ」継続＝fukuoka の3か所は不変。セカンドストリート（www.2ndstreet.jp）は 11/9 も 403
- 点検 C3 /author/: 11/8 と同じ否定文・運営説明（「掲載していないもの：執筆者・監修者の個人名、肩書、経歴」）。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340・fmimg 88 前後一致。precheck 全項目OK。本番 09:33 反映（5ページ new>0・旧日付 0）。Indexing 未送信（日付のみ）

### 2026-11-09 12:00 成長ルーチン：kawai・ibanez の冒頭に型番別の掲示買取価格＋相場訂正／名古屋市中村区の冒頭に持ち込み早見表（src 34cd3703・a0042a16 / deploy 7ffa30856）
- kawai-kaitori（「カワイ楽器 買取」22@11.4c4）: 冒頭 #kakaku にピアノワン「カワイピアノ買取価格参考表」（2026/7/7 更新・11/9 確認）と未来ピアノガーデンの買取実績の型番別表（SK-2・RX-2/3・GL10・CA-40・K-700/400・K-7・K-3・K-70・US-7X・US-95・BS20・K48/K20 有料引取）＋持ち込み/出張（ピアノは出張・当日現金/高額は振込・減額時無料キャンセル、島村 アコピ出張は全国で1週間後振込、電子ピアノ出張は一部地域・製造8年以上不可、イシバシ店頭はアコピ不可）。CA-40 はグランドの旧型番で電子ピアノの CA とは別と明記。電子ピアノの型番別掲示は見つからず（島村の検索に該当なし）と明記
- 訂正（kawai）: 相場表 SK 50万〜200万→180万〜230万（SK-2）、GX 20万〜80万→GX2 実績95万、GL 10万〜40万→GL10 実績72万、GM 5万〜25万→1万〜35万、K 5万〜30万→3万〜65万、BL 1万〜8万→BL71 実績1万、US 2万〜10万→2,000円〜20万、BS 1万〜5万→2,000円〜1万。FAQ（表示＋JSON-LD）のアップライト相場も掲示・実績に。ピアノワンの参考表は古い型番の一部がマイナス付きの金額で掲載（意味の説明は参考表になし＝解釈は書いていない）
- ibanez-kaitori（「アイバニーズ 買取」8@12.6・「ibanez 買取」10@19.3）: 冒頭に島村楽器「買取価格検索」の掲示 17 型番（A/B/C・11/9）。`search.html?cat=4&model=<型番>&num=100` で curl 可（ベースは cat=5）。島村・イシバシの店頭の支払い条件。訂正: J.Custom 8万〜20万→4万〜52万（JCRG 系 C ¥43,000〜A ¥519,000）、Prestige 4万〜12万→4万〜18万、AZ 5万〜12万→5万〜18万、SR Prestige 3万〜10万→3万〜12万、BTB 2万〜8万→1万〜11万、GSR 3,000〜1万→9,000〜2万、FAQ（表示＋JSON-LD）Prestige/J.Custom/JEM（「JEM7V 15万円以上」→掲示 A ¥104,000）/ベース。社名「名古屋の星野楽器製作所」→ 星野楽器（HOSHINO GAKKI・公式トップの表記）。イシバシの掲示は未確認（ヘッドレス未使用）
- nagoya-nakamura（「楽器 買取 名古屋」10@13.9c2）: 冒頭 #mochikomi に早見表＝島村 名古屋則武新町（西区・JR名古屋駅徒歩12分・振込のみ）／イシバシ名古屋栄（予約なし可・現金or振込・50万以上振込）／島村 名古屋パルコ（矢場町直結・振込のみ・生ドラムセットも店頭可）／ロッキン名古屋栄（矢場町徒歩2分・水曜定休・ギター/ベース専門）。中村区内に楽器の店頭買取は公式で確認できず。ハードオフは中村・西・中川・中区に店なし（調査サブエージェントが公式店舗検索で確認）、セカスト 403
- 🔍 楽器の買取屋さん公式 /kaitori/shop/ は 11/9 に開けた（11/3 は 404）。愛知の店舗は豊川・名古屋守山の2店で**栄店なし**（調査サブエージェント）＝ nagoya-naka 等の「名古屋栄店」記述は店舗数の判断待ちと一緒に要照合（今日は未変更）
- 🔍 fukuoka-gakki-kaitori は 11/4（99f42208 コツ3）に個別の本文変更あり → ルールにより持ち込み早見表は見送り（冒頭は3社比較表で、持ち込み早見表は無い）。11/14 以降の候補
- title は3本とも不変・description 変更。本文が変わったのは3本のみ（全 HTML 可視テキスト＋JSON-LD 比較）。felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338（574 html）前後一致・3本ページ別も一致。precheck 全項目OK。sitemap lastmod は kawai・ibanez のみ変化（nagoya は朝の注記で既に当日）。本番 12:23 反映（新表記あり・旧表記0）。WebSearch は米国経由で日本の SERP 順位は取れず。Indexing 未送信

- 11/9 12:3x（親）nagoya-nakamura 早見表の注記から「ハードオフは中村区・西区・中川区・中区に店舗が見当たりません」を削除（調査サブエージェントの未検証の一文。公式ドメインの検索結果で中区錦2丁目に名古屋栄伏見店あり＝誤り）。src 13bc28fd／deploy 238ff1df0。本番で0件を確認

### 2026-11-10 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/10 に更新／週次スクリプトのログ全文化＋ビルド再試行（src 970cf54d・16889752・e584555e / deploy 3bac376b0）
- ティファナ 11/10: /shipping/ の表示（コメント除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503（GET のみ）。表示部分の online.tifana.net は JS の svg 取得のみ（他はメールアドレス）。再開時期の記載なし。トップの表示に一時停止・再開の文言なし。→ 注記の日付を 11/9 → 11/10（332 ファイル・1,097 か所。うち JSON-LD の \u 表記 232 か所）。置換は 11/8 と同じ4型のみ（日付以外の差分 0 を確認）。11/9 の他の確認日（kawai・ibanez・nagoya-nakamura の掲示・更新日）は不変。fix-tifana-shipping-pause-202610.py の CHECKED も 11/10。sitemap lastmod 231 URL 更新（A/B 判断待ちのため従来どおり）
- weekly-yahoo-update.sh: 各工程の出力を全文 `~/Library/Logs/gakki-weekly/<日時>.log`（ビルドは `<日時>-build-<回>.log`）に残す（SRC 内は git add -A でコミットされるので外に置く・90日で削除）。ビルド失敗時は 180 秒（BUILD_RETRY_WAIT）待って1回だけ再試行、2回目も失敗なら従来どおり ERR trap で通知して終了。完了通知に再試行の有無と全文ログのパス。注意：safe_rm_rf のループ変数 attempt は local でないため、呼び出し側で同名変数を使わない（run_build は try_no）。バックアップ ~/projects/weekly-yahoo-update.sh.bak-20261110-gakki。検証は bash -n と npx をスタブにした再試行の3通り（成功／1回失敗→成功／2回失敗→trap exit 1）のみ。ヤフオクは叩いていない
- 点検 C3 /author/: 11/8・11/9 と同じ否定文・運営説明（「個人の執筆者や経歴ではなく、当サイトが実際に行っている運営方針と…手順を公開」「掲載していないもの：執筆者・監修者の個人名、肩書、経歴、顔写真」）。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338（574 html）前後一致。precheck 全項目OK。本番 09:2x 反映（/・akashi・nagoya・kawai・tokyo・fukuoka で新日付あり・旧4型 0）。Indexing 未送信（日付のみ）

### 2026-11-10 12:00 成長ルーチン：名古屋・瑞穂区・北区の冒頭に持ち込み早見表／osusume に選び方5項目の表／ihin に売る前の確認表（src 9acd32df / deploy a0759b9e6）
- nagoya（「楽器 買取 どこがいい」11@8.9・「楽器の買取屋さん」10@10.4）: 冒頭 #mochikomi に6店＝イシバシ名古屋栄（11-20時・予約なし可・その場で現金or振込・50万以上振込）／クロサワ名古屋（伏見4分・月〜土11-20/日祝11-19・持ち込み/宅配/出張）／ロッキン栄（矢場町2分・水曜定休）／島村 パルコ（矢場町直結・10-20・スムーズ13-19）・名古屋ギター&リペア（中区千代田・鶴舞駅7分・木曜定休・11-19:30）・則武新町（10-21）。島村は全店「銀行振込のみ・現金なし・10万以上は1週間ほど」。訂正: 本文「イシバシ…店頭買取は即日現金払い」→現金または振込（50万以上振込）、FAQ（表示＋JSON-LD）「大須・栄の楽器店やリサイクルショップは即日現金化できる」→店による（島村は振込のみ）
- mizuho（「楽器買取 瑞穂区」12@14.3）・kita（8@14.2）: 冒頭 #mochikomi に4店。楽器チェーン4社（島村・イシバシ・クロサワ・ロッキン）の公式店舗一覧に瑞穂区・北区の店舗なし（島村 /shop/ の東海一覧・イシバシ全店一覧・クロサワ トップの店舗一覧（バイオリン名古屋店も中区栄2）・ロッキン店舗一覧で確認）。リサイクルショップは未確認と明記。ハードオフは /shop/list/?a=23&t1=on で名古屋市内は緑・天白・千種・守山・名東のみ出るが、11/9 に中区の名古屋栄伏見店が別にあったため一覧が網羅的か不明＝ハードオフの有無は書いていない
- osusume（「楽器 買取 業者 選び方」13@15.8）: 冒頭の目的別リスト直下に #checklist（専門査定・相見積もり・売り方と店頭の支払い方法・手数料・訪問購入のクーリング・オフ8日/引渡し拒絶/不招請勧誘＝消費者庁 11/10）。順位・★なし
- ihin（「遺品整理 楽器」9@10.2）: 冒頭 #checklist（相続人複数は共有＝民法898条／相続財産の処分は単純承認＝921条1号／熟慮期間3か月＝915条／訪問購入8日）。e-Gov 法令API で条文を 11/10 確認
- title は5本とも不変・description 変更。可視テキスト＋JSON-LD が変わったのは5本のみ。felmat fmcl 2910・fmimp 3340・t.felmat 6338 前後一致（ページ別も一致）。precheck 全項目OK。sitemap lastmod は osusume・ihin のみ変化（名古屋3本は朝の注記で既に当日）。.txt 4550 本削除。本番 12:17 反映（新表記あり・旧表記0）。WebSearch は米国経由で日本の SERP 順位は取れず（ウリドキ・オークファン等は店舗列挙・相見積もり・手数料の解説型）。Indexing 未送信
- 🔍 未変更: mizuho/kita の FAQ「地元の楽器店も数店あります」「店頭買取であれば当日中の現金化が可能」は根拠未確認（島村は振込のみ）。ihin の「数十万円の価値がある楽器が数千円で引き取られてしまうケースも実際に起きています」「その場で現金を受け取れます」は出典なし。osusume の目的別「今日すぐ現金化→店頭買取（ティファナ）」はティファナ注記 A/B 判断待ちのため未変更。コメ兵名古屋本店ギターフロアの公式店舗ページは今日見つからず（本文の営業時間 10:30〜19:00 は未照合）

### 2026-11-11 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/11 に更新／名古屋コメ兵・札幌の地元店（中古楽器堂・TOPKING・ミツノ）を公式照合＝食い違いなし（src 82345120・164a26ef / deploy 52c225328）
- ティファナ 11/11: /shipping/ の表示（コメント除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503（GET のみ）。表示部分の online.tifana.net 0 件。再開時期の記載なし。→ 注記の日付を 11/10 → 11/11（332 ファイル・1,097 か所。うち JSON-LD の \u 表記 232 か所）。置換は 11/8 と同じ4型のみ（日付以外の差分 0 を確認）。11/10 の他の確認日（nagoya・mizuho・kita・osusume・ihin）は不変。fix-tifana-shipping-pause-202610.py の CHECKED も 11/11。sitemap lastmod 231 URL 更新（A/B 判断待ちのため従来どおり）
- 照合（変更なし）: nagoya のコメ兵ギターフロア＝営業時間 10:30〜19:00・本館5F・大須3-25-31・USED 毎月200〜300本・大須観音2番/上前津8番 徒歩5分・現金または振込・創業79年（komehyo.jp/kaitori/shop/kc-nagoya-honkan と /include_html/landing/komehyoguitar/ 11/11）＝一致。sapporo: 中古楽器堂 札幌店は実在（gakkidou.co.jp/shop/hokkaido/sapporo/・中央区南八条西9・店頭11:00〜18:30・自社リペアの記載あり）、札幌TOPKING は江別・北広島・千歳も出張対象・大型楽器の買取休止（sapporo-gakki.tt-media.co.jp）、ミツノの出張は mitsuno.co.jp には記載なしだが買取サイト gakki-kaitori.com に「札幌市内・近郊へ出張買取」＝本文どおり
- 🔍 未変更: ミツノ「創業50年超」は公式に創業年の記載なし（第三者に 1966 年創業）。sapporo の FAQ は JSON-LD と表示で文が一部違う（JSON-LD のみ「TOPKING は札幌市外への出張にも対応」「JINGLE…買取に対応」）。中古楽器堂の出張時間は公式ページ内で 9:00 と 9:15 が混在
- 点検 C3 /author/: 11/8〜11/10 と同じ否定文・運営説明（「個人の執筆者や経歴ではなく、当サイトが実際に行っている運営方針と…手順を公開」「掲載していないもの：執筆者・監修者の個人名、肩書、経歴、顔写真」）。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340・t.felmat 6338（out html）前後一致。precheck 全項目OK。本番 09:2x 反映（/・akashi・nagoya・kobe・tokyo・fukuoka で新日付あり・旧4型 0）。Indexing 未送信（日付のみ）

### 2026-11-11 12:00 成長ルーチン：roland の冒頭に電子ピアノ・ステージピアノの掲示買取価格／瑞穂区・北区 FAQ と ihin の出典なし文を訂正（src 30dff86d / deploy d16aaac92）
- roland-kaitori（「ローランド 電子ピアノ 買取」10@12.5）: 冒頭 #kakaku。イシバシ「買取価格検索」（reuse.ishibashi.co.jp・ヘッドレス Chrome。部分一致の「Roland FP」等は読み込み中のまま描画されないことが多く、型番完全指定なら出る）＝FP-30X 3万/2.5万/2万・FP-E50 5.5万/4.8万/4万・FP-90X 7万/6万/5万・RD-88 5.5万/4.6万/3.8万・RD-88EX 7万/6万/5万・RD-2000 9.5万/8.1万/6.7万・RD-2000EX 11.5万/9.8万/8.2万。島村 search.html?model=RD- ＝RD-88 5.2万/4.4万/3.2万・RD-88EX 8万/7万/5.3万・RD-2000 10.5万/9万/7.5万・RD-2000EX 15.5万/13.5万/10.3万（RD-64 2.8万も掲示）。家庭用 HP・LX・GP・RP・FP-10/30/60 は両社の検索で掲示を確認できず（イシバシは描画できなかった型番あり）と明記。条件表＝イシバシ店頭（その場で現金・50万以上振込・アコピ/エレクトーン/オルガン不可）、イシバシ出張（預かり査定・振込・対応エリアのみ）、島村 電子ピアノ出張（対象エリア・製造8年以上不可・指定業者引き上げ・1週間ほどで振込）。相場表訂正: FP 1万〜5万→2万〜7万、RD 3万〜10万→3万〜15.5万。description 変更・title 不変
- 瑞穂区・北区: FAQ「地元の楽器店も数店」→チェーン4社の公式一覧に区内店舗なし（11/10）・個人店/リサイクルは未確認、「当日中の現金化が可能」→イシバシ栄は現金（50万以上振込）・島村は振込のみ（/kaitori/tentou/・/used/flow/shop/ 11/11）。表示＋JSON-LD。h3「持ち込み即現金化」→「持ち込み」、節1「地域密着型の小規模楽器店もありますが…」を公式一覧の事実に。FAQ 後半「出張買取にも最短即日」は 323 本テンプレの判断待ちのため残した
- ihin: 「数十万円の価値がある楽器が数千円で引き取られてしまうケースも実際に起きています」→おそれの表現、流れ4「その場で現金」→ウリエル出張は現金（/visit/ FAQ 11/11）・島村は振込のみ
- 🔍 未変更: recorder-kaitori は島村・イシバシの検索にリコーダーの掲示なし（Moeck・Mollenhauer＝ファゴットのみ・YRA 該当なし）＝公式値がなく冒頭の答えは足さず。同ページの「いずれも査定料・送料・キャンセル料が無料」「ティファナ…店頭・宅配に対応」はティファナ注記 A/B 判断待ちと一緒に要訂正。roland FAQ「ウリエルの出張なら大型の電子ピアノも…」はウリエル公式の品目一覧に電子ピアノの記載なし（未訂正）
- felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338 前後一致（ページ別も一致）。precheck 全項目OK。可視テキスト＋JSON-LD が変わったのは4本のみ。sitemap lastmod は roland・ihin のみ変化。本番 12:1x 反映（新表記あり・旧表記0）。WebSearch は米国経由で日本の SERP は取れず（高く売れるドットコムのキーワード頁のみ）。Indexing 未送信

### 2026-11-12 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/12 に更新／週次スクリプトの全文ログ＋再試行は 11/10 実装済みを再確認（src 05b37a94・474f5586 / deploy 61d0a94df）
- ティファナ 11/12: https://www.tifana.net/shipping/ の表示（コメント除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503（GET のみ）。表示部分の online.tifana.net は JS の svg 取得のみ。トップの表示に一時停止・再開の文言なし。再開時期の記載なし。→ 注記の日付を 11/11 → 11/12（332 ファイル＋生成器 CHECKED・1,098 か所。うち JSON-LD の \u 表記 232 か所）。置換は 11/8 と同じ4型＋\u 型のみ（diff を逆置換して元と一致＝日付以外の差分 0）。11/11 の他の確認日（roland・瑞穂区・北区・ihin 等 12 か所）は不変。sitemap lastmod 231 URL 更新
- ⚠️ tifana.com ではなく **tifana.net**（tifana.com/shipping/ は 404）。シェルの heredoc 内 Python で r'\u…' を書くと \u がデコードされて一致 0 件になった（理由未確認）→ \u 型の置換は chr(92) で組み立てたスクリプトファイルで実行
- weekly-yahoo-update.sh: 全文ログ（~/Library/Logs/gakki-weekly）とビルド再試行は e584555e（11/10）で実装済み。11/12 は bash -n OK、関数とビルド工程だけを抜き出し npx をスタブにした3通り（成功／1回失敗→再試行成功／2回失敗→ERR trap で失敗通知）を再確認＝変更なし。ヤフオク・Discord は叩いていない。LaunchAgent は月曜 4:00（次回 11/16）で、~/Library/Logs/gakki-weekly は初回実行時に作られる（まだ無い）
- 点検 C3 /author/: 11/8〜11/11 と同じ否定文・運営説明。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338 前後一致。precheck 全項目OK。本番 09:34 反映（/・akashi・nagoya・tokyo・chiba・kawasaki で新日付あり・旧4型 0、sitemap 2026-11-12 231）。Indexing 未送信（日付のみ）

### 2026-11-12 12:00 成長ルーチン：fender-precisionbass の冒頭にプレベ9型番の掲示買取価格／相場・FAQ を掲示に合わせ訂正（src f06a5f18・68802c5a / deploy d0e102b1c）
- fender-precisionbass-kaitori（「プレシジョンベース 買取」8@9.1c1）: git log --since=11/3 で変更なし（11/9 は週次の yahoo データのみ）。roland 11/11・fender 11/6 と同じ型で h1 直下（ModelSpotPriceCard の前）に #kakaku。島村「買取価格検索」`search.html?cat=5&model=Precision%20Bass&num=100`（242件・3ページ curl 可）＝Player 4.9万/4万/2.8万・Player II 5.3万/4.3万/2.9万・TraditionalⅡ 60s Rose 6.7万/5.5万/3.8万・MIJ Traditional 2025 '60s 7.9万/6.4万/4.4万・Am Pro II 14万/11.3万/7.9万・Am Ultra II 18.2万/14.8万/10.2万・Am Vintage II 1960 18.9万/15.3万/10.6万・1954 19.8万/16.1万/11.1万・1978 Precision Bass 15.7万/12.8万/8.8万。イシバシ（ヘッドレス Chrome）＝Player (2018-) 5.2万/4.7万/4.1万・Player II (2024-) 5.8万/5.3万/4.7万・Traditional II 60s (2020-) 5万/4.5万/4万・2025 Collection 7.5万/6.8万/6万・Am Pro II (2020-) 12万/11万/10万。Am Ultra II・Am Vintage II は「読み込み中」のまま描画されず＝「確認できず」と明記
- 訂正: 相場本文と FAQ（表示＋JSON-LD）「日本/メキシコ 2万〜6万・USA現行 5万〜12万・ヴィンテージ 15万〜100万以上」→ 掲示どおり 2.8万〜7.9万・7.9万〜19.8万、1950〜60年代のオリジナル個体は掲示なし＝個別査定。FAQ「ヴィンテージのプレベは高いですか？」・「費用」・ティファナ行（注記 A/B 判断待ち）は不変。description 変更（157字）・title 不変・dateModified/更新日 11/12
- 競合: WebSearch は米国経由で日本の SERP は取れず（ウリドキ＝ベース全体の平均・aucfan＝落札価格で、型番別の掲示買取価格は無し）
- 候補2（/tmp/g1112 の last=-）: fragment 付き（martin・shibuya・kobe・yokohama）は本体が 11/3 以降に変更あり、fukuoka（11/14）・tokyo（11/6）・recorder（掲示なし）は対象外＝追加なし
- felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338 前後一致（ページ別 16→16）。precheck 全項目OK。可視テキスト＋JSON-LD が変わったのは1本のみ。sitemap lastmod は当該ページのみ。Indexing 未送信

### 2026-11-13 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/13 に更新／ミーナ天神は修理受付停止継続（src 2963c66a・667252e2 / deploy f39fceaf2・06b2f2f02）
- ティファナ 11/13: https://www.tifana.net/shipping/ の表示（コメント除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503（GET のみ）。トップの表示に一時停止・再開の文言なし。再開時期の記載なし。→ 注記の日付を 11/12 → 11/13（332 ファイル＋生成器 CHECKED・1,098 か所。うち JSON-LD の \u 表記 232 か所）。置換は 11/8 と同じ4型＋\u 型のみ（日付を正規化した diff が一致＝日付以外の差分 0）。fender-precisionbass の 11/12 掲示日は不変。sitemap lastmod 231 URL 更新
- ⚠️ deploy で `git add -u` を使ったため新しい buildId の `_next/static/<id>/`（manifest 3ファイル）が入らず旧 id の3ファイルだけ削除された → 06b2f2f02 で追加。HTML から buildId manifest への参照は 0 件で表示影響なし。.txt（RSC）は従来どおりコミットしない
- クロサワ ミーナ天神店 11/13（/sh_fuk/）: 「修理受付一時停止のお知らせ」継続（受付再開は決まり次第案内）。リペア工房併設・11:00〜20:00・天神駅徒歩3分も掲載＝fukuoka の3か所は不変
- 点検 C3 /author/: 11/8〜11/12 と同じ否定文・運営説明（「個人の執筆者や経歴ではなく…」「掲載していないもの：執筆者・監修者の個人名、肩書、経歴、顔写真」）。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338（out）前後一致、ソース t.felmat 1140 前後一致。precheck 全項目OK。Indexing 未送信（日付のみ）

### 2026-11-13 12:00 成長ルーチン：横浜・神戸・川崎の冒頭に持ち込み早見表／mixer・sonor の冒頭に島村の掲示買取価格／takaku に高く売る方法の公式根拠（src d0fe3299 / deploy 9ffeeaaea）
- git log --since=11/3: yokohama・kobe・kawasaki は 16e773a8（11/3）以降は日付注記と 099497cf（11/7 ウリエル「全域」訂正＝誤記訂正）のみ。takaku は日付注記のみ、mixer・sonor は変更なし。title は6本とも不変・description 変更
- 早見表 #mochikomi（公式 11/13）: 横浜＝イシバシ横浜（12〜20時・予約なし可・その場で現金/50万以上振込）・クロサワ横浜（/sh_hama/・モアーズ4F・11〜20時・支払い方法は記載なし）・島村横浜ビブレ（振込のみ・スムーズ13〜18時）・楽器の買取屋さん横浜店（10〜19時・まず電話・その場で現金）。神戸＝Qsic 神戸本店（さんプラザ3F・水曜定休。qsic.jp は EUC-JP）・島村三宮オーパ（スムーズ13〜20時）・島村イオンモール神戸北・ハードオフ神戸玉津（p=201165 は玉津店。本文の「灘店は2025/12新規」のリンク先とは別）。川崎＝島村川崎ルフロン・ウリエル川崎（/shops/kawasaki/・JR川崎徒歩約5分）・ハードオフ小田栄・楽器の買取屋さん横浜店
- 訂正: yokohama FAQ「クロサワ…店頭買取なら即日現金化」（表示＋JSON-LD）とまとめ → 店ごとの支払い方法。kawasaki ウリエル川崎「予約不要」→ 公式 /shop/「店頭・持込は事前にお電話にてご予約」「事前のご予約が必須」（/shops/kawasaki/ の「ご予約不要」は催事買取の項）。ハードオフ小田栄「出張は非対応」→ 店舗ページに「実施なし」と「行っております」の両方
- 🔍 楽器の買取屋さん /kaitori/shop/ は 11/13 も 200（横浜店・厚木店〈事前予約制〉ほか掲載）→ KaitoriyasanInfo の店頭行（「表示されない」）を公式の流れ（電話→その場で査定→現金、身分証コピー・住民票の写し）に更新・ASOF 11/13。店舗数の表記は判断待ちのため触っていない
- mixer: 島村 `search.html?model=DJM`・`model=Xone` の DJ ミキサー 17 型番（DJM-V10 A¥242,000 ほか）。本文「Pioneer DJ DJM は2万〜十数万円以上」→ 掲示 ¥4,000（DJM-250 C）〜¥248,000（DJM-V10-LF A）。PA 卓の掲示は未確認
- sonor: 島村の Sonor はスネアのみ（SQ2-1406SD EHI PA A¥89,000・SQ1 系 5万〜5.8万・D515・HLD588・AQ2・SEF11 の 15 型番）。model=SONOR は Fender Sonoran に当たるので型番（SQ1/AQ2/D515/HLD/SEF）で検索すること。セットの掲示なし
- takaku-uru-kotsu: 冒頭 #answer（島村 A/B/C の差の例・持ち込み5%/下取10%UP、クロサワ /kaikuro/ 付属品欠品は減額、イシバシ現金/島村振込）
- 🔍 未変更: sonor の「人気モデル別買取相場」Vintage（HLD590等）15万〜50万は HLD588 スネアの掲示 A¥52,000 と大きく食い違う（HLD590 の掲示なし＝未訂正）・SQ2/SQ1 30万〜80万等のセット相場は未照合。takaku の各コツ見出し「効果: 5〜20%アップ」等は出典なし。mixer FAQ「掲載3社はすべて無料」はティファナ注記 A/B 判断待ちと一緒。kobe 本文のハードオフ「灘店は2025/12新規」は未照合
- WebSearch（米国経由）: uridoki「横浜でおすすめの楽器買取店」は★評価つきの列挙、hikakaku は楽器の買取屋さんの住所欄が別拠点。公式の住所・営業時間・支払い方法を出典つきで1表にしたものは見当たらず
- felmat fmcl 2910・fmimp 3340・fmimg 88・t.felmat 6338 前後一致（ページ別も一致）。precheck 全項目OK。可視テキスト＋JSON-LD が変わったのは6本のみ。sitemap lastmod は mixer・sonor のみ変化（他4本は朝の注記で当日）。deploy は .txt を rsync 対象外にし、新 buildId の _next/static も含めて明示 add。本番 12:13 反映（新表記あり・旧表記0）。Indexing 未送信

### 2026-11-14 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/14 に更新（src 41b645af・63c012a2 / deploy 290388404）
- ティファナ 11/14: https://www.tifana.net/shipping/ の表示（コメント・script 除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503（GET のみ）。トップの表示に一時停止・再開の文言なし。再開時期の記載なし。→ 注記の日付を 11/13 → 11/14（332 ファイル＋生成器 CHECKED・1,098 か所。うち JSON-LD の \u 表記を含む）。置換は 11/8 と同じ4型＋\u 型＋chiba FAQ の「時点で公式サイトのお知らせにより一時停止中」型のみ（日付を正規化した diff が一致＝日付以外の差分 0）。11/13 の他の確認日（yokohama・kobe・kawasaki・mixer・sonor・takaku の掲示日・更新日）は不変。sitemap lastmod 231 URL 更新
- deploy は rsync で `*.txt` を除外し `git add -A -- . ':(exclude)*.txt'`（新 buildId の manifest も含めて1コミット。手元の未追跡 RSC .txt 4,550 本は触らず）
- 点検 C6 kabi-gakki-kaitori「楽器別・カビの影響範囲」★★★★★（極大）等＝根拠なし★表3ページ（hikkoshi・kabi・gakki-shobun-houhou）の既定案どおり 11/15 に A 文言へ置換予定（今日は未変更）
- 点検 C3 /author/: 11/8〜11/13 と同じ否定文・運営説明。Person 0。誤検知（未変更）
- felmat fmcl 2910・fmimp 3340（out）前後一致。precheck 全項目OK。Indexing 未送信（日付のみ）

### 2026-11-14 12:00 成長ルーチン：fukuoka の冒頭に博多・天神の持ち込み早見表／クロサワ ミーナ天神の修理受付は 11/16 再開の告知に更新（src 9c2c53cc / deploy c21c43abf）
- git log --since=11/5: fukuoka はティファナ注記の日付一括のみ（11/4 99f42208 から10日）。title 不変・description 変更（113字）・更新日/dateModified 11/14
- 早見表 #mochikomi（公式 11/14・「楽器 買取 博多」10@9.2）: 島村アミュプラザ博多（博多駅中央街1-1 アミュプラザ7F・中央改札 徒歩2分・10〜20時・持ち込み5%UP・振込のみ／10万以上1週間・電子ピアノ/ピアノ/防音室は出張・ドラムセット一式は筑紫野など指定店のみ）・イシバシ福岡（パルコ8F・天神駅直結・10〜20:30・予約なし可・店頭は即日現金／高額は最短2営業日振込か現金書留＝/ec/sp/kaitori-flow/）・クロサワ ミーナ天神（天神4-3-8 8F・徒歩3分・11〜20時・買取/委託販売・支払い記載なし）・中古楽器堂 福岡博多（美野島2-27-13・平尾 徒歩約7分・出張 毎日9〜20:30・店頭完全予約・振込）・高く売れるドットコム福岡RC（南区清水2-2-18・高宮 徒歩14分・店頭10:30〜18:30・現金または振込）
- 🚨 クロサワ ミーナ天神 /sh_fuk/ 11/14（コメント外の表示）: 「【リペア（修理）受付再開のお知らせ】一時停止しておりましたリペア（修理）の新規受付を11月16日（月）より再開」→ 本文3か所（天神エリア・店舗ガイド・コツ3）の「一時停止中」を「11月16日（月）から再開と公式が案内（11/14 確認）」に。11/16 以降の朝ルーチンで「再開済み」の表記に直す候補
- 載せていない: 楽器王（福岡楽器買取センター）＝公式ページが見つからない（10/27 と同じ）。楽器の買取屋さんは店舗数表記・ティファナ注記 A/B 判断待ちのため触らず
- WebSearch（米国経由）: 「楽器 買取 博多」は島村アミュプラザ博多の公式ページと買取大吉のブログ（2023年）が上位。持ち込み店の住所・時間・支払いを1表にしたものは見当たらず
- felmat fmcl 2910・fmimp 3340・t.felmat 6338（out html）前後一致、ソース t.felmat 1131 前後一致。precheck 全項目OK。deploy は rsync で *.txt 除外、`git add -u`＋新 buildId の _next/static を明示 add。本番 12:22 反映（#mochikomi 1・「11月16日（月）」あり・旧「一時停止中」0・fmcl 18＝deploy と一致）。Indexing 未送信

### 2026-11-14 20:00 kwexp（競合ベンチマーク型の作成・初日）：新規5本（src 55c9359b / deploy 02c7af019）
- queue（11/14 13:09 棚卸し）の上から5本。「高く売れるドットコム 評判」は hold（MediaXAI 回答待ち）で作らない。重複は own-pages・GSC 90日・app/ で確認（「管楽器 買取」は saxophone に1imp のみ・専用ハブなし→作成）
- `/articles/electone-shobun/`（エレクトーン 処分・1040）: 電子オルガンの粗大ごみ手数料を4市の公式で比較（名古屋 2,500円〈9/30更新・ピアノは排出禁止物〉／相模原 2,400円〈重量制限あり〉／京都 2,000円〈R7.4.1告示〉／広島 1,250円）。山野楽器は鍵盤楽器不可・イケベは古い電子楽器/PSE なしは不可の場合あり。買取相場の金額は書いていない
- `/articles/yamano-gakki-kaitori/`（山野楽器 買取・384）: 公式「中古買い取り」＝店頭のみ9店舗・ギター系のみ（管楽器・弦楽器・デジタル・鍵盤は不可と明記）・振込1週〜10日（1万円未満は現金）・古物 第301069602133号
- `/articles/yamaha-piano-seizou-bangou/`（ヤマハピアノ 製造番号・208）: 位置＝ヤマハ取扱説明書 PDF（アップライト屋根内／グランド譜面台の下、製造時期は特約楽器店へ）。年表＝米国ヤマハ「Finding the Age of Your Yamaha Piano」の浜松製 1950〜2021 を転記。⚠️国内の掛川年表 PDF（jp.yamaha.com/files/…/kakegawa_serial_history2025.pdf）は curl 404・WebFetch 403 で取れず＝数字は載せていない（jp.yamaha.com の files/ は全般に取得不可）
- `/articles/kangakki-kaitori/`（管楽器 買取・208・instrument）: yahoo-medians の管楽器8型番（週次で自動更新・insufficient は非表示）＋イケベリユース掲示の通常買取価格4型番を並べた表（「N型番のうちM型番で下回る」は動的計算）＋買う店/買わない店（ウリエル・イケベ＝可／山野＝不可）。以前の 404 だった kangakki-kaitori の URL を実ページ化
- `/articles/ikebe-gakki-kaitori/`（イケベ楽器 買取・208）: 公式「買取方法」＝店頭/宅配/出張（方式で査定額差なし）・預かり代行販売 手数料20%・最長3か月・出張エリア・リユース4店・掲示価格6例（掲示日つき）
- 口コミ・★・人物なし。ASP 計測リンクは本文に足していない（RelatedArticles 内の RecommendedServices のみ＝新規5本×fmcl4/fmimp4、既存ページの felmat はページ別に前後一致）
- 導線: relatedSlugs に追加（electone-kaitori・denshi-piano → 処分／u1・u3・c3・piano → 製造番号／sax・trumpet・flute・clarinet・trombone → 管楽器／guitar・effector・trumpet → 山野・イケベ）。gen-related-groups.py 再実行（⚠️川口が 11/6 に description から県名が消えてピアノ群に入っていた→PREF_FIX に埼玉県を追加。多摩は noindex 解除分が東京都群に入った。electone-kaitori は新設の「鍵盤楽器」群へ）。kangakki 群は2本（警告のみ）
- sitemap 454→459（変更 lastmod は新規5＋relatedSlugs を足した9本）。precheck 全項目OK（575ページ）・trust-audit check_page で新規5本の指摘0。Indexing は親がまとめて送る

### 2026-11-15 朝ルーチン：★表3ページ20行を事実の記述に置換（既定案A）／ティファナ宅配は停止継続で確認日を 11/15 に更新（src 7280d39a・ac760020・97b6c549 / deploy 28320b169）
- ★表（既定案A・MediaXAI 回答なし）: hikkoshi-gakki-shobun（5行）・gakki-shobun-houhou（10行）の「手間」★ → 列名「自分で行う主な作業」＋手順の記述（粗大ごみ＝中央区「粗大ごみの出し方」の申込み→処理券→収集日に排出、不用品回収・廃品回収車＝環境省Q&A の一般廃棄物処理業の許可・委託／無許可業者の高額請求事例、フリマ＝メルカリガイド「商品が売れたら」の梱包・発送・評価。いずれも 11/15 確認）。表の直下に出典注記。kabi-gakki-kaitori（5行）は ★の評価列（極大〜少）を外し、既存の説明列を「カビへの注意点」に統合（新しい事実は足していない）。generate-phase1-situations.py・generate-phase3-faq.py も同値。★ 45個→0（ページ）・生成器 ★ 0。粗大ゴミの★がページ間で ★/★★ と食い違っていた＝基準なしの裏づけ
- 🔍 未変更: kabi の備考「木材への侵食が音色に深刻な影響」等・hikkoshi/shobun の費用・所要時間（「3,000〜10,000円」「1〜2週間」等）は出典なし。サイト全体の ★ は 0
- ティファナ 11/15: https://www.tifana.net/shipping/ の表示（コメント・script 除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503。トップの表示に一時停止・再開の文言なし。再開時期の記載なし。→ 注記の日付 11/14 → 11/15（333 ファイル＝生成器 CHECKED 含む・1,098 か所。日付を正規化した diff が一致＝日付以外の差分 0）。fukuoka の 11/14 確認日（ミーナ天神・早見表）と kwexp 新規の 11/14 確認日は不変
- felmat fmcl 2930・fmimp 3360・fmimg 88・t.felmat 6378（out html＝deploy 前と一致）、ソース t.felmat 1140 前後一致。precheck 全項目OK。deploy は rsync で *.txt 除外・`git add -A -- . ':(exclude)*.txt'`
- 点検 C3 /author/: 11/8〜11/14 と同じ否定文・運営説明。Person 0。誤検知（未変更）

### 2026-11-15 12:00 成長ルーチン：martin に表記ゆれ＋D-28 中古相場（ヤフオク落札）／渋谷に楽器の買取屋さんの出張エリア・受付方法（src 5b6c5271 / deploy 6b21430c2）
- git log --since=11/6: 3本とも 11/5（31cfae67）以降はティファナ注記の日付一括と 11/7 ウリエル訂正のみ。title は 11/8 以降変更なし
- martin: 島村（brand=112 の search.html）・イシバシ（reuse.ishibashi.co.jp、ヘッドレス Chrome --dump-dom・`timeout` コマンドは無いので sleep→kill）で D-28/HD-28/000-28/D-45 Standard を 11/15 再照合＝11/5 と全て同値→確認日を 11/15（表・FAQ 表示＋JSON-LD）。title/description に「マーティン/マーチン」。#kakaku に h3 #chuko-souba「D-28 の中古相場（ヤフオクの落札価格）」= fetch-yahoo-medians-gakki.py の median_for_query をその場で呼んだ値（データファイルには書いていない）: 「Martin D-28 Standard」中央値 254,101（約25.4万・19件・205,700〜320,000）、「Martin D-28 アコースティックギター」221,107（約22.1万・87件・125,400〜318,000）。martin は TITLE_RULES 対象外＝タイトル除外なしと注記。FAQ に「D-28 の中古相場」1問
- 🔍 島村の D-28 Standard A ¥264,000 は落札中央値（約25.4万）を上回る＝ModelSpotPriceCard の「買取は中古相場の50〜70%」注記と食い違う（カードは martin ハブには入れていない・注記は未変更）
- shibuya: 早見表4店（イシバシ・クロサワ G-CLUB・イケシブリユース・中古楽器堂）を公式 11/15 で照合＝差なし→確認日 11/15。表の下に「楽器の買取屋さん」1段落（公式 /area/tokyo/ = 東京都全域が出張対象・電話24時間/フォーム/LINE・出張はその場で現金手渡し、/kaitori/shop/ の都内店 上野・池袋・板橋 10〜19時）。店舗数は書いていない（判断待ち）
- shinjuku: 早見表5店を公式 11/15 で照合＝差なし（ハードオフ新宿マルイメンは引き続き「出張買取 実施なし」と「行っております」の併記）→未変更
- WebSearch（米国経由だが日本語の結果あり）: 「martin 買取」上位は otakaraya（D-28 は「ASK」で金額なし）・hikakaku（金額なし）。「楽器買取 持ち込み 新宿」は島村公式・hikakaku・aucfan。「ギター 買取 渋谷」は aucfan・oikura・my-best・uridoki の比較記事で、楽器の買取屋さんの渋谷の店舗有無を答えたものなし
- felmat fmcl 2930・fmimp 3360・fmimg 88・t.felmat 6378（out html）、ソース t.felmat 1140 前後一致。precheck 全項目OK（575ページ）。可視テキスト＋JSON-LD が変わったのは2本のみ。sitemap lastmod は martin のみ変化。deploy は rsync で *.txt 除外・`git add -u`＋新 buildId の _next/static を明示 add。Indexing 未送信

### 2026-11-15 20:00 kwexp（競合ベンチマーク型の作成・2日目）：新規5本（src ba4a5087・494f0a35 / deploy 006beb22a）
- queue の status 空欄の上から5本（クラビノーバ・和楽器・ピアノの買取屋さん・オルガン・Qsic）。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（和楽器は琴/三味線/尺八/和太鼓の個別ページのみ・総合なし、クラビノーバは denshi-piano 内の表のみ）
- `/articles/yamaha-clavinova-kaitori/`（208）: ヤフオク落札「クラビノーバ」200件（11/15 取得・4ページ・取得は fetch-yahoo-medians-gakki.py の fetch/extract_listings を流用、データファイルには書いていない）からタイトルで型番を読み、フロッピー・楽譜・椅子のみ・部品・ジャンク・新品を除外した126件を世代別に集計（iqr_filter）。中央値 CLP-700番台 98,000（n13）・600番台 68,700（n20）・500番台 53,000（n21）・400番台 39,800（n8）・100〜300番台 18,425（n28）・旧CVP 9,800（n17）。島村楽器 /used/gakki/digital-piano/ の「製造から8年以上経過しているもの」対象外・年単位区分・1週間後振込。⚠️ 島村の買取価格検索は CLP/CVP/CSP/SCLP とも0件、イシバシは CLP-845 0件・CLP-745 は描画されず＝掲示買取価格は載せていない。⚠️ CLP-5xx/7xx/8xx は1990年代の旧型（560・760・840 等）と番号が重なるので末尾5（535・745 等）で現行世代を判定
- `/articles/wagakki-kaitori/`（168）: 5社の対応（ウリエル /instrument/「和楽器（三味線、琴など）」・ティファナ /music/・楽器の買取屋さん＝買う／島村 /used/「買取取り扱いのない楽器」に和楽器・イシバシ /kaitori/「買取の難しい楽器」に和琴/大正琴）＋楽器の買取屋さんの和楽器買取事例7件（2017〜2019・3万〜201,960円）
- `/articles/piano-no-kaitoriyasan/`（168）: 公式 piano-kaitoriyasan.com（/lp/・フッター）。**運営 UNISOUND株式会社・古物 神奈川県公安委員会 第451310006356号＝楽器の買取屋さんと同じ**。ピアノは出張のみ・出張エリア33都府県（「全国」表記だが北海道・東北・新潟・山陰・山口・宮崎・鹿児島・沖縄なし）・搬出基本無料（特殊作業料金・メーカー等で費用発生あり・金額記載なし）・搬出日に現金。口コミなし。⚠️ 最初 title に「評判を調べる前に」と入れたら trust-audit C5（title が評判なのに口コミなし）→ title/h1 を「ピアノの買取屋さんとは？」に変更
- `/articles/organ-kaitori/`（136）: 島村（オルガン取扱いなし・エレクトーンは ELB-02/ELC-02/ELS-02系/03系のみ）・イシバシ店頭「お取り扱いできない物」にオルガン・ウリエル/ティファナは記載なし＋楽器の買取屋さんのオルガン事例8件（2.7万〜27万・ハモンド5件）＋粗大ごみ（名古屋 オルガン1,500/電子2,500・相模原 1,600/2,400・文京区 2,300）
- `/articles/qsic-kaitori/`（88）: Qsic の買取サイトは qsic.jp ではなく **gakkikaitori.com（株式会社LUXTIS・古物 兵庫県公安委員会 第631160700008号）＝楽器の買取屋さん（gakkikaitori.co.jp）とは別会社**。宅配（着払い・送料無料枠は最終査定額で決まる表）・店頭4店・出張（2026年11月に関東4都県追加・関東はその場払い/関西は振込）・下取り最大10%（qsic.jp ?mode=f6）
- 導線: relatedSlugs に追加（denshi-piano・yamaha → クラビノーバ／三味線・琴・尺八・和太鼓 → 和楽器／piano・grand-piano・gakki-no-kaitoriyasan → ピアノの買取屋さん／electone・electone-shobun → オルガン／kobe・ikebe → Qsic）。⚠️ 先頭に入れると gen-related-groups.py の親（最初の楽器カテゴリ記事）が変わる＝yamaha-kaitori がクラビノーバ群へ、electone-shobun がオルガン群へ移り keyboard-kaitori がどの群からも外れた → yamaha・denshi-piano・electone・electone-shobun は2番目に入れ、organ の relatedSlugs 先頭を piano-kaitori にして既存群を維持（変化は koto 群→wagakki 群・howto/piano 群への追加のみ）
- sitemap 459→464。precheck 全項目OK（580ページ）・trust-audit check_page 新規5本の指摘0。t.felmat は既存ページのページ別件数が前後一致（新規5本は RecommendedServices の分のみ）。Indexing は親がまとめて送る

### 2026-11-16 朝ルーチン：週次ヤフオク（全文ログ＋再試行の初回）は1回目のビルドで成功／ティファナ宅配は停止継続で確認日を 11/16 に更新（src 8fcb7bf4・eda94b1f / deploy 345270d66）
- 週次 04:00: ~/Library/Logs/gakki-weekly/20261116-040004.log（704行）＋ -build-1.log のみ（build-2 なし＝再試行は発動せず）。48/62 モデル信頼値・souba-ranking/index/widget 11-16・sitemap 464・scaled-content-lint 違反 0/571・deploy 7e0f4c351・src 6e3caae1・04:05:08 完了（304s）。ログに error/failed なし。本番 /souba-ranking/ に 2026-11-16 ×4・widget.js「2026-11-16更新」
- ティファナ 11/16: https://www.tifana.net/shipping/ の表示（コメント・script 除外）に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503。トップの表示に一時停止・再開の文言なし。再開時期の記載なし。→ 注記の日付 11/15 → 11/16（333 ファイル＝生成器 CHECKED・components/RecommendedServices.tsx 含む・1,098 か所。日付を正規化した −/＋ 行が一致＝日付以外の差分 0）。piano-no-kaitoriyasan の「2026年11月15日時点の公式サイトには…」（kwexp の確認日）は不変
- felmat fmcl 2950・fmimp 3380・fmimg 88・t.felmat 6418（out html＝deploy 前と一致）、ソース t.felmat 1140 前後一致。precheck 全項目OK（580ページ）。本番 osusume/fukuoka/chiba/akita/トップで 11/16 注記あり・11/15 注記 0
- 点検 C3 /author/: 11/8〜11/15 と同じ否定文・運営説明。Person 0。誤検知（未変更）

### 2026-11-16 12:00 成長ルーチン：fukuoka のミーナ天神 修理受付を再開済みに／RX-2 の title に KAWAI（カワイ）・年式別の買取実績（src 73e61b39 / deploy d0470479d）
- git log --since=11/7: 2本ともティファナ注記の日付一括のみ（fukuoka は 11/14 の個別変更あり・未クロール＝下記の訂正以外は足さない）。RX-2 の title は 11/6 以降変更なし
- fukuoka: クロサワ ミーナ天神 /sh_fuk/ 11/16（コメント・script 除外の表示）に「一時停止しておりましたリペア（修理）の新規受付を11月16日（月）より再開いたします」が掲載、延期の告知なし → 本文3か所を「公式のお知らせどおり11月16日（月）に再開しています（2026年11月16日確認）」に。「11月16日（月）から再開」0件
- kawai-rx2: 公式掲示を 11/16 再照合＝ピアノワン参考表 RX-2 ¥500,000〜650,000（参考表 2026年7月7日更新・ページ更新日 2026.11.08）・未来ピアノガーデン RX2 2006年製 ¥670,000（ページは「2026年11月更新」）・島村 SCHECTER RX-2-24-CTM A229,000/B177,000/C106,000 すべて一致 → 確認日 11/16。表にピアノワン実績 RX2MR 1996年製 ¥530,000（/saitama/buying1996rx2mr/・川口市・買取日 2025/9/20）・RX2AF 1999年製 ¥550,000（/item/grandpiano/）を追加。カワイ公式 FAQ「製番から年式が知りたい」（大屋根→譜面台を外したフレームに型番・製番、年式は直営店/問い合わせ）。title/h1「KAWAI（カワイ）RX-2の買取価格｜掲示50万〜65万円・年式別の買取実績【2026年11月】」、description 119字。FAQ「古いRXでも値段がつきますか？」の出典なし「はい…海外需要もあります」→ 実績1例＋カワイ公式の廃棄注意に（表示＋JSON-LD）
- 載せていない: 未来ピアノガーデンの RX2 1995年製 船橋 ¥620,000・RX2A-CLE 2002年製 横浜 ¥660,000 は検索スニペットに出たが今日の公式ページで確認できず。pianosouba は販売価格からの推定のため不使用
- WebSearch（米国経由）: 「rx-2 買取」はカメラ・マツダ車の結果のみ、「カワイ rx-2 買取 相場」は米国の販売店のみ＝日本の上位は取れず。ドメイン指定で piano1・miraipiano・pianosouba の年式別ページ（RX2A/RX2G/RX2MR 等）を確認＝当ページに無かったのが年式別の実績と製番の場所
- felmat fmcl 2950・fmimp 3380・t.felmat 6418（out html）前後一致、ソース t.felmat 1132 前後一致。precheck 全項目OK。可視テキスト＋JSON-LD が変わったのは2本のみ。sitemap は変化なし（2本とも朝の注記で 11/16）。deploy は rsync で *.txt 除外・`git add -u`＋新 buildId の _next/static を明示 add。Indexing 未送信（親）

### 2026-11-16 20:00 kwexp（競合ベンチマーク型の作成・3日目）：新規5本（src 1c9db877・b9d4ce47 / deploy 88120480d）
- queue の status 空欄の上から5本（ハードオフ・大正琴・埼玉・群馬・島村）。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（ハードオフ・島村の専用ページなし、大正琴は koto/wagakki のみ、埼玉・群馬は市ページのみで県ハブなし）
- `/articles/hardoff-gakki-kaitori/`（56）: 公式 /sell/・all-items（楽器は店頭・オファー・出張・宅配すべて○）・店頭（予約不要・10〜15分・現金）・出張（電話・現金/振込）・宅配（takuhai-kaitori＝ケースなし本体・ライセンス解除要は不可、送料0、自動承諾はキャンセル不可、入金2〜4営業日）。**店舗検索 t1=on 全15ページ 440件を集計＝出張買取受付○ 229**（閉店済み2・一時閉店中2を含む）、都道府県上位10表（埼玉48/19が最多・新潟19/17・大阪21/6・熊本/宮崎は○0）。楽器館 t12=on 3店。古物表示は許可番号39件
- `/articles/taishogoto-kaitori/`（56）: ヤフオク落札「大正琴」新しい順200件（fetch-yahoo-medians-gakki.py の fetch/extract_listings/iqr_filter 流用・データファイルには書いていない）→ 調律器・楽譜・CD・アンプ・弦・ケース単体・まとめ売りをタイトルで除外し140件。IQR 132件 中央値1,555・1円18件・≤1000円51件・≥1万14件。機種別：あゆ TES-151 21,600(n4)・こはく 9,900(n14)・ライリッシュ 8,300(n8)・ヤマハ 4,990・全音 4,190・カワイ 2,000・蘭 1,540(n18)・琴伝流 640(n15)。鈴木楽器公式の税込価格（こはくソプラノ104,500・アルト/バス121,000・特松60,500・あすなろ38,500・桂82,500）。買う/買わない：島村✕（明記）・イシバシ難しい・ハードオフ宅配は和楽器記載・ティファナは和楽器（大正琴の明記なし）・**ウリエルは /instrument/ の取引傾向に「大正琴」を明記**
- `/articles/saitama-ken-gakki-kaitori/`（56・region）: ハードオフ埼玉48店を市町村32別に集計（出張○19・草加西店は川口市峯・AUDIODIGITAL館1を含む）＋楽器館狭山。島村 /shop/ の services の class="off" で「買取受付」判定＝埼玉13店中12（ピアノセレクションセンター×）。楽器の買取屋さん 大宮店・/area/saitama/ 県全域出張・事例12件。ティファナ3店（/visit/ メニュー）・イケベ南東部
- `/articles/gunma-gakki-kaitori/`（40・region）: ハードオフ9店（○7）・島村3店（高崎・前橋・太田）・楽器の買取屋さん群馬桐生店（事前予約制）・/area/gunma/ 県全域・事例12件（うち9件は3社の店舗がない市）。イケベ・ティファナは群馬対象外
- `/articles/shimamura-gakki-kaitori/`（40）: /used/ と flow 4ページ。支払いは振込のみ・店舗5%UP/下取10%/自社購入5%・出張条件（複数各2万/単品3万以上・指定業者が引取）・宅配（単品5千円以上）・委託（26店・10万円以上・手数料20%/15%・3か月）・対象外楽器・出張エリア・古物 第307779503948号。店舗一覧184店中「買取受付」166（当サイト集計・総数表示186）。⚠️ title/h1 に「評判」を入れない（C5）
- 導線: relatedSlugs の末尾に追加（ikebe・yamano → ハードオフ/島村、sonor・mixer → 島村、wagakki・koto → 大正琴、omiya・kawaguchi → 埼玉）。gen-related-groups.py 再実行：⚠️ 島村の relatedSlugs に taishogoto/wagakki（instrument）を入れたら島村が inst:taishogoto 群に入った → 外して cat:howto に。最終の変化は新規5本の追加のみ（埼玉・群馬は pref 群、大正琴は inst:wagakki 群）
- sitemap 464→469。precheck 全項目OK（585ページ）・trust-audit check_page 新規5本の指摘0。t.felmat 既存ページのページ別件数は前後一致（新規5本×8＝RecommendedServices 分のみ）。本番 20:18 に5本とも200・h1 確認。Indexing は親がまとめて送る

### 2026-11-17 朝ルーチン（15時台のやり直し）：ヒカカク口コミを公式で再照合＝掲載数・ピアノ最低実績を更新／ティファナ宅配は停止継続で確認日を 11/17 に更新（src 569953fa・d8732774・15068352 / deploy 8f58ac3dd）
- 07:00 点検「データが10日より古い」= /articles/hikakaku-gakki-kaitori-kuchikomi/（数値は 10/8 確認のまま＝正しい指摘）。公式 11/17 の生HTML（コメント・script 除外）：クチコミ 総合3.4・星5 425/4 200/3 106/2 86/1 266・比率32.5%＝不変。楽器 39,236点・1,117社 → **39,480点・1,125社**（実績 最低1円〜最高1,700,000円は不変）。ピアノ 854点・616社 → **858点・616社**、実績 最低100円 → **最低1,000円**（最高1,000,000円は不変）。lp（最大20社・最短1日・月間300万人以上・最大3つ）・FAQ・利用規約（最終改定2024年10月1日・第6条 原則無料）・運営者情報・古物表記（平尾 丈・虎ノ門3-4-8）は不変。確認日・UPDATED を 11/17、title は不変（C5 判断待ち）。運営者氏名は /pages/company/ ではなく /pages/kobutsu_hyoki/ に記載
- ティファナ 11/17: https://www.tifana.net/shipping/ の表示に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」。online.tifana.net は 503。トップに一時停止・再開の文言なし。→ 注記の日付 11/16 → 11/17（333 ファイル・1,098 か所。日付を正規化した −/＋ 行が一致＝日付以外の差分 0）
- felmat fmcl 2970・fmimp 3400・fmimg 88・t.felmat 6458（out html＝deploy 前と一致・ページ別も一致）、ソース t.felmat 1140 前後一致。precheck 全項目OK（585ページ）。sitemap lastmod 232 URL。CF 反映は push 15:10 → 15:39（約30分）
- 点検 C3 /author/: 11/8〜11/16 と同じ否定文・運営説明。Person 0。誤検知（未変更）

### 2026-11-17 20:00 kwexp（競合ベンチマーク型の作成・4日目）：新規5本（src cc51daeb / deploy 74cbe086e）
- queue の status 空欄の上から5本（クロサワ・中古楽器堂・三木・マリンバ・楽器ケース）。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（3社とも専用ページなし・中古楽器堂は渋谷/福岡等の店舗表のみ、マリンバは島村の対象外リストのみ、楽器ケースは gakki-fuzokuhin＝楽器とセットの付属品の話で「ケース単体を売る」意図は未カバー）
- `/articles/kurosawa-gakki-kaitori/`（40）: KAIKURO 公式（/kaikuro/ store・takuhai・syuchou・kiyaku）。店頭は現金（高額は後日振込）・宅配は住民票原本必須・送料着払い・振込/現金書留・不成立の返送料は利用者・出張16都府県。**店頭買取ページの19店×「買取お取扱い楽器種別」を表にして種別ごとの店舗数を集計**（エレキ10・アコギ10・管5・弦7・デジタル5・ピアノ/キーボード4・ドラム2）。対象外＝アコピ・エレクトーン・オルガン・DTMソフト。古物 第305509505081号。株式会社黒澤楽器店（/company/）。title/h1 に「評判」なし（C5）
- `/articles/chuko-gakkido-kaitori/`（40）: 運営 株式会社リサイクルマイスター（古物 第305590806398号）。売却方法3つ（出張/店舗＝その場現金、宅配＝3営業日以内振込・送料無料・マイナンバーカード不可）。**店舗一覧41店の店舗ページを1店ずつ取得（2秒間隔）→店頭買取時間 要予約8店／時間掲載33店、電話24時間・出張9:00〜20:30は41店共通**。福岡博多店は一覧外の出張専門（店頭予約制・振込）
- `/articles/miki-gakki-kaitori/`（40）: 窓口3つ（楽器＝mikigakki.com の受付10店〈大阪7・東京2・DZONE 所在地記載なし〉・ピアノ買取センター・防音室 MIKI MUSIC DESIGN+）。弦楽器は対象外。**ピアノ標準買取価格一覧305行を集計（〜無料13行・50万以上30行・昭和102行中35行が3万以下）＋抜粋14行**。ピアノ対象地域・下見3,300円・キャンセル無料。古物番号は公式で見つからず未掲載
- `/articles/marimba-kaitori/`（40・instrument→inst:drum 群）: **ヤフオク落札「マリンバ」上位200件→メーカー名ありの本体61件（中央値106,480・引取限定等41件・10万以上34/5万未満13・KOROGI 33件 中央値約13.6万/YAMAHA 14件 約7.5万）**。fetch-yahoo-medians-gakki.py の fetch/extract_listings 流用（データファイル不変）。売り先＝楽器の買取屋さん事例47件（中間110,000）・こおろぎ社（FAQ で買取は問い合わせフォーム）・三木（DrumCenter が受付店舗・マリンバ明記なし）・島村は対象外
- `/articles/gakki-case-kaitori/`（40）: **ヤフオク5検索（ギター/ベース ハードケース・SKB・BAM・Hiscox）からケース単体106件を選別**（ギター53 中央値10,000／ベース15 8,800／管26 約2.2万／弦12 約3.3万・ブランド偏りを明記）＋**イシバシ買取価格検索「ケース」117件中表示20件**（ヘッドレス Chrome --dump-dom・RITTER ギグバッグ 美品500〜2,000円等）。イシバシは買取対象に「ギター・ベース用ケース」「ドラム用ケース」明記、クロサワ/イシバシは付属品欠品で減額、島村は周辺アクセサリー対象外（ケース単体は明記なし）
- 導線: relatedSlugs 末尾に追加（shimamura → クロサワ/三木、ikebe・ochanomizu → クロサワ、hardoff・gakki-no-kaitoriyasan → 中古楽器堂、osaka・umeda → 三木、drum・cajon → マリンバ、fuzokuhin・takaku-uru-kotsu → ケース）。⚠️ howto の新規ページの relatedSlugs に instrument 記事を入れない（三木に piano-kaitori を入れかけた→inst:piano 群に入るので外した）。gen-related-groups.py の変化は新規5本の追加のみ
- sitemap 469→474。precheck 全項目OK（590ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 0。t.felmat 既存ページのページ別件数は前後一致（6458→6498＝新規5本×8）。deploy は rsync --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`。Indexing は親がまとめて送る

### 2026-11-18 朝ルーチン：07:00 点検「データが10日より古い」nagoya（10/20）＝コメ兵 愛知45店を公式で再集計（不変）・持ち込み早見表6店も再照合して確認日 11/18／ティファナ宅配は停止継続で確認日を 11/18 に更新（src ceeb3afe・41674570・db2113df / deploy c7f268e4d）
- 点検の拾った日付は本文のコメ兵「45店（2026年10月20日時点）」だけ（daily-site-check の DATE_RE は「時点/取得/現在」のみで「確認」は見ない）。komehyo.jp/kaitori/shop/ の Yext（experienceKey=shop-search・vertical=ロケーション・filters address.region=愛知県）を 11/18 に再取得：52件・【閉店】4件を除く48件・c_storeType に「買取」あり45件＝不変 → 「2026年11月18日時点」に。ギターフロア（10:30〜19:00・大須3-25-31 5F・店頭/宅配/出張・平成レトロ・社内リペア・毎月200〜300本）も komehyo.jp の店舗ページと /include_html/landing/komehyoguitar/ で一致
- 早見表6店を 11/18 に公式で再照合＝すべて一致（イシバシ栄 /kaitori/tentou/nagoya-sakae.html＋/kaitori/tentou/ の現金/振込・50万以上振込・対象外、クロサワ名古屋 /sh_nagoya/＋/kaikuro/store.html の種別、ロッキン /shopinfo/nagoya/＋/buy/、島村 パルコ・ギター&リペア・則武新町の /used/ と店舗トップのアクセス、生ドラム一式の受付店舗リストに則武新町なし）→ 「11月10日に確認」3か所＋FAQ（表示＋JSON-LD）を 11/18 に。dateModified/更新日 11/10 は不変（値の変更なし）
- 🔍 未変更・候補: ロッキン /buy/nagoya_guitar に「名古屋栄店へギターをお持ちいただければその場で現金買取」→ 早見表の支払い「店舗ページに記載なし」は現金に書ける。島村パルコ /used/ の店舗情報欄に「営業時間 11:00-20:00」が残る（同ページの受付時間・店舗トップは 10:00〜20:00＝表は 10:00 のまま）
- ティファナ 11/18: /shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに再開の文言なし → 注記 11/17 → 11/18（333 ファイル・1,098 か所。日付を正規化した −/＋ 行が一致）。hikakaku・kwexp 新規の 11/17 確認日は不変
- felmat fmcl 2990・fmimp 3420・t.felmat 6498（out＝deploy 前と一致・ページ別も一致）、ソース t.felmat 1140 前後一致。precheck 全項目OK（590ページ）。sitemap lastmod 231 URL。deploy は rsync --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`。CF 反映 push 09:35 → 09:58。点検 C3 /author/ は 11/8〜 と同じ否定文・Person 0＝誤検知（未変更）

### 2026-11-18 12:00 成長ルーチン：sagi に国民生活センターの訪問購入の最新件数／fender に Player II 3型番／bass AEGB24E のイシバシ掲示／岡崎に KOMEHYO東岡崎／藤枝のハードオフ支払い（src ad67787e・af5ed017 / deploy 761790f8f）
- git log --since=11/9: 5本ともティファナ注記の日付一括のみ（sagi は 11/8 be6b34e4 が最後）。crawl-2026-11-18.md のクロール待ちに5本とも無し。fender（c9）・bass（c4）・岡崎・藤枝の title は不変
- sagi: 国民生活センター「訪問購入」/soudan_topics/data/doorstep_purchase.html（2026/7/31 更新・11/18 確認）＝PIO-NET 2023年度 8,623・2024年度 7,909・2025年度 7,523（2026/5/31 現在・経由相談除く）で 2022年度 7,722 の文を置換、「不用品や和服の買い取りのはずが貴金属を買い取られた」相談をピアノ③にも出典つきで。楽器の買取屋さん公式（トップ・/news/）に偽サイトの注意喚起なし（最新 2026/7/16 メディア掲載）＝確認日を 11/18 に。sitemap lastmod は sagi のみ変化
- fender: 島村（curl）・イシバシ（Chrome --headless --dump-dom）で冒頭5行を 11/18 再照合＝全一致。現行 Player II（2024-）Strat/Tele/Jazz Bass を追加＝島村 Maple の Black/Polar White 等 ¥53,000/43,000/29,000（Mocha・Aged Cherry Burst 等は ¥61,000/49,000/34,000）、イシバシ Maple (2024-) ¥58,000/53,000/47,000
- bass: 5行再照合＝一致。イシバシ AEGB24E が今回は読めた＝¥20,000/18,000/16,000 を記入（11/7 は「確認できず」）。イシバシ AEB10E は「AEB10E」単独だと結果が出ず「Ibanez AEB10E」で出る
- okazaki: ハードオフ2店・島村の公式一致。KOMEHYO買取センター東岡崎（komehyo.jp/kaitori/shop/kc-higashiokazaki・明大寺本町1-34 岡崎センタービル1F・10:00〜19:00・「その他取扱いアイテム」にギター／ギター以外の楽器・現金か振込・査定/キャンセル無料・20歳未満不可）を早見表に追加。エコリング東岡崎（比較サイトでピアノ・楽器・PA）は eco-ring.com が 403 で公式未確認＝入れていない
- fujieda: ハードオフ藤枝・島村静岡パルコ一致。ハードオフの支払い「店舗ページに記載なし」→ /sell/tentou/ の「予約不要・その場で現金」に（岡崎と同じ書き方）。すみやグッディ・おりづるは今日も公式未確認
- WebSearch（米国経由）: 日本の結果は返るが順位は取れない。偽サイト＝minhyo・hikakaku の口コミページのみ、ピアノ詐欺＝国民生活センター・引越し侍（出典なし）、fender／アコベ＝高く売れるドットコムの実績ページ、岡崎＝ウリドキ一覧（エコリング・KOMEHYO）、藤枝＝大吉 静岡店のブログ
- 計測リンク fmcl 2990・fmimp 3420・fmimg 88・t.felmat 6498（out＝deploy・ページ別も一致）、ソース t.felmat 1132 前後一致。precheck 全項目OK（590ページ）・trust-audit check_page 5本 指摘0。可視テキストが変わったのは5本のみ。deploy は rsync --exclude="*.txt"・`git add -u`＋新 buildId の _next/static を明示 add。Indexing 未送信（親）

### 2026-11-18 20:00 kwexp（競合ベンチマーク型の作成・5日目）：新規5本
- queue の status 空欄の上から。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（岩手・山梨・滋賀は市ページ〈盛岡／甲府／大津・草津・彦根・長浜〉のみで県ハブなし＝埼玉・群馬と同じ扱い。ロッキンは名古屋系ページの店舗行のみ。電子楽器は電子ピアノ・キーボード等の個別ページのみで「電子楽器全般の買取条件」は未カバー）
- skip: 「テクニトーン 買取」＝ヤフオク落札（テクニトーン・Technics SX 等4検索）で本体は SX-GN5 の1件（1円）のみ、メーカー（パナソニック）公式に修理・買取の記載が見当たらず、買取業者の公式にも明記なし（競合ページのみ）→ 一次情報不足
- `/articles/iwate-gakki-kaitori/`（32・region）: ハードオフ a=03 3店（全店 出張○）・島村 盛岡南（/shops/ の services で買取受付・中古あり、所在地は店舗ページ）・中古楽器堂 岩手盛岡店（店頭 11:00〜18:30・出張 9:00〜20:30）・楽器の買取屋さん /area/iwate/ 県全域・事例12件（7件が店舗のない市）。島村出張は東北=宮城のみ、クロサワ16都府県・イケベ関東/関西に岩手なし
- `/articles/yamanashi-gakki-kaitori/`（32・region）: ハードオフ a=19 6店（○4）・島村 甲府昭和（昭和町）・中古楽器堂 山梨甲府店（10:00〜16:30・来店前電話）・楽器の買取屋さん 県全域・事例12件（2025/1〜2026/9・8件が店舗のない市）。クロサワ出張エリアに山梨県あり（syuchou.html）
- `/articles/rockin-kaitori/`（32・howto）: /buy/・/buy/purchase/・/buy/nagoya_guitar/・shopinfo 6ページ。店頭=現金（金額により振込）・出張=東海4県・預かりで**その場の支払いなし**・宅配=5万以上送料負担/10万以上梱包材無料・住民票原本・翌営業日振込・委託20%＋調整代6,600円〜。和楽器・民族楽器は買取なし。古物 愛知県公安委員会 第543819800700号。title/h1 に「評判」なし
- `/articles/denshi-gakki-kaitori/`（24・instrument→family:鍵盤楽器）: 7社（島村・イケベ・ハードオフ宅配・イシバシ・クロサワ・楽器の買取屋さん・ロッキン）の PSE表示／音楽制作ソフト／その他条件を同じ項目で比較（PSE言及3社・ソフト対象外5社）。METI の PSE ページは 403 のため引用せず
- `/articles/shiga-gakki-kaitori/`（24・region）: ハードオフ a=25 3店（全店○）・島村 草津・中古楽器堂 /shop/shiga/ は「近隣に店舗が見つかりません」・楽器の買取屋さん 県全域・事例12件（7件が店舗のない市）。島村出張=大阪/兵庫、イケベ=大阪北東部・尼崎・伊丹で滋賀なし
- 導線: relatedSlugs 末尾に追加（morioka→岩手、nagoya・kurosawa→ロッキン、keyboard・denshi-piano→電子楽器）。山梨・滋賀は SameGroupArticles の pref 群（gen-related-groups.py の変化は新規5本の追加のみ）
- sitemap 474→479。precheck 全項目OK（595ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 新規分0。t.felmat 6498→6538（新規5本×8）。Indexing は親がまとめて送る

### 2026-11-19 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/19 に／ロッキン名古屋栄店の支払い「店舗ページに記載なし」→「その場で現金（買取金額によっては振込）」（src 12275823・dcbc15be / deploy 2a832b104＋空 03b9d29fc）
- ティファナ 11/19: /shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → 注記 11/18 → 11/19（333 ファイル・1,098 か所＝11/18 の 332 ファイル＋nagoya（11/18 は ceeb3afe で別更新）。日付を正規化した −/＋ 行が一致）。置換対象の文型: 「（D確認・再開時期の記載なし）」「宅配買取はD時点で一時停止中」「ただしD時点は一時停止中」「（D時点は一時停止中）」「宅配キット無料）は、D時点で公式サイトのお知らせにより一時停止」「宅配買取（送料無料）はD時点で一時停止中」＋各 \u エスケープ形＋生成器 CHECKED。ほかの 11/18 確認日（nagoya 早見表・fender・bass・hikakaku 等）は不変
- ロッキン: /buy/nagoya_guitar/ に「ロッキン名古屋栄店へギターをお持ちいただければその場で現金買取」「（買取金額によってはお振込にてお支払いさせていただく場合もございます）」（/buy/ も同文・11/19 確認）。nagoya・nagoya-mizuho・nagoya-nakamura の早見表の支払い欄を公式リンク付きで置換、mizuho の要約文「その場で現金を受け取れるのはイシバシ楽器」→「イシバシ楽器とロッキン」。3ページの dateModified/更新日を 11/19 に。nagoya-kita の同型の要約文は表にロッキン行が無いため未変更。nagoya FAQ「その場で現金を受け取りたいならイシバシ楽器」は推奨文のため未変更
- 点検 C3 /author/ は 11/8〜 と同じ否定文（「個人の執筆者や経歴ではなく」）・Person 0＝誤検知（未変更）
- 計測リンク fmcl 3010・fmimp 3440・fmimg 88・t.felmat 6538（out＝deploy 前・ページ別も一致）、ソース t.felmat 1140 前後一致。precheck 全項目OK（595ページ）。sitemap lastmod 231 URL。deploy は rsync --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`。push 09:37 → CF 反映が 30 分超来ず 10:08 空コミット

### 2026-11-19 12:00 成長ルーチン：kawaguchi に「楽器の買取屋さん」の答え（src 581304fa / deploy ae3afe8ce）
- 対象「ピアノ買取 川口市」17@7.7・「楽器の買取屋さん」12@8.8（GSC 10/20〜11/16）。git log --since=11/10 は 11/16 kwexp の relatedSlugs のみ＝内容変更なし。crawl-2026-11-18 のクロール待ちに無し。title 不変
- 「楽器の買取屋さん」＝UNI SOUND株式会社（gakkikaitori.co.jp・古物 神奈川 第451310006356号）。ウリエル（uriel-cuore.co.jp＝株式会社クオーレ）とは別会社・提携なし（11/19 両社公式で確認）
- 公式 11/19: /area/saitama/kawaguchi/「埼玉県全域が出張買取の対象」（川口市あり）・川口市の買取事例8件（Martin 160,000円 2026/5/28 ほか）・近隣店舗＝大宮店（さいたま市大宮区桜木町2-2-22 鈴木ビル4F・10:00-19:00・駐車場なし）。会社概要の店舗欄 23店で埼玉は大宮店のみ。出張/宅配/店頭/年齢の各行は 11/13 の記載と一致
- 実装: KaitoriyasanInfo に area=kawaguchi（asof＝地域別確認日・extraRow＝買取事例）。既存3地域（yokohama/kawasaki/kobe）の出力は不変（可視テキスト比較で変化は kawaguchi 1本のみ）。冒頭に案内1行、ティファナ宅配停止の確認日 10/22→11/19（/shipping/ 11/19 表示）、description に楽器の買取屋さん、dateModified 11-19
- WebSearch（米国経由）: 日本の結果は返るが順位は取れない。ウリドキは運営を「株式会社GRACE」と記載（公式は UNI SOUND）、hikakaku の口コミページ、島村楽器の川口2店。川口市内の楽器の買取屋さん店舗を示す結果なし
- 計測リンク t.felmat 6538→6538（out＝deploy 前）。precheck 全項目OK（595ページ）。sitemap lastmod は kawaguchi のみ 11/19。Indexing 未送信（親）

### 2026-11-19 20:00 kwexp（競合ベンチマーク型の作成・6日目）：新規5本（src 817fc048・a6c4c03a / deploy 09d78cd2d）
- queue の status 空欄の上から。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（スネアは drum-kaitori の FAQ・表と ludwig-supraphonic〈型番〉のみ、ハモンドは organ-kaitori の事例5件の記載のみ、二胡・打楽器・ブックオフは専用ページなし）
- skip: 「セカンドストリート 楽器 買取」＝www.2ndstreet.jp は今日も全URL 403（Akamai・10/17 から）。公式で事実が取れないため（第三者サイトで代用しない）
- `/articles/snare-drum-kaitori/`（24・instrument→inst:drum）: **島村 買取価格検索 cat=12（ドラム）全8,073行を取得**（シンバル3,781・スネア2,914・ハードウェア1,256・電子ドラム122）→ スネア2,914型番の A 中央値22,000・価格帯・ブランド別（DW 59,000・SONOR 41,000・Ludwig 35,000 ほか）。ヤフオク「スネアドラム」200件→本体125件（中央値25,501・ブランドはタイトル先頭のブランド名で分類）。**LM400 の島村 A 17,000 に対し 1970年代 LM400/402 の落札は 69,300〜150,000**。楽器の買取屋さん スネア事例86件のメーカー別、イシバシ /ec/sp/52snare/ の減点方式の確認項目
- `/articles/hammond-organ-kaitori/`（24・instrument→inst:piano）: ヤフオク3検索253件をタイトルで1件ずつ分類＝本体・レスリー31件を系統別（SK1/SK PRO 13.2万〜22万・XB/XE/XM 中央値25,000・家庭用旧型 中央値11,792・B-3＋レスリー 52万台）。**島村は「オルガン」を対象外に挙げつつ買取価格検索にハモンド7型番（SKX PRO 150,000・XK-5 143,000・SK PRO-73 122,000 ほか）を掲示**。鈴木楽器＝ホームオルガン・B-3 生産完了、XK-7/7D 2026/3/7 発売
- `/articles/niko-kaitori/`（24・instrument→inst:wagakki）: ヤフオク「二胡」200件→本体76件（中央値約4,295・半数以上が5,000円未満）を材別（老紅木4 約4.5万・紫檀7 24,988・紅木10 約1万・記載なし49 3,000）。売り先＝ウリエル /instrument/ に「二胡（古月琴坊）」、楽器の買取屋さん 民族楽器カテゴリに二胡（事例はバラライカ1件のみ）、島村・イシバシは記載なし（島村 価格検索「二胡」0件）、ブックオフは民芸品・手工芸品が対象外
- `/articles/dagakki-kaitori/`（24・instrument→inst:drum）: 島村 cat=12 の内訳＝ハンド/コンサート打楽器の掲示0。ヤフオク6種（ティンパニ29 中央値65,010・ビブラフォン18 62,700・コンガ23 18,000・ジャンベ26 14,960・グロッケン31 11,244・ボンゴ7）を打楽器メーカー名ありに限定して集計＋直接引取の記載件数（ティンパニ17/29・ビブラフォン13/18）。楽器の買取屋さん パーカッション事例68件の内訳
- `/articles/bookoff-gakki-kaitori/`（16・howto）: **公式店舗検索の API（ページが読む as.blue.asp.appirits.com/bookoff2/search.json・楽器4区分 tag 2/3＝公式の楽器買取ページのリンクと同条件）で全779店中137店**。業態（SUPER BAZAAR 52・BOOKOFF 44・Rehello 22・PLUS 17）・都道府県（27都道府県・東京30のうち Rehello 21）・区分別（管楽器106店）。買取対象外（ピアノ・エレクトーン・5年以上の電子ピアノ・民芸品＝バイオリン/三味線/琴/ハープ）を島村・イシバシと比較（島村 cat=11 にバイオリン388行）。title/h1 に「評判」なし
- 導線: relatedSlugs 末尾に追加（drum・ludwig-supraphonic・pearl → スネア、drum・marimba・cajon → 打楽器、organ・electone → ハモンド、wagakki・taishogoto → 二胡、hardoff・senmonten-vs-recycle → ブックオフ）。gen-related-groups.py の変化は新規5本の追加のみ
- sitemap 479→484。precheck 全項目OK（600ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 新規分0。t.felmat 6538→6578（新規5本×8）。⚠️ fetch-yahoo-medians-gakki.py を import すると scripts/__pycache__ の .pyc（追跡対象）が変わる → git checkout で戻した。Indexing は親がまとめて送る

### 2026-11-20 深夜02時の回 kwexp（競合ベンチマーク型の作成・追加の回）：新規5本（src f57f922f / deploy d80cc13b6）
- queue の status 空欄の上から。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（島根・香川は市ページ〈松江・出雲／高松・丸亀・坂出・観音寺〉のみで県ハブなし。カマカは ukulele-kaitori の言及のみ、モーリスは guitar-kaitori の表1行のみ、民族楽器は niko・wagakki のみ）
- skip: 「管弦屋 口コミ」＝公式サイトを特定できない（kangenya.com／kangen-ya.com 等は接続不可、Web 検索でも公式が出ない）。第三者サイトで代用しない（朝に確認）
- `/articles/shimane-gakki-kaitori/`（16・region）: ハードオフ a=32 2店（松江浜乃木○・出雲高岡×）・**島村 イオンモール出雲店は shops 一覧で「買取受付」「中古取扱」とも off**（出張は中国・四国＝広島市のみ）・中古楽器堂 /shop/shimane/ は対応店舗の記載なし・楽器の買取屋さん 県全域＋事例12件（8件が持ち込み先のない市）＋近隣店舗3店（広島・高松・門真）・三木楽器ピアノ買取の対象に島根（離島除く）
- `/articles/kagawa-gakki-kaitori/`（16・region）: ハードオフ a=37 5店（○3）・楽器の買取屋さん 高松店（十川東町）・中古楽器堂 高松店（出張 毎日9:15〜20:30）・島村 イオンモール綾川店（買取受付 on・中古 off）・事例12件（Martin 3件 119,000〜207,000円・6件が店舗のない市）・三木ピアノ
- `/articles/morris-guitar-kaitori/`（16・brand）: **島村 買取価格検索 cat=1×brand=120 全509行**（A 中央値33,000・最低10,000・Sシリーズ中央値104,000・MD 15型番は全て1万〜1.9万・B/A 81%・C/A 56%）。ヤフオク2検索 201件（中央値7,150・W 2桁型番67件 中央値6,325＝島村の掲示にない型番）。公式＝モーリス楽器製造（松本市・昭和42年創業）・塗装を伴う修理 11/9 再開
- `/articles/kamaka-ukulele-kaitori/`（16・brand）: **島村 cat=3×brand=307 全227行**（A 中央値146,000＝20型番以上のウクレレブランドで最高、ウクレレ全3,260行の中央値28,000）・基本型番 HF-1 56,000/HF-2 68,000/HF-3 80,000/HF-4 89,000。ヤフオク2検索 155件（中央値63,000・HF-1/2/3 別・ゴールドラベル11件 23,000・ホワイトラベル15件 60,500）。公式（英語）＝ラベルの年代・シリアル 2000年〜（保証ページは1999年）・保証は譲渡不可
- `/articles/minzoku-gakki-kaitori/`（16・instrument→inst:wagakki）: ヤフオク6検索を本体だけに手で絞って種類別（エレクトリックシタール10件 97,950・シタール12件 5,682・バグパイプ9件 17,846・チャランゴ25件 13,200・ディジュリドゥ20件 5,711・バラライカ12件 2,250・カリンバ36件 1,900）。「バラライカ」は BLACK LAGOON の商品が大半、「バグパイプ」はアークナイツ・切手が混ざる＝タイトル除外が必須。売り先＝楽器の買取屋さん 民族楽器カテゴリ7種（事例はバラライカ1件のみ）・ウリエル・島村の価格検索に区分なし・ブックオフ 民芸品対象外
- 導線: relatedSlugs 末尾に追加（acoustic-guitar・takamine→モーリス、ukulele→カマカ、niko・wagakki・dagakki→民族楽器）。⚠️ 新規ページの relatedSlugs 先頭の instrument 記事が gen-related-groups.py の「親」になる → カマカは guitar-kaitori、民族楽器は wagakki-kaitori を先頭にして ukulele・niko が既存グループから抜けないようにした（変化は新規5本の追加と香川の市3本が pref:香川県 へ移ったのみ）
- sitemap 484→489（lastmod 2026-11-20 は新規5＋導線6本）。precheck 全項目OK（605ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 新規分0。t.felmat 6578→6618（新規5本×8）。本番 02:21 に5本とも200・h1 確認。Indexing は親がまとめて送る

### 2026-11-20 深夜04時の回 kwexp（競合ベンチマーク型の作成・追加の回）：新規5本（src 50211ef8・9efcda52 / deploy b96b99a6e）
- queue の status 空欄の上から6語。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（リードオルガンは organ-kaitori の「種類」1行・事例なしの記載のみ、サイレントギターは専用ページなし、DTM機材は audio-interface・midi-keyboard の個別ページのみで「DTM機材全般」は未カバー、ファゴットは buffet の言及のみ、ピッコロは専用ページなし）
- skip: 「DJコントローラー 買取」＝dj-kizai-kaitori（DJ機材＝ターンテーブル・CDJ・DJコントローラー・ミキサー）と pioneer-dj-kaitori（DDJ）で同じ意図をカバー済み（GSC「dj機器 買取」も dj-kizai に着地）
- **島村 買取価格検索のカテゴリー・楽器 ID は `/used/get-options.php?cat=&inst=&brand=` の JSON で取れる**（cat 9=木管〈inst 38 ピッコロ・46 ファゴット・41 その他木管〉、cat 18=音楽制作・配信機器〈76 インターフェース・75 キーボードコントローラー・74 その他〉）。ピッコロ・ファゴットは大半が inst 41「その他木管楽器」に入っている＝型番「ピッコロ」「ファゴット」の文字検索で拾う
- `/articles/reed-organ-kaitori/`（16・instrument→inst:piano）: ヤフオク「リードオルガン」「足踏みオルガン」27件→本体22件（中央値3,750円・13件が5,000円以下・8件が引取限定）。ヤマハ型式つき3件 35,000円・西川ベビー 66,000円・KIMBALL 299,800円。島村・イシバシはオルガン対象外、楽器の買取屋さん オルガン事例8件にリードオルガンなし、ヤマハ歴史（1887年オルガン修理）
- `/articles/silent-guitar-kaitori/`（16・instrument→inst:guitar）: **島村 型番「SLG」ヤマハ15行**（SLG200S A35,000・SLG100N 20,000・B/A 75〜82%・C/A 46〜57%）＋ヤフオク200件→SLG 型番つき本体139件の型番別中央値（SLG200S 46件 38,500・SLG100S 24件 18,700）。ヤマハ公式「あゆみ」で発売年、現行は SLG200 Series のみ。楽器の買取屋さん事例4件
- `/articles/dtm-kizai-kaitori/`（16・instrument→family:DTM・DJ機材）: **島村 cat=18 全509行**（インターフェース284 A中央値22,000・コントローラー192 11,000・その他33 のうちソフト20行は¥0）。ブランド別、UA 33行「トランスファー処理必要」・NI 15行「トランスファーID必要」。イシバシ＝音楽制作ソフト不可・MIDI鍵盤/コントローラー可・ACアダプター欠品
- `/articles/fagott-kaitori/`（16・instrument→inst:clarinet）: 島村 型番「ファゴット」30行（A中央値646,000・YFG-812 は区分違いで926,000/694,000 の2行）＋ヤフオク210件→本体30件（中央値222,800）・ボーカル9件。「ファゴット」は MiG-15 の愛称のプラモデル・FAGOTTO 腕時計が混ざる。楽器の買取屋さん事例5件、ヤマハ現行 YFG-811/812・スーパーボーカル 176,000円
- `/articles/piccolo-kaitori/`（16・instrument→inst:flute）: 島村 型番「ピッコロ」80行−金管11行＝69行（A中央値241,000・ヤマハは YPC-62 以上7型番のみ＝YPC-32 掲示なし）＋ヤフオク349件→YPC 型番つき本体97件（YPC-32 39件 29,376・62 22件 101,270・81 11件 149,000）。「ピッコロ」はドラゴンボール・メダカ・スネアが大半＝除外必須。楽器の買取屋さん19件、ヤマハ希望小売価格
- 導線: relatedSlugs 末尾に追加（organ・hammond→リードオルガン、classic-guitar・acoustic-guitar→サイレントギター、audio-interface・midi-keyboard→DTM機材、oboe・kangakki→ファゴット、flute→ピッコロ）。新規の先頭は既存の親（piano・guitar・audio-interface・clarinet・flute）にして既存グループを崩さない（oboe を先頭にすると oboe が親になり clarinet 群から抜ける）。gen-related-groups.py の変化は新規5本の追加のみ
- sitemap 489→494。precheck 全項目OK（610ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 新規分0。fetch-yahoo-medians-gakki.py は PYTHONDONTWRITEBYTECODE=1 で import（.pyc 変化なし）。Indexing は親がまとめて送る

### 2026-11-20 朝ルーチン：07:00 点検「データが10日より古い」gakki-no-kaitoriyasan（10/22）＝公式で基本情報を再照合し ASOF 9/16→11/20（店舗一覧 26店・SHOPS_ASOF 10/22 は判断待ちで不変）／ティファナ宅配は停止継続で確認日を 11/20 に（src 8df4ea4d / deploy 2e188ef78）
- 点検の拾った日付は SHOPS_ASOF「2026年10月22日時点」（ASOF 9/16 の方が古いが max を見る）。公式 11/20：トップ（0120-1717-67・24時間・年中無休・土日祝OK・最短30分・無料出張見積対応エリア46都道府県＝沖縄なし・古物 神奈川 第451310006356号・「出張費・査定料・搬出費用はすべて無料。…キャンセル料もかかりません」）、会社概要（UNI SOUND株式会社・新山下3-4-17 カリカチュアビル1F「こちらの方では買取は行っていません」）＝FACTS 一致 → ASOF 11/20・dateModified 11-20。費用欄と FAQ「出張料や査定料は…」を公式の「搬出費用も無料・キャンセル料なし」に（FAQ の「売らない場合の扱いは申し込み時に確認」→公式記載に置換）
- 🔍 店舗：会社概要・/kaitori/shop/ とも 23店（甲府千塚・金沢・奈良神殿なし）。当ページ SHOPS 26店・SHOPS_ASOF 10/22 は判断待ちのため未変更（11/3 から継続）
- ティファナ 11/20: /shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → 注記 11/19 → 11/20（334 ファイル・1,099 か所＝11/19 の 333＋kawaguchi の「宅配買取は一時停止中（公式のお知らせ・D確認）」1か所。日付を正規化した −/＋ 行が一致）。🔍 東京・埼玉54本の同型「（公式のお知らせ・2026年10月22日確認）」は 10/22 のまま（未変更・置換対象に入れるかは要確認）
- 点検 C3 /author/ は 11/8〜 と同じ否定文（「個人の執筆者や経歴ではなく」）・Person 0＝誤検知（未変更）
- 計測リンク t.felmat 6658・fmcl 3070・fmimp 3500（deploy 前＝out 後で一致）、ソース t.felmat 1140 不変。precheck 全項目OK（610ページ）。sitemap lastmod 231 URL。1回目のビルドは next/font（Google）取得失敗で rc=1 → 再実行で成功。deploy は rsync --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`

### 2026-11-20 12:00 成長ルーチン：三鷹の持ち込み早見表を公式で再照合＋持ち込みに必要なもの（src 4cea8027 / deploy 4822c7ac4）
- 対象 /articles/mitaka-gakki-kaitori/（「楽器 店頭買取 三鷹」9@8.8・「楽器買取 持ち込み 三鷹」8@7.1）。11/6 変更以降の個別変更なし（git log）・crawl-2026-11-19 のクロール待ちに無し。冒頭に答え（早見表2店）は既にあり＝title 不変
- 公式 11/20: ハードオフ三鷹深大寺店（/shop/detail/?p=201432）所在地・10:30〜19:30・年中無休・駐車場28台・0422-30-5655・小田急バス 吉01/境91「第二住宅」徒歩2分＝一致。⚠️同じページの店舗情報欄は「出張買取 実施なし」、下の「出張買取について」は三鷹市・武蔵野市ほか・毎月27日受付＝表記ゆれ → 「出張は電話で確認」と注記。支払い方法は記載なしのまま。/faq/「18歳未満の方は買取させていただけません」。島村 吉祥寺パルコ店 /used/：10:00〜20:00・査定がスムーズな時間 13:00〜17:00・0422-28-0560・銀行振込のみ（10万円以上は1週間程）・持ち込み5%UP・現住所記載の身分証・18歳未満は保護者同伴・音が出ない（修理不可）は原則不可＝一致＋追記
- 実装: 早見表に電話・定休・駐車場・バス系統・査定がスムーズな時間、表の下に「持ち込むときに必要なもの」1段落。確認日 11/6→11/20・dateModified 11-20・sitemap lastmod は mitaka のみ 11-20。ティファナ「2026年10月22日確認」（東京・埼玉54本の判断待ち）は触っていない
- 競合（WebSearch・US 経由）: ウリドキの店舗ページ（ハードオフ三鷹深大寺＝店頭は現金と記載・公式未記載のため書かない）と島村の各店ページ（持ち込みの流れ・身分証）。三鷹市内の他の楽器買取店は出てこない
- 計測リンク t.felmat 6658→6658（out html＝deploy）、mitaka ページ 6→6。precheck 全項目OK（610ページ）。可視テキストが変わったのは mitaka 1本のみ。deploy は rsync --delete --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`。push 12:27 → 本番 12:28 反映（新表記あり・旧「11月6日確認」0）。Indexing 未送信（親）

### 2026-11-21 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/21 に／確認日が最も古い地域記事＝仙台を公式で再照合（src 7ef11120 / deploy fbf05b84a）
- ティファナ 11/21: /shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → 注記 11/20 → 11/21（333 ファイル＋生成器 CHECKED・1,099 か所。置換は5型＋\u 型のみ、日付を正規化した −/＋ 行が一致）。東京・埼玉54本の「2026年10月22日確認」は判断待ちで不変
- 地域記事の確認日（ティファナ注記・更新日を除く「確認」「時点」「ASOF」の日付）: 確認日がある region 31本のうち、ページ内の最新の確認日が最も古いのは sendai（10/20 のみ）。次点 tokyo・guitar-kaitori-chiba（10/25）。個別項目で最古は kawasaki の 10/17（同ページ内に 11/13 もあり）。312本は確認日の記載なし
- sendai 公式 11/21: ウリエル /visit/ 出張エリアに宮城県なし・店頭は川崎店のみ（/shop/「川崎店以外の店舗は現在準備中」）＝一致 → 10/20→11/21。島村 /shop/sendai/（青葉区中央1-10-10 仙台ロフト7階・10:00〜20:00・買取受付/中古取扱 on・東北地方随一の品数）・/shop/sendai/used/（査定無料・銀行振込のみ・現金なし）・/shop/nagamachi/（太白区長町7-20-15 ザ・モール仙台長町Part2 3F・10:00〜21:00・スタジオ on）・/shop/sendai-izumi/（泉区寺岡6-5-1 タピオ2F・10:00〜20:00）＝本文と一致 → 営業時間・ロフト店の支払い・長町の住所を追記し、確認日注記1行。更新日/dateModified 11-01→11-21
- 🔍 未照合（今日は触っていない）: 一番町ギター・BIGBOSS 仙台・高く売れるドットコム 仙台リユースセンター・中古楽器堂 仙台店・仙台買取サービス・ニーゴ・リユース 仙台店・出張買取チェンジ仙台・楽器の買取屋さんの仙台出張。サービス一覧の li01（class）＝off（ロフト店は管楽器メンテ・防音室展示・クラシック特化が off）
- 点検 C3 /author/ は 11/8〜 と同じ否定文（「個人の執筆者や経歴ではなく」）・本番 Person 0＝誤検知（未変更）
- 計測リンク t.felmat 6658・fmcl 3070・fmimp 3500（deploy 前＝out 後で一致）、ソース t.felmat 1140 不変。precheck 全項目OK（610ページ）。sitemap lastmod 232 URL。deploy は rsync --delete --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`

### 2026-11-21 12:00 成長ルーチン：ibanez の title/h1 に「Ibanez（アイバニーズ）」・冒頭に島村 Ibanez 買取10%UP と高く売れるドットコムの買取実績（src 4b376a23・507cc0a7 / deploy dee922f38）
- 対象 /articles/ibanez-kaitori/（「ibanez 買取」18@17.1・「アイバニーズ 買取」8@10.9・クリック0）。11/9 変更以降の個別変更なし（ファイル単位 git log --since=11-12 は空）・11/14 以降の title 変更なし・crawl 11/20 でクロール済み
- title/h1/OG/Article headline/BreadcrumbList: 「Ibanez買取おすすめ3社比較」→「Ibanez（アイバニーズ）買取おすすめ3社比較」（月次の【2026年11月 週次相場更新】は不変）。description に 10%UP・他店実績（148字）
- 島村「買取価格検索」掲示17型番（`scripts` なし・cat=4/5 で curl）を 11/21 再照合＝全一致。BTB・JCRG・AZ 系のレンジも一致 → 確認日 11/9→11/21（表・FAQ 表示＋JSON-LD）。更新日/dateModified 11-21
- 追加（#kakaku 内）: 島村 /p/campaign/used/eg-ibanez_esp_musicman-sell.html「一本からのギター整理応援！買取10%UPキャンペーン」11/1〜11/30・コード CP-043A・店舗5%/下取10%/購入品5% 併用で最大30%・適用例 AZ224F A ¥80,300（+7,300）・RG2570MZ A ¥72,600（+6,600）（11/1 時点）。⚠️公式ページの「買取対象商品」見出し下に「下記ブランドの電子ドラム」と誤記あり（タイトルはエレキギター）→ 当ページはエレキギターと記載。**11/30 で終了 → 12/1 以降に節の削除か終了表記が必要**
- 追加: 高く売れるドットコム /gakki/guitar/ibanez/ の買取実績8件（RG8527Z 美品 ¥206,000 10/31 〜 AZES40 ¥8,000 10/2）と相場目安「5,000円〜50,000円前後」
- 競合（WebSearch・US 経由）: 「ibanez 買取」は島村の検索結果・キャンペーンページ、高く売れるドットコムのキーワード頁が上位。「アイバニーズ 買取」は高く売れるドットコム・ウリドキ（エレアコ最高 5,000円）。日本の SERP 順位そのものは取れず
- 未照合: 島村「10万円以上は1週間ほど」（/used/flow/shop/ には記載なし＝11/9 確認のまま）。イシバシ店頭の現金/振込・50万以上振込は 11/21 一致（文中の確認日は 11/9 のまま）
- 計測リンク out html 6658→6658・当該ページ 20→20、ソース 1132 不変。precheck 全項目OK（610ページ）。可視テキストが変わったのは ibanez 1本のみ（buildId 正規化で比較）。sitemap lastmod は ibanez のみ 11-21。deploy は rsync --delete --exclude=.git --exclude="*.txt"・`git add -u`＋新 buildId の _next/static を明示 add。push 12:12 → 本番 12:16 反映（新表記あり・旧 title／旧確認日 0）。Indexing 未送信（親）

### 2026-11-22 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/22 に／確認日が最も古い地域記事＝東京を公式で再照合（src fd090f86 / deploy b9038549f）
- ティファナ 11/22: tifana.net/shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → 注記 11/21 → 11/22（333 ファイル＋生成器 CHECKED・1,098 か所。日付を正規化した −/＋ 行が一致）。⚠️ www.tifana.com は別サイト（/shipping/ 404）＝公式は tifana.net。東京・埼玉54本の「2026年10月22日確認」は判断待ちで不変
- 地域記事の確認日: 最新の確認日が最も古いのは tokyo・guitar-kaitori-chiba（10/25 のみ）の同率 → tokyo を実施。次は guitar-kaitori-chiba（10/25）、その次 shinjuku（11/5）
- tokyo 公式 11/22: ティファナ /visit/ の東京都出張エリア＝23区＋8市・相談地域11市＝本文と一致 → 10/25→11/22（3か所）。ウリエル /visit/「関東エリア…東京都」「※一部対応できない市町村がございます」・FAQ「最短で翌日以降」「原則10:00〜17:00」・出張料・査定料・買取手数料無料・「査定士が責任を持ってお運びします」・大きな品物は申込時に大きさを伝える → 食い違い訂正: 比較表 ウリエル「最短即日」→「最短翌日以降（出張）」、「23区+多摩」→「東京都（一部の市町村を除く）」、h3「東京23区・多摩地域へ」→「東京都内へ」、本文「八王子・町田・立川などの多摩地域にも対応」・FAQ「23区・多摩地域全域に対応」「ピアノは専門の運搬業者を手配」「搬出料無料」（公式に記載なし）→ 公式の記載に、流れ「23区内なら即日対応可能」→「最短で翌日以降」。更新日/dateModified 11-01→11-22
- 🔍 未照合: 御茶ノ水・渋谷・池袋の店名（イシバシ・クロサワ・ギタープラネット・島村・イケベ）は店舗の列挙のみ・確認日なし。「多摩地区でも宅配買取なら全国対応」はティファナ宅配停止中だが東京テンプレの判断待ちに含めて未変更
- 点検 C3 /author/ は 11/8〜 と同じ否定文（「個人の執筆者や経歴ではなく」）＝誤検知（未変更）
- 計測リンク t.felmat 6658・fmcl 3070・fmimp 3500（deploy 前＝out 後で一致）、ソース t.felmat 1140 不変。precheck 全項目OK。sitemap lastmod 233 URL。deploy は rsync --delete --exclude=.git --exclude="*.txt"・`git add -A -- . ':(exclude)*.txt'`（__next 混入 0）
- push 09:23 → 本番 09:50 反映（CF ビルド約27分）。本番 tokyo：新表記「最短翌日以降」2・旧「10月25日」「最短即日」「多摩地域全域」「搬出料」0、TOP・akita・kawaguchi の 11/21 注記 0。計測リンク tokyo 32＝out 32。Indexing 未送信（親）

### 2026-11-22 12:00 成長ルーチン：Flying V の title/h1 に表記と買取実績・冒頭に公開買取実績13件／roland に年式つきの電子ピアノ買取実績（src c8bb1b42 / deploy b44266195）
- /articles/gibson-flying-v-kaitori/（「フライングv 買取」17@5.9c0）: 変更記録なし・11/15 以降の title 変更なし。title/h1/Article headline/BreadcrumbList を「Gibson Flying V（ギブソン フライングV）の買取価格｜買取実績3万〜11万円・Custom Shop 15万〜20.5万円【2026年】」に、desc も実績レンジに（153字）。冒頭に #kakaku: 高く売れるドットコム /keyword/ギブソン/ 1〜70頁を 11/22 に確認して Gibson 製 Flying V の行を転記（Custom Shop 以外10件 2024/02〜2026/04 30,000〜110,000円／Custom Shop 3件 150,000〜205,000円。ジャンク2件・Epiphone・2023年の程度不良は除外）。出典のない目安「現行USA 8万〜18万円・Custom Shop 15万〜40万円・ヴィンテージ数十万〜数百万円」を本文・FAQ（表示＋JSON-LD）とも実績の記述に置換。
  - 判断待ち（報告のみ）: /articles/gibson-flyingv-kaitori/（ヤフオク中央値型）が同じ「フライングV 買取」を受けるカニバリ。統合・301 は親判断。
- /articles/roland-kaitori/（「ローランド 電子ピアノ 買取」12@13.8）: 11/11 変更以降の個別変更なし。冒頭の掲示表は家庭用 HP/LX/RP の掲示が無かった → 高く売れるドットコム /gakki/denshi-piano/roland/ の電子ピアノ実績6件（HP603 2017年製 5,000・RP501R 2016年製 8,000・DP90S 2015年製 7,000・FP-60X 2022年製 20,000・RD-88 2023年製 40,000・RD-700NX 訳有 17,000円、10/22〜10/29）を h3 で追加。title 不変。更新日/dateModified 11-22。
- nagoya-gakki-kaitori は 11/18（ceeb3afe）・11/19（12275823 ロッキン栄の支払い）の個別変更があるため触らず。
- 競合（WebSearch・US 経由）: 日本の SERP 順位は取れず。おたからや（Flying V 1978 は ASK）・高く売れるドットコムの実績一覧が出た。
- 計測リンク out html t.felmat 6658・fmcl 3070・fmimp 3500（変更前と一致）、ページ別 Flying V 16→16・roland 28→28。precheck 全項目OK。可視テキスト差分は2本＋sitemap。deploy は rsync --delete --exclude=.git --exclude="*.txt"・`git add -u`＋新 buildId を明示 add。push 12:54 → 本番 12:55 反映（新 title 8・旧「8万〜18万」0）。Indexing 未送信（親）

### 2026-11-23 深夜02時の回 kwexp（競合ベンチマーク型の作成・追加の回・競合 gakkiou.com の初回）：新規5本（src acf5e16f / deploy e8034b6cf）
- queue（11/22 gakkiou 棚卸し）の status 空欄12語を上から。「高く売れるドットコム 評判」は hold のまま
- skip 7語（「フルート／サックス／クラリネット／トロンボーン／ホルン／オーボエ／ユーフォニアム メーカー」）: 買取の話で書けるのは「メーカー別の中古買取相場の差」だけで、既存の各楽器ページ（flute・saxophone・clarinet・trombone・horn・oboe・euphonium-kaitori）の title に「メーカー別査定額」「メーカー別の価値」とあり意図が重なる（sites-tomomi-2 のサイト別注意どおり）
- `/articles/yamaha-trumpet-kaitori/`（ヤマハ トランペット 買取・16・brand）: **島村 型番「YTR」69行→トランペット64行**（A 中央値82,500・シリーズ別、掲示は6000番台以上のみ＝2330/3335 等の入門機は掲示なし）＋ヤフオク200件を型番別（YTR-135 23件 8,500・1335 27,450・2335 47,840・4335G 109,064・8335 系 180,088）＋楽器の買取屋さん ヤマハ TP 事例100件（中間 51,250）＋ヤマハ公式の希望小売価格（2330 96,800・3335 126,500・8335 467,500/8335S 495,000/G 473,000/GS 500,500・9335 649,000）
- `/articles/yamaha-flute-kaitori/`（ヤマハ フルート 買取・16・brand）: **島村 型番「YFL」94行→フルート92行**を百の位別（500番台 70,000・600番台 96,000・700番台 145,000・800番台 155,000、200/300番台は掲示なし）＋ヤマハ公式の材質（200 白銅／300 頭部管銀／400 頭部管・管体銀／500 頭部管銀・管体白銅／600 頭部管・管体銀／700 総銀製／イデアル 817 1,650,000〜）＋**H足部管の有無29組（H ありが高い23・同額5・低い1）**＋ヤフオク200件（200番台 82件 中央値13,531）＋楽器の買取屋さん29件
- `/articles/yanagisawa-wo2-kaitori/`（ヤナギサワ WO2・72・model）: ヤナギサワ公式 A-WO2 506,000/SP 770,000・S-WO2 583,000・T-WO2 605,000（ブロンズブラス「ライト仕様」、AC140/TC180 標準付属）＋島村 型番「WO2」19行（A-WO2 A166,000＝標準価格の約33%・**A-WO2SP 131,000＝ラッカーより低い**・T-WO2 185,000・WO20 との差）＋ヤフオク中古 アルト17件 中央値277,200・テナー5件 385,001＋楽器の買取屋さん ヤナギサワ86件（型番なし）
- `/articles/lacquer-silver-plate-kaitori/`（ラッカー メッキ 違い・24・howto）: 査定への影響として作成。**島村の YAS/YTS/YTR/WO2 から同じ型番・同じ製造期間のラッカー／銀メッキ36組を突き合わせ＝銀メッキが高い25・同額6・低い5、差の中央値 約7%**。ヤナギサワ A-WO2（−21.1%）・A-WO20（−12.3%）は新品で銀メッキが38〜52%高いのに掲示は逆転。ヤマハ YAS-62/62S・YTR-8335/S/G/GS の公式の仕上げ説明と希望小売価格。ラッカーのはがれがどのランクかは記載なしと明記
- `/articles/mouthpiece-kaitori/`（マウスピース 買取・32・howto）: ヤフオク4検索591件→マウスピース単体345件をブランド別（オットーリンク メタル49件 19,000・ラバー35件 15,000・メイヤー80件 14,410・セルマー33件 8,250・バック29件 3,850・ヤマハ33件 3,740、サックス用242件 14,800／トランペット用86件 3,970）。NY/USA/ヴィンテージ表記は1.7〜2.2倍。売り先＝イシバシ「各種マウスピースなどの買取」・楽器の買取屋さん事例1件・島村は掲示0件
- ⚠️ 楽器の買取屋さんの事例一覧は Python urllib だと 403（curl は 200）→ curl で取得（UA 偽装はしていない）。一覧ページによって取得件数が揺れるので5秒間隔で取得。YTR は11ページ中10ページ目が0件で止まった＝「一覧から取得できた100件」と表記
- 導線: relatedSlugs 末尾に追加（trumpet・ytr8335→ヤマハTP、flute・muramatsu→ヤマハFL、yanagisawa・awo10・saxophone→WO2、sax・yas62・kangakki・ytr8335・awo10→ラッカー、trumpet・sax・kangakki・fuzokuhin→マウスピース）。新規の先頭は既存の親（trumpet・flute・saxophone・kangakki）。gen-related-groups.py の変化は新規5本の追加のみ（kangakki 群が2→4本）
- sitemap 494→499（lastmod 2026-11-23 は新規5＋TOP・記事一覧・導線9本。gakki-fuzokuhin は sitemap 外）。precheck 全項目OK（615ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 新規分0。t.felmat 6658→6698（新規5本×8）。Indexing は親がまとめて送る
- push 02:22 → 本番 02:23 反映。5本とも 200・h1 一致、本番 sitemap 499 URL、trumpet-kaitori から新規への導線あり

### 2026-11-23 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/23 に／千葉ギター（guitar-kaitori-chiba）を公式で再照合（src 3d3942cb・850d3e55 / deploy 9f1b60719）
- ティファナ 11/23: tifana.net/shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → 注記 11/22 → 11/23（334 ファイル＋生成器 CHECKED・1,099 か所。日付を正規化した −/＋ 行が一致）。「宅配買取は…時点で一時停止中です（公式のお知らせ）」型3か所（kawai-rx2・conn・RecommendedServices）も含む
- guitar-kaitori-chiba 公式 11/23: ティファナ /visit/ 千葉県＝相談地域6市（市川・船橋・松戸・柏・流山・浦安）・千葉市なし、/access/ 店舗は東京都12・埼玉県3＝本文と一致。ウリエル /visit/「関東エリア…千葉県」「※一部対応できない市町村がございます」「出張料・査定料無料」＝一致 → 確認日 10/25→11/23・更新日・dateModified（07-04→11-23）・sitemap
- 🔍 報告のみ: 同ページの比較表 ティファナ「出張/店頭/宅配」と「宅配買取 ── 全国どこからでも」節にティファナ宅配停止の注記なし（指示外で未変更）。次の地域は shinjuku（11/5）
- 計測リンク t.felmat 6698（deploy 前＝out）。precheck 全項目OK。push 09:39 → 本番 09:51 反映確認

### 2026-11-23 12:00 成長ルーチン：横浜・川崎・神戸の冒頭に「楽器の買取屋さん」の答え＋3市の公式買取事例／店舗ページの「倉庫のみ」定型文の消滅を反映（src 1109a0a9 / deploy c812da737）
- 対象（GSC 10/24〜11/20）: yokohama「楽器の買取屋さん」133@8.0c1・「楽器の買取屋さん 横浜」127@8.5c0・「楽器の買取屋さん 店舗」42@8.5／kawasaki「楽器の買取屋さん」61@6.0c0／kobe「楽器の買取屋さん」35@7.5・「楽器 買取 兵庫県」19@6.6。git log --since=11/13 は3本ともティファナ注記の日付一括と kwexp relatedSlugs のみ。**title は3本とも不変**（横浜はクリック計11前後）
- 公式 11/23（curl 200）: /area/kanagawa/yokohama/・/kawasaki/・/area/hyogo/kobe/＝「神奈川県全域／兵庫県全域が出張買取の対象」・各市の買取事例12件・近隣店舗（神奈川＝横浜・厚木・板橋、兵庫＝門真・高松・名古屋守山）。/kaitori/shop/（横浜・厚木〈事前予約制〉・心斎橋・門真あり）、/kaitori/trip/（最短即日30分・キャンセル料なし・クーリングオフ8日）、トップ（出張費・査定料・搬出費用無料・キャンセル料なし）、/company/（UNI SOUND・新山下・古物番号）、/kaitori/deliv/（着払い・24時間以内振込・返送料負担・住民票の写し）＝表の各行と一致
- 🔍 店舗ページ（/kaitori/shop/yokohama/・atsugi・kadoma・shinsaibashi・ueno）に「店舗を持たず買取用の倉庫のみ」の定型文が無くなっていた（「待ち時間なしでご案内」「ご来店予約」あり）→ KaitoriyasanInfo 店頭行と横浜早見表の注記を訂正（kawaguchi も同じ部品なので表示が変わる＝誤記訂正）
- 実装: 3ページの冒頭 cream 枠を案内文から「答え」（所在地・営業時間・出張対象・費用/キャンセル料・事例件数・確認日）に。KaitoriyasanInfo に yokohama/kawasaki/kobe の extraRow（各市の事例4件＋計12件）・ASOF 11/13→11/23。kawasaki description を楽器の買取屋さんの答えから、kobe description に「神戸市を含む兵庫県全域」。dateModified・更新日 11-23
- WebSearch（米国経由）: 「楽器の買取屋さん 横浜」は uridoki（★評価つき列挙）・島村各店・高く売れるドットコムの横浜の買取実績。「楽器 買取 兵庫県 おすすめ」は hikakaku の業者一覧のみ。順位は取れない。うちに無かった「地域の買取実績」を公式の事例で足した
- 計測リンク out html t.felmat 6698・fmcl 3090・fmimp 3520（deploy 前＝out 後で一致）、ページ別 横浜36・川崎32・神戸32・川口12 不変、ソース 1140 不変。precheck 全項目OK（615ページ）。可視テキスト差分は4本（横浜・川崎・神戸・川口）のみ。sitemap は朝の一括で 11-23 済み。deploy は rsync --delete --exclude=.git --exclude="*.txt"・`git add -u`＋新 buildId を明示 add。push 12:15 → 本番 12:17 反映（答え枠・事例あり／「倉庫のみ」0）。Indexing 未送信（親）

### 2026-11-24 朝ルーチン：ティファナ宅配は停止継続で確認日を 11/24 に／新宿（shinjuku）を公式で再照合（src a28b0bca / deploy 1f8467d6f）
- ティファナ 11/24: tifana.net/shipping/ に「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → 注記 11/23 → 11/24（333 ファイル＋生成器 CHECKED・866 か所＋1。日付を正規化した −/＋ 行が一致）。置換は停止注記の文型だけ（「確認・再開時期の記載なし」「時点は/時点で一時停止中」「時点で公式サイトのお知らせにより一時停止中」「宅配買取は一時停止中（公式のお知らせ・…確認）」）。千葉ギターの「各社公式・2026年11月23日確認」・KaitoriyasanInfo の 11/23 等は対象外で不変。東京・埼玉テンプレの「10月22日確認」（明日の既定案）・楽器の買取屋さん 26→23店（同）は触っていない
- shinjuku 公式 11/24（curl 200）: 早見表5店＝イシバシ新宿店（新宿3-3-2 地下鉄会館ビル・C4 徒歩0分・新宿駅徒歩5分・予約なし可・12:00〜20:00、買取の流れ＝店頭は即日その場で現金／高額は振込・現金書留）・中古楽器堂 新宿本店（西新宿1丁目2-13 山田ビル2階・西口徒歩約3分・店頭 11:00〜18:30・電話24時間・店舗買取は事前予約）・島村 新宿PePe店（歌舞伎町1-30-1 西武新宿ペペ6F・11:00〜21:30・査定 13:30〜18:00・振込のみ/現金なし/10万円以上は1週間程）・クロサワ 日本総本店（百人町1-10-8・平日土 11-20/日祝 11-19「(土曜日を除く)」）・ハードオフ新宿マルイメン（新宿5丁目16-4・E2 徒歩約3分・東口徒歩約10分・11:00〜20:00・年中無休）＝全一致 → 確認日 11/5→11/24（2か所）・店舗説明の 11/4→11/24（2か所）・更新日/dateModified 11-24。title・description 不変
- 🔍 報告のみ: ハードオフ新宿マルイメンは引き続き「出張買取 実施なし」と「出張買取を行っております」の併記（11/15 と同じ）。島村「地域最大級の品揃え」は出典なし（未変更）
- 計測リンク out html t.felmat 6698・fmcl 3090・fmimp 3520（deploy 前＝out 後で一致）。precheck 全項目OK。sitemap lastmod 231 URL を 11-24（ティファナ注記の変わったページのうち sitemap にあるもの）。deploy は rsync --delete --exclude=.git --exclude="*.txt"（削除は旧 buildId のみ）・`git add -u`＋新 buildId。push 10:08 → 本番 10:09 反映（shinjuku「2026年11月24日に各店の公式で確認」・TOP/zama 11/24・旧 11/23 0）
- 点検 C3 /author/ は 11/8〜 と同じ否定文（「個人の執筆者や経歴ではなく」）＝誤検知（未変更・11/24 本番で原文確認）。次の地域は確認日の古い順に（東京・埼玉テンプレは既定案と一緒に）

### 2026-11-25 深夜02時の回 kwexp（競合 gakki-takakuureru.com の初回）：新規5本
- queue（11/24 棚卸し）の status 空欄7語を上から。「高く売れるドットコム 評判」は hold のまま。重複は own-pages・GSC 90日・app/ で確認（三線・琵琶・ベリンガーは本文の言及0、防音室は miki・shimamura 等の窓口説明のみ、スタジオ機材は dtm-kizai〈cat=18〉・mixer・microphone の個別のみ、ピックアップは専用ページなし）
- skip:「楽器メーカー 一覧」＝メーカーの名簿（日本の楽器メーカー比較）が意図で、メーカー別の中古買取相場の差として書ける語ではない（sites-tomomi-2 のメーカー語ルール）。「琵琶 買取」は5本の上限で未着手（空欄のまま）
- `/articles/bouonshitsu-kaitori/`（112・instrument→inst:piano）: **島村 /used/gakki/soundproof/**（対象＝ヤマハ セフィーネII/IIev/NS・ウッディミニ/ボックス、カワイ ナサール。簡易防音室は対象外。製造11年以上は不可の場合あり・喫煙/ペット/カビ/解体済は不可・解体搬出運搬は差し引き・2週間後振込・下取10%UP）と **三木 design.miki.co.jp/purchase/**（アビテックス歴代＋販売期間・近畿圏原則・1週間以内振込・ナサール/だんぼっち不可）を比較。11年基準＝おおむね2015年以前製造。ヤフオク「防音室」「アビテックス」113件→ユニット型15件 中央値82,000（14件が解体済/引取限定）・簡易50件 34,900。楽器の買取屋さん事例2件（2018）
- `/articles/sanshin-kaitori/`（40・instrument→inst:wagakki）: ヤフオク「三線」200件→本体49件 中央値16,500。本皮表記13件 25,280・人工皮18件 10,890・棹材表記（黒木/黒檀）9件 45,000。「三線」は尺八（銀三線）・鉄道模型（三線式）が混ざる＝除外必須。島村 型番「三線」0件、楽器の買取屋さん 和楽器の取扱いカテゴリに三線（事例0）、ウリエル「三線袋・駒・撥など付属品がそろっていると査定に有利」
- `/articles/behringer-kaitori/`（32・brand→inst:synthesizer）: **島村 brand=1060 全37行**（cat=13 シンセ21 A中央値22,000・SYSTEM 55 148,000、cat=16 PA 16 同11,000）。ほかのカテゴリーのブランド選択肢にベリンガーなし。ヤフオク273件→単品189件 中央値4,200（シンセ/リズムマシン10件 27,235・XENYX 18件 3,450）
- `/articles/studio-kizai-kaitori/`（16・instrument→inst:microphone）: **島村 cat=16 全866行**（区分別：アウトボード175 37,000・ミキサー112 26,000・スピーカー264 24,000・マイク269 21,000・ヘッドホン46 16,500／ブランド別 NEUMANN 177,500・SSL 123,000・GENELEC 54,000）。B/A 84%・C/A 59%。島村 PA ページ「ピュアオーディオ・ホームシアターは買取不可」、楽器の買取屋さん レコーディング・PA・DAW 43件
- `/articles/guitar-pickup-kaitori/`（16・instrument→inst:guitar）: ヤフオク6検索570件→単体267件・主要5ブランド254件 中央値10,500（Gibson 21,500・EMG 14,900・DiMarzio 10,000・Duncan 9,500・Fender 9,000、Gibson の年代表記7件 45,000、セット57件 17,500）。「〜搭載」「交換」のギター本体が大量に混ざる＝除外必須。イシバシ買取に「ギター・ベース用ピックアップ」、島村は掲示なし
- 導線: relatedSlugs 末尾に追加（piano・grand-piano→防音室、wagakki・shamisen・minzoku→三線、synthesizer・mixer→ベリンガー、dtm-kizai・microphone→スタジオ機材、gakki-fuzokuhin・effector→ピックアップ）。⚠️ miki-gakki に防音室を足すと防音室が miki の「親」になり miki が既存グループから抜ける → 足さない。スタジオ機材の先頭を dtm-kizai／audio-interface にすると family:DTM・DJ機材 が割れる → microphone を先頭に。gen-related-groups.py の変化は新規5本の追加のみ
- sitemap 499→504。precheck 全項目OK（620ページ）・trust-audit check_page 新規5本の指摘0・heading-lint 新規分0。t.felmat 6698→6738（新規5本×8）。Indexing は親がまとめて送る

### 2026-11-25 深夜04時の回 kwexp（競合 gakki-takakuureru.com・2回目）：新規1本（src 746807e8・842b3d8b / deploy cecf37fd4）
- queue の status 空欄は「琵琶 買取」1語のみ（02時の回で上限のため未着手だった語）。重複は own-pages・GSC 90日・app/ で確認（琵琶の言及0）
- `/articles/biwa-kaitori/`（琵琶 買取・16・instrument→inst:wagakki）: **ヤフオク カテゴリー 和楽器＞琵琶（auccat=2084305875）終了180日間 198件を全件取得**→本体114件 中央値27,740。薩摩のみ表記20件 50,750・筑前のみ43件 20,000・表記なし/両方51件 20,500。筑前の五弦23件 40,000／四弦23件 16,000。桑13件 45,000。撥の単品32件 13,500。中国琵琶（ピパ）量産品9件はすべて2万円以下。除外＝撥・台・弦・ケース・教本の単品53・中国琵琶12・ジャンク14・正倉院レプリカ2・月琴2・セット1
- 買取の扱い（公式 11/25）: おたからや 参考買取価格「琵琶 和楽器」（2019/5/26 時点・**金額は ASK 表示**。HTML コメント内に 181,000 があるが表示されていないので使わない）／ウリエル 和楽器の評価ポイント（琵琶の名前なし）／楽器の買取屋さん 和楽器の取扱いカテゴリ＝三味線・尺八・三線・和太鼓・笙（琵琶なし）／島村 型番「琵琶」0件
- ⚠️ ヤフオク closedsearch の SSR は1ページ20件しか返さない（n=100 でも20件）→ b=1,21,…,181 の10ページを3秒間隔で取得。行の抽出は `_cl_link:ib` だけだと3件しか取れない（ページ内の他リンク種別 tc/ic 等で cid・catid・p= を拾う）。TC楽器（tcgakki.com）の琵琶商品ページは 429（local_rate_limited）→回避せず不使用
- 導線: relatedSlugs 末尾に追加（wagakki・shamisen・sanshin→琵琶）。新規の先頭は wagakki-kaitori。gen-related-groups.py の変化は新規1本の追加のみ
- sitemap 504→505。precheck 全項目OK（621ページ）・trust-audit check_page 指摘0・heading-lint 新規分0。t.felmat 6738→6746。push 04:08 → 本番 04:09 反映（200・h1 一致・本番 sitemap 505・wagakki から導線あり）。Indexing は親がまとめて送る

### 2026-11-25 朝ルーチン：既定案（11/24 宣言）＝楽器の買取屋さん 26→公式23店／東京・埼玉54本のティファナ確認日を毎日更新に含める／ティファナ宅配停止継続で注記 11/25（src a22e1e96 / deploy ddf4b21d5）
- 楽器の買取屋さん 公式 11/25: /kaitori/shop/・/company/ とも店舗リンク23（甲府千塚・金沢・奈良神殿なし。/kaitori/shop/kanazawa・nara は 301→/kanazawa/・/nara/、kofu 404）。23店の住所の市区は hyoban の表と全一致。事前予約制は8店（群馬桐生・厚木・新潟・福井花堂中・長野松本・富士津田・広島・鹿児島）→ gakki-no-kaitoriyasan SHOPS 26→23・SHOPS_ASOF 10/22→11/25・metadata description 23店舗／hyoban 表「全国26店舗」→23・店舗表から3店を外す・予約制 10→8店・「2026年10月22日時点／公式掲載26店舗」→11/25・23。dateModified 両ページ 11-25
- 渋谷/新宿の食い違い: 公式 /area/tokyo/ の近隣店舗＝池袋・板橋・上野 → 新宿の「上野店・池袋店」に板橋店を足し確認日 11/25（渋谷は既に3店で一致・未変更）。島村 shimamura「対象店舗26店」は島村の話で別物
- ティファナ 11/25: tifana.net/shipping/「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503 → 注記 11/25。**今日から東京・埼玉54本の「宅配買取は一時停止中（公式のお知らせ・D確認）」も毎日の置換対象（10/22→11/25）**。⚠️ 11/24 の置換は \u エスケープ形（JSON-LD の FAQ「なお、ティファナの宅配買取はD時点で一時停止中です」232か所）を取りこぼし 11/23 のまま本番に出ていた → 今日まとめて 11/25 に。置換は 1,152 か所・387 ファイル＋生成器 CHECKED（日付を正規化した −/＋ 行が一致）。毎日の置換は文型5つ×（リテラル・\u エスケープ）で行うこと（scripts/update-tifana-pause-date.py: 「（D確認・再開時期の記載なし）」「D時点は一時停止中」「D時点で一時停止中」「D時点で公式サイトのお知らせにより一時停止」「一時停止中（公式のお知らせ・D確認）」）
- 本番 out の停止注記: 11/24 2,358→0・11/23 464→0・10/22 108→0・11/25 2,946。計測リンク out html t.felmat 6746・fmcl 3114・fmimp 3544（deploy 前＝out＝deploy 後）、ソース 1140 不変。precheck 全項目OK（621ページ）。sitemap lastmod 272 URL 変化
- 点検 C3 /author/ は 11/8〜 と同じ否定文（「個人の執筆者や経歴ではなく」「掲載していないもの 執筆者・監修者の個人名…」）・本番 Person 0＝誤検知（未変更）

### 2026-11-26 朝ルーチン：ティファナ宅配は停止継続で注記 11/26／楽器の買取屋さん 都内3店を再照合（src 2f1d6653 / deploy 770c7fa20）
- ティファナ 11/26: tifana.net/shipping/「宅配買取のサービス・ECサイトをシステムリニューアルのため一時停止しております。」・online.tifana.net 503・トップに停止/再開の文言なし → `scripts/update-tifana-pause-date.py . 2026年11月26日 --apply`（1,152か所・387ファイル＝11/25 と同数・全部 11/25 から）＋生成器 CHECKED。東京・埼玉54本（一時停止中（公式のお知らせ・D確認））55か所を含む。out の 11/25 停止注記 0
- 楽器の買取屋さん 公式 11/26: /area/tokyo/ の近隣店舗＝池袋・板橋・上野、/kaitori/shop/ の東京都の住所は 台東区上野7丁目・豊島区西池袋1丁目・板橋区前野町1丁目の3つだけ → 渋谷・新宿とも「上野・池袋・板橋」で一致（未変更）
- バイセル（buysell）は app/components/data に言及0＝掲載業者ではない
- 計測リンク out html t.felmat 6746・fmcl 3114・fmimp 3544（deploy 前＝out＝deploy 後）・ソース 1140 不変。precheck 全項目OK。sitemap lastmod 272 URL を 11-26。rsync は set -e のスクリプトで dry→deleting は旧 buildId のみ

### 2026-11-27 朝ルーチン：横浜 持ち込み早見表4店を公式で再照合／ティファナ宅配は停止継続で注記 11/27（src d2d62d24 / deploy 5e2993bac）
- 機械点検「10日より古い」（yokohama 10/18）: 公式 11/27 でイシバシ横浜（/kaitori/tentou/yokohama.html・/kaitori/tentou/ の現金/50万以上振込・ピアノ等不可・1938年創業）、クロサワ横浜（/sh_hama/・モアーズ4F・11〜20時・支払い記載なし）、島村ビブレ（/shop/yokohama/used/・振込のみ・10万以上1週間・スムーズ13〜18時・UP条件）、楽器の買取屋さん横浜店（/kaitori/shop/yokohama/・/area/kanagawa/yokohama/ 事例12件・神奈川全域）＝一致 → 確認日 11/13・11/23 → 11/27
- 訂正2件: ①島村「2026年10月18日時点ではローランド電子ドラムの買取10%UP」→ 公式の実施中4件（11/1〜11/30・Gibson/K.Yairi/Headway アコギ、Ibanez/ESP/MUSICMAN エレキ、FREEDOM/dragonfly ベース、Fulltone/Pro Co/Universal Audio/One Control エフェクター。⚠️11/30 で終わるので 12/1 以降に要再確認）②早見表 楽器の買取屋さん（店頭）「身分証明書のコピーと住民票の写しの送付が必要」は宅配の条件 → 店舗ページ「本人確認書類いずれか一点をお見せください」に。KaitoriyasanInfo（ASOF 11/23・共通部品）は未変更
- ティファナ 11/27: /shipping/「…システムリニューアルのため一時停止しております。」・online 503 → update-tifana-pause-date.py 1,152か所・387ファイル＋CHECKED。ビルドは他サイトと並行で 16 分（1回目は 10 分枠で中断→再実行）。計測リンク out t.felmat 6746・fmcl 3114・fmimp 3544・ソース 1140 不変。precheck 全項目OK。本番 10:20 反映。点検 C3 /author/ は同じ否定文・Person 0＝誤検知（未変更）

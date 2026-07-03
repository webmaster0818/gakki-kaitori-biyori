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

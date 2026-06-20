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

### 2026-06-18 勝ち筋ブランド押し上げ（MediaXAI「勝ち筋ブランド押し上げを進めて」）
GSC28日=クリック28・表示2,209(+51%)・164頁表示。勝ち筋ブランド/モデルがpos5-12で0-1クリック。ブランドページに一次相場データが無いのが弱点→`components/BrandSpotPrices.tsx`新設(souba-ranking-gakki.json参照→該当ブランドのモデル相場表＋各モデル/相場ランキングへ内部リンク、週次再ビルドで自動更新)。11ブランド(fender/gibson/yamaha/ibanez/marshall/boss/selmer/kawai/steinway/bach/pearl)の`<RelatedArticles`直前に注入(import追加・冪等パッチ)。勝ち筋18頁にIndexing API 18/18。方式Bデプロイ・本番curl確認。20データモデルは既に全てModelSpotPriceCard表示済を確認。次=被リンク営業(相場データ引用打診)。

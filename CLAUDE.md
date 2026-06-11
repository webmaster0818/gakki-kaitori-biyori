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

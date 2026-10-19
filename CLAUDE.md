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

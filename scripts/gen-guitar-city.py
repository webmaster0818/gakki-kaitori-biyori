#!/usr/bin/env python3
"""P1第1弾: 「ギター買取×都市」専用ページ12本ジェネレータ（冪等）。

GSCに「ギター買取 {都市} おすすめ」系の実クエリがある12都市のみ対象。
- 週次相場 = components/GuitarSpotPrices.tsx（data/souba-ranking-gakki.json参照・週次cronで自動更新）
- 都市事情は事実ベースのみ（既存の同都市汎用ページに記載済みの一般事実の範囲。架空店舗・架空地域相場は書かない）
- 既存の同都市「楽器買取」汎用ページ⇄新ギター専用ページの相互内部リンク
- guitar-kaitori ハブに都市チップ導線を追加
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

# GSCに実クエリがある12都市のみ（これ以外は作らない）
CITIES = [
    {
        "slug": "guitar-kaitori-nagoya", "name": "名古屋", "pref": "愛知県名古屋市",
        "generic": "nagoya-gakki-kaitori", "generic_label": "名古屋の楽器買取ガイド",
        "visit": "大須・栄",
        "street": "大須は名古屋最大の楽器街で、コメ兵のギターフロア（常時約1,000本のUSED在庫）をはじめ楽器店が集中しています。栄にはイシバシ楽器・クロサワ楽器・ロッキンなど大手チェーンが揃っており、店頭持ち込みの選択肢が全国有数に豊富なエリアです。",
        "outreach": "ウリエルは名古屋市内全域への出張買取に対応しており、ティファナも名古屋エリアで出張買取を行っています。",
        "cross": ["guitar-kaitori-aichi", "guitar-kaitori-osaka", "guitar-kaitori-tokyo"],
    },
    {
        "slug": "guitar-kaitori-fukuoka", "name": "福岡", "pref": "福岡県福岡市",
        "generic": "fukuoka-gakki-kaitori", "generic_label": "福岡の楽器買取ガイド",
        "visit": "天神・博多",
        "street": "天神にはイシバシ楽器・クロサワ楽器など大手楽器チェーンが集まっており、九州でギターを店頭で売るなら中心となるエリアです。博多駅周辺もアクセスが良く、持ち込み査定を受けやすい立地です。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が福岡市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-hiroshima", "guitar-kaitori-osaka"],
    },
    {
        "slug": "guitar-kaitori-kobe", "name": "神戸", "pref": "兵庫県神戸市",
        "generic": "kobe-gakki-kaitori", "generic_label": "神戸の楽器買取ガイド",
        "visit": "三宮・元町",
        "street": "三宮・元町周辺に楽器店やリサイクルショップがあり、店頭持ち込みが可能です。より多くの店舗と比較したい場合は、大阪の楽器店街（梅田・心斎橋）も電車圏内です。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が神戸市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-osaka", "guitar-kaitori-kyoto"],
    },
    {
        "slug": "guitar-kaitori-kyoto", "name": "京都", "pref": "京都府京都市",
        "generic": "kyoto-gakki-kaitori", "generic_label": "京都の楽器買取ガイド",
        "visit": "河原町・四条",
        "street": "河原町・四条周辺に楽器店が集まっており、店頭持ち込みが可能です。より多くの店舗と比較したい場合は、大阪の楽器店街（梅田・心斎橋）も電車圏内です。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が京都市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-osaka", "guitar-kaitori-kobe"],
    },
    {
        "slug": "guitar-kaitori-sendai", "name": "仙台", "pref": "宮城県仙台市",
        "generic": "sendai-gakki-kaitori", "generic_label": "仙台の楽器買取ガイド",
        "visit": "仙台駅周辺・一番町",
        "street": "仙台駅周辺には島村楽器（東北最大級の総合楽器店）があり、一番町にはギターを扱う専門店が集まっています。東北でギターを店頭で売るなら仙台が中心エリアです。",
        "outreach": "ウリエルなど全国対応の主要業者が仙台市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-sapporo", "guitar-kaitori-tokyo"],
    },
    {
        "slug": "guitar-kaitori-chiba", "name": "千葉", "pref": "千葉県千葉市",
        "generic": "chiba-gakki-kaitori", "generic_label": "千葉の楽器買取ガイド",
        "visit": "千葉駅周辺",
        "street": "千葉駅周辺に楽器店やリサイクルショップがあり、店頭持ち込みが可能です。高額モデルの場合は、日本最大のギター店街である東京・御茶ノ水も電車圏内なので、比較先として検討できます。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が千葉市とその周辺を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-tokyo", "guitar-kaitori-yokohama"],
    },
    {
        "slug": "guitar-kaitori-osaka", "name": "大阪", "pref": "大阪府大阪市",
        "generic": "osaka-gakki-kaitori", "generic_label": "大阪の楽器買取ガイド",
        "visit": "梅田・心斎橋",
        "street": "梅田や心斎橋（アメリカ村）周辺には大手楽器店・中古楽器店が集中しており、西日本でギターを店頭で売るなら選択肢が最も豊富なエリアです。複数店舗を同日にまわって査定額を比較しやすいのも強みです。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が大阪市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-kobe", "guitar-kaitori-kyoto"],
    },
    {
        "slug": "guitar-kaitori-hiroshima", "name": "広島", "pref": "広島県広島市",
        "generic": "hiroshima-gakki-kaitori", "generic_label": "広島の楽器買取ガイド",
        "visit": "広島市中心部",
        "street": "広島市中心部に楽器店やリサイクルショップがあり、店頭持ち込みが可能です。中国地方では広島が店頭売却の中心エリアで、市外からの持ち込みも少なくありません。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が広島市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-fukuoka", "guitar-kaitori-osaka"],
    },
    {
        "slug": "guitar-kaitori-tokyo", "name": "東京", "pref": "東京都",
        "generic": "tokyo-gakki-kaitori", "generic_label": "東京の楽器買取ガイド",
        "visit": "御茶ノ水・渋谷・新宿",
        "street": "御茶ノ水はギター専門店が集中する日本有数の楽器店街で、隣接する神保町とあわせて店頭買取の選択肢が全国で最も豊富なエリアです。渋谷・新宿にも大手楽器店の買取窓口があり、複数店舗の査定額を同日に比較できます。",
        "outreach": "ウリエルは東京23区・多摩地域への出張買取に対応しており、ティファナも東京エリアで出張・店頭買取を行っています。",
        "cross": ["guitar-kaitori-yokohama", "guitar-kaitori-chiba"],
    },
    {
        "slug": "guitar-kaitori-yokohama", "name": "横浜", "pref": "神奈川県横浜市",
        "generic": "yokohama-gakki-kaitori", "generic_label": "横浜の楽器買取ガイド",
        "visit": "横浜駅西口",
        "street": "横浜駅西口にはイシバシ楽器・クロサワ楽器など大手楽器店が集まっており、店頭持ち込みで査定を受けられます。日本最大のギター店街である東京・御茶ノ水も電車圏内なので、高額モデルなら比較先として検討できます。",
        "outreach": "ウリエルは横浜市内全域への出張買取に対応しており、ティファナも横浜エリアで出張・宅配買取を行っています。",
        "cross": ["guitar-kaitori-tokyo", "guitar-kaitori-chiba"],
    },
    {
        "slug": "guitar-kaitori-sapporo", "name": "札幌", "pref": "北海道札幌市",
        "generic": "sapporo-gakki-kaitori", "generic_label": "札幌の楽器買取ガイド",
        "visit": "札幌駅周辺・大通",
        "street": "札幌駅周辺（島村楽器 札幌ステラプレイス店など）や大通・狸小路エリアに楽器店があり、道内でギターを店頭で売るなら札幌が中心エリアです。道内他都市からは宅配買取（全国共通・送料無料の業者あり）も有力な選択肢です。",
        "outreach": "ウリエルなど全国対応の主要業者が札幌市内を出張買取の対応エリアとしています。",
        "cross": ["guitar-kaitori-sendai", "guitar-kaitori-tokyo"],
    },
    {
        "slug": "guitar-kaitori-aichi", "name": "愛知", "pref": "愛知県",
        "generic": "nagoya-gakki-kaitori", "generic_label": "名古屋の楽器買取ガイド",
        "visit": "名古屋市・大須",
        "street": "愛知県内最大の楽器街は名古屋市の大須で、コメ兵のギターフロアなど持ち込み先が集中しています。豊田・岡崎・一宮・豊橋など名古屋市外にお住まいの場合は、出張買取や宅配買取（全国共通）なら店舗まで行かずに県内全域から利用できます。",
        "outreach": "ウリエル・ティファナなど全国対応の主要業者が愛知県内を出張買取の対応エリアとしています（対応日程はエリアにより異なるため申込時に確認を）。",
        "cross": ["guitar-kaitori-nagoya", "guitar-kaitori-osaka"],
    },
]

COMMON_RELATED = [
    "guitar-kaitori", "acoustic-guitar-kaitori", "guitar-amp-kaitori", "effector-kaitori",
    "fender-kaitori", "gibson-kaitori", "ibanez-kaitori", "martin-kaitori",
    "gakki-kaitori-osusume", "takaku-uru-kotsu",
]

TEMPLATE = '''import type { Metadata } from "next";
import Link from "next/link";
import GuitarSpotPrices from "@/components/GuitarSpotPrices";
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
      <p className="font-bold text-base mb-4 text-center text-accent-dark">__NAME__でギターの買取価格を今すぐチェック</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-gold text-white font-medium px-6 py-3 rounded-full hover:bg-gold-dark transition-colors text-sm shadow-md">
          一括査定で最高値を調べる
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm shadow-md">
          出張買取を申し込む
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
          <li className="flex items-center"><span className="breadcrumb-sep" /><Link href="/articles/guitar-kaitori/" className="hover:text-accent transition-colors">ギター買取</Link></li>
          <li className="flex items-center"><span className="breadcrumb-sep" /><span className="text-foreground font-medium">ギター買取 __NAME__</span></li>
        </ol>
      </nav>
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gold/10 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">__NAME__×ギター</span>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">2026年7月最新</span>
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
            <li><a href="#comparison" className="hover:underline">__NAME__対応のギター買取おすすめ3社比較</a></li>
            <li><a href="#souba" className="hover:underline">ギターの買取相場【週次更新】</a></li>
            <li><a href="#local" className="hover:underline">__NAME__でギターを売る3つの方法と持ち込み事情</a></li>
            <li><a href="#tips" className="hover:underline">ギターを高く売る4つのコツ</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        <div className="article-body">
          <h2 id="comparison">__NAME__対応のギター買取おすすめ3社を比較</h2>

          <p>__NAME__（__PREF__）でエレキギター・アコースティックギター・ベースを売るなら、手数料無料で高額査定が狙えるおすすめ3社はこちらです。いずれもアンプ・エフェクターとのまとめ売りにも対応しています。</p>

          <div className="table-wrapper mb-6">
            <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
              <thead className="bg-accent-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">項目</th>
                  <th className="px-4 py-3 text-left font-medium">ヒカカク！</th>
                  <th className="px-4 py-3 text-left font-medium">ティファナ</th>
                  <th className="px-4 py-3 text-left font-medium">ウリエル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">買取方式</td><td className="px-4 py-3">一括査定（複数業者）</td><td className="px-4 py-3">出張/店頭/宅配</td><td className="px-4 py-3">出張買取専門</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">__NAME__対応</td><td className="px-4 py-3">全域（オンライン）</td><td className="px-4 py-3">対応エリア</td><td className="px-4 py-3">対応エリア</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">対応ギター</td><td className="px-4 py-3">エレキ・アコギ・ベース</td><td className="px-4 py-3">エレキ・アコギ・ベース</td><td className="px-4 py-3">エレキ・アコギ・ベース</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">アンプ・エフェクター</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td><td className="px-4 py-3">対応</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">手数料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">無料</td></tr>
                <tr className="bg-cream/50"><td className="px-4 py-3 font-medium">特徴</td><td className="px-4 py-3 text-gold-dark font-bold">最高値が見つかる</td><td className="px-4 py-3 text-gold-dark font-bold">年間4万件実績</td><td className="px-4 py-3 text-gold-dark font-bold">自宅完結・まとめ売りOK</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">おすすめ</td><td className="px-4 py-3">最高値で売りたい人</td><td className="px-4 py-3">すぐ売りたい人</td><td className="px-4 py-3">機材ごとまとめて売る人</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ヒカカク！ ── __NAME__対応の買取業者を一括比較</h3>
          <p>ギターは業者による査定額の差が大きい楽器です。ヒカカク！なら<strong>__NAME__対応の複数業者に一括で査定依頼でき、最高値の業者がすぐにわかります</strong>。Gibson・Fenderなど人気ブランドほど業者間の価格差が出やすいため、相見積もりの効果が大きくなります。</p>

          <h3>ティファナ ── 出張・店頭・宅配の3方式に対応</h3>
          <p>ティファナは<strong>年間4万件の買取実績</strong>があり、ギター以外のアイテムもまとめて売れるのが強みです。宅配買取は全国共通で利用でき、店頭・出張と使い分けられます。</p>

          <h3>ウリエル ── 自宅にいながらギターと機材をまとめて売却</h3>
          <p>ウリエルは出張買取専門で、__OUTREACH_SHORT__<strong>ギター本体だけでなくアンプ・エフェクター・ケースなど機材一式のまとめ売り</strong>に向いており、出張料・査定料は無料です。</p>

          <CtaBox />

          <h2 id="souba">ギターの買取相場【週次更新・ヤフオク!実勢データ】</h2>

          <p>中古ギターの相場は全国のオンライン市場（ヤフオク!・フリマ・楽器店EC）で形成されるため、<strong>__NAME__だから高い・安いという地域差は基本的にありません</strong>。当サイトが毎週集計している主要モデルの実勢相場を基準にすれば、__NAME__で受けた査定額が妥当かどうかを判断できます。</p>

          <GuitarSpotPrices />

          <p>Martin・Taylorなどアコースティックギターの相場や、ブランド別の詳しい買取情報は<Link href="/articles/acoustic-guitar-kaitori/">アコースティックギター買取ガイド</Link>・<Link href="/articles/guitar-kaitori/">ギター買取総合ガイド</Link>をご覧ください。</p>

          <h2 id="local">__NAME__でギターを売る3つの方法と持ち込み事情</h2>

          <h3>店頭買取（持ち込み）── 即日現金化したい方に</h3>
          <p>__STREET__</p>
          <p>店頭買取のメリットはその場で現金化できることです。ギター1本なら持ち運びやすいため、店頭・出張・宅配の中でも選びやすい方法です。</p>

          <h3>出張買取 ── 複数の機材をまとめて売りたい方に</h3>
          <p>__OUTREACH__出張料・査定料は無料の業者がほとんどで、アンプやエフェクター、ケースなど機材一式をまとめて査定してもらえます。本数が多い場合や大型アンプがある場合は出張買取が便利です。</p>

          <h3>宅配買取 ── 全国どこからでも（__NAME__も同条件）</h3>
          <p>宅配買取は全国共通のサービスで、__NAME__からでも送料無料の梱包キットを使って売却できます。買取価格の条件も全国一律のため、近くに楽器店がないエリアでも不利になりません。ネックが動かないよう緩衝材を詰めて梱包するのがポイントです。</p>

          <div className="bg-cream border border-warm-border rounded-xl p-5 my-6">
            <p className="text-sm text-warm-gray mb-1">ピアノ・管楽器・ドラムなど、ギター以外の楽器も売りたい方へ</p>
            <Link href="/articles/__GENERIC__/" className="text-accent font-medium text-sm hover:underline">__GENERIC_LABEL__（全ジャンル対応）を見る →</Link>
          </div>

          <CtaBox />

          <h2 id="tips">ギターを高く売る4つのコツ</h2>

          <h3>コツ1: 複数業者で相見積もりを取る</h3>
          <p>ギターは査定士の在庫状況・販路によって査定額が変わりやすい楽器です。<strong>一括査定で相場を把握してから、店頭査定と比較する</strong>のが最も確実に高値を引き出す方法です。上の週次相場表の中央値に対して50〜70%が買取額の目安になります。</p>

          <h3>コツ2: 型番・シリアルナンバーを控えて査定に出す</h3>
          <p>ヘッド裏やネックプレートのシリアル、モデル名がわかると査定がスムーズで、年式による上乗せ評価も受けやすくなります。事前のオンライン査定でも正確な金額が出やすくなります。</p>

          <h3>コツ3: 付属品を揃えてクリーニングする</h3>
          <p>純正ハードケース・保証書・アーム・レンチなどの付属品は査定額に直結します。ボディ・指板の汚れを拭き取り、可能なら弦のサビを落としてから出しましょう。</p>

          <h3>コツ4: 売り時を逃さない</h3>
          <p>新生活シーズン（2〜3月）やボーナス期（6〜7月・12月）は中古ギターの需要が高まります。また、弾かないギターの放置は打痕・ネック反り・サビによる減額リスクを高めるため、売ると決めたら早めの査定がおすすめです。</p>

          <CtaBox />

          <h2 id="faq">__NAME__のギター買取に関するよくある質問</h2>

          <div className="space-y-4 mt-6">
__FAQ_ITEMS__
          </div>

          <h2>まとめ: __NAME__のギター買取は相場を把握してから比較しよう</h2>

          <p>__NAME__でギターを売るなら、まず週次相場表でモデルの実勢価格を把握し、<strong>一括査定＋店頭・出張の比較</strong>で最高値を狙うのが鉄則です。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → ヒカカク！で一括査定</li>
            <li><strong>すぐに現金化したい</strong> → ティファナ or __VISIT__エリアの店頭買取</li>
            <li><strong>機材ごとまとめて売りたい</strong> → ウリエルで出張買取</li>
          </ul>

          <p>査定は完全無料。まずは相場チェックから始めてみてください。</p>

          <CtaBox />
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

FAQ_ITEM_TEMPLATE = '''            <details className="bg-white rounded-xl border border-warm-border overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold">
                <span className="pr-4">__Q__</span>
                <svg className="w-5 h-5 text-warm-gray shrink-0 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-warm-gray leading-relaxed">
                __A__
              </div>
            </details>'''


def build_faqs(c):
    name = c["name"]
    return [
        (
            f"{name}でギターの出張買取は対応していますか？",
            f"はい。{c['outreach']}出張料・査定料は無料の業者がほとんどで、アンプ・エフェクターとのまとめ売りも可能です。",
        ),
        (
            f"弦が切れている・ネックが反っているギターでも{name}で売れますか？",
            "多くの業者で査定対象になります。状態に応じた減額はありますが、Gibson・Fenderなど人気ブランドはジャンク扱いでも値が付くことがあります。修理費が買取額の上昇分を上回ることが多いため、修理せずそのまま無料査定に出すのがおすすめです。",
        ),
        (
            f"{name}のギター買取相場はどこで確認できますか？",
            f"本ページの週次相場表（ヤフオク!落札データの中央値を当サイトが毎週集計）が目安になります。中古ギターの相場は全国のオンライン市場で決まるため、{name}だけ特別に高い・安いということは基本的にありません。買取店の提示額は中央値の概ね50〜70%が目安です。",
        ),
        (
            "ギター1本だけでも買取してもらえますか？",
            "1本から買取可能です。店頭持ち込みならその場で現金化でき、宅配買取なら送料無料の梱包キットを用意している業者もあります。複数本や機材一式なら出張買取でまとめ売りすると交渉しやすくなります。",
        ),
    ]


def build_page(c):
    name = c["name"]
    slug = c["slug"]
    title = f"{name}のギター買取おすすめ3社を比較【2026年7月】高く売るコツと相場"
    desc = (
        f"{name}でギターを売るならどこがいい？エレキ・アコギ対応のおすすめ買取3社を比較。"
        f"Gibson・Fenderなど主要モデルの週次実勢相場、{c['visit']}の持ち込み事情、高く売るコツまで解説。無料査定だけの利用もOK。"
    )
    ogdesc = f"{name}でギターを売るなら。おすすめ3社の比較と主要モデルの週次相場、高く売るコツを解説。"
    lead = (
        f"{name}（{c['pref']}）でギターの買取を検討している方へ。本記事では、{name}で利用できるギター買取おすすめ3社の比較、"
        f"Gibson・Fenderなど主要モデルの週次実勢相場（ヤフオク!落札データを毎週独自集計）、"
        f"店頭・出張・宅配それぞれの売り方、高く売るコツまで解説します。"
    )
    canonical = f"{BASE}/articles/{slug}/"

    faqs = build_faqs(c)
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in faqs
        ],
    }
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
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
            {"@type": "ListItem", "position": 2, "name": "ギター買取", "item": f"{BASE}/articles/guitar-kaitori/"},
            {"@type": "ListItem", "position": 3, "name": f"ギター買取 {name}", "item": canonical},
        ],
    }

    faq_items = "\n".join(
        FAQ_ITEM_TEMPLATE.replace("__Q__", q).replace("__A__", a) for q, a in faqs
    )

    related = [c["generic"]] + c["cross"] + COMMON_RELATED

    outreach_short = c["outreach"].split("。")[0] + "。"

    page = (
        TEMPLATE
        .replace("__CANONICAL__", canonical)
        .replace("__TITLE__", title)
        .replace("__DESC__", desc)
        .replace("__OGDESC__", ogdesc)
        .replace("__LEAD__", lead)
        .replace("__FAQ_SCHEMA__", json.dumps(json.dumps(faq_schema, ensure_ascii=False), ensure_ascii=False))
        .replace("__ARTICLE_SCHEMA__", json.dumps(json.dumps(article_schema, ensure_ascii=False), ensure_ascii=False))
        .replace("__BREADCRUMB_SCHEMA__", json.dumps(json.dumps(breadcrumb_schema, ensure_ascii=False), ensure_ascii=False))
        .replace("__FAQ_ITEMS__", faq_items)
        .replace("__RELATED__", json.dumps(related, ensure_ascii=False))
        .replace("__GENERIC_LABEL__", c["generic_label"])
        .replace("__GENERIC__", c["generic"])
        .replace("__OUTREACH_SHORT__", outreach_short)
        .replace("__OUTREACH__", c["outreach"])
        .replace("__STREET__", c["street"])
        .replace("__VISIT__", c["visit"])
        .replace("__PREF__", c["pref"])
        .replace("__TODAY_JP__", TODAY_JP)
        .replace("__SLUG__", slug)
        .replace("__NAME__", name)
    )
    return page


def patch_generic(c, callout=True):
    """汎用「楽器買取×都市」ページに新ギター専用ページへの導線を追加（冪等）。"""
    path = ARTICLES_DIR / c["generic"] / "page.tsx"
    if not path.exists():
        print(f"  ⚠️ generic missing: {c['generic']}")
        return
    src = path.read_text(encoding="utf-8")
    href = f"/articles/{c['slug']}/"
    changed = False

    # 1) 本文コールアウト（FAQ見出しの直前）
    if callout and href not in src:
        m = re.search(r'^([ \t]*)<h2 id="faq"', src, re.M)
        if not m:
            print(f"  ⚠️ no faq anchor in {c['generic']}")
        else:
            indent = m.group(1)
            callout = (
                f'{indent}<div className="bg-gold/10 border border-warm-border rounded-xl p-5 my-8">\n'
                f'{indent}  <p className="font-bold text-sm mb-1">ギターを売るなら専用ガイドへ</p>\n'
                f'{indent}  <p className="text-sm text-warm-gray mb-2">Gibson・Fender・Ibanezなどギターの売却が目的なら、主要モデルの週次相場表つきの専用ページで詳しく解説しています。</p>\n'
                f'{indent}  <Link href="{href}" className="text-accent font-medium text-sm hover:underline">{c["name"]}のギター買取おすすめ3社と相場を見る →</Link>\n'
                f'{indent}</div>\n\n'
            )
            src = src[: m.start()] + callout + src[m.start():]
            changed = True

    # 2) RelatedArticles にも追加
    if f'"{c["slug"]}"' not in src and 'relatedSlugs={["' in src:
        src = src.replace('relatedSlugs={["', f'relatedSlugs={{["{c["slug"]}", "', 1)
        changed = True

    if changed:
        path.write_text(src, encoding="utf-8")
        print(f"  🔗 patched generic: {c['generic']} -> {c['slug']}")
    else:
        print(f"  skip generic (already linked): {c['generic']}")


def patch_hub():
    """guitar-kaitori ハブに都市チップ導線を追加（冪等）。"""
    path = ARTICLES_DIR / "guitar-kaitori" / "page.tsx"
    src = path.read_text(encoding="utf-8")
    if "guitar-kaitori-nagoya" in src:
        print("  skip hub (already has city chips)")
        return
    m = re.search(r'^([ \t]*)<h2 id="faq"', src, re.M)
    if not m:
        print("  ⚠️ no faq anchor in guitar-kaitori hub")
        return
    indent = m.group(1)
    chips = "\n".join(
        f'{indent}  <Link href="/articles/{c["slug"]}/" className="bg-cream border border-warm-border rounded-full px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors">{c["name"]}</Link>'
        for c in CITIES
    )
    block = (
        f'{indent}<h2>都市別のギター買取ガイド</h2>\n'
        f'{indent}<p>お住まいの都市でのギターの売り方（出張・店頭・宅配）とおすすめ3社は、都市別の専用ガイドで解説しています。主要モデルの週次相場表つきです。</p>\n'
        f'{indent}<div className="flex flex-wrap gap-2 my-4">\n'
        f'{chips}\n'
        f'{indent}</div>\n\n'
    )
    src = src[: m.start()] + block + src[m.start():]
    if "import Link" not in src:
        src = src.replace('import type { Metadata } from "next";', 'import type { Metadata } from "next";\nimport Link from "next/link";', 1)
    path.write_text(src, encoding="utf-8")
    print("  🔗 patched hub: guitar-kaitori city chips x", len(CITIES))


def main():
    meta = json.load(open(META, encoding="utf-8"))
    existing = {a["slug"] for a in meta}
    added = []
    patched_generics = set()
    for c in CITIES:
        d = ARTICLES_DIR / c["slug"]
        if c["slug"] in existing or d.exists():
            print(f"  skip page: {c['slug']}")
        else:
            d.mkdir(parents=True, exist_ok=True)
            (d / "page.tsx").write_text(build_page(c), encoding="utf-8")
            meta.append({
                "slug": c["slug"],
                "title": f"{c['name']}のギター買取おすすめ3社比較",
                "shortTitle": f"ギター買取 {c['name']}",
                "badge": f"{c['name']}×ギター",
                "description": f"{c['name']}のギター買取おすすめ3社と主要モデルの週次実勢相場、高く売るコツを解説。",
                "category": "region",
            })
            added.append(c["slug"])
            print(f"  ✅ {c['slug']} ({c['name']})")
        # 同じ汎用ページを複数都市が共有する場合（例: 愛知→nagoya）はコールアウトは1つだけ
        patch_generic(c, callout=c["generic"] not in patched_generics)
        patched_generics.add(c["generic"])
    patch_hub()
    json.dump(meta, open(META, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"\ngenerated: {len(added)}  metadata total: {len(meta)}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Phase 2: 全122記事への関連記事セクション挿入
- data/articles-metadata.json を生成
- 各記事の page.tsx の関連記事 <aside> ブロックを <RelatedArticles> に置換
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
DATA_DIR = ROOT / "data"
DATA_DIR.mkdir(exist_ok=True)
METADATA_PATH = DATA_DIR / "articles-metadata.json"

# ---------------------------------------------------------------------------
# 1. 記事分類定義
# ---------------------------------------------------------------------------

INSTRUMENT_SLUGS: dict[str, dict] = {
    "piano-kaitori": {"badge": "ピアノ買取", "shortTitle": "ピアノ買取おすすめ3社比較", "description": "グランド・アップライト・電子の相場とおすすめ業者を比較。"},
    "grand-piano-kaitori": {"badge": "グランドピアノ", "shortTitle": "グランドピアノ買取相場ガイド", "description": "サイズ別買取相場と高額査定のコツを徹底解説。"},
    "denshi-piano-kaitori": {"badge": "電子ピアノ", "shortTitle": "電子ピアノ買取相場ガイド", "description": "YAMAHA・Roland・KAWAI のモデル別買取相場まとめ。"},
    "guitar-kaitori": {"badge": "ギター買取", "shortTitle": "ギター買取おすすめ3社比較", "description": "エレキ・アコギの相場と人気業者を徹底比較。"},
    "bass-kaitori": {"badge": "ベース買取", "shortTitle": "ベース買取相場ガイド", "description": "Fender・MUSIC MAN など人気ブランドの査定額を解説。"},
    "violin-kaitori": {"badge": "バイオリン買取", "shortTitle": "バイオリン買取相場ガイド", "description": "Suzuki・ヨーロッパ製まで査定額の目安を紹介。"},
    "cello-kaitori": {"badge": "チェロ買取", "shortTitle": "チェロ買取相場ガイド", "description": "Suzuki・Eastman など主要モデルの相場一覧。"},
    "contrabass-kaitori": {"badge": "コントラバス買取", "shortTitle": "コントラバス買取ガイド", "description": "ジャズ向け・オーケストラ向け別の買取目安。"},
    "harp-kaitori": {"badge": "ハープ買取", "shortTitle": "ハープ買取相場ガイド", "description": "アイリッシュ・ペダルハープの相場を解説。"},
    "drum-kaitori": {"badge": "ドラム買取", "shortTitle": "ドラム買取おすすめ3社比較", "description": "Pearl・YAMAHA・Ludwig のセット買取相場。"},
    "saxophone-kaitori": {"badge": "サックス買取", "shortTitle": "サックス買取おすすめ3社比較", "description": "Selmer・YAMAHA・Yanagisawa の査定額目安。"},
    "trumpet-kaitori": {"badge": "トランペット買取", "shortTitle": "トランペット買取相場ガイド", "description": "Bach・YAMAHA・Schilke の人気モデル相場。"},
    "trombone-kaitori": {"badge": "トロンボーン買取", "shortTitle": "トロンボーン買取相場ガイド", "description": "YAMAHA・Bach・King など型番別の目安。"},
    "flute-kaitori": {"badge": "フルート買取", "shortTitle": "フルート買取相場ガイド", "description": "Sankyo・Muramatsu の中古買取相場まとめ。"},
    "clarinet-kaitori": {"badge": "クラリネット買取", "shortTitle": "クラリネット買取相場ガイド", "description": "Buffet Crampon・YAMAHA の査定相場を解説。"},
    "oboe-kaitori": {"badge": "オーボエ買取", "shortTitle": "オーボエ買取相場ガイド", "description": "ロレー・マリゴ・YAMAHA の買取相場目安。"},
    "keyboard-kaitori": {"badge": "キーボード買取", "shortTitle": "キーボード買取相場ガイド", "description": "YAMAHA・Roland・KORG のステージピアノ相場。"},
    "midi-keyboard-kaitori": {"badge": "MIDIキーボード", "shortTitle": "MIDIキーボード買取ガイド", "description": "AKAI・Native Instruments の中古相場を解説。"},
    "synthesizer-kaitori": {"badge": "シンセ買取", "shortTitle": "シンセサイザー買取相場ガイド", "description": "Moog・Sequential・Roland のヴィンテージ相場も。"},
    "effector-kaitori": {"badge": "エフェクター", "shortTitle": "エフェクター買取相場ガイド", "description": "BOSS・Strymon・Eventide のペダル買取相場。"},
    "guitar-amp-kaitori": {"badge": "ギターアンプ", "shortTitle": "ギターアンプ買取相場ガイド", "description": "Marshall・Fender・VOX の真空管アンプ相場。"},
    "audio-interface-kaitori": {"badge": "オーディオIF", "shortTitle": "オーディオインターフェース買取ガイド", "description": "RME・Apogee・Universal Audio のDAW機材相場。"},
    "microphone-kaitori": {"badge": "マイク買取", "shortTitle": "マイク買取相場ガイド", "description": "Shure・SENNHEISER・NEUMANN の人気モデル相場。"},
    "dj-kizai-kaitori": {"badge": "DJ機材買取", "shortTitle": "DJ機材買取相場ガイド", "description": "Pioneer DJ・Native Instruments の買取目安。"},
    "wadaiko-kaitori": {"badge": "和太鼓買取", "shortTitle": "和太鼓買取相場ガイド", "description": "長胴太鼓・桶胴太鼓の中古買取の目安を解説。"},
    "koto-kaitori": {"badge": "琴買取", "shortTitle": "琴(箏)買取相場ガイド", "description": "13絃・17絃の琴の買取相場と注意点。"},
    "shamisen-kaitori": {"badge": "三味線買取", "shortTitle": "三味線買取相場ガイド", "description": "津軽・地唄・長唄の種類別買取相場を解説。"},
    "shakuhachi-kaitori": {"badge": "尺八買取", "shortTitle": "尺八買取相場ガイド", "description": "1尺8寸・地無し管の中古買取の目安。"},
    "ihin-gakki-kaitori": {"badge": "遺品楽器", "shortTitle": "遺品の楽器買取ガイド", "description": "遺品整理に伴う楽器買取の進め方を解説。"},
    "kowareta-gakki-kaitori": {"badge": "壊れた楽器", "shortTitle": "壊れた楽器の買取ガイド", "description": "ジャンク楽器・部品取り買取の相場を解説。"},
    "kabi-gakki-kaitori": {"badge": "カビ・劣化", "shortTitle": "カビ・劣化楽器の買取ガイド", "description": "カビた楽器でも買取可能か、相場と対処法。"},
}

BRAND_SLUGS: dict[str, dict] = {
    "yamaha-kaitori": {"badge": "YAMAHA買取", "shortTitle": "YAMAHA楽器の買取相場まとめ", "description": "ピアノ・ギター・管楽器までブランド横断で解説。", "instrument": ["piano-kaitori", "guitar-kaitori", "saxophone-kaitori", "trumpet-kaitori", "denshi-piano-kaitori"]},
    "kawai-kaitori": {"badge": "KAWAI買取", "shortTitle": "KAWAI(カワイ)買取相場ガイド", "description": "アップライト・グランド・電子ピアノの査定額。", "instrument": ["piano-kaitori", "grand-piano-kaitori", "denshi-piano-kaitori"]},
    "steinway-kaitori": {"badge": "Steinway買取", "shortTitle": "スタインウェイ買取相場", "description": "Model B・D の高額査定ポイントを解説。", "instrument": ["piano-kaitori", "grand-piano-kaitori"]},
    "bosendorfer-kaitori": {"badge": "Bosendorfer", "shortTitle": "ベーゼンドルファー買取ガイド", "description": "ウィーン製名門ピアノの買取相場。", "instrument": ["piano-kaitori", "grand-piano-kaitori"]},
    "casio-kaitori": {"badge": "CASIO買取", "shortTitle": "CASIO電子楽器買取ガイド", "description": "Privia・CDPシリーズの中古買取相場。", "instrument": ["denshi-piano-kaitori", "keyboard-kaitori"]},
    "korg-kaitori": {"badge": "KORG買取", "shortTitle": "KORG買取相場ガイド", "description": "シンセ・キーボードの主要モデル相場。", "instrument": ["synthesizer-kaitori", "keyboard-kaitori", "midi-keyboard-kaitori"]},
    "roland-kaitori": {"badge": "Roland買取", "shortTitle": "Roland買取相場ガイド", "description": "電子ピアノ・シンセ・電子ドラムの査定額。", "instrument": ["denshi-piano-kaitori", "synthesizer-kaitori", "keyboard-kaitori", "drum-kaitori"]},
    "fender-kaitori": {"badge": "Fender買取", "shortTitle": "Fender(フェンダー)買取相場", "description": "Strat・Tele・ジャズベの査定額目安。", "instrument": ["guitar-kaitori", "bass-kaitori", "guitar-amp-kaitori"]},
    "gibson-kaitori": {"badge": "Gibson買取", "shortTitle": "Gibson(ギブソン)買取相場", "description": "Les Paul・SG・ES-335 の人気モデル相場。", "instrument": ["guitar-kaitori"]},
    "martin-kaitori": {"badge": "Martin買取", "shortTitle": "Martin(マーチン)買取相場", "description": "D-28・OM・000 のアコギ買取の目安。", "instrument": ["guitar-kaitori"]},
    "ibanez-kaitori": {"badge": "Ibanez買取", "shortTitle": "Ibanez(アイバニーズ)買取ガイド", "description": "RG・Prestige・Steve Vai モデルの相場。", "instrument": ["guitar-kaitori", "bass-kaitori"]},
    "marshall-kaitori": {"badge": "Marshall", "shortTitle": "Marshall買取相場ガイド", "description": "JCM・Plexi の真空管アンプ買取の目安。", "instrument": ["guitar-amp-kaitori", "guitar-kaitori"]},
    "vox-kaitori": {"badge": "VOX買取", "shortTitle": "VOX買取相場ガイド", "description": "AC30 などの真空管アンプ買取相場。", "instrument": ["guitar-amp-kaitori", "guitar-kaitori"]},
    "boss-kaitori": {"badge": "BOSS買取", "shortTitle": "BOSS買取相場ガイド", "description": "コンパクトエフェクター・マルチの相場一覧。", "instrument": ["effector-kaitori", "guitar-kaitori"]},
    "selmer-kaitori": {"badge": "Selmer買取", "shortTitle": "Selmer(セルマー)買取相場", "description": "Mark VI・Series II/III の高額査定ポイント。", "instrument": ["saxophone-kaitori"]},
    "yanagisawa-kaitori": {"badge": "Yanagisawa", "shortTitle": "ヤナギサワ買取相場ガイド", "description": "ソプラノ・アルト・テナーの査定額目安。", "instrument": ["saxophone-kaitori"]},
    "bach-kaitori": {"badge": "Bach買取", "shortTitle": "Bach(バック)買取相場", "description": "Strad モデルのトランペット買取相場。", "instrument": ["trumpet-kaitori", "trombone-kaitori"]},
    "buffet-kaitori": {"badge": "Buffet買取", "shortTitle": "Buffet Crampon 買取相場", "description": "R13・Tosca などのクラリネット買取目安。", "instrument": ["clarinet-kaitori"]},
    "pearl-kaitori": {"badge": "Pearl買取", "shortTitle": "Pearl(パール)買取相場", "description": "Master・Reference のドラムセット買取相場。", "instrument": ["drum-kaitori"]},
    "ludwig-kaitori": {"badge": "Ludwig買取", "shortTitle": "Ludwig(ラディック)買取相場", "description": "Black Beauty 等のヴィンテージドラム相場。", "instrument": ["drum-kaitori"]},
    "sonor-kaitori": {"badge": "Sonor買取", "shortTitle": "Sonor(ソナー)買取相場", "description": "SQ2・Phonic のドラムセット買取相場。", "instrument": ["drum-kaitori"]},
    "shure-kaitori": {"badge": "Shure買取", "shortTitle": "Shure(シュア)買取相場", "description": "SM58・KSM・PSM の中古買取相場目安。", "instrument": ["microphone-kaitori"]},
    "sennheiser-kaitori": {"badge": "SENNHEISER", "shortTitle": "ゼンハイザー買取相場", "description": "MD/MK・HD の中古買取相場の目安。", "instrument": ["microphone-kaitori"]},
}

REGION_SLUGS: dict[str, dict] = {
    "tokyo-gakki-kaitori": {"badge": "東京", "shortTitle": "楽器買取 東京おすすめ3選", "description": "東京エリアの出張・店頭買取業者を比較。", "neighbors": ["ochanomizu-gakki-kaitori", "shibuya-gakki-kaitori", "shinjuku-gakki-kaitori", "ikebukuro-gakki-kaitori", "hachioji-gakki-kaitori", "machida-gakki-kaitori", "tachikawa-gakki-kaitori", "tama-kaitori"]},
    "ochanomizu-gakki-kaitori": {"badge": "御茶ノ水", "shortTitle": "楽器買取 御茶ノ水おすすめ3選", "description": "楽器街の御茶ノ水で最高値を狙う。", "neighbors": ["tokyo-gakki-kaitori", "shibuya-gakki-kaitori", "shinjuku-gakki-kaitori", "ikebukuro-gakki-kaitori"]},
    "shibuya-gakki-kaitori": {"badge": "渋谷", "shortTitle": "楽器買取 渋谷おすすめ3選", "description": "渋谷エリアの出張・店頭買取を徹底比較。", "neighbors": ["tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori", "shinjuku-gakki-kaitori", "ikebukuro-gakki-kaitori"]},
    "shinjuku-gakki-kaitori": {"badge": "新宿", "shortTitle": "楽器買取 新宿おすすめ3選", "description": "新宿の楽器買取業者と相場を比較。", "neighbors": ["tokyo-gakki-kaitori", "shibuya-gakki-kaitori", "ochanomizu-gakki-kaitori", "ikebukuro-gakki-kaitori"]},
    "ikebukuro-gakki-kaitori": {"badge": "池袋", "shortTitle": "楽器買取 池袋おすすめ3選", "description": "池袋エリアの買取業者を徹底ガイド。", "neighbors": ["tokyo-gakki-kaitori", "shinjuku-gakki-kaitori", "ochanomizu-gakki-kaitori", "shibuya-gakki-kaitori"]},
    "hachioji-gakki-kaitori": {"badge": "八王子", "shortTitle": "楽器買取 八王子おすすめ3選", "description": "多摩・八王子の出張買取の選び方。", "neighbors": ["tokyo-gakki-kaitori", "tachikawa-gakki-kaitori", "machida-gakki-kaitori", "tama-kaitori"]},
    "machida-gakki-kaitori": {"badge": "町田", "shortTitle": "楽器買取 町田おすすめ3選", "description": "町田・神奈川北部の楽器買取を比較。", "neighbors": ["tokyo-gakki-kaitori", "yokohama-gakki-kaitori", "hachioji-gakki-kaitori", "tachikawa-gakki-kaitori"]},
    "tachikawa-gakki-kaitori": {"badge": "立川", "shortTitle": "楽器買取 立川おすすめ3選", "description": "立川・多摩エリアの買取業者まとめ。", "neighbors": ["tokyo-gakki-kaitori", "hachioji-gakki-kaitori", "machida-gakki-kaitori", "tama-kaitori"]},
    "tama-kaitori": {"badge": "多摩", "shortTitle": "楽器買取 多摩エリアおすすめ", "description": "多摩地域全体の買取業者を比較。", "neighbors": ["tokyo-gakki-kaitori", "tachikawa-gakki-kaitori", "machida-gakki-kaitori", "hachioji-gakki-kaitori"]},
    "yokohama-gakki-kaitori": {"badge": "横浜", "shortTitle": "楽器買取 横浜おすすめ3選", "description": "横浜エリアの出張・店頭買取を比較。", "neighbors": ["kawasaki-gakki-kaitori", "machida-gakki-kaitori", "tokyo-gakki-kaitori", "chiba-gakki-kaitori"]},
    "kawasaki-gakki-kaitori": {"badge": "川崎", "shortTitle": "楽器買取 川崎おすすめ3選", "description": "川崎・神奈川東部の買取相場を比較。", "neighbors": ["yokohama-gakki-kaitori", "tokyo-gakki-kaitori", "shibuya-gakki-kaitori", "machida-gakki-kaitori"]},
    "chiba-gakki-kaitori": {"badge": "千葉", "shortTitle": "楽器買取 千葉おすすめ3選", "description": "千葉県全域の出張買取を比較。", "neighbors": ["matsudo-gakki-kaitori", "tokyo-gakki-kaitori", "kashiwa-gakki-kaitori", "yokohama-gakki-kaitori"]},
    "matsudo-gakki-kaitori": {"badge": "松戸", "shortTitle": "楽器買取 松戸おすすめ3選", "description": "松戸・千葉県西部の楽器買取ガイド。", "neighbors": ["chiba-gakki-kaitori", "kashiwa-gakki-kaitori", "tokyo-gakki-kaitori", "omiya-gakki-kaitori"]},
    "kashiwa-gakki-kaitori": {"badge": "柏", "shortTitle": "楽器買取 柏おすすめ3選", "description": "柏・千葉北西部の楽器買取を比較。", "neighbors": ["matsudo-gakki-kaitori", "chiba-gakki-kaitori", "tokyo-gakki-kaitori", "omiya-gakki-kaitori"]},
    "omiya-gakki-kaitori": {"badge": "大宮", "shortTitle": "楽器買取 大宮おすすめ3選", "description": "大宮・さいたま市の楽器買取ガイド。", "neighbors": ["kawaguchi-gakki-kaitori", "tokyo-gakki-kaitori", "ikebukuro-gakki-kaitori", "matsudo-gakki-kaitori"]},
    "kawaguchi-gakki-kaitori": {"badge": "川口", "shortTitle": "楽器買取 川口おすすめ3選", "description": "川口・埼玉南部の出張買取を比較。", "neighbors": ["omiya-gakki-kaitori", "tokyo-gakki-kaitori", "ikebukuro-gakki-kaitori", "kashiwa-gakki-kaitori"]},
    "osaka-gakki-kaitori": {"badge": "大阪", "shortTitle": "楽器買取 大阪おすすめ3選", "description": "大阪府全域の出張・店頭買取を比較。", "neighbors": ["umeda-gakki-kaitori", "namba-gakki-kaitori", "kobe-gakki-kaitori", "kyoto-gakki-kaitori"]},
    "umeda-gakki-kaitori": {"badge": "梅田", "shortTitle": "楽器買取 梅田おすすめ3選", "description": "梅田・大阪市北部の楽器買取を比較。", "neighbors": ["osaka-gakki-kaitori", "namba-gakki-kaitori", "kobe-gakki-kaitori", "kyoto-gakki-kaitori"]},
    "namba-gakki-kaitori": {"badge": "難波", "shortTitle": "楽器買取 難波おすすめ3選", "description": "難波・心斎橋エリアの楽器買取ガイド。", "neighbors": ["osaka-gakki-kaitori", "umeda-gakki-kaitori", "kobe-gakki-kaitori", "kyoto-gakki-kaitori"]},
    "kobe-gakki-kaitori": {"badge": "神戸", "shortTitle": "楽器買取 神戸おすすめ3選", "description": "神戸市全域の出張・店頭買取を比較。", "neighbors": ["kobe-sannomiya-gakki-kaitori", "osaka-gakki-kaitori", "umeda-gakki-kaitori", "kyoto-gakki-kaitori"]},
    "kobe-sannomiya-gakki-kaitori": {"badge": "三宮", "shortTitle": "楽器買取 神戸三宮おすすめ3選", "description": "三宮エリアの楽器買取業者を比較。", "neighbors": ["kobe-gakki-kaitori", "osaka-gakki-kaitori", "umeda-gakki-kaitori", "namba-gakki-kaitori"]},
    "kyoto-gakki-kaitori": {"badge": "京都", "shortTitle": "楽器買取 京都おすすめ3選", "description": "京都市内の出張・店頭買取を比較。", "neighbors": ["kyoto-shijo-gakki-kaitori", "osaka-gakki-kaitori", "kobe-gakki-kaitori", "umeda-gakki-kaitori"]},
    "kyoto-shijo-gakki-kaitori": {"badge": "京都四条", "shortTitle": "楽器買取 京都四条おすすめ3選", "description": "京都四条・河原町エリアの買取ガイド。", "neighbors": ["kyoto-gakki-kaitori", "osaka-gakki-kaitori", "kobe-gakki-kaitori", "umeda-gakki-kaitori"]},
    "nagoya-gakki-kaitori": {"badge": "名古屋", "shortTitle": "楽器買取 名古屋おすすめ3選", "description": "名古屋市内の出張・店頭買取を比較。", "neighbors": ["gifu-gakki-kaitori", "hamamatsu-gakki-kaitori", "shizuoka-gakki-kaitori", "osaka-gakki-kaitori"]},
    "gifu-gakki-kaitori": {"badge": "岐阜", "shortTitle": "楽器買取 岐阜おすすめ3選", "description": "岐阜県の楽器買取業者を徹底比較。", "neighbors": ["nagoya-gakki-kaitori", "hamamatsu-gakki-kaitori", "kanazawa-gakki-kaitori", "shizuoka-gakki-kaitori"]},
    "hamamatsu-gakki-kaitori": {"badge": "浜松", "shortTitle": "楽器買取 浜松おすすめ3選", "description": "楽器の街・浜松の買取業者をまとめて比較。", "neighbors": ["shizuoka-gakki-kaitori", "nagoya-gakki-kaitori", "gifu-gakki-kaitori", "tokyo-gakki-kaitori"]},
    "shizuoka-gakki-kaitori": {"badge": "静岡", "shortTitle": "楽器買取 静岡おすすめ3選", "description": "静岡県内の楽器買取を比較。", "neighbors": ["hamamatsu-gakki-kaitori", "nagoya-gakki-kaitori", "tokyo-gakki-kaitori", "gifu-gakki-kaitori"]},
    "kanazawa-gakki-kaitori": {"badge": "金沢", "shortTitle": "楽器買取 金沢おすすめ3選", "description": "金沢・北陸エリアの楽器買取ガイド。", "neighbors": ["toyama-gakki-kaitori", "gifu-gakki-kaitori", "nagoya-gakki-kaitori", "osaka-gakki-kaitori"]},
    "toyama-gakki-kaitori": {"badge": "富山", "shortTitle": "楽器買取 富山おすすめ3選", "description": "富山県・北陸の楽器買取を比較。", "neighbors": ["kanazawa-gakki-kaitori", "gifu-gakki-kaitori", "nagoya-gakki-kaitori", "osaka-gakki-kaitori"]},
    "sapporo-gakki-kaitori": {"badge": "札幌", "shortTitle": "楽器買取 札幌おすすめ3選", "description": "札幌・北海道の楽器買取業者を比較。", "neighbors": ["morioka-gakki-kaitori", "sendai-gakki-kaitori", "tokyo-gakki-kaitori", "yamagata-gakki-kaitori"]},
    "morioka-gakki-kaitori": {"badge": "盛岡", "shortTitle": "楽器買取 盛岡おすすめ3選", "description": "盛岡・岩手県の楽器買取を比較。", "neighbors": ["sendai-gakki-kaitori", "sapporo-gakki-kaitori", "yamagata-gakki-kaitori", "fukushima-gakki-kaitori"]},
    "sendai-gakki-kaitori": {"badge": "仙台", "shortTitle": "楽器買取 仙台おすすめ3選", "description": "仙台・宮城県の楽器買取業者を比較。", "neighbors": ["morioka-gakki-kaitori", "yamagata-gakki-kaitori", "fukushima-gakki-kaitori", "tokyo-gakki-kaitori"]},
    "yamagata-gakki-kaitori": {"badge": "山形", "shortTitle": "楽器買取 山形おすすめ3選", "description": "山形県全域の楽器買取を比較。", "neighbors": ["sendai-gakki-kaitori", "morioka-gakki-kaitori", "fukushima-gakki-kaitori", "tokyo-gakki-kaitori"]},
    "fukushima-gakki-kaitori": {"badge": "福島", "shortTitle": "楽器買取 福島おすすめ3選", "description": "福島県内の出張・店頭買取を比較。", "neighbors": ["sendai-gakki-kaitori", "yamagata-gakki-kaitori", "morioka-gakki-kaitori", "tokyo-gakki-kaitori"]},
    "hiroshima-gakki-kaitori": {"badge": "広島", "shortTitle": "楽器買取 広島おすすめ3選", "description": "広島・中国地方の楽器買取ガイド。", "neighbors": ["takamatsu-gakki-kaitori", "matsuyama-gakki-kaitori", "kitakyushu-gakki-kaitori", "fukuoka-gakki-kaitori"]},
    "fukuoka-gakki-kaitori": {"badge": "福岡", "shortTitle": "楽器買取 福岡おすすめ3選", "description": "福岡・九州北部の楽器買取を比較。", "neighbors": ["kitakyushu-gakki-kaitori", "kumamoto-gakki-kaitori", "kagoshima-gakki-kaitori", "hiroshima-gakki-kaitori"]},
    "kitakyushu-gakki-kaitori": {"badge": "北九州", "shortTitle": "楽器買取 北九州おすすめ3選", "description": "北九州・福岡県北部の楽器買取ガイド。", "neighbors": ["fukuoka-gakki-kaitori", "kumamoto-gakki-kaitori", "hiroshima-gakki-kaitori", "kagoshima-gakki-kaitori"]},
    "kumamoto-gakki-kaitori": {"badge": "熊本", "shortTitle": "楽器買取 熊本おすすめ3選", "description": "熊本・九州中部の楽器買取を比較。", "neighbors": ["fukuoka-gakki-kaitori", "kagoshima-gakki-kaitori", "kitakyushu-gakki-kaitori", "naha-gakki-kaitori"]},
    "kagoshima-gakki-kaitori": {"badge": "鹿児島", "shortTitle": "楽器買取 鹿児島おすすめ3選", "description": "鹿児島・九州南部の楽器買取ガイド。", "neighbors": ["kumamoto-gakki-kaitori", "fukuoka-gakki-kaitori", "naha-gakki-kaitori", "kitakyushu-gakki-kaitori"]},
    "naha-gakki-kaitori": {"badge": "那覇", "shortTitle": "楽器買取 那覇おすすめ3選", "description": "沖縄・那覇の楽器買取業者を比較。", "neighbors": ["kagoshima-gakki-kaitori", "kumamoto-gakki-kaitori", "fukuoka-gakki-kaitori", "kitakyushu-gakki-kaitori"]},
    "takamatsu-gakki-kaitori": {"badge": "高松", "shortTitle": "楽器買取 高松おすすめ3選", "description": "高松・四国の楽器買取ガイド。", "neighbors": ["matsuyama-gakki-kaitori", "kochi-gakki-kaitori", "hiroshima-gakki-kaitori", "osaka-gakki-kaitori"]},
    "matsuyama-gakki-kaitori": {"badge": "松山", "shortTitle": "楽器買取 松山おすすめ3選", "description": "松山・愛媛県の楽器買取を比較。", "neighbors": ["takamatsu-gakki-kaitori", "kochi-gakki-kaitori", "hiroshima-gakki-kaitori", "fukuoka-gakki-kaitori"]},
    "kochi-gakki-kaitori": {"badge": "高知", "shortTitle": "楽器買取 高知おすすめ3選", "description": "高知県内の楽器買取業者を比較。", "neighbors": ["matsuyama-gakki-kaitori", "takamatsu-gakki-kaitori", "osaka-gakki-kaitori", "hiroshima-gakki-kaitori"]},
}

HOWTO_SLUGS: dict[str, dict] = {
    "takaku-uru-kotsu": {"badge": "高く売るコツ", "shortTitle": "楽器を高く売る5つのコツ", "description": "相見積もり・付属品など売却前の必須準備。"},
    "souba-ichiran": {"badge": "相場一覧", "shortTitle": "楽器買取相場一覧まとめ", "description": "全カテゴリの相場を一覧で比較できる。"},
    "kaitori-houhou-hikaku": {"badge": "買取方法", "shortTitle": "出張・宅配・店頭 買取方法比較", "description": "3つの買取方法のメリットデメリットを比較。"},
    "kaitori-houshiki-tetteihikaku": {"badge": "方式比較", "shortTitle": "買取方式 徹底比較ガイド", "description": "業者選びで失敗しないための基礎知識。"},
    "kaitori-nagare": {"badge": "買取の流れ", "shortTitle": "楽器買取の流れガイド", "description": "問い合わせから入金まで全ステップを解説。"},
    "satei-yomikata": {"badge": "査定書", "shortTitle": "査定書の読み方ガイド", "description": "査定額の根拠と内訳をチェックするポイント。"},
    "kougaku-satei-ranking": {"badge": "高額査定", "shortTitle": "高額査定ランキング", "description": "高額査定が出やすい楽器ジャンルのランキング。"},
    "gakki-kaitori-sagi": {"badge": "詐欺対策", "shortTitle": "楽器買取詐欺の見分け方", "description": "悪質業者を見抜く7つのチェックポイント。"},
    "gakki-kaitori-vs-kojin-baibai": {"badge": "業者 vs 個人", "shortTitle": "業者買取 vs 個人売買 比較", "description": "メルカリ・ヤフオクと業者買取の違いを解説。"},
    "mercari-vs-gyosha": {"badge": "メルカリ比較", "shortTitle": "メルカリ vs 業者買取", "description": "手数料・手間・スピードを徹底比較。"},
    "senmonten-vs-recycle": {"badge": "専門店比較", "shortTitle": "専門店 vs リサイクル比較", "description": "楽器専門店と総合リサイクルの違いを解説。"},
    "hitsuyou-shorui": {"badge": "必要書類", "shortTitle": "買取に必要な書類まとめ", "description": "本人確認・領収書など必要な書類リスト。"},
    "mibunsho-hitsuyou": {"badge": "身分証", "shortTitle": "買取時の身分証ガイド", "description": "古物営業法で必要となる身分証の種類。"},
    "miseinen-baikyaku": {"badge": "未成年", "shortTitle": "未成年の楽器売却ガイド", "description": "未成年でも楽器を売る方法と注意点。"},
    "gakki-danshari": {"badge": "断捨離", "shortTitle": "楽器の断捨離ガイド", "description": "使わなくなった楽器の整理と売却術。"},
    "gakki-shobun-houhou": {"badge": "処分方法", "shortTitle": "楽器の処分方法まとめ", "description": "粗大ごみ・寄付・買取の選び方を比較。"},
    "hikkoshi-gakki-shobun": {"badge": "引っ越し", "shortTitle": "引っ越し時の楽器処分", "description": "引っ越し前に楽器を売る・処分する手順。"},
    "souko-seiri-gakki": {"badge": "倉庫整理", "shortTitle": "倉庫・物置の楽器整理", "description": "長期保管した楽器のチェックと売却術。"},
    "oya-gakki-seiri": {"badge": "実家整理", "shortTitle": "実家の楽器整理ガイド", "description": "実家にある楽器を整理して売る進め方。"},
    "daigaku-sotsugyo-gakki": {"badge": "大学卒業", "shortTitle": "大学卒業時の楽器売却", "description": "サークル引退時の楽器売却タイミング。"},
    "kodomo-piano-yameta": {"badge": "子供ピアノ", "shortTitle": "子供がピアノをやめた時", "description": "使わなくなった子供のピアノの売り方。"},
    "shumi-yameta-gakki": {"badge": "趣味終了", "shortTitle": "趣味をやめた楽器の売却", "description": "弾かなくなった楽器を売るベストタイミング。"},
    "renshu-shinai-gakki": {"badge": "練習しない", "shortTitle": "練習しない楽器の処分", "description": "眠っている楽器の活用と売却術。"},
    "band-kaisan-kizai": {"badge": "バンド解散", "shortTitle": "バンド解散時の機材売却", "description": "解散後の機材分配と売却の進め方。"},
    "matome-uri-kaitori": {"badge": "まとめ売り", "shortTitle": "楽器まとめ売り買取ガイド", "description": "複数楽器を一括売却するメリットを解説。"},
}

# ---------------------------------------------------------------------------
# 2. 各カテゴリのリンク先計算
# ---------------------------------------------------------------------------

# 楽器カテゴリ ↔ ブランドの逆引き
INSTRUMENT_TO_BRANDS: dict[str, list[str]] = {}
for brand_slug, brand_info in BRAND_SLUGS.items():
    for inst in brand_info.get("instrument", []):
        INSTRUMENT_TO_BRANDS.setdefault(inst, []).append(brand_slug)

# 主要楽器（地域系・HOW-TO系のリンク先で使う）
PRIMARY_INSTRUMENTS = [
    "piano-kaitori", "guitar-kaitori", "drum-kaitori",
    "saxophone-kaitori", "violin-kaitori", "denshi-piano-kaitori",
    "trumpet-kaitori", "flute-kaitori",
]

# 主要HOW-TO（楽器・ブランド・地域系のリンク先で使う）
PRIMARY_HOWTOS = [
    "takaku-uru-kotsu", "souba-ichiran", "kaitori-houhou-hikaku",
    "kaitori-nagare",
]

# 主要地域（楽器・ブランド系のリンク先で使う）
PRIMARY_REGIONS = [
    "tokyo-gakki-kaitori", "ochanomizu-gakki-kaitori",
    "osaka-gakki-kaitori", "nagoya-gakki-kaitori",
]


def compute_related(slug: str) -> list[str]:
    """指定slugに対する関連記事slugリストを返す。10-15本目安。"""
    related: list[str] = []
    seen: set[str] = {slug}

    def add(*slugs: str):
        for s in slugs:
            if s in seen:
                continue
            if s not in ALL_META:
                continue
            related.append(s)
            seen.add(s)

    if slug in INSTRUMENT_SLUGS:
        # 1. 関連楽器カテゴリ（ピアノ⇄電子ピアノ等）
        if slug == "piano-kaitori":
            add("grand-piano-kaitori", "denshi-piano-kaitori", "keyboard-kaitori")
        elif slug == "grand-piano-kaitori":
            add("piano-kaitori", "denshi-piano-kaitori")
        elif slug == "denshi-piano-kaitori":
            add("piano-kaitori", "keyboard-kaitori", "midi-keyboard-kaitori")
        elif slug == "guitar-kaitori":
            add("bass-kaitori", "guitar-amp-kaitori", "effector-kaitori")
        elif slug == "bass-kaitori":
            add("guitar-kaitori", "guitar-amp-kaitori")
        elif slug == "violin-kaitori":
            add("cello-kaitori", "contrabass-kaitori")
        elif slug == "cello-kaitori":
            add("violin-kaitori", "contrabass-kaitori")
        elif slug == "contrabass-kaitori":
            add("violin-kaitori", "cello-kaitori", "bass-kaitori")
        elif slug == "saxophone-kaitori":
            add("trumpet-kaitori", "clarinet-kaitori", "flute-kaitori")
        elif slug == "trumpet-kaitori":
            add("trombone-kaitori", "saxophone-kaitori")
        elif slug == "trombone-kaitori":
            add("trumpet-kaitori", "saxophone-kaitori")
        elif slug == "flute-kaitori":
            add("clarinet-kaitori", "oboe-kaitori", "saxophone-kaitori")
        elif slug == "clarinet-kaitori":
            add("flute-kaitori", "oboe-kaitori", "saxophone-kaitori")
        elif slug == "oboe-kaitori":
            add("clarinet-kaitori", "flute-kaitori")
        elif slug == "keyboard-kaitori":
            add("midi-keyboard-kaitori", "synthesizer-kaitori", "denshi-piano-kaitori")
        elif slug == "midi-keyboard-kaitori":
            add("keyboard-kaitori", "synthesizer-kaitori", "audio-interface-kaitori")
        elif slug == "synthesizer-kaitori":
            add("keyboard-kaitori", "midi-keyboard-kaitori", "effector-kaitori")
        elif slug == "effector-kaitori":
            add("guitar-kaitori", "guitar-amp-kaitori")
        elif slug == "guitar-amp-kaitori":
            add("guitar-kaitori", "effector-kaitori", "bass-kaitori")
        elif slug == "audio-interface-kaitori":
            add("microphone-kaitori", "midi-keyboard-kaitori", "synthesizer-kaitori")
        elif slug == "microphone-kaitori":
            add("audio-interface-kaitori", "dj-kizai-kaitori")
        elif slug == "dj-kizai-kaitori":
            add("microphone-kaitori", "synthesizer-kaitori", "audio-interface-kaitori")
        elif slug == "drum-kaitori":
            add("guitar-kaitori", "bass-kaitori")
        elif slug == "harp-kaitori":
            add("violin-kaitori", "piano-kaitori")
        elif slug == "wadaiko-kaitori":
            add("koto-kaitori", "shamisen-kaitori", "shakuhachi-kaitori")
        elif slug == "koto-kaitori":
            add("shamisen-kaitori", "shakuhachi-kaitori", "wadaiko-kaitori")
        elif slug == "shamisen-kaitori":
            add("koto-kaitori", "shakuhachi-kaitori", "wadaiko-kaitori")
        elif slug == "shakuhachi-kaitori":
            add("koto-kaitori", "shamisen-kaitori", "wadaiko-kaitori")
        elif slug == "ihin-gakki-kaitori":
            add("kowareta-gakki-kaitori", "kabi-gakki-kaitori", "piano-kaitori")
        elif slug == "kowareta-gakki-kaitori":
            add("kabi-gakki-kaitori", "ihin-gakki-kaitori")
        elif slug == "kabi-gakki-kaitori":
            add("kowareta-gakki-kaitori", "ihin-gakki-kaitori")

        # 2. 対応ブランド
        for b in INSTRUMENT_TO_BRANDS.get(slug, [])[:4]:
            add(b)

        # 3. 主要地域
        for r in PRIMARY_REGIONS[:3]:
            add(r)

        # 4. 主要HOW-TO
        for h in PRIMARY_HOWTOS[:3]:
            add(h)

    elif slug in BRAND_SLUGS:
        # 1. 対応楽器カテゴリ
        for inst in BRAND_SLUGS[slug].get("instrument", []):
            add(inst)
        # 2. 関連ブランド
        related_brand_map: dict[str, list[str]] = {
            "yamaha-kaitori": ["kawai-kaitori", "steinway-kaitori", "casio-kaitori", "roland-kaitori"],
            "kawai-kaitori": ["yamaha-kaitori", "steinway-kaitori", "bosendorfer-kaitori"],
            "steinway-kaitori": ["bosendorfer-kaitori", "yamaha-kaitori", "kawai-kaitori"],
            "bosendorfer-kaitori": ["steinway-kaitori", "yamaha-kaitori", "kawai-kaitori"],
            "casio-kaitori": ["yamaha-kaitori", "roland-kaitori", "korg-kaitori"],
            "korg-kaitori": ["roland-kaitori", "yamaha-kaitori", "casio-kaitori"],
            "roland-kaitori": ["korg-kaitori", "yamaha-kaitori", "casio-kaitori"],
            "fender-kaitori": ["gibson-kaitori", "ibanez-kaitori", "martin-kaitori", "marshall-kaitori"],
            "gibson-kaitori": ["fender-kaitori", "ibanez-kaitori", "martin-kaitori", "marshall-kaitori"],
            "martin-kaitori": ["gibson-kaitori", "fender-kaitori", "ibanez-kaitori"],
            "ibanez-kaitori": ["fender-kaitori", "gibson-kaitori", "marshall-kaitori"],
            "marshall-kaitori": ["vox-kaitori", "fender-kaitori", "boss-kaitori"],
            "vox-kaitori": ["marshall-kaitori", "fender-kaitori", "boss-kaitori"],
            "boss-kaitori": ["marshall-kaitori", "vox-kaitori", "fender-kaitori"],
            "selmer-kaitori": ["yanagisawa-kaitori", "bach-kaitori", "yamaha-kaitori"],
            "yanagisawa-kaitori": ["selmer-kaitori", "yamaha-kaitori", "bach-kaitori"],
            "bach-kaitori": ["yamaha-kaitori", "selmer-kaitori"],
            "buffet-kaitori": ["yamaha-kaitori", "selmer-kaitori"],
            "pearl-kaitori": ["ludwig-kaitori", "sonor-kaitori", "yamaha-kaitori"],
            "ludwig-kaitori": ["pearl-kaitori", "sonor-kaitori"],
            "sonor-kaitori": ["pearl-kaitori", "ludwig-kaitori", "yamaha-kaitori"],
            "shure-kaitori": ["sennheiser-kaitori"],
            "sennheiser-kaitori": ["shure-kaitori"],
        }
        for b in related_brand_map.get(slug, [])[:4]:
            add(b)
        # 3. 主要地域
        for r in PRIMARY_REGIONS[:3]:
            add(r)
        # 4. 主要HOW-TO
        for h in PRIMARY_HOWTOS[:3]:
            add(h)

    elif slug in REGION_SLUGS:
        # 1. 隣接地域
        for r in REGION_SLUGS[slug].get("neighbors", [])[:4]:
            add(r)
        # 2. 主要楽器
        for inst in PRIMARY_INSTRUMENTS[:5]:
            add(inst)
        # 3. 主要HOW-TO
        for h in PRIMARY_HOWTOS[:3]:
            add(h)

    elif slug in HOWTO_SLUGS:
        # 1. 全カテゴリTOP楽器
        for inst in PRIMARY_INSTRUMENTS[:6]:
            add(inst)
        # 2. 関連HOW-TO
        howto_related_map: dict[str, list[str]] = {
            "takaku-uru-kotsu": ["souba-ichiran", "kaitori-houhou-hikaku", "satei-yomikata"],
            "souba-ichiran": ["takaku-uru-kotsu", "kougaku-satei-ranking", "satei-yomikata"],
            "kaitori-houhou-hikaku": ["kaitori-houshiki-tetteihikaku", "kaitori-nagare", "senmonten-vs-recycle"],
            "kaitori-houshiki-tetteihikaku": ["kaitori-houhou-hikaku", "kaitori-nagare", "senmonten-vs-recycle"],
            "kaitori-nagare": ["kaitori-houhou-hikaku", "hitsuyou-shorui", "mibunsho-hitsuyou"],
            "satei-yomikata": ["takaku-uru-kotsu", "souba-ichiran", "kougaku-satei-ranking"],
            "kougaku-satei-ranking": ["takaku-uru-kotsu", "souba-ichiran", "satei-yomikata"],
            "gakki-kaitori-sagi": ["senmonten-vs-recycle", "mercari-vs-gyosha", "gakki-kaitori-vs-kojin-baibai"],
            "gakki-kaitori-vs-kojin-baibai": ["mercari-vs-gyosha", "senmonten-vs-recycle", "kaitori-houhou-hikaku"],
            "mercari-vs-gyosha": ["gakki-kaitori-vs-kojin-baibai", "senmonten-vs-recycle", "kaitori-houhou-hikaku"],
            "senmonten-vs-recycle": ["kaitori-houhou-hikaku", "mercari-vs-gyosha", "gakki-kaitori-sagi"],
            "hitsuyou-shorui": ["mibunsho-hitsuyou", "miseinen-baikyaku", "kaitori-nagare"],
            "mibunsho-hitsuyou": ["hitsuyou-shorui", "miseinen-baikyaku", "kaitori-nagare"],
            "miseinen-baikyaku": ["mibunsho-hitsuyou", "hitsuyou-shorui"],
            "gakki-danshari": ["gakki-shobun-houhou", "hikkoshi-gakki-shobun", "souko-seiri-gakki"],
            "gakki-shobun-houhou": ["gakki-danshari", "hikkoshi-gakki-shobun", "souko-seiri-gakki"],
            "hikkoshi-gakki-shobun": ["gakki-shobun-houhou", "gakki-danshari", "souko-seiri-gakki"],
            "souko-seiri-gakki": ["gakki-danshari", "oya-gakki-seiri", "gakki-shobun-houhou"],
            "oya-gakki-seiri": ["souko-seiri-gakki", "gakki-danshari", "kodomo-piano-yameta"],
            "daigaku-sotsugyo-gakki": ["shumi-yameta-gakki", "renshu-shinai-gakki", "band-kaisan-kizai"],
            "kodomo-piano-yameta": ["shumi-yameta-gakki", "oya-gakki-seiri", "renshu-shinai-gakki"],
            "shumi-yameta-gakki": ["renshu-shinai-gakki", "daigaku-sotsugyo-gakki", "kodomo-piano-yameta"],
            "renshu-shinai-gakki": ["shumi-yameta-gakki", "daigaku-sotsugyo-gakki", "gakki-danshari"],
            "band-kaisan-kizai": ["daigaku-sotsugyo-gakki", "matome-uri-kaitori", "shumi-yameta-gakki"],
            "matome-uri-kaitori": ["souba-ichiran", "band-kaisan-kizai", "takaku-uru-kotsu"],
        }
        for h in howto_related_map.get(slug, [])[:3]:
            add(h)
        # 3. 主要地域
        for r in PRIMARY_REGIONS[:2]:
            add(r)

    # 12本未満ならフォールバックで主要記事を補充
    fallback = ["piano-kaitori", "guitar-kaitori", "saxophone-kaitori", "drum-kaitori",
                "violin-kaitori", "takaku-uru-kotsu", "souba-ichiran",
                "tokyo-gakki-kaitori", "osaka-gakki-kaitori", "yamaha-kaitori"]
    for f in fallback:
        if len(related) >= 12:
            break
        add(f)

    # 上限15
    return related[:15]


# ---------------------------------------------------------------------------
# 3. メタデータ統合 & JSON書き出し
# ---------------------------------------------------------------------------

ALL_META: dict[str, dict] = {}

for s, info in INSTRUMENT_SLUGS.items():
    ALL_META[s] = {
        "slug": s,
        "title": info["shortTitle"],
        "shortTitle": info["shortTitle"],
        "badge": info["badge"],
        "description": info["description"],
        "category": "instrument",
    }
for s, info in BRAND_SLUGS.items():
    ALL_META[s] = {
        "slug": s,
        "title": info["shortTitle"],
        "shortTitle": info["shortTitle"],
        "badge": info["badge"],
        "description": info["description"],
        "category": "brand",
    }
for s, info in REGION_SLUGS.items():
    ALL_META[s] = {
        "slug": s,
        "title": info["shortTitle"],
        "shortTitle": info["shortTitle"],
        "badge": info["badge"],
        "description": info["description"],
        "category": "region",
    }
for s, info in HOWTO_SLUGS.items():
    ALL_META[s] = {
        "slug": s,
        "title": info["shortTitle"],
        "shortTitle": info["shortTitle"],
        "badge": info["badge"],
        "description": info["description"],
        "category": "howto",
    }


def main():
    existing_slugs = sorted(p.name for p in ARTICLES_DIR.iterdir() if p.is_dir())

    # メタデータの完全性チェック
    missing = [s for s in existing_slugs if s not in ALL_META]
    if missing:
        raise SystemExit(f"分類されていない記事があります: {missing}")
    extra = [s for s in ALL_META if s not in existing_slugs]
    if extra:
        raise SystemExit(f"メタデータに存在するが記事フォルダがない: {extra}")

    # 1. JSON書き出し
    metadata_list = [ALL_META[s] for s in existing_slugs]
    METADATA_PATH.write_text(json.dumps(metadata_list, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[OK] data/articles-metadata.json 生成 ({len(metadata_list)}件)")

    # 2. 各記事のpage.tsxを更新
    # パターンA: <aside className="mt-12 pt-8 border-t border-warm-border">...</aside>
    aside_pattern = re.compile(
        r'( *)<aside className="mt-12 pt-8 border-t border-warm-border">.*?</aside>\n',
        re.DOTALL,
    )
    # パターンB: <h2>関連記事</h2><ul>...</ul> （単純な見出し+リスト形式）
    h2_pattern = re.compile(
        r'( *)<h2>関連記事</h2>\n\s*<ul>.*?</ul>\n',
        re.DOTALL,
    )

    updated = 0
    not_matched: list[str] = []
    link_count_total = 0
    per_category_links: dict[str, int] = {"instrument": 0, "brand": 0, "region": 0, "howto": 0}
    per_category_articles: dict[str, int] = {"instrument": 0, "brand": 0, "region": 0, "howto": 0}

    for slug in existing_slugs:
        page_path = ARTICLES_DIR / slug / "page.tsx"
        original = page_path.read_text(encoding="utf-8")
        related = compute_related(slug)
        link_count_total += len(related)
        cat = ALL_META[slug]["category"]
        per_category_links[cat] += len(related)
        per_category_articles[cat] += 1

        # related slugs を JSX 配列文字列に
        related_arr = "[" + ", ".join(f'"{r}"' for r in related) + "]"

        # 既存の関連記事ブロックを置換
        m = aside_pattern.search(original)
        if not m:
            m = h2_pattern.search(original)

        if not m:
            not_matched.append(slug)
            continue

        indent = m.group(1) or "        "
        new_aside = (
            f'{indent}<RelatedArticles\n'
            f'{indent}  currentSlug="{slug}"\n'
            f'{indent}  relatedSlugs={{{related_arr}}}\n'
            f'{indent}/>\n'
        )
        new_content = original[:m.start()] + new_aside + original[m.end():]

        # import文を追加（まだ無ければ）
        if 'import RelatedArticles' not in new_content:
            # "import Link from next/link" の行直後に挿入
            link_import_re = re.compile(r'(import Link from "next/link";\n)')
            if link_import_re.search(new_content):
                new_content = link_import_re.sub(
                    r'\1import RelatedArticles from "@/components/RelatedArticles";\n',
                    new_content, count=1,
                )
            else:
                # フォールバック: 最初のimportの後に追加
                first_import = re.search(r'^(import [^\n]+\n)', new_content, re.MULTILINE)
                if first_import:
                    new_content = (
                        new_content[:first_import.end()]
                        + 'import RelatedArticles from "@/components/RelatedArticles";\n'
                        + new_content[first_import.end():]
                    )

        if new_content != original:
            page_path.write_text(new_content, encoding="utf-8")
            updated += 1

    if not_matched:
        print(f"  [WARN] パターンマッチしなかった記事 ({len(not_matched)}件):")
        for s in not_matched:
            print(f"    - {s}")
    print(f"[OK] {updated}/{len(existing_slugs)} 記事を更新")
    print(f"[OK] 総リンク数: {link_count_total}本 (1記事あたり平均 {link_count_total / max(1, len(existing_slugs)):.1f}本)")
    print(f"[OK] カテゴリ別: ")
    for cat in ["instrument", "brand", "region", "howto"]:
        n_articles = per_category_articles[cat]
        n_links = per_category_links[cat]
        avg = n_links / n_articles if n_articles else 0
        print(f"     {cat}: {n_articles}記事 / {n_links}リンク (平均 {avg:.1f}本)")


if __name__ == "__main__":
    main()

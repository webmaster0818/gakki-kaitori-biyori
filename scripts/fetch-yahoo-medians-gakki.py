#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Yahoo Auctions の落札相場（過去180日）から、楽器人気モデル20本の中央値を算出。
peatbid の fetch-yahoo-medians.py を楽器用に流用。

出力:
  - data/yahoo-medians-gakki.json (全モデルの結果)
  - data/price-history-gakki/<slug>.json (履歴蓄積)
"""
from __future__ import annotations
import json
import re
import statistics
import time
import unicodedata
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_JSON = ROOT / "data" / "yahoo-medians-gakki.json"
HISTORY_DIR = ROOT / "data" / "price-history-gakki"

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"

MODEL_QUERIES = {
    "yamaha-u1-kaitori": ("YAMAHA U1", "ヤマハ U1 アップライトピアノ"),
    "yamaha-u3-kaitori": ("YAMAHA U3", "ヤマハ U3 アップライトピアノ"),
    "yamaha-yus5-kaitori": ("YAMAHA YUS5", "ヤマハ YUS5 アップライトピアノ"),
    "yamaha-yas62-kaitori": ("YAMAHA YAS-62", "ヤマハ YAS-62 アルトサックス"),
    "gibson-lespaul-standard-kaitori": ("Gibson Les Paul Standard", "Gibson Les Paul Standard USA"),
    "gibson-lespaul-custom-kaitori": ("Gibson Les Paul Custom", "Gibson Les Paul Custom USA"),
    "gibson-sg-kaitori": ("Gibson SG", "Gibson SG Standard USA"),
    "fender-stratocaster-kaitori": ("Fender Stratocaster", "Fender USA Stratocaster"),
    "fender-telecaster-kaitori": ("Fender Telecaster", "Fender USA Telecaster"),
    "fender-jazzbass-kaitori": ("Fender Jazz Bass", "Fender USA Jazz Bass"),
    "fender-twinreverb-kaitori": ("Fender Twin Reverb", "Fender Twin Reverb アンプ"),
    "ibanez-ts9-kaitori": ("Ibanez TS9 Tube Screamer", "Ibanez TS9 Tube Screamer エフェクター"),
    "boss-ds1-kaitori": ("BOSS DS-1", "BOSS DS-1 エフェクター"),
    "marshall-jcm800-kaitori": ("Marshall JCM800", "Marshall JCM800 ギターアンプ"),
    "pearl-masters-kaitori": ("Pearl Masters", "Pearl Masters ドラムセット"),
    "selmer-markvi-kaitori": ("Selmer Mark VI", "Selmer Mark VI サックス"),
    "selmer-series2-kaitori": ("Selmer Series II", "Selmer Series II サックス"),
    "bach-stradivarius-kaitori": ("Bach Stradivarius", "Bach Stradivarius トランペット"),
    "kawai-k300-kaitori": ("KAWAI K-300", "カワイ K-300 アップライトピアノ"),
    "steinway-b211-kaitori": ("Steinway B-211", "Steinway B-211 グランドピアノ"),
    "gibson-es335-kaitori": ("Gibson ES-335", "Gibson ES-335 USA"),
    "gibson-explorer-kaitori": ("Gibson Explorer", "Gibson Explorer USA"),
    "gibson-flyingv-kaitori": ("Gibson Flying V", "Gibson Flying V USA"),
    "gibson-firebird-kaitori": ("Gibson Firebird", "Gibson Firebird USA"),
    "fender-precisionbass-kaitori": ("Fender Precision Bass", "Fender USA Precision Bass"),
    "fender-jazzmaster-kaitori": ("Fender Jazzmaster", "Fender USA Jazzmaster"),
    "fender-jaguar-kaitori": ("Fender Jaguar", "Fender USA Jaguar"),
    "fender-mustang-kaitori": ("Fender Mustang", "Fender USA Mustang ギター"),
    "fender-deluxereverb-kaitori": ("Fender Deluxe Reverb", "Fender Deluxe Reverb アンプ"),
    "prs-custom24-kaitori": ("PRS Custom 24", "PRS Custom 24 ギター"),
    "prs-se-kaitori": ("PRS SE", "PRS SE ギター"),
    "martin-d28-kaitori": ("Martin D-28", "Martin D-28 アコースティックギター"),
    "martin-d45-kaitori": ("Martin D-45", "Martin D-45 アコースティックギター"),
    "martin-000-kaitori": ("Martin 000-28", "Martin 000-28 アコースティックギター"),
    "taylor-814ce-kaitori": ("Taylor 814ce", "Taylor 814ce アコースティックギター"),
    "gibson-j45-kaitori": ("Gibson J-45", "Gibson J-45 アコースティックギター"),
    "rickenbacker-330-kaitori": ("Rickenbacker 330", "Rickenbacker 330 ギター"),
    "rickenbacker-4003-kaitori": ("Rickenbacker 4003", "Rickenbacker 4003 ベース"),
    "gretsch-6120-kaitori": ("Gretsch 6120", "Gretsch 6120 ギター"),
    "esp-horizon-kaitori": ("ESP Horizon", "ESP Horizon ギター"),
    "ibanez-rg-kaitori": ("Ibanez RG", "Ibanez RG プレステージ ギター"),
    "ibanez-jem-kaitori": ("Ibanez JEM", "Ibanez JEM ギター"),
    "musicman-stingray-kaitori": ("Music Man StingRay", "Music Man StingRay ベース"),
    "warwick-thumb-kaitori": ("Warwick Thumb", "Warwick Thumb ベース"),
    "vox-ac30-kaitori": ("VOX AC30", "VOX AC30 ギターアンプ"),
    "roland-jc120-kaitori": ("Roland JC-120", "Roland JC-120 ジャズコーラス アンプ"),
    "mesaboogie-markv-kaitori": ("Mesa Boogie Mark V", "Mesa Boogie Mark V アンプ"),
    "boss-bd2-kaitori": ("BOSS BD-2", "BOSS BD-2 Blues Driver エフェクター"),
    "ibanez-ts808-kaitori": ("Ibanez TS808", "Ibanez TS808 Tube Screamer エフェクター"),
    "ehx-bigmuff-kaitori": ("Electro-Harmonix Big Muff", "Electro-Harmonix Big Muff エフェクター"),
    "yamaha-ytr8335-kaitori": ("YAMAHA YTR-8335", "ヤマハ YTR-8335 トランペット"),
    "yamaha-c3-kaitori": ("YAMAHA C3", "ヤマハ C3 グランドピアノ"),
    "buffet-r13-kaitori": ("Buffet Crampon R13", "クランポン R13 クラリネット"),
    "muramatsu-flute-kaitori": ("Muramatsu Flute", "ムラマツ フルート"),
    "bach-42-trombone-kaitori": ("Bach 42 Trombone", "Bach 42 トロンボーン"),
    "tama-starclassic-kaitori": ("TAMA Starclassic", "TAMA Starclassic ドラムセット"),
    "dw-collectors-kaitori": ("DW Collector's", "DW Collector's ドラムセット"),
    "ludwig-supraphonic-kaitori": ("Ludwig Supraphonic", "Ludwig Supraphonic スネア"),
    "roland-juno-kaitori": ("Roland Juno", "Roland Juno シンセサイザー"),
    "nord-stage-kaitori": ("Nord Stage", "Nord Stage キーボード"),
    "moog-subsequent37-kaitori": ("Moog Subsequent 37", "Moog Subsequent 37 シンセサイザー"),
    "korg-minilogue-kaitori": ("KORG minilogue", "KORG minilogue シンセサイザー"),
}

MIN_SAMPLE = 8  # 楽器はピアノ等で出品数少なめ、peatbidの20より緩く
MAX_PAGES = 3
TODAY = datetime.now().strftime("%Y-%m-%d")


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as res:
        return res.read().decode("utf-8", errors="replace")


def extract_prices(html: str) -> list[int]:
    out = []
    for m in re.finditer(r'"price"\s*:\s*(\d+)', html):
        try:
            v = int(m.group(1))
            if 500 <= v <= 50_000_000:
                out.append(v)
        except ValueError:
            pass
    return out


# ===== 出品タイトルで本体以外を落とすモデル（2026-10-10追加） =====
# extract_prices は価格だけを拾うため、同じ型番を名乗る別商品（小型ヘッドホンアンプ・ラジオ・カバー等）が
# 混ざると中央値が壊れる。ここに載せたモデルだけ __NEXT_DATA__ の出品（title / price）を読んで、
# 除外語に当たる出品と、本体としてあり得ない安値（min_item_price 未満）を IQR の前に落とす。
# 実測（2026-10-10 の「VOX AC30 ギターアンプ」3ページ・116出品）: 本体は約25件で、残りは
#   amPlug / AP2-AC / AP3-AC（ヘッドホンアンプ ¥500〜7,000）・VGH-AC30 / APHN-AC30（ヘッドホン）・
#   AC30 RADIO・ピンバッジ・純正ハードケース・Pathfinder。中央値 ¥3,200 の正体はこれ。
# 「ヤマハ C3 グランドピアノ」は 5出品中 3件がピアノカバー（¥5,000〜8,000）。
# ※ 本体タイトルにも「真空管」「フットスイッチ付」「カバー付き」「celestion」は普通に出るので、単語では落とさない。
TITLE_RULES = {
    "vox-ac30-kaitori": {
        "exclude": [
            "amplug", "アンプラグ", "ap2-ac", "ap3-ac", "ap-ac", "ap2-cab", "ac-cab",
            "ヘッドホン", "ヘッドフォン", "vgh-ac30", "aphn",
            "radio", "ラジオ", "ピンバッジ", "ピンズ", "キーホルダー", "ミニチュア", "ステッカー",
            "ハードケース", "アンプケース", "ケースのみ", "カバーのみ", "アンプカバー",
            "pathfinder", "交換用",
        ],
        "exclude_regex": [
            r"ac-?30\s*(用|対応|専用)",                      # 「AC30用 真空管」「AC30対応カバー」
            r"(真空管|スピーカー|フットスイッチ|シャーシ|基板|ノブ).{0,6}(のみ|単体|単品)",
            r"(el84|ecc83|12ax7|gz34|ef86).{0,15}(\d\s*本|ペア|マッチ|セット)",
        ],
        "min_item_price": 8_000,  # 実測の本体最安は AC30VR ジャンク ¥10,000。amPlug 最高は ¥6,990
    },
    "yamaha-c3-kaitori": {
        "exclude": [
            "カバー", "インシュレーター", "譜面", "楽譜",
            "部品", "パーツ", "ハンマー", "鍵盤のみ", "ペダルのみ",
            # 「消音」「サイレント」「キャスター」は本体タイトル（消音機能付き等）にも出るので入れない
            # 2026-10-11: 「椅子」「イス」「チェア」を単語除外から外し PIANO_ACCESSORY_REGEX（椅子のみ・ピアノ椅子 等）へ。
            #   U1/U3 の実出品で「椅子付き」は本体タイトルに普通に出る（10/11 実測 U1 2件・U3 2件）
        ],
        "exclude_regex": [r"(c3x?|グランドピアノ)\s*(用|対応|専用)"],  # + PIANO_ACCESSORY_REGEX（下で追加）
        "min_item_price": 100_000,
    },
}

# ===== ピアノ5機種（2026-10-11追加）: C3 と同じ「タイトル除外語＋1出品下限」＋型番必須 =====
# 10/11 に5機種のクエリを1回ずつ取得（各最大3ページ）して出品タイトルを目視した結果:
#   - U1（14出品）/ U3（7出品）: 全て本体。付属品の混入は0。ただし「椅子付き」が本体に4件 → 「椅子」は単語で落とさない。
#     ¥1〜¥5,000 は引取限定・1円スタートの本体（実勢でない）。
#   - YUS5 / K-300 / B-211（各150出品）: 型番一致の本体が0件。Yahoo が型番を無視して
#     他社アップライト・ピアノカバー・鍵・トイピアノ（YUS5/K-300）、インクカートリッジ・切符・腕時計等（B-211）を返していた。
#     → カバー除外だけでは足りないので、タイトルに型番（B-211 はブランド名も）を必須にする（require_regex＝全部に一致が必要）。
# どの機種も ALWAYS_INSUFFICIENT_SLUGS のままなのでサイト表示は変わらない（中央値 JSON と週次ログの値だけが正しくなる）。
PIANO_ACCESSORY_REGEX = [
    r"(ピアノ|トップ|レース|鍵盤|用)\s*カバー", r"カバー\s*(のみ|単体|単品)",
    r"ピアノ\s*(椅子|イス|いす|チェア|ベンチ)(?!\s*付)", r"(椅子|イス|いす|チェア|ベンチ)\s*(のみ|単体|単品)",
    r"インシュレーター(?!\s*付)", r"(?<!\d)鍵(?!盤)", r"キーホルダー",  # 「88鍵」「鍵盤」は本体
    r"トイピアノ", r"ミニピアノ", r"おもちゃ", r"シルバニア", r"ドールハウス", r"ミニチュア",
    r"電子ピアノ", r"カタログ", r"楽譜", r"譜面", r"部品", r"パーツ", r"ハンマー",
    r"(u-?[13]|yus-?5|k-?300|b-?211|c3x?|ピアノ)\s*(用|対応|専用)",
]
_UPRIGHT_FLOOR = 10_000  # 実測の付属品最高は カバーセット ¥7,700。引取限定の ¥1〜数千円本体もここで落ちる
TITLE_RULES.update({
    "yamaha-u1-kaitori": {"require_regex": [r"(?<![a-z0-9])u-?1(?![0-9])"],
                          "exclude_regex": PIANO_ACCESSORY_REGEX, "min_item_price": _UPRIGHT_FLOOR},
    "yamaha-u3-kaitori": {"require_regex": [r"(?<![a-z0-9])u-?3(?![0-9])"],
                          "exclude_regex": PIANO_ACCESSORY_REGEX, "min_item_price": _UPRIGHT_FLOOR},
    "yamaha-yus5-kaitori": {"require_regex": [r"yus-?5(?![0-9])"],
                            "exclude_regex": PIANO_ACCESSORY_REGEX, "min_item_price": _UPRIGHT_FLOOR},
    "kawai-k300-kaitori": {"require_regex": [r"(?<![a-z0-9])k-?300(?![0-9])"],
                           "exclude_regex": PIANO_ACCESSORY_REGEX, "min_item_price": _UPRIGHT_FLOOR},
    "steinway-b211-kaitori": {"require_regex": [r"(?<![a-z0-9])b-?211(?![0-9])", r"steinway|スタインウェイ"],
                              "exclude_regex": PIANO_ACCESSORY_REGEX, "min_item_price": 1_000_000},
})
TITLE_RULES["yamaha-c3-kaitori"]["exclude_regex"] = (
    TITLE_RULES["yamaha-c3-kaitori"]["exclude_regex"] + PIANO_ACCESSORY_REGEX)

# ===== n の二重計上の除去（2026-10-11 実装・既定は無効） =====
# Yahoo の __NEXT_DATA__ は1ページ内で同じ出品を2回持っており、raw_n / filtered_n が実出品数の約2倍になっている。
# True にすると、全モデルで __NEXT_DATA__ の auctionId（ページをまたいでも）で重複を除いてから IQR・中央値を出す。
# 判断（A=実数に直す）が出たら下の1行を True にするだけでよい。__NEXT_DATA__ が読めないページは従来の "price" 正規表現に戻る。
DEDUP_LISTINGS = False

# ルールを変えた日より前の履歴点は別物（例: VOX AC30 の 7/16〜10/1 は全て amPlug の ¥3,4xx）なので、
# 次回 fetch の write_history でこの日付より前の点を捨てる。残すと正しい値が入った週に
# 前週比 +2000% 級の偽の値動きがランキングに出る。
HISTORY_RESET_BEFORE = {
    "vox-ac30-kaitori": "2026-10-10",
    "yamaha-c3-kaitori": "2026-10-10",
}


def extract_listings(html: str) -> list[dict] | None:
    """__NEXT_DATA__ から出品 {title, price} を拾う。読めなければ None。
    件数を extract_prices（"price" の正規表現）と揃えるため、ページ内で同じ出品が2回出ても重複を残す
    （2026-10-10 実測: 1ページ 50出品 → "price" 100件、両者一致）。"""
    m = re.search(r'<script id="__NEXT_DATA__" type="application/json"[^>]*>(.*?)</script>', html, re.S)
    if not m:
        return None
    try:
        data = json.loads(m.group(1))
    except json.JSONDecodeError:
        return None
    out: list[dict] = []

    def walk(o):
        if isinstance(o, dict):
            if "auctionId" in o and "title" in o and isinstance(o.get("price"), int):
                out.append({"title": str(o["title"]), "price": o["price"], "id": str(o["auctionId"])})
                return
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)

    walk(data)
    return out


def is_excluded(title: str, rule: dict) -> bool:
    t = unicodedata.normalize("NFKC", title).lower()
    if not all(re.search(p, t) for p in rule.get("require_regex", [])):
        return True  # 型番が無い出品（Yahoo のあいまい一致で混ざる別商品）
    if any(w in t for w in rule.get("exclude", [])):
        return True
    return any(re.search(p, t) for p in rule.get("exclude_regex", []))


def dedup_listings(listings: list[dict], seen: set[str]) -> list[dict]:
    """auctionId で重複を除く（seen はページをまたいで共有）。DEDUP_LISTINGS=True の時だけ使う。"""
    out = []
    for it in listings:
        if it["id"] in seen:
            continue
        seen.add(it["id"])
        out.append(it)
    return out


def prices_with_rule(html: str, rule: dict, seen: set[str] | None = None) -> tuple[list[int], int] | None:
    """TITLE_RULES 対象モデル用。(残った価格, 落とした件数)。__NEXT_DATA__ が読めなければ None。
    seen を渡すと auctionId で重複除去する（DEDUP_LISTINGS）。"""
    listings = extract_listings(html)
    if listings is None:
        return None
    if seen is not None:
        listings = dedup_listings(listings, seen)
    kept, dropped = [], 0
    for it in listings:
        p = it["price"]
        if not (500 <= p <= 50_000_000):
            continue
        if is_excluded(it["title"], rule) or p < rule.get("min_item_price", 0):
            dropped += 1
            continue
        kept.append(p)
    return kept, dropped


def prices_dedup(html: str, seen: set[str]) -> list[int]:
    """TITLE_RULES 対象外モデル用（DEDUP_LISTINGS=True の時だけ）。__NEXT_DATA__ が読めなければ従来の正規表現。"""
    listings = extract_listings(html)
    if listings is None:
        return extract_prices(html)
    return [it["price"] for it in dedup_listings(listings, seen) if 500 <= it["price"] <= 50_000_000]


def iqr_filter(prices: list[int]) -> list[int]:
    if len(prices) < 4:
        return prices
    s = sorted(prices)
    n = len(s)
    q1 = s[n // 4]
    q3 = s[(3 * n) // 4]
    iqr = q3 - q1
    lo = q1 - 1.5 * iqr
    hi = q3 + 1.5 * iqr
    return [p for p in s if lo <= p <= hi]


def median_for_query(query: str, slug: str | None = None) -> dict:
    rule = TITLE_RULES.get(slug) if slug else None
    raw_all = []
    title_excluded = 0
    pages_fetched = 0
    seen: set[str] | None = set() if DEDUP_LISTINGS else None
    for page in range(1, MAX_PAGES + 1):
        b = 1 + (page - 1) * 50
        q = urllib.parse.quote(query)
        url = f"https://auctions.yahoo.co.jp/closedsearch/closedsearch?p={q}&b={b}&n=50"
        try:
            html = fetch(url)
        except Exception as e:
            return {"error": f"fetch_failed: {e}", "query_used": query, "fetched_at": TODAY}
        if rule:
            got = prices_with_rule(html, rule, seen)
            if got is None:
                # タイトルが読めないと部品混入を防げない → 汚れた中央値を出すより非表示にする
                return {"error": "listing_parse_failed", "query_used": query, "raw_n": 0, "filtered_n": 0,
                        "median": None, "insufficient": True, "fetched_at": TODAY}
            page_prices, dropped = got
            title_excluded += dropped
            page_has_items = bool(page_prices) or dropped > 0
        else:
            page_prices = prices_dedup(html, seen) if seen is not None else extract_prices(html)
            page_has_items = bool(page_prices)
        pages_fetched += 1
        if not page_has_items:
            break
        raw_all.extend(page_prices)
        if page < MAX_PAGES:
            time.sleep(1.5)
    if not raw_all:
        r0 = {"query_used": query, "raw_n": 0, "filtered_n": 0, "median": None, "insufficient": True, "fetched_at": TODAY}
        if rule:
            r0["title_excluded_n"] = title_excluded
        return r0
    filtered = iqr_filter(raw_all)
    extra = {"title_excluded_n": title_excluded} if rule else {}
    return {
        **extra,
        "query_used": query,
        "pages_fetched": pages_fetched,
        "raw_n": len(raw_all),
        "filtered_n": len(filtered),
        "median": int(statistics.median(filtered)) if filtered else None,
        "mean": int(statistics.mean(filtered)) if filtered else None,
        "min": min(filtered) if filtered else None,
        "max": max(filtered) if filtered else None,
        "insufficient": len(filtered) < MIN_SAMPLE,
        "fetched_at": TODAY,
    }


def write_history(slug: str, label: str, result: dict) -> None:
    HISTORY_DIR.mkdir(exist_ok=True)
    path = HISTORY_DIR / f"{slug}.json"
    existing_history = []
    if path.exists():
        try:
            existing = json.loads(path.read_text(encoding="utf-8"))
            existing_history = existing.get("history", []) or []
        except (json.JSONDecodeError, OSError):
            existing_history = []

    median_val = result.get("median")
    fetched_at = result.get("fetched_at")
    new_point = (
        {
            "date": fetched_at,
            "median_jpy": median_val,
            "sample_n": result.get("filtered_n"),
            "raw_n": result.get("raw_n"),
        }
        if median_val is not None and not result.get("insufficient")
        else None
    )

    merged = [h for h in existing_history if h.get("date") != fetched_at]
    reset_before = HISTORY_RESET_BEFORE.get(slug)
    if reset_before:
        merged = [h for h in merged if (h.get("date") or "") >= reset_before]
    if new_point is not None:
        merged.append(new_point)
    merged.sort(key=lambda h: h.get("date") or "")

    data = {
        "slug": slug,
        "label": label,
        "source": "yahoo_auctions_closed_search_180d",
        "methodology": "median of individual lot final-prices, IQR outlier removal",
        "query_used": result.get("query_used"),
        "history": merged,
        "latest": {
            "date": fetched_at,
            "median_jpy": median_val,
            "sample_n": result.get("filtered_n"),
            "raw_n": result.get("raw_n"),
            "insufficient": result.get("insufficient", False),
        },
        "note": "週次自動更新で履歴を蓄積中。",
    }
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


# ピアノ系: Yahoo Auctions に部品・付属品が大量出品される一方、本体出品が極少のため
# 中央値が実勢を反映しない。常に insufficient 扱いとし、無料査定誘導に統一する。
ALWAYS_INSUFFICIENT_SLUGS = {
    "yamaha-u1-kaitori",
    "yamaha-u3-kaitori",
    "yamaha-yus5-kaitori",
    "kawai-k300-kaitori",
    "steinway-b211-kaitori",
    "yamaha-c3-kaitori",  # 2026-10-09追加: グランドピアノ。10/5取得が n=10・中央値¥8,000 で本体以外の混入が明らか
}

# モデル種別ごとの最低想定中古中央値 (これ未満なら異常値として insufficient マーク)
# Yahoo Auctions の検索結果に類似品 (Epiphone 等) や部品が混入した場合の自動除外用
MIN_PLAUSIBLE_MEDIAN = {
    "yamaha-yas62-kaitori": 50_000,
    "gibson-lespaul-standard-kaitori": 80_000,
    "gibson-lespaul-custom-kaitori": 150_000,
    "gibson-sg-kaitori": 50_000,
    "fender-stratocaster-kaitori": 50_000,
    "fender-telecaster-kaitori": 50_000,
    "fender-jazzbass-kaitori": 50_000,
    "fender-twinreverb-kaitori": 40_000,
    "marshall-jcm800-kaitori": 50_000,
    "vox-ac30-kaitori": 30_000,  # 2026-10-09追加: 10/5取得が n=178・中央値¥3,200（部品・小物混入）
    "pearl-masters-kaitori": 15_000,
    "selmer-markvi-kaitori": 200_000,
    "selmer-series2-kaitori": 100_000,
    "bach-stradivarius-kaitori": 50_000,
    # エフェクター類は数千円が実勢なので閾値ゆるめ
    "ibanez-ts9-kaitori": 3_000,
    "boss-ds1-kaitori": 2_000,
}


def apply_quality_rules(slug: str, r: dict) -> bool:
    """ALWAYS_INSUFFICIENT_SLUGS / MIN_PLAUSIBLE_MEDIAN を1件に適用。insufficient が変わったら True。
    fetch時（main）と、ルール追加後に既存データへ当て直す --reapply の両方で使う（規則の一元化）。"""
    before = r.get("insufficient", False)
    # 1. 常に insufficient なモデル (ピアノ系)
    if slug in ALWAYS_INSUFFICIENT_SLUGS:
        r["insufficient"] = True
        r["note"] = "Yahoo Auctions では本体出品が少なく、検索結果に鍵盤・サイレント装置・楽譜・部品等が含まれるため中古市場の実勢価格を反映していません。買取相場は無料査定でご確認ください。"

    # 2. 中央値が想定最低を下回る場合は異常値として insufficient マーク
    median = r.get("median")
    floor = MIN_PLAUSIBLE_MEDIAN.get(slug)
    if median and floor and median < floor:
        r["insufficient"] = True
        r["note"] = f"算出された中央値が想定下限（¥{floor:,}）を下回ったため、類似品や部品混入の可能性があり非表示にしています。"
    return r.get("insufficient", False) != before


def reapply():
    """fetch せずに、既存の yahoo-medians-gakki.json と price-history の latest に現行ルールを当て直す。
    insufficient になった取得日の点は history[] からも外す（write_history が insufficient を履歴に入れないのと同じ扱い）。
    数値そのものは一切変えない。"""
    results = json.loads(OUT_JSON.read_text(encoding="utf-8"))
    changed = []
    for slug, r in results.items():
        if apply_quality_rules(slug, r):
            changed.append(slug)
            path = HISTORY_DIR / f"{slug}.json"
            if path.exists():
                d = json.loads(path.read_text(encoding="utf-8"))
                d.setdefault("latest", {})["insufficient"] = True
                d["history"] = [h for h in d.get("history", []) if h.get("date") != r.get("fetched_at")]
                path.write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding="utf-8")
    OUT_JSON.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"reapply: insufficient に変更 {len(changed)} 件 {changed}")


def main():
    print(f"🔍 Yahoo median fetch (楽器 {TODAY}) — {len(MODEL_QUERIES)} models")
    results = {}
    for i, (slug, (label, query)) in enumerate(MODEL_QUERIES.items(), 1):
        print(f"  [{i}/{len(MODEL_QUERIES)}] {slug} '{query}'...", end=" ", flush=True)
        r = median_for_query(query, slug)
        r["label"] = label
        apply_quality_rules(slug, r)

        results[slug] = r
        if r.get("median") and not r.get("insufficient"):
            print(f"median=¥{r['median']:,} n={r['filtered_n']}")
        elif r.get("insufficient"):
            print(f"INSUFFICIENT (forced) n={r.get('filtered_n', 0)}")
        else:
            print(f"INSUFFICIENT n={r.get('filtered_n', 0)}")
        write_history(slug, label, r)
        time.sleep(0.8)

    OUT_JSON.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    success = sum(1 for r in results.values() if r.get("median") and not r.get("insufficient"))
    print(f"\n✅ {success}/{len(results)} models have reliable median data")
    print(f"   Saved: {OUT_JSON}")


if __name__ == "__main__":
    import sys
    if "--reapply" in sys.argv[1:]:
        reapply()  # 取得せずルールだけ当て直す（ルール追加日に使う）
    else:
        main()

#!/usr/bin/env python3
"""記事ページの見出し帯（ファーストビュー）にテーマ画像を割り当てる（2026-10-21 MediaXAI「各ページのファーストビューもこだわりたい」）。冪等。

  python3 scripts/add-subhero-images-202610.py          … 割り当て＋page.tsx へ反映、data/subhero-map.json を書き出す
  python3 scripts/add-subhero-images-202610.py --check  … 書き換えずに件数だけ表示

- 各記事の先頭 <header>（パンくず直後の見出し帯）に CSS 変数だけを足す:
    style={{ ["--subhero" as string]: "url(/images/subhero/<key>.webp)", ["--subhero-m" as string]: "url(/images/subhero/<key>-m.webp)" }}
  文言・リンク・見出し・metadata・JSON-LD には触れない。帯の描画は app/globals.css（--subhero 未設定ならスタジオ写真）。
- 割り当て: instrument＝その楽器 / howto＝その記事の場面 / brand・model＝その楽器の画像を流用（BRAND_MODEL）/
  region＝8地方×2（関東・近畿・中部は×3。同じ地方の記事を都道府県順に a・b・c と回す）。画像は scripts/gen-subhero-images-202610.py で作る。
- ⚠️ 記事ジェネレータで再生成・新規作成したら、このスクリプトを再実行する（新しい brand/model は BRAND_MODEL に足す）。
"""
import importlib.util, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES = ROOT / "app" / "articles"
IMG = ROOT / "public" / "images" / "subhero"

_spec = importlib.util.spec_from_file_location("grg", ROOT / "scripts" / "gen-related-groups.py")
grg = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(grg)  # PREF_RX / PREF_FIX / AREA（都道府県→8地方）を流用

AREA_KEY = {"北海道": "hokkaido", "東北": "tohoku", "関東": "kanto", "中部": "chubu", "近畿": "kinki",
            "中国": "chugoku", "四国": "shikoku", "九州・沖縄": "kyushu"}

# ブランド・型番 → 楽器の画像（その楽器が何かは記事のタイトル・説明文で判断）
BRAND_MODEL = {
    # brand
    "bach-kaitori": "inst-trumpet", "bosendorfer-kaitori": "inst-grand-piano", "boss-kaitori": "inst-effector",
    "buffet-kaitori": "inst-clarinet", "casio-kaitori": "inst-denshi-piano", "fender-kaitori": "inst-eguitar-solid",
    "gibson-kaitori": "inst-eguitar-singlecut", "ibanez-kaitori": "inst-eguitar-superstrat", "kawai-kaitori": "inst-piano",
    "korg-kaitori": "inst-synthesizer", "ludwig-kaitori": "inst-drum", "marshall-kaitori": "inst-amp-stack",
    "martin-kaitori": "inst-acoustic-guitar", "pearl-kaitori": "inst-drum", "roland-kaitori": "inst-synthesizer",
    "selmer-kaitori": "inst-saxophone", "sennheiser-kaitori": "inst-microphone", "shure-kaitori": "inst-microphone",
    "sonor-kaitori": "inst-drum", "steinway-kaitori": "inst-grand-piano", "tama-kaitori": "inst-drum",
    "vox-kaitori": "inst-guitar-amp", "yamaha-kaitori": "inst-piano", "yanagisawa-kaitori": "inst-saxophone",
    "esp-kaitori": "inst-eguitar-superstrat", "prs-kaitori": "inst-eguitar-solid", "gretsch-kaitori": "inst-eguitar-semi",
    "rickenbacker-kaitori": "inst-eguitar-semi", "taylor-kaitori": "inst-acoustic-guitar", "takamine-kaitori": "inst-acoustic-guitar",
    "epiphone-kaitori": "inst-eguitar-singlecut", "squier-kaitori": "inst-eguitar-solid", "musicman-kaitori": "inst-bass",
    "nord-kaitori": "inst-keyboard", "moog-kaitori": "inst-synthesizer", "pioneer-dj-kaitori": "inst-dj-kizai",
    "technics-kaitori": "inst-turntable", "zildjian-kaitori": "inst-cymbals", "dw-kaitori": "inst-drum",
    "conn-kaitori": "inst-saxophone", "roland-td-kaitori": "inst-drum", "jackson-kaitori": "inst-eguitar-superstrat",
    "schecter-kaitori": "inst-eguitar-superstrat", "orange-kaitori": "inst-amp-stack", "mesaboogie-kaitori": "inst-amp-stack",
    "sequential-kaitori": "inst-synthesizer", "sabian-kaitori": "inst-cymbals", "mapex-kaitori": "inst-drum",
    "jupiter-kaitori": "inst-trumpet", "suzuki-violin-kaitori": "inst-violin",
    "native-instruments-kaitori": "inst-midi-keyboard", "kawai-piano-kaitori": "inst-piano",
    "roland-denshi-piano-kaitori": "inst-denshi-piano",
    # model
    "bach-stradivarius-kaitori": "inst-trumpet", "boss-ds1-kaitori": "inst-effector", "fender-jazzbass-kaitori": "inst-bass",
    "fender-stratocaster-kaitori": "inst-eguitar-solid", "fender-telecaster-kaitori": "inst-eguitar-singlecut",
    "fender-twinreverb-kaitori": "inst-guitar-amp", "gibson-lespaul-custom-kaitori": "inst-eguitar-singlecut",
    "gibson-lespaul-standard-kaitori": "inst-eguitar-singlecut", "gibson-sg-kaitori": "inst-eguitar-solid",
    "ibanez-ts9-kaitori": "inst-effector", "kawai-k300-kaitori": "inst-piano", "marshall-jcm800-kaitori": "inst-amp-stack",
    "pearl-masters-kaitori": "inst-drum", "selmer-markvi-kaitori": "inst-saxophone", "selmer-series2-kaitori": "inst-saxophone",
    "steinway-b211-kaitori": "inst-grand-piano", "yamaha-u1-kaitori": "inst-piano", "yamaha-u3-kaitori": "inst-piano",
    "yamaha-yas62-kaitori": "inst-saxophone", "yamaha-yus5-kaitori": "inst-piano",
    "fender-jazzmaster-kaitori": "inst-eguitar-offset", "fender-jaguar-kaitori": "inst-eguitar-offset",
    "gibson-es335-kaitori": "inst-eguitar-semi", "gibson-flying-v-kaitori": "inst-eguitar-solid",
    "gibson-lespaul-junior-kaitori": "inst-eguitar-singlecut", "prs-custom24-kaitori": "inst-eguitar-solid",
    "gretsch-6120-kaitori": "inst-eguitar-semi", "rickenbacker-330-kaitori": "inst-eguitar-semi", "ibanez-rg-kaitori": "inst-eguitar-superstrat",
    "martin-d28-kaitori": "inst-acoustic-guitar", "taylor-814ce-kaitori": "inst-acoustic-guitar",
    "gibson-j45-kaitori": "inst-acoustic-guitar", "fender-precisionbass-kaitori": "inst-bass",
    "musicman-stingray-kaitori": "inst-bass", "vox-ac30-kaitori": "inst-guitar-amp",
    "fender-deluxe-reverb-kaitori": "inst-guitar-amp", "roland-jc120-kaitori": "inst-guitar-amp",
    "ibanez-ts808-kaitori": "inst-effector", "klon-centaur-kaitori": "inst-effector", "yamaha-c3-kaitori": "inst-grand-piano",
    "kawai-rx2-kaitori": "inst-grand-piano", "yamaha-yas875-kaitori": "inst-saxophone",
    "yanagisawa-awo10-kaitori": "inst-saxophone", "korg-minilogue-kaitori": "inst-synthesizer",
    "nord-stage3-kaitori": "inst-keyboard", "tama-starclassic-kaitori": "inst-drum",
    "bach-42-trombone-kaitori": "inst-trombone", "boss-bd2-kaitori": "inst-effector", "buffet-r13-kaitori": "inst-clarinet",
    "dw-collectors-kaitori": "inst-drum", "ehx-bigmuff-kaitori": "inst-effector", "esp-horizon-kaitori": "inst-eguitar-superstrat",
    "fender-mustang-kaitori": "inst-eguitar-offset", "gibson-explorer-kaitori": "inst-eguitar-solid",
    "gibson-firebird-kaitori": "inst-eguitar-solid", "ibanez-jem-kaitori": "inst-eguitar-superstrat",
    "ludwig-supraphonic-kaitori": "inst-cymbals", "martin-000-kaitori": "inst-acoustic-guitar",
    "martin-d45-kaitori": "inst-acoustic-guitar", "mesaboogie-markv-kaitori": "inst-guitar-amp",
    "moog-subsequent37-kaitori": "inst-synthesizer", "muramatsu-flute-kaitori": "inst-flute", "prs-se-kaitori": "inst-eguitar-solid",
    "rickenbacker-4003-kaitori": "inst-bass", "roland-juno-kaitori": "inst-synthesizer", "warwick-thumb-kaitori": "inst-bass",
    "yamaha-ytr8335-kaitori": "inst-trumpet",
    # articles-metadata.json に無い記事（ページの中身で判断）
    "fender-deluxereverb-kaitori": "inst-guitar-amp", "gibson-flyingv-kaitori": "inst-eguitar-solid", "nord-stage-kaitori": "inst-keyboard",
}

# 記事数の多い地方は3枚で回す（同じ写真が続かないように）
REGION_VARIANTS = {"kanto": "abc", "kinki": "abc", "chubu": "abc"}

HEADER_RX = re.compile(r'(<article\b[^>]*>\s*(?:\{/\*.*?\*/\}\s*)?)<header\b([^>]*)>', re.S)
STYLE_RX = re.compile(r'\s*style=\{\{ \["--subhero" as string\]: "[^"]*", \["--subhero-m" as string\]: "[^"]*" \}\}')


def assign():
    meta = {m["slug"]: m for m in json.loads((ROOT / "data" / "articles-metadata.json").read_text())}
    slugs = sorted(d.name for d in ARTICLES.iterdir() if (d / "page.tsx").is_file())
    mapping, region_order = {}, {}
    for s in slugs:
        cat = meta.get(s, {}).get("category")
        if cat == "instrument":
            mapping[s] = "inst-" + s.removesuffix("-kaitori")
        elif cat == "howto":
            mapping[s] = "howto-" + s
        elif s in BRAND_MODEL:
            mapping[s] = BRAND_MODEL[s]
        elif cat == "region":
            src = (ARTICLES / s / "page.tsx").read_text()
            desc = re.search(r'description:\s*"(.*?)",?\n', src)
            hit = grg.PREF_RX.search(meta[s]["description"] + (desc.group(1) if desc else ""))
            pref = hit.group(0) if hit else grg.PREF_FIX.get(s)
            if not pref:
                print("⚠️ 都道府県が取れない地域記事（スタジオ写真のまま）:", s)
                continue
            region_order.setdefault(AREA_KEY[grg.AREA[pref]], []).append((grg.PREFS.index(pref), s))
        else:
            print("⚠️ 割り当てなし（スタジオ写真のまま）:", s, cat)
    for area, items in region_order.items():
        v = REGION_VARIANTS.get(area, "ab")
        for i, (_, s) in enumerate(sorted(items)):
            mapping[s] = f"region-{area}-{v[i % len(v)]}"
    return slugs, mapping


def main():
    check = "--check" in sys.argv
    slugs, mapping = assign()
    applied, missing_img, no_header, unchanged = {}, [], [], 0
    for s in slugs:
        f = ARTICLES / s / "page.tsx"
        src = f.read_text()
        m = HEADER_RX.search(src)
        if not m:
            no_header.append(s)
            continue
        k = mapping.get(s)
        if k and not (IMG / f"{k}.webp").exists():
            missing_img.append((s, k))
            k = None
        attrs = STYLE_RX.sub("", m.group(2))
        if k:
            attrs += (f' style={{{{ ["--subhero" as string]: "url(/images/subhero/{k}.webp)", '
                      f'["--subhero-m" as string]: "url(/images/subhero/{k}-m.webp)" }}}}')
            applied[s] = k
        new = src[:m.start()] + m.group(1) + f"<header{attrs}>" + src[m.end():]
        if new == src:
            unchanged += 1
        elif not check:
            f.write_text(new)
    if not check:
        (ROOT / "data" / "subhero-map.json").write_text(json.dumps(applied, ensure_ascii=False, indent=1, sort_keys=True) + "\n")
    print(f"pages {len(slugs)} / 画像あり {len(applied)} / 画像なし（スタジオ写真）{len(slugs) - len(applied) - len(no_header)} / "
          f"帯なし {len(no_header)} {no_header} / 変更なし {unchanged} / 画像ファイル未作成 {len(missing_img)}")
    if missing_img:
        print("  未作成:", sorted({k for _, k in missing_img}))


if __name__ == "__main__":
    main()

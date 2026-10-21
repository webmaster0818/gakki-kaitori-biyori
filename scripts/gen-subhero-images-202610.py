#!/usr/bin/env python3
"""配下ページの見出し帯（ファーストビュー）用テーマ画像を Nano Banana Pro で作る（2026-10-21 MediaXAI 承認「テーマ単位で約160枚・約3,000円」）。

  python3 scripts/gen-subhero-images-202610.py <key ...|all|instrument|howto|region|extra> [--force]
    → design-proposals/subhero-raw/<key>.png（元画像・リポ外）
    → public/images/subhero/<key>.webp（PC 1200px）と <key>-m.webp（スマホ用に右側を切り出し 780px）
  python3 scripts/gen-subhero-images-202610.py --convert-only   … 元画像から webp だけ作り直す

⚠️ 1回の API 呼び出し＝1枚の課金。呼び出しは design-proposals/subhero-raw/_calls.log に1行ずつ記録する（上限管理）。
⚠️ 楽器は無銘（ロゴ・ブランド名・文字なし）。人物・顔なし。TOP の hero-studio.jpg と同じトーン（チャコール×アンバー・低照度）。
⚠️ 被写体は右半分、左は暗く空ける（帯の文字側へ溶かすため）。
ページへの割り当ては scripts/add-subhero-images-202610.py（data/subhero-map.json）。
"""
import base64, json, os, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "design-proposals" / "subhero-raw"
OUT = ROOT / "public" / "images" / "subhero"
LOG = RAW / "_calls.log"
MODEL = "gemini-3-pro-image-preview"
CAP = 170


def key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    for l in (Path.home() / ".openclaw/workspace/secrets/shiroari-expert-keys.env").read_text().splitlines():
        if l.startswith("GEMINI_API_KEY="):
            return l.split("=", 1)[1].strip().strip('"')


STYLE = (
    "Photorealistic editorial photograph, shot on a full-frame camera with a 50mm lens at f/2.2, natural perspective. "
    "Warm low-key tungsten lighting like a quiet recording studio at night, deep charcoal shadows with soft amber highlights, "
    "calm and refined mood, realistic materials with subtle real-world wear, gentle film grain, true-to-life proportions. "
    "Wide 16:9 composition: the main subject stands in the RIGHT half of the frame, fully visible with generous empty margin "
    "on all sides (not touching the top, bottom or right edge). The LEFT 45% of the frame is a very dark, nearly black, "
    "softly out-of-focus empty background with nothing important in it. "
    "No people, no faces, no hands, no human figures. "
    "Absolutely no text, letters, numbers, logos, brand names, model names, badges or labels anywhere: headstocks, bodies, "
    "panels, cases, boxes, papers and signs are all completely blank and unbranded; guitar headstocks are plain wood or paint "
    "with no decal, script or emblem; amplifier grilles have no logo plate. "
    "Instruments must be anatomically correct and realistic (correct number of strings and tuning pegs, correct key patterns, "
    "single neck, no melted or fused parts). "
    "Any electric guitar has an original body and a rounded 3+3 tuner headstock, clearly not a replica of a Fender "
    "Stratocaster/Telecaster or a Gibson Les Paul. "
    "Not a 3D render, no CGI look, no glossy plastic look, no neon, no purple or blue color cast, no floating objects, "
    "no surreal or fantasy elements, no collage."
)
ROOM = ("in a dim, warm room with a plain dark wood-panel wall and a few soft out-of-focus warm lights; "
        "no amplifiers, speakers or other equipment in the background")

# ---- 楽器（instrument 49本＋ブランド/型番用の補助7枚）----
INSTRUMENT = {
    "audio-interface-kaitori": "a compact desktop audio interface with a few knobs and input jacks, next to closed-back studio headphones and a coiled cable on a wooden desk; the front panel is plain and unmarked",
    "bass-kaitori": "a four-string electric bass guitar (exactly four strings and four tuning pegs) with a natural wood body, standing on a floor stand",
    "cello-kaitori": "a cello with four strings resting on a cello stand, its bow laid beside it, warm varnished spruce and maple",
    "clarinet-kaitori": "a black wooden clarinet with silver keys standing upright on a small instrument peg, an open lined case beside it on a wooden table",
    "contrabass-kaitori": "an upright double bass (contrabass) with four strings leaning against a wall, with its bow, warm aged varnish",
    "denshi-piano-kaitori": "a modern home digital piano with a dark wooden cabinet and a full 88-key keyboard with correct black and white key pattern, a padded bench in front",
    "dj-kizai-kaitori": "a two-deck DJ controller with two large jog wheels and a mixer section in the center on a dark table, faint amber button glow, blank unmarked surface",
    "drum-kaitori": "a complete acoustic drum kit (bass drum, snare, two rack toms, floor tom, hi-hat and two cymbals) with plain unprinted drum heads and natural wood shells",
    "effector-kaitori": "a pedalboard with five compact guitar effect pedals connected by short patch cables, small knobs, each pedal face plain and unmarked",
    "flute-kaitori": "a silver concert flute resting in its open case lined with dark blue velvet, on a wooden table",
    "grand-piano-kaitori": "a black grand piano with its lid propped open, correct keyboard pattern, glossy reflections, a bench in front",
    "guitar-amp-kaitori": "a vintage-style tube guitar combo amplifier with a woven cloth grille and a few chrome knobs, plain front without any badge, a coiled instrument cable on top",
    "guitar-kaitori": "an electric guitar and an acoustic guitar of original generic designs standing side by side on two floor stands; the electric guitar has a rounded double-cutaway body in deep red and a 3+3 tuner headstock of an original shape (not a Fender or Gibson shape)",
    "harp-kaitori": "a full-size concert pedal harp with natural wood column and many strings",
    "ihin-gakki-kaitori": "a vintage acoustic guitar and a closed old violin case resting quietly in a softly lit traditional Japanese room with shoji screens, a respectful, nostalgic atmosphere",
    "kabi-gakki-kaitori": "an old acoustic guitar with a worn, slightly faded finish lying on an open aged hard case, a soft cleaning cloth beside it, quiet storage-room light",
    "keyboard-kaitori": "a portable 61-key electronic keyboard on an X-shaped stand, correct key pattern, plain unmarked panel",
    "koto-kaitori": "a traditional Japanese koto (long zither with 13 strings and white movable bridges) lying on a tatami floor, with a cloth cover folded beside it",
    "kowareta-gakki-kaitori": "an electric guitar of an original generic design (rounded double-cutaway body, 3+3 tuner headstock, not a Fender or Gibson shape) with one snapped string curling loose, lying on a repair workbench with a few hand tools and a soft mat",
    "microphone-kaitori": "a large-diaphragm studio condenser microphone in a shock mount on a stand, with a pop filter, plain body without markings",
    "midi-keyboard-kaitori": "a compact 49-key MIDI controller keyboard with a row of pads and knobs on a desk next to a closed laptop, correct key pattern, plain surface",
    "oboe-kaitori": "a black oboe with silver keys lying on a wooden table beside its open case and a small reed case",
    "piano-kaitori": "a polished upright piano in a quiet home living room, fallboard open showing correct key pattern, a padded bench in front",
    "saxophone-kaitori": "a lacquered brass alto saxophone standing on a saxophone stand",
    "shakuhachi-kaitori": "a bamboo shakuhachi flute resting on a dark lacquered wooden tray with a folded silk cloth, on a tatami floor",
    "shamisen-kaitori": "a Japanese shamisen with three strings and a long slim neck resting on a stand on tatami, its plectrum (bachi) beside it",
    "synthesizer-kaitori": "an analog synthesizer with many knobs and a short keyboard on a wooden desk, a few patch cables plugged in, plain unmarked panel, soft amber indicator lights",
    "trombone-kaitori": "a brass tenor trombone resting on a trombone stand, slide and bell clearly visible",
    "trumpet-kaitori": "a standard B-flat brass trumpet with correct, realistic tubing (mouthpiece, leadpipe, three piston valves in a row, tuning slide and a single bell) lying on its side on a folded dark cloth on a wooden table, seen clearly from the side",
    "violin-kaitori": "a violin with four strings and its bow resting in an open violin case lined with dark velvet",
    "wadaiko-kaitori": "a Japanese taiko drum with a wooden body and leather head on a low wooden stand, two wooden drumsticks (bachi) resting on top",
    "acoustic-guitar-kaitori": "a dreadnought steel-string acoustic guitar with natural spruce top (exactly six strings and six tuning pegs) on a floor stand",
    "classic-guitar-kaitori": "a classical nylon-string guitar with a slotted headstock (six strings) leaning on a wooden chair",
    "ukulele-kaitori": "a concert ukulele with four strings made of warm koa wood, resting on a small stand",
    "mandolin-kaitori": "a teardrop-shaped mandolin with eight strings in four pairs, resting on a wooden table",
    "banjo-kaitori": "a five-string banjo with a round drum-like body and wooden resonator, on a stand",
    "accordion-kaitori": "a piano accordion with bellows and mother-of-pearl style keys resting on a wooden chair, plain body",
    "harmonica-kaitori": "two chromatic and diatonic harmonicas resting on an open small case on a wooden table, plain covers without engraving",
    "electone-kaitori": "a home electronic organ with two tiers of keyboards and a wooden pedalboard below, plain cabinet, bench in front",
    "viola-kaitori": "a viola with four strings and its bow lying on a dark wooden table beside its open case",
    "euphonium-kaitori": "a silver-plated euphonium with four valves resting upright on a padded stand",
    "horn-kaitori": "a brass French horn with its coiled tubing and wide bell resting on a wooden table",
    "turntable-kaitori": "a direct-drive turntable with a black vinyl record and a tonearm on a wooden cabinet, plain unmarked plinth",
    "mixer-kaitori": "a compact analog audio mixing console with rows of knobs and faders on a desk, plain unmarked surface, faint amber meter lights",
    "tuba-kaitori": "a large brass tuba standing on the floor on a padded mat",
    "recorder-kaitori": "a wooden soprano recorder and an alto recorder lying on a folded cloth on a wooden table",
    "cajon-kaitori": "a wooden cajon box drum with a plain front plate, standing on a rug",
    "cornet-kaitori": "a standard brass cornet with correct, realistic compact wrapped tubing, three piston valves and a single bell, lying on a folded dark cloth on a wooden table beside its closed case, seen clearly from the side",
    "kalimba-kaitori": "a wooden kalimba thumb piano with metal tines resting on a linen cloth",
}
EXTRA = {
    "eguitar-solid": "a solid-body electric guitar of an original boutique design: softly rounded symmetric double-cutaway body in translucent cherry red, two pickups, a compact rounded 3+3 tuner headstock (clearly NOT a Fender Stratocaster or Gibson shape), on a floor stand",
    "eguitar-singlecut": "a single-cutaway solid-body electric guitar of an original boutique design in a deep amber finish with a natural wood binding, two humbucking pickups and a small rounded 3+3 tuner headstock (clearly NOT a Gibson Les Paul or Fender Telecaster replica), on a floor stand",
    "eguitar-semi": "a single-cutaway hollow-body jazz archtop electric guitar with two f-holes in a warm walnut-brown finish, one floating pickup and a rounded 3+3 tuner headstock of an original design (clearly NOT a Gibson ES-335 replica), on a floor stand",
    "eguitar-offset": "an offset-waist solid-body electric guitar of an original boutique design in a pale seafoam-cream finish with a plain black pickguard, two pickups and a compact rounded 3+3 tuner headstock (clearly NOT a Fender Jazzmaster or Jaguar replica), on a floor stand",
    "eguitar-superstrat": "a sleek double-cutaway electric guitar with a pointed headstock and dark satin black finish, original generic design, on a floor stand",
    "amp-stack": "a guitar amplifier head sitting on a 4x12 speaker cabinet with a dark woven grille, a row of small knobs, plain front without any badge",
    "cymbals": "a snare drum and two brass cymbals on stands, plain unprinted drumhead, close view",
}
# ---- 売り方・手続き（howto）。帯を持たない2本（gakki-no-kaitoriyasan / -hyoban）は作らない ----
HOWTO = {
    "gakki-kaitori-osusume": "a tidy appraisal counter where an acoustic guitar standing on a stand, an alto saxophone standing upright on its stand and a small keyboard are arranged side by side for comparison, each instrument clearly and correctly formed",
    "hikakaku-gakki-kaitori-kuchikomi": "an open blank notebook and a pen on a wooden desk next to an electric guitar on a stand, a quiet evaluation mood",
    "uriel-gakki-kaitori-kuchikomi": "a smartphone lying face down and a cup of coffee on a wooden table beside a trumpet in an open case, calm evening reading mood",
    "band-kaisan-kizai": "an empty rehearsal room after the last session: guitar amps, a drum kit, guitars in gig bags and neatly coiled cables",
    "daigaku-sotsugyo-gakki": "a student apartment room with taped cardboard moving boxes and an acoustic guitar in a soft gig bag leaning against them, soft spring light",
    "gakki-danshari": "a tidy, minimal room where a few instruments (a guitar, a ukulele, a small keyboard) are sorted next to two plain cardboard boxes",
    "gakki-kaitori-sagi": "a closed guitar hard case secured with a small brass padlock on a wooden table, a cautious, protective mood",
    "gakki-kaitori-vs-kojin-baibai": "an electric guitar on a stand next to a smartphone lying face down and a plain cardboard shipping box on a table",
    "gakki-shobun-houhou": "several instruments (a guitar case, a keyboard, a violin case, a small amp) neatly lined up in an entrance hall (genkan) ready to be taken out",
    "hikkoshi-gakki-shobun": "an upright piano wrapped in padded moving blankets beside stacked plain cardboard moving boxes in an empty room",
    "hitsuyou-shorui": "blank paperwork forms, a pen and a small round seal stamp on a wooden desk beside a closed saxophone case; papers are completely blank",
    "kaitori-houhou-hikaku": "an acoustic guitar beside a sealed plain cardboard shipping box and a padded gig bag in an entrance hall",
    "kaitori-houshiki-tetteihikaku": "an appraiser's desk with a magnifying glass, a small flashlight and a ruler next to an electric guitar lying on a soft mat",
    "kaitori-nagare": "an electric guitar lying on an inspection workbench under a warm desk lamp, with a blank tag tied to the tuning peg and a small toolkit",
    "kodomo-piano-yameta": "a home upright piano with its fallboard closed, an empty music stand and a small cushion on the bench, quiet afternoon light in a family living room",
    "kougaku-satei-ranking": "premium instruments displayed on dark velvet: a vintage sunburst archtop guitar, a gold lacquered saxophone and a violin",
    "matome-uri-kaitori": "many instruments grouped together on a wooden floor: two guitars, a bass, effect pedals, a small keyboard and a microphone",
    "mercari-vs-gyosha": "a smartphone lying face down beside an effects pedal and a roll of bubble wrap on a wooden table, a guitar on a stand behind",
    "mibunsho-hitsuyou": "a leather wallet and a plain blank card on a wooden desk beside a pen and a guitar pick, the card has no printing",
    "miseinen-baikyaku": "a teenager's bedroom with an electric guitar on a stand, a small practice amp and a school backpack on a chair",
    "oya-gakki-seiri": "an old Japanese family home room with tatami, a vintage upright piano, a koto case and a dusty guitar case, nostalgic light",
    "renshu-shinai-gakki": "an acoustic guitar leaning in a quiet corner of a room beside a closed gig bag, lightly dusty, unused for a long time",
    "satei-yomikata": "a blank sheet of paper, a pen and a magnifying glass on a desk beside a violin lying in its case; the paper has no writing",
    "senmonten-vs-recycle": "a boutique instrument shop interior with a wall of hanging guitars and warm display lights, no signs",
    "shumi-yameta-gakki": "an alto saxophone in its open case on a shelf with a folded cleaning cloth, a hobby put away",
    "souba-ichiran": "a long wooden shelf displaying a row of instruments: an electric guitar, a trumpet, a violin, a ukulele and a saxophone, like a calm catalog",
    "souko-seiri-gakki": "a storage room with wooden shelves holding instrument hard cases, an amp and a keyboard case, dusty warm light",
    "takaku-uru-kotsu": "an electric guitar being cleaned on a workbench: a polishing cloth, a small bottle of polish, a new set of strings in plain packaging",
    "gakki-sokujitsu-kaitori": "an electric guitar in an open hard case on a shop counter in the evening, a blurred wall clock without numbers in the background",
    "gakki-takuhai-kaitori": "an acoustic guitar being packed into a plain cardboard box with bubble wrap and packing tape on the floor",
    "gakki-shucchou-kaitori": "a living room with an upright piano and a drum kit, and a professional appraiser's tool bag placed on the floor (no person)",
    "vintage-gakki-kaitori": "a vintage sunburst archtop guitar with aged finish resting on an old tweed hard case",
    "gakki-fuzokuhin-kaitori": "an open guitar hard case with its accessories laid out: a strap, a coiled cable, a plain cardboard original box and a blank warranty card",
    "gakki-hozon-houhou": "an acoustic guitar inside an open hard case with a small analog hygrometer and a humidity pack, in a cool, tidy storage cabinet",
    "gakki-kaitori-jiki": "an acoustic guitar on a stand by a window with soft late-autumn light, a blank wall calendar out of focus behind",
}
# ---- 地域（8地方×2＋関東・近畿・中部は3枚目）。実在のランドマーク・看板・文字は描かない ----
REGION_SET = {
    "hokkaido": "a cozy log-cabin style room; through a large window on the right, soft falling snow and white birch trees at blue dusk",
    "tohoku": "a traditional Japanese farmhouse room with dark timber beams; through a window, open snowy rice fields and distant soft mountains (no thatched-roof houses, no villages, no buildings)",
    "kanto": "a modern apartment at night; through a large window, soft out-of-focus city lights with no identifiable buildings",
    "chubu": "a wooden room; through a large window, misty layered mountain ridges and a calm lake at dusk (no famous mountains)",
    "kinki": "a traditional wooden townhouse room with a wooden lattice screen and tatami, a small moss garden visible outside",
    "chugoku": "a room overlooking a calm inland sea with small green islands at golden hour through a large window",
    "shikoku": "a room with a view of a clear river valley and green terraced hills in soft evening light through a window",
    "kyushu": "a warm room with a view of a calm sea and subtropical palm plants in golden evening light through a large window",
}
REGION_A = {  # 地域A＝ギター系
    "hokkaido": "an acoustic guitar on a stand next to a wooden chair",
    "tohoku": "an acoustic guitar on a stand beside a small cast-iron wood stove",
    "kanto": "an electric guitar of an original design (rounded double-cutaway body in deep red, rounded 3+3 tuner headstock) on a stand and a small plain amp without any badge",
    "chubu": "an acoustic guitar on a stand",
    "kinki": "an acoustic guitar leaning on a stand and a shamisen resting beside it",
    "chugoku": "an acoustic guitar on a stand and a ukulele resting on a low wooden chest",
    "shikoku": "an acoustic guitar on a stand next to a wooden stool",
    "kyushu": "an Okinawan sanshin (three-string lute with a snakeskin-covered body and long black neck) resting on a stand next to an acoustic guitar",
}
REGION_B = {  # 地域B＝鍵盤・管弦
    "hokkaido": "an upright piano with a bench",
    "tohoku": "a violin resting on a wooden chair and a music stand",
    "kanto": "an alto saxophone on a stand beside a digital keyboard",
    "chubu": "an upright piano with a bench",
    "kinki": "a cello on a stand with its bow",
    "chugoku": "an upright piano with a bench",
    "shikoku": "a trumpet and an alto saxophone on stands",
    "kyushu": "an acoustic guitar leaning on a chair and a plain wooden cajon box drum with no logo or marking",
}

REGION_C = {  # 記事数の多い地方だけ3枚目
    "kanto": "an acoustic guitar on a stand and a violin resting on a small side table",
    "kinki": "an upright piano with a bench",
    "chubu": "an alto saxophone on a stand and a music stand",
}


def prompts():
    p = {}
    for k, s in {**INSTRUMENT, **EXTRA}.items():
        k = k.replace("-kaitori", "") if k.endswith("-kaitori") else k
        p[f"inst-{k}"] = f"Subject: {s}, {ROOM}. " + STYLE
    for k, s in HOWTO.items():
        p[f"howto-{k}"] = f"Scene: {s}. Warm, dim interior. " + STYLE
    for r, setting in REGION_SET.items():
        for v, d in (("a", REGION_A), ("b", REGION_B), ("c", REGION_C)):
            if r not in d:
                continue
            p[f"region-{r}-{v}"] = (f"Scene: {d[r]} in {setting}. A calm, local, lived-in atmosphere in Japan, "
                                    "no landmarks, no signs, no writing. The window view and instruments sit in the right half. " + STYLE)
    return p


def calls():
    return len(LOG.read_text().splitlines()) if LOG.exists() else 0


def gen(name, prompt):
    if calls() >= CAP:
        sys.exit(f"CAP {CAP} reached")
    body = json.dumps({"contents": [{"parts": [{"text": prompt}]}],
                       "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9", "imageSize": "1K"}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json", "x-goog-api-key": key()})
    with LOG.open("a") as f:
        f.write(f"{time.strftime('%H:%M:%S')} {name}\n")
    for attempt in range(2):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                d = json.loads(r.read())
            break
        except Exception as e:  # タイムアウト等。再送は課金されうるので1回だけ、ログにも数える
            print("ERR", name, type(e).__name__, str(e)[:200], flush=True)
            if attempt == 1:
                return False
            with LOG.open("a") as f:
                f.write(f"{time.strftime('%H:%M:%S')} {name} (resend)\n")
            time.sleep(5)
    for part in d.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        if "inlineData" in part:
            raw = RAW / f"{name}.png"
            if raw.exists():  # 作り直し前の版は残す
                raw.rename(RAW / f"{name}.prev{int(time.time())}.png")
            raw.write_bytes(base64.b64decode(part["inlineData"]["data"]))
            print("ok", name, f"(calls={calls()})", flush=True)
            return True
    print("no image", name, json.dumps(d)[:300], flush=True)
    return False


def convert(name):
    from PIL import Image
    src = RAW / f"{name}.png"
    im = Image.open(src).convert("RGB")
    w, h = im.size
    pc = im.resize((1200, round(1200 * h / w)), Image.LANCZOS)
    pc.save(OUT / f"{name}.webp", "WEBP", quality=72, method=6)
    # スマホ：被写体のある右側を切り出す（横 26%〜98%・縦 8%〜92%＝約1.55:1。CSS の表示枠 64vw とほぼ同じ比率）
    m = im.crop((round(w * 0.26), round(h * 0.08), round(w * 0.98), round(h * 0.92)))
    m = m.resize((780, round(780 * m.size[1] / m.size[0])), Image.LANCZOS)
    m.save(OUT / f"{name}-m.webp", "WEBP", quality=70, method=6)


if __name__ == "__main__":
    RAW.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    P = prompts()
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    force = "--force" in sys.argv
    sel = []
    for a in args or ["all"]:
        if a == "all":
            sel += list(P)
        elif a in ("instrument", "howto", "region"):
            sel += [k for k in P if k.startswith({"instrument": "inst-", "howto": "howto-", "region": "region-"}[a])]
        elif a in P:
            sel.append(a)
        else:
            sys.exit(f"unknown key {a}")
    if "--convert-only" in sys.argv:
        for k in sel:
            if (RAW / f"{k}.png").exists():
                convert(k)
        sys.exit()
    for k in sel:
        if (RAW / f"{k}.png").exists() and not force:
            continue
        if gen(k, P[k]):
            convert(k)
    print("total calls", calls())

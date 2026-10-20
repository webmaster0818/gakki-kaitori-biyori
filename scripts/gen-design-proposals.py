#!/usr/bin/env python3
"""楽器買取びより のデザイン案を Nano Banana Pro で作る（2026-10-21 MediaXAI「サイトデザイン改修・他サイトと同様に」）。
brandwatchbank（scripts/gen-design-proposals.py）と同じ進め方＝FV3案＋ロゴ5案を先に見せる。
  python3 scripts/gen-design-proposals.py [logo|fv|all]   → design-proposals/（リポには入れない）
⚠️ FV の数字は実データで確かめた事実だけ: 572ページ・比較3社（ヒカカク！/ティファナ/ウリエル）・相場ランキング51モデル・ヤフオク落札データ毎週更新。
⚠️ 楽器は実在ブランドのロゴ・ヘッド形状の銘を描かせない（商標）。
"""
import base64, json, os, sys, urllib.request
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent; OUT = ROOT / "design-proposals"; MODEL = "gemini-3-pro-image-preview"
def key():
    if os.environ.get("GEMINI_API_KEY"): return os.environ["GEMINI_API_KEY"]
    for l in (Path.home() / ".openclaw/workspace/secrets/shiroari-expert-keys.env").read_text().splitlines():
        if l.startswith("GEMINI_API_KEY="): return l.split("=", 1)[1].strip().strip('"')
LOGO = ("Minimal brand mark for a Japanese musical instrument buyback comparison and price data website named 楽器買取びより. "
        "Flat vector style, two colors maximum, simple geometric shapes, consistent stroke weight, generous negative space, centered on pure white, "
        "crisp edges, no gradients, no shadows, no text, no letters, no existing brand logos. Concept: ")
LOGOS = {
  "logo-a-pick-sun": "a guitar pick shape with a small rising sun inside it (びより = fine weather day), warm amber #d9a43b and deep brown #3b2620",
  "logo-b-headstock-bars": "an abstract guitar headstock silhouette whose six tuning pegs become ascending bar chart bars, deep brown #3b2620 with amber accent",
  "logo-c-soundhole-dial": "a round acoustic guitar soundhole ring with a single gauge needle inside, like a price meter, forest green #2f5d4a and cream",
  "logo-d-note-tag": "an eighth music note whose flag forms a price tag with a punched hole, deep navy #1d2b45 and amber #d9a43b",
  "logo-e-keys-sun": "five piano keys (white and black) under a small half sun arc, simple and friendly, charcoal #222 and warm orange #e08a2c",
}
FV_BASE = ("Website first-view hero design mockup, 16:9 desktop, for a Japanese musical instrument buyback comparison and price data guide site. "
  "Trustworthy, warm, modern editorial design, generous whitespace, clean grid, no emoji, no clip art, no cheap sale banners, no starbursts. "
  "Clean Japanese gothic sans (Noto Sans JP style) for UI, headline bold. "
  "Photorealistic photography of unbranded instruments (electric guitar, acoustic guitar, saxophone, keyboard), no brand names or logos on headstocks or bodies. "
  "All Japanese text rendered cleanly, legibly, exactly as given, no other text: small header logo text 「楽器買取びより」 and nav "
  "「おすすめ業者」「相場ランキング」「楽器の種類」「ブランド」「地域」, headline 「その楽器、いくらで売れる？」, sub copy 「ヤフオク落札データの相場と、買取サービス3社の比較を一か所で。」, "
  "a slim search box with placeholder 「楽器名・モデル名で探す（例：レスポール）」, two buttons 「おすすめ3社を比較」「相場ランキングを見る」, "
  "and a stat row with four items 「掲載 572ページ」「比較 3社」「相場 51モデル」「毎週更新」. ")
FVS = {
  "fv-1-workshop": FV_BASE + "Palette: warm cream #faf6ef background, deep walnut brown #3b2620 text, amber #d9a43b accent buttons. Layout: left 45% headline, search and buttons; right 55% a softly lit repair workshop bench photo with an acoustic guitar and tools, rounded corners; stats as four cards under the hero.",
  "fv-2-studio": FV_BASE + "Palette: deep charcoal #17181b background, white text, electric amber #f2b134 accent. Layout: full-bleed dark recording studio photo with an electric guitar on a stand and amp glow, text left-aligned over a dark gradient, a small floating data card showing a price chart line labeled 「相場ランキング」 on the right, stats strip along the bottom with thin dividers.",
  "fv-3-data": FV_BASE + "Palette: clean white #ffffff background, forest green #2f5d4a primary, warm sand #efe6d6 panels. Layout: centered headline and wide search box at top, below it a row of four instrument photo tiles (guitar, bass, saxophone, keyboard) each with a small label, stats row of four bordered items at the bottom; feels like a reliable data service.",
}
def gen(name, prompt, aspect):
    out = OUT / f"{name}.png"
    if out.exists(): print("skip", name); return
    body = json.dumps({"contents": [{"parts": [{"text": prompt}]}], "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": aspect, "imageSize": "2K"}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={key()}"
    with urllib.request.urlopen(urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}), timeout=240) as r:
        d = json.loads(r.read())
    for p in d["candidates"][0]["content"]["parts"]:
        if "inlineData" in p: out.write_bytes(base64.b64decode(p["inlineData"]["data"])); print("ok", name); return
    print("no image", name)
if __name__ == "__main__":
    from concurrent.futures import ThreadPoolExecutor
    w = sys.argv[1] if len(sys.argv) > 1 else "all"; OUT.mkdir(exist_ok=True)
    jobs = []
    if w in ("logo", "all"): jobs += [(n, LOGO + c, "1:1") for n, c in LOGOS.items()]
    if w in ("fv", "all"): jobs += [(n, p, "16:9") for n, p in FVS.items()]
    with ThreadPoolExecutor(8) as ex: list(ex.map(lambda j: gen(*j), jobs))

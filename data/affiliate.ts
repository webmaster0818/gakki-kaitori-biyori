/**
 * アフィリエイトリンクの一元管理（2026-08-06 新設）。
 *
 * 背景: ウリエルは全記事に生URL（https://uriel-cuore.co.jp）で掲載されており、
 * 送客していたのに成果が計上されない状態だった（597箇所）。
 * 今後リンクが変わったときに597箇所を触らなくて済むよう、ここだけを直せばよい形にする。
 *
 * ⚠️ felmatのリンクは「計測パラメータ込みで1本」なので、末尾を編集しないこと。
 * ⚠️ インプレッション計測用の1x1画像（IMP）はテキストリンクとセットで置く想定。
 */

/** ウリエル（uriel）— 出張買取。楽器は公式に取扱いあり（ギター/管楽器/和楽器/ピアノ等・出張料/査定料無料） */
export const URIEL = {
  name: "ウリエル",
  /** felmat計測リンク（テキスト用） */
  url: "https://t.felmat.net/fmcl?ak=A11184N.1.11542509.O138027B",
  /** インプレッション計測用1x1 */
  imp: "https://t.felmat.net/fmimp/A11184N.11542509.O138027B",
  /** バナー（サイズ別）。ak と fmimg はセットで対応しているので組み替えないこと */
  banners: {
    rect300x250: {
      href: "https://t.felmat.net/fmcl?ak=A11184N.1.L154254D.O138027B",
      img: "https://t.felmat.net/fmimg/A11184N.L154254D.O138027B",
      width: 300,
      height: 250,
    },
    mobile320x50: {
      href: "https://t.felmat.net/fmcl?ak=A11184N.1.H154253K.O138027B",
      img: "https://t.felmat.net/fmimg/A11184N.H154253K.O138027B",
      width: 320,
      height: 50,
    },
    mobile320x100: {
      href: "https://t.felmat.net/fmcl?ak=A11184N.1.J154252S.O138027B",
      img: "https://t.felmat.net/fmimg/A11184N.J154252S.O138027B",
      width: 320,
      height: 100,
    },
  },
} as const;

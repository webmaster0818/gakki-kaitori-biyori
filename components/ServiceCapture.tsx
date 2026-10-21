/**
 * 記事内で各社を紹介する見出しの直下に置く、公式サイトのキャプチャ（2026-10-21 MediaXAI「公式サイトのキャプチャ掲載も徹底して」）。
 * 画像は public/images/services/{id}.webp（1280×800・ファーストビュー）。リンクは付けない（記事のリンク構成を変えないため）。
 */
const CAPTURES = {
  hikakaku: { name: "ヒカカク！", domain: "hikakaku.com" },
  tifana: { name: "ティファナ", domain: "tifana.net" },
  uriel: { name: "ウリエル", domain: "uriel-cuore.co.jp" },
} as const;

/** 撮影日（撮り直したらここを更新） */
const CAPTURED_ON = "2026年10月21日";

export default function ServiceCapture({ id }: { id: keyof typeof CAPTURES }) {
  const c = CAPTURES[id];
  return (
    <figure className="not-prose my-4 max-w-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/services/${id}.webp`}
        alt={`${c.name} 公式サイトのトップページ`}
        width={1280}
        height={800}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-lg border border-warm-border shadow-sm bg-white"
      />
      <figcaption className="mt-1.5 text-[11px] text-warm-gray">
        画像：{c.name} 公式サイト（{c.domain}）{CAPTURED_ON}時点
      </figcaption>
    </figure>
  );
}

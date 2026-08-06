import { URIEL } from "@/data/affiliate";

/**
 * ウリエル（出張買取）のバナー。
 *
 * 置き場所の方針（適材適所・2026-08-06）:
 *   出張買取が本当に効くのは「自分で持ち込めない楽器」なので、
 *   ピアノ系（グランド/アップライト/電子）と和楽器（琴・三味線）ページに限定して置く。
 *   ギター等の持ち運べる楽器ページには置かない（宅配のほうが読者の利益になるため）。
 *
 * バナーはfelmat提供のサイズをそのまま使う（画像URLとakはセットなので組み替えない）。
 * 画面幅で出し分け: PC＝300x250 / モバイル＝320x100。
 */
export default function UrielVisitBanner({
  note = "持ち運べない大型楽器は、出張買取だと自宅で完結します。",
}: {
  note?: string;
}) {
  const { rect300x250, mobile320x100 } = URIEL.banners;
  return (
    <aside className="my-8 not-prose">
      <p className="text-[11px] text-warm-gray mb-2">PR</p>
      <p className="text-sm text-ink mb-3">{note}</p>

      {/* PC: 300x250 */}
      <a
        href={rect300x250.href}
        target="_blank"
        rel="nofollow noopener"
        className="hidden sm:inline-block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rect300x250.img}
          width={rect300x250.width}
          height={rect300x250.height}
          alt="ウリエルの出張買取"
          style={{ border: "none" }}
        />
      </a>

      {/* モバイル: 320x100 */}
      <a
        href={mobile320x100.href}
        target="_blank"
        rel="nofollow noopener"
        className="inline-block sm:hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mobile320x100.img}
          width={mobile320x100.width}
          height={mobile320x100.height}
          alt="ウリエルの出張買取"
          style={{ border: "none" }}
        />
      </a>

      <p className="text-[11px] text-warm-gray mt-2">
        出張料・査定料・キャンセル料は無料（ウリエル公式サイトの記載による・2026年8月時点）。
      </p>
    </aside>
  );
}

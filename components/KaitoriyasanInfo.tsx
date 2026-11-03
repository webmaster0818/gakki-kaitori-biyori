import Link from "next/link";
import type { ReactNode } from "react";

/**
 * 「楽器の買取屋さん」（UNI SOUND株式会社）の基本情報。
 *
 * 店名指名クエリ「楽器の買取屋さん（横浜店）」が地域記事（横浜・川崎・神戸）に着地しているため、
 * その記事の中で公式の公表内容だけを答える節（2026-11-03 成長ルーチン）。
 * - 提携していない業者なので計測リンクは付けない（公式トップ・公式ページへの通常リンクのみ）
 * - 口コミ・評点は載せない（当サイトで件数・評点を確認できていないため）
 * - 電話番号は転載しない（10/22 方針：公式で確認へ誘導）
 * 値を変えるときは公式を開き直して ASOF を更新すること。
 */

const ASOF = "2026年11月3日";
const OFFICIAL = "https://gakkikaitori.co.jp/";
const COMPANY = "https://gakkikaitori.co.jp/company/";
const TRIP = "https://gakkikaitori.co.jp/kaitori/trip/";
const DELIV = "https://gakkikaitori.co.jp/kaitori/deliv/";

type Area = "yokohama" | "kawasaki" | "kobe";

const AREA: Record<
  Area,
  { heading: string; shopRow: { k: string; v: string }; tripArea: string; tripUrl: string }
> = {
  yokohama: {
    heading: "楽器の買取屋さん（横浜店）の基本情報",
    shopRow: {
      k: "横浜店",
      v: "横浜市中区万代町1丁目2-3 座間ビル3F／営業時間 10時〜19時（会社概要の店舗欄）",
    },
    tripArea: "神奈川県全域（横浜市を含む）が出張買取の対象",
    tripUrl: "https://gakkikaitori.co.jp/area/kanagawa/yokohama/",
  },
  kawasaki: {
    heading: "楽器の買取屋さん（横浜店・川崎への出張）の基本情報",
    shopRow: {
      k: "最寄りの店舗",
      v: "川崎市内の店舗は会社概要に掲載なし。神奈川県内は横浜店（横浜市中区万代町1丁目2-3 座間ビル3F・営業時間 10時〜19時）と厚木店（厚木市愛甲東1丁目13-1）",
    },
    tripArea: "神奈川県全域（川崎市を含む）が出張買取の対象",
    tripUrl: "https://gakkikaitori.co.jp/area/kanagawa/kawasaki/",
  },
  kobe: {
    heading: "楽器の買取屋さん（神戸への出張・近畿の店舗）の基本情報",
    shopRow: {
      k: "最寄りの店舗",
      v: "兵庫県内の店舗は会社概要に掲載なし。近畿は大阪門真店（門真市四宮5丁目3-16）と大阪心斎橋店（大阪市中央区南船場3丁目8-7 三栄ムアビル603号室）",
    },
    tripArea: "兵庫県全域（神戸市を含む）が出張買取の対象",
    tripUrl: "https://gakkikaitori.co.jp/area/hyogo/kobe/",
  },
};

export default function KaitoriyasanInfo({ area }: { area: Area }) {
  const a = AREA[area];
  const rows: { k: string; v: ReactNode }[] = [
    {
      k: "運営会社",
      v: "UNI SOUND株式会社（古物営業許可 神奈川県公安委員会 第451310006356号）",
    },
    {
      k: "本社所在地",
      v: "横浜市中区新山下3-4-17 カリカチュアビル1F（公式に「こちらの方では買取は行っていません」と記載）",
    },
    { k: a.shopRow.k, v: a.shopRow.v },
    {
      k: "出張買取",
      v: (
        <>
          {a.tripArea}（
          <a href={a.tripUrl} target="_blank" rel="noopener" className="underline">
            公式の地域ページ
          </a>
          ）。訪問・査定費は無料、「最短即日30分でご訪問」、その場で査定し、金額に納得すればその場で現金で買取。査定後のキャンセル料はかからず、出張買取は成約日から8日以内ならクーリングオフができます（
          <a href={TRIP} target="_blank" rel="noopener" className="underline">
            公式の出張買取ページ
          </a>
          ）
        </>
      ),
    },
    {
      k: "宅配買取",
      v: (
        <>
          楽器を梱包して着払いで送り、到着後に査定。成立すると24時間以内に銀行振込。金額に納得できず返送してもらう場合の返送料は利用者負担。身分証明書のコピーと住民票の写しが必要です（
          <a href={DELIV} target="_blank" rel="noopener" className="underline">
            公式の宅配買取ページ
          </a>
          ）
        </>
      ),
    },
    {
      k: "店頭（持ち込み）",
      v: "公式の店舗紹介ページには「店舗を持たず買取用の倉庫のみ」と書かれており、店頭買取の店舗一覧ページ（/kaitori/shop/）は確認日時点で表示されません（ページが見つからない表示）。持ち込みを考えている場合は、事前に公式の電話・フォームで受付の可否を確認してください",
    },
    {
      k: "本人確認・年齢",
      v: "運転免許証などの本人確認書類が必要。18歳以上が対象で、20歳未満は保護者の同意または保護者からの申込みが必要です",
    },
  ];

  return (
    <section>
      <h2 id="kaitoriyasan-info">{a.heading}</h2>
      <p>
        「楽器の買取屋さん」は、UNI SOUND株式会社（横浜市中区）が運営する楽器買取の屋号です。当サイトはこの業者と提携していません。以下は公式サイト（
        <a href={OFFICIAL} target="_blank" rel="noopener" className="underline">
          gakkikaitori.co.jp
        </a>
        ）の
        <a href={COMPANY} target="_blank" rel="noopener" className="underline">
          会社概要
        </a>
        ・買取方法のページに書かれている内容だけをまとめたものです（{ASOF}確認）。
      </p>
      <div className="table-wrapper mb-4">
        <table className="w-full text-sm border border-warm-border rounded-lg overflow-hidden">
          <tbody className="divide-y divide-warm-border">
            {rows.map((r, i) => (
              <tr key={r.k} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                <th scope="row" className="px-4 py-3 text-left font-medium align-top whitespace-nowrap">
                  {r.k}
                </th>
                <td className="px-4 py-3">{r.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-warm-gray">
        出典：楽器の買取屋さん 公式サイト（会社概要・出張買取・宅配買取・地域ページ・店舗紹介ページ、{ASOF}確認）。口コミの件数・評点は当サイトで確認できていないため載せていません。営業時間や受付状況は変わることがあるため、申し込む前に公式サイトで確認してください。
      </p>
      <p className="text-sm">
        全店舗の一覧と、ほかの業者との比べ方は
        <Link href="/articles/gakki-no-kaitoriyasan/" className="text-accent underline hover:opacity-80">
          楽器の買取屋さんとは？運営会社・店舗一覧・対応エリア
        </Link>
        にまとめています。
      </p>
    </section>
  );
}

/**
 * 楽器買取業者の公開情報まとめ（2026-06 時点）
 * 各業者の公式サイトおよび公的に確認できる情報のみ掲載。
 * 推測値は使用せず、明確な情報がない項目は「不明（要問合せ）」と表記する。
 */

export type Dealer = {
  /** 内部識別子 */
  id: string;
  /** 業者名（表示用） */
  name: string;
  /** 公式サイトURL */
  url: string;
  /** 出典として明示するURL（情報の取得元） */
  source: string;
  /** 店舗数の説明 */
  shops: string;
  /** 出張買取対応エリア */
  visitArea: string;
  /** 査定スピード（最短目安） */
  speed: string;
  /** 送料・キャンセル料 */
  fees: string;
  /** 楽器の専門性 */
  expertise: string;
  /** 特徴・強み（短文） */
  strengths: string;
  /** リンクで使うアンカー文 */
  cta: string;
};

export const DEALERS: Dealer[] = [
  {
    id: "ishibashi",
    name: "イシバシ楽器",
    url: "https://www.ishibashi.co.jp/",
    source: "https://www.ishibashi.co.jp/",
    shops: "全国 12 店舗（御茶ノ水本店・渋谷・新宿・池袋・横浜・名古屋栄・心斎橋・梅田・福岡ほか）",
    visitArea: "店頭・出張・宅配の3方法対応。出張は最短当日訪問",
    speed: "店頭買取はその場で支払い／出張買取は最短当日対応",
    fees: "宅配買取は無料梱包キット利用可（送料の詳細は公式要確認）",
    expertise: "楽器専門店（1938年創業）。専属リペアスタッフによる買取後の調整・修理体制",
    strengths: "ギター・ベース・管楽器・シンセまで幅広く対応。複数のポイント還元キャンペーンあり",
    cta: "公式サイトで楽器の買取査定を依頼する",
  },
  {
    id: "shimamura",
    name: "島村楽器",
    url: "https://www.shimamura.co.jp/",
    source: "https://www.shimamura.co.jp/",
    shops: "全国およそ 180 店舗",
    visitArea: "全国の店舗で対応（具体的な出張対応は店舗ごとに要確認）",
    speed: "店頭買取・宅配買取・下取りに対応（詳細時間は公式要確認）",
    fees: "送料・キャンセル料の詳細は公式要確認",
    expertise: "楽器・音楽教室の全国チェーン。下取／買取／中古販売を一本化",
    strengths: "楽器販売・音楽教室・修理まで一貫対応。新品買い替え時の下取りに強い",
    cta: "公式サイトで近くの島村楽器を探す",
  },
  {
    id: "hardoff",
    name: "ハードオフ",
    url: "https://www.hardoff.co.jp/",
    source: "https://www.hardoff.co.jp/",
    shops: "1,000 店舗以上（日本全国・海外含む）",
    visitArea: "店頭・宅配・出張買取に対応（出張は店舗ごとに要確認）",
    speed: "店頭買取はその場で査定・支払い",
    fees: "店頭買取は無料。宅配買取の送料は takuhai-kaitori.hardoff.co.jp で要確認",
    expertise: "リユース総合（楽器・オーディオ・家電・楽器カテゴリで多数取扱）",
    strengths: "業界最大級の店舗網。日本リユース業協会の優良店認定。公式アプリ・オフモールで連携",
    cta: "公式サイトで最寄りのハードオフを探す",
  },
  {
    id: "nanboya",
    name: "なんぼや",
    url: "https://nanboya.com/",
    source: "https://nanboya.com/",
    shops: "全国 140 店舗以上",
    visitArea: "全国対応（店頭・宅配・出張買取）",
    speed: "店頭査定 10〜15 分（1点）／宅配買取は最短当日査定",
    fees: "査定料・梱包材・キャンセル料すべて無料",
    expertise: "総合買取（楽器カテゴリあり。販売チャネルが国内外で広い）",
    strengths: "他社で買取NGの商品にも対応するシステム。GIA等の有資格者在籍",
    cta: "公式サイトで無料査定を依頼する",
  },
  {
    id: "gakki-kaitori-com",
    name: "楽器買取ドットコム（ミツノ楽器）",
    url: "https://gakki-kaitori.com/",
    source: "https://gakki-kaitori.com/",
    shops: "札幌市拠点／全国宅配対応（出張は店舗近郊のみ）",
    visitArea: "全国宅配対応／出張は札幌市近郊のみ",
    speed: "ネット査定 24 時間受付（具体の所要時間は要問合せ）",
    fees: "宅配買取の送料は当店負担と明記",
    expertise: "楽器専門の買取サービス。LINE査定・電話査定で簡易査定後に本査定",
    strengths: "楽器の価値・商品知識に長けた専門スタッフ。電子ピアノ・管弦楽器・ドラム・DTM 等幅広く対応",
    cta: "公式サイトで LINE 査定を試す",
  },
  {
    id: "otakaraya",
    name: "おたからや",
    url: "https://www.otakaraya.jp/",
    source: "https://www.otakaraya.jp/",
    shops: "全国 1,780 店舗以上（2026年5月時点）",
    visitArea: "出張買取無料・全国対応",
    speed: "最短 5 分査定（公式表記）",
    fees: "査定料・出張費 無料",
    expertise: "総合買取（楽器・ブランド品・時計・貴金属・切手など）。楽器の専門性は要問合せ",
    strengths: "国内最大級の店舗網。出張買取の実績件数も豊富",
    cta: "公式サイトで最寄りの店舗を探す",
  },
  {
    id: "qsic",
    name: "QSIC（クォニ）",
    url: "https://qsic.jp/",
    source: "https://qsic.jp/",
    shops: "梅田・あべの・箕面・神戸など関西中心の実店舗",
    visitArea: "関西中心（店頭買取が主体、宅配・出張の詳細は公式要確認）",
    speed: "店頭での査定（具体時間は公式要確認）",
    fees: "詳細は公式要確認",
    expertise: "ギター・ドラム・エフェクター中心の楽器店運営。実店舗での販売・買取一体運営",
    strengths: "楽器店としての販売チャネルを背景に在庫回転が早い。委託販売の選択肢も",
    cta: "公式サイトで最寄りの店舗を確認する",
  },
];

/** 業者ID指定で配列を絞り込みたい時に使う */
export function pickDealers(ids: string[]): Dealer[] {
  const byId: Record<string, Dealer> = Object.fromEntries(
    DEALERS.map((d) => [d.id, d])
  );
  return ids
    .map((id) => byId[id])
    .filter((d): d is Dealer => Boolean(d));
}

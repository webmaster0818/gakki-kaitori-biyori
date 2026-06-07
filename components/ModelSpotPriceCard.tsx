import fs from "fs";
import path from "path";

type Props = {
  /** 記事のslug（yahoo-medians-gakki.json のキー） */
  slug: string;
  /** モデル表示名（読みやすい英語表記。省略時は data の label を使用） */
  modelName?: string;
};

type MedianData = {
  median?: number | null;
  filtered_n?: number;
  raw_n?: number;
  insufficient?: boolean;
  fetched_at?: string;
  query_used?: string;
  label?: string;
};

function loadMedian(slug: string): MedianData | null {
  try {
    const p = path.join(process.cwd(), "data", "yahoo-medians-gakki.json");
    if (!fs.existsSync(p)) return null;
    const all = JSON.parse(fs.readFileSync(p, "utf-8"));
    return (all[slug] as MedianData) || null;
  } catch {
    return null;
  }
}

export default function ModelSpotPriceCard({ slug, modelName }: Props) {
  const data = loadMedian(slug);
  if (!data) return null;

  const displayName = modelName || data.label || slug;
  const hasData = !!data.median && !data.insufficient;

  return (
    <section className="my-8 not-prose">
      <div className="bg-cream border border-warm-border rounded-xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-1">
              {displayName} の中古相場（参考値）
            </h2>
            <p className="text-xs text-warm-gray">
              出典: Yahoo!オークション 過去180日落札データの中央値（IQR外れ値除去後）
            </p>
          </div>
          {hasData && (
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-accent-dark leading-none">
                ¥{(data.median as number).toLocaleString()}
              </div>
              <div className="text-[11px] text-warm-gray mt-1">
                サンプル数 n={data.filtered_n}（取得 {data.fetched_at}）
              </div>
            </div>
          )}
          {!hasData && (
            <div className="text-right">
              <div className="text-sm font-bold text-warm-gray">
                データ不足のため非表示
              </div>
              <div className="text-[11px] text-warm-gray mt-1">
                サンプル数が少ないため算出不可（取得 {data.fetched_at || "n/a"}）
              </div>
            </div>
          )}
        </div>

        <div className="text-xs text-warm-gray leading-relaxed space-y-1">
          <p>
            この価格は「中古品が落札された実取引価格の中央値」であり、買取業者の査定額とは異なります。一般的に買取査定額は中古市場相場の 50〜70% 程度が目安とされますが、コンディション・年式・付属品・市場需要で大きく変動します。
          </p>
          {hasData && (
            <p>
              ※ 検索クエリ: <code className="px-1 bg-white rounded text-foreground">{data.query_used}</code>
            </p>
          )}
          <p>
            正確な買取価格は、複数の業者で実際に査定を取って比較するのが確実です。
          </p>
          <p className="font-bold text-foreground">
            ※ 表示額はあくまで目安です。実際の買取額は状態・年式・付属品・市況等で変動し、金額を保証するものではありません。
          </p>
        </div>
      </div>
    </section>
  );
}

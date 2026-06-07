/**
 * 価格・相場の注記（全記事の末尾に常時表示）。
 * ①スポット相場（ヤフオク中央値）と②記事内の買取相場テーブルが「何を元にした数値か」を説明し、
 * あくまで目安で実際の買取額は変動・金額を保証するものではない旨を明記する。
 */
export default function PriceDisclaimer() {
  return (
    <aside className="mt-12 rounded-xl border border-warm-border bg-cream/60 p-4 md:p-5 not-prose">
      <p className="text-sm font-bold text-foreground mb-2">価格・相場に関するご注意</p>
      <ul className="text-xs text-warm-gray leading-relaxed space-y-1.5 list-disc pl-5">
        <li>
          <strong className="text-foreground">記事内の買取相場（目安表）</strong>は、中古市場で取引される傾向をもとにした
          <strong className="text-foreground">おおよその目安</strong>です。特定の確定価格ではありません。
        </li>
        <li>
          <strong className="text-foreground">中古相場の参考値（スポット価格カード）</strong>は、Yahoo!オークションの
          実取引データの中央値を集計したもので、買取業者の査定額とは異なります（一般に買取額は中古相場の50〜70%程度が目安）。
        </li>
        <li>
          実際の買取額は、<strong className="text-foreground">楽器の状態・年式・付属品・市場の需要や買取業者によって変動</strong>します。
          記載の金額は<strong className="text-foreground">あくまで目安であり、買取額を保証するものではありません</strong>。
        </li>
        <li>正確な金額は、各買取業者の無料査定で実際にご確認ください（複数社の比較がおすすめです）。</li>
      </ul>
    </aside>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://gakkikaitori-biyori.com/content-policy/' },
  title: "記事制作ポリシー",
  description: "楽器買取びよりの記事制作ポリシーです。記事の制作方針や品質管理についてご案内します。",
};

export default function ContentPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 pb-12">
      <header className="subhead">
      <nav aria-label="パンくずリスト" className="mb-6">
        <ol className="flex items-center text-xs text-warm-gray">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li><span className="breadcrumb-sep" /><span className="text-foreground font-medium">記事制作ポリシー</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-2xl md:text-3xl font-bold">記事制作ポリシー</h1>
      </header>

      <div className="article-body space-y-8 text-sm leading-relaxed">
        <p>
          楽器買取びよりは、楽器買取サービスに関する正確で有益な情報をお届けするために、以下の記事制作ポリシーに基づいてコンテンツを制作しています。
        </p>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">利用者の立場に立った情報提供に努めます</h2>
          <p className="mb-3">
            当サイトでは、楽器買取サービスを探している利用者が、目的に合ったサービスを選べることを第一に考えています。
          </p>
          <p className="mb-3">
            ギター、ピアノ、管楽器、弦楽器、打楽器など、楽器の種類は多岐にわたります。また、出張買取・宅配買取・店頭買取など買取方法もさまざまです。当サイトでは、各買取業者の特性や強みを分かりやすく掲載し、利用者の目的に沿った売却先選びを支援します。
          </p>
          <p>
            広告主の意向に左右されることなく、利用者にとって有益な情報を優先して掲載します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">正確かつ最新の情報提供に努めます</h2>
          <p className="mb-3">
            楽器の買取相場や業者情報は日々変動します。当サイトでは、掲載情報の正確性を維持するため、定期的に各買取業者の公式サイトを確認し、情報を更新しています。
          </p>
          <p className="mb-3">
            情報源として、各買取業者の公式サイト・公式SNS・プレスリリースなどの一次情報を重視しています。
          </p>
          <p>
            掲載情報に誤りがあった場合は、速やかに訂正いたします。買取業者様からの修正依頼にも対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">口コミ情報は中立的な立場で取り扱います</h2>
          <p className="mb-3">
            当サイトで口コミ・評判に言及する場合は、以下の情報源を参照しています。
          </p>
          <ul className="list-disc list-inside space-y-2 mb-3">
            <li>各サービスの公式サイトに掲載されたレビュー</li>
            <li>口コミサイトの投稿</li>
          </ul>
          <p className="mb-3">
            参照元を明記し、良い評価だけでなく悪い評価も含めて中立的に取り扱います。口コミの改変・捏造は行いません。
          </p>
          <p>
            口コミ本文の転載は控え、評価の傾向と参照元のみを掲載します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">分かりやすい情報提供に努めます</h2>
          <p className="mb-3">
            大切な楽器を手放す決断は、誰にとっても慎重になるものです。当サイトでは、その判断に役立つよう、要点を絞った分かりやすいコンテンツの作成に努めています。
          </p>
          <p className="mb-3">
            比較表・ランキング・図解などを用いて、各サービスの違いを整理して掲載します。
          </p>
          <p>
            専門用語はできる限り避け、誰にでも理解しやすい表現を使用します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">記事制作フロー</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">1. 記事の企画設計</h3>
              <p>
                利用者が必要とする楽器買取に関する情報を調査し、記事のテーマと構成を設計します。検索キーワードの分析や既存記事の調査を行い、掲載すべき情報を整理します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. 記事のライティング</h3>
              <p>
                専門用語を避け、分かりやすい言葉で記事を執筆します。各買取業者の公式情報を元に正確な内容を記載し、比較表や図解を用いて視覚的にも理解しやすいコンテンツを作成します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. 記事の公開</h3>
              <p>
                執筆した記事は、レビューを経て公開します。事実確認・誤字脱字チェック・リンク確認などの品質管理を行った上で公開します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. 記事の更新</h3>
              <p>
                公開後も定期的に情報を見直し、買取相場の変動・新サービスの追加・キャンペーン情報などを反映して記事を更新します。買取業者様や利用者からの修正依頼にも速やかに対応いたします。
              </p>
            </div>
          </div>
        </section>

        <p className="text-warm-gray text-xs pt-4 border-t border-warm-border">
          制定日：2026年4月13日
        </p>
      </div>
    </div>
  );
}

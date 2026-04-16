import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事制作ポリシー",
  description: "楽器買取びよりの記事制作ポリシーです。記事の制作方針や品質管理についてご案内します。",
};

export default function ContentPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="パンくずリスト" className="mb-6">
        <ol className="flex items-center text-xs text-warm-gray">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li><span className="breadcrumb-sep" /><span className="text-foreground font-medium">記事制作ポリシー</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">記事制作ポリシー</h1>

      <div className="article-body space-y-8 text-sm leading-relaxed">
        <p>
          楽器買取びよりは、楽器買取サービスに関する正確で有益な情報をお届けするために、以下の記事制作ポリシーに基づいてコンテンツを制作しています。
        </p>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">ユーザーファーストであり続けます</h2>
          <p className="mb-3">
            楽器買取びよりは、楽器買取サービスを探しているユーザーにとって、最適なサービスが見つかることを第一に考えています。
          </p>
          <p className="mb-3">
            ギター、ピアノ、管楽器、弦楽器、打楽器など、楽器の種類は多岐にわたります。また、出張買取・宅配買取・店頭買取など買取方法もさまざまです。それぞれの買取業者の特性や強みを分かりやすく発信し、ユーザーの多様なニーズに最適なマッチングを実現します。
          </p>
          <p>
            広告主の意向に左右されることなく、常にユーザーにとって有益な情報を優先します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">正確且つ最新な情報発信に努めます</h2>
          <p className="mb-3">
            楽器の買取相場や業者情報は日々変動します。楽器買取びよりでは、掲載情報の正確性を維持するため、定期的に各買取業者の公式サイトを確認し、情報を更新しています。
          </p>
          <p className="mb-3">
            情報源として、各買取業者の公式サイト・公式SNS・プレスリリースなどの一次情報を重視しています。
          </p>
          <p>
            万が一、掲載情報に誤りがあった場合は、速やかに訂正いたします。買取業者様からの修正依頼にも対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">操作のない口コミ情報を発信いたします</h2>
          <p className="mb-3">
            楽器買取びよりでは、実際に楽器買取サービスを利用したユーザーの口コミ・評判を紹介しています。口コミ情報は、以下のソースから収集しています。
          </p>
          <ul className="list-disc list-inside space-y-2 mb-3">
            <li>各サービスの公式サイトに掲載されたレビュー</li>
            <li>SNS（X、Instagram等）上の投稿</li>
            <li>口コミサイトの投稿</li>
            <li>編集部独自のアンケート調査</li>
          </ul>
          <p className="mb-3">
            口コミの参照元を明確にし、良い口コミだけでなく悪い口コミも含めて中立的に紹介することで、操作のない情報発信を徹底しています。口コミの操作・捏造は一切行いません。
          </p>
          <p>
            口コミの引用元は可能な限り明記し、情報の透明性を確保します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">分かりやすさを追求し続けます</h2>
          <p className="mb-3">
            大切な楽器を手放す決断は、誰にとっても慎重になるものです。楽器買取びよりでは、その決断をサポートするために、情報過多にならず分かりやすいコンテンツづくりを心がけています。
          </p>
          <p className="mb-3">
            比較表・ランキング・チャート・図解などを活用し、ひと目で違いが分かるコンテンツを提供します。
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
                ユーザーが知りたい楽器買取に関する情報を徹底的に調査し、記事のテーマと構成を設計します。検索キーワードの分析や競合記事の調査を行い、ユーザーにとって最も価値のある情報を整理します。
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
                執筆した記事は、編集部によるレビューを経てWEB上にアップロードされます。事実確認・誤字脱字チェック・リンク確認などの品質管理を行った上で公開します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. 記事の更新</h3>
              <p>
                公開後も定期的に情報を見直し、買取相場の変動・新サービスの追加・キャンペーン情報などを反映して記事を更新します。買取業者様やユーザー様からの修正依頼にも迅速に対応いたします。
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

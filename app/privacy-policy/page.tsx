import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "楽器買取びよりのプライバシーポリシーです。個人情報の取り扱いについてご案内します。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="パンくずリスト" className="mb-6">
        <ol className="flex items-center text-xs text-warm-gray">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li><span className="breadcrumb-sep" /><span className="text-foreground font-medium">プライバシーポリシー</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <div className="article-body space-y-8 text-sm leading-relaxed">
        <p>
          楽器買取びより（以下「当社」）は、当社が運営するウェブサイト「楽器買取びより」（以下「本サービス」）における個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">1. 個人情報の定義</h2>
          <p>
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">2. 個人情報の取得方法</h2>
          <p>
            当社は、ユーザーがお問い合わせフォームをご利用いただく際に、氏名・メールアドレス等の個人情報をお伺いすることがあります。また、ユーザーと提携先などとの間でなされた取引の記録や決済に関する情報を提携先から収集することがあります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">3. 個人情報の利用目的</h2>
          <p className="mb-3">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
          <ul className="list-disc list-inside space-y-2">
            <li>掲載事業者への情報提供のため</li>
            <li>ユーザーからのお問い合わせに対応するため</li>
            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等をメールでお知らせするため</li>
            <li>料金の請求・支払い処理のため</li>
            <li>調査に対する謝礼等の発送のため</li>
            <li>本サービスの利用状況の分析のため</li>
            <li>サービスの改善および新サービスの開発のため</li>
            <li>競合調査および市場分析のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            <li>統計データの作成のため</li>
            <li>広告の配信および効果測定のため</li>
            <li>商品やサービスに関する情報配信のため</li>
            <li>ユーザー間または事業者との間のトラブル解決のため</li>
            <li>上記の利用目的に付随するサービス提供のため</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">4. 個人情報の第三者提供</h2>
          <p className="mb-3">
            当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">5. 個人情報の管理</h2>
          <p>
            当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">6. 個人情報の開示・訂正・利用停止</h2>
          <p className="mb-3">
            ユーザーから個人情報の開示を求められたときは、本人に対し遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあります。
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
            <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
            <li>その他法令に違反することとなる場合</li>
          </ul>
          <p className="mt-3">
            個人情報が誤りである場合には、当社所定の手続きにより、利用目的の範囲内において速やかに訂正または削除を行うものとします。ユーザーから個人情報の利用停止の申出があった場合、遅滞なく必要な調査を行い、対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">7. Cookie等の利用について</h2>
          <p className="mb-3">
            当社のサービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当社による当社のサービスの利用状況等の把握に役立ち、サービス向上に資するものです。
          </p>
          <p className="mb-3">
            当サイトでは、Googleアナリティクスをはじめとするアクセス解析ツールを使用しています。これらのツールはトラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="mb-3">
            また、当サイトではMicrosoft Clarityを使用して、ユーザーが当サイトをどのように利用しているかを分析しています。Microsoft Clarityは、Cookieやその他のトラッキング技術を使用して、ユーザーの行動データ（クリック、スクロール、マウスの動きなど）を収集します。収集されたデータは匿名化されており、個人を特定するものではありません。
          </p>
          <p>
            Cookieの使用を希望しない場合は、ブラウザの設定でCookieを無効にすることができます。ただし、Cookieを無効にした場合、一部のサービスが正常に利用できない場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">8. 免責事項</h2>
          <p className="mb-3">
            当サイトに掲載されている情報の正確性には万全を期しておりますが、情報の正確性・完全性・最新性を保証するものではありません。
          </p>
          <p>
            当サイトの情報を利用して発生した損害について、当社は一切の責任を負いません。また、楽器買取びよりからリンクしている外部サイトの内容について、当社は一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">9. プライバシーポリシーの変更</h2>
          <p>
            本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ページに掲載したときから効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">10. お問い合わせ窓口</h2>
          <p className="mb-3">
            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
          </p>
          <table className="w-full">
            <tbody className="divide-y divide-warm-border">
              <tr>
                <th className="py-3 pr-4 text-left font-medium w-32 align-top">運営会社</th>
                <td className="py-3">株式会社MediaX</td>
              </tr>
              <tr>
                <th className="py-3 pr-4 text-left font-medium align-top">所在地</th>
                <td className="py-3">{"\u3012"}150-0011 東京都渋谷区東一丁目27番10号</td>
              </tr>
            </tbody>
          </table>
        </section>

        <p className="text-warm-gray text-xs pt-4 border-t border-warm-border">
          制定日：2026年4月13日
        </p>
      </div>
    </div>
  );
}

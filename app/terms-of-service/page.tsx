import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "楽器買取びよりの利用規約です。当サイトのご利用にあたっての注意事項をご案内します。",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="パンくずリスト" className="mb-6">
        <ol className="flex items-center text-xs text-warm-gray">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li><span className="breadcrumb-sep" /><span className="text-foreground font-medium">利用規約</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">利用規約</h1>

      <div className="article-body space-y-8 text-sm leading-relaxed">
        <p>
          この利用規約（以下「本規約」）は、楽器買取びより（以下「当社」）が運営するウェブサイト（以下「本サービス」）の利用条件を定めるものです。ユーザーの皆さまには、本規約に同意いただいた上で本サービスをご利用いただきます。
        </p>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第1条（本サービスの目的）</h2>
          <p>
            本サービスは、ユーザーに対して楽器買取サービス等の事業者の紹介やアドバイス等を提供することを目的とします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第2条（本規約の適用）</h2>
          <p>
            当社は本規約に従ってサービス提供を行います。プライバシーポリシーなどの利用条件等は規約の一部を構成し、矛盾がある場合は利用条件等が優先されます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第3条（利用の拒否）</h2>
          <p>
            当社は、規約違反、虚偽情報提供、不適切な利用目的、過去の利用拒否経歴がある場合などに利用を拒否できます。拒否によって生じた損害について当社は責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第4条（本規約の変更）</h2>
          <p>
            当社は、ユーザーの事前の承諾を得ることなく、本規約を適宜変更することができます。変更後の利用は変更への同意とみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第5条（ご連絡手段）</h2>
          <p>
            当社からの通知は電子メール等で行われ、発信時点で効力が生じます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第6条（取引）</h2>
          <p>
            ユーザーが掲載事業者と取引する場合、当社は当事者にはなりません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第7条（委任）</h2>
          <p>
            当社は業務を第三者に委託できますが、委託先を責任をもって管理します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第8条（禁止行為）</h2>
          <p className="mb-3">ユーザーは以下の行為を禁止します。</p>
          <ul className="list-disc list-inside space-y-2">
            <li>本規約に違反する行為</li>
            <li>公序良俗に反する行為</li>
            <li>虚偽の情報を送信する行為</li>
            <li>他のユーザーの利用を妨害する行為</li>
            <li>不正行為に協力する行為</li>
            <li>サーバーやネットワークへの不正アクセス行為</li>
            <li>スパム行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>リバースエンジニアリング行為</li>
            <li>知的財産権を侵害する行為</li>
            <li>誹謗中傷行為</li>
            <li>競合事業の運営を目的とした利用</li>
            <li>不適切な利用目的での利用</li>
            <li>政治活動・宗教活動を目的とした利用</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第9条（知的財産権）</h2>
          <p>
            本サービスを構成する有形・無形資産に関する著作権を含むあらゆる知的財産権は、当社または第三者に帰属します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第10条（本サービスの停止、中断）</h2>
          <p>
            当社は、システム点検、設備事故、不可抗力、掲載事業者のトラブル等の場合、事前の通知なく本サービスの利用の全部又は一部を停止又は中断することができます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第11条（保証の否認及び免責事項）</h2>
          <p>
            本サービスは現状有姿で提供されます。掲載情報の正確性、取引による損害について当社は保証または責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第12条（個人情報の利用・第三者への提供）</h2>
          <p>
            個人情報はプライバシーポリシーに従い取り扱われます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第13条（機密保持）</h2>
          <p>
            ユーザーは当社から秘密条件で提供された情報について秘密保持義務を負います。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第14条（損害賠償責任）</h2>
          <p>
            ユーザーが本サービス利用、規約違反に関連するクレームについて責任を負います。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第15条（反社会的勢力の排除）</h2>
          <p>
            当社は暴力団などの反社会的勢力による利用を禁止します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第16条（免責の制限）</h2>
          <p>
            当社が損害賠償責任を負う場合、通常の損害に限定されます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第17条（分離可能性）</h2>
          <p>
            規定の一部が違法・無効と判断されても、他の規定は有効に存続します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第18条（不可抗力）</h2>
          <p>
            天災や法令改廃などの不可抗力による損害について当社は責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第19条（合意管轄）</h2>
          <p>
            本規約に関する紛争は東京地方裁判所を専属的合意管轄裁判所とします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第20条（協議）</h2>
          <p>
            規約解釈での異議について、両当事者は誠実に協議し円満解決を図ります。
          </p>
        </section>

        <p className="text-warm-gray text-xs pt-4 border-t border-warm-border">
          制定日：2026年4月13日
        </p>
      </div>
    </div>
  );
}

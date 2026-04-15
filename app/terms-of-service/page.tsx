import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "楽器買取びよりの利用規約です。当サイトをご利用いただく際の条件について掲載しています。",
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

      <div className="article-body">
        <p>この利用規約（以下「本規約」）は、楽器買取びより（以下「当サイト」）の利用条件を定めるものです。当サイトをご利用いただく場合は、本規約に同意いただいたものとみなします。</p>

        <h2>第1条（適用）</h2>
        <p>本規約は、当サイトの全てのコンテンツおよびサービスに適用されます。</p>

        <h2>第2条（コンテンツの利用）</h2>
        <p>当サイトに掲載されているテキスト、画像、その他のコンテンツの著作権は当サイトに帰属します。無断での複製、転載、改変は禁止いたします。</p>

        <h2>第3条（免責事項）</h2>
        <ul>
          <li>当サイトに掲載されている情報の正確性、完全性、有用性について、いかなる保証もいたしません。</li>
          <li>当サイトに掲載されている買取相場は目安であり、実際の買取価格を保証するものではありません。</li>
          <li>当サイトのリンク先の外部サイトについて、その内容の正確性や安全性について責任を負いません。</li>
          <li>当サイトの利用により生じた損害について、当サイトは一切の責任を負いません。</li>
        </ul>

        <h2>第4条（広告について）</h2>
        <p>当サイトでは、アフィリエイト広告を利用しています。当サイト経由で外部サービスに遷移し、商品・サービスの購入や申し込みを行った場合、当サイトが広告収入を得ることがあります。</p>

        <h2>第5条（リンクについて）</h2>
        <p>当サイトへのリンクは、原則として自由に行っていただけます。ただし、当サイトの信用を毀損するような形でのリンクはお断りいたします。</p>

        <h2>第6条（禁止事項）</h2>
        <p>当サイトの利用にあたり、以下の行為を禁止いたします。</p>
        <ul>
          <li>当サイトのコンテンツを無断で複製・転載・改変する行為</li>
          <li>当サイトの運営を妨害する行為</li>
          <li>他のユーザーまたは第三者に損害を与える行為</li>
          <li>その他、当サイトが不適切と判断する行為</li>
        </ul>

        <h2>第7条（規約の変更）</h2>
        <p>当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当ページに掲載した時点から効力を生じるものとします。</p>

        <h2>第8条（準拠法・管轄）</h2>
        <p>本規約は日本法に準拠するものとし、本規約に関する紛争については、日本国内の裁判所を専属的合意管轄裁判所とします。</p>

        <p className="text-warm-gray text-sm mt-8">制定日: 2026年4月13日</p>
      </div>
    </div>
  );
}

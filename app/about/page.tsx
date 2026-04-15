import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "楽器買取びよりの運営者情報ページです。サイトの目的、運営方針、お問い合わせ先について掲載しています。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="パンくずリスト" className="mb-6">
        <ol className="flex items-center text-xs text-warm-gray">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li><span className="breadcrumb-sep" /><span className="text-foreground font-medium">運営者情報</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">運営者情報</h1>

      <div className="bg-white border border-warm-border rounded-xl overflow-hidden mb-8">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-warm-border">
            <tr><td className="px-5 py-3 bg-cream font-medium w-1/3">サイト名</td><td className="px-5 py-3">楽器買取びより</td></tr>
            <tr><td className="px-5 py-3 bg-cream font-medium">サイトURL</td><td className="px-5 py-3">https://gakki-kaitori-biyori.com</td></tr>
            <tr><td className="px-5 py-3 bg-cream font-medium">運営者</td><td className="px-5 py-3">楽器買取びより編集部</td></tr>
            <tr><td className="px-5 py-3 bg-cream font-medium">お問い合わせ</td><td className="px-5 py-3">webmaster@mediax.biz</td></tr>
            <tr><td className="px-5 py-3 bg-cream font-medium">サイトの目的</td><td className="px-5 py-3">楽器買取に関する正確な情報を提供し、ユーザーが最適な買取サービスを選べるようサポートすること</td></tr>
          </tbody>
        </table>
      </div>

      <div className="article-body">
        <h2>サイトについて</h2>
        <p>「楽器買取びより」は、ギター・ピアノ・管楽器などの楽器を売りたい方に向けて、買取サービスの比較情報を提供するガイドサイトです。</p>
        <p>楽器は大切な資産です。思い入れのある楽器を手放す際に、少しでも高く、そして安心して売却できるよう、正確な買取相場情報やサービス比較、高く売るためのコツをお伝えしています。</p>

        <h2>編集方針</h2>
        <ul>
          <li>最新の買取相場情報を定期的に調査・更新しています</li>
          <li>紹介するサービスは実際の評判・実績をもとに厳選しています</li>
          <li>ユーザーにとって有益な情報を第一に考え、中立的な立場で情報を提供します</li>
        </ul>

        <h2>広告について</h2>
        <p>当サイトは、紹介するサービスの運営企業から広告収入を得ています（アフィリエイト広告）。ただし、広告収入の有無がランキングや評価に影響することはありません。ユーザーの利益を最優先に、客観的な情報提供を行っています。</p>

        <h2>免責事項</h2>
        <p>当サイトに掲載されている情報は、可能な限り正確な情報を提供するよう努めておりますが、情報の正確性や完全性を保証するものではありません。買取価格は時期や楽器の状態により変動するため、実際の買取額は各サービスにてご確認ください。</p>
      </div>
    </div>
  );
}

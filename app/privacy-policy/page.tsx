import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "楽器買取びよりのプライバシーポリシーです。個人情報の取り扱いについて掲載しています。",
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

      <div className="article-body">
        <p>楽器買取びより（以下「当サイト」）は、ユーザーの個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。</p>

        <h2>1. 個人情報の収集について</h2>
        <p>当サイトでは、お問い合わせの際にお名前やメールアドレスなどの個人情報をご入力いただく場合があります。これらの個人情報は、お問い合わせへの回答や必要な情報提供のために使用いたします。</p>

        <h2>2. 個人情報の利用目的</h2>
        <p>当サイトが個人情報を収集・利用する目的は以下の通りです。</p>
        <ul>
          <li>お問い合わせに対する回答のため</li>
          <li>サービスの改善・向上のため</li>
          <li>利用規約に違反した場合の対応のため</li>
        </ul>

        <h2>3. 個人情報の第三者提供</h2>
        <p>当サイトは、以下の場合を除き、個人情報を第三者に提供することはありません。</p>
        <ul>
          <li>本人の同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要がある場合</li>
        </ul>

        <h2>4. アクセス解析ツールについて</h2>
        <p>当サイトでは、Googleアナリティクスを使用してアクセス情報を収集する場合があります。Googleアナリティクスではクッキー（Cookie）を使用して、個人を特定する情報を含まずにデータを収集します。</p>
        <p>収集されるデータは、当サイトの利用状況を把握し、サービス改善のために使用されます。Googleアナリティクスの利用規約については、Google社のウェブサイトをご確認ください。</p>

        <h2>5. 広告配信について</h2>
        <p>当サイトは、第三者配信の広告サービス（アフィリエイト広告）を利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにクッキー（Cookie）を使用することがあります。</p>

        <h2>6. クッキー（Cookie）について</h2>
        <p>当サイトでは、一部の機能でクッキーを使用しています。クッキーとは、ウェブサーバーからブラウザに送信される小さなデータファイルです。ブラウザの設定でクッキーを無効にすることも可能ですが、一部のサービスが利用できなくなる場合があります。</p>

        <h2>7. プライバシーポリシーの変更</h2>
        <p>当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。</p>

        <h2>8. お問い合わせ</h2>
        <p>プライバシーポリシーに関するお問い合わせは、以下のメールアドレスまでお願いいたします。</p>
        <p>メールアドレス: webmaster@mediax.biz</p>

        <p className="text-warm-gray text-sm mt-8">制定日: 2026年4月13日</p>
      </div>
    </div>
  );
}

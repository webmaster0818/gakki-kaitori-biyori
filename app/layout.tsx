import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const SITE_NAME = "楽器買取びより";
const SITE_URL = "https://gakkikaitori-biyori.com";
const SITE_DESCRIPTION =
  "楽器買取びよりは、ギター・ピアノ・管楽器などの楽器買取を徹底比較するガイドサイトです。ヒカカク！・ティファナ・ウリエルなど人気買取サービスを比較し、あなたの楽器を最高値で売る方法が見つかります。";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 楽器買取おすすめ比較ガイド`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 楽器買取おすすめ比較ガイド`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | 楽器買取おすすめ比較ガイド`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-warm-border">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold text-accent-dark tracking-tight flex items-center gap-2"
        >
          <Image
            src="/images/icon-guitar.png"
            alt="楽器"
            width={32}
            height={32}
            className="inline-block"
          />
          {SITE_NAME}
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium text-foreground/80">
          <li>
            <Link href="/articles/gakki-kaitori-osusume/" className="hover:text-accent transition-colors">
              おすすめ業者
            </Link>
          </li>
          <li>
            <Link href="/souba-ranking/" className="hover:text-accent transition-colors">
              相場ランキング
            </Link>
          </li>
          <li>
            <Link href="/souba-index/" className="hover:text-accent transition-colors">
              相場指数
            </Link>
          </li>
          <li>
            <Link href="/articles/#instrument" className="hover:text-accent transition-colors">
              楽器の種類
            </Link>
          </li>
          <li>
            <Link href="/articles/#brand" className="hover:text-accent transition-colors">
              ブランド
            </Link>
          </li>
          <li>
            <Link href="/articles/#model" className="hover:text-accent transition-colors">
              モデル
            </Link>
          </li>
          <li>
            <Link href="/articles/#region" className="hover:text-accent transition-colors">
              地域
            </Link>
          </li>
          <li>
            <Link href="/articles/#howto" className="hover:text-accent transition-colors">
              売り方
            </Link>
          </li>
          <li>
            <Link
              href="/articles/"
              className="text-accent-dark font-semibold hover:text-accent transition-colors"
            >
              記事一覧
            </Link>
          </li>
        </ul>
        {/* Mobile hamburger */}
        <details className="md:hidden relative group">
          <summary className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-cream transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="メニューを開く"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-60 bg-white border border-warm-border rounded-lg shadow-lg py-2 z-50">
            <Link href="/" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              ホーム
            </Link>
            <Link href="/articles/gakki-kaitori-osusume/" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              おすすめ買取業者比較
            </Link>
            <Link href="/souba-ranking/" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              楽器買取相場ランキング
            </Link>
            <p className="px-4 pt-2 pb-1 text-[11px] font-bold text-warm-gray uppercase tracking-wide">
              カテゴリから探す
            </p>
            <Link href="/articles/#instrument" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              楽器の種類から探す
            </Link>
            <Link href="/articles/#brand" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              ブランドから探す
            </Link>
            <Link href="/articles/#model" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              人気モデルから探す
            </Link>
            <Link href="/articles/#region" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              地域から探す
            </Link>
            <Link href="/articles/#howto" className="block px-4 py-2 text-sm hover:bg-cream transition-colors">
              売り方・高く売るコツ
            </Link>
            <div className="my-1 border-t border-warm-border" />
            <Link
              href="/articles/"
              className="block px-4 py-2 text-sm font-semibold text-accent-dark hover:bg-cream transition-colors"
            >
              記事一覧をすべて見る
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-accent-dark text-white/90 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="font-display text-lg font-bold mb-2">
              {SITE_NAME}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              楽器買取サービスを徹底比較。
              <br />
              あなたの楽器を最高値で売る方法が見つかります。
            </p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">カテゴリから探す</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/articles/gakki-kaitori-osusume/" className="hover:text-white transition-colors">
                  おすすめ買取業者比較
                </Link>
              </li>
              <li>
                <Link href="/articles/#instrument" className="hover:text-white transition-colors">
                  楽器の種類から探す
                </Link>
              </li>
              <li>
                <Link href="/articles/#brand" className="hover:text-white transition-colors">
                  ブランドから探す
                </Link>
              </li>
              <li>
                <Link href="/articles/#model" className="hover:text-white transition-colors">
                  人気モデルから探す
                </Link>
              </li>
              <li>
                <Link href="/articles/#region" className="hover:text-white transition-colors">
                  地域から探す
                </Link>
              </li>
              <li>
                <Link href="/articles/#howto" className="hover:text-white transition-colors">
                  売り方・高く売るコツ
                </Link>
              </li>
              <li>
                <Link href="/articles/" className="font-semibold text-white hover:text-white/80 transition-colors">
                  記事一覧をすべて見る
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">人気ガイド</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/articles/guitar-kaitori/" className="hover:text-white transition-colors">
                  ギター買取おすすめ
                </Link>
              </li>
              <li>
                <Link href="/articles/piano-kaitori/" className="hover:text-white transition-colors">
                  ピアノ買取おすすめ
                </Link>
              </li>
              <li>
                <Link href="/articles/denshi-piano-kaitori/" className="hover:text-white transition-colors">
                  電子ピアノ買取ガイド
                </Link>
              </li>
              <li>
                <Link href="/articles/takaku-uru-kotsu/" className="hover:text-white transition-colors">
                  高く売るコツ
                </Link>
              </li>
              <li>
                <Link href="/articles/kaitori-houhou-hikaku/" className="hover:text-white transition-colors">
                  買取方法比較
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">サイト情報</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/terms-of-service/"
                  className="hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy/"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/content-policy/"
                  className="hover:text-white transition-colors"
                >
                  記事制作ポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs text-white/50">
          <p>&copy; 2026 {SITE_NAME} All rights reserved.</p>
          <p className="mt-1">
            ※本サイトはプロモーション(PR)を含みます。
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${zenMaruGothic.variable} h-full antialiased`}
    >
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* JS有効時のみ <html> に js クラスを付与（描画前に実行・初期非表示のチラつき防止） */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <>
          <Header />
          <div className="bg-gray-50 border-b border-gray-200 py-1">
            <p className="max-w-5xl mx-auto px-4 text-[10px] text-gray-400">PRを含みます</p>
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}

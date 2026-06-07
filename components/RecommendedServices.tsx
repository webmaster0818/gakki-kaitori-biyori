/**
 * おすすめ買取サービス3社のカード（公式サイトのキャプチャ画像付き）。
 * 全記事の末尾に表示（RelatedArticles 経由）。画像は各社公式サイトのスクリーンショット。
 */
const SERVICES = [
  {
    name: "ヒカカク！",
    url: "https://hikakaku.com",
    image: "/images/services/hikakaku.webp",
    tagline: "一括査定で最高値を比較",
    desc: "複数の買取業者に一括で査定依頼。最高値の業者が見つかる比較サイト。相場がひと目でわかります。",
    cta: "一括査定で最高値を調べる",
  },
  {
    name: "ティファナ",
    url: "https://tifana.net",
    image: "/images/services/tifana.webp",
    tagline: "出張・店頭・宅配の3方式対応",
    desc: "年間4万件の買取実績。出張・店頭・宅配の3つの方法から選べる総合買取サービス。",
    cta: "ティファナで買取を申し込む",
  },
  {
    name: "ウリエル",
    url: "https://uriel-cuore.co.jp",
    image: "/images/services/uriel.webp",
    tagline: "出張買取で自宅完結",
    desc: "出張買取専門。自宅にいながら査定から買取まで完結。大型・重量楽器の売却に最適です。",
    cta: "ウリエルの出張買取を申し込む",
  },
];

export default function RecommendedServices({
  heading = "楽器買取おすすめサービス",
}: {
  heading?: string;
}) {
  return (
    <section className="mt-12 not-prose">
      <h2 className="font-display text-lg font-bold mb-1">{heading}</h2>
      <p className="text-xs text-warm-gray mb-5">
        各社の公式サイトで無料査定を依頼できます（画像は各社公式サイトより）。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.name}
            className="border border-warm-border rounded-xl bg-white overflow-hidden flex flex-col"
          >
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block"
            >
              {/* 公式サイトのキャプチャ画像 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={`${s.name} 公式サイト`}
                width={640}
                height={400}
                loading="lazy"
                className="w-full h-auto border-b border-warm-border"
              />
            </a>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-base text-foreground">{s.name}</h3>
              <p className="text-xs text-gold-dark font-bold mt-0.5">{s.tagline}</p>
              <p className="text-xs text-warm-gray mt-2 leading-relaxed flex-1">
                {s.desc}
              </p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-3 inline-flex items-center justify-center gap-1.5 bg-gold text-white font-medium px-4 py-2.5 rounded-full hover:bg-gold-dark transition-colors text-xs shadow-sm"
              >
                {s.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

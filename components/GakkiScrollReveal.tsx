'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 記事本文（<article> 直下の各ブロック）/ TOPのセクションを、スクロールで順次表示する。
 * 初期非表示は globals.css の `html.js .gakki-reveal ...` で制御し、ここで `.visible` を付ける。
 */
export default function GakkiScrollReveal() {
  // URLが変わるたび（クリック遷移）に再実行。これがないと遷移先で非表示のまま＝白化けする
  const pathname = usePathname()
  useEffect(() => {
    // .article-body は中身を内包する1つの大きな箱なので、それ自体ではなく
    // 「本文の各ブロック」＋「article直下のヘッダー/目次/カード/関連」を個別に対象にする
    const els = Array.from(
      document.querySelectorAll(
        '.gakki-reveal article > *:not(.article-body), .gakki-reveal .article-body > *, .gakki-reveal-home > section',
      ),
    ) as HTMLElement[]
    if (els.length === 0) return

    const reveal = (el: Element) => el.classList.add('visible')

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => obs.observe(el))

    // クリック遷移直後にビュー内の要素を確実に表示（取りこぼし防止）
    const raf = requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (el.classList.contains('visible')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh && r.bottom > 0) el.classList.add('visible')
      })
    })

    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}

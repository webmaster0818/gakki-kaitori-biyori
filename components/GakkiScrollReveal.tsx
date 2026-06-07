'use client'

import { useEffect } from 'react'

/**
 * 記事本文（<article> 直下の各ブロック）を、スクロールで画面に入った順にふわっと表示する。
 * 初期非表示は globals.css の `html.js .gakki-reveal article > *` で制御し、
 * ここで `.visible` を付けて出現させる（iOS Safari でも動くIntersectionObserver方式）。
 */
export default function GakkiScrollReveal() {
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
    return () => obs.disconnect()
  }, [])

  return null
}

'use client'

import { useEffect } from 'react'

/**
 * 記事本文（<article> 直下の各ブロック）を、スクロールで画面に入った順にふわっと表示する。
 * 初期非表示は globals.css の `html.js .gakki-reveal article > *` で制御し、
 * ここで `.visible` を付けて出現させる（iOS Safari でも動くIntersectionObserver方式）。
 */
export default function GakkiScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('.gakki-reveal article > *'),
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

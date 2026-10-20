"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** スマホのハンバーガー（<details data-mobile-menu>）を、リンクを押したとき・画面遷移したとき・メニューの外を押したときに閉じる。
 *  <details> は画面遷移しても開いたまま残るため（layout は作り直されない）。 */
export default function MobileMenuAutoClose() {
  const pathname = usePathname();
  useEffect(() => {
    document.querySelectorAll<HTMLDetailsElement>("details[data-mobile-menu]").forEach((d) => (d.open = false));
  }, [pathname]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      document.querySelectorAll<HTMLDetailsElement>("details[data-mobile-menu][open]").forEach((d) => {
        if (!t || !d.contains(t) || t.closest("a")) d.open = false;
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

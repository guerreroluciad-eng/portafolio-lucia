import { useEffect, useRef, type RefObject } from 'react'

/**
 * Reports whether the page has scrolled past `threshold`, checking both the
 * ref'd element's own scrollTop and window.scrollY. Page sections here use
 * `min-h-screen` (not a fixed height), so they grow to fit their content and
 * the browser ends up scrolling the window rather than the element itself —
 * checking both keeps the trigger working regardless of which one scrolls.
 */
export function useScrollThreshold(threshold: number, onChange: (scrolled: boolean) => void): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    function check() {
      const elTop = el?.scrollTop ?? 0
      onChange(Math.max(elTop, window.scrollY) > threshold)
    }
    window.addEventListener('scroll', check, { passive: true })
    el?.addEventListener('scroll', check, { passive: true })
    return () => {
      window.removeEventListener('scroll', check)
      el?.removeEventListener('scroll', check)
    }
  }, [threshold, onChange])

  return ref
}

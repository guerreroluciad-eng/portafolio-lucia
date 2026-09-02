import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 * Reports whether the ref'd element has scrolled into the viewport, for
 * scroll-triggered entrance animations (as opposed to page-load animations).
 * Fires once — the observer disconnects after the element is first seen, so
 * scrolling back up and down again doesn't replay the animation.
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

/**
 * Inline style for a scroll-triggered slide-up + fade-in reveal: starts at
 * 20% opacity, translated 80px down, and animates to fully visible/in-place
 * once `inView` is true. Pass `delayMs` to stagger related elements within
 * the same block (0/100/200ms is the pattern used across the site).
 */
export function revealStyle(inView: boolean, delayMs = 0): React.CSSProperties {
  return {
    opacity: inView ? 1 : 0.2,
    transform: inView ? 'translateY(0)' : 'translateY(80px)',
    transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
  }
}

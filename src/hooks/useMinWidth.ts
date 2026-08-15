import { useEffect, useState } from 'react'

/**
 * Tracks whether the viewport is at least `px` wide. Used to gate hover-only
 * effects (like the header hinge) so they stay off on mobile/tablet widths,
 * where "hover" would otherwise get triggered by a tap and stick open.
 */
export function useMinWidth(px: number): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= px : true
  )

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${px}px)`)
    const update = () => setMatches(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [px])

  return matches
}

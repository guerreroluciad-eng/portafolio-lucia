// ─── Routes ──────────────────────────────────────────────────────────────────
// The site is a single-page app whose "screen" state machine lives in App.tsx
// (with the overlay transitions between pages). This module only maps each
// base page to a real, shareable URL path and back, so App can keep the
// browser's address bar and history in sync with that state machine.

export type BasePage =
  | 'home'
  | 'work'
  | 'aboutme'
  | 'cv'
  | 'google'
  | 'eltiempo'
  | 'youtube'
  | 'android'
  | 'subscription'
  | 'apptiempo'
  | 'maestro'
  | 'futbolred'

export const PAGE_PATHS: Record<BasePage, string> = {
  home: '/',
  work: '/work',
  aboutme: '/about',
  cv: '/cv',
  google: '/work/google',
  eltiempo: '/work/el-tiempo',
  youtube: '/work/youtube',
  android: '/work/android',
  subscription: '/work/subscription',
  apptiempo: '/work/app-tiempo',
  maestro: '/work/maestro',
  futbolred: '/work/futbolred',
}

const PATH_TO_PAGE = new Map<string, BasePage>(
  (Object.entries(PAGE_PATHS) as [BasePage, string][]).map(([page, path]) => [path, page]),
)

function normalizePath(pathname: string): string {
  const lower = pathname.toLowerCase()
  return lower.length > 1 ? lower.replace(/\/+$/, '') || '/' : '/'
}

/** True when `pathname` is exactly one of the site's known routes (ignoring case and a trailing slash). */
export function isKnownPath(pathname: string): boolean {
  return PATH_TO_PAGE.has(normalizePath(pathname))
}

/** Resolves a URL pathname to its page. Unknown paths fall back to Home. */
export function pageFromPath(pathname: string): BasePage {
  return PATH_TO_PAGE.get(normalizePath(pathname)) ?? 'home'
}

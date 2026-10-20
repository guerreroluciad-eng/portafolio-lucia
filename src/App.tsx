import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/i18n/LanguageContext'
import { PAGE_PATHS, isKnownPath, pageFromPath, type BasePage } from '@/routes'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import AboutMe from '@/pages/AboutMe'
import CVCase from '@/pages/CVCase'
import AndroidCase from '@/pages/AndroidCase'
import GoogleCase from '@/pages/GoogleCase'
import YoutubeCase from '@/pages/YoutubeCase'
import ElTiempoCase from '@/pages/ElTiempoCase'
import SubscriptionCase from '@/pages/SubscriptionCase'
import AppTiempoCase from '@/pages/AppTiempoCase'
import MaestroCase from '@/pages/MaestroCase'
import FutbolredCase from '@/pages/FutbolredCase'
import imgNavGoogle from '@/imports/ProjectNav/Google.png'
import imgNavYoutube from '@/imports/ProjectNav/Youtube.png'
import imgNavElTiempo from '@/imports/ProjectNav/ElTiempo.png'
import imgNavAndroid from '@/imports/ProjectNav/Android.png'
import imgNavAppTiempo from '@/imports/ProjectNav/AppTiempo.png'
import imgNavSubscription from '@/imports/ProjectNav/Subscription.png'
import imgNavMaestro from '@/imports/ProjectNav/Maestro.png'
import imgNavFutbolred from '@/imports/ProjectNav/Futbolred.png'

type Screen =
  | 'home'
  | 'transition-in' | 'transition-wipe' | 'transition-out'
  | 'work'
  | 'about-in' | 'about-wipe' | 'about-out'
  | 'aboutme'
  | 'cv-in' | 'cv-wipe' | 'cv-out'
  | 'cv'
  | 'lucia-in' | 'lucia-wipe' | 'lucia-out'
  | 'android-in' | 'android-wipe' | 'android-out'
  | 'android'
  | 'google-in' | 'google-wipe' | 'google-out'
  | 'google'
  | 'youtube-in' | 'youtube-wipe' | 'youtube-out'
  | 'youtube'
  | 'eltiempo-in' | 'eltiempo-wipe' | 'eltiempo-out'
  | 'eltiempo'
  | 'subscription-in' | 'subscription-wipe' | 'subscription-out'
  | 'subscription'
  | 'apptiempo-in' | 'apptiempo-wipe' | 'apptiempo-out'
  | 'apptiempo'
  | 'maestro-in' | 'maestro-wipe' | 'maestro-out'
  | 'maestro'
  | 'futbolred-in' | 'futbolred-wipe' | 'futbolred-out'
  | 'futbolred'

const BASE_PAGES = Object.keys(PAGE_PATHS) as BasePage[]
function isBasePage(s: Screen): s is BasePage {
  return (BASE_PAGES as string[]).includes(s)
}

// Prefix of the "-in" / "-wipe" / "-out" screens for each transition: the
// Work/About/CV/Home ones have their own, project pages use their own key.
type TransitionPrefix = 'transition' | 'about' | 'cv' | 'lucia' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'subscription' | 'apptiempo' | 'maestro' | 'futbolred'

export default function App() {
  const { t } = useLanguage()

  // The page the URL points at on first load (direct link / refresh). Anything
  // that isn't a known route falls back to Home.
  const initialPage = useRef<BasePage>(pageFromPath(window.location.pathname))
  const [screen, setScreen] = useState<Screen>(initialPage.current)
  // Page the address bar currently points at. Kept in state so the browser's
  // back/forward buttons (popstate) can be reconciled with `screen` below.
  const [urlPage, setUrlPage] = useState<BasePage>(initialPage.current)
  // Set while a navigation is being replayed from browser history, so it
  // doesn't push a second history entry for a URL that's already current.
  const navFromHistory = useRef(false)

  // Which page each kind of transition started from, so the transition
  // overlay's "-in"/"-wipe" phases render the correct page underneath.
  const luciaOrigin = useRef<BasePage>('work')
  const aboutOrigin = useRef<BasePage>('home')
  const workOrigin = useRef<BasePage>('home')
  const cvOrigin = useRef<BasePage>('home')
  const projectNavOrigin = useRef<BasePage>('work')
  const [androidPageReady, setAndroidPageReady] = useState(false)
  const [androidScrolled, setAndroidScrolled] = useState(false)
  const [googlePageReady, setGooglePageReady] = useState(false)
  const [googleScrolled, setGoogleScrolled] = useState(false)
  const [youtubePageReady, setYoutubePageReady] = useState(false)
  const [youtubeScrolled, setYoutubeScrolled] = useState(false)
  const [elTiempoPageReady, setElTiempoPageReady] = useState(false)
  const [elTiempoScrolled, setElTiempoScrolled] = useState(false)
  const [subscriptionPageReady, setSubscriptionPageReady] = useState(false)
  const [subscriptionScrolled, setSubscriptionScrolled] = useState(false)
  const [appTiempoPageReady, setAppTiempoPageReady] = useState(false)
  const [appTiempoScrolled, setAppTiempoScrolled] = useState(false)
  const [maestroPageReady, setMaestroPageReady] = useState(false)
  const [maestroScrolled, setMaestroScrolled] = useState(false)
  const [futbolredPageReady, setFutbolredPageReady] = useState(false)
  const [futbolredScrolled, setFutbolredScrolled] = useState(false)
  const [homeReady, setHomeReady] = useState(false)
  const [workReady, setWorkReady] = useState(false)
  const [aboutReady, setAboutReady] = useState(false)
  const [cvReady, setCvReady] = useState(false)

  // Home intro: trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setHomeReady(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // Re-arms a page's entrance animation (ready false → true after a beat), and
  // resets its scrolled flag where it has one. Same sequence the page
  // transitions have always used when they land on a page.
  function markPageShown(page: BasePage) {
    const pulse = (setReady: (v: boolean) => void, setScrolled?: (v: boolean) => void) => {
      setReady(false)
      setScrolled?.(false)
      setTimeout(() => setReady(true), 60)
    }
    switch (page) {
      case 'home': return pulse(setHomeReady)
      case 'work': return pulse(setWorkReady)
      case 'aboutme': return pulse(setAboutReady)
      case 'cv': return pulse(setCvReady)
      case 'android': return pulse(setAndroidPageReady, setAndroidScrolled)
      case 'google': return pulse(setGooglePageReady, setGoogleScrolled)
      case 'youtube': return pulse(setYoutubePageReady, setYoutubeScrolled)
      case 'eltiempo': return pulse(setElTiempoPageReady, setElTiempoScrolled)
      case 'subscription': return pulse(setSubscriptionPageReady, setSubscriptionScrolled)
      case 'apptiempo': return pulse(setAppTiempoPageReady, setAppTiempoScrolled)
      case 'maestro': return pulse(setMaestroPageReady, setMaestroScrolled)
      case 'futbolred': return pulse(setFutbolredPageReady, setFutbolredScrolled)
    }
  }

  // Direct load / refresh on a non-home URL: the page is mounted straight away
  // (no overlay), so run its entrance animation. Also: let the app own scroll
  // restoration, and tidy unknown URLs back to "/".
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    if (!isKnownPath(window.location.pathname)) window.history.replaceState(null, '', PAGE_PATHS.home)
    if (initialPage.current !== 'home') markPageShown(initialPage.current)
    const onPopState = () => setUrlPage(pageFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Updates the address bar for a navigation the user just started. Skipped
  // when the navigation is replaying browser history (URL is already right).
  function commitUrl(page: BasePage) {
    if (navFromHistory.current) {
      navFromHistory.current = false
      return
    }
    const path = PAGE_PATHS[page]
    if (window.location.pathname !== path) window.history.pushState(null, '', path)
    setUrlPage(page)
  }

  // Runs the overlay transition from the current page to `target`:
  // "-in" (overlay fades in, title slides up) → 900ms → "-wipe" → 1400ms →
  // "-out" (overlay slides away revealing the page) → 900ms → page settled.
  // Timings and phases are unchanged from the original per-page handlers.
  function go(target: BasePage) {
    if (!isBasePage(screen) || screen === target) return
    let prefix: TransitionPrefix
    switch (target) {
      case 'work': workOrigin.current = screen; prefix = 'transition'; break
      case 'aboutme': aboutOrigin.current = screen; prefix = 'about'; break
      case 'cv': cvOrigin.current = screen; prefix = 'cv'; break
      case 'home': luciaOrigin.current = screen; prefix = 'lucia'; break
      default: projectNavOrigin.current = screen; prefix = target
    }
    commitUrl(target)
    setScreen(`${prefix}-in`)
    setTimeout(() => {
      setScreen(`${prefix}-wipe`)
      setTimeout(() => {
        setScreen(`${prefix}-out`)
        window.scrollTo(0, 0)
        setTimeout(() => {
          setScreen(target)
          window.scrollTo(0, 0)
          markPageShown(target)
        }, 900)
      }, 1400)
    }, 900)
  }

  // Browser back/forward: `urlPage` follows the address bar. Whenever the app
  // is sitting on a settled page that doesn't match it, play the transition to
  // the right one. If a transition is mid-flight this simply waits until it
  // lands, then reconciles.
  useEffect(() => {
    if (!isBasePage(screen) || screen === urlPage) return
    navFromHistory.current = true
    go(urlPage)
    navFromHistory.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, urlPage])

  const handleAndroidClick = () => go('android')
  const handleGoogleClick = () => go('google')
  const handleYoutubeClick = () => go('youtube')
  const handleElTiempoClick = () => go('eltiempo')
  const handleSubscriptionClick = () => go('subscription')
  const handleAppTiempoClick = () => go('apptiempo')
  const handleMaestroClick = () => go('maestro')
  const handleFutbolredClick = () => go('futbolred')
  const handleWorkClick = () => go('work')
  const handleAboutClick = () => go('aboutme')
  const handleCvClick = () => go('cv')
  const handleLuciaClick = () => go('home')

  // True while any project screen is mid-transition
  // ("-in" or "-wipe"), regardless of which one. Combined with
  // projectNavOrigin, this decides which page renders behind the transition
  // overlay: Work (the old, only path) or another project page (new, for
  // "Next page" project-to-project navigation).
  const anyProjectTransitioning =
    screen === 'android-in' || screen === 'android-wipe' ||
    screen === 'google-in' || screen === 'google-wipe' ||
    screen === 'youtube-in' || screen === 'youtube-wipe' ||
    screen === 'eltiempo-in' || screen === 'eltiempo-wipe' ||
    screen === 'subscription-in' || screen === 'subscription-wipe' ||
    screen === 'apptiempo-in' || screen === 'apptiempo-wipe' ||
    screen === 'maestro-in' || screen === 'maestro-wipe' ||
    screen === 'futbolred-in' || screen === 'futbolred-wipe'

  // "Back page" / "Next page" nav cards (ProjectPageNav) — same cyclic order
  // as the Work carousel: Google → El Tiempo → Youtube → Android → App Tiempo
  // → back to Google. Each entry pairs a project's display name + thumbnail
  // with the handler that already drives its transition.
  const projectCycle: { key: BasePage; name: React.ReactNode; thumbnail: string; onClick: () => void }[] = [
    { key: 'google', name: t.navNames.google, thumbnail: imgNavGoogle, onClick: handleGoogleClick },
    { key: 'eltiempo', name: t.navNames.eltiempo, thumbnail: imgNavElTiempo, onClick: handleElTiempoClick },
    { key: 'youtube', name: t.navNames.youtube, thumbnail: imgNavYoutube, onClick: handleYoutubeClick },
    { key: 'android', name: t.navNames.android, thumbnail: imgNavAndroid, onClick: handleAndroidClick },
    { key: 'subscription', name: t.navNames.subscription, thumbnail: imgNavSubscription, onClick: handleSubscriptionClick },
    { key: 'apptiempo', name: t.navNames.apptiempo, thumbnail: imgNavAppTiempo, onClick: handleAppTiempoClick },
    { key: 'maestro', name: t.navNames.maestro, thumbnail: imgNavMaestro, onClick: handleMaestroClick },
    { key: 'futbolred', name: t.navNames.futbolred, thumbnail: imgNavFutbolred, onClick: handleFutbolredClick },
  ]
  function getProjectNav(key: BasePage) {
    const i = projectCycle.findIndex(p => p.key === key)
    // `key` is only for lookup — drop it so it isn't spread into JSX as a React key.
    const strip = ({ name, thumbnail, onClick }: (typeof projectCycle)[number]) => ({ name, thumbnail, onClick })
    return {
      prevProject: strip(projectCycle[(i - 1 + projectCycle.length) % projectCycle.length]),
      nextProject: strip(projectCycle[(i + 1) % projectCycle.length]),
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ fontFamily: "'Abhaya Libre', serif" }}>

      {/* ── HOME PAGE ────────────────────────────────────────────────── */}
      {(screen === 'home' || screen === 'lucia-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'home') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'home') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'home') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'home')) && (
        <Home
          homeReady={homeReady}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onGoogleClick={handleGoogleClick}
          onElTiempoClick={handleElTiempoClick}
          onYoutubeClick={handleYoutubeClick}
        />
      )}

      {/* ── WORK TRANSITION OVERLAY ──────────────────────────────────── */}
      {(screen === 'transition-in' || screen === 'transition-wipe' || screen === 'transition-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'transition-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[200px] text-white leading-none relative"
            style={
              screen === 'transition-wipe' || screen === 'transition-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Work
          </p>

          {/* Gradient curtain wipe: sweeps left→right over "Work", same color as bg */}
          {(screen === 'transition-wipe' || screen === 'transition-out') && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '200%',
                background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
                animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      )}

      {/* ── ABOUT ME TRANSITION OVERLAY ──────────────────────────────── */}
      {(screen === 'about-in' || screen === 'about-wipe' || screen === 'about-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'about-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[120px] text-white leading-none relative text-center"
            style={
              screen === 'about-wipe' || screen === 'about-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            About me
          </p>
          {(screen === 'about-wipe' || screen === 'about-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── CV TRANSITION OVERLAY ─────────────────────────────────────── */}
      {(screen === 'cv-in' || screen === 'cv-wipe' || screen === 'cv-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'cv-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[120px] text-white leading-none relative text-center"
            style={
              screen === 'cv-wipe' || screen === 'cv-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            CV / HV
          </p>
          {(screen === 'cv-wipe' || screen === 'cv-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── LUCIA TRANSITION OVERLAY (work → home) ───────────────────── */}
      {(screen === 'lucia-in' || screen === 'lucia-wipe' || screen === 'lucia-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'lucia-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          {/* White lucia logo centered */}
          <img
            src={imgFrame241Hover}
            alt="lucia"
            className="relative"
            style={{
              width: '320px',
              height: 'auto',
              objectFit: 'contain',
              animation:
                screen === 'lucia-wipe' || screen === 'lucia-out'
                  ? 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards'
                  : 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            }}
          />
          {/* Gradient wipe curtain */}
          {(screen === 'lucia-wipe' || screen === 'lucia-out') && (
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, bottom: 0,
                width: '200%',
                background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
                animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      )}

      {/* ── ANDROID TRANSITION OVERLAY (work → android) ─────────────── */}
      {(screen === 'android-in' || screen === 'android-wipe' || screen === 'android-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'android-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'android-wipe' || screen === 'android-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Android
          </p>
          {(screen === 'android-wipe' || screen === 'android-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── GOOGLE TRANSITION OVERLAY (work → google) ────────────────── */}
      {(screen === 'google-in' || screen === 'google-wipe' || screen === 'google-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'google-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'google-wipe' || screen === 'google-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Google
          </p>
          {(screen === 'google-wipe' || screen === 'google-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── YOUTUBE TRANSITION OVERLAY (work → youtube) ──────────────── */}
      {(screen === 'youtube-in' || screen === 'youtube-wipe' || screen === 'youtube-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'youtube-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'youtube-wipe' || screen === 'youtube-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Youtube
          </p>
          {(screen === 'youtube-wipe' || screen === 'youtube-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── EL TIEMPO TRANSITION OVERLAY (work → eltiempo) ───────────── */}
      {(screen === 'eltiempo-in' || screen === 'eltiempo-wipe' || screen === 'eltiempo-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'eltiempo-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'eltiempo-wipe' || screen === 'eltiempo-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            El Tiempo
          </p>
          {(screen === 'eltiempo-wipe' || screen === 'eltiempo-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── SUBSCRIPTION TRANSITION OVERLAY (work → subscription) ─────────── */}
      {(screen === 'subscription-in' || screen === 'subscription-wipe' || screen === 'subscription-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'subscription-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'subscription-wipe' || screen === 'subscription-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Subscription
          </p>
          {(screen === 'subscription-wipe' || screen === 'subscription-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── APP TIEMPO TRANSITION OVERLAY (work → apptiempo) ─────────── */}
      {(screen === 'apptiempo-in' || screen === 'apptiempo-wipe' || screen === 'apptiempo-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'apptiempo-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'apptiempo-wipe' || screen === 'apptiempo-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            App Tiempo
          </p>
          {(screen === 'apptiempo-wipe' || screen === 'apptiempo-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── MAESTRO TRANSITION OVERLAY (work → maestro) ───────────────── */}
      {(screen === 'maestro-in' || screen === 'maestro-wipe' || screen === 'maestro-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'maestro-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'maestro-wipe' || screen === 'maestro-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Maestro
          </p>
          {(screen === 'maestro-wipe' || screen === 'maestro-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── FUTBOLRED TRANSITION OVERLAY (work → futbolred) ───────────── */}
      {(screen === 'futbolred-in' || screen === 'futbolred-wipe' || screen === 'futbolred-out') && (
        <div
          className="fixed inset-0 bg-[#2f2e29] z-50 flex items-center justify-center overflow-hidden"
          style={
            screen === 'futbolred-out'
              ? { animation: 'slideOutUp 0.9s cubic-bezier(0.76,0,0.24,1) both' }
              : { animation: 'fadeIn 0.35s ease both' }
          }
        >
          <p
            className="font-['Abhaya_Libre',serif] text-[90px] md:text-[200px] text-white leading-none relative px-4 md:px-0 text-center"
            style={
              screen === 'futbolred-wipe' || screen === 'futbolred-out'
                ? { animation: 'workTextExit 1.4s cubic-bezier(0.4,0,0.2,1) forwards' }
                : { animation: 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s both' }
            }
          >
            Futbolred
          </p>
          {(screen === 'futbolred-wipe' || screen === 'futbolred-out') && (
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '200%',
              background: 'linear-gradient(to right, #2f2e29 0%, #2f2e29 45%, transparent 65%)',
              animation: 'wipeRight 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
              pointerEvents: 'none',
            }} />
          )}
        </div>
      )}

      {/* ── WORK PAGE ────────────────────────────────────────────────── */}
      {(screen === 'work' || screen === 'transition-out' ||
        (anyProjectTransitioning && projectNavOrigin.current === 'work') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'work') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'work') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'android') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'google') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'youtube') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'eltiempo') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'apptiempo') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'maestro') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'futbolred') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'work')) && (
        <Work
          workReady={workReady}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          onAndroidClick={handleAndroidClick}
          onGoogleClick={handleGoogleClick}
          onYoutubeClick={handleYoutubeClick}
          onElTiempoClick={handleElTiempoClick}
          onAppTiempoClick={handleAppTiempoClick}
          onSubscriptionClick={handleSubscriptionClick}
          onMaestroClick={handleMaestroClick}
          onFutbolredClick={handleFutbolredClick}
        />
      )}

      {/* ── ABOUT ME PAGE ────────────────────────────────────────────── */}
      {(screen === 'aboutme' || screen === 'about-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'aboutme') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'aboutme') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'android') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'google') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'youtube') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'eltiempo') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'apptiempo') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'maestro') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'futbolred') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'aboutme') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'aboutme')) && (
        <AboutMe aboutReady={aboutReady} onWorkClick={handleWorkClick} onCvClick={handleCvClick} onLuciaClick={handleLuciaClick} />
      )}

      {/* ── CV PAGE ───────────────────────────────────────────────────── */}
      {(screen === 'cv' || screen === 'cv-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'cv') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'cv') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'cv') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'android') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'google') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'youtube') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'eltiempo') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'apptiempo') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'maestro') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'futbolred') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'cv')) && (
        <CVCase cvReady={cvReady} onWorkClick={handleWorkClick} onAboutClick={handleAboutClick} onLuciaClick={handleLuciaClick} />
      )}

      {/* ── ANDROID DETAIL PAGE ──────────────────────────────────────── */}
      {(screen === 'android' || screen === 'android-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'android') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'android') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'android') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'android') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'android')) && (
        <AndroidCase
          androidPageReady={androidPageReady}
          androidScrolled={androidScrolled}
          onScrolledChange={setAndroidScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('android')}
        />
      )}

      {/* ── GOOGLE DETAIL PAGE ───────────────────────────────────────── */}
      {(screen === 'google' || screen === 'google-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'google') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'google') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'google') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'google') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'google')) && (
        <GoogleCase
          googlePageReady={googlePageReady}
          googleScrolled={googleScrolled}
          onScrolledChange={setGoogleScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('google')}
        />
      )}

      {/* ── YOUTUBE DETAIL PAGE ──────────────────────────────────────── */}
      {(screen === 'youtube' || screen === 'youtube-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'youtube') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'youtube') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'youtube') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'youtube') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'youtube')) && (
        <YoutubeCase
          youtubePageReady={youtubePageReady}
          youtubeScrolled={youtubeScrolled}
          onScrolledChange={setYoutubeScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('youtube')}
        />
      )}

      {/* ── EL TIEMPO DETAIL PAGE ────────────────────────────────────── */}
      {(screen === 'eltiempo' || screen === 'eltiempo-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'eltiempo') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'eltiempo') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'eltiempo') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'eltiempo') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'eltiempo')) && (
        <ElTiempoCase
          elTiempoPageReady={elTiempoPageReady}
          elTiempoScrolled={elTiempoScrolled}
          onScrolledChange={setElTiempoScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('eltiempo')}
        />
      )}

      {/* ── SUBSCRIPTION DETAIL PAGE ─────────────────────────────────── */}
      {(screen === 'subscription' || screen === 'subscription-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'subscription') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'subscription') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'subscription') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'subscription') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'subscription')) && (
        <SubscriptionCase
          subscriptionPageReady={subscriptionPageReady}
          subscriptionScrolled={subscriptionScrolled}
          onScrolledChange={setSubscriptionScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('subscription')}
        />
      )}

      {/* ── APP TIEMPO DETAIL PAGE ───────────────────────────────────── */}
      {(screen === 'apptiempo' || screen === 'apptiempo-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'apptiempo') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'apptiempo') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'apptiempo') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'apptiempo') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'apptiempo')) && (
        <AppTiempoCase
          appTiempoPageReady={appTiempoPageReady}
          appTiempoScrolled={appTiempoScrolled}
          onScrolledChange={setAppTiempoScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('apptiempo')}
        />
      )}

      {/* ── MAESTRO DETAIL PAGE ──────────────────────────────────────── */}
      {(screen === 'maestro' || screen === 'maestro-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'maestro') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'maestro') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'maestro') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'maestro') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'maestro')) && (
        <MaestroCase
          maestroPageReady={maestroPageReady}
          maestroScrolled={maestroScrolled}
          onScrolledChange={setMaestroScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('maestro')}
        />
      )}

      {/* ── FUTBOLRED DETAIL PAGE ────────────────────────────────────── */}
      {(screen === 'futbolred' || screen === 'futbolred-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'futbolred') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'futbolred') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'futbolred') ||
        ((screen === 'cv-in' || screen === 'cv-wipe') && cvOrigin.current === 'futbolred') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'futbolred')) && (
        <FutbolredCase
          futbolredPageReady={futbolredPageReady}
          futbolredScrolled={futbolredScrolled}
          onScrolledChange={setFutbolredScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onCvClick={handleCvClick}
          onLuciaClick={handleLuciaClick}
          {...getProjectNav('futbolred')}
        />
      )}

    </div>
  )
}

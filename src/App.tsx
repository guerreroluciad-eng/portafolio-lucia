import { useState, useEffect, useRef } from 'react'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import Home from '@/pages/Home'
import Work from '@/pages/Work'
import AboutMe from '@/pages/AboutMe'
import AndroidCase from '@/pages/AndroidCase'
import GoogleCase from '@/pages/GoogleCase'
import YoutubeCase from '@/pages/YoutubeCase'
import ElTiempoCase from '@/pages/ElTiempoCase'
import AppTiempoCase from '@/pages/AppTiempoCase'
import MaestroCase from '@/pages/MaestroCase'
import FutbolredCase from '@/pages/FutbolredCase'

type Screen =
  | 'home'
  | 'transition-in' | 'transition-wipe' | 'transition-out'
  | 'work'
  | 'about-in' | 'about-wipe' | 'about-out'
  | 'aboutme'
  | 'lucia-in' | 'lucia-wipe' | 'lucia-out'
  | 'android-in' | 'android-wipe' | 'android-out'
  | 'android'
  | 'google-in' | 'google-wipe' | 'google-out'
  | 'google'
  | 'youtube-in' | 'youtube-wipe' | 'youtube-out'
  | 'youtube'
  | 'eltiempo-in' | 'eltiempo-wipe' | 'eltiempo-out'
  | 'eltiempo'
  | 'apptiempo-in' | 'apptiempo-wipe' | 'apptiempo-out'
  | 'apptiempo'
  | 'maestro-in' | 'maestro-wipe' | 'maestro-out'
  | 'maestro'
  | 'futbolred-in' | 'futbolred-wipe' | 'futbolred-out'
  | 'futbolred'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const luciaOrigin = useRef<'work' | 'aboutme' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo' | 'maestro' | 'futbolred'>('work')
  const aboutOrigin = useRef<'home' | 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo' | 'maestro' | 'futbolred'>('home')
  const workOrigin = useRef<'home' | 'aboutme' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo' | 'maestro' | 'futbolred'>('home')
  // Which page a project-to-project ("Next page") or work-to-project transition
  // started from, so the transition overlay's "-in"/"-wipe" phases render the
  // correct page underneath instead of always assuming it came from Work.
  const projectNavOrigin = useRef<'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo'>('work')
  const [androidPageReady, setAndroidPageReady] = useState(false)
  const [androidScrolled, setAndroidScrolled] = useState(false)
  const [googlePageReady, setGooglePageReady] = useState(false)
  const [googleScrolled, setGoogleScrolled] = useState(false)
  const [youtubePageReady, setYoutubePageReady] = useState(false)
  const [youtubeScrolled, setYoutubeScrolled] = useState(false)
  const [elTiempoPageReady, setElTiempoPageReady] = useState(false)
  const [elTiempoScrolled, setElTiempoScrolled] = useState(false)
  const [appTiempoPageReady, setAppTiempoPageReady] = useState(false)
  const [appTiempoScrolled, setAppTiempoScrolled] = useState(false)
  const [maestroPageReady, setMaestroPageReady] = useState(false)
  const [maestroScrolled, setMaestroScrolled] = useState(false)
  const [futbolredPageReady, setFutbolredPageReady] = useState(false)
  const [futbolredScrolled, setFutbolredScrolled] = useState(false)
  const [homeReady, setHomeReady] = useState(false)
  const [workReady, setWorkReady] = useState(false)
  const [aboutReady, setAboutReady] = useState(false)

  // Home intro: trigger animations after mount
  useEffect(() => {
    const t = setTimeout(() => setHomeReady(true), 50)
    return () => clearTimeout(t)
  }, [])

  function handleAndroidClick() {
    if (screen !== 'work' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo') return
    projectNavOrigin.current = screen as 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo'
    setScreen('android-in')
    setTimeout(() => {
      setScreen('android-wipe')
      setTimeout(() => {
        setScreen('android-out')
        setTimeout(() => {
          setScreen('android')
          window.scrollTo(0, 0)
          setAndroidPageReady(false)
          setAndroidScrolled(false)
          setTimeout(() => setAndroidPageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleGoogleClick() {
    if (screen !== 'work' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo') return
    projectNavOrigin.current = screen as 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo'
    setScreen('google-in')
    setTimeout(() => {
      setScreen('google-wipe')
      setTimeout(() => {
        setScreen('google-out')
        setTimeout(() => {
          setScreen('google')
          window.scrollTo(0, 0)
          setGooglePageReady(false)
          setGoogleScrolled(false)
          setTimeout(() => setGooglePageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleYoutubeClick() {
    if (screen !== 'work' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo') return
    projectNavOrigin.current = screen as 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo'
    setScreen('youtube-in')
    setTimeout(() => {
      setScreen('youtube-wipe')
      setTimeout(() => {
        setScreen('youtube-out')
        setTimeout(() => {
          setScreen('youtube')
          window.scrollTo(0, 0)
          setYoutubePageReady(false)
          setYoutubeScrolled(false)
          setTimeout(() => setYoutubePageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleElTiempoClick() {
    if (screen !== 'work' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo') return
    projectNavOrigin.current = screen as 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo'
    setScreen('eltiempo-in')
    setTimeout(() => {
      setScreen('eltiempo-wipe')
      setTimeout(() => {
        setScreen('eltiempo-out')
        setTimeout(() => {
          setScreen('eltiempo')
          window.scrollTo(0, 0)
          setElTiempoPageReady(false)
          setElTiempoScrolled(false)
          setTimeout(() => setElTiempoPageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleAppTiempoClick() {
    if (screen !== 'work' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo') return
    projectNavOrigin.current = screen as 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo'
    setScreen('apptiempo-in')
    setTimeout(() => {
      setScreen('apptiempo-wipe')
      setTimeout(() => {
        setScreen('apptiempo-out')
        setTimeout(() => {
          setScreen('apptiempo')
          window.scrollTo(0, 0)
          setAppTiempoPageReady(false)
          setAppTiempoScrolled(false)
          setTimeout(() => setAppTiempoPageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleMaestroClick() {
    if (screen !== 'work') return
    setScreen('maestro-in')
    setTimeout(() => {
      setScreen('maestro-wipe')
      setTimeout(() => {
        setScreen('maestro-out')
        setTimeout(() => {
          setScreen('maestro')
          window.scrollTo(0, 0)
          setMaestroPageReady(false)
          setMaestroScrolled(false)
          setTimeout(() => setMaestroPageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleFutbolredClick() {
    if (screen !== 'work') return
    setScreen('futbolred-in')
    setTimeout(() => {
      setScreen('futbolred-wipe')
      setTimeout(() => {
        setScreen('futbolred-out')
        setTimeout(() => {
          setScreen('futbolred')
          window.scrollTo(0, 0)
          setFutbolredPageReady(false)
          setFutbolredScrolled(false)
          setTimeout(() => setFutbolredPageReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleWorkClick() {
    if (screen !== 'home' && screen !== 'aboutme' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo' && screen !== 'maestro' && screen !== 'futbolred') return
    workOrigin.current = screen as 'home' | 'aboutme' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo' | 'maestro' | 'futbolred'
    setScreen('transition-in')

    // "Work" slides up and is visible for ~900ms, then gradient wipe starts
    setTimeout(() => {
      setScreen('transition-wipe')

      // Wipe lasts 1400ms, then overlay slides up
      setTimeout(() => {
        setScreen('transition-out')

        // Slide-out takes 900ms, then show work page
        setTimeout(() => {
          setScreen('work')
          setWorkReady(false)
          setTimeout(() => setWorkReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleAboutClick() {
    if (screen !== 'home' && screen !== 'work' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo' && screen !== 'maestro' && screen !== 'futbolred') return
    aboutOrigin.current = screen as 'home' | 'work' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo' | 'maestro' | 'futbolred'
    setScreen('about-in')
    setTimeout(() => {
      setScreen('about-wipe')
      setTimeout(() => {
        setScreen('about-out')
        setTimeout(() => {
          setScreen('aboutme')
          setAboutReady(false)
          setTimeout(() => setAboutReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  function handleLuciaClick() {
    if (screen !== 'work' && screen !== 'aboutme' && screen !== 'android' && screen !== 'google' && screen !== 'youtube' && screen !== 'eltiempo' && screen !== 'apptiempo' && screen !== 'maestro' && screen !== 'futbolred') return
    luciaOrigin.current = screen as 'work' | 'aboutme' | 'android' | 'google' | 'youtube' | 'eltiempo' | 'apptiempo' | 'maestro' | 'futbolred'
    setScreen('lucia-in')
    setTimeout(() => {
      setScreen('lucia-wipe')
      setTimeout(() => {
        setScreen('lucia-out')
        setTimeout(() => {
          setScreen('home')
          setHomeReady(false)
          setTimeout(() => setHomeReady(true), 60)
        }, 900)
      }, 1400)
    }, 900)
  }

  // True while any of the 5 cyclable project screens is mid-transition
  // ("-in" or "-wipe"), regardless of which one. Combined with
  // projectNavOrigin, this decides which page renders behind the transition
  // overlay: Work (the old, only path) or another project page (new, for
  // "Next page" project-to-project navigation).
  const anyProjectTransitioning =
    screen === 'android-in' || screen === 'android-wipe' ||
    screen === 'google-in' || screen === 'google-wipe' ||
    screen === 'youtube-in' || screen === 'youtube-wipe' ||
    screen === 'eltiempo-in' || screen === 'eltiempo-wipe' ||
    screen === 'apptiempo-in' || screen === 'apptiempo-wipe'

  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ fontFamily: "'Abhaya Libre', serif" }}>

      {/* ── HOME PAGE ────────────────────────────────────────────────── */}
      {(screen === 'home' || screen === 'lucia-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'home') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'home')) && (
        <Home homeReady={homeReady} onWorkClick={handleWorkClick} onAboutClick={handleAboutClick} />
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
        screen === 'maestro-in' || screen === 'maestro-wipe' || screen === 'futbolred-in' || screen === 'futbolred-wipe' ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'work') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'work') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'android') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'google') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'youtube') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'eltiempo') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'apptiempo') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'maestro') ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'futbolred')) && (
        <Work
          workReady={workReady}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
          onAndroidClick={handleAndroidClick}
          onGoogleClick={handleGoogleClick}
          onYoutubeClick={handleYoutubeClick}
          onElTiempoClick={handleElTiempoClick}
          onAppTiempoClick={handleAppTiempoClick}
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
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'futbolred')) && (
        <AboutMe aboutReady={aboutReady} onWorkClick={handleWorkClick} onLuciaClick={handleLuciaClick} />
      )}

      {/* ── ANDROID DETAIL PAGE ──────────────────────────────────────── */}
      {(screen === 'android' || screen === 'android-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'android') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'android') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'android') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'android')) && (
        <AndroidCase
          androidPageReady={androidPageReady}
          androidScrolled={androidScrolled}
          onScrolledChange={setAndroidScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
          onNextClick={handleAppTiempoClick}
        />
      )}

      {/* ── GOOGLE DETAIL PAGE ───────────────────────────────────────── */}
      {(screen === 'google' || screen === 'google-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'google') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'google') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'google') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'google')) && (
        <GoogleCase
          googlePageReady={googlePageReady}
          googleScrolled={googleScrolled}
          onScrolledChange={setGoogleScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
          onNextClick={handleElTiempoClick}
        />
      )}

      {/* ── YOUTUBE DETAIL PAGE ──────────────────────────────────────── */}
      {(screen === 'youtube' || screen === 'youtube-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'youtube') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'youtube') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'youtube') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'youtube')) && (
        <YoutubeCase
          youtubePageReady={youtubePageReady}
          youtubeScrolled={youtubeScrolled}
          onScrolledChange={setYoutubeScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
          onNextClick={handleAndroidClick}
        />
      )}

      {/* ── EL TIEMPO DETAIL PAGE ────────────────────────────────────── */}
      {(screen === 'eltiempo' || screen === 'eltiempo-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'eltiempo') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'eltiempo') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'eltiempo') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'eltiempo')) && (
        <ElTiempoCase
          elTiempoPageReady={elTiempoPageReady}
          elTiempoScrolled={elTiempoScrolled}
          onScrolledChange={setElTiempoScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
          onNextClick={handleYoutubeClick}
        />
      )}

      {/* ── APP TIEMPO DETAIL PAGE ───────────────────────────────────── */}
      {(screen === 'apptiempo' || screen === 'apptiempo-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'apptiempo') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'apptiempo') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'apptiempo') ||
        (anyProjectTransitioning && projectNavOrigin.current === 'apptiempo')) && (
        <AppTiempoCase
          appTiempoPageReady={appTiempoPageReady}
          appTiempoScrolled={appTiempoScrolled}
          onScrolledChange={setAppTiempoScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
          onNextClick={handleGoogleClick}
        />
      )}

      {/* ── MAESTRO DETAIL PAGE ──────────────────────────────────────── */}
      {(screen === 'maestro' || screen === 'maestro-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'maestro') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'maestro') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'maestro')) && (
        <MaestroCase
          maestroPageReady={maestroPageReady}
          maestroScrolled={maestroScrolled}
          onScrolledChange={setMaestroScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
        />
      )}

      {/* ── FUTBOLRED DETAIL PAGE ────────────────────────────────────── */}
      {(screen === 'futbolred' || screen === 'futbolred-out' ||
        ((screen === 'transition-in' || screen === 'transition-wipe') && workOrigin.current === 'futbolred') ||
        ((screen === 'about-in' || screen === 'about-wipe') && aboutOrigin.current === 'futbolred') ||
        ((screen === 'lucia-in' || screen === 'lucia-wipe') && luciaOrigin.current === 'futbolred')) && (
        <FutbolredCase
          futbolredPageReady={futbolredPageReady}
          futbolredScrolled={futbolredScrolled}
          onScrolledChange={setFutbolredScrolled}
          onWorkClick={handleWorkClick}
          onAboutClick={handleAboutClick}
          onLuciaClick={handleLuciaClick}
        />
      )}

    </div>
  )
}

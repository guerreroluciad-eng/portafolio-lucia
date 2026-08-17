import { useRef, useState } from 'react'
import { useMinWidth } from '@/hooks/useMinWidth'
import imgFrame241Work from '@/imports/DesktopHover-4/c06761a7de8a442cd6a45db796d69e4fa8bd0961.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import imgRectangle16 from '@/imports/DesktopWorkpage-3/9132c13810b8cbde2c9bc7dc4a4c663a831efc1a.png'
import imgRectangle16b from '@/imports/DesktopWorkpage-3/0c88ce667d1bc948fc46228ac03a51abf09fe410.png'
import imgRectangle17 from '@/imports/DesktopWorkpage-3/80aa8ac5ddd2836431243e3325d0f92ed77c70d8.png'
import imgRectangle18 from '@/imports/DesktopWorkpage-3/850546b62d8fa683615b2abb4ca08568c0390177.png'
import imgRectangle20 from '@/imports/DesktopWorkpage-3/b3555b52c90124b3b6dd67f96aba2140412b8b23.png'
import imgRectangle21 from '@/imports/DesktopWorkpage-3/31aecbdfe14e4f31ffad56087c8b5d5d7999933d.png'
import imgRectangle22 from '@/imports/DesktopWorkpage-3/be67dbc000bbf29c86f810521c646ba6bafbb018.png'
import imgRedisenoEt081 from '@/imports/DesktopWorkpage/71494aec586ac7dcb19e6a7869db7c24c6699f71.png'

// ─── Workpage Covers ─────────────────────────────────────────────────────────

function CoverAndroid({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[338px] w-[322px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgRectangle16}
          style={{ mixBlendMode: hovered ? 'multiply' : 'normal', transition: 'mix-blend-mode 0s' }}
        />
        {/* #302F2A screen overlay on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#302F2A',
            mixBlendMode: 'screen',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

function CoverMaestro({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[337px] w-[234px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute h-[338px] left-0 top-[0.5px] w-[234px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[122.84%] left-0 max-w-none top-[-22.96%] w-full"
            src={imgRectangle17}
            style={{ mixBlendMode: hovered ? 'multiply' : 'normal' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#302F2A',
              mixBlendMode: 'screen',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function CoverYoutube({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[338px] w-[322px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[0.09%] max-w-none top-0 w-[153.42%]"
            src={imgRectangle18}
            style={{ mixBlendMode: hovered ? 'multiply' : 'normal' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#302F2A',
              mixBlendMode: 'screen',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function CoverAndroid1b({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[338px] w-[322px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[0.06%] max-w-none top-0 w-[112.84%]"
            src={imgRectangle16b}
            style={{ mixBlendMode: hovered ? 'multiply' : 'normal' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#302F2A',
              mixBlendMode: 'screen',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function CoverElTiempoImg({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[338px] w-[322px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgRectangle20}
          style={{ mixBlendMode: hovered ? 'multiply' : 'normal' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#302F2A',
            mixBlendMode: 'screen',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

function CoverMaestro1({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[337px] w-[234px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute h-[338px] left-0 top-[0.5px] w-[234px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgRectangle21}
          style={{ mixBlendMode: hovered ? 'multiply' : 'normal' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#302F2A',
            mixBlendMode: 'screen',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

function CoverAndroid3({ hovered, onMouseEnter, onMouseLeave }: { hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[338px] w-[322px] overflow-clip relative shrink-0"
      style={{ isolation: 'isolate', cursor: 'default' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-0 w-[324px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[0.06%] max-w-none top-0 w-[112.84%]"
            src={imgRectangle22}
            style={{ mixBlendMode: hovered ? 'multiply' : 'normal' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#302F2A',
              mixBlendMode: 'screen',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function CoverElTiempo() {
  return (
    <div className="bg-black h-[338px] overflow-clip relative shrink-0 w-[321px]">
      <div className="absolute h-[245px] left-[64px] top-[41px] w-[137px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[177.22%] left-[-97.6%] max-w-none top-[-36.95%] w-[578.53%]" src={imgRedisenoEt081} />
        </div>
      </div>
      <div className="absolute border border-solid border-white h-[278px] left-[48px] top-[28px] w-[169px]" />
      <div className="absolute left-[127px] size-[8px] top-[293px]">
        <svg fill="none" height="8" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" r="3.5" stroke="white" />
        </svg>
      </div>
      <div className="absolute h-[245px] left-[260px] top-[41px] w-[137px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[177.22%] left-[-239.2%] max-w-none top-[-35.72%] w-[578.53%]" src={imgRedisenoEt081} />
        </div>
      </div>
      <div className="absolute border border-solid border-white h-[278px] left-[241px] top-[28px] w-[169px]" />
      <div className="absolute left-[320px] size-[8px] top-[293px]">
        <svg fill="none" height="8" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" r="3.5" stroke="white" />
        </svg>
      </div>
    </div>
  )
}

// ─── Work Page ───────────────────────────────────────────────────────────────

interface WorkProps {
  workReady: boolean
  onAboutClick: () => void
  onLuciaClick: () => void
  onAndroidClick: () => void
  onGoogleClick: () => void
  onYoutubeClick: () => void
  onElTiempoClick: () => void
  onAppTiempoClick: () => void
  onMaestroClick: () => void
  onFutbolredClick: () => void
}

export default function Work({ workReady, onAboutClick, onLuciaClick, onAndroidClick, onGoogleClick, onYoutubeClick, onElTiempoClick, onAppTiempoClick, onMaestroClick, onFutbolredClick }: WorkProps) {
  const [workHeaderHovered, setWorkHeaderHovered] = useState(false)
  const [workHeadingHovered, setWorkHeadingHovered] = useState(false)
  const isDesktop = useMinWidth(1024)
  const headerActive = isDesktop && workHeaderHovered
  const [androidHovered, setAndroidHovered] = useState(false)
  const [googleHovered, setGoogleHovered] = useState(false)
  const [elTiempoHovered, setElTiempoHovered] = useState(false)
  const [appTiempoHovered, setAppTiempoHovered] = useState(false)
  const [futbolredHovered, setFutbolredHovered] = useState(false)
  const [maestroHovered, setMaestroHovered] = useState(false)
  const [youtubeHovered, setYoutubeHovered] = useState(false)

  // Carousel drag
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)

  function onCarouselMouseDown(e: React.MouseEvent) {
    const el = carouselRef.current
    if (!el) return
    setIsDragging(true)
    dragStart.current = { x: e.pageX, scrollLeft: el.scrollLeft }
  }
  function onCarouselMouseMove(e: React.MouseEvent) {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    carouselRef.current.scrollLeft = dragStart.current.scrollLeft - (e.pageX - dragStart.current.x)
  }
  function onCarouselMouseUp() { setIsDragging(false) }
  function onCarouselMouseLeave() { setIsDragging(false) }
  function onCarouselWheel(e: React.WheelEvent) {
    if (!carouselRef.current) return
    e.preventDefault()
    carouselRef.current.scrollLeft += e.deltaY + e.deltaX
  }

  const workSlideStyle = (delay: number) =>
    workReady
      ? {
          animation: `slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms both`,
        }
      : { opacity: 0 }

  return (
    <div className="bg-[#e1dad0] relative w-full min-h-screen">

      {/* Black hinge rectangle behind work header — desktop hover only */}
      <div
        className="absolute left-0 w-full bg-[#2f2e29] pointer-events-none z-10"
        style={{
          top: '46px', height: '95px',
          transformOrigin: 'center center',
          transform: headerActive ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* Header */}
      <div
        className="absolute top-[30px] lg:top-[50px] left-4 right-4 md:left-[30px] md:right-[30px] lg:left-[60px] lg:right-[60px] lg:h-[91px] z-20 cursor-pointer"
        style={workSlideStyle(0)}
        onMouseEnter={() => setWorkHeaderHovered(true)}
        onMouseLeave={() => setWorkHeaderHovered(false)}
      >
        <div className="content-stretch flex gap-0 justify-between w-full items-start relative lg:size-full">
          {/* Logo — clicks back to home */}
          <button
            onClick={onLuciaClick}
            className="h-[37px] w-[70px] lg:h-[85px] lg:w-[159px] relative shrink-0 bg-transparent border-none p-0 cursor-pointer"
          >
            <img
              alt="lucia"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame241Work}
              style={{ opacity: headerActive ? 0 : 1, transition: 'opacity 0.35s ease' }}
            />
            <img
              alt="lucia"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame241Hover}
              style={{ opacity: headerActive ? 1 : 0, transition: 'opacity 0.35s ease' }}
            />
          </button>
          <div
            className="[word-break:break-word] font-['Abhaya_Libre',serif] font-bold leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[73px] lg:w-[87px] whitespace-pre-wrap"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">01.</p>
            <p className="leading-[normal]">Work</p>
          </div>
          <div
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
            onClick={onAboutClick}
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">About me</p>
          </div>
        </div>
      </div>

      {/* "Work / Android" heading */}
      <div
        className="relative pt-[136px] md:pt-[204px] lg:pt-0 lg:absolute content-stretch flex items-center justify-center lg:left-1/2 lg:-translate-x-1/2 lg:top-[250px] lg:w-[1104px]"
        style={workSlideStyle(120)}
        onMouseEnter={() => setWorkHeadingHovered(true)}
        onMouseLeave={() => setWorkHeadingHovered(false)}
      >
        <p
          className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic relative shrink-0 text-[80px] md:text-[128px] lg:text-[200px] lg:h-[215px] lg:w-[1000px] w-full text-center"
          style={{
            color: workHeadingHovered ? '#2f2e29' : '#ffffff',
            transition: 'color 0.3s ease',
            cursor: 'default',
          }}
        >
          {androidHovered ? 'Android' : googleHovered ? 'Google' : maestroHovered ? 'Maestro' : youtubeHovered ? 'Youtube' : elTiempoHovered ? 'El Tiempo' : appTiempoHovered ? 'App Tiempo' : futbolredHovered ? 'Futbolred' : 'Work'}
        </p>
      </div>

      {/* Carousel — draggable + wheel scroll */}
      <div
        className="relative mt-[145px] md:mt-[212px] lg:mt-0 lg:absolute lg:left-0 lg:right-0 lg:top-[616px] overflow-hidden"
        style={workSlideStyle(260)}
      >
        <div
          ref={carouselRef}
          className="flex gap-[47px] items-center select-none px-4 md:px-[30px] lg:px-[60px]"
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={onCarouselMouseDown}
          onMouseMove={onCarouselMouseMove}
          onMouseUp={onCarouselMouseUp}
          onMouseLeave={onCarouselMouseLeave}
          onWheel={onCarouselWheel}
        >
          <p className="[word-break:break-word] font-['Abhaya_Libre',serif] font-medium h-[60px] leading-[30px] not-italic shrink-0 text-[40px] text-black text-center w-[150px]">
            Product Design
          </p>
          <div className="flex gap-[48px] items-center shrink-0">
            <div onClick={onGoogleClick} style={{ cursor: 'pointer' }}>
              <CoverAndroid1b
                hovered={googleHovered}
                onMouseEnter={() => setGoogleHovered(true)}
                onMouseLeave={() => setGoogleHovered(false)}
              />
            </div>
            <div onClick={onElTiempoClick} style={{ cursor: 'pointer' }}>
              <CoverElTiempoImg
                hovered={elTiempoHovered}
                onMouseEnter={() => setElTiempoHovered(true)}
                onMouseLeave={() => setElTiempoHovered(false)}
              />
            </div>
            <div onClick={onYoutubeClick} style={{ cursor: 'pointer' }}>
              <CoverYoutube
                hovered={youtubeHovered}
                onMouseEnter={() => setYoutubeHovered(true)}
                onMouseLeave={() => setYoutubeHovered(false)}
              />
            </div>
            <div onClick={onAppTiempoClick} style={{ cursor: 'pointer' }}>
              <CoverMaestro1
                hovered={appTiempoHovered}
                onMouseEnter={() => setAppTiempoHovered(true)}
                onMouseLeave={() => setAppTiempoHovered(false)}
              />
            </div>
            <div onClick={onAndroidClick} style={{ cursor: 'pointer' }}>
              <CoverAndroid
                hovered={androidHovered}
                onMouseEnter={() => setAndroidHovered(true)}
                onMouseLeave={() => setAndroidHovered(false)}
              />
            </div>
            <p className="[word-break:break-word] font-['Abhaya_Libre',serif] font-medium h-[30px] leading-[30px] not-italic shrink-0 text-[40px] text-black text-center w-[170px]">
              Branding
            </p>
            <div onClick={onMaestroClick} style={{ cursor: 'pointer' }}>
              <CoverMaestro
                hovered={maestroHovered}
                onMouseEnter={() => setMaestroHovered(true)}
                onMouseLeave={() => setMaestroHovered(false)}
              />
            </div>
            <div onClick={onFutbolredClick} style={{ cursor: 'pointer' }}>
              <CoverAndroid3
                hovered={futbolredHovered}
                onMouseEnter={() => setFutbolredHovered(true)}
                onMouseLeave={() => setFutbolredHovered(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useRef, useState } from 'react'
import { useMinWidth } from '@/hooks/useMinWidth'
import imgFrame241Work from '@/imports/DesktopHover-4/c06761a7de8a442cd6a45db796d69e4fa8bd0961.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import imgCoverGoogle from '@/imports/WorkCoversNew/CoverGoogle.png'
import imgCoverElTiempo from '@/imports/WorkCoversNew/CoverElTiempo.png'
import imgCoverYoutube from '@/imports/WorkCoversNew/CoverYoutube.png'
import imgCoverAndroid from '@/imports/WorkCoversNew/CoverAndroid.png'
import imgCoverAppTiempo from '@/imports/WorkCoversNew/CoverAppTiempo.png'

// ─── Workpage Cover Card ─────────────────────────────────────────────────────
// All five remaining carousel covers share the same fixed 340×407px size, so
// a single card renderer replaces the old per-project components (each of
// which used to carry its own bespoke crop math for a different image size).

function CarouselDot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Go to slide"
      className="shrink-0 flex items-center justify-center p-0 bg-transparent border-none cursor-pointer"
      style={{ width: '12px', height: '12px' }}
    >
      {active ? (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="6" fill="#302f2a" />
        </svg>
      ) : (
        <svg width="8" height="8" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3.5" stroke="#302f2a" fill="none" />
        </svg>
      )}
    </button>
  )
}

function WorkCoverCard({ src, alt, hovered, onMouseEnter, onMouseLeave }: { src: string; alt: string; hovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  return (
    <div
      className="h-[407px] w-[340px] overflow-clip relative shrink-0"
      style={{
        cursor: 'default',
        boxSizing: 'border-box',
        borderRadius: '20px',
        border: `1px solid ${hovered ? '#000000' : 'transparent'}`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        alt={alt}
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={src}
      />
    </div>
  )
}

// ─── Work Page ───────────────────────────────────────────────────────────────

interface WorkProps {
  workReady: boolean
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  onAndroidClick: () => void
  onGoogleClick: () => void
  onYoutubeClick: () => void
  onElTiempoClick: () => void
  onAppTiempoClick: () => void
  onMaestroClick: () => void
  onFutbolredClick: () => void
}

export default function Work({ workReady, onAboutClick, onCvClick, onLuciaClick, onAndroidClick, onGoogleClick, onYoutubeClick, onElTiempoClick, onAppTiempoClick }: WorkProps) {
  const [workHeaderHovered, setWorkHeaderHovered] = useState(false)
  const [workHeadingHovered, setWorkHeadingHovered] = useState(false)
  const isDesktop = useMinWidth(1024)
  const headerActive = isDesktop && workHeaderHovered
  const [androidHovered, setAndroidHovered] = useState(false)
  const [googleHovered, setGoogleHovered] = useState(false)
  const [elTiempoHovered, setElTiempoHovered] = useState(false)
  const [appTiempoHovered, setAppTiempoHovered] = useState(false)
  const [youtubeHovered, setYoutubeHovered] = useState(false)

  // Carousel drag
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)

  // Dot indicator — tracks which cover is closest to the center of the
  // visible carousel viewport, updating live as the user drags/scrolls.
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  function updateActiveCardIndex() {
    const scrollEl = carouselRef.current
    if (!scrollEl) return
    const viewportCenter = scrollEl.scrollLeft + scrollEl.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Infinity
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - viewportCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = i
      }
    })
    setActiveCardIndex(closestIndex)
  }

  // Clicking a dot marks it active immediately (regardless of whether the
  // carousel actually has room to scroll — on wide desktop widths all cards
  // can already be fully visible, so there may be nothing to scroll to) and
  // also scrolls the carousel to center that card when there is scroll room.
  // If a scroll does happen, its native 'scroll' events keep re-confirming
  // the active dot via updateActiveCardIndex (already wired to onScroll) as
  // it settles into place.
  function goToCard(index: number) {
    setActiveCardIndex(index)
    const scrollEl = carouselRef.current
    const card = cardRefs.current[index]
    if (!scrollEl || !card) return
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    scrollEl.scrollTo({ left: cardCenter - scrollEl.clientWidth / 2, behavior: 'smooth' })
  }

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

  const covers = [
    { key: 'google', src: imgCoverGoogle, alt: 'Google', onClick: onGoogleClick, hovered: googleHovered, onEnter: () => setGoogleHovered(true), onLeave: () => setGoogleHovered(false) },
    { key: 'eltiempo', src: imgCoverElTiempo, alt: 'El Tiempo', onClick: onElTiempoClick, hovered: elTiempoHovered, onEnter: () => setElTiempoHovered(true), onLeave: () => setElTiempoHovered(false) },
    { key: 'youtube', src: imgCoverYoutube, alt: 'Youtube', onClick: onYoutubeClick, hovered: youtubeHovered, onEnter: () => setYoutubeHovered(true), onLeave: () => setYoutubeHovered(false) },
    { key: 'android', src: imgCoverAndroid, alt: 'Android', onClick: onAndroidClick, hovered: androidHovered, onEnter: () => setAndroidHovered(true), onLeave: () => setAndroidHovered(false) },
    { key: 'apptiempo', src: imgCoverAppTiempo, alt: 'App Tiempo', onClick: onAppTiempoClick, hovered: appTiempoHovered, onEnter: () => setAppTiempoHovered(true), onLeave: () => setAppTiempoHovered(false) },
  ]

  return (
    <div className="bg-[#e1dad0] relative w-full min-h-screen overflow-y-auto">

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
          <div
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap cursor-pointer"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
            onClick={onCvClick}
          >
            <p className="leading-[normal] mb-0">03.</p>
            <p className="leading-[normal]">CV / HV</p>
          </div>
        </div>
      </div>

      {/* Desktop content flow: heading → hint → carousel, spaced per spec.
          Mobile/tablet are untouched — each child keeps its own relative/pt-based
          positioning at those breakpoints; this wrapper only takes effect at lg. */}
      <div className="lg:flex lg:flex-col lg:items-center lg:pt-[141px]">

        {/* "Work / Android" heading */}
        <div
          className="relative pt-[103px] md:pt-[228px] lg:pt-0 content-stretch flex items-center justify-center lg:w-[1104px]"
          style={workSlideStyle(120)}
          onMouseEnter={() => setWorkHeadingHovered(true)}
          onMouseLeave={() => setWorkHeadingHovered(false)}
        >
          <p
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic relative shrink-0 text-[80px] md:text-[128px] lg:text-[180px] lg:h-[215px] lg:w-[1000px] w-full text-center"
            style={{
              color: workHeadingHovered ? '#2f2e29' : '#ffffff',
              transition: 'color 0.3s ease',
              cursor: 'default',
            }}
          >
            {androidHovered ? 'Android' : googleHovered ? 'Google' : youtubeHovered ? 'Youtube' : elTiempoHovered ? 'El Tiempo' : appTiempoHovered ? 'App Tiempo' : 'Work'}
          </p>
        </div>

        {/* "Drag to explore" hint */}
        <p
          className="block mt-[24px] lg:mt-0 font-['Abhaya_Libre',serif] font-normal not-italic uppercase text-[16px] text-[#302f2a] text-center"
          style={workSlideStyle(180)}
        >
          Drag to explore. Click to discover.
        </p>

        {/* Carousel — draggable + wheel scroll */}
        <div
          className="relative mt-[40px] md:mt-[70px] lg:mt-[50px] lg:pb-[157px] w-full overflow-hidden"
          style={workSlideStyle(260)}
        >
        <div
          ref={carouselRef}
          className="flex items-center select-none px-4 md:px-[30px] lg:px-[60px]"
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
          onScroll={updateActiveCardIndex}
        >
          <div className="flex gap-[48px] items-center shrink-0">
            {covers.map((cover, index) => (
              <div
                key={cover.key}
                ref={(el) => { cardRefs.current[index] = el }}
                onClick={cover.onClick}
                style={{ cursor: 'pointer', paddingBottom: '103px' }}
              >
                <WorkCoverCard
                  src={cover.src}
                  alt={cover.alt}
                  hovered={cover.hovered}
                  onMouseEnter={cover.onEnter}
                  onMouseLeave={cover.onLeave}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicator — one dot per cover, active dot filled + larger.
            Cards reserve 103px of empty padding-bottom below their visible
            image, so the margin here is pulled up past that reserve to sit
            the requested 30px below the actual card artwork, not the box. */}
        <div className="flex items-center justify-center gap-[10px]" style={{ marginTop: '-73px' }}>
          {covers.map((cover, index) => (
            <CarouselDot key={cover.key} active={index === activeCardIndex} onClick={() => goToCard(index)} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

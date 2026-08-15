import { useEffect, useState } from 'react'
import { useMinWidth } from '@/hooks/useMinWidth'
import imgFrame241Work from '@/imports/DesktopHover-4/c06761a7de8a442cd6a45db796d69e4fa8bd0961.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'

// ─── Project Page Header ───────────────────────────────────────────────────
// The initial (non-sticky) header for project case-study pages — fades out
// on scroll as ScrollHeader slides in. Shared across AndroidCase and future
// project pages so they all inherit the same responsive behavior.
//
// The hinge (dark hover overlay) only activates at desktop widths (>=1024px)
// — no real hover on mobile/tablet, so a tap would otherwise trigger and
// stick it open.

interface ProjectHeaderProps {
  ready: boolean
  scrolled: boolean
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
  /** Dark-background pages (e.g. Maestro) need the logo/text to stay light instead of the default dark-on-light treatment. */
  dark?: boolean
}

export default function ProjectHeader({ ready, scrolled, onWorkClick, onAboutClick, onLuciaClick, dark = false }: ProjectHeaderProps) {
  const [hovered, setHovered] = useState(false)
  const isDesktop = useMinWidth(1024)
  const active = isDesktop && hovered

  // Once the entrance animation finishes, drop it so it stops pinning
  // opacity:1 and the scroll-based fade can actually take effect.
  const [animDone, setAnimDone] = useState(false)
  useEffect(() => {
    if (!ready) return
    const t = setTimeout(() => setAnimDone(true), 850)
    return () => clearTimeout(t)
  }, [ready])

  return (
    <>
      {/* Black hinge rectangle behind header — desktop hover only */}
      <div
        className="fixed left-0 w-full bg-[#2f2e29] pointer-events-none z-10"
        style={{
          top: '46px', height: '95px',
          transformOrigin: 'center center',
          transform: active ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
          opacity: scrolled ? 0 : 1,
        }}
      />
      <div
        className="fixed top-[30px] lg:top-[50px] left-4 right-4 md:left-[30px] md:right-[30px] lg:left-[60px] lg:right-[60px] lg:h-[91px] z-20 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          animation: ready && !animDone ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0ms both' : undefined,
          opacity: ready ? (scrolled ? 0 : 1) : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: scrolled ? 'none' : undefined,
        }}
      >
        <div className="content-stretch flex gap-0 justify-between w-full items-start relative lg:size-full">
          <button onClick={onLuciaClick} className="h-[37px] w-[70px] lg:h-[85px] lg:w-[159px] relative shrink-0 bg-transparent border-none p-0 cursor-pointer">
            <img alt="lucia" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame241Work}
              style={{ opacity: dark ? 0 : (active ? 0 : 1), transition: 'opacity 0.35s ease' }} />
            <img alt="lucia" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame241Hover}
              style={{ opacity: dark ? 1 : (active ? 1 : 0), transition: 'opacity 0.35s ease' }} />
          </button>
          <button
            onClick={onWorkClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[73px] lg:w-[87px] whitespace-pre-wrap self-start bg-transparent border-none cursor-pointer text-left p-0"
            style={{ color: dark ? 'white' : (active ? 'white' : '#302f2a'), transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">01.</p>
            <p className="leading-[normal]">Work</p>
          </button>
          <button
            onClick={onAboutClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap self-start bg-transparent border-none cursor-pointer text-left p-0"
            style={{ color: dark ? 'white' : (active ? 'white' : '#302f2a'), transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">About me</p>
          </button>
        </div>
      </div>
    </>
  )
}

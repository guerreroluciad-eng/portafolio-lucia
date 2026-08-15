import { useState } from 'react'
import { useMinWidth } from '@/hooks/useMinWidth'
import imgFrame241Work from '@/imports/DesktopHover-4/c06761a7de8a442cd6a45db796d69e4fa8bd0961.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'

// ─── Sticky Scroll Header ──────────────────────────────────────────────────
// Solid bar that slides in from the top once the page has scrolled past the
// initial (fading) header. Shared across project/case pages so future work
// pages inherit the same presentation and hover-hinge behavior.
//
// The hinge (dark hover overlay) only activates at desktop widths (>=1024px)
// — on mobile/tablet there's no real hover, so a tap would otherwise trigger
// and stick it open.

interface ScrollHeaderProps {
  scrolled: boolean
  onLuciaClick: () => void
  onWorkClick: () => void
  /** Omit when "About me" is the current page — renders as static bold text instead of a button. */
  onAboutClick?: () => void
  background?: string
  /** Dark-background pages (e.g. Maestro) need the logo/text to stay light instead of the default dark-on-light treatment. */
  dark?: boolean
}

export default function ScrollHeader({ scrolled, onLuciaClick, onWorkClick, onAboutClick, background = '#F8F8F8', dark = false }: ScrollHeaderProps) {
  const [hovered, setHovered] = useState(false)
  const isDesktop = useMinWidth(1024)
  const active = isDesktop && hovered

  return (
    <div
      className="fixed top-0 left-0 w-full z-30 h-[95px] overflow-hidden"
      style={{
        background,
        transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: scrolled ? '0 1px 0 0 rgba(48,47,42,0.1)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hinge overlay — darkens the whole bar on hover (desktop only) */}
      <div
        className="absolute inset-0 bg-[#2f2e29] pointer-events-none z-0"
        style={{
          transformOrigin: 'center center',
          transform: active ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div className="relative z-10 flex gap-0 justify-between w-full items-center h-full px-4 md:px-[30px] lg:px-[60px] py-[10px]">
        <button onClick={onLuciaClick} className="h-[37px] w-[70px] lg:h-[85px] lg:w-[160px] relative shrink-0 bg-transparent border-none p-0 cursor-pointer">
          <img alt="lucia" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgFrame241Work}
            style={{ opacity: dark ? 0 : (active ? 0 : 1), transition: 'opacity 0.35s ease' }} />
          <img alt="lucia" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgFrame241Hover}
            style={{ opacity: dark ? 1 : (active ? 1 : 0), transition: 'opacity 0.35s ease' }} />
        </button>
        <button
          onClick={onWorkClick}
          className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[73px] lg:w-[87px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0"
          style={{ color: dark ? 'white' : (active ? 'white' : '#302f2a'), transition: 'color 0.35s ease' }}
        >
          <p className="leading-[normal] mb-0">01.</p>
          <p className="leading-[normal]">Work</p>
        </button>
        {onAboutClick ? (
          <button
            onClick={onAboutClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0"
            style={{ color: dark ? 'white' : (active ? 'white' : '#302f2a'), transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">About me</p>
          </button>
        ) : (
          <div
            className="[word-break:break-word] font-['Abhaya_Libre',serif] font-bold leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap"
            style={{ color: dark ? 'white' : (active ? 'white' : '#302f2a'), transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">About me</p>
          </div>
        )}
      </div>
    </div>
  )
}

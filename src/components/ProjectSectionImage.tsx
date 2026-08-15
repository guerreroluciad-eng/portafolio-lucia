import { useMinWidth } from '@/hooks/useMinWidth'

// ─── Project Section Image ──────────────────────────────────────────────────
// Full-width image block used between text sections. Desktop keeps each
// image's own bespoke width/height/aspect-ratio (passed via `desktopStyle`,
// since they vary per image); mobile/tablet use one uniform size across all
// of them. The inner <img> keeps its own percentage-based crop unchanged —
// only this wrapper's box resizes, so the crop scales proportionally instead
// of stretching.

interface ProjectSectionImageProps {
  children: React.ReactNode
  desktopStyle: React.CSSProperties
}

export default function ProjectSectionImage({ children, desktopStyle }: ProjectSectionImageProps) {
  const isDesktop = useMinWidth(1024)

  return (
    <div
      className="relative overflow-hidden mb-[68px] w-[calc(100vw-32px)] aspect-[360/167] md:w-[590px] md:aspect-auto md:h-[279px] lg:w-auto lg:h-auto"
      style={isDesktop ? desktopStyle : undefined}
    >
      {children}
    </div>
  )
}

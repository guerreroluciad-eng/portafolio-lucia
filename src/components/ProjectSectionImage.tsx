import { useMinWidth } from '@/hooks/useMinWidth'

// ─── Project Section Image ──────────────────────────────────────────────────
// Full-width image block used between text sections (hero + Image-01…05 on
// every project page). Desktop keeps each image's own bespoke
// width/aspect-ratio (passed via `desktopStyle`, since they vary per image);
// tablet uses one uniform size across all of them, unchanged. Mobile bleeds
// edge-to-edge (no side inset) instead of the padded calc(100vw-32px) box it
// used to have, reusing the same per-image aspect ratio from `desktopStyle`
// so the height still scales proportionally to the now-wider mobile width
// instead of being cropped to a generic ratio.

interface ProjectSectionImageProps {
  children: React.ReactNode
  desktopStyle: React.CSSProperties
}

export default function ProjectSectionImage({ children, desktopStyle }: ProjectSectionImageProps) {
  const isDesktop = useMinWidth(1024)
  const isTabletUp = useMinWidth(768)

  const mobileStyle: React.CSSProperties = { ...desktopStyle, width: '100vw' }

  return (
    <div
      className="relative overflow-hidden mb-[68px] md:w-[590px] md:aspect-auto md:h-[279px] lg:w-auto lg:h-auto"
      style={isDesktop ? desktopStyle : isTabletUp ? undefined : mobileStyle}
    >
      {children}
    </div>
  )
}

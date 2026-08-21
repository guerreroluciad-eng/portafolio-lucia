import { useMinWidth } from '@/hooks/useMinWidth'

// ─── Project Meta ───────────────────────────────────────────────────────────
// Subtitle headline + role/collaboration/focus meta line. Shared across
// project pages.

interface ProjectMetaProps {
  subtitle: string
  metaLines: { label: string; value: string }[]
  textColor?: string
  /** Overrides the subtitle's default responsive size (32/44/44) with one flat size across every breakpoint (or every breakpoint except mobile, if a mobile override below is also given). */
  subtitleSize?: number
  /** Mobile-only (<768px) override, taking priority over `subtitleSize` below that breakpoint. */
  subtitleMobileSize?: number
  subtitleMobileLineHeight?: number
}

export default function ProjectMeta({ subtitle, metaLines, textColor = '#302f2a', subtitleSize, subtitleMobileSize, subtitleMobileLineHeight }: ProjectMetaProps) {
  const isTabletUp = useMinWidth(768)
  const useMobileOverride = !isTabletUp && subtitleMobileSize !== undefined
  const effectiveSize = useMobileOverride ? subtitleMobileSize : subtitleSize

  return (
    <div className="flex flex-col items-center gap-[24px] mt-[80px] md:-mt-[15px] lg:mt-[6px] mb-[70px] md:mb-[68px] lg:mb-[68px] w-full max-w-[934px] px-[25px] lg:px-0">
      <p
        className={effectiveSize ? "font-['Abhaya_Libre',serif] text-center" : "font-['Abhaya_Libre',serif] text-[32px] md:text-[44px] lg:text-[44px] leading-normal text-center"}
        style={{
          color: textColor,
          fontSize: effectiveSize ? `${effectiveSize}px` : undefined,
          lineHeight: useMobileOverride && subtitleMobileLineHeight ? `${subtitleMobileLineHeight}px` : (effectiveSize ? 'normal' : undefined),
        }}
      >
        {subtitle}
      </p>
      <p className="font-['Abhaya_Libre',serif] text-[24px] leading-normal text-center" style={{ color: textColor }}>
        {metaLines.map((m, i) => (
          <span key={m.label}>
            <strong>{m.label}:</strong>{' '}{m.value}
            {i < metaLines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}

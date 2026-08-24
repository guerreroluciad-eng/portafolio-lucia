import { useMinWidth } from '@/hooks/useMinWidth'

// ─── Project Meta ───────────────────────────────────────────────────────────
// Subtitle headline + role/collaboration/focus meta line. Shared across
// project pages.

// Mobile-only: keep these two-word design terms from splitting across lines.
const MOBILE_NOWRAP_TERMS = ['Product Designer', 'UI Designer', 'UI Design', 'UX Research', 'UX Design', 'Interaction Design', 'Design Systems', 'AI Claude', 'Claude Code', 'AI Search']

function keepTermsTogether(text: string) {
  return MOBILE_NOWRAP_TERMS.reduce((result, term) => result.split(term).join(term.replace(' ', ' ')), text)
}

interface ProjectMetaProps {
  subtitle: string
  metaLines: { label: string; value: string }[]
  textColor?: string
  /** Overrides the subtitle's default responsive size (32/44/44) with one flat size for tablet/desktop. On mobile, defaults to 36px/38px line-height (see below) unless overridden. */
  subtitleSize?: number
  /** Mobile-only (<768px) override. Defaults to 36px when `subtitleSize` is set. */
  subtitleMobileSize?: number
  /** Defaults to 38px when `subtitleSize` is set. */
  subtitleMobileLineHeight?: number
}

export default function ProjectMeta({ subtitle, metaLines, textColor = '#302f2a', subtitleSize, subtitleMobileSize = 36, subtitleMobileLineHeight = 38 }: ProjectMetaProps) {
  const isTabletUp = useMinWidth(768)
  const useMobileOverride = !isTabletUp && subtitleSize !== undefined
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
            <strong>{m.label}:</strong>{' '}{isTabletUp ? m.value : keepTermsTogether(m.value)}
            {i < metaLines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}

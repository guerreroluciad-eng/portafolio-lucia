// ─── Project Meta ───────────────────────────────────────────────────────────
// Subtitle headline + role/collaboration/focus meta line. Shared across
// project pages.

interface ProjectMetaProps {
  subtitle: string
  metaLines: { label: string; value: string }[]
  textColor?: string
}

export default function ProjectMeta({ subtitle, metaLines, textColor = '#302f2a' }: ProjectMetaProps) {
  return (
    <div className="flex flex-col items-center gap-[24px] mt-[80px] md:-mt-[15px] lg:mt-[6px] mb-[70px] md:mb-[68px] lg:mb-[68px] w-full max-w-[934px] px-[25px] lg:px-0">
      <p className="font-['Abhaya_Libre',serif] text-[32px] md:text-[44px] lg:text-[44px] leading-normal text-center" style={{ color: textColor }}>{subtitle}</p>
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

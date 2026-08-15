// ─── Project Text Block ─────────────────────────────────────────────────────
// Body-copy wrapper (Overview, Challenge, 01/02/03, Design System, Results…)
// and its section heading. Shared across project pages — a block can contain
// more than one ProjectTextHeading when two sections run together.

export default function ProjectTextBlock({ children, textColor = '#302f2a' }: { children: React.ReactNode; textColor?: string }) {
  return (
    <div
      className="font-['Abhaya_Libre',serif] text-[16px] md:text-[24px] lg:text-[24px] leading-normal w-full max-w-[934px] px-[25px] lg:px-0 mb-[68px]"
      style={{ color: textColor }}
    >
      {children}
    </div>
  )
}

export function ProjectTextHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-[32px] md:text-[44px] lg:text-[44px] mb-4">{children}</p>
}

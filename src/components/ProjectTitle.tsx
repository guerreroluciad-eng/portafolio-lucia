// ─── Project Title ──────────────────────────────────────────────────────────
// Company label + giant hover-color case title. Shared across project pages.

interface ProjectTitleProps {
  company: string
  title: string
  companyColor?: string
  titleColor?: string
  titleHoverColor?: string
}

export default function ProjectTitle({ company, title, companyColor = '#302f2a', titleColor = '#e1dad0', titleHoverColor = '#2f2e29' }: ProjectTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[58px] lg:mt-0 mb-[68px]">
      <p className="font-['Abhaya_Libre',serif] font-medium text-[40px] leading-[30px] text-center mb-6" style={{ color: companyColor }}>{company}</p>
      <p
        className="font-['Abhaya_Libre',serif] leading-none cursor-default text-[90px] md:text-[150px] lg:text-[200px] px-[27px] md:px-[89px] lg:px-0 text-center"
        style={{ color: titleColor, transition: 'color 0.25s ease' }}
        onMouseEnter={e => (e.currentTarget.style.color = titleHoverColor)}
        onMouseLeave={e => (e.currentTarget.style.color = titleColor)}
      >
        {title}
      </p>
    </div>
  )
}

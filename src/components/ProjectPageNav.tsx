import { useLanguage } from '@/i18n/LanguageContext'

// ─── Project Page Nav ───────────────────────────────────────────────────────
// "Back page" / "Next page" preview cards shown at the bottom of every
// project case page — each card is a title + pill button (same style as the
// ProjectContact "Contact me" button) beside a thumbnail of that project's
// cover. Shared across all project pages so the cycle (Google → El Tiempo →
// Youtube → Android → App Tiempo → Google) stays consistent everywhere.

export interface ProjectNavCardData {
  name: React.ReactNode
  thumbnail: string
  onClick: () => void
}

interface ProjectPageNavProps {
  prev: ProjectNavCardData
  next: ProjectNavCardData
  /** Dark-background pages (Maestro, Futbolred): light text and outline instead of dark. */
  dark?: boolean
}

function ProjectNavCard({ name, thumbnail, onClick, label, dark = false }: ProjectNavCardData & { label: string; dark?: boolean }) {
  const ink = dark ? '#ffffff' : '#302f2a'
  const hoverText = dark ? '#302f2a' : 'white'
  return (
    <div className="flex items-start gap-0 md:gap-[24px]">
      <div className="flex flex-col justify-between flex-1 min-w-0 md:flex-none md:w-[299px]" style={{ height: '175px' }}>
        <p className="font-['Abhaya_Libre',serif] text-left text-[24px] md:text-[32px] leading-[28px] md:leading-[38px]" style={{ color: dark ? '#ffffff' : '#2f2e29' }}>{name}</p>
        <button
          onClick={onClick}
          className="h-[50px] rounded-[36px] px-[27px] font-['Abhaya_Libre',serif] text-[24px] bg-transparent cursor-pointer inline-flex items-center justify-center no-underline self-start"
          style={{ color: ink, borderWidth: '1px', borderStyle: 'solid', borderColor: ink, transition: 'background 0.2s, color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = ink; e.currentTarget.style.color = hoverText }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ink }}
        >
          {label}
        </button>
      </div>
      <div className="shrink-0 overflow-hidden" style={{ width: '173px', height: '175px' }}>
        <img alt="" src={thumbnail} className="size-full object-cover" />
      </div>
    </div>
  )
}

export default function ProjectPageNav({ prev, next, dark = false }: ProjectPageNavProps) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-[40px] md:flex-row md:justify-between md:items-start w-full max-w-[1098px] px-[16px] md:px-[25px] lg:px-0">
      <ProjectNavCard {...prev} label={t.common.projectNav.backPage} dark={dark} />
      <ProjectNavCard {...next} label={t.common.projectNav.nextPage} dark={dark} />
    </div>
  )
}

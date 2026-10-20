import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import { useLanguage } from '@/i18n/LanguageContext'
import imgHero1 from '@/imports/Futbolred/Hero-1.png'
import imgHero2 from '@/imports/Futbolred/Hero-2.png'
import imgHero3 from '@/imports/Futbolred/Hero-3.png'
import imgSection01 from '@/imports/Futbolred/Image-1.png'
import imgSection02 from '@/imports/Futbolred/Image-2.png'

interface FutbolredCaseProps {
  futbolredPageReady: boolean
  futbolredScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function FutbolredCase({
  futbolredPageReady,
  futbolredScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: FutbolredCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.futbolred

  return (
    <div
      ref={scrollRef}
      className="bg-[#302F2A] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={futbolredPageReady}
        scrolled={futbolredScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
        dark
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={futbolredScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} background="#302F2A" dark />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: futbolredPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: futbolredPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle
          company="El Tiempo-Company"
          title="Futbolred"
          companyColor="#ffffff"
          titleColor="#E1DAD0"
          titleHoverColor="#E1DAD0"
        />

        <ProjectMeta
          subtitle={c.subtitle}
          textColor="#ffffff"
          metaLines={[
            { label: t.common.metaLabels.role, value: c.meta.role },
            { label: t.common.metaLabels.collaboration, value: c.meta.collaboration },
            { label: t.common.metaLabels.focus, value: c.meta.focus },
          ]}
        />

        <ProjectImageRow>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgHero1} />
          </ProjectImageBox>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgHero2} />
          </ProjectImageBox>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgHero3} />
          </ProjectImageBox>
        </ProjectImageRow>

        <ProjectTextBlock textColor="#ffffff">
          <ProjectTextHeading>{c.overviewHeading}</ProjectTextHeading>
          <p className="mb-4">{c.overviewP1}</p>
          <p>{c.overviewP2}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/754' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock textColor="#ffffff">
          <ProjectTextHeading>{c.beyondHeading}</ProjectTextHeading>
          <p className="mb-4">{c.beyondP1}</p>
          <p className="mb-4">{c.beyondP2}</p>
          <p className="mb-4">{c.beyondP3}</p>
          <p>{c.beyondP4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1596' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectContact
          textColor="#ffffff"
          buttonColor="#ffffff"
          buttonHoverBg="#ffffff"
          buttonHoverText="#302f2a"
        />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} dark />
        </div>
      </div>
    </div>
  )
}

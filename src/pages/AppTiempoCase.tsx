import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import { useLanguage } from '@/i18n/LanguageContext'
import imgHero1 from '@/imports/AppTiempo/Hero-1.png'
import imgUxStrategy from '@/imports/AppTiempo/Image-ux-strategy.png'
import imgSection01 from '@/imports/AppTiempo/Image-1.png'
import imgSection02 from '@/imports/AppTiempo/Image-2.png'
import imgSection03 from '@/imports/AppTiempo/Image-3.png'

interface AppTiempoCaseProps {
  appTiempoPageReady: boolean
  appTiempoScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function AppTiempoCase({
  appTiempoPageReady,
  appTiempoScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: AppTiempoCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.apptiempo

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={appTiempoPageReady}
        scrolled={appTiempoScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={appTiempoScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: appTiempoPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: appTiempoPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="El Tiempo-Company" title="App Tiempo" />

        <ProjectMeta
          subtitle={c.subtitle}
          subtitleSize={48}
          metaLines={[
            { label: t.common.metaLabels.role, value: c.meta.role },
            { label: t.common.metaLabels.collaboration, value: c.meta.collaboration },
            { label: t.common.metaLabels.focus, value: c.meta.focus },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/804' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.impactHeading}</ProjectTextHeading>
          <p className="mb-4">{c.impactP1}</p>
          <p className="mb-4">{c.impactP2}</p>
          <p className="mb-4">{c.impactP3}</p>
          <p className="mb-8">{c.impactP4}</p>

          <ProjectTextHeading>{c.overviewHeading}</ProjectTextHeading>
          <p className="mb-4">{c.overviewP1}</p>
          <p className="mb-4">{c.overviewP2}</p>
          <p className="mb-8">{c.overviewP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/804' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgUxStrategy} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.strategyHeading}</ProjectTextHeading>
          <p className="mb-4">{c.strategyP1}</p>
          <p className="mb-4">{c.strategyP2}</p>
          <p className="mb-8">{c.strategyP3}</p>

          <ProjectTextHeading>{c.phase1Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase1P1}</p>
          <p className="mb-4">{c.phase1P2}</p>
          <p className="mb-4">{c.phase1P3}</p>
          <p>{c.phase1P4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/968' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase2Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase2P1}</p>
          <p className="mb-4">{c.phase2P2}</p>
          <p className="mb-4">{c.phase2P3}</p>
          <p>{c.phase2P4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/968' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase3Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase3P1}</p>
          <p className="mb-4">{c.phase3P2}</p>
          <p className="mb-4">{c.phase3P3}</p>
          <p>{c.phase3P4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/968' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectContact />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

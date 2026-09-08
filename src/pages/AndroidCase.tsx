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
import gifHero1 from '@/imports/DesktopAndroid/Hero1.gif'
import imgSection01 from '@/imports/DesktopAndroid/Image-1-new.jpg'
import gifSection02 from '@/imports/DesktopAndroid/Image-2-new.gif'
import imgSection03 from '@/imports/DesktopAndroid/Image-3-new.jpg'
import imgSection04 from '@/imports/DesktopAndroid/Image-4-new.jpg'

interface AndroidCaseProps {
  androidPageReady: boolean
  androidScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function AndroidCase({
  androidPageReady,
  androidScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: AndroidCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.android

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={androidPageReady}
        scrolled={androidScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={androidScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: androidPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: androidPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="Huge-Company" title="Android" />

        <ProjectMeta
          subtitle={c.subtitle}
          subtitleSize={48}
          metaLines={[
            { label: t.common.metaLabels.role, value: c.meta.role },
            { label: t.common.metaLabels.collaboration, value: c.meta.collaboration },
            { label: t.common.metaLabels.focus, value: c.meta.focus },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/1740' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifHero1} />
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
          <p>{c.overviewP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/1548' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase1Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase1P1}</p>
          <p className="mb-8">{c.phase1P2}</p>
          <ProjectTextHeading>{c.phase2Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase2P1}</p>
          <p className="mb-4">{c.phase2P2}</p>
          <p>{c.phase2P3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/2739' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase3Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase3P1}</p>
          <p className="mb-4">{c.phase3P2}</p>
          <p className="mb-4">{c.phase3P3}</p>
          <p>{c.phase3P4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/581' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.designSystemHeading}</ProjectTextHeading>
          <p className="mb-4">{c.designSystemP1}</p>
          <p className="mb-4">{c.designSystemP2}</p>
          <p className="mb-4">{c.designSystemP3}</p>
          <p>{c.designSystemP4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/525' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection04} />
        </ProjectSectionImage>

        <ProjectContact />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

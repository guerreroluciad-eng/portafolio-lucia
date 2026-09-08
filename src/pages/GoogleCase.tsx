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
import imgHero01 from '@/imports/Google/Hero-01.jpg'
import imgSection01 from '@/imports/Google/Image-01.png'
import imgSection02 from '@/imports/Google/Image-02.png'
import gifSection03 from '@/imports/Google/Image-03.gif'
import gifSection04 from '@/imports/Google/Image-04.gif'

interface GoogleCaseProps {
  googlePageReady: boolean
  googleScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function GoogleCase({
  googlePageReady,
  googleScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: GoogleCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.google

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={googlePageReady}
        scrolled={googleScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={googleScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: googlePageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: googlePageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="Huge-Company" title="Google" />

        <ProjectMeta
          subtitle={c.subtitle}
          subtitleSize={48}
          metaLines={[
            { label: t.common.metaLabels.role, value: c.meta.role },
            { label: t.common.metaLabels.collaboration, value: c.meta.collaboration },
            { label: t.common.metaLabels.focus, value: c.meta.focus },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/820' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.impactHeading}</ProjectTextHeading>
          <p className="mb-4">{c.impactP1}</p>
          <p className="mb-4">{c.impactP2}</p>
          <p className="mb-4">{c.impactP3}</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {c.impactList.map(item => <li key={item}>{item}</li>)}
          </ul>
          <p className="mb-8">{c.impactP4}</p>
          <ProjectTextHeading>{c.overviewHeading}</ProjectTextHeading>
          <p className="mb-4">{c.overviewP1}</p>
          <p className="mb-4">{c.overviewP2}</p>
          <p>{c.overviewP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1228' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.researchHeading}</ProjectTextHeading>
          <p className="mb-4">{c.researchP1}</p>
          <p className="mb-4">{c.researchP2}</p>
          <p>{c.researchP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1064' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase1Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase1P1}</p>
          <p className="mb-4">{c.phase1P2}</p>
          <p>{c.phase1P3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2784/1288' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase2Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase2P1}</p>
          <p>{c.phase2P2}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2784/1828' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.phase3Heading}</ProjectTextHeading>
          <p className="mb-4">{c.phase3P1}</p>
          <p className="mb-4">{c.phase3P2}</p>
          <p className="mb-4">{c.phase3P3}</p>
          <p>{c.phase3P4}</p>
        </ProjectTextBlock>

        <ProjectContact />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

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
import imgHero1 from '@/imports/Youtube/Hero-1.png'
import imgSection01 from '@/imports/Youtube/Image-01.png'
import gifSection02 from '@/imports/Youtube/Image-02.gif'
import imgSection03 from '@/imports/Youtube/Image-03.png'
import gifSection04 from '@/imports/Youtube/Image-04.gif'
import imgSection05 from '@/imports/Youtube/Image-05.png'

interface YoutubeCaseProps {
  youtubePageReady: boolean
  youtubeScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function YoutubeCase({
  youtubePageReady,
  youtubeScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: YoutubeCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.youtube

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={youtubePageReady}
        scrolled={youtubeScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={youtubeScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: youtubePageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: youtubePageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="Huge-Company" title="Youtube" />

        <ProjectMeta
          subtitle={c.subtitle}
          subtitleSize={48}
          metaLines={[
            { label: t.common.metaLabels.role, value: c.meta.role },
            { label: t.common.metaLabels.collaboration, value: c.meta.collaboration },
            { label: t.common.metaLabels.focus, value: c.meta.focus },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/776' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.impactHeading}</ProjectTextHeading>
          <p className="mb-4">{c.impactP1}</p>
          <p className="mb-8">{c.impactP2}</p>
          <ProjectTextHeading>{c.overviewHeading}</ProjectTextHeading>
          <p className="mb-4">{c.overviewP1}</p>
          <p>{c.overviewP2}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1040' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.strategyHeading}</ProjectTextHeading>
          <p className="mb-4">{c.strategyP1}</p>
          <p className="mb-4">{c.strategyP2}</p>
          <p>{c.strategyP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '3000/1303' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.homeHeading}</ProjectTextHeading>
          <p className="mb-4">{c.homeP1}</p>
          <p className="mb-4">{c.homeP2}</p>
          <p className="mb-8"><strong>{c.homeP3Bold}</strong></p>
          <ProjectTextHeading>{c.quickSearchHeading}</ProjectTextHeading>
          <p className="mb-4"><strong>{c.quickSearchP1Bold}</strong></p>
          <p className="mb-4">{c.quickSearchP2}</p>
          <p className="mb-4">{c.quickSearchP3}</p>
          <p className="mb-2">{c.quickSearchP4}</p>
          <p className="mb-4"><strong>{c.quickSearchBold}</strong></p>
          <p>{c.quickSearchP5}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/626' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.resultsHeading}</ProjectTextHeading>
          <p className="mb-4"><strong>{c.resultsP1Bold}</strong></p>
          <p className="mb-4">{c.resultsP2}</p>
          <p className="mb-4">{c.resultsP3}</p>
          <p className="mb-8">{c.resultsP4}</p>

          <p className="mb-2"><strong>{c.resultsSummaryBold}</strong></p>
          <p className="mb-6">{c.resultsSummaryText}</p>

          <p className="mb-2"><strong>{c.resultsQuickBold}</strong></p>
          <p className="mb-6">{c.resultsQuickText}</p>

          <p className="mb-2"><strong>{c.resultsSuggestedBold}</strong></p>
          <p className="mb-8">{c.resultsSuggestedText}</p>

          <p className="mb-2">{c.resultsP5}</p>
          <p className="mb-4"><strong>{c.resultsBold}</strong></p>
          <p>{c.resultsP6}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2080/1105' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.multiHeading}</ProjectTextHeading>
          <p className="mb-4">{c.multiP1}</p>
          <p className="mb-4">{c.multiP2}</p>
          <p className="mb-4">{c.multiP3}</p>
          <p>{c.multiP4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/950' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection05} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.resultsFinalHeading}</ProjectTextHeading>
          <p className="mb-4">{c.resultsFinalP1}</p>
          <p className="mb-2">{c.resultsFinalP2}</p>
          <p className="mb-4"><strong>{c.resultsFinalBold}</strong></p>
          <p className="mb-4">{c.resultsFinalP3}</p>
          <p>{c.resultsFinalP4}</p>
        </ProjectTextBlock>

        <ProjectContact />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

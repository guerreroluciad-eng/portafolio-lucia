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
import imgHero1 from '@/imports/Subscription/Hero-1.png'
import imgSection01 from '@/imports/Subscription/Image-1.png'
import imgSection02 from '@/imports/Subscription/Image-2.png'
import imgSection03 from '@/imports/Subscription/Image-3.png'
import imgSection04 from '@/imports/Subscription/Image-4.png'
import imgSection05 from '@/imports/Subscription/Image-5.png'
import imgSection06 from '@/imports/Subscription/Image-6.png'

interface SubscriptionCaseProps {
  subscriptionPageReady: boolean
  subscriptionScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function SubscriptionCase({
  subscriptionPageReady,
  subscriptionScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: SubscriptionCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.subscription

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={subscriptionPageReady}
        scrolled={subscriptionScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={subscriptionScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: subscriptionPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: subscriptionPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="El Tiempo-Company" title="Subscription" />

        <ProjectMeta
          subtitle={c.subtitle}
          subtitleSize={48}
          metaLines={[
            { label: t.common.metaLabels.role, value: c.meta.role },
            { label: t.common.metaLabels.collaboration, value: c.meta.collaboration },
            { label: t.common.metaLabels.focus, value: c.meta.focus },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/388' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.impactHeading}</ProjectTextHeading>
          <p className="mb-4">{c.impactP1}</p>
          <p className="mb-8">{c.impactP2}</p>
          <ProjectTextHeading>{c.overviewHeading}</ProjectTextHeading>
          <p>{c.overviewP1}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/888' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.strategyHeading}</ProjectTextHeading>
          <p className="mb-4">{c.strategyP1}</p>
          <p className="mb-4">{c.strategyP2}</p>
          <p className="mb-4">{c.strategyP3}</p>
          <p>{c.strategyP4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/888' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.flowsHeading}</ProjectTextHeading>
          <p className="mb-4">{c.flowsP1}</p>
          <p className="mb-4">{c.flowsP2}</p>
          <p>{c.flowsP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/788' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.onboardingHeading}</ProjectTextHeading>
          <p className="mb-4">{c.onboardingP1}</p>
          <p className="mb-4">{c.onboardingP2}</p>
          <p>{c.onboardingP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1004' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.dashboardHeading}</ProjectTextHeading>
          <p className="mb-4">{c.dashboardP1}</p>
          <p className="mb-4">{c.dashboardP2}</p>
          <p>{c.dashboardP3}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/652' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection05} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>{c.resultsHeading}</ProjectTextHeading>
          <p className="mb-4">{c.resultsP1}</p>
          <p>{c.resultsP2}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/950' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection06} />
        </ProjectSectionImage>

        <ProjectContact />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import { useLanguage } from '@/i18n/LanguageContext'
import imgHero1 from '@/imports/Maestro/Hero-1.png'
import imgHero2 from '@/imports/Maestro/Hero-2.png'
import imgHero3 from '@/imports/Maestro/Hero-3.png'
import imgSection01 from '@/imports/Maestro/Image-1.png'
import imgSection02 from '@/imports/Maestro/Image-2.png'
import gifSection03 from '@/imports/Maestro/Image-3.gif'

interface MaestroCaseProps {
  maestroPageReady: boolean
  maestroScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
}

export default function MaestroCase({
  maestroPageReady,
  maestroScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
}: MaestroCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)
  const { t } = useLanguage()
  const c = t.cases.maestro

  return (
    <div
      ref={scrollRef}
      className="bg-[#302F2A] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={maestroPageReady}
        scrolled={maestroScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
        dark
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={maestroScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} background="#302F2A" dark />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: maestroPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: maestroPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle
          company="Huge-Company"
          title="Maestro"
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
          <p className="mb-4">{c.overviewP2}</p>
          <p className="mb-4 italic">{c.overviewQuote}</p>
          <p className="mb-8">{c.overviewP3}</p>

          <ProjectTextHeading>{c.challengeHeading}</ProjectTextHeading>
          <p className="mb-4"><strong>{c.challengeP1Bold}</strong></p>
          <p className="mb-4">{c.challengeP2}</p>
          <p className="mb-4">{c.challengeP3}</p>
          <p className="mb-4">{c.challengeP4}</p>
          <p className="mb-4"><strong>{c.challengeP5Bold}</strong></p>
          <p className="mb-4">{c.challengeP6}</p>
          <p className="mb-4">{c.challengeP7}</p>
          <p className="mb-8">{c.challengeP8}</p>

          <ProjectTextHeading>{c.beyondHeading}</ProjectTextHeading>
          <p className="mb-4">{c.beyondP1}</p>
          <p className="mb-4">{c.beyondP2}</p>
          <p className="mb-4">{c.beyondP3}</p>
          <p>{c.beyondP4}</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/754' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1848' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2146/1138' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection03} />
        </ProjectSectionImage>

        <ProjectContact
          textColor="#ffffff"
          buttonColor="#ffffff"
          buttonHoverBg="#ffffff"
          buttonHoverText="#302f2a"
        />
      </div>
    </div>
  )
}

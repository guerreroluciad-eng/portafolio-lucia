import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
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
  onLuciaClick: () => void
}

export default function FutbolredCase({
  futbolredPageReady,
  futbolredScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
}: FutbolredCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

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
        onLuciaClick={onLuciaClick}
        dark
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={futbolredScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} background="#302F2A" dark />

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
          subtitle="Refreshing a Legacy Football Brand"
          textColor="#ffffff"
          metaLines={[
            { label: 'My role', value: 'Art Director, Visual Designer' },
            { label: 'Collaboration', value: 'Creative Design, Branding' },
            { label: 'Focus', value: 'Brand Design & System Design' },
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
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">Futbolred is a football news brand that has been part of Colombian sports culture for years. The challenge was to evolve its visual identity to feel more contemporary, dynamic, and relevant to younger audiences, while preserving the recognition and credibility built over time.</p>
          <p>The redesign refreshed the brand's visual language, creating a more flexible identity that could adapt to today's digital-first football culture and connect with a new generation of fans.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/754' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock textColor="#ffffff">
          <ProjectTextHeading>Beyond the Identity:</ProjectTextHeading>
          <p className="mb-4">At the heart of the new identity is a simple idea: Futbolred is a network that connects people through football. Just as football brings fans, players, teams, and communities together, Futbolred connects them through the stories, conversations, and experiences surrounding the sport.</p>
          <p className="mb-4">This concept became the foundation for a visual language designed around connection, movement, and interaction. The refreshed identity goes beyond the logo, introducing a flexible system of typography, graphic elements, patterns, imagery, and color.</p>
          <p className="mb-4">We introduced a bold combination of deep teal, vibrant green, and monochromatic imagery, creating a more energetic and contemporary presence. The F and R elements, along with football-inspired patterns, numbers, scores, and modular compositions, can be combined and adapted across different touchpoints.</p>
          <p>The result is a brand that feels more dynamic, digital, and connected to a new generation of football fans, while maintaining the recognition and heritage of Futbolred.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1596' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectContact
          message="We can start the conversation about what you want for your brand or leave me a message."
          textColor="#ffffff"
          buttonColor="#ffffff"
          buttonHoverBg="#ffffff"
          buttonHoverText="#302f2a"
        />
      </div>
    </div>
  )
}

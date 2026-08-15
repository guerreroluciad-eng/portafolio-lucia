import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/ElTiempo/Hero-1.png'
import imgHero2 from '@/imports/ElTiempo/Hero-2.png'
import imgHero3 from '@/imports/ElTiempo/Hero-3.png'
import gifSection01 from '@/imports/ElTiempo/Image-01.gif'
import imgSection02 from '@/imports/ElTiempo/Image-02.png'
import imgSection03 from '@/imports/ElTiempo/Image-03.png'
import imgSection04 from '@/imports/ElTiempo/Image-04.png'
import imgSection05 from '@/imports/ElTiempo/Image-05.png'

interface ElTiempoCaseProps {
  elTiempoPageReady: boolean
  elTiempoScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
}

export default function ElTiempoCase({
  elTiempoPageReady,
  elTiempoScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
}: ElTiempoCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={elTiempoPageReady}
        scrolled={elTiempoScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={elTiempoScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: elTiempoPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: elTiempoPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="El Tiempo-Company" title="El Tiempo" />

        <ProjectMeta
          subtitle="Redesigning the El Tiempo Digital Experience"
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer / UX Research' },
            { label: 'Collaboration', value: 'UX Design & Development' },
            { label: 'Focus', value: 'Interaction Design, UI Design, Design Systems, Strategy' },
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

        <ProjectTextBlock>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on redesigning the Home and Article experiences for El Tiempo, one of Colombia's leading newspapers.</p>
          <p className="mb-4">The goal was to create a clearer, more engaging, and easier-to-navigate digital experience while preserving the editorial character of the brand.</p>
          <p className="mb-4">The redesign was informed by user research and usability testing, combining insights from surveys, one-to-one sessions, click testing, card sorting, tree testing, and usability testing to guide decisions across the experience.</p>
          <p className="mb-8">The project explored both the visual interface and the underlying information architecture, creating a stronger foundation for how readers discover, navigate, and consume news across devices.</p>
          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4">The challenge was to improve how readers discover, navigate, and consume content across the Home and Article experiences.</p>
          <p className="mb-4">Through user research and usability testing, we identified opportunities to simplify the navigation, improve the information architecture, and create a clearer experience across devices.</p>
          <p>The goal was to balance user needs, editorial priorities, and business objectives while preserving the identity of El Tiempo.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2184/1346' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Research & Discovery</ProjectTextHeading>
          <p className="mb-4">The first phase focused on understanding how users experienced the existing El Tiempo platform and identifying opportunities to improve the way they discover, navigate, and consume content.</p>
          <p className="mb-4">I collaborated closely throughout an extensive research process that included site surveys, one-to-one sessions, click testing, card sorting, tree testing, and usability testing across desktop and mobile experiences.</p>
          <p className="mb-4">The research helped us identify three key areas that would guide the redesign:</p>
          <p className="mb-2"><strong>Adaptation</strong> — creating a responsive experience that could adapt to different devices, content types, and user needs.</p>
          <p className="mb-2"><strong>Fluency</strong> — making content discovery and navigation feel faster, clearer, and more intuitive.</p>
          <p className="mb-4"><strong>Intellect</strong> — exploring opportunities for personalization, meaningful interactions, and content recommendations.</p>
          <p>These principles became the foundation for the next stages of the redesign, helping translate user insights into a clearer and more purposeful digital experience.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1118' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — Evolving the Visual Language</ProjectTextHeading>
          <p className="mb-4">The second phase focused on translating the research insights into a new visual and editorial direction for the experience.</p>
          <p className="mb-4">We reorganized the content to create clearer hierarchy and improve readability, while introducing the print edition typeface for headlines to establish a stronger connection with El Tiempo's editorial identity.</p>
          <p className="mb-4">The visual language was also refreshed through a new color palette and updated UI components, including buttons, links, and other key interface elements.</p>
          <p>Together, these changes created a more distinctive and recognizable digital experience while strengthening the connection between the newspaper's print heritage and its digital platform.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1118' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>03 — Designing a Fluid Responsive System</ProjectTextHeading>
          <p className="mb-4">Once the visual identity was established, the next challenge was creating a responsive system that could adapt naturally across different screen sizes without compromising the content hierarchy.</p>
          <p className="mb-4">We developed a flexible grid that progressively transitioned from five columns on larger screens to two and eventually one column on smaller devices. The fifth column was intentionally designed to accommodate advertising, allowing the content area to adapt without disrupting the primary reading experience.</p>
          <p className="mb-4">As the viewport decreased, the grid progressively collapsed while maintaining clear hierarchy, spacing, and content relationships.</p>
          <p>This approach created a more fluid and adaptable interface, allowing the experience to scale naturally across devices while balancing editorial content, usability, and advertising needs.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1118' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection04} />
        </ProjectSectionImage>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/514' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection05} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Results</ProjectTextHeading>
          <p className="mb-4">The redesign resulted in a more flexible content system designed to adapt to different editorial needs and user contexts.</p>
          <p className="mb-4">We developed 10 different content scenarios for each news item and 20 editorial boards, allowing the experience to surface and organize content in different ways while maintaining a consistent visual language.</p>
          <p className="mb-4">The redesigned experience was also validated through user perception research, with users highlighting the platform's modern visual approach, continuous content flow, and clear organization of topics.</p>
          <p>The result was a more adaptable and engaging news experience that balanced editorial flexibility, user needs, and a cohesive digital identity.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />
      </div>
    </div>
  )
}

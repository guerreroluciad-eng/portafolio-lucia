import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/ElTiempo/Hero-1.png'
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
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function ElTiempoCase({
  elTiempoPageReady,
  elTiempoScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
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
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={elTiempoScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

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
          subtitleSize={48}
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer / UX Research' },
            { label: 'Collaboration', value: 'UX Design & Development' },
            { label: 'Focus', value: 'Interaction Design, UI Design, Design Systems, Strategy' },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/944' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Impact & Content Strategy:</ProjectTextHeading>
          <p className="mb-4">The goal of the redesign was to increase page views and improve content visibility, particularly for stories that were being overlooked. We increased the number of stories visible above the fold on the homepage and introduced new content boards within articles, including related stories and "Especiales"—in-depth, evergreen content that previously received less visibility.</p>
          <p className="mb-4">We also created collapsible boards for major news events, such as the U.S. presidential election, allowing timely content to gain prominence without overwhelming the page. Finally, we refined headline hierarchy and presentation to make key information more immediately scannable, helping users understand the story at a glance and encouraging deeper engagement.</p>
          <p className="mb-8 text-[32px]">These changes contributed to a 15% increase in page views, reaching approximately 62.10 million monthly page views, alongside 10.25 million unique users and 24.9 million visits.</p>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on redesigning the Home and Article experiences for El Tiempo, with the goal of increasing content discovery, engagement, and page views.</p>
          <p className="mb-4">The challenge was to make more content visible and relevant to readers while maintaining a clear editorial hierarchy across the experience. Through a combination of user insights, content strategy, and information architecture, we rethought how stories were prioritized, presented, and connected throughout the platform.</p>
          <p>The result was a more engaging experience that gave greater visibility to underexposed content while helping users discover and consume more stories.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2184/1346' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Research & Discovery</ProjectTextHeading>
          <p className="mb-4">The first phase focused on understanding how users experienced the existing El Tiempo platform and identifying opportunities to improve the way they discover, navigate, and consume content.</p>
          <p className="mb-4">I collaborated closely throughout an extensive research process that included site surveys, one-to-one sessions, click testing, card sorting, tree testing, and usability testing across desktop and mobile experiences.</p>
          <p className="mb-4">Through click testing, we discovered that headlines were the primary interaction point for users. This insight led us to work closely with the content team to establish clearer headline criteria, exploring elements such as word choice, calls to action, and editorial framing that could influence engagement. As a result, one of the most important design decisions was to build the experience around how users naturally scan and interact with content, rather than treating headlines as secondary elements of the interface.</p>
          <p>One-on-one interviews revealed that users wanted more personalized and evergreen content beyond daily news. Combined with click-testing insights showing that headlines drove the most engagement, this helped us define a content strategy focused on stronger headlines and greater visibility for underexposed stories.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1466' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — UX Strategy</ProjectTextHeading>
          <p className="mb-4">The second phase focused on translating research insights into a new visual and editorial direction for the experience.</p>
          <p className="mb-4">The research helped us identify three key areas that would guide the redesign:</p>
          <p className="mb-2"><strong>Adaptation</strong> — creating a responsive experience that could adapt to different devices, content types, and user needs.</p>
          <p className="mb-2"><strong>Fluency</strong> — making content discovery and navigation feel faster, clearer, and more intuitive.</p>
          <p className="mb-4"><strong>Intellect</strong> — exploring opportunities for personalization, meaningful interactions, and content recommendations.</p>
          <p>These principles became the foundation for the next stages of the redesign, helping translate user insights into a clearer and more purposeful digital experience.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/514' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>03 — Evolving the Visual Language</ProjectTextHeading>
          <p className="mb-4">The second phase focused on translating the research insights into a stronger visual and editorial direction for the experience.</p>
          <p className="mb-4">We discovered that headlines were one of the main drivers of engagement, while deeper and evergreen content was often overlooked. This led us to rethink how content was prioritized, presented, and connected across the Home and Article experiences.</p>
          <p className="mb-4">We introduced El Tiempo's print edition typeface for headlines, strengthening the connection to its editorial heritage while giving digital content a more distinctive voice. We also refined the color palette, typography hierarchy, buttons, links, and other UI elements to create a clearer and more recognizable visual system.</p>
          <p>These changes brought together editorial strategy and visual design, creating an experience that made content easier to scan, discover, and engage with.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1106' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>04 — Designing a Fluid Responsive System</ProjectTextHeading>
          <p className="mb-4">Once the visual and editorial direction was established, the next challenge was creating a responsive system that could preserve content hierarchy across devices.</p>
          <p className="mb-4">We developed a flexible grid that transitioned from five columns on desktop to two and eventually one on smaller screens. The fifth column was intentionally reserved for advertising, allowing the content to adapt without compromising the reading experience.</p>
          <p>The result was a more fluid system that balanced editorial priorities, usability, and business needs across screen sizes.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1118' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection05} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <p>The redesign brought together content strategy, editorial hierarchy, visual identity, and responsive design to create a more engaging experience for El Tiempo. By making content easier to discover and prioritizing what users valued most, we created stronger opportunities for engagement while giving underexposed content a more visible role in the experience.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
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
  onLuciaClick,
  prevProject,
  nextProject,
}: AndroidCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

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
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={androidScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} />

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
          subtitle="Evolving the Android Enterprise Experience"
          subtitleSize={48}
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer' },
            { label: 'Collaboration', value: 'UX Research, UX Design & Development' },
            { label: 'Focus', value: 'Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/1740' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Impact & Content Strategy:</ProjectTextHeading>
          <p className="mb-4">The refreshed Design System created a more cohesive and scalable visual foundation for the Android Enterprise experience.</p>
          <p className="mb-4">By building on the existing system rather than redesigning it from scratch, we were able to modernize the interface while preserving established patterns and reducing unnecessary implementation effort.</p>
          <p className="mb-4">The work resulted in 20+ adapted components and 15 modified patterns, giving the development team reusable building blocks that could be applied consistently across the platform.</p>
          <p className="mb-8">The updated system also created a stronger connection between the Android Enterprise brand and its digital experience, making the product feel more modern, consistent, and easier to evolve over time.</p>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on evolving the Android Enterprise digital experience through a subtle brand refresh and the evolution of its existing Design System.</p>
          <p className="mb-4">Rather than redesigning the platform from scratch, the goal was to translate the updated brand identity into a scalable UI system. Small changes in typography, color, spacing, visual treatments, and component styling became the foundation for a more cohesive and modern experience across the platform.</p>
          <p>The work resulted in an updated Design System with 20+ adapted components and 15 modified patterns, creating a more consistent visual language while preserving the structure and efficiency of the existing product.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/1548' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — The Approach</ProjectTextHeading>
          <p className="mb-4">We audited the existing Design System and identified opportunities to evolve its core foundations—from typography and color to component states, spacing, and visual treatments.</p>
          <p className="mb-8">These updates were then translated into reusable components and patterns, allowing the refreshed brand to scale consistently across the platform. This approach created a bridge between the existing experience and the new visual direction, making the brand refresh more systematic, efficient, and sustainable.</p>
          <ProjectTextHeading>02 — Restructuring Information</ProjectTextHeading>
          <p className="mb-4">The second phase focused on restructuring the information architecture to make content easier to discover and support product education.</p>
          <p className="mb-4">We introduced a modular approach that allowed sections to be customized, reordered, or replaced as content needs evolved.</p>
          <p>This created a more flexible and scalable experience while making it easier for users to navigate and understand the product.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/2739' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Phase 03 — Design System & Reuse Strategy</ProjectTextHeading>
          <p className="mb-4">A Design System is more than a collection of UI components. It is a shared framework of reusable components, patterns, rules, and behaviors that creates a common language between Design and Engineering.</p>
          <p className="mb-4">Research on UI reuse has shown that reusing existing components can reduce development effort and improve productivity, particularly when components are structured, documented, and shared across projects.</p>
          <p className="mb-4">Based on this principle, our strategy was to reuse before rebuilding. We evaluated the existing components and identified which elements could be adapted to support the refreshed brand, rather than creating new solutions unnecessarily.</p>
          <p>This approach allowed Design and Engineering to work from a shared set of proven building blocks, reducing duplication and making implementation more predictable. At the same time, it preserved the value of the existing system and avoided introducing unnecessary complexity.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/581' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Design System</ProjectTextHeading>
          <p className="mb-4">We evolved the existing Android Enterprise Design System into a more flexible and scalable system, reusing established components while modernizing their visual language and functionality.</p>
          <p className="mb-4">A key part of the work was introducing tokens and variables across components, allowing each component to adapt to different content and use cases without creating unnecessary variations. This created a more flexible foundation while maintaining consistency across the experience. For example, Hero components retained core elements such as headlines, but were expanded to support more descriptive content and subtext. We also introduced more versatile geometric shapes and visual treatments, moving beyond conventional forms to give the system a more modern and distinctive expression.</p>
          <p className="mb-4">The navigation system was also restructured beyond its visual appearance. We reorganized categories, removed low-value content, and simplified the information architecture to create a clearer and more focused experience.</p>
          <p>Throughout the process, we worked closely with development to reuse and evolve existing components, creating a system that was more adaptable, modern, and efficient to implement.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/525' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection04} />
        </ProjectSectionImage>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
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
  onLuciaClick,
  prevProject,
  nextProject,
}: GoogleCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

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
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={googleScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} />

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
          subtitle="Reimagining Onboarding for Google Cloud"
          subtitleSize={48}
          subtitleMobileSize={32}
          subtitleMobileLineHeight={34}
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer' },
            { label: 'Collaboration', value: 'UX Research, UX Design & Development, Claude Code' },
            { label: 'Focus', value: 'AI Claude, Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/820' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Impact & Content Strategy:</ProjectTextHeading>
          <p className="mb-4">The project's impact was a significantly improved internal onboarding experience, transforming the original Google Sites solution into a more structured, accessible, and engaging platform.</p>
          <p className="mb-4">The new experience strengthened the Google Cloud brand identity while making onboarding information easier to navigate and act on.</p>
          <p className="mb-4">The final solution achieved four key objectives:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Centralized essential onboarding information and resources in one place.</li>
            <li>Improved accessibility across devices, particularly on mobile.</li>
            <li>Streamlined the onboarding journey through profiles, activities, and structured content.</li>
            <li>Created a stronger and more cohesive brand experience aligned with Google Cloud.</li>
          </ul>
          <p className="mb-8">Overall, the project transformed a static information repository into a more guided and user-centered onboarding experience for new team members.</p>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on creating a dedicated onboarding platform for new Google Cloud team members, bringing essential documentation, resources, and team information into one centralized experience.</p>
          <p className="mb-4">The project began as a response to the limitations of the existing Google Sites solution, particularly its mobile usability. Instead of simply migrating the content, we restructured the information and redesigned the experience to make onboarding more accessible, professional, and engaging.</p>
          <p>The platform was built using Claude Code, combining a new content structure with a mobile-first interface aligned with the Google Cloud brand.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1228' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>UX Research</ProjectTextHeading>
          <p className="mb-4">We started by auditing the existing onboarding experience to understand how new team members accessed information, what content they needed most, and where they encountered friction.</p>
          <p className="mb-4">The research revealed that information was fragmented across different resources, making it difficult for users to understand where they were in the onboarding journey and what they should do next. Mobile usability was another key limitation of the existing Google Sites experience.</p>
          <p>These insights helped us shift the approach from simply migrating content to restructuring the onboarding experience around user needs, creating clearer content hierarchy, actionable activities, and a more guided journey across devices.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1064' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Personalized Onboarding Profile</ProjectTextHeading>
          <p className="mb-4">The first phase focused on creating a personalized onboarding profile that gave new team members a clear view of their journey.</p>
          <p className="mb-4">The profile allows users to track their onboarding progress, understand which stage they are in, identify their next steps, and quickly find the right people or resources for support.</p>
          <p>By bringing this information into one place, the experience transforms onboarding from a collection of tasks and documentation into a more guided and actionable journey.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2784/1288' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — Content Optimization</ProjectTextHeading>
          <p className="mb-4">The second phase focused on auditing and restructuring the existing content to make information clearer, more accessible, and easier to navigate.</p>
          <p>We simplified the content hierarchy and organized information around users' needs, helping new team members quickly find the resources and guidance relevant to each stage of their onboarding journey.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2784/1828' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>03 — From Google Sites to a Custom Platform</ProjectTextHeading>
          <p className="mb-4">The final phase focused on migrating the existing onboarding content from Google Sites into a custom platform built with Claude Code.</p>
          <p className="mb-4">We first established the core experience around three key areas: a personalized profile, an activity-based home, and an onboarding section focused on the team's mission and vision.</p>
          <p className="mb-4">This structure became the foundation for organizing the migrated content and transforming it into a more connected, interactive, and scalable onboarding experience.</p>
          <p>The final platform brought the existing information into a unified experience while introducing a more modern interface and clearer navigation for new team members.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

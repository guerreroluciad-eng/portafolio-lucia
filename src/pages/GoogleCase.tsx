import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero01 from '@/imports/Google/Hero-01.jpg'
import imgHero02 from '@/imports/Google/Hero-02.jpg'
import imgHero03 from '@/imports/Google/Hero-03.png'
import imgSection01 from '@/imports/Google/Image-01.png'
import gifSection02 from '@/imports/Google/Image-02.gif'
import imgSection03 from '@/imports/Google/Image-03.png'
import gifSection04 from '@/imports/Google/Image-04.gif'

interface GoogleCaseProps {
  googlePageReady: boolean
  googleScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
  onNextClick: () => void
}

export default function GoogleCase({
  googlePageReady,
  googleScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
  onNextClick,
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
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer, UX Research, UX Design & Development, Claude Code' },
            { label: 'Focus', value: 'AI Search, Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectImageRow>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover lg:object-contain lg:max-w-full size-full" src={imgHero01} />
          </ProjectImageBox>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover lg:object-contain lg:max-w-full size-full" src={imgHero02} />
          </ProjectImageBox>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover lg:object-contain lg:max-w-full size-full" src={imgHero03} />
          </ProjectImageBox>
        </ProjectImageRow>

        <ProjectTextBlock>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on creating a dedicated onboarding platform for new Google Cloud team members, bringing essential documentation, resources, and team information into one centralized experience.</p>
          <p className="mb-4">The project began as a response to the limitations of the existing Google Sites solution, particularly its mobile usability. Instead of simply migrating the content, we restructured the information and redesigned the experience to make onboarding more accessible, professional, and engaging.</p>
          <p className="mb-8">The platform was built using Claude Code, combining a new content structure with a mobile-first interface aligned with the Google Cloud brand.</p>
          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4">The existing Google Sites solution contained the information needed for onboarding but was difficult to navigate and use, especially on mobile.</p>
          <p className="mb-4">The challenge was to transform this collection of documentation into a clear and actionable onboarding experience.</p>
          <p className="mb-4">We focused on simplifying the content structure and introducing features such as profiles, filters, forms, and dashboards to help new team members understand their progress, find relevant resources, and know what to do next.</p>
          <p>The result was a centralized platform designed to make onboarding clearer, more structured, and easier to navigate.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '475px' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Personalized Onboarding Profile</ProjectTextHeading>
          <p className="mb-4">The first phase focused on creating a personalized onboarding profile that gave new team members a clear view of their journey.</p>
          <p className="mb-4">The profile allows users to track their onboarding progress, understand which stage they are in, identify their next steps, and quickly find the right people or resources for support.</p>
          <p>By bringing this information into one place, the experience transforms onboarding from a collection of tasks and documentation into a more guided and actionable journey.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/491' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — Content Optimization</ProjectTextHeading>
          <p className="mb-4">The second phase focused on auditing and restructuring the existing content to make information clearer, more accessible, and easier to navigate.</p>
          <p>We simplified the content hierarchy and organized information around users' needs, helping new team members quickly find the resources and guidance relevant to each stage of their onboarding journey.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/678' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>03 — From Google Sites to a Custom Platform</ProjectTextHeading>
          <p className="mb-4">The final phase focused on migrating the existing onboarding content from Google Sites into a custom platform built with Claude Code.</p>
          <p className="mb-4">We first established the core experience around three key areas: a personalized profile, an activity-based home, and an onboarding section focused on the team's mission and vision.</p>
          <p className="mb-4">This structure became the foundation for organizing the migrated content and transforming it into a more connected, interactive, and scalable onboarding experience.</p>
          <p>The final platform brought the existing information into a unified experience while introducing a more modern interface and clearer navigation for new team members.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '581px' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Results</ProjectTextHeading>
          <p className="mb-4">The project resulted in a significantly improved internal onboarding experience, transforming the original Google Sites solution into a more structured, accessible, and engaging platform.</p>
          <p className="mb-4">The new experience strengthened the Google Cloud brand identity while making onboarding information easier to navigate and act on.</p>
          <p className="mb-4">The final solution achieved four key objectives:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Centralized essential onboarding information and resources in one place.</li>
            <li>Improved accessibility across devices, particularly on mobile.</li>
            <li>Streamlined the onboarding journey through profiles, activities, and structured content.</li>
            <li>Created a stronger and more cohesive brand experience aligned with Google Cloud.</li>
          </ul>
          <p>Overall, the project transformed a static information repository into a more guided and user-centered onboarding experience for new team members.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." onNextClick={onNextClick} />
      </div>
    </div>
  )
}

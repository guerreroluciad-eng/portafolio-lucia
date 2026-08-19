import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgAndroidRect1 from '@/imports/DesktopAndroid/a1b916fb20f6240ca99c4c2472574e3d2b6753f9.png'
import imgAndroidRect2 from '@/imports/DesktopAndroid/b7b372b8a18bcae5d8c59bb81046dc194cc9bcdf.png'
import imgAndroidRect3 from '@/imports/DesktopAndroid/e79c6192694a4d1c01e92de40aaf8e465aa35d76.png'
import imgAndroidRect4 from '@/imports/DesktopAndroid/Image-1.jpg'
import gifRestructuringExperience from '@/imports/DesktopAndroid/android-restructuring-experience.gif'
import gifRestructuringInformation from '@/imports/DesktopAndroid/android-restructuring-information.gif'
import imgAndroidModulo5 from '@/imports/DesktopAndroid/09a1fa1961a2da6e488412b3028238c9f52bcbb6.png'
import imgAndroidModulo6 from '@/imports/DesktopAndroid/99333e532f94c6596e6f5d156a33d2c9fb679bc9.png'

interface AndroidCaseProps {
  androidPageReady: boolean
  androidScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
  onNextClick: () => void
}

export default function AndroidCase({
  androidPageReady,
  androidScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
  onNextClick,
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
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer' },
            { label: 'Collaboration', value: 'UX Research, UX Design & Development' },
            { label: 'Focus', value: 'Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectImageRow>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgAndroidRect1} />
          </ProjectImageBox>
          <ProjectImageBox>
            <div className="absolute bg-[#e5dbf6] inset-0" />
            <img alt="" className="absolute h-[125.74%] left-[-15.74%] max-w-none top-[-9.17%] w-[131.17%]" src={imgAndroidRect2} />
          </ProjectImageBox>
          <ProjectImageBox>
            <div className="absolute inset-0 bg-white" />
            <img alt="" className="absolute max-w-none object-contain size-full" src={imgAndroidRect3} />
          </ProjectImageBox>
        </ProjectImageRow>

        <ProjectTextBlock>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on evolving the Android Enterprise digital experience through a subtle brand refresh and the evolution of its existing Design System.</p>
          <p className="mb-4">Rather than redesigning the platform from scratch, the goal was to translate the updated brand identity into a scalable UI system. Small changes in typography, color, spacing, visual treatments, and component styling became the foundation for a more cohesive and modern experience across the platform.</p>
          <p className="mb-8">The work resulted in an updated Design System with 20+ adapted components and 15 modified patterns, creating a more consistent visual language while preserving the structure and efficiency of the existing product.</p>
          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4">The challenge was to translate a subtle brand evolution into a meaningful system of reusable components and patterns.</p>
          <p className="mb-4">The updated identity introduced relatively small visual changes, but applying them consistently across a large platform required a clear understanding of which elements needed to evolve, which could be reused, and where new patterns were necessary.</p>
          <p>The focus was therefore not simply on refreshing individual screens, but on establishing a flexible Design System that could carry the new visual language across the entire experience while minimizing development effort and maintaining existing user flows.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '4200/1548' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgAndroidRect4} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — The Approach</ProjectTextHeading>
          <p className="mb-4">We audited the existing Design System and identified opportunities to evolve its core foundations—from typography and color to component states, spacing, and visual treatments.</p>
          <p className="mb-4">These updates were then translated into reusable components and patterns, allowing the refreshed brand to scale consistently across the platform.</p>
          <p>This approach created a bridge between the existing experience and the new visual direction, making the brand refresh more systematic, efficient, and sustainable.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/491' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifRestructuringExperience} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — Restructuring Information</ProjectTextHeading>
          <p className="mb-4">The second phase focused on restructuring the information architecture to make content easier to discover and support product education.</p>
          <p className="mb-4">We introduced a modular approach that allowed sections to be customized, reordered, or replaced as content needs evolved.</p>
          <p>This created a more flexible and scalable experience while making it easier for users to navigate and understand the product.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '1098/678' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifRestructuringInformation} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Design System</ProjectTextHeading>
          <p className="mb-4">We evolved the existing Android Enterprise Design System into a more flexible and scalable system, reusing established components while modernizing their visual language and functionality.</p>
          <p className="mb-4">A key part of the work was introducing tokens and variables across components, allowing each component to adapt to different content and use cases without creating unnecessary variations. This created a more flexible foundation while maintaining consistency across the experience. For example, Hero components retained core elements such as headlines, but were expanded to support more descriptive content and subtext. We also introduced more versatile geometric shapes and visual treatments, moving beyond conventional forms to give the system a more modern and distinctive expression.</p>
          <p className="mb-4">The navigation system was also restructured beyond its visual appearance. We reorganized categories, removed low-value content, and simplified the information architecture to create a clearer and more focused experience.</p>
          <p>Throughout the process, we worked closely with development to reuse and evolve existing components, creating a system that was more adaptable, modern, and efficient to implement.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '581px' }}>
          <img alt="" className="absolute h-[158.1%] left-0 max-w-none top-[-6.51%] w-full" src={imgAndroidModulo5} />
        </ProjectSectionImage>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '525px' }}>
          <img alt="" className="absolute h-[126.2%] left-0 max-w-none top-0 w-full" src={imgAndroidModulo6} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Results</ProjectTextHeading>
          <p className="mb-4">The project transformed the existing Android Enterprise Design System into a more flexible, scalable, and modern foundation for the refreshed brand.</p>
          <p className="mb-4">Rather than simply updating the visual layer, we strengthened the system itself by introducing a more structured token architecture, establishing clear and consistent naming conventions, and expanding component variables to support different content and use cases.</p>
          <p className="mb-4">Key Outcomes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>20+ components adapted and modernized within the Design System.</li>
            <li>15+ reusable patterns created and documented.</li>
            <li>Introduced a structured token and variable system with consistent naming conventions.</li>
            <li>Expanded component flexibility through multiple configurable variables.</li>
            <li>Added motion and interaction behaviors to key components.</li>
            <li>Reused and evolved existing components to reduce implementation effort.</li>
            <li>Created a more scalable foundation for future brand and product updates.</li>
            <li>Improved consistency across the entire Android Enterprise experience.</li>
          </ul>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." onNextClick={onNextClick} />
      </div>
    </div>
  )
}

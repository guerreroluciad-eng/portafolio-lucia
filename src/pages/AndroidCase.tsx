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
import imgAndroidRect4 from '@/imports/DesktopAndroid/5462d72b7995f38322df28bef1ae159015a49ba6.png'
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
}

export default function AndroidCase({
  androidPageReady,
  androidScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
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
          <p className="mb-4">This project focused on evolving the Android Enterprise web experience through a comprehensive brand refresh.</p>
          <p className="mb-4">The goal was to bring the updated visual identity into the existing platform while creating a more cohesive, modern, and scalable experience across the site.</p>
          <p className="mb-8">The work focused on updating the visual language and key UI elements while leveraging the existing design system to ensure consistency and efficiency.</p>
          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4">The main challenge was to introduce the new Android Enterprise identity without rebuilding the existing experience from scratch.</p>
          <p className="mb-4">We needed to balance the updated visual direction with the existing design system, ensuring that changes could scale across the platform while minimizing development effort and avoiding unnecessary disruption to established user flows.</p>
          <p>The solution required identifying which components and styles could be updated, reused, or evolved, creating a more efficient path from the existing experience to the refreshed brand.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '475px' }}>
          <img alt="" className="absolute h-[107.51%] left-0 max-w-none top-[-7.54%] w-full object-cover" src={imgAndroidRect4} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Restructuring the Experience</ProjectTextHeading>
          <p className="mb-4">The first phase focused on rethinking how content was organized and communicated across the experience.</p>
          <p className="mb-4">While the existing navigation was refined, the main focus was on modernizing the way information was presented. Color became a key design tool to create visual sections, establish hierarchy, and give greater relevance to key areas of the product.</p>
          <p>This approach created a clearer visual structure while allowing the refreshed brand to feel more present throughout the experience.</p>
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
          <ProjectTextHeading>03 — Evolving the Design System</ProjectTextHeading>
          <p className="mb-4">The third phase focused on evolving the Design System to support the refreshed brand and create a more consistent, scalable experience.</p>
          <p className="mb-4">We adapted 20+ existing components and introduced 15+ modified patterns, establishing reusable behaviors and visual rules across the platform. Elements such as buttons, navigation, image treatments, cards, and content layouts were refined to work cohesively with the new visual language.</p>
          <p>This approach allowed the refreshed identity to scale across the experience while reducing unnecessary design and development effort and making future updates easier to implement and maintain.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '581px' }}>
          <img alt="" className="absolute h-[158.1%] left-0 max-w-none top-[-6.51%] w-full" src={imgAndroidModulo5} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Design System</ProjectTextHeading>
          <p className="mb-4">I led the visual redesign of the Android Enterprise experience, working closely with a UX designer to translate the refreshed brand into a cohesive and scalable interface.</p>
          <p className="mb-4">My role covered the UI and visual design across the experience, from defining the visual direction and creating new patterns to adapting existing components and establishing reusable solutions within the Design System.</p>
          <p>I also worked closely with development to reuse and evolve existing components, reducing unnecessary implementation effort while ensuring the refreshed experience remained consistent and scalable.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', height: '525px' }}>
          <img alt="" className="absolute h-[126.2%] left-0 max-w-none top-0 w-full" src={imgAndroidModulo6} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Results</ProjectTextHeading>
          <p className="mb-4">The project successfully brought the refreshed Android Enterprise identity into the existing experience without requiring a complete rebuild.</p>
          <p className="mb-4">By evolving the Design System and reusing existing components, we created a more modern and cohesive interface while minimizing development effort and preserving established user experiences.</p>
          <p className="mb-4">The result was a scalable visual system that allowed the new brand to extend consistently across the platform and provided a stronger foundation for future content and product updates.</p>
          <p className="mb-4">Key outcomes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refreshed the visual identity across the full interface.</li>
            <li>Adapted 20+ existing components to the new brand.</li>
            <li>Created 15+ reusable patterns within the Design System.</li>
            <li>Reused existing components to reduce development effort.</li>
            <li>Improved consistency and scalability across the experience.</li>
            <li>Established a stronger visual foundation for future iterations.</li>
          </ul>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />
      </div>
    </div>
  )
}

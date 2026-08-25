import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/AppTiempo/Hero-1.png'
import imgUxStrategy from '@/imports/AppTiempo/Image-ux-strategy.png'
import imgSection01 from '@/imports/AppTiempo/Image-1.png'
import imgSection02 from '@/imports/AppTiempo/Image-2.png'
import imgSection03 from '@/imports/AppTiempo/Image-3.png'

interface AppTiempoCaseProps {
  appTiempoPageReady: boolean
  appTiempoScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onLuciaClick: () => void
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function AppTiempoCase({
  appTiempoPageReady,
  appTiempoScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onCvClick,
  onLuciaClick,
  prevProject,
  nextProject,
}: AppTiempoCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={appTiempoPageReady}
        scrolled={appTiempoScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onCvClick={onCvClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={appTiempoScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} onCvClick={onCvClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: appTiempoPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: appTiempoPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="El Tiempo-Company" title="App Tiempo" />

        <ProjectMeta
          subtitle="Evolving the El Tiempo Mobile Experience"
          subtitleSize={48}
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer' },
            { label: 'Collaboration', value: 'UX Research, UX Design & Development' },
            { label: 'Focus', value: 'Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/804' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Impact & Content Strategy:</ProjectTextHeading>
          <p className="mb-4">The project evolved the El Tiempo mobile app from a primarily content-consumption experience into a more dynamic and interactive news platform.</p>
          <p className="mb-4">The introduction of Stories, Minute by Minute, and Reactions created new ways for users to discover content, follow developing stories, and express their opinions.</p>
          <p className="mb-4">These features also established a stronger foundation for user engagement and content interaction, while keeping the experience simple, intuitive, and consistent with the El Tiempo brand.</p>
          <p className="mb-8">Overall, the project demonstrated how small, focused product innovations can create new opportunities for engagement without disrupting the core news experience.</p>

          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project focused on evolving the El Tiempo mobile app by introducing new features designed to make news more accessible, timely, and interactive.</p>
          <p className="mb-4">The experience was built around three key user needs: having more content readily available, staying informed about the latest events, and having more opportunities to interact with and respond to content.</p>
          <p className="mb-8">The goal was to move beyond simply delivering news and create a more engaging and dynamic experience for readers.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/804' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgUxStrategy} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>UX Strategy</ProjectTextHeading>
          <p className="mb-4">The UX process focused on low-fidelity prototyping and iterative testing to validate the new features before moving into visual design.</p>
          <p className="mb-4">We created lightweight prototypes to simulate the key interactions and evaluate the user effort, comprehension, and ease of use when interacting with Stories, Minute by Minute, and Reactions.</p>
          <p className="mb-8">Testing allowed us to identify friction points early, refine the interactions, and ensure each feature felt simple, intuitive, and easy to discover before progressing to high-fidelity designs.</p>

          <ProjectTextHeading>01 — Introducing Stories</ProjectTextHeading>
          <p className="mb-4">The first evolution of the app focused on helping users discover more content directly from the homepage.</p>
          <p className="mb-4">Through early user research, we identified an opportunity to introduce a Stories experience, allowing readers to quickly browse trending and relevant news through a familiar, mobile-first interaction pattern.</p>
          <p className="mb-4">The initial concept included five story cards accessible through horizontal swiping. However, user testing revealed that the feature was not immediately discoverable from the homepage. To address this, we introduced a visual indicator and a distinctive color treatment that increased visibility and clarified the interaction. After validation, users were able to recognize and access the feature more easily, creating a more intuitive content discovery experience.</p>
          <p>This iterative process helped transform a promising concept into a feature that felt both familiar and easy to use.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/968' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — Minute by Minute</ProjectTextHeading>
          <p className="mb-4">The second evolution focused on giving users real-time updates on developing stories through a dedicated "Minute by Minute" experience.</p>
          <p className="mb-4">We introduced a timeline-based format that surfaced the latest updates directly on the homepage, allowing users to quickly scan what was happening and access the full developing story when needed.</p>
          <p className="mb-4">Based on user feedback, we also introduced customizable notifications, giving readers control over when they wanted to receive updates and when to turn them off.</p>
          <p>This feature transformed breaking news into a continuous, easy-to-follow experience, helping users stay informed as stories evolved.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/968' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>03 — Meaningful Interactions</ProjectTextHeading>
          <p className="mb-4">The final evolution focused on creating new ways for readers to interact with the news, moving beyond passive content consumption.</p>
          <p className="mb-4">Based on user research, we identified that positive reactions were more relevant and engaging for readers. We translated this insight into three simple interactions that allowed users to express how content resonated with them: "It helps me," "I recommend it," and "It entertains me."</p>
          <p className="mb-4">We explored and tested different visual approaches, ultimately using hand-inspired icons to make each reaction feel more human, expressive, and approachable.</p>
          <p>This added a new layer of engagement to the article experience, giving readers a simple way to respond to content while helping El Tiempo understand what resonates with its audience.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/968' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

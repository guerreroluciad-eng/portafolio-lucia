import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/AppTiempo/Hero-1.png'
import imgHero2 from '@/imports/AppTiempo/Hero-2.png'
import imgHero3 from '@/imports/AppTiempo/Hero-3.png'
import imgSection01 from '@/imports/AppTiempo/Image-1.png'
import imgSection02 from '@/imports/AppTiempo/Image-2.png'
import imgSection03 from '@/imports/AppTiempo/Image-3.png'

interface AppTiempoCaseProps {
  appTiempoPageReady: boolean
  appTiempoScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
}

export default function AppTiempoCase({
  appTiempoPageReady,
  appTiempoScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
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
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={appTiempoScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} />

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
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer, UX Research, UX Design' },
            { label: 'Collaboration', value: 'Development' },
            { label: 'Focus', value: 'Interaction Design, UI Design, Design Systems' },
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
          <p className="mb-4">This project focused on evolving the El Tiempo mobile app by introducing new features designed to make news more accessible, timely, and interactive.</p>
          <p className="mb-4">The experience was built around three key user needs: having more content readily available, staying informed about the latest events, and having more opportunities to interact with and respond to content.</p>
          <p className="mb-8">The goal was to move beyond simply delivering news and create a more engaging and dynamic experience for readers.</p>
          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4">The challenge was to evolve the existing app experience while maintaining its core purpose as a news platform.</p>
          <p className="mb-4">We identified opportunities to give users faster access to more content, better awareness of breaking or recent events, and new ways to interact with stories.</p>
          <p>The goal was to translate these needs into meaningful features that could increase engagement while keeping the experience simple, intuitive, and aligned with the El Tiempo brand.</p>
        </ProjectTextBlock>

        <ProjectTextBlock>
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

        <ProjectTextBlock>
          <ProjectTextHeading>Results</ProjectTextHeading>
          <p className="mb-4">The project transformed the El Tiempo app from a primarily content-driven experience into a more dynamic and interactive news platform.</p>
          <p className="mb-4">We introduced three new experiences — Stories, Minute by Minute, and Reactions — giving users new ways to discover content, follow developing stories, and interact with the news.</p>
          <p>The result was a more timely, engaging, and user-centered experience, while creating new opportunities for El Tiempo to understand reader interests and encourage deeper interaction with its content.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />
      </div>
    </div>
  )
}

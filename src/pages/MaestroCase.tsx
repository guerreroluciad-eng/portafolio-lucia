import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/Maestro/Hero-1.png'
import imgHero2 from '@/imports/Maestro/Hero-2.png'
import imgHero3 from '@/imports/Maestro/Hero-3.png'
import imgSection01 from '@/imports/Maestro/Image-1.png'
import imgSection02 from '@/imports/Maestro/Image-2.png'
import gifSection03 from '@/imports/Maestro/Image-3.gif'

interface MaestroCaseProps {
  maestroPageReady: boolean
  maestroScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
}

export default function MaestroCase({
  maestroPageReady,
  maestroScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
}: MaestroCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

  return (
    <div
      ref={scrollRef}
      className="bg-[#302F2A] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={maestroPageReady}
        scrolled={maestroScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onLuciaClick={onLuciaClick}
        dark
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={maestroScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} background="#302F2A" dark />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: maestroPageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: maestroPageReady ? undefined : 0,
        }}
      >
        <ProjectTitle
          company="Huge-Company"
          title="Maestro"
          companyColor="#ffffff"
          titleColor="#E1DAD0"
          titleHoverColor="#E1DAD0"
        />

        <ProjectMeta
          subtitle="A New Identity for Creative Exploration"
          textColor="#ffffff"
          metaLines={[
            { label: 'My role', value: 'Art Director, Visual Designer' },
            { label: 'Collaboration', value: 'Creative Design, Motion' },
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
          <p className="mb-4">This project focused on creating a new internal brand identity for Huge—one that could reflect the way creativity moves between structure and experimentation.</p>
          <p className="mb-4">Inspired by the paradoxical work of M.C. Escher, the identity explores the space between order and chaos, where unexpected ideas can emerge from a structured system. The concept was built around a simple idea: creativity needs structure, but it also needs room for the unexpected.</p>
          <p className="mb-4 italic">"Only those who attempt the absurd can achieve the impossible."</p>
          <p className="mb-8">The resulting identity combines a defined visual framework with a generative image-making system, allowing the brand to evolve through experimentation, variation, and unexpected visual outcomes.</p>

          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4"><strong>Designing a System That Could Embrace the Unexpected</strong></p>
          <p className="mb-4">The challenge was not simply to create a visual identity, but to build a flexible system that could balance consistency with creative freedom.</p>
          <p className="mb-4">A traditional identity system defines strict rules to ensure that every application looks consistent. For this project, we wanted to challenge that approach by creating a system where variation and unexpected outcomes were part of the identity itself.</p>
          <p className="mb-4">This raised an important design question:</p>
          <p className="mb-4"><strong>How can a visual system remain recognizable while allowing creativity to break the rules?</strong></p>
          <p className="mb-4">Through an iterative process of trial and error, we explored different compositions, proportions, and relationships between elements. Some experiments resulted in unexpected "happy accidents"—including square compositions, Huge-inspired panels, and three-panel structures that naturally formed an "M."</p>
          <p className="mb-4">Rather than treating these outcomes as mistakes, we used them as opportunities to expand the system.</p>
          <p className="mb-8">The challenge became an exercise in finding the right balance between rules and randomness, structure and chaos, consistency and experimentation.</p>

          <ProjectTextHeading>Beyond the Identity:</ProjectTextHeading>
          <p className="mb-4">The final identity transformed the initial concept of structure and chaos into a flexible visual language that could adapt across different formats, environments, and applications.</p>
          <p className="mb-4">Bold typography, geometric forms, contrasting compositions, and a distinctive color palette came together to create a visual system that feels both structured and unpredictable. The recurring shapes act as recognizable visual anchors, while their scale, position, and interaction can change from one composition to another.</p>
          <p className="mb-4">The identity was designed to live beyond a single format. We applied the system across presentations, digital applications, internal communications, and environmental graphics, extending the brand into different physical and digital spaces.</p>
          <p>Rather than creating a collection of isolated brand assets, the goal was to build a system with enough flexibility to continuously generate new compositions while maintaining a strong and recognizable identity.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/754' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1848' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2146/1138' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection03} />
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

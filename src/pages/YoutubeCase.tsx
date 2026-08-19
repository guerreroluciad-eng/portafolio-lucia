import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import { ProjectImageRow, ProjectImageBox } from '@/components/ProjectImageRow'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/Youtube/Hero-1.png'
import gifHero2 from '@/imports/Youtube/Hero-2.gif'
import imgHero3 from '@/imports/Youtube/Hero-3.png'
import gifSection01 from '@/imports/Youtube/Image-01.gif'
import imgSection02 from '@/imports/Youtube/Image-02.png'
import imgSection03 from '@/imports/Youtube/Image-03.png'
import gifSection04 from '@/imports/Youtube/Image-04.gif'
import imgSection05 from '@/imports/Youtube/Image-05.png'

interface YoutubeCaseProps {
  youtubePageReady: boolean
  youtubeScrolled: boolean
  onScrolledChange: (scrolled: boolean) => void
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
  onNextClick: () => void
}

export default function YoutubeCase({
  youtubePageReady,
  youtubeScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
  onNextClick,
}: YoutubeCaseProps) {
  const scrollRef = useScrollThreshold(40, onScrolledChange)

  return (
    <div
      ref={scrollRef}
      className="bg-[#f8f8f8] relative w-full min-h-screen overflow-y-auto"
    >
      <ProjectHeader
        ready={youtubePageReady}
        scrolled={youtubeScrolled}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onLuciaClick={onLuciaClick}
      />

      {/* ── Scroll header (slides down when scrolled) — same on every viewport ── */}
      <ScrollHeader scrolled={youtubeScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} />

      {/* Page content */}
      <div
        className="pt-[58px] md:pt-[153px] lg:pt-[205px] pb-[120px] flex flex-col items-center"
        style={{
          animation: youtubePageReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined,
          opacity: youtubePageReady ? undefined : 0,
        }}
      >
        <ProjectTitle company="Huge-Company" title="Youtube" />

        <ProjectMeta
          subtitle="AI-Powered Search for YouTube Blog Creators"
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer' },
            { label: 'Collaboration', value: 'UX Research, UX Design & Development' },
            { label: 'Focus', value: 'AI Search, Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectImageRow>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgHero1} />
          </ProjectImageBox>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={gifHero2} />
          </ProjectImageBox>
          <ProjectImageBox>
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgHero3} />
          </ProjectImageBox>
        </ProjectImageRow>

        <ProjectTextBlock>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project explored a new AI-powered search experience designed to help YouTube creators discover relevant content opportunities, generate personalized recommendations, and improve the quality and performance of their blogs.</p>
          <p className="mb-8">The goal was to make AI-powered search feel faster, more intuitive, and more useful, while creating an experience that seamlessly integrated into the existing product ecosystem.</p>
          <ProjectTextHeading>The Challenge:</ProjectTextHeading>
          <p className="mb-4">Creators often need to explore multiple sources of information before finding the right content opportunity. The challenge was to simplify this process by introducing AI as a more direct and conversational way to search, while keeping the experience clear and easy to navigate.</p>
          <p>The solution was structured around three key touchpoints, creating a continuous journey from discovery to search and deeper exploration.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '3000/1303' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Homepage</ProjectTextHeading>
          <p className="mb-4">The homepage was redesigned to make AI search the primary entry point of the experience.</p>
          <p className="mb-4">A prominent search bar and animated call-to-action encourage users to interact from the moment they enter the product. Subtle micro-interactions create a sense of responsiveness and reinforce the idea that AI can provide immediate results.</p>
          <p className="mb-4"><strong>Designing for speed and discoverability</strong></p>
          <p className="mb-4">To strengthen this perception, we combined: large, expressive typography, clear and bold labels, a prominent search CTA, subtle micro-interactions and a dedicated visual language for AI-powered features.</p>
          <p className="mb-4">We introduced a custom gradient inspired by the brand's existing color palette to visually distinguish AI functionality from the rest of the interface.</p>
          <p>This gradient became a reusable visual language across key elements such as the search bar, search button, and supporting UI components, helping create a cohesive AI experience throughout the product.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/776' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — Quick Search</ProjectTextHeading>
          <p className="mb-4"><strong>Helping users find the right direction faster</strong></p>
          <p className="mb-4">As users begin typing, the Quick Search panel provides contextual suggestions and relevant keywords in real time.</p>
          <p className="mb-4">Instead of requiring users to formulate a complete query, the experience helps them refine their intent while searching.</p>
          <p className="mb-4">This interaction was designed to: reduce effort → provide context → accelerate discovery.</p>
          <p>Quick Search became an important bridge between the initial interaction and the full AI-powered results experience.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/626' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection03} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>03 — AI Search Results</ProjectTextHeading>
          <p className="mb-4"><strong>Turning complex AI responses into a clear experience</strong></p>
          <p className="mb-4">Once a user submits a query, they enter the AI-powered results experience.</p>
          <p className="mb-4">The challenge here was no longer simply how to display AI-generated content, but how to prioritize and structure it.</p>
          <p className="mb-8">The results page could contain multiple types of information, so we established a clear hierarchy based on user intent.</p>

          <p className="mb-2"><strong>01 — AI Summary</strong></p>
          <p className="mb-6">The highest-priority content is the AI-generated summary. Presented as a conversational response, it provides users with an immediate answer without requiring them to scan through multiple sources.</p>

          <p className="mb-2"><strong>02 — Quick Search</strong></p>
          <p className="mb-6">Next, contextual suggestions and keywords help users refine or expand their search.</p>

          <p className="mb-2"><strong>03 — Suggested Searches</strong></p>
          <p className="mb-8">Finally, suggested searches provide additional paths for exploration once the primary intent has been addressed.</p>

          <p className="mb-4">This hierarchy creates a natural progression: answer → refine → explore.</p>
          <p>Rather than presenting all AI-generated information with equal weight, the interface guides users from the most relevant information toward deeper discovery.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2080/1105' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection04} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Designing for Multiple AI Responses</ProjectTextHeading>
          <p className="mb-4">One of the biggest design challenges was the variety of information AI could generate.</p>
          <p className="mb-4">The final experience included 16 distinct AI response patterns, ranging from summaries and links to images and articles.</p>
          <p className="mb-4">Instead of treating each response as an isolated component, we designed a flexible system that could accommodate different content types while maintaining consistency across the experience.</p>
          <p>The result was an AI response system capable of adapting to different user intents without making the interface feel fragmented or unpredictable.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/950' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection05} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Results</ProjectTextHeading>
          <p className="mb-4">The final product transformed AI search from a single search interaction into a guided discovery experience.</p>
          <p className="mb-4">Users can move naturally through the journey: discover → search → get an answer → refine → explore.</p>
          <p>By combining a clear visual hierarchy, contextual assistance, and a flexible AI response system, the experience makes complex AI-generated information easier to understand and act on. The result is a faster, more intuitive, and more engaging way for creators to discover content opportunities and information relevant to their work.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." onNextClick={onNextClick} />
      </div>
    </div>
  )
}

import ScrollHeader from '@/components/ScrollHeader'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectTitle from '@/components/ProjectTitle'
import ProjectMeta from '@/components/ProjectMeta'
import ProjectTextBlock, { ProjectTextHeading } from '@/components/ProjectTextBlock'
import ProjectSectionImage from '@/components/ProjectSectionImage'
import ProjectContact from '@/components/ProjectContact'
import ProjectPageNav, { type ProjectNavCardData } from '@/components/ProjectPageNav'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import imgHero1 from '@/imports/Youtube/Hero-1.png'
import imgSection01 from '@/imports/Youtube/Image-01.png'
import gifSection02 from '@/imports/Youtube/Image-02.gif'
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
  prevProject: ProjectNavCardData
  nextProject: ProjectNavCardData
}

export default function YoutubeCase({
  youtubePageReady,
  youtubeScrolled,
  onScrolledChange,
  onWorkClick,
  onAboutClick,
  onLuciaClick,
  prevProject,
  nextProject,
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
          subtitleSize={48}
          metaLines={[
            { label: 'My role', value: 'Product Designer / UI Designer' },
            { label: 'Collaboration', value: 'UX Research, UX Design & Development' },
            { label: 'Focus', value: 'AI Search, Interaction Design, UI Design, Design Systems' },
          ]}
        />

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/776' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgHero1} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>Impact & Content Strategy:</ProjectTextHeading>
          <p className="mb-4">The impact of this project goes beyond improving the search experience—it aims to empower creators to create better content. By enhancing the search engine and giving users access to more sophisticated AI-powered tools, the platform becomes a stronger environment for content creation and discovery.</p>
          <p className="mb-8">The strategy was to make YouTube Blog more than just a place to publish: a platform equipped with AI tools that help creators research, develop, and create content, offering capabilities that set it apart from traditional blogging platforms.</p>
          <ProjectTextHeading>Overview:</ProjectTextHeading>
          <p className="mb-4">This project explored a new AI-powered search experience designed to help YouTube creators discover relevant content opportunities, generate personalized recommendations, and improve the quality and performance of their blogs.</p>
          <p>The goal was to make AI-powered search feel faster, more intuitive, and more useful, while creating an experience that seamlessly integrated into the existing product ecosystem.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '2196/1040' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgSection01} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>02 — UX Strategy</ProjectTextHeading>
          <p className="mb-4">We explored multiple ways to structure and present AI-generated results through an iterative wireframing process. By testing different layouts, content groupings, and response types, we identified which information was most relevant and useful for creators.</p>
          <p className="mb-4">We then used card sorting to validate how these results could be organized and prioritized within the AI experience. This helped us define clearer categories and a more intuitive navigation structure, ensuring that the final experience was driven by user needs rather than assumptions.</p>
          <p>The result was a more focused AI search experience that made relevant content easier to discover and helped creators move from search to insight to action.</p>
        </ProjectTextBlock>

        <ProjectSectionImage desktopStyle={{ width: '1098px', aspectRatio: '3000/1303' }}>
          <img alt="" className="absolute inset-0 size-full object-cover" src={gifSection02} />
        </ProjectSectionImage>

        <ProjectTextBlock>
          <ProjectTextHeading>01 — Homepage</ProjectTextHeading>
          <p className="mb-4">The homepage was redesigned to make AI search the primary entry point of the experience.</p>
          <p className="mb-4">A prominent search bar and animated call-to-action encourage users to interact from the moment they enter the product. Subtle micro-interactions create a sense of responsiveness and reinforce the idea that AI can provide immediate results.</p>
          <p className="mb-8"><strong>Designing for speed and discoverability</strong></p>
          <ProjectTextHeading>02 — Quick Search</ProjectTextHeading>
          <p className="mb-4"><strong>Helping users find the right direction faster</strong></p>
          <p className="mb-4">As users begin typing, the Quick Search panel provides contextual suggestions and relevant keywords in real time.</p>
          <p className="mb-4">Instead of requiring users to formulate a complete query, the experience helps them refine their intent while searching.</p>
          <p className="mb-2">This interaction was designed to:</p>
          <p className="mb-4"><strong>Reduce effort → Provide context → Accelerate discovery</strong></p>
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

          <p className="mb-2">This hierarchy creates a natural progression:</p>
          <p className="mb-4"><strong>Answer → Refine → Explore</strong></p>
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
          <p className="mb-2">Users can move naturally through the journey:</p>
          <p className="mb-4"><strong>Discover → Search → Get an answer → Refine → Explore</strong></p>
          <p className="mb-4">By combining a clear visual hierarchy, contextual assistance, and a flexible AI response system, the experience makes complex AI-generated information easier to understand and act on.</p>
          <p>The result is a faster, more intuitive, and more engaging way for creators to discover content opportunities and information relevant to their work.</p>
        </ProjectTextBlock>

        <ProjectContact message="We can start the conversation about what you want for your brand or leave me a message." />

        <div className="mt-[68px]">
          <ProjectPageNav prev={prevProject} next={nextProject} />
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import svgPaths from '@/imports/DesktopHome/svg-uri4v7r54i'
import imgFrame241 from '@/imports/logo5.png'
import imgPortrait from '@/imports/DesktopHome/0ebcef0a8e9c8f8ba55d004f48e69fa0ca22e4d3.png'
import imgGifFlower from '@/imports/DesktopHome-9/195b5c5b76a94118161174be63dc0b14987e854c.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import imgBehance from '@/imports/DesktopAboutme/7b5f3ac2060e45fa16744de94a7a6a1402551d85.png'
import imgInstagram from '@/imports/DesktopAboutme/aa36fe66f91d4d474a7c3e64585689a25e85b055.png'
import imgLinkedin from '@/imports/DesktopAboutme/1ffea485ff3654e8e559fa09d1da866a76576b97.png'
import { useMinWidth } from '@/hooks/useMinWidth'
import { useInView, revealStyle } from '@/hooks/useInView'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'

// ─── Home Logo ───────────────────────────────────────────────────────────────

export function HomeLogo({ className, fill = '#302f2a' }: { className?: string; fill?: string }) {
  return (
    <div className={className || 'h-[201px] relative w-[1334px]'}>
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[9px] items-end relative size-full">
          <div className="h-[129px] relative shrink-0 w-[44px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="129" preserveAspectRatio="none" viewBox="0 0 44 129" width="44">
              <path d={svgPaths.p15a96f00} fill={fill} style={{ transition: 'fill 0.25s ease' }} />
            </svg>
          </div>
          <div className="h-[83px] relative shrink-0 w-[84px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="83" preserveAspectRatio="none" viewBox="0 0 84 83" width="84">
              <path d={svgPaths.p68a4800} fill={fill} style={{ transition: 'fill 0.25s ease' }} />
            </svg>
          </div>
          <div className="h-[87px] relative shrink-0 w-[76px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="87" preserveAspectRatio="none" viewBox="0 0 76 87" width="76">
              <path d={svgPaths.p15b3c880} fill={fill} style={{ transition: 'fill 0.25s ease' }} />
            </svg>
          </div>
          <div className="h-[121px] relative shrink-0 w-[46px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="121" preserveAspectRatio="none" viewBox="0 0 46 121" width="46">
              <path d={svgPaths.p9331f00} fill={fill} style={{ transition: 'fill 0.25s ease' }} />
            </svg>
          </div>
          <div className="h-[87px] relative shrink-0 w-[86px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="87" preserveAspectRatio="none" viewBox="0 0 86 87" width="86">
              <path d={svgPaths.p3d511500} fill={fill} style={{ transition: 'fill 0.25s ease' }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Testimonials data ───────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote: "Lucia is an exceptionally talented Visual Designer with a great eye for detail, strong creative thinking, and the ability to turn ideas into polished, high-quality designs. Beyond her design skills, ",
    author: 'Andrea Sanz',
    role: 'Senior Product Designer',
  },
  {
    quote: 'She possesses an excellent visual style, strong conceptualization skills, and a wide range of creative and design abilities applied to digital products and projects of all kinds.',
    author: 'Jonatan Martinez',
    role: 'Senior Visual Designer',
  },
  {
    quote: 'An excellent Digital Art Director and UX/UI Designer with exceptional skills, a strong eye for visual design, and a deep understanding of user experience. A talented and collaborative.',
    author: 'Lourdes Valencia',
    role: 'Directora Creativa',
  },
]

const SOCIAL_LINKS = [
  { src: imgBehance, alt: 'Behance', href: 'https://www.behance.net/lur' },
  { src: imgInstagram, alt: 'Instagram', href: 'https://www.instagram.com/guerreroluciad/?hl=es-la' },
  { src: imgLinkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/luc%C3%ADa-guerrero-7b0591120/' },
]

// ─── Project Block (desktop) ─────────────────────────────────────────────────
// One "Onboarding / Reimagining Onboarding for Google Cloud / Google Cloud"
// row from the project list. Its own IntersectionObserver instance so each of
// the 3 blocks reveals independently as it scrolls into view, staggering its
// own three pieces (headline+side label / subtitle / closing rule) 0/100/200ms.

interface ProjectBlockData {
  shortLabel: string
  fullTitle: string
  sideLabel: string
  onClick: () => void
}

function ProjectBlock({ project, isLast }: { project: ProjectBlockData; isLast: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref}>
      <div className="px-[60px] flex justify-between items-center mt-[10px]" style={revealStyle(inView, 0)}>
        <a
          onClick={project.onClick}
          className="font-['Abhaya_Libre',serif] text-[180px] leading-none inline-block cursor-pointer no-underline whitespace-nowrap"
          style={{ color: '#ffffff', transition: 'color 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#2f2e29' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#ffffff' }}
        >
          {project.shortLabel}
        </a>
        <p className="font-['Abhaya_Libre',serif] text-[24px] text-[#2f2e29] shrink-0 ml-[40px]">{project.sideLabel}</p>
      </div>
      <p className="font-['Abhaya_Libre',serif] text-[36px] text-[#2f2e29] px-[60px]" style={revealStyle(inView, 100)}>{project.fullTitle}</p>
      {/* Only the last block keeps a closing line (into the testimonial
          section) — the lines that used to sit above Redesigning/AI +
          Creators are gone, kept as an invisible spacer so the vertical
          rhythm between blocks doesn't shift. */}
      <div className="h-px mx-[60px] mt-[24px]" style={{ ...revealStyle(inView, 200), backgroundColor: isLast ? '#C7BEB0' : 'transparent' }} />
    </div>
  )
}

// ─── Project Block (tablet) ──────────────────────────────────────────────────
// Same idea as the desktop ProjectBlock, but stacked (line / brand name /
// link / description / line) per the tablet-specific spec instead of the
// desktop's side-by-side link+brand layout.

function ProjectBlockTablet({ project, isLast }: { project: ProjectBlockData; isLast: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref}>
      {/* "See work"'s own divider is now the line above Onboarding, so no
          block renders its own opening line — kept as an invisible spacer
          so spacing doesn't shift. */}
      <div className="h-px mx-[30px] mt-[82px]" style={{ ...revealStyle(inView, 0), backgroundColor: 'transparent' }} />
      <p className="font-['Abhaya_Libre',serif] text-[24px] text-[#2f2e29] text-right px-[30px] mt-[5px]" style={revealStyle(inView, 0)}>
        {project.sideLabel}
      </p>
      <div className="px-[30px]" style={revealStyle(inView, 100)}>
        <a
          onClick={project.onClick}
          className="font-['Abhaya_Libre',serif] text-[128px] leading-none inline-block cursor-pointer no-underline"
          style={{ color: '#ffffff', transition: 'color 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#2f2e29' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#ffffff' }}
        >
          {project.shortLabel}
        </a>
      </div>
      <p className="font-['Abhaya_Libre',serif] text-[36px] text-[#2f2e29] px-[30px] mt-[48px]" style={revealStyle(inView, 100)}>{project.fullTitle}</p>
      {/* Only the last block keeps its closing line (into testimonials). */}
      <div className="h-px mx-[30px] mt-[8px]" style={{ ...revealStyle(inView, 200), backgroundColor: isLast ? '#C7BEB0' : 'transparent' }} />
    </div>
  )
}

// ─── Project Block (mobile) ──────────────────────────────────────────────────
// Same stacked layout as the tablet version, at the mobile-specific numbers.
// The link sits flush against the description (no gap was specced here,
// unlike tablet's explicit 48px) — per spec, values that aren't called out
// for mobile are left as-is rather than invented.

function ProjectBlockMobile({ project, isLast, topGap = 100 }: { project: ProjectBlockData; isLast: boolean; topGap?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref}>
      {/* "See work"'s own divider is now the line above Onboarding, so no
          block renders its own opening line — kept as an invisible spacer
          so spacing doesn't shift. */}
      <div className="h-px mx-[16px]" style={{ ...revealStyle(inView, 0), marginTop: topGap, backgroundColor: 'transparent' }} />
      <div className="px-[16px]" style={revealStyle(inView, 100)}>
        <a
          onClick={project.onClick}
          className="font-['Abhaya_Libre',serif] text-[64px] leading-none inline-block cursor-pointer no-underline"
          style={{ color: '#ffffff', transition: 'color 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#2f2e29' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#ffffff' }}
        >
          {project.shortLabel}
        </a>
      </div>
      <p className="font-['Abhaya_Libre',serif] text-[24px] text-[#2f2e29] px-[16px]" style={revealStyle(inView, 100)}>{project.fullTitle}</p>
      {/* Only the last block keeps its closing line (into testimonials).
          Gap below the description: 0px for Onboarding/Redesigning, 30px
          for AI + Creators (the last block). */}
      <div className="h-px mx-[16px]" style={{ ...revealStyle(inView, 200), marginTop: isLast ? 30 : 0, backgroundColor: isLast ? '#C7BEB0' : 'transparent' }} />
    </div>
  )
}

// ─── Home Page ───────────────────────────────────────────────────────────────

interface HomeProps {
  homeReady: boolean
  onWorkClick: () => void
  onAboutClick: () => void
  onCvClick: () => void
  onGoogleClick: () => void
  onElTiempoClick: () => void
  onYoutubeClick: () => void
}

export default function Home({ homeReady, onWorkClick, onAboutClick, onCvClick, onGoogleClick, onElTiempoClick, onYoutubeClick }: HomeProps) {
  const [headerHovered, setHeaderHovered] = useState(false)
  const [titleHovered, setTitleHovered] = useState(false)
  const isDesktop = useMinWidth(1024)
  const headerActive = isDesktop && headerHovered

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  // Scroll-triggered reveals for the below-the-fold desktop sections (the
  // hero above keeps its existing load-triggered slideStyle animation).
  const [seeWorkRef, seeWorkInView] = useInView<HTMLDivElement>()
  const [testimonialRef, testimonialInView] = useInView<HTMLDivElement>()
  const [contactRef, contactInView] = useInView<HTMLDivElement>()

  // Tablet has its own below-the-fold sections (separate DOM, separate
  // reveal state) with tablet-specific measurements — see the "BELOW THE
  // FOLD — TABLET" block below.
  const [seeWorkRefTablet, seeWorkInViewTablet] = useInView<HTMLDivElement>()
  const [testimonialRefTablet, testimonialInViewTablet] = useInView<HTMLDivElement>()
  const [contactRefTablet, contactInViewTablet] = useInView<HTMLDivElement>()

  // Mobile below-the-fold sections now follow the same structure/animations
  // as desktop and tablet (see the "BELOW THE FOLD — MOBILE" block below) —
  // own reveal state since it's a separate DOM subtree.
  const [seeWorkRefMobile, seeWorkInViewMobile] = useInView<HTMLDivElement>()
  const [testimonialRefMobile, testimonialInViewMobile] = useInView<HTMLDivElement>()
  const [contactRefMobile, contactInViewMobile] = useInView<HTMLDivElement>()

  // Home-exclusive sticky header: appears while scrolling down, hidden at
  // the very top. Unlike ScrollHeader, it has no "lucia" logo — only the
  // three nav links — since it only needs to exist on this page.
  const [homeScrolled, setHomeScrolled] = useState(false)
  const scrollRef = useScrollThreshold(40, setHomeScrolled)

  const slideStyle = (delay: number) =>
    homeReady
      ? {
          animation: `slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms both`,
        }
      : { opacity: 0 }

  const PROJECTS = [
    { shortLabel: 'Onboarding', fullTitle: 'Reimagining Onboarding for Google Cloud', sideLabel: 'Google Cloud', onClick: onGoogleClick },
    { shortLabel: 'Redesigning', fullTitle: 'Redesigning the El Tiempo Digital Experience', sideLabel: 'El Tiempo', onClick: onElTiempoClick },
    { shortLabel: 'AI + Creators', fullTitle: 'AI-Powered Search for YouTube Blog Creators', sideLabel: 'YouTube Blog', onClick: onYoutubeClick },
  ]

  return (
    <div ref={scrollRef} className="bg-[#e1dad0] relative w-full min-h-screen">
      {/* Home-exclusive sticky header — no logo, just the three nav links.
          Slides down over the original header while scrolling, hidden again
          at the very top. Matches ScrollHeader's h-[95px]/py-[10px] pattern
          and its transform/transition, but with a responsive gap between
          the links instead of justify-between (there's no logo to push
          apart from). */}
      <div
        className="fixed top-0 left-0 w-full z-30 h-[95px] overflow-hidden"
        style={{
          background: '#E1DAD0',
          transform: homeScrolled ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="flex justify-end items-center h-full px-4 md:px-[30px] lg:px-[60px] py-[10px] gap-6 md:gap-8 lg:gap-10">
          <button
            onClick={onWorkClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 text-[#302f2a]"
          >
            <p className="leading-[normal] mb-0">01.</p>
            <p className="leading-[normal]">Work</p>
          </button>
          <button
            onClick={onAboutClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 text-[#302f2a]"
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">About me</p>
          </button>
          <button
            onClick={onCvClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 text-[#302f2a]"
          >
            <p className="leading-[normal] mb-0">03.</p>
            <p className="leading-[normal]">CV / HV</p>
          </button>
        </div>
      </div>

      {/* ── HERO (first screen) ──────────────────────────────────────── */}
      <div className="relative w-full h-[630px] md:min-h-screen lg:h-screen">

        {/* Black hinge rectangle behind header — desktop hover only */}
        <div
          className="absolute left-0 w-full bg-[#2f2e29] pointer-events-none z-10"
          style={{
            top: '46px',
            height: '95px',
            transformOrigin: 'center center',
            transform: headerActive ? 'scaleY(1)' : 'scaleY(0)',
            transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        />

        {/* Header */}
        <div
          className="absolute top-[30px] lg:top-[50px] left-4 right-4 md:left-[30px] md:right-[30px] lg:left-[60px] lg:right-[60px] lg:h-[91px] z-20 cursor-pointer"
          style={slideStyle(0)}
          onMouseEnter={() => setHeaderHovered(true)}
          onMouseLeave={() => setHeaderHovered(false)}
        >
          <div className="content-stretch flex gap-0 justify-between w-full items-start relative lg:size-full">
            <div className="h-[37px] w-[70px] lg:h-[85px] lg:w-[159px] relative shrink-0">
              {/* dark logo — fades out on hover */}
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgFrame241}
                style={{ opacity: headerActive ? 0 : 1, transition: 'opacity 0.35s ease' }}
              />
              {/* white logo — fades in on hover */}
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgFrame241Hover}
                style={{ opacity: headerActive ? 1 : 0, transition: 'opacity 0.35s ease' }}
              />
            </div>
            <button
              onClick={onWorkClick}
              className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[73px] lg:w-[87px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 self-start"
              style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
            >
              <p className="leading-[normal] mb-0">01.</p>
              <p className="leading-[normal]">Work</p>
            </button>
            <button
              onClick={onAboutClick}
              className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 self-start"
              style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.3s' }}
            >
              <p className="leading-[normal] mb-0">02.</p>
              <p className="leading-[normal]">About me</p>
            </button>
            <button
              onClick={onCvClick}
              className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 self-start"
              style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.3s' }}
            >
              <p className="leading-[normal] mb-0">03.</p>
              <p className="leading-[normal]">CV / HV</p>
            </button>
          </div>
        </div>

        {/* Gif Flower */}
        <div
          className="absolute right-4 top-[60px] w-[209px] h-[242px] md:right-[48px] md:top-[108px] md:w-[377px] md:h-[476px] lg:left-auto lg:right-[47px] lg:top-[141px] lg:w-[518px] lg:h-[598px] home-gif-compact z-0"
          style={slideStyle(100)}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[139.3%] left-[-30.5%] max-w-none top-[-16.22%] w-[160.81%]" src={imgGifFlower} />
          </div>
        </div>

        {/* Title — mobile: "I'm" / logo / paragraph stacked */}
        <div className="absolute left-0 right-0 top-[254px] px-4 z-0 md:hidden" style={slideStyle(200)}>
          <p
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic text-[96px] -mb-[30px]"
            style={{ color: titleHovered ? '#2f2e29' : '#ffffff', transition: 'color 0.25s ease' }}
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}
          >
            I'm
          </p>
          <HomeLogo className="h-[129px] w-[372px] origin-bottom-left scale-[0.806] mb-[24px]" fill={titleHovered ? '#2f2e29' : '#ffffff'} />
          <p className="[word-break:break-word] font-['Abhaya_Libre',serif] not-italic text-[#302f2a] text-[24px] leading-[28px] mb-[70px]">
            Senior Product Designer specializing in the creation of intuitive digital experiences, interaction design, and user-centered interfaces.
          </p>
        </div>

        {/* Title — tablet/desktop: "I'm" + logo inline */}
        <div
          className="hidden md:block absolute left-[30px] right-[97px] top-[599px] lg:left-[60px] lg:right-auto lg:w-[1334px] lg:top-auto lg:bottom-[60px] lg:pb-[40px] z-0"
          style={slideStyle(200)}
        >
          <div className="content-stretch flex flex-col gap-[24px] items-start relative lg:size-full">
            <div
              className="content-stretch flex items-center relative shrink-0 w-full cursor-default"
              onMouseEnter={() => setTitleHovered(true)}
              onMouseLeave={() => setTitleHovered(false)}
            >
              <p
                className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic relative shrink-0 text-[110px] lg:text-[190px] lg:h-[119px] lg:w-[269px]"
                style={{ color: titleHovered ? '#2f2e29' : '#ffffff', transition: 'color 0.25s ease' }}
              >
                I'm
              </p>
              <HomeLogo className="relative shrink-0 md:h-[135px] md:w-[380px] lg:h-[201px] lg:w-[1334px]" fill={titleHovered ? '#2f2e29' : '#ffffff'} />
            </div>
            <p className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic relative shrink-0 text-[#302f2a] text-[36px] px-[16px] lg:px-0 lg:h-[90px] lg:w-[1323px] home-paragraph-wrap">
              Senior Product Designer specializing in the creation of intuitive digital experiences, interaction design, and user-centered interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* ── BELOW THE FOLD — DESKTOP (1024px+) ──────────────────────────── */}
      <div className="hidden lg:block relative w-full">

        {/* "See work" + divider, right after the hero — scroll-triggered */}
        <div ref={seeWorkRef}>
          <div className="px-[60px]" style={{ ...revealStyle(seeWorkInView, 0), marginTop: '-50px' }}>
            <button
              onClick={onWorkClick}
              className="font-['Abhaya_Libre',serif] text-[30px] text-[#2f2e29] bg-transparent border-none cursor-pointer p-0"
            >
              See work
            </button>
          </div>
          <div className="h-px bg-[#C7BEB0] mx-[60px] mt-[16px]" style={revealStyle(seeWorkInView, 100)} />
        </div>

        {/* Section 1: Project list — 3 repeated blocks, each its own scroll
            reveal (see ProjectBlock). Only the last block keeps its closing
            line (into testimonials) — no line between individual blocks. */}
        {PROJECTS.map((project, i) => (
          <ProjectBlock key={project.sideLabel} project={project} isLast={i === PROJECTS.length - 1} />
        ))}

        {/* Section 2: Testimonial carousel — one at a time, in a fixed spot;
            each entrance fades its color from #f1f1f1 up to black (no position
            movement between testimonials, per spec). Slide-up+fade-in is
            scroll-triggered once; the color fade re-plays on every auto-advance. */}
        <div ref={testimonialRef}>
          <div className="px-[60px] mt-[72px]">
            <div key={activeTestimonial}>
              <div className="max-w-[1100px] min-h-[340px]">
                <p
                  className="font-['Abhaya_Libre',serif] text-[64px] leading-[68px] text-left mb-[24px]"
                  style={{ ...revealStyle(testimonialInView, 0), animation: 'colorFadeToActive 1s ease both' }}
                >
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </p>
              </div>
              <p
                className="font-['Abhaya_Libre',serif] text-[30px] text-right"
                style={{ ...revealStyle(testimonialInView, 100), animation: 'colorFadeToActive 1s ease both' }}
              >
                {TESTIMONIALS[activeTestimonial].author} - {TESTIMONIALS[activeTestimonial].role}
              </p>
            </div>
          </div>
          <div className="h-px bg-[#C7BEB0] mx-[60px] mt-[24px]" style={revealStyle(testimonialInView, 200)} />
        </div>

        {/* Section 3: Contact — scroll-triggered */}
        <div ref={contactRef}>
          <div className="px-[60px] mt-[28px]" style={revealStyle(contactInView, 0)}>
            <a
              href="mailto:guerreroluciad@gmail.com"
              className="font-['Abhaya_Libre',serif] text-[180px] leading-none inline-flex items-center gap-[24px] cursor-pointer no-underline"
              style={{ color: '#ffffff', transition: 'color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#2f2e29' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#ffffff' }}
            >
              Contact me
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
                <path d="M22 12 L44 32 L22 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="px-[60px] mt-[20px] font-['Abhaya_Libre',serif] text-[36px] text-[#2f2e29]" style={revealStyle(contactInView, 100)}>
            Let&rsquo;s start by talking about what you&rsquo;re looking for.
          </p>
          <div className="px-[60px] mt-[24px] pb-[144px] flex gap-[34px] items-center" style={revealStyle(contactInView, 200)}>
            {SOCIAL_LINKS.map(({ src, alt, href }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="relative size-[63px] flex items-center justify-center no-underline">
                <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 63 63">
                  <circle cx="31.5" cy="31.5" fill="#E1DAD0" r="31" stroke="black" />
                </svg>
                <img src={src} alt={alt} className="relative z-10 w-[28px] h-[28px] object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BELOW THE FOLD — TABLET (768–1023px) ─────────────────────── */}
      <div className="hidden md:block lg:hidden relative w-full">

        {/* "See work" + divider, right after the hero — scroll-triggered.
            Its own divider is the line above Onboarding. */}
        <div ref={seeWorkRefTablet}>
          <div className="px-[30px] mt-[48px]" style={revealStyle(seeWorkInViewTablet, 0)}>
            <button
              onClick={onWorkClick}
              className="font-['Abhaya_Libre',serif] text-[16px] text-[#2f2e29] bg-transparent border-none cursor-pointer p-0"
            >
              See work
            </button>
          </div>
          <div className="h-px bg-[#C7BEB0] mx-[30px] mt-[16px]" style={revealStyle(seeWorkInViewTablet, 100)} />
        </div>

        {/* Section 1: Project list — 3 repeated blocks, tablet-specific
            sizing/stacking (see ProjectBlockTablet). Only the last block
            keeps its closing line — no line between individual blocks. */}
        {PROJECTS.map((project, i) => (
          <ProjectBlockTablet key={project.sideLabel} project={project} isLast={i === PROJECTS.length - 1} />
        ))}

        {/* Section 2: Testimonial carousel — same fixed-position color-fade
            behavior as desktop (no slide between testimonials), just
            tablet-specific type sizes. */}
        <div ref={testimonialRefTablet}>
          <div className="px-[30px] mt-[50px]">
            <div key={activeTestimonial}>
              <p
                className="font-['Abhaya_Libre',serif] text-[40px] leading-[43px] text-left mb-[24px]"
                style={{ ...revealStyle(testimonialInViewTablet, 0), animation: 'colorFadeToActive 1s ease both' }}
              >
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </p>
              <p
                className="font-['Abhaya_Libre',serif] text-[24px] text-right"
                style={{ ...revealStyle(testimonialInViewTablet, 100), animation: 'colorFadeToActive 1s ease both' }}
              >
                {TESTIMONIALS[activeTestimonial].author} - {TESTIMONIALS[activeTestimonial].role}
              </p>
            </div>
          </div>
          <div className="h-px bg-[#C7BEB0] mx-[30px] mt-[50px]" style={revealStyle(testimonialInViewTablet, 200)} />
        </div>

        {/* Section 3: Contact */}
        <div ref={contactRefTablet}>
          <div className="px-[30px] mt-[25px]" style={revealStyle(contactInViewTablet, 0)}>
            <a
              href="mailto:guerreroluciad@gmail.com"
              className="font-['Abhaya_Libre',serif] text-[128px] leading-none inline-flex items-center gap-[16px] cursor-pointer no-underline"
              style={{ color: '#ffffff', transition: 'color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#2f2e29' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#ffffff' }}
            >
              Contact me
              <svg width="44" height="44" viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
                <path d="M22 12 L44 32 L22 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="px-[30px] mt-[20px] font-['Abhaya_Libre',serif] text-[24px] text-[#2f2e29]" style={revealStyle(contactInViewTablet, 100)}>
            Let&rsquo;s start by talking about what you&rsquo;re looking for.
          </p>
          <div className="px-[30px] mt-[24px] pb-[144px] flex gap-[34px] items-center" style={revealStyle(contactInViewTablet, 200)}>
            {SOCIAL_LINKS.map(({ src, alt, href }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="relative size-[63px] flex items-center justify-center no-underline">
                <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 63 63">
                  <circle cx="31.5" cy="31.5" fill="#E1DAD0" r="31" stroke="black" />
                </svg>
                <img src={src} alt={alt} className="relative z-10 w-[28px] h-[28px] object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BELOW THE FOLD — MOBILE ───────────────────────────────────── */}
      <div className="block md:hidden relative w-full">

        {/* "See work" + divider, right after the hero — scroll-triggered.
            Its own divider is the line above Onboarding. */}
        <div ref={seeWorkRefMobile}>
          <div className="px-[16px] mt-[30px]" style={revealStyle(seeWorkInViewMobile, 0)}>
            <button
              onClick={onWorkClick}
              className="font-['Abhaya_Libre',serif] text-[16px] text-[#2f2e29] bg-transparent border-none cursor-pointer p-0"
            >
              See work
            </button>
          </div>
          <div className="h-px bg-[#C7BEB0] mx-[16px] mt-[16px]" style={revealStyle(seeWorkInViewMobile, 100)} />
        </div>

        {/* Section 1: Project list — same structure/animations as desktop
            and tablet (see ProjectBlockMobile), at the mobile-specific
            numbers. Only the last block keeps its closing line — no line
            between individual blocks. */}
        {PROJECTS.map((project, i) => (
          <ProjectBlockMobile
            key={project.sideLabel}
            project={project}
            isLast={i === PROJECTS.length - 1}
            topGap={i === 0 ? 18 : 11}
          />
        ))}

        {/* Section 2: Testimonial carousel — same fixed-position color-fade
            behavior as desktop/tablet (no flower, no numbers), mobile sizes. */}
        <div ref={testimonialRefMobile}>
          <div className="px-[16px] mt-[30px]">
            <div key={activeTestimonial}>
              <p
                className="font-['Abhaya_Libre',serif] text-[32px] leading-[35px] text-left mb-[24px]"
                style={{ ...revealStyle(testimonialInViewMobile, 0), animation: 'colorFadeToActive 1s ease both' }}
              >
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </p>
              <p
                className="font-['Abhaya_Libre',serif] text-[24px] text-right"
                style={{ ...revealStyle(testimonialInViewMobile, 100), animation: 'colorFadeToActive 1s ease both' }}
              >
                {TESTIMONIALS[activeTestimonial].author} - {TESTIMONIALS[activeTestimonial].role}
              </p>
            </div>
          </div>
          <div className="h-px bg-[#C7BEB0] mx-[16px] mt-[24px]" style={revealStyle(testimonialInViewMobile, 200)} />
        </div>

        {/* Section 3: Contact */}
        <div ref={contactRefMobile}>
          <div className="px-[16px] mt-[30px]" style={revealStyle(contactInViewMobile, 0)}>
            <a
              href="mailto:guerreroluciad@gmail.com"
              className="font-['Abhaya_Libre',serif] text-[64px] leading-none inline-flex items-center gap-[8px] cursor-pointer no-underline"
              style={{ color: '#ffffff', transition: 'color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#2f2e29' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#ffffff' }}
            >
              Contact me
              <svg width="22" height="22" viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
                <path d="M22 12 L44 32 L22 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="px-[16px] mt-[20px] font-['Abhaya_Libre',serif] text-[24px] text-[#2f2e29]" style={revealStyle(contactInViewMobile, 100)}>
            Let&rsquo;s start by talking about what you&rsquo;re looking for.
          </p>
          <div className="px-[16px] mt-[24px] pb-[144px] flex gap-[34px] items-center" style={revealStyle(contactInViewMobile, 200)}>
            {SOCIAL_LINKS.map(({ src, alt, href }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="relative size-[63px] flex items-center justify-center no-underline">
                <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 63 63">
                  <circle cx="31.5" cy="31.5" fill="#E1DAD0" r="31" stroke="black" />
                </svg>
                <img src={src} alt={alt} className="relative z-10 w-[28px] h-[28px] object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

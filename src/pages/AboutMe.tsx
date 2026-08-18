import { useEffect, useState } from 'react'
import ScrollHeader from '@/components/ScrollHeader'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import { useMinWidth } from '@/hooks/useMinWidth'
import imgFrame241Work from '@/imports/DesktopHover-4/c06761a7de8a442cd6a45db796d69e4fa8bd0961.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import imgAboutPhoto from '@/imports/DesktopAboutme/2374a50b71e04a0e2460af209bb50ed51f4da98c.png'
import imgBehance from '@/imports/DesktopAboutme/7b5f3ac2060e45fa16744de94a7a6a1402551d85.png'
import imgInstagram from '@/imports/DesktopAboutme/aa36fe66f91d4d474a7c3e64585689a25e85b055.png'
import imgLinkedin from '@/imports/DesktopAboutme/1ffea485ff3654e8e559fa09d1da866a76576b97.png'

interface AboutMeProps {
  aboutReady: boolean
  onWorkClick: () => void
  onLuciaClick: () => void
}

export default function AboutMe({ aboutReady, onWorkClick, onLuciaClick }: AboutMeProps) {
  const [aboutHeaderHovered, setAboutHeaderHovered] = useState(false)
  const [aboutScrolled, setAboutScrolled] = useState(false)
  const scrollRef = useScrollThreshold(40, setAboutScrolled)
  const isDesktop = useMinWidth(1024)
  const headerActive = isDesktop && aboutHeaderHovered

  // Once the entrance animation finishes, drop it so it stops pinning
  // opacity:1 and the scroll-based fade can actually take effect.
  const [headerAnimDone, setHeaderAnimDone] = useState(false)
  useEffect(() => {
    if (!aboutReady) return
    const t = setTimeout(() => setHeaderAnimDone(true), 850)
    return () => clearTimeout(t)
  }, [aboutReady])

  return (
    <div
      ref={scrollRef}
      className="bg-[#e1dad0] relative w-full min-h-screen overflow-y-auto"
    >

      {/* Black hinge rectangle behind about header — desktop hover only */}
      <div
        className="fixed left-0 w-full bg-[#2f2e29] pointer-events-none z-10"
        style={{
          top: '46px', height: '95px',
          transformOrigin: 'center center',
          transform: headerActive ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
          opacity: aboutScrolled ? 0 : 1,
        }}
      />

      {/* Header */}
      <div
        className="fixed inset-x-0 top-[30px] lg:top-[50px] lg:h-[91px] z-20 cursor-pointer px-4 md:px-[30px] lg:px-[60px]"
        onMouseEnter={() => setAboutHeaderHovered(true)}
        onMouseLeave={() => setAboutHeaderHovered(false)}
        style={{
          animation: aboutReady && !headerAnimDone ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0ms both' : undefined,
          opacity: aboutReady ? (aboutScrolled ? 0 : 1) : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: aboutScrolled ? 'none' : undefined,
        }}
      >
        <div className="content-stretch flex gap-0 justify-between w-full items-start relative lg:size-full">
          <button
            onClick={onLuciaClick}
            className="h-[37px] w-[70px] lg:h-[85px] lg:w-[159px] relative shrink-0 bg-transparent border-none p-0 cursor-pointer"
          >
            <img alt="lucia" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame241Work}
              style={{ opacity: headerActive ? 0 : 1, transition: 'opacity 0.35s ease' }} />
            <img alt="lucia" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgFrame241Hover}
              style={{ opacity: headerActive ? 1 : 0, transition: 'opacity 0.35s ease' }} />
          </button>
          <button
            onClick={onWorkClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[73px] lg:w-[87px] whitespace-pre-wrap self-start bg-transparent border-none cursor-pointer text-left p-0"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">01.</p>
            <p className="leading-[normal]">Work</p>
          </button>
          <div
            className="[word-break:break-word] font-['Abhaya_Libre',serif] font-bold leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap self-start"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">About me</p>
          </div>
        </div>
      </div>

      {/* Scroll header (slides down when scrolled) */}
      <ScrollHeader scrolled={aboutScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} background="#E1DAD0" />

      {/* "About me" large heading */}
      <p
        className="font-['Abhaya_Libre',serif] text-[64px] md:text-[100px] lg:text-[200px] text-white leading-normal pt-[76px] md:pt-[153px] lg:pt-[160px] pb-[20px] md:pb-[30px] lg:pb-0 px-4 md:px-[30px] lg:px-[60px] pointer-events-none text-center w-full"
        style={{ animation: aboutReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s both' : undefined, opacity: aboutReady ? undefined : 0 }}
      >
        About me
      </p>

      {/* Photo */}
      <div
        className="mx-auto w-[182px] h-[183px] lg:w-[322px] lg:h-[325px] overflow-hidden relative"
        style={{ animation: aboutReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.2s both' : undefined, opacity: aboutReady ? undefined : 0 }}
      >
        <img alt="Lucia" className="absolute h-[123.8%] left-0 max-w-none top-[-23.8%] w-full object-cover" src={imgAboutPhoto} />
      </div>

      {/* Bio text */}
      <div
        className="mx-auto w-full px-4 md:px-[30px] lg:px-0 lg:w-[658px] mt-[46px] mb-[46px] lg:mb-0 text-center font-['Abhaya_Libre',serif] text-[#302f2a] text-[24px] lg:text-[32px] leading-normal"
        style={{ animation: aboutReady ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0.3s both' : undefined, opacity: aboutReady ? undefined : 0 }}
      >
        <p className="mb-8">
          <strong>Hi, I'm Lucía.</strong> I design with craft, but I decide with evidence.
        </p>
        <p className="mb-8">
          I'm a <strong>Senior Product Designer</strong> with a foundation in graphic design and a career built around one specific instinct: reading a product's context before deciding how to approach it. No two products need the same strategy, and I've learned to notice that early instead of forcing a familiar solution onto an unfamiliar problem.
        </p>
        <p className="mb-8">
          That judgment is paired with a visual design background most product designers do not have: illustration, branding, photography, video, and motion. I bring genuine craft into my work, along with a natural pull toward consistency where a product genuinely needs to scale.
        </p>
        <p className="mb-8">
          I have defended a research-backed decision under real outside pressure and been proven right. Accessibility, prototyping, and dev handoff are where I am strongest, shaped by years of direct client work, presentations, and workshops. I am also actively expanding my use of AI in prototyping and research to keep pace with how this role continues to change.
        </p>
        <p className="mb-10">
          We can start the conversation here about what you want for your brand, or leave me a message at <strong>gerreroluciad@gmail.com</strong>
        </p>

        {/* Social links */}
        <div className="flex gap-[34px] items-center justify-center mb-16">
          {[
            { src: imgBehance, alt: 'Behance', href: 'https://www.behance.net/lur' },
            { src: imgInstagram, alt: 'Instagram', href: 'https://www.instagram.com/guerreroluciad/?hl=es-la' },
            { src: imgLinkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/luc%C3%ADa-guerrero-7b0591120/' },
          ].map(({ src, alt, href }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="relative size-[63px] flex items-center justify-center no-underline">
              <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 63 63">
                <circle cx="31.5" cy="31.5" fill="#E1DAD0" r="31" stroke="black" />
              </svg>
              <img src={src} alt={alt} className="relative z-10 w-[28px] h-[28px] object-contain" />
            </a>
          ))}
        </div>
      </div>

      {/* Pink decorative dots */}
      {[
        { left: 'calc(8.33% + 67px)', top: 873 }, { left: 'calc(16.67% + 64px)', top: 767 },
        { left: 'calc(16.67% + 64px)', top: 949 }, { left: 'calc(16.67% + 64px)', top: 863 },
        { left: 'calc(8.33% + 89px)', top: 980 }, { left: 'calc(75% + 7px)', top: 1212 },
        { left: 'calc(83.33% + 84px)', top: 1318 }, { left: 'calc(75% + 48px)', top: 1280 },
        { left: 'calc(83.33% + 20px)', top: 1372 }, { left: 'calc(75% + 18px)', top: 1372 },
        { left: 'calc(75% + 48px)', top: 1520 }, { left: 'calc(75% + 80px)', top: 1465 },
      ].map(({ left, top }, i) => (
        <div key={i} className="absolute size-[22px] pointer-events-none hidden lg:block" style={{ left, top }}>
          <svg className="size-full" fill="none" viewBox="0 0 22 22">
            <circle cx="11" cy="11" fill="#F8C1CA" r="11" />
          </svg>
        </div>
      ))}
    </div>
  )
}

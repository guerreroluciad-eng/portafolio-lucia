import { useState } from 'react'
import svgPaths from '@/imports/DesktopHome/svg-uri4v7r54i'
import imgFrame241 from '@/imports/logo5.png'
import imgPortrait from '@/imports/DesktopHome/0ebcef0a8e9c8f8ba55d004f48e69fa0ca22e4d3.png'
import imgGifFlower from '@/imports/DesktopHome-9/195b5c5b76a94118161174be63dc0b14987e854c.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'
import { useMinWidth } from '@/hooks/useMinWidth'

// ─── Home Logo ───────────────────────────────────────────────────────────────

function HomeLogo({ className, fill = '#302f2a' }: { className?: string; fill?: string }) {
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

// ─── Home Page ───────────────────────────────────────────────────────────────

interface HomeProps {
  homeReady: boolean
  onWorkClick: () => void
  onAboutClick: () => void
}

export default function Home({ homeReady, onWorkClick, onAboutClick }: HomeProps) {
  const [headerHovered, setHeaderHovered] = useState(false)
  const [titleHovered, setTitleHovered] = useState(false)
  const isDesktop = useMinWidth(1024)
  const headerActive = isDesktop && headerHovered

  const slideStyle = (delay: number) =>
    homeReady
      ? {
          animation: `slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms both`,
        }
      : { opacity: 0 }

  return (
    <div className="bg-[#e1dad0] relative w-full min-h-screen">

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
        </div>
      </div>

      {/* Gif Flower */}
      <div
        className="absolute right-4 top-[52px] w-[209px] h-[242px] md:right-[48px] md:top-[108px] md:w-[377px] md:h-[476px] lg:left-auto lg:right-[47px] lg:top-[141px] lg:w-[518px] lg:h-[598px] z-0"
        style={slideStyle(100)}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[139.3%] left-[-30.5%] max-w-none top-[-16.22%] w-[160.81%]" src={imgGifFlower} />
        </div>
      </div>

      {/* Title — mobile: "I'm" / logo / paragraph stacked */}
      <div className="absolute left-0 right-0 top-[337px] px-4 z-0 md:hidden" style={slideStyle(200)}>
        <p
          className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic text-[96px] -mb-[30px]"
          style={{ color: titleHovered ? '#2f2e29' : '#ffffff', transition: 'color 0.25s ease' }}
          onMouseEnter={() => setTitleHovered(true)}
          onMouseLeave={() => setTitleHovered(false)}
        >
          I'm
        </p>
        <HomeLogo className="h-[129px] w-[372px] origin-bottom-left scale-[0.806] mb-[24px]" fill={titleHovered ? '#2f2e29' : '#ffffff'} />
        <p className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic text-[#302f2a] text-[16px] mb-[70px]">
          Senior Product Designer specializing in the creation of intuitive digital experiences, interaction design, and user-centered interfaces.
        </p>
      </div>

      {/* Title — tablet/desktop: "I'm" + logo inline */}
      <div
        className="hidden md:block absolute left-[30px] right-[97px] top-[599px] lg:left-[60px] lg:right-auto lg:w-[1334px] lg:top-[530px] lg:pb-[40px] z-0"
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
          <p className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[normal] not-italic relative shrink-0 text-[#302f2a] text-[36px] px-[16px] lg:px-0 lg:h-[90px] lg:w-[1323px]">
            Senior Product Designer specializing in the creation of intuitive digital experiences, interaction design, and user-centered interfaces.
          </p>
        </div>
      </div>
    </div>
  )
}

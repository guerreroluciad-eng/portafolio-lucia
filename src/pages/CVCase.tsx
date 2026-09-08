import { useEffect, useState } from 'react'
import ScrollHeader from '@/components/ScrollHeader'
import ProjectContact from '@/components/ProjectContact'
import LanguageSwitch from '@/components/LanguageSwitch'
import { useScrollThreshold } from '@/hooks/useScrollThreshold'
import { useMinWidth } from '@/hooks/useMinWidth'
import { useLanguage } from '@/i18n/LanguageContext'
import { HomeLogo } from '@/pages/Home'
import imgFrame241Work from '@/imports/DesktopHover-4/c06761a7de8a442cd6a45db796d69e4fa8bd0961.png'
import imgFrame241Hover from '@/imports/DesktopHover-3/aab7bd2528fca558339289f043abd5043daa8e13.png'

// ─── CV Page ─────────────────────────────────────────────────────────────────
// Résumé / hoja de vida page. Follows the same header/hover/scroll conventions
// as AboutMe (own inline fading header + ScrollHeader on scroll), on its own
// background (#EBE9E6).

interface CVCaseProps {
  cvReady: boolean
  onWorkClick: () => void
  onAboutClick: () => void
  onLuciaClick: () => void
}

function CvSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Abhaya_Libre',serif] text-[28px] md:text-[36px] lg:text-[40px] text-[#302f2a] mb-[24px] md:mb-[28px] w-full">
      {children}
    </p>
  )
}

function CvBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-[10px] font-['Abhaya_Libre',serif] text-[16px] md:text-[18px] leading-normal text-[#302f2a] w-full">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

function CvExperienceEntry({ period, title, bullets }: { period: string; title: string; bullets: string[] }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-end gap-[8px] md:gap-[32px] lg:gap-[48px] w-full mb-[40px] last:mb-0">
      <p
        className="font-['Abhaya_Libre',serif] text-[16px] md:text-[18px] shrink-0 md:w-[130px] lg:w-[150px] md:text-right"
        style={{ color: 'rgba(48,47,42,0.5)' }}
      >
        {period}
      </p>
      <div className="w-full md:w-[480px] lg:w-[560px]">
        <p className="font-['Abhaya_Libre',serif] font-bold text-[17px] md:text-[19px] leading-snug mb-[10px] text-[#302f2a]">
          {title}
        </p>
        <CvBulletList items={bullets} />
      </div>
    </div>
  )
}

function CvToolsCategory({ label, value }: { label: string; value: string }) {
  return (
    <div className="w-full mb-[20px] last:mb-0">
      <p className="font-['Abhaya_Libre',serif] font-bold text-[17px] md:text-[19px] text-[#302f2a] mb-[4px]">{label}</p>
      <p className="font-['Abhaya_Libre',serif] text-[16px] md:text-[18px] leading-normal text-[#302f2a]">{value}</p>
    </div>
  )
}

export default function CVCase({ cvReady, onWorkClick, onAboutClick, onLuciaClick }: CVCaseProps) {
  const [cvHeaderHovered, setCvHeaderHovered] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const [cvScrolled, setCvScrolled] = useState(false)
  const scrollRef = useScrollThreshold(40, setCvScrolled)
  const isDesktop = useMinWidth(1024)
  const headerActive = isDesktop && cvHeaderHovered

  const { t } = useLanguage()

  // Once the entrance animation finishes, drop it so it stops pinning
  // opacity:1 and the scroll-based fade can actually take effect.
  const [headerAnimDone, setHeaderAnimDone] = useState(false)
  useEffect(() => {
    if (!cvReady) return
    const timer = setTimeout(() => setHeaderAnimDone(true), 850)
    return () => clearTimeout(timer)
  }, [cvReady])

  const fadeIn = (delay: number) => ({
    animation: cvReady ? `slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms both` : undefined,
    opacity: cvReady ? undefined : 0,
  })

  return (
    <div
      ref={scrollRef}
      className="relative w-full min-h-screen overflow-y-auto"
      style={{ background: '#EBE9E6' }}
    >
      {/* Black hinge rectangle behind header — desktop hover only */}
      <div
        className="fixed left-0 w-full bg-[#2f2e29] pointer-events-none z-10"
        style={{
          top: '46px', height: '95px',
          transformOrigin: 'center center',
          transform: headerActive ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
          opacity: cvScrolled ? 0 : 1,
        }}
      />

      {/* Header */}
      <div
        className="fixed inset-x-0 top-[30px] lg:top-[50px] lg:h-[91px] z-20 cursor-pointer px-4 md:px-[30px] lg:px-[60px]"
        onMouseEnter={() => setCvHeaderHovered(true)}
        onMouseLeave={() => setCvHeaderHovered(false)}
        style={{
          animation: cvReady && !headerAnimDone ? 'slideUpFade 0.85s cubic-bezier(0.16,1,0.3,1) 0ms both' : undefined,
          opacity: cvReady ? (cvScrolled ? 0 : 1) : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: cvScrolled ? 'none' : undefined,
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
            <p className="leading-[normal]">{t.nav.work}</p>
          </button>
          <button
            onClick={onAboutClick}
            className="[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap self-start bg-transparent border-none cursor-pointer text-left p-0"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">02.</p>
            <p className="leading-[normal]">{t.nav.aboutMe}</p>
          </button>
          <div
            className="[word-break:break-word] font-['Abhaya_Libre',serif] font-bold leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap self-start"
            style={{ color: headerActive ? 'white' : '#302f2a', transition: 'color 0.35s ease' }}
          >
            <p className="leading-[normal] mb-0">03.</p>
            <p className="leading-[normal]">{t.nav.cv}</p>
          </div>
          <LanguageSwitch active={headerActive} className="self-start" />
        </div>
      </div>

      {/* Scroll header (slides down when scrolled) */}
      <ScrollHeader scrolled={cvScrolled} onLuciaClick={onLuciaClick} onWorkClick={onWorkClick} onAboutClick={onAboutClick} background="#EBE9E6" />

      {/* Page content */}
      <div className="pt-[110px] md:pt-[160px] lg:pt-[180px] pb-[120px] flex flex-col items-center px-4 md:px-[30px] lg:px-0">

        {/* Logo + location + title */}
        <div className="flex flex-col items-center mb-[48px] md:mb-[56px]" style={fadeIn(0)}>
          {/* HomeLogo's own box is a fixed natural 372x129 size, only ever visually
              resized via a `scale()` transform — so it's cropped to a smaller wrapper
              box (sized to exactly match the scaled output) rather than resized via
              width/height classes on the component itself, which have no visual effect. */}
          <div
            className="w-[149px] h-[52px] md:w-[167px] md:h-[58px] lg:w-[205px] lg:h-[71px] overflow-hidden relative mb-[16px] cursor-default"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <HomeLogo className="h-[129px] w-[372px] origin-top-left scale-[0.4] md:scale-[0.45] lg:scale-[0.55]" fill={logoHovered ? '#2f2e29' : '#ffffff'} />
          </div>
          <p className="font-['Abhaya_Libre',serif] text-[18px] md:text-[20px] text-[#302f2a] text-center">{t.cv.location}</p>
          <p className="font-['Abhaya_Libre',serif] text-[18px] md:text-[20px] text-[#302f2a] text-center">{t.cv.title}</p>
        </div>

        {/* Overview bullets */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(80)}>
          <CvBulletList items={t.cv.overview} />
        </div>

        {/* Work experience */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(140)}>
          <CvSectionHeading>{t.cv.workExperienceHeading}</CvSectionHeading>

          <CvExperienceEntry
            period={t.cv.experience1.period}
            title={t.cv.experience1.title}
            bullets={t.cv.experience1.bullets}
          />

          <CvExperienceEntry
            period={t.cv.experience2.period}
            title={t.cv.experience2.title}
            bullets={t.cv.experience2.bullets}
          />
        </div>

        {/* More experience */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(180)}>
          <CvSectionHeading>{t.cv.moreExperienceHeading}</CvSectionHeading>
          <p className="font-['Abhaya_Libre',serif] text-[16px] md:text-[18px] leading-normal text-[#302f2a] mb-[16px]">
            {t.cv.moreExperienceP1}
          </p>
          <p className="font-['Abhaya_Libre',serif] text-[16px] md:text-[18px] leading-normal text-[#302f2a]">
            {t.cv.moreExperienceP2}
          </p>
        </div>

        {/* Tools */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(220)}>
          <CvSectionHeading>{t.cv.toolsHeading}</CvSectionHeading>
          <CvToolsCategory label={t.cv.toolsProductDesignLabel} value={t.cv.toolsProductDesignValue} />
          <CvToolsCategory label={t.cv.toolsPlatformsLabel} value={t.cv.toolsPlatformsValue} />
          <CvToolsCategory label={t.cv.toolsAiLabel} value={t.cv.toolsAiValue} />
          <CvToolsCategory label={t.cv.toolsLeadershipLabel} value={t.cv.toolsLeadershipValue} />
        </div>

        {/* Education */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(260)}>
          <CvSectionHeading>{t.cv.educationHeading}</CvSectionHeading>
          <CvBulletList items={t.cv.education} />
        </div>

        {/* Certifications */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(300)}>
          <CvSectionHeading>{t.cv.certificationsHeading}</CvSectionHeading>
          <CvBulletList items={t.cv.certifications} />
        </div>

        {/* Languages */}
        <div className="w-full max-w-[560px] lg:max-w-[700px] mb-[64px] md:mb-[80px]" style={fadeIn(340)}>
          <CvSectionHeading>{t.cv.languagesHeading}</CvSectionHeading>
          <p className="font-['Abhaya_Libre',serif] text-[16px] md:text-[18px] leading-normal text-[#302f2a]">
            {t.cv.languagesValue}
          </p>
        </div>

        <div style={fadeIn(380)}>
          <ProjectContact />
        </div>
      </div>
    </div>
  )
}

import { useLanguage } from '@/i18n/LanguageContext'

// ─── Language Switch ─────────────────────────────────────────────────────────
// The fourth header nav item, right after "03. CV" — same two-line "04." +
// label pattern as the other nav buttons. Shows the language you can switch
// TO (site in English → button reads "Esp", and vice versa), so it always
// reads as an action, not a status indicator. Shared across every header
// (ProjectHeader, ScrollHeader, and the inline headers on Home/Work/
// AboutMe/CV) so the toggle behaves identically everywhere.

interface LanguageSwitchProps {
  /** Dark-background pages (e.g. Maestro) need the label to stay light. */
  dark?: boolean
  /** Desktop hover-hinge state — same white-on-dark-hinge treatment as the other nav items. */
  active?: boolean
  className?: string
}

export default function LanguageSwitch({ dark = false, active = false, className = '' }: LanguageSwitchProps) {
  const { lang, toggleLang } = useLanguage()
  const label = lang === 'en' ? 'Esp' : 'Eng'

  return (
    <button
      onClick={toggleLang}
      className={`[word-break:break-word] font-['Abhaya_Libre',serif] leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[24px] lg:h-[72px] lg:w-[152px] whitespace-pre-wrap bg-transparent border-none cursor-pointer text-left p-0 ${className}`}
      style={{ color: dark ? 'white' : (active ? 'white' : '#302f2a'), transition: 'color 0.35s ease' }}
    >
      <p className="leading-[normal] mb-0">04.</p>
      <p className="leading-[normal]">{label}</p>
    </button>
  )
}

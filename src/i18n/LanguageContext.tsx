import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Language } from './translations'

// ─── Language Context ───────────────────────────────────────────────────────
// Site-wide EN/ES switch. Preference persists in localStorage so it survives
// reloads and repeat visits. `t` is the resolved translations object for the
// current language — components read `useLanguage().t.home.seeWork` etc.
// instead of hardcoding copy.

const STORAGE_KEY = 'lucia-portfolio-lang'

interface LanguageContextValue {
  lang: Language
  toggleLang: () => void
  t: (typeof translations)['en']
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function readStoredLang(): Language {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'es' || stored === 'en' ? stored : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Private browsing / storage disabled — preference just won't persist.
    }
  }, [lang])

  function toggleLang() {
    setLang(current => (current === 'en' ? 'es' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

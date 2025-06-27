'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

import type { Language } from '@/app/store/languageStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

const languages: { code: Language; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore()
  const t = translations[language]

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex].code)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="rounded-lg !p-1.5 text-[#D72638] !shadow-none transition-all duration-200 hover:bg-[#FFF6F6]/50 hover:text-[#D72638] focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none sm:!p-2 dark:text-[#FFF5E1] dark:hover:bg-[#232323]/50 dark:hover:text-[#FFF5E1]"
      aria-label={t.language.select}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: language === 'en' ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-4 w-4">
        <motion.div
          initial={false}
          animate={{ opacity: language === 'de' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Globe className="h-4 w-4" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: language === 'en' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Globe className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.button>
  )
}

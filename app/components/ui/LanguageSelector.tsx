'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { Language } from '@/app/store/languageStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

const languages: { code: Language; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguageStore()
  const t = translations[language]

  // Handle click outside to close menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-xl p-2 text-[#D72638] transition-all duration-200 hover:bg-[#FFF6F6] focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none dark:text-gray-300 dark:hover:bg-[#232323]"
        aria-label={t.language.select}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-24 rounded-2xl bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] p-2 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] dark:from-[#232323] dark:to-[#1A1A1A] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
            role="menu"
            aria-label={t.language.select}
          >
            <div className="flex flex-col gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    language === lang.code
                      ? 'bg-[#c60627] text-white shadow-[inset_4px_4px_8px_#a00520,_inset_-4px_-4px_8px_#e6072e] dark:bg-[#EE0A24] dark:shadow-[inset_4px_4px_8px_#c0091e,_inset_-4px_-4px_8px_#ff0b2a]'
                      : 'bg-[#FFF6F6] text-gray-700 shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] dark:bg-[#232323] dark:text-gray-300 dark:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a] dark:hover:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]'
                  }`}
                  role="menuitemradio"
                  aria-checked={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

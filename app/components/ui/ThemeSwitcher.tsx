'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'
  const { language } = useLanguageStore()
  const t = translations[language]

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <motion.button
      aria-label={isDark ? t.theme.light : t.theme.dark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
      className="rounded-lg !p-1.5 text-[#D72638] !shadow-none transition-all duration-200 hover:bg-[#FFF6F6]/50 hover:text-[#D72638] focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none sm:!p-2 dark:text-[#FFF5E1] dark:hover:bg-[#232323]/50 dark:hover:text-[#FFF5E1]"
      whileTap={{ scale: 0.92 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="block"
          >
            <Sun size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="block"
          >
            <Moon size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

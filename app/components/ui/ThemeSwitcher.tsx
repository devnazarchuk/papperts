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
      className="ml-2 rounded-xl p-2 shadow-md transition focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none"
      style={{
        background: isDark
          ? 'linear-gradient(145deg, #3A3A3A, #1A1A1A)'
          : 'linear-gradient(145deg, #FFF5E1, #FFE2E2)',
      }}
      animate={{
        background: isDark
          ? 'linear-gradient(145deg, #3A3A3A, #1A1A1A)'
          : 'linear-gradient(145deg, #FFF5E1, #FFE2E2)',
      }}
      transition={{ duration: 0.5 }}
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
            className="block text-[#FFF5E1]"
          >
            <Sun size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="block text-[#D72638]"
          >
            <Moon size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

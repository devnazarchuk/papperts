'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Contrast, Settings, Type } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { useAccessibilityStore } from '@/app/store/accessibilityStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export function AccessibilitySettings() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { fontSize, contrastMode, setFontSize, setContrastMode } = useAccessibilityStore()
  const { language } = useLanguageStore()
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

  // Apply font size changes
  useEffect(() => {
    const root = document.documentElement
    switch (fontSize) {
      case 'medium':
        root.style.fontSize = '1.25rem'
        break
      case 'large':
        root.style.fontSize = '1.5rem'
        break
      default:
        root.style.fontSize = '1rem'
    }
  }, [fontSize])

  // Apply contrast mode
  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrastMode === 'high')
  }, [contrastMode])

  // Handle setting changes
  const handleFontSizeChange = (size: 'normal' | 'medium' | 'large') => {
    setFontSize(size)
    setIsOpen(false) // Close menu after selection
  }

  const handleContrastModeChange = () => {
    setContrastMode(contrastMode === 'normal' ? 'high' : 'normal')
    setIsOpen(false) // Close menu after selection
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-xl p-2 text-[#D72638] transition-all duration-200 hover:bg-[#FFF6F6] focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none dark:text-gray-300 dark:hover:bg-[#232323]"
        aria-label={t.accessibility.settings}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Settings className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[calc(50%+40px)] right-0 left-0 z-50 mx-auto w-full max-w-[320px] -translate-y-1/2 transform rounded-2xl bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] p-4 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] sm:absolute sm:top-full sm:right-0 sm:left-auto sm:mt-2 sm:w-72 sm:translate-y-0 dark:from-[#232323] dark:to-[#1A1A1A] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
            role="menu"
            aria-label={t.accessibility.settings}
          >
            <div className="space-y-4">
              {/* Font Size Settings */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  <Type className="h-4 w-4" />
                  {t.accessibility.fontSize.title}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleFontSizeChange('normal')}
                    className={`flex-1 rounded-lg px-3 py-1.5 text-sm ${
                      fontSize === 'normal'
                        ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                        : 'text-[#3A3A3A] hover:bg-[#FFF6F6] dark:text-[#FAD2E1] dark:hover:bg-[#232323]'
                    }`}
                  >
                    {t.accessibility.fontSize.normal}
                  </button>
                  <button
                    onClick={() => handleFontSizeChange('medium')}
                    className={`flex-1 rounded-lg px-3 py-1.5 text-sm ${
                      fontSize === 'medium'
                        ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                        : 'text-[#3A3A3A] hover:bg-[#FFF6F6] dark:text-[#FAD2E1] dark:hover:bg-[#232323]'
                    }`}
                  >
                    {t.accessibility.fontSize.medium}
                  </button>
                  <button
                    onClick={() => handleFontSizeChange('large')}
                    className={`flex-1 rounded-lg px-3 py-1.5 text-sm ${
                      fontSize === 'large'
                        ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                        : 'text-[#3A3A3A] hover:bg-[#FFF6F6] dark:text-[#FAD2E1] dark:hover:bg-[#232323]'
                    }`}
                  >
                    {t.accessibility.fontSize.large}
                  </button>
                </div>
              </div>

              {/* Contrast Mode */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  <Contrast className="h-4 w-4" />
                  {t.accessibility.contrast.title}
                </h3>
                <button
                  onClick={handleContrastModeChange}
                  className={`w-full rounded-lg px-3 py-1.5 text-sm ${
                    contrastMode === 'high'
                      ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                      : 'text-[#3A3A3A] hover:bg-[#FFF6F6] dark:text-[#FAD2E1] dark:hover:bg-[#232323]'
                  }`}
                >
                  {contrastMode === 'high'
                    ? t.accessibility.contrast.high
                    : t.accessibility.contrast.normal}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

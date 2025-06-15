'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

import { AccessibilitySettings } from '../ui/AccessibilitySettings'
import { LanguageSelector } from '../ui/LanguageSelector'
import { ThemeSwitcher } from '../ui/ThemeSwitcher'
import { DesktopNav } from './DesktopNav'
import { MobileMenu } from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FFD6D6]/20 bg-gradient-to-b from-[#FFF5E1]/95 to-[#FFE2E2]/95 pt-2 pb-2 backdrop-blur-xl dark:border-[#333]/20 dark:from-[#232323]/95 dark:to-[#1A1A1A]/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label={t.header.home}
            className="flex min-w-0 flex-shrink-0 items-center gap-2 rounded-xl transition-transform hover:scale-105 focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none"
          >
            <Image
              src="/icons/logo.png"
              alt="Papperts Logo"
              width={90}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          <DesktopNav />

          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 rounded-lg bg-[#FFF6F6]/50 p-1 backdrop-blur-sm dark:bg-[#232323]/50">
              <AccessibilitySettings />
              <ThemeSwitcher />
              <LanguageSelector />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="ml-1 rounded-lg bg-[#FFF6F6]/50 p-1.5 text-[#D72638] backdrop-blur-sm transition hover:scale-105 focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none sm:hidden dark:bg-[#232323]/50 dark:text-[#FFF5E1]"
              aria-label={t.header.menuOpen}
              type="button"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

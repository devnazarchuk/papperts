'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

import { AccessibilitySettings } from '../ui/AccessibilitySettings'
// import { LanguageSelector } from '../ui/LanguageSelector'
import { ThemeSwitcher } from '../ui/ThemeSwitcher'
import { DesktopNav } from './DesktopNav'
import { MobileMenu } from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <header
      className="sticky top-0 z-50 w-full rounded-b-2xl border-b-2 border-[#FFD6D6] bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] backdrop-blur-md dark:border-[#333] dark:from-[#232323] dark:to-[#1A1A1A] dark:shadow-[var(--tw-inset-shadow),6px_6px_12px_var(--tw-shadow-color,_#4c4646),_-6px_-6px_12px_var(--tw-shadow-color,_#342f2f)]"
      // Neumorphism: custom shadow for dark mode, with inset support
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between whitespace-nowrap">
          {/* Logo as link */}
          <Link
            href="/"
            aria-label={t.header.home}
            className="flex min-w-0 flex-shrink-0 items-center gap-2 rounded-xl focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none"
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
          {/* Desktop Navigation */}
          <DesktopNav />
          {/* Right controls */}
          <div className="ml-2 flex flex-shrink-0 items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <AccessibilitySettings />
              {/* <LanguageSelector /> */}
              <ThemeSwitcher />
            </div>
            {/* Mobile menu button: only show on mobile, always right-aligned, styled as in MobileMenu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="ml-2 rounded-xl bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] p-2 text-[#D72638] shadow-md transition hover:scale-105 focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none sm:hidden dark:from-[#3A3A3A] dark:to-[#1A1A1A] dark:text-[#FFF5E1]"
              aria-label={t.header.menuOpen}
              type="button"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

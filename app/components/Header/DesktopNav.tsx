'use client'

import { usePathname } from 'next/navigation'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

import { NavButton } from '../../components/ui/NavButton'

export function DesktopNav() {
  const pathname = usePathname()
  const { language } = useLanguageStore()
  const t = translations[language]

  const navLinks = [
    { name: t.nav.about, href: '/about' },
    { name: t.nav.careers, href: '/careers' },
    { name: t.nav.services, href: '/services' },
  ]

  return (
    <div
      className="hidden items-center gap-x-2 whitespace-nowrap sm:flex md:gap-x-4 lg:gap-x-8"
      style={{ minWidth: 0 }}
    >
      {navLinks.map((link) => (
        <NavButton
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? 'page' : undefined}
          className={`truncate px-2 py-1 text-sm font-semibold sm:px-2 sm:py-1 md:px-3 md:py-1.5 md:text-base lg:px-5 lg:py-2 lg:text-lg ${
            pathname === link.href
              ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
              : ''
          }`}
        >
          {link.name}
        </NavButton>
      ))}
    </div>
  )
}

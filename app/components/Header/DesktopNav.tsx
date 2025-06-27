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
      className="hidden items-center gap-x-1 whitespace-nowrap sm:flex md:gap-x-2 lg:gap-x-4"
      style={{ minWidth: 0 }}
    >
      {navLinks.map((link) => (
        <NavButton
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? 'page' : undefined}
          className={`text-m truncate rounded-md px-2.5 py-1 font-medium transition-all duration-200 hover:bg-[#FFF6F6]/50 hover:text-[#D72638] dark:hover:bg-[#232323]/50 dark:hover:text-[#FFF5E1] ${
            pathname === link.href
              ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
              : 'text-[#3A3A3A] dark:text-[#FAD2E1]'
          }`}
        >
          {link.name}
        </NavButton>
      ))}
    </div>
  )
}

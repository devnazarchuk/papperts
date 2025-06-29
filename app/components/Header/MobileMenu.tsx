'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

import { Portal } from '../../../components/ui/Portal'
import { NavButton } from '../../components/ui/NavButton'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const { language } = useLanguageStore()
  const t = translations[language]

  const navLinks = [
    {
      name: t.nav.about,
      href: '/about',
      icon: '/icons/history.png',
      desc: t.nav.aboutDesc,
    },
    {
      name: t.nav.careers,
      href: '/careers',
      icon: '/icons/cooker.png',
      desc: t.nav.careersDesc,
    },
    {
      name: t.nav.services,
      href: '/services',
      icon: '/icons/app-gift.png',
      desc: t.nav.servicesDesc,
    },
  ]

  return (
    <div className="sm:hidden" ref={ref}>
      {/* <button
        aria-label={isOpen ? t.header.menuClose : t.header.menuOpen}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-dropdown"
        onClick={onClose}
        className="rounded-xl bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] p-2 text-[#D72638] shadow-md transition hover:scale-105 focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none dark:from-[#3A3A3A] dark:to-[#1A1A1A] dark:text-[#FFF5E1]"
        type="button"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button> */}
      <AnimatePresence>
        {isOpen && (
          <Portal>
            {/* Backdrop and Fullscreen Card Menu rendered in Portal for global overlay */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={onClose}
              aria-hidden="true"
            />
            <motion.nav
              key="menu"
              id="mobile-menu-dropdown"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 32 }}
              className="fixed inset-0 z-50 flex h-[100vh] w-full flex-col items-center justify-center gap-8 overscroll-contain bg-[#FFF6F6]/95 p-6 backdrop-blur-xl dark:bg-[#232323]/95"
              aria-label="Mobile Navigation"
              aria-modal="true"
              tabIndex={-1}
              style={{ touchAction: 'manipulation' }}
            >
              <button
                onClick={onClose}
                aria-label={t.header.menuClose}
                className="!dark:bg-[#232323]/50 !dark:text-[#FFF5E1] !dark:hover:bg-[#232323]/70 absolute top-6 right-6 rounded-xl !bg-[#FFF6F6]/50 p-2 !text-[#D72638] backdrop-blur-sm transition-all duration-200 hover:bg-[#FFF6F6]/70 focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none"
              >
                <X size={24} />
              </button>
              <div className="flex w-full max-w-lg flex-col items-center justify-center gap-5 px-1 sm:px-0">
                {navLinks.map((item) => (
                  <NavButton
                    key={item.name}
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="mx-auto flex w-full max-w-[320px] min-w-0 flex-col items-center justify-center gap-3 rounded-[28px] bg-[#FFF6F6]/50 px-2 py-6 text-[#c60627] backdrop-blur-sm transition-all duration-200 hover:bg-[#FFF6F6]/70 sm:max-w-xs sm:gap-4 sm:px-4 sm:py-8 dark:bg-[#232323]/50 dark:text-[#FFA5A5] dark:hover:bg-[#232323]/70"
                    onClick={onClose}
                  >
                    <div
                      className="flex w-full min-w-0 flex-col items-center"
                      style={{
                        fontFamily:
                          'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                        minHeight: 160,
                        wordBreak: 'break-word',
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={70}
                        height={70}
                        className="rounded-full bg-[#FFF5E1]/50 p-2 backdrop-blur-sm dark:bg-[#232323]/50"
                      />
                      <span
                        className="mt-2 mb-1 text-center text-xl font-bold break-words"
                        style={{ color: '#c60627' }}
                      >
                        {item.name}
                      </span>
                      <span className="text-center text-base break-words text-[#3A3A3A] dark:text-[#FAD2E1]">
                        {item.desc}
                      </span>
                    </div>
                  </NavButton>
                ))}
              </div>
            </motion.nav>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  )
}

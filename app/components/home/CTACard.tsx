'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useRef } from 'react'

import { useAccessibilityStore } from '@/app/store/accessibilityStore'
import { useLanguageStore } from '@/app/store/languageStore'

interface CTACardProps {
  title: string
  description: string
  href: string
  icon: ReactNode
  className?: string
  role?: string // Optional ARIA role for accessibility
}

// Додаю переклади
const translations = {
  en: {
    explore: 'Explore',
  },
  de: {
    explore: 'Entdecken',
  },
}

export function CTACard({ title, description, href, icon, className = '', role }: CTACardProps) {
  const { fontSize } = useAccessibilityStore()
  const { language } = useLanguageStore()
  const t = translations[language]
  // Ref and inView for intersection observer
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  // Memoize text sizes to prevent unnecessary recalculations
  const getTextSize = () => {
    // Ensure all font sizes are at least 12px for accessibility
    switch (fontSize) {
      case 'medium':
        return {
          title: 'text-[15px] md:text-lg', // min 15px
          description: 'text-[14px] md:text-base', // min 14px
          button: 'text-[14px] md:text-base', // min 14px
          icon: 'text-2xl md:text-4xl',
          minHeight: 'min-h-[140px] md:min-h-[200px]',
        }
      case 'large':
        return {
          title: 'text-[17px] md:text-xl',
          description: 'text-[16px] md:text-base',
          button: 'text-[16px] md:text-base',
          icon: 'text-3xl md:text-5xl',
          minHeight: 'min-h-[160px] md:min-h-[220px]',
        }
      default:
        return {
          title: 'text-[13px] md:text-base', // min 13px
          description: 'text-[12px] md:text-sm', // min 12px
          button: 'text-[12px] md:text-sm', // min 12px
          icon: 'text-xl md:text-3xl',
          minHeight: 'min-h-[120px] md:min-h-[180px]',
        }
    }
  }

  const textSizes = getTextSize()

  return (
    <Link
      href={href}
      className="block h-full w-full"
      tabIndex={0}
      aria-label={title}
      prefetch={false}
    >
      <motion.div
        ref={ref}
        role={role}
        initial={{ opacity: 0.6, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 16 }}
        transition={{
          type: 'spring',
          stiffness: 320,
          damping: 32,
          duration: 0.36,
          ease: 'easeOut',
        }}
        className={`flex flex-col items-center justify-between rounded-2xl bg-gradient-to-b from-[var(--secondary-accent)] to-[var(--background-main)] p-2 shadow-[var(--card-shadow)] md:p-4 dark:from-[var(--background)] dark:to-[var(--secondary-accent)] ${textSizes.minHeight} h-full w-full cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-[var(--card-shadow-hover)] ${className}`}
      >
        <div className={`mb-1 md:mb-3 ${textSizes.icon}`}>{icon}</div>
        <h3
          className={`${textSizes.title} mb-0.5 text-center font-bold text-[var(--primary-accent)] md:mb-1 dark:text-[var(--primary-accent)]`}
          aria-label={title}
        >
          {title}
        </h3>
        <p
          className={`${textSizes.description} mb-1 flex-1 overflow-hidden text-center text-[var(--text-primary)] md:mb-2 dark:text-[var(--text-primary)]`}
        >
          {description}
        </p>
        <div
          className={`mt-auto inline-block rounded-xl bg-[var(--primary-accent)] px-3 py-1.5 font-semibold text-[--button-primary-bg] md:px-5 md:py-2 ${textSizes.button} shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition hover:scale-105 hover:bg-[var(--button-primary-bg-hover)] hover:!text-white focus:ring-2 focus:ring-[var(--secondary-accent)] focus:outline-none dark:shadow-[0_4px_12px_rgba(1,1,1,0.45)]`}
        >
          <style jsx>{`
            .cta-link:hover {
              color: #fff !important;
            }
          `}</style>
          {t.explore}
        </div>
      </motion.div>
    </Link>
  )
}

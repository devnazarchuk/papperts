'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useRef } from 'react'

import { useAccessibilityStore } from '@/app/store/accessibilityStore'

interface CTACardProps {
  title: string
  description: string
  href: string
  icon: ReactNode
  className?: string
  role?: string // Optional ARIA role for accessibility
}

export function CTACard({ title, description, href, icon, className = '', role }: CTACardProps) {
  const { fontSize } = useAccessibilityStore()
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
    <motion.div
      ref={ref}
      role={role} // Pass ARIA role if provided
      // Smoother, softer appear animation
      initial={{ opacity: 0.6, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 16 }}
      transition={{ type: 'spring', stiffness: 320, damping: 32, duration: 0.36, ease: 'easeOut' }}
      className={`flex flex-col items-center justify-between rounded-2xl bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] p-2 shadow-md md:p-4 dark:from-[#232323] dark:to-[#1A1A1A] ${textSizes.minHeight} h-full w-full cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-xl ${className}`}
    >
      <div className={`mb-1 md:mb-3 ${textSizes.icon}`}>{icon}</div>
      <h3
        // Use high-contrast color for dark mode, and ensure accessible name matches visible label
        className={`${textSizes.title} mb-0.5 text-center font-bold text-[#D72638] md:mb-1 dark:text-[#FFA5A5]`}
        aria-label={title}
      >
        {title}
      </h3>
      <p
        // Use high-contrast color for dark mode
        className={`${textSizes.description} mb-1 flex-1 overflow-hidden text-center text-[#3A3A3A] md:mb-2 dark:text-[#FFF5E1]`}
      >
        {description}
      </p>
      <Link
        href={href}
        className={`mt-auto inline-block rounded-xl bg-[#D72638] px-2 py-1 font-semibold text-white md:px-4 md:py-1.5 ${textSizes.button} shadow transition hover:scale-105 hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none`}
        tabIndex={0}
        aria-label={title}
        prefetch={false} // Disable automatic prefetching for better performance
      >
        {/* Button text matches visible label for accessibility */}
        Entdecken
      </Link>
    </motion.div>
  )
}

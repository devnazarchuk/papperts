'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { CTAGrid } from '@/app/components/home/CTAGrid'
import type { Language } from '@/app/store/languageStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { useCTACards } from '@/components/data/CARDS'
import { RoleSwitcher } from '@/components/RoleSwitcher'

import { homeTranslations } from './languages'

type Role = 'Customer' | 'Employee' | 'All' | 'Categories'

export default function HomePage() {
  const [role, setRole] = useState<Role>('Categories')
  const { language } = useLanguageStore()
  const t = homeTranslations[language]
  const ctaCards = useCTACards()

  // Filter cards based on role
  const filteredCards = ctaCards.filter((card) => {
    // Show all cards for Categories role
    if (role === 'Categories') {
      return true
    }

    const cardTranslations: Record<Language, Record<Role, string[]>> = {
      de: {
        Customer: ['Produkte', 'Services', 'Karriere', 'Coupons Aktionen', 'Filialfinder'],
        Employee: ['FitnessBäcker', 'Services', 'Kontakt', 'Coupons Aktionen'],
        All: [],
        Categories: [],
      },
      en: {
        Customer: ['Products', 'Services', 'Career', 'Coupons Promotions', 'Store Finder'],
        Employee: ['Fitness Baker', 'Services', 'Contact', 'Coupons Promotions'],
        All: [],
        Categories: [],
      },
    }

    const allowedTitles = cardTranslations[language][role] || []
    return allowedTitles.includes(card.title)
  })

  return (
    <main className="text-text-primary font-body min-h-screen">
      {/* Role Switcher Section - Centered */}
      <section className="fade-in w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <RoleSwitcher value={role} onChange={setRole} />
          </div>
        </div>
      </section>

      {/* CTA Grid Section */}
      <section className="fade-in px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section heading with new typography */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h2 text-text-primary dark:text-text-light mb-8 text-center"
          >
            {t.highlights}
          </motion.h2>
          {/* Card grid uses new card styles */}
          <div className="grid">
            <CTAGrid cards={filteredCards} />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section
        className="shadow-main fade-in w-full rounded-[var(--radius-lg)] bg-[var(--secondary-accent)] px-4 py-12 transition-colors duration-200 dark:bg-[#18181b] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
        aria-label={t.brands.title}
      >
        <div className="container mx-auto">
          {/* Brands heading with new typography */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h3 mb-8 text-center text-[var(--primary-accent)] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.brands.title} {t.brands.subtitle}
          </motion.h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Brand logos with card shadow and radius */}
            <div className="card flex w-full max-w-[90px] justify-center !p-3 sm:max-w-[120px]">
              <Image
                src="/images/pappert_Logo_claim_black_grau.png"
                alt="Pappert Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
            <div className="card flex w-full max-w-[90px] justify-center !p-3 sm:max-w-[120px]">
              <Image
                src="/images/pappert_zutisch_Logo_grau.png"
                alt="Pappert zu Tisch Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
            <div className="card flex w-full max-w-[90px] justify-center !p-3 sm:max-w-[120px]">
              <Image
                src="/images/pappert_pizzapasta_Logo_black_grau.png"
                alt="Pappert Pizza Pasta Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
            <div className="card flex w-full max-w-[90px] justify-center !p-3 sm:max-w-[120px]">
              <Image
                src="/images/giovani-l-restaurant-gelsenkirchen-zum-glueck-food-court-logo_grau.png"
                alt="Giovani L Restaurant Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

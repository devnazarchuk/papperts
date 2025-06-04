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
        Customer: ['Produkte', 'Services', 'Karriere', 'Coupons & Aktionen', 'Filialfinder'],
        Employee: ['FitnessBäcker', 'Services', 'Kontakt & Clubs', 'Coupons & Aktionen'],
        All: [],
        Categories: [],
      },
      en: {
        Customer: ['Products', 'Services', 'Career', 'Coupons & Promotions', 'Store Finder'],
        Employee: ['Fitness Baker', 'Services', 'Contact & Clubs', 'Coupons & Promotions'],
        All: [],
        Categories: [],
      },
    }

    const allowedTitles = cardTranslations[language][role] || []
    return allowedTitles.includes(card.title)
  })

  return (
    <main className="min-h-screen">
      {/* Preload critical assets */}
      <head>
        {/* Preload only the most important font */}
        <link
          rel="preload"
          href="/fonts/SF-Pro-Display-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload LCP (hero/brand) images for instant LCP */}
        <link
          rel="preload"
          href="/images/pappert_Logo_claim_black_grau.png"
          as="image"
          imageSrcSet="/images/pappert_Logo_claim_black_grau.png 1x"
        />
        {/* If you have WebP/AVIF, add those as well */}
        {/* <link rel="preload" href="/images/pappert_Logo_claim_black_grau.webp" as="image" imagesrcset="/images/pappert_Logo_claim_black_grau.webp 1x" /> */}
      </head>

      {/* Role Switcher Section - Centered */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <RoleSwitcher value={role} onChange={setRole} />
          </div>
        </div>
      </section>

      {/* CTA Grid Section */}
      <section className="px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Faster appear animation for section heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-8 text-center text-3xl font-bold text-[#232323] dark:text-[#FFF5E1]"
          >
            {t.highlights}
          </motion.h2>
          <CTAGrid cards={filteredCards} />
        </div>
      </section>

      {/* Brands Section */}
      <section
        className="w-full rounded-[25px] bg-[#FFF6F6] px-4 py-12 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
        aria-label={t.brands.title}
      >
        <div className="container mx-auto">
          {/* Faster appear animation for brands heading */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-8 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.brands.title} {t.brands.subtitle}
          </motion.h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Optimize brand logos loading */}
            <div className="flex w-full max-w-[120px] justify-center">
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
            <div className="flex w-full max-w-[120px] justify-center">
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
            <div className="flex w-full max-w-[120px] justify-center">
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
            <div className="flex w-full max-w-[120px] justify-center">
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

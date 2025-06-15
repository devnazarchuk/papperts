'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'

import { gutscheineTranslations } from './languages'

export default function VouchersPage() {
  const { language } = useLanguageStore()
  const t = gutscheineTranslations[language as keyof typeof gutscheineTranslations]

  return (
    <main className="min-h-screen bg-[#FDEEEE] font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-[#3A3A3A] transition-colors duration-200 dark:bg-[#181818] dark:text-[#FFF5E1]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/Dinkelkrusti3-1920x1080.jpg"
          alt="Pappert Coupons Hero"
          fill
          className="rounded-[25px] object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-[25px] bg-black/30 transition-colors dark:bg-black/60">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center text-3xl font-bold text-white drop-shadow-lg transition-colors md:text-5xl"
          >
            {t.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 md:px-12 xl:px-32">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-2 text-center text-2xl font-bold text-[#D72638] transition-colors md:text-3xl dark:text-[#FFA5A5]"
        >
          {t.subtitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mb-4 text-center text-lg text-gray-700 transition-colors dark:text-[#FAD2E1]"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 text-center shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h4 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            {t.currentCoupons}
          </h4>
          <a
            href="https://papperts.vercel.app/images/Coupon_April-Juni_2025_web.pdf"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
          >
            {t.downloadButton}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h4 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            {t.smartphoneTitle}
          </h4>
          <p className="mb-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
            {t.smartphoneDescription}
          </p>
          <div className="mt-4 flex flex-col justify-center gap-4 md:flex-row">
            <div className="flex flex-col gap-4 md:flex-row">
              <a
                href="https://apps.apple.com/de/app/papperts/id1615734130"
                target="_blank"
                rel="noopener"
                className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              >
                {t.appStore}
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.copago.id4200712&pli=1"
                target="_blank"
                rel="noopener"
                className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              >
                {t.playStore}
              </a>
            </div>
            <a
              href="https://wa.me/message/SBY6LF7LLR7GA1"
              target="_blank"
              rel="noopener"
              className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
            >
              {t.whatsappButton}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

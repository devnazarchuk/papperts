'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

import { fitnessBaeckerTranslations } from '../translations'

export default function MTBKidsCamp() {
  const { language } = useLanguageStore()
  const translations = fitnessBaeckerTranslations[language].mtbKidsCamp
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/MTB-Kids-Camp-Fitnessbaecker-Baeckerei-Pappert-1.jpg"
          alt={translations.title}
          fill
          className="rounded-[25px] object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 rounded-[25px] bg-black/40" />
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4 text-4xl font-extrabold drop-shadow-lg"
          >
            {translations.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto mb-8 max-w-2xl rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323]">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 text-center text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.subtitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 text-center text-base text-gray-700 dark:text-gray-300"
        >
          {translations.intro.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-2 text-center text-base text-gray-700 dark:text-gray-300"
        >
          {translations.intro.requirements}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-2 text-center text-base text-gray-700 dark:text-gray-300"
        >
          <strong>{translations.intro.maxParticipants}</strong>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <b>{translations.details.start}</b>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <b>{translations.details.location}</b>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <b>{translations.details.trainer}</b>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <b>{translations.details.price}</b>
          </div>
        </motion.div>
        <div className="mt-6 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/fitness-baker/registration"
            className="inline-block rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
          >
            {translations.details.button}
          </motion.a>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323]">
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 text-center text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.schedule.title}
        </motion.h3>
        <div className="space-y-4">
          {translations.schedule.dates.map(({ group, events }) => (
            <div
              key={group}
              className="overflow-hidden rounded-xl border border-[#FAD2E1] bg-[#FFF5E1] dark:border-[#444444] dark:bg-[#2a2a2a]"
            >
              <button
                className="flex w-full items-center justify-between bg-[#FFF5E1] px-6 py-4 text-lg font-semibold text-[#D72638] transition hover:bg-[#FFE2E2] focus:ring-2 focus:ring-[#D72638] focus:outline-none dark:bg-[#2a2a2a] dark:text-[#FFA5A5] dark:hover:bg-[#333333] dark:focus:ring-[#FFA5A5]"
                onClick={() => setOpenGroup(openGroup === group ? null : group)}
                aria-expanded={openGroup === group}
                aria-controls={`panel-${group}`}
              >
                <span>{group}</span>
                <span className="text-2xl">{openGroup === group ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openGroup === group && (
                  <motion.div
                    id={`panel-${group}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <ul className="divide-y divide-[#FAD2E1] dark:divide-[#444444]">
                      {events.map((event) => (
                        <li key={event.date + event.time} className="py-3">
                          <div className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                            {event.date}
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-300">
                            {event.time}, {event.location}
                          </div>
                          {event.theme && (
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {event.theme}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          {translations.schedule.note}
        </div>
      </section>
    </PageWrapper>
  )
}

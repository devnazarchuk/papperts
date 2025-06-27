'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

import { fitnessBaeckerTranslations } from '../translations'

export default function FullBodyWorkoutPage() {
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].fullBodyWorkout

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/Zirkeltraining-Fitnessbaecker-Baeckerei-Pappert-1.jpg"
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
          {translations.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-2 text-center text-base text-gray-700 dark:text-gray-300"
        >
          <strong>{translations.details.capacity}</strong>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.start}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.time}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.location}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.price}
          </div>
        </motion.div>
      </section>

      {/* Requirements Section */}
      <section className="mx-auto mb-8 max-w-2xl rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323]">
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 text-center text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.requirementsTitle}
        </motion.h3>
        <ul className="list-inside list-disc space-y-2">
          {translations.details.requirements.map((req: string, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-700 dark:text-gray-300"
            >
              {req}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Highlights Section */}
      <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323]">
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4 text-center text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.highlightsTitle}
        </motion.h3>
        <ul className="list-inside list-disc space-y-2">
          {translations.highlights.map((highlight: string, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-700 dark:text-gray-300"
            >
              {highlight}
            </motion.li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
        >
          {translations.button}
        </motion.button>
      </section>
    </PageWrapper>
  )
}

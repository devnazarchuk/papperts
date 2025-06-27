'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

import { fitnessBaeckerTranslations } from '../translations'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function BackTrainingSummerPage() {
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].backTraining

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-8"
      >
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{translations.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{translations.subtitle}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/rucken-traning.jpg"
              alt={translations.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{translations.intro.title}</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{translations.intro.description}</p>
          <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-[#232323]">
            <p className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">{translations.intro.maxParticipants}</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-[#232323]">
          <h2 className="mb-6 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{translations.details.title}</h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">{translations.details.start}</p>
            <p className="text-gray-700 dark:text-gray-300">{translations.details.location}</p>
            <p className="text-gray-700 dark:text-gray-300">{translations.details.trainer}</p>
            <p className="text-gray-700 dark:text-gray-300">{translations.details.price}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
            >
              {translations.details.button}
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-[#232323]">
          <h2 className="mb-6 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{translations.schedule.title}</h2>
          <p className="text-gray-700 dark:text-gray-300">{translations.schedule.note}</p>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
} 
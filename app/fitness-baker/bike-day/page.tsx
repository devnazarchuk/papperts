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

export default function BikeDayPage() {
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].bikeDay

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
          <p className="text-xl text-gray-600 dark:text-gray-300">{translations.description}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/MTB-Fitness-Camp-Fitnessbaecker-Baeckerei-Pappert-768x463.jpg"
              alt={translations.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-[#232323]">
          <h2 className="mb-6 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">Event Details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Date:</span> {translations.details.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Time:</span> {translations.details.time}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Location:</span> {translations.details.location}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Capacity:</span> {translations.details.capacity}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Price:</span> {translations.details.price}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-[#232323]">
          <h2 className="mb-6 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            {translations.details.requirements.map((req, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{req}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-[#232323]">
          <h2 className="mb-6 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            {translations.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{highlight}</li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
} 
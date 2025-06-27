'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUserGraduate } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    sectionTitle: string
    sectionContent: string
    listItems: string[]
    conclusion: string
  }
  en: {
    title: string
    subtitle: string
    description: string
    sectionTitle: string
    sectionContent: string
    listItems: string[]
    conclusion: string
  }
}

const translations: Translations = {
  de: {
    title: 'Maximilian Pappert – Neuer Bäckermeister',
    subtitle: 'Tradition & Moderne',
    description:
      'Mit dem erfolgreichen Abschluss seiner Meisterprüfung setzt Maximilian Pappert die Familientradition fort und bringt frischen Wind in unsere Backstube.',
    sectionTitle: 'Tradition & Moderne',
    sectionContent:
      'Maximilian Pappert ist die 8. Generation der Pappert-Bäckerfamilie. Mit seiner Meisterprüfung bringt er nicht nur handwerkliches Können, sondern auch neue Ideen und moderne Techniken in unser Unternehmen.',
    listItems: [
      '11 Meister in der Backstube',
      'Verbindung von Tradition und Innovation',
      'Fokus auf Qualität und Regionalität',
      'Stolz auf die Familiengeschichte',
    ],
    conclusion:
      'Wir gratulieren Maximilian herzlich und freuen uns auf viele neue Backideen und die Fortführung unserer Erfolgsgeschichte!',
  },
  en: {
    title: 'Maximilian Pappert – New Master Baker',
    subtitle: 'Tradition & Modernity',
    description:
      "With the successful completion of his master's examination, Maximilian Pappert continues the family tradition and brings fresh ideas to our bakery.",
    sectionTitle: 'Tradition & Modernity',
    sectionContent:
      "Maximilian Pappert is the 8th generation of the Pappert baker family. With his master's examination, he brings not only artisanal skills but also new ideas and modern techniques to our company.",
    listItems: [
      '11 master bakers in the bakery',
      'Combining tradition and innovation',
      'Focus on quality and regionality',
      'Pride in family history',
    ],
    conclusion:
      'We congratulate Maximilian and look forward to many new baking ideas and continuing our success story!',
  },
}

export default function MaximilianPappertPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <FaUserGraduate className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {translations[language].title}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            {translations[language].description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/Maximilian_Pappert_ist_neuer_Baeckermeister.jpg"
            alt={translations[language].title}
            width={800}
            height={600}
            className="h-auto w-full rounded-lg"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            {translations[language].sectionTitle}
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {translations[language].sectionContent}
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            {translations[language].listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-gray-300">{translations[language].conclusion}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

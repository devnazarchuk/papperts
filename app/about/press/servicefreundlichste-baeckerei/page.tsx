'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaAward } from 'react-icons/fa'

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
    title: 'Deutschlands servicefreundlichste Bäckerei',
    subtitle: 'Auszeichnung für exzellenten Service',
    description:
      'Pappert wurde 2023 als "Service-Champion" ausgezeichnet und belegt den 1. Platz im bundesweiten Branchen-Ranking. Ein Beweis für unser Engagement und unsere Leidenschaft für Kundenzufriedenheit.',
    sectionTitle: 'Auszeichnung für exzellenten Service',
    sectionContent:
      'Über 2 Millionen Kundenurteile haben entschieden: Pappert ist die servicefreundlichste Bäckerei Deutschlands. Freundlichkeit, kompetente Beratung und höchste Qualität stehen bei uns im Mittelpunkt.',
    listItems: [
      '1. Platz im Branchen-Ranking 2023',
      'Über 150 Fachgeschäfte deutschlandweit',
      'Fokus auf Kundenzufriedenheit und Qualität',
      'Stolz auf unser Team und unsere Tradition',
    ],
    conclusion:
      'Wir danken allen Kundinnen und Kunden für ihr Vertrauen und freuen uns, weiterhin mit Leidenschaft und Service zu begeistern!',
  },
  en: {
    title: "Germany's Most Customer-Friendly Bakery",
    subtitle: 'Award for Excellent Service',
    description:
      'Pappert was awarded as "Service Champion" in 2023 and ranks first in the nationwide industry ranking. A testament to our commitment and passion for customer satisfaction.',
    sectionTitle: 'Award for Excellent Service',
    sectionContent:
      "Over 2 million customer reviews have decided: Pappert is Germany's most customer-friendly bakery. Friendliness, competent advice, and highest quality are our priorities.",
    listItems: [
      '1st place in industry ranking 2023',
      'Over 150 specialty stores nationwide',
      'Focus on customer satisfaction and quality',
      'Pride in our team and tradition',
    ],
    conclusion:
      'We thank all customers for their trust and look forward to continuing to impress with passion and service!',
  },
}

export default function ServicefreundlichsteBaeckereiPage() {
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
            <FaAward className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
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
            src="/images/papperts_Auszeichnung_Service-Champion_2023.jpg"
            alt={translations[language].title}
            width={800}
            height={600}
            className="mb-6 h-auto w-full rounded-xl object-cover shadow-md"
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

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStore } from 'react-icons/fa'

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
    title: 'Neue Filiale in Frankfurt eröffnet',
    subtitle: 'Ein neues Kapitel in Frankfurt',
    description:
      'Im März 2024 haben wir unsere neueste Filiale in Frankfurt eröffnet. Modernes Ambiente, nachhaltige Materialien und ein erweitertes Sortiment erwarten unsere Kundschaft.',
    sectionTitle: 'Ein neues Kapitel in Frankfurt',
    sectionContent:
      'Die neue Filiale besticht durch ein modernes, nachhaltiges Design und bietet ein erweitertes Sortiment an frischen Backwaren, Snacks und Kaffeespezialitäten. Besonderes Augenmerk wurde auf regionale Zutaten und umweltfreundliche Materialien gelegt.',
    listItems: [
      'Modernes, nachhaltiges Ladenkonzept',
      'Erweitertes Sortiment mit regionalen Spezialitäten',
      'Barrierefreier Zugang und großzügige Sitzbereiche',
      'Frische Snacks und Kaffeespezialitäten',
    ],
    conclusion:
      'Wir freuen uns auf viele neue Kundinnen und Kunden in Frankfurt und laden Sie herzlich ein, unsere neue Filiale zu besuchen!',
  },
  en: {
    title: 'New Branch Opens in Frankfurt',
    subtitle: 'A New Chapter in Frankfurt',
    description:
      'In March 2024, we opened our newest branch in Frankfurt. Modern ambiance, sustainable materials, and an expanded product range await our customers.',
    sectionTitle: 'A New Chapter in Frankfurt',
    sectionContent:
      'The new branch impresses with a modern, sustainable design and offers an expanded range of fresh baked goods, snacks, and coffee specialties. Special attention was paid to regional ingredients and environmentally friendly materials.',
    listItems: [
      'Modern, sustainable store concept',
      'Expanded range with regional specialties',
      'Barrier-free access and spacious seating areas',
      'Fresh snacks and coffee specialties',
    ],
    conclusion:
      'We look forward to welcoming many new customers in Frankfurt and invite you to visit our new branch!',
  },
}

export default function FilialeFrankfurtPage() {
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
            <FaStore className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
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
            src="/images/AATA13607_1360_768_1024.jpg"
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

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLeaf } from 'react-icons/fa'

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
    title: 'Nachhaltigkeitspreis 2024 für Pappert',
    subtitle: 'Auszeichnung für Umweltbewusstsein',
    description:
      'Für unser Engagement in Sachen Umwelt und regionale Zutaten wurden wir mit dem Nachhaltigkeitspreis 2024 ausgezeichnet. Wir danken allen Mitarbeitenden und Partnern für ihren Einsatz!',
    sectionTitle: 'Auszeichnung für Umweltbewusstsein',
    sectionContent:
      'Der Nachhaltigkeitspreis würdigt unser Engagement für regionale Zutaten, umweltfreundliche Produktion und soziale Verantwortung. Wir setzen auf kurze Lieferwege, erneuerbare Energien und Partnerschaften mit lokalen Landwirten.',
    listItems: [
      'Regionale Zutaten und kurze Lieferwege',
      'Erneuerbare Energien in der Produktion',
      'Zero-Waste-Initiativen und Spendenaktionen',
      'Starke Partnerschaften mit der Region',
    ],
    conclusion:
      'Wir sind stolz auf diese Auszeichnung und danken allen, die zu unserem nachhaltigen Erfolg beitragen. Gemeinsam für eine grünere Zukunft!',
  },
  en: {
    title: 'Sustainability Award 2024 for Pappert',
    subtitle: 'Award for Environmental Awareness',
    description:
      'For our commitment to the environment and regional ingredients, we were awarded the Sustainability Award 2024. We thank all employees and partners for their dedication!',
    sectionTitle: 'Award for Environmental Awareness',
    sectionContent:
      'The Sustainability Award recognizes our commitment to regional ingredients, environmentally friendly production, and social responsibility. We focus on short supply chains, renewable energy, and partnerships with local farmers.',
    listItems: [
      'Regional ingredients and short supply chains',
      'Renewable energy in production',
      'Zero-Waste initiatives and donation campaigns',
      'Strong partnerships with the region',
    ],
    conclusion:
      'We are proud of this award and thank everyone who contributes to our sustainable success. Together for a greener future!',
  },
}

export default function NachhaltigkeitspreisPage() {
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
            <FaLeaf className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
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
            src="/images/Nachhaltigkeit.webp"
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

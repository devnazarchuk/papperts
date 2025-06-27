'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaMountain } from 'react-icons/fa'

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
    title: 'Traditionsstollen schnuppert Rhöner Höhenluft',
    subtitle: 'Bäckerei Pappert lässt Hessens höchsten Stollen in 950 Meter Höhe reifen',
    description:
      'Der Berg ruft! Denn ist es wieder soweit: Hessens höchster Stollen von der Bäckerei Pappert darf wieder echte Rhöner Höhenluft auf der Wasserkuppe schnuppern.',
    sectionTitle: 'Ein Herzensprojekt aus der Rhön',
    sectionContent:
      'Als einer von etwa 220 zertifizierten Brot-Sommeliers weltweit hat Bernd Müller das einzigartige Rezept für Hessens höchsten Stollen kreiert. Normalerweise mit seiner Expertise auf Brot ausgerichtet, interessiert sich der Bäckermeister auch seit längerer Zeit für die Kunst des Stollens backen. Entstanden ist ein Rezept, in dem nur die besten Zutaten aus der Region verarbeitet werden. So finden sich unter anderem Apfelwürfel aus der antonius Gärtnerei in Fulda oder auch Apfel-Sherry vom Biohof Krenzer aus Seiferts im Gebäck. Verfeinert wird der handgefertigte Traditionsstollen mit Haselnüssen und Rum. "Hessens höchster Stollen ist ein echtes Herzensprojekt. Die erlesenen Zutaten und der besondere Reifeprozess sind einfach eine Liebeserklärung an unsere Heimatregion – die Rhön", erklärt Brot-Sommelier Bernd Müller.',
    listItems: [
      'Einzigartiges Rezept von Brot-Sommelier Bernd Müller',
      'Regionale Zutaten aus der Rhön',
      'Reifung in 950 Meter Höhe auf der Wasserkuppe',
      'Handgefertigt mit Haselnüssen und Rum',
    ],
    conclusion:
      'Der höchste Berg in Hessen bietet dabei erstklassige Bedingungen, um das Gebäck innerhalb von vier Wochen perfekt auszureifen. Die klare und frische Rhöner Höhenluft lässt die feinen Aromen entfalten und die Konsistenz wunderbar zart werden. "Man wird die Bergluft in unseren 1.500 Exemplaren spürbar schmecken können", so Bernd Müller. Am 29. Oktober 2023 um 14 Uhr findet der offizielle Stollen-Abtrieb statt, bei dem der Stollen in einer edlen Holzverpackung präsentiert und verkostet werden kann. "Jedes Exemplar ist ein echtes Unikat und lädt zum Genießen ein. Wir freuen uns daher, Hessens höchsten Stollen in vier Wochen wieder ins Tal zu holen", sagt Geschäftsführer Manfred Klüber.',
  },
  en: {
    title: 'Traditional Stollen Breathes Rhön Mountain Air',
    subtitle: "Hesse's Highest Stollen Matures at 950 Meters",
    description:
      "The mountain calls! It's that time again: Hesse's highest stollen from Pappert Bakery gets to breathe the real Rhön mountain air on the Wasserkuppe.",
    sectionTitle: 'A Heart Project from the Rhön',
    sectionContent:
      "As one of about 220 certified bread sommeliers worldwide, Bernd Müller has created the unique recipe for Hesse's highest stollen. While usually focused on bread with his expertise, the master baker has also been interested in the art of stollen baking for some time. The result is a recipe that uses only the finest regional ingredients. These include apple cubes from the antonius garden in Fulda and apple sherry from the Krenzer organic farm in Seiferts. The handcrafted traditional stollen is refined with hazelnuts and rum.",
    listItems: [
      'Unique recipe by bread sommelier Bernd Müller',
      'Regional ingredients from the Rhön',
      'Maturation at 950 meters on the Wasserkuppe',
      'Handcrafted with hazelnuts and rum',
    ],
    conclusion:
      "Hesse's highest mountain offers perfect conditions for the pastry to mature perfectly within four weeks. The clear and fresh Rhön mountain air allows the delicate aromas to develop and the consistency to become wonderfully tender. On October 29, 2023, at 2 PM, the official stollen descent will take place, where the stollen will be presented and tasted in an elegant wooden packaging.",
  },
}

export default function TraditionsstollenPage() {
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
            <FaMountain className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
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
            src="/images/traditionsstollen.jpg"
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

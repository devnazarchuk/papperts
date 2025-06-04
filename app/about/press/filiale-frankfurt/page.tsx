'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStore } from 'react-icons/fa'

export default function FilialeFrankfurtPage() {
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
              Neue Filiale in Frankfurt eröffnet
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Im März 2024 haben wir unsere neueste Filiale in Frankfurt eröffnet. Modernes Ambiente,
            nachhaltige Materialien und ein erweitertes Sortiment erwarten unsere Kundschaft.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/press/filiale-frankfurt.jpg"
            alt="Filiale Frankfurt"
            width={800}
            height={600}
            className="mb-6 h-auto w-full rounded-xl object-cover shadow-md"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Ein neues Kapitel in Frankfurt
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Die neue Filiale besticht durch ein modernes, nachhaltiges Design und bietet ein
            erweitertes Sortiment an frischen Backwaren, Snacks und Kaffeespezialitäten. Besonderes
            Augenmerk wurde auf regionale Zutaten und umweltfreundliche Materialien gelegt.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Modernes, nachhaltiges Ladenkonzept</li>
            <li>Erweitertes Sortiment mit regionalen Spezialitäten</li>
            <li>Barrierefreier Zugang und großzügige Sitzbereiche</li>
            <li>Frische Snacks und Kaffeespezialitäten</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Wir freuen uns auf viele neue Kundinnen und Kunden in Frankfurt und laden Sie herzlich
            ein, unsere neue Filiale zu besuchen!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

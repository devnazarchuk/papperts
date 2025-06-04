'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaAward } from 'react-icons/fa'

export default function ServicefreundlichsteBaeckereiPage() {
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
              Deutschlands servicefreundlichste Bäckerei
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Pappert wurde 2023 als &quot;Service-Champion&quot; ausgezeichnet und belegt den 1.
            Platz im bundesweiten Branchen-Ranking. Ein Beweis für unser Engagement und unsere
            Leidenschaft für Kundenzufriedenheit.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/press/servicefreundlichste-baeckerei.jpg"
            alt="Servicefreundlichste Bäckerei"
            width={800}
            height={600}
            className="mb-6 h-auto w-full rounded-xl object-cover shadow-md"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Auszeichnung für exzellenten Service
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Über 2 Millionen Kundenurteile haben entschieden: Pappert ist die servicefreundlichste
            Bäckerei Deutschlands. Freundlichkeit, kompetente Beratung und höchste Qualität stehen
            bei uns im Mittelpunkt.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>1. Platz im Branchen-Ranking 2023</li>
            <li>Über 150 Fachgeschäfte deutschlandweit</li>
            <li>Fokus auf Kundenzufriedenheit und Qualität</li>
            <li>Stolz auf unser Team und unsere Tradition</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Wir danken allen Kundinnen und Kunden für ihr Vertrauen und freuen uns, weiterhin mit
            Leidenschaft und Service zu begeistern!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

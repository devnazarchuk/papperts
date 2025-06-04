'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLeaf } from 'react-icons/fa'

export default function NachhaltigkeitspreisPage() {
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
              Nachhaltigkeitspreis 2024 für Pappert
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Für unser Engagement in Sachen Umwelt und regionale Zutaten wurden wir mit dem
            Nachhaltigkeitspreis 2024 ausgezeichnet. Wir danken allen Mitarbeitenden und Partnern
            für ihren Einsatz!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/press/nachhaltigkeitspreis.jpg"
            alt="Nachhaltigkeitspreis"
            width={800}
            height={600}
            className="mb-6 h-auto w-full rounded-xl object-cover shadow-md"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Auszeichnung für Umweltbewusstsein
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Der Nachhaltigkeitspreis würdigt unser Engagement für regionale Zutaten,
            umweltfreundliche Produktion und soziale Verantwortung. Wir setzen auf kurze Lieferwege,
            erneuerbare Energien und Partnerschaften mit lokalen Landwirten.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Regionale Zutaten und kurze Lieferwege</li>
            <li>Erneuerbare Energien in der Produktion</li>
            <li>Zero-Waste-Initiativen und Spendenaktionen</li>
            <li>Starke Partnerschaften mit der Region</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Wir sind stolz auf diese Auszeichnung und danken allen, die zu unserem nachhaltigen
            Erfolg beitragen. Gemeinsam für eine grünere Zukunft!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

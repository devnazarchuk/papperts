'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUserGraduate } from 'react-icons/fa'

export default function MaximilianPappertPage() {
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
              Maximilian Pappert – Neuer Bäckermeister
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Mit dem erfolgreichen Abschluss seiner Meisterprüfung setzt Maximilian Pappert die
            Familientradition fort und bringt frischen Wind in unsere Backstube.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/press/maximilian-pappert.jpg"
            alt="Maximilian Pappert"
            width={800}
            height={600}
            className="h-auto w-full rounded-lg"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Tradition & Moderne
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Maximilian Pappert ist die 8. Generation der Pappert-Bäckerfamilie. Mit seiner
            Meisterprüfung bringt er nicht nur handwerkliches Können, sondern auch neue Ideen und
            moderne Techniken in unser Unternehmen.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>11 Meister in der Backstube</li>
            <li>Verbindung von Tradition und Innovation</li>
            <li>Fokus auf Qualität und Regionalität</li>
            <li>Stolz auf die Familiengeschichte</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Wir gratulieren Maximilian herzlich und freuen uns auf viele neue Backideen und die
            Fortführung unserer Erfolgsgeschichte!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBreadSlice } from 'react-icons/fa'

export default function BroteAnTafelnPage() {
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
            <FaBreadSlice className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              10.000 Brote für die Tafeln
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Im Rahmen unserer Zero-Waste-Initiative haben wir 2024 über 10.000 Brote an regionale
            Tafeln gespendet. Damit unterstützen wir Bedürftige und setzen ein Zeichen gegen
            Lebensmittelverschwendung.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/press/brote-an-tafeln.jpg"
            alt="Brote an Tafeln"
            width={800}
            height={600}
            className="mb-6 h-auto w-full rounded-xl object-cover shadow-md"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Soziales Engagement & Nachhaltigkeit
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Unsere Brote werden täglich frisch gebacken. Was am Abend übrig bleibt, spenden wir an
            regionale Tafeln und soziale Einrichtungen. So helfen wir, Lebensmittelverschwendung zu
            vermeiden und Bedürftige zu unterstützen.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Zero-Waste-Initiative seit 2020</li>
            <li>Partnerschaft mit lokalen Tafeln</li>
            <li>Über 10.000 Brote gespendet</li>
            <li>Nachhaltigkeit als Teil unserer Unternehmensphilosophie</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Wir danken allen Mitarbeitenden und Partnern, die diese Aktion möglich machen. Gemeinsam
            für eine bessere Zukunft!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

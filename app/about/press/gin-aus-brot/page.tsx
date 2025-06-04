'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGlassCheers } from 'react-icons/fa'

export default function GinAusBrotPage() {
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
            <FaGlassCheers className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Gin aus Brot – Nachhaltig & Innovativ
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Die Bäckerei Pappert und die Schlitzer Destillerie präsentieren einen einzigartigen Gin,
            der aus unserem Roggenbrot &quot;der Wilhelm&quot; hergestellt wird. Das Projekt
            verbindet Handwerk, Nachhaltigkeit und regionale Zutaten.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-[25px] bg-white/80 p-8 shadow-lg dark:bg-[#232323]/80"
        >
          <Image
            src="/images/Wilhelm–rG.jpg"
            alt="Gin aus Brot"
            width={500}
            height={300}
            className="h-full w-full rounded-xl object-cover transition-transform duration-500 hover:scale-101"
          />
          <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Tradition trifft Innovation
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Für unseren Gin werden Brotreste aus der eigenen Produktion verwendet und mit acht
            heimischen Botanicals veredelt. Das Ergebnis: Ein charaktervoller Gin mit frischen
            Zitrusnoten, reifen Orangen, kräftigem Wacholder und feinen Brot-Nuancen.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Lebensmittelverschwendung vermeiden</li>
            <li>Regionale Partnerschaft mit der Schlitzer Destillerie</li>
            <li>Handwerkliche Herstellung</li>
            <li>Nachhaltige Kreislaufwirtschaft</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Der Gin ist limitiert erhältlich in ausgewählten Filialen und im Online-Shop. Probieren
            Sie ein Stück Innovation aus der Rhön!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

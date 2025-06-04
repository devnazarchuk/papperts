'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaUsers } from 'react-icons/fa'

const sections = [
  {
    title: 'Unsere Marken',
    content:
      'Entdecken Sie die Vielfalt unserer Bäckerei-Marken – jede mit eigener Geschichte, Spezialitäten und Charakter.',
    image: '/images/124_12.jpg',
    imagePosition: 'left',
    details: [
      'Traditionelle Handwerkskunst',
      'Regionale Spezialitäten',
      'Innovative Produktlinien',
      'Vielfalt für jeden Geschmack',
    ],
  },
]

export default function OurBrandsPage() {
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
            <FaUsers className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Unsere Marken
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Vielfalt, Qualität und Tradition – entdecken Sie unsere Markenwelt.
          </p>
        </motion.div>
        {/* Section content */}
        {sections.map((section, idx) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col items-center gap-8 md:flex-row ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}
          >
            {section.image && (
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[300px] overflow-hidden rounded-[25px] shadow-lg transition-all duration-300 md:h-[400px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>
            )}
            <div className={`w-full md:w-1/2`}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-[25px] bg-white/80 p-8 shadow-lg transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {section.title}
                </h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">{section.content}</p>
                {section.details && (
                  <ul className="space-y-2">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#EE0A24] dark:text-[#EE0A24]">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
      {/* Brand Logos Section */}
      <section
        className="mt-12 w-full rounded-[25px] bg-[#FFF6F6] px-4 py-12 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
        aria-label="Unsere Markenlogos"
      >
        <div className="container mx-auto">
          {/* Animated heading for brands */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-8 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Unsere Markenwelt
          </motion.h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Brand logos, optimized for performance and dark mode */}
            <div className="flex w-full max-w-[120px] justify-center">
              <Image
                src="/images/pappert_Logo_claim_black_grau.png"
                alt="Pappert Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
            <div className="flex w-full max-w-[120px] justify-center">
              <Image
                src="/images/pappert_zutisch_Logo_grau.png"
                alt="Pappert zu Tisch Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
            <div className="flex w-full max-w-[120px] justify-center">
              <Image
                src="/images/pappert_pizzapasta_Logo_black_grau.png"
                alt="Pappert Pizza Pasta Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
            <div className="flex w-full max-w-[120px] justify-center">
              <Image
                src="/images/giovani-l-restaurant-gelsenkirchen-zum-glueck-food-court-logo_grau.png"
                alt="Giovani L Restaurant Logo"
                width={120}
                height={45}
                className="object-contain dark:invert"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="120px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Language } from '@/app/store/languageStore'
import { useLanguageStore } from '@/app/store/languageStore'

import { bakers, getTranslatedBaker, slugify } from './bakers-data'

// import { FaUserTie } from 'react-icons/fa'

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring' },
  }),
}

type Translations = {
  [key in Language]: {
    title: string
    subtitle: string
    description: string
    description2: string
    moreInfo: string
    department: string
    since: string
    masterSince: string
  }
}

const translations: Translations = {
  de: {
    title: 'Unsere Meister aus der Backstube',
    subtitle: 'Die Gesichter hinter erstklassigem Handwerk',
    description:
      'Unsere 10 Bäckermeister in der Backstube in Poppenhausen sind wahre Künstler ihres Fachs. Mit jahrelanger Erfahrung und einer leidenschaftlichen Hingabe zum Bäckerhandwerk stellen Sie Tag für Tag und Nacht für Nacht unsere Vielfalt an Backwaren her. Dabei wenden sie mit viel Liebe ihre traditionellen und modernen Backmethoden an, in denen sie unsere wertvollen Zutaten genau zu dem verarbeiten, was wir am meisten lieben: Das frische Brot, Brötchen, Kuchenstück oder süße Gebäck in den etwa 160 papperts-Fachgeschäften.',
    description2:
      'Tauchen Sie ein in die Welt des Bäckerhandwerks und lernen Sie unsere Bäckermeister kennen – wir geben unserem Rhöner Handwerk ein Gesicht.',
    moreInfo: 'Mehr Info',
    department: 'Abteilung:',
    since: 'Bei Pappert seit:',
    masterSince: 'Bäckermeister seit:',
  },
  en: {
    title: 'Our Masters from the Bakery',
    subtitle: 'The Faces Behind First-Class Craftsmanship',
    description:
      'Our 10 master bakers in the bakery in Poppenhausen are true artists of their craft. With years of experience and a passionate dedication to the baking trade, they produce our variety of baked goods day and night. They lovingly apply their traditional and modern baking methods, processing our valuable ingredients into what we love most: fresh bread, rolls, cakes, or sweet pastries in our approximately 160 papperts specialty stores.',
    description2:
      'Dive into the world of the baking trade and get to know our master bakers – we give our Rhön craftsmanship a face.',
    moreInfo: 'More Info',
    department: 'Department:',
    since: 'At Pappert since:',
    masterSince: 'Master baker since:',
  },
}

export default function MasterBakersPage() {
  const { language } = useLanguageStore()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      {/* Page header */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {translations[language].title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {translations[language].subtitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300"
        >
          {translations[language].description}
          <br />
          {translations[language].description2}
        </motion.p>
      </div>
      {/* Responsive grid of baker cards */}
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bakers.map((baker, i) => {
          const translatedBaker = getTranslatedBaker(baker, language)
          return (
            <motion.div
              key={baker.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex flex-col overflow-hidden rounded-[25px] border border-[#FAD2E1] bg-white/90 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-[#2a2a2a] dark:bg-[#232323]/90"
              aria-label={`Bäckermeister: ${baker.name}`}
            >
              {/* Baker image */}
              <Image
                src={baker.image}
                alt={baker.alt}
                width={256}
                height={256}
                className="h-64 w-full rounded-t-[25px] object-cover shadow-md"
                loading={i < 2 ? 'eager' : 'lazy'}
                priority={i === 0}
              />
              {/* Baker main info */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="mb-1 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {baker.name}
                </h3>
                <div className="mb-4 flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
                  {translatedBaker.department && (
                    <span>
                      <strong>{translations[language].department}</strong>{' '}
                      {translatedBaker.department}
                    </span>
                  )}
                  <span>
                    <strong>{translations[language].since}</strong> {baker.since}
                  </span>
                  <span>
                    <strong>{translations[language].masterSince}</strong> {baker.masterSince}
                  </span>
                </div>
                {/* Mehr Info Button */}
                <Link href={`/about/master-bakers/${slugify(baker.name)}`} passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto inline-block rounded-[20px] bg-[#EE0A24] px-6 py-3 text-center text-base font-semibold tracking-wide !text-white shadow-md transition-all hover:bg-[#D72638] focus:ring-2 focus:ring-[#EE0A24]/40 focus:outline-none"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    aria-label={`${translations[language].moreInfo} ${baker.name}`}
                  >
                    {translations[language].moreInfo}
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

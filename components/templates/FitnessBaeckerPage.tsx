'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fitnessBaeckerTranslations } from '@/app/fitness-baker/translations'
import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

const heroImage = '/images/Fitnessbaecker-Baeckerei-Pappert-1600x1080.jpg'
const trainerTeamImage = '/images/papperts_Fitnessbaecker_Trainerteam-1.jpg'

export default function FitnessBaeckerPage() {
  const { language } = useLanguageStore()
  const translations = fitnessBaeckerTranslations[language]
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src={heroImage}
          alt="Fitnessbäcker Hero"
          fill
          className="rounded-[25px] object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-[25px] bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-4xl font-extrabold drop-shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {translations.hero.title}
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto mb-8 rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.intro.title}
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-lg text-gray-700 dark:text-[#FAD2E1]"
        >
          {translations.intro.description}
        </motion.p>
      </section>

      {/* Trainer Team Photo & Caption */}
      <section className="mx-auto mb-12 max-w-3xl">
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 overflow-hidden rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <Image
            src={trainerTeamImage}
            alt="Fitnessbäcker Trainerteam"
            width={1200}
            height={600}
            className="h-64 w-full object-cover md:h-80"
            priority={false}
          />
        </motion.div>
        <p className="text-center text-sm text-gray-600 dark:text-[#FAD2E1]">
          {translations.trainerTeam.caption}
        </p>
      </section>

      {/* Trainer Section */}
      <section className="mx-auto mb-16 max-w-2xl text-center">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.trainerTeam.title}
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-base text-gray-700 dark:text-[#FAD2E1]"
        >
          {translations.trainerTeam.description}
        </motion.p>
        <Link href="/fitness-baker/trainers">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
          >
            {translations.trainerTeam.button}
          </motion.button>
        </Link>
      </section>

      {/* Fitnesskalender (Events) */}
      <section className="mb-12">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.calendar.title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(translations.calendar.events).map((event, idx) => (
            <motion.div
              key={event.title}
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex flex-col overflow-hidden rounded-[25px] bg-[#FFF6F6] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
            >
              <div className="relative h-48 w-full">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{event.description}</p>
                <div className="mt-auto">
                  <Link href={event.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                      className="w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
                  >
                      {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  </motion.button>
                </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}

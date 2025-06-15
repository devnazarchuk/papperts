'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

import { fitnessBaeckerTranslations } from '../translations'

type Monat = keyof typeof fitnessBaeckerTranslations.de.runningSchool.months
type Thema = keyof typeof fitnessBaeckerTranslations.de.runningSchool.events

const termine = [
  {
    monat: 'april' as Monat,
    events: [
      {
        date: '24.04.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'kickoff' as Thema,
      },
    ],
  },
  {
    monat: 'may' as Monat,
    events: [
      {
        date: '04.05.2025',
        time: '09:00 Uhr',
        ort: 'Sportplatz Poppenhausen',
        thema: 'rhonRun' as Thema,
      },
      {
        date: '08.05.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'basis' as Thema,
      },
      {
        date: '15.05.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'basis' as Thema,
      },
      {
        date: '22.05.2025',
        time: '19:00 Uhr',
        ort: 'Sportplatz Poppenhausen',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'june' as Monat,
    events: [
      {
        date: '05.06.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '12.06.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '14.06.2025',
        time: '15:00 Uhr',
        ort: 'Fulda',
        thema: 'rhonEnergy' as Thema,
      },
      {
        date: '26.06.2025',
        time: '19:00 Uhr',
        ort: 'Wanderparkplatz Kleinsassen',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'july' as Monat,
    events: [
      {
        date: '03.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'technique' as Thema,
      },
      {
        date: '10.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'strength' as Thema,
      },
      {
        date: '17.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'speed' as Thema,
      },
      {
        date: '24.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '31.07.2025',
        time: '19:00 Uhr',
        ort: 'Rodenbach',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'august' as Monat,
    events: [
      {
        date: '07.08.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '14.08.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'technique' as Thema,
      },
      {
        date: '21.08.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'strength' as Thema,
      },
      {
        date: '28.08.2025',
        time: '19:00 Uhr',
        ort: 'Parkplatz Guckaisee',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'september' as Monat,
    events: [
      {
        date: '04.09.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'speed' as Thema,
      },
      {
        date: '07.09.2025',
        time: '10:00 Uhr',
        ort: 'Fulda',
        thema: 'fuldaMarathon' as Thema,
      },
      {
        date: '11.09.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'finale' as Thema,
      },
    ],
  },
]

export default function RunningSchoolPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null)
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].runningSchool

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/Laufschule-Fitnessbaecker-Baeckerei-Pappert-1.jpg"
          alt={translations.title}
          fill
          className="rounded-[25px] object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 rounded-[25px] bg-black/40" />
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <motion.h1
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-4xl font-extrabold drop-shadow-lg"
          >
            {translations.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto mb-8 max-w-2xl rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323]">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-center text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.subtitle}
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-center text-base text-gray-700 dark:text-gray-300"
        >
          {translations.description}
        </motion.p>
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.start}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.location}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.trainer}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {translations.details.price}
          </div>
        </motion.div>
      </section>

      {/* Termine Section */}
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md dark:bg-[#232323]">
        <motion.h3
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-center text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
        >
          {translations.schedule.title}
        </motion.h3>
        <div className="space-y-4">
          {termine.map(({ monat, events }) => (
            <div
              key={monat}
              className="overflow-hidden rounded-xl border bg-[#FFF5E1] dark:bg-[#2A2A2A]"
            >
              <button
                className="flex w-full items-center justify-between bg-[#FFF5E1] px-6 py-4 text-lg font-semibold text-[#D72638] transition hover:bg-[#FFE2E2] focus:ring-2 focus:ring-[#D72638] focus:outline-none dark:bg-[#2A2A2A] dark:text-[#FFA5A5] dark:hover:bg-[#333333]"
                onClick={() => setOpenMonth(openMonth === monat ? null : monat)}
                aria-expanded={openMonth === monat}
                aria-controls={`panel-${monat}`}
              >
                <span>{translations.months[monat]}</span>
                <span className="text-2xl">{openMonth === monat ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openMonth === monat && (
                  <motion.div
                    id={`panel-${monat}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <ul className="divide-y divide-[#FAD2E1] dark:divide-[#444444]">
                      {events.map((event) => (
                        <li key={event.date + event.time} className="py-3">
                          <div className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                            {event.date}
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-300">
                            {event.time}, {event.ort}
                          </div>
                          {event.thema && (
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {translations.events[event.thema]}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          {translations.schedule.note}
        </div>
      </section>
    </PageWrapper>
  )
}

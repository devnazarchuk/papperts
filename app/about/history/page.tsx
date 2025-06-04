'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  image?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1928',
    title: 'Gründung des heutigen Unternehmens',
    description:
      'Wilhelm Pappert legte den Grundstein des heutigen Betriebs in Poppenhausen, nachdem er als zweiter Sohn die elterliche Bäckerei in Hünfeld nicht übernehmen konnte.',
    image: '/soft-images/about-baker.jpg',
  },
  {
    year: '1964',
    title: 'der Generationenwechsel',
    description:
      'Josef und Sophie Pappert werden zu den neuen Eigentümern der Bäckerei und verlegen die Produktionsstätte an einen anderen Ort. Zeitgleich wird erstmals ein Großmarkt in Fulda beliefert.',
  },
  {
    year: '1994',
    title: 'eine neue Backstube',
    description:
      '1994 wird eine neue Backstube mit zeitgemäßer Einrichtung gebaut, so dass handwerkliche Fertigkeiten und das Wissen vieler Generationen mit Hilfe modernster Backgeräte optimal umgesetzt werden können.',
    image: '/soft-images/products-bread-display.jpg',
  },
  {
    year: '1996',
    title: 'Nächster Generationenwechsel',
    description:
      'Gründer-Enkel Bernd Pappert und Manfred Klüber übernehmen die Geschäftsleitung. Schon seit ein paar Jahren verfolgen die beiden eine neue Strategie und bauen für Pappert ein Fachgeschäfts-Netz auf.',
  },
  {
    year: '2006',
    title: 'der Fitnessbäcker wird geboren',
    description:
      'Seit 2006 veranstaltet Pappert verschiedene Sportkurse und Trainings. Mit Sascha Wingenfeld und seinem Trainerteam ist stets ein Training garantiert, das sowohl Anfänger als auch ambitioniertere Athleten anspricht.',
    image: '/soft-images/fitness-member.jpg',
  },
  {
    year: '2011',
    title: 'ein neues Konzept: Pasta Boys',
    description:
      'Wasser und Mehl: Das sind nicht nur bäckertypische Zutaten, sondern auch die von Nudeln. Was lag also näher als mit der Agentur schulzundtebbe ein Nudel-Konzept zu entwickeln.',
  },
  {
    year: '2014',
    title: 'Umbau, Ausbau und zwei große Erfolge',
    description:
      'In der Produktion gibt es eine neue Ofenanlage. Auch Marketing und soziales Engagement beeindrucken die Außenwelt. Sichtbare Beweise dafür sind "Der große Preis des Mittelstands" der Oskar-Patzelt-Stiftung.',
  },
  {
    year: '2016',
    title: 'Neue Konzepte, ein Preis und Next Generation',
    description:
      'Im Frühjahr 2016 eröffnet Pappert in Bad Hersfeld sein erstes Fachgeschäft mit dem italienischen Konzept pappiamo. Große Ehre: Für die rasante Entwicklung wird die Bäckerei mit dem Titel Hessen Champion ausgezeichnet.',
  },
  {
    year: '2017',
    title: 'Das 100. Fachgeschäft wird eröffnet',
    description:
      'Kurz vor Ostern 2017 durchbricht Pappert eine kleine Schallmauer: In Lauterbach eröffnet die Bäckerei ihr 100. Fachgeschäft.',
  },
  {
    year: '2018',
    title: 'Pappert Next Generation',
    description: 'Maximilian Pappert macht eine Ausbildung zum Bäcker.',
  },
  {
    year: '2020',
    title: 'Brot-Sommelier in den Reihen',
    description:
      'Corona prägt das Jahr – aber es gibt auch gute Nachrichten. Mit Vincent Pappert setzt auch der zweite Sohn von Bernd Pappert die Familientradition fort und lernt den Beruf des Bäckers.',
  },
  {
    year: '2021',
    title: 'Pappert Next Generation',
    description: 'Laura Klüber wird Verkaufsleiterin und Mitglied der Geschäftsleitung.',
  },
  {
    year: '2022',
    title: 'Pappert Backhaus',
    description:
      'In Rönshausen bei Eichenzell erfolgt mit dem Spatenstich der offizielle Startschuss der Bauarbeiten für das neue papperts Backhaus.',
    image: '/images/AATA13607_1360_768_1024.jpg',
  },
  {
    year: '2023',
    title: 'Pappert Next Generation und Deutschlands servicefreundlichste Bäckerei',
    description:
      "Mit Luca-Antonia Pappert startet ein weiteres Mitglied der Pappert'schen Familie ihre Karriere im Backhandwerk und beginnt die Ausbildung zur Konditorin.",
  },
  {
    year: '2024',
    title: 'Pappert Next Generation',
    description:
      'Die Familientradition wird weiter fortgesetzt: Während Max Klüber ins Familienunternehmen als Referent der Geschäftsleitung eintritt, legt Maximilian Pappert erfolgreich seine Meisterprüfung ab.',
  },

  {
    year: '2025',
    title: 'Pappert Backhaus',
    description:
      'Im März 2025 schlägt die Bäckerei Pappert ein neues Kapitel in ihrer fast 100-jährigen Geschichte auf: Nach 97 Jahren am Standort Poppenhausen zieht das Unternehmen in das neue Pappert Backhaus nach Eichenzell.',
  },
]

const TimelineCard = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex w-full max-w-4xl flex-col gap-4 rounded-[25px] bg-white/80 p-4 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:p-6 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
    >
      <div className="flex flex-col flex-wrap gap-2 sm:flex-row sm:items-center sm:gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EE0A24] text-lg font-bold text-white shadow-md transition-all duration-300 sm:h-14 sm:w-14 sm:text-xl dark:bg-[#EE0A24]"
        >
          {event.year}
        </motion.div>
        <h3 className="text-lg font-bold text-[#EE0A24] transition-colors duration-200 sm:text-xl dark:text-[#EE0A24]">
          {event.title}
        </h3>
      </div>
      {event.image && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative h-40 w-full overflow-hidden rounded-xl sm:h-48"
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 2}
          />
        </motion.div>
      )}
      <p className="text-sm text-gray-700 transition-colors duration-200 sm:text-base dark:text-gray-300">
        {event.description}
      </p>
    </motion.div>
  )
}

const TimelineDot = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`absolute top-6 left-0 h-6 w-6 -translate-x-1/2 rounded-full border-4 transition-all duration-300 sm:left-1/2 sm:h-4 sm:w-4 sm:-translate-x-1/2 ${
        isActive
          ? 'border-[#EE0A24] bg-white shadow-[0_0_15px_rgba(238,10,36,0.5)] dark:border-[#EE0A24] dark:bg-[#232323]'
          : 'border-[#EE0A24] bg-white dark:border-[#EE0A24] dark:bg-[#232323]'
      }`}
    />
  )
}

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      className="min-h-screen rounded-[25px] bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] p-4 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 sm:p-8 md:p-12 lg:p-16 dark:from-[#181818] dark:to-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
      ref={containerRef}
    >
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-12 md:mb-16"
        >
          <h1
            className="mb-3 font-serif text-2xl font-bold text-[#EE0A24] transition-colors duration-200 sm:mb-4 sm:text-3xl md:text-4xl dark:text-[#EE0A24]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Unsere Geschichte
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-700 transition-colors duration-200 sm:text-base md:text-lg dark:text-gray-300">
            Der heutige Firmeninhaber Bernd Pappert ist nachweisbar die 7. Generation von Bäckern
            der Pappert&apos;schen Familie in Folge. Die Ahnenliste der Bäcker lässt sich sogar in
            gerader Linie bis in das Jahr 1600 zurückverfolgen.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-7xl">
          {/* Animated Vertical Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-1 -translate-x-1/2 bg-[#EE0A24] transition-colors duration-200 sm:left-1/2 sm:-translate-x-1/2 dark:bg-[#EE0A24]"
          />

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <TimelineDot isActive={false} />

                {/* Card */}
                <div
                  className={`w-full max-w-[calc(100%-2rem)] sm:max-w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                  } ml-8 sm:ml-0`}
                >
                  <TimelineCard event={event} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

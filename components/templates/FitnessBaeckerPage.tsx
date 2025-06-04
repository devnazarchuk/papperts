'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { PageWrapper } from '@/components/ui/PageWrapper'

const heroImage = '/images/Fitnessbaecker-Baeckerei-Pappert-1600x1080.jpg'
const trainerTeamImage = '/images/papperts_Fitnessbaecker_Trainerteam-1.jpg'

const events = [
  {
    title: 'Laufschule',
    image: '/images/Laufschule-Fitnessbaecker-Baeckerei-Pappert-1-768x463.jpg',
    start: 'Start: 24. April, 19.00 Uhr, Treffpunkt wechselnd',
    description:
      'Bei unserer Laufschule treffen wir uns jeden Donnerstag an verschiedenen Orten, um zu trainieren. Alle Gruppen werden von erfahrenen Lauf-Trainern betreut. Jede Einheit steht unter einem besonderen Motto, um etwa Technik oder Schnelligkeit zu verbessern.',
    link: '/fitness-baker/running-school',
  },
  {
    title: 'Full-Body-Workout',
    image: '/images/Zirkeltraining-Fitnessbaecker-Baeckerei-Pappert-1-768x463.jpg',
    start: 'Start: 04. Juni, 19.45 Uhr, Sportplatz Weyhers',
    description:
      'Power-Workout unter freiem Himmel. Im Zirkeltraining gibt es pures Training und sportliche Herausforderung. Wichtigstes Trainingsgerät ist der eigene Körper – dazu kommen einfache, aber effiziente Hilfsmittel wie Kettlebell, TRX und Medizinbälle.',
    link: '/fitness-baker/full-body-workout',
  },
  {
    title: 'Rückentraining 2.0 Sommer',
    image: '/images/rucken-traning.jpg',
    start: 'Start: 04. Juni, 18.30 Uhr, Sportplatz Weyhers',
    description:
      'In unserem Sommerkurs findet nicht das klassische Rückentraining statt. Wir verlagern die Übungen ins TRX, sodass mit Hilfe eines Seil- und Schlingensystems die Koordination geschult wird. So heben wir das Rückentraining auf ein neues Level.',
    link: '/fitness-baker/back-training-summer',
  },
  {
    title: 'Alpentour 2025',
    image: '/images/Baeckerei_Pappert_veranstaltet_Alpentour_2025-768x512.jpg',
    start: 'Tour-Zeitraum: 22. bis 27. Juni 2025',
    description:
      'Unsere sechstägige Alpentour 2025 startet von der Gamsstadt Kitzbühel und führt über die Kitzbüheler Alpen und den Nationalpark Hohe Tauern in die Sonnenstadt Lienz – hier sind die Dolomiten zum Greifen nah.',
    link: '/fitness-baker/alpine-tour-2025',
  },
  {
    title: 'MTB-Kids-Camps',
    image: '/images/MTB-Kids-Camp-Fitnessbaecker-Baeckerei-Pappert-1-768x463.jpg',
    start: 'Start: 11. August, 9.00 Uhr, Sportplatz Poppenhausen',
    description:
      'Auch in 2025 starten wir wieder mit unseren beliebten MTB Kids-Camps. Unter professioneller Anleitung heizen wir zwei Tage lang durch eine große Cross-Strecke mit Trails, Rampen und Hindernissen. Um die Sicherheit zu verbessern, gibt es Geschicklichkeitsparcours und Bremstraining.',
    link: '/fitness-baker/mtb-kids-camp-2025',
  },
  {
    title: 'Fitnessbäcker-Bike-Day',
    image: '/images/MTB-Fitness-Camp-Fitnessbaecker-Baeckerei-Pappert-768x463.jpg',
    start: 'Start: 30. August, 14.00 Uhr, Sportplatz Poppenhausen',
    description:
      'Erst heißt’s: Techniktraining auf einem Parcours, mit Paletten, Rampen & Co. Hier feilen wir gemeinsam an Skills und Sicherheit. Danach geht’s direkt raus auf eine abwechslungsreiche Tour rund um Poppenhausen. Im Anschluss lassen wir den Fitnessbäcker-Bike-Day ganz entspannt bei einem leckeren BBQ ausklingen.',
    link: '/fitness-baker/bike-day',
  },
  {
    title: 'E-Bike-Power',
    image: '/images/E-Bike-Power-Baeckerei-Pappert-1-768x469.jpg',
    start: 'Start: 06. September, 10.00 Uhr, Sportplatz Poppenhausen',
    description:
      'Gemeinsam mit dem E-Bike-Profi Harald Döppner stehen jede Menge Spaß, Action, Technik-Training, Kilometer und Höhenmeter auf dem Tacho. Das Tagesevent für Männer und Frauen kombiniert technische Skills mit der direkten Umsetzung des Erlernten auf einer Tour durch die Rhön.',
    link: '/fitness-baker/ebike-power',
  },
]

export default function FitnessBaeckerPage() {
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
            BEWEGUNG UND ERNÄHRUNG
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto mb-8 rounded-2xl bg-white p-8 shadow-md">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold text-[#D72638]"
        >
          FITNESSBÄCKER
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-lg text-gray-700"
        >
          Bewegung und Ernährung: Damit befassen wir uns tagtäglich, um unsere Kunden fit und gesund
          zu halten. Darum haben wir uns in den letzten Jahren als Fitnessbäcker immer stärker auf
          eine Kombination dieser beiden Pfeiler eines optimalen Lebensstils konzentriert. Und das
          möchten wir natürlich an Sie weiter geben. Über den Fitnessbäcker haben wir dazu den
          optimalen Weg gefunden!
        </motion.p>
      </section>

      {/* Trainer Team Photo & Caption */}
      <section className="mx-auto mb-12 max-w-3xl">
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 overflow-hidden rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff]"
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
        <p className="text-center text-sm text-gray-600">
          v. l. n. r.: Sascha Wingenfeld, Markus Hofmann, Verena Schmelz, Julia Herbert, Mandana
          Hoffmann, Nicole Knacker, Elke Seng, Tanja Böhm. Es fehlen: Wolfgang Obermahr, Reiner
          Menz, Mario Henning
        </p>
      </section>

      {/* Trainer Section */}
      <section className="mx-auto mb-16 max-w-2xl text-center">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 text-2xl font-bold text-[#D72638]"
        >
          UNSERE TRAINER
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-base text-gray-700"
        >
          Nicht nur bei unseren Backwaren setzen wir auf Qualität, sondern auch bei unseren
          Mitarbeitern. Und natürlich auch bei unseren Trainern für den Fitnessbäcker.
        </motion.p>
        <Link href="/about/trainerteam">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff]"
          >
            mehr Lesen
          </motion.button>
        </Link>
      </section>

      {/* Fitnesskalender (Events) */}
      <section className="mb-12">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center text-2xl font-bold text-[#D72638]"
        >
          FITNESSKALENDER
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex flex-col overflow-hidden rounded-[25px] bg-[#FFF6F6] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff]"
            >
              <div className="relative h-48 w-full">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-[#D72638]">{event.title}</h3>
                <p className="mb-1 text-sm text-gray-500">{event.start}</p>
                <p className="mb-4 flex-1 text-sm text-gray-700">{event.description}</p>
                <Link href={event.link} className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff]"
                  >
                    Mehr erfahren
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}

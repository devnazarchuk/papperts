'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const jobCards = [
  {
    title: 'Personalsachbearbeiter (m/w/d)',
    img: '/soft-images/job-hr.jpg',
    desc: 'Verstärke unser HR-Team und betreue unsere Mitarbeitenden mit Herz und Organisationstalent.',
  },
  {
    title: 'Immobilienkaufmann (m/w/d)',
    img: '/soft-images/job-immobilen.jpg',
    desc: 'Verwalte und entwickle unsere Immobilienprojekte mit Weitblick und Engagement.',
  },
  {
    title: 'Produktionshelfer (m/w/d)',
    img: '/soft-images/job-products.jpg',
    desc: 'Unterstütze unser Produktionsteam bei der Herstellung unserer Backwaren.',
  },
  {
    title: 'Bäckereiverkäufer (m/w/d)',
    img: '/soft-images/job-saler.jpg',
    desc: 'Berate unsere Kunden freundlich und verkaufe unsere Backwaren.',
  },
  {
    title: 'Fachkraft für Lagerlogistik (m/w/d)',
    img: '/soft-images/job-logistik.jpg',
    desc: 'Sorge für einen reibungslosen Ablauf im Lager.',
  },
  {
    title: 'Reinigungskraft (m/w/d)',
    img: '/soft-images/job-clear.jpg',
    desc: 'Halte unsere Filialen und Produktionsstätten sauber und ordentlich.',
  },
  {
    title: 'Anlagen- und Maschinenführer (m/w/d)',
    img: '/soft-images/job-mechaniker.jpg',
    desc: 'Bediene und überwache unsere modernen Produktionsanlagen.',
  },
  {
    title: 'Mitarbeiter Personalentwicklung (m/w/d)',
    img: '/soft-images/job-hr-dev.jpg',
    desc: 'Gestalte die Entwicklung unserer Mitarbeitenden aktiv mit.',
  },
  {
    title: 'Teamleiter (m/w/d)',
    img: '/soft-images/job-chef.jpg',
    desc: 'Führe ein Team mit Leidenschaft und Verantwortungsbewusstsein.',
  },
  {
    title: 'Reinigungsfachkraft (m/w/d)',
    img: '/soft-images/job-clearn.jpg',
    desc: 'Sorge für Sauberkeit und Hygiene in unseren Betrieben.',
  },
]

export default function CareersJobsPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8 text-center text-4xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            Offene Stellen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            Hier findest du alle aktuellen Jobangebote bei Pappert. Wir freuen uns auf deine
            Bewerbung!
          </motion.p>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {jobCards.map((job, i) => (
              <motion.div
                key={job.title}
                className="flex flex-col items-center rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="mb-6 flex h-40 w-40 items-center justify-center">
                  <Image
                    src={job.img || '/soft-images/job-default.jpg'}
                    alt={job.title}
                    width={160}
                    height={160}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
                <h3
                  className="mb-2 text-center text-2xl font-extrabold text-[#3A3A3A] transition-colors duration-200 dark:text-[#FDEEEE]"
                  style={{
                    fontFamily:
                      'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                  }}
                >
                  {job.title}
                </h3>
                <p
                  className="mb-6 text-center text-base text-gray-600 transition-colors duration-200 dark:text-gray-300"
                  style={{
                    fontFamily:
                      'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                  }}
                >
                  {job.desc}
                </p>
                <Link href="/careers/initiativbewerbung" passHref legacyBehavior>
                  <button
                    className="mt-auto rounded-full bg-[#c60627] px-8 py-3 text-lg font-bold text-white shadow-md transition-all transition-colors duration-200 hover:bg-[#EE0A24] hover:shadow-xl dark:bg-[#EE0A24] dark:hover:bg-[#FF1A1A]"
                    style={{
                      fontFamily:
                        'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                    }}
                  >
                    Jetzt bewerben
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

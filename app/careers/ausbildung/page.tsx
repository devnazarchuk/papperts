'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaUserPlus } from 'react-icons/fa'

const ausbildungJobs = [
  {
    title: 'Ausbildung Konditor (m/w/d)',
    location: '36124 Eichenzell',
    img: '/soft-images/job-kondi.jpg',
  },
  {
    title: 'Ausbildung Fachkraft für Lagerlogistik (m/w/d)',
    location: '36124 Eichenzell',
    img: '/soft-images/job-lager.jpg',
  },
  {
    title: 'Ausbildung Bäcker (m/w/d)',
    location: '36124 Eichenzell',
    img: '/soft-images/job-aus-backer.jpg',
  },
  {
    title: 'Ausbildung Fachverkäufer (m/w/d) im Lebensmittelhandwerk',
    location: '63450 Hanau',
    img: '/soft-images/job-fach-sales.jpg',
  },
  {
    title: 'Ausbildung Gebäudereiniger (m/w/d)',
    location: '36124 Eichenzell',
    img: '/soft-images/job-clear.jpg',
  },
]

export default function CareersAusbildungPage() {
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
            Ausbildung & Praktikum
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
            Starte deine Karriere bei Pappert mit einer Ausbildung oder einem Praktikum. Wir
            begleiten dich auf deinem Weg ins Berufsleben!
          </motion.p>
        </div>
      </section>

      {/* Ausbildung Jobs Grid */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ausbildungJobs.map((job, i) => (
              <motion.div
                key={job.title + job.location + i}
                className="flex flex-col items-center rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="mb-4 flex h-40 w-40 items-center justify-center">
                  <Image
                    src={job.img || '/soft-images/job-default.jpg'}
                    alt={job.title}
                    width={160}
                    height={160}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="mb-2 flex items-center justify-center">
                  <h3
                    className="text-center text-2xl font-extrabold text-[#3A3A3A] transition-colors duration-200 dark:text-[#FDEEEE]"
                    style={{
                      fontFamily:
                        'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                    }}
                  >
                    {job.title}
                  </h3>
                </div>
                {job.location && (
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFD6D6] px-4 py-1 text-sm font-semibold text-[#c60627] transition-colors duration-200 dark:bg-[#3A3A3A] dark:text-[#FFA5A5]">
                    <FaMapMarkerAlt className="mr-1 inline-block" />
                    {job.location}
                  </span>
                )}
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
            {/* Initiativbewerbung Card */}
            <motion.div
              className="flex flex-col items-center rounded-[25px] border-2 border-dashed border-[#c60627] bg-[#FFF6F6] p-8 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-all hover:-translate-y-1 hover:shadow-xl dark:border-[#EE0A24] dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ausbildungJobs.length * 0.05, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center">
                <FaUserPlus className="h-12 w-12 text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]" />
              </div>
              <h3
                className="mb-2 text-center text-2xl font-extrabold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
                style={{
                  fontFamily:
                    'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                Initiativbewerbung
              </h3>
              <p
                className="mb-6 text-center text-base text-gray-600 transition-colors duration-200 dark:text-gray-300"
                style={{
                  fontFamily:
                    'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                Du findest keine passende Ausbildungsstelle? Bewirb dich initiativ – wir freuen uns
                auf dich!
              </p>
              <a
                href="/careers/initiativbewerbung"
                className="mt-auto rounded-full bg-[#c60627] px-8 py-3 text-center text-lg font-bold text-white shadow-md transition-all transition-colors duration-200 hover:bg-[#EE0A24] hover:shadow-xl dark:bg-[#EE0A24] dark:hover:bg-[#FF1A1A]"
                style={{
                  fontFamily:
                    'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                Express bewerben
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

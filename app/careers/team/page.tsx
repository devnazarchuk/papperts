'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBroom, FaTruck, FaUserGraduate, FaUsers, FaUserTie } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { teamTranslations } from './languages'

const testimonials = [
  {
    de: {
      text: 'Ich darf erstklassige Produkte verkaufen und habe dabei das Gefühl einen sicheren Arbeitsplatz zu haben.',
      author: 'Philipp Tach, seit 2021, Verkauf',
    },
    en: {
      text: 'I get to sell premium products and feel secure in my workplace.',
      author: 'Philipp Tach, since 2021, Sales',
    },
    img: '/images/Zitat-Michael-Wessels-Baeckerei-Papperts.png',
  },
  {
    de: {
      text: 'Ich bin glücklich bei Pappert und könnte mir nicht vorstellen, woanders zu arbeiten. Es passt einfach alles.',
      author: 'Bettina Rudolph, seit 1999, Verkauf',
    },
    en: {
      text: 'I am happy at Pappert and could not imagine working anywhere else. Everything just fits perfectly.',
      author: 'Bettina Rudolph, since 1999, Sales',
    },
    img: '/images/Zitat-Bettina-Rudolph-Baeckerei-Papperts.png',
  },
]

const teamGallery = [
  {
    img: '/soft-images/job-chef.jpg',
    alt: { de: 'Teamleitung', en: 'Team Leader' },
  },
  {
    img: '/soft-images/job-kondi.jpg',
    alt: { de: 'Konditorin', en: 'Pastry Chef' },
  },
  { img: '/soft-images/job-aus-backer.jpg', alt: { de: 'Bäcker', en: 'Baker' } },
  {
    img: '/soft-images/job-saler.jpg',
    alt: { de: 'Verkäuferin', en: 'Sales Associate' },
  },
  {
    img: '/soft-images/job-clear.jpg',
    alt: { de: 'Reinigungskraft', en: 'Cleaning Staff' },
  },
  { img: '/soft-images/job-lager.jpg', alt: { de: 'Lager', en: 'Warehouse' } },
  {
    img: '/soft-images/job-mechaniker.jpg',
    alt: { de: 'Maschinenführer', en: 'Machine Operator' },
  },
]

const jobWorlds = [
  {
    title: {
      de: 'Fahrer',
      en: 'Driver',
    },
    img: '/soft-images/job-delivery.jpg',
    icon: <FaTruck className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Teamleitung',
      en: 'Team Leader',
    },
    img: '/soft-images/job-chef.jpg',
    icon: <FaUserTie className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Konditor',
      en: 'Pastry Chef',
    },
    img: '/soft-images/job-kondi.jpg',
    icon: <FaUserGraduate className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Bäckereiverkäufer',
      en: 'Bakery Sales',
    },
    img: '/soft-images/job-saler.jpg',
    icon: <FaUsers className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Reinigungskraft',
      en: 'Cleaning Staff',
    },
    img: '/soft-images/job-clear.jpg',
    icon: <FaBroom className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Bäckerhelfer',
      en: 'Baker Assistant',
    },
    img: '/soft-images/job-aus-backer.jpg',
    icon: <FaUserGraduate className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Bäcker',
      en: 'Baker',
    },
    img: '/soft-images/job-aus-backer.jpg',
    icon: <FaUserGraduate className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Kommissionierer',
      en: 'Order Picker',
    },
    img: '/soft-images/job-lager.jpg',
    icon: <FaTruck className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
]

export default function TeamPage() {
  const { language } = useLanguageStore()
  const t = teamTranslations[language]

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
            {t.title}
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
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
          >
            <h2 className="mb-4 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
              {t.sectionTitle}
            </h2>
            <p className="mb-8 text-center text-gray-600 transition-colors duration-200 dark:text-gray-300">
              {t.sectionContent}
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-colors duration-200 dark:bg-gray-800"
                >
                  <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={`/images/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-gray-600 transition-colors duration-200 dark:text-gray-300">
                    {member.position}
                  </p>
                  <p className="text-center text-gray-600 transition-colors duration-200 dark:text-gray-300">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Gallery Slider */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.teamInAction}
          </motion.h2>
          <div className="relative mx-auto max-w-[100vw] overflow-hidden">
            <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4">
              {teamGallery.map((img, i) => (
                <motion.div
                  key={img.img}
                  className="flex max-w-xs min-w-[260px] flex-col items-center rounded-2xl bg-[#FFF6F6] p-4 shadow-md transition-all duration-200 hover:shadow-xl dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
                >
                  <Image
                    src={img.img}
                    alt={img.alt[language]}
                    width={200}
                    height={160}
                    className="mb-2 rounded-xl object-cover"
                  />
                  <div className="text-center text-base font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-300">
                    {img.alt[language]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.teamVoices}
          </motion.h2>
          <div className="scrollbar-hide flex justify-center gap-3 overflow-x-auto pb-4 md:gap-6">
            {testimonials.map((tst, i) => (
              <motion.div
                key={tst.img}
                className="flex max-w-[260px] min-w-[200px] flex-col items-center rounded-2xl border border-[#FFD2D2] bg-[#FFF6F6] p-4 text-center text-[#3A3A3A] shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-shadow duration-200 hover:shadow-xl md:max-w-xs md:p-8 dark:border-[#3A3A3A] dark:bg-[#232323] dark:text-[#FDEEEE] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a] dark:hover:shadow-[12px_12px_32px_#181818,_-12px_-12px_32px_#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src={tst.img}
                  alt={tst[language].author}
                  width={64}
                  height={64}
                  className="mb-2 h-16 w-16 rounded-full object-cover md:mb-4 md:h-24 md:w-24"
                />
                <blockquote className="mb-1 text-xs text-[#c60627] italic transition-colors duration-200 md:mb-2 md:text-base dark:text-[#EE0A24]">
                  „{tst[language].text}“
                </blockquote>
                <div className="text-[10px] text-gray-700 transition-colors duration-200 md:text-sm dark:text-gray-300">
                  {tst[language].author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Worlds Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.yourCareers}
          </motion.h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {jobWorlds.map((job, i) => (
              <motion.div
                key={job.title[language]}
                className="flex flex-col items-center rounded-[25px] bg-[#FFF6F6] p-6 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center">
                  <Image
                    src={job.img}
                    alt={job.title[language]}
                    width={96}
                    height={96}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div className="mb-2 flex items-center justify-center">
                  <span className="mr-2">{job.icon}</span>
                  <h3
                    className="text-center text-lg font-extrabold text-[#3A3A3A] transition-colors duration-200 dark:text-[#FDEEEE]"
                    style={{
                      fontFamily:
                        'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                    }}
                  >
                    {job.title[language]}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaEnvelope, FaGift, FaUserGraduate, FaUserPlus, FaUserTie } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export default function JobsPage() {
  // Get current language and translations
  const { language } = useLanguageStore()
  const t = translations[language]

  // Section data with translation support
  const sections = [
    {
      title: t.careers.openPositions || 'Offene Stellen',
      desc: t.careers.openPositionsDesc || 'Alle aktuellen Jobangebote bei Pappert.',
      href: '/careers/jobs',
      icon: <FaUserTie className="h-10 w-10 text-[#D72638]" />,
    },
    {
      title: t.careers.education || 'Ausbildung & Praktikum',
      desc:
        t.careers.educationDesc ||
        'Starte deine Karriere mit einer Ausbildung oder einem Praktikum.',
      href: '/careers/ausbildung',
      icon: <FaUserGraduate className="h-10 w-10 text-[#D72638]" />,
    },
    {
      title: t.careers.benefits || 'Benefits & Kultur',
      desc: t.careers.benefitsDesc || 'Entdecke die Vorteile und Unternehmenskultur bei Pappert.',
      href: '/careers/benefits',
      icon: <FaGift className="h-10 w-10 text-[#D72638]" />,
    },
    // {
    //   title: t.careers.team || 'Team & Einblicke',
    //   desc: t.careers.teamDesc || 'Lerne unser Team kennen und erhalte Einblicke.',
    //   href: '/careers/team',
    //   icon: <FaUsers className="h-10 w-10 text-[#D72638]" />,
    // },
    {
      title: t.careers.initiative || 'Initiativbewerbung',
      desc: t.careers.initiativeDesc || 'Keine passende Stelle? Bewirb dich initiativ!',
      href: '/careers/initiativbewerbung',
      icon: <FaUserPlus className="h-10 w-10 text-[#D72638]" />,
    },
    {
      title: t.careers.contact || 'Kontakt',
      desc:
        t.careers.contactDesc || 'Deine Ansprechpartnerin für alle Fragen rund um die Bewerbung.',
      href: '/careers/contact',
      icon: <FaEnvelope className="h-10 w-10 text-[#D72638]" />,
    },
  ]

  // Testimonials with translation support
  const testimonials = [
    {
      text:
        t.careers.testimonial1 ||
        'Ich darf erstklassige Produkte verkaufen und habe dabei das Gefühl einen sicheren Arbeitsplatz zu haben.',
      author: t.careers.testimonial1Author || 'Philipp Tach, seit 2021, Verkauf',
      img: '/images/Zitat-Michael-Wessels-Baeckerei-Papperts.png',
    },
    {
      text:
        t.careers.testimonial2 ||
        'Ich bin glücklich bei Pappert und könnte mir nicht vorstellen, woanders zu arbeiten. Es passt einfach alles.',
      author: t.careers.testimonial2Author || 'Bettina Rudolph, seit 1999, Verkauf',
      img: '/images/Zitat-Bettina-Rudolph-Baeckerei-Papperts.png',
    },
  ]

  return (
    <>
      <head>
        {/* Preload only the most important font */}
        <link
          rel="preload"
          href="/fonts/SF-Pro-Display-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload LCP (hero/brand) image for instant LCP */}
        <link
          rel="preload"
          href="/images/Zitat-Michael-Wessels-Baeckerei-Papperts.png"
          as="image"
          imageSrcSet="/images/Zitat-Michael-Wessels-Baeckerei-Papperts.png 1x"
        />
      </head>
      <main className="min-h-screen overflow-hidden">
        {/* Header Section */}
        <section className="w-full overflow-hidden px-8 py-8 sm:px-10 sm:py-12 md:px-16">
          {/* Container for header content */}
          <div className="mx-auto max-w-screen-lg">
            {/* Animated main title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-6 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 md:mb-8 md:text-4xl dark:text-[#EE0A24]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.careers.title || 'Karriere bei Pappert'}
            </motion.h1>
            {/* Animated intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mx-auto mb-8 max-w-[95%] text-center text-[12px] text-[#232323] transition-colors duration-200 sm:max-w-[90%] md:mb-12 md:max-w-[80%] md:text-lg lg:max-w-[70%] dark:text-[#FFF5E1]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.careers.intro ||
                'Entdecke deine Möglichkeiten bei Pappert: Ob im Verkauf, in der Produktion, in der Logistik oder im Büro – wir bieten dir vielfältige Karrierewege, ein herzliches Team und zahlreiche Vorteile. Wähle einen Bereich aus, um mehr zu erfahren!'}
            </motion.p>
          </div>
        </section>

        {/* Section Cards - Adaptive Grid */}
        <section className="w-full overflow-hidden px-8 py-8 sm:px-10 sm:py-12 md:px-16">
          <div className="mx-auto max-w-screen-lg">
            {/* Responsive grid: 1 col xs, 2 sm, 3 md, 4 lg+ */}
            <div className="mx-auto mb-8 grid max-w-[98%] grid-cols-1 gap-4 sm:max-w-[95%] sm:gap-6 md:max-w-[90%] md:gap-8 lg:max-w-[85%] lg:gap-10">
              {sections.map((sec, i) => (
                <motion.a
                  key={sec.title}
                  href={sec.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
                  className="group flex h-full min-h-[120px] w-full cursor-pointer flex-col items-center rounded-[25px] border border-[#FFD2D2] bg-[#FFF6F6] p-4 text-center text-[#3A3A3A] shadow-[10px_10px_20px_e4c6c6,_-10px_-10px_20px_ffffff] transition-all hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3A3A] dark:bg-[#232323] dark:text-[#FDEEEE] dark:shadow-[10px_10px_20px_181818,_-10px_-10px_20px_2a2a2a] dark:hover:shadow-[12px_12px_32px_181818,_-12px_-12px_32px_2a2a2a]"
                  style={{ textDecoration: 'none' }}
                  aria-label={sec.title}
                >
                  {/* Icon */}
                  <div className="mb-2 text-xl md:mb-4 md:text-3xl">{sec.icon}</div>
                  {/* Section title */}
                  <h2 className="mb-1 text-[14px] font-extrabold text-[#c60627] transition-colors duration-200 md:mb-2 md:text-lg dark:text-[#EE0A24]">
                    {sec.title}
                  </h2>
                  {/* Section description */}
                  <p className="mb-2 flex-1 text-[12px] text-[#232323] transition-colors duration-200 md:mb-4 md:text-base dark:text-[#FFF5E1]">
                    {sec.desc}
                  </p>
                  {/* Call to action */}
                  <span className="mt-auto inline-block rounded-full bg-[#c60627] px-3 py-1.5 text-[12px] font-bold text-white shadow-md transition-all group-hover:bg-[#EE0A24] md:px-6 md:py-2 md:text-sm">
                    {t.careers.more || 'Mehr erfahren'}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Slider - Adaptive & Touch Friendly */}
        <section className="w-full overflow-hidden px-8 py-8 sm:px-10 sm:py-12 md:px-16">
          <div className="mx-auto max-w-screen-lg">
            {/* Animated testimonials title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6 text-center text-xl font-bold text-[#c60627] transition-colors duration-200 md:mb-8 md:text-3xl dark:text-[#EE0A24]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.careers.testimonialsTitle || 'Stimmen aus dem Team'}
            </motion.h2>
            {/* Horizontal scroll for testimonials, touch and mouse friendly */}
            <div className="scrollbar-hide flex snap-x snap-mandatory justify-center gap-6 overflow-x-auto pb-6 sm:gap-8 md:gap-10 lg:gap-12">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.author}
                  className="flex w-[95%] max-w-sm snap-center flex-col items-center rounded-2xl border border-[#FFD2D2] bg-[#FFF6F6] p-6 text-center text-[#3A3A3A] shadow-[10px_10px_24px_e4c6c6,_-10px_-10px_24px_ffffff] transition-shadow duration-200 hover:shadow-xl sm:w-auto md:max-w-sm md:p-8 dark:border-[#3A3A3A] dark:bg-[#232323] dark:text-[#FDEEEE] dark:shadow-[10px_10px_24px_181818,_-12px_-12px_32px_2a2a2a] dark:hover:shadow-[12px_12px_32px_181818,_-12px_-12px_32px_2a2a2a]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  {/* Testimonial image */}
                  <Image
                    src={t.img}
                    alt={t.author}
                    width={72}
                    height={72}
                    className="mb-3 h-18 w-18 rounded-full object-cover md:mb-5 md:h-24 md:w-24"
                  />
                  {/* Testimonial text */}
                  <blockquote className="mb-2 text-[13px] text-[#c60627] italic transition-colors duration-200 md:mb-3 md:text-base dark:text-[#EE0A24]">
                    „{t.text}“
                  </blockquote>
                  {/* Testimonial author */}
                  <div className="text-[12px] text-[#232323] transition-colors duration-200 md:text-sm dark:text-[#FFF5E1]">
                    {t.author}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

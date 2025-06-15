'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'

import { kundenkarteTranslations } from './languages'

export default function CustomerCardPage() {
  const { language } = useLanguageStore()
  const t = kundenkarteTranslations[language as keyof typeof kundenkarteTranslations]

  return (
    <>
      <Head>
        <title>Papperts Kundenkarte - Sammeln Sie Punkte und sparen Sie</title>
        <meta
          name="description"
          content="Entdecken Sie die Vorteile der Papperts Kundenkarte. Sammeln Sie Punkte, genießen Sie exklusive Angebote und sparen Sie bei jedem Einkauf."
        />
      </Head>
    <main className="min-h-screen bg-[#FFF6F6] pb-12 transition-colors duration-200 dark:bg-[#232323]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/Homepage-Bild-Kundenkarte-1920x1080.jpg"
          alt="Pappert Kundenkarte Hero"
          fill
          className="rounded-[25px] object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-[25px] bg-black/30 transition-colors dark:bg-black/60">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center text-3xl font-bold text-white drop-shadow-lg transition-colors md:text-5xl"
          >
              {t.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 md:px-12 xl:px-32">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-2 text-center text-2xl font-bold text-[#D72638] transition-colors md:text-3xl dark:text-[#FFA5A5]"
        >
            {t.subtitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mb-2 text-center text-lg text-gray-700 transition-colors dark:text-[#FAD2E1]"
        >
            {t.description}
        </motion.p>
        <p className="mb-8 text-center text-sm text-gray-500 transition-colors dark:text-[#FAD2E1]">
            {t.note}
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h3 className="mb-4 text-xl font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.benefits.title}
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.benefits.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            <li className="text-xs text-gray-500 transition-colors dark:text-[#FAD2E1]">
                {t.benefits.note}
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h4 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.howToUse.title}
            </h4>
            <ol className="list-decimal space-y-2 pl-6 text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.howToUse.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
          >
            <h4 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.faq.title}
          </h4>
          <div className="space-y-4 text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.faq.questions.map((qa, index) => (
                <div key={index}>
                  <p className="font-semibold">{qa.question}</p>
                  <p>{qa.answer}</p>
            </div>
              ))}
          </div>
          <p className="mt-4 text-xs text-gray-500 transition-colors dark:text-[#FAD2E1]">
              {t.faq.note}
          </p>
        </motion.div>
      </section>

      {/* Gutscheinkarten Section */}
      <section className="mt-12 w-full px-4 md:px-12 xl:px-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <Image
            src="/icons/GutscheinkartendBPaP.png"
            alt="Gutscheinkarten der Bäckerei Pappert aus Poppenhausen"
            width={300}
            height={300}
            className="mx-auto mb-6 rounded-2xl"
          />
          <p className="mb-4 text-center text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.giftCards.description}
          </p>
          <h3 className="mb-4 text-center text-xl font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.giftCards.title}
          </h3>
          <p className="mb-4 text-center text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.giftCards.benefits}
          </p>
          <h3 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.giftCards.howTo.title}
          </h3>
          <ol className="mb-4 list-decimal pl-6 text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.giftCards.howTo.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
          </ol>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.bon-bon.de/gutschein/papperts/"
              target="_blank"
              rel="noopener"
              className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
            >
                {t.giftCards.button}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
    </>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'

import { pappertPlusTranslations } from './languages'

export default function PappertPlusPage() {
  const { language } = useLanguageStore()
  const t = pappertPlusTranslations[language]

  return (
    <>
      <div className="min-h-screen bg-[#FDEEEE] font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-[#3A3A3A] transition-colors duration-200 dark:bg-[#181818] dark:text-[#FFF5E1]">
      {/* Hero Section */}
        <section className="relative flex w-full flex-col items-center justify-center bg-gradient-to-br from-[#FFF5E1] to-white px-4 py-16 transition-colors dark:from-[#232323] dark:to-[#181818]">
          <div className="z-10 flex w-full flex-col items-center px-4 text-center md:px-12 xl:px-32">
          <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-extrabold text-white transition-colors md:text-5xl dark:text-white"
          >
              {t.title}
          </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 text-lg text-gray-700 transition-colors md:text-xl dark:text-[#FFF5E1]"
            >
              {t.subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-block rounded-full bg-[#D72638] px-8 py-4 font-semibold text-white !text-white shadow transition-all transition-colors hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              aria-label={t.joinNow}
            >
              {t.joinNow}
            </motion.button>
        </div>
      </section>

        {/* Features Section */}
        <section className="w-full px-4 py-12 md:px-12 xl:px-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-2xl font-bold text-[#c60627] transition-colors dark:text-[#EE0A24]"
          >
            {t.features.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-center text-gray-600 transition-colors dark:text-gray-300"
        >
            {t.features.description}
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.items.map((item, idx) => (
        <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col rounded-2xl bg-[#FFF6F6] p-6 shadow-md transition-colors transition-shadow hover:shadow-xl dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]"
              >
                <h3 className="mb-2 text-xl font-semibold text-[#c60627] transition-colors dark:text-[#EE0A24]">
                  {item.title}
          </h3>
                <p className="text-gray-600 transition-colors dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="w-full bg-[#FFF5E1] px-4 py-12 transition-colors dark:bg-[#232323] md:px-12 xl:px-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-2xl font-bold text-[#c60627] transition-colors dark:text-[#EE0A24]"
          >
            {t.howToUse.title}
          </motion.h2>
          <ol className="mx-auto max-w-2xl space-y-4">
            {t.howToUse.steps.map((step, idx) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EE0A24] text-lg font-bold text-white !text-white transition-colors dark:bg-[#232323] dark:text-[#FFA5A5]">
                  {idx + 1}
                </span>
                <span className="text-base text-[#3A3A3A] transition-colors dark:text-[#FFF5E1]">
                  {step}
                </span>
              </motion.li>
            ))}
          </ol>
      </section>

        {/* Benefits Section */}
        <section className="w-full px-4 py-12 md:px-12 xl:px-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-2xl font-bold text-[#c60627] transition-colors dark:text-[#EE0A24]"
          >
            {t.benefits.title}
          </motion.h2>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {t.benefits.items.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 rounded-2xl bg-[#FFF6F6] p-6 shadow-md transition-colors transition-shadow hover:shadow-xl dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFD6D6] text-xl font-bold text-[#c60627] transition-colors dark:bg-[#232323] dark:text-[#FFA5A5]">
                  ✓
                </div>
                <div className="text-base text-[#3A3A3A] transition-colors dark:text-[#FFF5E1]">
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative flex w-full items-center justify-center bg-gradient-to-br from-[#FFD6D6] to-[#FFA5A5] px-4 py-16 transition-colors dark:from-[#232323] dark:to-[#181818]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/icons/plus-card.png"
              alt="Pappert Plus Hintergrund"
              fill
              className="object-cover object-center opacity-30 transition-colors dark:opacity-20"
            />
          </div>
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-[#c60627] transition-colors dark:text-[#EE0A24]"
            >
              {t.cta.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-lg text-[#3A3A3A] transition-colors dark:text-[#FFF5E1]"
            >
              {t.cta.subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-block rounded-full bg-[#D72638] px-8 py-4 font-semibold text-white !text-white shadow transition-all transition-colors hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              aria-label={t.cta.button}
            >
              {t.cta.button}
            </motion.button>
        </div>
      </section>
      </div>
    </>
  )
}

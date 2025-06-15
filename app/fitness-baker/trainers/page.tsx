'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

import { fitnessBaeckerTranslations } from '../translations'

export default function Trainers() {
  const { language } = useLanguageStore()
  const translations = fitnessBaeckerTranslations[language].trainers

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full mb-12">
        <Image
          src="/images/papperts_Fitnessbaecker-team.jpg"
          alt={translations.title}
          fill
          className="object-cover rounded-[25px]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 rounded-[25px]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            {translations.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="text-lg max-w-2xl drop-shadow-lg"
          >
            {translations.description}
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(translations.trainers).map(([key, trainer]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white dark:bg-[#232323] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">{trainer.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{trainer.title}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{trainer.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5] mb-3">Specialties</h4>
                  <div className="space-y-3">
                    {Object.entries(trainer.specialties).map(([key, specialty]) => (
                      <div key={key} className="bg-[#FFF5E1] dark:bg-[#2a2a2a] rounded-lg p-3">
                        <h5 className="font-medium text-[#D72638] dark:text-[#FFA5A5] mb-1">{specialty.name}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{specialty.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5] mb-3">Certifications</h4>
                  <ul className="space-y-2">
                    {trainer.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-[#D72638] dark:text-[#FFA5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
} 
'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { GiSlicedBread } from 'react-icons/gi'

import { useLanguageStore } from '@/app/store/languageStore'

import { storesTranslations } from './stores-translations'

const MapClient = dynamic(() => import('./MapClient'), { ssr: false })

export default function StoresPage() {
  const { language } = useLanguageStore()
  const t = storesTranslations[language]

  return (
    <main className="min-h-screen bg-[#FFF5E1] py-6 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] transition-colors duration-200 md:py-12 dark:bg-[#232323]">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 flex flex-col items-center md:mb-12"
        >
          <div className="mb-2">
            <GiSlicedBread className="h-12 w-12 text-[#D72638] drop-shadow-md md:h-16 md:w-16" />
          </div>
          <h1 className="text-center font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-2xl font-bold tracking-wide text-[#D72638] uppercase transition-colors md:text-4xl dark:text-[#FFA5A5]">
            {t.title}
          </h1>
          <p className="mt-2 max-w-xl text-center text-sm text-[#D72638]/80 transition-colors md:text-lg dark:text-[#FFA5A5]/80">
            {t.description}
          </p>
          <p className="mt-2 max-w-xl text-center text-xs text-gray-600 dark:text-[#FAD2E1]">
            {language === 'de'
              ? 'Finde deinen Lieblingsstandort und genieße frische Backwaren, Kaffee und mehr.'
              : 'Find your favorite location and enjoy fresh baked goods, coffee, and more.'}
          </p>
        </motion.div>

        {/* Navigation Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/stores/locator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-[#FFE2E2] bg-[#FFF6F6] p-6 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-all hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#232323]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D72638] text-white transition-colors group-hover:bg-[#FF3B59] dark:bg-[#FFA5A5] dark:text-[#232323]">
                <FaMapMarkerAlt className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                  {language === 'de' ? 'Filialfinder' : 'Store Locator'}
                </h3>
                <p className="text-sm text-gray-600 transition-colors dark:text-[#FAD2E1]">
                  {language === 'de'
                    ? 'Finde die nächste Filiale in deiner Nähe'
                    : 'Find the nearest store in your area'}
                </p>
              </div>
            </motion.div>
          </Link>

          <Link href="/stores/contact">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-[#FFE2E2] bg-[#FFF6F6] p-6 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-all hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#232323]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D72638] text-white transition-colors group-hover:bg-[#FF3B59] dark:bg-[#FFA5A5] dark:text-[#232323]">
                <FaPhone className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                  {language === 'de' ? 'Kontakt' : 'Contact'}
                </h3>
                <p className="text-sm text-gray-600 transition-colors dark:text-[#FAD2E1]">
                  {language === 'de'
                    ? 'Kontaktiere uns für Fragen und Feedback'
                    : 'Contact us for questions and feedback'}
                </p>
              </div>
            </motion.div>
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="flex-1 md:col-span-1">
            <div className="space-y-4 md:space-y-6">
              {t.stores.map((store, idx) => (
                <motion.button
                  key={store.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03, boxShadow: '0 6px 24px #e4c6c6, 0 0px 0px #fff' }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`${language === 'de' ? 'Standort' : 'Location'}: ${store.name}`}
                  tabIndex={0}
                  className="w-full cursor-pointer rounded-2xl border border-[#FFE2E2] bg-[#FFF6F6] p-4 text-left shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-all transition-colors duration-200 hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#232323]"
                >
                  <h3
                    className="mb-1 text-base font-semibold text-[#D72638] transition-colors md:mb-2 md:text-xl dark:text-[#FFA5A5]"
                    style={{ fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  >
                    {store.name}
                  </h3>
                  <p className="text-xs break-words text-gray-600 transition-colors md:text-base dark:text-[#FAD2E1]">
                    {store.address}
                  </p>
                  {store.description && (
                    <p className="mt-1 text-xs break-words text-gray-700 transition-colors md:mt-2 md:text-sm dark:text-[#FAD2E1]">
                      {store.description}
                    </p>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex min-h-[220px] flex-1 items-stretch md:col-span-1 md:min-h-[320px] lg:col-span-2 lg:min-h-[400px]">
            <div className="h-[220px] w-full flex-1 overflow-hidden rounded-2xl border border-[#FFF5E1] bg-[#FFE2E2] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors md:h-[320px] lg:h-[400px] dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]">
              <MapClient storeLocations={t.stores.map((s, i) => ({
                id: i + 1,
                name: s.name,
                address: s.address,
                coordinates: [
                  { lat: 50.8706, lng: 9.7047 },
                  { lat: 50.5558, lng: 9.6752 },
                  { lat: 50.6342, lng: 9.3931 },
                ][i],
                description: s.description,
              }))} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

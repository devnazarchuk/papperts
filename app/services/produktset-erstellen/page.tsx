'use client'

import { motion } from 'framer-motion'

// Produktset erstellen page: lets users create and share product sets
export default function ProduktsetErstellenPage() {
  return (
    <main className="min-h-screen bg-[#FDEEEE] py-16 pb-12 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-[#3A3A3A] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#181818] dark:text-[#FFF5E1] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]">
      {/* Product Sets Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-4 rounded-2xl bg-[#FFF6F6] p-8 shadow-md transition-colors md:mx-12 xl:mx-32 dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
      >
        <h2 className="mb-6 text-[18px] font-semibold text-[#232323] dark:text-[#FFF5E1]">
          Ihr Produktset erstellen
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Selection */}
          <div>
            <h3 className="mb-4 text-[14px] font-medium text-[#232323] dark:text-[#FFF5E1]">
              Produkte auswählen
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="product1" className="h-5 w-5" />
                <label
                  htmlFor="product1"
                  className="text-[13px] text-[#232323] dark:text-[#FFF5E1]"
                >
                  Sauerteigbrot
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="product2" className="h-5 w-5" />
                <label
                  htmlFor="product2"
                  className="text-[13px] text-[#232323] dark:text-[#FFF5E1]"
                >
                  Schoko-Croissant
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="product3" className="h-5 w-5" />
                <label
                  htmlFor="product3"
                  className="text-[13px] text-[#232323] dark:text-[#FFF5E1]"
                >
                  Rote Samttorte
                </label>
              </div>
            </div>
          </div>

          {/* Sharing Options */}
          <div>
            <h3 className="mb-4 text-[14px] font-medium text-[#232323] dark:text-[#FFF5E1]">
              Set teilen
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Set-Name"
                className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-[13px] text-[#232323] transition-colors dark:border-[#3A3A3A] dark:bg-[#181818] dark:text-[#FDEEEE]"
              />
              <textarea
                placeholder="Notiz hinzufügen (optional)"
                className="h-32 w-full rounded-2xl border border-gray-300 bg-white p-3 text-[13px] text-[#232323] transition-colors dark:border-[#3A3A3A] dark:bg-[#181818] dark:text-[#FDEEEE]"
              ></textarea>
              <div className="flex space-x-4">
                <button className="flex-1 rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-shadow hover:bg-[#EE0A24] hover:shadow-xl dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]">
                  Set speichern
                </button>
                <button className="flex-1 rounded-2xl bg-[#FFA5A5] px-6 py-3 font-semibold text-[#3A3A3A] shadow-md transition-colors transition-shadow hover:bg-[#FF3B59] hover:shadow-xl dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#181818]">
                  Set teilen
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

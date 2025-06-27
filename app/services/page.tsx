'use client'
import { motion } from 'framer-motion'
import { FaCreditCard, FaGift, FaMobileAlt, FaStar } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    overview: string
    rewardTiers: {
      title: string
      tiers: {
        bronze: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        silver: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        gold: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
      }
    }
    services: {
      customerCard: {
        title: string
        description: string
        button: string
      }
      vouchers: {
        title: string
        description: string
        button: string
      }
      app: {
        title: string
        description: string
        button: string
      }
      pappertPlus: {
        title: string
        description: string
        button: string
      }
    }
  }
  en: {
    title: string
    overview: string
    rewardTiers: {
      title: string
      tiers: {
        bronze: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        silver: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        gold: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
      }
    }
    services: {
      customerCard: {
        title: string
        description: string
        button: string
      }
      vouchers: {
        title: string
        description: string
        button: string
      }
      app: {
        title: string
        description: string
        button: string
      }
      pappertPlus: {
        title: string
        description: string
        button: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Bonusprogramm',
    overview:
      'Werden Sie Teil unseres Bonusprogramms und sammeln Sie bei jedem Einkauf Cashback. Teilen Sie Ihre Lieblings-Produktsets mit Freunden und sichern Sie sich zusätzliche Prämien!',
    rewardTiers: {
      title: 'Bonus-Stufen',
      tiers: {
        bronze: {
          name: 'Bronze',
          spend: '0 € – 100 €',
          cashback: '3%',
          benefits: ['Basis-Cashback-Rate', 'Geburtstags-Überraschung', 'Newsletter-Updates'],
        },
        silver: {
          name: 'Silber',
          spend: '101 € – 300 €',
          cashback: '5%',
          benefits: [
            'Erhöhte Cashback-Rate',
            'Gratis Kaffee zu jedem Einkauf',
            'Früher Zugang zu Saisonartikeln',
          ],
        },
        gold: {
          name: 'Gold',
          spend: 'ab 301 €',
          cashback: '7%',
          benefits: [
            'Premium-Cashback-Rate',
            'Kostenlose Lieferung ab 50 € Bestellwert',
            'Exklusive Verkostungsevents',
            'Individuelle Tortenkonsultation',
          ],
        },
      },
    },
    services: {
      customerCard: {
        title: 'Kundenkarte',
        description: 'Punkte sammeln & Vorteile sichern.',
        button: 'Mehr erfahren',
      },
      vouchers: {
        title: 'Gutscheine',
        description: 'Genuss verschenken – für jeden Anlass.',
        button: 'Mehr erfahren',
      },
      app: {
        title: 'App',
        description: 'Bestellen, sparen & digital genießen.',
        button: 'Mehr erfahren',
      },
      pappertPlus: {
        title: 'Pappert Plus',
        description: 'Exklusive Club-Vorteile & Events.',
        button: 'Mehr erfahren',
      },
    },
  },
  en: {
    title: 'Bonus Program',
    overview:
      'Become part of our bonus program and collect cashback with every purchase. Share your favorite product sets with friends and secure additional rewards!',
    rewardTiers: {
      title: 'Reward Tiers',
      tiers: {
        bronze: {
          name: 'Bronze',
          spend: '€0 – €100',
          cashback: '3%',
          benefits: ['Basic cashback rate', 'Birthday surprise', 'Newsletter updates'],
        },
        silver: {
          name: 'Silver',
          spend: '€101 – €300',
          cashback: '5%',
          benefits: [
            'Increased cashback rate',
            'Free coffee with every purchase',
            'Early access to seasonal items',
          ],
        },
        gold: {
          name: 'Gold',
          spend: 'from €301',
          cashback: '7%',
          benefits: [
            'Premium cashback rate',
            'Free delivery for orders over €50',
            'Exclusive tasting events',
            'Personal cake consultation',
          ],
        },
      },
    },
    services: {
      customerCard: {
        title: 'Customer Card',
        description: 'Collect points & secure benefits.',
        button: 'Learn more',
      },
      vouchers: {
        title: 'Vouchers',
        description: 'Give the gift of enjoyment – for any occasion.',
        button: 'Learn more',
      },
      app: {
        title: 'App',
        description: 'Order, save & enjoy digitally.',
        button: 'Learn more',
      },
      pappertPlus: {
        title: 'Pappert Plus',
        description: 'Exclusive club benefits & events.',
        button: 'Learn more',
      },
    },
  },
}

const rewardTiers = [
  {
    name: 'bronze',
    spend: '0 € – 100 €',
    cashback: '3%',
    benefits: ['Basis-Cashback-Rate', 'Geburtstags-Überraschung', 'Newsletter-Updates'],
  },
  {
    name: 'silver',
    spend: '101 € – 300 €',
    cashback: '5%',
    benefits: [
      'Erhöhte Cashback-Rate',
      'Gratis Kaffee zu jedem Einkauf',
      'Früher Zugang zu Saisonartikeln',
    ],
  },
  {
    name: 'gold',
    spend: 'ab 301 €',
    cashback: '7%',
    benefits: [
      'Premium-Cashback-Rate',
      'Kostenlose Lieferung ab 50 € Bestellwert',
      'Exklusive Verkostungsevents',
      'Individuelle Tortenkonsultation',
    ],
  },
]

export default function BonusPage() {
  const language = useLanguageStore((state) => state.language)

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
          href="/images/Pappert-Plus-300x120.png"
          as="image"
          imageSrcSet="/images/Pappert-Plus-300x120.png 1x"
        />
      </head>
      <main className="min-h-screen bg-[#FDEEEE] py-16 pb-12 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-[#3A3A3A] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#181818] dark:text-[#FFF5E1] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]">
        {/* Services Navigation Card Grid */}
        <section className="mb-8 px-2 md:px-8 xl:px-24">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* Kundenkarte */}
            <div className="group flex min-h-[140px] flex-col items-center justify-between rounded-xl border border-[#FFD2D2] bg-[#FFF6F6] p-3 text-center shadow-sm transition-all transition-colors duration-150 focus-within:ring-2 focus-within:ring-[#D72638] focus-within:ring-offset-2 hover:shadow-md dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]">
              <a
                href="/services/kundenkarte"
                className="flex w-full flex-col items-center focus:outline-none"
                tabIndex={0}
                aria-label={translations[language].services.customerCard.title}
              >
                <FaCreditCard className="mb-1 text-[#D72638]" size={24} />
                <span className="mb-0.5 text-[13px] font-bold text-[#D72638]">
                  {translations[language].services.customerCard.title}
                </span>
                <span className="text-[12px] leading-tight text-[#232323] transition-colors dark:text-[#FAD2E1]">
                  {translations[language].services.customerCard.description}
                </span>
              </a>
              <a
                href="/services/kundenkarte"
                className="mt-2 inline-block rounded-full bg-[#D72638] px-4 py-1 text-xs font-semibold !text-white text-white shadow transition-all transition-colors hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              >
                {translations[language].services.customerCard.button}
              </a>
            </div>
            {/* Gutscheine */}
            <div className="group flex min-h-[140px] flex-col items-center justify-between rounded-xl border border-[#FFD2D2] bg-[#FFF6F6] p-3 text-center shadow-sm transition-all transition-colors duration-150 focus-within:ring-2 focus-within:ring-[#D72638] focus-within:ring-offset-2 hover:shadow-md dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]">
              <a
                href="/services/gutscheine"
                className="flex w-full flex-col items-center focus:outline-none"
                tabIndex={0}
                aria-label={translations[language].services.vouchers.title}
              >
                <FaGift className="mb-1 text-[#FFA5A5]" size={24} />
                <span className="mb-0.5 text-[13px] font-bold text-[#D72638]">
                  {translations[language].services.vouchers.title}
                </span>
                <span className="text-[12px] leading-tight text-[#232323] transition-colors dark:text-[#FAD2E1]">
                  {translations[language].services.vouchers.description}
                </span>
              </a>
              <a
                href="/services/gutscheine"
                className="mt-2 inline-block rounded-full bg-[#D72638] px-4 py-1 text-xs font-semibold !text-white text-white shadow transition-all transition-colors hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              >
                {translations[language].services.vouchers.button}
              </a>
            </div>
            {/* App */}
            <div className="group flex min-h-[140px] flex-col items-center justify-between rounded-xl border border-[#FFD2D2] bg-[#FFF6F6] p-3 text-center shadow-sm transition-all transition-colors duration-150 focus-within:ring-2 focus-within:ring-[#D72638] focus-within:ring-offset-2 hover:shadow-md dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]">
              <a
                href="/services/app"
                className="flex w-full flex-col items-center focus:outline-none"
                tabIndex={0}
                aria-label={translations[language].services.app.title}
              >
                <FaMobileAlt className="mb-1 text-[#FF3B59]" size={24} />
                <span className="mb-0.5 text-[13px] font-bold text-[#D72638]">
                  {translations[language].services.app.title}
                </span>
                <span className="text-[12px] leading-tight text-[#232323] transition-colors dark:text-[#FAD2E1]">
                  {translations[language].services.app.description}
                </span>
              </a>
              <a
                href="/services/app"
                className="mt-2 inline-block rounded-full bg-[#D72638] px-4 py-1 text-xs font-semibold !text-white text-white shadow transition-all transition-colors hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              >
                {translations[language].services.app.button}
              </a>
            </div>
            {/* Pappert Plus */}
            <div className="group flex min-h-[140px] flex-col items-center justify-between rounded-xl border border-[#FFD2D2] bg-[#FFF6F6] p-3 text-center shadow-sm transition-all transition-colors duration-150 focus-within:ring-2 focus-within:ring-[#D72638] focus-within:ring-offset-2 hover:shadow-md dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]">
              <a
                href="/services/pappert-plus"
                className="flex w-full flex-col items-center focus:outline-none"
                tabIndex={0}
                aria-label={translations[language].services.pappertPlus.title}
              >
                <FaStar className="mb-1 text-[#EE0A24]" size={24} />
                <span className="mb-0.5 text-[13px] font-bold text-[#D72638]">
                  {translations[language].services.pappertPlus.title}
                </span>
                <span className="text-[12px] leading-tight text-[#232323] transition-colors dark:text-[#FAD2E1]">
                  {translations[language].services.pappertPlus.description}
                </span>
              </a>
              <a
                href="/services/pappert-plus"
                className="mt-2 inline-block rounded-full bg-[#D72638] px-4 py-1 text-xs font-semibold !text-white text-white shadow transition-all transition-colors hover:bg-[#EE0A24] focus:ring-2 focus:ring-[#D72638] focus:ring-offset-2 focus:outline-none dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
              >
                {translations[language].services.pappertPlus.button}
              </a>
            </div>
          </div>
        </section>

        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 text-center text-4xl font-bold tracking-tight text-[#D72638] drop-shadow-lg transition-colors dark:text-[#FFA5A5]"
          style={{
            fontFamily:
              'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        >
          {translations[language].title}
        </motion.h1>

        {/* Program Overview */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-[13px] text-[#232323] transition-colors dark:text-[#FAD2E1]">
            {translations[language].overview}
          </p>
        </motion.section>

        {/* Reward Tiers */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-semibold transition-colors dark:text-[#FFA5A5]">
            {translations[language].rewardTiers.title}
          </h2>
          <div className="grid gap-8 px-4 md:grid-cols-3 md:px-12 xl:px-32">
            {rewardTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="rounded-2xl border border-[#FFD2D2] bg-[#FFF6F6] p-8 shadow-md transition-colors transition-shadow hover:shadow-xl dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#2a2a2a]"
              >
                <h3 className="mb-4 text-2xl font-bold text-[#D72638] drop-shadow-sm transition-colors dark:text-[#FFA5A5]">
                  {
                    translations[language].rewardTiers.tiers[
                      tier.name as keyof typeof translations.de.rewardTiers.tiers
                    ].name
                  }
                </h3>
                <div className="mb-4 text-[#232323] transition-colors dark:text-[#FAD2E1]">
                  <p className="mb-2 text-[13px] text-[#232323] dark:text-[#FAD2E1]">
                    Umsatz:{' '}
                    {
                      translations[language].rewardTiers.tiers[
                        tier.name as keyof typeof translations.de.rewardTiers.tiers
                      ].spend
                    }
                  </p>
                  <p className="text-xl font-semibold text-[#EE0A24] transition-colors dark:text-[#FFA5A5]">
                    {
                      translations[language].rewardTiers.tiers[
                        tier.name as keyof typeof translations.de.rewardTiers.tiers
                      ].cashback
                    }{' '}
                    Cashback
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold transition-colors dark:text-[#FFA5A5]">
                    Vorteile:
                  </h4>
                  <ul className="list-inside list-disc space-y-1 text-[13px] text-[#232323] transition-colors dark:text-[#FAD2E1]">
                    {translations[language].rewardTiers.tiers[
                      tier.name as keyof typeof translations.de.rewardTiers.tiers
                    ].benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </>
  )
}

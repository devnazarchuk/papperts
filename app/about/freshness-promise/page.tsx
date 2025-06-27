'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Fragment } from 'react'
import { FaClock, FaHandshake, FaMoon, FaSun } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    earlyFresh: {
      title: string
      description: string
      features: string[]
    }
    lateFresh: {
      title: string
      description: string
      features: string[]
    }
    pointFresh: {
      title: string
      description: string
      features: string[]
      overview: string
      instructions: {
        title: string
        text: string
      }
    }
    breads: {
      [key: string]: {
        name: string
        bakingTime: string
      }
    }
  }
  en: {
    title: string
    subtitle: string
    earlyFresh: {
      title: string
      description: string
      features: string[]
    }
    lateFresh: {
      title: string
      description: string
      features: string[]
    }
    pointFresh: {
      title: string
      description: string
      features: string[]
      overview: string
      instructions: {
        title: string
        text: string
      }
    }
    breads: {
      [key: string]: {
        name: string
        bakingTime: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'TÄGLICH FRISCHE VIELFALT!',
    subtitle:
      'Frische ist ein immer wichtigeres Thema. Dem werden wir gerecht. Denn wir backen den ganzen Tag über frisch. Hergestellt werden unsere Backwaren Tag für Tag und Nacht für Nacht in der Backstube in Poppenhausen. Wir haben zudem ein Konzept entwickelt, mit dem wir Ihnen über den ganzen Tag frisch gebackene, handwerklich hergestellte Brote und Backwaren anbieten können. Denn so lässt sich unser einzigartiges Frischearoma genussgerecht präsentieren.\n\nWir garantieren Ihnen, dass alle unsere Backwaren täglich frisch gebacken werden. Das ist unser Versprechen an Sie.',
    earlyFresh: {
      title: 'Früh Frisch',
      description:
        '"Frühfrisch" sind unsere Backwaren, so wie unsere Gäste diese seit langem kennen und schätzen.',
      features: [
        'Täglich frisch aus der Backstube',
        'Traditionelle Rezepte',
        'Handwerkliche Herstellung',
      ],
    },
    lateFresh: {
      title: 'Spät Frisch',
      description:
        '"Spätfrisch" sind unsere Backwaren, die frisch im Geschäft gebacken werden - passend zu jeder Uhrzeit.',
      features: [
        'Frisch gebacken im Laden',
        'Immer zur richtigen Zeit',
        'Maximale Flexibilität für Genuss',
      ],
    },
    pointFresh: {
      title: 'Punkt Frisch',
      description:
        "Unsere 'punktfrisch' Produkte werden von uns vorgebacken und können zu Hause fertig gebacken werden.",
      features: ['Vorgebacken von Pappert', 'Frisch gebacken zu Hause', 'Genuss zu jeder Zeit'],
      overview: 'Unsere punktfrisch-Brote im Überblick',
      instructions: {
        title: "So einfach geht's:",
        text: 'Ofen vorheizen und bei 220°C (Ober-/Unterhitze) bzw. 200°C (Heißluft) laut Zeitangabe fertig backen. Je nach Ofentyp kann die Backzeit variieren.',
      },
    },
    breads: {
      franzose: {
        name: 'Der Franzose',
        bakingTime: '18 Minuten',
      },
      italiener: {
        name: 'Der Italiener',
        bakingTime: '18 Minuten',
      },
      'rubli-dinkler': {
        name: 'Der Rübli-Dinkler',
        bakingTime: '18 Minuten',
      },
      korn: {
        name: 'Rhöner Korn',
        bakingTime: '23 Minuten',
      },
      kruste: {
        name: 'Rhöner Kruste',
        bakingTime: '23 Minuten',
      },
    },
  },
  en: {
    title: 'DAILY FRESH VARIETY!',
    subtitle:
      'Freshness is an increasingly important topic. We meet this challenge by baking fresh throughout the day. Our baked goods are produced day and night in the bakery in Poppenhausen. We have also developed a concept that allows us to offer you freshly baked, artisanal breads and baked goods throughout the day. This is how we can present our unique fresh aroma in a way that enhances enjoyment.\n\nWe guarantee that all our baked goods are freshly baked daily. This is our promise to you.',
    earlyFresh: {
      title: 'Early Fresh',
      description:
        '"Early fresh" are our baked goods, as our guests have known and appreciated them for a long time.',
      features: ['Daily fresh from the bakery', 'Traditional recipes', 'Artisanal production'],
    },
    lateFresh: {
      title: 'Late Fresh',
      description:
        '"Late fresh" are our baked goods that are freshly baked in the store - suitable for any time of day.',
      features: [
        'Freshly baked in store',
        'Always at the right time',
        'Maximum flexibility for enjoyment',
      ],
    },
    pointFresh: {
      title: 'Point Fresh',
      description: "Our 'point fresh' products are pre-baked by us and can be finished at home.",
      features: ['Pre-baked by Pappert', 'Freshly baked at home', 'Enjoyment at any time'],
      overview: 'Overview of our point-fresh breads',
      instructions: {
        title: "It's that simple:",
        text: 'Preheat the oven and finish baking at 220°C (top/bottom heat) or 200°C (convection) according to the time specified. Baking time may vary depending on the oven type.',
      },
    },
    breads: {
      franzose: {
        name: 'The Frenchman',
        bakingTime: '18 minutes',
      },
      italiener: {
        name: 'The Italian',
        bakingTime: '18 minutes',
      },
      'rubli-dinkler': {
        name: 'The Carrot Dinkler',
        bakingTime: '18 minutes',
      },
      korn: {
        name: 'Rhön Grain',
        bakingTime: '23 minutes',
      },
      kruste: {
        name: 'Rhön Crust',
        bakingTime: '23 minutes',
      },
    },
  },
}

const punktfrischBrots = [
  {
    id: 'franzose',
    image: '/images/franzose.jpg',
  },
  {
    id: 'italiener',
    image: '/images/italiener.jpg',
  },
  {
    id: 'rubli-dinkler',
    image: '/images/karotten.jpg',
  },
  {
    id: 'korn',
    image: '/images/korn.jpg',
  },
  {
    id: 'kruste',
    image: '/images/kruste.jpg',
  },
]

export default function FreshnessPromisePage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <FaHandshake className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {translations[language].title}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            {translations[language].subtitle.split('\n\n').map((paragraph, index) => (
              <Fragment key={index}>
                {paragraph}
                {index < translations[language].subtitle.split('\n\n').length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </Fragment>
            ))}
          </p>
        </motion.div>

        {/* Früh Frisch Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex flex-col items-center gap-8 md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[260px] overflow-hidden rounded-[25px] shadow-lg transition-all duration-300 md:h-[320px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <Image
                src="/icons/fruhfrisch.png"
                alt={translations[language].earlyFresh.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-[25px] bg-white/80 p-8 shadow-lg transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <div className="mb-2 flex items-center">
                <FaSun className="mr-2 text-[#EE0A24]" />
                <h2 className="text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {translations[language].earlyFresh.title}
                </h2>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                {translations[language].earlyFresh.description}
              </p>
              <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
                {translations[language].earlyFresh.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Spät Frisch Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-col items-center gap-8 md:flex-row-reverse"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[260px] overflow-hidden rounded-[25px] shadow-lg transition-all duration-300 md:h-[320px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <Image
                src="/icons/spat-frisch.png"
                alt={translations[language].lateFresh.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-[25px] bg-white/80 p-8 shadow-lg transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <div className="mb-2 flex items-center">
                <FaMoon className="mr-2 text-[#EE0A24]" />
                <h2 className="text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {translations[language].lateFresh.title}
                </h2>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                {translations[language].lateFresh.description}
              </p>
              <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
                {translations[language].lateFresh.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Punkt Frisch Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 flex flex-col items-center gap-8 md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[260px] overflow-hidden rounded-[25px] shadow-lg transition-all duration-300 md:h-[320px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <Image
                src="/icons/frisch.png"
                alt={translations[language].pointFresh.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-[25px] bg-white/80 p-8 shadow-lg transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <div className="mb-2 flex items-center">
                <FaClock className="mr-2 text-[#EE0A24]" />
                <h2 className="text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {translations[language].pointFresh.title}
                </h2>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                {translations[language].pointFresh.description}
              </p>
              <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
                {translations[language].pointFresh.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Punktfrisch Brote Übersicht */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            {translations[language].pointFresh.overview}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {punktfrischBrots.map((brot) => (
              <div
                key={brot.id}
                className="flex flex-col items-center gap-6 rounded-[20px] bg-white/80 p-6 shadow-lg md:flex-row dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <Image
                  src={brot.image}
                  alt={translations[language].breads[brot.id].name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-xl object-cover shadow-md"
                />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#D72638]">
                    {translations[language].breads[brot.id].name}
                  </h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">
                    Backzeit: {translations[language].breads[brot.id].bakingTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[20px] bg-[#FFF6F6] p-6 text-center text-[#3A3A3A] shadow-md dark:bg-[#232323] dark:text-[#FDEEEE]">
            <h4 className="mb-2 text-lg font-semibold text-[#D72638]">
              {translations[language].pointFresh.instructions.title}
            </h4>
            <p>{translations[language].pointFresh.instructions.text}</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

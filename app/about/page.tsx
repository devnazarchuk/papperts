'use client'
import { motion } from 'framer-motion'
import { FaAppleAlt, FaAward, FaHandshake, FaHistory, FaNewspaper, FaUserTie } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'
import { CardGrid } from '@/components/ui/CardGrid'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { SoftCard } from '@/components/ui/SoftCard'

type Translations = {
  de: {
    title: string
    cards: {
      history: {
        title: string
        description: string
      }
      masterBakers: {
        title: string
        description: string
      }
      freshnessPromise: {
        title: string
        description: string
      }
      nutrition: {
        title: string
        description: string
      }
      press: {
        title: string
        description: string
      }
      clubs: {
        title: string
        description: string
      }
    }
  }
  en: {
    title: string
    cards: {
      history: {
        title: string
        description: string
      }
      masterBakers: {
        title: string
        description: string
      }
      freshnessPromise: {
        title: string
        description: string
      }
      nutrition: {
        title: string
        description: string
      }
      press: {
        title: string
        description: string
      }
      clubs: {
        title: string
        description: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Über Uns',
    cards: {
      history: {
        title: 'Unsere Geschichte',
        description: 'Von bescheidenen Anfängen bis heute – unsere Bäckertradition.',
      },
      masterBakers: {
        title: 'Meisterbäcker',
        description: 'Lernen Sie unsere Bäckermeister und ihr Handwerk kennen.',
      },
      freshnessPromise: {
        title: 'Frische-Versprechen',
        description: 'Unsere Garantie für tägliche Frische.',
      },
      nutrition: {
        title: 'Ernährung',
        description: 'Ausgewogen, gesund und lecker.',
      },
      press: {
        title: 'Presse',
        description: 'Neuigkeiten, Auszeichnungen und Medienberichte.',
      },
      clubs: {
        title: 'Clubs',
        description: 'Werden Sie Teil unserer Bäckerei-Community.',
      },
    },
  },
  en: {
    title: 'About Us',
    cards: {
      history: {
        title: 'Our History',
        description: 'From humble beginnings to today – our baking tradition.',
      },
      masterBakers: {
        title: 'Master Bakers',
        description: 'Get to know our master bakers and their craft.',
      },
      freshnessPromise: {
        title: 'Freshness Promise',
        description: 'Our guarantee for daily freshness.',
      },
      nutrition: {
        title: 'Nutrition',
        description: 'Balanced, healthy, and delicious.',
      },
      press: {
        title: 'Press',
        description: 'News, awards, and media coverage.',
      },
      clubs: {
        title: 'Clubs',
        description: 'Become part of our bakery community.',
      },
    },
  },
}

const aboutCards = [
  {
    title: 'history',
    description: 'history',
    icon: <FaHistory className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/history',
    image: '/soft-images/history.jpg',
  },
  {
    title: 'masterBakers',
    description: 'masterBakers',
    icon: <FaUserTie className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/master-bakers',
    image: '/soft-images/about-baker.jpg',
  },
  {
    title: 'freshnessPromise',
    description: 'freshnessPromise',
    icon: <FaHandshake className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/freshness-promise',
    image: '/soft-images/frische-versprechen.jpg',
  },
  {
    title: 'nutrition',
    description: 'nutrition',
    icon: <FaAppleAlt className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/nutrition',
    image: '/soft-images/healthy.jpg',
  },
  {
    title: 'press',
    description: 'press',
    icon: <FaNewspaper className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/press',
    image: '/soft-images/Pappert_painting.webp',
  },
  {
    title: 'clubs',
    description: 'clubs',
    icon: <FaAward className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/clubs',
    image: '/soft-images/pappert-plus.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function AboutPage() {
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
          href="/soft-images/history.jpg"
          as="image"
          imageSrcSet="/soft-images/history.jpg 1x"
        />
      </head>
      <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-8"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-center text-3xl font-extrabold text-[#EE0A24] md:text-5xl dark:text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {translations[language].title}
          </motion.h1>
          <motion.div variants={itemVariants}>
            <CardGrid>
              {aboutCards.map((card) => (
                <SoftCard
                  key={card.title}
                  title={
                    translations[language].cards[card.title as keyof typeof translations.de.cards]
                      .title
                  }
                  description={
                    translations[language].cards[card.title as keyof typeof translations.de.cards]
                      .description
                  }
                  icon={card.icon}
                  href={card.href}
                  image={card.image}
                  className="group relative overflow-hidden rounded-2xl border border-[#FFD2D2] bg-white p-6 text-[#232323] shadow-lg transition-all duration-300 hover:shadow-xl dark:border-[#3A3A3A] dark:bg-[#232323] dark:text-white"
                />
              ))}
            </CardGrid>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </>
  )
}

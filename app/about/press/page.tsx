'use client'
import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    introText: string
    currentArticles: string
    readMore: string
    articles: {
      [key: string]: {
        title: string
        summary: string
      }
    }
  }
  en: {
    title: string
    introText: string
    currentArticles: string
    readMore: string
    articles: {
      [key: string]: {
        title: string
        summary: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Presse & Medien',
    introText:
      'Bei pappert passiert jeden Tag etwas – wir backen Brot und Brötchen. Wenn außergewöhnliche Dinge passieren, richten wir uns über die Medien an die Öffentlichkeit.',
    currentArticles: 'Aktuelle Beiträge',
    readMore: 'mehr lesen',
    articles: {
      'gin-aus-brot': {
        title: 'Pappert entwickelt einen Gin aus Brot',
        summary:
          'Die Bäckerei Pappert und die Schlitzer Destillerie haben gemeinsam einen innovativen Gin aus Brot entwickelt. Das Projekt verbindet Tradition, Handwerk und Nachhaltigkeit: Das Roggenbrot "der Wilhelm" dient als Basis, ergänzt durch acht heimische Botanicals. Das Ergebnis ist ein charaktervoller Gin mit frischen Zitrusnoten, reifen Orangen, kräftigem Wacholder und feinen Brot-Nuancen. Ziel ist es, Lebensmittelverschwendung zu vermeiden und Backwaren im Kreislauf zu halten.',
      },
      'servicefreundlichste-baeckerei': {
        title: 'Bäckerei Pappert ist servicefreundlichste Bäckerei in Deutschland',
        summary:
          'Die Rhöner Traditionsbäckerei Pappert wurde 2023 als "Service-Champion" ausgezeichnet und belegt den 1. Platz im bundesweiten Branchen-Ranking. Mit über 150 Fachgeschäften überzeugt Pappert durch Freundlichkeit, kompetente Beratung und hohe Kundenorientierung. Die Auszeichnung basiert auf über 2 Mio. Kundenurteilen und unterstreicht die Bedeutung von Servicequalität im digitalen Zeitalter.',
      },
      'maximilian-pappert': {
        title: 'Maximilian Pappert ist neuer Bäckermeister bei der Bäckerei Pappert',
        summary:
          'Mit dem erfolgreichen Abschluss seiner Meisterprüfung tritt Maximilian Pappert, die 8. Generation an pappertschen Bäckern, in die Fußstapfen seiner Vorfahren. Die Bäckerei Pappert freut sich nun über 11 Meister in der Backstube. Das Familienunternehmen setzt auf Tradition, Moderne und Regionalität.',
      },
      traditionsstollen: {
        title: 'Traditionsstollen schnuppert Rhöner Höhenluft',
        summary:
          'Bäckerei Pappert lässt Hessens höchsten Stollen in 950 Meter Höhe reifen. Als einer von etwa 220 zertifizierten Brot-Sommeliers weltweit hat Bernd Müller das einzigartige Rezept für Hessens höchsten Stollen kreiert. Die erlesenen Zutaten und der besondere Reifeprozess sind eine Liebeserklärung an die Rhön.',
      },
      'filiale-frankfurt': {
        title: 'Neue Filiale in Frankfurt eröffnet',
        summary:
          'Im März 2024 haben wir unsere neueste Filiale in Frankfurt eröffnet. Modernes Ambiente, nachhaltige Materialien und ein erweitertes Sortiment erwarten unsere Kundschaft.',
      },
      nachhaltigkeitspreis: {
        title: 'Pappert gewinnt Nachhaltigkeitspreis',
        summary:
          'Für unser Engagement in Sachen Umwelt und regionale Zutaten wurden wir mit dem Nachhaltigkeitspreis 2024 ausgezeichnet. Wir danken allen Mitarbeitenden und Partnern für ihren Einsatz!',
      },
    },
  },
  en: {
    title: 'Press & Media',
    introText:
      'Every day at pappert, we bake bread and rolls. When extraordinary things happen, we reach out to the public through the media.',
    currentArticles: 'Current Articles',
    readMore: 'read more',
    articles: {
      'gin-aus-brot': {
        title: 'Pappert Develops Bread Gin',
        summary:
          'Pappert Bakery and Schlitzer Distillery have jointly developed an innovative gin made from bread. The project combines tradition, craftsmanship, and sustainability: The rye bread "der Wilhelm" serves as the base, complemented by eight local botanicals. The result is a distinctive gin with fresh citrus notes, ripe oranges, robust juniper, and subtle bread nuances. The goal is to avoid food waste and keep baked goods in circulation.',
      },
      'servicefreundlichste-baeckerei': {
        title: "Pappert Bakery is Germany's Most Customer-Friendly Bakery",
        summary:
          'The Rhön traditional bakery Pappert was awarded as "Service Champion" in 2023 and ranks first in the nationwide industry ranking. With over 150 specialty stores, Pappert impresses with friendliness, competent advice, and high customer orientation. The award is based on over 2 million customer reviews and emphasizes the importance of service quality in the digital age.',
      },
      'maximilian-pappert': {
        title: 'Maximilian Pappert is New Master Baker at Pappert Bakery',
        summary:
          "With the successful completion of his master's examination, Maximilian Pappert, the 8th generation of Pappert bakers, follows in the footsteps of his ancestors. Pappert Bakery now has 11 master bakers in the bakery. The family business focuses on tradition, modernity, and regionality.",
      },
      traditionsstollen: {
        title: 'Traditional Stollen Breathes Rhön Mountain Air',
        summary:
          "Pappert Bakery lets Hesse's highest stollen mature at 950 meters. As one of about 220 certified bread sommeliers worldwide, Bernd Müller has created the unique recipe for Hesse's highest stollen. The exquisite ingredients and special maturation process are a declaration of love to the Rhön region.",
      },
      'filiale-frankfurt': {
        title: 'New Branch Opens in Frankfurt',
        summary:
          'In March 2024, we opened our newest branch in Frankfurt. Modern ambiance, sustainable materials, and an expanded product range await our customers.',
      },
      nachhaltigkeitspreis: {
        title: 'Pappert Wins Sustainability Award',
        summary:
          'For our commitment to the environment and regional ingredients, we were awarded the Sustainability Award 2024. We thank all employees and partners for their dedication!',
      },
    },
  },
}

const pressArticles = [
  {
    id: 'gin-aus-brot',
    image: '/images/gin-aus-brot.jpg',
    link: '/about/press/gin-aus-brot',
  },
  {
    id: 'servicefreundlichste-baeckerei',
    image: '/images/papperts_Auszeichnung_Service-Champion_2023.jpg',
    link: '/about/press/servicefreundlichste-baeckerei',
  },
  {
    id: 'maximilian-pappert',
    image: '/images/Maximilian_Pappert_ist_neuer_Baeckermeister.jpg',
    link: '/about/press/maximilian-pappert',
  },
  {
    id: 'traditionsstollen',
    image: '/images/traditionsstollen.jpg',
    link: '/about/press/traditionsstollen',
  },
  {
    id: 'filiale-frankfurt',
    image: '/images/AATA13607_1360_768_1024.jpg',
    link: '/about/press/filiale-frankfurt',
  },
  {
    id: 'nachhaltigkeitspreis',
    image: '/images/Nachhaltigkeit.webp',
    link: '/about/press/nachhaltigkeitspreis',
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

export default function PressPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <Newspaper className="mr-2 h-10 w-10 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {translations[language].title}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            {translations[language].introText}
          </p>
        </motion.div>

        {/* Press Articles Section */}
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-center text-2xl font-bold text-[#EE0A24] md:text-3xl dark:text-[#EE0A24]"
        >
          {translations[language].currentArticles}
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pressArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="flex flex-col overflow-hidden rounded-[25px] bg-white/80 p-0 shadow-lg transition-shadow hover:shadow-xl dark:bg-[#232323]/80"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={article.image}
                  alt={translations[language].articles[article.id].title}
                  width={224}
                  height={224}
                  className="h-full w-full rounded-t-[25px] object-cover"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="mb-2 text-xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {translations[language].articles[article.id].title}
                </h3>
                <p className="mb-4 flex-1 text-base text-gray-700 dark:text-gray-300">
                  {translations[language].articles[article.id].summary}
                </p>
                {article.link && article.link !== '#' && (
                  <Link
                    href={article.link}
                    className="mt-auto"
                    aria-label={`${translations[language].readMore} ${translations[language].articles[article.id].title}`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#D72638] focus:ring-2 focus:ring-[#EE0A24]/40 focus:outline-none"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {translations[language].readMore}
                    </motion.button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

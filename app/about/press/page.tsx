'use client'
import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const introText =
  'Bei pappert passiert jeden Tag etwas – wir backen Brot und Brötchen. Wenn außergewöhnliche Dinge passieren, richten wir uns über die Medien an die Öffentlichkeit.'

const pressArticles = [
  {
    title: 'Pappert entwickelt einen Gin aus Brot',
    summary:
      'Die Bäckerei Pappert und die Schlitzer Destillerie haben gemeinsam einen innovativen Gin aus Brot entwickelt. Das Projekt verbindet Tradition, Handwerk und Nachhaltigkeit: Das Roggenbrot "der Wilhelm" dient als Basis, ergänzt durch acht heimische Botanicals. Das Ergebnis ist ein charaktervoller Gin mit frischen Zitrusnoten, reifen Orangen, kräftigem Wacholder und feinen Brot-Nuancen. Ziel ist es, Lebensmittelverschwendung zu vermeiden und Backwaren im Kreislauf zu halten.',
    image: '/images/gin-aus-brot.jpg',
    link: '/about/press/gin-aus-brot',
  },
  {
    title: 'Bäckerei Pappert ist servicefreundlichste Bäckerei in Deutschland',
    summary:
      'Die Rhöner Traditionsbäckerei Pappert wurde 2023 als "Service-Champion" ausgezeichnet und belegt den 1. Platz im bundesweiten Branchen-Ranking. Mit über 150 Fachgeschäften überzeugt Pappert durch Freundlichkeit, kompetente Beratung und hohe Kundenorientierung. Die Auszeichnung basiert auf über 2 Mio. Kundenurteilen und unterstreicht die Bedeutung von Servicequalität im digitalen Zeitalter.',
    image: '/images/papperts_Auszeichnung_Service-Champion_2023.jpg',
    link: '/about/press/servicefreundlichste-baeckerei',
  },
  {
    title: 'Maximilian Pappert ist neuer Bäckermeister bei der Bäckerei Pappert',
    summary:
      'Mit dem erfolgreichen Abschluss seiner Meisterprüfung tritt Maximilian Pappert, die 8. Generation an pappertschen Bäckern, in die Fußstapfen seiner Vorfahren. Die Bäckerei Pappert freut sich nun über 11 Meister in der Backstube. Das Familienunternehmen setzt auf Tradition, Moderne und Regionalität.',
    image:
      '/images/Maximilian_Pappert_ist_neuer_Baeckermeister_der_Baeckerei_Pappert_aus_Poppenhausen_2.jpg',
    link: '/about/press/maximilian-pappert',
  },
  {
    title: 'Pappert spendet 10.000 Brote an Tafeln',
    summary:
      'Im Rahmen unserer Zero-Waste-Initiative haben wir 2024 über 10.000 Brote an regionale Tafeln gespendet. Damit unterstützen wir Bedürftige und setzen ein Zeichen gegen Lebensmittelverschwendung.',
    image: '/soft-images/products-bread-display.jpg',
    link: '/about/press/brote-an-tafeln',
  },
  {
    title: 'Neue Filiale in Frankfurt eröffnet',
    summary:
      'Im März 2024 haben wir unsere neueste Filiale in Frankfurt eröffnet. Modernes Ambiente, nachhaltige Materialien und ein erweitertes Sortiment erwarten unsere Kundschaft.',
    image: '/images/AATA13607_1360_768_1024.jpg',
    link: '/about/press/filiale-frankfurt',
  },
  {
    title: 'Pappert gewinnt Nachhaltigkeitspreis',
    summary:
      'Für unser Engagement in Sachen Umwelt und regionale Zutaten wurden wir mit dem Nachhaltigkeitspreis 2024 ausgezeichnet. Wir danken allen Mitarbeitenden und Partnern für ihren Einsatz!',
    image: '/soft-images/field.jpg',
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
              Presse & Medien
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">{introText}</p>
        </motion.div>

        {/* Press Articles Section */}
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-center text-2xl font-bold text-[#EE0A24] md:text-3xl dark:text-[#EE0A24]"
        >
          Aktuelle Beiträge
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pressArticles.map((article, idx) => (
            <motion.div
              key={article.title}
              variants={itemVariants}
              className="flex flex-col overflow-hidden rounded-[25px] bg-white/80 p-0 shadow-lg transition-shadow hover:shadow-xl dark:bg-[#232323]/80"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
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
                  {article.title}
                </h3>
                <p className="mb-4 flex-1 text-base text-gray-700 dark:text-gray-300">
                  {article.summary}
                </p>
                {article.link && article.link !== '#' && (
                  <Link
                    href={article.link}
                    className="mt-auto"
                    aria-label={`Mehr zu ${article.title}`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#D72638] focus:ring-2 focus:ring-[#EE0A24]/40 focus:outline-none"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      mehr lesen
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

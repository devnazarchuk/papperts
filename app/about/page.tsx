'use client'
import { motion } from 'framer-motion'
import { FaAppleAlt, FaAward, FaHandshake, FaHistory, FaNewspaper, FaUserTie } from 'react-icons/fa'

import { CardGrid } from '@/components/ui/CardGrid'
import { PageWrapper } from '@/components/ui/PageWrapper'
import { SoftCard } from '@/components/ui/SoftCard'

const aboutCards = [
  {
    title: 'Unsere Geschichte',
    description: 'Von bescheidenen Anfängen bis heute – unsere Bäckertradition.',
    icon: <FaHistory className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/history',
    image: '/soft-images/history.jpg',
  },
  // {
  //   title: 'Unsere Marken',
  //   description: 'Entdecken Sie unsere vielfältigen Bäckerei-Marken.',
  //   icon: <FaUsers className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
  //   href: '/about/ourbrands',
  //   image: '/images/124_12.jpg',
  // },
  // {
  //   title: 'Nachhaltigkeit',
  //   description: 'So backen wir mit Verantwortung für die Umwelt.',
  //   icon: <FaLeaf className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
  //   href: '/about/sustainability',
  //   image: '/soft-images/field.jpg',
  // },
  {
    title: 'Meisterbäcker',
    description: 'Lernen Sie unsere Bäckermeister und ihr Handwerk kennen.',
    icon: <FaUserTie className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/master-bakers',
    image: '/soft-images/about-baker.jpg',
  },
  // {
  //   title: 'Regional Roggt',
  //   description: 'Unser Bekenntnis zu regionalen Zutaten.',
  //   icon: <FaSeedling className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
  //   href: '/about/regional-roggt',
  //   image: '/soft-images/ingredients-flour.jpg',
  // },
  // {
  //   title: 'Höchster Stollen',
  //   description: 'Prämierte Stollen und süße Traditionen.',
  //   icon: <FaMedal className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
  //   href: '/about/highest-stollen',
  //   image: '/soft-images/products-stollen.jpg',
  // },
  {
    title: 'Frische-Versprechen',
    description: 'Unsere Garantie für tägliche Frische.',
    icon: <FaHandshake className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/freshness-promise',
    image: '/soft-images/frische-versprechen.jpg',
  },
  {
    title: 'Ernährung',
    description: 'Ausgewogen, gesund und lecker.',
    icon: <FaAppleAlt className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/nutrition',
    image: '/soft-images/healthy.jpg',
  },
  {
    title: 'Presse',
    description: 'Neuigkeiten, Auszeichnungen und Medienberichte.',
    icon: <FaNewspaper className="text-[#EE0A24] dark:text-[#EE0A24]" size={48} />,
    href: '/about/press',
    image: '/soft-images/Pappert_painting.webp',
  },
  {
    title: 'Clubs',
    description: 'Werden Sie Teil unserer Bäckerei-Community.',
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
            Über Uns
          </motion.h1>
          <motion.div variants={itemVariants}>
            <CardGrid>
              {aboutCards.map((card) => (
                <SoftCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
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

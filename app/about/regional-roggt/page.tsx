'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaSeedling } from 'react-icons/fa'

const sections = [
  {
    title: 'Regional Roggt',
    content:
      'Unser Bekenntnis zu regionalen Zutaten: Wir beziehen unser Roggenmehl und viele weitere Zutaten direkt von Landwirten aus der Region. Das stärkt die lokale Wirtschaft und garantiert Frische.',
    image: '/soft-images/ingredients-flour.jpg',
    imagePosition: 'left',
    details: [
      'Kurze Lieferwege',
      'Transparente Herkunft',
      'Unterstützung regionaler Bauern',
      'Beste Qualität aus der Heimat',
    ],
  },
  {
    title: 'From Field to Loaf',
    content:
      'We work closely with our farming partners throughout the growing season to ensure the highest quality grain. Our master bakers then transform this exceptional rye into delicious, nutritious bread.',
    image: '/soft-images/products-bread-display.jpg',
    imagePosition: 'right',
    details: [
      'Regular field inspections',
      'Traditional milling process',
      'Careful grain selection',
      'Artisanal baking methods',
    ],
  },
  {
    title: 'Community Impact',
    content:
      'The Regional Roggt program strengthens our local community by providing stable income for farmers and ensuring a sustainable supply of high-quality grain for our bakery.',
    image: '/soft-images/about-baker.jpg',
    imagePosition: 'left',
    details: [
      'Support for local economy',
      'Reduced transportation impact',
      'Preservation of farming traditions',
      'Community education programs',
    ],
  },
]

export default function RegionalRoggtPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <FaSeedling className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Regional Roggt
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Regionalität, Qualität und Nachhaltigkeit – das ist unser Versprechen.
          </p>
        </motion.div>
        {/* Section content */}
        {sections.map((section, idx) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col items-center gap-8 md:flex-row ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}
          >
            {section.image && (
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[300px] overflow-hidden rounded-[25px] shadow-lg transition-all duration-300 md:h-[400px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={600}
                  />
                </motion.div>
              </div>
            )}
            <div className={`w-full md:w-1/2`}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-[25px] bg-white/80 p-8 shadow-lg transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {section.title}
                </h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">{section.content}</p>
                {section.details && (
                  <ul className="space-y-2">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#EE0A24] dark:text-[#EE0A24]">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaAppleAlt, FaBreadSlice, FaLeaf, FaSeedling } from 'react-icons/fa'

const brote = [
  {
    name: '1928 – Das Bauernbrot (1.500g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'der Dinkler (500g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen, Lupine',
    hidden:
      'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen, Lupine)',
  },
  {
    name: 'der Italiener',
    tags: ['vegetarisch'],
    allergen: 'glutenhaltiges Getreide, Soja, Milch (einschl. Lactose)',
    hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Soja, Milch (einschl. Lactose))',
  },
  {
    name: 'der Franzose',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'das NUR (750g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'der Roggen-Dinkler (750g)',
    tags: ['vegetarisch'],
    allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose), Sesamsamen',
    hidden:
      'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose), Sesamsamen)',
  },
  {
    name: 'der Rogger (500g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'der Rübli-Dinkler (500g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen, Lupine',
    hidden:
      'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen, Lupine)',
  },
  {
    name: 'der Wilhelm (1.000g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'der Wilhelm (1.000g) Kümmel',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Rusti L (500g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Rusti XL (1.000g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Rusti XL (1.000g) Kümmel',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Rhöner Korn (750g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
  },
  {
    name: 'Rhöner Kruste (750g)',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
]
const broetchen = [
  {
    name: 'Ciabattabrötchen',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Dinkel-Krusti',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
  },
  {
    name: 'Dreisaatbrötchen',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
  },
  {
    name: 'Feuerhandwerk',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Soja',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja)',
  },
  {
    name: 'Feuerbrezel',
    tags: ['vegetarisch'],
    allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
    hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
  },
  {
    name: 'Handwerk',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Käsebrezel',
    tags: ['vegetarisch'],
    allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
    hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
  },
  {
    name: 'Käsebrötchen',
    tags: ['vegetarisch'],
    allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
    hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
  },
  {
    name: 'Kornspitz',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Soja, Sesam',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja, Sesam)',
  },
  {
    name: 'KürbisFIT',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Krusti',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Laugenbrezel',
    tags: ['vegetarisch'],
    allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
    hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
  },
  {
    name: 'Mohnbrötchen',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'MüsliFIT',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Schalenfrüchte, Sesamsamen',
    hidden:
      'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Schalenfrüchte, Sesamsamen)',
  },
  {
    name: 'Papperz',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
  },
  {
    name: 'Roggenbrötchen',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Soja',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja)',
  },
  {
    name: 'Salzstange',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Soja',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja)',
  },
  {
    name: 'Sesambrötchen',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
  },
  {
    name: 'Sonnenblumenbrötchen',
    tags: ['vegetarisch', 'vegan', 'laktosefrei'],
    allergen: 'glutenhaltiges Getreide, Sesamsamen',
    hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
  },
]
const allergene = [
  'glutenhaltiges Getreide',
  'Krebstiere',
  'Eier',
  'Fisch',
  'Erdnüsse',
  'Soja',
  'Milch (einschl. Lactose)',
  'Schalenfrüchte',
  'Sellerie',
  'Senf',
  'Sesamsamen',
  'Schwefeldioxid und Sulfite',
  'Lupine',
  'Weichtiere',
]

export default function NutritionPage() {
  const [openBrot, setOpenBrot] = useState<number | null>(null)
  const [openBroetchen, setOpenBroetchen] = useState<number | null>(null)

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
            <FaAppleAlt className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ernährung & Allergene
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Ausgewogen, gesund und lecker – für jeden Geschmack das Richtige.
          </p>
        </motion.div>

        {/* Ernährungsformen & Allergene */}
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
                src="/soft-images/ingredients-flour.jpg"
                alt="Nutrition"
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
              <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                Ernährungsformen & Allergene
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Unterschiedliche Ernährungsformen und allergene Empfindlichkeiten nehmen einen immer
                bedeutenderen Platz in unserem Essverhalten ein. In unserer Backstube in
                Poppenhausen entstehen Tag für Tag und Nacht für Nacht handwerklich hergestellte
                Backwaren, die vegan, vegetarisch, laktosefrei oder auch allergenarm sind. Entdecken
                Sie bei uns Brote und Brötchen, die sowohl Genuss als auch Verträglichkeit vereinen
                – denn gute und frische Produkte sind bei Pappert für alle da.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Brotsortiment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="mb-6 flex items-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            <FaBreadSlice className="mr-2" /> Unser Brotsortiment
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {brote.map((brot, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/80 p-4 shadow-md dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <div className="mb-1 flex items-center">
                  <FaLeaf className="mr-2 text-[#EE0A24]" />
                  <span className="font-semibold text-[#3A3A3A] dark:text-[#FDEEEE]">
                    {typeof brot === 'string' ? brot : brot.name}
                  </span>
                </div>
                {typeof brot !== 'string' && brot.tags && (
                  <div className="mb-1 text-xs text-[#FFA5A5]">{brot.tags.join(', ')}</div>
                )}
                {typeof brot !== 'string' && brot.allergen && (
                  <div className="text-xs text-[#A88B8B]">Allergen: {brot.allergen}</div>
                )}
                {/* Accordion for hidden info */}
                {typeof brot !== 'string' && brot.hidden && (
                  <button
                    className="mt-2 w-full rounded bg-[#FFA5A5] px-3 py-1 text-sm font-semibold text-[#3A3A3A] transition-colors hover:bg-[#FF3B59] dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#181818]"
                    onClick={() => setOpenBrot(openBrot === i ? null : i)}
                    aria-expanded={openBrot === i}
                    aria-controls={`brot-panel-${i}`}
                  >
                    {openBrot === i ? 'Weniger anzeigen' : 'Mehr erfahren'}
                  </button>
                )}
                {typeof brot !== 'string' && brot.hidden && openBrot === i && (
                  <div
                    id={`brot-panel-${i}`}
                    className="mt-2 rounded bg-[#FFF6F6] p-3 text-sm text-[#3A3A3A] shadow-inner dark:bg-[#181818] dark:text-[#FFA5A5]"
                  >
                    {brot.hidden.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Brötchensortiment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="mb-6 flex items-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            <FaSeedling className="mr-2" /> Unser Brötchensortiment
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {broetchen.map((b, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/80 p-4 shadow-md dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <div className="mb-1 flex items-center">
                  <FaLeaf className="mr-2 text-[#EE0A24]" />
                  <span className="font-semibold text-[#3A3A3A] dark:text-[#FDEEEE]">
                    {typeof b === 'string' ? b : b.name}
                  </span>
                </div>
                {typeof b !== 'string' && b.tags && (
                  <div className="mb-1 text-xs text-[#FFA5A5]">{b.tags.join(', ')}</div>
                )}
                {typeof b !== 'string' && b.allergen && (
                  <div className="text-xs text-[#A88B8B]">Allergen: {b.allergen}</div>
                )}
                {/* Accordion for hidden info */}
                {typeof b !== 'string' && b.hidden && (
                  <button
                    className="mt-2 w-full rounded bg-[#FFA5A5] px-3 py-1 text-sm font-semibold text-[#3A3A3A] transition-colors hover:bg-[#FF3B59] dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#181818]"
                    onClick={() => setOpenBroetchen(openBroetchen === i ? null : i)}
                    aria-expanded={openBroetchen === i}
                    aria-controls={`broetchen-panel-${i}`}
                  >
                    {openBroetchen === i ? 'Weniger anzeigen' : 'Mehr erfahren'}
                  </button>
                )}
                {typeof b !== 'string' && b.hidden && openBroetchen === i && (
                  <div
                    id={`broetchen-panel-${i}`}
                    className="mt-2 rounded bg-[#FFF6F6] p-3 text-sm text-[#3A3A3A] shadow-inner dark:bg-[#181818] dark:text-[#FFA5A5]"
                  >
                    {b.hidden.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Allergene */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            Allergene
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allergene.map((a, i) => (
              <span
                key={i}
                className="rounded-full bg-[#FFA5A5] px-4 py-1 text-sm text-[#3A3A3A] dark:bg-[#232323] dark:text-[#FFA5A5]"
              >
                {a}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-[20px] bg-[#FFF6F6] p-6 text-center text-[#3A3A3A] shadow-md dark:bg-[#232323] dark:text-[#FDEEEE]">
            <p className="text-sm">
              Auf Grund der Produktionsbedingungen können Spuren von Allergenen (Lactose) oder
              tierischen Produkten (Butter, Milch, Sahne) nicht ausgeschlossen werden. Die
              Beschreibung der Produkte bezeichnet lediglich die Zutaten, die aktiv zugesetzt
              werden.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

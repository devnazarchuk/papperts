'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaClock, FaHandshake, FaMoon, FaSun } from 'react-icons/fa'

const punktfrischBrots = [
  {
    name: 'Der Franzose',
    image: '/images/franzose.jpg',
    backzeit: '18 Minuten',
  },
  {
    name: 'Der Italiener',
    image: '/images/italiener.jpg',
    backzeit: '18 Minuten',
  },
  {
    name: 'Der Rübli-Dinkler',
    image: '/images/karotten.jpg',
    backzeit: '18 Minuten',
  },
  {
    name: 'Rhöner Korn',
    image: '/images/korn.jpg',
    backzeit: '23 Minuten',
  },
  {
    name: 'Rhöner Kruste',
    image: '/images/kruste.jpg',
    backzeit: '23 Minuten',
  },
]

export default function FreshnessPromisePage() {
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
              TÄGLICH FRISCHE VIELFALT!
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Frische ist ein immer wichtigeres Thema. Dem werden wir gerecht. Denn wir backen den
            ganzen Tag über frisch. Hergestellt werden unsere Backwaren Tag für Tag und Nacht für
            Nacht in der Backstube in Poppenhausen. Wir haben zudem ein Konzept entwickelt, mit dem
            wir Ihnen über den ganzen Tag frisch gebackene, handwerklich hergestellte Brote und
            Backwaren anbieten können. Denn so lässt sich unser einzigartiges Frischearoma
            genussgerecht präsentieren.
            <br />
            <br />
            Wir garantieren Ihnen, dass alle unsere Backwaren täglich frisch gebacken werden. Das
            ist unser Versprechen an Sie.
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
                alt="Früh Frisch Backwaren"
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
                  Früh Frisch
                </h2>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                „Frühfrisch“ sind unsere Backwaren, so wie unsere Gäste diese seit langem kennen und
                schätzen.
              </p>
              <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
                <li>Täglich frisch aus der Backstube</li>
                <li>Traditionelle Rezepte</li>
                <li>Handwerkliche Herstellung</li>
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
                alt="Spät Frisch Backwaren"
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
                  Spät Frisch
                </h2>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                „Spätfrisch“ sind unsere Backwaren, die frisch im Geschäft gebacken werden - passend
                zu jeder Uhrzeit.
              </p>
              <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
                <li>Frisch gebacken im Laden</li>
                <li>Immer zur richtigen Zeit</li>
                <li>Maximale Flexibilität für Genuss</li>
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
                alt="Punkt Frisch Backwaren"
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
                  Punkt Frisch
                </h2>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Unsere &apos;punktfrisch&apos; Produkte werden von uns vorgebacken und können zu
                Hause fertig gebacken werden.
              </p>
              <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
                <li>Vorgebacken von Pappert</li>
                <li>Frisch gebacken zu Hause</li>
                <li>Genuss zu jeder Zeit</li>
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
            Unsere punktfrisch-Brote im Überblick
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {punktfrischBrots.map((brot) => (
              <div
                key={brot.name}
                className="flex flex-col items-center gap-6 rounded-[20px] bg-white/80 p-6 shadow-lg md:flex-row dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <Image
                  src={brot.image}
                  alt={brot.name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-xl object-cover shadow-md"
                />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#D72638]">{brot.name}</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">Backzeit: {brot.backzeit}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[20px] bg-[#FFF6F6] p-6 text-center text-[#3A3A3A] shadow-md dark:bg-[#232323] dark:text-[#FDEEEE]">
            <h4 className="mb-2 text-lg font-semibold text-[#D72638]">So einfach geht&apos;s:</h4>
            <p>
              Ofen vorheizen und bei <b>220°C (Ober-/Unterhitze)</b> bzw. <b>200°C (Heißluft)</b>{' '}
              laut Zeitangabe fertig backen. Je nach Ofentyp kann die Backzeit variieren.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

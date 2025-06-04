'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const benefits = [
  {
    title: 'Gehalt',
    desc: 'Ohne Moos nichts los. Wir bezahlen mehr als branchenüblich. Es gibt unbefristete Arbeitsverträge, erweiterte Urlaubstage sowie Sonn- und Feiertagszuschläge.',
    img: '/svg-icons/Gehalt-Icon-Karriere-bei-der-Baeckerei-Pappert.svg',
  },
  {
    title: 'Gratis',
    desc: "Weil's bei Pappert so gut schmeckt, gibt es monatlich eine Brotflatrate in Gutscheinform, das passende Arbeitsoutfit und Geschenke zu Weihnachten und Ostern.",
    img: '/svg-icons/Einkaufskontingent-Icon-Karriere-bei-der-Baeckerei-Pappert.svg',
  },
  {
    title: 'Happy Life',
    desc: 'Als Fitnessbäcker kümmern wir uns um Deine Gesundheit und Dein Wohlbefinden. Passend dazu gibt es tolle Events und Veranstaltungen für alle Mitarbeiter.',
    img: '/svg-icons/Happy-Life-Icon-Ausbildung-bei-der-Baeckerei-Pappert.svg',
  },
  {
    title: 'Fahrradwelt',
    desc: 'Wir lieben nicht nur Brötchen, sondern auch Fahrräder. Deshalb gibt es bei Pappert ein attraktives E-Bike-Leasing.',
    img: '/svg-icons/eBike-Leasing-Benefits-Baeckerei-Pappert.svg',
  },
  {
    title: 'Unser Plus',
    desc: 'Und weil Du Deinen Job so magst, haben wir noch ein extra Plus für Dich. Attraktive Angebote von zahlreichen Marken.',
    img: '/svg-icons/Unser-Plus-Rabatte-auf-viele-Marken-Baeckerei-Pappert.svg',
  },
  {
    title: 'Trinkgeld',
    desc: 'Und weil Du es Dir verdient hast, wird bei Pappert das Trinkgeld vollständig an Dich ausgezahlt.',
    img: '/svg-icons/Trinkgeld-Benefit-Baeckerei-Pappert.svg',
  },
  {
    title: 'Vorwärts',
    desc: 'Wir wollen, dass Du vorwärtskommst. Deshalb bieten wir Dir berufliche Weiterbildungsmöglichkeiten.',
    img: '/svg-icons/Aufstieg-Icon-Karriere-bei-der-Baeckerei-Pappert.svg',
  },
]

export default function CareersBenefitsPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8 text-center text-4xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            Benefits & Kultur
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            Entdecke die Vorteile und die besondere Unternehmenskultur bei Pappert. Wir bieten dir
            mehr als nur einen Job!
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="flex flex-col items-center rounded-[25px] bg-[#FFF6F6] p-6 text-center shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-shadow duration-200 hover:shadow-xl dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                <Image src={b.img} alt={b.title} width={90} height={90} className="mb-4" />
                <h3 className="mb-2 text-xl font-semibold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                  {b.title}
                </h3>
                <p className="text-base text-gray-700 transition-colors duration-200 dark:text-gray-300">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

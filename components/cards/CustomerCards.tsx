'use client'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa'

export function CustomerCards() {
  const cards = [
    {
      icon: <FaBirthdayCake className="text-[#7C0A02]" size={36} />,
      title: 'Torten bestellen',
      desc: 'Bestellen Sie Ihre individuelle Fototorte oder Kuchen online.',
    },
    {
      icon: <FaMapMarkerAlt className="text-[#7C0A02]" size={36} />,
      title: 'Filialen finden',
      desc: 'Finden Sie eine Papperts-Filiale in Ihrer Nähe und entdecken Sie Angebote.',
    },
  ]
  return (
    <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #fad2e1cc' }}
          className="flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-xl bg-[#FFF6F6] p-6 text-center shadow-md transition-all duration-200 hover:shadow-xl dark:bg-[#232323]"
          tabIndex={0}
          aria-label={card.title}
        >
          <div className="mb-2">{card.icon}</div>
          <h4 className="mb-1 text-lg font-bold text-[#7C0A02] dark:text-[#FFA5A5]">
            {card.title}
          </h4>
          <p className="text-sm text-[#3A3A3A] dark:text-[#FFF5E1]">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

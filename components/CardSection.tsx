'use client'
import { AnimatePresence,motion } from 'framer-motion'

import { CARDS, Role } from '@/components/data/CARDS'
import { SoftCard } from '@/components/ui/SoftCard'

// CardSection displays cards for the selected role
export function CardSection({ role }: { role: Role }) {
  // Filter cards by role
  const visibleCards = CARDS.filter((card) => card.role === role || card.role === 'All')

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {visibleCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className="h-full w-full"
          >
            {/* Render SoftCard for unified card UI */}
            <SoftCard
              title={card.title}
              description={card.description}
              href={`/${card.id}`}
              icon={card.icon && card.icon()}
              image={card.image}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

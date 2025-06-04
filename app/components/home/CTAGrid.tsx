'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { CTACard } from './CTACard'

interface CTAGridProps {
  cards: {
    title: string
    description: string
    href: string
    icon?: () => React.ReactElement
  }[]
  className?: string
}

export function CTAGrid({ cards, className = '' }: CTAGridProps) {
  return (
    <motion.div
      className={`grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4 xl:grid-cols-5 ${className}`}
      role="list"
      aria-label="Card grid"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.02, delayChildren: 0.01 } },
        hidden: {},
      }}
    >
      <AnimatePresence>
        {cards.map((card) => (
          <CTACard key={card.href} {...card} icon={card.icon && card.icon()} role="listitem" />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

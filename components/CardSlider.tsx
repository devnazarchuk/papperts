'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Briefcase, ChevronLeft, ChevronRight, Grid, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { RoleTranslations } from '@/app/components/data/translations'
import { Language } from '@/app/store/languageStore'

import { Role } from './data/CARDS'

// Card data with icons and background images
const cards: { key: Role; icon: React.ReactElement; bgImage: string }[] = [
  {
    key: 'Customer',
    icon: <ShoppingBag className="h-8 w-8 text-white" />,
    bgImage: '/soft-images/customer.jpg',
  },
  {
    key: 'Categories',
    icon: <Grid className="h-12 w-12 text-white" />,
    bgImage: '/soft-images/about-baker.jpg',
  },
  {
    key: 'Employee',
    icon: <Briefcase className="h-8 w-8 text-white" />,
    bgImage: '/soft-images/job-chef.jpg',
  },
]

interface CardSliderProps {
  value?: Role
  onChange?: (role: Role) => void
  className?: string
  translations: Record<Language, RoleTranslations>
  language: Language
}

export function CardSlider({
  value,
  onChange,
  className = '',
  translations,
  language,
}: CardSliderProps) {
  const currentTranslations = translations[language]
  const initialIndex = value ? cards.findIndex((card) => card.key === value) : 0
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)

  // Update currentIndex when value prop changes
  useEffect(() => {
    if (value) {
      const newIndex = cards.findIndex((card) => card.key === value)
      if (newIndex !== -1) {
        setCurrentIndex(newIndex)
      }
    }
  }, [value])

  // Handle navigation
  const handlePrevious = useCallback(() => {
    setDirection(-1)
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    onChange?.(cards[newIndex].key)
  }, [currentIndex, onChange])

  const handleNext = useCallback(() => {
    setDirection(1)
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    onChange?.(cards[newIndex].key)
  }, [currentIndex, onChange])

  // Handle card click
  const handleCardClick = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
      onChange?.(cards[index].key)

      // Scroll down by 500 pixels
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      })
    },
    [currentIndex, onChange],
  )

  // Calculate visible cards
  const visibleCards = cards.map((_, index) => {
    const diff = (index - currentIndex + cards.length) % cards.length
    return {
      index,
      position: diff === 0 ? 'center' : diff === 1 || diff === -cards.length + 1 ? 'right' : 'left',
    }
  })

  return (
    <div className={`relative mx-auto w-full max-w-2xl px-4 py-4 ${className}`}>
      {/* Role selection heading, localized */}
      <h2 className="mb-4 text-center text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
        {language === 'de' ? 'Bitte wählen Sie Ihre Rolle:' : 'Please select your role:'}
      </h2>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-colors hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
        aria-label="Previous card"
      >
        <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-colors hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
        aria-label="Next card"
      >
        <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Cards Container */}
      <div className="relative h-[320px] overflow-hidden sm:h-[360px]">
        <AnimatePresence initial={false} custom={direction}>
          {visibleCards.map(({ index, position }) => {
            const card = cards[index]
            const isActive = position === 'center'
            const cardTranslation = currentTranslations[card.key]

            return (
              <motion.div
                key={card.key}
                custom={direction}
                initial={{
                  x: position === 'left' ? -200 : position === 'right' ? 200 : 0,
                  scale: position === 'center' ? 1 : 0.9,
                  opacity: position === 'center' ? 1 : 0.7,
                  zIndex: position === 'center' ? 20 : 10,
                }}
                animate={{
                  x: position === 'left' ? -200 : position === 'right' ? 200 : 0,
                  scale: position === 'center' ? 1 : 0.9,
                  opacity: position === 'center' ? 1 : 0.7,
                  zIndex: position === 'center' ? 20 : 10,
                }}
                exit={{
                  x: direction > 0 ? -200 : 200,
                  scale: 0.9,
                  opacity: 0.7,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-[var(--card-shadow)] transition-all duration-300 ${
                    isActive ? 'ring-4 ring-[var(--primary-accent)]' : ''
                  } ${
                    position === 'center'
                      ? 'h-[280px] w-[200px] sm:h-[320px] sm:w-[220px]'
                      : 'h-[260px] w-[180px] sm:h-[300px] sm:w-[200px]'
                  }`}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.bgImage}
                      alt={cardTranslation?.title || card.key}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 160px, 200px"
                    />
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
                    {card.icon}
                    <div className="mt-4 text-lg font-semibold text-white sm:text-xl">
                      {cardTranslation?.title || card.key}
                    </div>
                    {position === 'center' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleCardClick(index)
                          }}
                          className="flex cursor-pointer items-center gap-2 rounded-full bg-[var(--primary-accent)] px-4 py-1.5 text-sm font-bold text-white shadow-[var(--card-shadow)] transition-all select-none hover:scale-105 hover:shadow-[var(--card-shadow-hover)] dark:bg-[var(--primary-accent)] dark:text-white"
                        >
                          {cardTranslation?.button || 'Learn more'}
                          <ArrowDown className="h-3 w-3" />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

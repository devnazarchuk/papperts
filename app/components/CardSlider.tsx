import { motion } from 'framer-motion'
import Image from 'next/image'

import { useAccessibilityStore } from '@/app/store/accessibilityStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { Role } from '@/components/data/CARDS'

import { roleTranslations } from './data/translations'

interface CardSliderProps {
  cards: Array<{
    id: string
    title: string
    description: string
    icon?: string
  }>
  role: Role
}

export default function CardSlider({ cards, role }: CardSliderProps) {
  const { language } = useLanguageStore()
  const { fontSize } = useAccessibilityStore()

  const getCardSize = () => {
    // Ensure all font sizes are at least 12px for accessibility
    switch (fontSize) {
      case 'medium':
        return {
          container: 'w-[280px] h-[320px]',
          center: 'w-[320px] h-[360px]',
          side: 'w-[240px] h-[280px]',
          text: 'text-lg', // >= 18px
          button: 'text-base', // >= 16px
        }
      case 'large':
        return {
          container: 'w-[320px] h-[360px]',
          center: 'w-[360px] h-[400px]',
          side: 'w-[280px] h-[320px]',
          text: 'text-xl', // >= 20px
          button: 'text-lg', // >= 18px
        }
      default:
        return {
          container: 'w-[240px] h-[280px]',
          center: 'w-[280px] h-[320px]',
          side: 'w-[200px] h-[240px]',
          text: 'text-base', // 16px
          button: 'text-base', // 16px (was text-sm)
        }
    }
  }

  const size = getCardSize()

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center gap-4">
        {cards.map((card, index) => {
          const isCenter = index === 1
          const roleTranslation = roleTranslations[language][role] || {
            title: card.title,
            description: card.description,
            button: 'Learn more',
          }

          return (
            <motion.div
              key={card.id}
              className={`relative ${
                isCenter ? size.center : size.side
              } overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 dark:bg-gray-800`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex h-full flex-col p-6">
                {card.icon && (
                  <div className="mb-4">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                )}
                <h3 className={`mb-2 font-bold ${size.text}`} aria-label={roleTranslation.title}>
                  {/* Card title, ensure accessible name matches visible label */}
                  {roleTranslation.title}
                </h3>
                <p className={`mb-4 text-gray-700 dark:text-[#FFF5E1] ${size.text}`}>
                  {/* Card description, min 12px for accessibility, high-contrast for dark mode */}
                  {roleTranslation.description}
                </p>
                <button
                  className={`mt-auto rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 ${size.button}`}
                  aria-label={roleTranslation.button}
                >
                  {/* Button text matches visible label for accessibility */}
                  {roleTranslation.button}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

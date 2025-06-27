'use client'
import { motion } from 'framer-motion'

// import { useLanguageStore } from '@/app/store/languageStore'
import FitnessBaeckerPage from '@/components/templates/FitnessBaeckerPage'
import { PageWrapper } from '@/components/ui/PageWrapper'

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

export default function FitnessBaecker() {
  // const { language } = useLanguageStore()

  return (
    <PageWrapper className="bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] dark:from-[#181818] dark:to-[#232323]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-8"
      >
        <motion.div variants={itemVariants}>
          <FitnessBaeckerPage />
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound,useParams } from 'next/navigation'

import { bakers, slugify } from '../bakers-data'

export default function BakerDetailPage() {
  // Get slug from URL
  const { slug } = useParams() as { slug: string }
  // Find baker by slug
  const baker = bakers.find((b) => slugify(b.name) === slug)
  if (!baker) return notFound()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-2xl rounded-[25px] bg-white/90 p-6 shadow-lg dark:bg-[#232323]/90">
        <Link
          href="/about/master-bakers"
          className="mb-4 inline-block text-[#EE0A24] hover:underline"
          aria-label="Zurück zur Übersicht"
        >
          ← Zurück zur Übersicht
        </Link>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Image
            src={baker.image}
            alt={baker.alt}
            width={256}
            height={256}
            className="h-64 w-64 rounded-2xl border-4 border-[#FAD2E1] object-cover shadow-md dark:border-[#2a2a2a]"
            priority={baker.name === 'Wolfgang Weber'}
          />
          <div className="flex-1">
            <h1
              className="mb-2 text-3xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {baker.name}
            </h1>
            {baker.role && (
              <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">{baker.role}</p>
            )}
            <div className="mb-4 flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
              {baker.department && (
                <span>
                  <strong>Abteilung:</strong> {baker.department}
                </span>
              )}
              <span>
                <strong>Bei Pappert seit:</strong> {baker.since}
              </span>
              <span>
                <strong>Bäckermeister seit:</strong> {baker.masterSince}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          {baker.statements.map((s, idx) => (
            <div key={idx}>
              <span className="font-semibold text-[#EE0A24] dark:text-[#EE0A24]">{s.label}</span>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

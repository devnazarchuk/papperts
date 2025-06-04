'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaAward } from 'react-icons/fa'

import InfoPage from '@/components/templates/InfoPage'

const clubsSections = [
  {
    title: 'Pappert Plus Club',
    content:
      'Join our exclusive loyalty program and enjoy special benefits, discounts, and early access to seasonal products. Earn points with every purchase and redeem them for delicious rewards.',
    image: '/soft-images/ppc.jpg',
    imagePosition: 'left' as const,
    details: [
      'Points on every purchase',
      'Birthday specials',
      'Exclusive member events',
      'Monthly newsletter',
    ],
  },
  {
    title: 'Fitness Baker Club',
    content:
      'For health-conscious customers who love staying active. Combine your passion for fitness with nutritious baked goods and participate in our sports events.',
    image: '/soft-images/fitness-member.png',
    imagePosition: 'right' as const,
    details: [
      'Nutrition workshops',
      'Group fitness activities',
      'Healthy recipe sharing',
      'Sports event discounts',
    ],
  },
  {
    title: 'Kids Baking Club',
    content:
      'A fun club for young baking enthusiasts! Children learn about baking, nutrition, and food science through hands-on activities and special events.',
    image: '/soft-images/baking-club.jpg',
    imagePosition: 'left' as const,
    details: [
      'Monthly baking classes',
      'Holiday workshops',
      'Birthday party options',
      'Take-home recipes',
    ],
  },
]

export default function ClubsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <FaAward className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Clubs & Community
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Werden Sie Teil unserer Bäckerei-Community! Hier finden Sie alle Informationen zu
            unseren Clubs, Mitgliedschaften und exklusiven Vorteilen.
          </p>
        </motion.div>
        <InfoPage
          title="Unsere Clubs"
          description="Entdecken Sie unsere verschiedenen Clubs und Mitgliedschaftsprogramme für unterschiedliche Interessen und Altersgruppen."
          heroImage="/soft-images/pappert-plus.jpg"
          sections={clubsSections}
        />
        <div className="mx-auto my-16 max-w-2xl px-4">
          <div className="rounded-2xl bg-[#FFF6F6] p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] dark:bg-gray-900 dark:shadow-md">
            <h2
              className="mb-4 text-2xl font-bold text-[#D72638] dark:text-red-200"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              Club Kontaktformular
            </h2>
            <ContactClubForm />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ContactClubForm() {
  const [form, setForm] = useState({ name: '', email: '', club: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const clubs = ['Pappert Plus Club', 'Fitness Baker Club', 'Kids Baking Club']

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-100 p-6 text-center font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
        Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
      <div>
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">Name*</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-gray-900 transition focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          style={{
            fontFamily:
              'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">E-Mail*</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-gray-900 transition focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          style={{
            fontFamily:
              'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">Club*</label>
        <select
          name="club"
          value={form.club}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-gray-900 transition focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          style={{
            fontFamily:
              'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        >
          <option value="">Bitte wählen…</option>
          {clubs.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">
          Nachricht*
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-2xl border border-gray-300 bg-white p-3 text-gray-900 transition focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          style={{
            fontFamily:
              'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-2xl bg-[#D72638] px-6 py-3 text-lg font-semibold text-white shadow-md transition-shadow hover:bg-[#EE0A24] hover:shadow-xl focus:ring-2 focus:ring-[#D72638]/40 focus:outline-none"
        style={{
          fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
        }}
      >
        Absenden
      </button>
    </form>
  )
}

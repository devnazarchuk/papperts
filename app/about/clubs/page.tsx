'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaAward } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'
import InfoPage from '@/components/templates/InfoPage'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    sections: {
      title: string
      content: string
      details: string[]
    }[]
    contact: {
      title: string
      name: string
      email: string
      club: string
      message: string
      submit: string
      success: string
      selectPlaceholder: string
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    sections: {
      title: string
      content: string
      details: string[]
    }[]
    contact: {
      title: string
      name: string
      email: string
      club: string
      message: string
      submit: string
      success: string
      selectPlaceholder: string
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Clubs & Community',
    subtitle:
      'Werden Sie Teil unserer Bäckerei-Community! Hier finden Sie alle Informationen zu unseren Clubs, Mitgliedschaften und exklusiven Vorteilen.',
    description:
      'Entdecken Sie unsere verschiedenen Clubs und Mitgliedschaftsprogramme für unterschiedliche Interessen und Altersgruppen.',
    sections: [
      {
        title: 'Pappert Plus Club',
        content:
          'Werden Sie Teil unseres exklusiven Treueprogramms und genießen Sie besondere Vorteile, Rabatte und frühen Zugang zu saisonalen Produkten. Sammeln Sie Punkte bei jedem Einkauf und lösen Sie diese für köstliche Belohnungen ein.',
        details: [
          'Punkte bei jedem Einkauf',
          'Geburtstags-Specials',
          'Exklusive Mitglieder-Events',
          'Monatlicher Newsletter',
        ],
      },
      {
        title: 'Fitness Baker Club',
        content:
          'Für gesundheitsbewusste Kunden, die aktiv bleiben möchten. Verbinden Sie Ihre Leidenschaft für Fitness mit nahrhaften Backwaren und nehmen Sie an unseren Sportveranstaltungen teil.',
        details: [
          'Ernährungsworkshops',
          'Gruppenfitness-Aktivitäten',
          'Gesunde Rezepte teilen',
          'Sportveranstaltungs-Rabatte',
        ],
      },
      {
        title: 'Kids Baking Club',
        content:
          'Ein lustiger Club für junge Backbegeisterte! Kinder lernen durch praktische Aktivitäten und besondere Events alles über Backen, Ernährung und Lebensmittelwissenschaft.',
        details: [
          'Monatliche Backkurse',
          'Ferienworkshops',
          'Geburtstagsfeier-Optionen',
          'Rezepte zum Mitnehmen',
        ],
      },
    ],
    contact: {
      title: 'Club Kontaktformular',
      name: 'Name*',
      email: 'E-Mail*',
      club: 'Club*',
      message: 'Nachricht*',
      submit: 'Absenden',
      success: 'Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.',
      selectPlaceholder: 'Bitte wählen…',
    },
  },
  en: {
    title: 'Clubs & Community',
    subtitle:
      "Become part of our bakery community! Here you'll find all information about our clubs, memberships, and exclusive benefits.",
    description:
      'Discover our various clubs and membership programs for different interests and age groups.',
    sections: [
      {
        title: 'Pappert Plus Club',
        content:
          'Join our exclusive loyalty program and enjoy special benefits, discounts, and early access to seasonal products. Earn points with every purchase and redeem them for delicious rewards.',
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
        details: [
          'Monthly baking classes',
          'Holiday workshops',
          'Birthday party options',
          'Take-home recipes',
        ],
      },
    ],
    contact: {
      title: 'Club Contact Form',
      name: 'Name*',
      email: 'Email*',
      club: 'Club*',
      message: 'Message*',
      submit: 'Submit',
      success: "Thank you for your message! We'll get back to you soon.",
      selectPlaceholder: 'Please select…',
    },
  },
}

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
  const language = useLanguageStore((state) => state.language)

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
              {translations[language].title}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            {translations[language].subtitle}
          </p>
        </motion.div>
        <InfoPage
          title={translations[language].sections[0].title}
          description={translations[language].description}
          heroImage="/soft-images/pappert-plus.jpg"
          sections={clubsSections.map((section, index) => ({
            ...section,
            title: translations[language].sections[index].title,
            content: translations[language].sections[index].content,
            details: translations[language].sections[index].details,
          }))}
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
              {translations[language].contact.title}
            </h2>
            <ContactClubForm />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ContactClubForm() {
  const language = useLanguageStore((state) => state.language)
  const [form, setForm] = useState({ name: '', email: '', club: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const clubs = translations[language].sections.map((section) => section.title)

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
        {translations[language].contact.success}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
      <div>
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">
          {translations[language].contact.name}
        </label>
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
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">
          {translations[language].contact.email}
        </label>
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
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">
          {translations[language].contact.club}
        </label>
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
          <option value="">{translations[language].contact.selectPlaceholder}</option>
          {clubs.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block font-medium text-[#D72638] dark:text-red-200">
          {translations[language].contact.message}
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
        {translations[language].contact.submit}
      </button>
    </form>
  )
}

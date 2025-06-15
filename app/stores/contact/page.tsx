'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { FaBriefcase, FaCheckCircle, FaClock, FaEnvelope, FaFileAlt,FaMapMarkerAlt, FaPhone, FaUsers } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'We are here to help and answer any questions you might have',
    info: {
      title: 'Contact Information',
      company: 'Company',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      hoursText: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 8:00 AM - 2:00 PM\nSunday: Closed'
    },
    form: {
      title: 'Send us a Message',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Thank you for your message! We will get back to you soon.'
    },
    sections: {
      general: {
        title: 'General Contact',
        content: 'For general inquiries about our products, services, or locations, please reach out to our customer service team.',
        details: [
          { icon: FaPhone, text: 'Phone: +49 6658 9876' },
          { icon: FaEnvelope, text: 'Email: info@pappert.de' },
          { icon: FaClock, text: 'Hours: Mon-Fri 8:00-17:00' },
          { icon: FaMapMarkerAlt, text: 'Address: Von-Steinrück-Platz 1, 36163 Poppenhausen' }
        ]
      },
      business: {
        title: 'Wholesale & Business',
        content: 'Interested in partnering with us or placing wholesale orders? Our business development team is here to help.',
        details: [
          { icon: FaPhone, text: 'Phone: +49 6658 9877' },
          { icon: FaEnvelope, text: 'Email: business@pappert.de' },
          { icon: FaClock, text: 'Hours: Mon-Fri 9:00-16:00' },
          { icon: FaCheckCircle, text: 'Minimum order requirements apply' }
        ]
      },
      careers: {
        title: 'Career Opportunities',
        content: 'Join our team of passionate bakers and service professionals. We offer various positions across our locations.',
        details: [
          { icon: FaEnvelope, text: 'Email: careers@pappert.de' },
          { icon: FaFileAlt, text: 'Current openings on our careers page' },
          { icon: FaCheckCircle, text: 'Apprenticeship programs available' },
          { icon: FaUsers, text: 'Professional development opportunities' }
        ]
      }
    }
  },
  de: {
    title: 'Kontakt',
    subtitle: 'Wir sind für Sie da und beantworten gerne Ihre Fragen',
    info: {
      title: 'Kontaktinformationen',
      company: 'Firma',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      hours: 'Öffnungszeiten',
      hoursText: 'Montag - Freitag: 8:00 - 18:00 Uhr\nSamstag: 8:00 - 14:00 Uhr\nSonntag: Geschlossen'
    },
    form: {
      title: 'Senden Sie uns eine Nachricht',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      success: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.'
    },
    sections: {
      general: {
        title: 'Allgemeine Anfragen',
        content: 'Für allgemeine Anfragen zu unseren Produkten, Dienstleistungen oder Standorten wenden Sie sich bitte an unser Kundenservice-Team.',
        details: [
          { icon: FaPhone, text: 'Telefon: +49 6658 9876' },
          { icon: FaEnvelope, text: 'E-Mail: info@pappert.de' },
          { icon: FaClock, text: 'Öffnungszeiten: Mo-Fr 8:00-17:00' },
          { icon: FaMapMarkerAlt, text: 'Adresse: Von-Steinrück-Platz 1, 36163 Poppenhausen' }
        ]
      },
      business: {
        title: 'Großhandel & Geschäftskunden',
        content: 'Interessiert an einer Partnerschaft oder Großbestellungen? Unser Business-Development-Team steht Ihnen zur Verfügung.',
        details: [
          { icon: FaPhone, text: 'Telefon: +49 6658 9877' },
          { icon: FaEnvelope, text: 'E-Mail: business@pappert.de' },
          { icon: FaClock, text: 'Öffnungszeiten: Mo-Fr 9:00-16:00' },
          { icon: FaCheckCircle, text: 'Mindestbestellmengen gelten' }
        ]
      },
      careers: {
        title: 'Karrieremöglichkeiten',
        content: 'Werden Sie Teil unseres Teams leidenschaftlicher Bäcker und Serviceprofis. Wir bieten verschiedene Positionen an unseren Standorten.',
        details: [
          { icon: FaEnvelope, text: 'E-Mail: careers@pappert.de' },
          { icon: FaFileAlt, text: 'Aktuelle Stellenangebote auf unserer Karriereseite' },
          { icon: FaCheckCircle, text: 'Ausbildungsprogramme verfügbar' },
          { icon: FaUsers, text: 'Möglichkeiten zur beruflichen Entwicklung' }
        ]
      }
    }
  }
}

const companyInfo = {
  Company: 'papperts GmbH',
  Address: 'Bürgermeister-Ebert-Straße 38, Eichenzell',
  Phone: '+49 (0)66 58 96 01 0',
  Email: 'service@papperts.de',
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  subject: string
  cv: File | null
}

function InfoBlock({ t }: { t: typeof translations.en }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[#FFE2E2] bg-[#FFF6F6] p-6 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]"
    >
      <h2 className="mb-4 text-xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
        {t.info.title}
      </h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D72638] text-white transition-colors dark:bg-[#FFA5A5] dark:text-[#232323]">
            <FaMapMarkerAlt className="h-4 w-4 text-[#D72638] dark:text-[#FFA5A5]" />
          </div>
          <div>
            <p className="font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.info.company}
            </p>
            <p className="text-gray-700 transition-colors dark:text-[#FAD2E1]">{companyInfo.Company}</p>
            <p className="text-gray-700 transition-colors dark:text-[#FAD2E1]">{companyInfo.Address}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D72638] text-white transition-colors dark:bg-[#FFA5A5] dark:text-[#232323]">
            <FaPhone className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.info.phone}
            </p>
            <p className="text-gray-700 transition-colors dark:text-[#FAD2E1]">{companyInfo.Phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D72638] text-white transition-colors dark:bg-[#FFA5A5] dark:text-[#232323]">
            <FaEnvelope className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.info.email}
            </p>
            <p className="text-gray-700 transition-colors dark:text-[#FAD2E1]">{companyInfo.Email}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D72638] text-white transition-colors dark:bg-[#FFA5A5] dark:text-[#232323]">
            <FaClock className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
              {t.info.hours}
            </p>
            <p className="whitespace-pre-line text-gray-700 transition-colors dark:text-[#FAD2E1]">
              {t.info.hoursText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ContactForm({ t }: { t: typeof translations.en }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
    cv: null,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return submitted ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center text-green-800 transition-colors dark:border-green-800 dark:bg-green-900/20 dark:text-green-400"
    >
      {t.form.success}
    </motion.div>
  ) : (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-[#FFE2E2] bg-[#FFF6F6] p-6 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]"
    >
      <h2 className="mb-4 text-xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
        {t.form.title}
      </h2>
      <div>
        <label className="mb-1 block font-medium text-gray-700 transition-colors dark:text-[#FAD2E1]">
          {t.form.name}
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white p-2 transition-colors dark:border-[#3A3A3A] dark:bg-[#2A2A2A] dark:text-white"
          required
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-gray-700 transition-colors dark:text-[#FAD2E1]">
          {t.form.email}
        </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white p-2 transition-colors dark:border-[#3A3A3A] dark:bg-[#2A2A2A] dark:text-white"
          required
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-gray-700 transition-colors dark:text-[#FAD2E1]">
          {t.form.subject}
        </label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white p-2 transition-colors dark:border-[#3A3A3A] dark:bg-[#2A2A2A] dark:text-white"
          required
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-gray-700 transition-colors dark:text-[#FAD2E1]">
          {t.form.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white p-2 transition-colors dark:border-[#3A3A3A] dark:bg-[#2A2A2A] dark:text-white"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-[20px] bg-[#D72638] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:bg-[#FF3B59] hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
      >
        {t.form.send}
      </button>
    </motion.form>
  )
}

function ContactSection({ t, section, icon: Icon }: { t: typeof translations.en; section: keyof typeof translations.en.sections; icon: IconType }) {
  const sectionData = t.sections[section]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[#FFE2E2] bg-[#FFF6F6] p-6 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D72638] transition-colors dark:bg-[#FFA5A5]">
          <Icon className="h-5 w-5 text-white dark:text-[#232323]" />
        </div>
        <h2 className="text-xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5] whitespace-nowrap overflow-hidden text-ellipsis">
          {sectionData.title}
        </h2>
      </div>
      <p className="mb-4 text-gray-700 transition-colors dark:text-[#FAD2E1]">{sectionData.content}</p>
      <ul className="space-y-2">
        {sectionData.details.map((detail, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
            <detail.icon className="h-4 w-4 text-[#D72638] dark:text-[#FFA5A5]" />
            <span>{detail.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ContactPage() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <main className="min-h-screen bg-[#FFF5E1] py-6 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] transition-colors duration-200 md:py-12 dark:bg-[#232323]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 flex flex-col items-center md:mb-12"
        >
          <h1 className="text-center font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-2xl font-bold tracking-wide text-[#D72638] uppercase transition-colors md:text-4xl dark:text-[#FFA5A5]">
            {t.title}
          </h1>
          <p className="mt-2 max-w-xl text-center text-sm text-[#D72638]/80 transition-colors md:text-lg dark:text-[#FFA5A5]/80">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <InfoBlock t={t} />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/soft-images/Pappert_painting.webp"
                alt="Bakery Interior"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-8">
            <ContactForm t={t} />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/papperts_Auszeichnung_Service-Champion_2023.jpg"
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ContactSection t={t} section="general" icon={FaEnvelope} />
          <ContactSection t={t} section="business" icon={FaBriefcase} />
          <ContactSection t={t} section="careers" icon={FaUsers} />
        </div>
      </div>
    </main>
  )
} 
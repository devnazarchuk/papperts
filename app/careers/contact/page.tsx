'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const contact = {
  name: 'Patricia Nensel',
  phone: '06658 960129',
  email: 'bewerbung@papperts.de',
  img: '/images/papperts_Patricia_Nensel_Ansprechpartner.jpg',
}

const translations = {
  de: {
    title: 'Kontakt',
    subtitle: 'Deine Ansprechpartnerin für alle Fragen rund um die Bewerbung bei Pappert.',
    contactTitle: 'Kontakt',
    contactSubtitle:
      'Unser Kontakt-Formular bietet Platz für Ihre Fragen, Anregungen und Kommentare. Wir antworten Ihnen schnellstmöglich.',
    firstName: 'Vorname',
    lastName: 'Nachname*',
    subject: 'Betreff*',
    email: 'E-Mail*',
    message: 'Nachricht*',
    privacy:
      'Ich stimme der Speicherung und Weiterverarbeitung meiner Angaben zu. Zudem stimme ich der Datenschutzvereinbarung dieser Webseite zu.',
    submit: 'Schreiben sie uns!',
    success: 'Vielen Dank für Ihre Nachricht!',
    contactPerson: 'Deine Ansprechpartnerin für alle Fragen rund um die Bewerbung',
  },
  en: {
    title: 'Contact',
    subtitle: 'Your contact person for all questions about applying at Pappert.',
    contactTitle: 'Contact',
    contactSubtitle:
      'Our contact form provides space for your questions, suggestions, and comments. We will respond to you as soon as possible.',
    firstName: 'First Name',
    lastName: 'Last Name*',
    subject: 'Subject*',
    email: 'Email*',
    message: 'Message*',
    privacy:
      'I agree to the storage and processing of my information. I also agree to the privacy policy of this website.',
    submit: 'Contact us!',
    success: 'Thank you for your message!',
    contactPerson: 'Your contact person for all questions about applying',
  },
}

export default function CareersContactPage() {
  const { language } = useLanguageStore()
  const t = translations[language]

  // State for new contact form
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    betreff: '',
    email: '',
    nachricht: '',
    datenschutz: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type } = target
    if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: target.checked }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: handle actual submission
  }

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8 text-center text-4xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mb-12 max-w-2xl text-center text-lg text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Person Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mb-12 flex w-full max-w-md flex-col items-center rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
          >
            <Image
              src={contact.img}
              alt={contact.name}
              width={120}
              height={120}
              className="mb-4 rounded-full object-cover"
            />
            <h3 className="mb-2 text-xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
              {contact.name}
            </h3>
            <div className="mb-2 flex flex-col items-center gap-2">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 font-medium text-[#c60627] transition-colors duration-200 hover:underline dark:text-[#EE0A24]"
              >
                <FaPhone /> {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 font-medium text-[#c60627] transition-colors duration-200 hover:underline dark:text-[#EE0A24]"
              >
                <FaEnvelope /> {contact.email}
              </a>
            </div>
            <div className="text-sm text-gray-600 transition-colors duration-200 dark:text-gray-400">
              {t.contactPerson}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mb-12 max-w-2xl rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
          >
            <h2
              className="mb-2 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.contactTitle}
            </h2>
            <p
              className="mb-4 text-center text-base text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.contactSubtitle}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    {t.firstName}
                  </label>
                  <input
                    name="vorname"
                    type="text"
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.vorname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    {t.lastName}
                  </label>
                  <input
                    name="nachname"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.nachname}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    {t.subject}
                  </label>
                  <input
                    name="betreff"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.betreff}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    {t.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  {t.message}
                </label>
                <textarea
                  name="nachricht"
                  required
                  className="h-32 w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.nachricht}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input
                  name="datenschutz"
                  type="checkbox"
                  required
                  checked={form.datenschutz}
                  onChange={handleChange}
                  className="rounded border-gray-300 bg-white transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700"
                />
                <label className="text-sm text-gray-600 transition-colors duration-200 dark:text-gray-400">
                  {t.privacy}
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-[#c60627] px-6 py-3 text-lg font-semibold text-white shadow-md transition-all transition-colors duration-200 hover:bg-[#EE0A24] hover:shadow-xl dark:bg-[#EE0A24] dark:hover:bg-[#FF1A1A]"
              >
                {t.submit}
              </button>
              {submitted && (
                <div className="mt-2 text-center font-semibold text-green-600 transition-colors duration-200 dark:text-green-400">
                  {t.success}
                </div>
              )}
            </form>
          </motion.section>
        </div>
      </section>
    </main>
  )
}

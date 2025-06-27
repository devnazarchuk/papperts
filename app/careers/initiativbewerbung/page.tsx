'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

// import Image from 'next/image'
// import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { useLanguageStore } from '@/app/store/languageStore'

import { initiativeTranslations } from './languages'

// const contact = {
//   name: 'Patricia Nensel',
//   phone: '06658 960129',
//   email: 'bewerbung@papperts.de',
//   img: '/images/papperts_Patricia_Nensel_Ansprechpartner.jpg',
// }

export default function CareersInitiativePage() {
  const { language } = useLanguageStore()
  const t = initiativeTranslations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null as File | null,
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // Here you would typically send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        cv: null,
      })
    } catch (err) {
      console.error('Error submitting form:', err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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

      {/* Application Form Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]"
          >
            <h2 className="mb-2 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
              {t.formTitle}
            </h2>
            <p className="mb-8 text-center text-gray-600 transition-colors duration-200 dark:text-gray-300">
              {t.formSubtitle}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300"
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors duration-200 focus:border-[#c60627] focus:ring-2 focus:ring-[#c60627] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#EE0A24] dark:focus:ring-[#EE0A24]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300"
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors duration-200 focus:border-[#c60627] focus:ring-2 focus:ring-[#c60627] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#EE0A24] dark:focus:ring-[#EE0A24]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300"
                >
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors duration-200 focus:border-[#c60627] focus:ring-2 focus:ring-[#c60627] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#EE0A24] dark:focus:ring-[#EE0A24]"
                />
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300"
                >
                  {t.positionLabel}
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  placeholder={t.positionPlaceholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors duration-200 focus:border-[#c60627] focus:ring-2 focus:ring-[#c60627] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#EE0A24] dark:focus:ring-[#EE0A24]"
                />
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300"
                >
                  {t.experienceLabel}
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder={t.experiencePlaceholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors duration-200 focus:border-[#c60627] focus:ring-2 focus:ring-[#c60627] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#EE0A24] dark:focus:ring-[#EE0A24]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors duration-200 focus:border-[#c60627] focus:ring-2 focus:ring-[#c60627] focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-[#EE0A24] dark:focus:ring-[#EE0A24]"
                />
              </div>
              {submitSuccess && (
                <div className="rounded-lg bg-green-100 p-4 text-green-700 dark:bg-green-900 dark:text-green-100">
                  {t.successMessage}
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-full bg-[#c60627] px-8 py-3 text-lg font-bold text-white shadow-md transition-all transition-colors duration-200 hover:bg-[#EE0A24] hover:shadow-xl dark:bg-[#EE0A24] dark:hover:bg-[#FF1A1A]"
                style={{
                  fontFamily:
                    'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                {t.submitButton}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

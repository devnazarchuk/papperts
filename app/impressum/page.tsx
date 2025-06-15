'use client'

import { FaBuilding, FaEnvelope, FaGlobe, FaInfoCircle,FaMapMarkerAlt, FaPhone, FaUserTie } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  en: {
    title: 'Imprint',
    sections: [
      {
        icon: FaBuilding,
        title: 'Company Information',
        content: 'papperts GmbH\nBürgermeister-Ebert-Straße 38\n36124 Eichenzell\nPhone: +49 (0)66 58 96 01 0\nFax: +49 (0)66 58 96 01 20\nEmail: service@papperts.de\nwww.papperts.de',
      },
      {
        icon: FaUserTie,
        title: 'Authorized Representatives',
        content: 'Bernd Pappert, Manfred Klüber\nRegister Court: Fulda\nRegistration Number: HRB 8391\nTax ID: 018 241 03195',
      },
      {
        icon: FaEnvelope,
        title: 'Email',
        content: 'service@papperts.de',
      },
      {
        icon: FaPhone,
        title: 'Phone',
        content: '+49 (0)66 58 96 01 0',
      },
      {
        icon: FaGlobe,
        title: 'Website',
        content: 'www.papperts.de',
      },
      {
        icon: FaMapMarkerAlt,
        title: 'Address',
        content: 'Bürgermeister-Ebert-Straße 38\n36124 Eichenzell',
      },
      {
        icon: FaInfoCircle,
        title: 'This imprint is also valid for:',
        content: '• www.facebook.com/papperts\n• www.facebook.com/fitnessbaecker\n• www.instagram.com/baeckerei_pappert\n• www.youtube.com/channel/UCONK8AduFQUjauxdQgfPwuQ\n• http://papperts.tumblr.com\n• https://www.tiktok.com/@papperts_baeckerei',
      },
    ],
  },
  de: {
    title: 'Impressum',
    sections: [
      {
        icon: FaBuilding,
        title: 'Firmeninformationen',
        content: 'papperts GmbH\nBürgermeister-Ebert-Straße 38\n36124 Eichenzell\nFon: +49 (0)66 58 96 01 0\nFax: +49 (0)66 58 96 01 20\nE-Mail: service@papperts.de\nwww.papperts.de',
      },
      {
        icon: FaUserTie,
        title: 'Vertretungsberechtigte Geschäftsführer',
        content: 'Bernd Pappert, Manfred Klüber\nRegistergericht: Fulda\nRegisternummer: HRB 8391\nSt.-Nr.: 018 241 03195',
      },
      {
        icon: FaEnvelope,
        title: 'E-Mail',
        content: 'service@papperts.de',
      },
      {
        icon: FaPhone,
        title: 'Telefon',
        content: '+49 (0)66 58 96 01 0',
      },
      {
        icon: FaGlobe,
        title: 'Website',
        content: 'www.papperts.de',
      },
      {
        icon: FaMapMarkerAlt,
        title: 'Adresse',
        content: 'Bürgermeister-Ebert-Straße 38\n36124 Eichenzell',
      },
      {
        icon: FaInfoCircle,
        title: 'Das Impressum ist auch auf folgenden Seiten gültig:',
        content: '• www.facebook.com/papperts\n• www.facebook.com/fitnessbaecker\n• www.instagram.com/baeckerei_pappert\n• www.youtube.com/channel/UCONK8AduFQUjauxdQgfPwuQ\n• http://papperts.tumblr.com\n• https://www.tiktok.com/@papperts_baeckerei',
      },
    ],
  },
}

export default function Impressum() {
  const { language } = useLanguageStore()
  const t = translations[language]
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{t.title}</h1>
      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        {t.sections.map((section) => (
          <section key={section.title}>
            <div className="mb-4 flex items-center gap-3">
              <section.icon className="h-7 w-7 text-[#D72638] dark:text-[#FFA5A5]" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="whitespace-pre-line">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

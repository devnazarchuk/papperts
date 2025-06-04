'use client'

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

// import { motion } from 'framer-motion';
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export default function Footer() {
  const { language } = useLanguageStore()
  const t = translations[language]

  const legalLinks = [
    { name: t.footer.legal.imprint, href: '/impressum' },
    { name: t.footer.legal.privacy, href: '/datenschutz' },
    { name: t.footer.legal.esg, href: '/esg' },
    { name: t.footer.legal.purchaseTerms, href: '/allgemeine-einkaufsbedingungen' },
    {
      name: t.footer.legal.salesTerms,
      href: '/allgemeine-verkaufs-lieferungs-und-zahlungsbedingungen',
    },
  ]

  return (
    <footer className="mt-12 rounded-t-[20px] bg-[#FFF6F6] py-12 text-[#3A3A3A] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] dark:bg-[#232323] dark:text-[#FDEEEE] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Über uns */}
          <div className="">
            <h3 className="mb-4 flex items-center gap-2 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-lg font-extrabold text-[#D72638] dark:text-[#FFA5A5]">
              <MapPin className="h-6 w-6 text-[#D72638]" />
              {t.footer.about.title}
            </h3>
            <p className="text-[#A88B8B]">{t.footer.about.description}</p>
          </div>

          {/* Kontakt */}
          <div className="">
            <h3 className="mb-4 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-lg font-semibold">
              {t.footer.contact.title}
            </h3>
            <ul className="space-y-2 text-[#A88B8B]">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#D72638]" />
                Rhönstraße 11, 36124 Eichenzell
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#D72638]" />
                {t.footer.contact.phone}:{' '}
                <a href="tel:0665998660" className="underline hover:text-[#D72638]">
                  06659 9866-0
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#D72638]" />
                {t.footer.contact.email}:{' '}
                <a href="mailto:info@papperts.de" className="underline hover:text-[#D72638]">
                  info@papperts.de
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="">
            <h3 className="mb-4 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-lg font-semibold">
              {t.footer.social.title}
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/papperts/"
                  target="_blank"
                  rel="noopener"
                  className="text-[#A88B8B] transition-colors hover:text-[#EE0A24]"
                  aria-label={t.footer.social.facebook}
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/baeckerei_pappert/?hl=de"
                  target="_blank"
                  rel="noopener"
                  className="text-[#A88B8B] transition-colors hover:text-[#EE0A24]"
                  aria-label={t.footer.social.instagram}
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/papperts-gmbh-&-co.-kg/"
                  target="_blank"
                  rel="noopener"
                  className="text-[#A88B8B] transition-colors hover:text-[#EE0A24]"
                  aria-label={t.footer.social.linkedin}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@papperts_baeckerei"
                  target="_blank"
                  rel="noopener"
                  className="text-[#A88B8B] transition-colors hover:text-[#EE0A24]"
                  aria-label={t.footer.social.tiktok}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        d="M204.8 77.6c-24.8 0-44.8-20-44.8-44.8V16h-40v144c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24c2.8 0 5.6.4 8 1.6V113.6c-2.8-.4-5.6-.8-8-.8-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64v-72c16.8 13.2 37.6 20.8 60 20.8v-40h-8z"
                        className="transition-colors"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Wichtige Links (legal) - horizontal at the very bottom */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-[#FFA5A5] pt-6 dark:border-[#3A3A3A]">
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[12px] px-2 py-1 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-sm font-medium text-[#A88B8B] transition-colors hover:text-[#D72638] dark:text-[#FAD2E1] dark:hover:text-[#FFA5A5]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#A88B8B] dark:text-[#FAD2E1]">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

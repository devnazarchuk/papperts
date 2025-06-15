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
    <footer className="mt-12 rounded-t-[20px] bg-[var(--card-bg)] py-12 text-[var(--text-primary)] shadow-[var(--card-shadow)] dark:bg-[var(--card-bg)] dark:text-[var(--text-primary)] dark:shadow-[var(--card-shadow)]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Über uns */}
          <div className="">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-[var(--headline-font)] font-extrabold text-[var(--primary-accent)] dark:text-[var(--primary-accent)]">
              <MapPin className="h-6 w-6 text-[var(--primary-accent)]" />
              {t.footer.about.title}
            </h3>
            <p className="text-[var(--text-secondary)]">{t.footer.about.description}</p>
          </div>

          {/* Kontakt */}
          <div className="">
            <h3 className="mb-4 text-lg font-[var(--headline-font)] font-semibold">
              {t.footer.contact.title}
            </h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[var(--primary-accent)]" />
                {t.footer.contact.address}:{' '}
                <a
                  href="https://www.google.com/maps/place/papperts+GmbH+Caf%C3%A9+am+Backhaus/@50.4802931,9.7348601,340m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47a3308a71ce7177:0x8a4a8a66923385ac!2sB%C3%BCrgermeister-Ebert-Stra%C3%9Fe+38,+36124+Eichenzell!3b1!8m2!3d50.4804622!4d9.7355232!16s%2Fg%2F11x33sb602!3m5!1s0x47a33152c612c193:0x6260b499cdf69f35!8m2!3d50.4804622!4d9.7355232!16s%2Fg%2F11x1bb5w_k?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
                  className="underline hover:text-[var(--primary-accent)]"
                >
                  Bürgermeister-Ebert-Straße 38, Eichenzell
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[var(--primary-accent)]" />
                {t.footer.contact.phone}:{' '}
                <a href="tel:0665998660" className="underline hover:text-[var(--primary-accent)]">
                  06659 9866-0
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[var(--primary-accent)]" />
                {t.footer.contact.email}:{' '}
                <a
                  href="mailto:info@papperts.de"
                  className="underline hover:text-[var(--primary-accent)]"
                >
                  info@papperts.de
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="">
            <h3 className="mb-4 text-lg font-[var(--headline-font)] font-semibold">
              {t.footer.social.title}
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/papperts/"
                  target="_blank"
                  rel="noopener"
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-accent)]"
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
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-accent)]"
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
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-accent)]"
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
                  className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-accent)]"
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
        <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-[var(--primary-accent)] pt-6 dark:border-[var(--primary-accent)]">
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[12px] px-2 py-1 text-sm font-[var(--body-font)] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-accent)] dark:text-[var(--primary-accent)] dark:hover:text-[var(--primary-accent)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--primary-accent)]">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

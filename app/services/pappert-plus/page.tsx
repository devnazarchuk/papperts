'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function PappertPlusPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F6] pb-12 transition-colors duration-200 dark:bg-[#232323]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/Werde_Teil_von_Pappert_der_Baeckerei_Pappert_aus_Eichenzell-1920x1080.jpg"
          alt="Pappert Plus Hero"
          fill
          className="rounded-[25px] object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-[25px] bg-black/30 transition-colors dark:bg-black/60">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center text-3xl font-bold text-white drop-shadow-lg transition-colors md:text-5xl"
          >
            DER NEUE PAPPERT KUNDENCLUB MIT DEM &quot;MEHR&quot;
          </motion.h1>
        </div>
      </section>

      {/* Main Content: German bakery-branded section */}
      <section className="w-full px-4 md:px-12 xl:px-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 text-center shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <Image
            src="/images/Pappert-Plus-300x120.png"
            alt="Pappert Plus Logo"
            width={200}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="mb-2 text-2xl font-bold text-[#D72638] transition-colors md:text-3xl dark:text-[#FFA5A5]">
            Pappert Plus – Mehr erleben!
          </h2>
          <p className="mb-4 text-lg text-gray-700 transition-colors dark:text-[#FAD2E1]">
            Mehr Angebote, mehr Gewinne, mehr Tipps, mehr Infos und vieles weitere mehr … einmal
            anmelden – für immer vorne mit dabei! Vollautomatisch.
            <br />
            Wir starten sofort und wollen uns gemeinsam mit Euch entwickeln: Euer Feedback ist uns
            wichtig.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 text-center shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h3 className="mb-2 text-xl font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            Ab sofort verlosen wir jeden Monat*
          </h3>
          <h4 className="mb-4 text-lg font-semibold transition-colors dark:text-[#FFA5A5]">
            40x &quot;Genuss für 2&quot;-Frühstück!
          </h4>
          <p className="mb-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
            Informiert werdet ihr über WhatsApp.
            <br />
            Meldet euch jetzt an:
          </p>
          <Link
            href="https://form.jotform.com/250843217145352"
            target="_blank"
            rel="noopener"
            className="mb-2 inline-block rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
          >
            JETZT TEILNEHMEN
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 text-center shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <Image
            src="/images/Genuss_fuer_2_Fruehstueck_der_Baeckerei_Pappert_aus_Eichenzell-1-scaled.jpg"
            alt="Genuss für 2 Frühstück der Bäckerei Pappert"
            width={400}
            height={250}
            className="mx-auto mb-4 rounded-2xl"
          />
          <h3 className="mb-2 text-xl font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            Genuss für 2
          </h3>
          <p className="mb-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
            Es gibt diese besonderen Tage, an denen alles stimmt: Ein Frühstück mit Allem, was ihr
            liebt, ein Frühstück das verbindet. Klassisch mit Lachs, Wurst und Käse, aber auch süß
            und sogar vegetarisch. Hier findet ihr alles, was ihr gemeinsam für ein echtes Erlebnis
            braucht. Denn Genuss für 2 ist mehr als nur ein Frühstück – es ist für euch gemacht. Für
            jeden Tag.
          </p>
          <div className="mt-4 flex flex-col justify-center gap-4 md:flex-row">
            <Link
              href="https://form.jotform.com/250843217145352"
              target="_blank"
              rel="noopener"
              className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
            >
              JETZT TEILNEHMEN
            </Link>
            <Link
              href="/menu/fff"
              className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
            >
              ZUM FRÜHSTÜCK
            </Link>
          </div>
        </motion.div>
        <p className="text-center text-xs text-gray-500 transition-colors dark:text-[#FAD2E1]">
          *Und wenn Ihr nicht mehr mögt, meldet Ihr Euch halt wieder ab. So einfach geht das.
        </p>
      </section>

      {/* Pappert Plus Mitgliedschaft – Vorteile (Deutsch, breit & schön) */}
      <section className="mt-20 w-full px-2 md:px-8 xl:px-20">
        <div className="rounded-2xl border border-[#FFD2D2] bg-[#FFF5E1] p-0 shadow-inner transition-colors md:p-8 dark:border-[#3A3A3A] dark:bg-[#181818]">
          {/* Hero/Intro */}
          <div className="flex flex-col gap-8 p-8 pb-0 md:flex-row md:items-center md:justify-between">
            <div className="mb-6 flex-1 md:mb-0">
              <h2 className="mb-2 text-3xl font-bold text-[#D72638] transition-colors md:text-4xl dark:text-[#FFA5A5]">
                Pappert Plus Mitgliedschaft
              </h2>
              <p className="mb-2 text-lg text-gray-700 transition-colors dark:text-[#FAD2E1]">
                Werde Teil unseres exklusiven Kundenclubs und genieße besondere Vorteile, Services
                und Events – nur für Pappert Plus Mitglieder!
              </p>
              <div className="mt-4 inline-block rounded-full bg-[#EE0A24] px-8 py-2 text-xl font-bold text-white shadow-md transition-colors dark:bg-[#FFA5A5] dark:text-[#232323]">
                9,99€ / Monat
              </div>
            </div>
            {/* Extra wide registration form */}
            <div className="mx-auto w-full max-w-xl flex-1">
              <form className="flex flex-col gap-6 rounded-2xl border border-[#FFD2D2] bg-white p-8 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]">
                <h3 className="mb-2 text-center text-2xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                  Jetzt registrieren
                </h3>
                <div>
                  <label
                    className="mb-1 block text-gray-700 transition-colors dark:text-[#FAD2E1]"
                    htmlFor="name"
                  >
                    Vollständiger Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-[16px] bg-[#FFF6F6] p-4 shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff] transition-colors dark:bg-[#181818] dark:shadow-[inset_4px_4px_8px_#181818,_inset_-4px_-4px_8px_#232323]"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-gray-700 transition-colors dark:text-[#FAD2E1]"
                    htmlFor="email"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-[16px] bg-[#FFF6F6] p-4 shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff] transition-colors dark:bg-[#181818] dark:shadow-[inset_4px_4px_8px_#181818,_inset_-4px_-4px_8px_#232323]"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-gray-700 transition-colors dark:text-[#FAD2E1]"
                    htmlFor="phone"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-[16px] bg-[#FFF6F6] p-4 shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff] transition-colors dark:bg-[#181818] dark:shadow-[inset_4px_4px_8px_#181818,_inset_-4px_-4px_8px_#232323]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[25px] bg-[#EE0A24] px-10 py-4 text-lg font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all transition-colors hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
                >
                  Jetzt Mitglied werden
                </button>
              </form>
            </div>
          </div>

          {/* Vorteile – horizontal row */}
          <div className="mt-12 flex flex-col gap-8 px-4 pb-8 md:flex-row">
            {/* Exklusive Vorteile */}
            <div className="flex-1 rounded-[25px] border border-[#FFD2D2] bg-[#FFF6F6] p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]">
              <h3 className="mb-2 text-2xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                Exklusive Vorteile
              </h3>
              <p className="mb-4 text-gray-700 transition-colors dark:text-[#FAD2E1]">
                Genieße exklusive Vorteile, die für unsere wertvollsten Kund:innen entwickelt
                wurden.
              </p>
              <ul className="space-y-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Doppelte Bonuspunkte auf alle Einkäufe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Monatlich exklusive Produkte nur für Mitglieder</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Gratis Kaffee-Upgrade bei jedem Besuch</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Geburtstagswoche: besondere Überraschungen</span>
                </li>
              </ul>
            </div>
            {/* Besonderer Zugang */}
            <div className="flex-1 rounded-[25px] border border-[#FFD2D2] bg-[#FFF6F6] p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]">
              <h3 className="mb-2 text-2xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                Besonderer Zugang
              </h3>
              <p className="mb-4 text-gray-700 transition-colors dark:text-[#FAD2E1]">
                Erhalte bevorzugten Zugang zu unseren beliebtesten Produkten und Events.
              </p>
              <ul className="space-y-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Vorbestellung von Feiertagsspezialitäten</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Reservierte Artikel zu Stoßzeiten</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Früher Zugang zu saisonalen Produkten</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>VIP-Sitzplätze in unseren Cafés</span>
                </li>
              </ul>
            </div>
            {/* Zusätzliche Services */}
            <div className="flex-1 rounded-[25px] border border-[#FFD2D2] bg-[#FFF6F6] p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]">
              <h3 className="mb-2 text-2xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                Zusätzliche Services
              </h3>
              <p className="mb-4 text-gray-700 transition-colors dark:text-[#FAD2E1]">
                Exklusive Services nur für Pappert Plus Mitglieder.
              </p>
              <ul className="space-y-2 text-gray-700 transition-colors dark:text-[#FAD2E1]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Kostenlose Lieferung ab 30€</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Persönliche Beratung durch unsere Bäcker:innen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Individuelle Tortendesign-Beratung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EE0A24]">•</span>
                  <span>Vorrang bei privatem Event-Catering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

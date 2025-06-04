'use client'
import { motion } from 'framer-motion'
import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'

export default function CareersInitiativbewerbungPage() {
  // Express-Bewerbung form state
  const [form, setForm] = useState({
    nachname: '',
    vorname: '',
    email: '',
    telefon: '',
    geburtsdatum: '',
    wohnort: '',
    beschaeftigung: '',
    arbeitszeit: '',
    wochenende: '',
    langfristig: '',
    verkaufserfahrung: '',
    nachricht: '',
    files: null as FileList | null,
    datenschutz: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement
    if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: checked }))
    } else if (type === 'file') {
      setForm((f) => ({ ...f, files: files }))
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
            Initiativbewerbung
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
            Sei einfach dabei
            <br />
            Komplizierte Bewerbungsprozesse liegen bei uns in der Vergangenheit. Wir suchen Dich und
            keine langen Anschreiben. Deshalb gibt es bei Pappert die Express-Bewerbung. Mit Deinem
            Namen, einer Kontaktmöglichkeit und einem kurzen Klick hast Du Deine Bewerbung auch
            schon rausgeschickt.
          </motion.p>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="w-full px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 flex max-w-2xl flex-col gap-6 rounded-[25px] bg-[#FFF6F6] p-8 shadow-[10px_10px_24px_#e4c6c6,_-10px_-10px_24px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_24px_#181818,_-10px_-10px_24px_#2a2a2a]">
            <div className="mb-4">
              <div className="mb-1 font-semibold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                Ansprechpartnerin Patricia Nensel – Jobs bei der Bäckerei Pappert
              </div>
              <div className="text-[#3A3A3A] transition-colors duration-200 dark:text-gray-300">
                Patricia Nensel
                <br />
                06658 960129
                <br />
                bewerbung@papperts.de
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    Nachname*
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
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    Vorname*
                  </label>
                  <input
                    name="vorname"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.vorname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    E-Mail*
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
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    Telefon*
                  </label>
                  <input
                    name="telefon"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.telefon}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    Geburtsdatum
                  </label>
                  <input
                    name="geburtsdatum"
                    type="date"
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.geburtsdatum}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                    Wohnort*
                  </label>
                  <input
                    name="wohnort"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={form.wohnort}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Welche Art der Beschäftigung kommt für Dich in Frage?*
                </label>
                <select
                  name="beschaeftigung"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.beschaeftigung}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen…</option>
                  <option value="Vollzeit">Vollzeit</option>
                  <option value="Teilzeit">Teilzeit</option>
                  <option value="Minijob">Minijob</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Wann kannst Du arbeiten?*
                </label>
                <select
                  name="arbeitszeit"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.arbeitszeit}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen…</option>
                  <option value="Ab 5 Uhr flexibel">Ab 5 Uhr flexibel</option>
                  <option value="Bis Ladenschluss flexibel">Bis Ladenschluss flexibel</option>
                  <option value="Eingeschränkte Zeiten">Eingeschränkte Zeiten</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Bist Du bereit, auch am Wochenende zu arbeiten?*
                </label>
                <select
                  name="wochenende"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.wochenende}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen…</option>
                  <option value="JA">JA</option>
                  <option value="NEIN">NEIN</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Langfristige Beschäftigung?*
                </label>
                <select
                  name="langfristig"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.langfristig}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen…</option>
                  <option value="Länger als 1 Jahr">Länger als 1 Jahr</option>
                  <option value="Für mehrere Monate">Für mehrere Monate</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Hast Du bereits Verkaufserfahrung?*
                </label>
                <select
                  name="verkaufserfahrung"
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.verkaufserfahrung}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen…</option>
                  <option value="JA">JA</option>
                  <option value="NEIN">NEIN</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Nachricht
                </label>
                <textarea
                  name="nachricht"
                  className="h-32 w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  value={form.nachricht}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="mb-1 block font-medium text-[#3A3A3A] transition-colors duration-200 dark:text-gray-200">
                  Dateien (max. 3 PDF, 10 MB)
                </label>
                <input
                  name="files"
                  type="file"
                  accept=".pdf"
                  multiple
                  className="w-full rounded-2xl border border-gray-300 bg-white p-3 transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  ref={fileInputRef}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  name="datenschutz"
                  type="checkbox"
                  required
                  checked={form.datenschutz}
                  onChange={handleChange}
                />
                <label className="text-sm text-gray-600 transition-colors duration-200 dark:text-gray-300">
                  Ich habe die Datenschutzerklärung gelesen und akzeptiert.
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-[#c60627] px-6 py-3 text-lg font-semibold text-white shadow-md transition-all transition-colors duration-200 hover:bg-[#EE0A24] hover:shadow-xl dark:bg-[#EE0A24] dark:hover:bg-[#FF1A1A]"
              >
                Jetzt bewerben
              </button>
              {submitted && (
                <div className="mt-2 text-center font-semibold text-green-600 transition-colors duration-200 dark:text-green-400">
                  Vielen Dank für deine Bewerbung!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

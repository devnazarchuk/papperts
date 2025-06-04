'use client'
import { AnimatePresence,motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';

const eventOptions = [
  'Alpentour 2025 (22.06. - 27.06.2025)',
  'E-Bike-Power (06.09.2025)',
  'Fitnessbäcker-Bike-Day (30.08.2025)',
  'Full-Body-Workout (04.06. - 09.07.2025)',
  'Full-Body-Workout (30.07. - 03.09.2025)',
  'Rückentraining 2.0 (04.06. - 09.07.2025)',
  'Rückentraining 2.0 (30.07. - 03.09.2025)',
  'MTB-Kids-Camp (8-10 Jahre), (11.08. - 12.08.2025)',
  'MTB-Kids-Camp (11-13 Jahre), (13.08. - 14.08.2025)',
];

export default function FitnessRegistrationPage() {
  const [form, setForm] = useState({
    event: '',
    vorname: '',
    nachname: '',
    anschrift: '',
    anschriftZusatz: '',
    ort: '',
    plz: '',
    telefon: '',
    mobile: '',
    email: '',
    geburtsdatum: '',
    konfektionsgroesse: '',
    transfer: '',
    datenschutz: false,
    stornobedingungen: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Implement actual submission logic
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFF5E1] via-[#FFE2E2] to-[#FFF6F6] relative overflow-x-hidden font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif]">
      {/* Soft background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 80% 10%, #FAD2E1 0%, transparent 60%), radial-gradient(ellipse at 10% 90%, #FFE2E2 0%, transparent 70%)'}} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl mx-auto bg-[#FFF6F6]/90 rounded-[32px] shadow-[10px_10px_32px_#e4c6c6,_-10px_-10px_32px_#ffffff] border-2 border-[#FAD2E1] px-8 py-12 md:px-16 md:py-16 flex flex-col items-center"
        style={{backdropFilter: 'blur(2px)'}}
      >
        {/* Bakery illustration */}
        <div className="mb-4 flex justify-center">
          <Image src="/icons/bread.png" alt="Brot Illustration" width={80} height={80} className="rounded-full shadow-md bg-[#FFF5E1] p-2" priority sizes="80px" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D72638] text-center tracking-wide uppercase mb-2 drop-shadow-sm" style={{letterSpacing: '0.04em'}}>Anmeldung Fitnessbäcker</h1>
        <p className="text-lg text-[#D72638] text-center mb-8 font-semibold">Werde Teil unserer Fitness-Community!</p>
        <AnimatePresence>
          {!submitted && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="w-full space-y-6"
              style={{fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'}}
            >
              <div className="mb-6">
                <label htmlFor="event" className="block text-lg font-semibold text-[#D72638] mb-2" style={{ fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  Veranstaltung
                </label>
                <div className="relative">
                  <select
                    id="event"
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    className="w-full rounded-2xl bg-[#FFF5E1] border border-[#FFD6D6] py-3 px-4 pr-10 text-base font-medium text-[#3A3A3A] shadow-md focus:outline-none focus:ring-2 focus:ring-[#D72638] transition-all duration-200 appearance-none"
                    aria-label="Veranstaltung auswählen"
                    style={{ fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}
                    required
                  >
                    <option value="" disabled>Bitte wählen…</option>
                    {eventOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#D72638]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#D72638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="vorname" value={form.vorname} onChange={handleChange} placeholder="Vorname*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
                <Input name="nachname" value={form.nachname} onChange={handleChange} placeholder="Nachname*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              </div>
              <Input name="anschrift" value={form.anschrift} onChange={handleChange} placeholder="Anschrift*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              <Input name="anschriftZusatz" value={form.anschriftZusatz} onChange={handleChange} placeholder="Anschrift Zusatz" className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="ort" value={form.ort} onChange={handleChange} placeholder="Ort*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
                <Input name="plz" value={form.plz} onChange={handleChange} placeholder="PLZ*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="telefon" value={form.telefon} onChange={handleChange} placeholder="Telefon*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
                <Input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              </div>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-Mail*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              <Input name="geburtsdatum" value={form.geburtsdatum} onChange={handleChange} placeholder="Geb. Datum (TT/MM/JJJJ)*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              <Input name="konfektionsgroesse" value={form.konfektionsgroesse} onChange={handleChange} placeholder="Konfektionsgröße*" required className="rounded-2xl bg-[#FFF5E1] border-2 border-[#FAD2E1] shadow-inner px-5 py-3 text-base font-medium text-[#3A3A3A] focus:ring-2 focus:ring-[#EE0A24]/40 focus:border-[#EE0A24]" />
              <div>
                <label className="block font-semibold mb-2 text-[#D72638]">Ich benötige einen Transfer (Hin- und Rückreise)*</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A]">
                    <input type="radio" name="transfer" value="JA" checked={form.transfer === 'JA'} onChange={handleChange} required className="accent-[#EE0A24] w-5 h-5" /> JA
                  </label>
                  <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A]">
                    <input type="radio" name="transfer" value="NEIN" checked={form.transfer === 'NEIN'} onChange={handleChange} required className="accent-[#EE0A24] w-5 h-5" /> NEIN
                  </label>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A]">
                  <input type="checkbox" name="datenschutz" checked={form.datenschutz} onChange={handleChange} required className="accent-[#EE0A24] w-5 h-5" />
                  Ich stimme der Speicherung und Weiterverarbeitung meiner Angaben zu. Zudem stimme ich der Datenschutzvereinbarung dieser Webseite zu.
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2 text-base font-medium text-[#3A3A3A]">
                  <input type="checkbox" name="stornobedingungen" checked={form.stornobedingungen} onChange={handleChange} required className="accent-[#EE0A24] w-5 h-5" />
                  Ich akzeptiere die Stornobedingungen zur Alpentour 2025. (Bei Absage der Teilnahme fallen folgende Stornogebühren an: bis 3 Monate vor Tourbeginn 25%; ab 3 Monaten bis zum 20. Tag vor Tourbeginn 50 %; ab 19. bis 2. Tag vor Tourbeginn 75 %; ab 1. Tag vor Reisebeginn oder bei Nichtantritt 90% des Reisepreises)
                </label>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="pt-2"
              >
                <Button type="submit" className="w-full bg-[#EE0A24] text-white rounded-[20px] py-4 text-lg font-bold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:shadow-xl transition-all">
                  Absenden
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {submitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full flex flex-col items-center justify-center py-12"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="mb-4"
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#FAD2E1"/><path d="M24 42l14 14 18-26" stroke="#EE0A24" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.div>
              <div className="text-2xl font-bold text-[#D72638] mb-2">Vielen Dank für deine Anmeldung!</div>
              <div className="text-base text-[#3A3A3A] mb-4 text-center">Wir melden uns zeitnah bei dir. Willkommen bei den Fitnessbäckern!</div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full"
              >
                <Button onClick={() => setSubmitted(false)} className="w-full bg-[#EE0A24] text-white rounded-[20px] py-3 text-lg font-bold shadow-md hover:shadow-xl transition-all mt-2">
                  Neue Anmeldung
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-10 text-base text-[#3A3A3A] space-y-2 text-center">
          <p>Die Anmeldung zum Fitnessbäcker ist erst nach einer Bestätigung unsererseits verbindlich. Über die jeweiligen Teilnahmegebühren erhalten Sie nach Bearbeitung Ihrer Anmeldung eine Rechnung.</p>
          <h4 className="font-semibold text-[#D72638]">Bei Absage der Teilnahme fallen folgende Stornogebühren* an:</h4>
          <div>
            <div>30 Tage vorher: Volle Erstattung der Kosten</div>
            <div>10 Tage vorher: 50 % Erstattung der Kosten</div>
            <div className="text-xs text-[#D72638]">*Hinweis: Für Alpentour und Rennrad-Camp auf Mallorca gelten gesonderte Stornogebühren.</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
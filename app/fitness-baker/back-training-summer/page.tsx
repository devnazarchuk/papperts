'use client'
import { AnimatePresence,motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const termine = [
  {
    monat: 'April',
    events: [
      { date: '23.04.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '30.04.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
    ],
  },
  {
    monat: 'Mai',
    events: [
      { date: '07.05.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '14.05.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '21.05.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '28.05.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
    ],
  },
  {
    monat: 'Juni',
    events: [
      { date: '04.06.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '11.06.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '18.06.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '25.06.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
    ],
  },
  {
    monat: 'Juli',
    events: [
      { date: '02.07.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '09.07.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '30.07.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
    ],
  },
  {
    monat: 'August',
    events: [
      { date: '06.08.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '13.08.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '20.08.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
      { date: '27.08.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
    ],
  },
  {
    monat: 'September',
    events: [
      { date: '03.09.2025', time: '18:30', ort: 'Sportplatz Weyhers', thema: '' },
    ],
  },
];

export default function BackTrainingSummerPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF6F6] pb-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full mb-12">
        <Image
          src="/images/Rueckentraining-2.0-Fitnessbaecker-Baeckerei-Pappert.jpg"
          alt="Fitnessbäcker Rückentraining 2.0 Hero"
          fill
          className="object-cover rounded-[25px]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 rounded-[25px]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <motion.h1
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            Rückentraining 2.0 Sommer
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-8">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold mb-4 text-[#D72638] text-center"
        >
          Work-Fit-Balance: Ein Ausgleich zum Alltag
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-base text-gray-700 mb-4 text-center"
        >
          Ein Ausgleich zum Alltag mit unserem Rückentraining 2.0. Gezieltes Rückentraining ist extrem wichtig. Gerade für Berufstätige, die viel sitzen, ist es ein Muss, um im Alter keine chronischen Beschwerden zu bekommen. Neben dem klassischen Rückentraining mit dem eigenen Körpergewicht verlagern wir die Übungen ins TRX, sodass mit Hilfe eines Seil- und Schlingensystems die Koordination und Flexibilität geschult werden. So heben wir das Rückentraining auf ein neues Level.
        </motion.p>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-base text-gray-700 mb-2 text-center"
        >
          <strong>Max. 14 Teilnehmer</strong>
        </motion.p>
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-600"><b>Start:</b> 04. Juni 2025</div>
          <div className="text-sm text-gray-600"><b>Ort:</b> Sportplatz Weyhers</div>
          <div className="text-sm text-gray-600"><b>Trainer:</b> Sascha Wingenfeld</div>
          <div className="text-sm text-gray-600"><b>Preis:</b> 55 Euro für 4 von 6 Terminen, jeder weitere Termin 12 Euro</div>
        </motion.div>
        <div className="text-center mt-6">
          <a
            href="/fitness-baker/registration"
            className="inline-block rounded-2xl bg-[#D72638] text-white px-6 py-2 font-semibold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:bg-[#EE0A24] transition"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Anmeldung Fitnessbäcker
          </a>
        </div>
      </section>

      {/* Termine Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <motion.h3
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold mb-4 text-[#D72638] text-center"
        >
          Termine 2025
        </motion.h3>
        <div className="space-y-4">
          {termine.map(({ monat, events }) => (
            <div key={monat} className="border rounded-xl overflow-hidden bg-[#FFF5E1]">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-[#D72638] focus:outline-none focus:ring-2 focus:ring-[#D72638] bg-[#FFF5E1] hover:bg-[#FFE2E2] transition"
                onClick={() => setOpenMonth(openMonth === monat ? null : monat)}
                aria-expanded={openMonth === monat}
                aria-controls={`panel-${monat}`}
              >
                <span>{monat}</span>
                <span className="text-2xl">{openMonth === monat ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openMonth === monat && (
                  <motion.div
                    id={`panel-${monat}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <ul className="divide-y divide-[#FAD2E1]">
                      {events.map((event) => (
                        <li key={event.date + event.time} className="py-3">
                          <div className="font-semibold text-[#D72638]">{event.date}</div>
                          <div className="text-sm text-gray-700">{event.time}, {event.ort}</div>
                          {event.thema && <div className="text-xs text-gray-500">{event.thema}</div>}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 text-xs text-gray-500">Alle Termine und Details auf Anfrage oder vor Ort.</div>
      </section>
    </div>
  );
} 
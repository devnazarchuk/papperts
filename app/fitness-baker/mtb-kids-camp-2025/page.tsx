'use client'
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const termine = [
  {
    gruppe: 'Camp 1 (8-10 Jahre)',
    events: [
      {
        date: '11.08.2025 - 12.08.2025',
        time: '09:00 - 16:00 Uhr',
        ort: 'Sportplatz Poppenhausen',
        thema: 'Für Kinder zwischen 8-10 Jahren',
      },
    ],
  },
  {
    gruppe: 'Camp 2 (11-13 Jahre)',
    events: [
      {
        date: '13.08.2025 - 14.08.2025',
        time: '09:00 - 16:00 Uhr',
        ort: 'Sportplatz Poppenhausen',
        thema: 'Für Kinder zwischen 11-13 Jahren',
      },
    ],
  },
];

export default function MTBKidsCamp2025Page() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF6F6] pb-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full mb-12">
        <Image
          src="/images/MTB-Kids-Camp-Fitnessbaecker-Baeckerei-Pappert-1.jpg"
          alt="Fitnessbäcker MTB-Kids-Camp Hero"
          fill
          className="object-cover rounded-[25px]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 rounded-[25px]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4" style={{ fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
          <motion.h1
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            MTB-Kids-Camps 2025
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
          Sicherheit und Spaß auf dem Bike!
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-base text-gray-700 mb-4 text-center"
        >
          Unter professioneller Anleitung heizen wir zwei Tage lang durch eine große Cross-Strecke mit Trails, Rampen und Hindernissen. Um die Sicherheit zu verbessern, gibt es Geschicklichkeitsparcours und Bremstraining. Das gibt den Kindern auch für den Alltag ein sicheres Fahrgefühl. Für die bestmögliche Betreuung teilen wir die Termine in zwei Altersgruppen auf.
        </motion.p>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-base text-gray-700 mb-2 text-center"
        >
          Funktionstüchtiges MTB (keine E-Bikes) und Helm (sonstige Schutzausrüstung optional) sind Voraussetzungen.
        </motion.p>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-base text-gray-700 mb-2 text-center"
        >
          <strong>Max. 20 Kinder pro Camp</strong>
        </motion.p>
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-600"><b>Start:</b> 11. August 2025</div>
          <div className="text-sm text-gray-600"><b>Ort:</b> Sportplatz Poppenhausen</div>
          <div className="text-sm text-gray-600"><b>Trainer:</b> Sascha Wingenfeld & Team</div>
          <div className="text-sm text-gray-600"><b>Preis:</b> 65 Euro/Kind (inkl. Verpflegung, Teilnehmerpräsent und Trainerbetreuung)</div>
        </motion.div>
        <div className="text-center mt-6">
          <a
            href="/fitness-baker/registration"
            className="inline-block rounded-2xl bg-[#D72638] text-white px-6 py-2 font-semibold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:bg-[#EE0A24] transition"
            style={{ fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}
          >
            Jetzt anmelden
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
          {termine.map(({ gruppe, events }) => (
            <div key={gruppe} className="border rounded-xl overflow-hidden bg-[#FFF5E1]">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-[#D72638] focus:outline-none focus:ring-2 focus:ring-[#D72638] bg-[#FFF5E1] hover:bg-[#FFE2E2] transition"
                onClick={() => setOpenGroup(openGroup === gruppe ? null : gruppe)}
                aria-expanded={openGroup === gruppe}
                aria-controls={`panel-${gruppe}`}
              >
                <span>{gruppe}</span>
                <span className="text-2xl">{openGroup === gruppe ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openGroup === gruppe && (
                  <motion.div
                    id={`panel-${gruppe}`}
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
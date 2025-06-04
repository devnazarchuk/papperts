'use client'
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const termine = [
  {
    monat: 'April',
    events: [
      {
        date: '24.04.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Auftakt | Basis festlegen',
      },
    ],
  },
  {
    monat: 'Mai',
    events: [
      {
        date: '04.05.2025',
        time: '09:00 Uhr',
        ort: 'Sportplatz Poppenhausen',
        thema: 'Rhönlauf (mit Anmeldung)',
      },
      {
        date: '08.05.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Basis festlegen',
      },
      {
        date: '15.05.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Basis festlegen',
      },
      {
        date: '22.05.2025',
        time: '19:00 Uhr',
        ort: 'Sportplatz Poppenhausen',
        thema: 'Erlebnis-Lauf Ebersburg',
      },
    ],
  },
  {
    monat: 'Juni',
    events: [
      {
        date: '05.06.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Ausdauer aufbauen',
      },
      {
        date: '12.06.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Ausdauer aufbauen',
      },
      {
        date: '14.06.2025',
        time: '15:00 Uhr',
        ort: 'Fulda',
        thema: 'RhönEnergie Challenge (mit Anmeldung)',
      },
      {
        date: '26.06.2025',
        time: '19:00 Uhr',
        ort: 'Wanderparkplatz Kleinsassen',
        thema: 'Erlebnis-Lauf Milseburg',
      },
    ],
  },
  {
    monat: 'Juli',
    events: [
      {
        date: '03.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Technik',
      },
      {
        date: '10.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Kraft',
      },
      {
        date: '17.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Schneller werden',
      },
      {
        date: '24.07.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Ausdauer aufbauen',
      },
      {
        date: '31.07.2025',
        time: '19:00 Uhr',
        ort: 'Rodenbach',
        thema: 'Erlebnis-Lauf Simmelsberg',
      },
    ],
  },
  {
    monat: 'August',
    events: [
      {
        date: '07.08.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Ausdauer aufbauen',
      },
      {
        date: '14.08.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Technik',
      },
      {
        date: '21.08.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Kraft',
      },
      {
        date: '28.08.2025',
        time: '19:00 Uhr',
        ort: 'Parkplatz Guckaisee',
        thema: 'Erlebnis-Lauf Wasserkuppe',
      },
    ],
  },
  {
    monat: 'September',
    events: [
      {
        date: '04.09.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Schneller werden',
      },
      {
        date: '07.09.2025',
        time: '10:00 Uhr',
        ort: 'Fulda',
        thema: 'Fulda-Marathon (mit Anmeldung)',
      },
      {
        date: '11.09.2025',
        time: '19:00 Uhr',
        ort: 'papperts Backhaus, Rönshausen',
        thema: 'Abschluss',
      },
    ],
  },
];

export default function RunningSchoolPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF6F6] pb-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full mb-12">
        <Image
          src="/images/Laufschule-Fitnessbaecker-Baeckerei-Pappert-1.jpg"
          alt="Fitnessbäcker Laufschule Hero"
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
            Laufschule
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
          Jeden Donnerstag: Lauftechnik, Ausdauer, Kraft & Erlebnisläufe
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-base text-gray-700 mb-4 text-center"
        >
          Jeden Donnerstag treffen wir uns an verschiedenen Orten, um eure gesamte Laufperformance zu verbessern. Die Läufer werden in leistungsentsprechende Gruppen eingeteilt. Alle Gruppen werden von erfahrenen Lauf-Trainern betreut, die die verschiedenen Einheiten Technik, Schnelligkeit, Kraft und Ausdauer genau unter die Lupe nehmen werden. Auch für Nordic Walking gibt es eine Gruppe. Besonderheit der Laufschule sind unsere Erlebnisläufe am Ende des Monats auf die Kuppen der Rhön. Von Gersfeld aus geht´s beispielsweise auf den Simmelsberg. Neben viel Spaß und der Gemeinschaft haben wir gemeinsame Ziele: die RhönEnergie-Challenge im Juni und den Fulda-Marathon im September. Kostenlos und ohne Anmeldung!
        </motion.p>
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-600"><b>Start:</b> 24. April 2025</div>
          <div className="text-sm text-gray-600"><b>Ort:</b> wechselnd</div>
          <div className="text-sm text-gray-600"><b>Trainer:</b> Sascha Wingenfeld und Team</div>
          <div className="text-sm text-gray-600"><b>Preis:</b> kostenfrei, keine Anmeldung notwendig</div>
        </motion.div>
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
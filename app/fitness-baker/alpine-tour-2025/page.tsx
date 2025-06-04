'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AlpentourPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF5E1] via-[#FFF6F6] to-[#FFE2E2] pb-16 flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] mb-12 flex items-center justify-center max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-xl">
        <Image
          src="/images/Baeckerei_Pappert_veranstaltet_Alpentour_2025-1920x1080.jpg"
          alt="Bäckerei Pappert veranstaltet Alpentour 2025 Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D72638]/60 via-black/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl font-extrabold drop-shadow-2xl mb-4 tracking-tight"
          >
            Alpentour 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-2xl font-medium text-[#FFF5E1] drop-shadow-lg mb-2"
          >
            Kitzbühel → Lienz · 6 Tage · Für fitte 15–60-Jährige
          </motion.p>
        </div>
        {/* Decorative stripes */}
        <div className="absolute bottom-4 right-4 w-48 sm:w-64 opacity-90 pointer-events-none select-none">
          <Image
            src="/images/pappert_stripes.png"
            alt="Pappert Stripes"
            width={256}
            height={48}
            className="object-contain"
            priority={false}
          />
        </div>
      </section>

      {/* Main Content Card */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="max-w-5xl w-full bg-white/90 rounded-[32px] shadow-2xl p-8 sm:p-12 mb-12 mx-2 border border-[#FAD2E1] flex flex-col gap-10"
        style={{ boxShadow: '10px 10px 32px #e4c6c6, -10px -10px 32px #ffffff' }}
      >
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#D72638] text-center md:text-left tracking-tight">Sechstägige Alpentour: Kitzbühel – Lienz</h2>
            <p className="text-lg text-gray-700 mb-6 text-center md:text-left">
          Unsere sechstägige Alpentour 2025 startet von der Gamsstadt Kitzbühel und führt über die Kitzbüheler Alpen und den Nationalpark Hohe Tauern in die Sonnenstadt Lienz – hier sind die Dolomiten zum Greifen nah. Unsere Teilnehmer erwarten wieder beeindruckende Panoramen und eine abwechslungsreiche Natur, die sicherlich jedem in Erinnerung bleiben wird. Von blumenreichen Wiesen bis hin zu schroffen Felswänden ist hier alles zu sehen. Geeignet ist die Tour für fitte 15-Jährige bis trainierte 60-Jährige. Sehr gute Kondition und Ausdauer sowie Trittsicherheit und zweckmäßige Kleidung und Ausrüstung sind notwendige Voraussetzungen für diese Tour.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-2 justify-center md:justify-start">
              <span className="text-base text-gray-700 font-semibold bg-[#FFF5E1] rounded-xl px-4 py-2 shadow-inner">Max. 18 Teilnehmer</span>
              <span className="text-base text-gray-700 bg-[#FFE2E2] rounded-xl px-4 py-2 shadow-inner"><b>Zeitraum:</b> So. 22.06. bis Fr. 27.06.2025</span>
            </div>
          </div>
        </div>

        {/* Info Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full bg-[#FFF6F6] rounded-2xl shadow-md p-8 border border-[#FAD2E1] flex flex-col md:flex-row gap-8 items-center justify-between"
          style={{ boxShadow: '6px 6px 18px #e4c6c6, -6px -6px 18px #ffffff' }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#D72638] mb-4">Informationen</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <div><b>Start:</b> 22. Juni 2025</div>
              <div><b>Trainer:</b> wird noch bekannt gegeben</div>
              <div><b>Preis:</b> 995 Euro/Person (inkl. 5 Übernachtungen im Hotel bzw. Berghütten, Halbpension, Transfers, Bergführergebühr und einem Teilnehmerpräsent)</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            href="/fitness-baker/registration"
              className="inline-block rounded-2xl bg-[#D72638] text-white px-10 py-4 font-semibold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:bg-[#EE0A24] transition text-xl tracking-wide focus:outline-none focus:ring-4 focus:ring-[#FAD2E1]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
              JETZT ANMELDEN
            </motion.a>
        </div>
        </motion.div>
      </motion.section>
    </div>
  );
} 
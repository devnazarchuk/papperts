"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FullBodyWorkoutPage() {
  return (
    <div className="min-h-screen bg-[#FFF6F6] pb-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full mb-12">
        <Image
          src="/images/Zirkeltraining-Fitnessbaecker-Baeckerei-Pappert-1.jpg"
          alt="Full-Body-Workout Hero"
          fill
          className="object-cover rounded-[25px]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 rounded-[25px]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4" style={{ fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl font-extrabold mb-4 drop-shadow-lg"
          >
            Full-Body-Workout
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-8">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-2xl font-bold mb-4 text-[#D72638] text-center"
        >
          Power-Workout unter freiem Himmel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-base text-gray-700 mb-4 text-center"
        >
          Im Full-Body-Workout gibt es pures Training und sportliche Herausforderung. Wichtigstes Trainings­gerät ist der eigene Körper – dazu kommen einfache, aber effiziente Hilfsmittel wie Kettlebell, TRX und Medizinbälle. Durch den ständigen Intensitäts-Wechsel wirkt sich das Training effizient auf Ausdauer, Fettverbrennung und Muskelaufbau aus. Wie intensiv das Training wird, bestimmt am Ende natürlich jeder Teilnehmer selbst.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-base text-gray-700 mb-2 text-center"
        >
          <strong>Max. 14 Teilnehmer</strong>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="text-sm text-gray-600 mb-1">
            <b>Start:</b> 04. Juni 2025
          </div>
        </motion.div>
      </section>
    </div>
  );
} 
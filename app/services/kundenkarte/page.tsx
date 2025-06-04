'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CustomerCardPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F6] pb-12 transition-colors duration-200 dark:bg-[#232323]">
      {/* Hero Section */}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src="/images/Homepage-Bild-Kundenkarte-1920x1080.jpg"
          alt="Pappert Kundenkarte Hero"
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
            TREUE WIRD BELOHNT
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 md:px-12 xl:px-32">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-2 text-center text-2xl font-bold text-[#D72638] transition-colors md:text-3xl dark:text-[#FFA5A5]"
        >
          Pappert-Kundenkarte
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mb-2 text-center text-lg text-gray-700 transition-colors dark:text-[#FAD2E1]"
        >
          Jeder Einkauf zählt!* Pappert-Punkte sammeln! Vielfältige Vorteile nutzen!
        </motion.p>
        <p className="mb-8 text-center text-sm text-gray-500 transition-colors dark:text-[#FAD2E1]">
          *Ab einem Einkaufswert von 1 Euro und gilt nicht für Pfand.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h3 className="mb-4 text-xl font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            Das bietet unsere Pappert-Kundenkarte!
          </h3>
          <ul className="list-disc space-y-2 pl-6 text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
            <li>
              Bei jedem Einkauf erhalten Sie ab einem Einkaufswert von einem Euro pro Euro einen
              Pappert-Punkt – das gilt für unser gesamtes Sortiment*.
            </li>
            <li>
              Wenn Sie entsprechend viele Punkte gesammelt haben, können Sie damit bei uns
              einkaufen. Sie erhalten pro 40 Pappert-Punkte einen Euro für Ihren nächsten Einkauf*.
            </li>
            <li>
              Sie können unsere neue Pappert-Kundenkarte auch als Geldkarte für Ihre Einkäufe bei
              uns nutzen – einfach vorher in einem unserer Fachgeschäfte mit Ihrem Wunschbetrag
              aufladen.
            </li>
            <li>
              Rund um unsere Pappert-Punkte haben wir im Laufe des Jahres noch viele tolle Aktionen
              für Sie – lassen Sie sich überraschen.
            </li>
            <li className="text-xs text-gray-500 transition-colors dark:text-[#FAD2E1]">
              *Ab einem Einkaufswert von 1 Euro und gilt nicht für Zeitungen/Pfand.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <h4 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            Fragen und Antworten
          </h4>
          <div className="space-y-4 text-gray-700 transition-colors dark:text-[#FAD2E1]">
            <div>
              <p className="font-semibold">
                Wie viele Pappert-Punkte erhalte ich beim Einkauf mit der Pappert-Kundenkarte?
              </p>
              <p>
                Ab einem Einkaufswert von einem Euro erhalten Sie einen Pappert-Punkt. Beispiel: Bei
                einem Einkauf für 7,75 Euro erhalten Sie 7 Pappert-Punkte.
              </p>
            </div>
            <div>
              <p className="font-semibold">Für welche Produkte erhalte ich denn Pappert-Punkte?</p>
              <p>
                Sie erhalten Pappert-Punkte für alle gekauften Produkte* in unseren Fachgeschäften,
                ab einem Einkaufswert von einem Euro.
              </p>
            </div>
            <div>
              <p className="font-semibold">Was kann ich mit meinen Pappert-Punkten machen?</p>
              <p>
                Sie sammeln die Pappert-Punkte auf Ihrer Pappert-Kundenkarte und können diese dann
                wieder für Produkte in unseren Fachgeschäften einlösen. 40 Pappert-Punkte
                entsprechen 1 Euro für Ihren Einkauf.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 transition-colors dark:text-[#FAD2E1]">
            *Ab einem Einkaufswert von 1 Euro und gilt nicht für Pfand.
          </p>
        </motion.div>
      </section>

      {/* Gutscheinkarten Section */}
      <section className="mt-12 w-full px-4 md:px-12 xl:px-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mb-12 rounded-2xl border border-[#FFD2D2] bg-white p-10 shadow-md transition-colors dark:border-[#3A3A3A] dark:bg-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <Image
            src="/icons/GutscheinkartendBPaP.png"
            alt="Gutscheinkarten der Bäckerei Pappert aus Poppenhausen"
            width={300}
            height={300}
            className="mx-auto mb-6 rounded-2xl"
          />
          <p className="mb-4 text-center text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
            Mit unseren papperts Gutscheinkarten schenken Sie nicht nur hochwertige Produkte,
            sondern z.B. auch eine kleine Auszeit vom Alltag in unseren Fachgeschäften. Ob für einen
            besonderen Anlass oder einfach zwischendurch – unsere Gutscheine sind das ideale
            Geschenk für Familie, Freunde oder Kollegen.
          </p>
          <h3 className="mb-4 text-center text-xl font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            Schenken Sie Freude und Geschmack – mit unseren Gutscheinkarten über Bon Bon!
          </h3>
          <p className="mb-4 text-center text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
            Genießen Sie die Flexibilität, unsere Gutscheine in all unseren Fachgeschäften in
            Hessen, Bayern und Thüringen einzulösen und aus einer Vielzahl von Produkten zu wählen.
            Ob ein reichhaltiges Frühstück, ein feiner Snack oder eine genussvolle Kaffee- und
            Kuchenauszeit: Mit unseren Geschenkgutscheinen schenken Sie unvergessliche
            Geschmackserlebnisse aus unserem Rhöner Backhandwerk.
            <br />
            <strong>
              Jetzt im papperts-Fachgeschäft in Ihrer Nähe oder online über unseren Partner
              &quot;Bon Bon&quot; erwerbbar – selbstverständlich mit Ihrem Wunschbetrag!
            </strong>
          </p>
          <h3 className="mb-2 text-lg font-semibold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
            Und so geht&apos;s:
          </h3>
          <ol className="mb-4 list-decimal pl-6 text-base text-gray-700 transition-colors dark:text-[#FAD2E1]">
            <li>Einfach bei Bon Bon auf &quot;Gutschein jetzt bestellen&quot; klicken.</li>
            <li>
              Die Anzahl an Gutscheinen, den jeweiligen Wunschbetrag sowie die persönliche Daten
              hinterlegen und die Zahlung erfolgreich abschließen.
            </li>
            <li>
              Im Anschluss erhalten Sie innerhalb von drei Werktagen Ihre/n bestellten
              papperts-Gutschein/e postalisch zugesendet.
            </li>
          </ol>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.bon-bon.de/gutschein/papperts/"
              target="_blank"
              rel="noopener"
              className="rounded-2xl bg-[#D72638] px-6 py-3 font-semibold text-white shadow-md transition-colors transition-transform hover:scale-105 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF3B59]"
            >
              papperts-Gutscheinkarten bei &quot;Bon Bon&quot; bestellen
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

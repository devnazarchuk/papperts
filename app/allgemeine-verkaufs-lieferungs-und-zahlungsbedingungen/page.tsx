'use client'

import Link from 'next/link'

// Main component for the "Allgemeine Verkaufs-, Lieferungs- und Zahlungsbedingungen" page
export default function AllgemeineVerkaufsLieferungsZahlungsbedingungen() {
  return (
    <div className="container mx-auto px-6 py-12 sm:px-8">
      {/* Page Title */}
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
        ALLGEMEINE VERKAUFS-, LIEFERUNGS- UND ZAHLUNGSBEDINGUNGEN
      </h1>
      <div className="mb-4 text-[#3A3A3A] dark:text-[#FDEEEE]">
        <p className="mb-2 font-semibold">
          der papperts GmbH, Bürgermeister-Ebert-Straße 38, 36124 Eichenzell (zusammenfassend
          &quot;papperts&quot;)
        </p>
      </div>
      {/* Main Content */}
      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        <section>
          <h2 className="mb-4 text-xl font-semibold">1. Geltungsbereich</h2>
          <div className="space-y-4">
            <p>
              Diese Allgemeinen Verkaufs-, Lieferungs- und Zahlungsbedingungen gelten für alle
              Geschäftsbeziehungen zwischen der papperts GmbH (nachfolgend &quot;Verkäufer&quot;
              genannt) und ihren Kunden (nachfolgend &quot;Käufer&quot; genannt).
            </p>
            <p>
              Abweichende Bedingungen des Käufers werden nicht anerkannt, es sei denn, der Verkäufer
              stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">2. Vertragsschluss</h2>
          <div className="space-y-4">
            <p>
              Der Vertrag kommt durch die Annahme der Bestellung durch den Verkäufer zustande. Die
              Annahme erfolgt durch eine Auftragsbestätigung oder durch die Ausführung der
              Bestellung.
            </p>
            <p>
              Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung
              durch den Verkäufer.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">3. Preise und Zahlungsbedingungen</h2>
          <div className="space-y-4">
            <p>
              Die Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung
              erfolgt innerhalb von 14 Tagen nach Rechnungserhalt ohne Abzug.
            </p>
            <p>
              Bei Zahlungsverzug ist der Verkäufer berechtigt, Verzugszinsen in Höhe von 5
              Prozentpunkten über dem Basiszinssatz zu berechnen.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">4. Lieferung und Lieferzeit</h2>
          <div className="space-y-4">
            <p>
              Die Lieferung erfolgt auf Kosten und Gefahr des Käufers. Die Ware wird frei Haus
              geliefert.
            </p>
            <p>
              Bei Überschreitung der vereinbarten Lieferzeit ist der Käufer berechtigt, vom Vertrag
              zurückzutreten oder Schadensersatz zu verlangen.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">5. Eigentumsvorbehalt</h2>
          <div className="space-y-4">
            <p>
              Die gelieferte Ware bleibt bis zur vollständigen Bezahlung im Eigentum des Verkäufers.
            </p>
            <p>
              Der Käufer ist verpflichtet, die Ware pfleglich zu behandeln und gegen Beschädigung
              und Verlust zu versichern.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">6. Gewährleistung</h2>
          <div className="space-y-4">
            <p>
              Der Verkäufer gewährleistet, dass die gelieferten Waren frei von Mängeln sind, die
              ihren Wert oder ihre Tauglichkeit zu dem gewöhnlichen oder nach dem Vertrag
              vorausgesetzten Gebrauch aufheben oder mindern.
            </p>
            <p>
              Bei Mängeln hat der Käufer das Recht auf Nacherfüllung, Minderung oder Rücktritt vom
              Vertrag.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">7. Haftung</h2>
          <div className="space-y-4">
            <p>
              Der Verkäufer haftet unbeschränkt für Schäden, die durch vorsätzliches oder grob
              fahrlässiges Verhalten verursacht werden.
            </p>
            <p>
              Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen
              Vertragspflichten betroffen sind.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">8. Datenschutz</h2>
          <div className="space-y-4">
            <p>
              Der Verkäufer verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten und
              die vom Käufer übermittelten Daten nur für die Vertragserfüllung zu verwenden.
            </p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">9. Schlussbestimmungen</h2>
          <div className="space-y-4">
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>Gerichtsstand für alle Streitigkeiten ist Fulda, soweit der Käufer Kaufmann ist.</p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">Download</h2>
          <p>
            <Link
              href="/papperts_GmbH_Allgemeine_Verkaufs_Lieferungs_und_Zahlungsbedingungen.pdf"
              target="_blank"
              rel="noopener"
              className="text-sm text-[#D72638] hover:underline sm:text-base dark:text-[#FFA5A5]"
            >
              Download &quot;Allgemeine Verkaufs-, Lieferungs- und Zahlungsbedingungen – papperts
              GmbH&quot; (PDF)
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}

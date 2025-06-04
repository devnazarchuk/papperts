'use client'

export default function PurchaseTerms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
        ALLGEMEINE EINKAUFSBEDINGUNGEN
      </h1>

      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        <section>
          <h2 className="mb-4 text-xl font-semibold">1. Geltungsbereich</h2>
          <div className="space-y-4">
            <p>
              Diese Allgemeinen Einkaufsbedingungen gelten für alle Geschäftsbeziehungen zwischen
              der papperts GmbH (nachfolgend &quot;Käufer&quot; genannt) und ihren Lieferanten
              (nachfolgend &quot;Verkäufer&quot; genannt).
            </p>
            <p>
              Abweichende Bedingungen des Verkäufers werden nicht anerkannt, es sei denn, der Käufer
              stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">2. Vertragsschluss</h2>
          <div className="space-y-4">
            <p>
              Der Vertrag kommt durch die Annahme der Bestellung durch den Verkäufer zustande. Die
              Annahme muss innerhalb von 5 Werktagen nach Erhalt der Bestellung erfolgen.
            </p>
            <p>
              Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung
              durch den Käufer.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">3. Preise und Zahlungsbedingungen</h2>
          <div className="space-y-4">
            <p>
              Die Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung
              erfolgt innerhalb von 30 Tagen nach Rechnungserhalt ohne Abzug.
            </p>
            <p>
              Der Käufer behält sich vor, bei Mängeln oder Verzug des Verkäufers die Zahlung
              zurückzubehalten oder zu verrechnen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">4. Lieferung und Lieferzeit</h2>
          <div className="space-y-4">
            <p>
              Die Lieferung erfolgt auf Kosten und Gefahr des Verkäufers. Die Ware ist frei Haus zu
              liefern.
            </p>
            <p>
              Bei Überschreitung der vereinbarten Lieferzeit ist der Käufer berechtigt, vom Vertrag
              zurückzutreten oder Schadensersatz zu verlangen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">5. Qualität und Gewährleistung</h2>
          <div className="space-y-4">
            <p>
              Der Verkäufer garantiert, dass die gelieferten Waren den vereinbarten Spezifikationen
              entsprechen und frei von Mängeln sind.
            </p>
            <p>
              Bei Mängeln hat der Käufer das Recht auf Nacherfüllung, Minderung oder Rücktritt vom
              Vertrag.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">6. Haftung</h2>
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
          <h2 className="mb-4 text-xl font-semibold">7. Datenschutz</h2>
          <div className="space-y-4">
            <p>
              Der Verkäufer verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten und
              die vom Käufer übermittelten Daten nur für die Vertragserfüllung zu verwenden.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">8. Schlussbestimmungen</h2>
          <div className="space-y-4">
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              Gerichtsstand für alle Streitigkeiten ist Fulda, soweit der Verkäufer Kaufmann ist.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

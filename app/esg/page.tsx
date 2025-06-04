'use client'

export default function ESG() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
        ESG - NACHHALTIGKEIT
      </h1>

      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        <section>
          <h2 className="mb-4 text-xl font-semibold">Umwelt (Environmental)</h2>
          <div className="space-y-4">
            <p>
              Als Bäckerei legen wir besonderen Wert auf nachhaltige Produktion und Umweltschutz:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Energieeffiziente Produktionsanlagen</li>
              <li>Reduzierung von CO2-Emissionen</li>
              <li>Nachhaltige Verpackungslösungen</li>
              <li>Regionale Rohstoffbeschaffung</li>
              <li>Mülltrennung und Recycling</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Soziales (Social)</h2>
          <div className="space-y-4">
            <p>Unser soziales Engagement umfasst:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Faire Arbeitsbedingungen</li>
              <li>Ausbildung und Weiterbildung</li>
              <li>Gesundheitsförderung</li>
              <li>Unterstützung lokaler Initiativen</li>
              <li>Vielfalt und Inklusion</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Unternehmensführung (Governance)</h2>
          <div className="space-y-4">
            <p>Unsere Unternehmensführung basiert auf:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Transparente Entscheidungsprozesse</li>
              <li>Ethische Geschäftspraktiken</li>
              <li>Risikomanagement</li>
              <li>Compliance und Regulierung</li>
              <li>Nachhaltige Lieferketten</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Unsere Ziele</h2>
          <div className="space-y-4">
            <p>
              Wir haben uns ambitionierte Ziele gesetzt, um unsere Nachhaltigkeitsstrategie
              kontinuierlich zu verbessern:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Klimaneutralität bis 2030</li>
              <li>100% erneuerbare Energien</li>
              <li>Zero Waste in der Produktion</li>
              <li>Förderung der Kreislaufwirtschaft</li>
              <li>Stärkung der regionalen Wertschöpfung</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

'use client'

import {
  FaBalanceScale,
  FaEuroSign,
  FaFileContract,
  FaGavel,
  FaInfoCircle,
  FaLock,
  FaTruck,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  en: {
    title: 'GENERAL TERMS AND CONDITIONS OF PURCHASE',
    sections: [
      {
        icon: FaFileContract,
        title: '1. Scope of Application',
        content:
          'These General Terms and Conditions of Purchase apply to all business relationships between papperts GmbH (hereinafter referred to as the "Buyer") and its suppliers (hereinafter referred to as the "Seller").\n\nDeviating conditions of the Seller will not be recognized unless the Buyer expressly agrees to their validity in writing.',
      },
      {
        icon: FaFileContract,
        title: '2. Conclusion of Contract',
        content:
          "The contract is concluded by the Seller's acceptance of the order. The acceptance must be made within 5 working days of receipt of the order.\n\nOral side agreements require written confirmation by the Buyer to be effective.",
      },
      {
        icon: FaEuroSign,
        title: '3. Prices and Payment Terms',
        content:
          'Prices are subject to statutory value added tax. Payment is made within 30 days of receipt of invoice without deduction.\n\nThe Buyer reserves the right to withhold or offset payment in case of defects or delay by the Seller.',
      },
      {
        icon: FaTruck,
        title: '4. Delivery and Delivery Time',
        content:
          "Delivery is at the Seller's cost and risk. The goods are to be delivered free house.\n\nIf the agreed delivery time is exceeded, the Buyer is entitled to withdraw from the contract or demand damages.",
      },
      {
        icon: FaBalanceScale,
        title: '5. Quality and Warranty',
        content:
          'The Seller guarantees that the delivered goods comply with the agreed specifications and are free from defects.\n\nIn case of defects, the Buyer has the right to subsequent performance, reduction or withdrawal from the contract.',
      },
      {
        icon: FaGavel,
        title: '6. Liability',
        content:
          'The Seller is liable without limitation for damages caused by intentional or grossly negligent behavior.\n\nLiability for slight negligence is excluded, unless essential contractual obligations are affected.',
      },
      {
        icon: FaLock,
        title: '7. Data Protection',
        content:
          'The Seller undertakes to comply with the applicable data protection regulations and to use the data transmitted by the Buyer only for the fulfillment of the contract.',
      },
      {
        icon: FaInfoCircle,
        title: '8. Final Provisions',
        content:
          'The law of the Federal Republic of Germany applies to the exclusion of the UN Sales Law.\n\nThe place of jurisdiction for all disputes is Fulda, provided the Seller is a merchant.',
      },
    ],
  },
  de: {
    title: 'ALLGEMEINE EINKAUFSBEDINGUNGEN',
    sections: [
      {
        icon: FaFileContract,
        title: '1. Geltungsbereich',
        content:
          'Diese Allgemeinen Einkaufsbedingungen gelten für alle Geschäftsbeziehungen zwischen der papperts GmbH (nachfolgend "Käufer" genannt) und ihren Lieferanten (nachfolgend "Verkäufer" genannt).\n\nAbweichende Bedingungen des Verkäufers werden nicht anerkannt, es sei denn, der Käufer stimmt ihrer Geltung ausdrücklich schriftlich zu.',
      },
      {
        icon: FaFileContract,
        title: '2. Vertragsschluss',
        content:
          'Der Vertrag kommt durch die Annahme der Bestellung durch den Verkäufer zustande. Die Annahme muss innerhalb von 5 Werktagen nach Erhalt der Bestellung erfolgen.\n\nMündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Käufer.',
      },
      {
        icon: FaEuroSign,
        title: '3. Preise und Zahlungsbedingungen',
        content:
          'Die Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt innerhalb von 30 Tagen nach Rechnungserhalt ohne Abzug.\n\nDer Käufer behält sich vor, bei Mängeln oder Verzug des Verkäufers die Zahlung zurückzubehalten oder zu verrechnen.',
      },
      {
        icon: FaTruck,
        title: '4. Lieferung und Lieferzeit',
        content:
          'Die Lieferung erfolgt auf Kosten und Gefahr des Verkäufers. Die Ware ist frei Haus zu liefern.\n\nBei Überschreitung der vereinbarten Lieferzeit ist der Käufer berechtigt, vom Vertrag zurückzutreten oder Schadensersatz zu verlangen.',
      },
      {
        icon: FaBalanceScale,
        title: '5. Qualität und Gewährleistung',
        content:
          'Der Verkäufer garantiert, dass die gelieferten Waren den vereinbarten Spezifikationen entsprechen und frei von Mängeln sind.\n\nBei Mängeln hat der Käufer das Recht auf Nacherfüllung, Minderung oder Rücktritt vom Vertrag.',
      },
      {
        icon: FaGavel,
        title: '6. Haftung',
        content:
          'Der Verkäufer haftet unbeschränkt für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht werden.\n\nDie Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten betroffen sind.',
      },
      {
        icon: FaLock,
        title: '7. Datenschutz',
        content:
          'Der Verkäufer verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten und die vom Käufer übermittelten Daten nur für die Vertragserfüllung zu verwenden.',
      },
      {
        icon: FaInfoCircle,
        title: '8. Schlussbestimmungen',
        content:
          'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.\n\nGerichtsstand für alle Streitigkeiten ist Fulda, soweit der Verkäufer Kaufmann ist.',
      },
    ],
  },
}

export default function PurchaseTerms() {
  const { language } = useLanguageStore()
  const t = translations[language]
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{t.title}</h1>
      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        {t.sections.map((section) => (
          <section key={section.title}>
            <div className="mb-4 flex items-center gap-3">
              <section.icon className="h-7 w-7 text-[#D72638] dark:text-[#FFA5A5]" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="whitespace-pre-line">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

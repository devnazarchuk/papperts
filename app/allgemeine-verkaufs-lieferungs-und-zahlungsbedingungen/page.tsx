'use client'

import Link from 'next/link'
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
    title: 'GENERAL TERMS AND CONDITIONS OF SALE, DELIVERY AND PAYMENT',
    company:
      'of papperts GmbH, Bürgermeister-Ebert-Straße 38, 36124 Eichenzell (hereinafter referred to as "papperts")',
    sections: [
      {
        icon: FaFileContract,
        title: '1. Scope of Application',
        content:
          'These General Terms and Conditions of Sale, Delivery and Payment apply to all business relationships between papperts GmbH (hereinafter referred to as the "Seller") and its customers (hereinafter referred to as the "Buyer").\n\nDeviating conditions of the Buyer will not be recognized unless the Seller expressly agrees to their validity in writing.',
      },
      {
        icon: FaFileContract,
        title: '2. Conclusion of Contract',
        content:
          "The contract is concluded by the Seller's acceptance of the order. The acceptance is made by an order confirmation or by the execution of the order.\n\nOral side agreements require written confirmation by the Seller to be effective.",
      },
      {
        icon: FaEuroSign,
        title: '3. Prices and Payment Terms',
        content:
          'Prices are subject to statutory value added tax. Payment is made within 14 days of receipt of invoice without deduction.\n\nIn case of payment delay, the Seller is entitled to charge default interest of 5 percentage points above the base interest rate.',
      },
      {
        icon: FaTruck,
        title: '4. Delivery and Delivery Time',
        content:
          "Delivery is at the Buyer's cost and risk. The goods will be delivered free house.\n\nIf the agreed delivery time is exceeded, the Buyer is entitled to withdraw from the contract or demand damages.",
      },
      {
        icon: FaLock,
        title: '5. Retention of Title',
        content:
          'The delivered goods remain the property of the Seller until full payment.\n\nThe Buyer is obliged to handle the goods with care and to insure them against damage and loss.',
      },
      {
        icon: FaBalanceScale,
        title: '6. Warranty',
        content:
          'The Seller warrants that the delivered goods are free from defects that impair their value or suitability for ordinary or contractually assumed use.\n\nIn case of defects, the Buyer has the right to subsequent performance, reduction or withdrawal from the contract.',
      },
      {
        icon: FaGavel,
        title: '7. Liability',
        content:
          'The Seller is liable without limitation for damages caused by intentional or grossly negligent behavior.\n\nLiability for slight negligence is excluded, unless essential contractual obligations are affected.',
      },
      {
        icon: FaLock,
        title: '8. Data Protection',
        content:
          'The Seller undertakes to comply with the applicable data protection regulations and to use the data transmitted by the Buyer only for the fulfillment of the contract.',
      },
      {
        icon: FaInfoCircle,
        title: '9. Final Provisions',
        content:
          'The law of the Federal Republic of Germany applies to the exclusion of the UN Sales Law.\n\nThe place of jurisdiction for all disputes is Fulda, provided the Buyer is a merchant.',
      },
    ],
    download:
      'Download "General Terms and Conditions of Sale, Delivery and Payment - papperts GmbH" (PDF)',
  },
  de: {
    title: 'ALLGEMEINE VERKAUFS-, LIEFERUNGS- UND ZAHLUNGSBEDINGUNGEN',
    company:
      'der papperts GmbH, Bürgermeister-Ebert-Straße 38, 36124 Eichenzell (zusammenfassend "papperts")',
    sections: [
      {
        icon: FaFileContract,
        title: '1. Geltungsbereich',
        content:
          'Diese Allgemeinen Verkaufs-, Lieferungs- und Zahlungsbedingungen gelten für alle Geschäftsbeziehungen zwischen der papperts GmbH (nachfolgend "Verkäufer" genannt) und ihren Kunden (nachfolgend "Käufer" genannt).\n\nAbweichende Bedingungen des Käufers werden nicht anerkannt, es sei denn, der Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.',
      },
      {
        icon: FaFileContract,
        title: '2. Vertragsschluss',
        content:
          'Der Vertrag kommt durch die Annahme der Bestellung durch den Verkäufer zustande. Die Annahme erfolgt durch eine Auftragsbestätigung oder durch die Ausführung der Bestellung.\n\nMündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Verkäufer.',
      },
      {
        icon: FaEuroSign,
        title: '3. Preise und Zahlungsbedingungen',
        content:
          'Die Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt innerhalb von 14 Tagen nach Rechnungserhalt ohne Abzug.\n\nBei Zahlungsverzug ist der Verkäufer berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten über dem Basiszinssatz zu berechnen.',
      },
      {
        icon: FaTruck,
        title: '4. Lieferung und Lieferzeit',
        content:
          'Die Lieferung erfolgt auf Kosten und Gefahr des Käufers. Die Ware wird frei Haus geliefert.\n\nBei Überschreitung der vereinbarten Lieferzeit ist der Käufer berechtigt, vom Vertrag zurückzutreten oder Schadensersatz zu verlangen.',
      },
      {
        icon: FaLock,
        title: '5. Eigentumsvorbehalt',
        content:
          'Die gelieferte Ware bleibt bis zur vollständigen Bezahlung im Eigentum des Verkäufers.\n\nDer Käufer ist verpflichtet, die Ware pfleglich zu behandeln und gegen Beschädigung und Verlust zu versichern.',
      },
      {
        icon: FaBalanceScale,
        title: '6. Gewährleistung',
        content:
          'Der Verkäufer gewährleistet, dass die gelieferten Waren frei von Mängeln sind, die ihren Wert oder ihre Tauglichkeit zu dem gewöhnlichen oder nach dem Vertrag vorausgesetzten Gebrauch aufheben oder mindern.\n\nBei Mängeln hat der Käufer das Recht auf Nacherfüllung, Minderung oder Rücktritt vom Vertrag.',
      },
      {
        icon: FaGavel,
        title: '7. Haftung',
        content:
          'Der Verkäufer haftet unbeschränkt für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht werden.\n\nDie Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten betroffen sind.',
      },
      {
        icon: FaLock,
        title: '8. Datenschutz',
        content:
          'Der Verkäufer verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten und die vom Käufer übermittelten Daten nur für die Vertragserfüllung zu verwenden.',
      },
      {
        icon: FaInfoCircle,
        title: '9. Schlussbestimmungen',
        content:
          'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.\n\nGerichtsstand für alle Streitigkeiten ist Fulda, soweit der Käufer Kaufmann ist.',
      },
    ],
    download:
      'Download "Allgemeine Verkaufs-, Lieferungs- und Zahlungsbedingungen – papperts GmbH" (PDF)',
  },
}

// Main component for the "Allgemeine Verkaufs-, Lieferungs- und Zahlungsbedingungen" page
export default function SaleTerms() {
  const { language } = useLanguageStore()
  const t = translations[language]
  return (
    <div className="container mx-auto px-6 py-12 sm:px-8">
      {/* Page Title */}
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{t.title}</h1>
      <div className="mb-4 text-[#3A3A3A] dark:text-[#FDEEEE]">
        <p className="mb-2 font-semibold">{t.company}</p>
      </div>
      {/* Main Content */}
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
        <section>
          <h2 className="mb-4 text-xl font-semibold">Download</h2>
          <p>
            <Link
              href="/papperts_GmbH_Allgemeine_Verkaufs_Lieferungs_und_Zahlungsbedingungen.pdf"
              target="_blank"
              rel="noopener"
              className="text-sm text-[#D72638] hover:underline sm:text-base dark:text-[#FFA5A5]"
            >
              {t.download}
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}

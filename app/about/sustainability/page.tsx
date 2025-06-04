'use client'
import InfoPage, { InfoSection } from '@/components/templates/InfoPage'

const sustainabilitySections: InfoSection[] = [
  {
    title: 'Nachhaltige Beschaffung',
    content:
      'Wir legen Wert auf regionale Zutaten und arbeiten direkt mit Landwirten in unserer Region zusammen, um die besten Getreide- und Zutaten zu beziehen. Dies gewährleistet nicht nur Qualität, sondern reduziert auch unseren CO2-Fußabdruck.',
    image: '/soft-images/ingredients-flour.jpg',
    imagePosition: 'left',
    details: [
      'Partnerschaft mit lokalen Landwirten',
      'Reduzierte Transportemissionen',
      'Unterstützung der regionalen Landwirtschaft',
      'Saisonale Zutaten',
    ],
  },
  {
    title: 'Zero Waste Initiative',
    content:
      'Unser Engagement für Nachhaltigkeit umfasst die Minimierung von Lebensmittelabfällen durch sorgfältige Planung und Partnerschaften mit lokalen Tafeln und gemeinnützigen Organisationen.',
    image: '/soft-images/products-bread-display.jpg',
    imagePosition: 'right',
    details: [
      'Tägliche Spende von unverkauftem Brot',
      'Kompostierungsprogramm',
      'Reduzierte Verpackungsabfälle',
      'Wiederverwendbare Verpackungsoptionen',
    ],
  },
  {
    title: 'Energieeffizienz',
    content:
      'Wir haben in moderne, energieeffiziente Geräte und erneuerbare Energien investiert, um unsere Umweltbelastung zu reduzieren und gleichzeitig die Qualität unserer Produkte zu erhalten.',
    image: '/soft-images/about-baker.jpg',
    imagePosition: 'left',
    details: [
      'Solaranlagen auf den Einrichtungen',
      'LED-Beleuchtung in allen Filialen',
      'Energieeffiziente Öfen',
      'Wärmerückgewinnungssysteme',
    ],
  },
]

export default function SustainabilityPage() {
  return (
    <InfoPage
      title="Unser Engagement für Nachhaltigkeit"
      description="Entdecken Sie, wie wir uns für den Umweltschutz einsetzen und gleichzeitig Backwaren von höchster Qualität anbieten."
      heroImage="/soft-images/ingredients-flour.jpg"
      sections={sustainabilitySections}
    />
  )
}

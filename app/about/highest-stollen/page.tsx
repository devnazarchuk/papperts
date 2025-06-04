'use client'
import InfoPage from '@/components/templates/InfoPage'

const stollenSections = [
  {
    title: 'Award-Winning Stollen',
    content:
      "Our signature Christmas Stollen has earned recognition as one of Germany's finest, crafted using a centuries-old recipe and the highest quality ingredients.",
    image: '/soft-images/stollen2.jpg',
    imagePosition: 'left' as const,
    details: [
      'Traditional Dresden-style recipe',
      'Premium dried fruits and nuts',
      'Hand-shaped by master bakers',
      'Multiple award winner',
    ],
  },
  {
    title: 'The Art of Stollen',
    content:
      'Each Stollen is carefully crafted through a meticulous process that takes several days, allowing the flavors to develop and mature to perfection.',
    image: '/soft-images/stollen1.png',
    imagePosition: 'right' as const,
    details: [
      'Three-day fermentation process',
      'Premium butter and almonds',
      'Traditional spice blend',
      'Natural fruit ripening',
    ],
  },
  {
    title: 'Christmas Tradition',
    content:
      "Our Stollen has become a cherished part of many families' Christmas celebrations, with some customers ordering months in advance to secure their holiday treat.",
    image: '/soft-images/stollen3.jpg',
    imagePosition: 'left' as const,
    details: [
      'Available from October',
      'Special gift packaging',
      'Worldwide shipping',
      'Long shelf life',
    ],
  },
]

export default function HighestStollenPage() {
  return (
    <InfoPage
      title="Highest Stollen"
      description="Experience our award-winning Christmas Stollen, a testament to our dedication to traditional German baking."
      heroImage="/soft-images/products-stollen.jpg"
      sections={stollenSections}
    />
  )
}

'use client'
import InfoPage from '@/components/templates/InfoPage';

const contactSections = [
  {
    title: 'General Contact',
    content: 'For general inquiries about our products, services, or locations, please reach out to our customer service team.',
    image: '/images/about-baker.jpg',
    imagePosition: 'left' as const,
    details: [
      'Phone: +49 6658 9876',
      'Email: info@pappert.de',
      'Hours: Mon-Fri 8:00-17:00',
      'Address: Von-Steinrück-Platz 1, 36163 Poppenhausen'
    ]
  },
  {
    title: 'Wholesale & Business',
    content: 'Interested in partnering with us or placing wholesale orders? Our business development team is here to help.',
    image: '/images/products-bread-display.jpg',
    imagePosition: 'right' as const,
    details: [
      'Phone: +49 6658 9877',
      'Email: business@pappert.de',
      'Hours: Mon-Fri 9:00-16:00',
      'Minimum order requirements apply'
    ]
  },
  {
    title: 'Career Opportunities',
    content: 'Join our team of passionate bakers and service professionals. We offer various positions across our locations.',
    image: '/images/about-baker.jpg',
    imagePosition: 'left' as const,
    details: [
      'Email: careers@pappert.de',
      'Current openings on our careers page',
      'Apprenticeship programs available',
      'Professional development opportunities'
    ]
  }
];

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Us"
      description="Get in touch with us for any questions, feedback, or business inquiries."
      heroImage="/images/about-baker.jpg"
      sections={contactSections}
    />
  );
} 
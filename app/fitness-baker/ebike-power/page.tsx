'use client'
import FitnessPage from '@/components/templates/FitnessPage';

const eBikeEvent = {
  title: 'E-Bike Power',
  description: 'Learn from E-Bike expert Harald Döppner and discover the beautiful Rhön region on state-of-the-art electric bikes. Perfect for both beginners and experienced cyclists.',
  image: '/images/about-baker.jpg',
  details: {
    date: 'September 6, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Poppenhausen Sports Field',
    capacity: '20 participants',
    price: '€79 per person',
    requirements: [
      'Basic cycling ability',
      'Comfortable with basic traffic rules',
      'Minimum age: 16 years',
      'Weather-appropriate clothing'
    ]
  },
  highlights: [
    'Professional instruction from E-Bike expert Harald Döppner',
    'Guided tour through scenic Rhön routes',
    'E-Bike rental included',
    'Safety and handling workshop',
    'Energy-efficient riding techniques',
    'Lunch break with healthy snacks',
    'Photo documentation',
    'Certificate of participation'
  ]
};

export default function EBikePowerPage() {
  return (
    <FitnessPage
      title="E-Bike Power"
      description="Experience the joy of E-Bike riding while exploring the beautiful Rhön landscape."
      heroImage="/images/about-baker.jpg"
      event={eBikeEvent}
    />
  );
} 
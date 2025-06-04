'use client'
import FitnessPage from '@/components/templates/FitnessPage';

const bikeDayEvent = {
  title: 'Fitnessbäcker Bike Day',
  description: 'Join us for an exciting day of cycling activities, including a skill course, guided tour, and a social BBQ to end the day. Perfect for families and cyclists of all levels.',
  image: '/images/about-baker.jpg',
  details: {
    date: 'August 30, 2025',
    time: '2:00 PM - 8:00 PM',
    location: 'Poppenhausen Sports Field',
    capacity: '50 participants',
    price: '€39 per person (includes BBQ)',
    requirements: [
      'Own bicycle (any type)',
      'Helmet mandatory',
      'Basic cycling ability',
      'Children under 14 must be accompanied by an adult'
    ]
  },
  highlights: [
    'Fun skill course with obstacles and challenges',
    'Guided tour through scenic local routes',
    'Bike maintenance workshop',
    'Safety tips from cycling experts',
    'Evening BBQ with fellow cyclists',
    'Prizes for skill course winners',
    'Family-friendly activities',
    'Professional photos of the event'
  ]
};

export default function BikeDayPage() {
  return (
    <FitnessPage
      title="Bike Day 2025"
      description="A fun-filled day of cycling activities for the whole family."
      heroImage="/images/about-baker.jpg"
      event={bikeDayEvent}
    />
  );
} 
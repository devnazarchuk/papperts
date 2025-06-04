'use client'
import ProductPage from '@/components/templates/ProductPage';

const coffeeProducts = [
  {
    id: 1,
    name: 'Specialty Espresso',
    description: 'Rich and aromatic espresso made from premium Arabica beans.',
    price: 2.49,
    image: '/images/products-coffee.jpg',
    details: [
      'Premium Arabica beans',
      'Perfect crema',
      'Full-bodied flavor',
      'Available as double shot'
    ]
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Classic Italian cappuccino with silky microfoam.',
    price: 3.49,
    image: '/images/products-coffee.jpg',
    details: [
      'Fresh local milk',
      'Perfect foam texture',
      'Double shot espresso',
      'Available with plant-based milk'
    ]
  },
  {
    id: 3,
    name: 'Filter Coffee',
    description: 'Smooth filter coffee made from our house blend.',
    price: 2.99,
    image: '/images/products-coffee.jpg',
    details: [
      'House blend',
      'Freshly ground',
      'Free refills',
      'Available in takeaway'
    ]
  }
];

export default function CoffeePage() {
  return (
    <ProductPage
      title="Premium Coffee"
      description="Experience our selection of specialty coffee drinks, prepared by our trained baristas using premium beans from Seeberger/Schärf."
      heroImage="/images/products-coffee.jpg"
      products={coffeeProducts}
    />
  );
} 
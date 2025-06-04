'use client'
import ProductPage from '@/components/templates/ProductPage';

const breadProducts = [
  {
    id: 1,
    name: 'Traditional Sourdough',
    description: 'Our signature sourdough bread made with our 100-year-old starter.',
    price: 4.99,
    image: '/images/products-bread-display.jpg',
    details: [
      'Made with organic flour',
      'Natural fermentation',
      'No artificial additives',
      'Crusty exterior, soft interior'
    ]
  },
  {
    id: 2,
    name: 'Whole Grain Rye',
    description: 'Hearty rye bread packed with whole grains and seeds.',
    price: 5.49,
    image: '/images/products-bread-display.jpg',
    details: [
      'High in fiber',
      'Rich in nutrients',
      'Perfect for sandwiches',
      'Long-lasting freshness'
    ]
  },
  {
    id: 3,
    name: 'Artisan Baguette',
    description: 'Classic French-style baguette with a crispy crust.',
    price: 3.99,
    image: '/images/products-bread-display.jpg',
    details: [
      'Baked fresh throughout the day',
      'Traditional recipe',
      'Perfect with cheese and wine',
      'Crispy crust, light interior'
    ]
  }
];

export default function BreadPage() {
  return (
    <ProductPage
      title="Our Artisan Breads"
      description="Discover our selection of freshly baked breads, made with traditional methods and the finest ingredients."
      heroImage="/images/products-bread-display.jpg"
      products={breadProducts}
    />
  );
} 
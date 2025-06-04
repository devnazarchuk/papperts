'use client'
import ProductPage from '@/components/templates/ProductPage';

const pastryProducts = [
  {
    id: 1,
    name: 'Butter Croissant',
    description: 'Classic French croissant made with premium European butter.',
    price: 2.99,
    image: '/images/products-croissant.jpg',
    details: [
      'Made with French butter',
      '27 layers of laminated dough',
      'Baked fresh throughout the day',
      'Perfect flaky texture'
    ]
  },
  {
    id: 2,
    name: 'Pain au Chocolat',
    description: 'Chocolate-filled croissant made with dark Belgian chocolate.',
    price: 3.49,
    image: '/images/products-croissant.jpg',
    details: [
      'Premium Belgian chocolate',
      'Buttery layers',
      'Perfect with coffee',
      'Freshly baked'
    ]
  },
  {
    id: 3,
    name: 'Danish Pastry',
    description: 'Sweet Danish pastry with various fruit fillings.',
    price: 3.29,
    image: '/images/products-croissant.jpg',
    details: [
      'Choice of fillings',
      'Handmade daily',
      'Sweet glaze finish',
      'Light and flaky'
    ]
  }
];

export default function PastriesPage() {
  return (
    <ProductPage
      title="Artisan Pastries"
      description="Indulge in our selection of handcrafted pastries, made with premium ingredients and traditional French techniques."
      heroImage="/images/products-croissant.jpg"
      products={pastryProducts}
    />
  );
} 
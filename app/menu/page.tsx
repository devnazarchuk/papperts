'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Sourdough Bread',
    description: 'Traditional sourdough bread made with our 100-year-old starter',
    price: 6.99,
    category: 'bread',
    image: '/images/products-bread-display.jpg',
  },
  {
    id: 2,
    name: 'Chocolate Croissant',
    description: 'Buttery croissant filled with rich dark chocolate',
    price: 4.99,
    category: 'pastries',
    image: '/images/products-croissant.jpg',
  },
  {
    id: 3,
    name: 'Custom Photo Cake',
    description: 'Classic cake with your custom photo printed on top',
    price: 29.99,
    category: 'cakes',
    image: '/images/products-custom-cake.jpg',
  },
  {
    id: 4,
    name: 'Fresh Breakfast Set',
    description: 'Complete breakfast with fresh bread, pastries, and coffee',
    price: 12.99,
    category: 'breakfast',
    image: '/images/services-breakfast.jpg',
  },
  {
    id: 5,
    name: 'Artisan Buns',
    description: 'Freshly baked artisan buns with various toppings',
    price: 3.99,
    category: 'bread',
    image: '/images/Brötchenmix_Tüte-2-e1575032708501-768x942.jpg',
  },
  {
    id: 6,
    name: 'Christmas Stollen',
    description: 'Traditional German Christmas bread with dried fruits and nuts',
    price: 24.99,
    category: 'seasonal',
    image: '/images/products-stollen.jpg',
  }
];

const categories = ['all', 'bread', 'pastries', 'cakes', 'breakfast', 'seasonal'];

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-[#D72638] mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Menu</h1>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-[#FFF6F6] px-6 py-2 rounded-[20px] capitalize font-semibold text-[#3A3A3A] shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] transition-all"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] overflow-hidden"
          >
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#D72638]">{product.name}</h3>
                <span className="text-lg font-semibold text-[#3A3A3A]">€{product.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="inline-block px-4 py-1 bg-[#FFF5E1] text-[#EE0A24] rounded-full text-sm font-semibold capitalize">
                {product.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
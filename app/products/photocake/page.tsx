'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const cakeOptions = [
  {
    id: 1,
    name: 'Classic Photo Cake',
    description: 'Traditional vanilla sponge cake with your photo printed on fondant',
    price: 29.99,
    size: '20cm (8")',
    serves: '8-10 people',
    image: '/images/products-custom-cake.jpg',
  },
  {
    id: 2,
    name: 'Chocolate Photo Cake',
    description: 'Rich chocolate cake with your photo printed on chocolate fondant',
    price: 34.99,
    size: '20cm (8")',
    serves: '8-10 people',
    image: '/images/products-custom-cake.jpg',
  },
  {
    id: 3,
    name: 'Large Photo Cake',
    description: 'Your choice of flavor with a larger canvas for your photo',
    price: 44.99,
    size: '25cm (10")',
    serves: '12-15 people',
    image: '/images/products-custom-cake.jpg',
  },
]

export default function PhotoCakePage() {
  return (
    <div className="container mx-auto px-4 py-8 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-4xl font-extrabold text-[#D72638] transition-colors dark:text-[#FFA5A5]"
      >
        Custom Photo Cakes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-12 max-w-2xl text-center text-gray-600 transition-colors dark:text-[#FAD2E1]"
      >
        Make your celebration unique with our custom photo cakes. We print your cherished photos on
        premium fondant using food-safe edible ink.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cakeOptions.map((cake, index) => (
          <motion.div
            key={cake.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-[25px] bg-[#FFF6F6] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]"
          >
            <div className="relative h-64 w-full">
              <Image
                src={cake.image}
                alt={cake.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-bold text-[#D72638] transition-colors dark:text-[#FFA5A5]">
                  {cake.name}
                </h3>
                <span className="text-lg font-semibold text-[#3A3A3A] transition-colors dark:text-[#FAD2E1]">
                  €{cake.price}
                </span>
              </div>
              <p className="mb-4 text-gray-600 transition-colors dark:text-[#FAD2E1]">
                {cake.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-[#FFF5E1] px-4 py-1 text-sm font-semibold text-[#EE0A24] transition-colors dark:bg-[#181818] dark:text-[#FFA5A5]">
                  {cake.size}
                </span>
                <span className="inline-block rounded-full bg-[#FFF5E1] px-4 py-1 text-sm font-semibold text-[#EE0A24] transition-colors dark:bg-[#181818] dark:text-[#FFA5A5]">
                  {cake.serves}
                </span>
              </div>
              <button className="mt-6 w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all transition-colors hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#232323] dark:hover:bg-[#FF3B59] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#232323]">
                Jetzt bestellen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

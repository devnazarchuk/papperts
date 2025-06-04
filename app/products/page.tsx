'use client'
import Image from 'next/image'
import { FaBirthdayCake, FaBreadSlice, FaCoffee, FaEgg } from 'react-icons/fa'
import { GiCroissant, GiSlicedBread } from 'react-icons/gi'

// import { CardGrid } from '@/components/ui/CardGrid'
import { PageWrapper } from '@/components/ui/PageWrapper'
// import { SoftCard } from '@/components/ui/SoftCard'

const productCards = [
  {
    title: 'Brot',
    description:
      'Unsere Brote werden traditionell auf der Steinplatte gebacken. Hergestellt nach eigenen Rezepturen und mit eigenen Sauerteigen.',
    icon: <GiSlicedBread className="text-[#EE0A24]" size={48} />,
    href: '/products/bread',
    image: '/images/RustiXL_geteilt_3-768x1024.jpg',
  },
  {
    title: 'Brötchen',
    description:
      'Hergestellt in Poppenhausen, gebacken in den Fachgeschäften. Dieses Konzept sorgt bei unseren Brötchen für die bestmögliche Frische.',
    icon: <FaBreadSlice className="text-[#EE0A24]" size={48} />,
    href: '/products/rolls',
    image: '/images/broetchen.jpg',
  },
  {
    title: 'Gebäck',
    description:
      'Nur mit bester Butter. Bei allen Rezepten setzen wir auf eine hohe Qualität bei den Zutaten und verwenden nur naturbelassene Rohstoffe.',
    icon: <GiCroissant className="text-[#FF3B59]" size={48} />,
    href: '/products/pastries',
    image: '/images/quarkplunder.jpg',
  },
  {
    title: 'Kaffee',
    description:
      'In unseren Fachgeschäften verwöhnen wir euch mit leckeren Kaffeespezialitäten. Den Kaffee beziehen von unserem Partner Seeberger/Schärf.',
    icon: <FaCoffee className="text-[#EE0A24]" size={48} />,
    href: '/products/coffee',
    image: '/images/DSC7945-768x1152.jpg',
  },
  {
    title: 'Frische Fielfalt Frühstück',
    description:
      'Keine langweilige Routine, sondern jeden Tag neu entscheiden. Egal, ob du alleine, zu zweit oder in der Gruppe bist: in 35 papperts-Fachgeschäften wartet eine fielfältige Auswahl an Frühstücken, die du sogar nach Lust und Laune dank Upgrades anpassen kannst.',
    icon: <FaEgg className="text-[#EE0A24]" size={48} />,
    href: '/products/breakfast',
    image:
      '/images/Frische_Fruehstuecks_Fielfalt_FFF_der_Baeckerei_Pappert_aus_Eichenzell-768x603.jpg',
  },
  {
    title: 'Fototorte',
    description:
      'Überraschen Sie Ihre Liebsten mit einer Fototorte. Unsere Fotomotivtorte gibt es in den Sorten Frankfurter-Schnitte und Schoko.',
    icon: <FaBirthdayCake className="text-[#FF3B59]" size={48} />,
    href: '/products/photocake',
    image: '/images/Pappert-Imageshots_0490a-768x512.jpg',
  },
]

export default function ProductsPage() {
  return (
    <PageWrapper>
      <main className="p-0px min-h-screen bg-[#FDEEEE] font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] text-[#3A3A3A] transition-colors duration-200 dark:bg-[#181818] dark:text-[#FFF5E1]">
        <h1 className="mb-8 rounded text-3xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
          Produkte
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-[25px] bg-[#FFF6F6] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]"
            >
              {/* Fixed aspect ratio for image to prevent layout shift */}
              <div className="relative aspect-[4/3] w-full bg-[#FFF6F6] dark:bg-[#232323]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="rounded-t-[25px] object-cover transition-colors duration-200"
                  style={{ objectPosition: 'center' }}
                  priority={product.title === 'Brot'} // Make first image LCP
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                  {product.title}
                </h3>
                <p className="mb-4 text-gray-700 transition-colors duration-200 dark:text-[#FFF5E1]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  {/* No price/category in productCards, so skip */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  )
}

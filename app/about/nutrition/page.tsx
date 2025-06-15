'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaAppleAlt, FaBreadSlice, FaLeaf, FaSeedling } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    nutrition: {
      title: string
      description: string
    }
    breads: {
      title: string
      showMore: string
      showLess: string
      items: {
        [key: string]: {
          name: string
          tags: string[]
          allergen: string
          hidden: string
        }
      }
    }
    rolls: {
      title: string
      showMore: string
      showLess: string
      items: {
        [key: string]: {
          name: string
          tags: string[]
          allergen: string
          hidden: string
        }
      }
    }
    allergens: {
      title: string
      disclaimer: string
      list: string[]
    }
  }
  en: {
    title: string
    subtitle: string
    nutrition: {
      title: string
      description: string
    }
    breads: {
      title: string
      showMore: string
      showLess: string
      items: {
        [key: string]: {
          name: string
          tags: string[]
          allergen: string
          hidden: string
        }
      }
    }
    rolls: {
      title: string
      showMore: string
      showLess: string
      items: {
        [key: string]: {
          name: string
          tags: string[]
          allergen: string
          hidden: string
        }
      }
    }
    allergens: {
      title: string
      disclaimer: string
      list: string[]
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Ernährung & Allergene',
    subtitle: 'Ausgewogen, gesund und lecker – für jeden Geschmack das Richtige.',
    nutrition: {
      title: 'Ernährungsformen & Allergene',
      description:
        'Unterschiedliche Ernährungsformen und allergene Empfindlichkeiten nehmen einen immer bedeutenderen Platz in unserem Essverhalten ein. In unserer Backstube in Poppenhausen entstehen Tag für Tag und Nacht für Nacht handwerklich hergestellte Backwaren, die vegan, vegetarisch, laktosefrei oder auch allergenarm sind. Entdecken Sie bei uns Brote und Brötchen, die sowohl Genuss als auch Verträglichkeit vereinen – denn gute und frische Produkte sind bei Pappert für alle da.',
    },
    breads: {
      title: 'Unser Brotsortiment',
      showMore: 'Mehr erfahren',
      showLess: 'Weniger anzeigen',
      items: {
        bauernbrot: {
          name: '1928 – Das Bauernbrot (1.500g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        dinkler: {
          name: 'der Dinkler (500g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen, Lupine',
          hidden:
            'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen, Lupine)',
        },
        italiener: {
          name: 'der Italiener',
          tags: ['vegetarisch'],
          allergen: 'glutenhaltiges Getreide, Soja, Milch (einschl. Lactose)',
          hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Soja, Milch (einschl. Lactose))',
        },
        franzose: {
          name: 'der Franzose',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        nur: {
          name: 'das NUR (750g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'roggen-dinkler': {
          name: 'der Roggen-Dinkler (750g)',
          tags: ['vegetarisch'],
          allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose), Sesamsamen',
          hidden:
            'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose), Sesamsamen)',
        },
        rogger: {
          name: 'der Rogger (500g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'rubli-dinkler': {
          name: 'der Rübli-Dinkler (500g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen, Lupine',
          hidden:
            'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen, Lupine)',
        },
        wilhelm: {
          name: 'der Wilhelm (1.000g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'wilhelm-kummel': {
          name: 'der Wilhelm (1.000g) Kümmel',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'rusti-l': {
          name: 'Rusti L (500g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'rusti-xl': {
          name: 'Rusti XL (1.000g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'rusti-xl-kummel': {
          name: 'Rusti XL (1.000g) Kümmel',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        korn: {
          name: 'Rhöner Korn (750g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
        },
        kruste: {
          name: 'Rhöner Kruste (750g)',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
      },
    },
    rolls: {
      title: 'Unser Brötchensortiment',
      showMore: 'Mehr erfahren',
      showLess: 'Weniger anzeigen',
      items: {
        ciabatta: {
          name: 'Ciabattabrötchen',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'dinkel-krusti': {
          name: 'Dinkel-Krusti',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
        },
        dreisaat: {
          name: 'Dreisaatbrötchen',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
        },
        feuerhandwerk: {
          name: 'Feuerhandwerk',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Soja',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja)',
        },
        feuerbrezel: {
          name: 'Feuerbrezel',
          tags: ['vegetarisch'],
          allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
          hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
        },
        handwerk: {
          name: 'Handwerk',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        kaesebrezel: {
          name: 'Käsebrezel',
          tags: ['vegetarisch'],
          allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
          hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
        },
        kaesebroetchen: {
          name: 'Käsebrötchen',
          tags: ['vegetarisch'],
          allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
          hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
        },
        kornspitz: {
          name: 'Kornspitz',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Soja, Sesam',
          hidden:
            'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja, Sesam)',
        },
        'kuerbis-fit': {
          name: 'KürbisFIT',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        krusti: {
          name: 'Krusti',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        laugenbrezel: {
          name: 'Laugenbrezel',
          tags: ['vegetarisch'],
          allergen: 'glutenhaltiges Getreide, Milch (einschließlich Lactose)',
          hidden: 'vegetarisch\nAllergen (glutenhaltiges Getreide, Milch (einschließlich Lactose))',
        },
        mohnbroetchen: {
          name: 'Mohnbrötchen',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        'muesli-fit': {
          name: 'MüsliFIT',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Schalenfrüchte, Sesamsamen',
          hidden:
            'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Schalenfrüchte, Sesamsamen)',
        },
        papperz: {
          name: 'Papperz',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide)',
        },
        roggenbroetchen: {
          name: 'Roggenbrötchen',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Soja',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja)',
        },
        salzstange: {
          name: 'Salzstange',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Soja',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Soja)',
        },
        sesambroetchen: {
          name: 'Sesambrötchen',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
        },
        sonnenblumenbroetchen: {
          name: 'Sonnenblumenbrötchen',
          tags: ['vegetarisch', 'vegan', 'laktosefrei'],
          allergen: 'glutenhaltiges Getreide, Sesamsamen',
          hidden: 'vegetarisch, vegan, laktosefrei\nAllergen (glutenhaltiges Getreide, Sesamsamen)',
        },
      },
    },
    allergens: {
      title: 'Allergene',
      disclaimer:
        'Auf Grund der Produktionsbedingungen können Spuren von Allergenen (Lactose) oder tierischen Produkten (Butter, Milch, Sahne) nicht ausgeschlossen werden. Die Beschreibung der Produkte bezeichnet lediglich die Zutaten, die aktiv zugesetzt werden.',
      list: [
        'glutenhaltiges Getreide',
        'Krebstiere',
        'Eier',
        'Fisch',
        'Erdnüsse',
        'Soja',
        'Milch (einschl. Lactose)',
        'Schalenfrüchte',
        'Sellerie',
        'Senf',
        'Sesamsamen',
        'Schwefeldioxid und Sulfite',
        'Lupine',
        'Weichtiere',
      ],
    },
  },
  en: {
    title: 'Nutrition & Allergens',
    subtitle: 'Balanced, healthy and delicious – something for every taste.',
    nutrition: {
      title: 'Dietary Forms & Allergens',
      description:
        'Different dietary forms and allergic sensitivities are becoming increasingly important in our eating habits. In our bakery in Poppenhausen, artisanal baked goods are produced day and night that are vegan, vegetarian, lactose-free, or low in allergens. Discover breads and rolls at our bakery that combine both enjoyment and digestibility – because good and fresh products at Pappert are for everyone.',
    },
    breads: {
      title: 'Our Bread Selection',
      showMore: 'Learn more',
      showLess: 'Show less',
      items: {
        bauernbrot: {
          name: "1928 – The Farmer's Bread (1.500g)",
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        dinkler: {
          name: 'The Dinkler (500g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds, lupin',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds, lupin)',
        },
        italiener: {
          name: 'The Italian',
          tags: ['vegetarian'],
          allergen: 'gluten-containing cereals, soy, milk (including lactose)',
          hidden: 'vegetarian\nAllergen (gluten-containing cereals, soy, milk (including lactose))',
        },
        franzose: {
          name: 'The Frenchman',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        nur: {
          name: 'The NUR (750g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'roggen-dinkler': {
          name: 'The Rye Dinkler (750g)',
          tags: ['vegetarian'],
          allergen: 'gluten-containing cereals, milk (including lactose), sesame seeds',
          hidden:
            'vegetarian\nAllergen (gluten-containing cereals, milk (including lactose), sesame seeds)',
        },
        rogger: {
          name: 'The Rogger (500g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'rubli-dinkler': {
          name: 'The Carrot Dinkler (500g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds, lupin',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds, lupin)',
        },
        wilhelm: {
          name: 'The Wilhelm (1.000g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'wilhelm-kummel': {
          name: 'The Wilhelm (1.000g) Caraway',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'rusti-l': {
          name: 'Rusti L (500g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'rusti-xl': {
          name: 'Rusti XL (1.000g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'rusti-xl-kummel': {
          name: 'Rusti XL (1.000g) Caraway',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        korn: {
          name: 'Rhön Grain (750g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds)',
        },
        kruste: {
          name: 'Rhön Crust (750g)',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
      },
    },
    rolls: {
      title: 'Our Roll Selection',
      showMore: 'Learn more',
      showLess: 'Show less',
      items: {
        ciabatta: {
          name: 'Ciabatta Roll',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'dinkel-krusti': {
          name: 'Spelt Krusti',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds)',
        },
        dreisaat: {
          name: 'Three-Seed Roll',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds)',
        },
        feuerhandwerk: {
          name: 'Fire Craft',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, soy',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, soy)',
        },
        feuerbrezel: {
          name: 'Fire Pretzel',
          tags: ['vegetarian'],
          allergen: 'gluten-containing cereals, milk (including lactose)',
          hidden: 'vegetarian\nAllergen (gluten-containing cereals, milk (including lactose))',
        },
        handwerk: {
          name: 'Craft',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        kaesebrezel: {
          name: 'Cheese Pretzel',
          tags: ['vegetarian'],
          allergen: 'gluten-containing cereals, milk (including lactose)',
          hidden: 'vegetarian\nAllergen (gluten-containing cereals, milk (including lactose))',
        },
        kaesebroetchen: {
          name: 'Cheese Roll',
          tags: ['vegetarian'],
          allergen: 'gluten-containing cereals, milk (including lactose)',
          hidden: 'vegetarian\nAllergen (gluten-containing cereals, milk (including lactose))',
        },
        kornspitz: {
          name: 'Grain Spitz',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, soy, sesame',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, soy, sesame)',
        },
        'kuerbis-fit': {
          name: 'PumpkinFIT',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        krusti: {
          name: 'Krusti',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        laugenbrezel: {
          name: 'Lye Pretzel',
          tags: ['vegetarian'],
          allergen: 'gluten-containing cereals, milk (including lactose)',
          hidden: 'vegetarian\nAllergen (gluten-containing cereals, milk (including lactose))',
        },
        mohnbroetchen: {
          name: 'Poppy Seed Roll',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        'muesli-fit': {
          name: 'MuesliFIT',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, tree nuts, sesame seeds',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, tree nuts, sesame seeds)',
        },
        papperz: {
          name: 'Papperz',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals)',
        },
        roggenbroetchen: {
          name: 'Rye Roll',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, soy',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, soy)',
        },
        salzstange: {
          name: 'Salt Stick',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, soy',
          hidden: 'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, soy)',
        },
        sesambroetchen: {
          name: 'Sesame Roll',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds)',
        },
        sonnenblumenbroetchen: {
          name: 'Sunflower Roll',
          tags: ['vegetarian', 'vegan', 'lactose-free'],
          allergen: 'gluten-containing cereals, sesame seeds',
          hidden:
            'vegetarian, vegan, lactose-free\nAllergen (gluten-containing cereals, sesame seeds)',
        },
      },
    },
    allergens: {
      title: 'Allergens',
      disclaimer:
        'Due to production conditions, traces of allergens (lactose) or animal products (butter, milk, cream) cannot be excluded. The product description only refers to the ingredients that are actively added.',
      list: [
        'gluten-containing cereals',
        'crustaceans',
        'eggs',
        'fish',
        'peanuts',
        'soy',
        'milk (including lactose)',
        'tree nuts',
        'celery',
        'mustard',
        'sesame seeds',
        'sulphur dioxide and sulphites',
        'lupin',
        'molluscs',
      ],
    },
  },
}

const brote = [
  {
    id: 'bauernbrot',
    image: '/images/bauernbrot.jpg',
  },
  {
    id: 'dinkler',
    image: '/images/dinkler.jpg',
  },
  {
    id: 'italiener',
    image: '/images/italiener.jpg',
  },
  {
    id: 'franzose',
    image: '/images/franzose.jpg',
  },
  {
    id: 'nur',
    image: '/images/nur.jpg',
  },
  {
    id: 'roggen-dinkler',
    image: '/images/roggen-dinkler.jpg',
  },
  {
    id: 'rogger',
    image: '/images/rogger.jpg',
  },
  {
    id: 'rubli-dinkler',
    image: '/images/karotten.jpg',
  },
  {
    id: 'wilhelm',
    image: '/images/wilhelm.jpg',
  },
  {
    id: 'wilhelm-kummel',
    image: '/images/wilhelm-kummel.jpg',
  },
  {
    id: 'rusti-l',
    image: '/images/rusti-l.jpg',
  },
  {
    id: 'rusti-xl',
    image: '/images/rusti-xl.jpg',
  },
  {
    id: 'rusti-xl-kummel',
    image: '/images/rusti-xl-kummel.jpg',
  },
  {
    id: 'korn',
    image: '/images/korn.jpg',
  },
  {
    id: 'kruste',
    image: '/images/kruste.jpg',
  },
]

const broetchen = [
  {
    id: 'ciabatta',
    image: '/images/ciabatta.jpg',
  },
  {
    id: 'dinkel-krusti',
    image: '/images/dinkel-krusti.jpg',
  },
  {
    id: 'dreisaat',
    image: '/images/dreisaat.jpg',
  },
  {
    id: 'feuerhandwerk',
    image: '/images/feuerhandwerk.jpg',
  },
  {
    id: 'feuerbrezel',
    image: '/images/feuerbrezel.jpg',
  },
  {
    id: 'handwerk',
    image: '/images/handwerk.jpg',
  },
  {
    id: 'kaesebrezel',
    image: '/images/kaesebrezel.jpg',
  },
  {
    id: 'kaesebroetchen',
    image: '/images/kaesebroetchen.jpg',
  },
  {
    id: 'kornspitz',
    image: '/images/kornspitz.jpg',
  },
  {
    id: 'kuerbis-fit',
    image: '/images/kuerbis-fit.jpg',
  },
  {
    id: 'krusti',
    image: '/images/krusti.jpg',
  },
  {
    id: 'laugenbrezel',
    image: '/images/laugenbrezel.jpg',
  },
  {
    id: 'mohnbroetchen',
    image: '/images/mohnbroetchen.jpg',
  },
  {
    id: 'muesli-fit',
    image: '/images/muesli-fit.jpg',
  },
  {
    id: 'papperz',
    image: '/images/papperz.jpg',
  },
  {
    id: 'roggenbroetchen',
    image: '/images/roggenbroetchen.jpg',
  },
  {
    id: 'salzstange',
    image: '/images/salzstange.jpg',
  },
  {
    id: 'sesambroetchen',
    image: '/images/sesambroetchen.jpg',
  },
  {
    id: 'sonnenblumenbroetchen',
    image: '/images/sonnenblumenbroetchen.jpg',
  },
]

export default function NutritionPage() {
  const language = useLanguageStore((state) => state.language)
  const [openBrot, setOpenBrot] = useState<number | null>(null)
  const [openBroetchen, setOpenBroetchen] = useState<number | null>(null)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-12 sm:px-6 lg:px-8 dark:from-[#181818] dark:to-[#232323]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center">
            <FaAppleAlt className="mr-2 h-8 w-8 text-[#EE0A24] dark:text-[#EE0A24]" />
            <h1
              className="text-4xl font-bold text-[#EE0A24] dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {translations[language].title}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            {translations[language].subtitle}
          </p>
        </motion.div>

        {/* Ernährungsformen & Allergene */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 flex flex-col items-center gap-8 md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[260px] overflow-hidden rounded-[25px] shadow-lg transition-all duration-300 md:h-[320px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <Image
                src="/soft-images/ingredients-flour.jpg"
                alt={translations[language].nutrition.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-[25px] bg-white/80 p-8 shadow-lg transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                {translations[language].nutrition.title}
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {translations[language].nutrition.description}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Brotsortiment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="mb-6 flex items-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            <FaBreadSlice className="mr-2" /> {translations[language].breads.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {brote.map((brot, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/80 p-4 shadow-md dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <div className="mb-1 flex items-center">
                  <FaLeaf className="mr-2 text-[#EE0A24]" />
                  <span className="font-semibold text-[#3A3A3A] dark:text-[#FDEEEE]">
                    {translations[language].breads.items[brot.id].name}
                  </span>
                </div>
                <div className="mb-1 text-xs text-[#FFA5A5]">
                  {translations[language].breads.items[brot.id].tags.join(', ')}
                </div>
                <div className="text-xs text-[#A88B8B]">
                  Allergen: {translations[language].breads.items[brot.id].allergen}
                </div>
                {/* Accordion for hidden info */}
                <button
                  className="mt-2 w-full rounded bg-[#FFA5A5] px-3 py-1 text-sm font-semibold text-[#3A3A3A] transition-colors hover:bg-[#FF3B59] dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#181818]"
                  onClick={() => setOpenBrot(openBrot === i ? null : i)}
                  aria-expanded={openBrot === i}
                  aria-controls={`brot-panel-${i}`}
                >
                  {openBrot === i
                    ? translations[language].breads.showLess
                    : translations[language].breads.showMore}
                </button>
                {openBrot === i && (
                  <div
                    id={`brot-panel-${i}`}
                    className="mt-2 rounded bg-[#FFF6F6] p-3 text-sm text-[#3A3A3A] shadow-inner dark:bg-[#181818] dark:text-[#FFA5A5]"
                  >
                    {translations[language].breads.items[brot.id].hidden
                      .split('\n')
                      .map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Brötchensortiment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="mb-6 flex items-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            <FaSeedling className="mr-2" /> {translations[language].rolls.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {broetchen.map((b, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/80 p-4 shadow-md dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <div className="mb-1 flex items-center">
                  <FaLeaf className="mr-2 text-[#EE0A24]" />
                  <span className="font-semibold text-[#3A3A3A] dark:text-[#FDEEEE]">
                    {translations[language].rolls.items[b.id].name}
                  </span>
                </div>
                <div className="mb-1 text-xs text-[#FFA5A5]">
                  {translations[language].rolls.items[b.id].tags.join(', ')}
                </div>
                <div className="text-xs text-[#A88B8B]">
                  Allergen: {translations[language].rolls.items[b.id].allergen}
                </div>
                {/* Accordion for hidden info */}
                <button
                  className="mt-2 w-full rounded bg-[#FFA5A5] px-3 py-1 text-sm font-semibold text-[#3A3A3A] transition-colors hover:bg-[#FF3B59] dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#181818]"
                  onClick={() => setOpenBroetchen(openBroetchen === i ? null : i)}
                  aria-expanded={openBroetchen === i}
                  aria-controls={`broetchen-panel-${i}`}
                >
                  {openBroetchen === i
                    ? translations[language].rolls.showLess
                    : translations[language].rolls.showMore}
                </button>
                {openBroetchen === i && (
                  <div
                    id={`broetchen-panel-${i}`}
                    className="mt-2 rounded bg-[#FFF6F6] p-3 text-sm text-[#3A3A3A] shadow-inner dark:bg-[#181818] dark:text-[#FFA5A5]"
                  >
                    {translations[language].rolls.items[b.id].hidden
                      .split('\n')
                      .map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Allergene */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            {translations[language].allergens.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {translations[language].allergens.list.map((a, i) => (
              <span
                key={i}
                className="rounded-full bg-[#FFA5A5] px-4 py-1 text-sm text-[#3A3A3A] dark:bg-[#232323] dark:text-[#FFA5A5]"
              >
                {a}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-[20px] bg-[#FFF6F6] p-6 text-center text-[#3A3A3A] shadow-md dark:bg-[#232323] dark:text-[#FDEEEE]">
            <p className="text-sm">{translations[language].allergens.disclaimer}</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

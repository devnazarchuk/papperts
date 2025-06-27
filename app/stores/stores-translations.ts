export type StoresLanguage = 'en' | 'de'

export const storesTranslations: Record<
  StoresLanguage,
  {
    title: string
    description: string
    button: string
    stores: {
      name: string
      address: string
      description: string
    }[]
  }
> = {
  en: {
    title: 'Our Locations',
    description:
      'Discover our bakery locations near you – modern, cozy, and always here for you with a smile.',
    button: 'Get Directions',
    stores: [
      {
        name: 'Bad Hersfeld, Spa Park',
        address: 'Am Kurpark 2, 36251 Bad Hersfeld',
        description:
          'Here, tradition meets modernity. At the traditional Café Bolender location, we have created a two-story coffee house that is both a classic Pappert and a reminder of history.',
      },
      {
        name: 'Kaiserwiesen',
        address: 'Keltenstraße 20/Apotheke div Gastronomie Reisebüro',
        description:
          "In the Kaiserwiesen Fulda shopping center, you'll find the entire Pappert world in one place. In addition to the bakery and café, we also present the Rhöner Eismanufaktur, Pappert - zu Tisch, and Pappert - Pizza & Pasta concepts.",
      },
      {
        name: 'Lauterbach',
        address: 'An d. Leimenkaute 1, 36341 Lauterbach (Hessen)',
        description:
          'In Lauterbach, we opened our 100th store—a real gem. Enjoy your breakfast in a modern and cozy atmosphere.',
      },
    ],
  },
  de: {
    title: 'Unsere Standorte',
    description:
      'Entdecke unsere Bäckerei-Standorte in deiner Nähe – modern, gemütlich und immer mit einem Lächeln für dich da.',
    button: 'Route anzeigen',
    stores: [
      {
        name: 'Bad Hersfeld, Kurpark',
        address: 'Am Kurpark 2, 36251 Bad Hersfeld',
        description:
          'Hier gelingt der Spagat zwischen Tradition und Moderne. Am Traditionsstandort Café Bolender, haben wir ein Kaffeehaus auf zwei Etagen geschaffen, das einerseits ein klassischer Pappert ist - und gleichzeitig an die Geschichte erinnert.',
      },
      {
        name: 'Kaiserwiesen',
        address: 'Keltenstraße 20/Apotheke div Gastronomie Reisebüro',
        description:
          'Im Einkaufszentrum Kaiserwiesen Fulda gibt es die ganze papperts-Welt an einem Ort. Neben dem Herzstück, der Bäckerei mit Café, präsentieren wir hier auch die Konzepte Rhöner Eismanufaktur, Pappert - zu Tisch und Pappert - Pizza & Pasta.',
      },
      {
        name: 'Lauterbach',
        address: 'An d. Leimenkaute 1, 36341 Lauterbach (Hessen)',
        description:
          'In Lauterbach haben wir ein echtes Schmuckstück unser 100. Fachgeschäft eröffnet. In einem modernen und gemütlichen Ambiente können Sie hier ihr Frühstück entspannt genießen.',
      },
    ],
  },
}

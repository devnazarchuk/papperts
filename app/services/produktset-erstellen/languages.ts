interface ProduktsetTranslations {
  de: {
    title: string
    subtitle: string
    createNow: string
    features: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
      }>
    }
    howToUse: {
      title: string
      steps: string[]
    }
    benefits: {
      title: string
      items: string[]
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  en: {
    title: string
    subtitle: string
    createNow: string
    features: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
      }>
    }
    howToUse: {
      title: string
      steps: string[]
    }
    benefits: {
      title: string
      items: string[]
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
}

export const produktsetTranslations: ProduktsetTranslations = {
  de: {
    title: 'Produktset erstellen',
    subtitle: 'Gestalten Sie Ihr individuelles Produktset für jeden Anlass',
    createNow: 'Jetzt erstellen',
    features: {
      title: 'Unsere Produktsets',
      description: 'Entdecken Sie unsere vielfältigen Produktsets für jeden Anlass',
      items: [
        {
          title: 'Frühstücksset',
          description:
            'Perfekt für einen gemütlichen Start in den Tag mit ausgewählten Backwaren und Getränken',
        },
        {
          title: 'Party-Set',
          description: 'Ideal für Ihre Feier mit einer Auswahl an Snacks und Getränken',
        },
        {
          title: 'Geschenkset',
          description:
            'Überraschen Sie Ihre Liebsten mit einem individuell zusammengestellten Geschenkset',
        },
        {
          title: 'Business-Set',
          description: 'Professionelle Verpflegung für Ihre Geschäftstreffen und Events',
        },
      ],
    },
    howToUse: {
      title: 'So erstellen Sie Ihr Produktset',
      steps: [
        'Wählen Sie die gewünschten Produkte aus unserem Sortiment',
        'Geben Sie die gewünschte Menge für jedes Produkt an',
        'Fügen Sie optional eine persönliche Nachricht hinzu',
        'Wählen Sie den gewünschten Lieferzeitpunkt',
        'Bestellen Sie Ihr individuelles Produktset',
      ],
    },
    benefits: {
      title: 'Vorteile unserer Produktsets',
      items: [
        'Individuelle Zusammenstellung nach Ihren Wünschen',
        'Frische Produkte von höchster Qualität',
        'Flexible Lieferzeiten',
        'Persönliche Beratung bei der Zusammenstellung',
        'Attraktive Verpackung für jeden Anlass',
        'Mengenrabatte bei größeren Bestellungen',
      ],
    },
    cta: {
      title: 'Bereit für Ihr individuelles Produktset?',
      subtitle: 'Erstellen Sie jetzt Ihr persönliches Produktset und überraschen Sie Ihre Gäste',
      button: 'Jetzt Produktset erstellen',
    },
  },
  en: {
    title: 'Create Product Set',
    subtitle: 'Design your individual product set for any occasion',
    createNow: 'Create now',
    features: {
      title: 'Our Product Sets',
      description: 'Discover our diverse product sets for any occasion',
      items: [
        {
          title: 'Breakfast Set',
          description:
            'Perfect for a cozy start to the day with selected baked goods and beverages',
        },
        {
          title: 'Party Set',
          description: 'Ideal for your celebration with a selection of snacks and drinks',
        },
        {
          title: 'Gift Set',
          description: 'Surprise your loved ones with an individually curated gift set',
        },
        {
          title: 'Business Set',
          description: 'Professional catering for your business meetings and events',
        },
      ],
    },
    howToUse: {
      title: 'How to Create Your Product Set',
      steps: [
        'Select the desired products from our range',
        'Specify the desired quantity for each product',
        'Optionally add a personal message',
        'Choose your preferred delivery time',
        'Order your individual product set',
      ],
    },
    benefits: {
      title: 'Benefits of Our Product Sets',
      items: [
        'Individual composition according to your wishes',
        'Fresh products of the highest quality',
        'Flexible delivery times',
        'Personal consultation for composition',
        'Attractive packaging for any occasion',
        'Volume discounts for larger orders',
      ],
    },
    cta: {
      title: 'Ready for Your Individual Product Set?',
      subtitle: 'Create your personal product set now and surprise your guests',
      button: 'Create Product Set Now',
    },
  },
}

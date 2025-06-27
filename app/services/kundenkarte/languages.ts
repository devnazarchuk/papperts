export interface KundenkarteTranslations {
  de: {
    title: string
    subtitle: string
    description: string
    note: string
    applyNow: string
    benefits: {
      title: string
      items: string[]
      note: string
    }
    howToUse: {
      title: string
      steps: string[]
    }
    faq: {
      title: string
      questions: {
        question: string
        answer: string
      }[]
      note: string
    }
    giftCards: {
      title: string
      description: string
      benefits: string
      howTo: {
        title: string
        steps: string[]
      }
      button: string
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    note: string
    applyNow: string
    benefits: {
      title: string
      items: string[]
      note: string
    }
    howToUse: {
      title: string
      steps: string[]
    }
    faq: {
      title: string
      questions: {
        question: string
        answer: string
      }[]
      note: string
    }
    giftCards: {
      title: string
      description: string
      benefits: string
      howTo: {
        title: string
        steps: string[]
      }
      button: string
    }
  }
}

export const kundenkarteTranslations: KundenkarteTranslations = {
  de: {
    title: 'Papperts Kundenkarte',
    subtitle: 'TREUE WIRD BELOHNT',
    description: 'Das bietet unsere Pappert-Kundenkarte!',
    note: 'Die Kundenkarte ist nur in Verbindung mit einem gültigen Ausweis gültig.',
    applyNow: 'Jetzt beantragen',
    benefits: {
      title: 'Ihre Vorteile',
      items: [
        '10% Rabatt auf alle Produkte',
        'Exklusive Aktionen und Angebote',
        'Früher Zugang zu neuen Produkten',
        'Persönliche Beratung',
        'Digitale Verwaltung Ihrer Punkte',
      ],
      note: 'Die Kundenkarte ist nur in Verbindung mit einem gültigen Ausweis gültig.',
    },
    howToUse: {
      title: "So funktioniert's",
      steps: [
        'Kundenkarte beantragen',
        'Bei jedem Einkauf vorzeigen',
        'Punkte sammeln',
        'Vorteile nutzen',
      ],
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      questions: [
        {
          question: 'Wie bekomme ich eine Kundenkarte?',
          answer:
            'Sie können die Karte direkt in unserer Filiale beantragen. Bringen Sie bitte einen gültigen Ausweis mit.',
        },
        {
          question: 'Wie lange ist die Karte gültig?',
          answer: 'Die Karte ist unbefristet gültig, solange Sie sie regelmäßig nutzen.',
        },
        {
          question: 'Kann ich die Karte auch online beantragen?',
          answer: 'Ja, Sie können die Karte auch über unsere Website oder App beantragen.',
        },
      ],
      note: 'Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!',
    },
    giftCards: {
      title: 'Gutscheinkarten',
      description: 'Verschenken Sie Freude mit unseren Gutscheinkarten!',
      benefits:
        'Unsere Gutscheinkarten sind in verschiedenen Wertstufen erhältlich und können für alle Produkte in unseren Filialen eingelöst werden.',
      howTo: {
        title: "So funktioniert's",
        steps: [
          'Wählen Sie den gewünschten Betrag',
          'Bestellen Sie die Gutscheinkarte online',
          'Zahlen Sie bequem per Kreditkarte oder PayPal',
          'Die Gutscheinkarte wird per Post versendet',
        ],
      },
      button: 'Jetzt bestellen',
    },
  },
  en: {
    title: 'Papperts Customer Card',
    subtitle: 'LOYALTY IS REWARDED',
    description: 'What our Pappert Customer Card offers!',
    note: 'The customer card is only valid in conjunction with a valid ID.',
    applyNow: 'Apply now',
    benefits: {
      title: 'Your Benefits',
      items: [
        '10% discount on all products',
        'Exclusive promotions and offers',
        'Early access to new products',
        'Personal consultation',
        'Digital management of your points',
      ],
      note: 'The customer card is only valid in conjunction with a valid ID.',
    },
    howToUse: {
      title: 'How it works',
      steps: [
        'Apply for a customer card',
        'Show it with every purchase',
        'Collect points',
        'Use benefits',
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'How do I get a customer card?',
          answer: 'You can apply for the card directly in our store. Please bring a valid ID.',
        },
        {
          question: 'How long is the card valid?',
          answer: 'The card is valid indefinitely as long as you use it regularly.',
        },
        {
          question: 'Can I apply for the card online?',
          answer: 'Yes, you can also apply for the card through our website or app.',
        },
      ],
      note: 'Have more questions? Feel free to contact us!',
    },
    giftCards: {
      title: 'Gift Cards',
      description: 'Give joy with our gift cards!',
      benefits:
        'Our gift cards are available in various denominations and can be redeemed for all products in our stores.',
      howTo: {
        title: 'How it works',
        steps: [
          'Choose the desired amount',
          'Order the gift card online',
          'Pay conveniently by credit card or PayPal',
          'The gift card will be sent by mail',
        ],
      },
      button: 'Order now',
    },
  },
}

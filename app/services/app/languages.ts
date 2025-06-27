interface AppTranslations {
  de: {
    title: string
    subtitle: string
    downloadAppStore: string
    downloadPlayStore: string
    whyAppTitle: string
    features: string[]
    howItWorksTitle: string
    steps: string[]
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  en: {
    title: string
    subtitle: string
    downloadAppStore: string
    downloadPlayStore: string
    whyAppTitle: string
    features: string[]
    howItWorksTitle: string
    steps: string[]
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
}

export const appTranslations: Record<string, AppTranslations[keyof AppTranslations]> = {
  de: {
    title: 'Deine neue Papperts App',
    subtitle: 'Entdecke exklusive Vorteile – sammle Punkte, spare und genieße mehr.',
    downloadAppStore: 'Im App Store herunterladen',
    downloadPlayStore: 'Bei Google Play herunterladen',
    whyAppTitle: 'Warum die Papperts App?',
    features: [
      'Exklusive digitale Coupons zu Geburtstagen und Aktionen',
      'Push-Benachrichtigungen für aktuelle Rabatte',
      'Digitale Kundenkarte – immer dabei',
      'Papperts Punkte sammeln und einlösen',
      'Mobiles Bezahlen via PayPal, Kreditkarte oder vor Ort',
      'Frische Backwaren entdecken und Favoriten markieren',
      'Zutaten, Herkunft und Nährwerte einsehen',
      'Mehr über die Papperts Bäckerei-Familie erfahren',
    ],
    howItWorksTitle: "So funktioniert's",
    steps: [
      'App im App Store oder bei Google Play herunterladen',
      'Mit kostenlosem Papperts-Konto registrieren',
      'Sparen und exklusive Angebote in unseren Bäckereien genießen',
    ],
    ctaTitle: 'Bereit, bei deinen Lieblingsbackwaren zu sparen?',
    ctaSubtitle:
      'Werde Teil der Papperts Community und erlebe ein schnelleres, cleveres und lohnenderes Einkaufserlebnis.',
    ctaButton: 'App herunterladen',
  },
  en: {
    title: 'Your New Papperts App',
    subtitle: 'Discover exclusive benefits – collect points, save, and enjoy more.',
    downloadAppStore: 'Download on App Store',
    downloadPlayStore: 'Get it on Google Play',
    whyAppTitle: 'Why the Papperts App?',
    features: [
      'Exclusive digital coupons for birthdays and promotions',
      'Push notifications for current discounts',
      'Digital loyalty card – always with you',
      'Collect and redeem Papperts points',
      'Mobile payment via PayPal, credit card, or in-store',
      'Discover fresh baked goods and mark favorites',
      'View ingredients, origin, and nutritional information',
      'Learn more about the Papperts bakery family',
    ],
    howItWorksTitle: 'How it works',
    steps: [
      'Download the app from App Store or Google Play',
      'Register with a free Papperts account',
      'Save and enjoy exclusive offers in our bakeries',
    ],
    ctaTitle: 'Ready to save on your favorite baked goods?',
    ctaSubtitle:
      'Join the Papperts community and experience a faster, smarter, and more rewarding shopping experience.',
    ctaButton: 'Download App',
  },
}

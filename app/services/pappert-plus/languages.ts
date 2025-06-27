interface PappertPlusTranslations {
  de: {
    title: string
    subtitle: string
    joinNow: string
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
    joinNow: string
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

export const pappertPlusTranslations: PappertPlusTranslations = {
  de: {
    title: 'Pappert Plus',
    subtitle: 'Ihr exklusiver Vorteilsclub für noch mehr Genuss',
    joinNow: 'Jetzt beitreten',
    features: {
      title: 'Ihre Vorteile',
      description: 'Entdecken Sie die exklusiven Vorteile von Pappert Plus',
      items: [
        {
          title: 'Exklusive Angebote',
          description: 'Erhalten Sie Zugang zu speziellen Aktionen und Rabatten',
        },
        {
          title: 'Früher Zugang',
          description: 'Seien Sie der Erste, der von neuen Produkten und Aktionen erfährt',
        },
        {
          title: 'Persönliche Beratung',
          description: 'Profitieren Sie von individueller Beratung und Service',
        },
        {
          title: 'Digitale Verwaltung',
          description: 'Verwalten Sie Ihre Mitgliedschaft bequem in der Papperts App',
        },
      ],
    },
    howToUse: {
      title: "So funktioniert's",
      steps: [
        'Registrieren Sie sich für Pappert Plus',
        'Laden Sie die Papperts App herunter',
        'Aktivieren Sie Ihre Mitgliedschaft',
        'Genießen Sie Ihre exklusiven Vorteile',
        'Teilen Sie Ihre Erfahrungen mit uns',
      ],
    },
    benefits: {
      title: 'Warum Pappert Plus?',
      items: [
        'Exklusive Produktvorführungen',
        'Persönliche Einladungen zu Events',
        'Spezielle Geburtstagsüberraschungen',
        'Vorrangige Beratung',
        'Zugang zu limitierten Editionen',
      ],
    },
    cta: {
      title: 'Bereit für mehr Vorteile?',
      subtitle: 'Werden Sie Teil der Pappert Plus Community',
      button: 'Jetzt registrieren',
    },
  },
  en: {
    title: 'Pappert Plus',
    subtitle: 'Your exclusive benefits club for even more enjoyment',
    joinNow: 'Join now',
    features: {
      title: 'Your Benefits',
      description: 'Discover the exclusive benefits of Pappert Plus',
      items: [
        {
          title: 'Exclusive offers',
          description: 'Get access to special promotions and discounts',
        },
        {
          title: 'Early access',
          description: 'Be the first to know about new products and promotions',
        },
        {
          title: 'Personal consultation',
          description: 'Benefit from individual advice and service',
        },
        {
          title: 'Digital management',
          description: 'Manage your membership conveniently in the Papperts app',
        },
      ],
    },
    howToUse: {
      title: 'How it works',
      steps: [
        'Register for Pappert Plus',
        'Download the Papperts app',
        'Activate your membership',
        'Enjoy your exclusive benefits',
        'Share your experiences with us',
      ],
    },
    benefits: {
      title: 'Why Pappert Plus?',
      items: [
        'Exclusive product demonstrations',
        'Personal invitations to events',
        'Special birthday surprises',
        'Priority consultation',
        'Access to limited editions',
      ],
    },
    cta: {
      title: 'Ready for more benefits?',
      subtitle: 'Become part of the Pappert Plus community',
      button: 'Register now',
    },
  },
}

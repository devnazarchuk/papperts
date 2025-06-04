import type { Language } from '@/app/store/languageStore'

export interface TeamTranslations {
  title: string
  subtitle: string
  teamInAction: string
  teamVoices: string
  yourCareers: string
}

export const teamTranslations: Record<Language, TeamTranslations> = {
  de: {
    title: 'Unser Team',
    subtitle:
      'Entdecken Sie die Menschen hinter Pappert und erfahren Sie, warum sie gerne Teil unseres Teams sind.',
    teamInAction: 'Unser Team in Aktion',
    teamVoices: 'Stimmen aus unserem Team',
    yourCareers: 'Deine Berufswelten',
  },
  en: {
    title: 'Our Team',
    subtitle: 'Meet the people behind Pappert and discover why they love being part of our team.',
    teamInAction: 'Our Team in Action',
    teamVoices: 'Voices from our Team',
    yourCareers: 'Your Career Paths',
  },
}

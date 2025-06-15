import type { Language } from '@/app/store/languageStore'

export interface InitiativeTranslations {
  title: string
  subtitle: string
  formTitle: string
  formSubtitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  positionLabel: string
  positionPlaceholder: string
  experienceLabel: string
  experiencePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitButton: string
  successMessage: string
  errorMessage: string
}

export const initiativeTranslations: Record<Language, InitiativeTranslations> = {
  de: {
    title: 'Initiativbewerbung',
    subtitle: 'Keine passende Stelle gefunden? Bewirb dich initiativ – wir freuen uns auf dich!',
    formTitle: 'Initiativbewerbung',
    formSubtitle: 'Fülle das Formular aus und wir melden uns bei dir.',
    nameLabel: 'Name',
    namePlaceholder: 'Dein Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'deine@email.de',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+49 123 456789',
    positionLabel: 'Gewünschte Position',
    positionPlaceholder: 'z.B. Bäckereiverkäufer, Produktionshelfer, etc.',
    experienceLabel: 'Berufserfahrung',
    experiencePlaceholder: 'Beschreibe deine bisherige Berufserfahrung...',
    messageLabel: 'Motivationsschreiben',
    messagePlaceholder: 'Warum möchtest du bei Pappert arbeiten?',
    submitButton: 'Absenden',
    successMessage: 'Vielen Dank für deine Initiativbewerbung! Wir melden uns in Kürze bei dir.',
    errorMessage: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
  },
  en: {
    title: 'Initiative Application',
    subtitle:
      'No suitable position found? Apply on your own initiative – we look forward to meeting you!',
    formTitle: 'Initiative Application',
    formSubtitle: 'Fill out the form and we will get back to you.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+49 123 456789',
    positionLabel: 'Desired Position',
    positionPlaceholder: 'e.g. Bakery Salesperson, Production Assistant, etc.',
    experienceLabel: 'Work Experience',
    experiencePlaceholder: 'Describe your work experience...',
    messageLabel: 'Motivation Letter',
    messagePlaceholder: 'Why do you want to work at Pappert?',
    submitButton: 'Submit',
    successMessage: 'Thank you for your initiative application! We will get back to you soon.',
    errorMessage: 'An error occurred. Please try again later.',
  },
}

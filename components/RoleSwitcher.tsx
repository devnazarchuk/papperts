'use client'
import React from 'react'

import { roleTranslations } from '@/app/components/data/translations'
import { useLanguageStore } from '@/app/store/languageStore'
import { Role } from '@/components/data/CARDS'

import { CardSlider } from './CardSlider'

interface RoleSwitcherProps {
  value?: Role
  onChange?: (role: Role) => void
  className?: string
}

export function RoleSwitcher({ value, onChange, className = '' }: RoleSwitcherProps) {
  const { language } = useLanguageStore()

  return (
    <CardSlider
      value={value}
      onChange={onChange}
      className={className}
      translations={roleTranslations}
      language={language}
    />
  )
}

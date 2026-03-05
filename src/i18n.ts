import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { docResources } from './i18n/docTranslations'
import { resources as componentResources } from './i18n/translations'
import { userResources } from './i18n/userTranslations'

const STORAGE_KEY = 'ui-kit-lang'
const supportedLngs = ['ru', 'en'] as const

function getStoredLanguage(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && supportedLngs.includes(stored as (typeof supportedLngs)[number])) {
      return stored
    }
  } catch {
    // ignore
  }
  return 'ru'
}

/** Сливаем ресурсы компонентов, пользовательские и документации в один namespace translation */
const resources = {
  ru: {
    translation: {
      ...componentResources.ru.translation,
      ...userResources.ru.translation,
      ...docResources.ru.translation,
    },
  },
  en: {
    translation: {
      ...componentResources.en.translation,
      ...userResources.en.translation,
      ...docResources.en.translation,
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: getStoredLanguage(),
  fallbackLng: 'ru',
  supportedLngs: [...supportedLngs],
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // ignore
  }
})

export default i18n
export { STORAGE_KEY, supportedLngs }

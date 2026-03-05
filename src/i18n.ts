import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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

const resources = {
  ru: {
    translation: {
      welcome: 'Добро пожаловать',
      docs: 'Документация',
      demo: 'Демо',
      layout_appName: 'UI Kit',
      layout_catalog: 'Каталог компонентов',
      layout_welcome: 'Приветствие',
      layout_demo: 'Demo',
      layout_language: 'Язык',
      welcome_title: 'Добро пожаловать в UI Kit Docs',
      welcome_intro:
        'В левом меню собраны все компоненты, сгруппированные по логике использования. Выберите компонент, чтобы открыть его отдельную страницу с описанием и примерами.',
      welcome_features:
        'На каждой странице доступны: описание на русском языке, визуальные демо и код каждого примера.',
      input_clearAria: 'Очистить',
      table_emptyText: 'Нет данных',
      table_loading: 'Загрузка...',
      pagination_prev: 'Назад',
      pagination_next: 'Вперёд',
      pagination_page: 'Страница',
      pagination_of: 'из',
      pagination_itemsPerPage: 'На странице',
      pagination_total: 'Всего',
      pagination_goTo: 'Перейти',
      select_placeholder: 'Выберите опцию',
      autocomplete_placeholder: 'Поиск...',
      autocomplete_noOptions: 'Нет совпадений',
      autocomplete_clearAria: 'Очистить значение',
      autocomplete_toggleAria: 'Открыть список опций',
      topbarSearch_placeholder: 'Поиск...',
      topbarSearch_button: 'Поиск',
      chip_removeAria: 'Удалить',
      toast_closeAria: 'Закрыть уведомление',
      drawer_closeAria: 'Закрыть панель',
      modal_closeAria: 'Закрыть окно',
      spinner_loadingAria: 'Загрузка',
      datePicker_placeholder: 'Выберите дату',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome',
      docs: 'Documentation',
      demo: 'Demo',
      layout_appName: 'UI Kit',
      layout_catalog: 'Component catalog',
      layout_welcome: 'Welcome',
      layout_demo: 'Demo',
      layout_language: 'Language',
      welcome_title: 'Welcome to UI Kit Docs',
      welcome_intro:
        'The left menu lists all components grouped by usage. Select a component to open its page with description and examples.',
      welcome_features:
        'Each page includes: description, visual demos, and example code.',
      input_clearAria: 'Clear',
      table_emptyText: 'No data',
      table_loading: 'Loading...',
      pagination_prev: 'Prev',
      pagination_next: 'Next',
      pagination_page: 'Page',
      pagination_of: 'of',
      pagination_itemsPerPage: 'Items per page',
      pagination_total: 'Total',
      pagination_goTo: 'Go to',
      select_placeholder: 'Select option',
      autocomplete_placeholder: 'Search...',
      autocomplete_noOptions: 'No options',
      autocomplete_clearAria: 'Clear value',
      autocomplete_toggleAria: 'Toggle options list',
      topbarSearch_placeholder: 'Search...',
      topbarSearch_button: 'Search',
      chip_removeAria: 'Remove',
      toast_closeAria: 'Close notification',
      drawer_closeAria: 'Close panel',
      modal_closeAria: 'Close',
      spinner_loadingAria: 'Loading',
      datePicker_placeholder: 'Select date',
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

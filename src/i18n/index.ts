import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'
import en from '../locales/en.json'

// Element Plus locales
import zhCnLocale from 'element-plus/es/locale/lang/zh-cn'
import enLocale from 'element-plus/es/locale/lang/en'

// Merge Element Plus locales with our custom locales
const messages = {
  'zh-CN': {
    ...zhCN,
    el: zhCnLocale
  },
  'en': {
    ...en,
    el: enLocale
  }
}

// Get browser locale or default to Chinese
const getBrowserLanguage = (): string => {
  const language = navigator.language || 'zh-CN'
  if (language.includes('zh')) return 'zh-CN'
  return 'en'
}

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: localStorage.getItem('lang') || getBrowserLanguage(),
  fallbackLocale: 'zh-CN',
  messages
})

export default i18n 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'amfe-flexible'

// Import Element Plus locales
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// Import global styles
import './styles/global.scss'
import './styles/mixins.scss'

// Create pinia store
const pinia = createPinia()

// Create a reactive Element Plus locale
import { ref } from 'vue'
const elementLocale = ref(i18n.global.locale.value === 'zh-CN' ? zhCn : en)

// Create app
const app = createApp(App)

// Provide Element Plus locale to all components
app.provide('elementLocale', elementLocale)

app
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(ElementPlus)
  .mount('#app')

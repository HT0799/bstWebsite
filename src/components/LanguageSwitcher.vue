<template>
  <div class="language-switcher">
    <span 
      class="lang-option" 
      :class="{ active: currentLang === 'zh-CN' }" 
      @click="switchLang('zh-CN')"
    >
      中文
    </span>
    <span class="separator">|</span>
    <span 
      class="lang-option" 
      :class="{ active: currentLang === 'en' }" 
      @click="switchLang('en')"
    >
      EN
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const i18n = useI18n()
const currentLang = ref(i18n.locale.value)
const elementLocale = inject('elementLocale', ref(i18n.locale.value === 'zh-CN' ? zhCn : en))

// Watch for language changes from other components
watch(() => i18n.locale.value, (newLang) => {
  currentLang.value = newLang
})

// Switch language without page refresh
const switchLang = (lang: string) => {
  // Skip if already using this language
  if (i18n.locale.value === lang) return
  
  // Update i18n locale
  i18n.locale.value = lang
  
  // Store preference
  localStorage.setItem('lang', lang)
  
  // Update Element Plus locale
  if (elementLocale) {
    elementLocale.value = lang === 'zh-CN' ? zhCn : en
  }
  
  // Refresh page to reload API requests with new language
  window.location.reload()
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
}

.lang-option {
  transition: color 0.3s;
}

.lang-option.active {
  color: var(--primary-color);
  font-weight: bold;
}

.separator {
  color: #ccc;
}
</style> 
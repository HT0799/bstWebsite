<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { ElConfigProvider } from 'element-plus'
import { inject, ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 获取注入的 elementLocale
const elementLocale = inject('elementLocale', ref(zhCn))
</script>

<template>
  <div class="app">
    <el-config-provider :locale="elementLocale">
      <AppHeader />
      <main class="main-content">
        <router-view />
      </main>
      <AppFooter />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #0066cc; /* 蓝色主题色 */
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style> 
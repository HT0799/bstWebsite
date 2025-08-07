<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import logo from '../assets/logo.png'
import companyName from '../assets/company-name.png'
import { scrollToTop } from '../utils'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// 处理菜单点击事件

const isLoading = ref(false)

const handleMenuClick = (path: string) => {
  if (path === route.path) {
    // 如果点击的是当前页面，只执行滚动到顶部
    scrollToTop(true)
  } else {
    isLoading.value = true
    
    // 使用router.push进行正常导航
    router.push(path).then(() => {
      // 确保滚动到顶部
      scrollToTop(true)
      setTimeout(() => {
        isLoading.value = false
      }, 100)
    }).catch(() => {
      isLoading.value = false
    })
  }
}

// 修改activeLink逻辑，根据路径前缀判断当前页面所属模块
const activeLink = computed(() => {
  const path = route.path
  if (path.startsWith('/about')) return '/about'
  if (path.startsWith('/products')) return '/products'
  if (path.startsWith('/news')) return '/news'
  if (path.startsWith('/contact')) return '/contact'
  if (path.startsWith('/research')) return '/research'
  return '/'
})
const themeColor = '#4268a8' // Theme color based on the design

// 不需要监听路由变化，因为使用了完全页面刷新
</script>

<template>
  <header class="header">
    <div class="page-loading-indicator" v-if="isLoading"></div>
    <div class="container">
      <div class="logo-container">
        <img :src="logo" class="logo" />
        <img :src="companyName" class="company-name" />
      </div>
      <div class="right-section">
        <el-menu 
          :default-active="activeLink" 
          mode="horizontal" 
          :ellipsis="false"
          class="nav-menu"
          @select="handleMenuClick"
          :disabled="isLoading"
        >
          <el-menu-item index="/">{{ t('header.home') }}</el-menu-item>
          <el-menu-item index="/about">{{ t('header.about') }}</el-menu-item>
          <el-menu-item index="/products">{{ t('header.products') }}</el-menu-item>
          <el-menu-item index="/news">{{ t('header.news') }}</el-menu-item>
          <el-menu-item index="/research">{{ t('header.research') }}</el-menu-item>
          <el-menu-item index="/contact">{{ t('header.contact') }}</el-menu-item>
        </el-menu>
        <div class="language-container">
          <LanguageSwitcher />
        </div>
        <div class="search-container">
          <el-icon class="search-icon"><Search /></el-icon>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  
  .page-loading-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, transparent, v-bind(themeColor), transparent);
    animation: loading-animation 1.5s infinite ease-in-out;
    z-index: 101;
  }
  
  @keyframes loading-animation {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .container {
    max-width: 1674px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .logo-container {
    display: flex;
    align-items: center;
    padding-left: 10px;
    
    .logo {
      height: 32px;
      margin-right: 10px;
    }
    
    .company-name {
      height: 24px;
    }
  }

  .right-section {
    display: flex;
    align-items: center;
  }

  .language-container {
    margin: 0 15px;
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 86px;
    
    .search-icon {
      font-size: 20px;
      color: #CFCFCF;
      cursor: pointer;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .nav-menu {
    border-bottom: none;
    
    :deep(.el-menu) {
      border: none;
    }
    
    :deep(.el-menu-item) {
      padding: 0 20px;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      border: none;
      
      &.is-active {
        color: v-bind(themeColor) !important;
        background-color: transparent;
        transform: scale(1.2);
        font-weight: 700;
        transition: all 0.3s;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background-color: v-bind(themeColor);
          display: block !important;
        }
      }
      
      &:hover {
        color: v-bind(themeColor) !important;
        background-color: transparent !important;
      }
      
      /* 移除会覆盖活动状态样式的通用after规则 */
      &:not(.is-active)::after {
        display: none;
      }
    }
  }
}
</style> 
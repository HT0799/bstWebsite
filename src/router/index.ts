import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/about',
    redirect: '/about/company'
  },
  {
    path: '/about/company',
    name: 'AboutCompany',
    component: () => import('../views/AboutCompanyPage.vue')
  },
  {
    path: '/about/chairman',
    name: 'AboutChairman',
    component: () => import('../views/AboutCompanyPage.vue')
  },
  {
    path: '/about/culture',
    name: 'AboutCulture',
    component: () => import('../views/AboutCompanyPage.vue')
  },
  {
    path: '/about/honors',
    name: 'AboutHonors',
    component: () => import('../views/AboutCompanyPage.vue')
  },
  {
    path: '/about/development',
    name: 'AboutDevelopment',
    component: () => import('../views/AboutCompanyPage.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsPage.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetailPage.vue')
  },
  {
    path: '/news',
    redirect: '/news/company-news'
  },
  {
    path: '/news/company-news',
    name: 'CompanyNews',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/news/industry-news',
    name: 'IndustryNews',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/news/notice',
    name: 'Notice',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/research',
    redirect: '/research/researchCenter'
  },
  {
    path: '/research/researchCenter',
    name: 'ResearchCenter',
    component: () => import('../views/Research.vue')
  },
  {
    path: '/research/smartAutomation',
    name: 'SmartAutomation',
    component: () => import('../views/Research.vue')
  },
  {
    path: '/research/qualityAssurance',
    name: 'QualityAssurance',
    component: () => import('../views/Research.vue')
  },    
  {
    path: '/research/projectPerformance',
    name: 'ProjectPerformance',
    component: () => import('../views/Research.vue')
  },
  {
    path: '/contact',
    redirect: '/contact/talent-concept'
  },
  {
    path: '/contact/talent-concept',
    name: 'TalentConcept',
    component: () => import('../views/ContactPage.vue')
  },
  {
    path: '/contact/recruitment-info',
    name: 'RecruitmentInfo',
    component: () => import('../views/ContactPage.vue')
  },
  {
    path: '/contact/service-support',
    name: 'ServiceSupport',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0, behavior: 'instant' }
  }
})

export default router 
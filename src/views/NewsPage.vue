<template>
  <div :style="{ backgroundImage: `url(${mainBg})` }">
    <div class="page-banner">
      <img :src="newsBanner" alt="news-banner" />
      <div class="banner-content">
        <h1>{{ t("news.banner") }}</h1>
      </div>
    </div>

    <div class="nav-tabs">
      <div class="news-container">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'company-news' }"
          @click="handleTabClick('company-news')"
        >
          {{ t("news.companyNews") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'industry-news' }"
          @click="handleTabClick('industry-news')"
        >
          {{ t("news.industryNews") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'notice-notice' }"
          @click="handleTabClick('notice-notice')"
        >
          {{ t("news.announcement") }}
        </div>
      </div>
    </div>

    <CompanyNews v-show="activeTab === 'company-news'" />
    <IndustryNews v-show="activeTab === 'industry-news'" />
    <Notice v-show="activeTab === 'notice-notice'" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import mainBg from "../assets/main-bg.png";
import newsBanner from "@/assets/news-banner.png"
import CompanyNews from "../components/CompanyNews.vue";
import IndustryNews from "../components/IndustryNews.vue";
import Notice from "../components/Notice.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type TabName =
  | "company-news"
  | "industry-news"
  | "notice-notice";
type RoutePath =
  | "/news/company-news"
  | "/news/industry-news"
  | "/news/notice";

const activeTab = ref<TabName>("company-news");
const route = useRoute();

// Map routes to tab values
const routeToTabMap: Record<RoutePath, TabName> = {
  "/news/company-news": "company-news",
  "/news/industry-news": "industry-news",
  "/news/notice": "notice-notice",
};

// Set the active tab based on the current route
const setTabFromRoute = () => {
  const path = route.path as RoutePath;
  if (routeToTabMap[path]) {
    activeTab.value = routeToTabMap[path];
  } else {
    // Default to company intro if route doesn't match
    activeTab.value = "company-news";
  }
};

// Watch for route changes
watch(
  () => route.path,
  () => {
    setTabFromRoute();
  }
);

// Handle tab click to navigate to corresponding route
const handleTabClick = (tab: TabName) => {
  activeTab.value = tab;
};

// Set initial tab on component mount
onMounted(() => {
  setTabFromRoute();
});
</script>

<style lang="scss" scoped>
@use "../styles/mixins" as mixins;

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes zoomFadeIn {
  from {
    opacity: 0;
    transform: scale(1.08);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.page-banner {
  width: 100%;
  height: 486px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    animation: zoomFadeIn 1.5s ease-out both;
  }
  .banner-content {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    text-align: center;
    h1 {
      font-size: 60px;
      font-weight: 700;
      line-height: 1;
      animation: fadeInRight 0.5s ease-out 0.3s both;
    }
  }
}

// Navigation Tabs
.nav-tabs {
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #B9D2E4;
  .news-container {
    display: flex;
    justify-content: center;
  }
  .tab-item {
    padding: 20px 0;
    margin: 0 80px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    transition: color 0.3s;

    &.active {
      color: var(--primary-color);
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--primary-color);
      }
    }
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>

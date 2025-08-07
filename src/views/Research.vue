<template>
  <div class="page-banner">
      <img :src="researchBanner" alt="research-banner" />
      <div class="banner-content">
        <h1>{{ t("research.banner") }}</h1>
      </div>
    </div>
  <div :style="{ backgroundImage: `url(${researchBg})` }">
    <div class="nav-tabs">
      <div class="research-container">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'researchCenter' }"
          @click="handleTabClick('researchCenter')"
        >
          {{ t("research.researchCenter") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'smartAutomation' }"
          @click="handleTabClick('smartAutomation')"
        >
          {{ t("research.smartAutomation") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'qualityAssurance' }"
          @click="handleTabClick('qualityAssurance')"
        >
          {{ t("research.qualityAssurance") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'projectPerformance' }"
          @click="handleTabClick('projectPerformance')"
        >
          {{ t("research.projectPerformance") }}
        </div>
      </div>
    </div>

    <researchCenter v-show="activeTab === 'researchCenter'" />
    <smartAutomation v-show="activeTab === 'smartAutomation'" />
    <qualityAssurance v-show="activeTab === 'qualityAssurance'" />
    <projectPerformance v-show="activeTab === 'projectPerformance'" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import researchBg from "../assets/research-bg.png";
import researchBanner from "@/assets/research-banner.png";
import researchCenter from "../components/researchCenter.vue";
import smartAutomation from "../components/smartAutomation.vue";
import qualityAssurance from "../components/qualityAssurance.vue";
import projectPerformance from "../components/projectPerformance.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type TabName =
  | "researchCenter"
  | "smartAutomation"
  | "qualityAssurance"
  | "projectPerformance";
type RoutePath =
  | "/research/researchCenter"
  | "/research/smartAutomation"
  | "/research/qualityAssurance"
  | "/research/projectPerformance";

const activeTab = ref<TabName>("researchCenter");
const route = useRoute();

// Map routes to tab values
const routeToTabMap: Record<RoutePath, TabName> = {
  "/research/researchCenter": "researchCenter",
  "/research/smartAutomation": "smartAutomation",
  "/research/qualityAssurance": "qualityAssurance",
  "/research/projectPerformance": "projectPerformance",
};

// Set the active tab based on the current route
const setTabFromRoute = () => {
  const path = route.path as RoutePath;
  if (routeToTabMap[path]) {
    activeTab.value = routeToTabMap[path];
  } else {
    // Default to company intro if route doesn't match
    activeTab.value = "researchCenter";
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
    // animation: fadeInRight 1s ease-out;
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
  .research-container {
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

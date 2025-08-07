<template>
  <div class="about-page">
    <div class="page-banner">
      <img :src="aboutBanner" alt="about-banner" />
      <div class="banner-content">
        <h1>{{ t("aboutCompany.banner") }}</h1>
      </div>
    </div>
    <div
      :style="{
        backgroundImage: `url(${activeTab === 'development' ? aboutBg : mainBg})`,
      }"
    >
    <div class="nav-tabs">
      <div class="about-container">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'company-intro' }"
          @click="handleTabClick('company-intro')"
        >
          {{ t("aboutCompany.companyIntro") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'chairman-speech' }"
          @click="handleTabClick('chairman-speech')"
        >
          {{ t("aboutCompany.chairmanSpeech") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'company-culture' }"
          @click="handleTabClick('company-culture')"
        >
          {{ t("aboutCompany.corporateCulture") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'honors' }"
          @click="handleTabClick('honors')"
        >
          {{ t("aboutCompany.honorQualification") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'development' }"
          @click="handleTabClick('development')"
        >
          {{ t("aboutCompany.developmentProcess") }}
        </div>
      </div>
    </div>

    <CompanyIntro v-show="activeTab === 'company-intro'" />
    <ChairmanSpeech v-show="activeTab === 'chairman-speech'" />
    <CompanyCulture v-show="activeTab === 'company-culture'" />
    <CompanyHonors v-show="activeTab === 'honors'" />
    <CompanyDevelopment v-show="activeTab === 'development'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import mainBg from "../assets/main-bg.png";
import aboutBg from "../assets/about-bg.png";
import aboutBanner from "../assets/about-banner.png";
import CompanyIntro from "../components/CompanyIntro.vue";
import ChairmanSpeech from "../components/ChairmanSpeech.vue";
import CompanyCulture from "../components/CompanyCulture.vue";
import CompanyHonors from "../components/CompanyHonors.vue";
import CompanyDevelopment from "../components/CompanyDevelopment.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type TabName =
  | "company-intro"
  | "chairman-speech"
  | "company-culture"
  | "honors"
  | "development";
type RoutePath =
  | "/about/company"
  | "/about/chairman"
  | "/about/culture"
  | "/about/honors"
  | "/about/development";

const activeTab = ref<TabName>("company-intro");
const route = useRoute();
// const router = useRouter();

// Map routes to tab values
const routeToTabMap: Record<RoutePath, TabName> = {
  "/about/company": "company-intro",
  "/about/chairman": "chairman-speech",
  "/about/culture": "company-culture",
  "/about/honors": "honors",
  "/about/development": "development",
};

// Set the active tab based on the current route
const setTabFromRoute = () => {
  const path = route.path as RoutePath;
  if (routeToTabMap[path]) {
    activeTab.value = routeToTabMap[path];
  } else {
    // Default to company intro if route doesn't match
    activeTab.value = "company-intro";
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
    animation: fadeIn 0.5s ease-out 0.3s both;
    h1 {
      font-size: 60px;
      font-weight: 700;
      line-height: 1;
      animation: fadeInRight 0.8s ease-out 0.3s both;
    }
  }
}

.about-container {
  padding: 0 130px;
}

// Navigation Tabs
.nav-tabs {
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #b9d2e4;
  .about-container {
    display: flex;
    justify-content: center;
  }
  .tab-item {
    padding: 20px 0;
    margin: 0 80px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
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

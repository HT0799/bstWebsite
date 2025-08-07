<template>
  <div class="contact-page">
    <div class="page-banner">
      <img :src="contactBanner" alt="contact-banner" />
      <div class="banner-content">
        <h1>{{ t("contact.banner") }}</h1>
      </div>
    </div>
    <div
      :style="{
        backgroundImage: `url(${
          activeTab === 'service-support' ? mainBg : contactBg
        })`,
      }"
    >
    <div class="nav-tabs">
      <div class="contact-container">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'talent-concept' }"
          @click="handleTabClick('talent-concept')"
        >
          {{ t("contact.talentConcept") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'recruitment-info' }"
          @click="handleTabClick('recruitment-info')"
        >
          {{ t("contact.recruitmentInfo") }}
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'service-support' }"
          @click="handleTabClick('service-support')"
        >
          {{ t("contact.service") }}
        </div>
      </div>
    </div>

    <TalentConcept v-show="activeTab === 'talent-concept'" />
    <RecruitmentInfo v-show="activeTab === 'recruitment-info'" />
    <ServiceSupport v-show="activeTab === 'service-support'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import contactBg from "../assets/contact-bg.png";
import mainBg from "../assets/main-bg.png";
import contactBanner from "../assets/contact-banner.png";
import TalentConcept from "../components/TalentConcept.vue";
import RecruitmentInfo from "../components/RecruitmentInfo.vue";
import ServiceSupport from "../components/ServiceSupport.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

type TabName = "talent-concept" | "recruitment-info" | "service-support";
type RoutePath =
  | "/contact/talent-concept"
  | "/contact/recruitment-info"
  | "/contact/service-support";

const activeTab = ref<TabName>("talent-concept");
const route = useRoute();

// Map routes to tab values
const routeToTabMap: Record<RoutePath, TabName> = {
  "/contact/talent-concept": "talent-concept",
  "/contact/recruitment-info": "recruitment-info",
  "/contact/service-support": "service-support",
};

// Set the active tab based on the current route
const setTabFromRoute = () => {
  const path = route.path as RoutePath;
  if (routeToTabMap[path]) {
    activeTab.value = routeToTabMap[path];
  } else {
    // Default to company intro if route doesn't match
    activeTab.value = "talent-concept";
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

.contact-container {
  padding: 0 130px;
}

// Navigation Tabs
.nav-tabs {
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #b9d2e4;
  .contact-container {
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

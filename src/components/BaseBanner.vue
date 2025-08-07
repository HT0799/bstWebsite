<template>
  <div class="banner">
    <carousel
      :items-to-show="1"
      :autoplay="3000"
      :wrap-around="true"
      :transition="1000"
      :settings="{ itemsToShow: 1 }"
      :breakpoints="{ 768: { itemsToShow: 1 } }"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <div
          class="banner-slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="banner-content">
            <h1 class="banner-title animate-fade-in">{{ slide.title }}</h1>
            <p class="banner-subtitle animate-fade-in-delay">{{ slide.subtitle }}</p>
            <!-- <router-link
              v-if="slide.buttonText && slide.buttonLink"
              to=""
              class="banner-button btn"
            >
              <img
                src="/src/assets/arrow-left.png"
                alt="查看更多"
              />
              {{ slide.buttonText }}
            </router-link> -->
          </div>
        </div>
      </slide>
    </carousel>

    <div v-show="!hasScrolled" class="scroll-indicator">
      <div class="scroll-arrow bounce">
        <img src="../assets/arrow-down.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, onUnmounted } from "vue";

interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

defineProps<{
  slides: BannerSlide[];
}>();

const hasScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 10) {
    hasScrolled.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
@use "../styles/mixins" as mixins;
.banner {
  width: 100%;
  height: calc(100vh - 86px);
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
  }
}

.banner-slide {
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  height: calc(100vh - 86px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 80%;
  max-width: 1200px;
  z-index: 2;

  h1 {
    font-size: 60px;
    line-height: 1;
    margin-bottom: 32px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 700;
  }

  p {
    font-size: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
}

// 动画效果
.animate-fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 86px auto 0;
  background-color: #4268a8;
  border-radius: 10px;
  color: #fff;
  width: 180px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;

  img {
    width: 44px;
    height: 9px;
    margin-right: 15px;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}

.scroll-arrow {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    height: auto;
  }
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>

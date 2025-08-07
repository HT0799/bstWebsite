<template>
  <div class="enterprise-culture">
    <div class="about-container">
      <h2 class="about-section-title">
        {{ t("aboutCompany.corporate")
        }}<span>{{ t("aboutCompany.culture") }}</span>
      </h2>

      <!-- 企业文化概念图 -->
      <div class="culture-concept">
        <div class="culture-concept-top">
          <div class="concept-item">
            <h3>{{ t("aboutCompany.operationPhilosophy") }}</h3>
            <p>{{ t("aboutCompany.operationPhilosophyDes") }}</p>
          </div>

          <div class="concept-item">
            <h3>{{ t("aboutCompany.mission") }}</h3>
            <p>{{ t("aboutCompany.missionDes") }}</p>
          </div>

          <div class="concept-item">
            <h3>{{ t("aboutCompany.value") }}</h3>
            <p>{{ t("aboutCompany.valueDes") }}</p>
          </div>
        </div>
        <div class="culture-concept-bottom">
          <div class="concept-item bottom-item-left">
            <h3>{{ t("aboutCompany.basicPolicy") }}</h3>
            <p>{{ t("aboutCompany.basicPolicyDes") }}</p>
          </div>

          <div class="concept-item bottom-item-right">
            <h3>{{ t("aboutCompany.vision") }}</h3>
            <p>{{ t("aboutCompany.visionDes") }}</p>
          </div>
        </div>
      </div>

      <!-- 员工故事轮播 -->
      <div class="employee-stories">
        <h2 class="about-section-title">一起来了解百斯特人的<span>故事</span></h2>

        <div class="stories-carousel">
          <button class="carousel-btn prev-btn" @click="prevSlide">
            <img :src="circleArrowLeft" alt="Previous" />
          </button>

          <div class="carousel-container">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${currentSlide * (cardW+30)}px)` }"
            >
              <div
                class="story-card"
                v-for="(story, index) in employeeStories"
                :key="index"
              >
                <div class="story-image">
                  <img :src="playPlacehold" alt="Employee" />
                </div>
                <div class="story-info">
                  <div class="story-info-left">
                    <img :src="userTemp" alt="Employee" class="user-temp" />
                  <div class="employee-info">
                    <h4 class="employee-name">{{ story.name }}</h4>
                    <p class="employee-title">{{ story.title }}</p>
                  </div>
                  </div>
                  <div class="story-actions">
                    <img :src="playBlue" alt="Play" class="play-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-btn next-btn" @click="nextSlide">
            <img :src="circleArrowRight" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import playPlacehold from "../assets/play-placehold.png";
import circleArrowLeft from "../assets/circle-arrow-left.png";
import circleArrowRight from "../assets/circle-arrow-right.png";
import userTemp from "../assets/user-temp.png";
import playBlue from "../assets/play-blue.png";

import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

// 员工故事数据
const employeeStories = ref([
  { name: "王瑞旭", title: "前端工程师" },
  { name: "王瑞旭", title: "前端工程师" },
  { name: "王瑞旭", title: "前端工程师" },
  { name: "王瑞旭", title: "前端工程师" },
  { name: "王瑞旭", title: "前端工程师" },
  { name: "王瑞旭", title: "前端工程师" },
]);

const currentSlide = ref(0);
const cardW = ref(490*(window.innerWidth/1920));

// 监听窗口大小变化
window.addEventListener('resize', () => {
  cardW.value = 490*(window.innerWidth/1920);
});

// 计算可以显示的卡片数量
const visibleCards = ref(Math.floor((window.innerWidth - 260 - 80 - 60) / (490 + 30)));

// 监听窗口大小变化
window.addEventListener('resize', () => {
  cardW.value = 490*(window.innerWidth/1920);
  visibleCards.value = Math.floor((window.innerWidth - 260 - 80 - 60) / (490 + 30));
});

const nextSlide = () => {
  if (currentSlide.value < employeeStories.value.length - visibleCards.value) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};
</script>

<style lang="scss" scoped>
.about-container {
  padding: 0 96px 40px;
}

.about-section-title {
  font-size: 40px;
  font-weight: 700;
  position: relative;
  margin-top: 60px;
  margin-bottom: 80px;
  width: 100%;
  text-align: center;

  span {
    color: var(--primary-color);
  }
}

// 企业文化概念图样式
.culture-concept {
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
  width: 1556px;
  height: 769px;
  background-image: url("../assets/culture-info-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  .culture-concept-top {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 70px;
  }

  .culture-concept-bottom {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 40px;
  }

  .concept-item {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 40px;
      font-weight: 700;
      color: #333;
      line-height: 1;
      margin-bottom: 30px;
    }

    p {
      font-size: 24px;
      font-weight: 700;
      color: #898989;
      line-height: 36px;
      width: 340px;
      white-space: pre-line;
    }

    &.bottom-item-left {
      padding-left: 250px;
    }
    &.bottom-item-right {
      padding-right: 250px;
    }
  }
}

// 员工故事轮播样式
.employee-stories {
  margin-bottom: 80px;

  .stories-title {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    color: #333;
  }

  .stories-carousel {
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .carousel-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  .carousel-container {
    flex: 1;
    overflow: hidden;
    min-width: 0; /* 允许flex项目收缩 */
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease;
    gap: 30px;
  }

  .story-card {
    display: flex;
    flex-direction: column;
    width: v-bind(cardW + 'px');
    min-width: v-bind(cardW + 'px');
    height: 455px;
    flex-shrink: 0;
    background-color: #e4f2fd;
    border: 1px solid #b9d2e4;
    border-radius: 20px;

    .story-image {
      flex: 1;
      width: 100%;
      height: 325px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .story-info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px 0 38px;

      .story-info-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .user-temp {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
      .employee-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .employee-name {
        font-size: 20px;
        font-weight: 700;
        color: #000;
      }

      .employee-title {
        font-size: 14px;
        color: #41596B;
      }

      .story-actions {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 1px solid #B9D2E4;
        display: flex;
        align-items: center;
        justify-content: center;

        .play-icon {
          width: 13px;
          height: 20px;
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .about-container {
    padding: 0 20px;
  }

  .about-section-title {
    font-size: 28px;
  }

  .culture-concept {
    .concept-container {
      padding: 40px 20px;
    }

    .concept-item {
      position: static;
      margin-bottom: 20px;
      min-width: auto;
    }

    .connection-line {
      display: none;
    }
  }

  .employee-stories {
    .stories-title {
      font-size: 24px;
    }

    .stories-carousel {
      flex-direction: column;
      gap: 20px;
    }

    .carousel-container {
      width: 100%;
    }

    .story-card {
      flex: 0 0 100%;
    }
  }
}
</style>

<template>
  <div class="development">
    <div class="development-content">
      <div class="time-line"></div>
      <div class="timeline-container">
        <div class="timeline-years">
          <div
            v-for="(year) in years"
            :key="year"
            class="year-item"
            :class="{ active: activeYear === year }"
            @click="selectYear(year)"
          >
            <div class="year-dot" v-if="activeYear === year">
              <div class="year-dot-inner"></div>
            </div>
            <div class="year-text" :class="{ active: activeYear === year }">
              {{ year }}
            </div>
          </div>
        </div>

        <div class="timeline-events">
          <div class="big-year">
            <div class="big-year-first">
              {{ String(activeYear).slice(0, 2) }}
            </div>
            <div class="big-year-second">
              {{ String(activeYear).slice(2, 4) }}
            </div>
          </div>

          <div class="timeline-events-content">
            <h3 class="timeline-title">{{ t("aboutCompany.developmentProcess") }}</h3>
            <div class="dotted-line"></div>
            <ul class="events-list">
              <li
                v-for="(event, index) in eventsForActiveYear"
                :key="`${activeYear}-${index}`"
                class="event-item"
                :style="{ 
                  animationDelay: `${index * 0.1}s`
                }"
              >
                {{ event }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const years = [
  2024, 2022, 2021, 2020, 2018, 2017, 2016, 2014, 2011, 2008, 2007,
];
const activeYear = ref(2024);

// Define a type for the events data
interface EventsDataType {
  [key: number]: string[];
}

// 示例数据，实际使用时可以替换为真实数据
const eventsData: EventsDataType = {
  2024: [
    "获评国家级高新技术企业",
    "成功上市融资50亿元",
    "国内首条1000kV超高压电瓷产品生产线投产",
  ],
  2022: ["江西省专精特新中小企业认定"],
  2021: ["成立海外销售部门", "年产能达到500万片"],
  2020: ["新厂区落成投产", "特高压氧化铝圆柱头绝缘子自动化生产线投资2.06亿元"],
  2018: ["获得省级科技进步奖"],
  2017: ["产品通过国家电网认证", "建设第二条生产线"],
  2016: ["产品出口到欧洲市场"],
  2014: ["成立技术研发中心"],
  2011: ["获得首项发明专利"],
  2008: ["第一条生产线投产"],
  2007: ["萍乡百斯特电瓷有限公司成立"],
};

const selectYear = async (year: number) => {
  if (activeYear.value === year) return;
  
  activeYear.value = year;
  
  // 等待DOM更新后添加动画类
  await nextTick();
  const eventsList = document.querySelector('.events-list');
  if (eventsList) {
    eventsList.classList.add('events-updating');
    setTimeout(() => {
      eventsList.classList.remove('events-updating');
    }, 400);
  }
};

const eventsForActiveYear = computed(() => {
  return eventsData[activeYear.value] || [];
});

onMounted(() => {
  // 初始化动画
  setTimeout(() => {
    const yearItems = document.querySelectorAll('.year-item');
    yearItems.forEach((item) => {
      (item as HTMLElement).style.transition = 'all 0.3s ease';
    });
  }, 100);
});
</script>

<style lang="scss" scoped>
.development {
  padding: 0 130px;
  width: 100%;
  min-height: 800px;
  background-image: linear-gradient(to bottom, #ebf5fe, #e4f2fd);
  display: flex;
  position: relative;
  overflow: hidden;

  .development-content {
    min-height: 600px;
    display: flex;
    position: relative;
    z-index: 1;
    
    .time-line {
      position: absolute;
      top: 0;
      left: 78px;
      width: 2px;
      height: 100%;
      background: linear-gradient(to bottom, #b9d2e4, var(--primary-color));
      z-index: 1;
      border-radius: 1px;
      
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -2px;
        width: 6px;
        height: 6px;
        background: var(--primary-color);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}

.timeline-container {
  display: flex;
  position: relative;
  margin-left: 56px;
  margin-top: 216px;
  margin-bottom: 100px;
  z-index: 2;
}

.timeline-years {
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
}

.year-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    .year-text {
      color: var(--primary-color);
      transform: scale(1.05);
    }
  }

  .year-dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66, 104, 168, 0.3), rgba(66, 104, 168, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    animation: dotAppear 0.4s ease-out;
    box-shadow: 0 0 20px rgba(66, 104, 168, 0.3);

    .year-dot-inner {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--primary-color), #2c8bed);
      animation: innerPulse 2s infinite;
    }
  }

  .year-text {
    padding-top: 2px;
    font-size: 40px;
    line-height: 1;
    color: #7c8a96;
    transition: all 0.3s ease;
    font-weight: 500;
    margin-left: 78px;
    position: relative;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }
  }

  &.active {
    .year-text {
      color: #2c8bed;
      text-shadow: 0 0 10px rgba(44, 139, 237, 0.3);
      
      &::after {
        width: 100%;
      }
    }
  }
}

@keyframes dotAppear {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes innerPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.timeline-events {
  flex: 1;
  display: flex;
  padding-left: 128px;
  position: relative;
}

.big-year {
  display: flex;
  flex-direction: column;
  position: relative;

  .big-year-first,
  .big-year-second {
    font-size: 244px;
    font-weight: 700;
    color: #fff;
    line-height: 0.8;
    transition: all 0.4s ease;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }

  .big-year-second {
    margin-top: 96px;
    margin-left: 135px;
    color: var(--primary-color);
    text-shadow: 0 0 30px rgba(44, 139, 237, 0.5);
    animation: yearSlide 0.6s ease-out;
  }
}

@keyframes yearSlide {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.timeline-events-content {
  flex: 1;
  margin-left: 95px;
  display: flex;
  flex-direction: column;

  .timeline-title {
    font-size: 50px;
    color: var(--primary-color);
    font-weight: 700;
    line-height: 1;
    animation: titleFadeIn 0.6s ease-out;
  }

  .dotted-line {
    width: 800px;
    height: 1px;
    border-bottom: 2px dashed #b9d2e4;
    margin-top: 40px;
    animation: lineExtend 0.8s ease-out;
  }

  .events-list {
    margin-top: 72px;
    list-style-type: none;
    transition: all 0.4s ease;
    
    &.events-updating {
      opacity: 0.5;
      transform: translateY(10px);
    }
  }

  .event-item {
    position: relative;
    padding-left: 54px;
    font-size: 30px;
    font-weight: 700;
    color: #333;
    line-height: 2;
    margin-bottom: 50px;
    transition: all 0.3s ease;
    animation: eventSlideIn 0.4s ease-out forwards;
    opacity: 0;

    &:hover {
      transform: translateX(5px);
      color: var(--primary-color);
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 20px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--primary-color), #2c8bed);
      transition: all 0.3s ease;
      box-shadow: 0 0 10px rgba(44, 139, 237, 0.5);
    }
    
    &:hover::before {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(44, 139, 237, 0.7);
    }
  }
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineExtend {
  from {
    width: 0;
  }
  to {
    width: 800px;
  }
}

@keyframes eventSlideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .development {
    padding: 0 50px;
  }
  
  .timeline-events-content .dotted-line {
    width: 600px;
  }
}

@media (max-width: 768px) {
  .development {
    padding: 0 20px;
  }
  
  .timeline-container {
    flex-direction: column;
    margin-left: 20px;
  }
  
  .timeline-years {
    flex-direction: row;
    overflow-x: auto;
    gap: 20px;
    padding-bottom: 20px;
  }
  
  .timeline-events {
    padding-left: 20px;
  }
  
  .big-year .big-year-first,
  .big-year .big-year-second {
    font-size: 120px;
  }
  
  .timeline-events-content .timeline-title {
    font-size: 30px;
  }
  
  .timeline-events-content .event-item {
    font-size: 20px;
  }
}
</style>

<template>
  <div class="talent-concept">
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 标题 -->
      <div class="section-normal-title">{{ t("contact.talent") }}<span>{{ t("contact.concept") }}</span></div>
      
      <!-- 描述文本 -->
      <div class="description">
        <p>{{ t("contact.talentInfo") }}</p>
      </div>

      <!-- 中央图片 -->
      <div class="center-image">
        <img :src="talentConceptBanner" alt="talent-concept-banner" />
      </div>

      <!-- 四个信息框 -->
      <div class="info-boxes">
        <div class="info-box">
          <div class="box-icon">
            <img :src="talentConceptIcon1" alt="talent-concept-icon" />
          </div>
          <h3 class="box-title">{{ t("contact.workEnvironment") }}</h3>
          <p class="box-text">{{ t("contact.workEnvironmentInfo") }}</p>
        </div>

        <div class="info-box">
          <div class="box-icon">
            <img :src="talentConceptIcon2" alt="talent-concept-icon" />
          </div>
          <h3 class="box-title">{{ t("contact.workEnvironment2") }}</h3>
          <p class="box-text">{{ t("contact.workEnvironmentInfo2") }}</p>
        </div>

        <div class="info-box">
          <div class="box-icon">
            <img :src="talentConceptIcon3" alt="talent-concept-icon" />
          </div>
          <h3 class="box-title">{{ t("contact.workEnvironment3") }}</h3>
          <p class="box-text">{{ t("contact.workEnvironmentInfo3") }}</p>
        </div>

        <div class="info-box">
          <div class="box-icon">
            <img :src="talentConceptIcon4" alt="talent-concept-icon" />
          </div>
          <h3 class="box-title">{{ t("contact.workEnvironment4") }}</h3>
          <p class="box-text">{{ t("contact.workEnvironmentInfo4") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import talentConceptBanner from '../assets/talent-concept-banner.png';
import talentConceptIcon1 from '../assets/talent-concept-icon01.png';
import talentConceptIcon2 from '../assets/talent-concept-icon02.png';
import talentConceptIcon3 from '../assets/talent-concept-icon03.png';
import talentConceptIcon4 from '../assets/talent-concept-icon04.png';
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<style scoped>
.talent-concept {
  padding: 0 130px 60px;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
}

/* 主内容区域 */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.description {
  max-width: 900px;
  margin: 30px auto;
  line-height: 1.8;
  color: #000;
  font-size: 18px;
  text-align: center;
  /* background: rgba(255, 255, 255, 0.8);
  padding: 25px 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px); */
}

/* 中央图片优化 */
.center-image {
  margin: 10px 0;
  width: 100%;
  max-width: 800px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
}

/* 信息框样式优化 */
.info-boxes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;
  width: 100%;
}

.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(198, 216, 229, 0.3);
  position: relative;
  overflow: hidden;
  min-height: 280px;
}

.info-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4CAF50, #2196F3, #FF9800, #9C27B0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  border-color: rgba(198, 216, 229, 0.6);
}

.info-box:hover::before {
  opacity: 1;
}

.box-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.2);
  
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
}

.box-title {
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
  position: relative;
}

.box-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #4CAF50, #2196F3);
  border-radius: 1px;
}

.box-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #5a6c7d;
  text-align: left;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .talent-concept {
    padding: 0 80px 50px;
  }
  
  .info-boxes {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .talent-concept {
    padding: 0 40px 40px;
  }
  
  .main-content {
    margin-top: 30px;
  }
  
  .description {
    font-size: 16px;
    padding: 20px 25px;
    margin: 20px auto;
  }
  
  .center-image {
    height: 200px;
    margin: 25px 0;
  }
  
  .info-boxes {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .info-box {
    min-height: 220px;
    padding: 25px 15px;
  }
  
  .box-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    
    img {
      width: 35px;
      height: 35px;
    }
  }
  
  .box-title {
    font-size: 20px;
  }
  
  .box-text {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .talent-concept {
    padding: 0 20px 30px;
  }
  
  .description {
    font-size: 14px;
    padding: 15px 20px;
  }
  
  .center-image {
    height: 150px;
  }
  
  .info-box {
    padding: 20px 15px;
    min-height: 200px;
  }
}
</style>
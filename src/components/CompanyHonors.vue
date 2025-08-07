<template>
  <div class="honors">
    <div class="about-container">
      <h2 class="about-section-title">{{ t("aboutCompany.honor") }}<span>{{ t("aboutCompany.qualification") }}</span></h2>
      <div class="honors-content">
        <div class="cert-grid">
          <div v-for="(cert, index) in certifications" :key="index" class="cert-card">
            <div class="cert-image">
              <img :src="cert.image" :alt="cert.name" />
            </div>
            <div class="cert-info">
              <h3>{{ cert.name }}</h3>
              <p>{{ cert.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const certifications = [
  {
    name: "江西省专精特新中小企业",
    image: cert1,
    date: "2024年8月",
  },
  {
    name: "国家级绿色工厂",
    image: cert3,
    date: "2023年12月",
  },
  {
    name: "国家高新技术企业",
    image: cert6,
    date: "2019年",
  },
  {
    name: "EPTC绝缘子专家工作委员会",
    image: cert2,
    date: "2024年03月",
  },
  
  {
    name: "质量管理体系认证 英文版",
    image: cert5,
    date: "2024年08月",
  },
  {
    name: "质量管理体系认证",
    image: cert4,
    date: "2024年08月",
  },
];
</script>

<style lang="scss" scoped>
.about-container {
  padding: 0 130px;
}

.about-section-title {
  font-size: 40px;
  font-weight: 700;
  position: relative;
  margin-top: 60px;
  width: 100%;
  text-align: center;
  
  span {
    color: var(--primary-color);
  }
}

.honors {
  padding-bottom: 20px;

  .honors-content {
    margin-top: 80px;
  }
  
  .cert-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 44px;
    margin-bottom: 60px;
  }
  
  .cert-card {
    width: 523px;
    margin-bottom: 36px;
    
    .cert-image {
      width: 100%;
      height: 354px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
    
    .cert-info {
      margin-top: 44px;
      font-family: SourceHanSansCN, SourceHanSansCN;
      h3 {
        font-size: 22px;
        font-weight: 500;
        line-height: 1;
        color: #333;
        margin-bottom: 25px;
      }
      
      p {
        font-size: 18px;
        line-height: 1;
        color: #333;
      }
    }
  }
}
</style> 
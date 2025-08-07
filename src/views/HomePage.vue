<template>
  <div class="home-page">
    <!-- Banner Section -->
    <BaseBanner :slides="bannerSlides" />

    <div :style="{ backgroundImage: `url(${mainBg})` }">
      <section class="section about-section">
        <div>
          <div class="about-title animate-on-scroll">
            <span class="about-title-1">{{ t("home.about") }}</span><span>{{ t("home.bst") }}</span>
          </div>
          <div class="about-content">
            <div class="about-text animate-on-scroll">
              <p v-html="aboutContent"></p>
              <div class="about-stats">
                <div class="stat-item animate-number" data-target="2007">
                  <div class="stat-value">
                    <span class="counter">0</span><span class="stat-unit">年</span>
                  </div>
                  <div class="stat-label">成立于</div>
                </div>
                <div class="stat-item animate-number" data-target="3.6">
                  <div class="stat-value">
                    <span class="counter">0</span><span class="stat-unit">亿</span><span class="stat-unit">元</span>
                  </div>
                  <div class="stat-label">注册资金</div>
                </div>
                <div class="stat-item animate-number" data-target="42">
                  <div class="stat-value">
                    <span class="counter">0</span><span class="stat-unit">项</span>
                  </div>
                  <div class="stat-label">发明专利</div>
                </div>
              </div>
              <BaseLink :to="'/about'" class="more-btn btn hover-effect">
                <img
                  :src="arrowLeft"
                  alt="查看更多"
                />
                {{ t("common.viewMore") }}
              </BaseLink>
            </div>
            <div class="about-image animate-on-scroll">
              <el-image
                class="about-img"
                :src="companyBuilding"
                alt="百斯特公司大楼"
                fit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section products-section">
        <div>
          <div class="section-title animate-on-scroll">
            <span class="title-1">{{ t("home.products") }}</span>
            <span>{{ t("home.show") }}</span>
          </div>
          <div class="product-info animate-on-scroll">
            <p v-html="productInfo"></p>
          </div>
          <div class="products-grid">
            <el-row :gutter="20">
              <el-col
                :xs="24"
                :sm="12"
                :md="6"
                v-for="(product, index) in products"
                :key="product.id"
                class="product-col animate-on-scroll"
                :style="{ animationDelay: `${index * 0.2}s` }"
              >
                <div class="product-card hover-effect">
                  <img :src="product.image" alt="product" />
                  <div class="product-name">{{ product.name }}</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <BaseLink
            :to="'/products'"
            class="more-btn btn hover-effect animate-on-scroll"
            style="margin: 0 auto"
          >
            <img :src="arrowLeft" alt="查看更多" />
            {{ t("common.viewMore") }}
          </BaseLink>
        </div>
      </section>


      <section class="section news-section">
        <div>
          <div class="section-title animate-on-scroll">
            <span class="title-1">{{ t("home.news") }}</span>
            <span>{{ t("home.trends") }}</span>
          </div>
          <div class="news-grid">
            <el-row :gutter="20">
              <el-col
                :xs="24"
                :sm="12"
                :md="8"
                v-for="(news, index) in latestNews"
                :key="news.id"
                class="news-col animate-on-scroll"
                :style="{ animationDelay: `${index * 0.2}s` }"
              >
                <div class="news-item hover-effect">
                  <div class="news-title">{{ news.title }}</div>
                  <div class="news-date-container">
                    <div class="news-date">
                      {{ news.date.substring(5, 10).replace("-", "/") }}
                    </div>
                    <div class="news-year">{{ news.date.substring(0, 4) }}</div>
                  </div>
                  <div class="news-excerpt">{{ news.excerpt }}</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <BaseLink :to="'/news'" class="news-more-btn btn hover-effect animate-on-scroll" style="margin: 0 auto">
            <img :src="arrowLeftBlue" alt="查看更多" />
            {{ t("common.viewMore") }}
          </BaseLink>
        </div>
      </section>

      <!-- Qualifications Section -->
      <section class="section qualifications-section">
        <div>
          <div class="about-title animate-on-scroll">
            <span class="about-title-1">{{ t("home.qualification") }}</span>
            <span>{{ t("home.honor") }}</span>
          </div>
          <div class="qualifications-carousel animate-on-scroll">
            <div class="certificates-showcase">
              <div class="certificates-track" ref="certTrack">
                <div 
                  v-for="(cert, index) in certifications" 
                  :key="index" 
                  class="certificate-item"
                  :class="{ 'active': currentCertIndex === index }"
                >
                  <div class="certificate-frame">
                    <img :src="cert.image" :alt="cert.name" class="certificate-image" />
                  </div>
                  <div class="certificate-reflection">
                    <img :src="cert.image" :alt="cert.name" class="certificate-image reflection" />
                  </div>
                </div>
              </div>
            </div>
            <div class="certificate-controls">
              <img :src="arrowButtonLeft" alt="上一个" class="control-arrow left hover-effect" @click="prevCert" />
              <div class="certificate-title">{{ certifications[currentCertIndex].name }}</div>
              <img :src="arrowButtonRight" alt="下一个" class="control-arrow right hover-effect" @click="nextCert" />
            </div>
          </div>
          <div class="view-more animate-on-scroll">
            <BaseLink :to="'/qualifications'" class="btn hover-effect">{{ t("common.viewMore") }}</BaseLink>
          </div>
        </div>
      </section>

      <!-- Partners Section -->
      <section class="section partners-section">
        <div>
          <div class="about-title animate-on-scroll">
            <span class="about-title-1">{{ t("home.cooperation") }}</span>
            <span>{{ t("home.partner") }}</span>
          </div>
          <div class="partners-grid">
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="partner-item animate-on-scroll hover-effect"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <el-image
                :src="partner.logo"
                fit="contain"
                class="partner-logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseBanner from "../components/BaseBanner.vue";
import BaseLink from "../components/BaseLink.vue";
import bannerImage from "../assets/banner1.png";
import companyBuilding from "../assets/company-building.png";
import mainBg from "../assets/main-bg.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowLeftBlue from "../assets/arrow-left-blue.png";
import arrowButtonLeft from "../assets/arrow-button-left.png";
import arrowButtonRight from "../assets/arrow-button-right.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";
import partner8 from "../assets/partner8.png";
import partner9 from "../assets/partner9.png";
import partner10 from "../assets/partner10.png";
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Banner slides data
const bannerSlides = [
  {
    image: bannerImage,
    title: "为全球电力提供安全免检零值的瓷绝缘子",
    subtitle:
      "To provide safe, zero-value, maintenance-free porcelain insulators for global power.",
    buttonText: "查看更多",
    buttonLink: "/about",
  },
];

const aboutContent = `
  萍乡百斯特电瓷有限公司成立于2007年，位于江西省萍乡市安源工业园，注册资金3.6亿元。公司专注于电力电网建设与发展，是全球领先的输变电绝缘子制造商及国家经高新技术企业。公司一直致力于通过创新解决方案，引领市场变革和提高产品品质来推动行业可持续发展，连续5年内位居中国电器工业协会绝缘子避雷器分会认定的绝缘子行业五强企业之一也是全球最大的瓷绝缘子研发生产基地之一。公司已成为国家电网...
`;

const productInfo =
  "百斯特产品丰富多样，覆盖多种类型绝缘子，如盘形悬式瓷绝缘子等，满足不同场景需求。其产品质量上乘，严格把控生产流程，选用优质材料，确保每件产品具备优良性能和可靠品质，\n为电力设备稳定运行提供有力保障，是值得信赖的优质选择。";

// Products data
const products = [
  {
    id: 1,
    name: "交流盘形悬式瓷绝缘子",
    image: product1,
  },
  {
    id: 3,
    name: "线路柱式瓷绝缘子",
    image: product3,
  },
  {
    id: 4,
    name: "针式绝缘子",
    image: product4,
  },
  {
    id: 2,
    name: "蝶式绝缘子",
    image: product2,
  },
];

// News data
const latestNews = [
  {
    id: 1,
    title: "国网江西电科院党委书记卢志学一行莅临公司考察调研",
    date: "2023-03-27",
    excerpt:
      "2025年3月12日，国网江西电科院党委书记卢志学一行领导莅临公司调研企业发展情况；市工信局党组成员、副局长李再道等市领导陪同调研，公司行政副总高总全程接待。",
  },
  {
    id: 2,
    title: "百斯特2月生日会|温情满满 共许心愿",
    date: "2023-02-28",
    excerpt:
      "一岁一礼，心生欢喜。在这个充满爱与关怀的日子里，萍乡百斯特电瓷有限公司迎来2025年首场温馨的员工集体生日会。这场盛会不仅是对寿星们的美好祝福，更是秉持百斯特“以人为本”的企业文化生动演绎。",
  },
  {
    id: 3,
    title: "萍乡百斯特电瓷有限公司慰问富田村困难党员、群众",
    date: "2023-02-13",
    excerpt:
      "寒冬送温暖，关怀暖人心。新春佳节来临之际，1月23日，萍乡百斯特电瓷有限公司副总经理高本良、轮值副总王珍芝携党员干部走访慰问富田村困难党员和困难群众，为其送去公司的关怀与温暖，并致以诚挚的新春问候与祝福。",
  },
];

// Certifications data
const certifications = [
  {
    name: "江西省专精特新中小企业",
    image: cert1,
  },
  {
    name: "EPTC绝缘子专家工作委员会",
    image: cert2,
  },
  {
    name: "国家级绿色工厂",
    image: cert3,
  },
  {
    name: "质量管理体系认证",
    image: cert4,
  },
  {
    name: "质量管理体系认证 英文版",
    image: cert5,
  },
];

// 轮播控制
const currentCertIndex = ref(2); // 默认显示第3张图片
const certTrack = ref<HTMLElement | null>(null);

const nextCert = () => {
  if (currentCertIndex.value < certifications.length - 1) {
    currentCertIndex.value++;
  } else {
    currentCertIndex.value = 0;
  }
  updateCertPosition();
};

const prevCert = () => {
  if (currentCertIndex.value > 0) {
    currentCertIndex.value--;
  } else {
    currentCertIndex.value = certifications.length - 1;
  }
  updateCertPosition();
};

const updateCertPosition = () => {
  if (certTrack.value) {
    // 获取容器宽度
    const containerWidth = document.querySelector('.certificates-showcase')?.clientWidth || 0;
    
    // 证书基础宽度
    const certBaseWidth = 275*(window.innerWidth/1920);
    // 证书之间的间距
    const certGap = 70*(window.innerWidth/1920); // 增加间距，考虑到margin: 0 70px
    
    // 计算轨道需要平移的距离，使当前活动的证书居中
    const trackElement = certTrack.value;
    
    // 找到所有证书项元素
    const certItems = document.querySelectorAll('.certificate-item');
    
    // 首先将所有证书添加到轨道中并应用适当的类
    certItems.forEach((item, index) => {
      // 添加/移除活动类
      if (index === currentCertIndex.value) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // 计算轨道的偏移量，使活动证书居中
    
    // 单个证书占用的总宽度(包括间距)
    const itemTotalWidth = certBaseWidth + certGap;
    
    // 计算需要的偏移量：
    // 1. 首先找到中心位置
    const centerPosition = containerWidth / 2;
    // 2. 计算当前活动证书在轨道中的位置（考虑到每个证书的宽度和间距）
    const activeItemPosition = currentCertIndex.value * itemTotalWidth + certBaseWidth / 2;
    // 3. 偏移量 = 中心位置 - 活动项位置
    const trackOffset = centerPosition - activeItemPosition;
    
    // 应用轨道偏移
    trackElement.style.transform = `translateX(${trackOffset}px)`;
    
    // 更新证书标题显示
    const titleElement = document.querySelector('.certificate-title');
    if (titleElement) {
      titleElement.textContent = certifications[currentCertIndex.value].name;
    }
  }
};

// 组件挂载后设置初始位置并监听窗口大小变化
onMounted(() => {
  updateCertPosition();
  
  // 监听窗口大小变化，重新计算证书位置
  window.addEventListener('resize', updateCertPosition);
  
  // 初始化滚动动画
  initScrollAnimations();
  
  // 初始化数字计数动画
  initNumberAnimations();
});

// 组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener('resize', updateCertPosition);
});

// 初始化滚动动画
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
};

// 初始化数字计数动画
const initNumberAnimations = () => {
  const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const targetValue = parseFloat(target.dataset.target || '0');
        const counterElement = target.querySelector('.counter') as HTMLElement;
        
        if (counterElement) {
          animateNumber(counterElement, targetValue);
        }
        
        numberObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  const numberElements = document.querySelectorAll('.animate-number');
  numberElements.forEach(el => numberObserver.observe(el));
};

// 数字计数动画函数
const animateNumber = (element: HTMLElement, target: number) => {
  const duration = 2000; // 2秒
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (target === Math.floor(target)) {
      element.textContent = Math.floor(current).toString();
    } else {
      element.textContent = current.toFixed(1);
    }
  }, 16);
};

// Partners data
const partners = [
  { logo: partner1 },
  { logo: partner2 },
  { logo: partner3 },
  { logo: partner4 },
  { logo: partner5 },
  { logo: partner6 },
  { logo: partner7 },
  { logo: partner8 },
  { logo: partner9 },
  { logo: partner10 },
];
</script>

<style lang="scss" scoped>
@use "../styles/mixins" as mixins;

// 动画基础样式
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
}

// 悬停效果
.hover-effect {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.about-section {
  padding-left: 130px;
  padding-top: 110px;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 50px;
  .title-1 {
    color: #333;
  }

  &::after {
    content: "";
    display: block;
    width: 445px;
    height: 1px;
    margin: 35px auto 0;
    background-color: #b2b2b2;
    opacity: 0.4;
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    display: block;
    width: 127px;
    height: 3px;
    background-color: var(--primary-color);
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
}

.about-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 40px;
  .about-title-1 {
    color: #333;
  }
}

.about-content {
  display: flex;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 110px;

  .about-text {
    width: 717px;
    padding-right: 32px;
    z-index: 2;
    margin-top: 30px;

    p {
      font-family: SourceHanSansCN, SourceHanSansCN;
      font-weight: 500;
      font-size: 16px;
      color: #000000;
      line-height: 36px;
      font-style: normal;
      text-transform: none;
    }

  }

  .about-image {
    // flex: 0 0 63%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    .about-img {
      width: 1028px;
    }

  }

  .about-stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 86px;
    margin-bottom: 106px; 
    z-index: 2;

    .stat-item {
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      .stat-value {
        font-size: 40px;
        font-family: DINPro;
        font-weight: 700;
        color: #000;
        line-height: 1;

        .stat-unit {
          font-size: 16px;
          font-family: MicrosoftYaHei;
        }
      }

      .stat-label {
        margin-top: 20px;
        color: #000;
        font-size: 19px;
        font-weight: 700;
        line-height: 1;
      }
    }
  }

}

.more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 10px;
  color: #fff;
  width: 180px;
  height: 60px;
  font-size: 16px;
  font-weight: 700;

  img {
    width: 44px;
    height: 9px;
    margin-right: 15px;
  }
}

.products-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 136px;

  .product-info {
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 36px;
    font-style: normal;
    text-transform: none;
    width: 1328px;
    text-align: center;
    margin: 0 auto;
  }

  .products-grid {
    margin-top: 40px;
    padding: 0 130px;
    margin-bottom: 100px;
  }

  .product-card {
    padding: 20px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
  }

  .product-name {
    font-size: 26px;
    font-weight: 700;
    line-height: 1;
    color: #000000;
    margin-top: 30px;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: "";
      width: 32px;
      height: 6px;
      background-color: var(--primary-color);
      display: inline-block;
    }

    &::before {
      margin-right: 16px;
    }

    &::after {
      margin-left: 16px;
    }
  }
}

.news-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 170px;
  margin-bottom: 94px;

  .news-more-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    color: var(--primary-color);
    width: 181px;
    height: 60px;
    font-size: 16px;
    font-weight: 700;

    img {
      width: 44px;
      height: 9px;
      margin-right: 15px;
    }
  }
  .news-grid {
    width: 100%;
    margin-bottom: 50px;
    margin-top: 52px;
  }

  .news-item {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
  }

  .news-title {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 36px;
    width: 428px;
    height: 72px;
    margin-bottom: 30px;
  }

  .news-date-container {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
  }

  .news-date {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);
    font-family: DINPro, sans-serif;
    line-height: 1;
    margin-right: 10px;
  }

  .news-year {
    font-size: 14px;
    color: #999;
    font-family: DINPro, sans-serif;
  }

  .news-excerpt {
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-size: 14px;
    font-weight: 500;
    color: #999999;
    line-height: 36px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.qualifications-section {
  padding: 0 130px;
  margin-bottom: 148px;

  .qualifications-carousel {
    margin-top: 40px;
    width: 100%;
    overflow: hidden;
  }

  .certificates-showcase {
    width: 100%;
    position: relative;
    height: 578px;
    overflow: hidden;
    background-color: transparent;
  }

  .certificates-track {
    position: absolute;
    height: 100%;
    width: fit-content; /* 轨道宽度自适应内容 */
    display: flex;
    align-items: center;
    transition: transform 0.5s ease;
    left: 0;
    top: 0;
  }

  .certificate-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    padding: 0 100px;
  }

  .control-arrow {
    width: 112px;
    height: 112px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.left {
      transform: rotate(0);
    }
    
    &.right {
      transform: rotate(0);
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }

  .certificate-item {
    width: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 35px;
    transition: all 0.5s ease;
    transform-origin: center center;
    
    &.active {
      z-index: 10; /* 活动证书在最上层 */
      transform: scale(1.5);
      margin-left: 70px;
      margin-right: 105px;
    }
    
    &:not(.active) {
      z-index: 5;
      transform: scale(1);
    }
  }

  .certificate-frame {
    width: 100%;
    height: 187px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .certificate-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .certificate-reflection {
    width: 100%;
    height: 187px;
    margin-top: 0; // 倒影紧贴正图
    overflow: hidden;
  }

  .reflection {
    width: 100%;
    height: 187px; // 与正图高度保持一致
    transform: rotateX(180deg);
    opacity: 0.24;
  }

  .certificate-title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    width: 380px;
  }
}

.partners-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 98px 120px;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 90px;
  gap: 38px;

  .partner-item {
    width: 246px;
    height: 126px;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 8px 20px rgba(66, 104, 168, 0.3);
    }

    .partner-logo {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

// 响应式动画调整
@media (max-width: 768px) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    
    &.animate-in {
      transform: none;
    }
  }
}
</style>


<template>
  <div class="product-detail-page">
    <!-- Same banner as product page -->
    <div class="page-banner">
      <img :src="productBanner" alt="product-banner" />
      <div class="banner-content">
        <h1>成为全球一流具有核心竞争力的百年企业</h1>
      </div>
    </div>

    <div class="content-wrapper" :style="{ backgroundImage: `url(${productBg})` }">
      <!-- Breadcrumb navigation -->
      <div class="breadcrumb-container">
        <div class="breadcrumb">
          <router-link to="/products">{{ t("products.title") }}</router-link>
          <span class="separator">/</span>
          <router-link :to="`/products?category=${categoryId}`">{{ categoryName }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ product.name }}</span>
        </div>
        <!-- <router-link to="/products" class="back-button">
          <img :src="arrowLeft" alt="Back" class="back-icon" />
          {{ t("productDetail.backToProducts") }}
        </router-link> -->
      </div>

      <div class="detail-container">
        <div class="product-gallery">
          <!-- Main large image -->
          <div class="main-image-container">
            <img :src="currentImage" alt="Product" class="main-image" />
          </div>
          
          <!-- Thumbnail carousel -->
          <div class="thumbnail-carousel">
            <div class="carousel-nav prev" @click="prevImage" :disabled="currentImageIndex === 0">
              <img :src="arrowLeft" alt="Previous" />
            </div>
            
            <div class="thumbnails">
              <div 
                v-for="(image, index) in productImages" 
                :key="index" 
                class="thumbnail-wrapper"
                :class="{ active: currentImageIndex === index }"
                @click="selectImage(index)"
              >
                <img :src="image" alt="Product thumbnail" class="thumbnail" />
              </div>
            </div>
            
            <div class="carousel-nav next" @click="nextImage" :disabled="currentImageIndex === productImages.length - 1">
              <img :src="arrowRight" alt="Next" />
            </div>
          </div>
        </div>

        <div class="product-info">
          <h2 class="product-title">{{ product.name }}</h2>
          
          <div class="product-description">
            <h3>{{ t("productDetail.description") }}</h3>
            <p>{{ product.description }}</p>
          </div>
          
          <div class="product-specs">
            <h3>{{ t("productDetail.specifications") }}</h3>
            <div class="specs-table">
              <div v-for="(spec, index) in product.specifications" :key="index" class="spec-row">
                <div class="spec-name">{{ spec.name }}</div>
                <div class="spec-value">{{ spec.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

// Import assets
import productBanner from "../assets/product-banner.png";
import productBg from "../assets/product-bg.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import arrowLeft from "../assets/arrow-button-left.png";
import arrowRight from "../assets/arrow-button-right.png";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

// Product data - in real application this would come from an API
const productId = computed(() => route.params.id as string);
const categoryId = computed(() => route.query.category as string);

// Mock product data - in real app this would be fetched based on productId
const product = ref({
  id: productId.value,
  name: "直流盘形悬式瓷绝缘子",
  description: "直流盘形悬式瓷绝缘子可应用于不同电压等级的输电线路，通常采用优质瓷材料或复合材料制作，主要由帽式金属部件、绝缘体和销钉组成。钟形设计可增强耐污能力，防止电弧放电。本产品采用先进生产工艺与检测设备，确保产品质量。",
  specifications: [
    { name: "额定电压", value: "10-500kV" },
    { name: "材质", value: "瓷材料/复合材料" },
    { name: "防污等级", value: "I级/II级/III级" },
    { name: "机械负荷", value: "70-210kN" },
    { name: "应用场景", value: "高压输电线路" },
  ]
});

// Category name based on categoryId
const categoryName = computed(() => {
  const categories = {
    "1": t("products.categories.acDisc"),
    "2": t("products.categories.dcDisc"),
    "3": t("products.categories.linePost"),
    "4": t("products.categories.pin"),
    "5": t("products.categories.strain"),
    "6": t("products.categories.rod"),
    "7": t("products.categories.highSkid"),
  };
  return categories[categoryId.value as keyof typeof categories] || t("products.categories.dcDisc");
});

// Product images for gallery
const productImages = [product1, product2, product3, product4];
const currentImageIndex = ref(0);
const currentImage = computed(() => productImages[currentImageIndex.value]);

// Image gallery controls
const selectImage = (index: number) => {
  currentImageIndex.value = index;
};

const nextImage = () => {
  if (currentImageIndex.value < productImages.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

onMounted(() => {
  // Validate product ID - in real app would fetch product data here
  if (!productId.value) {
    router.push('/products');
  }
});
</script>

<style lang="scss" scoped>
.product-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.page-banner {
  width: 100%;
  height: 486px;
  background-size: cover;
  background-position: center;
  position: relative;
    
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    }
  }
}

.content-wrapper {
  width: 100%;
  padding-bottom: 100px;
  background-size: cover;
  background-repeat: no-repeat;
}

.breadcrumb-container {
  padding: 30px 130px;
  // background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 18px;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  .separator {
    margin: 0 10px;
    color: #6c757d;
  }
  
  .current {
    color: #333;
    font-weight: 500;
  }
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-size: 16px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  .back-icon {
    width: 16px;
    height: 16px;
  }
}

.detail-container {
  padding: 50px 130px;
  display: flex;
  gap: 50px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 30px;
    
    .product-gallery, 
    .product-info {
      width: 100%;
    }
  }
}

.product-gallery {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  .main-image-container {
    width: 100%;
    height: 450px;
    // background-color: #e3f2fd;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
    .main-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  
  .thumbnail-carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    
    .thumbnails {
      display: flex;
      gap: 15px;
      overflow: hidden;
      
      @media (max-width: 768px) {
        gap: 10px;
        
        .thumbnail-wrapper {
          width: 80px;
          height: 80px;
        }
      }
      
      @media (max-width: 576px) {
        gap: 5px;
        
        .thumbnail-wrapper {
          width: 60px;
          height: 60px;
        }
      }
      
      .thumbnail-wrapper {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        // background-color: #e3f2fd;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border: 2px solid transparent;
        
        &.active {
          border-color: var(--primary-color);
        }
        
        .thumbnail {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }
    }
    
    .carousel-nav {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.product-info {
  width: 50%;
  
  .product-title {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
  }
  
  h3 {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 20px;
    position: relative;
    padding-left: 15px;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 24px;
      background-color: var(--primary-color);
    }
  }
  
  .product-description {
    margin-bottom: 40px;
    
    p {
      font-size: 18px;
      line-height: 1.8;
      color: #333;
    }
  }
  
  .product-specs {
    .specs-table {
      border: 1px solid #dee2e6;
      border-radius: 5px;
      overflow: hidden;
      
      .spec-row {
        display: flex;
        border-bottom: 1px solid #dee2e6;
        
        &:last-child {
          border-bottom: none;
        }
        
        .spec-name, .spec-value {
          padding: 15px;
          font-size: 16px;
        }
        
        .spec-name {
          width: 40%;
          background-color: #f8f9fa;
          font-weight: 500;
          border-right: 1px solid #dee2e6;
        }
        
        .spec-value {
          width: 60%;
        }
      }
    }
  }
}
</style> 
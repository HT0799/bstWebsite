<template>
  <div class="products-page">
    <div class="page-banner">
      <img :src="productBanner" alt="product-banner" />
      <div class="banner-content">
        <h1>{{ t("products.banner") }}</h1>
      </div>
    </div>
    <div style="padding-bottom: 40px; width: 100%;" :style="{ backgroundImage: `url(${productBg})` }">
      <div class="section-normal-title">
        {{ t("products.title") }}<span>{{ t("products.center") }}</span>
      </div>
      <div class="content-container">
        <!-- Left Menu -->
        <div class="left-menu">
          <div class="search-bar">
            <div class="filter">
              <select class="filter-select">
                <option value="">{{ t("products.search") }}</option>
                <option value="1">{{ t("products.categories.acDisc") }}</option>
                <option value="2">{{ t("products.categories.dcDisc") }}</option>
                <option value="3">
                  {{ t("products.categories.linePost") }}
                </option>
                <option value="4">{{ t("products.categories.pin") }}</option>
                <option value="5">{{ t("products.categories.strain") }}</option>
                <option value="6">{{ t("products.categories.rod") }}</option>
                <option value="7">
                  {{ t("products.categories.highSkid") }}
                </option>
              </select>
            </div>
            <button class="search-btn">{{ t("products.search") }}</button>
          </div>
          <div class="product-directory">
            <div class="product-directory-title">
              {{ t("products.directory") }}
            </div>
            <div class="product-categories">
              <div
                v-for="category in productCategories"
                :key="category.id"
                class="product-category"
                :class="{ active: activeCategory.id === category.id }"
                @click="activeCategory = category"
              >
                {{ t(`products.categories.${category.key}`) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="product-content">
          <h2 class="category-title">
            {{ t(`products.categories.${activeCategory.key}`) }}
          </h2>
          <div class="category-description">
            {{ t("products.description") }}
          </div>

          <div class="product-grid">
            <div v-for="i in 9" :key="i" class="product-card">
              <div class="product-card-header">
                <button class="details-btn" @click="navigateToProduct(i)">{{ t("common.viewDetail") }} ></button>
              </div>
              <router-link :to="`/products/${i}?category=${activeCategory.id}`" class="product-link">
                <img :src="product" alt="Product" class="product-image" />
                <div class="product-name">
                  {{ t(`products.categories.${activeCategory.key}`) }}
                </div>
              </router-link>
            </div>
          </div>

          <!-- Use BasePagination Component -->
          <BasePagination
            v-model:currentPage="currentPage"
            :pageSize="pageSize"
            :total="total"
            :maxDisplayPages="maxDisplayPages"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BasePagination from "../components/BasePagination.vue";
import productBanner from "../assets/product-banner.png";
import product from "../assets/product.png";
import productBg from "../assets/product-bg.png";
import { useRouter } from 'vue-router';

const { t } = useI18n();

const router = useRouter();

// Function to navigate to product detail
const navigateToProduct = (id: number) => {
  router.push({
    path: `/products/${id}`,
    query: { category: activeCategory.value.id.toString() }
  });
};

// Pagination
const currentPage = ref(1);
const pageSize = ref(9);
const total = ref(180);
const maxDisplayPages = 5;

const activeCategory = ref({
  name: "交流盘形悬式瓷绝缘子",
  id: 1,
  key: "acDisc",
});

const productCategories = ref([
  {
    name: "交流盘形悬式瓷绝缘子",
    id: 1,
    key: "acDisc",
  },
  {
    name: "直流盘形悬式瓷绝缘子",
    id: 2,
    key: "dcDisc",
  },
  {
    name: "线路柱式瓷绝缘子",
    id: 3,
    key: "linePost",
  },
  {
    name: "针式绝缘子",
    id: 4,
    key: "pin",
  },
  {
    name: "拉紧绝缘子",
    id: 5,
    key: "strain",
  },
  {
    name: "蝶式绝缘子",
    id: 6,
    key: "rod",
  },
  {
    name: "瓷横担绝缘子",
    id: 7,
    key: "highSkid",
  },
]);
</script>

<style lang="scss" scoped>
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

.products-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.page-banner {
  width: 100%;
  height: 486px;
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

.search-bar {
  display: flex;
  width: 428px;
  height: 61px;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  margin-bottom: 53px;
  overflow: hidden;

  .filter {
    flex: 1;

    .filter-select {
      font-size: 18px;
      font-weight: 500;
      padding-left: 20px;
      color: #545f6c;
      width: 85%;
      height: 100%;
      border: none;
      background-color: transparent;
      outline: none;
    }
  }

  .search-btn {
    width: 155px;
    height: 100%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
}

.content-container {
  display: flex;
  margin-top: 84px;
  padding: 0 130px;
  gap: 40px;
}

.left-menu {
  display: flex;
  flex-direction: column;
  width: 425px;
}

.product-directory {
  width: 100%;
  border: 1px solid #C6D8E5;
  background-color: #e3f2fd;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  .product-directory-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 107px;
    background-color: var(--primary-color);
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
  }
}

.product-categories {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .product-category {
    text-align: center;
    width: 100%;
    border-radius: 10px;
    height: 107px;
    line-height: 107px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.2s;
    background-color: #d3e4f4;

    &:hover {
      background-color: rgba(0, 102, 204, 0.1);
    }

    &.active {
      background-color: var(--primary-color);
      color: white;
    }
  }
}

.product-content {
  flex: 1;

  .category-title {
    font-size: 40px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 40px;
    color: #333;
  }

  .category-description {
    font-size: 20px;
    line-height: 36px;
    color: #333;
    margin-bottom: 40px;
    border-radius: 4px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 40px;
  }

  .product-card {
    background-color: #e3f2fd;
    border-radius: 10px;
    width: 384px;
    height: 486px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .product-card-header {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
    
    .product-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
    }

    .product-name {
      font-size: 22px;
      color: var(--primary-color);
      text-align: center;
    }

    .product-image {
      margin-top: 60px;
      width: 217px;
      height: 188px;
      margin-bottom: 60px;
    }

    .details-btn {
      margin-top: 30px;
      margin-left: 30px;
      font-size: 16px;
      color: var(--primary-color);
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
}

// Pagination styling moved to BasePagination component

.banner {
  width: 100%;
  height: 786px;

  img {
    width: 100%;
    height: 100%;
  }
}

.section-normal-title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 50px;

  span {
    color: var(--primary-color);
  }
}
</style>

<template>
    <div class="news-content">
      <div class="news-header">
        <div class="section-normal-title">{{ t("news.industry") }}<span>{{ t("news.news") }}</span></div>
        <div class="news-search">
          <input
            type="text"
            :placeholder="t('news.searchPlaceholder')"
            v-model="searchQuery"
            class="search-input"
          />
          <button class="search-btn" @click="handleSearch">{{ t("news.search") }}</button>
        </div>
      </div>
  
      <div class="news-list">
        <div
          v-for="(item, index) in displayedNews"
          :key="index"
          class="news-item"
        >
          <div class="news-date">
            <div class="news-day">{{ item.day }}</div>
            <div class="news-month">{{ item.month }}</div>
          </div>
          <div class="news-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="news-info">
              <h3 class="news-item-title">{{ item.title }}</h3>
              <p class="news-item-desc">{{ item.description }}</p>
              <div class="news-item-more">  
                <img :src="arrowLeftBlue" alt="arrow-left-blue" />
                <span>{{ t("common.viewDetail") }}</span>
              </div>
            </div>
            <!-- <div class="news-read-more">
              <button class="read-more-btn" @click="readMore(item)">
                查看详情
              </button>
            </div> -->
        </div>
      </div>
  
      <BasePagination class="pagination"
        v-model:currentPage="currentPage"
        :pageSize="pageSize"
        :total="filteredNews.length"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  import BasePagination from "./BasePagination.vue";
  import newsPlaceholder from "@/assets/news-placeholder.png";
  import arrowLeftBlue from "@/assets/arrow-left-blue.png";
  import { useI18n } from "vue-i18n";
  
  const { t } = useI18n();

  // News data structure
  interface NewsItem {
    id: number;
    day: string;
    month: string;
    title: string;
    description: string;
    content: string;
    image: string;
  }
  
  // Mock data - can be replaced with API call later
  const newsData = ref<NewsItem[]>([
    {
      id: 1,
      day: "16",
      month: "7月\n2019",
      title: "线路绝缘子",
      description:
        '线路绝缘子是电力系统中用于支撑和绝缘导线的设备，其主要功能是承受导线荷载、防止电弧放电、提高系统稳定性。根据材料的不同，线路绝缘子可分为瓷绝缘子、玻璃绝缘子和复合绝缘子。瓷绝缘子具有良好的电气性能和机械强度，但重量较大；玻璃绝缘子重量轻、耐腐蚀，但机械强度较低；复合绝缘子结合了两者的优点，但成本较高。',
      content: "完整新闻内容...",
      image: newsPlaceholder,
    },
    {
      id: 2,
      day: "26",
      month: "3月\n2023",
      title: "复合绝缘子",
      description:
        '复合绝缘子是一种新型绝缘材料，由玻璃纤维增强树脂基体和金属端部组成。它具有重量轻、耐腐蚀、机械强度高等优点，广泛应用于高压输电线路。复合绝缘子在承受荷载时，玻璃纤维增强树脂基体能够吸收能量，减少应力集中，提高绝缘性能。',
      content: "完整新闻内容...",
      image: newsPlaceholder,
    },
    {
      id: 3,
      day: "18",
      month: "3月\n2023",
      title: "瓷绝缘子",
      description:
        '瓷绝缘子是一种传统的绝缘材料，由陶瓷材料制成。它具有良好的电气性能和机械强度，但重量较大。瓷绝缘子在承受荷载时，陶瓷材料能够吸收能量，减少应力集中，提高绝缘性能。',
      content: "完整新闻内容...",
      image: newsPlaceholder,
    },
    {
      id: 4,
      day: "06",
      month: "3月\n2023",
      title: "玻璃绝缘子",
      description:
        '玻璃绝缘子是一种轻质绝缘材料，由玻璃材料制成。它具有重量轻、耐腐蚀、机械强度高等优点，广泛应用于高压输电线路。玻璃绝缘子在承受荷载时，玻璃材料能够吸收能量，减少应力集中，提高绝缘性能。',
      content: "完整新闻内容...",
      image: newsPlaceholder,
    },
    {
      id: 5,
      day: "03",
      month: "3月\n2023",
      title: "绝缘子检测",
      description:
        '绝缘子检测是确保电力系统安全运行的重要环节。通过对绝缘子的电气性能、机械强度等指标进行检测，可以及时发现绝缘子存在的缺陷，采取相应的维修措施，保障电力系统的稳定运行。',
      content: "完整新闻内容...",
      image: newsPlaceholder,
    },
  ]);
  
  // Pagination state
  const currentPage = ref(1);
  const pageSize = ref(5);
  const searchQuery = ref("");
  
  // Filtered news based on search
  const filteredNews = computed(() => {
    if (!searchQuery.value) return newsData.value;
    return newsData.value.filter(
      (item) =>
        item.title.includes(searchQuery.value) ||
        item.description.includes(searchQuery.value)
    );
  });
  
  // Displayed news based on pagination
  const displayedNews = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize.value;
    const endIndex = startIndex + pageSize.value;
    return filteredNews.value.slice(startIndex, endIndex);
  });
  
  // Methods
  const handleSearch = () => {
    currentPage.value = 1; // Reset to first page when searching
  };
  
  // const readMore = (item: NewsItem) => {
  //   // Navigate to news detail page or show modal
  //   console.log("Read more about:", item.id);
  //   // You can implement navigation logic here
  // };
  </script>
  
  <style lang="scss" scoped>
  .news-content {
    padding: 0 130px 60px;
  }
  
  .news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
  
    .news-search {
      display: flex;
  
      .search-input {
        width: 270px;
        height: 61px;
        padding: 0 20px;
        border: 1px solid #dcdfe6;
        border-radius: 10px 0 0 10px;
        outline: none;
        font-size: 18px;
  
        &:focus {
          border-color: var(--primary-color);
        }
      }
  
      .search-btn {
        font-size: 18px;
        height: 61px;
        width: 160px;
        padding: 0 20px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
  
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
  
  .news-list {
    margin-bottom: 30px;
  }
  
  .news-item {
    display: flex;
    gap: 40px;
    margin-bottom: 34px;
    padding: 40px;
    border: 1px solid #B9D2E4;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
    }
  
    .news-date {
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: flex-start;
      min-width: 100px;
      margin-right: 20px;
      text-align: center;
      height: 60px;
      .news-day {
        font-size: 71px;
        font-weight: bold;
        line-height: 1;
        margin-right: 8px;
        color: #333;
        position: relative;
        
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          right: -8px;
          transform: translateY(-50%);
          height: 80%;
          width: 1px;
          background-color: #333;
        }
      }
  
      .news-month {
        font-size: 27px;
        font-weight: 700;
        color: #333;
        white-space: pre-line;
        text-align: left;
        line-height: 34px;
        margin-left: 8px;
      }
    }
  
    .news-image {
        width: 434px;
        height: 288px;
        margin-right: 20px;
        overflow: hidden;
        border-radius: 4px;
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
  
      .news-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        // justify-content: space-between;
  
        .news-item-title {
          margin-bottom: 30px;
          font-size: 40px;
          color: #333;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          -webkit-box-orient: vertical;
        }
  
        .news-item-desc {
          min-height: 72px;
          color: #3C3F42;
          font-size: 16px;
          line-height: 36px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
  
        .news-item-more {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          width: 181px;
          height: 60px;
          border: 1px solid var(--primary-color);
          border-radius: 10px;
          color: var(--primary-color);
          cursor: pointer;
          img {
            width: 44px;
            height: 9px;
            margin-right: 15px;
          }
        }
      }
  
      .news-read-more {
        display: flex;
        align-items: flex-end;
        margin-left: 20px;
  
        .read-more-btn {
          padding: 8px 15px;
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
  
          &:hover {
            background-color: var(--primary-color);
            color: white;
          }
        }
      }
  }
  
  
  </style>
  
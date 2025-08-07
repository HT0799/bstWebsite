<template>
  <div class="news-timeline">
    <div v-for="(item, index) in newsList" :key="index" class="timeline-item">
      <div class="timeline-date">
        <span class="month">{{ formatMonth(item.date) }}</span>
        <span class="day">{{ formatDay(item.date) }}</span>
      </div>
      <div class="timeline-content">
        <h4>{{ item.title }}</h4>
        <p class="meta">{{ formatFullDate(item.date) }}</p>
        <p>{{ item.excerpt }}</p>
        <router-link :to="`/news/${item.id}`" class="read-more">阅读全文 &rarr;</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NewsItem {
  id: string | number;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
}

defineProps<{
  newsList: NewsItem[]
}>()

const formatMonth = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', { month: 'short' })
}

const formatDay = (dateString: string): string => {
  const date = new Date(dateString)
  return date.getDate().toString().padStart(2, '0')
}

const formatFullDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style lang="scss" scoped>
.news-timeline {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5rem;
    width: 2px;
    background-color: #e0e0e0;
    
    @media (max-width: 768px) {
      left: 3rem;
    }
  }
}

.timeline-item {
  position: relative;
  padding-left: 8rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding-left: 5rem;
  }
}

.timeline-date {
  position: absolute;
  left: 0;
  top: 0;
  width: 4rem;
  text-align: center;
  
  .month {
    display: block;
    font-size: 0.9rem;
    background-color: #4268A8;
    color: white;
    padding: 0.2rem 0;
    border-radius: 4px 4px 0 0;
  }
  
  .day {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-top: none;
    padding: 0.2rem 0;
    border-radius: 0 0 4px 4px;
  }
  
  @media (max-width: 768px) {
    width: 3rem;
    
    .month {
      font-size: 0.8rem;
    }
    
    .day {
      font-size: 1.2rem;
    }
  }
}

.timeline-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
  
  h4 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
  }
  
  .meta {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  .read-more {
    color: #4268A8;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style> 
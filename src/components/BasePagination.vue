<template>
  <div class="pagination-container">
    <div class="custom-pagination">
      <button class="page-prev" @click="handlePrevPage" :disabled="currentPage === 1">
        <el-icon><ArrowLeft /></el-icon>
      </button>
      
      <div class="page-numbers">
        <span 
          v-for="num in displayedPages" 
          :key="num" 
          class="page-number"
          :class="{ active: currentPage === num }"
          @click="handlePageChange(num)"
        >
          {{ num }}
        </span>
        <span v-if="showEllipsis" class="page-ellipsis">...</span>
        <span 
          v-if="totalPages > maxDisplayPages"
          class="page-number"
          :class="{ active: currentPage === totalPages }"
          @click="handlePageChange(totalPages)"
        >
          {{ totalPages }}
        </span>
      </div>
      
      <button class="page-next" @click="handleNextPage" :disabled="currentPage === totalPages">
        <el-icon><ArrowRight /></el-icon>
      </button>
      
      <div class="page-jump">
        <span>{{ t('pagination.goto') }}</span>
        <input 
          type="number" 
          v-model="jumpPage" 
          min="1" 
          :max="totalPages" 
          @keyup.enter="handleJumpPage"
          :controls="false"
        />
        <span>{{ t('pagination.page') }}</span>
        <button class="jump-btn" @click="handleJumpPage">GO</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from 'vue-i18n';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';

const { t } = useI18n();

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  maxDisplayPages: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(['update:currentPage']);

const totalPages = computed(() => Math.ceil(props.total / props.pageSize));
const jumpPage = ref<string | number>("");

const displayedPages = computed(() => {
  const pages = [];
  const halfMax = Math.floor(props.maxDisplayPages / 2);
  
  let startPage = Math.max(1, props.currentPage - halfMax);
  let endPage = Math.min(totalPages.value, startPage + props.maxDisplayPages - 1);
  
  if (endPage - startPage < props.maxDisplayPages - 1) {
    startPage = Math.max(1, endPage - props.maxDisplayPages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return pages;
});

const showEllipsis = computed(() => {
  return totalPages.value > props.maxDisplayPages && 
    displayedPages.value[displayedPages.value.length - 1] < totalPages.value - 1;
});

const handlePageChange = (page: number) => {
  emit('update:currentPage', page);
};

const handlePrevPage = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const handleNextPage = () => {
  if (props.currentPage < totalPages.value) {
    emit('update:currentPage', props.currentPage + 1);
  }
};

const handleJumpPage = () => {
  if (jumpPage.value) {
    const page = Number(jumpPage.value);
    if (page >= 1 && page <= totalPages.value) {
      emit('update:currentPage', page);
    }
    jumpPage.value = "";
  }
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

// Custom pagination matching the design
.custom-pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  .page-prev,
  .page-next {
    width: 36px;
    height: 36px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    color: #606266;
    border-radius: 4px;
    margin: 0 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }

    &:disabled {
      cursor: not-allowed;
      color: #c0c4cc;
    }
  }

  .page-numbers {
    display: flex;
    align-items: center;
    margin: 0 10px;

    .page-number {
      width: 36px;
      height: 36px;
      border: 1px solid #dcdfe6;
      background-color: #fff;
      color: #606266;
      border-radius: 4px;
      margin: 0 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover:not(.active) {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }

      &.active {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }
    }

    .page-ellipsis {
      margin: 0 5px;
    }
  }

  .page-jump {
    display: flex;
    align-items: center;
    margin-left: 15px;

    span {
      margin-right: 15px;
      color: #606266;
      font-size: 14px;
    }

    input {
      width: 50px;
      height: 36px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      text-align: center;
      margin-right: 15px;
      outline: none;

      &:focus {
        border-color: var(--primary-color);
      }
    }

    .jump-btn {
      width: 40px;
      height: 36px;
      background-color: #fff;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      color: #606266;
      cursor: pointer;

      &:hover {
        background-color: #e6e6e6;
      }
    }
  }
}
</style> 
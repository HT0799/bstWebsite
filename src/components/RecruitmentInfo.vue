<template>
  <div class="recruitment-info">
    <!-- 标题 -->
    <div class="section-normal-title">{{ t("contact.recruitment") }}<span>{{ t("contact.info") }}</span></div>

    <!-- 公司介绍 -->
    <div class="company-intro">
      <p>{{ t("recruitment.companyIntro") }}</p>
    </div>

    <!-- 搜索过滤器 -->
    <div class="search-filters">
      <div class="filter-group">
        <div class="filter-group-left">
          <span class="dot"></span>
          <select v-model="selectedDepartment" class="filter-select">
            <option value="">{{ t("recruitment.department") }}</option>
            <option
              v-for="dept in departments"
              :key="dept.value"
              :value="dept.value"
            >
              {{ dept.label }}
            </option>
          </select>
        </div>

        <div class="filter-group-right">
          <input
            type="text"
            placeholder="请输入岗位名称"
            v-model="searchJobName"
            class="search-input"
          />
          <button class="search-btn" @click="handleSearch">搜索</button>
        </div>
      </div>
    </div>

    <!-- 职位列表 -->
    <div class="job-listings">
      <div class="job-grid">
        <div v-for="job in paginatedJobs" :key="job.id" class="job-card">
          <div class="job-header">
            <h3 class="job-title">{{ job.title }}</h3>
            <button class="apply-btn">{{ t("recruitment.apply") }}</button>
          </div>

          <div class="job-details">
            <div class="job-requirement">
              <span class="label">{{ t("recruitment.education") }}:</span>
              <span class="value">{{ job.education }}</span>
              <span class="line"></span>
            </div>
            <div class="job-requirement">
              <span class="label">{{ t("recruitment.openings") }}:</span>
              <span class="value">{{ job.openings }}</span>
              <span class="line"></span>
            </div>
            <div class="job-requirement">
              <span class="label">{{ t("recruitment.salary") }}:</span>
              <span class="value">{{ job.salary }}</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="job-description">
            <div
              class="description-content"
              :class="{ expanded: expandedJobs.includes(job.id) }"
            >
              {{ job.description }}
            </div>
            <div class="expand-arrow" @click="toggleExpand(job.id)">
              <el-icon
                :size="16"
                color="#4472c4"
                v-if="!expandedJobs.includes(job.id)"
                ><ArrowDownBold
              /></el-icon>
              <el-icon :size="16" color="#4472c4" v-else
                ><ArrowUpBold
              /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页组件 -->
    <BasePagination
      v-model:currentPage="currentPage"
      :pageSize="pageSize"
      :total="filteredJobs.length"
      :maxDisplayPages="5"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import BasePagination from "./BasePagination.vue";
import { ArrowDownBold, ArrowUpBold } from "@element-plus/icons-vue";

const { t } = useI18n();

// 响应式数据
const selectedDepartment = ref("");
const selectedPosition = ref("");
const currentPage = ref(1);
const pageSize = ref(6);
const expandedJobs = ref<number[]>([]);
const searchJobName = ref("");

// 部门选项
const departments = ref([
  { value: "production", label: "生产部" },
  { value: "sales", label: "销售部" },
  { value: "hr", label: "人力资源部" },
  { value: "finance", label: "财务部" },
  { value: "tech", label: "技术部" },
]);

// 模拟职位数据
const jobs = ref([
  {
    id: 1,
    title: "生产主任/副主任",
    department: "production",
    position: "director",
    education: "大专及以上",
    openings: "4人",
    salary: "6-9K",
    description:
      "辅助部长组织实施公司生产计划，协调各部门完成产品生产任务，能够根据管理,熟练运用PDCA,推进生产管理持续改进,标准化操作规程。",
  },
  {
    id: 2,
    title: "销售经理",
    department: "sales",
    position: "manager",
    education: "本科及以上",
    openings: "2人",
    salary: "8-12K",
    description: "负责区域销售工作,完成销售目标;维护客户关系,开拓新市场。",
  },
  {
    id: 3,
    title: "人力资源专员",
    department: "hr",
    position: "specialist",
    education: "本科及以上",
    openings: "1人",
    salary: "5-7K",
    description: "负责招聘、培训等人力资源相关工作;协助制定人力资源政策。",
  },
  {
    id: 4,
    title: "财务助理",
    department: "finance",
    position: "assistant",
    education: "大专及以上",
    openings: "2人",
    salary: "4-6K",
    description: "协助财务经理处理日常财务工作;负责凭证整理和账务处理。",
  },
  {
    id: 5,
    title: "技术工程师",
    department: "tech",
    position: "specialist",
    education: "本科及以上",
    openings: "3人",
    salary: "7-10K",
    description: "负责产品技术研发和改进;解决生产过程中的技术问题。",
  },
  {
    id: 6,
    title: "质量检验员",
    department: "production",
    position: "specialist",
    education: "大专及以上",
    openings: "2人",
    salary: "4-6K",
    description: "负责产品质量检验工作;制定质量检验标准和流程。",
  },
]);

// 过滤后的职位
const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    const deptMatch =
      !selectedDepartment.value || job.department === selectedDepartment.value;
    const posMatch =
      !selectedPosition.value || job.position === selectedPosition.value;
    return deptMatch && posMatch;
  });
});

// 分页后的职位
const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredJobs.value.slice(start, end);
});

// 搜索处理
const handleSearch = () => {
  currentPage.value = 1; // 重置到第一页
};

// 切换展开/收起状态
const toggleExpand = (jobId: number) => {
  const index = expandedJobs.value.indexOf(jobId);
  if (index === -1) {
    expandedJobs.value.push(jobId);
  } else {
    expandedJobs.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped>
.recruitment-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 130px 60px;
}

.recruitment-title {
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
}

.company-intro {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  line-height: 36px;
  color: #000;
  font-size: 20px;
  max-width: 1310px;
}

.search-filters {
  width: 100%;
  margin-bottom: 60px;

  .filter-group {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .filter-group-left {
    display: flex;
    align-items: center;
    width: 430px;
    height: 61px;
    gap: 10px;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid var(--primary-color);
    background-color: #fff;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--primary-color);
    }
  }

  .filter-select {
    font-size: 18px;
    font-weight: 500;
    color: #545f6c;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
  }

  .filter-group-right {
    display: flex;

    .search-input {
      font-size: 18px;
      font-weight: 500;
      width: 270px;
      height: 61px;
      padding: 0 20px;
      border: 1px solid #dcdfe6;
      border-radius: 10px 0 0 10px;
      outline: none;

      &:focus {
        border-color: var(--primary-color);
      }
    }

    .search-btn {
      font-size: 18px;
      font-weight: 500;
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

  .search-btn {
    padding: 8px 20px;
    background-color: #4472c4;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #365aa8;
    }
  }
}

.job-listings {
  width: 100%;
  margin-bottom: 50px;

  .job-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .job-card {
    border: 1px solid #C6D8E5;
    border-radius: 10px;
    padding: 60px 50px;
    background: #E3F2FD;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    // padding-bottom: 10px;
    // border-bottom: 1px dashed #e6e6e6;

    .job-title {
      color: #1872CE;
      font-size: 40px;
      font-weight: bold;
    }

    .apply-btn {
      width: 181px;
      height: 60px;
      padding: 6px 20px;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      transition: background-color 0.3s;

      // &:hover {
      //   background-color: #365aa8;
      // }
    }
  }

  .job-details {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;

    .job-requirement {
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-bottom: 8px;
      font-size: 22px;
      font-weight: 500;
      color: #333;
      .value {
        margin-left: 10px;
      }
      .line {
        width: 2px;
        height: 24px;
        background-color: #91999F;
        margin-left: 20px;
      }
    }
  }

  .job-description {
    border-top: 1px dashed var(--primary-color);
    padding-top: 40px;
    display: flex;
    justify-content: space-between;

    .description-content {
      color: #333;
      font-size: 18px;
      line-height: 36px;
      width: 500px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Limit to 2 lines */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &.expanded {
        -webkit-line-clamp: unset;
        line-clamp: unset;
      }
    }

    .expand-arrow {
      cursor: pointer;
      border: 1px solid var(--primary-color);
      border-radius: 10px;
      width: 138px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

// 响应式设计
@media (max-width: 992px) {
  .recruitment-info {
    padding: 15px;
  }

  .job-grid {
    grid-template-columns: 1fr;
  }

  .search-filters .filter-group {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-select {
    min-width: auto;
  }
}
</style>

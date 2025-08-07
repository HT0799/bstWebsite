<template>
  <div class="smart-automation-container">
    <!-- 智能自动化工艺设备 (Smart Automation Process Equipment) Section -->
    <div class="section main-section">
      <h2 class="section-normal-title">智能自动化<span>工艺设备</span></h2>

      <!-- Main Description -->
      <div class="main-description">
        <p>
          萍乡百斯特电瓷有限公司主要产品为瓷绝缘子，瓷绝缘子已有上百年的生产历史，经历了多次技术改造和创新，其工艺装备是目前国内较先进的，拥有40吨球磨机6台，30吨球磨机2台，智能程控隔膜压滤机16台，自动成型线6条，干燥烘干室18座，96M、108M隧道窑各一座，208m³抽屉窑二座，180m³抽屉窑二座，70m³抽屉窑一座，试验专用窑炉2座，自动装配线3条，电检线6条等先进的工艺装备，其中智能程控隔膜榨泥机、全自动成型线、头部瓷件高精度在线测厚机、自动上釉丝印一体机及自动装配线配套视觉监测系统等在国内同行业中率先使用。公司生产机具配备齐全满足生产需求，瓷绝缘子年产量600万标准只以上。
        </p>
      </div>

      <!-- Production Capacity and Equipment Scope -->
      <div class="capacity-scope-container">
        <div class="capacity-item">
          <div class="capacity-icon">
            <img :src="outputIcon" alt="年产量" />
          </div>
          <div class="capacity-content">
            <div class="capacity-number">600，000+</div>
            <div class="capacity-label">瓷绝缘子年产量</div>
          </div>
        </div>

        <div class="scope-item">
          <div class="scope-icon">
            <img :src="processEquipmentIcon" alt="工艺装备" />
          </div>
          <div class="scope-content">
            <p>工艺装备涵盖了从成型、装配到研磨、检测的各个环节</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 技术优势 (Technical Advantages) Section -->
    <div class="section advantages-section">
      <h2 class="section-normal-title">技术<span>优势</span></h2>

      <!-- Technology Categories -->
      <div class="technology-categories">
        <div 
          v-for="(category, index) in technologyData" 
          :key="index"
          class="category-item"
          :class="{ active: selectedCategoryIndex === index }"
          @click="selectCategory(index)"
        >
          <span>{{ category.typeName }}</span>
          <div v-if="index != technologyData.length-1" class="line"></div>
        </div>
      </div>

      <div class="equipment-container">
        <!-- Equipment Details -->
        <div class="equipment-details">
          <div class="equipment-text">
            {{ currentCategoryData.description }}
          </div>

          <div class="equipment-visual">
            <div class="equipment-columns">
              <div 
                v-for="(equipment, index) in currentCategoryData.processEquipmentList" 
                :key="index"
                class="equipment-column"
              >
                <div class="equipment-number">{{ equipment.number }}<span class="equipment-unit">{{ equipment.unit }}</span></div>
                <div class="equipment-name">{{ equipment.processEquipmentName }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="equipment-image">
          <img :src="currentCategoryData.icon" :alt="currentCategoryData.typeName" />
          <div class="image-label">{{ currentCategoryData.typeName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import outputIcon from "@/assets/output-icon.png";
import processEquipmentIcon from "@/assets/process-equipment-icon.png";
import processEquipmentImg from "@/assets/process-equipment-img.png";

const selectedCategoryIndex = ref(0);

const technologyData = [
  {
    typeName: "原料研磨类",
    description: "40吨球磨机6台，30吨球磨机2台，智能程控隔膜压滤机36台。",
    icon: processEquipmentImg,
    processEquipmentList: [
      { processEquipmentName: "40吨球磨机", number: 6, unit: "台" },
      { processEquipmentName: "30吨球磨机", number: 2, unit: "台" },
      { processEquipmentName: "智能程控隔膜压滤机", number: 36, unit: "台" },
    ],
  },
  {
    typeName: "窑炉类",
    description: "96M、108M隧道窑各一座，208m³抽屉窑二座，180m³抽屉窑二座，70m³抽屉窑一座，试验专用窑炉2座。",
    icon: processEquipmentImg,
    processEquipmentList: [
      { processEquipmentName: "96M隧道窑", number: 1, unit: "座" },
      { processEquipmentName: "108M隧道窑", number: 1, unit: "座" },
      { processEquipmentName: "208m³抽屉窑", number: 2, unit: "座" },
      { processEquipmentName: "180m³抽屉窑", number: 2, unit: "座" },
      { processEquipmentName: "70m³抽屉窑", number: 1, unit: "座" },
      { processEquipmentName: "试验专用窑炉", number: 2, unit: "座" },
    ],
  },
  {
    typeName: "成型上釉类",
    description: "自动成型线6条，干燥烘干室18座，自动上釉丝印一体机等先进设备。",
    icon: processEquipmentImg,
    processEquipmentList: [
      { processEquipmentName: "自动成型线", number: 6, unit: "条" },
      { processEquipmentName: "干燥烘干室", number: 18, unit: "座" },
      { processEquipmentName: "自动上釉丝印一体机", number: 4, unit: "台" },
    ],
  },
  {
    typeName: "装配质检类",
    description: "自动装配线3条，电检线6条，头部瓷件高精度在线测厚机等检测设备。",
    icon: processEquipmentImg,
    processEquipmentList: [
      { processEquipmentName: "自动装配线", number: 3, unit: "条" },
      { processEquipmentName: "电检线", number: 6, unit: "条" },
      { processEquipmentName: "头部瓷件高精度在线测厚机", number: 2, unit: "台" },
    ],
  },
];

const currentCategoryData = computed(() => {
  return technologyData[selectedCategoryIndex.value];
});

const selectCategory = (index: number) => {
  selectedCategoryIndex.value = index;
};
</script>

<style scoped lang="scss">
.smart-automation-container {
  padding: 74px 130px 30px;
}

.section {
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-normal-title {
  font-size: 48px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 60px;

  span {
    color: var(--primary-color);
  }
}

/* Main Section */
.main-description {
  margin-bottom: 50px;

  p {
    line-height: 38px;
    font-size: 17px;
    color: #333;
    text-align: justify;
    text-indent: 2em;
  }
}

.capacity-scope-container {
  padding: 0 225px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #d2dde6;
}

.capacity-item {
  display: flex;
  align-items: center;
  gap: 35px;

  .capacity-icon {
    width: 83px;
    height: 83px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .capacity-content {
    .capacity-number {
      font-size: 60px;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
    }

    .capacity-label {
      font-size: 16px;
      color: #000;
      margin-top: 13px;
    }
  }
}

.scope-item {
  display: flex;
  align-items: center;
  gap: 35px;

  .scope-icon {
    width: 89px;
    height: 89px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .scope-content {
    p {
      font-size: 28px;
      font-weight: 700;
      color: #000;
      line-height: 42px;
      width: 364px;
    }
  }
}

/* Technical Advantages Section */
.advantages-section {
  margin-top: 80px;
}

.technology-categories {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 87px;

  .category-item {
    display: flex;
    gap: 30px;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    margin-right: 30px;

    &:hover {
      color: var(--primary-color);
    }

    &.active {
      color: var(--primary-color);
    }

    .line {
      width: 2px;
      height: 30px;
      background-color: #6E8395;
    }

  }

  .category-divider {
    font-size: 30px;
    color: #ccc;
    margin: 0 15px;
    font-weight: 300;
  }
}

.equipment-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.equipment-details {
  flex: 1;
}

.equipment-text {
  font-size: 17px;
  color: #333;
  margin-bottom: 90px;
  line-height: 38px;
}

.equipment-visual {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.equipment-columns {
  display: flex;
  gap: 40px;
  flex: 1;
}

.equipment-column {
  flex: 1;
//   text-align: center;

  .equipment-number {
    font-family: DINPro, DINPro;
    font-size: 40px;
    font-weight: 700;
    color: #000;
  }

  .equipment-unit {
    margin-left: 2px;
    font-size: 16px;
    color: #000;
  }

  .equipment-name {
    margin-top: 10px;
    font-size: 18px;
    color: #000;
  }
}

.equipment-image {
  position: relative;
  width: 724px;
  height: 442px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-weight: 700;
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .smart-automation-container {
    padding: 60px 80px 30px;
  }

  .capacity-scope-container {
    flex-direction: column;
    gap: 40px;
  }

  .equipment-visual {
    flex-direction: column;
    gap: 40px;
  }

  .equipment-image {
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .smart-automation-container {
    padding: 40px 20px 30px;
  }

  .section-normal-title {
    font-size: 36px;
  }

  .technology-categories {
    flex-wrap: wrap;
    gap: 15px;

    .category-divider {
      display: none;
    }
  }

  .equipment-columns {
    flex-direction: column;
    gap: 20px;
  }
}
</style>

<template>
  <div class="research-center-container">
    <!-- 理化实验室 (Modern Laboratory) Section -->
    <div class="section lab-section">
      <h2 class="section-normal-title">理化<span>实验室</span></h2>
      <div class="lab-description">
        <p>
          理化实验室配备了国际领先的检测设备，包括德国布鲁克荧光光谱仪、美国麦克沉降粒度仪、德国蔡司高倍显微设备、扫描电镜、德国耐驰热分析仪等，为产品研发、生产控制和质量保障提供全方位技术支持。
          支持创新研发。通过对原料、釉料、瓷砂等的测试与筛选，实验室形成关键性能参数，为新产品开发提供科学依据。经过多轮验证后形成标准化制造工艺文件，指导生产确保产品性能达到行业领先水平。
          严格质量把控。从供应商筛选到原材料入厂检验，所有主要原材料均需通过实验室的严格检测，确保符合公司质量标准，为产品质量提供可靠保障。作为生产工艺的核心监测中心，为DCS智能控制系统提供精准工艺控
          制数据参数，保障生产工艺稳定高效。
        </p>
      </div>
      <div class="instruments-container">
        <div class="instrument-item">
          <div class="instrument-image">
            <img :src="instrument1" alt="光光谱仪" />
          </div>
          <p class="instrument-name">光光谱仪</p>
        </div>
        <div class="instrument-item">
          <div class="instrument-image">
            <img :src="instrument2" alt="流变仪器仪" />
          </div>
          <p class="instrument-name">流变仪器仪</p>
        </div>
        <div class="instrument-item">
          <div class="instrument-image">
            <img :src="instrument3" alt="显微镜" />
          </div>
          <p class="instrument-name">显微镜</p>
        </div>
        <div class="instrument-item">
          <div class="instrument-image">
            <img :src="instrument4" alt="热重量系列仪" />
          </div>
          <p class="instrument-name">热重量系列仪</p>
        </div>
      </div>
    </div>

    <!-- 中试生产线 (Pilot Production Line) Section -->
    <div class="section pilot-section">
      <h2 class="section-normal-title">中试<span>生产线</span></h2>
      <div class="pilot-description">
        <p>
          中试生产线是公司创新研发的核心基地，专注于新产品开发、试制与验证。生产线配备原料加工、成型、烘干、上釉上砂、烧制等绝缘子工序所需的先进设备，为新工艺、新材料、新产品提供完整试验平台。同时，为
          新产品量产提供标准化生产工艺与技术参数，保障从研发到生产的无缝衔接，助力产品快速推向市场。
        </p>
      </div>
      <div class="pilot-content">
        <div class="pilot-image">
          <img :src="pilotProductionLine" alt="中试生产线" />
        </div>
        <div class="stats-container">
          <div class="stats-row">
            <div class="stat-item">
              <div class="stat-number">46 <span>名</span></div>
              <div class="stat-label">研发人员</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">9 <span>名</span></div>
              <div class="stat-label">高级、高级工程师</div>
            </div>
          </div>
          <div class="stats-row">
            <div class="stat-item">
              <div class="stat-number">5 <span>名</span></div>
              <div class="stat-label">博士人员</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24 <span>名</span></div>
              <div class="stat-label">工程师</div>
            </div>
          </div>
          <div class="stats-row stats-description">
            <p>
              年投入超2000万元，其中1000余万元用于中试车间新产品研发、工艺改进，1000万
              元用于检测中心、理化实验室高精度研发设备仪器的添置等。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 专利展示 (Patent Display) Section -->
    <div class="section patent-section">
      <h2 class="section-normal-title">专利<span>展示</span></h2>
      <div class="patents-container">
        <div class="carousel-controls">
          <button class="carousel-control prev" aria-label="Previous slide">
            <img :src="arrowGray" alt="Previous" />
          </button>
          <div class="patents-carousel">
            <div class="patent-item">
              <div class="patent-image">
                <img :src="patent" alt="专利" />
              </div>
            </div>
            <div class="patent-item">
              <div class="patent-image">
                <img :src="patent" alt="专利" />
              </div>
            </div>
            <div class="patent-item">
            <div class="patent-image">
                <img :src="patent" alt="专利" />
              </div>
            </div>
            <div class="patent-item">
              <div class="patent-image">
                <img :src="patent" alt="专利" />
              </div>
            </div>
          </div>
          <button class="carousel-control next" aria-label="Next slide">
            <img :src="arrowWhite" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pilotProductionLine from "@/assets/pilot-production-line.png";
import instrument1 from "@/assets/instrument1.png";
import instrument2 from "@/assets/instrument2.png";
import instrument3 from "@/assets/instrument3.png";
import instrument4 from "@/assets/instrument4.png";
import patent from '@/assets/patent.png';
import arrowGray from "@/assets/arrow-gray.png";
import arrowWhite from "@/assets/arrow-white.png";
</script>

<style scoped lang="scss">
.research-center-container {
  padding: 74px 130px 30px;
}

.section {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Laboratory Section */
.lab-description {
  margin-top: 60px;
  margin-bottom: 30px;
  p {
    line-height: 38px;
    font-size: 17px;
    color: #333;
  }
}

.instruments-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.instrument-item {
  flex: 1;
  text-align: center;
  box-shadow: 1px 0px 10px 0px #e3f2fd;
  border-radius: 10px;
}

.instrument-image {
  img {
    max-width: 100%;
    height: auto;
  }
}

.instrument-name {
  margin: 20px auto;
  font-size: 30px;
  font-weight: 700;
  color: #000;
}

/* Pilot Production Line Section */
.pilot-description {
  margin-top: 60px;
  margin-bottom: 50px;
  p {
    line-height: 38px;
    font-size: 17px;
    font-weight: 500;
    color: #333;
  }
}

.pilot-content {
  display: flex;
  background-color: #e5f3fd;
  border-radius: 10px;
  border: 1px solid #d3e5f4;
  height: 665px;
}

.pilot-image {
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
}

.stats-container {
  flex: 1;
  padding-left: 100px;
}

.stats-row {
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
}

.stat-item {
  flex: 1;
  //   text-align: center;
}

.stat-number {
  font-family: DINPro, DINPro;
  font-size: 60px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
  span {
    font-size: 30px;
    font-weight: 700;
    color: #000;
    margin-left: 5px;
  }
  &::after {
    content: "";
    display: block;
    width: 270px;
    height: 2px;
    background-color: #b9d2e4;
  }
}

.stat-label {
  font-size: 30px;
  font-weight: 700;
  color: #000;
  line-height: 36px;
}

.stats-description {
  p {
    line-height: 38px;
    font-size: 17px;
    color: #333;
  }
}

/* Patents Section */
.patents-container {
  margin-top: 40px;
}

.carousel-controls {
  display: flex;
  align-items: center;
  position: relative;
}

.carousel-control {
  background: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 20px 0px #B9B9B9;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  &.prev {
    background-color: #fff;
    left: -35px;
  }
  &.next {
    background-color: var(--primary-color);
    right: -35px;
  }
}

.patents-carousel {
  display: flex;
  gap: 40px;
  overflow: hidden;
  flex: 1;
}

.patent-item {
  flex: 1;
  width: 384px;
  height: 453px;
  border: 1px solid #c6d8e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.patent-image {
  width: 278px;
  height: 393px;
  .img {
    width: 100%;
    height: auto;
  }
}
</style>

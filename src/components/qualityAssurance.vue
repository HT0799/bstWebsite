<template>
  <div class="quality-assurance-container">
    <!-- 检测中心 (Testing Center) Section -->
    <div class="section testing-center-section">
      <h2 class="section-normal-title">检测<span>中心</span></h2>
      <div class="testing-center-description">
        <p>
          高压试验大厅是经中国合格评定国家认可委员会（CNAS）认证的权威检测机构，以客户需求为核心，专注于绝缘子性能评估与可靠性验证。实验室依据国际及行业标准，开展短期及长期机械、电气性能测试，精准评
          估机电联合作用下的稳定性。核心设备配置：
        </p>
      </div>
      <div class="high-voltage-tests">
        <div class="test-item-1">
          <div class="test-image">
            <img :src="highVoltageTest" alt="高压测试1" />
          </div>
        </div>
        <div class="test-item">
          <div class="test-image">
            <img :src="highVoltageTest2" alt="高压测试2" />
          </div>
          <p class="test-name">材料试验机</p>
        </div>
        <div class="test-item">
          <div class="test-image">
            <img :src="highVoltageTest3" alt="高压测试3" />
          </div>
          <p class="test-name">双工位热机</p>
        </div>
        <div class="test-item">
          <div class="test-image">
            <img :src="highVoltageTest4" alt="高压测试4" />
          </div>
          <p class="test-name">三工位热机</p>
        </div>
        <div class="test-item">
          <div class="test-image">
            <img :src="highVoltageTest5" alt="高压测试5" />
          </div>
          <p class="test-name">试验发生器</p>
        </div>
      </div>
      <div class="testing-center-device">
        <div class="device-item" v-for="item in deviceList" :key="item.name">
          <p class="device-name">{{ item.name }}</p>
        </div>
      </div>
      <div class="testing-center-description2">
        <p>
          通过全方位性能验证，实验室为特高压绝缘子产品提供权威检测支持，确保产品性能卓越、质量可靠，为全球客户提供值得信赖的技术保障。
        </p>
      </div>
    </div>

    <!-- KEMA证书 (KEMA Certificates) Section -->
    <div class="section kema-section">
      <h2 class="section-normal-title">KEMA<span>证书</span></h2>
      <div class="kema-description">
        <p>
          公司在瓷绝缘子的生产制造方面拥有丰富的经验和技术实力，能够生产多种类型和规格的绝缘子，以满足不同客户的需求。其产品通过了多项国际标准的测试和认证，包括IEC
          60383-1等，这充分证明了其产品的可靠性和安全性。萍乡百斯特电瓷有限公司的产品不仅在国内市场占有重要地位，还出口到全球多个国家和地区，为全球电力传输事业做出了重要贡献。
        </p>
      </div>
      <div class="kema-certificates">
        <div class="carousel-controls">
          <button class="carousel-control prev" aria-label="Previous slide">
            <img :src="arrowGray" alt="Previous" />
          </button>
          <div class="kema-certificates-carousel">
            <div class="kema-certificates-item">
              <div class="kema-certificates-image">
                <img :src="KEMA" alt="KEMA" />
              </div>
            </div>
            <div class="kema-certificates-item">
              <div class="kema-certificates-image">
                <img :src="KEMA" alt="KEMA" />
              </div>
            </div>
            <div class="kema-certificates-item">
              <div class="kema-certificates-image">
                <img :src="KEMA" alt="KEMA" />
              </div>
            </div>
            <div class="kema-certificates-item">
              <div class="kema-certificates-image">
                <img :src="KEMA" alt="KEMA" />
              </div>
            </div>
          </div>
          <button class="carousel-control next" aria-label="Next slide">
            <img :src="arrowWhite" alt="Next" />
          </button>
        </div>
      </div>
    </div>

    <!-- 大吨位检测报告 (High Voltage Test Reports) Section -->
    <div class="section test-reports-section">
      <h2 class="section-normal-title">大吨位检测<span>报告</span></h2>
      <div class="test-reports-container">
        <div class="test-reports-left">
          <div class="test-reports-info">
            <p>
              我们秉持专业、严谨的态度，为您呈现权威的检测报告。这些证书不仅是对我们检测技术与实力的高度认可，更是产品质量的有力背书。
            </p>
          </div>
          <div class="test-reports-type">
            <div class="type-item">
              <p>直流盘形悬式<br />瓷绝缘子</p>
            </div>
            <div class="type-item">
              <p>交流盘形悬式<br />瓷绝缘子</p>
            </div>
          </div>
        </div>
        <div class="test-reports-right">
          <img
            class="test-reports-right-image-bg"
            :src="examiningReportBg"
            alt="检测报告背景"
          />
          <img
            class="test-reports-right-image-1"
            :src="examiningReport"
            alt="检测报告"
          />
          <img
            class="test-reports-right-image-2"
            :src="examiningReport"
            alt="检测报告"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import highVoltageTest from "@/assets/high-voltage-test1.png";
import highVoltageTest2 from "@/assets/high-voltage-test2.png";
import highVoltageTest3 from "@/assets/high-voltage-test3.png";
import highVoltageTest4 from "@/assets/high-voltage-test4.png";
import highVoltageTest5 from "@/assets/high-voltage-test5.png";
import KEMA from "@/assets/KEMA.png";
import examiningReport from "@/assets/examining-report.png";
import examiningReportBg from "@/assets/examining-report-bg.png";
import arrowGray from "@/assets/arrow-gray.png";
import arrowWhite from "@/assets/arrow-white.png";

const deviceList = [
  {
    name: "600kN、1000kN、2000kN材料试验机",
  },
  {
    name: "双工位热机、三工位热机",
  },
  {
    name: "1800kV冲击试验发生器",
  },
  {
    name: "500kV试验变压器",
  },
  {
    name: "无线电干扰/可见电晕测试仪",
  },
  {
    name: "体积电阻仪及离子迁移分析设备",
  },
];
</script>

<style scoped lang="scss">
.quality-assurance-container {
  padding: 74px 130px 1px;
}

.section {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-normal-title {
  font-size: 44px;
  font-weight: 700;
  color: #333;
  position: relative;
  display: flex;
  align-items: center;

  span {
    color: var(--primary-color);
    margin-left: 5px;
  }
}

/* Testing Center Section */
.testing-center-description {
  margin-top: 60px;
  margin-bottom: 30px;
  p {
    line-height: 38px;
    font-size: 17px;
    color: #333;
    text-align: justify;
  }
}

.high-voltage-tests {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
}

.test-item {
  width: 525px;
  height: 425px;
  position: relative;
}

.test-item-1 {
  width: 1080px;
  height: 425px;
}

.test-image {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.test-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  line-height: 50px;
  text-align: center;
}

.testing-center-device {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  border: 1px solid #aac2db;
  border-radius: 10px;
  padding: 40px;

  .device-item {
    width: calc(33.333% - 20px);
    padding-left: 80px;

    .device-name {
      font-size: 17px;
      color: #333;
      &::before {
        content: "";
        width: 10px;
        height: 10px;
        background-color: var(--primary-color);
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
}

.testing-center-description2 {
  width: 100%;
  margin-top: 30px;
  p {
    line-height: 38px;
    font-size: 17px;
    color: #333;
  }
}

/* KEMA Certificate Section */
.kema-description {
  margin-top: 60px;
  margin-bottom: 30px;
  p {
    line-height: 38px;
    font-size: 17px;
    color: #333;
    text-align: justify;
  }
}

.kema-certificates {
  width: 100%;
  margin-top: 50px;
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
  box-shadow: 0px 0px 20px 0px #b9b9b9;
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

.kema-certificates-carousel {
  display: flex;
  gap: 40px;
  overflow: hidden;
  flex: 1;
}

.kema-certificates-item {
  flex: 1;
  width: 384px;
  height: 453px;
  border: 1px solid #c6d8e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kema-certificates-image {
  width: 278px;
  height: 393px;
  .img {
    width: 100%;
    height: auto;
  }
}

/* Test Reports Section */
.test-reports-container {
  margin-top: 80px;
  width: 100%;
  height: 678px;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  .test-reports-left {
    width: 680px;
    .test-reports-info {
      margin-top: 163px;
      p {
        line-height: 38px;
        font-size: 17px;
        color: #333;
      }
    }

    .test-reports-type {
      margin-top: 106px;
      display: flex;
      gap: 57px;
      .type-item {
        width: 273px;
        height: 125px;
        background-image: url("@/assets/ear-of-wheat.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-size: 26px;
          font-weight: 700;
          color: #bc740d;
          text-align: center;
        }
      }
    }
  }

  .test-reports-right {
    flex: 1;
    position: relative;
    .test-reports-right-image-bg {
      position: absolute;
      bottom: 0;
      right: -15px;
      width: 100%;
      height: 427px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .test-reports-right-image-1 {
      position: absolute;
      top: 50px;
      left: 75px;
      width: 323px;
      height: 404px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .test-reports-right-image-2 {
      position: absolute;
      top: 0px;
      left: 536px;
      width: 323px;
      height: 404px;
    }
  }
}
</style>

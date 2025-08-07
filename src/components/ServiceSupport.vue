<template>
  <div class="service-support">
    <!-- 联系方式 Contact Methods Section -->
    <div class="service-support-section">
      <div class="section-normal-title">联系<span>方式</span></div>
      <div class="contact-container">
        <!-- 左侧联系信息 -->
        <div class="contact-info-section">
          <!-- 顶部联系信息 -->
          <div class="top-contact-info">
            <div class="top-contact-info-column">
              <div class="contact-item-top">
                <img :src="phoneIcon" alt="Phone" class="contact-icon-top" />
                <span class="contact-text-top">电话：0799-6378286</span>
              </div>
              <div class="contact-item-top">
              <img :src="emailIcon" alt="Email" class="contact-icon-top" />
              <span class="contact-text-top">bstdc@sina.com</span>
            </div>
              <div class="contact-item-top">
                <img
                  :src="addressIcon"
                  alt="Location"
                  class="contact-icon-top"
                />
                <span class="contact-text-top"
                  >地址：江西省萍乡市安源区 高坑镇富田工业园</span
                >
              </div>
            </div>
            <div class="top-contact-info-column">
              <!-- <div class="contact-item-top">
                <img :src="phoneIcon" alt="Phone" class="contact-icon-top" />
                <span class="contact-text-top">0799-6378286</span>
              </div>
              <div class="contact-item-top">
                <img :src="emailIcon" alt="Email" class="contact-icon-top" />
                <span class="contact-text-top">bstdc@sina.com</span>
              </div> -->
              <div class="contact-item-top">
                <img :src="faxIcon" alt="fax" class="contact-icon-top" />
                <span class="contact-text-top">传真：304842955</span>
              </div>
              <div class="contact-item-top">
                <img
                  :src="zipIcon"
                  alt="Zip"
                  class="contact-icon-top"
                />
                <span class="contact-text-top"
                  >邮编：337000</span
                >
              </div>
              <div class="contact-item-top">
                <img
                  :src="websiteIcon"
                  alt="website"
                  class="contact-icon-top"
                />
                <span class="contact-text-top"
                  >网址：http://www.best-insulators.com</span
                >
              </div>
            </div>
          </div>

                    <!-- 底部部门联系信息和二维码 -->
          <div class="bottom-section">
            <!-- 部门联系信息 -->
            <div class="department-contact-info">
              <div class="department-column">
                <h4 class="department-title">国内事业部</h4>
                <div class="department-detail">
                  <span class="detail-label">经理:</span>
                  <span class="detail-value">罗经理</span>
                </div>
                <div class="department-detail">
                  <span class="detail-label">手机:</span>
                  <span class="detail-value">15007992875</span>
                </div>
                <div class="department-detail">
                  <span class="detail-label">邮箱:</span>
                  <span class="detail-value">bstdc@sina.com</span>
                </div>
                <div class="department-detail">
                  <span class="detail-label">网站:</span>
                  <span class="detail-value">www.jxbstdc.com</span>
                </div>
              </div>
              
              <div class="department-column">
                <h4 class="department-title">国际事业部</h4>
                <div class="department-detail">
                  <span class="detail-label">经理:</span>
                  <span class="detail-value">刘经理</span>
                </div>
                <div class="department-detail">
                  <span class="detail-label">手机:</span>
                  <span class="detail-value">15607990007</span>
                </div>
                <div class="department-detail">
                  <span class="detail-label">邮箱:</span>
                  <span class="detail-value">Gm@best-insulators.com</span>
                </div>
                <div class="department-detail">
                  <span class="detail-label">网站:</span>
                  <span class="detail-value">www.best-insulators.com</span>
                </div>
              </div>
            </div>
            
            <!-- 公众号二维码 -->
            <div class="qr-code-section">
              <div class="qr-code">
                <img :src="qrCode" alt="QR Code" />
                <p>公众号</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧地图 -->
        <div class="map-section">
          <div id="container" class="map"></div>
        </div>
      </div>
    </div>

    <!-- 联系信息 Contact Information Grid -->
    <!-- <div class="contact-grid">
      <div class="contact-item">
        <div class="icon-container">
          <img :src="emailIcon" alt="Email" />
        </div>
        <div class="label">电子邮箱</div>
        <div class="value">best@bestinsulators.com</div>
      </div>

      <div class="contact-item">
        <div class="icon-container">
          <img :src="faxIcon" alt="Phone" />
        </div>
        <div class="label">传真</div>
        <div class="value">04783-81934</div>
      </div>

      <div class="contact-item">
        <div class="icon-container">
          <img :src="addressIcon" alt="Address" />
        </div>
        <div class="label">地址</div>
        <div class="value">江西省萍乡市安源区高坑镇富田工业园</div>
      </div>

      <div class="contact-item">
        <div class="icon-container">
          <img :src="zipIcon" alt="Zip" />
        </div>
        <div class="label">邮编</div>
        <div class="value">337000</div>
      </div>

      <div class="contact-item">
        <div class="icon-container">
          <img :src="websiteIcon" alt="Website" />
        </div>
        <div class="label">网址</div>
        <div class="value">http://www.best-insulators.com</div>
      </div>

      <div class="contact-item">
        <div class="icon-container">
          <img :src="emailIcon" alt="Email" />
        </div>
        <div class="label">邮箱</div>
        <div class="value">bstd@sina.com</div>
      </div>
    </div> -->

    <!-- 问题解答 FAQ/Contact Form Section -->
    <div class="service-support-section">
      <div class="section-normal-title">问题<span>解答</span></div>
      <form class="contact-form">
        <div class="form-group">
          <input type="text" placeholder="留言标题" class="form-input" />
        </div>
        <div class="form-group">
          <textarea placeholder="留言内容"></textarea>
        </div>
        <div class="form-group">
          <input type="text" placeholder="联系邮箱" class="form-input" />
        </div>
        <div class="form-group captcha-group">
          <input type="text" placeholder="验证码" class="captcha-input" />
          <div class="captcha-image">
            <img :src="captchaIcon" alt="验证码" />
          </div>
          <button type="submit" class="submit-btn">提 交</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import emailIcon from "@/assets/email-icon.png";
import faxIcon from "@/assets/fax-icon.png";
import addressIcon from "@/assets/address-icon.png";
import zipIcon from "@/assets/zip-icon.png";
import websiteIcon from "@/assets/website-icon.png";
import captchaIcon from "@/assets/captcha.png";
import qrCode from "@/assets/qr-code.png";
import phoneIcon from "@/assets/phone-icon.png";

// 高德地图API密钥 - 请替换为您在高德开放平台申请的正式Web端开发者Key
const AMapKey = "be6e65e98ae45c055cef06faaf2ab464";

// 初始化高德地图
const initMap = () => {
  // 首先检查容器元素是否存在
  const mapContainer = document.getElementById("container");
  if (!mapContainer) {
    console.error("Map container element not found!");
    return;
  }

  console.log(
    "Map container dimensions:",
    mapContainer.offsetWidth,
    mapContainer.offsetHeight
  );

  // 确保容器尺寸合适
  if (mapContainer.offsetWidth === 0 || mapContainer.offsetHeight === 0) {
    console.error("Map container has zero width or height!");
    mapContainer.style.width = "100%";
    mapContainer.style.height = "300px";
  }

  // 解决Canvas2D性能警告
  const fixCanvasWarnings = () => {
    // 为所有canvas元素设置willReadFrequently属性
    setTimeout(() => {
      const mapContainer = document.getElementById("container");
      if (mapContainer) {
        const canvasElements = mapContainer.querySelectorAll("canvas");
        canvasElements.forEach((canvas) => {
          canvas.setAttribute("willReadFrequently", "true");
        });
      }
    }, 1000);
  };

  // 页面加载完成后执行
  document.addEventListener("DOMContentLoaded", fixCanvasWarnings);

  AMapLoader.load({
    key: AMapKey,
    version: "2.0",
    plugins: [
      "AMap.ToolBar",
      "AMap.Scale",
      "AMap.HawkEye",
      "AMap.MapType",
      "AMap.Geolocation",
      "AMap.Geocoder",
    ],
    // 安全密钥已在index.html中通过meta标签设置
    AMapUI: {
      version: "1.1",
      plugins: [],
    },
  })
    .then((AMap) => {
      // 设置Canvas2D属性，解决性能警告
      // const canvasAttributes = {
      //   willReadFrequently: true
      // };
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      // 创建地图实例
      const map = new AMap.Map("container", {
        // viewMode: '3D',
        zoom: 15,
        center: [113.959601, 27.647836], // 萍乡市大致坐标
        mapStyle: "amap://styles/normal",
        resizeEnable: true,
        canvasAttributes: ctx,
        touchZoom: true,
        dragEnable: true,
        zoomEnable: true,
        jogEnable: true,
        pitchEnable: true,
        rotateEnable: true,
        animateEnable: true,
        keyboardEnable: true,
        doubleClickZoom: true,
        scrollWheel: true,
      });

      // 解决触摸事件被动监听器警告 - 添加CSS解决方案
      const style = document.createElement("style");
      style.textContent = `
      #container * { 
        touch-action: pan-x pan-y; 
      }
    `;
      document.head.appendChild(style);

      // 添加地图控件
      map.addControl(new AMap.ToolBar());
      map.addControl(new AMap.Scale());

      // 地图加载完成后修复Canvas警告
      map.on("complete", fixCanvasWarnings);

      // 解析成功，获取经纬度
      const location = [113.959601, 27.647836];
      // 设置地图中心点
      map.setCenter(location);

      // 添加标记函数
      function addMarkers() {
        try {
          // 创建基础标记点 - 简化图标配置
          const marker = new AMap.Marker({
            position: location,
            title: "萍乡百斯特电瓷有限公司",
            map: map,
          });

          // 添加信息窗体
          const infoWindow = new AMap.InfoWindow({
            isCustom: false, // 使用默认窗体样式
            content: `
                <div class="info-window">
                  <h3 style="margin: 0 0 5px 0; font-size: 16px; color: #1e88e5;">萍乡百斯特电瓷有限公司</h3>
                  <p style="margin: 3px 0; font-size: 14px; color: #666;">江西省萍乡市安源区高坑镇福田工业园</p>
                  <p style="margin: 3px 0; font-size: 14px; color: #666;">乘车路线：公交36路金牛路口站下车</p>
                  <p style="margin: 3px 0; font-size: 14px; color: #666;">电话: 0799-6378286</p>
                </div>
              `,
            offset: new AMap.Pixel(0, 0),
          });

          // 点击标记时打开信息窗体
          marker.on("click", () => {
            infoWindow.open(map, marker.getPosition());
          });

          // 默认打开信息窗体，帮助用户看到标记位置
          infoWindow.open(map, marker.getPosition());
        } catch (e) {
          console.error("Error adding markers:", e);
        }
      }

      // 确保地图已完全加载后再添加标记
      if (map.getStatus().complete) {
        addMarkers();
      } else {
        map.on("complete", () => {
          console.log("Map completely loaded, now adding markers");
          addMarkers();
        });
      }
    })
    .catch((e) => {
      console.error("高德地图加载失败", e);
    });
};

// 监听可见性变化
// watch(() => props.visible, (isVisible) => {
//   if (isVisible && !mapInitialized.value) {
//     // 组件可见且地图尚未初始化时，初始化地图
//     initMap();
//     mapInitialized.value = true;
//   }
// }, { immediate: true });

onMounted(() => {
  // 给予DOM充足时间完全渲染后再初始化地图
  setTimeout(() => {
    console.log("Initializing map after timeout");
    initMap();
  }, 500); // 增加延迟时间到500ms
});
</script>

<style lang="scss" scoped>
.service-support {
  padding: 40px 130px 10px;
}

.service-support-section {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

// .section-title {
//   font-size: 20px;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 20px;
//   position: relative;
//   display: inline-block;
// }

// Contact Container - 左右布局
.contact-container {
  margin-top: 56px;
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: stretch;
}

// 左侧联系信息区域
.contact-info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: #f5f9fc;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

// 顶部联系信息
.top-contact-info {
  display: flex;
  gap: 40px;
}

.top-contact-info-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item-top {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-icon-top {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.contact-text-top {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

// 底部区域布局
.bottom-section {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

// 部门联系信息
.department-contact-info {
  flex: 1;
  display: flex;
  // gap: 30px;
}

.department-column {
  flex: 1;
}

.department-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  // text-align: center;
}

.department-detail {
  display: flex;
  margin-bottom: 8px;
  font-size: 14px;
}

.detail-label {
  color: #666;
  min-width: 50px;
  margin-right: 10px;
}

.detail-value {
  color: #333;
  font-weight: 500;
}

// 二维码区域
.qr-code-section {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-code {
  text-align: center;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.qr-code img {
  width: 120px;
  height: 120px;
  display: block;
  margin: 0 auto;
}

.qr-code p {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

// 右侧地图区域
.map-section {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.map {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

// 响应式设计
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .top-contact-info {
    flex-direction: column;
    gap: 20px;
  }
  
  .bottom-section {
    flex-direction: column;
    gap: 20px;
  }
  
  .department-contact-info {
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-info-section {
    padding: 20px;
  }
  
  .map {
    min-height: 300px;
  }
  
  .qr-code img {
    width: 100px;
    height: 100px;
  }
}

// Contact Grid
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.icon-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

// .icon-container img {
//   width: 30px;
//   height: 30px;
// }

.label {
  font-size: 18px;
  color: #000;
  margin-bottom: 5px;
}

.value {
  font-size: 24px;
  color: var(--primary-color);
}

// Contact Form
.contact-form {
  margin-top: 56px;
  width: 100%;
}

.form-group {
  margin-bottom: 25px;
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--primary-color);
  }
}

textarea {
  height: 184px;
  resize: none;
}

.captcha-group {
  display: flex;
  align-items: center;
}

.form-input {
  height: 87px;
}

.captcha-input {
  flex: 1;
  height: 87px;
}

.captcha-image {
  width: 249px;
  height: 87px;
  margin-left: 20px;
  margin-right: 90px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.submit-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0 25px;
  width: 247px;
  height: 87px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  //   &:hover {
  //     background-color: darken(#1e88e5, 10%);
  //   }
}

// Info window styles
:deep(.info-window) {
  padding: 5px 10px;

  h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
    color: var(--primary-color);
  }

  p {
    margin: 3px 0;
    font-size: 14px;
    color: #666;
  }
}

// 地图标记样式
:deep(.amap-marker-label) {
  border: none !important;
  background-color: transparent !important;
  padding: 0 !important;
}

:deep(.map-bubble) {
  background-color: var(--primary-color, #1e88e5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  white-space: nowrap;
}

:deep(.map-bubble::after) {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--primary-color, #1e88e5);
}

:deep(.amap-custom-label) {
  background-color: var(--primary-color, #1e88e5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  position: relative;
}

:deep(.amap-custom-label::after) {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--primary-color, #1e88e5);
}
</style>

<template>
  <div class="company-intro">
    <div class="about-container">
      <h2 class="about-section-title2">{{ t("aboutCompany.company") }}<span>{{ t("aboutCompany.intro") }}</span></h2>

      <div class="intro-content">
        <div class="intro-text" v-html="companyIntroData"></div>
        <div class="intro-video">
          <div class="video-container">
            <!-- 视频缩略图，点击后隐藏 -->
            <div v-if="!isPlaying" class="video-thumbnail" @click="startVideo">
              <img :src="videoThumb" alt="企业宣传片" />
              <div class="play-button">
                <img :src="playIcon" alt="播放" />
              </div>
              <div class="video-caption">点击查看企业宣传片</div>
            </div>
            <!-- 视频播放器，播放时显示 -->
            <div v-if="isPlaying" class="video-player-container">
              <video 
                ref="videoPlayer"
                controls 
                autoplay
                :src="videoUrl"
                class="video-player"
                @ended="onVideoEnded"
              >
                您的浏览器不支持视频播放。
              </video>
              <!-- <button class="close-video-btn" @click="stopVideo">×</button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="intro-text-end" v-html="companyIntroData2">
        
      </div>
    </div>
    <div class="statistics">
      <div class="statistics-divider"></div>
      <div class="statistics-container">
        <div class="stat-item" v-for="item in statisticsData" :key="item.id">
          <div class="stat-number">{{ item.description }}<span class="unit">{{ item.unit }}</span></div>
          <div class="stat-label">{{ item.title }}</div>
        </div>
        
      </div>
      <div class="statistics-divider"></div>
    </div>


  </div>
</template>

<script setup lang="ts">
// import companyVideoThumb from "../assets/company-video-thumb.png";
import playIcon from "../assets/play-icon.png";
import { useI18n } from "vue-i18n";
import { ref, nextTick } from "vue";
import { getCompanyIntro } from "@/api/about";
const { t } = useI18n();

const baseUrl = window.__env__.VITE_API_URL as any;
const videoUrl = ref('');
const videoThumb = ref('');

// 视频播放相关状态
const isPlaying = ref(false);
const videoPlayer = ref<HTMLVideoElement>();

// 公司介绍数据
const companyIntroData = ref<string>('');
const companyIntroData2 = ref<string>('');

const statisticsData = ref<any[]>([]);

// 开始播放视频
const startVideo = () => {
  isPlaying.value = true;
  // 确保视频元素在下一个tick后正确渲染
  nextTick(() => {
    if (videoPlayer.value) {
      videoPlayer.value.load(); // 预加载视频
    }
  });
};

// 停止播放视频 - 暂时未使用，保留以备后用
// const stopVideo = () => {
//   isPlaying.value = false;
//   // 停止视频播放
//   if (videoPlayer.value) {
//     videoPlayer.value.pause();
//     videoPlayer.value.currentTime = 0;
//   }
// };

// 视频播放结束
const onVideoEnded = () => {
  isPlaying.value = false;
};

const getCompanyIntroData = async () => {
  try {
    const res = await getCompanyIntro();
    console.log(res);
    
    // 根据服务器返回的数据结构，提取公司介绍内容
    if (res && res.data && res.data.data) {
      const data = res.data.data;
      // 假设服务器返回的数据结构中有 content 字段
      companyIntroData.value = data.content1;
      videoUrl.value = baseUrl + data.video.url;
      videoThumb.value = baseUrl + data.image.url;
      companyIntroData2.value = data.content2;
      statisticsData.value = data.tags;
    }
  } catch (error) {
    console.error('获取公司介绍数据失败:', error);
  }
}
getCompanyIntroData();

</script>

<style lang="scss" scoped>
.about-container {
  padding: 0 130px;
}

.about-section-title2 {
  font-size: 40px;
  font-weight: 700;
  position: relative;
  margin-top: 60px;
  width: 100%;
  text-align: left;

  span {
    color: var(--primary-color);
  }
}

.company-intro {
  .intro-content {
    display: flex;
    gap: 102px;
    color: #000;
    margin-top: 20px;

    .intro-text {
      flex: 1;
      margin-top: 20px;

      :deep(p) {
        font-size: 16px;
        font-weight: 500;
        line-height: 36px;
        margin-bottom: 20px;
      }
    }

    .intro-video {
      width: 899px;

      .video-container {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        // border-radius: 10px;
        // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

        .video-thumbnail {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          // aspect-ratio: 16 / 9; // 设置固定的宽高比

          &:hover {
            transform: scale(1.02);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover; // 保持图片比例
          }

          .play-button {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            width: 112px;
            height: 112px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .video-caption {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 20px;
          color: #fff;
          font-weight: 700;
          text-align: center;

          &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #fff;
          }
        }

        .video-player-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9; // 设置固定的宽高比
          transition: all 0.3s ease;

          .video-player {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            object-fit: cover; // 保持视频比例
          }

          .close-video-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.7);
            border: none;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
            z-index: 10;

            &:hover {
              background-color: rgba(0, 0, 0, 0.9);
            }
          }
        }
      }
    }
  }

  .intro-text-end {
    :deep(p) {
      font-size: 16px;
      font-weight: 500;
      line-height: 36px;
      color: #000;
    }
  }
}

// Statistics Section
.statistics {
  padding: 70px 130px;

  .statistics-divider {
    width: 100%;
    height: 1px;
    background-color: #b1b1b1;
    opacity: 0.3;
  }

  .statistics-container {
    display: flex;
    flex: 3;
    align-items: center;
    padding: 8px 0;
  }

  .stat-item {
    text-align: center;
    height: 242px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--el-border-color);
    
    &:last-child {
      border-right: none;
    }

    .stat-number {
      font-size: 60px;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;

      .unit {
        font-size: 16px;
        color: #333;
        margin-left: 16px;
      }
    }

    .stat-label {
      margin-top: 15px;
      font-size: 16px;
      color: #000;
    }
  }
}
</style> 
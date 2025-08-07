<template>
  <div class="chairman-speech">
    <div class="about-container">
      <h2 class="about-section-title">{{ t("aboutCompany.chairman") }}<span>{{ t("aboutCompany.speech") }}</span></h2>

      <div class="speech-content">
        <div class="chairman-info">
          <div class="chairman-image">
            <img :src="chairman" alt="董事长刘家盛" />
          </div>
          <div class="chairman-info-text">
            <h3>立志成为全球一流具有核心竞争力的百年企业</h3>
            <div class="chairman-name">
              <h4>刘家盛</h4>
              <span class="chairman-title">董事长</span>
            </div>
            <div class="divider"></div>
            <div class="chairman-description">
              <p>
                萍乡百斯特电瓷有限公司董事长、党支部书记、中共党员、高级工程师、控股股东、中国电器工业协会电瓷专业委员会、第八届委员会委员、中国电器工业协会电瓷专业
                委员会委员、全国绝缘子标准化技术委员会委员、萍乡市第十六届人大代表。
              </p>
              <p>
                荣获：<br />
                "第二届全国退役军人创业创新大赛优胜奖""全国优秀退役军人""江西省退役军人优秀创业者""江西省优秀企业家""江西省科技进步二等奖""萍乡市劳动模范"
                等荣誉、个人发明/实用新型专利共计12项、参与制定、修订国家级行业标准3项。
              </p>
              <p>
                君子务本，本立而道生；敬事而信，直道而事人。<br />
                百斯特电瓷发展十余载，可谓经营十余载、风雨十余载、收获十余载。从创业初期的商海
                "泛舟"
                到国网特高压供应商，我们走过了一段用血汗和智慧铺就的奋斗之路。
                和而不同，三省吾身。成为全球受人尊敬的电网核心零部件供应商是百斯特追求的目标，是镌刻于每位员工内心的愿景，更是我们为客户提供优质产品的动力和信念。回
                眸企业发展，坚守建功立业精神，立志成为全球一流。
              </p>
            </div>
          </div>
        </div>

        <div class="speech-text">
          <div class="speech-text-title">尊敬的客人和朋友：</div>

          <p>
            首先我谨代表萍乡百斯特电瓷有限公司感谢您的关注，感谢您对公司的信任，感谢您对我们产品的厚爱，感谢您对我们事业的发展给予的精诚合作和竭力支持！热情好客的百斯特人
            热诚欢迎广大的客户和朋友作客我们的网站，也热忱欢迎各位客户和朋友前来考察治谈，共谋合作。
          </p>

          <p>
            百斯特自2007年改建至今已有十余载了，可谓经营十余载、风雨十余载、收获十余载。从创业初期的商海
            "泛舟" 到全国同行业综合实力排名前三，我们走过了一段用血汗和智慧铺
            就的奋斗之路。我们感谢社会各界对百斯特的大力支持和无私厚爱，感谢辛勤工作在各个岗位上兢兢业业的同仁们！
          </p>

          <p>
            君子务本，本立而道生；敬事而信，直道而事人。每一个人在生活和工作中闪耀着务实求精和诚以待人的光辉，使我们的合作者和我们一样更加信心百倍地迎接朝阳。
          </p>

          <p>
            和而不同，三省吾身。成为全球受人尊敬的电力设备供应商是百斯特的追求目标，是镌刻于每位员工内心的愿景，更是我们为客户提供优质工程的动力和信念。回眸企业发展，再创
            建功立业精神。只有这样，我们才能无愧于我们的国家，无愧于历史。
          </p>

          <p>
            德不孤，必有邻忠恕之道，仁者爱人。优秀的思想源于优秀的文化，内修其身、外行其道，以人为本是百斯特企业文化的精髓。求真务实，待人宽诚，追求博大精深，发展永无止境
            我们将继往开来，孜孜追求卓越品质和服务，营造真诚协作、开拓进取的共赢格局。
          </p>
          <p>
            路漫漫其修远，我们从不奢望水到渠成，更不幻想一步登天，我们只愿一如既往地秉承
            "诚信尽职、专注专业、协作进取、创新发展"
            的企业精神，以良好的品行来推动企业的发展，
            永远和您携手去追求本该属于我们的事业！我们真诚期望以此网络信息化平台，搭建起与每一位客户和朋友同心携手、相互了解、相互沟通、诚信合作的友谊之路，与广大客户和朋友休
            戚与共、合作共赢，同心绘制美好蓝图，携手铸就明日辉煌，达到
            "奉献社会，永续经营" 的企业目标！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chairman from "../assets/chairman.png";
import { useI18n } from "vue-i18n";
import { getPresidentSpeech } from "@/api/about";
const { t } = useI18n();

const getPresidentSpeechData = async () => {
  const res = await getPresidentSpeech();
  console.log(res);
}
getPresidentSpeechData();
</script>

<style lang="scss" scoped>
.about-container {
  padding: 0 130px;
}

.about-section-title {
  font-size: 40px;
  font-weight: 700;
  position: relative;
  margin-top: 60px;
  width: 100%;
  text-align: center;
  
  span {
    color: var(--primary-color);
  }
}

.chairman-speech {
  .speech-content {
    margin-top: 86px;
    .chairman-info {
      display: flex;
      width: 100%;

      .chairman-image {
        width: 461px;
        height: 679px;
      }

      .chairman-info-text {
        flex: 1;
        padding-left: 72px;
        color: #000;

        h3 {
          font-size: 40px;
          font-weight: bold;
          line-height: 1;
          margin-top: 34px;
          margin-bottom: 84px;
        }

        .chairman-name {
          display: flex;
          align-items: baseline;
          margin-bottom: 25px;

          h4 {
            font-size: 40px;
            font-weight: 700;
            line-height: 1;
            margin-right: 25px;
          }

          .chairman-title {
            font-size: 20px;
            font-weight: bold;
            color: #41c0ff;
          }
        }

        .divider {
          height: 1px;
          background-color: #e5e5e5;
          margin-bottom: 30px;
        }

        .chairman-description {
          p {
            font-size: 16px;
            font-family: SourceHanSansCN, SourceHanSansCN;
            line-height: 38px;
            color: #333;
            margin-bottom: 30px;
            text-align: justify;
          }
        }
      }
    }

    .speech-text {
      margin-top: 60px;
      padding-bottom: 60px;
      font-size: 20px;
      font-family: SourceHanSansCN, SourceHanSansCN;
      line-height: 36px;
      color: #000;
      .speech-text-title {
        margin-bottom: 24px;
      }
      p {
        text-indent: 2em;
        line-height: 48px;
      }

      .signature {
        margin-top: 40px;
        text-align: right;
        padding-right: 100px;

        img {
          height: 80px;
        }
      }
    }
  }
}
</style> 
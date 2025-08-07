<script setup lang="ts">
import BaseLink from './BaseLink.vue';
// Footer component
</script>

<template>
  <footer class="footer">
    <div>
      <div class="footer-content">
        <div class="footer-nav">
          <h3>走进百斯特</h3>
          <ul>
            <li><BaseLink to="/about/company">公司简介</BaseLink></li>
            <li><BaseLink to="/about/chairman">董事长致辞</BaseLink></li>
            <li><BaseLink to="/about/culture">企业文化</BaseLink></li>
            <li><BaseLink to="/about/honors">荣誉资质</BaseLink></li>
            <li><BaseLink to="/about/development">发展历程</BaseLink></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>产品中心</h3>
          <ul>
            <li><BaseLink to="/products">产品介绍</BaseLink></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>新闻资讯</h3>
          <ul>
            <li><BaseLink to="/news/company-news">公司新闻</BaseLink></li>
            <li><BaseLink to="/news/industry-news">行业新闻</BaseLink></li>
            <li><BaseLink to="/news/notice">通告公告</BaseLink></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>产能开发</h3>
          <ul>
            <li><BaseLink to="/research/researchCenter">研发中心</BaseLink></li>
            <li><BaseLink to="/research/smartAutomation">智能自动化工艺设备</BaseLink></li>
            <li><BaseLink to="/research/qualityAssurance">优品保障</BaseLink></li>
            <li><BaseLink to="/research/projectPerformance">工程业绩</BaseLink></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>人才专区</h3>
          <ul>
            <li><BaseLink to="/contact/talent-concept">人才专区</BaseLink></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>服务与支持</h3>
          <ul>
            <li><BaseLink to="/contact/service-support">服务与支持</BaseLink></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>萍乡百斯特电器有限公司</h3>
          <ul>
            <li>地址：江西省萍乡市安源区高坑镇富田工业园</li>
            <li>邮编：337042</li>
            <li>邮箱：bstdc@sina.com</li>
            <li>电话：0799-6378286</li>
            <li>网址：www.jxbstdc.com</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        版权所有&copy;萍乡百斯特电器有限公司 &nbsp;&nbsp;&nbsp;赣ICP备20006963号
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 36px 0;

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 36px;
    padding: 0 132px;
  }

  .footer-nav, .footer-contact {
    flex: 1;
    min-width: 150px;
    margin-bottom: 16px;
    padding: 0 10px;

    h3 {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: normal;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: 8px;
        font-size: 14px;
        
        a {
          color: #ccc;
          text-decoration: none;
          
          &:hover {
            color: white;
          }
        }
      }
    }
  }

  .footer-contact {
    min-width: 250px;

    ul li {
      color: #ccc;
    }
  }

  .copyright {
    text-align: center;
    border-top: 1px solid #555;
    padding-top: 16px;
    color: #aaa;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-nav, .footer-contact {
    min-width: 100%;
  }
}
</style> 
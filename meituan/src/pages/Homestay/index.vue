<template>
  <div class="vessel">
    <!-- 头部 -->
    <div class="header">
      <div class="headerContent">
        <div class="logo">
          <a href="javascript:;" title="返回首页">
            <img src="./images/logo.svg" />
          </a>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="javascript:;">登录 / 注册</a>
            </li>
            <li>
              <a href="javascript:;">成为房东</a>
            </li>
            <li>
              <a href="javascript:;">下载App</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 主页面最大盒子 -->
    <div class="pageContainer">
      <!-- 轮播 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://img.meituan.net/iphoenix/fae12ad6cb45735f4835276ada9cb062167115.jpg.webp@2880w_460h_80Q_1e_1c"
              alt="家哥~~~"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://img.meituan.net/iphoenix/09ec58e3673a4d6aceabd9e1151781f95251800.png.webp@2880w_460h_80Q_1e_1c"
              alt="家哥~~~"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://p1.meituan.net/iphoenix/3d1f903d47e845f896568b43d3bccc282623564.jpg.webp@2880w_460h_80Q_1e_1c"
              alt="家哥~~~"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://p0.meituan.net/iphoenix/5b2af7457f8f0feb26c030aeefecb33f2393508.jpg.webp@2880w_460h_80Q_1e_1c"
              alt="家哥"
            />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination jiaxiangSwiper"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <!-- 中心布局 -->
      <div class="home-page">
        <!-- 主题精选最大盒子 -->
        <div class="section">
          <!-- 主题精选内容 -->
          <div class="rs-container">
            <div class="block-header">
              <h2>主题精选</h2>
              <i class="top-desc">LIST</i>
            </div>

            <div class="react-root">
              <div class="swiper">
                <ul class="topic-lists">
                  <li class="topic-list">
                    <a href="javaScript:;" class="topic-card">
                      <div class="pro-img cards">
                        <img
                          class="origin-img"
                          src="https://img.meituan.net/iphoenix/75bafc2e5fcd36718115b9cae2282709419532.png@446w_446h_80Q_1e_1c"
                          alt="..."
                        />
                      </div>
                      <div class="type">网红Ins风</div>
                    </a>
                  </li>
                  <li class="topic-list">
                    <a href="javaScript:;" class="topic-card">
                      <div class="pro-img cards">
                        <img
                          class="origin-img"
                          src="https://img.meituan.net/iphoenix/9c466d17c9b781424ed90b21acd957b6493129.png@446w_446h_80Q_1e_1c"
                          alt="..."
                        />
                      </div>
                      <div class="type">四合院</div>
                    </a>
                  </li>
                  <li class="topic-list">
                    <a href="javaScript:;" class="topic-card">
                      <div class="pro-img cards">
                        <img
                          class="origin-img"
                          src="https://img.meituan.net/iphoenix/16e4ec019cbb2107ce7b38a76013ca6c506149.png@446w_446h_80Q_1e_1c"
                          alt="..."
                        />
                      </div>
                      <div class="type">私人影院</div>
                    </a>
                  </li>
                  <li class="topic-list">
                    <a href="javaScript:;" class="topic-card">
                      <div class="pro-img cards">
                        <img
                          class="origin-img"
                          src="https://img.meituan.net/iphoenix/be0789eee29e2efc6e718fecfb5c0230312260.png@446w_446h_80Q_1e_1c"
                          alt="..."
                        />
                      </div>
                      <div class="type">美食烹饪</div>
                    </a>
                  </li>
                  <li class="topic-list">
                    <a href="javaScript:;" class="topic-card">
                      <div class="pro-img cards">
                        <img
                          class="origin-img"
                          src="https://img.meituan.net/iphoenix/d4f50b8f1be437687ca84450e96cc49c414277.png@446w_446h_80Q_1e_1c"
                          alt="..."
                        />
                      </div>
                      <div class="type">咖啡体验</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "homestay",
  mounted() {
    new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style scoped lang="less">
//头部
.header {
  width: 100%;
  background: #fff;
  margin-bottom: 8px;
  .headerContent {
    width: 1180px;
    height: 70px;
    line-height: 70px;
    margin: 0 auto;
    .logo {
      float: left;
      width: 142px;
      height: 70px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      ul {
        float: right;
        li {
          float: left;
          margin-left: 15px;
          a {
            display: block;
            height: 70px;
            line-height: 70px;
            color: #585a5a;
            font-size: 14px;
          }
        }
      }
    }
  }
}
// 轮播样式
.swiper-container {
  --swiper-navigation-size: 10px;
  --swiper-navigation-color: #fff;
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin-left: 30px;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .swiper-button-next {
    width: 35px;
    height: 35px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin-right: 30px;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
// 主题精选样式
.home-page {
  width: 100%;
  height: 1890px;

  .section {
    width: 100%;

    .rs-container {
      max-width: 1180px;
      padding: 0 15px;
      margin: 0 auto;

      .block-header {
        display: flex;
        margin-bottom: 16px;
        margin-top: 35px;

        h2 {
          font-size: 24px;
          font-weight: bold;
          line-height: 24px;
          color: #252626;
          letter-spacing: 0;
          margin: 0;
        }

        .top-desc {
          color: #cbcccd;
          font-size: 10px;
          margin-left: 4px;
        }
      }

      .react-root {
        .swiper {
          position: relative;

          .topic-lists {
            display: flex;

            &>li:first-child{
                margin-left: 0;
            }

            .topic-list {
              padding-bottom: 16px;
              margin-left: 16px;
              position: relative;
              z-index: 0;
              cursor: pointer;

              .topic-card {
                display: inline-block;
                overflow: hidden;

                .cards {
                  width: 223px !important;
                  height: 223px !important;
                  border-radius: 8px;
                  background-size: cover;

                  img {
                    border-radius: 8px;
                  }
                  .orgin-img {
                    width: 100%;
                    height: auto;
                  }
                }
                .type {
                  cursor: pointer;
                  font-size: 18px;
                  color: #fff;
                  font-weight: 500;
                  position: absolute;
                  bottom: 30px;
                  left: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
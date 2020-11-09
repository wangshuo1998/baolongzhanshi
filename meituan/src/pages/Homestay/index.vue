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
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://img.meituan.net/iphoenix/09ec58e3673a4d6aceabd9e1151781f95251800.png.webp@2880w_460h_80Q_1e_1c"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://p1.meituan.net/iphoenix/3d1f903d47e845f896568b43d3bccc282623564.jpg.webp@2880w_460h_80Q_1e_1c"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://p0.meituan.net/iphoenix/5b2af7457f8f0feb26c030aeefecb33f2393508.jpg.webp@2880w_460h_80Q_1e_1c"
            />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination jiaxiangSwiper"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 查找民宿 -->
        <div class="top_search-bar">
          <div class="recat-root">
            <div class="city">
              <ul class="home-search">
                <li class="home-search__item-city">
                  <div class="home-search__item-city_btn">
                    <button type="button" class="serch-menu">北京</button>
                    <i class="iconfont iconjiantouarrow483"></i>
                  </div>
                </li>
                <li class="home-search__item-city_data_form">
                  <el-date-picker
                    size="large"
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  >
                  </el-date-picker>
                </li>
                <li class="home-search__item_search">
                  <div class="home-search__item_search_btn">
                    <button>去开房呀</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 中心布局 -->
      <div class="home-page">
        <!-- 主题精选 -->
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
        <!-- 品牌民宿 -->
        <div class="section1">
          <div class="rs-container1">
            <div class="block-header1">
              <h2>品牌民宿</h2>
              <span class="top-desc1 brand">BRAND</span>
            </div>
            <div class="react-root1">
              <div class="card-list">
                <!-- 1号盒子 -->
                <div class="card-list-item">
                  <a class="product-card-container" href="javaScript:;">
                    <div class="product-card">
                      <div class="card-header">
                        <div class="product-image">
                          <div class="pro-img">
                            <img
                              src="https://p1.meituan.net/iphoenix/afb237f10e4ec01f09065791bcf2bf413056184.jpg@732w_412h_80Q_1e_1c"
                              alt="哦呦"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-info">
                        <div class="card-title">
                          【壹捌】极简北欧风现代艺术大3居/1层/三里屯太古里@CactusSpace
                        </div>
                        <div class="card-price">
                          <span class="card-price-latest">
                            <i class="unit">¥</i>
                            950
                          </span>
                          <div class="price-tag-wrapper"></div>
                          <div class="more"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card_location">
                      <div class="hr-line"></div>
                      <div class="location">
                        <div>
                          <i class="iconfont iconweizhi2"></i>
                          <span>北京 · 朝阳区</span>
                        </div>
                        <div class="iconfont iconshenglve"></div>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- 2号盒子 -->
                <div class="card-list-item">
                  <a class="product-card-container" href="javaScript:;">
                    <div class="product-card">
                      <div class="card-header">
                        <div class="product-image">
                          <div class="pro-img">
                            <img
                              src="https://p0.meituan.net/iphoenix/9ffdeb489e669d80cef370706e4cf1d67411175.jpg@732w_412h_80Q_1e_1c"
                              alt="哦呦"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-info">
                        <div class="card-title">
                          NUTS「PARTY」大床房【怀柔民宿】怀柔青龙峡
                          怀柔雁栖湖风景区 怀北漂流 雁栖湖 红螺寺 怀柔风景区
                        </div>
                        <div class="card-price">
                          <span class="card-price-latest">
                            <i class="unit">¥</i>
                            620
                          </span>
                          <div class="price-tag-wrapper"></div>
                          <div class="more"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card_location">
                      <div class="hr-line"></div>
                      <div class="location">
                        <div>
                          <i class="iconfont iconweizhi2"></i>
                          <span>北京 · 怀柔区</span>
                        </div>
                        <div class="iconfont iconshenglve"></div>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- 3号盒子 -->
                <div class="card-list-item">
                  <a class="product-card-container" href="javaScript:;">
                    <div class="product-card">
                      <div class="card-header">
                        <div class="product-image">
                          <div class="pro-img">
                            <img
                              src="https://p0.meituan.net/iphoenix/337716f4b918745432fe4d4522bc4d133114852.jpg@732w_412h_80Q_1e_1c"
                              alt="哦呦"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-info">
                        <div class="card-title">
                          【胡同派】四合院民宿 东二 英国获奖设计师
                          雍和宫/五道营/国子监/鼓楼/簋街
                        </div>
                        <div class="card-price">
                          <span class="card-price-latest">
                            <i class="unit">¥</i>
                            688
                          </span>
                          <div class="price-tag-wrapper"></div>
                          <div class="more"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card_location">
                      <div class="hr-line"></div>
                      <div class="location">
                        <div>
                          <i class="iconfont iconweizhi2"></i>
                          <span>北京 · 东城区</span>
                        </div>
                        <div class="iconfont iconshenglve"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="card-list">
                <!-- 4 -->
                <div class="card-list-item">
                  <a class="product-card-container" href="javaScript:;">
                    <div class="product-card">
                      <div class="card-header">
                        <div class="product-image">
                          <div class="pro-img">
                            <img
                              src="https://p0.meituan.net/iphoenix/9864704f0bf00aa666b665821ffddcaa2226801.jpg@732w_412h_80Q_1e_1c"
                              alt="哦呦"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-info">
                        <div class="card-title">
                          藏幽山水境 | 草木别院 |
                          问心【怀柔民宿】怀柔雁栖湖风景区
                          怀柔虹鳟鱼一条沟/神堂峪 怀柔慕田峪/红螺寺 怀柔风景区
                        </div>
                        <div class="card-price">
                          <span class="card-price-latest">
                            <i class="unit">¥</i>
                            1980
                          </span>
                          <div class="price-tag-wrapper"></div>
                          <div class="more"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card_location">
                      <div class="hr-line"></div>
                      <div class="location">
                        <div>
                          <i class="iconfont iconweizhi2"></i>
                          <span>北京 · 怀柔区</span>
                        </div>
                        <div class="iconfont iconshenglve"></div>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- 5号盒子 -->
                <div class="card-list-item">
                  <a class="product-card-container" href="javaScript:;">
                    <div class="product-card">
                      <div class="card-header">
                        <div class="product-image">
                          <div class="pro-img">
                            <img
                              src="https://img.meituan.net/phoenix/1879da0c7b9f96462dbde0be2d109c8e1131448.jpg@732w_412h_80Q_1e_1c"
                              alt="哦呦"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-info">
                        <div class="card-title">
                          「肆舍」玉渡山 龙庆峡 原生态独立小院
                        </div>
                        <div class="card-price">
                          <span class="card-price-latest">
                            <i class="unit">¥</i>
                            798
                          </span>
                          <div class="price-tag-wrapper"></div>
                          <div class="more"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card_location">
                      <div class="hr-line"></div>
                      <div class="location">
                        <div>
                          <i class="iconfont iconweizhi2"></i>
                          <span>北京 · 延庆区</span>
                        </div>
                        <div class="iconfont iconshenglve"></div>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- 6号盒子 -->
                <div class="card-list-item">
                  <a class="product-card-container" href="javaScript:;">
                    <div class="product-card">
                      <div class="card-header">
                        <div class="product-image">
                          <div class="pro-img">
                            <img
                              src="https://p1.meituan.net/iphoenix/61f1c8cdb86336c2a67d9e60c1ccc42d77062.jpg@732w_412h_80Q_1e_1c"
                              alt="哦呦"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-info">
                        <div class="card-title">
                          「大隐于世·冬奥小镇」北京延庆|六号院野鸭湖/世园会/玉渡山/开车仅需十分钟，带超大泳池·轰趴打卡地
                        </div>
                        <div class="card-price">
                          <span class="card-price-latest">
                            <i class="unit">¥</i>
                            2999
                          </span>
                          <div class="price-tag-wrapper"></div>
                          <div class="more"></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-card_location">
                      <div class="hr-line"></div>
                      <div class="location">
                        <div>
                          <i class="iconfont iconweizhi2"></i>
                          <span>北京 · 延庆区</span>
                        </div>
                        <div class="iconfont iconshenglve"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 热门入住地 -->
        <div class="section2">
          <div class="rs-container2">
            <div class="block-header2">
              <h2>热门入住地</h2>
              <i class="top-desc2">LDA</i>
            </div>
            <div class="recat-root2">
              <div class="mod-header2">
                <div class="hot-places">
                  <ul>
                    <li
                      class="current"
                      role="button"
                      @click="changeHotPlace(0)"
                    >
                      <div class="name" :class="{ active: hotPlaceNum === 0 }">
                        北京大兴国际机场
                      </div>
                      <div class="score">13%选择</div>
                      <div class="indicator" v-show="hotPlaceNum === 0"></div>
                    </li>
                    <li class role="button" @click="changeHotPlace(1)">
                      <div class="name" :class="{ active: hotPlaceNum === 1 }">
                        果园环岛/通州区
                      </div>
                      <div class="score">12%选择</div>
                      <div class="indicator" v-show="hotPlaceNum === 1"></div>
                    </li>
                    <li class role="button" @click="changeHotPlace(2)">
                      <div class="name" :class="{ active: hotPlaceNum === 2 }">
                        良乡大学城
                      </div>
                      <div class="score">15%选择</div>
                      <div class="indicator" v-show="hotPlaceNum === 2"></div>
                    </li>
                    <li class role="button" @click="changeHotPlace(3)">
                      <div class="name" :class="{ active: hotPlaceNum === 3 }">
                        小汤山温泉度假区
                      </div>
                      <div class="score">14%选择</div>
                      <div class="indicator" v-show="hotPlaceNum === 3"></div>
                    </li>
                  </ul>
                  <!-- <div class="indicator"></div> -->
                </div>
              </div>
              <div class="a-loader loader-hasContent">
                <div class="loader-content">
                  <div class="r-card-list">
                    <div
                      class="list-item"
                      v-for="airPortItem in placeList[hotPlaceNum]"
                      :key="airPortItem.id"
                    >
                      <a class="place" href="javaScript:;">
                        <div class="product-card">
                          <div class="product-card-header">
                            <div class="product-image">
                              <div class="pro-img">
                                <img
                                  class="origin-img"
                                  v-lazy="airPortItem.imgUrl"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="product-card-info">
                            <div class="product-card-title">
                              {{ airPortItem.title }}
                            </div>
                            <div class="product-card-type-detail">
                              {{ airPortItem.desc }}
                            </div>
                            <div class="product-card-price">
                              <span class="latest">
                                <i class="unit">¥</i>
                                {{ airPortItem.price }}
                              </span>
                              <div class="price-tag-wrapper"></div>
                              <div class="more-more"></div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-actions">
                <a href="javascript:;" class="more-action">查看更多民宿</a>
              </div>
            </div>
          </div>
        </div>
        <!-- 放心入住... -->
        <div class="section3">
          <div class="container3">
            <div class="insurance">
              <div class="insurance-item">
                <img
                  src="//s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/checkin-v81bf21c8.png"
                  alt="哦呦没得"
                />
                <h5>放心入住</h5>
                <p>千万保障先行赔付</p>
              </div>
              <div class="border3"></div>
              <div class="insurance-item">
                <img
                  src="//s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/service-vd5880d2e.png"
                  alt="哦呦没得"
                />
                <h5>贴心服务</h5>
                <p>7*24小时服务</p>
              </div>
              <div class="border3"></div>
              <div class="insurance-item">
                <img
                  src="//s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/icons/insurance/verify-va4e3c38c.png"
                  alt="哦呦没得"
                />
                <h5>信用认证</h5>
                <p>实名认证更放心</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部热门 -->
    <div class="hot">
      <dl class="hotList">
        <dt>热门城市</dt>
        <dd>北京的民宿</dd>
        <dd>上海的民宿</dd>
        <dd>南京的民宿</dd>
        <dd>杭州的民宿</dd>
        <dd>厦门的民宿</dd>
        <dd>武汉的民宿</dd>
        <dd>长沙的民宿</dd>
        <dd>广州的民宿</dd>
        <dd>深圳的民宿</dd>
        <dd>三亚的民宿</dd>
      </dl>
      <dl class="hotList">
        <dt>热门房源</dt>
        <dd>有厨具的民宿</dd>
        <dd>有洗衣机的民宿</dd>
        <dd>有今夜特价的民宿</dd>
        <dd>有限时折扣的民宿</dd>
        <dd>适合情侣的民宿</dd>
        <dd>视野开阔的民宿</dd>
        <dd>别墅</dd>
        <dd>复式loft</dd>
        <dd>度假民宅</dd>
      </dl>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="top">
        <div class="info">
          <h5>公司信息</h5>
          <ul>
            <li>关于我们</li>
            <li>工作机会</li>
          </ul>
        </div>
        <div class="info">
          <h5>网站帮助</h5>
          <ul>
            <li>规则中心</li>
            <li>网站地图</li>
            <li>民宿推荐</li>
          </ul>
        </div>
        <div class="info">
          <h5>人工客服</h5>
          <ul>
            <li>
              客服电话
              <span class="span1">400-0660-190</span>
            </li>
            <li>
              登录机会
              <span class="span2">1010788</span>
            </li>
          </ul>
        </div>
        <div class="codePic2">
          <div class="logo1">
            <!-- <img src="./images/logo1.png" alt=""> -->
          </div>
          <p>下载美团民宿APP</p>
        </div>
      </div>
      <p>
        <img src="./images/110.png" />
        <span>沪公网安备31010502000052号</span>
        <span>沪B2-20040012</span>
        <span>营业资质</span>
      </p>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapState } from "vuex";
export default {
  name: "homestay",
  data() {
    return {
      hotPlaceNum: 0,
      value1: "",
    };
  },
  mounted() {
    this.getPlaceList();
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
  methods: {
    getPlaceList() {
      this.$store.dispatch("getPlaceList");
    },
    changeHotPlace(index) {
      this.hotPlaceNum = index;
    },
  },
  computed: {
    ...mapState({
      placeList: (state) => state.minsuModule.placeList,
    }),
  },
};
</script>

<style scoped lang="less">
//头部
.header {
  width: 100%;
  background: #fff;
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
.pageContainer {
  // 轮播样式
  .swiper-container {
    position: relative;
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
}
// 查找民宿
.top_search-bar {
  width: 100%;
  height: 56.4px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  margin: 30px 0;
  z-index: 99;
  .recat-root {
    width: 760px;
    height: 56.4px;
    // background: springgreen;
    margin: 0 auto;

    .home-search {
      width: 50vw;
      height: 56.4px;
      max-width: 760px;
      display: flex;
      background: #fff;
      border-radius: 8px;
      font-size: 14px;
      z-index: 999;
      margin: 0 auto;
      position: relative;
      .home-search__item-city {
        width: 190px;
        height: 56.4px;
        flex-grow: 0;
        flex-shrink: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        margin-right: 10px;
        border-right: 1px solid #ccc;

        .home-search__item-city_btn {
          button {
            background: none;
            border: none;
            color: #252626;
            cursor: pointer;
            margin-right: 5px;
            transition: all linear 0.3s;
          }
          i {
            display: inline-block;
            background-color: #ccc;
            border-radius: 50%;
            font-size: 12px;
            width: 14px;
            height: 14px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            transition: all linear 0.3s;
          }
          &:hover button {
            color: #159cff;
          }
          &:hover i {
            background-color: #159cff;
            transform: rotate(180deg);
          }
        }
      }
      .home-search__item-city_data_form {
        line-height: 56.4px;
        .el-input__inner {
          border: none;
        }
      }
      .home-search__item_search {
        margin-left: auto;
        line-height: 56.4px;

        .home-search__item_search_btn {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          button {
            width: 120px;
            height: 44px;
            line-height: 44px;
            font-size: 18px;
            border-radius: 5px;
            background: none;
            border: none;
            color: #252626;
            cursor: pointer;
            margin-right: 5px;
            background-image: linear-gradient(
              90deg,
              #ffe24c,
              #ffde35 60%,
              #ffdb25
            );
            box-shadow: 0 2px 10px 0 rgba(37, 38, 38, 0.03),
              0 2px 10px 0 rgba(255, 220, 44, 0.2);
          }
        }
      }
    }
  }
}

.home-page {
  width: 100%;
  // height: 1890px;
  // 主题精选样式
  .section {
    width: 100%;
    padding-bottom: 40px;

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

            & > li:first-child {
              margin-left: 0;
            }

            .topic-list {
              padding-bottom: 16px;
              margin-left: 16px;
              position: relative;
              z-index: 0;
              cursor: pointer;

              &::before {
                content: "";
                width: 180px;
                height: 180px;
                background: #eceef4;
                border-radius: 10px;
                position: absolute;
                left: 21px;
                bottom: 0;
                z-index: -1;
              }

              .topic-card {
                display: inline-block;
                overflow: hidden;

                &::after {
                  content: "";
                  background: #e1e3ea;
                  padding: 0 11px;
                  width: 200px;
                  height: 200px;
                  border-radius: 10px;
                  position: absolute;
                  left: 10px;
                  bottom: 10px;
                  z-index: -1;
                }

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
  // 品牌民宿
  .section1 {
    width: 100%;
    padding-top: 40px;

    .rs-container1 {
      max-width: 1180px;
      padding: 0 15px;
      margin: 0 auto;

      .block-header1 {
        display: flex;
        margin-bottom: 16px;

        h2 {
          font-size: 24px;
          font-weight: bold;
          line-height: 24px;
          color: #252626;
          letter-spacing: 0;
          margin: 0;
        }

        .top-desc1 {
          background-image: linear-gradient(
            -135deg,
            #e5b46a,
            #fadda1 36%,
            #dfb264
          );
          text-shadow: 0 6px 2px #e3c193;
          color: #cbcccd;
          font-size: 10px;
          margin-left: 4px;
          font-family: MThom, X-LocaleSpecific-Sans, Arial, sans-serif;
          height: 14px;
          border-radius: 2px;
          font-size: 10px;
          font-weight: bold;
          color: #fff;
          padding: 2px 4px;
          line-height: 9px;
        }
      }

      .react-root1 {
        width: 100%;
        height: 728px;
        // background: tan;

        .card-list {
          margin: -10px -8px;
          width: 100%;
          display: flex;
          // background: yellowgreen;

          .card-list-item {
            width: 33.33333333%;
            min-width: 245px;
            padding: 10px 8px;

            .product-card-container {
              width: 372.66px;
              height: 100%;
              display: flex;
              flex-direction: column;
              border-radius: 8px;
              background: #fff;
              position: relative;
              transition: opacity 0.3s ease-in-out;

              .product-card {
                padding: 8px 8px 12px;
                flex-grow: 1;
                flex-shrink: 0;

                .card-header {
                  position: relative;
                  height: 0;
                  border-radius: 4px;
                  padding-top: 56.25%;

                  .product-image {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    overflow: hidden;
                    border-radius: 4px;

                    .pro-img {
                      background-size: cover;
                      border-radius: 4px;
                      background-repeat: no-repeat;
                      line-height: 0;
                      -webkit-transform: translateZ(0);
                      transform: translateZ(0);
                      width: auto;
                      height: auto;
                      -webkit-filter: none;
                      filter: none;
                      background-color: #ddd;
                      background-image: none;

                      .origin-img {
                        width: 100%;
                        height: auto;
                      }
                    }
                  }
                }

                .card-info {
                  margin-top: 12px;
                  position: relative;

                  .card-title {
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 500;
                    color: #252626;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    // 文本超出...样式
                    white-space: wrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                  }

                  .card-price {
                    margin-top: 13px;
                    white-space: nowrap;
                    position: relative;
                    display: flex;

                    .card-price-latest {
                      font-weight: 900;
                      font-size: 24px;
                      color: #ff4d6a;

                      .unit {
                        font-size: 12px;
                        margin-right: 2px;
                      }
                    }

                    .price-tag-wrapper {
                      display: inline-block;
                      margin-left: 6px;
                      margin-right: 60px;
                      overflow-x: auto;
                      position: relative;
                      -ms-overflow-style: none;
                      padding-right: 10px;
                    }

                    .more {
                      content: "";
                      background-image: linear-gradient(
                        270deg,
                        #fff,
                        hsla(0, 0%, 100%, 0)
                      );
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      right: 0;
                      width: 15px;
                      right: 60px;
                      right: 0;
                    }
                  }
                }
              }

              .product-card_location {
                .hr-line {
                  height: 1px;
                  width: 200%;
                  background: rgba(237, 240, 242, 0.99);
                  -webkit-transform-origin: left top;
                  -ms-transform-origin: left top;
                  transform-origin: left top;
                  -webkit-transform: scale(0.5);
                  -ms-transform: scale(0.5);
                  transform: scale(0.5);
                }

                .location {
                  padding: 8px;
                  display: flex;
                  justify-content: space-between;
                  span {
                    color: #333;
                    font-size: 14px;
                  }

                  .iconfont {
                    color: #3e88ff;
                    margin-right: 4px;
                    margin-top: 4px;
                    font-size: 14px;
                    fill: currentColor;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // 热门入住地
  .section2 {
    width: 100%;
    padding-top: 40px;

    .rs-container2 {
      max-width: 1180px;
      padding: 0 15px;
      margin: 0 auto;
      .block-header2 {
        display: flex;
        margin-bottom: 16px;

        h2 {
          font-size: 24px;
          line-height: 24px;
          color: #252626;
          letter-spacing: 0;
          margin: 0;
          font-weight: 700;
        }

        .top-desc2 {
          color: #cbcccd;
          font-size: 10px;
          margin-left: 4px;
        }
      }
      .recat-root2 {
        width: 1150px;
        // background: rgb(236, 139, 139);

        .mod-header2 {
          margin-bottom: 10px;

          .hot-places {
            // position: relative;

            ul {
              list-style: none;
              display: flex;
              padding: 0;
              margin-bottom: 0;
              margin-left: -15px;
              white-space: nowrap;

              li {
                position: relative;
                padding: 0 15px 12px;
                cursor: pointer;
                & > div:first-child {
                  color: #cdcccd;
                }
                .name {
                  // color: #252626;
                  // color: #cdcccd;
                  &.active {
                    color: #252626;
                  }
                  font-weight: 700;
                  font-size: 16px;
                  color: #cdcccd;
                }
                .score {
                  color: #7d7e80;
                  font-size: 12px;
                  // color: #cdcccd;
                  margin-top: 6px;
                }
                .indicator {
                  // visibility: visible;
                  width: 80%;
                  position: absolute;
                  left: 15px;
                  background: #494b50;
                  border-radius: 2px;
                  height: 4px;
                  bottom: 0;
                  // pointer-events: none;
                }
              }
            }

            // .indicator {
            //   visibility: visible;
            //   width: 128px;
            //   position: absolute;
            //   left: 0;
            //   background: #494b50;
            //   border-radius: 2px;
            //   height: 4px;
            //   bottom: 0;
            //   pointer-events: none;
            // }
          }
        }

        .a-loader {
          .loader-content {
            .r-card-list {
              margin: -10px -8px;
              align-items: stretch;

              .list-item {
                width: 33.33333333%;
                min-width: 168px;
                padding: 10px 8px;
                flex-shrink: 0;
                flex-basis: auto;
                display: inline-flex;
                align-items: stretch;

                .place {
                  width: 100%;

                  .product-card {
                    padding: 8px 8px 12px;
                    flex-grow: 1;
                    flex-shrink: 0;

                    .product-card-header {
                      position: relative;
                      height: 0;
                      padding-top: 56.25%;

                      .product-image {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        overflow: hidden;
                        background: #e5b46a;

                        .pro-img {
                          background-repeat: no-repeat;
                          line-height: 0;
                          -webkit-transform: translateZ(0);
                          transform: translateZ(0);
                          width: auto;
                          height: auto;
                          -webkit-filter: none;
                          filter: none;

                          .origin-img {
                            width: 100%;
                            height: auto;
                          }
                        }
                      }
                    }

                    .product-card-info {
                      margin-top: 12px;
                      position: relative;

                      .product-card-title {
                        font-size: 16px;
                        line-height: 20px;
                        font-weight: 500;
                        color: #252626;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      }

                      .product-card-type-detail {
                        margin: 12px 0;
                        font-size: 14px;
                        color: #8a9094;
                        white-space: pre-wrap;
                      }
                      .product-card-price {
                        margin-top: 13px;
                        white-space: nowrap;
                        position: relative;
                        display: flex;

                        .latest {
                          font-weight: 700;
                          font-size: 24px;
                          color: #ff4d6a;

                          .unit {
                            font-size: 12px;
                            margin-right: 2px;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .footer-actions {
          // margin-top: 24px;
          .more-action {
            color: #252626;
            font-weight: 700;
            font-size: 16px;
            display: block;
            background: #fff;
            text-align: center;
            border-radius: 8px;
            padding: 16px 0;
          }
        }
      }
    }
  }
  // 放心入住...
  .section3 {
    padding: 0 0 40px !important;
    background-color: #f5f6fa;
    margin-bottom: 0;

    .container3 {
      width: 1200px;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;

      .insurance {
        text-align: center;
        display: flex;
        justify-content: space-around;

        div {
          width: 112px;
          height: 88.8px;
          display: inline-block;
          color: #999;

          img {
            max-height: 30px;
            max-width: 33px;
          }
          h5 {
            white-space: nowrap;
            text-align: center;
            color: #666;
            line-height: 13px;
            font-size: 18px;
            font-weight: 700;
            line-height: 18px;
            margin: 10px auto;
          }
          p {
            font-size: 14px;
            color: #999;
            line-height: 14px;
          }
        }
        .border3 {
          border-left: 1px solid #e1e6ea;
        }
      }
    }
  }
}

// 底部热门
.hot {
  width: 1200px;
  margin: 50px auto;
  padding: 0 15px 20px 15px;
  border-bottom: 1px solid #f0f2f5;
  dl {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 20px;
    dt {
      display: inline-block;
      font-weight: 700;
      line-height: 20px;
      font-size: 14px;
      color: #333;
      width: 96px;
    }
    dd {
      display: inline-block;
      color: #666;
      line-height: 20px;
      margin-right: 40px;
    }
  }
}
//底部
.footer {
  width: 1200px;
  margin: 0 auto;
  .top {
    width: 100%;
    padding-bottom: 42px;
    border-bottom: 1px solid #f0f2f5;
    display: flex;
    justify-content: space-between;
    .info {
      h5 {
        font-weight: 700;
        margin-bottom: 20px;
        font-size: 23px;
      }
      li {
        color: #87888a;
        font-size: 17px;
        margin-bottom: 12px;
        font-weight: 500;
        .span1 {
          font-size: 23px;
          font-weight: 700;
          color: #252626;
          margin-left: 12px;
        }
        .span2 {
          font-size: 17px;
          font-weight: 700;
          color: #252626;
          margin-left: 12px;
        }
      }
    }
    .codePic2 {
      .logo1 {
        width: 160px;
        height: 160px;
        background: url("./images/logo1.png") no-repeat 50% / auto 30%,
          url("./images/2codePic.svg") no-repeat 50% / auto 100%;
      }
      p {
        color: #333;
        font-size: 15px;
        text-align: center;
        margin: 0 0 20px 0;
      }
    }
  }
  p {
    margin: 30px;
    img {
      vertical-align: middle;
    }
    span {
      color: #7d7e80;
      margin-left: 6px;
    }
  }
}
</style>

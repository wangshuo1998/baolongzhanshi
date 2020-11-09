<template>
  <div class="container">
    <!--    首屏轮播+二级分类列表-->
    <div class="bannerContainer clearfix">
      <!--      二级分类列表-->
      <div class="leftCategoryList">
        <div class="title">
          <span>全部分类</span>
        </div>
        <div class="navContent">
          <ul @click="toSearch">
            <li
              class="clearfix"
              @mouseenter="moveIn(index)"
              v-for="(category1, index) in categoryList"
              :key="category1.leftPcHomeCategoryList[0].icon"
            >
              <i
                class="iconfont"
                :class="category1.leftPcHomeCategoryList[0].icon"
                :style="{ color: category1.leftPcHomeCategoryList[0].color }"
              ></i>
              <a
                href="javascript:;"
                :data-category1Name="category1.leftPcHomeCategoryList[0].name"
                :data-category1Id="category1.leftPcHomeCategoryList[0].id"
              >
                {{ category1.leftPcHomeCategoryList[0].name }}
              </a>
              <label>
                <label v-show="category1.leftPcHomeCategoryList.length > 1">
                  <span v-for="(item, index) in category1.leftPcHomeCategoryList" v-if="index > 0" :key="item.id">
                    /<a href="javascript:;">{{ item.name }}</a>
                  </span>
                </label>
              </label>
              <label class="rightArrow"></label>
              <div class="navDetail" :class="{ active: isMoveIn }">
                <dl v-for="(navItem, index) in category1.rightPcHomeCategoryList" :key="index">
                  <dd
                    class="clearfix"
                    v-for="(item, index) in navItem"
                    :key="item.id"
                    :class="{ firstChild: index === 0 }"
                  >
                    <span
                      :data-category2Name="item.name"
                      :data-category2Id="item.id"
                      :data-category1Name="category1.leftPcHomeCategoryList[0].name"
                      :data-category1Id="category1.leftPcHomeCategoryList[0].id"
                    >
                      {{ item.name }}
                    </span>
                    <span v-if="index === 0">
                      更多
                      <i class="arrow"></i>
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--      中间的轮播图-->
      <div class="middleBanner">
        <!--        banner上方的导航列表-->
        <div class="bannerTopNav">
          <a class="waimai" href="javascript:;" title="美团外卖">美团外卖</a>
          <a class="movies" href="javascript:;" title="猫眼电影">猫眼电影</a>
          <a class="hotel" href="javascript:;" title="美团酒店">美团酒店</a>
          <a class="house" href="javascript:;" title="民宿/公寓">民宿/公寓</a>
          <a class="saler" href="javascript:;" title="商家入驻">商家入驻</a>
          <a class="heart" href="javascript:;" title="美团公益">美团公益</a>
        </div>
        <!--        轮播图-->
        <div class="topBanner clearfix">
          <div class="swiper-container" ref="indexBanner">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(banner, index) in bannersList" :key="banner.imgId">
                <img :src="banner.imgUrl" alt="" />
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <!--左箭头。-->
            <div class="swiper-button-next"></div>
            <!--右箭头。-->
            <div class="swiper-pagination kaikaiSwiper"></div>
            <!--分页器。-->
          </div>
          <div class="swiperRightPic">
            <img src="../../assets/life.jpg" alt="休闲生活" />
          </div>
        </div>
        <div class="bottomBanner clearfix">
          <div class="leftPic">
            <img src="../../assets/bottom_left.png" alt="左" />
          </div>
          <div class="middlePic">
            <img src="../../assets/bottom_middle.jpg" alt="中" />
          </div>
          <div class="rightPic">
            <img src="../../assets/bootom_right.jpg" alt="右" />
          </div>
        </div>
      </div>
      <!--      右侧的用户信息-->
      <div class="rightUserInfo">
        <div class="userInfo">
          <!--          登录时的状态信息-->
          <div v-if="userInfo" class="infoDetail">
            <div class="avatar">
              <img src="../../assets/avatar.gif" alt="登录头像" />
            </div>
            <p>{{ userInfo.nickName }}</p>
            <div class="iconContainer clearfix">
              <div class="iconItem">
                <i class="iconfont icondingdan"></i>
                <div>我的订单</div>
              </div>
              <div class="iconItem">
                <i class="iconfont iconshoucang1"></i>
                <div>我的收藏</div>
              </div>
              <div class="iconItem">
                <i class="iconfont icondiyongquan1"></i>
                <div>抵用券</div>
              </div>
              <div class="iconItem">
                <i class="iconfont iconyue"></i>
                <div>金额</div>
              </div>
              <div class="iconItem">
                <i class="iconfont icongengduo_tr"></i>
                <div>更多</div>
              </div>
            </div>
          </div>
          <!--          未登录时的界面-->
          <div v-else class="infoDetail">
            <div class="avatar">
              <img src="../../assets/avatar.jpg" alt="未登录头像" />
            </div>
            <p>Hi！你好</p>
            <a @click="$router.push('/register')" href="javascript:;">注册</a>
            <a @click="$router.push('/login')" href="javascript:;">立即登录</a>
          </div>
        </div>
        <div class="mtCode">
          <div class="qrCode">
            <img src="../../assets/qrCode.png" alt="二维码" />
          </div>
          <p>美团APP手机版</p>
          <p>
            <span>1元起</span>
            <span>吃喝玩乐</span>
          </p>
        </div>
      </div>
    </div>
    <!--    猫眼电影-->
    <CateMovies :hotMoviesList="hotMoviesList" :comingMoviesList="comingMoviesList"></CateMovies>
    <!--    推荐民宿-->
    <RecommendHouse
      :recommendHouseCities="recommendHouseCities"
      :recommendHouseList="recommendHouseList"
    ></RecommendHouse>
    <!--    猜你喜欢-->
    <GuessLike :guessLikeList="guessLikeList"></GuessLike>
    <!--    美团导航-->
    <IndexNav></IndexNav>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import CateMovies from '@/pages/HomeIndex/CateMovies'
import RecommendHouse from '@/pages/HomeIndex/RecommendHouse'
import GuessLike from '@/pages/HomeIndex/GuessLike'
import IndexNav from '@/pages/HomeIndex/IndexNav'
import {
  reqBannersList,
  reqHotMoviesList,
  reqComingMoviesList,
  reqRecommendHouseCities,
  reqRecommendHouseList,
  reqGuessLikeList,
} from '@/Api'

export default {
  name: 'Home',
  data() {
    return {
      isMoveIn: false,
      bannersList: [],
      hotMoviesList: [],
      comingMoviesList: [],
      recommendHouseCities: [],
      recommendHouseList: [],
      guessLikeList: [],
      userInfo: {},
    }
  },
  components: {
    CateMovies,
    RecommendHouse,
    GuessLike,
    IndexNav,
  },
  mounted() {
    this.getCategoryList()
    //获取轮播图的数据
    this.getBannersList()
    //获取正在热映的数据
    this.getHotMoviesList()
    //获取即将上映的数据
    this.getComingMoviesList()
    //获取民宿城市列表
    this.getRecommendHouseCities()
    //获取民宿信息列表
    this.getRecommendHouseList()
    //获取猜你喜欢信息列表
    this.getGuessLikeList()
  },
  methods: {
    //移入分类列表
    moveIn(index) {
      this.isMoveIn = true
    },
    //移出分类列表
    moveOut() {
      this.isMoveIn = false
    },

    //二级分类列表
    getCategoryList() {
      this.$store.dispatch('getCategoryList')
    },
    //获取轮播图数据
    async getBannersList() {
      let result = await reqBannersList()
      this.bannersList = result.data
    },
    //热映电影
    async getHotMoviesList() {
      let result = await reqHotMoviesList()
      this.hotMoviesList = result.data.hot
    },
    //即将上映得电影
    async getComingMoviesList() {
      let result = await reqComingMoviesList()
      this.comingMoviesList = result.data.coming
    },
    //民宿城市
    async getRecommendHouseCities() {
      let result = await reqRecommendHouseCities()
      this.recommendHouseCities = result.cityList
    },
    //民宿信息
    async getRecommendHouseList() {
      let result = await reqRecommendHouseList()
      this.recommendHouseList = result.data
    },
    //猜你喜欢
    async getGuessLikeList() {
      let result = await reqGuessLikeList()
      this.guessLikeList = result
    },
    //跳转搜索页
    toSearch(event) {
      let target = event.target
      let data = target.dataset
      let { category1name, category1id, category2name, category2id } = data
      if (category1name) {
        let location = {
          name: 'shopListIndex',
          query: {
            city: this.city,
          },
        }
        location.query.category1Name = category1name
        location.query.category1Id = category1id
        if (category2name) {
          if (category1name !== category2name) {
            location.query.category2Name = category2name
            location.query.category2Id = category2id
          }
        }
        if (location.query.category1Name === '民宿') {
          this.$router.push('/homestay')
        } else {
          this.$router.push(location)
        }
        console.log(location)
      }
    },
    //改变登录状态
    changeStatus(status) {
      this.userInfo = status
    },
  },
  mounted() {
    this.getCategoryList()
    //获取轮播图的数据
    this.getBannersList()
    //获取正在热映的数据
    this.getHotMoviesList()
    //获取即将上映的数据
    this.getComingMoviesList()
    //获取民宿城市列表
    this.getRecommendHouseCities()
    //获取民宿信息列表
    this.getRecommendHouseList()
    //获取猜你喜欢信息列表
    this.getGuessLikeList()
    //获取用户的信息
    this.userInfo = JSON.parse(localStorage.getItem('USERINFO_KEY'))
    this.$bus.$on('changeStatus', this.changeStatus)
  },

  computed: {
    ...mapState({
      categoryList: (state) => state.indexModule.categoryList,
      city: (state) => state.headerModule.city,
    }),
  },
  watch: {
    bannersList: {
      handler() {
        this.$nextTick(() => {
          //轮播图配置
          new Swiper(this.$refs.indexBanner, {
            //此出的class选择器可以换称ref选择器获取到对应的Swiper轮播
            autoplay: {
              disableOnInteraction: false,
            }, //自动切换
            effect: 'fade', //淡入淡出
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
    },
  },
}
</script>
<style lang="less" scoped>
/*  清除浮动*/
.clearfix::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  font-size: 0;
}

.container {
  width: 100%;
  /*轮播首屏*/

  .bannerContainer {
    width: 1190px;
    margin: 0 auto;
    /*二级分类列表*/

    .leftCategoryList {
      position: relative;
      float: left;
      width: 230px;
      height: 475px;
      background: #fff;
      border: 1px solid #e5e5e5;
      position: relative;
      top: -50px;
      box-sizing: border-box;

      .title {
        width: 100%;
        height: 50px;
        padding-top: 15px;

        span {
          margin-left: 15px;
          color: #222;
          font-weight: 700;
        }
      }

      .navContent {
        ul {
          padding: 10px 0 8px;
          height: 425px;

          li {
            padding: 2px 12px;
            height: 25.5px;
            /*position: relative;*/

            i {
              font-size: 16px;
            }

            a {
              color: #646464;
              font-size: 13px;
              line-height: 26px;
            }

            label > a:first-child {
              margin-left: 11px;
            }

            .rightArrow {
              width: 4px;
              height: 4px;
              float: right;
              border-bottom: 1px solid #999;
              border-right: 1px solid #999;
              transform: rotate(-45deg);
              margin-top: 9px;
            }

            &:hover {
              background: #fff7eb;
            }

            &:hover label a {
              font-weight: bold;
              color: #222;
            }

            &:hover > a {
              font-weight: bold;
              color: #222;
            }

            &:hover .rightArrow {
              border-color: #222;
            }

            &:hover .navDetail {
              display: block;
            }

            .navDetail {
              display: none;
              position: absolute;
              top: 60px;
              left: 229px;
              width: 400px;
              height: 416px;
              background: #fff;
              padding: 0px 0 12px;
              z-index: 99;

              dl {
                padding: 0 20px 20px 20px;

                dd {
                  color: #999;
                  font-size: 12px;
                  /*margin-right: 15px;*/
                  float: left;
                  cursor: pointer;
                  /*line-height: 20px;*/
                  margin: 5px 8px;

                  &:hover {
                    color: #fe8c00;
                  }
                }

                .firstChild {
                  display: block;
                  font-size: 16px;
                  color: #222;
                  font-weight: 500;
                  width: 100%;
                  margin-top: 24px;
                  height: 35px;
                  line-height: 22px;
                  padding-bottom: 10px;
                  border-bottom: 1px solid #e5e5e5;

                  & > span:first-child {
                    float: left;
                  }

                  & > span:last-child {
                    float: right;
                    font-size: 12px;
                    color: #999;
                    font-weight: 400;
                    margin-right: 6px;

                    i {
                      display: inline-block;
                      width: 5px;
                      height: 5px;
                      border-bottom: 1px solid #999;
                      border-right: 1px solid #999;
                      background: transparent;
                      transform: translateY(-1px) rotate(-45deg);
                      vertical-align: middle;
                    }
                  }

                  &:hover {
                    color: #222;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /*  中间的banner*/

  .middleBanner {
    float: left;
    margin: 10px 0 0 10px;
    width: 720px;
    height: 415px;
    position: relative;

    .bannerTopNav {
      position: absolute;
      top: -45px;
      left: 20px;

      a {
        font-weight: 700;
        color: #222;
        font-size: 16px;
        margin: 0 20px;

        &.waimai:hover {
          color: #fbc700;
        }

        &.movies:hover {
          color: #ed1e24;
        }

        &.hotel:hover {
          color: #f04d4e;
        }

        &.house:hover {
          color: #fdc411;
        }

        &.saler:hover {
          color: #fe8c00;
        }

        &.heart:hover {
          color: #f24d4e;
        }
      }
    }

    .topBanner {
      width: 100%;

      .swiper-container {
        float: left;
        width: 550px;
        height: 240px;
        --swiper-navigation-size: 20px;
        --swiper-pagination-color: #fff;

        &:hover .swiper-button-next {
          opacity: 1;
        }

        &:hover .swiper-button-prev {
          opacity: 1;
        }

        .swiper-button-next,
        .swiper-button-prev {
          opacity: 0;
          background: rgba(0, 0, 0, 0.8);
          font-size: 20px;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-weight: bold;
          transition: opacity 0.3s;
        }
      }
    }

    .swiperRightPic {
      float: left;
      height: 240px;
      width: 150px;
      margin: 0 10px;
    }
  }

  .bottomBanner {
    width: 100%;

    .leftPic,
    .middlePic {
      float: left;
      width: 270px;
      height: 165px;
      margin: 10px 10px 0 0;
    }

    .rightPic {
      float: left;
      width: 150px;
      height: 165px;
      margin: 10px 10px 0 0;
    }
  }

  /*  右侧的信息*/

  .rightUserInfo {
    float: left;
    width: 230px;
    height: 415px;
    margin-top: 10px;

    .userInfo {
      width: 230px;
      height: 240px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;

      .infoDetail {
        padding-top: 30px;
        text-align: center;

        .avatar {
          width: 55px;
          margin: 0 auto 4px auto;

          img {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            border: 4px solid #e5e5e5;
            box-sizing: content-box;
          }
        }
        .iconContainer {
          padding: 0 15px;
          width: 100%;
          .iconItem {
            margin-top: 10px;
            float: left;
            width: 33.333%;
            cursor: pointer;
            font-size: 12px;
            i {
              font-size: 22px;
              color: #ffc300;
            }
            div {
              margin: 5px 0;
            }
          }
        }

        p {
          font-size: 16px;
          color: #222;
        }

        a {
          display: block;
          font-size: 14px;
          color: #333333;
          width: 118px;
          margin: 10px auto 15px auto;
          border: 1px solid #e5e5e5;
          border-radius: 40px;
          line-height: 38px;
          text-align: center;
          background: #fff;
          transition: background 0.5s;

          &:hover {
            background: #f7f7f7;
          }
        }
      }
    }

    .mtCode {
      width: 230px;
      height: 167px;
      border: 1px solid #e5e5e5;
      margin-top: 10px;
      text-align: center;
      box-sizing: border-box;

      .qrCode {
        width: 95px;
        margin: 10px auto 0 auto;

        img {
          width: 95px;
          height: 95px;
        }
      }

      p:first-child {
        font-size: 16px;
        font-weight: 500;
      }

      p:last-child span:first-child {
        font-size: 12px;
        color: #ec5330;
        margin-right: 5px;
      }

      p:last-child span:last-child {
        font-size: 12px;
        color: #3f3f3f;
      }
    }
  }
}
</style>

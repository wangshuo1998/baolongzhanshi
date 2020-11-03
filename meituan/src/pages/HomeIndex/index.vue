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
          <ul>
            <li class="clearfix"
                @mouseenter="moveIn(index)"
                v-for="(category1,index) in categoryList"
                :key="category1.leftPcHomeCategoryList[0].id">
              <i class="iconfont"
                 :class="category1.leftPcHomeCategoryList[0].icon"
                 :style="{color:category1.leftPcHomeCategoryList[0].color}"></i>
              <label>
                <a href="javascript:;">{{category1.leftPcHomeCategoryList[0].name}}</a>
                <label v-show="category1.leftPcHomeCategoryList.length>1">
                  <span v-for="(item,index) in category1.leftPcHomeCategoryList"
                        v-if="index>0"
                        :key="item.id">
                    /<a href="javascript:;">{{item.name}}</a>
                  </span>
                </label>
              </label>
              <label class="rightArrow"></label>
              <div class="navDetail" :class="{active:isMoveIn}">
                <div class="detailList" v-for="(title,index) in categoryDetail.leftPcHomeCategoryList"
                     :key="title.id"
                     v-if="index < rightPcHomeCategoryList.length">
                  <div class="menuTitle clearfix">
                    <span>{{title.name}}</span>
                    <span>
                      更多
                      <i></i>
                    </span>
                  </div>
                  <dl class="clearfix">
                    <dd v-for="(shop) in rightPcHomeCategoryList[index]"
                        :key="shop.id">
                      {{shop.name}}
                    </dd>
                  </dl>
                </div>
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
        <div class="topBanner clearfix">
          <div class="swiper-container" ref="indexBanner">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg" alt="">
              </div>
              <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
          </div>
          <div class="swiperRightPic">
            <img src="../../assets/life.jpg" alt="休闲生活">
          </div>
        </div>
        <div class="bottomBanner clearfix">
          <div class="leftPic">
            <img src="../../assets/bottom_left.png" alt="左">
          </div>
          <div class="middlePic">
            <img src="../../assets/bottom_middle.jpg" alt="中">
          </div>
          <div class="rightPic">
            <img src="../../assets/bootom_right.jpg" alt="右">
          </div>
        </div>
      </div>
      <!--      右侧的用户信息-->
      <div class="rightUserInfo">
        <div class="userInfo">
          <div class="infoDetail">
            <div class="avatar">
              <img src="../../assets/avatar.jpg" alt="未登录头像">
            </div>
            <p>Hi！你好</p>
            <a href="javascript:;">注册</a>
            <a href="javascript:;">立即登录</a>
          </div>
        </div>
        <div class="mtCode">
          <div class="qrCode">
            <img src="../../assets/qrCode.png" alt="二维码">
          </div>
          <p>美团APP手机版</p>
          <p>
            <span>1元起</span>
            <span>吃喝玩乐</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from "vuex";
  import Swiper from "swiper";
  import "swiper/css/swiper.min.css";

  export default {
    name: 'Home',
    data() {
      return {
        isMoveIn: false,
        categoryDetail: {}
      }
    },
    mounted() {
      this.getCategoryList();
      new Swiper (this.$refs.indexBanner, {//此出的class选择器可以换称ref选择器获取到对应的Swiper轮播
        autoplay:true,//自动切换
        effect:"fade",//淡入淡出
        loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    methods: {
      //移入分类列表
      moveIn(index) {
        this.isMoveIn = true;
        this.categoryDetail = this.categoryList[index];
      },
      //移出分类列表
      moveOut() {
        this.isMoveIn = false;
      },
      //二级分类列表
      getCategoryList() {
        this.$store.dispatch("getCategoryList");
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.indexModule.categoryList
      }),
      leftPcHomeCategoryList() {
        return this.categoryDetail.leftPcHomeCategoryList || []
      },
      rightPcHomeCategoryList() {
        return this.categoryDetail.rightPcHomeCategoryList || []
      }
    }
  }
</script>
<style lang="less" scoped>
  /*  清除浮动*/
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }

  .container {
    width: 100%;

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
                background: #FFF7EB;
              }

              &:hover label a {
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
                padding: 26px 0 12px;
                z-index: 99;

                .detailList {
                  padding: 0 30px;

                  .menuTitle {
                    padding-bottom: 32px;
                    height: 22px;
                    line-height: 22px;
                    border-bottom: 1px solid #e5e5e5;

                    span:first-child {
                      float: left;
                      font-size: 16px;
                      color: #222;
                      font-weight: 500;
                    }

                    span:last-child {
                      float: right;
                      font-size: 12px;
                      color: #999;
                      position: relative;
                      cursor: pointer;

                      i {
                        display: inline-block;
                        width: 4px;
                        height: 4px;
                        background: transparent;
                        border-bottom: 1px solid #999;
                        border-right: 1px solid #999;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%) rotate(-45deg);
                        margin-left: 2px;
                      }
                    }
                  }

                  dl {
                    padding-top: 10px;
                    padding-bottom: 20px;

                    dd {
                      color: #999;
                      font-size: 12px;
                      /*margin-right: 15px;*/
                      float: left;
                      cursor: pointer;
                      /*line-height: 20px;*/
                      margin: 5px 8px;

                      &:hover {
                        color: #FE8C00;
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
        .bannerTopNav{
          position: absolute;
          top: -45px;
          left: 20px;
          a{
            font-weight: 700;
            color: #222;
            font-size: 16px;
            margin: 0 20px;
            &.waimai:hover{
              color: #FBC700;
            }
            &.movies:hover{
              color: #ED1E24;
            }
            &.hotel:hover{
              color: #F04D4E;
            }
            &.house:hover{
              color: #FDC411;
            }
            &.saler:hover{
              color: #FE8C00;
            }
            &.heart:hover{
              color: #F24D4E;
            }
          }
        }
        .topBanner {
          width: 100%;

          .swiper-container {
            float: left;
            width: 550px;
            height: 240px;
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

          .leftPic, .middlePic {
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
                background: #F7F7F7;
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
            color: #EC5330;
            margin-right: 5px;
          }

          p:last-child span:last-child {
            font-size: 12px;
            color: #3f3f3f;
          }
        }
      }
    }
  }
</style>

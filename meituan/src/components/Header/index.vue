<template>
  <div class="container">
    <!--  头部-->
    <div class="headerContainer">
      <div class="header">
        <!--    头部顶端的导航条-->
        <div class="headerBar clearfix">
          <!--            左侧-->
          <div class="leftHeaderBar">
            <span class="iconfont iconweizhi location"></span>
            <span>{{city}}</span>
            <button class="changeCity">切换城市</button>
            <div class="cityInfo">
              <span>[</span>
              <a href="javascript:;">门头沟区</a>
              <a href="javascript:;">大厂回族自治县</a>
              <a href="javascript:;">廊坊</a>
              <span>]</span>
            </div>
            <a class="login" href="javascript:;">立即登录</a>
            <a class="register" href="javascript:;">注册</a>
          </div>
          <!--            右侧-->
          <ul class="rightHeaderBar clearfix">
            <li>
              <a class="rightHeaderNavItem" href="javascript:;">我的美团</a>
              <ul class="owner">
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">我的收藏</a></li>
                <li><a href="javascript:;">抵用券</a></li>
                <li><a href="javascript:;">账户设置</a></li>
              </ul>
            </li>
            <li>
              <a class="rightHeaderNavItem" href="javascript:;">手机APP</a>
            </li>
            <li>
              <a class="rightHeaderNavItem" href="javascript:;">商家中心</a>
              <ul class="salerCenter">
                <li><a href="javascript:;">美团餐饮商户中心</a></li>
                <li><a href="javascript:;">登录商家中心</a></li>
                <li><a href="javascript:;">美团智能收银</a></li>
                <li><a href="javascript:;">我想合作</a></li>
                <li><a href="javascript:;">手机免费开店</a></li>
                <li><a href="javascript:;">餐饮代理商招募</a></li>
                <li><a href="javascript:;">商家申请开票</a></li>
                <li><a href="javascript:;">免费合作美团排队</a></li>
              </ul>
            </li>
            <li>
              <a class="rightHeaderNavItem" href="javascript:;">美团规则</a>
              <ul class="rulesList">
                <li><a href="javascript:;">规则中心</a></li>
                <li><a href="javascript:;">规则目录</a></li>
                <li><a href="javascript:;">规则评议院</a></li>
              </ul>
            </li>
            <li>
              <a class="rightHeaderNavItem" href="javascript:;">网站导航</a>
              <div class="websiteNav clearfix">
                <dl class="hotelTravel clearfix">
                  <dt>酒店旅游</dt>
                  <dd>国际机票</dd>
                  <dd>火车票</dd>
                  <dd>民宿</dd>
                  <dd>经济型酒店</dd>
                  <dd>主题酒店</dd>
                  <dd>商务酒店</dd>
                  <dd>公寓</dd>
                  <dd>豪华酒店</dd>
                  <dd>客栈</dd>
                  <dd>青年旅社</dd>
                  <dd>度假酒店</dd>
                  <dd>别墅</dd>
                  <dd>农家院</dd>
                </dl>
                <dl class="eatFood clearfix">
                  <dt>吃美食</dt>
                  <dd>烤鱼</dd>
                  <dd>特色小吃</dd>
                  <dd>烧烤</dd>
                  <dd>自助餐</dd>
                  <dd>火锅</dd>
                  <dd>代金券</dd>
                </dl>
                <dl class="movies">
                  <dt>看电影</dt>
                  <dd>热映电影</dd>
                  <dd>热映影院</dd>
                  <dd>热映电影口碑榜</dd>
                  <dd>最受期待电影</dd>
                  <dd>国内票房榜</dd>
                  <dd>北美票房榜</dd>
                  <dd>电影排行榜</dd>
                </dl>
                <dl class="app">
                  <dt>手机应用</dt>
                  <dd>
                    <img src="../../assets/meituan.png" alt="美团APP">
                  </dd>
                  <dd>
                    <img src="../../assets/waimai.png" alt="美团外卖APP">
                  </dd>
                  <dd>
                    <img src="../../assets/minsu.png" alt="民宿APP">
                  </dd>
                  <dd>
                    <img src="../../assets/dianping.png" alt="大众点评APP">
                  </dd>
                  <dd>
                    <img src="../../assets/maoyan.png" alt="猫眼APP">
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--        logo+搜索框-->
      <div class="logoAndSearch clearfix">
        <h1 class="logo">
          <img src="../../assets/logo.png" alt="美团logo">
        </h1>
        <div class="searchContainer">
          <div class="searchBar">
            <input class="search" placeholder="搜索商家或地点" type="text">
            <button class="searchButton">
              <span class="iconfont iconsousuo"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    name: 'Header',
    computed:{
      ...mapState({
        city:state=>state.headerModule.city
      })
    }
  }
</script>

<style lang="less" scoped>
  /*清除浮动*/
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }

  .headerContainer {
    width: 100%;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.10);

    .header {
      width: 100%;
      height: 40px;
      background: #f2f2f2;
      /*  头部顶端的导航条*/

      .headerBar {
        width: 1190px;
        height: 40px;
        margin: 0 auto;
        font-size: 12px;
        color: #999999;

        a {
          color: #999999;
        }

        .leftHeaderBar {
          height: 40px;
          float: left;
          line-height: 40px;

          .location {
            font-size: 12px;
            vertical-align: bottom;
          }

          .changeCity {
            background: #F4F4F4;
            border: 1px solid #E5E5E5;
            border-radius: 2px;
            color: #666;
            margin: 0 4px;
            padding: 0 2px;
            font-size: 12px;

            &:hover {
              color: #FE8C00;
            }
          }

          .cityInfo {
            display: inline-block;
            padding: 0 2px 0 1px;

            a {
              margin: 0 4px;
            }
          }

          .login {
            color: #FE8C00;
            margin-left: 21px;
          }

          .register {
            margin-left: 10px;

            &:hover {
              color: #FE8C00;
            }
          }
        }

        .rightHeaderBar {
          height: 40px;
          line-height: 40px;
          float: right;

          li {
            float: left;

            .rightHeaderNavItem {
              display: block;
              padding: 0 14px;
              box-sizing: border-box;
              border-left: 1px solid transparent;
              border-right: 1px solid transparent;

              &:hover {
                color: #FE8C00;
              }
            }

            &:nth-child(1) {
              position: relative;

              &:hover .rightHeaderNavItem {
                background: #fff;
                box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
                color: #FE8C00;
              }

              &:hover .owner {
                display: block;
              }

              .owner {
                display: none;
                position: absolute;
                left: 0;
                top: 40px;
                padding: 0 14px;
                background: #fff;
                z-index: 90;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

                a {
                  display: block;
                  line-height: 33px;
                  text-align: center;
                  width: 50px;

                  &:hover {
                    color: #FE8C00;
                  }
                }
              }
            }

            &:nth-child(3) {
              position: relative;

              &:hover .rightHeaderNavItem {
                background: #fff;
                box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
                color: #FE8C00;
              }

              &:hover .salerCenter {
                display: block;
              }

              .salerCenter {
                display: none;
                position: absolute;
                width: 140%;
                right: 0;
                top: 40px;
                /*padding: 0 14px;*/
                background: #fff;
                z-index: 90;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

                li {
                  width: 100%;

                  a {
                    display: block;
                    line-height: 33px;
                    text-align: center;
                    width: 100%;

                    &:hover {
                      color: #FE8C00;
                    }
                  }
                }
              }
            }

            &:nth-child(4) {
              position: relative;

              &:hover .rightHeaderNavItem {
                background: #fff;
                box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
                color: #FE8C00;
              }

              &:hover .rulesList {
                display: block;
              }

              .rulesList {
                display: none;
                position: absolute;
                width: 100%;
                right: 0;
                top: 40px;
                /*padding: 0 14px;*/
                background: #fff;
                z-index: 90;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

                li {
                  width: 100%;

                  a {
                    display: block;
                    line-height: 33px;
                    text-align: center;
                    width: 100%;

                    &:hover {
                      color: #FE8C00;
                    }
                  }
                }
              }
            }

            &:nth-child(5) {
              position: relative;

              &:hover .rightHeaderNavItem {
                background: #fff;
                box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
                color: #FE8C00;
              }

              &:hover .websiteNav {
                display: block;
              }

              .websiteNav {
                display: none;
                width: 1190px;
                position: absolute;
                right: -.5px;
                top: 40px;
                background: #fff;
                border: 1px solid #e5e5e5;
                box-sizing: border-box;
                border-top: none;
                box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.1);
                z-index: 90;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                padding: 20px 36px 36px 47px;

                dl {
                  float: left;
                  margin-right: 47px;
                  text-align: center;

                  &.hotelTravel {
                    width: 234px;

                    dd {
                      width: 33.333%;
                    }
                  }

                  &.eatFood {
                    width: 156px;

                    dd {
                      width: 50%;
                    }
                  }

                  &.movies {
                    width: 90px;

                    dd {
                      width: 100%;
                    }
                  }

                  &.app {
                    float: right;
                    width: 380px;

                    dd {
                      margin: 0 8px;
                      padding: 5px 0;

                      img {
                        width: 60px;
                        height: 60px;
                      }
                    }
                  }

                  dt {
                    font-size: 14px;
                    color: #222;
                    font-weight: 500;
                    margin-bottom: 20px;
                  }

                  dd {
                    float: left;
                    line-height: 25px;
                    cursor: pointer;

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

    /*  logo+搜索框和按钮 */

    .logoAndSearch {
      width: 1190px;
      margin: 0 auto;
      padding-bottom: 35px;
      position: relative;

      .logo {
        float: left;
        padding-top: 28px;
        padding-bottom: 40px;
        padding-right: 60px;
        box-sizing: content-box;
        min-width: 220px;
        cursor: pointer;

        img {
          width: 126px;
          height: 46px;
        }
      }

      .searchContainer {
        float: left;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 28px;

        .searchBar {
          width: 550px;
          height: 40px;

          .search {
            width: 85.45%;
            height: 100%;
            box-sizing: border-box;
            padding: 15px;
            border: 1px solid #e5e5e5;
            border-right: none;
            background: transparent;
            line-height: 100%;
            border-radius: 4px 0 0 4px;
            vertical-align: middle;

            &::placeholder {
              font-size: 14px;
              color: #999999;
              vertical-align: bottom;
            }
          }

          .searchButton {
            width: 14.55%;
            height: 40px;
            box-sizing: border-box;
            border: none;
            background: #FFC300;
            cursor: pointer;
            vertical-align: middle;
            line-height: 40px;
            text-align: center;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

            span {
              font-size: 21px;
              color: #222;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>

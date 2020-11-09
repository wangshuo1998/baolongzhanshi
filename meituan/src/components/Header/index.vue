<template>
  <!-- <div> -->
  <div class="container">
    <!--  头部-->
    <div class="headerContainer">
      <div class="header">
        <!--    头部顶端的导航条-->
        <div class="headerBar clearfix">
          <!--            左侧-->
          <div class="leftHeaderBar">
            <label @click="getLocationInfo">
              <span class="iconfont iconweizhi location"></span>
              <span v-show="!loading">{{ location }}</span>
              <span v-show="loading"></span>
            </label>
            <button class="changeCity" :disabled="$route.path === '/changecity'" @click="$router.push('/changecity')">
              切换城市
            </button>
            <span>{{ city }}</span>
            <div class="cityInfo">
              <span>[</span>
              <a href="javascript:;">门头沟区</a>
              <a href="javascript:;">大厂回族自治县</a>
              <a href="javascript:;">廊坊</a>
              <span>]</span>
            </div>
            <a v-if="userInfo" class="nickName" href="javascript:;">{{ userInfo.nickName }}</a>
            <a v-else class="login" href="javascript:;" @click="$router.push('/login')">立即登录</a>
            <a v-if="userInfo" @click="loginOut" class="loginOut" href="javascript:;">退出</a>
            <a v-else class="register" href="javascript:;" @click="$router.push('/register')">注册</a>
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
                  <dd @click="$router.push('/homestay')">民宿</dd>
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
                    <img src="../../assets/meituan.png" alt="美团APP" />
                  </dd>
                  <dd>
                    <img src="../../assets/waimai.png" alt="美团外卖APP" />
                  </dd>
                  <dd>
                    <img src="../../assets/minsu.png" alt="民宿APP" />
                  </dd>
                  <dd>
                    <img src="../../assets/dianping.png" alt="大众点评APP" />
                  </dd>
                  <dd>
                    <img src="../../assets/maoyan.png" alt="猫眼APP" />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--        logo+搜索框-->
      <div class="logoAndSearch clearfix" :class="{ city: $route.path === '/changecity' }">
        <h1 class="logo">
          <img @click="$router.push('/')" src="../../assets/logo.png" alt="美团logo" />
        </h1>
        <div class="searchContainer">
          <div class="searchBar" @click.stop="clearSearchHistory">
            <input
              class="search"
              placeholder="搜索商家或地点"
              type="text"
              value=""
              v-model="searchText"
              @focus.stop="showSearchHistory(true)"
              @blur="showSearchHistory(false)"
              @keyup.enter="searchShopOrMap"
            />
            <!--  -->
            <button class="searchButton" @click="searchShopOrMap">
              <span class="iconfont iconsousuo"></span>
            </button>
            <div class="searchHistory" v-if="changeSearchHistoryFlag">
              <div class="title">
                <h6>最近搜索</h6>
                <span>删除搜索历史</span>
              </div>
              <ul>
                <li v-for="(item, index) in searchArr" :key="index">
                  <a href="javascript:;">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      location: '点击获取当前定位',
      loading: false,
      searchText: '',
      searchArr: [],
      changeSearchHistoryFlag: false,
      userInfo: {},
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem('USERINFO_KEY'))
    this.initUserSearchArr()
  },
  methods: {
    // 初始化搜索数据
    initUserSearchArr() {
      this.searchArr = JSON.parse(window.sessionStorage.getItem('USERSEARCHVALUE_KEY')) || []
    },
    // 清空历史记录
    clearSearchHistory(e) {
      const target = e.target
      if (target.nodeName === 'SPAN') {
        window.sessionStorage.removeItem('USERSEARCHVALUE_KEY')
        this.initUserSearchArr()
      }
    },
    // 显示搜索记录
    showSearchHistory(flag) {
      if (flag) {
        this.changeSearchHistoryFlag = flag
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.changeSearchHistoryFlag = flag
        }, 200)
      }
    },
    // 搜索记录
    searchShopOrMap() {
      let { searchText } = this
      if (!searchText.trim()) return
      let flag = this.searchArr.find((item) => {
        return searchText === item
      })
      // 推送到数组
      if (!flag) {
        this.searchArr.unshift(this.searchText)
      }
      window.sessionStorage.setItem('USERSEARCHVALUE_KEY', JSON.stringify(this.searchArr))
    },
    getLocationInfo() {
      if (this.location !== '点击获取当前定位') return
      this.loading = true
      setTimeout(() => {
        this.getLocation()
        this.loading = false
      }, 2000)
    },
    //获取自身的定位
    getLocation() {
      let _this = this
      const self = this
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete(data) {
          // data是具体的定位信息
          _this.location = data.formattedAddress
        }

        function onError(data) {
          // 定位出错
          console.log('定位失败错误：', data)
          // 调用ip定位
          self.getLngLatLocation()
        }
      })
    },
    getLngLatLocation() {
      AMap.plugin('AMap.CitySearch', function() {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log('通过ip获取当前城市：', result)
            //逆向地理编码
            AMap.plugin('AMap.Geocoder', function() {
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode,
              })

              var lnglat = result.rectangle.split(';')[0].split(',')
              geocoder.getAddress(lnglat, function(status, data) {
                if (status === 'complete' && data.info === 'OK') {
                  // result为对应的地理位置详细信息
                  console.log(data)
                }
              })
            })
          }
        })
      })
    },
    loginOut() {
      this.userInfo = null
      this.$bus.$emit('changeStatus', null)
      localStorage.removeItem('USERINFO_KEY')
    },
  },
  computed: {
    ...mapState({
      city: (state) => state.headerModule.city,
    }),
  },
}
</script>

<style lang="less" scoped>
/*清除浮动*/
.clearfix::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.headerContainer {
  width: 100%;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);

  .header {
    width: 100%;
    height: 40px;
    background: #f4f4f4;
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
        & > span {
          color: #666;
        }
        & > label {
          cursor: pointer;
          & > span:nth-child(2) {
            float: left;
            max-width: 100px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #666;
          }
          & > span:nth-child(3) {
            width: 100px;
            background: url('../../assets/loading3.gif');
            background-position: 50% 50%;
            background-size: 60px;
            background-repeat: no-repeat;
            height: 20px;
            float: left;
            margin-top: 10px;
          }
        }
        .location {
          float: left;
          font-size: 12px;
          vertical-align: bottom;
        }

        .changeCity {
          background: #f4f4f4;
          border: 1px solid #e5e5e5;
          border-radius: 2px;
          color: #666;
          margin: 0 4px;
          padding: 0 2px;
          font-size: 12px;

          &:hover {
            color: #fe8c00;
          }
        }

        .cityInfo {
          display: inline-block;
          padding: 0 2px 0 1px;

          a {
            margin: 0 4px;
          }
        }

        .login,
        .nickName {
          color: #fe8c00;
          margin-left: 21px;
        }
      }
    }

    .rightHeaderBar {
      height: 40px;
      line-height: 40px;
      float: right;

      li {
        float: left;

        .register,
        .loginOut {
          margin-left: 10px;

          &:hover {
            color: #fe8c00;
          }
        }

        &:nth-child(1) {
          position: relative;

          &:hover .rightHeaderNavItem {
            background: #fff;
            box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
            color: #fe8c00;
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
                color: #fe8c00;
              }
            }
          }
        }

        &:nth-child(3) {
          position: relative;

          &:hover .rightHeaderNavItem {
            background: #fff;
            box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
            color: #fe8c00;
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
                  color: #fe8c00;
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
            color: #fe8c00;
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
                  color: #fe8c00;
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
            color: #fe8c00;
          }

          &:hover .websiteNav {
            display: block;
          }

          .websiteNav {
            display: none;
            width: 1190px;
            position: absolute;
            right: -0.5px;
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
                  color: #fe8c00;
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

  &.city {
    padding-bottom: 5px;
  }

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
    z-index: 9;
    .searchBar {
      width: 550px;
      height: 40px;
      position: relative;
      // 搜索历史记录
      .searchHistory {
        position: absolute;
        top: 40px;
        left: 0;
        width: 85.45%;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size: 12px;
        padding: 10px;
        box-sizing: border-box;
        .title {
          display: flex;
          justify-content: space-between;
          color: #999999;
          margin-bottom: 10px;
          h6 {
            font-weight: 700;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            margin-right: 8px;
            line-height: 24px;
            a {
              color: #333;
              &:hover {
                color: #fe8c00;
              }
            }
          }
        }
      }
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
        background: #ffc300;
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
</style>

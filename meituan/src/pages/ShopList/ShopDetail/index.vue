<template>
  <!-- 店铺详情容器 -->
  <div class="shopDetailContainer">
    <!-- 店铺详情内容部分 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <!--  :breadcrumbsData="crumbNav" -->
      <Breadcrumbs :breadcrumbsData="crumbNav"></Breadcrumbs>
      <!-- 详情部分 -->
      <div class="details">
        <!-- 左部 -->
        <div class="d-left">
          <!-- 头部名称 -->
          <div class="title">
            <div class="title-name">
              <h2>
                <!-- 店铺名称 -->
                {{ baseInfo.name }}
              </h2>
              <span> <i class="iconfont icondunpai"></i> 食品安全档案</span>
            </div>
            <!-- 评分 -->
            <div class="d-score">
              <ul class="default-star">
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
              </ul>
              <ul class="avg-star" :style="{ width: baseInfo.avgScore * 2 * 8 + 'px' }">
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
              </ul>
              <span class="avg-score">{{ baseInfo.avgScore }}分</span>
              <span class="avg-price">人均￥{{ baseInfo.avgPrice }}</span>
            </div>
          </div>
          <!-- 地址 -->
          <div class="address">
            <p>
              {{ baseInfo.address }}
              <i class="iconfont iconweizhi" @click="isShowMap">
                <div class="mapContainer" v-if="isMap">
                  <i class="iconfont iconshanchu" @click.stop="isMap = false"></i>
                  <Map :position="position" :label="label"></Map>
                </div>
              </i>
            </p>
            <p>电话：{{ baseInfo.phone }}</p>
            <p>营业时间：{{ baseInfo.openTime }}</p>
          </div>
          <!-- 标签选项 -->
          <ul class="tags">
            <li v-for="(item, index) in baseInfo.extraInfos" :key="index">
              <!-- <i class="iconfont iconicon-test">
                <img v-lazy="item.iconUrl" alt="" />
              </i> -->
              <i class="icon-url">
                <img v-lazy="item.iconUrl" alt="" />
              </i>
              <span>
                {{ item.text }}
              </span>
            </li>
          </ul>
        </div>
        <!-- 右部 -->
        <div class="d-right">
          <div class="big-img">
            <img v-lazy="photos.frontImgUrl" alt="" />
          </div>

          <!-- 轮播图组件 -->
          <div v-swiper:mySwiper="swiperOption" @click="isMask = true">
            <ul class="swiper-wrapper img-list">
              <li class="swiper-slide" v-for="(item, index) in photos.albumImgUrls" :key="index">
                <img v-lazy="item" />
              </li>
            </ul>
          </div>
          <!-- <ul class="img-list">
            <li v-for="(item, index) in photos.albumImgUrls" :key="index">
              <img v-lazy="item" alt="" />
            </li>
          </ul> -->
        </div>
      </div>
      <!-- 详情底部 -->
      <div class="btm-cont">
        <div class="btm-left">
          <!-- 团购及优惠 -->
          <div class="group-buy">
            <h4>商家团购及优惠</h4>
            <div class="login-group-buy">
              <img src="https://p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="" />
              <span>请登录后查看详细团购优惠</span>
              <button>立即登录</button>
            </div>
          </div>
          <!-- 推荐菜 -->
          <div class="recommend">
            <h4>推荐菜</h4>
            <div class="recommend-content">
              <ul>
                <li v-for="(item, index) in recommendedPic" :key="item.id">
                  <div class="pic">
                    <div class="img-box">
                      <img v-lazy="item.frontImgUrl" alt="" />
                      <div class="desc">
                        <span>{{ item.name }}</span>
                        <span>￥{{ item.price }}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="list">
                <span v-for="(item, index) in recommendedText" :key="item.id">{{ item.name }}</span>
              </div>
            </div>
          </div>
          <!-- 网友点评 -->
          <div class="comment">
            <!-- 网友点评头部->多少条 -->
            <div class="total">
              <span>{{ merchantComment.total }}条网友点评</span>
              <div class="sort">
                <span :class="{ active: sortCurrentClass === 0 }" @click="commentSort(0)">质量排序</span>
                <span :class="{ active: sortCurrentClass === 1 }" @click="commentSort(1)">时间排序</span>
              </div>
            </div>
            <!-- 网友点评内容区 -->
            <div class="comment-con">
              <!-- 网友点评标签区 -->
              <ul class="tags" @click="cutTags">
                <li v-for="(item, index) in tags" :key="item.tag" :class="{ active: index === tagsIndex }">
                  <span :data-tagsIndex="index">{{ item.tag }}</span>
                  <i :data-tagsIndex="index">({{ item.count }})</i>
                </li>
              </ul>
              <!-- 网友点评查看图片评论 -->
              <div class="sea" @click="seaImgComment">
                <!-- 选中未选中 -->
                <i class="iconfont" :class="{ iconweixuanzhong: !isSea, iconyixuanzhong: isSea }"></i>
                <span>只看有图片的评论</span>
              </div>
              <!-- 用户评论内容区列表 -->
              <ul class="user-comment-list">
                <li v-for="(item, index) in comments" :key="index">
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img v-lazy="item.userUrl || 'https://www.dpfile.com/ugc/user/anonymous.png'" alt="" />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">{{ item.userName }}</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <!-- 算出星星的数量 -->
                      <!-- 首先先算出一颗星星多少,数据是一颗星星为10分 -->
                      <!-- 总宽度/5等于一颗星星多宽 -->
                      <!-- 传入的数据分数/10 因为是5课星星 -->
                      <!-- 然后根据传入的分数算出星星的宽度 -->
                      <!-- 传入的分数 / 10 * 一颗星星的宽度 -->
                      <ul class="avg-star" :style="{ width: item.star * (80 / 5 / 10) + 'px' }">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">
                      {{ item.commentTime | moment }}
                    </span>
                    <p class="user-desc">
                      {{ item.comment }}
                    </p>
                    <span v-if="item.merchantComment" class="reply">{{ item.merchantComment }}</span>
                    <div class="user-pic-box" v-if="item.picUrls.length > 0">
                      <div class="user-pic" v-for="(pic, index) in item.picUrls" :key="pic.id">
                        <img v-lazy="pic.url" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- 自我封装分页组件 -->
              <div class="my-pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  :pager-count="pagerCount"
                  layout="prev, pager, next"
                  :total="400"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="btm-right">
          <div class="guess-you-like">
            <h3>猜你喜欢</h3>
            <ul @click="changeGuessInfo">
              <li v-for="(item, index) in guessInfo" :key="item.itemId">
                <a href="javascript:;">
                  <div class="pic">
                    <img v-lazy="item.imgUrl" alt="" :data-shopId="item.itemId" />
                  </div>
                  <p class="merchant-name">
                    {{ item.title }}
                  </p>
                  <p class="merchant-pos">
                    {{ item.areaName }}
                  </p>
                  <p class="price"><b>￥</b>{{ item.avgPrice }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 附近商家 -->
      <div class="nearby-businesses">
        <h4>附近商家</h4>
        <div class="nearby">
          <ul>
            <li v-for="item in shopDetailData.nearPoiList" :key="item.sold">
              <a href="javascript:;">
                <div class="pic">
                  <img v-lazy="item.headIcon" alt="" />
                </div>
                <p class="title">
                  {{ item.name }}
                </p>
                <p class="source">
                  {{ item.score }}分 <span>{{ item.id }}人消费</span>
                </p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> {{ item.avgPrice }} <b>起</b></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 蒙版轮播 -->
    <div class="mask" :style="{ display: isMask ? 'block' : 'none' }">
      <div class="thumb-example">
        <div class="closeMask" @click="isMask = false">X</div>
        <!-- swiper1 -->
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide class="slide-1" v-for="(item, index) in photos.albumImgUrls" :key="index">
            <img v-lazy="item" />
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1" v-for="(item, index) in photos.albumImgUrls" :key="index">
            <img v-lazy="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// 引入时间初始化工具
import moment from 'moment'
import 'moment/locale/zh-cn'
// 引入轮播图组件
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// 引入地图组件
import Map from '@/pages/ShopList/Map'
// 引入面包屑组件
import Breadcrumbs from '@/components/Breadcrumbs'
import { mapState } from 'vuex'
export default {
  name: 'ShopDetail',
  components: {
    Breadcrumbs,
    Swiper,
    SwiperSlide,
    Map,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      currentPage: 4,
      pagerCount: 5,
      sortIndex: 0,
      shopId: '',
      sortCurrentClass: 0,
      commentsList: [],
      isSea: false,
      tagsIndex: -1,
      // 轮播图配置
      swiperOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
      },
      // 点击轮播图进入的蒙版轮播图配置
      swiperOptionTop: {
        // loop: true,
        loopedSlides: 1, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        // loop: true,
        loopedSlides: 1, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      // 蒙版轮播图开关
      isMask: false,
      isMap: false,
      position: [],
      label: {},
    }
  },
  // 管道函数 格式化时间
  filters: {
    moment: function(time) {
      if (!time) {
        return moment(Date.now()).format('LL')
      }
      return moment(time * 1).format('LL')
    },
  },
  methods: {
    isShowMap() {
      this.isMap = true
      // 初始化地图数据
      this.initMapData()
    },
    // 每页 ${val} 条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 当前页: ${val}
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    // 获取猜你喜欢列表数据
    getGuessInfo() {
      this.$store.dispatch('getGuessInfo')
    },
    // 发送请求店铺获取数据
    getShopDetailData() {
      const shopId = this.shopId
      this.$store.dispatch('getShopDetailData', { shopId })
    },
    // 初始化 shopId
    initShopId() {
      const { shopId } = this.$route.params
      this.shopId = shopId
    },
    // 获取店铺评论信息数据
    getMerchantComment() {
      let { shopId, isSea } = this

      isSea = isSea ? '1' : '0'
      this.$store.dispatch('getMerchantComment', { shopId, isSea })
    },
    // 评论排序
    commentSort(sortCurrentClass) {
      this.sortCurrentClass = sortCurrentClass
      if (sortCurrentClass) {
        this.comments.sort((a, b) => {
          return a.commentTime - b.commentTime
        })
      } else {
        // 调用获取参数评论信息函数
        this.getMerchantComment()
      }
    },
    // 查看只有图片的评论
    seaImgComment() {
      this.isSea = !this.isSea
      // 调用获取参数评论信息函数
      this.getMerchantComment()
    },
    // 切换用户评论标签
    cutTags(e) {
      const target = e.target
      const { tagsindex: tagsIndex } = target.dataset
      this.tagsIndex = tagsIndex * 1
    },
    // 猜你喜欢路由跳转
    changeGuessInfo(e) {
      const target = e.target
      const { shopid: shopId } = target.dataset
      this.shopId = shopId
      const location = {
        name: 'shopDetail',
        params: {
          shopId,
        },
      }
      // 跳转路由
      this.$router.push(location)
      // 初始化 shopId
      this.initShopId()
      // 获取店铺详细信息
      this.getShopDetailData()
    },
    // 初始化地图数据
    initMapData() {
      this.position.push(this.baseInfo.longitude, this.baseInfo.latitude)
      const label = {
        direction: 'top',
      }
      label.content = this.baseInfo.name
      this.$set(this.$data, 'label', label)
    },
  },
  mounted() {
    // 初始化shopId
    this.initShopId()
    // 调用 获取猜你喜欢数据函数
    this.getGuessInfo()
    // 调用 获取列表信息函数
    this.getShopDetailData()
    // 调用获取参数评论信息函数
    this.getMerchantComment()

    // 轮播图
    this.mySwiper.slideTo(3, 1000, false)
    // 轮播图蒙版
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  computed: {
    // 从vuex 中把商品筛选数据拿出来
    ...mapState({
      guessInfo: (state) => state.ShopList.guessInfo,
      shopDetailData: (state) => state.ShopDetail.shopDetailData,
      merchantComment: (state) => state.ShopDetail.merchantComment,
    }),
    // 取出店铺基础信息
    baseInfo() {
      return this.shopDetailData.baseInfo || {}
    },
    // 取出导航信息
    crumbNav() {
      return this.shopDetailData.crumbNav || {}
    },
    // 取出店铺图片信息
    photos() {
      return this.shopDetailData.photos || {}
    },
    // 取出推荐菜信息
    recommended() {
      return this.shopDetailData.recommended || []
    },
    // 取出推荐菜信息中带有图片信息的
    recommendedPic() {
      return this.recommended.filter((item) => {
        if (item.frontImgUrl) return item
      })
    },
    // 取出推荐菜信息中没有图片信息的
    recommendedText() {
      return this.recommended.filter((item) => {
        if (!item.frontImgUrl) return item
      })
    },
    // 获取用户评论信息
    comments() {
      return this.merchantComment.comments || []
    },
    // 获取店铺评论标签
    tags() {
      return this.merchantComment.tags || []
    },
  },
}
</script>

<style lang="less" scoped>
@import url('../css/Mixins.less');
// 店铺详情容器
.shopDetailContainer {
  // 店铺详情内容部分
  .content {
    .content();
    // 店铺详情
    .details {
      display: flex;
      justify-content: space-between;
      padding: 20px 20px 33px;
      border: 1px solid #e5e5e5;
      border-radius: 10px;
      background-color: #fff;
      color: #666;
      font-size: 12px;
      box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
      // 店铺详情左部
      .d-left {
        width: 70%;
        padding-right: 2%;
        // 店铺详情头部
        .title {
          border-bottom: 1px solid #e5e5e5;
          .title-name {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: 26px;
            line-height: 37px;
            span {
              font-size: 12px;
              color: #00c9b3;
              .icondunpai {
                font-size: 18px;
                height: 18px;
                line-height: 18px;
                display: inline-block;
              }
            }
          }
          // 店铺详情评分
          .d-score {
            position: relative;
            width: 70%;
            display: flex;
            font-size: 14px;
            height: 16px;
            line-height: 16px;
            margin: 5px 0 15px;
            .default-star,
            .avg-star {
              display: flex;
            }
            .default-star {
              margin-right: 8px;
            }
            .avg-star {
              position: absolute;
              left: 0;
              top: 0;
              color: #f90;
              width: 70px;
              overflow: hidden;
            }
          }
        }
        // 地址信息
        .address {
          font-size: 14px;
          padding: 16px 0 11px;
          line-height: 20px;
          border-bottom: 1px solid #e5e5e5;
          p {
            margin-bottom: 10px;
            .iconweizhi {
              color: #00c9b3;
              position: relative;
              cursor: pointer;
              .mapContainer {
                position: absolute;
                right: -315px;
                top: -5px;
                border: 5px solid #ccc;
                .iconfont {
                  font-size: 24px;
                  position: absolute;
                  right: -40px;
                  width: 35px;
                  height: 35px;
                  text-align: center;
                  top: -5px;
                  line-height: 35px;
                }
              }
            }
          }
        }
        // 底部标签
        .tags {
          display: flex;
          padding-top: 20px;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-right: 30px;
            i {
              width: 24px;
              height: 34px;
              display: block;
              // font-size: 24px;
              padding-bottom: 10px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      // 店铺详情右部
      .d-right {
        width: 30%;
        cursor: pointer;
        // 大图区域
        .big-img {
          width: 100%;
          height: 214px;
          border-radius: 5px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        // 小图列表区域
        .img-list {
          width: 100%;
          // overflow: hidden;
          padding-top: 10px;
          display: flex;

          li {
            flex-shrink: 0;
            width: 25%;
            height: 56px;
            padding-right: 5px;
            box-sizing: border-box;
            &:nth-of-type(4) {
              padding: 0;
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
        }
      }
    }
    // 店铺底部内容信息
    .btm-cont {
      display: flex;
      padding-top: 40px;
      justify-content: space-between;
      .btm-left {
        width: 79%;
        // 商家团购及优惠
        .group-buy {
          margin-bottom: 40px;
          h4 {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 12px;
            font-weight: 700;
          }
          .login-group-buy {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            padding: 30px 0;
            img {
              width: 160px;
              height: 120px;
            }
            span {
              font-size: 16px;
              color: #666;
              line-height: 26px;
              margin-bottom: 15px;
            }
            button {
              background-color: #13d1be;
              width: 120px;
              height: 40px;
              font-size: 14px;
              line-height: 40px;
              border: none;
              border-radius: 25px;
              color: #fff;
              cursor: pointer;
            }
          }
        }
        // 推荐菜
        .recommend {
          margin-bottom: 40px;
          h4 {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 12px;
            font-weight: 700;
          }
          .recommend-content {
            width: 100%;
            padding: 33px 32px 26px;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            ul {
              display: flex;
              flex-wrap: wrap;
              text-align: center;
              li {
                width: 16.66%;
                display: flex;
                justify-content: center;
                .pic {
                  width: 130px;
                  height: 130px;
                  .img-box {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 100%;
                      border-radius: 5px;
                    }
                    .desc {
                      position: absolute;
                      width: 100%;
                      bottom: 0;
                      left: 0;
                      color: #fff;
                      background-color: rgba(0, 0, 0, 0.3);
                      padding: 8px 0;
                      font-size: 14px;
                      span {
                        max-width: 60%;
                      }
                    }
                  }
                }
              }
            }
            .list {
              padding-top: 25px;
              span {
                display: inline-block;
                margin: 10px;
              }
            }
          }
        }
        // 网友点评
        .comment {
          margin-bottom: 40px;
          // 网页评论条数 --> 网友评论头部
          .total {
            display: flex;
            justify-content: space-between;
            span {
              font-size: 20px;
              line-height: 26px;
            }
            .sort {
              cursor: pointer;
              color: #999;
              span {
                font-size: 12px;
                margin-left: 20px;
                &.active {
                  color: #00c9b3;
                }
              }
            }
          }
          // 网友评论内容区
          .comment-con {
            margin-top: 8px;
            background-color: #fff;
            border-radius: 4px;
            padding: 0 20px 40px;
            border: 1px solid #e5e5e5;
            color: #666;
            // 网友评论标签区
            .tags {
              font-size: 14px;
              padding-top: 15px;
              display: flex;
              flex-wrap: wrap;
              li {
                padding: 0 10px;
                border: 1px solid #e5e5e5;
                line-height: 34px;
                margin: 0 5px 10px;
                &.active {
                  background-color: #00c9b3;
                  border: 1px solid #00c9b3;
                  color: #fff;
                }
                i {
                  font-style: normal;
                }
              }
            }
            // 查看网友评论
            .sea {
              cursor: pointer;
              margin-top: 22px;
              margin-left: 6px;
              font-size: 14px;
              line-height: 20px;
              .iconfont {
                margin-right: 5px;
              }
            }
            // 网友评论
            .user-comment-list {
              padding-top: 30px;
              padding-left: 6px;
              li {
                display: flex;
                border-bottom: 1px solid #e5e5e5;
                // 用户头像
                .pic {
                  width: 10%;
                  .avatar {
                    width: 60px;
                    height: 60px;
                    img {
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                    }
                  }
                }
                // 用户信息
                .info {
                  width: 90%;
                  // 用户名称
                  .user-name {
                    font-size: 16px;
                    line-height: 22px;
                    color: #222;
                  }
                  // 用户评论时间
                  .comment-time {
                    width: 100%;
                    font-size: 12px;
                    line-height: 20px;
                    color: #999;
                    display: inline-block;
                    text-align: right;
                  }
                  // 店铺详情评分
                  .d-score {
                    position: relative;
                    width: 70%;
                    display: flex;
                    font-size: 14px;
                    height: 14px;
                    line-height: 14px;
                    margin-top: 5px;
                    .default-star,
                    .avg-star {
                      display: flex;
                    }
                    .default-star {
                      margin-right: 8px;
                    }
                    .avg-star {
                      position: absolute;
                      color: #f90;
                      width: 70px;
                      overflow: hidden;
                    }
                  }
                  // 商家回复
                  .reply {
                    display: inline-block;
                    font-size: 14px;
                    color: #31bbac;
                    padding-top: 12px;
                  }
                  // 用户评论信息
                  .user-desc {
                    font-size: 14px;
                    line-height: 20px;
                    padding-top: 13px;
                  }

                  // 用户评论图片列表盒子
                  .user-pic-box {
                    padding-top: 10px;
                    display: flex;
                    .user-pic {
                      width: 140px;
                      height: 140px;
                      margin: 10px;
                      img {
                        width: 100%;
                        height: 100%;
                      }
                    }
                  }
                  // 点赞
                  .great {
                    text-align: right;
                    margin: 17px 0 16px;
                    span {
                      font-size: 12px;
                    }
                    i {
                      font-size: 18px;
                      margin-right: 10px;
                    }
                  }
                }
              }
            }
          }
          // 自定义分页器
          .my-pagination {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .el-pagination {
              /deep/ button {
                width: 42px;
                height: 42px;
                border: 1px solid #e5e5e5;
                border-radius: 50%;
                padding: 0;
                line-height: 42px;
                font-weight: 400;
                i {
                  font-size: 16px;
                }
              }
              /deep/ .el-pager {
                /deep/ li {
                  width: 42px;
                  height: 42px;
                  border-radius: 50%;
                  border: 1px solid #e5e5e5;
                  padding: 0;
                  line-height: 42px;
                  margin: 0 10px;
                  font-size: 16px;
                  color: #999;
                  font-weight: 400;
                  &.active {
                    color: #fff;
                    background-color: #13d1be;
                    border-color: #13d1be;
                  }
                }
              }
            }
          }
        }
      }
      .btm-right {
        width: 20%;
        margin-top: 32px;
        .guess-you-like {
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          background-color: #fff;
          padding: 16px 20px 0;
          h3 {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 12px;
            color: #333;
            font-weight: 600;
          }
          .pic {
            height: 106px;
            border-radius: 5px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
          .merchant-name {
            width: 100%;
            // 禁止换行
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            line-height: 20px;
            color: #222;
            margin: 10px 0 4px;
          }
          .merchant-pos {
            font-size: 12px;
            line-height: 17px;
            color: #999;
          }
          .price {
            font-size: 22px;
            color: #f60;
            line-height: 27px;
            b {
              font-weight: normal;
              font-size: 14px;
            }
          }
        }
      }
    }
    // 附近商家
    .nearby-businesses {
      h4 {
        font-size: 20px;
        line-height: 26px;
        color: #333;
        font-weight: 700;
      }
      .nearby {
        margin-top: 8px;
        color: #999;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        background-color: #fff;
        padding: 20px 20px 0;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 20%;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            margin-bottom: 20px;
            a {
              width: 214px;
              overflow: hidden;
              color: #222;
              .pic {
                width: 100%;
                img {
                  width: 100%;
                  border-radius: 5px;
                }
              }
              p {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .title {
                font-size: 16px;
                line-height: 22px;
                margin: 10px 0 6px;
              }
              .source {
                color: #999;
                font-size: 12px;
              }
              .desc {
                min-height: 32px;
              }
              .price {
                color: #f60;
                line-height: 27px;
                font-size: 22px;
                font-weight: 700;
                b {
                  font-weight: 400;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
  // 蒙版轮播图
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;
    // 缩略图
    .thumb-example {
      position: relative;
      width: 60%;
      text-align: center;
      max-height: 637px;
      margin: 3% auto 0;
      .closeMask {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        position: absolute;
        right: 30px;
        color: #fff;
        z-index: 99;
      }
    }
    // 缩略图
    .swiper {
      &.gallery-top {
        height: 80%;
        width: 100%;
      }
      &.gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
      }
      &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
      }
    }
  }
}
</style>

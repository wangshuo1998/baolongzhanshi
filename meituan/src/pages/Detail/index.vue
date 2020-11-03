<template>
  <div>
    <!-- 使用头部组件 -->
    <Header></Header>
    <!-- 商品列表容器 -->
    <div class="detailContainer">
      <!-- 面包屑导航 -->
      <DetailTopNav></DetailTopNav>
      <!-- 分类区 -->
      <div class="left">
        <div class="filter">
          <!-- 筛选区域 -->
          <DetailFilterCondition :filtersDatas="filtersDatas.cates"></DetailFilterCondition>
          <DetailFilterCondition :filtersDatas="filtersDatas.areas" :classification="'区域'"></DetailFilterCondition>
          <DetailFilterCondition
            :filtersDatas="filtersDatas.dinnerCountsAttr"
            :classification="'用餐人数'"
          ></DetailFilterCondition>
        </div>
        <div class="list-container">
          <!-- 排序区域 -->
          <div class="tags">
            <span class="active" v-for="(item, index) in filtersDatas.sortTypesAttr" :key="item.id">{{
              item.name
            }}</span>
          </div>
          <!-- 商品详情列表 -->
          <ul class="list">
            <li v-for="(item, index) in poiList" :key="item.poiId">
              <div class="pic">
                <a href="javascript:;">
                  <img :src="item.frontImg" alt="" />
                </a>
              </div>
              <div class="content">
                <a href="javascript:;">
                  <h4>
                    {{ item.title }}
                  </h4>
                  <div class="merchant-star">
                    <ul class="star-len">
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
                    <ul class="star-end" :style="{ width: ((item.avgScore * 2) / 10) * 80 + 'px' }">
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
                    <span class="score">{{ item.avgScore }}分</span>
                    <span class="comment">{{ item.allCommentNum }}条评论</span>
                  </div>
                  <p class="merchant-pos">
                    {{ item.address }}
                  </p>
                  <p class="price">人均￥{{ item.avgPrice }}</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
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
      <!-- 分类区右侧 -->
      <div class="right">
        <div class="guess-you-like">
          <h3>猜你喜欢</h3>
          <ul>
            <li v-for="(item, index) in guessInfo" :key="item.itemId">
              <a href="javascript:;">
                <div class="pic">
                  <img :src="item.imgUrl" alt="" />
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
    <!-- 使用脚步组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
// 引入面包屑导航
import DetailTopNav from '@/components/DetailTopNav'
// 引入商品分类筛选组件
import DetailFilterCondition from './DetailFilterCondition'
// 引入头部脚部组件
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  components: {
    // 注册组件
    DetailTopNav,
    Header,
    Footer,
    DetailFilterCondition,
  },
  data() {
    return {
      currentPage: 4,
      pagerCount: 5,
    }
  },
  methods: {
    // 每页 ${val} 条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 当前页: ${val}
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    //  获取筛选数据
    getFiltersDatas() {
      this.$store.dispatch('getFiltersDatas')
    },
    // 获取商品列表数据
    getPoiList() {
      this.$store.dispatch('getPoiList')
    },
    // 获取猜你喜欢列表数据
    getGuessInfo() {
      this.$store.dispatch('getGuessInfo')
    },
  },
  mounted() {
    // DOM加载完毕获取数据
    this.getFiltersDatas()
    this.getPoiList()
    this.getGuessInfo()
  },
  computed: {
    // 从vuex 中把商品筛选数据拿出来
    ...mapState({
      filtersDatas: (state) => state.Detail.filtersDatas,
      poiList: (state) => state.Detail.poiList.poiInfos,
      guessInfo: (state) => state.Detail.guessInfo,
    }),
  },
}
</script>

<style lang="less" scoped>
@import url('./css/Mixins.less');
.detailContainer {
  .content();
  .left {
    float: left;
    width: 950px;
    .filter {
      border: 1px solid #e5e5e5;
      background-color: #fff;
      border-radius: 5px;
    }
    .list-container {
      border: 1px solid #e5e5e5;
      background-color: #fff;
      border-radius: 5px;
      margin-top: 14px;
      padding: 15px 20px 21px;
      .tags {
        border-bottom: 1px solid #e5e5e5;
        line-height: 20px;
        padding-bottom: 13px;
        span {
          font-size: 14px;
          display: inline-block;
          min-width: 96px;
          padding: 0 10px;
          &.active {
            color: #31bcad;
          }
        }
      }
      .list {
        > li {
          padding: 20px 0 18px;
          border-bottom: 1px solid #e5e5e5;
          .clearfix();
          .pic {
            height: 125px;
            width: 220px;
            border-radius: 5px;
            float: left;
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
          .content {
            float: left;
            padding: 4px 0 0 20px;
            max-width: 666px;
            font-size: 12px;
            h4 {
              font-size: 16px;
              line-height: 22px;
              color: 222;
              font-weight: 700;
            }
            a {
              color: #222;
            }
            .merchant-star {
              position: relative;
              padding-top: 6px;
              line-height: 13px;
              .star-len,
              .star-end {
                color: #c3c3c3;
                float: left;
                height: 13px;
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                li {
                  display: inline-block;
                }
                .clearfix();
              }
              // 评定星级 更改宽度
              .star-end {
                position: absolute;
                color: #f60;
                width: 10px;
              }
              .score {
                float: left;
                padding-left: 6px;
                font-size: 12px;
              }
              .comment {
                float: left;
                padding-left: 8px;
                font-size: 12px;
                color: #f60;
              }

              .clearfix();
            }
            .merchant-pos {
              line-height: 17px;
              color: #666;
              padding-top: 7px;
            }
            .price {
              line-height: 17px;
              color: #666;
              padding-top: 7px;
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
          border-radius: 50%;
          padding: 0;
          line-height: 42px;
          font-weight: 400;
          i {
            font-size: 16px;
          }
        }
        /deep/ .el-pager {
          li {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            padding: 0;
            line-height: 42px;
            margin: 0 10px;
            font-size: 16px;
            color: #999;
            font-weight: 400;
            /deep/ &.active {
              color: #fff;
              background-color: #13d1be;
              border-color: #13d1be;
            }
          }
        }
      }
    }
  }
  .right {
    float: right;
    width: 230px;

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
  .clearfix();
}
</style>

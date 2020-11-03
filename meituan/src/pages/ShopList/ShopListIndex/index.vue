<template>
  <!-- 商品列表容器 -->
  <div class="detailContainer">
    <!-- 面包屑导航 -->
    <Breadcrumbs></Breadcrumbs>
    <!-- 分类区 -->
    <div class="left">
      <div class="filter">
        <div class="condition-flter-list" v-if="conditionList.length > 0">
          <div class="checkedCondition">已选条件</div>
          <ul class="conditionList">
            <li class="iconfont" v-for="(item, index) in conditionList" :key="item" @click="removeCondition(item)">
              {{ item }}
            </li>
          </ul>
          <div class="clearAllCondition" @click="clearAllCondition">
            <a href="javascript:;">· 清除全部</a>
          </div>
        </div>
        <!-- 筛选区域 -->
        <ShopFilterCondition
          :detailFilterId="0"
          :filtersDatas="filtersDatas.cates"
          @conditionFlterHandler="conditionFlterHandler"
        ></ShopFilterCondition>
        <ShopFilterCondition
          :detailFilterId="1"
          @conditionFlterHandler="conditionFlterHandler"
          :filtersDatas="filtersDatas.areas"
          :classification="'区域'"
        ></ShopFilterCondition>
        <ShopFilterCondition
          :detailFilterId="2"
          @conditionFlterHandler="conditionFlterHandler"
          :filtersDatas="filtersDatas.dinnerCountsAttr"
          :classification="'用餐人数'"
        ></ShopFilterCondition>
      </div>
      <div class="list-container">
        <!-- 排序区域 -->
        <div class="tags">
          <span
            :class="{ active: index === sortIndex }"
            v-for="(item, index) in filtersDatas.sortTypesAttr"
            :key="item.id"
            @click="detailSort(index)"
            >{{ item.name }}
          </span>
        </div>
        <!-- 商品详情列表 -->
        <ul class="list">
          <li v-for="(item, index) in poiList" :key="item.poiId">
            <div class="pic">
              <!-- 临时征用 -->
              <router-link to="/shopList/shopDetail">
                <img :src="item.frontImg" alt="" />
              </router-link>
              <!-- <a href="javascript:;">
                <img :src="item.frontImg" alt="" />
              </a> -->
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
</template>

<script>
// 引入面包屑导航
import Breadcrumbs from '@/components/Breadcrumbs'
// 引入商品分类筛选组件
import ShopFilterCondition from '../ShopFilterCondition'
import { mapState } from 'vuex'
export default {
  name: 'ShopList',
  components: {
    Breadcrumbs,
    ShopFilterCondition,
  },
  data() {
    return {
      currentPage: 4,
      pagerCount: 5,
      sortIndex: 0,
      conditionFlterList: [],
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
    // 商品排序事件
    detailSort(index) {
      this.sortIndex = index
      switch (index) {
        case 0:
          // 发送请求更改数据,把数据改为默认数据
          this.getPoiList()
          break
        case 1:
          // 商品销售进行排序
          this.detailSortHandle('poiId')
          break
        case 2:
          // 商品价格进行排序
          this.detailSortHandle('avgPrice')
          break
        case 3:
          // 商品评论进行排序
          this.detailSortHandle('allCommentNum')
          break
      }
    },
    detailSortHandle(item) {
      this.poiList.sort((a, b) => {
        return b[item] - a[item]
      })
    },
    // 自定义事件 接收子组件
    conditionFlterHandler(data) {
      const { conditionFlterList } = this
      // 绑定分类数据
      this.$set(conditionFlterList, data.id, data.conditionname)
    },
    // 清空筛选数据
    clearAllCondition() {
      this.conditionFlterList = []
    },
    // 删除点击的分类数据
    removeCondition(name) {
      const { conditionFlterList } = this
      let newCondition = conditionFlterList.map((item) => {
        if (name !== item) {
          return item
        }
        return undefined
      })
      this.conditionFlterList = newCondition
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
      filtersDatas: (state) => state.ShopList.filtersDatas,
      poiList: (state) => state.ShopList.poiList.poiInfos,
      guessInfo: (state) => state.ShopList.guessInfo,
    }),
    conditionList() {
      return this.conditionFlterList.filter((item) => {
        if (item) return item
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import url('../css/Mixins.less');
.detailContainer {
  .content();
  .left {
    float: left;
    width: 950px;
    .filter {
      border: 1px solid #e5e5e5;
      background-color: #fff;
      border-radius: 5px;
      .condition-flter-list {
        padding: 10px 0 10px 20px;
        font-size: 12px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        .checkedCondition {
          margin-right: 18px;
        }
        .conditionList {
          display: flex;
          cursor: pointer;
          li {
            color: #13d1be;
            border: 1px solid #13d1be;
            margin-right: 10px;
            padding: 0 5px;
            font-size: 12px;
            border-radius: 10px;
            &::after {
              content: '\e658';
            }
          }
        }
        .clearAllCondition {
          a {
            color: #999;
          }
        }
      }
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
          /deep/ li {
            width: 42px;
            height: 42px;
            border-radius: 50%;
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

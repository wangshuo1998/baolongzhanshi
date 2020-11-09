<template>
  <!--    猜你喜欢-->
  <div class="guessLikeContainer">
    <!--      上边的导航-->
    <div class="guessLikeNav">
      <dl class="clearfix">
        <dt>猜你喜欢</dt>
        <dd class="active">为你甄选最合适的</dd>
        <dd class="allItem clearfix">
          全部
          <i class="iconfont iconjiantou"></i>
        </dd>
      </dl>
    </div>
    <!--    下边的喜欢列表-->
    <div class="guessLikeList">
      <div class="likeWrapper clearfix" @click="toShopDetail">
        <div class="likeItem" v-for="(store, index) in guessLikeList" :key="store.itemId">
          <img v-lazy="store.imgUrl" alt="" :data-shopId="store.itemId" />
          <div class="storeInfo">
            <p>{{ store.title }}</p>
            <div class="clearfix">
              <dl class="clearfix show" :style="{ width: 16 * (store.score * 1) + 'px' }">
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
              </dl>
              <dl class="disShow clearfix">
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
                <dd class="iconfont iconstart"></dd>
              </dl>
              <span>{{ store.commentNum }}个评价</span>
            </div>
            <p>{{ store.areaName }}</p>
            <p>
              ￥<span>{{ store.lowPrice }}</span
              ><label>起</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuessLike',
  props: ['guessLikeList'],
  methods: {
    // 跳转猜你喜欢详情页面
    toShopDetail(e) {
      const target = e.target
      const { shopid: shopId } = target.dataset
      const location = {
        name: 'shopDetail',
        params: {
          shopId,
        },
      }
      this.$router.push(location)
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

/*  猜你喜欢*/
.guessLikeContainer {
  width: 1190px;
  margin: 40px auto 0 auto;
  background: #fff;
  /*导航*/
  .guessLikeNav {
    background: #47bbd0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 0 10px;

    dl {
      dt {
        float: left;
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
        font-family: MFShangHei-Regular !important;
      }

      dd {
        float: left;
        padding: 0 5px;
        cursor: pointer;
        position: relative;

        &.allItem {
          float: right;

          i {
            font-size: 12px;
            font-weight: bold;
            margin-left: -4px;
          }
        }

        &.active:after {
          content: '';
          background: #fff;
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(-45deg);
        }
      }
    }
  }
  /*列表*/
  .guessLikeList {
    width: 1190px;
    border: 1px solid #e5e5e5;
    border-top: 0px;
    box-sizing: border-box;
    padding: 20px;
    .likeWrapper {
      .likeItem {
        float: left;
        width: 20%;
        padding: 10px;
        cursor: pointer;
        transition: background 0.3s;
        &:hover {
          background: #f7f7f7;
        }
        img {
          width: 100%;
          border-radius: 4px;
        }
        .storeInfo {
          margin-top: 10px;
          p:first-child {
            width: 100%;
            height: 22px;
            line-height: 22px;
            font-size: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          & > div {
            position: relative;
            width: 100%;
            height: 18px;
            .show {
              position: absolute;
              top: 0;
              left: 0;
              margin: 3px 0;
              z-index: 99;
              overflow: hidden;
              height: 12px;
              dd {
                float: left;
                color: #ff9900;
                font-size: 12px;
                margin-right: 4px;
              }
            }
            .disShow {
              position: absolute;
              top: 0;
              left: 0;
              margin: 3px 0;
              z-index: 90;
              dd {
                float: left;
                color: #999;
                font-size: 12px;
                margin-right: 4px;
              }
            }
            span {
              position: absolute;
              right: 0;
              font-size: 12px;
              color: #999;
              margin: 1px 0;
            }
          }
          p:nth-child(3) {
            color: #999;
            font-size: 12px;
            margin: 4px 0;
          }
          p:last-child {
            color: #ff6600;
            font-size: 14px;
            font-weight: 700;
            span {
              font-size: 22px;
            }
            label {
              font-size: 12px;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
}
</style>

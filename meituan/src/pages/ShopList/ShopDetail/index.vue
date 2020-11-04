<template>
  <!-- 店铺详情容器 -->
  <div class="shopDetailContainer">
    <!-- 店铺详情内容部分 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <Breadcrumbs></Breadcrumbs>
      <!-- 详情部分 -->
      <div class="details">
        <!-- 左部 -->
        <div class="d-left">
          <!-- 头部名称 -->
          <div class="title">
            <div class="title-name">
              <h2>一珍香.江南渔府</h2>
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
              <ul class="avg-star">
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
              <span class="avg-score">4.4分</span>
              <span class="avg-price">人均￥315</span>
            </div>
          </div>
          <!-- 地址 -->
          <div class="address">
            <p>地址：西城区复兴门内大街51号民族饭店2楼 <i class="iconfont iconweizhi"></i></p>
            <p>电话：010-66072788</p>
            <p>营业时间：周一至周日 09:30-21:30</p>
          </div>
          <!-- 标签选项 -->
          <ul class="tags">
            <li>
              <i class="iconfont iconicon-test"></i>
              <span>提供wifi</span>
            </li>
            <li>
              <i class="iconfont iconicon-test"></i>
              <span>提供wifi</span>
            </li>
            <li>
              <i class="iconfont iconicon-test"></i>
              <span>提供wifi</span>
            </li>
          </ul>
        </div>
        <!-- 右部 -->
        <div class="d-right">
          <div class="big-img">
            <img
              src="https://img.meituan.net/msmerchant/a15b1e24ed8b36ebefde1c925ed6c875117239.jpg@380w_214h_1e_1c"
              alt=""
            />
          </div>
          <ul class="img-list">
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
          </ul>
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
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="list">
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
              </div>
            </div>
          </div>
        </div>
        <div class="btm-right">right</div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
export default {
  name: 'ShopDetail',
  components: {
    Breadcrumbs,
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
            height: 14px;
            line-height: 14px;
            margin: 6px 0 17px;
            .default-star,
            .avg-star {
              display: flex;
            }
            .avg-star {
              position: absolute;
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
              font-size: 24px;
              padding-bottom: 10px;
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
          overflow: hidden;
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
      }
      .btm-right {
        width: 20%;
        background-color: #f00;
      }
    }
  }
}
</style>

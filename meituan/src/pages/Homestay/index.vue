<template>
  <div>
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
    <!-- 照片区域 -->
    <div class="picContainer">
      <div class="left">
        <div class="img"></div>
      </div>
      <div class="center">
        <div class="small1"></div>
        <div class="small2"></div>
      </div>
      <div class="right">
        <div class="small3"></div>
        <div class="small4"></div>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="contentContainer">
      <!-- 主要内容头部 -->
      <div class="top">
        <div class="wrap clearfix">
          <ul>
            <li>
              <div class="tag">概览</div>
              <div class="eTag">DETAIL</div>
            </li>
            <li>
              <div class="tag">房东</div>
              <div class="eTag">HOST</div>
            </li>
            <li>
              <div class="tag">位置</div>
              <div class="eTag">LOCATION</div>
            </li>
            <li>
              <div class="tag">评价</div>
              <div class="eTag">REVIEWS</div>
            </li>
            <li>
              <div class="tag">设施</div>
              <div class="eTag">AMENITIES</div>
            </li>
          </ul>
        </div>
        <div class="wrapper">
          <span>
            <a href="javascript:;">天津民宿</a>
            >
          </span>
          <span>
            <a href="javascript:;">天津南开区民宿</a>
          </span>
        </div>
        <div class="desc">
          <p>【九月●美宿】NO.4/浓浓北欧情/鼓楼/古文化街/100寸投影</p>
          <div class="description">
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
          </div>
        </div>
      </div>
      <!-- 主要内容左侧 -->
      <div class="leftContent"></div>
      <!-- 主要内容右侧 -->
      <div class="rightContent">
        <div class="price">
          <i>￥</i>
          <span>126.4</span>
          <b>/晚</b>
        </div>
        <button class="date">
          <i class="iconfont iconrili"></i>
          请选择入离时间
        </button>
        <button class="count">
          <i class="iconfont iconzhanghu"></i>
          1位房客
          <b class="iconfont iconzuojiantou"></b>
        </button>
        <div class="tip">
          <span>可住2人，不可加客</span>
        </div>
        <div class="reserve clearfix">
          <div class="host">
            <i class="iconfont iconxinxi"></i>
            联系房东
          </div>
          <div class="reserveNow">立即预订</div>
        </div>
        <div class="codePic clearfix">
          <div class="pic">
            <img src="./images/QRcode.png">
          </div>
          <div class="description">
            <p>微信扫码9折订</p>
            <span>扫描二维码，使用小程序预订更优惠哦~</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homestay",
};
</script>

<style lang="less" scoped>
//头部
.header {
  width: 100%;
  background: #fff;
  margin-bottom: 8px;
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
// 照片区域
.picContainer {
  width: 100%;
  height: 56vh;
  // max-height: 458px;
  display: flex;
  .left {
    width: 50%;
    height: 56vh;
    // max-height: 458px;
    margin-right: 8px;
    .img {
      background-size: cover;
      width: 100%;
      height: 100%;
      background: url(./images/big.jpg) no-repeat;
      background-size: 100% 100%;
      background-position: 50%;
    }
  }
  .center {
    width: 25%;
    display: flex;
    flex-direction: column;
    height: 56vh;
    margin-right: 8px;
    .small1 {
      background-size: cover;
      width: 100%;
      height: 50%;
      background: url(./images/small1.jpg) no-repeat;
      background-size: 100% 100%;
      margin-bottom: 8px;
    }
    .small2 {
      background-size: cover;
      width: 100%;
      height: 50%;
      background: url(./images/small2.jpg) no-repeat;
      background-size: 100% 100%;
    }
  }
  .right {
    width: 25%;
    display: flex;
    flex-direction: column;
    height: 56vh;
    .small3 {
      background-size: cover;
      width: 100%;
      height: 50%;
      background: url(./images/small3.jpg) no-repeat;
      background-size: 100% 100%;
      margin-bottom: 8px;
    }
    .small4 {
      background-size: cover;
      width: 100%;
      height: 50%;
      background: url(./images/small4.jpg) no-repeat;
      background-size: 100% 100%;
    }
  }
}
//主要内容区域
.contentContainer {
  width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
  //主要内容头部
  .top {
    margin-top: 10px;
    .wrap {
      margin-bottom: 5px;
      border-bottom: 1px solid #eee;
      li {
        position: relative;
        float: left;
        text-align: center;
        margin-right: 40px;
        &::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 4px;
          border-radius: 2px;
          background: #3e3f40;
        }
        .tag {
          color: #7d7e80;
          font-size: 14px;
          font-weight: 500;
        }
        .eTag {
          padding: 4px 0;
          color: #d0d4d7;
          font-weight: 500;
          font-size: 1px;
        }
      }
    }
    .wrapper {
      margin: 18px 0;
      font-size: 12px;
      color: #aaa;
      a {
        color: #aaa;
      }
    }
    .desc {
      p {
        font-size: 20px;
        color: #252626;
        font-weight: bold;
      }
      .description {
        height: 25px;
        line-height: 25px;
        margin: 10px 0;
        white-space: nowrap;
        span {
          margin-right: 8px;
          font-size: 12px;
        }
        .blue {
          a {
            color: #465ee6;
          }
          background: #e3e7f8;
          border: 1px solid #e3e7e0;
          padding: 2px 5px;
          border-radius: 4px;
        }
        .pink {
          a {
            color: #ff4d6a;
          }
          background: #f2e1e8;
          border: 1px solid #f2e1d0;
          padding: 2px 5px;
          border-radius: 4px;
        }
        .orange {
          a {
            color: #f58e11;
          }
          background: #f5ebe3;
          border: 1px solid#F5EBD0;
          padding: 2px 5px;
          border-radius: 4px;
        }
      }
    }
  }
  //主要内容左侧
  .leftContent {
  }
  //主要内容右侧
  .rightContent {
    margin-left: 24ppx;
    width: 406px;
    background: #fff;
    float: right;
    padding: 16px;
    .price {
      i {
        font-size: 18px;
        font-weight: 700;
        color: #ff4d6a;
      }
      span {
        font-size: 32px;
        font-weight: 700;
        color: #ff4d6a;
      }
      b {
        font-size: 12px;
        color: #585a5a;
        font-weight: 400;
      }
    }
    .date {
      margin: 15px 0 15px 0;
      width: 100%;
      background: #f5f6fa;
      color: #252626;
      text-align: left;
      padding: 0 8px;
      font-weight: 500;
      border-radius: 4px;
      line-height: 44px;
      border: 0;
      font-size: 12px;
      cursor: pointer;
      i {
        opacity: 60%;
        margin-right: 6px;
        font-size: 18px;
        vertical-align: middle;
      }
    }
    .count {
      position: relative;
      width: 100%;
      background: #f5f6fa;
      color: #252626;
      text-align: left;
      padding: 0 8px;
      font-weight: 500;
      border-radius: 4px;
      line-height: 44px;
      border: 0;
      font-size: 12px;
      cursor: pointer;
      i {
        opacity: 60%;
        margin-right: 6px;
        font-size: 18px;
        vertical-align: middle;
      }
      b {
        position: absolute;
        opacity: 30%;
        right: 6px;
        font-size: 14px;
        vertical-align: middle;
      }
    }
    .tip{
      font-size: 12px;
      color: #585a5a;
      margin: 10px 0;
    }
    .reserve{
      height: 50px;
      width: 100%;
      .host{
        width: 60px;
        height: 50px;
        float: left;
        border: 1px solid #eee;
        font-size: 12px;
        text-align: center;
        i{
          padding-top: 6px;
          display: block;
          text-align: center;
          color: #000;
        }
      }
      .reserveNow{
        float: right;
        width: 302px;
        height: 50px;
        line-height: 50px;
        border-radius: 4px;
        background: #FFDB28;
        text-align: center;
      }
    }
    .codePic{
      position: relative;
      width: 100%;
      height: 140px;
      // display: inline-block;
      margin-top: 20px;
      .pic{
        width: 140px;
        height: 140px;
        display: inline-block;
      }
      .description{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 155px;
        width: 218px;
        p{
          font-size: 18px;
        }
        span{
          display: block;
          margin-top: 10px;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>

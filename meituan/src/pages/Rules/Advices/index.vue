<template>
  <!-- 规则目录 -->
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="headContent">
        <h1>美团规则中心</h1>
        <ul class="headerRight">
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <router-link to="/rules/catalouge">规则目录</router-link>
            <!-- <a href="javascript:;">规则目录</a> -->
          </li>
          <li>
            <a href="javascript:;">规则评议院</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 中间搜索框+内容区 -->
    <div class="container">
      <!-- 搜索框 -->
      <div class="search">
        <div class="searchBox">
          <input
            type="text"
            placeholder="搜索规则关键词,如:价格"
            class="input"
          />
          <div class="btn">
            <i class="iconfont iconsearch"></i>
          </div>
        </div>
      </div>
      <!-- 文本区域 -->
      <div class="content">

      </div>
    </div>

    <!-- 底部 -->
    <div class="bottomContainer">
      <div class="footer">
        <div class="bottomCotent">
          <div class="item">
            <h3>关于我们</h3>
            <ul>
              <li><a href="javascript:;">基本介绍</a></li>
              <li><a href="javascript:;">基本介绍</a></li>
              <li><a href="javascript:;">基本介绍</a></li>
              <li><a href="javascript:;">基本介绍</a></li>
              <li><a href="javascript:;">基本介绍</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>企业文化</h3>
            <ul>
              <li><a href="javascript:;">企业理念</a></li>
              <li><a href="javascript:;">企业理念</a></li>
              <li><a href="javascript:;">企业理念</a></li>
              <li><a href="javascript:;">企业理念</a></li>
              <li><a href="javascript:;">企业理念</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>新闻中心</h3>
            <ul>
              <li><a href="javascript:;">公司新闻</a></li>
              <li><a href="javascript:;">公司新闻</a></li>
              <li><a href="javascript:;">公司新闻</a></li>
              <li><a href="javascript:;">公司新闻</a></li>
              <li><a href="javascript:;">公司新闻</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>联系我们</h3>
            <ul>
              <li><a href="javascript:;">客户联系</a></li>
              <li><a href="javascript:;">客户联系</a></li>
              <li><a href="javascript:;">客户联系</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>加入我们</h3>
            <ul>
              <li><a href="javascript:;">美团官网招聘</a></li>
            </ul>
          </div>
          <div class="item2">
            <h2>美团</h2>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="..//images/weibo.png" />
                  美团微博
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="..//images/wechat.png" />
                  美团微信公众号
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="..//images/weibo.png" />
                  美团微博
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="..//images/wechat.png" />
                  美团微信公众号
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer2">
        <div class="footer2Left">@2018 美团保留所有权利</div>
        <div class="footer2Right">
          <a href="javascript:;">隐私政策</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advices",
};
</script>

<style lang="less" scoped>
// 头部
.header {
  width: 100%;
  height: 100px;
  background: white;
  .headContent {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    h1 {
      font-size: 28px;
      font-weight: bold;
      height: 100px;
      line-height: 100px;
      display: inline-block;
      color: #333;
    }
    .headerRight {
      margin: 0 0 0 70px;
      display: inline-block;
      list-style-type: none;
      line-height: 100px;
      li {
        float: left;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin-right: 40px;
        line-height: 22px;
        a {
          color: #333;
          &:hover {
            transition: color 0.2s ease;
            color: #ffbd00;
          }
          &:after {
            position: relative;
            top: 40px;
            content: "";
            display: block;
            height: 4px;
            background-image: linear-gradient(135deg, #ffd000, #ffbd00);
          }
        }
      }
    }
  }
}

.container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .search {
    position: relative;
    padding-top: 30px;
    width: 1190px;
    height: 100px;
    margin-bottom: 10px;
    background-image: url("../images/search.png");
    background-size: cover;
    border-radius: 5px;
    .searchBox {
      width: 550px;
      height: 40px;
      margin: 0 auto;
      background: #fff;
      border-radius: 4px;
      .input {
        padding: 10px 15px;
        width: 470px;
        font-size: 14px;
        color: #999;
        line-height: 20px;
        border: 0;
        display: inline-block;
        border-radius: 4px 0 0 4px;
      }
      .btn {
        width: 80px;
        height: 40px;
        float: right;
        background: #ffc300;
        border-radius: 0 4px 4px 0;
        padding: 8px 28px;
        cursor: pointer;
      }
    }
  }
}
//底部
.bottomContainer {
  width: 100%;
  background: #fcfcfc;
  margin-top: 20px;
  float: left;
  .footer {
    width: 1188px;
    margin: 0 auto;
    &:after {
      clear: both;
      content: "";
      display: block;
    }
    .bottomCotent {
      border-bottom: 1px solid #e6e6e6;
      .item2 {
        width: 198px;
        padding: 46px 0 76px;
        float: left;
        margin-top: -10px;
        h2 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #999;
          font-weight: 700;
        }
        li {
          margin-top: 10px;
          a {
            font-size: 14px;
            color: #999;
            img {
              width: 27px;
              height: 27px;
              margin-right: 2px;
              vertical-align: middle;
              opacity: 0.5;
            }
          }
        }
      }
      &:after {
        clear: both;
        content: "";
        display: block;
      }
      .item {
        width: 198px;
        padding: 46px 0 76px;
        float: left;
        h3 {
          font-size: 16px;
          color: #666;
          margin-bottom: 12px;
          font-weight: bold;
        }
        li {
          margin-bottom: 8px;
          a {
            text-decoration: none;
            line-height: 20px;
            font-size: 14px;
            color: #666;
            &:hover {
              transition: color 0.4s ease;
              color: #333;
            }
          }
        }
      }
    }
  }
  .footer2 {
    width: 1188px;
    height: 60px;
    margin: 0 auto;
    color: #666;
    font-size: 12px;
    line-height: 60px;
    &:after {
      clear: both;
      content: "";
      display: block;
    }
    .footer2Left {
      float: left;
    }
    .footer2Right {
      float: right;
      a {
        color: #666;
      }
    }
  }
}
</style>

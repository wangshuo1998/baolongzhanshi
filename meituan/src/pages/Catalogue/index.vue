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
        <!-- 左侧文本 -->
        <div class="leftContent">
          <ul>
            <a href="javascript:;" class="item">全部</a>
            <a href="javascript:;" class="item">平台基础规则</a>
            <a href="javascript:;" class="item">美团平台规则</a>
            <li class="firstItem">
              <div class="firstList">
                大众点评平台规则
                <i class="iconfont iconjiantouarrow487"></i>
              </div>
              <ul>
                <a href="javascript:;" class="secondItem">大众点评基础规则</a>
                <a href="javascript:;" class="secondItem">大众点评商户管理</a>
                <a href="javascript:;" class="secondItem">大众点评运营规则</a>
              </ul>
            </li>
            <li class="firstItem">
              <div class="firstList">
                业务规则
                <i class="iconfont iconjiantouarrow487"></i>
              </div>
              <ul>
                <li>
                  <div class="second">
                    美团外卖
                    <i class="iconfont iconjiantouarrow487"></i>
                  </div>
                  <ul>
                    <a href="javascript:;" class="thirdItem">招商规范</a>
                    <a href="javascript:;" class="thirdItem">商品规范</a>
                    <a href="javascript:;" class="thirdItem">品控规范</a>
                  </ul>
                </li>
                <a href="javascript:;" class="secondItem">团购业务</a>
                <a href="javascript:;" class="secondItem">小象生鲜</a>
                <a href="javascript:;" class="secondItem">美团买菜</a>
                <a href="javascript:;" class="secondItem">美团打车</a>
              </ul>
            </li>
            <a href="javascript:;" class="item">消费者权益保障</a>
            <a href="javascript:;" class="item">隐私政策</a>
            <li class="firstItem">
              <div class="firstList">
                公示通知
                <i class="iconfont iconjiantouarrow487"></i>
              </div>
              <ul>
                <a href="javascript:;" class="secondItem">规则公告</a>
                <a href="javascript:;" class="secondItem">平台公告</a>
              </ul>
            </li>
            <li class="firstItem">
              <div class="firstList">
                普法专栏
                <i class="iconfont iconjiantouarrow487"></i>
              </div>
              <ul>
                <a href="javascript:;" class="secondItem">法规解读</a>
                <a href="javascript:;" class="secondItem">政策解读</a>
              </ul>
            </li>
            <li class="firstItem">
              <div class="firstList">
                规则动态
                <i class="iconfont iconjiantouarrow487"></i>
              </div>
              <ul>
                <a href="javascript:;" class="secondItem">意见征集</a>
                <li>
                  <div class="second">
                    历史规则
                    <i class="iconfont iconjiantouarrow487"></i>
                  </div>
                  <ul>
                    <a href="javascript:;" class="thirdItem">失效规则</a>
                    <a href="javascript:;" class="thirdItem">发布汇总</a>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 右侧文本 -->
        <div class="rightContent">
          <div class="container">
            <div>
              <ul>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
                <li>
                  <a href="javascript:;">美团团购用户服务条款</a>
                </li>
              </ul>
              <!-- 自我封装分页组件 -->
              <div class="my-pagination">
                <el-pagination layout="prev, pager, next" :total="80">
                  <!-- :current-page="currentPage" -->
                  <!-- pager-count="pagerCount" -->
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
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
              <li><a href="javascript:;">发展历史</a></li>
              <li><a href="javascript:;">管理团队</a></li>
              <li><a href="javascript:;">业务产品</a></li>
              <li><a href="javascript:;">社会企业</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>企业文化</h3>
            <ul>
              <li><a href="javascript:;">企业理念</a></li>
              <li><a href="javascript:;">人才发展</a></li>
              <li><a href="javascript:;">工作在美团</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>新闻中心</h3>
            <ul>
              <li><a href="javascript:;">公司新闻</a></li>
              <li><a href="javascript:;">美团研究院</a></li>
              <li><a href="javascript:;">媒体新闻</a></li>
            </ul>
          </div>
          <div class="item">
            <h3>联系我们</h3>
            <ul>
              <li><a href="javascript:;">客户联系</a></li>
              <li><a href="javascript:;">合作洽谈</a></li>
              <li><a href="javascript:;">投资者关系</a></li>
              <li><a href="javascript:;">监督举报</a></li>
              <li><a href="javascript:;">办公地点</a></li>
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
                  <img src="./images/weibo.png" />
                  美团微博
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./images/wechat.png" />
                  美团微信公众号
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./images/weibo.png" />
                  美团微博
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="./images/wechat.png" />
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
  name: "Catalogue",
  data() {
    return {};
  },
  methods: {},
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
//中间搜索框+内容区
.container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  //搜索框
  .search {
    position: relative;
    padding-top: 30px;
    width: 1190px;
    height: 100px;
    margin-bottom: 10px;
    background-image: url("./images/search.png");
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
  //中间文本区域
  .content {
    width: 1200px;
    // 左侧部分
    .leftContent {
      position: relative;
      width: 230px;
      // display: inline-block;
      float: left;
      background: white;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
      height: 465px;
      overflow: auto;
      .item {
        display: block;
        color: #555;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        padding: 10px 10px 10px 30px;
        &::before {
          content: "";
          display: block;
          width: 4px;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          background: #ffc300;
        }
      }
      .firstItem {
        color: #555;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        padding: 10px 10px 10px 30px;
        cursor: pointer;
        .second {
          font-weight: 700;
          font-size: 14px;
          color: #666;
          background: #fff;
          height: 42px;
          line-height: 20px;
          padding: 10px 10px 10px 30px;
        }
        .secondItem {
          font-weight: 400;
          font-size: 14px;
          color: #666;
          background: #fff;
          height: 42px;
          line-height: 20px;
          padding: 10px 10px 10px 30px;
          display: block;
        }
        .thirdItem {
          font-weight: 400;
          font-size: 14px;
          color: #666;
          background: #fff;
          height: 42px;
          line-height: 20px;
          padding: 10px 10px 10px 60px;
          display: block;
        }
        .iconjiantouarrow487 {
          font-size: 16px;
          float: right;
          margin-right: 20px;
          font-weight: 400;
          opacity: 60%;
          vertical-align: middle;
        }
      }
    }
    // 右侧部分
    .rightContent {
      margin-left: 10px;
      // display: inline-block;
      float: left;
      width: 950px;
      .container {
        position: relative;
        width: 950px;
        height: 465px;
        padding: 30px 40px;
        background: white;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        margin: 0;
        li {
          padding-left: 10px;
          margin-bottom: 20px;
          a {
            color: #666;
            font-size: 14px;
            &::before {
              content: " ";
              position: relative;
              left: -10px;
              height: 4px;
              width: 4px;
              border: 2px solid #d9d9d9;
              border-radius: 50%;
              display: inline-block;
            }
            &:hover {
              color: #ffc300;
            }
          }
        }
        // 自定义分页器
        .my-pagination {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          .el-pagination {
            /deep/ button {
              width: 42px;
              height: 42px;
              border-radius: 50%;
              border: 1px solid #eee;
              color: #666;
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
                border: 1px solid #eee;
                border-radius: 50%;
                padding: 0;
                line-height: 42px;
                margin: 0 10px;
                font-size: 16px;
                color: #666;
                font-weight: 400;
                /deep/ &.active {
                  color: #000;
                  background-color: #ffc300;
                  border-color: #eee;
                }
              }
            }
          }
        }
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

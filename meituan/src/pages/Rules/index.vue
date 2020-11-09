<template>
  <!-- 美团规则中心 -->
  <div>
    <!-- 规则首页 -->
    <div>
      <!-- 头部 -->
      <div class="header">
        <div class="headContent">
          <h1 @click="$router.push('/')">美团规则中心</h1>
          <ul class="headerRight">
            <li @click="changeNav(0)" :class="{active:navNum === 0}">
              <a href="javascript:;">首页</a>
            </li>
            <li @click="changeNav(1)" :class="{active:navNum === 1}">
              <router-link to="/catalogue">规则目录</router-link>
            </li>
            <li @click="changeNav(2)" :class="{active:navNum === 2}">
              <a href="javascript:;">规则评议院</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 内容区 -->
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
            <div class="title">规则目录</div>
            <div class="rulesSection">
              <div class="rulesBox">
                <div class="title">平台基础规则</div>
                <ul>
                  <li>
                    <a href="javascript:;">美团用户服务协议</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团评价规则(总则)</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团用户诚信公约</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团网络订餐食品安全管理办法</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团侵权投诉须知</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团只是产权声明</a>
                  </li>
                  <li>
                    <a href="javascript:;">价格说明</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团评价规则细则</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团商户评价诚信管理办法</a>
                  </li>
                </ul>
              </div>
              <div class="rulesBox">
                <div class="title">大众点评平台规则</div>
                <ul>
                  <li>
                    <a href="javascript:;">大众点评基础规则</a>
                  </li>
                  <li>
                    <a href="javascript:;">大众点评商户规则</a>
                  </li>
                  <li>
                    <a href="javascript:;">大众点评运营规则</a>
                  </li>
                </ul>
              </div>
              <div class="rulesBox">
                <div class="title">业务规则</div>
                <ul>
                  <li>
                    <a href="javascript:;">美团外卖</a>
                  </li>
                  <li>
                    <a href="javascript:;">团购业务</a>
                  </li>
                  <li>
                    <a href="javascript:;">小象生鲜</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团买菜</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团打车 </a>
                  </li>
                  <li>
                    <a href="javascript:;">美团机票/火车票 </a>
                  </li>
                  <li>
                    <a href="javascript:;">美团旅行 </a>
                  </li>
                  <li>
                    <a href="javascript:;">美团单车 </a>
                  </li>
                  <li>
                    <a href="javascript:;">美团民宿 </a>
                  </li>
                  <li>
                    <a href="javascript:;">金融服务 </a>
                  </li>
                </ul>
              </div>
              <div class="rulesBox">
                <div class="title">消费者权益保障</div>
                <ul>
                  <li>
                    <a href="javascript:;">消费者权益保障</a>
                  </li>
                </ul>
              </div>
              <div class="rulesBox">
                <div class="title">普法专栏</div>
                <ul>
                  <li>
                    <a href="javascript:;">法规解读</a>
                  </li>
                  <li>
                    <a href="javascript:;">政策解读</a>
                  </li>
                </ul>
              </div>
              <div class="rulesBox">
                <div class="title">隐私政策</div>
                <ul>
                  <li>
                    <a href="javascript:;">美团隐私政策</a>
                  </li>
                  <li>
                    <a href="javascript:;">美团金融隐私政策</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 右侧文本 -->
          <div class="rightContent">
            <div class="top">
              <div class="title">最新公告</div>
              <div>
                <ul>
                  <li>
                    <a href="javascript:;"
                      >关于《美团点评团购服务条款》调整公示通知</a
                    >
                  </li>
                  <li>
                    <a href="javascript:;"
                      >关于美团名称简化后的平台规则/服务协议调整通知</a
                    >
                  </li>
                  <li>
                    <a href="javascript:;"
                      >新增《 美团点评评价细则 》公示通知</a
                    >
                  </li>
                  <li>
                    <a href="javascript:;"
                      >关于《美团点评评价规则》修订公示通知</a
                    >
                  </li>
                </ul>
              </div>
              <div class="text">
                <a href="javascript:;">查看更多></a>
              </div>
            </div>
            <div class="bottom">
              <div class="title">规则评议</div>
              <div class="text">暂无内容</div>
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
  </div>
</template>

<script>
export default {
  name: "rules",
  data() {
    return {
      navNum: 0,
    };
  },
  methods: {
    changeNav(navNum) {
      this.navNum = navNum;
    },
  },
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
    line-height: 100px;
    margin: 0 auto;
    h1 {
      font-size: 28px;
      font-weight: bold;
      height: 100px;
      line-height: 100px;
      float: left;
      color: #333;
    }
    .headerRight {
      float: left;
      margin: 0 0 0 70px;
      display: inline-block;
      list-style-type: none;
      line-height: 100px;
      li {
        float: left;
        display: inline-block;
        height: 100px;
        font-size: 16px;
        font-weight: bold;
        margin-right: 40px;
        line-height: 100px;
        &.active{
          border-bottom: 4px solid #ffd000;
        }
        a {
          color: #333;
          &:hover {
            transition: color 0.2s ease;
            color: #ffbd00;
          }
        }
      }
    }
  }
}
// 内容区
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
    background-image: url("images/search.png");
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
  // 文本区域
  .content {
    width: 100%;
    margin-top: 10px;
    // 左侧文本区域
    .leftContent {
      float: left;
      width: 950px;
      background: white;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 20px 40px;
      margin-right: 10px;
      min-height: 410px;
      .title {
        font-size: 20px;
        height: 28px;
        line-height: 28px;
        font-weight: bold;
      }
      .rulesSection {
        margin-top: 15px;
        display: flex;
        .rulesBox {
          width: 165px;
          margin-right: 12px;
          .title {
            font-size: 14px;
            line-height: 20px;
          }
          li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 10px;
            line-height: 20px;
            font-size: 14px;
            a {
              color: #333;
              &:hover {
                transition: color 0.2s ease;
                color: #ffbd00;
              }
            }
          }
        }
      }
    }
    //右侧文本区域
    .rightContent {
      width: 230px;
      float: left;
      .top {
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        height: 225px;
        margin-bottom: 10px;
        background: white;
        padding: 20px;
        .title {
          font-size: 20px;
          line-height: 28px;
          font-weight: bold;
          color: #333;
        }
        a {
          &:hover {
            transition: color 0.2s ease;
            color: #ffbd00;
          }
        }
        .text {
          font-size: 12px;
          margin-top: 15px;
          line-height: 17px;
          a {
            color: #333;
            &:hover {
              transition: color 0.2s ease;
              color: #ffbd00;
            }
          }
        }
        li {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          margin-top: 10px;
          line-height: 20px;
          a {
            color: #333;
          }
        }
      }
      .bottom {
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        height: 175px;
        background: white;
        padding: 20px;
        .title {
          font-size: 20px;
          line-height: 28px;
          font-weight: bold;
          color: #333;
        }
        .text {
          margin-top: 15px;
          font-size: 14px;
          line-height: 20px;
          height: 60px;
          color: #666;
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

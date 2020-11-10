<template>
  <div class="footer">
    <!--    底部扩展列表-->
    <div class="footerList clearfix">
      <div class="column">
        <dl>
          <dt>用户帮助</dt>
          <dd>申请退款</dd>
          <dd>查看美团券密码</dd>
          <dd>常见问题</dd>
          <dd>用户协议</dd>
          <dd>隐私政策</dd>
          <dd>反诈骗公告</dd>
          <dd>消费者权益保障</dd>
        </dl>
        <dl>
          <dt>美团服务</dt>
          <dd>美团外卖</dd>
          <dd>美团酒店</dd>
          <dd>猫眼电影</dd>
          <dd>美团配送</dd>
          <dd>美团云</dd>
          <dd>大众点评</dd>
          <dd>美团民俗</dd>
          <dd>无人配送</dd>
        </dl>
      </div>
      <div class="column">
        <dl>
          <dt>商家合作</dt>
          <dd>美团餐饮商户中心</dd>
          <dd>美团商家入驻(非外卖)</dd>
          <dd>美团外卖开店申请</dd>
          <dd>美团收银官网</dd>
          <dd>外卖配送加盟申请</dd>
          <dd>美团餐饮学院</dd>
          <dd>酒店商家入驻</dd>
          <dd>境内度假商家入驻</dd>
          <dd>综合商家入驻</dd>
          <dd>美团民俗房东商家入驻</dd>
          <dd>商家开票申请</dd>
          <dd>美团智能收银机</dd>
          <dd>美团餐饮开放平台</dd>
          <dd>美团收单</dd>
          <dd>免费使用美团排队</dd>
          <dd>快驴进货商家合作</dd>
          <dd>美团闪购商家入驻</dd>
        </dl>
      </div>
      <div class="column">
        <dl>
          <dt>代理商加盟</dt>
          <dd>美团外卖代理商招募</dd>
          <dd>到店餐饮代理商招募</dd>
          <dd>非餐饮代理商招募</dd>
          <dd>美团联盟</dd>
          <dd>美团收银招募线上分销商</dd>
          <dd>美团5S服务商招募</dd>
          <dd>美团收单渠道代理商招募</dd>
        </dl>
        <dl>
          <dt>美团规则</dt>
          <dd>规则中心</dd>
          <dd>规则目录</dd>
          <dd>规则评议院</dd>
        </dl>
      </div>
      <div class="column">
        <dl>
          <dt>关注美团</dt>
          <dd>美团新浪微博</dd>
        </dl>
        <dl>
          <dt>公司信息</dt>
          <dd>关于我们</dd>
          <dd>投资者关系</dd>
          <dd>加入我们</dd>
          <dd>商户诚信公约及管理办法</dd>
          <dd>保险经济资质</dd>
        </dl>
        <dl>
          <dt>廉政举报</dt>
          <dd>廉政举报平台</dd>
        </dl>
        <dl>
          <dt>知识产权</dt>
          <dd>知识产权维权平台</dd>
        </dl>
      </div>
      <div class="column">
        <dl>
          <dt>消费者服务热线</dt>
          <dd>外卖消费者：10109777</dd>
          <dd>猫眼消费者：10105335</dd>
          <dd>其他消费者：10107888</dd>
        </dl>
        <dl>
          <dt>商家服务热线</dt>
          <dd>外卖&餐饮商家：10105557</dd>
          <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商城：10100107</dd>
        </dl>
        <dl>
          <dt>投诉举报专区</dt>
          <dd>违法和不良信息举报电话：4006018900</dd>
          <dd>举报邮箱：tousujubao@meituan.com</dd>
          <dd>网上有害信息举报</dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;">商家自助入驻美团入口</a>
          </dt>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;">供应商注册入口</a>
          </dt>
        </dl>
      </div>
    </div>
    <!--    底部备案等信息-->
    <div class="footerOtherInfo clearfix">
      <div class="footerLeftInfo">
        <p>
          ©美团网团购 meituan.com
          <a href="javascript:;" class="firstP">京ICP证070791号</a>
          <a href="javascript:;">京ICP备10211739号</a>
        </p>
        <p>
          <a href="javascript:;">广播电视节目制作经营许可证（京）字第03889号</a>
        </p>
        <p>
          <a href="javascript:;">食品经营许可证</a>
          <a href="javascript:;">互联网药品信息服务资格证</a>
        </p>
        <p>
          <a href="javascript:;">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
        </p>
      </div>
      <div class="footerRightInfo">
        <div class="clearfix">
          <a class="beian" href="javascript:;">
            <img src="../../assets/gongan.png" alt="公安" />
            <span>京公网安备 11000002002052号</span>
          </a>
        </div>
        <div class="otherWebsite">
          <div class="clearfix">
            <img src="../../assets/pliace.png" alt="电子营业执照" />
            <span>北京三快科技有限公司</span>
          </div>
          <img src="../../assets/beian.png" alt="备案" />
          <img src="../../assets/believewebsite.png" alt="可信网站" />
          <img src="../../assets/12315.png" alt="12315" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="less" scoped>
@import url('../../assets/less/config.less');
/*清除浮动*/
.clearfix::after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.footer {
  width: 1190px;
  margin: 0 auto;
  .footerList {
    width: @w100;
    border-top: 1px solid @bdc01;
    border-bottom: 1px solid @bdc01;
    box-sizing: border-box;
    padding: 40px 45px;
    .column {
      float: left;
      width: @w20;
      dl {
        padding-bottom: 20px;
        color: @c02;
        dt {
          font-size: @f02;
          font-weight: 500;
          color: @c05;
          padding-bottom: 5px;
          a {
            color: @c02;
            &:hover {
              color: @b04;
            }
          }
        }
        dd {
          font-size: @f01;
          line-height: @lh04;
          cursor: pointer;
          &:hover {
            color: @b04;
          }
        }
      }
    }
  }
  .footerOtherInfo {
    padding: 15px 0 30px 20px;
    color: @c01;
    font-size: @f01;
    .footerLeftInfo {
      float: left;
      p {
        line-height: @lh02;
        a {
          color: @c01;
          margin-right: 20px;
          &:hover {
            color: @b04;
          }
          &.firstP {
            margin-left: 20px;
          }
        }
      }
    }
    .footerRightInfo {
      float: right;
      .beian {
        float: right;
        color: @c01;
        padding-bottom: 8px;
        img {
          width: 15px;
          height: 15px;
          vertical-align: middle;
        }
        &:hover {
          color: @b04;
        }
      }
      .otherWebsite {
        div {
          display: inline-block;
          cursor: pointer;
          img {
            width: 38px;
            height: 38px;
            float: left;
          }
          span {
            line-height: @lh03;
            float: left;
            margin: 0 5px;
          }
          &:hover {
            color: @b04;
          }
        }
        & > img {
          margin: 0 2px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

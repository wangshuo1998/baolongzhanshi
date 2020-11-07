<template>
  <div class="footer">
    <p class="friendly-links">
      关于猫眼:
      <a href="##">关于我们</a>
      <span></span>
      <a href="##">管理团队</a>
      <span></span>
      <a href="##" class="bian">投资者关系</a>
      友情链接:
      <a href="##">美团网</a>
      <span></span>
      <a href="##">格瓦拉</a>
      <span></span>
      <a href="##">美团下载</a>
      <span></span>
      <a href="##">欢喜首映</a>
    </p>
    <p class="friendly-links">
      商务合作邮箱：v@maoyan.com
      客服电话：10105335
      违法和不良信息举报电话：4006018900
    </p>
    <p class="friendly-links">
      用户投诉邮箱：tousujubao@meituan.com 
      舞弊线索举报邮箱：wubijubao@maoyan.com
    </p>
    <p class="friendly-links credentials">
      <a href="##">中华人民共和国增值电信业务经营许可证 京B2-20190350</a>
      <span></span>
      <a href="##">营业性演出许可证 京演（机构）（2019）4094号</a>
    </p>
    <p class="friendly-links credentials">
      <a href="##">广播电视节目制作经营许可证 （京）字第08478号 </a>
      <span></span>
      <a href="##">网络文化经营许可证 京网文（2019）3837-369号</a>
    </p>
    <p class="friendly-links credentials">
      <a href="##">猫眼用户服务协议</a>
      <span></span>
      <a href="##">猫眼平台交易规则总则</a>
      <span></span>
      <a href="##">隐私政策</a>
    </p>
    <p class="friendly-links credentials">
      <a href="##">京公网安备 11010102003232号</a>
      <span></span>
      <a href="##">京ICP备16022489号</a>
    </p>
    <p class="friendly-links">北京猫眼文化传媒有限公司</p>
    <p class="friendly-links">©2020 猫眼电影 maoyan.com</p>
    <div class="certificate">
      <a href="##">
        <img src="@/assets/xiaohuImages/wangluo.png" alt="">
      </a>
      <a href="##">
        <img src="@/assets/xiaohuImages/dianzi.png" alt="">
      </a>
      <a href="##">
        <img src="@/assets/xiaohuImages/weifa.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'maoyanFooter',
}
</script>

<style lang="less" scoped>
.footer{
  width: 100%;
  height: 374px;
  background-color: #262426;
  padding: 56px 0;
  margin: 0 auto;
}
.footer p{
  text-align: center;
  font-size: 14px;
  height: 22px;
  line-height: 22px;
  color: #ccc;
}
.friendly-links a{
  color: #ef4238;
}
.friendly-links .bian{
  margin-right: 20px;
}
.friendly-links a:hover{
  text-decoration: underline;
}
.friendly-links span{
  border-left: 1px solid #ccc;
  margin: 0 7px;
  height: 12px;
  display: inline-block;
}
.footer .credentials a{
  color: #ccc!important;
}
.certificate{
  margin-top: 20px;
  text-align: center;
}
.certificate a{
  margin-right: 15px;
}
</style>

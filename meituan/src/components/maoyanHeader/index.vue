<template>
  <div class="header">
    <div class="header-inner">
      <!-- 猫眼电影logo -->
      <h1>
        <a href="javascript:;" class="logo">
          <img src="@/assets/xiaohuImages/maoyan.png" alt="" />
        </a>
      </h1>
      <!-- 城市选择 -->
      <div class="city-container">
        <div class="city-selected">
          <div class="city-name">
            北京
            <span class="iconfont iconcaretdown"></span>
          </div>
        </div>
      </div>
      <!-- 导航区 -->
      <div class="nav">
        <ul class="bavbar">
          <li class="first">
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">电影</a>
          </li>
          <li>
            <a href="javascript:;">影院</a>
          </li>
          <li>
            <a href="javascript:;">演出</a>
          </li>
          <li>
            <a href="javascript:;">榜单</a>
          </li>
          <li>
            <a href="javascript:;">热点</a>
          </li>
          <li>
            <a href="javascript:;">商城</a>
          </li>
        </ul>
      </div>
      <!-- app下载区 -->
      <div class="app-download">
        <a href="javascript:;" target="_blank">
          <span class="iconfont iconshouji"></span>
          <span>APP下载</span>
          <span class="iconfont iconcaretdown"></span>
        </a>
      </div>
      <!-- 头部搜索区 -->
      <form action="" class="" target="_blank">
        <input type="search" maxlength="32" class="search" />
        <input type="submit" class="submit" value />
      </form>
      <!-- 头部登录区 -->
      <div class="user-info">
        <div class="user-login">
          <img src="@/assets/xiaohuImages/denglu.png" />
          <span class="iconfont iconcaretdown"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "maoyanHeader",
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d8d8d8;
  height: 81px;
}
.header .header-inner {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
}
// 猫眼电影logo
.header .logo {
  float: left;
  width: 133px;
  height: 80px;
  background-size: contain;
}
.header .logo img {
  padding: 20px 0;
}
// 城市选择区
.city-container {
  position: relative;
  float: left;
  margin: 0 8px;
  height: 100%;
}
.city-container .city-selected{
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
}
.city-container .city-selected .city-name{
  display: inline-block;
  margin-top: 32px;
  color: #333;
}
.city-container .city-selected .city-name .iconcaretdown{
  margin-left: 2px;

}
// 导航区
.header .nav{
  display: inline-block;
  overflow: hidden;

}
</style>

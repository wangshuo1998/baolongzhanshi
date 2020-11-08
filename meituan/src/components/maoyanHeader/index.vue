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
        <ul class="navbar">
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
        <a href="javascript:;">
          <span class="iconfont iconshouji"></span>
          <span>APP下载</span>
          <span class="iconfont iconcaretdown"></span>
        </a>
      </div>
      <!-- 头部搜索区 -->
      <form action="" class="" target="_blank">
        <input type="search" maxlength="32" class="search" placeholder="找影视剧,影人，影院"/>
        <!-- <input type="submit" class="iconfont iconfangdajing" value /> -->
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
  position: relative;
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
  // position: relative;
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
.header .header-inner .nav{
  width: 490px;
  display: inline-block;
}
.header .navbar{
  overflow: hidden;
  width: 490px;
}
.header li{
  float: left;
  width: 70px;
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  text-align: center;
  list-style: none;
}
.header .navbar a{
  color: #333;
}
.header .navbar a:hover{
  color: #ef4238;
}
.header .first{
  background-color: #ef4238;
}
.header .navbar .first a{
  color: #fff;
}
// 登录区
.header .header-inner .user-info{
  position: absolute;
  width: 78px;
  height: 80px;
  top: 10px;
  left: 1122px;

}
.header .user-info .user-login{
  width: 56px;
  height: 100%;
}
.header .user-info .user-login img{
  margin-top: 14px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.header .user-info .user-login .iconcaretdown{
  position: absolute;
  top: 30px;
  margin-left: 5px;
}
// 搜索区
.header-inner form{
  position: absolute;
  top: 20px;
  left: 870px;

}
.header-inner .search{
  border-radius: 30px;
  color: #333;
  overflow: hidden;
  background-color: #faf8fa;
  font-size: 14px;
  border: 1px solid #ccc;
  height: 40px;
  width: 220px;
  text-align: center;
}
// app下载区
.header .header-inner .app-download{
  float: right;
  margin-right: 355px;
  margin-top: 30px;
}
.header .header-inner .app-download a{
  color: #000;
}

</style>

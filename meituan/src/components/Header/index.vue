<template>
<!--  头部-->
  <div class="header">
<!--    头部顶端的导航条-->
    <div class="headerBar">
      <div class="leftHeaderBar">

      </div>
      <div class="rightHeaderBar"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>
  .header{
      width: 100%;
      height: 75px;
      background: pink;
      .headerBar{
          width: 1190px;
          height: 75px;
          margin: 0 auto;
          background: skyblue;
          .leftHeaderBar{
              width: 300px;
              height: 75px;
              float: left;
              background: red;
          }
          .rightHeaderBar{
              width: 300px;
              height: 75px;
              float: right;
              background: yellow;
          }
      }
  }
</style>

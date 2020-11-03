<template>
  <div class="detailTopNavContainer">
    <div class="breadcrumbs">
      <span>
        <a href="javascript:;">北京美团</a>
      </span>
      <span>
        <a href="javascript:;">北京美食</a>
      </span>
      <span>
        <a href="javascript:;">北京美食</a>
      </span>
      <span>
        <a href="javascript:;">北京美食</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTopNav',
}
</script>

<style lang="less" scoped>
// 面包屑导航
.detailTopNavContainer {
  .breadcrumbs {
    font-size: 12px;
    color: #222;
    line-height: 17px;
    padding: 19px 0;
    a {
      text-decoration: none;
      cursor: pointer;
      color: #222;
    }
    span ::after {
      content: '>';
      padding: 0 3px;
    }
    span:last-child ::after {
      content: '';
    }
  }
}
</style>

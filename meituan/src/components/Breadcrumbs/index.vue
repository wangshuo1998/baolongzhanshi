<template>
  <div class="detailTopNavContainer">
    <div class="breadcrumbs">
      <span v-for="(item, index) in breadcrumbsData.info" :key="index">
        <a href="javascript:;">{{ breadcrumbsData.city + item }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTopNav',
  props: {
    breadcrumbsData: {
      type: Object,
      default: {
        city: '北京',
        info: ['美团'],
      },
    },
  },
}
</script>

<style lang="less" scoped>
@import url('../../assets/less/config.less');
// 面包屑导航
.detailTopNavContainer {
  .breadcrumbs {
    font-size: @f01;
    color: @c04;
    line-height: 17px;
    padding: 19px 0;
    a {
      text-decoration: none;
      cursor: pointer;
      color: @c04;
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

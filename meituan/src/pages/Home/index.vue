<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>
    <!-- 首页 -->
    <router-view></router-view>
    <!-- 底部组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: '',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="less" scoped></style>

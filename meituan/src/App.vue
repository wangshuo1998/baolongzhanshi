<template>
  <div id="app">
    <Homestay></Homestay>
    <!-- <Login></Login> -->
    <!-- <Register></Register> -->
  </div>
</template>

<script>
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Homestay from '@/pages/Homestay'
  export default {
  name: "App",
  components:{
    Login,
    Register,
    Homestay
  }
};
</script>

<style scoped>

</style>
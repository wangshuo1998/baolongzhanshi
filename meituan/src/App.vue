<template>
  <div id="app">
    <!-- <Login></Login> -->
    <Register></Register>
  </div>
</template>

<script>
import Login from '@/pages/Login'
import Register from '@/pages/Register'
  export default {
  name: "App",
  components:{
    Login,
    Register
  }
};
</script>

<style scoped>

</style>
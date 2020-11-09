<template>
  <div class="map">
    <amap :zoom="15" :center="position">
      <amap-marker :position="position" :label="label" draggable />
    </amap>
  </div>
</template>

<script>
export default {
  name: 'Map',
  //  position: [116.363641, 39.96737],
  props: ['position', 'label'],
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>

<style lang="less" scoped>
.map {
  width: 300px;
  height: 300px;
}
</style>

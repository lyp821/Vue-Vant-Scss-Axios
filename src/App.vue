<template>
  <div id="app">
    <router-view />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'

export default {
  components: {
    Tabbar,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #191f30;
  font-size: 14px;
}
</style>

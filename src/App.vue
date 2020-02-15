<template>
  <div id="app">
    <!-- <nav-bar></nav-bar> -->
    <router-view/>
  </div>
</template>
<script>
// import NavBar from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    // NavBar
  }
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>

<template>
  <div id="app">
    <nav-bar v-if="isHome"></nav-bar>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    NavBar
  },
  data () {
    return {
      isHome: true
    }
  },
  watch: {
    $route (to) {
      this.isHome = to.name === 'wireframes' ? !this.isHome : this.isHome
    }
  },
  beforeMount () {
    const routerName = this.$router.currentRoute.name
    this.isHome = (routerName === 'wireframes') ? !this.isHome : this.isHome
  
  }
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>

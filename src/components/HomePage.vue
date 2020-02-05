<template>
  <div class="main-container">
    <!-- <header-component /> -->
    <resource-list />
    <footer-component />
  </div>
</template>

<script>
import ResourceList from '@/components/ResourceList'
// import HeaderComponent from '@/components/home/HeaderComponent'
import FooterComponent from '@/components/home/FooterComponent'
import { Action } from '@/store/resource/types'
export default {
  name: 'home-component',
  beforeCreate () {
    this.$store.dispatch(`resource/${Action.GET_RESOURCES}`)
  },
  components: { ResourceList, FooterComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<template>
  <div class="main-container">
    <div class="main-container-mask"></div>
    <resource-list />
    <!-- <footer-component /> -->
  </div>
</template>

<script>
import ResourceList from '@/components/ResourceList'
// import FooterComponent from '@/components/home/FooterComponent'
import { Action, Mutation } from '@/store/resource/types'
import { mapGetters } from 'vuex'
export default {
  name: 'home-component',
  mounted () {
    // only call db if not in state
    if (this.resources.length < 1) { this.$store.dispatch(`resource/${Action.GET_RESOURCES}`)}
    //reset tag filter when returning to home page
    this.$store.commit(`resource/${Mutation.SET_FILTER_BY_TAG}`, '')
  },
  components: { ResourceList },
  computed: {
    ...mapGetters('resource',['resources', 'filterResourcesBy']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

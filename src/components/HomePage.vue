<template>
  <div class="main-container">
    {{ theFontSize }}
    <ul>
      <li @click="changeFontSize()">change font</li>
    </ul>
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
  data () {
    return {
      fontSize: null,
      theFontSize : this.fontSize + 'px'
    }
  },
  components: { ResourceList },
  computed: {
    ...mapGetters('resource',['resources', 'filterResourcesBy'])
  },
  methods: {
    changeFontSize () {
      let element = document.querySelector('.resource-list-item')
      console.log('this.fontSize', this.fontSize)
      console.log('element.style.fontSize', element.style.fontSize)
      console.log('element.style', element.style)
      console.log('element', element)
      if (!this.fontSize) {
        element.style.fontSize = 12
        this.fontSize = 12
      } else {
        console.log('ELSE this.fontSize', this.fontSize)
        console.log('ELSE element.style.fontSize', element.style.fontSize)
        this.fontSize = this.fontSize * 2
        element.style.fontSize = this.fontSize
        console.log('this.fontSize', this.fontSize)
        console.log('ELSE AFTER element.style.fontSize', element.style.fontSize)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

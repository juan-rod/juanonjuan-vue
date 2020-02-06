<template>
  <div class="home">
    <i class="fa fa-filter" :class="{ 'active' : isFilterActive }" @click="togglePanelNav"></i>
    <transition name="v--slide">
      <filter-panel v-show="panelNav"/>
    </transition>
    <transition name="v--home-slide">
      <home-page ref="mainContainer"/>
    </transition>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import FilterPanel from '@/components/Filter.vue'

export default {
  name: 'home',
  components: {
    HomePage,
    FilterPanel
  },
  data () {
    return {
      panelNav: false,
      isFilterActive: false,
      transitionHome: false
    }
  },
  methods: {
    removeMarginLeftMobile () {
      // console.log('this.panelNav', this.panelNav)
      let isPanelOpen = this.panelNav ? '0px' : '2.5em'
      // console.log('isPanelOpen', isPanelOpen)
      document.querySelector('.main-container').style.marginLeft = isPanelOpen
    },
    togglePanelNav () {
      this.panelNav = !this.panelNav
      // this.removeMarginLeftMobile()
      this.isFilterActive = !this.isFilterActive
    }
  }
}
</script>


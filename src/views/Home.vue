<template>
  <div class="home">
    <i class="fa fa-filter" :class="{ 'active' : isFilterActive }" @click="togglePanelNav"></i>
    <transition name="v--slide">
      <filter-panel v-show="panelNav"/>
    </transition>
    <transition name="v--home-slide">
      <home-page/>
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
      isFilterActive: false
    }
  },
  methods: {
    togglePanelNav () {
      this.panelNav = !this.panelNav
      this.isFilterActive = !this.isFilterActive
    }
  }
}
</script>


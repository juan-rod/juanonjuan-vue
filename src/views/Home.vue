<template>
  <div class="home">
    <filter-panel />
    <HomeBody />
    <!-- <footer>
      <p><a href="https://www.linkedin.com/in/juanrod1/" target="_blank">Juan Rodriguez</a> is a software developer at L7 Informatics and instructor at Austin Coding Academy.</p>
      <p>2020</p>
    </footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBody from '@/components/HomeBody.vue'
import FilterPanel from '@/components/FilterPanel.vue'

export default {
  name: 'home',
  components: {
    HomeBody,
    FilterPanel
  }
}
</script>

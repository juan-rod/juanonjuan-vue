<template>
  <div class="filter-panel">
    <!-- <search-component /> -->
    <tags-component />
  </div>
</template>

<script>
import TagsComponent from '@/components/filter/TagsComponent'
// import SearchComponent from '@/components/filter/SearchComponent'
export default {
  name: 'filter-panel',
  components: {
    TagsComponent
    // SearchComponent
  },
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>
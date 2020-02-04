<template>
  <div class="filter-panel">
    <i class="fa fa-filter"></i>
    <div class="filter-panel-nav">
      <input type="text" alt="searchbar" placeholder="SEARCH">
      <tags-component />
    </div>
  </div>
</template>

<script>
import TagsComponent from '@/components/TagsComponent'
export default {
  name: 'filter-panel',
  components: {
    TagsComponent
  }
}
</script>

<style>

</style>
<template>
  <section class="resource-list">
    <ul>
      <li class="resource-list-item" v-for="(item, index) in filteredResources" :key="index">
        <a :href="item.link" target="_blank">{{item.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'resource-list',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('resource',['resources', 'filterResourcesBy']),
    filteredResources () {
      return this.isFiltered && this.selectedTag !== 'all' ? this.filterBySelectedTag() : this.resources
    },
    isFiltered () {
      return (this.filterResourcesBy.tag || this.filterResourcesBy.search)
    },
    selectedTag () {
      return this.filterResourcesBy.tag
    },
    searchedBy () {
      return this.filterResourcesBy.search
    }
  },
  methods: {
    filterBySelectedTag () {
      return this.resources.filter(resource => resource.tags.includes(this.selectedTag))
    }
  }
}
</script>

<style>

</style>
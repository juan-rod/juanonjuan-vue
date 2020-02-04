<template>
  <section class="resource-list">
    <!-- <h2 v-if="filterResourcesBy"></h2> -->
    <ul>
      <li class="resource-list-item" v-for="(item, index) in filteredResources" :key="index">
        {{index}}
        <a :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'resource-list',
  //  props: {
  //   filterBy: {
  //     type: Array
  //   }
  // },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('resource',['resources', 'filterResourcesBy']),
    filteredResources () {
      const resourceTagSelected = this.filterResourcesBy.length > 0
      console.log('resourceTagSelected', resourceTagSelected)
      let newnew = resourceTagSelected
        ? this.filterResourcesBySelectedTags
        : this.resources
        console.log('newnew', newnew)
        console.log('newnew[filterResourcesBy]', newnew[this.filterResourcesBy])
      return newnew
    },
    filterResourcesBySelectedTags () {
      return this.groupBy(this.filterResourcesBy, this.resources)
    }
  },
  methods: {
    groupBy (filterBy, resourceList) {
      const filterTags = (acc, resource) => {
        let tagVal = filterBy.filter(filterItem => resource.tags.includes(filterItem))
        acc[tagVal] = (acc[tagVal] || []).concat(resource)
        return acc
      }
      let what = resourceList.reduce(filterTags, [])
      console.log('what', what)
      return what
    }
  }
}
</script>

<style>

</style>
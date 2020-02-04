<template>
  <section class="resource-list">
    <!-- <h2 v-if="filterResourcesBy"></h2> -->
    <ul>
      <li class="resource-list-item" v-for="(item, index) in filteredResources" :key="index">
        {{item}}
        <div v-for="(stuff, index) in item" :key="index" style="background:red;">
          {{index}} {{stuff}}
        </div>
        {{index}}
        <a :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { Mutation } from '@/store/resource/types'
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
  watch: {
    filteredResources(newVal, oldVal) {
      console.log('WATCH newVal', newVal)
      console.log('WATCH oldVal', oldVal)
      if (newVal !== oldVal) {
        console.log('this.$store.state', this.$store.state.resources.filteredResources)
        // this.filteredResources = newVal
      }
    }
  },
  mounted () {
    this.$store.commit(`resource/${Mutation.SET_FILTERED_RESOURCES}`)
  },
  computed: {
    ...mapGetters('resource',['resources', 'filterResourcesBy', 'filteredResources']),
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
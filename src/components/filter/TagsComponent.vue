<template>
  <div class="tags-container">
    <div class="tag-item" v-for="(tag, index) in tagItems" @click="filterByTag(tag)" :key="index">
      <p>{{ tag }}</p>
      <!-- <span> {{getTagSize(tag)}}</span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Mutation, Action } from '@/store/resource/types'
export default {
  name: 'tags-component',
  data () {
    return {
    }
  },
  mounted () {
    // this.setFilterResources
  },
  computed: {
    ...mapGetters('resource',['resourceTags', 'filteredResources']),
    tagItems () {
      return Array.from(new Set(this.resourceTags))
    },
    tagSize () {
      return this.resourceTags.reduce(this.groupByAsc, [])
    }
  },
  methods: {
    setFilterResources () {
      this.$store.commit(`resource/${Mutation.SET_FILTERED_RESOURCES}`)
    },
    getTagSize (tag) {
      return this.tagSize[tag].length
    },
    groupByAsc (acc, tag) {
      acc[tag] = (acc[tag] || []).concat(tag)
      return acc
    },
    async filterByTag (tag) {
      console.log('filterByTag', tag)
      this.$store.commit(`resource/${Mutation.SET_FILTER_BY_TAG}`, tag)
      await this.$store.dispatch(`resource/${Action.GET_FILTERED_RESOURCES}`)
    }
  }
}
</script>

<style>

</style>
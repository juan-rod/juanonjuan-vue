<template>
  <div class="tags-container">
    <div class="tag-item" @click="filterByTag('all')">
      <p>all</p>
    </div>
    <div class="tag-item" v-for="(tag, index) in tagItems" @click="filterByTag(tag)" :key="index">
      <p>{{ tag }}</p>
      <!-- <span> {{getTagSize(tag)}}</span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Mutation } from '@/store/resource/types'
export default {
  name: 'tags-component',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('resource',['resourceTags']),
    tagItems () {
      return Array.from(new Set(this.resourceTags))
    },
    tagSize () {
      return this.resourceTags.reduce(this.groupByAsc, [])
    }
  },
  methods: {
    getTagSize (tag) {
      return this.tagSize[tag].length
    },
    groupByAsc (acc, tag) {
      acc[tag] = (acc[tag] || []).concat(tag)
      return acc
    },
    async filterByTag (tag) {
      this.$store.commit(`resource/${Mutation.SET_FILTER_BY_TAG}`, tag)
    }
  }
}
</script>

<style>

</style>
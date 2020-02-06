<template>
  <div class="tags-container">
    <div class="tag-item"
      v-for="(tag, index) in tagItems"
      @click="filterByTag(tag, index)"
      :class="{ 'tag-selected': index === selected }"
      :key="index"
    >
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
      selected: null
    }
  },
  computed: {
    ...mapGetters('resource',['resourceTags']),
    tagItems () {
      return Array.from(new Set(['all', ...this.resourceTags]))
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
    async filterByTag (tag, index) {
      this.selected = index
      this.$store.commit(`resource/${Mutation.SET_FILTER_BY_TAG}`, tag)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
<template>
  <section class="resource-list">
    <transition-group name="company" tag="ul" class="content__list" appear>
      <li class="resource-list-item company" v-for="(item) in filteredResources" :key="item.id">
        <a :href="item.link" target="_blank">{{item.title}}</a>
      </li>
    </transition-group>
  </section>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
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

<style lang="scss">
.company {
  &-move { transition: all 600ms ease-in-out 50ms }
  &-enter-active { transition: all 800ms ease-out }

  &-leave-active {
    transition: all 350ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to { opacity: 0 }
  &-enter { transform: scale(0.9) }
}
</style>
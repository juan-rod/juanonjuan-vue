<template>
  <div class="tags-container">
    <div class="tag-item" v-for="(tag, index) in tagItems" :key="index">
      {{tag}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'tags-component',
  computed: {
    ...mapGetters('resource',['resourceTags']),
    tagItems () {
      return Array.from(new Set(this.resourceTags))
    }

  }
}
</script>

<style>

</style>
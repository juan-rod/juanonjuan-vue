<template>
  <div class="admin-remove">
    <resource-list class="admin-resource">
      <template #resourceCheckBox> </template>
    </resource-list>
  </div>
</template>

<script>
import ResourceList from '@/components/ResourceList'
import { Action } from '@/store/resource/types'
import { mapGetters } from 'vuex'
export default {
  name: 'admin-remove',
  components: { ResourceList },
  mounted () {
    // only call db if not in state
    if (this.resources.length < 1) { this.$store.dispatch(`resource/${Action.GET_RESOURCES}`)}
  },
  computed: {
    ...mapGetters('resource',['resources'])
  }
}
</script>

<style>

</style>
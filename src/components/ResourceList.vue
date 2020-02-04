<template>
  <div class="resource-list">
    hey from resource-list
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'resource-list',
  data () {
    return {}
  },
  methods:{},
  computed: {
    ...mapGetters('resource',['resources']),
  }
}
</script>

<style>

</style>
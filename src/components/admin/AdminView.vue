<template>
  <div class="admin-view">
    <component :is="adminComponent"></component>
  </div>
</template>

<script>
// import { Action } from '@/store/resource/types'
import AddResource from '@/components/admin/AdminAdd'
import EditResource from '@/components/admin/AdminEdit'
import RemoveResource from '@/components/admin/AdminRemove'
export default {
  name: 'admin-view',
  components: { AddResource, EditResource, RemoveResource },
  props: ['adminComponent'],
  watch: {
    adminComponent (newVal) {
      console.log('adminComponent newVal', newVal)
    }
  },
  methods: {
    async createResource () {
        // this.$store.dispatch(`resource/${Action.CREATE_NEW_RESOURCE}`, this.newResource)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
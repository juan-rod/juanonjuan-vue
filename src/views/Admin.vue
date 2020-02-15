<template>
  <div class="admin">
    <div class="admin-sidebar">
      <card-component v-for="item in crud" :key="item" @click.native="selectTask(item)"> 
        <template #headerTitle> {{ item }} </template>
        <template #headerBody> {{ item }} resources </template>
      </card-component>
    </div>
    <admin-view :adminComponent="selectedComponent" />
  </div>
</template>

<script>
import AdminView from '@/components/admin/AdminView'
import CardComponent from '@/components/CardComponent'
import { mapState } from 'vuex'
export default {
  components: { AdminView, CardComponent },
  data () {
    return {
      loggedIn: false,
      crud : ['add', 'edit', 'remove'],
      selectedComponent: 'add-resource'
    }
  },
  computed : {
    ...mapState('user',{
      error: state => state.error
    })
  },
  methods: {
    selectTask (task) {
      this.selectedComponent = `${task}-resource`
    }
  }
}
</script>

<style>

</style>
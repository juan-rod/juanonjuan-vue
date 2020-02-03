import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import resource from './resource'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    resource
  }
})
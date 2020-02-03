import { Mutation } from "../types";

export default {
  [Mutation.LOGIN](state, payload) {
    state.user = payload.email
    state.userId = payload.uid
  },
  [Mutation.LOGOUT](state) {
    state.user = ''
    state.userId = ''
  },
  [Mutation.SET_ERROR](state, payload) {
    state.error = payload
  },
  [Mutation.SET_LOADING](state, payload) {
    state.loading = payload
  },
  [Mutation.CLEAR_ERROR](state) {
    state.error = ''
  }
}
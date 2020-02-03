import { Auth } from '@/firebase/auth'
import { Action, Mutation } from '../types'
import router from '@/router'

function setUser (commit) {
  Auth.onAuthStateChanged(authUser => {
    commit(`${[Mutation.SET_LOADING]}`, false)
    commit(`${[Mutation.LOGIN]}`, authUser);
    router.push('/admin')
  })
}
function errorHandler (commit, error) {
  commit(`${[Mutation.SET_LOADING]}`, false)
  commit(`${[Mutation.SET_ERROR]}`, error)
}
function setupLogin (commit) {
  commit(`${[Mutation.SET_LOADING]}`, true)
  commit(`${[Mutation.CLEAR_ERROR]}`)
}

export default {
  [Action.LOGIN] ({commit}, payload) {
    setupLogin(commit)
    Auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        setUser(commit)
      })
      .catch(error => errorHandler(commit, error))
  },
  [Action.REGISTER] ({commit}, payload) {
    setupLogin(commit)
    Auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => setUser(commit))
      .catch(error => errorHandler(commit, error))
  },
  [Action.LOGOUT] ({commit}) {
    Auth.signOut().then(() => setUser(commit))
  }
}
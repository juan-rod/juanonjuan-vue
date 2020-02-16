import { ResourcesCollection } from '@/firebase/db'
import { Auth } from '@/firebase/auth'
import { Action, Mutation } from '../types'
// import * as Filters from '@/utils/Filters'

function setResourceTags (commit, doc) {
  commit(`${[Mutation.SET_RESOURCE_TAGS]}`, doc.tags)
}

export default {
  async [Action.CREATE_NEW_RESOURCE] ({commit, dispatch}, resourceItem) {
    console.log('resourceItem', resourceItem)
    const currentUser = Auth.currentUser.uid
    console.log('currentUser', currentUser)
    let resource = await ResourcesCollection.add({
      ...resourceItem,
      createdOn: new Date(),
      createdBy: currentUser
    })
    commit(`${[Mutation.SET_NEW_RESOURCE]}`, resource)
    dispatch(`${Action.GET_RESOURCES}`)
  },
  async [Action.GET_RESOURCES] ({ commit }) {
    ResourcesCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), id: doc.id }
          commit(`${[Mutation.SET_NEW_RESOURCE]}`, data)
          setResourceTags(commit, data)
        })
      })
  },
  async [Action.GET_TAGS] ({ commit }) {
    ResourcesCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), id: doc.id }
          setResourceTags(commit, data)
        })
      })
  },
  async [Action.DELETE_RESOURCE] (resourceItem) {
    console.log('DELETE_RESOURCE resourceItem', resourceItem)
  //   db.collection("cities").doc("DC").delete().then(function() {
  //     console.log("Document successfully deleted!");
  // }).catch(function(error) {
  //     console.error("Error removing document: ", error);
  // })
    ResourcesCollection
      .doc(resourceItem.id)
      .delete()
      .then(()=> {
        console.log('succcess deleted resourceItem')
      })
      .catch((error) => {
        console.log('error in deleting', error)
      })
  }
}
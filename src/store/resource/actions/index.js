import { ResourcesCollection } from '@/firebase/db'
import { Auth } from '@/firebase/auth'
import { Action, Mutation } from '../types'

function getMenuItems (commit, doc) {
  ResourcesCollection.doc(doc.id).collection('menu_items')
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => {
        commit(`${[Mutation.SET_MENU_ITEMS]}`, data.data())
      })
    })
}
function setResourceTags (commit, getters, doc) {
  // let rTags = getters.resourceTags
  // rTags = Array.from(new Set(rTags))

  // let flattened = tags.reduce(flattenTagsList, [])
  // console.log('flattened', flattened)
  commit(`${[Mutation.SET_RESOURCE_TAGS]}`, doc.tags)
}

export default {
  async [Action.CREATE_NEW_RESOURCE] ({commit, dispatch}, resourceItem) {
    const currentUser = Auth.currentUser.uid
    let resource = await ResourcesCollection.add({
      ...resourceItem,
      createdOn: new Date(),
      createdBy: currentUser
    })
    commit(`${[Mutation.SET_NEW_RESOURCE]}`, resource)
    dispatch(`${Action.GET_RESOURCES}`)
  },
  async [Action.GET_RESOURCES] ({commit, getters}) {
    ResourcesCollection
      .get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        commit(`${[Mutation.SET_NEW_RESOURCE]}`, doc.data())
        setResourceTags (commit, getters, doc.data())
      })
    })
  },
  async [Action.GET_RESOURCES_BY] ({commit}, resourceBy) {
    ResourcesCollection.where("tags", "==", resourceBy)
      .get()
      .then((querySnapshot) => {
        // commit(`${[Mutation.RESET_MENU_ITEMS]}`)
        querySnapshot.forEach((doc) => getMenuItems(commit, doc))
      })
      .catch((error) => console.log("Error getting documents: ", error))
  },
}
import { FirebaseInit } from './app'
// import 'firebase/firestore'

const database = FirebaseInit.firestore()


export const DB = database
export const ResourcesCollection = DB.collection('resources')
// export const MenusCollection = DB.collection('menus')
// console.log('MenuCollection', MenuCollection)
// console.log('MenusCollection', MenusCollection)
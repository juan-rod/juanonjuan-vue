import { FirebaseInit } from './app'
import 'firebase/firestore'

const database = FirebaseInit.firestore()


export const DB = database
// export const MenuCollection = DB.collection('menu')
// export const MenusCollection = DB.collection('menus')
// console.log('MenuCollection', MenuCollection)
// console.log('MenusCollection', MenusCollection)
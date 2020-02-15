import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import { Auth } from '@/firebase/auth'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   const requireAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requireAuth) {
//       if (Auth.currentUser) {
//           next()
//           return
//       }
//       next('/login')
//   } else {
//       next()
//   }
// })
export default router

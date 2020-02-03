import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/Admin.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue')
  },
  {
    path: '/terminal-tips',
    name: 'terminal-tips',
    component: () => import(/* webpackChunkName: "terminal-tips" */ '@/views/TerminalTips.vue')
  }
]

export default routes
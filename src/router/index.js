import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../components/Main/MainLayout.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
    children: [
      { path: '', component: () => import('../views/HomeView') },
      { path: '/about', component: () => import('../views/AboutView') },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

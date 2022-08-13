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
      { name: 'AboutPage', path: '/about', component: () => import('../views/AboutView') },
      { name: 'UserPage', path: '/user', component: () => import('../views/UserView') },
      { name: 'AlbumPage', path: '/album', component: () => import('../views/AlbumView') },
      { name: 'PhotoPage', path: '/photo', component: () => import('../views/PhotosView') },
      { name: 'UserAlbumPage', path: '/user/:userId/albums', component: () => import('../views/AlbumView') }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

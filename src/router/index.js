import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KokonaraView from '../views/KokonaraView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/solvide-kokonara',
    name: 'solvide-kokonara',
    component: KokonaraView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

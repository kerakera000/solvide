import { createRouter, createWebHashHistory } from 'vue-router'
import NewSolvideView from '../views/NewSolvideView.vue'
import KokonaraView from '../views/KokonaraView.vue'

const routes = [
  {
    path: '/',
    name: 'solvide',
    component: NewSolvideView
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

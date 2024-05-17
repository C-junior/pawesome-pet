import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdoptionCenter from '../views/AdoptionCenter.vue'
import PetHouse from '../views/PetHouse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/adoption-center',
      name: 'adoption-center',
      component: AdoptionCenter
    },
    {
      path: '/pet-house',
      name: 'pet-house',
      component: PetHouse
    }
  ]
})

export default router

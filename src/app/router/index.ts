import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/addition',
      name: 'addition',
      component: () => import('@/pages/AdditionPage.vue'),
    }
  ],
})

export default router

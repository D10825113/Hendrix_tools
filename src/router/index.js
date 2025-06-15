import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首頁'
      }
    },
    {
      path: '/cpuid-parser',
      name: 'cpuid-parser',
      component: () => import('../views/CpuidParserView.vue'),
      meta: {
        title: 'CPUID 解析器'
      }
    },
  ],
})

export default router

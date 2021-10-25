import { store } from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Home,
    meta: { requiresLogout: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: About,
    meta: { requiresLogin: true }
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.isLogined && to.matched.some(record => record.meta.requiresLogin))
    next('/');
  else if (store.getters.isLogined && to.matched.some(record => record.meta.requiresLogout))
    next('/dashboard')
  else
    next();
});

export default router

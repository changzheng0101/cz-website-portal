import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage/LandingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogPage/BlogPage.vue'),
    },
    {
      path: '/blog/:id',
      name: 'blogDetail',
      component: () => import('../views/BlogDetailPage/BlogDetailPage.vue'),
    },
    {
      path: '/column',
      name: 'column',
      component: () => import('../views/BlogPage/BlogList.vue'),
    },
    {
      path: '/self-introduction',
      name: 'self-introduction',
      component: () => import('../views/BlogPage/BlogList.vue'),
    },
    {
      path: '/403',
      name: 'no-permission',
      component: () => import('../views/NoPermissionPage/NoPermissionPage.vue'),
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFoundPage/NotFoundPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
});

export default router;

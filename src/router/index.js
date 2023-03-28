import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
      path: '/column',
      name: 'column',
      component: () => import('../views/BlogPage/BlogList.vue'),
    },
    {
      path: '/self-introduction',
      name: 'self-introduction',
      component: () => import('../views/BlogPage/BlogList.vue'),
    },
  ],
});

export default router;

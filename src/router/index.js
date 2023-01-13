import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const PageNotFoundView = () => import('../views/PageNotFoundView.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'hello',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/:notFound(.*)*',
            name: 'PageNotFound',
            component: PageNotFoundView,
          }
    ]
});

export default router;
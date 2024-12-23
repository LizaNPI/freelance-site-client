import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ProfileView from '../views/ProfileView.vue';
import AuthView from '../views/AuthView.vue';
import ServiceView from '../views/ServiceView.vue';
import ServiceListView from '../views/ServiceListView.vue';

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/projects', component: ProjectsView, name: 'Projects' },
  {
    path: '/profile',
    component: ProfileView,
    name: 'Profile',
    props: true, // Разрешаем передачу props
    meta: { requiresAuth: true },
  },
  { path: '/auth', component: AuthView, name: 'Auth' },
  { path: '/service/:id', component: ServiceView, name: 'Service', props: true },
  { path: '/serviceList', component: ServiceListView, name: 'Services' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const userAuthorized = localStorage.getItem('userAuthorized') == 'true';
    if (!userAuthorized) {
      alert('Вы должны авторизоваться, чтобы получить доступ к этой странице.');
      return next({ name: 'Auth' });
    }
  }
  next();
});

export default router;

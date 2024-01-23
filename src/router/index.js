import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';

const routes = [

  {

    path: '/',
    name: 'DashboardView',
    component: DashboardView,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
});


export default router;


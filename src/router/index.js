import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '../views/DashboardView.vue';

import ControleDeProdutosView from '../views/ControleDeProdutosView.vue';
const routes = [
  {
    path: '/',
    name: 'ControleDeProdutosView',
    component: ControleDeProdutosView,
    title: 'Produtos',
    meta: {
      requiredAuth: true
    }
  },


  {
    path: '/DashboardView',
    name: 'DashboardView',
    component: DashboardView,
  },


  

 
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
});

export default router;


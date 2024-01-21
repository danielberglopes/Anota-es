import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import ControleDeClientesView from '../views/ControleDeClientesView.vue';
import ControleDeProdutosView from '../views/ControleDeProdutosView.vue';
const routes = [

  {

    path: '/Login',
    name: 'LoginView',
    component: LoginView,
    title: 'LoginView',
    meta: {
      requiredAuth: false
    }
  },

  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView,
  },


  {
    path: '/Controle-de-Clientes',
    name: 'ControleDeClientesView',
    component: ControleDeClientesView,
    title: 'Clientes',
    meta: {
      requiredAuth: true
    }
  },

  {
    path: '/Controle-de-Produtos',
    name: 'ControleDeProdutosView',
    component: ControleDeProdutosView,
    title: 'Produtos',
    meta: {
      requiredAuth: true
    }
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
});

export default router;


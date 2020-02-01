import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/auth',
    component: () => import('../components/RouteModal.vue'),
    name: 'cont',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../components/Login.vue'),
        meta: {
          showModal: true
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../components/Register.vue'),
        meta: {
          showModal: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

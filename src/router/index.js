import Vue from 'vue';
import VueRouter from 'vue-router';
import Player from '../components/Player.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Player',
      component: Player,
   },
   {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
   },
];

const router = new VueRouter({
   routes,
});

export default router;

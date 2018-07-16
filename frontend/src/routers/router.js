import Vue from 'vue';
import Router from 'vue-router';

import CartPage from '../views/CartPage.vue';

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/cart',
      name: 'cartPage',
      component: CartPage
    }
  ]
})

export default router;
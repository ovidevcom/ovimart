import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import { sync } from 'vuex-router-sync';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import { sync } from 'vuex-router-sync';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faShoppingCart)
library.add(faMapMarkerAlt)
library.add(faTruck)
library.add(faCreditCard)
library.add(faClipboardCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
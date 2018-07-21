import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        cartState: {
            products: [],
            totalPrice: 0   
       }
    },
    getters: {
        getTotalPrice: state => {
            return state.cartState.totalPrice;
        }
    },
    mutations: {
        ADD_ITEM_TO_CART(state, item) {
            state.cartState.products.unshift(item);
            state.cartState.totalPrice += item.price;
        },
        REMOVE_ITEM_FROM_CART(state, id) {
            //How to improve the performance ????
            let index = state.cartState.products.map(each => each.id).indexOf(id);
            state.cartState.totalPrice -= (state.cartState.products[index].price * state.cartState.products[index].quantity);
            state.cartState.products.splice(index, 1);
        },
        INCREASE_ITEM_QUANTITY(state, id) {
            let index = state.cartState.products.map(each => each.id).indexOf(id);
            state.cartState.products[index].quantity++;
            state.cartState.totalPrice += state.cartState.products[index].price;
        },
        DECREASE_ITEM_QUANTITY(state, id) {
            let index = state.cartState.products.map(each => each.id).indexOf(id);
            state.cartState.products[index].quantity--;
            state.cartState.totalPrice -= state.cartState.products[index].price;
        }
    },
    actions: {
        ADD_ITEM_TO_CART({commit}, item) {
            commit('ADD_ITEM_TO_CART', item);
        },
        REMOVE_ITEM_FROM_CART({commit}, id) {
            commit('REMOVE_ITEM_FROM_CART', id);
        },
        INCREASE_ITEM_QUANTITY({commit}, id) {
            commit('INCREASE_ITEM_QUANTITY', id);
        },
        DECREASE_ITEM_QUANTITY({commit}, id) {
            commit('DECREASE_ITEM_QUANTITY', id);
        },
    }
})
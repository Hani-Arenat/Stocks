import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        funds : 10000,

        bmw_price : 100,
        google_price : 200,
        yahoo_price : 300,
        apple_price : 500,

        bmw_q : 0,
        google_q : 0,
        yahoo_q : 0,
        apple_q : 0
    }
});
import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import product from './modules/product'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      cart,
      product,
    },
  })
}

export default createStore

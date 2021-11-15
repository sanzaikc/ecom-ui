import Vue from 'vue'
import Vuex from 'vuex'

import blog from './modules/blog'
import cart from './modules/cart'
import product from './modules/product'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      cart,
      product,
    },
  })
}

export default createStore

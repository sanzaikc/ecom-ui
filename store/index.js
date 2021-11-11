import Vue from 'vue'
import Vuex from 'vuex'

import product from './modules/product'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      product,
    },
  })
}

export default createStore

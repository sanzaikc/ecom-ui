const state = {
  allProducts: [],
}

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.allProducts = products
  },
}

const actions = {
  setProducts: ({ commit }, products) => {
    commit('SET_PRODUCTS', products)
  },
}

const getters = {
  allProducts: (state) => state.allProducts,
  productList: (state) => state.allProducts.slice(0, 4),
  recentProducts: (state) => state.allProducts.slice(0, 3),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

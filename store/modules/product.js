const state = {
  allProducts: [
    { id: 1, name: 'Product 1', image: 'product-1', price: '100.00' },
    { id: 2, name: 'Product 2', image: 'product-2', price: '200.00' },
    { id: 3, name: 'Product 3', image: 'product-3', price: '340.00' },
    { id: 4, name: 'Product 4', image: 'product-4', price: '409.00' },
    { id: 5, name: 'Product 5', image: 'product-5', price: '560.00' },
    { id: 6, name: 'Product 6', image: 'product-1', price: '700.00' },
    { id: 7, name: 'Product 7', image: 'product-2', price: '150.00' },
    { id: 8, name: 'Product 8', image: 'product-3', price: '399.00' },
    { id: 9, name: 'Product 9', image: 'product-4', price: '660.00' },
  ],
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

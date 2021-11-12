const state = {
  cartItems: [],
}

const mutations = {
  ADD_CART_ITEM: (state, cartItem) => {
    state.cartItems = [...state.cartItem, cartItem]
  },
  REMOVE_CART_ITEM: (state, cartItem) => {
    state.cartItems = state.cartItem.filter((ci) => ci.id !== cartItem.id)
  },
}

const actions = {
  addToCart: ({ commit }, cartItem) => {
    commit('ADD_CART_ITEM', cartItem)
  },
  removeCartItem: ({ commit }, cartItem) => {
    commit('REMOVE_CART_ITEM', cartItem)
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

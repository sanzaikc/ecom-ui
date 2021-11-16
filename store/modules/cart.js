const state = {
  cartItems: [],
}

const mutations = {
  ADD_CART_ITEM: (state, cartItem) => {
    state.cartItems = [...state.cartItems, cartItem]
  },
  REMOVE_CART_ITEM: (state, cartItem) => {
    state.cartItems = state.cartItems.filter((ci) => ci.id !== cartItem.id)
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

const getters = {
  cartItemCount: (state) => state.cartItems.length,
  cartSubtotal: (state) =>
    state.cartItems.reduce((acc, cartItem) => {
      return (acc += cartItem.price * cartItem.quantity)
    }, 0),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

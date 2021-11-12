<template>
  <div class="relative group">
    <div class="flex space-x-6 items-center">
      <cart-count :cartCount="cartItems.length" />
      <cart-subtotal :subtotal="subtotal" />
    </div>
    <cart-list-container>
      <cart-item-list :item-list="cartItems" />
      <div v-if="cartItems.length">
        <div class="flex justify-between py-2 font-semibold">
          <div>Subtotal</div>
          <div>${{ subtotal.toFixed(2) }}</div>
        </div>
        <div class="flex justify-between space-x-4">
          <div
            class="
              w-1/2
              text-center
              px-4
              py-2
              bg-red-600
              text-white
              cursor-pointer
            "
          >
            <nuxt-link to="/cart">View Cart</nuxt-link>
          </div>
          <div
            class="
              w-1/2
              text-center
              px-4
              py-2
              bg-black
              text-white
              cursor-pointer
            "
          >
            Checkout
          </div>
        </div>
      </div>
      <div v-else>No Cart Item</div>
    </cart-list-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CartCount from '@/components/cart-icon/CartCount.vue'
import CartItemList from '@/components/cart-icon/CartItemList.vue'
import CartSubtotal from './CartSubtotal.vue'
import CartListContainer from './CartListContainer.vue'

export default {
  name: 'CartStatus',

  components: {
    CartCount,
    CartItemList,
    CartListContainer,
  },

  computed: {
    ...mapState({
      cartItems: (state) => state.cart.cartItems,
    }),
    ...mapGetters({
      subtotal: 'cart/cartSubtotal',
    }),
  },
}
</script>

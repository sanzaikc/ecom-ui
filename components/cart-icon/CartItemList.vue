<template>
  <div class="divide-y">
    <cart-item v-for="item in cartItems" :key="item.id" :cart-item="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CartItem from '@/components/cart-icon/CartItem.vue'

export default {
  name: 'CartItemList',

  components: { CartItem },

  computed: {
    ...mapState({
      cartItems: (state) => state.cart.cartItems,
    }),
  },
}
</script>

<style></style>

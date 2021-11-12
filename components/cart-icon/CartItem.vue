<template>
  <div class="flex items-center justify-between py-4">
    <div class="bg-gray-200 h-20 w-20">
      <img
        :src="require(`~/assets/products/${cartItem.image}.jpg`)"
        alt="Cart Item"
        class="h-full w-full"
      />
    </div>
    <div class="text-center">
      <div class="font-semibold text-base">{{ cartItem.name }}</div>
      <div class="text-gray-400">
        <span> {{ cartItem.quantity }} </span>
        <i class="bx bx-x bx-xs"></i>
        <span>${{ cartItem.price }} </span>
      </div>
    </div>
    <i
      class="bx bx-x bx-sm text-red-600 cursor-pointer"
      @click="removeFromCart"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'CartItem',

  props: {
    cartItem: {
      type: 'Object',
      required: true,
    },
  },

  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeCartItem', this.cartItem)
    },
  },
}
</script>

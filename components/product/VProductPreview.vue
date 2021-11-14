<template>
  <div class="mb-2 group">
    <div class="relative h-72 w-full bg-red-200">
      <img
        :src="require(`~/assets/products/${product.image}.jpg`)"
        class="h-full w-full object-cover"
      />
      <!-- Card actions  -->
      <div
        class="
          absolute
          top-1
          right-1
          flex flex-col
          space-y-1
          transform
          translate-x-8
          group-hover:translate-x-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-200
          ease-in
        "
      >
        <div
          class="
            h-12
            w-12
            bg-white
            rounded-sm
            grid
            place-content-center
            cursor-pointer
            hover:text-red-600
            transition
            duration-200
            ease-in
          "
        >
          <i class="bx bx-heart text-xl"></i>
        </div>
        <div
          class="
            h-12
            w-12
            bg-white
            rounded-sm
            grid
            place-content-center
            cursor-pointer
            hover:text-red-600
            transition
            duration-200
            ease-in
          "
        >
          <i class="bx bx-refresh text-xl"></i>
        </div>
        <div
          class="
            h-12
            w-12
            bg-white
            rounded-sm
            grid
            place-content-center
            cursor-pointer
            hover:text-red-600
            transition
            duration-200
            ease-in
          "
        >
          <i class="bx bx-search text-xl"></i>
        </div>
      </div>
    </div>
    <nuxt-link
      :to="`/shop/${product.name}`"
      class="
        pt-1.5
        hover:text-red-600
        transition
        duration-300
        ease-in
        cursor cursor-pointer
      "
    >
      {{ product.name }}
    </nuxt-link>
    <div class="relative">
      <div
        class="
          font-medium
          group-hover:opacity-0
          transition
          duration-300
          ease-in
        "
      >
        ${{ product.price }}
      </div>
      <div
        class="
          absolute
          top-0
          left-0
          font-medium
          transform
          -translate-x-6
          opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition
          duration-200
          ease-in
        "
      >
        <div
          class="
            cursor-pointer
            hover:text-red-600
            transition
            duration-100
            ease-in
          "
        >
          <div v-if="!alreadyInCart" @click="addToCart">Add to cart</div>
          <div v-else>View Cart</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VerticalProductCard',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState({
      cartItems: (state) => state.cart.cartItems,
    }),

    alreadyInCart() {
      return !!this.cartItems.find((ci) => ci.name === this.product.name)
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', { ...this.product, quantity: 1 })
    },
  },
}
</script>

<style></style>

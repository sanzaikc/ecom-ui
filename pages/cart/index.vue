<template>
  <div class="default-container">
    <!-- Cart Items  -->
    <div v-if="cartItems.length">
      <table class="w-full border-collapse mb-2">
        <thead class="bg-gray-100">
          <th class="w-10 font-medium">&nbsp;</th>
          <th class="w-40 font-medium">&nbsp;</th>
          <th class="text-left py-4 font-medium">Product</th>
          <th class="text-left py-4 font-medium">Price</th>
          <th class="text-left py-4 font-medium">Quantity</th>
          <th class="text-left py-4 font-medium">Subtotal</th>
        </thead>
        <tbody>
          <tr v-for="product in cartItems" :key="product.name" class="">
            <td class="border border-gray-200 text-red-600 p-3 cursor-pointer">
              <i class="bx bx-x bx-sm" @click="removeFromCart(product)"></i>
            </td>
            <td class="border border-gray-200 py-8 hidden md:block">
              <img
                :src="require(`~/assets/products/${product.image}.jpg`)"
                alt="Product Image"
                class="h-24 w-24 object-contain md:mx-auto"
              />
            </td>
            <td
              data-title="Product"
              class="border border-gray-200 p-4 md:w-1/3"
            >
              {{ product.name }}
            </td>
            <td data-title="Price" class="border border-gray-200 p-4">
              {{ product.price }}
            </td>
            <td data-title="Quantity" class="border border-gray-200 p-4">
              <icon-box>
                <input
                  v-model="product.quantity"
                  type="number"
                  class="w-10 h-12"
                />
              </icon-box>
            </td>
            <td data-title="Subtotal" class="border border-gray-200 p-4">
              $ {{ product.quantity * product.price }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="border border-gray-200 flex justify-end px-2 py-4 mb-12">
        <!-- <div class="inline-block p-3 bg-black text-white">Update cart</div> -->
        <app-button inverse on-hover small>Update Cart</app-button>
      </div>
    </div>
    <empty-entity v-else> Your cart is currently empty </empty-entity>

    <!-- Total  -->
    <div v-if="cartItems.length" class="flex md:justify-end">
      <div class="w-full md:w-1/2">
        <div class="text-xl font-medium mb-6">Cart Total</div>
        <table class="w-full border-collapse">
          <tbody class="border">
            <tr class="border-b border-gray-200">
              <th class="hidden md:block text-left font-medium p-3">
                Subtotal
              </th>
              <td data-title="Subtotal" class="p-3">$ {{ cartSubtotal }}</td>
            </tr>
            <tr class="">
              <th class="hidden md:block text-left font-medium p-3">Total</th>
              <td data-title="Total" class="p-3 font-semibold">
                $ {{ cartSubtotal }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppButton from '~/components/base/AppButton.vue'
import EmptyEntity from '~/components/EmptyEntity.vue'

export default {
  name: 'Cart',

  components: { EmptyEntity, AppButton },

  scrollToTop: true,

  computed: {
    ...mapState({
      cartItems: (state) => state.cart.cartItems,
    }),
    ...mapGetters({
      cartSubtotal: 'cart/cartSubtotal',
    }),
  },

  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeCartItem', product)
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.025);
  }

  /* Hide table headers */
  thead th {
    display: none;
  }

  td {
    display: block;
    text-align: right;
  }

  td:before {
    content: attr(data-title);
    font-weight: 500;
    float: left;
  }
}
</style>

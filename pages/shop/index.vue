<template>
  <div>
    <!-- Product Sorting  -->
    <div
      class="border border-gray-200 flex justify-between items-center mb-14 p-4"
    >
      <div class="border-l-8 border-red-400 bg-gray-200 w-1/3 h-12"></div>
      <div class="bg-gray-300 w-1/3 h-12"></div>
    </div>
    <!-- Product List  -->
    <div v-if="products.length" class="grid md:grid-cols-3 gap-8 md:gap-5">
      <v-product-card
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
    <empty-entity v-else>No Products found</empty-entity>
  </div>
</template>

<script>
import VProductCard from '@/components/product/VProductCard.vue'

export default {
  name: 'Shop',

  components: {
    VProductCard,
  },

  computed: {
    products() {
      return this.$store.getters['product/allProducts']
    },
  },
}
</script>

<style></style>

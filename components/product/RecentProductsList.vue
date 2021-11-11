<template>
  <div>
    <list-container>
      <template #heading>Products</template>
      <h-product-card
        v-for="product in products"
        :key="product.name"
        :product="product"
        class="py-5 last:pb-0"
      />
    </list-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HProductCard from '@/components/product/HProductCard.vue'

export default {
  name: 'RecentProductList',

  components: { HProductCard },

  computed: {
    products() {
      return this.$store.getters['product/productList']
    },
  },
}
</script>

<style></style>

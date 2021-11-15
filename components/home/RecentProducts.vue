<template>
  <div class="default-container mb-16">
    <section-header>
      <template #title>Fashion blog</template>
      <template #subtitle>Get Sale alerts on styles you love</template>
    </section-header>
    <div
      v-if="recentProducts.length"
      class="grid md:grid-cols-4 gap-8 md:gap-5"
    >
      <v-product-preview
        v-for="product in recentProducts"
        :key="product.name"
        :product="product"
        lg
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import VProductPreview from '../product/VProductPreview.vue'
import SectionHeader from './SectionHeader.vue'

export default {
  name: 'RecentProducts',

  components: { VProductPreview, SectionHeader },

  computed: {
    ...mapGetters({
      recentProducts: 'product/recentProducts',
    }),
  },
}
</script>

<style></style>

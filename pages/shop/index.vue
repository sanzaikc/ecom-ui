<template>
  <with-product-aside>
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
  </with-product-aside>
</template>

<script>
import VProductCard from '@/components/product/VProductCard.vue'

export default {
  name: 'Shop',

  components: {
    VProductCard,
  },

  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          products: [
            { id: 1, name: 'Product 1', image: 'product-1', price: '100.00' },
            { id: 2, name: 'Product 2', image: 'product-2', price: '200.00' },
            { id: 3, name: 'Product 3', image: 'product-3', price: '340.00' },
            { id: 4, name: 'Product 4', image: 'product-4', price: '409.00' },
            { id: 5, name: 'Product 5', image: 'product-5', price: '560.00' },
            { id: 6, name: 'Product 6', image: 'product-1', price: '700.00' },
            { id: 7, name: 'Product 7', image: 'product-2', price: '150.00' },
            { id: 8, name: 'Product 8', image: 'product-3', price: '399.00' },
            { id: 9, name: 'Product 9', image: 'product-4', price: '660.00' },
          ],
        })
      }, 1500)
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        console.log(error)
      })
  },

  created() {
    this.$store.dispatch('product/setProducts', this.products)
  },
}
</script>

<style></style>

<template>
  <div class="default-container flex flex-col md:flex-row md:space-x-10">
    <!-- Product Content  -->
    <div class="w-full md:w-2/3 mb-12 md:mb-0">
      <nuxt-child />
    </div>
    <!-- Aside Content -->
    <div class="w-full md:w-1/3">
      <!-- Search Products  -->
      <div class="border border-gray-200 p-6 mb-10">
        <div class="border border-gray-200 h-12 flex justify-end">
          <div class="h-full w-12 bg-red-400"></div>
        </div>
      </div>
      <!-- Recent/Similar Products List  -->
      <recent-products-list class="mb-12" />
      <!-- Category List   -->
      <product-category-list />
    </div>
  </div>
</template>

<script>
import RecentProductsList from '@/components/product/RecentProductsList.vue'
import ProductCategoryList from '@/components/product/ProductCategoryList.vue'

export default {
  name: 'ShopI',

  components: {
    RecentProductsList,
    ProductCategoryList,
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

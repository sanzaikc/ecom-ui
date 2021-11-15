<template>
  <div>
    <hero-banner />
    <recent-products />
    <recent-blogs />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue'
import RecentBlogs from '~/components/home/RecentBlogs.vue'
import RecentProducts from '~/components/home/RecentProducts.vue'

export default {
  name: 'Home',

  components: {
    HeroBanner,
    RecentBlogs,
    RecentProducts,
  },
}
</script>

<style>
.default-container {
  @apply container mx-auto px-4 md:px-20;
}
</style>

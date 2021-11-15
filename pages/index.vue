<template>
  <div>
    <hero-banner />
    <featured-collection />
    <recent-products />
    <recent-blogs />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue'
import RecentBlogs from '~/components/home/RecentBlogs.vue'
import RecentProducts from '~/components/home/RecentProducts.vue'
import FeaturedCollection from '~/components/home/FeaturedCollection.vue'

export default {
  name: 'Home',

  components: {
    HeroBanner,
    FeaturedCollection,
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

<template>
  <div>
    <hero-banner />
    <recent-blogs />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue'
import RecentBlogs from '~/components/blog/RecentBlogs.vue'

export default {
  name: 'Home',

  components: {
    HeroBanner,
    RecentBlogs,
  },
}
</script>

<style>
.default-container {
  @apply container mx-auto px-4 md:px-20;
}
</style>

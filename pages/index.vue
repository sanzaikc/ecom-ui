<template>
  <div>
    <hero-banner />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue'

export default {
  name: 'Home',

  components: { HeroBanner },
}
</script>

<style>
.default-container {
  @apply container mx-auto px-4 md:px-20;
}
</style>

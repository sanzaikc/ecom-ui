<template>
  <div class="bg-gray-100">
    <div class="default-container py-16">
      <div class="flex justify-center items-center">
        <div class="text-center">
          <div class="text-3xl font-semibold mb-5">Shop</div>
          <div class="flex items-center text-sm uppercase">
            <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
            <span class="mx-2 text-2xl">/</span>
            <div class="font-semibold text-red-600">{{ currentRoute }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',

  computed: {
    currentRoute() {
      return this.$nuxt.$route.name
    },
  },
}
</script>

<style></style>

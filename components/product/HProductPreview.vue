<template>
  <div class="flex space-x-4 cursor-pointer">
    <div class="h-20 w-20 bg-gray-200">
      <img
        :src="require(`~/assets/products/${product.image}.jpg`)"
        alt="product.name"
        class="h-full w-full"
      />
    </div>
    <div>
      <div class="font-semibold uppercase">{{ product.name }}</div>
      <div class="text-gray-500">${{ product.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalProductCard',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>

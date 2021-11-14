<template>
  <div class="relative block">
    <i class="bx bx-cart bx-md"></i>
    <div
      class="
        absolute
        -top-1
        -right-2
        bg-red-500
        text-white text-sm
        rounded-full
        px-2
        py-0.5
      "
    >
      {{ cartCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartIcon',

  props: {
    cartCount: {
      type: [String, Number],
      default: 0,
    },
  },
}
</script>

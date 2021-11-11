<template>
  <div class="mb-2 group">
    <div class="relative h-72 w-full bg-red-200">
      <img
        :src="require(`~/assets/products/${product.image}.jpg`)"
        class="h-full w-full object-cover"
      />
      <div
        class="
          absolute
          top-1
          right-1
          flex flex-col
          space-y-1
          transform
          translate-x-8
          group-hover:translate-x-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-200
          ease-in
        "
      >
        <div
          class="
            h-12
            w-12
            bg-white
            rounded-sm
            grid
            place-content-center
            cursor-pointer
            hover:text-red-600
            transition
            duration-200
            ease-in
          "
        >
          <i class="bx bx-heart text-xl"></i>
        </div>
        <div
          class="
            h-12
            w-12
            bg-white
            rounded-sm
            grid
            place-content-center
            cursor-pointer
            hover:text-red-600
            transition
            duration-200
            ease-in
          "
        >
          <i class="bx bx-refresh text-xl"></i>
        </div>
        <div
          class="
            h-12
            w-12
            bg-white
            rounded-sm
            grid
            place-content-center
            cursor-pointer
            hover:text-red-600
            transition
            duration-200
            ease-in
          "
        >
          <i class="bx bx-search text-xl"></i>
        </div>
      </div>
    </div>
    <nuxt-link
      :to="`/shop/${product.name}`"
      class="
        pt-1.5
        hover:text-red-600
        transition
        duration-300
        ease-in
        cursor cursor-pointer
      "
    >
      {{ product.name }}
    </nuxt-link>
    <div class="relative">
      <div
        class="
          font-semibold
          group-hover:opacity-0
          transition
          duration-300
          ease-in
        "
      >
        ${{ product.price }}
      </div>
      <div
        class="
          absolute
          top-0
          left-0
          font-semibold
          transform
          -translate-x-6
          opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition
          duration-200
          ease-in
        "
      >
        <div
          class="
            cursor-pointer
            hover:text-red-600
            transition
            duration-100
            ease-in
          "
        >
          Add to cart
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalProductCard',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>

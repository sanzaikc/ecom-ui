<template>
  <div class="h-96 relative group overflow-hidden">
    <img
      :src="require(`~/assets/collections/${collection.image}.png`)"
      alt="Collection Image"
      class="
        h-full
        w-full
        object-cover
        transform
        origin-center
        group-hover:scale-105
        transition-transform
        duration-300
        ease-in
      "
    />
    <div class="absolute inset-0 bg-white opacity-20 group-hover:opacity-40" />
    <div class="absolute inset-0 p-8 flex flex-col justify-center">
      <div>
        <div class="mb-2">{{ collection.category }}</div>
        <div class="text-5xl font-semibold mb-6">{{ collection.name }}</div>
        <div
          class="
            inline-block
            uppercase
            border-b-2 border-current
            pb-1
            text-sm
            cursor-pointer
            hover:text-red-600
            transition-colors
            duration-200
            ease-in
          "
        >
          See Collection
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionPreview',

  props: {
    collection: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>

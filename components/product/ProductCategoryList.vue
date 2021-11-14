<template>
  <div>
    <list-container>
      <template #heading>Product Categories</template>
      <div
        v-for="n in 6"
        :key="n"
        class="
          py-5
          last:pb-0
          text-base
          font-medium
          tracking-wide
          hover:text-red-600
          transition
          duration-300
          ease-in
          cursor-pointer
        "
      >
        <div>Category - {{ n }}</div>
      </div>
    </list-container>
  </div>
</template>

<script>
export default {
  name: 'ProductCategoryList',
}
</script>

<style></style>

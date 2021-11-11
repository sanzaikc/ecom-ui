<template>
  <div
    class="
      inline-block
      bg-red-600
      text-white
      px-6
      md:px-8
      py-2
      md:py-3
      uppercase
      cursor-pointer
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<style></style>

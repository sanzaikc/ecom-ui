<template>
  <div class="text-center uppercase mb-10">
    <div class="text-gray-400 font-medium mb-2">
      <slot name="title" />
    </div>
    <div class="text-2xl font-semibold">
      <slot name="subtitle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
}
</script>

<style></style>

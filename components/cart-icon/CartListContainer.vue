<template>
  <div
    class="
      absolute
      px-6
      py-2
      pb-4
      max-h-96
      overflow-y-auto
      w-96
      right-0
      bg-white
      shadow-lg
      transform
      translate-y-8
      group-hover:translate-y-0
      opacity-0
      group-hover:opacity-100
      transition
      duration-200
      ease-in
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CartListContainer',
}
</script>

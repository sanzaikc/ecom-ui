<template>
  <div>
    <div class="group relative">
      <slot name="trigger" />
      <div
        class="
          absolute
          min-w-full
          bg-white
          rounded
          hidden
          group-hover:block
          transition
          duration-500
          ease-in
          z-10
        "
      >
        <slot name="dropdown-items" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
}
</script>

<style></style>

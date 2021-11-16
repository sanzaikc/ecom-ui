<template>
  <div>
    <div class="group relative">
      <div class="group-hover:text-red-600 transition duration-200 ease-in">
        <slot name="trigger" />
      </div>
      <div
        class="
          absolute
          bg-white
          transform
          translate-y-10
          group-hover:translate-y-0
          opacity-10
          group-hover:opacity-100
          invisible
          group-hover:visible
          transition
          duration-200
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

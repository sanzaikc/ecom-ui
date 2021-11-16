<template>
  <div
    class="
      lg:hidden
      box-border
      absolute
      inset-0
      bg-white
      z-10
      transform
      transition-transform
      duration-150
      ease-in
    "
    :class="[!openSidebar ? '-translate-x-full' : 'translate-x-0']"
  >
    <div class="p-2" @click="openSidebar = false">Close</div>
  </div>
</template>

<script>
export default {
  props: ['value'],

  data() {
    return {
      openSidebar: this.value,
    }
  },

  watch: {
    value: {
      handler() {
        this.openSidebar = true
      },
    },
  },
}
</script>

<style></style>

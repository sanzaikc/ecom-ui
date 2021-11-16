<template>
  <div
    class="
      inline-block
      text-white
      uppercase
      cursor-pointer
      transition-all
      duration-200
      ease-in
    "
    :class="wildClasses"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    inverse: {
      type: Boolean,
      default: false,
    },
    onHover: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    background() {
      return !this.inverse ? 'bg-red-500' : 'bg-black'
    },

    hover() {
      if (this.onHover) {
        return !this.inverse ? 'hover:bg-black' : 'hover:bg-red-500'
      }
      return ''
    },

    size() {
      return !this.small ? 'px-6 md:px-8 py-2  md:py-3' : 'px-4 py-2'
    },

    wildClasses() {
      return `${this.background} ${this.hover} ${this.size}`
    },
  },
}
</script>

<style></style>

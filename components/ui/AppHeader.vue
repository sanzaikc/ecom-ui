<template>
  <div class="default-container">
    <div
      class="
        flex flex-col
        md:flex-row md:justify-between md:items-center
        space-y-4
        md:space-y-0 md:px-2
        py-4
        md:py-7
      "
    >
      <app-logo />
      <search-bar />
      <div class="flex justify-center space-x-6">
        <div>
          <i class="bx bx-user bx-md"></i>
        </div>
        <div class="relative">
          <i class="bx bx-heart bx-md"></i>
          <div
            class="
              absolute
              top-0
              -right-2
              bg-red-600
              text-white text-sm
              rounded-full
              px-1.5
              py-.5
            "
          >
            1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/ui/AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
  },
}
</script>

<style></style>

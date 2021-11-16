<template>
  <div class="default-container">
    <div class="flex justify-between items-center py-4">
      <div class="text-red-600">
        <i class="bx bx-menu bx-md"></i>
      </div>
      <app-logo />
      <cart-count />
    </div>
  </div>
</template>

<script>
import CartCount from '../cart-icon/CartCount.vue'
import AppLogo from './AppLogo.vue'

export default {
  components: { AppLogo, CartCount },
}
</script>

<style></style>

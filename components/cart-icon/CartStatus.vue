<template>
  <div class="relative group">
    <div class="flex space-x-6 items-center">
      <cart-icon />
      <div class="text-sm font-semibold divide-y divide-gray-400">
        <div class="pb-0.5">My Cart</div>
        <div>$ 0.00</div>
      </div>
    </div>
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
      <cart-item-list />
      <div>
        <div class="flex justify-between py-2 font-semibold">
          <div>Subtotal</div>
          <div>$ 0.00</div>
        </div>
        <div class="flex justify-between space-x-4">
          <div
            class="
              w-1/2
              text-center
              px-4
              py-2
              bg-red-600
              text-white
              cursor-pointer
            "
          >
            View Cart
          </div>
          <div
            class="
              w-1/2
              text-center
              px-4
              py-2
              bg-black
              text-white
              cursor-pointer
            "
          >
            Checkout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from '@/components/cart-icon/CartIcon.vue'
import CartItemList from '@/components/cart-icon/CartItemList.vue'
export default {
  name: 'CartStatus',

  components: { CartIcon, CartItemList },
}
</script>

<style></style>

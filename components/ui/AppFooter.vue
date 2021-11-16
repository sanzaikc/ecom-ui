<template>
  <div class="bg-gray-100">
    <div class="default-container">
      <div class="py-8 md:py-16 flex flex-col md:flex-row border-b">
        <div class="w-full md:w-3/5 mb-8 md:mb-0">
          <app-logo />
          <p class="mt-8 footer-text pr-10">
            Zigcy Lite is a customizer based WooCommerce Theme built to create
            stunning e-commerce or online stores. This theme that comes up with
            deep WooCommerce integration introduces all the WooCommerce features
            in the most brilliant way possible.
          </p>
        </div>
        <div class="w-full md:w-1/5 mb-6 md:mb-0">
          <div class="footer-menu">Information</div>
          <ul>
            <nuxt-link to="/"><li class="footer-submenu">Home</li></nuxt-link>
            <nuxt-link to="/blog">
              <li class="footer-submenu">Blog</li>
            </nuxt-link>
            <nuxt-link to="/shop">
              <li class="footer-submenu">Shop</li>
            </nuxt-link>
            <nuxt-link to="/contact">
              <li class="footer-submenu">Contact Us</li>
            </nuxt-link>
          </ul>
        </div>
        <div class="w-full md:w-1/5 mb-6 md:mb-0">
          <div class="footer-menu">Extra</div>
          <ul>
            <li class="footer-submenu">Privacy Policy</li>
            <li class="footer-submenu">Shopping Guide</li>
            <li class="footer-submenu">Terms and Conditions</li>
            <li class="footer-submenu">Return Policy</li>
          </ul>
        </div>
        <div class="w-full md:w-1/5">
          <div class="footer-menu">My Account</div>
          <ul>
            <li class="footer-submenu">My Account</li>
            <li class="footer-submenu">WishList</li>
            <nuxt-link to="/cart">
              <li class="footer-submenu">Cart</li>
            </nuxt-link>
          </ul>
        </div>
      </div>
      <div class="py-6 footer-text">
        ©️ 2021 Softweb<span class="text-red-600">Developers</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/ui/AppLogo.vue'

export default {
  name: 'AppFooter',

  components: { AppLogo },
}
</script>

<style scoped>
.footer-text {
  @apply text-sm text-gray-500 tracking-wide;
}

.footer-menu {
  @apply text-base font-medium uppercase;
}

.footer-submenu {
  @apply text-sm text-gray-500 my-6 hover:text-red-600 cursor-pointer transition duration-200 ease-in;
}
</style>

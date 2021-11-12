<template>
  <div class="default-container mb-1">
    <div class="flex justify-between items-center px-2">
      <app-dropdown>
        <template #trigger>
          <div class="flex items-center space-x-2 cursor-pointer">
            <i class="bx bx-menu text-xl mt-0.5"></i>
            <div>Browse Categories</div>
          </div>
        </template>
        <template #dropdown-items>
          <ul>
            <li
              v-for="n in 5"
              :key="n"
              class="px-4 py-2 hover:text-red-600 cursor-pointer"
            >
              Item-{{ n }}
            </li>
          </ul>
        </template>
      </app-dropdown>
      <!-- Navmenus  -->
      <div class="flex space-x-10">
        <div
          class="flex items-center space-x-2"
          v-for="menu in navMenus"
          :key="menu.name"
        >
          <div class="relative group">
            <nuxt-link
              :to="menu.path"
              class="
                text-sm
                font-semibold
                uppercase
                group-hover:text-red-600
                transition
                duration-200
                ease-in
                flex
                items-center
                space-x-2
              "
            >
              <div>{{ menu.name }}</div>
              <i v-if="menu.subMenus" class="bx bx-chevron-down text-xl"></i>
            </nuxt-link>
            <div
              v-if="menu.subMenus"
              class="absolute left-0 w-48 mt-2 p-4 bg-red-200 opacity-0"
            >
              <div class="flex flex-col space-y-4">
                <nuxt-link
                  v-for="subMenu in menu.subMenus"
                  :key="subMenu.name"
                  :to="subMenu.path"
                >
                  {{ subMenu.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Cart  -->
      <cart-status />
    </div>
  </div>
</template>

<script>
import AppDropdown from '@/components/base/AppDropdown.vue'
import CartStatus from '@/components/cart-icon/CartStatus.vue'

export default {
  name: 'Navbar',

  components: {
    AppDropdown,
    CartStatus,
  },

  data() {
    AppDropdown
    return {
      navMenus: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/' },
        {
          name: 'My Account',
          path: '/',
          subMenus: [
            { name: 'Checkout', path: '' },
            { name: 'Cart', path: '' },
          ],
        },
        { name: 'Shop', path: '/shop' },
        {
          name: 'Contact Us',
          path: '/contact',
        },
      ],
    }
  },
}
</script>

<style></style>

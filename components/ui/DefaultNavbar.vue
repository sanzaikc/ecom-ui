<template>
  <div class="default-container mb-1">
    <div class="flex justify-between items-center px-2">
      <app-dropdown>
        <template #trigger>
          <div class="flex items-center space-x-2 cursor-pointer">
            <i class="bx bx-menu text-xl"></i>
            <div>Browse Categories</div>
          </div>
        </template>
        <template #dropdown-items>
          <ul class="px-6 py-2 divide-y-2 space-y-2 w-60">
            <li
              v-for="n in 5"
              :key="n"
              class="pt-4 pb-2 hover:text-red-600 cursor-pointer"
            >
              <div class="text-sm text-gray-500 hover:text-red-600">
                <span>
                  <i class="bx bx-chevron-right"></i>
                </span>
                Category-{{ n }}
              </div>
            </li>
          </ul>
        </template>
      </app-dropdown>
      <!-- Navmenus  -->
      <div class="flex space-x-10">
        <app-dropdown
          v-for="menu in navMenus"
          :key="menu.name"
          class="font-medium text-sm"
        >
          <template #trigger>
            <nuxt-link :to="menu.path">
              <div class="uppercase flex navlink">
                <span>{{ menu.name }}</span>
                <span v-show="menu.subMenus">
                  <i class="bx bx-chevron-down ml-1"> </i>
                </span>
              </div>
            </nuxt-link>
          </template>
          <template v-if="menu.subMenus" #dropdown-items>
            <div class="px-8">
              <nuxt-link
                v-for="subMenu in menu.subMenus"
                :key="subMenu.name"
                :to="subMenu.path"
              >
                <div class="py-3 hover:text-red-600 uppercase">
                  {{ subMenu.name }}
                </div>
              </nuxt-link>
            </div>
          </template>
        </app-dropdown>
      </div>
      <!-- Cart  -->
      <cart-info />
    </div>
  </div>
</template>

<script>
import AppDropdown from '@/components/base/AppDropdown.vue'
import CartInfo from '~/components/cart-icon/CartInfo.vue'

export default {
  name: 'Navbar',

  components: {
    AppDropdown,
    CartInfo,
  },

  data() {
    AppDropdown
    return {
      navMenus: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        {
          name: 'My Account',
          path: '/',
          subMenus: [
            { name: 'Checkout', path: '' },
            { name: 'Cart', path: '/cart' },
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

<style>
.navlink {
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0%;
    background-color: blue;
    transition: all 200ms ease-in;
  }

  &:hover {
    &::after {
      background-color: red;
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="h-screen">
    <social-media class="hidden md:block" />
    <app-header class="hidden md:block" />
    <default-navbar class="hidden md:block" />
    <small-navbar class="block md:hidden" />
    <bread-crumb v-show="!isHomepage" />
    <div :class="!isHomepage ? 'py-14' : 'pb-14'">
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import SocialMedia from '@/components/ui/SocialMedia.vue'
import AppHeader from '@/components/ui/AppHeader.vue'
import DefaultNavbar from '@/components/ui/DefaultNavbar.vue'
import SmallNavbar from '@/components/ui/SmallNavbar.vue'
import AppFooter from '@/components/ui/AppFooter.vue'
import BreadCrumb from '@/components/ui/BreadCrumb.vue'

export default {
  components: {
    SocialMedia,
    AppHeader,
    DefaultNavbar,
    SmallNavbar,
    BreadCrumb,
    AppFooter,
  },

  name: 'DefaultLayout',

  computed: {
    isHomepage() {
      return this.$nuxt.$route.name === 'index'
    },
  },
}
</script>

<style>
div {
  font-family: 'Poppins', 'san-serif';
}
</style>

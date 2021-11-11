<template>
  <div class="flex flex-col md:flex-row bg-red-200" style="height: 68vh">
    <!-- Carousel  -->
    <div class="w-full md:w-1/2 h-1/3 md:h-full">
      <hero-slider />
    </div>
    <!-- Promotions Column  -->
    <div class="w-full md:w-1/2 h-1/3 md:h-full bg-green-300">
      <div class="h-full md:h-1/2 bg-blue-300">
        <promo-card image="slide-image-3">
          <template #subtitle>Sales up to 25% off</template>
          <template #title>Mid Season Sale</template>
        </promo-card>
      </div>
      <div class="h-full md:h-1/2 bg-indigo-300">
        <promo-card image="slide-image">
          <template #subtitle>New Arrival Fall 2018</template>
          <template #title>Autumn Fashion</template>
          <template #action>
            <app-button>Shop Now</app-button>
          </template>
        </promo-card>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSlider from '@/components/home/HeroSlider.vue'
import PromoCard from '@/components/home/PromoCard.vue'
import AppButton from '@/components/base/AppButton.vue'

export default {
  name: 'Banners',

  components: { AppButton, HeroSlider, PromoCard },
}
</script>

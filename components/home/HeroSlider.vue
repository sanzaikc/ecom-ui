<template>
  <Flicking :options="options" :plugins="plugins" class="h-full w-full">
    <div class="relative h-full w-full" v-for="slide in slides">
      <img
        :src="require(`~/assets/${slide.image}.jpg`)"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gray-700 opacity-20"></div>
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="text-white text-center">
          <div class="uppercase md:text-lg font-semibold mb-2">
            {{ slide.subtitle }}
          </div>
          <div class="text-3xl md:text-5xl font-bold mb-4">
            {{ slide.title }}
          </div>
          <app-button>Shop Now</app-button>
        </div>
      </div>
    </div>
    <div slot="viewport" class="flicking-pagination"></div>
  </Flicking>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { AutoPlay, Pagination } from '@egjs/flicking-plugins'

import AppButton from '@/components/base/AppButton.vue'

export default {
  name: 'HeroSlider',

  components: {
    Flicking,
    AppButton,
  },

  data() {
    return {
      options: {
        align: 'prev',
        circular: true,
        duration: 1500,
      },
      plugins: [new AutoPlay(), new Pagination({ type: 'bullet' })],
      slides: [
        {
          title: 'Clothing Trend 2020',
          subtitle: 'Sales 20% off this week',
          image: 'slide-image-2',
        },
        {
          title: 'Lookbook Fashion 2020',
          subtitle: 'Street Life Fasion',
          image: 'slide-image-4',
        },
        {
          title: 'Mid Season Sale',
          subtitle: 'Sales upto 25% off',
          image: 'slide-image-3',
        },
      ],
    }
  },
}
</script>

<style>
@import url('node_modules/@egjs/vue-flicking/dist/flicking.css');
@import url('node_modules/@egjs/flicking-plugins/dist/pagination.css');

.flicking-pagination-bullet {
  height: 1rem;
  width: 1rem;
}

.flicking-pagination-bullet-active {
  background-color: red;
}
</style>

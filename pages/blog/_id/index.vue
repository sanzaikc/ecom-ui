<template>
  <with-product-aside>
    <div class="flex-shrink-0 flex items-center space-x-4 pb-4 text-sm">
      <div class="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
        <img
          src="https://i.pravatar.cc/300"
          alt="Blog Author"
          class="h-full w-full"
        />
      </div>
      <div>John Doe</div>
      <div class="text-gray-500">
        <i class="bx bx-file-blank"></i>
        Blog
      </div>
    </div>
    <div class="blog-preview-image relative">
      <img
        :src="require(`~/assets/blogs/blog-1.jpg`)"
        alt="Blog Thumbail"
        class="h-full w-full object-cover"
      />
      <div
        class="
          h-20
          w-20
          bg-red-500
          absolute
          top-4
          left-4
          md:top-8 md:left-8
          flex flex-col
          justify-center
          items-center
          text-white
          font-medium
        "
      >
        <div class="text-4xl">{{ getDate(new Date()) }}</div>
        <div class="uppercase">{{ getMonth(new Date()) }}</div>
      </div>
    </div>
  </with-product-aside>
</template>

<script>
import WithProductAside from '~/components/WithProductAside.vue'

export default {
  name: 'BlogDetail',

  methods: {
    getDate(date) {
      return date.getDate()
    },
    getMonth(date) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      return monthNames[date.getMonth()].slice(0, 3)
    },
  },
}
</script>

<style></style>

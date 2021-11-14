<template>
  <with-product-aside>
    <blog-preview
      v-for="blog in blogs"
      :key="blog.title"
      :blog="blog"
      class="pb-14 last:pb-0"
    />
  </with-product-aside>
</template>

<script>
import BlogPreview from '~/components/blog/BlogPreview.vue'

export default {
  name: 'Blogs',

  components: { BlogPreview },

  data() {
    return {
      blogs: [
        {
          title: 'Spring sunner fashion trends',
          image: 'blog-1',
          content: '',
        },
        {
          title: 'Current Styling Trend',
          image: 'blog-2',
          content: '',
        },
        {
          title: 'Best fashion trends for women',
          image: 'blog-3',
          content: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
.blog-preview-image {
  height: 590px;
}

@media screen and (max-width: 720px) {
  .blog-preview-image {
    height: 246px;
  }
}
</style>

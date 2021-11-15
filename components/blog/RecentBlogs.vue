<template>
  <div
    class="default-container grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5"
  >
    <s-blog-preview v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import SBlogPreview from './SBlogPreview.vue'

export default {
  name: 'RecentBlogs',

  components: { SBlogPreview },

  computed: {
    ...mapState({
      blogs: (state) => state.blog.allBlogs,
    }),
  },
}
</script>

<style></style>

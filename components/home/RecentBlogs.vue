<template>
  <div class="default-container mb-20">
    <section-header>
      <template #title>Fashion blog</template>
      <template #subtitle>What we see</template>
    </section-header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
      <s-blog-preview v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import SBlogPreview from '~/components/blog/SBlogPreview.vue'
import SectionHeader from './SectionHeader.vue'

export default {
  name: 'RecentBlogs',

  components: { SBlogPreview, SectionHeader },

  computed: {
    ...mapState({
      blogs: (state) => state.blog.allBlogs,
    }),
  },
}
</script>

<style></style>

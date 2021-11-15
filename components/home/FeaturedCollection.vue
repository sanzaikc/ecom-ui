<template>
  <div class="default-container mb-20">
    <div class="grid md:grid-cols-3 gap-8 md:gap-5">
      <collection-preview
        v-for="collection in collections"
        :key="collection.name"
        :collection="collection"
      />
    </div>
  </div>
</template>

<script>
import CollectionPreview from '~/components/collections/CollectionPreview.vue'

export default {
  name: 'FeaturedCollection',

  components: { CollectionPreview },

  data() {
    return {
      collections: [
        {
          category: 'Mini Studded',
          name: 'Ducebag Collection',
          image: 'collection-1',
        },
        {
          category: 'Jaccquard Print',
          name: 'Hairband Collection',
          image: 'collection-2',
        },
        {
          category: 'Special Price',
          name: 'Cordury Culottes',
          image: 'collection-3',
        },
      ],
    }
  },
}
</script>

<style></style>

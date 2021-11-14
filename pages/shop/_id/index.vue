<template>
  <with-product-aside>
    <div
      class="
        flex flex-col
        md:flex-row
        space-y-6
        md:space-y-0
        space-x-0
        md:space-x-6
        pb-16
      "
    >
      <!-- Product Image  -->
      <div class="w-full md:w-1/2 bg-gray-100" style="height: 500px"></div>
      <!-- Product Info  -->
      <div class="w-full md:w-1/2 divide-y">
        <div class="pb-4">
          <div class="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            natus nesciunt quisquam explicabo itaque aut impedit molestias
            perferendis culpa tenetur sint soluta dolores maxime magnam neque
            animi eum, nisi quibusdam veritatis distinctio quod voluptas
            perspiciatis numquam! Quos, repellat deserunt, fugit odit,
            aspernatur laboriosam neque et asperiores eligendi vero tenetur sunt
            quisquam nulla harum provident quaerat eos cum voluptas iusto unde
            ducimus ipsum officia maiores architecto.
          </div>
          <div class="text-4xl font-medium mt-4">$ 0.00</div>
        </div>
        <!-- Add to Cart  -->
        <div class="py-5 flex space-x-2">
          <icon-box>
            <input type="number" class="w-8" value="1" />
          </icon-box>
          <div class="inline-block p-3 bg-black text-white">Add to cart</div>
          <icon-box>
            <i class="bx bx-heart text-xl"></i>
          </icon-box>
          <icon-box>
            <i class="bx bx-refresh text-xl"></i>
          </icon-box>
        </div>

        <div class="py-5">
          <div>
            <span>Categories:</span>
            <span class="text-gray-400">Fashion, SUMMER FASHION</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- Product Description  -->
    <div class="mb-12">
      <div class="border-b mb-6">
        <div class="py-3 border-b-2 border-black inline-block font-medium">
          Description
        </div>
      </div>
      <div class="text-lg text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe
        veritatis quibusdam. Corrupti, debitis cumque! Fuga aut aspernatur
        obcaecati, praesentium adipisci est aliquid repudiandae eveniet
        dignissimos incidunt impedit pariatur harum qui? Laudantium illo quis
        rem quidem cupiditate assumenda vitae, fugit excepturi repudiandae error
        id animi numquam vel nihil eum fugiat possimus, iste magnam expedita
        ipsum. Veniam, mollitia aspernatur? Exercitationem quas aliquam officiis
        cumque autem voluptate, tenetur reprehenderit explicabo consectetur
        maiores iusto eaque quibusdam animi necessitatibus soluta perferendis
        ipsa. Hic cumque rem eos minus error eius. Doloribus quidem dolore fuga
        similique modi odit cupiditate earum blanditiis sapiente, fugit sint,
        numquam officia obcaecati minus dicta iste sed laboriosam error
        voluptatem incidunt eligendi?
      </div>
    </div>
    <!-- Related Products  -->
    <div v-if="relatedProducts.length">
      <div class="text-2xl font-medium mb-8">Related Product</div>
      <div class="grid md:grid-cols-3 gap-8 md:gap-5">
        <v-product-preview
          v-for="product in relatedProducts"
          :key="product.name"
          :product="product"
        />
      </div>
    </div>
  </with-product-aside>
</template>

<script>
import VProductPreview from '@/components/product/VProductPreview.vue'

export default {
  name: 'ProductShow',

  scrollToTop: true,

  components: {
    VProductPreview,
  },

  computed: {
    relatedProducts() {
      return this.$store.getters['product/recentProducts']
    },
  },
}
</script>

<style></style>

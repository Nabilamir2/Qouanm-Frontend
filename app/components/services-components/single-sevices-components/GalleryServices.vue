<template>
  <section class="bg-black py-20 lg:px-15 px-1 ">
    <SwiperGallery :galleryList="gallery" />
  </section>
</template>

<script setup>
import SwiperGallery from '../../main-component/SwiperGallery.vue'

const props = defineProps({
  gallery: {
    type: Array,
    default: () => [],
  },
})
</script>

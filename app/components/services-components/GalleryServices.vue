<template>
  <section class="bg-black py-20 px-15">
    <SwiperGallery :galleryList="gallery" />
  </section>
</template>

<script setup>
import SwiperGallery from '../main-component/SwiperGallery.vue'

const props = defineProps({
  gallery: {
    type: Array,
    default: () => [],
  },
})
</script>

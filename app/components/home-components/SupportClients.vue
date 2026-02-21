<template>
  <section class="bg-black">
    <ClientOnly>
      <div class="clients-swiper-wrapper min-h-[120px]">
        <swiper-container
          v-if="ready"
          :space-between="40"
          :observer="false"
          :observe-parents="false"
          :slides-per-view="7"
          :speed="4000"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="(client, index) in ourClients"
            :key="index"
            class="relative w-[170px] h-full py-[60px]"
          >
            <NuxtImg
              :src="client"
              alt="client"
              class=" w-full h-full object-contain"
            />
          </swiper-slide>
        </swiper-container>
      </div>
      <template #fallback>
        <div class="clients-swiper-wrapper min-h-[120px]" />
      </template>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const ready = ref(false)

defineProps<{
  ourClients?: string[]
}>()


onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ready.value = true
    })
  })
})
</script>

<style scoped>
.swiper-slide {
  height: auto !important;
}

.swiper {
  width: 100%;
}
</style>
